(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~app"],{

/***/ "./node_modules/@wikimedia/jquery.i18n/src/jquery.i18n.js":
/*!****************************************************************!*\
  !*** ./node_modules/@wikimedia/jquery.i18n/src/jquery.i18n.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/*!
 * jQuery Internationalization library
 *
 * Copyright (C) 2012 Santhosh Thottingal
 *
 * jquery.i18n is dual licensed GPLv2 or later and MIT. You don't have to do
 * anything special to choose one license or the other and you don't have to
 * notify anyone which license you are using. You are free to use
 * UniversalLanguageSelector in commercial projects as long as the copyright
 * header is left intact. See files GPL-LICENSE and MIT-LICENSE for details.
 *
 * @licence GNU General Public Licence 2.0 or later
 * @licence MIT License
 */

( function ( $ ) {
	'use strict';

	var I18N,
		slice = Array.prototype.slice;
	/**
	 * @constructor
	 * @param {Object} options
	 */
	I18N = function ( options ) {
		// Load defaults
		this.options = $.extend( {}, I18N.defaults, options );

		this.parser = this.options.parser;
		this.locale = this.options.locale;
		this.messageStore = this.options.messageStore;
		this.languages = {};
	};

	I18N.prototype = {
		/**
		 * Localize a given messageKey to a locale.
		 * @param {string} messageKey
		 * @return {string} Localized message
		 */
		localize: function ( messageKey ) {
			var localeParts, localePartIndex, locale, fallbackIndex,
				tryingLocale, message;

			locale = this.locale;
			fallbackIndex = 0;

			while ( locale ) {
				// Iterate through locales starting at most-specific until
				// localization is found. As in fi-Latn-FI, fi-Latn and fi.
				localeParts = locale.split( '-' );
				localePartIndex = localeParts.length;

				do {
					tryingLocale = localeParts.slice( 0, localePartIndex ).join( '-' );
					message = this.messageStore.get( tryingLocale, messageKey );

					if ( message ) {
						return message;
					}

					localePartIndex--;
				} while ( localePartIndex );

				if ( locale === this.options.fallbackLocale ) {
					break;
				}

				locale = ( $.i18n.fallbacks[ this.locale ] &&
						$.i18n.fallbacks[ this.locale ][ fallbackIndex ] ) ||
						this.options.fallbackLocale;
				$.i18n.log( 'Trying fallback locale for ' + this.locale + ': ' + locale + ' (' + messageKey + ')' );

				fallbackIndex++;
			}

			// key not found
			return '';
		},

		/*
		 * Destroy the i18n instance.
		 */
		destroy: function () {
			$.removeData( document, 'i18n' );
		},

		/**
		 * General message loading API This can take a URL string for
		 * the json formatted messages. Example:
		 * <code>load('path/to/all_localizations.json');</code>
		 *
		 * To load a localization file for a locale:
		 * <code>
		 * load('path/to/de-messages.json', 'de' );
		 * </code>
		 *
		 * To load a localization file from a directory:
		 * <code>
		 * load('path/to/i18n/directory', 'de' );
		 * </code>
		 * The above method has the advantage of fallback resolution.
		 * ie, it will automatically load the fallback locales for de.
		 * For most usecases, this is the recommended method.
		 * It is optional to have trailing slash at end.
		 *
		 * A data object containing message key- message translation mappings
		 * can also be passed. Example:
		 * <code>
		 * load( { 'hello' : 'Hello' }, optionalLocale );
		 * </code>
		 *
		 * A source map containing key-value pair of languagename and locations
		 * can also be passed. Example:
		 * <code>
		 * load( {
		 * bn: 'i18n/bn.json',
		 * he: 'i18n/he.json',
		 * en: 'i18n/en.json'
		 * } )
		 * </code>
		 *
		 * If the data argument is null/undefined/false,
		 * all cached messages for the i18n instance will get reset.
		 *
		 * @param {string|Object} source
		 * @param {string} locale Language tag
		 * @return {jQuery.Promise}
		 */
		load: function ( source, locale ) {
			var fallbackLocales, locIndex, fallbackLocale, sourceMap = {};
			if ( !source && !locale ) {
				source = 'i18n/' + $.i18n().locale + '.json';
				locale = $.i18n().locale;
			}
			if ( typeof source === 'string' &&
				// source extension should be json, but can have query params after that.
				source.split( '?' )[ 0 ].split( '.' ).pop() !== 'json'
			) {
				// Load specified locale then check for fallbacks when directory is
				// specified in load()
				sourceMap[ locale ] = source + '/' + locale + '.json';
				fallbackLocales = ( $.i18n.fallbacks[ locale ] || [] )
					.concat( this.options.fallbackLocale );
				for ( locIndex = 0; locIndex < fallbackLocales.length; locIndex++ ) {
					fallbackLocale = fallbackLocales[ locIndex ];
					sourceMap[ fallbackLocale ] = source + '/' + fallbackLocale + '.json';
				}
				return this.load( sourceMap );
			} else {
				return this.messageStore.load( source, locale );
			}

		},

		/**
		 * Does parameter and magic word substitution.
		 *
		 * @param {string} key Message key
		 * @param {Array} parameters Message parameters
		 * @return {string}
		 */
		parse: function ( key, parameters ) {
			var message = this.localize( key );
			// FIXME: This changes the state of the I18N object,
			// should probably not change the 'this.parser' but just
			// pass it to the parser.
			this.parser.language = $.i18n.languages[ $.i18n().locale ] || $.i18n.languages[ 'default' ];
			if ( message === '' ) {
				message = key;
			}
			return this.parser.parse( message, parameters );
		}
	};

	/**
	 * Process a message from the $.I18N instance
	 * for the current document, stored in jQuery.data(document).
	 *
	 * @param {string} key Key of the message.
	 * @param {string} param1 [param...] Variadic list of parameters for {key}.
	 * @return {string|$.I18N} Parsed message, or if no key was given
	 * the instance of $.I18N is returned.
	 */
	$.i18n = function ( key, param1 ) {
		var parameters,
			i18n = $.data( document, 'i18n' ),
			options = typeof key === 'object' && key;

		// If the locale option for this call is different then the setup so far,
		// update it automatically. This doesn't just change the context for this
		// call but for all future call as well.
		// If there is no i18n setup yet, don't do this. It will be taken care of
		// by the `new I18N` construction below.
		// NOTE: It should only change language for this one call.
		// Then cache instances of I18N somewhere.
		if ( options && options.locale && i18n && i18n.locale !== options.locale ) {
			i18n.locale = options.locale;
		}

		if ( !i18n ) {
			i18n = new I18N( options );
			$.data( document, 'i18n', i18n );
		}

		if ( typeof key === 'string' ) {
			if ( param1 !== undefined ) {
				parameters = slice.call( arguments, 1 );
			} else {
				parameters = [];
			}

			return i18n.parse( key, parameters );
		} else {
			// FIXME: remove this feature/bug.
			return i18n;
		}
	};

	$.fn.i18n = function () {
		var i18n = $.data( document, 'i18n' );

		if ( !i18n ) {
			i18n = new I18N();
			$.data( document, 'i18n', i18n );
		}

		return this.each( function () {
			var $this = $( this ),
				messageKey = $this.data( 'i18n' ),
				lBracket, rBracket, type, key;

			if ( messageKey ) {
				lBracket = messageKey.indexOf( '[' );
				rBracket = messageKey.indexOf( ']' );
				if ( lBracket !== -1 && rBracket !== -1 && lBracket < rBracket ) {
					type = messageKey.slice( lBracket + 1, rBracket );
					key = messageKey.slice( rBracket + 1 );
					if ( type === 'html' ) {
						$this.html( i18n.parse( key ) );
					} else {
						$this.attr( type, i18n.parse( key ) );
					}
				} else {
					$this.text( i18n.parse( messageKey ) );
				}
			} else {
				$this.find( '[data-i18n]' ).i18n();
			}
		} );
	};

	function getDefaultLocale() {
		var locale = $( 'html' ).attr( 'lang' );
		if ( !locale ) {
			locale = navigator.language || navigator.userLanguage || '';
		}
		return locale;
	}

	$.i18n.languages = {};
	$.i18n.messageStore = $.i18n.messageStore || {};
	$.i18n.parser = {
		// The default parser only handles variable substitution
		parse: function ( message, parameters ) {
			return message.replace( /\$(\d+)/g, function ( str, match ) {
				var index = parseInt( match, 10 ) - 1;
				return parameters[ index ] !== undefined ? parameters[ index ] : '$' + match;
			} );
		},
		emitter: {}
	};
	$.i18n.fallbacks = {};
	$.i18n.debug = false;
	$.i18n.log = function ( /* arguments */ ) {
		if ( window.console && $.i18n.debug ) {
			window.console.log.apply( window.console, arguments );
		}
	};
	/* Static members */
	I18N.defaults = {
		locale: getDefaultLocale(),
		fallbackLocale: 'en',
		parser: $.i18n.parser,
		messageStore: $.i18n.messageStore
	};

	// Expose constructor
	$.i18n.constructor = I18N;
}( jQuery ) );

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/@wikimedia/jquery.i18n/src/jquery.i18n.messagestore.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@wikimedia/jquery.i18n/src/jquery.i18n.messagestore.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/*!
 * jQuery Internationalization library - Message Store
 *
 * Copyright (C) 2012 Santhosh Thottingal
 *
 * jquery.i18n is dual licensed GPLv2 or later and MIT. You don't have to do anything special to
 * choose one license or the other and you don't have to notify anyone which license you are using.
 * You are free to use UniversalLanguageSelector in commercial projects as long as the copyright
 * header is left intact. See files GPL-LICENSE and MIT-LICENSE for details.
 *
 * @licence GNU General Public Licence 2.0 or later
 * @licence MIT License
 */

( function ( $ ) {
	'use strict';

	var MessageStore = function () {
		this.messages = {};
		this.sources = {};
	};

	function jsonMessageLoader( url ) {
		var deferred = $.Deferred();

		$.getJSON( url )
			.done( deferred.resolve )
			.fail( function ( jqxhr, settings, exception ) {
				$.i18n.log( 'Error in loading messages from ' + url + ' Exception: ' + exception );
				// Ignore 404 exception, because we are handling fallabacks explicitly
				deferred.resolve();
			} );

		return deferred.promise();
	}

	/**
	 * See https://github.com/wikimedia/jquery.i18n/wiki/Specification#wiki-Message_File_Loading
	 */
	MessageStore.prototype = {

		/**
		 * General message loading API This can take a URL string for
		 * the json formatted messages.
		 * <code>load('path/to/all_localizations.json');</code>
		 *
		 * This can also load a localization file for a locale <code>
		 * load( 'path/to/de-messages.json', 'de' );
		 * </code>
		 * A data object containing message key- message translation mappings
		 * can also be passed Eg:
		 * <code>
		 * load( { 'hello' : 'Hello' }, optionalLocale );
		 * </code> If the data argument is
		 * null/undefined/false,
		 * all cached messages for the i18n instance will get reset.
		 *
		 * @param {string|Object} source
		 * @param {string} locale Language tag
		 * @return {jQuery.Promise}
		 */
		load: function ( source, locale ) {
			var key = null,
				deferreds = [],
				messageStore = this;

			if ( typeof source === 'string' ) {
				// This is a URL to the messages file.
				$.i18n.log( 'Loading messages from: ' + source );
				return jsonMessageLoader( source )
					.then( function ( localization ) {
						return messageStore.load( localization, locale );
					} );
			}

			if ( locale ) {
				// source is an key-value pair of messages for given locale
				messageStore.set( locale, source );

				return $.Deferred().resolve();
			} else {
				// source is a key-value pair of locales and their source
				for ( key in source ) {
					if ( Object.prototype.hasOwnProperty.call( source, key ) ) {
						locale = key;
						// No {locale} given, assume data is a group of languages,
						// call this function again for each language.
						deferreds.push( messageStore.load( source[ key ], locale ) );
					}
				}
				return $.when.apply( $, deferreds );
			}

		},

		/**
		 * Set messages to the given locale.
		 * If locale exists, add messages to the locale.
		 *
		 * @param {string} locale
		 * @param {Object} messages
		 */
		set: function ( locale, messages ) {
			if ( !this.messages[ locale ] ) {
				this.messages[ locale ] = messages;
			} else {
				this.messages[ locale ] = $.extend( this.messages[ locale ], messages );
			}
		},

		/**
		 *
		 * @param {string} locale
		 * @param {string} messageKey
		 * @return {boolean}
		 */
		get: function ( locale, messageKey ) {
			return this.messages[ locale ] && this.messages[ locale ][ messageKey ];
		}
	};

	$.extend( $.i18n.messageStore, new MessageStore() );
}( jQuery ) );

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.js":
/*!***************************************************************************!*\
  !*** ./node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Datepicker for Bootstrap v1.9.0 (https://github.com/uxsolutions/bootstrap-datepicker)
 *
 * Licensed under the Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0)
 */

(function(factory){
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}(function($, undefined){
	function UTCDate(){
		return new Date(Date.UTC.apply(Date, arguments));
	}
	function UTCToday(){
		var today = new Date();
		return UTCDate(today.getFullYear(), today.getMonth(), today.getDate());
	}
	function isUTCEquals(date1, date2) {
		return (
			date1.getUTCFullYear() === date2.getUTCFullYear() &&
			date1.getUTCMonth() === date2.getUTCMonth() &&
			date1.getUTCDate() === date2.getUTCDate()
		);
	}
	function alias(method, deprecationMsg){
		return function(){
			if (deprecationMsg !== undefined) {
				$.fn.datepicker.deprecated(deprecationMsg);
			}

			return this[method].apply(this, arguments);
		};
	}
	function isValidDate(d) {
		return d && !isNaN(d.getTime());
	}

	var DateArray = (function(){
		var extras = {
			get: function(i){
				return this.slice(i)[0];
			},
			contains: function(d){
				// Array.indexOf is not cross-browser;
				// $.inArray doesn't work with Dates
				var val = d && d.valueOf();
				for (var i=0, l=this.length; i < l; i++)
          // Use date arithmetic to allow dates with different times to match
          if (0 <= this[i].valueOf() - val && this[i].valueOf() - val < 1000*60*60*24)
						return i;
				return -1;
			},
			remove: function(i){
				this.splice(i,1);
			},
			replace: function(new_array){
				if (!new_array)
					return;
				if (!$.isArray(new_array))
					new_array = [new_array];
				this.clear();
				this.push.apply(this, new_array);
			},
			clear: function(){
				this.length = 0;
			},
			copy: function(){
				var a = new DateArray();
				a.replace(this);
				return a;
			}
		};

		return function(){
			var a = [];
			a.push.apply(a, arguments);
			$.extend(a, extras);
			return a;
		};
	})();


	// Picker object

	var Datepicker = function(element, options){
		$.data(element, 'datepicker', this);

		this._events = [];
		this._secondaryEvents = [];

		this._process_options(options);

		this.dates = new DateArray();
		this.viewDate = this.o.defaultViewDate;
		this.focusDate = null;

		this.element = $(element);
		this.isInput = this.element.is('input');
		this.inputField = this.isInput ? this.element : this.element.find('input');
		this.component = this.element.hasClass('date') ? this.element.find('.add-on, .input-group-addon, .input-group-append, .input-group-prepend, .btn') : false;
		if (this.component && this.component.length === 0)
			this.component = false;
		this.isInline = !this.component && this.element.is('div');

		this.picker = $(DPGlobal.template);

		// Checking templates and inserting
		if (this._check_template(this.o.templates.leftArrow)) {
			this.picker.find('.prev').html(this.o.templates.leftArrow);
		}

		if (this._check_template(this.o.templates.rightArrow)) {
			this.picker.find('.next').html(this.o.templates.rightArrow);
		}

		this._buildEvents();
		this._attachEvents();

		if (this.isInline){
			this.picker.addClass('datepicker-inline').appendTo(this.element);
		}
		else {
			this.picker.addClass('datepicker-dropdown dropdown-menu');
		}

		if (this.o.rtl){
			this.picker.addClass('datepicker-rtl');
		}

		if (this.o.calendarWeeks) {
			this.picker.find('.datepicker-days .datepicker-switch, thead .datepicker-title, tfoot .today, tfoot .clear')
				.attr('colspan', function(i, val){
					return Number(val) + 1;
				});
		}

		this._process_options({
			startDate: this._o.startDate,
			endDate: this._o.endDate,
			daysOfWeekDisabled: this.o.daysOfWeekDisabled,
			daysOfWeekHighlighted: this.o.daysOfWeekHighlighted,
			datesDisabled: this.o.datesDisabled
		});

		this._allow_update = false;
		this.setViewMode(this.o.startView);
		this._allow_update = true;

		this.fillDow();
		this.fillMonths();

		this.update();

		if (this.isInline){
			this.show();
		}
	};

	Datepicker.prototype = {
		constructor: Datepicker,

		_resolveViewName: function(view){
			$.each(DPGlobal.viewModes, function(i, viewMode){
				if (view === i || $.inArray(view, viewMode.names) !== -1){
					view = i;
					return false;
				}
			});

			return view;
		},

		_resolveDaysOfWeek: function(daysOfWeek){
			if (!$.isArray(daysOfWeek))
				daysOfWeek = daysOfWeek.split(/[,\s]*/);
			return $.map(daysOfWeek, Number);
		},

		_check_template: function(tmp){
			try {
				// If empty
				if (tmp === undefined || tmp === "") {
					return false;
				}
				// If no html, everything ok
				if ((tmp.match(/[<>]/g) || []).length <= 0) {
					return true;
				}
				// Checking if html is fine
				var jDom = $(tmp);
				return jDom.length > 0;
			}
			catch (ex) {
				return false;
			}
		},

		_process_options: function(opts){
			// Store raw options for reference
			this._o = $.extend({}, this._o, opts);
			// Processed options
			var o = this.o = $.extend({}, this._o);

			// Check if "de-DE" style date is available, if not language should
			// fallback to 2 letter code eg "de"
			var lang = o.language;
			if (!dates[lang]){
				lang = lang.split('-')[0];
				if (!dates[lang])
					lang = defaults.language;
			}
			o.language = lang;

			// Retrieve view index from any aliases
			o.startView = this._resolveViewName(o.startView);
			o.minViewMode = this._resolveViewName(o.minViewMode);
			o.maxViewMode = this._resolveViewName(o.maxViewMode);

			// Check view is between min and max
			o.startView = Math.max(this.o.minViewMode, Math.min(this.o.maxViewMode, o.startView));

			// true, false, or Number > 0
			if (o.multidate !== true){
				o.multidate = Number(o.multidate) || false;
				if (o.multidate !== false)
					o.multidate = Math.max(0, o.multidate);
			}
			o.multidateSeparator = String(o.multidateSeparator);

			o.weekStart %= 7;
			o.weekEnd = (o.weekStart + 6) % 7;

			var format = DPGlobal.parseFormat(o.format);
			if (o.startDate !== -Infinity){
				if (!!o.startDate){
					if (o.startDate instanceof Date)
						o.startDate = this._local_to_utc(this._zero_time(o.startDate));
					else
						o.startDate = DPGlobal.parseDate(o.startDate, format, o.language, o.assumeNearbyYear);
				}
				else {
					o.startDate = -Infinity;
				}
			}
			if (o.endDate !== Infinity){
				if (!!o.endDate){
					if (o.endDate instanceof Date)
						o.endDate = this._local_to_utc(this._zero_time(o.endDate));
					else
						o.endDate = DPGlobal.parseDate(o.endDate, format, o.language, o.assumeNearbyYear);
				}
				else {
					o.endDate = Infinity;
				}
			}

			o.daysOfWeekDisabled = this._resolveDaysOfWeek(o.daysOfWeekDisabled||[]);
			o.daysOfWeekHighlighted = this._resolveDaysOfWeek(o.daysOfWeekHighlighted||[]);

			o.datesDisabled = o.datesDisabled||[];
			if (!$.isArray(o.datesDisabled)) {
				o.datesDisabled = o.datesDisabled.split(',');
			}
			o.datesDisabled = $.map(o.datesDisabled, function(d){
				return DPGlobal.parseDate(d, format, o.language, o.assumeNearbyYear);
			});

			var plc = String(o.orientation).toLowerCase().split(/\s+/g),
				_plc = o.orientation.toLowerCase();
			plc = $.grep(plc, function(word){
				return /^auto|left|right|top|bottom$/.test(word);
			});
			o.orientation = {x: 'auto', y: 'auto'};
			if (!_plc || _plc === 'auto')
				; // no action
			else if (plc.length === 1){
				switch (plc[0]){
					case 'top':
					case 'bottom':
						o.orientation.y = plc[0];
						break;
					case 'left':
					case 'right':
						o.orientation.x = plc[0];
						break;
				}
			}
			else {
				_plc = $.grep(plc, function(word){
					return /^left|right$/.test(word);
				});
				o.orientation.x = _plc[0] || 'auto';

				_plc = $.grep(plc, function(word){
					return /^top|bottom$/.test(word);
				});
				o.orientation.y = _plc[0] || 'auto';
			}
			if (o.defaultViewDate instanceof Date || typeof o.defaultViewDate === 'string') {
				o.defaultViewDate = DPGlobal.parseDate(o.defaultViewDate, format, o.language, o.assumeNearbyYear);
			} else if (o.defaultViewDate) {
				var year = o.defaultViewDate.year || new Date().getFullYear();
				var month = o.defaultViewDate.month || 0;
				var day = o.defaultViewDate.day || 1;
				o.defaultViewDate = UTCDate(year, month, day);
			} else {
				o.defaultViewDate = UTCToday();
			}
		},
		_applyEvents: function(evs){
			for (var i=0, el, ch, ev; i < evs.length; i++){
				el = evs[i][0];
				if (evs[i].length === 2){
					ch = undefined;
					ev = evs[i][1];
				} else if (evs[i].length === 3){
					ch = evs[i][1];
					ev = evs[i][2];
				}
				el.on(ev, ch);
			}
		},
		_unapplyEvents: function(evs){
			for (var i=0, el, ev, ch; i < evs.length; i++){
				el = evs[i][0];
				if (evs[i].length === 2){
					ch = undefined;
					ev = evs[i][1];
				} else if (evs[i].length === 3){
					ch = evs[i][1];
					ev = evs[i][2];
				}
				el.off(ev, ch);
			}
		},
		_buildEvents: function(){
            var events = {
                keyup: $.proxy(function(e){
                    if ($.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) === -1)
                        this.update();
                }, this),
                keydown: $.proxy(this.keydown, this),
                paste: $.proxy(this.paste, this)
            };

            if (this.o.showOnFocus === true) {
                events.focus = $.proxy(this.show, this);
            }

            if (this.isInput) { // single input
                this._events = [
                    [this.element, events]
                ];
            }
            // component: input + button
            else if (this.component && this.inputField.length) {
                this._events = [
                    // For components that are not readonly, allow keyboard nav
                    [this.inputField, events],
                    [this.component, {
                        click: $.proxy(this.show, this)
                    }]
                ];
            }
			else {
				this._events = [
					[this.element, {
						click: $.proxy(this.show, this),
						keydown: $.proxy(this.keydown, this)
					}]
				];
			}
			this._events.push(
				// Component: listen for blur on element descendants
				[this.element, '*', {
					blur: $.proxy(function(e){
						this._focused_from = e.target;
					}, this)
				}],
				// Input: listen for blur on element
				[this.element, {
					blur: $.proxy(function(e){
						this._focused_from = e.target;
					}, this)
				}]
			);

			if (this.o.immediateUpdates) {
				// Trigger input updates immediately on changed year/month
				this._events.push([this.element, {
					'changeYear changeMonth': $.proxy(function(e){
						this.update(e.date);
					}, this)
				}]);
			}

			this._secondaryEvents = [
				[this.picker, {
					click: $.proxy(this.click, this)
				}],
				[this.picker, '.prev, .next', {
					click: $.proxy(this.navArrowsClick, this)
				}],
				[this.picker, '.day:not(.disabled)', {
					click: $.proxy(this.dayCellClick, this)
				}],
				[$(window), {
					resize: $.proxy(this.place, this)
				}],
				[$(document), {
					'mousedown touchstart': $.proxy(function(e){
						// Clicked outside the datepicker, hide it
						if (!(
							this.element.is(e.target) ||
							this.element.find(e.target).length ||
							this.picker.is(e.target) ||
							this.picker.find(e.target).length ||
							this.isInline
						)){
							this.hide();
						}
					}, this)
				}]
			];
		},
		_attachEvents: function(){
			this._detachEvents();
			this._applyEvents(this._events);
		},
		_detachEvents: function(){
			this._unapplyEvents(this._events);
		},
		_attachSecondaryEvents: function(){
			this._detachSecondaryEvents();
			this._applyEvents(this._secondaryEvents);
		},
		_detachSecondaryEvents: function(){
			this._unapplyEvents(this._secondaryEvents);
		},
		_trigger: function(event, altdate){
			var date = altdate || this.dates.get(-1),
				local_date = this._utc_to_local(date);

			this.element.trigger({
				type: event,
				date: local_date,
				viewMode: this.viewMode,
				dates: $.map(this.dates, this._utc_to_local),
				format: $.proxy(function(ix, format){
					if (arguments.length === 0){
						ix = this.dates.length - 1;
						format = this.o.format;
					} else if (typeof ix === 'string'){
						format = ix;
						ix = this.dates.length - 1;
					}
					format = format || this.o.format;
					var date = this.dates.get(ix);
					return DPGlobal.formatDate(date, format, this.o.language);
				}, this)
			});
		},

		show: function(){
			if (this.inputField.is(':disabled') || (this.inputField.prop('readonly') && this.o.enableOnReadonly === false))
				return;
			if (!this.isInline)
				this.picker.appendTo(this.o.container);
			this.place();
			this.picker.show();
			this._attachSecondaryEvents();
			this._trigger('show');
			if ((window.navigator.msMaxTouchPoints || 'ontouchstart' in document) && this.o.disableTouchKeyboard) {
				$(this.element).blur();
			}
			return this;
		},

		hide: function(){
			if (this.isInline || !this.picker.is(':visible'))
				return this;
			this.focusDate = null;
			this.picker.hide().detach();
			this._detachSecondaryEvents();
			this.setViewMode(this.o.startView);

			if (this.o.forceParse && this.inputField.val())
				this.setValue();
			this._trigger('hide');
			return this;
		},

		destroy: function(){
			this.hide();
			this._detachEvents();
			this._detachSecondaryEvents();
			this.picker.remove();
			delete this.element.data().datepicker;
			if (!this.isInput){
				delete this.element.data().date;
			}
			return this;
		},

		paste: function(e){
			var dateString;
			if (e.originalEvent.clipboardData && e.originalEvent.clipboardData.types
				&& $.inArray('text/plain', e.originalEvent.clipboardData.types) !== -1) {
				dateString = e.originalEvent.clipboardData.getData('text/plain');
			} else if (window.clipboardData) {
				dateString = window.clipboardData.getData('Text');
			} else {
				return;
			}
			this.setDate(dateString);
			this.update();
			e.preventDefault();
		},

		_utc_to_local: function(utc){
			if (!utc) {
				return utc;
			}

			var local = new Date(utc.getTime() + (utc.getTimezoneOffset() * 60000));

			if (local.getTimezoneOffset() !== utc.getTimezoneOffset()) {
				local = new Date(utc.getTime() + (local.getTimezoneOffset() * 60000));
			}

			return local;
		},
		_local_to_utc: function(local){
			return local && new Date(local.getTime() - (local.getTimezoneOffset()*60000));
		},
		_zero_time: function(local){
			return local && new Date(local.getFullYear(), local.getMonth(), local.getDate());
		},
		_zero_utc_time: function(utc){
			return utc && UTCDate(utc.getUTCFullYear(), utc.getUTCMonth(), utc.getUTCDate());
		},

		getDates: function(){
			return $.map(this.dates, this._utc_to_local);
		},

		getUTCDates: function(){
			return $.map(this.dates, function(d){
				return new Date(d);
			});
		},

		getDate: function(){
			return this._utc_to_local(this.getUTCDate());
		},

		getUTCDate: function(){
			var selected_date = this.dates.get(-1);
			if (selected_date !== undefined) {
				return new Date(selected_date);
			} else {
				return null;
			}
		},

		clearDates: function(){
			this.inputField.val('');
			this.update();
			this._trigger('changeDate');

			if (this.o.autoclose) {
				this.hide();
			}
		},

		setDates: function(){
			var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
			this.update.apply(this, args);
			this._trigger('changeDate');
			this.setValue();
			return this;
		},

		setUTCDates: function(){
			var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
			this.setDates.apply(this, $.map(args, this._utc_to_local));
			return this;
		},

		setDate: alias('setDates'),
		setUTCDate: alias('setUTCDates'),
		remove: alias('destroy', 'Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead'),

		setValue: function(){
			var formatted = this.getFormattedDate();
			this.inputField.val(formatted);
			return this;
		},

		getFormattedDate: function(format){
			if (format === undefined)
				format = this.o.format;

			var lang = this.o.language;
			return $.map(this.dates, function(d){
				return DPGlobal.formatDate(d, format, lang);
			}).join(this.o.multidateSeparator);
		},

		getStartDate: function(){
			return this.o.startDate;
		},

		setStartDate: function(startDate){
			this._process_options({startDate: startDate});
			this.update();
			this.updateNavArrows();
			return this;
		},

		getEndDate: function(){
			return this.o.endDate;
		},

		setEndDate: function(endDate){
			this._process_options({endDate: endDate});
			this.update();
			this.updateNavArrows();
			return this;
		},

		setDaysOfWeekDisabled: function(daysOfWeekDisabled){
			this._process_options({daysOfWeekDisabled: daysOfWeekDisabled});
			this.update();
			return this;
		},

		setDaysOfWeekHighlighted: function(daysOfWeekHighlighted){
			this._process_options({daysOfWeekHighlighted: daysOfWeekHighlighted});
			this.update();
			return this;
		},

		setDatesDisabled: function(datesDisabled){
			this._process_options({datesDisabled: datesDisabled});
			this.update();
			return this;
		},

		place: function(){
			if (this.isInline)
				return this;
			var calendarWidth = this.picker.outerWidth(),
				calendarHeight = this.picker.outerHeight(),
				visualPadding = 10,
				container = $(this.o.container),
				windowWidth = container.width(),
				scrollTop = this.o.container === 'body' ? $(document).scrollTop() : container.scrollTop(),
				appendOffset = container.offset();

			var parentsZindex = [0];
			this.element.parents().each(function(){
				var itemZIndex = $(this).css('z-index');
				if (itemZIndex !== 'auto' && Number(itemZIndex) !== 0) parentsZindex.push(Number(itemZIndex));
			});
			var zIndex = Math.max.apply(Math, parentsZindex) + this.o.zIndexOffset;
			var offset = this.component ? this.component.parent().offset() : this.element.offset();
			var height = this.component ? this.component.outerHeight(true) : this.element.outerHeight(false);
			var width = this.component ? this.component.outerWidth(true) : this.element.outerWidth(false);
			var left = offset.left - appendOffset.left;
			var top = offset.top - appendOffset.top;

			if (this.o.container !== 'body') {
				top += scrollTop;
			}

			this.picker.removeClass(
				'datepicker-orient-top datepicker-orient-bottom '+
				'datepicker-orient-right datepicker-orient-left'
			);

			if (this.o.orientation.x !== 'auto'){
				this.picker.addClass('datepicker-orient-' + this.o.orientation.x);
				if (this.o.orientation.x === 'right')
					left -= calendarWidth - width;
			}
			// auto x orientation is best-placement: if it crosses a window
			// edge, fudge it sideways
			else {
				if (offset.left < 0) {
					// component is outside the window on the left side. Move it into visible range
					this.picker.addClass('datepicker-orient-left');
					left -= offset.left - visualPadding;
				} else if (left + calendarWidth > windowWidth) {
					// the calendar passes the widow right edge. Align it to component right side
					this.picker.addClass('datepicker-orient-right');
					left += width - calendarWidth;
				} else {
					if (this.o.rtl) {
						// Default to right
						this.picker.addClass('datepicker-orient-right');
					} else {
						// Default to left
						this.picker.addClass('datepicker-orient-left');
					}
				}
			}

			// auto y orientation is best-situation: top or bottom, no fudging,
			// decision based on which shows more of the calendar
			var yorient = this.o.orientation.y,
				top_overflow;
			if (yorient === 'auto'){
				top_overflow = -scrollTop + top - calendarHeight;
				yorient = top_overflow < 0 ? 'bottom' : 'top';
			}

			this.picker.addClass('datepicker-orient-' + yorient);
			if (yorient === 'top')
				top -= calendarHeight + parseInt(this.picker.css('padding-top'));
			else
				top += height;

			if (this.o.rtl) {
				var right = windowWidth - (left + width);
				this.picker.css({
					top: top,
					right: right,
					zIndex: zIndex
				});
			} else {
				this.picker.css({
					top: top,
					left: left,
					zIndex: zIndex
				});
			}
			return this;
		},

		_allow_update: true,
		update: function(){
			if (!this._allow_update)
				return this;

			var oldDates = this.dates.copy(),
				dates = [],
				fromArgs = false;
			if (arguments.length){
				$.each(arguments, $.proxy(function(i, date){
					if (date instanceof Date)
						date = this._local_to_utc(date);
					dates.push(date);
				}, this));
				fromArgs = true;
			} else {
				dates = this.isInput
						? this.element.val()
						: this.element.data('date') || this.inputField.val();
				if (dates && this.o.multidate)
					dates = dates.split(this.o.multidateSeparator);
				else
					dates = [dates];
				delete this.element.data().date;
			}

			dates = $.map(dates, $.proxy(function(date){
				return DPGlobal.parseDate(date, this.o.format, this.o.language, this.o.assumeNearbyYear);
			}, this));
			dates = $.grep(dates, $.proxy(function(date){
				return (
					!this.dateWithinRange(date) ||
					!date
				);
			}, this), true);
			this.dates.replace(dates);

			if (this.o.updateViewDate) {
				if (this.dates.length)
					this.viewDate = new Date(this.dates.get(-1));
				else if (this.viewDate < this.o.startDate)
					this.viewDate = new Date(this.o.startDate);
				else if (this.viewDate > this.o.endDate)
					this.viewDate = new Date(this.o.endDate);
				else
					this.viewDate = this.o.defaultViewDate;
			}

			if (fromArgs){
				// setting date by clicking
				this.setValue();
				this.element.change();
			}
			else if (this.dates.length){
				// setting date by typing
				if (String(oldDates) !== String(this.dates) && fromArgs) {
					this._trigger('changeDate');
					this.element.change();
				}
			}
			if (!this.dates.length && oldDates.length) {
				this._trigger('clearDate');
				this.element.change();
			}

			this.fill();
			return this;
		},

		fillDow: function(){
      if (this.o.showWeekDays) {
			var dowCnt = this.o.weekStart,
				html = '<tr>';
			if (this.o.calendarWeeks){
				html += '<th class="cw">&#160;</th>';
			}
			while (dowCnt < this.o.weekStart + 7){
				html += '<th class="dow';
        if ($.inArray(dowCnt, this.o.daysOfWeekDisabled) !== -1)
          html += ' disabled';
        html += '">'+dates[this.o.language].daysMin[(dowCnt++)%7]+'</th>';
			}
			html += '</tr>';
			this.picker.find('.datepicker-days thead').append(html);
      }
		},

		fillMonths: function(){
      var localDate = this._utc_to_local(this.viewDate);
			var html = '';
			var focused;
			for (var i = 0; i < 12; i++){
				focused = localDate && localDate.getMonth() === i ? ' focused' : '';
				html += '<span class="month' + focused + '">' + dates[this.o.language].monthsShort[i] + '</span>';
			}
			this.picker.find('.datepicker-months td').html(html);
		},

		setRange: function(range){
			if (!range || !range.length)
				delete this.range;
			else
				this.range = $.map(range, function(d){
					return d.valueOf();
				});
			this.fill();
		},

		getClassNames: function(date){
			var cls = [],
				year = this.viewDate.getUTCFullYear(),
				month = this.viewDate.getUTCMonth(),
				today = UTCToday();
			if (date.getUTCFullYear() < year || (date.getUTCFullYear() === year && date.getUTCMonth() < month)){
				cls.push('old');
			} else if (date.getUTCFullYear() > year || (date.getUTCFullYear() === year && date.getUTCMonth() > month)){
				cls.push('new');
			}
			if (this.focusDate && date.valueOf() === this.focusDate.valueOf())
				cls.push('focused');
			// Compare internal UTC date with UTC today, not local today
			if (this.o.todayHighlight && isUTCEquals(date, today)) {
				cls.push('today');
			}
			if (this.dates.contains(date) !== -1)
				cls.push('active');
			if (!this.dateWithinRange(date)){
				cls.push('disabled');
			}
			if (this.dateIsDisabled(date)){
				cls.push('disabled', 'disabled-date');
			}
			if ($.inArray(date.getUTCDay(), this.o.daysOfWeekHighlighted) !== -1){
				cls.push('highlighted');
			}

			if (this.range){
				if (date > this.range[0] && date < this.range[this.range.length-1]){
					cls.push('range');
				}
				if ($.inArray(date.valueOf(), this.range) !== -1){
					cls.push('selected');
				}
				if (date.valueOf() === this.range[0]){
          cls.push('range-start');
        }
        if (date.valueOf() === this.range[this.range.length-1]){
          cls.push('range-end');
        }
			}
			return cls;
		},

		_fill_yearsView: function(selector, cssClass, factor, year, startYear, endYear, beforeFn){
			var html = '';
			var step = factor / 10;
			var view = this.picker.find(selector);
			var startVal = Math.floor(year / factor) * factor;
			var endVal = startVal + step * 9;
			var focusedVal = Math.floor(this.viewDate.getFullYear() / step) * step;
			var selected = $.map(this.dates, function(d){
				return Math.floor(d.getUTCFullYear() / step) * step;
			});

			var classes, tooltip, before;
			for (var currVal = startVal - step; currVal <= endVal + step; currVal += step) {
				classes = [cssClass];
				tooltip = null;

				if (currVal === startVal - step) {
					classes.push('old');
				} else if (currVal === endVal + step) {
					classes.push('new');
				}
				if ($.inArray(currVal, selected) !== -1) {
					classes.push('active');
				}
				if (currVal < startYear || currVal > endYear) {
					classes.push('disabled');
				}
				if (currVal === focusedVal) {
				  classes.push('focused');
        }

				if (beforeFn !== $.noop) {
					before = beforeFn(new Date(currVal, 0, 1));
					if (before === undefined) {
						before = {};
					} else if (typeof before === 'boolean') {
						before = {enabled: before};
					} else if (typeof before === 'string') {
						before = {classes: before};
					}
					if (before.enabled === false) {
						classes.push('disabled');
					}
					if (before.classes) {
						classes = classes.concat(before.classes.split(/\s+/));
					}
					if (before.tooltip) {
						tooltip = before.tooltip;
					}
				}

				html += '<span class="' + classes.join(' ') + '"' + (tooltip ? ' title="' + tooltip + '"' : '') + '>' + currVal + '</span>';
			}

			view.find('.datepicker-switch').text(startVal + '-' + endVal);
			view.find('td').html(html);
		},

		fill: function(){
			var d = new Date(this.viewDate),
				year = d.getUTCFullYear(),
				month = d.getUTCMonth(),
				startYear = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity,
				startMonth = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity,
				endYear = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity,
				endMonth = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity,
				todaytxt = dates[this.o.language].today || dates['en'].today || '',
				cleartxt = dates[this.o.language].clear || dates['en'].clear || '',
        titleFormat = dates[this.o.language].titleFormat || dates['en'].titleFormat,
        todayDate = UTCToday(),
        titleBtnVisible = (this.o.todayBtn === true || this.o.todayBtn === 'linked') && todayDate >= this.o.startDate && todayDate <= this.o.endDate && !this.weekOfDateIsDisabled(todayDate),
				tooltip,
				before;
			if (isNaN(year) || isNaN(month))
				return;
			this.picker.find('.datepicker-days .datepicker-switch')
						.text(DPGlobal.formatDate(d, titleFormat, this.o.language));
			this.picker.find('tfoot .today')
						.text(todaytxt)
            .css('display', titleBtnVisible ? 'table-cell' : 'none');
			this.picker.find('tfoot .clear')
						.text(cleartxt)
						.css('display', this.o.clearBtn === true ? 'table-cell' : 'none');
			this.picker.find('thead .datepicker-title')
						.text(this.o.title)
						.css('display', typeof this.o.title === 'string' && this.o.title !== '' ? 'table-cell' : 'none');
			this.updateNavArrows();
			this.fillMonths();
			var prevMonth = UTCDate(year, month, 0),
				day = prevMonth.getUTCDate();
			prevMonth.setUTCDate(day - (prevMonth.getUTCDay() - this.o.weekStart + 7)%7);
			var nextMonth = new Date(prevMonth);
			if (prevMonth.getUTCFullYear() < 100){
        nextMonth.setUTCFullYear(prevMonth.getUTCFullYear());
      }
			nextMonth.setUTCDate(nextMonth.getUTCDate() + 42);
			nextMonth = nextMonth.valueOf();
			var html = [];
			var weekDay, clsName;
			while (prevMonth.valueOf() < nextMonth){
				weekDay = prevMonth.getUTCDay();
				if (weekDay === this.o.weekStart){
					html.push('<tr>');
					if (this.o.calendarWeeks){
						// ISO 8601: First week contains first thursday.
						// ISO also states week starts on Monday, but we can be more abstract here.
						var
							// Start of current week: based on weekstart/current date
							ws = new Date(+prevMonth + (this.o.weekStart - weekDay - 7) % 7 * 864e5),
							// Thursday of this week
							th = new Date(Number(ws) + (7 + 4 - ws.getUTCDay()) % 7 * 864e5),
							// First Thursday of year, year from thursday
							yth = new Date(Number(yth = UTCDate(th.getUTCFullYear(), 0, 1)) + (7 + 4 - yth.getUTCDay()) % 7 * 864e5),
							// Calendar week: ms between thursdays, div ms per day, div 7 days
							calWeek = (th - yth) / 864e5 / 7 + 1;
						html.push('<td class="cw">'+ calWeek +'</td>');
					}
				}
				clsName = this.getClassNames(prevMonth);
				clsName.push('day');

				var content = prevMonth.getUTCDate();

				if (this.o.beforeShowDay !== $.noop){
					before = this.o.beforeShowDay(this._utc_to_local(prevMonth));
					if (before === undefined)
						before = {};
					else if (typeof before === 'boolean')
						before = {enabled: before};
					else if (typeof before === 'string')
						before = {classes: before};
					if (before.enabled === false)
						clsName.push('disabled');
					if (before.classes)
						clsName = clsName.concat(before.classes.split(/\s+/));
					if (before.tooltip)
						tooltip = before.tooltip;
					if (before.content)
						content = before.content;
				}

				//Check if uniqueSort exists (supported by jquery >=1.12 and >=2.2)
				//Fallback to unique function for older jquery versions
				if ($.isFunction($.uniqueSort)) {
					clsName = $.uniqueSort(clsName);
				} else {
					clsName = $.unique(clsName);
				}

				html.push('<td class="'+clsName.join(' ')+'"' + (tooltip ? ' title="'+tooltip+'"' : '') + ' data-date="' + prevMonth.getTime().toString() + '">' + content + '</td>');
				tooltip = null;
				if (weekDay === this.o.weekEnd){
					html.push('</tr>');
				}
				prevMonth.setUTCDate(prevMonth.getUTCDate() + 1);
			}
			this.picker.find('.datepicker-days tbody').html(html.join(''));

			var monthsTitle = dates[this.o.language].monthsTitle || dates['en'].monthsTitle || 'Months';
			var months = this.picker.find('.datepicker-months')
						.find('.datepicker-switch')
							.text(this.o.maxViewMode < 2 ? monthsTitle : year)
							.end()
						.find('tbody span').removeClass('active');

			$.each(this.dates, function(i, d){
				if (d.getUTCFullYear() === year)
					months.eq(d.getUTCMonth()).addClass('active');
			});

			if (year < startYear || year > endYear){
				months.addClass('disabled');
			}
			if (year === startYear){
				months.slice(0, startMonth).addClass('disabled');
			}
			if (year === endYear){
				months.slice(endMonth+1).addClass('disabled');
			}

			if (this.o.beforeShowMonth !== $.noop){
				var that = this;
				$.each(months, function(i, month){
          var moDate = new Date(year, i, 1);
          var before = that.o.beforeShowMonth(moDate);
					if (before === undefined)
						before = {};
					else if (typeof before === 'boolean')
						before = {enabled: before};
					else if (typeof before === 'string')
						before = {classes: before};
					if (before.enabled === false && !$(month).hasClass('disabled'))
					    $(month).addClass('disabled');
					if (before.classes)
					    $(month).addClass(before.classes);
					if (before.tooltip)
					    $(month).prop('title', before.tooltip);
				});
			}

			// Generating decade/years picker
			this._fill_yearsView(
				'.datepicker-years',
				'year',
				10,
				year,
				startYear,
				endYear,
				this.o.beforeShowYear
			);

			// Generating century/decades picker
			this._fill_yearsView(
				'.datepicker-decades',
				'decade',
				100,
				year,
				startYear,
				endYear,
				this.o.beforeShowDecade
			);

			// Generating millennium/centuries picker
			this._fill_yearsView(
				'.datepicker-centuries',
				'century',
				1000,
				year,
				startYear,
				endYear,
				this.o.beforeShowCentury
			);
		},

		updateNavArrows: function(){
			if (!this._allow_update)
				return;

			var d = new Date(this.viewDate),
				year = d.getUTCFullYear(),
				month = d.getUTCMonth(),
				startYear = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity,
				startMonth = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity,
				endYear = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity,
				endMonth = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity,
				prevIsDisabled,
				nextIsDisabled,
				factor = 1;
			switch (this.viewMode){
				case 4:
					factor *= 10;
					/* falls through */
				case 3:
					factor *= 10;
					/* falls through */
				case 2:
					factor *= 10;
					/* falls through */
				case 1:
					prevIsDisabled = Math.floor(year / factor) * factor <= startYear;
					nextIsDisabled = Math.floor(year / factor) * factor + factor > endYear;
					break;
				case 0:
					prevIsDisabled = year <= startYear && month <= startMonth;
					nextIsDisabled = year >= endYear && month >= endMonth;
					break;
			}

			this.picker.find('.prev').toggleClass('disabled', prevIsDisabled);
			this.picker.find('.next').toggleClass('disabled', nextIsDisabled);
		},

		click: function(e){
			e.preventDefault();
			e.stopPropagation();

			var target, dir, day, year, month;
			target = $(e.target);

			// Clicked on the switch
			if (target.hasClass('datepicker-switch') && this.viewMode !== this.o.maxViewMode){
				this.setViewMode(this.viewMode + 1);
			}

			// Clicked on today button
			if (target.hasClass('today') && !target.hasClass('day')){
				this.setViewMode(0);
				this._setDate(UTCToday(), this.o.todayBtn === 'linked' ? null : 'view');
			}

			// Clicked on clear button
			if (target.hasClass('clear')){
				this.clearDates();
			}

			if (!target.hasClass('disabled')){
				// Clicked on a month, year, decade, century
				if (target.hasClass('month')
						|| target.hasClass('year')
						|| target.hasClass('decade')
						|| target.hasClass('century')) {
					this.viewDate.setUTCDate(1);

					day = 1;
					if (this.viewMode === 1){
						month = target.parent().find('span').index(target);
						year = this.viewDate.getUTCFullYear();
						this.viewDate.setUTCMonth(month);
					} else {
						month = 0;
						year = Number(target.text());
						this.viewDate.setUTCFullYear(year);
					}

					this._trigger(DPGlobal.viewModes[this.viewMode - 1].e, this.viewDate);

					if (this.viewMode === this.o.minViewMode){
						this._setDate(UTCDate(year, month, day));
					} else {
						this.setViewMode(this.viewMode - 1);
						this.fill();
					}
				}
			}

			if (this.picker.is(':visible') && this._focused_from){
				this._focused_from.focus();
			}
			delete this._focused_from;
		},

		dayCellClick: function(e){
			var $target = $(e.currentTarget);
			var timestamp = $target.data('date');
			var date = new Date(timestamp);

			if (this.o.updateViewDate) {
				if (date.getUTCFullYear() !== this.viewDate.getUTCFullYear()) {
					this._trigger('changeYear', this.viewDate);
				}

				if (date.getUTCMonth() !== this.viewDate.getUTCMonth()) {
					this._trigger('changeMonth', this.viewDate);
				}
			}
			this._setDate(date);
		},

		// Clicked on prev or next
		navArrowsClick: function(e){
			var $target = $(e.currentTarget);
			var dir = $target.hasClass('prev') ? -1 : 1;
			if (this.viewMode !== 0){
				dir *= DPGlobal.viewModes[this.viewMode].navStep * 12;
			}
			this.viewDate = this.moveMonth(this.viewDate, dir);
			this._trigger(DPGlobal.viewModes[this.viewMode].e, this.viewDate);
			this.fill();
		},

		_toggle_multidate: function(date){
			var ix = this.dates.contains(date);
			if (!date){
				this.dates.clear();
			}

			if (ix !== -1){
				if (this.o.multidate === true || this.o.multidate > 1 || this.o.toggleActive){
					this.dates.remove(ix);
				}
			} else if (this.o.multidate === false) {
				this.dates.clear();
				this.dates.push(date);
			}
			else {
				this.dates.push(date);
			}

			if (typeof this.o.multidate === 'number')
				while (this.dates.length > this.o.multidate)
					this.dates.remove(0);
		},

		_setDate: function(date, which){
			if (!which || which === 'date')
				this._toggle_multidate(date && new Date(date));
			if ((!which && this.o.updateViewDate) || which === 'view')
				this.viewDate = date && new Date(date);

			this.fill();
			this.setValue();
			if (!which || which !== 'view') {
				this._trigger('changeDate');
			}
			this.inputField.trigger('change');
			if (this.o.autoclose && (!which || which === 'date')){
				this.hide();
			}
		},

		moveDay: function(date, dir){
			var newDate = new Date(date);
			newDate.setUTCDate(date.getUTCDate() + dir);

			return newDate;
		},

		moveWeek: function(date, dir){
			return this.moveDay(date, dir * 7);
		},

		moveMonth: function(date, dir){
			if (!isValidDate(date))
				return this.o.defaultViewDate;
			if (!dir)
				return date;
			var new_date = new Date(date.valueOf()),
				day = new_date.getUTCDate(),
				month = new_date.getUTCMonth(),
				mag = Math.abs(dir),
				new_month, test;
			dir = dir > 0 ? 1 : -1;
			if (mag === 1){
				test = dir === -1
					// If going back one month, make sure month is not current month
					// (eg, Mar 31 -> Feb 31 == Feb 28, not Mar 02)
					? function(){
						return new_date.getUTCMonth() === month;
					}
					// If going forward one month, make sure month is as expected
					// (eg, Jan 31 -> Feb 31 == Feb 28, not Mar 02)
					: function(){
						return new_date.getUTCMonth() !== new_month;
					};
				new_month = month + dir;
				new_date.setUTCMonth(new_month);
				// Dec -> Jan (12) or Jan -> Dec (-1) -- limit expected date to 0-11
				new_month = (new_month + 12) % 12;
			}
			else {
				// For magnitudes >1, move one month at a time...
				for (var i=0; i < mag; i++)
					// ...which might decrease the day (eg, Jan 31 to Feb 28, etc)...
					new_date = this.moveMonth(new_date, dir);
				// ...then reset the day, keeping it in the new month
				new_month = new_date.getUTCMonth();
				new_date.setUTCDate(day);
				test = function(){
					return new_month !== new_date.getUTCMonth();
				};
			}
			// Common date-resetting loop -- if date is beyond end of month, make it
			// end of month
			while (test()){
				new_date.setUTCDate(--day);
				new_date.setUTCMonth(new_month);
			}
			return new_date;
		},

		moveYear: function(date, dir){
			return this.moveMonth(date, dir*12);
		},

		moveAvailableDate: function(date, dir, fn){
			do {
				date = this[fn](date, dir);

				if (!this.dateWithinRange(date))
					return false;

				fn = 'moveDay';
			}
			while (this.dateIsDisabled(date));

			return date;
		},

		weekOfDateIsDisabled: function(date){
			return $.inArray(date.getUTCDay(), this.o.daysOfWeekDisabled) !== -1;
		},

		dateIsDisabled: function(date){
			return (
				this.weekOfDateIsDisabled(date) ||
				$.grep(this.o.datesDisabled, function(d){
					return isUTCEquals(date, d);
				}).length > 0
			);
		},

		dateWithinRange: function(date){
			return date >= this.o.startDate && date <= this.o.endDate;
		},

		keydown: function(e){
			if (!this.picker.is(':visible')){
				if (e.keyCode === 40 || e.keyCode === 27) { // allow down to re-show picker
					this.show();
					e.stopPropagation();
        }
				return;
			}
			var dateChanged = false,
				dir, newViewDate,
				focusDate = this.focusDate || this.viewDate;
			switch (e.keyCode){
				case 27: // escape
					if (this.focusDate){
						this.focusDate = null;
						this.viewDate = this.dates.get(-1) || this.viewDate;
						this.fill();
					}
					else
						this.hide();
					e.preventDefault();
					e.stopPropagation();
					break;
				case 37: // left
				case 38: // up
				case 39: // right
				case 40: // down
					if (!this.o.keyboardNavigation || this.o.daysOfWeekDisabled.length === 7)
						break;
					dir = e.keyCode === 37 || e.keyCode === 38 ? -1 : 1;
          if (this.viewMode === 0) {
  					if (e.ctrlKey){
  						newViewDate = this.moveAvailableDate(focusDate, dir, 'moveYear');

  						if (newViewDate)
  							this._trigger('changeYear', this.viewDate);
  					} else if (e.shiftKey){
  						newViewDate = this.moveAvailableDate(focusDate, dir, 'moveMonth');

  						if (newViewDate)
  							this._trigger('changeMonth', this.viewDate);
  					} else if (e.keyCode === 37 || e.keyCode === 39){
  						newViewDate = this.moveAvailableDate(focusDate, dir, 'moveDay');
  					} else if (!this.weekOfDateIsDisabled(focusDate)){
  						newViewDate = this.moveAvailableDate(focusDate, dir, 'moveWeek');
  					}
          } else if (this.viewMode === 1) {
            if (e.keyCode === 38 || e.keyCode === 40) {
              dir = dir * 4;
            }
            newViewDate = this.moveAvailableDate(focusDate, dir, 'moveMonth');
          } else if (this.viewMode === 2) {
            if (e.keyCode === 38 || e.keyCode === 40) {
              dir = dir * 4;
            }
            newViewDate = this.moveAvailableDate(focusDate, dir, 'moveYear');
          }
					if (newViewDate){
						this.focusDate = this.viewDate = newViewDate;
						this.setValue();
						this.fill();
						e.preventDefault();
					}
					break;
				case 13: // enter
					if (!this.o.forceParse)
						break;
					focusDate = this.focusDate || this.dates.get(-1) || this.viewDate;
					if (this.o.keyboardNavigation) {
						this._toggle_multidate(focusDate);
						dateChanged = true;
					}
					this.focusDate = null;
					this.viewDate = this.dates.get(-1) || this.viewDate;
					this.setValue();
					this.fill();
					if (this.picker.is(':visible')){
						e.preventDefault();
						e.stopPropagation();
						if (this.o.autoclose)
							this.hide();
					}
					break;
				case 9: // tab
					this.focusDate = null;
					this.viewDate = this.dates.get(-1) || this.viewDate;
					this.fill();
					this.hide();
					break;
			}
			if (dateChanged){
				if (this.dates.length)
					this._trigger('changeDate');
				else
					this._trigger('clearDate');
				this.inputField.trigger('change');
			}
		},

		setViewMode: function(viewMode){
			this.viewMode = viewMode;
			this.picker
				.children('div')
				.hide()
				.filter('.datepicker-' + DPGlobal.viewModes[this.viewMode].clsName)
					.show();
			this.updateNavArrows();
      this._trigger('changeViewMode', new Date(this.viewDate));
		}
	};

	var DateRangePicker = function(element, options){
		$.data(element, 'datepicker', this);
		this.element = $(element);
		this.inputs = $.map(options.inputs, function(i){
			return i.jquery ? i[0] : i;
		});
		delete options.inputs;

		this.keepEmptyValues = options.keepEmptyValues;
		delete options.keepEmptyValues;

		datepickerPlugin.call($(this.inputs), options)
			.on('changeDate', $.proxy(this.dateUpdated, this));

		this.pickers = $.map(this.inputs, function(i){
			return $.data(i, 'datepicker');
		});
		this.updateDates();
	};
	DateRangePicker.prototype = {
		updateDates: function(){
			this.dates = $.map(this.pickers, function(i){
				return i.getUTCDate();
			});
			this.updateRanges();
		},
		updateRanges: function(){
			var range = $.map(this.dates, function(d){
				return d.valueOf();
			});
			$.each(this.pickers, function(i, p){
				p.setRange(range);
			});
		},
		clearDates: function(){
			$.each(this.pickers, function(i, p){
				p.clearDates();
			});
		},
		dateUpdated: function(e){
			// `this.updating` is a workaround for preventing infinite recursion
			// between `changeDate` triggering and `setUTCDate` calling.  Until
			// there is a better mechanism.
			if (this.updating)
				return;
			this.updating = true;

			var dp = $.data(e.target, 'datepicker');

			if (dp === undefined) {
				return;
			}

			var new_date = dp.getUTCDate(),
				keep_empty_values = this.keepEmptyValues,
				i = $.inArray(e.target, this.inputs),
				j = i - 1,
				k = i + 1,
				l = this.inputs.length;
			if (i === -1)
				return;

			$.each(this.pickers, function(i, p){
				if (!p.getUTCDate() && (p === dp || !keep_empty_values))
					p.setUTCDate(new_date);
			});

			if (new_date < this.dates[j]){
				// Date being moved earlier/left
				while (j >= 0 && new_date < this.dates[j]){
					this.pickers[j--].setUTCDate(new_date);
				}
			} else if (new_date > this.dates[k]){
				// Date being moved later/right
				while (k < l && new_date > this.dates[k]){
					this.pickers[k++].setUTCDate(new_date);
				}
			}
			this.updateDates();

			delete this.updating;
		},
		destroy: function(){
			$.map(this.pickers, function(p){ p.destroy(); });
			$(this.inputs).off('changeDate', this.dateUpdated);
			delete this.element.data().datepicker;
		},
		remove: alias('destroy', 'Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead')
	};

	function opts_from_el(el, prefix){
		// Derive options from element data-attrs
		var data = $(el).data(),
			out = {}, inkey,
			replace = new RegExp('^' + prefix.toLowerCase() + '([A-Z])');
		prefix = new RegExp('^' + prefix.toLowerCase());
		function re_lower(_,a){
			return a.toLowerCase();
		}
		for (var key in data)
			if (prefix.test(key)){
				inkey = key.replace(replace, re_lower);
				out[inkey] = data[key];
			}
		return out;
	}

	function opts_from_locale(lang){
		// Derive options from locale plugins
		var out = {};
		// Check if "de-DE" style date is available, if not language should
		// fallback to 2 letter code eg "de"
		if (!dates[lang]){
			lang = lang.split('-')[0];
			if (!dates[lang])
				return;
		}
		var d = dates[lang];
		$.each(locale_opts, function(i,k){
			if (k in d)
				out[k] = d[k];
		});
		return out;
	}

	var old = $.fn.datepicker;
	var datepickerPlugin = function(option){
		var args = Array.apply(null, arguments);
		args.shift();
		var internal_return;
		this.each(function(){
			var $this = $(this),
				data = $this.data('datepicker'),
				options = typeof option === 'object' && option;
			if (!data){
				var elopts = opts_from_el(this, 'date'),
					// Preliminary otions
					xopts = $.extend({}, defaults, elopts, options),
					locopts = opts_from_locale(xopts.language),
					// Options priority: js args, data-attrs, locales, defaults
					opts = $.extend({}, defaults, locopts, elopts, options);
				if ($this.hasClass('input-daterange') || opts.inputs){
					$.extend(opts, {
						inputs: opts.inputs || $this.find('input').toArray()
					});
					data = new DateRangePicker(this, opts);
				}
				else {
					data = new Datepicker(this, opts);
				}
				$this.data('datepicker', data);
			}
			if (typeof option === 'string' && typeof data[option] === 'function'){
				internal_return = data[option].apply(data, args);
			}
		});

		if (
			internal_return === undefined ||
			internal_return instanceof Datepicker ||
			internal_return instanceof DateRangePicker
		)
			return this;

		if (this.length > 1)
			throw new Error('Using only allowed for the collection of a single element (' + option + ' function)');
		else
			return internal_return;
	};
	$.fn.datepicker = datepickerPlugin;

	var defaults = $.fn.datepicker.defaults = {
		assumeNearbyYear: false,
		autoclose: false,
		beforeShowDay: $.noop,
		beforeShowMonth: $.noop,
		beforeShowYear: $.noop,
		beforeShowDecade: $.noop,
		beforeShowCentury: $.noop,
		calendarWeeks: false,
		clearBtn: false,
		toggleActive: false,
		daysOfWeekDisabled: [],
		daysOfWeekHighlighted: [],
		datesDisabled: [],
		endDate: Infinity,
		forceParse: true,
		format: 'mm/dd/yyyy',
		keepEmptyValues: false,
		keyboardNavigation: true,
		language: 'en',
		minViewMode: 0,
		maxViewMode: 4,
		multidate: false,
		multidateSeparator: ',',
		orientation: "auto",
		rtl: false,
		startDate: -Infinity,
		startView: 0,
		todayBtn: false,
		todayHighlight: false,
		updateViewDate: true,
		weekStart: 0,
		disableTouchKeyboard: false,
		enableOnReadonly: true,
		showOnFocus: true,
		zIndexOffset: 10,
		container: 'body',
		immediateUpdates: false,
		title: '',
		templates: {
			leftArrow: '&#x00AB;',
			rightArrow: '&#x00BB;'
		},
    showWeekDays: true
	};
	var locale_opts = $.fn.datepicker.locale_opts = [
		'format',
		'rtl',
		'weekStart'
	];
	$.fn.datepicker.Constructor = Datepicker;
	var dates = $.fn.datepicker.dates = {
		en: {
			days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
			daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
			months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			today: "Today",
			clear: "Clear",
			titleFormat: "MM yyyy"
		}
	};

	var DPGlobal = {
		viewModes: [
			{
				names: ['days', 'month'],
				clsName: 'days',
				e: 'changeMonth'
			},
			{
				names: ['months', 'year'],
				clsName: 'months',
				e: 'changeYear',
				navStep: 1
			},
			{
				names: ['years', 'decade'],
				clsName: 'years',
				e: 'changeDecade',
				navStep: 10
			},
			{
				names: ['decades', 'century'],
				clsName: 'decades',
				e: 'changeCentury',
				navStep: 100
			},
			{
				names: ['centuries', 'millennium'],
				clsName: 'centuries',
				e: 'changeMillennium',
				navStep: 1000
			}
		],
		validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
		nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,
		parseFormat: function(format){
			if (typeof format.toValue === 'function' && typeof format.toDisplay === 'function')
                return format;
            // IE treats \0 as a string end in inputs (truncating the value),
			// so it's a bad format delimiter, anyway
			var separators = format.replace(this.validParts, '\0').split('\0'),
				parts = format.match(this.validParts);
			if (!separators || !separators.length || !parts || parts.length === 0){
				throw new Error("Invalid date format.");
			}
			return {separators: separators, parts: parts};
		},
		parseDate: function(date, format, language, assumeNearby){
			if (!date)
				return undefined;
			if (date instanceof Date)
				return date;
			if (typeof format === 'string')
				format = DPGlobal.parseFormat(format);
			if (format.toValue)
				return format.toValue(date, format, language);
			var fn_map = {
					d: 'moveDay',
					m: 'moveMonth',
					w: 'moveWeek',
					y: 'moveYear'
				},
				dateAliases = {
					yesterday: '-1d',
					today: '+0d',
					tomorrow: '+1d'
				},
				parts, part, dir, i, fn;
			if (date in dateAliases){
				date = dateAliases[date];
			}
			if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/i.test(date)){
				parts = date.match(/([\-+]\d+)([dmwy])/gi);
				date = new Date();
				for (i=0; i < parts.length; i++){
					part = parts[i].match(/([\-+]\d+)([dmwy])/i);
					dir = Number(part[1]);
					fn = fn_map[part[2].toLowerCase()];
					date = Datepicker.prototype[fn](date, dir);
				}
				return Datepicker.prototype._zero_utc_time(date);
			}

			parts = date && date.match(this.nonpunctuation) || [];

			function applyNearbyYear(year, threshold){
				if (threshold === true)
					threshold = 10;

				// if year is 2 digits or less, than the user most likely is trying to get a recent century
				if (year < 100){
					year += 2000;
					// if the new year is more than threshold years in advance, use last century
					if (year > ((new Date()).getFullYear()+threshold)){
						year -= 100;
					}
				}

				return year;
			}

			var parsed = {},
				setters_order = ['yyyy', 'yy', 'M', 'MM', 'm', 'mm', 'd', 'dd'],
				setters_map = {
					yyyy: function(d,v){
						return d.setUTCFullYear(assumeNearby ? applyNearbyYear(v, assumeNearby) : v);
					},
					m: function(d,v){
						if (isNaN(d))
							return d;
						v -= 1;
						while (v < 0) v += 12;
						v %= 12;
						d.setUTCMonth(v);
						while (d.getUTCMonth() !== v)
							d.setUTCDate(d.getUTCDate()-1);
						return d;
					},
					d: function(d,v){
						return d.setUTCDate(v);
					}
				},
				val, filtered;
			setters_map['yy'] = setters_map['yyyy'];
			setters_map['M'] = setters_map['MM'] = setters_map['mm'] = setters_map['m'];
			setters_map['dd'] = setters_map['d'];
			date = UTCToday();
			var fparts = format.parts.slice();
			// Remove noop parts
			if (parts.length !== fparts.length){
				fparts = $(fparts).filter(function(i,p){
					return $.inArray(p, setters_order) !== -1;
				}).toArray();
			}
			// Process remainder
			function match_part(){
				var m = this.slice(0, parts[i].length),
					p = parts[i].slice(0, m.length);
				return m.toLowerCase() === p.toLowerCase();
			}
			if (parts.length === fparts.length){
				var cnt;
				for (i=0, cnt = fparts.length; i < cnt; i++){
					val = parseInt(parts[i], 10);
					part = fparts[i];
					if (isNaN(val)){
						switch (part){
							case 'MM':
								filtered = $(dates[language].months).filter(match_part);
								val = $.inArray(filtered[0], dates[language].months) + 1;
								break;
							case 'M':
								filtered = $(dates[language].monthsShort).filter(match_part);
								val = $.inArray(filtered[0], dates[language].monthsShort) + 1;
								break;
						}
					}
					parsed[part] = val;
				}
				var _date, s;
				for (i=0; i < setters_order.length; i++){
					s = setters_order[i];
					if (s in parsed && !isNaN(parsed[s])){
						_date = new Date(date);
						setters_map[s](_date, parsed[s]);
						if (!isNaN(_date))
							date = _date;
					}
				}
			}
			return date;
		},
		formatDate: function(date, format, language){
			if (!date)
				return '';
			if (typeof format === 'string')
				format = DPGlobal.parseFormat(format);
			if (format.toDisplay)
                return format.toDisplay(date, format, language);
            var val = {
				d: date.getUTCDate(),
				D: dates[language].daysShort[date.getUTCDay()],
				DD: dates[language].days[date.getUTCDay()],
				m: date.getUTCMonth() + 1,
				M: dates[language].monthsShort[date.getUTCMonth()],
				MM: dates[language].months[date.getUTCMonth()],
				yy: date.getUTCFullYear().toString().substring(2),
				yyyy: date.getUTCFullYear()
			};
			val.dd = (val.d < 10 ? '0' : '') + val.d;
			val.mm = (val.m < 10 ? '0' : '') + val.m;
			date = [];
			var seps = $.extend([], format.separators);
			for (var i=0, cnt = format.parts.length; i <= cnt; i++){
				if (seps.length)
					date.push(seps.shift());
				date.push(val[format.parts[i]]);
			}
			return date.join('');
		},
		headTemplate: '<thead>'+
			              '<tr>'+
			                '<th colspan="7" class="datepicker-title"></th>'+
			              '</tr>'+
							'<tr>'+
								'<th class="prev">'+defaults.templates.leftArrow+'</th>'+
								'<th colspan="5" class="datepicker-switch"></th>'+
								'<th class="next">'+defaults.templates.rightArrow+'</th>'+
							'</tr>'+
						'</thead>',
		contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
		footTemplate: '<tfoot>'+
							'<tr>'+
								'<th colspan="7" class="today"></th>'+
							'</tr>'+
							'<tr>'+
								'<th colspan="7" class="clear"></th>'+
							'</tr>'+
						'</tfoot>'
	};
	DPGlobal.template = '<div class="datepicker">'+
							'<div class="datepicker-days">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									'<tbody></tbody>'+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-months">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-years">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-decades">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-centuries">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
						'</div>';

	$.fn.datepicker.DPGlobal = DPGlobal;


	/* DATEPICKER NO CONFLICT
	* =================== */

	$.fn.datepicker.noConflict = function(){
		$.fn.datepicker = old;
		return this;
	};

	/* DATEPICKER VERSION
	 * =================== */
	$.fn.datepicker.version = '1.9.0';

	$.fn.datepicker.deprecated = function(msg){
		var console = window.console;
		if (console && console.warn) {
			console.warn('DEPRECATED: ' + msg);
		}
	};


	/* DATEPICKER DATA-API
	* ================== */

	$(document).on(
		'focus.datepicker.data-api click.datepicker.data-api',
		'[data-provide="datepicker"]',
		function(e){
			var $this = $(this);
			if ($this.data('datepicker'))
				return;
			e.preventDefault();
			// component click requires us to explicitly show it
			datepickerPlugin.call($this, 'show');
		}
	);
	$(function(){
		datepickerPlugin.call($('[data-provide="datepicker-inline"]'));
	});

}));


/***/ }),

/***/ "./node_modules/bootstrap-datepicker/dist/locales/bootstrap-datepicker.fr.min.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/bootstrap-datepicker/dist/locales/bootstrap-datepicker.fr.min.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {!function(a){a.fn.datepicker.dates.fr={days:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],daysShort:["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],daysMin:["d","l","ma","me","j","v","s"],months:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],monthsShort:["janv.","févr.","mars","avril","mai","juin","juil.","août","sept.","oct.","nov.","déc."],today:"Aujourd'hui",monthsTitle:"Mois",clear:"Effacer",weekStart:1,format:"dd/mm/yyyy"}}(jQuery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/bootstrap/dist/js/bootstrap.js":
/*!*****************************************************!*\
  !*** ./node_modules/bootstrap/dist/js/bootstrap.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
  * Bootstrap v4.5.3 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? factory(exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")) :
  undefined;
}(this, (function (exports, $, Popper) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var $__default = /*#__PURE__*/_interopDefaultLegacy($);
  var Popper__default = /*#__PURE__*/_interopDefaultLegacy(Popper);

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.5.3): util.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */

  var TRANSITION_END = 'transitionend';
  var MAX_UID = 1000000;
  var MILLISECONDS_MULTIPLIER = 1000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  function toType(obj) {
    if (obj === null || typeof obj === 'undefined') {
      return "" + obj;
    }

    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: TRANSITION_END,
      delegateType: TRANSITION_END,
      handle: function handle(event) {
        if ($__default['default'](event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
        }

        return undefined;
      }
    };
  }

  function transitionEndEmulator(duration) {
    var _this = this;

    var called = false;
    $__default['default'](this).one(Util.TRANSITION_END, function () {
      called = true;
    });
    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(_this);
      }
    }, duration);
    return this;
  }

  function setTransitionEndSupport() {
    $__default['default'].fn.emulateTransitionEnd = transitionEndEmulator;
    $__default['default'].event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
  }
  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */


  var Util = {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function getUID(prefix) {
      do {
        prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix));

      return prefix;
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector = element.getAttribute('data-target');

      if (!selector || selector === '#') {
        var hrefAttr = element.getAttribute('href');
        selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : '';
      }

      try {
        return document.querySelector(selector) ? selector : null;
      } catch (_) {
        return null;
      }
    },
    getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
      if (!element) {
        return 0;
      } // Get transition-duration of the element


      var transitionDuration = $__default['default'](element).css('transition-duration');
      var transitionDelay = $__default['default'](element).css('transition-delay');
      var floatTransitionDuration = parseFloat(transitionDuration);
      var floatTransitionDelay = parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

      if (!floatTransitionDuration && !floatTransitionDelay) {
        return 0;
      } // If multiple durations are defined, take the first


      transitionDuration = transitionDuration.split(',')[0];
      transitionDelay = transitionDelay.split(',')[0];
      return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
    },
    reflow: function reflow(element) {
      return element.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      $__default['default'](element).trigger(TRANSITION_END);
    },
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(TRANSITION_END);
    },
    isElement: function isElement(obj) {
      return (obj[0] || obj).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      for (var property in configTypes) {
        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
          var expectedTypes = configTypes[property];
          var value = config[property];
          var valueType = value && Util.isElement(value) ? 'element' : toType(value);

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
          }
        }
      }
    },
    findShadowRoot: function findShadowRoot(element) {
      if (!document.documentElement.attachShadow) {
        return null;
      } // Can find the shadow root otherwise it'll return the document


      if (typeof element.getRootNode === 'function') {
        var root = element.getRootNode();
        return root instanceof ShadowRoot ? root : null;
      }

      if (element instanceof ShadowRoot) {
        return element;
      } // when we don't find a shadow root


      if (!element.parentNode) {
        return null;
      }

      return Util.findShadowRoot(element.parentNode);
    },
    jQueryDetection: function jQueryDetection() {
      if (typeof $__default['default'] === 'undefined') {
        throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
      }

      var version = $__default['default'].fn.jquery.split(' ')[0].split('.');
      var minMajor = 1;
      var ltMajor = 2;
      var minMinor = 9;
      var minPatch = 1;
      var maxMajor = 4;

      if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
        throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
      }
    }
  };
  Util.jQueryDetection();
  setTransitionEndSupport();

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'alert';
  var VERSION = '4.5.3';
  var DATA_KEY = 'bs.alert';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $__default['default'].fn[NAME];
  var SELECTOR_DISMISS = '[data-dismiss="alert"]';
  var EVENT_CLOSE = "close" + EVENT_KEY;
  var EVENT_CLOSED = "closed" + EVENT_KEY;
  var EVENT_CLICK_DATA_API = "click" + EVENT_KEY + DATA_API_KEY;
  var CLASS_NAME_ALERT = 'alert';
  var CLASS_NAME_FADE = 'fade';
  var CLASS_NAME_SHOW = 'show';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Alert = /*#__PURE__*/function () {
    function Alert(element) {
      this._element = element;
    } // Getters


    var _proto = Alert.prototype;

    // Public
    _proto.close = function close(element) {
      var rootElement = this._element;

      if (element) {
        rootElement = this._getRootElement(element);
      }

      var customEvent = this._triggerCloseEvent(rootElement);

      if (customEvent.isDefaultPrevented()) {
        return;
      }

      this._removeElement(rootElement);
    };

    _proto.dispose = function dispose() {
      $__default['default'].removeData(this._element, DATA_KEY);
      this._element = null;
    } // Private
    ;

    _proto._getRootElement = function _getRootElement(element) {
      var selector = Util.getSelectorFromElement(element);
      var parent = false;

      if (selector) {
        parent = document.querySelector(selector);
      }

      if (!parent) {
        parent = $__default['default'](element).closest("." + CLASS_NAME_ALERT)[0];
      }

      return parent;
    };

    _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
      var closeEvent = $__default['default'].Event(EVENT_CLOSE);
      $__default['default'](element).trigger(closeEvent);
      return closeEvent;
    };

    _proto._removeElement = function _removeElement(element) {
      var _this = this;

      $__default['default'](element).removeClass(CLASS_NAME_SHOW);

      if (!$__default['default'](element).hasClass(CLASS_NAME_FADE)) {
        this._destroyElement(element);

        return;
      }

      var transitionDuration = Util.getTransitionDurationFromElement(element);
      $__default['default'](element).one(Util.TRANSITION_END, function (event) {
        return _this._destroyElement(element, event);
      }).emulateTransitionEnd(transitionDuration);
    };

    _proto._destroyElement = function _destroyElement(element) {
      $__default['default'](element).detach().trigger(EVENT_CLOSED).remove();
    } // Static
    ;

    Alert._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $__default['default'](this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new Alert(this);
          $element.data(DATA_KEY, data);
        }

        if (config === 'close') {
          data[config](this);
        }
      });
    };

    Alert._handleDismiss = function _handleDismiss(alertInstance) {
      return function (event) {
        if (event) {
          event.preventDefault();
        }

        alertInstance.close(this);
      };
    };

    _createClass(Alert, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);

    return Alert;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](document).on(EVENT_CLICK_DATA_API, SELECTOR_DISMISS, Alert._handleDismiss(new Alert()));
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME] = Alert._jQueryInterface;
  $__default['default'].fn[NAME].Constructor = Alert;

  $__default['default'].fn[NAME].noConflict = function () {
    $__default['default'].fn[NAME] = JQUERY_NO_CONFLICT;
    return Alert._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$1 = 'button';
  var VERSION$1 = '4.5.3';
  var DATA_KEY$1 = 'bs.button';
  var EVENT_KEY$1 = "." + DATA_KEY$1;
  var DATA_API_KEY$1 = '.data-api';
  var JQUERY_NO_CONFLICT$1 = $__default['default'].fn[NAME$1];
  var CLASS_NAME_ACTIVE = 'active';
  var CLASS_NAME_BUTTON = 'btn';
  var CLASS_NAME_FOCUS = 'focus';
  var SELECTOR_DATA_TOGGLE_CARROT = '[data-toggle^="button"]';
  var SELECTOR_DATA_TOGGLES = '[data-toggle="buttons"]';
  var SELECTOR_DATA_TOGGLE = '[data-toggle="button"]';
  var SELECTOR_DATA_TOGGLES_BUTTONS = '[data-toggle="buttons"] .btn';
  var SELECTOR_INPUT = 'input:not([type="hidden"])';
  var SELECTOR_ACTIVE = '.active';
  var SELECTOR_BUTTON = '.btn';
  var EVENT_CLICK_DATA_API$1 = "click" + EVENT_KEY$1 + DATA_API_KEY$1;
  var EVENT_FOCUS_BLUR_DATA_API = "focus" + EVENT_KEY$1 + DATA_API_KEY$1 + " " + ("blur" + EVENT_KEY$1 + DATA_API_KEY$1);
  var EVENT_LOAD_DATA_API = "load" + EVENT_KEY$1 + DATA_API_KEY$1;
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Button = /*#__PURE__*/function () {
    function Button(element) {
      this._element = element;
      this.shouldAvoidTriggerChange = false;
    } // Getters


    var _proto = Button.prototype;

    // Public
    _proto.toggle = function toggle() {
      var triggerChangeEvent = true;
      var addAriaPressed = true;
      var rootElement = $__default['default'](this._element).closest(SELECTOR_DATA_TOGGLES)[0];

      if (rootElement) {
        var input = this._element.querySelector(SELECTOR_INPUT);

        if (input) {
          if (input.type === 'radio') {
            if (input.checked && this._element.classList.contains(CLASS_NAME_ACTIVE)) {
              triggerChangeEvent = false;
            } else {
              var activeElement = rootElement.querySelector(SELECTOR_ACTIVE);

              if (activeElement) {
                $__default['default'](activeElement).removeClass(CLASS_NAME_ACTIVE);
              }
            }
          }

          if (triggerChangeEvent) {
            // if it's not a radio button or checkbox don't add a pointless/invalid checked property to the input
            if (input.type === 'checkbox' || input.type === 'radio') {
              input.checked = !this._element.classList.contains(CLASS_NAME_ACTIVE);
            }

            if (!this.shouldAvoidTriggerChange) {
              $__default['default'](input).trigger('change');
            }
          }

          input.focus();
          addAriaPressed = false;
        }
      }

      if (!(this._element.hasAttribute('disabled') || this._element.classList.contains('disabled'))) {
        if (addAriaPressed) {
          this._element.setAttribute('aria-pressed', !this._element.classList.contains(CLASS_NAME_ACTIVE));
        }

        if (triggerChangeEvent) {
          $__default['default'](this._element).toggleClass(CLASS_NAME_ACTIVE);
        }
      }
    };

    _proto.dispose = function dispose() {
      $__default['default'].removeData(this._element, DATA_KEY$1);
      this._element = null;
    } // Static
    ;

    Button._jQueryInterface = function _jQueryInterface(config, avoidTriggerChange) {
      return this.each(function () {
        var $element = $__default['default'](this);
        var data = $element.data(DATA_KEY$1);

        if (!data) {
          data = new Button(this);
          $element.data(DATA_KEY$1, data);
        }

        data.shouldAvoidTriggerChange = avoidTriggerChange;

        if (config === 'toggle') {
          data[config]();
        }
      });
    };

    _createClass(Button, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$1;
      }
    }]);

    return Button;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](document).on(EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE_CARROT, function (event) {
    var button = event.target;
    var initialButton = button;

    if (!$__default['default'](button).hasClass(CLASS_NAME_BUTTON)) {
      button = $__default['default'](button).closest(SELECTOR_BUTTON)[0];
    }

    if (!button || button.hasAttribute('disabled') || button.classList.contains('disabled')) {
      event.preventDefault(); // work around Firefox bug #1540995
    } else {
      var inputBtn = button.querySelector(SELECTOR_INPUT);

      if (inputBtn && (inputBtn.hasAttribute('disabled') || inputBtn.classList.contains('disabled'))) {
        event.preventDefault(); // work around Firefox bug #1540995

        return;
      }

      if (initialButton.tagName === 'INPUT' || button.tagName !== 'LABEL') {
        Button._jQueryInterface.call($__default['default'](button), 'toggle', initialButton.tagName === 'INPUT');
      }
    }
  }).on(EVENT_FOCUS_BLUR_DATA_API, SELECTOR_DATA_TOGGLE_CARROT, function (event) {
    var button = $__default['default'](event.target).closest(SELECTOR_BUTTON)[0];
    $__default['default'](button).toggleClass(CLASS_NAME_FOCUS, /^focus(in)?$/.test(event.type));
  });
  $__default['default'](window).on(EVENT_LOAD_DATA_API, function () {
    // ensure correct active class is set to match the controls' actual values/states
    // find all checkboxes/readio buttons inside data-toggle groups
    var buttons = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLES_BUTTONS));

    for (var i = 0, len = buttons.length; i < len; i++) {
      var button = buttons[i];
      var input = button.querySelector(SELECTOR_INPUT);

      if (input.checked || input.hasAttribute('checked')) {
        button.classList.add(CLASS_NAME_ACTIVE);
      } else {
        button.classList.remove(CLASS_NAME_ACTIVE);
      }
    } // find all button toggles


    buttons = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE));

    for (var _i = 0, _len = buttons.length; _i < _len; _i++) {
      var _button = buttons[_i];

      if (_button.getAttribute('aria-pressed') === 'true') {
        _button.classList.add(CLASS_NAME_ACTIVE);
      } else {
        _button.classList.remove(CLASS_NAME_ACTIVE);
      }
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$1] = Button._jQueryInterface;
  $__default['default'].fn[NAME$1].Constructor = Button;

  $__default['default'].fn[NAME$1].noConflict = function () {
    $__default['default'].fn[NAME$1] = JQUERY_NO_CONFLICT$1;
    return Button._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$2 = 'carousel';
  var VERSION$2 = '4.5.3';
  var DATA_KEY$2 = 'bs.carousel';
  var EVENT_KEY$2 = "." + DATA_KEY$2;
  var DATA_API_KEY$2 = '.data-api';
  var JQUERY_NO_CONFLICT$2 = $__default['default'].fn[NAME$2];
  var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key

  var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key

  var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  var SWIPE_THRESHOLD = 40;
  var Default = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true,
    touch: true
  };
  var DefaultType = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean',
    touch: 'boolean'
  };
  var DIRECTION_NEXT = 'next';
  var DIRECTION_PREV = 'prev';
  var DIRECTION_LEFT = 'left';
  var DIRECTION_RIGHT = 'right';
  var EVENT_SLIDE = "slide" + EVENT_KEY$2;
  var EVENT_SLID = "slid" + EVENT_KEY$2;
  var EVENT_KEYDOWN = "keydown" + EVENT_KEY$2;
  var EVENT_MOUSEENTER = "mouseenter" + EVENT_KEY$2;
  var EVENT_MOUSELEAVE = "mouseleave" + EVENT_KEY$2;
  var EVENT_TOUCHSTART = "touchstart" + EVENT_KEY$2;
  var EVENT_TOUCHMOVE = "touchmove" + EVENT_KEY$2;
  var EVENT_TOUCHEND = "touchend" + EVENT_KEY$2;
  var EVENT_POINTERDOWN = "pointerdown" + EVENT_KEY$2;
  var EVENT_POINTERUP = "pointerup" + EVENT_KEY$2;
  var EVENT_DRAG_START = "dragstart" + EVENT_KEY$2;
  var EVENT_LOAD_DATA_API$1 = "load" + EVENT_KEY$2 + DATA_API_KEY$2;
  var EVENT_CLICK_DATA_API$2 = "click" + EVENT_KEY$2 + DATA_API_KEY$2;
  var CLASS_NAME_CAROUSEL = 'carousel';
  var CLASS_NAME_ACTIVE$1 = 'active';
  var CLASS_NAME_SLIDE = 'slide';
  var CLASS_NAME_RIGHT = 'carousel-item-right';
  var CLASS_NAME_LEFT = 'carousel-item-left';
  var CLASS_NAME_NEXT = 'carousel-item-next';
  var CLASS_NAME_PREV = 'carousel-item-prev';
  var CLASS_NAME_POINTER_EVENT = 'pointer-event';
  var SELECTOR_ACTIVE$1 = '.active';
  var SELECTOR_ACTIVE_ITEM = '.active.carousel-item';
  var SELECTOR_ITEM = '.carousel-item';
  var SELECTOR_ITEM_IMG = '.carousel-item img';
  var SELECTOR_NEXT_PREV = '.carousel-item-next, .carousel-item-prev';
  var SELECTOR_INDICATORS = '.carousel-indicators';
  var SELECTOR_DATA_SLIDE = '[data-slide], [data-slide-to]';
  var SELECTOR_DATA_RIDE = '[data-ride="carousel"]';
  var PointerType = {
    TOUCH: 'touch',
    PEN: 'pen'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Carousel = /*#__PURE__*/function () {
    function Carousel(element, config) {
      this._items = null;
      this._interval = null;
      this._activeElement = null;
      this._isPaused = false;
      this._isSliding = false;
      this.touchTimeout = null;
      this.touchStartX = 0;
      this.touchDeltaX = 0;
      this._config = this._getConfig(config);
      this._element = element;
      this._indicatorsElement = this._element.querySelector(SELECTOR_INDICATORS);
      this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
      this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent);

      this._addEventListeners();
    } // Getters


    var _proto = Carousel.prototype;

    // Public
    _proto.next = function next() {
      if (!this._isSliding) {
        this._slide(DIRECTION_NEXT);
      }
    };

    _proto.nextWhenVisible = function nextWhenVisible() {
      var $element = $__default['default'](this._element); // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible

      if (!document.hidden && $element.is(':visible') && $element.css('visibility') !== 'hidden') {
        this.next();
      }
    };

    _proto.prev = function prev() {
      if (!this._isSliding) {
        this._slide(DIRECTION_PREV);
      }
    };

    _proto.pause = function pause(event) {
      if (!event) {
        this._isPaused = true;
      }

      if (this._element.querySelector(SELECTOR_NEXT_PREV)) {
        Util.triggerTransitionEnd(this._element);
        this.cycle(true);
      }

      clearInterval(this._interval);
      this._interval = null;
    };

    _proto.cycle = function cycle(event) {
      if (!event) {
        this._isPaused = false;
      }

      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }

      if (this._config.interval && !this._isPaused) {
        this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
      }
    };

    _proto.to = function to(index) {
      var _this = this;

      this._activeElement = this._element.querySelector(SELECTOR_ACTIVE_ITEM);

      var activeIndex = this._getItemIndex(this._activeElement);

      if (index > this._items.length - 1 || index < 0) {
        return;
      }

      if (this._isSliding) {
        $__default['default'](this._element).one(EVENT_SLID, function () {
          return _this.to(index);
        });
        return;
      }

      if (activeIndex === index) {
        this.pause();
        this.cycle();
        return;
      }

      var direction = index > activeIndex ? DIRECTION_NEXT : DIRECTION_PREV;

      this._slide(direction, this._items[index]);
    };

    _proto.dispose = function dispose() {
      $__default['default'](this._element).off(EVENT_KEY$2);
      $__default['default'].removeData(this._element, DATA_KEY$2);
      this._items = null;
      this._config = null;
      this._element = null;
      this._interval = null;
      this._isPaused = null;
      this._isSliding = null;
      this._activeElement = null;
      this._indicatorsElement = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default, config);
      Util.typeCheckConfig(NAME$2, config, DefaultType);
      return config;
    };

    _proto._handleSwipe = function _handleSwipe() {
      var absDeltax = Math.abs(this.touchDeltaX);

      if (absDeltax <= SWIPE_THRESHOLD) {
        return;
      }

      var direction = absDeltax / this.touchDeltaX;
      this.touchDeltaX = 0; // swipe left

      if (direction > 0) {
        this.prev();
      } // swipe right


      if (direction < 0) {
        this.next();
      }
    };

    _proto._addEventListeners = function _addEventListeners() {
      var _this2 = this;

      if (this._config.keyboard) {
        $__default['default'](this._element).on(EVENT_KEYDOWN, function (event) {
          return _this2._keydown(event);
        });
      }

      if (this._config.pause === 'hover') {
        $__default['default'](this._element).on(EVENT_MOUSEENTER, function (event) {
          return _this2.pause(event);
        }).on(EVENT_MOUSELEAVE, function (event) {
          return _this2.cycle(event);
        });
      }

      if (this._config.touch) {
        this._addTouchEventListeners();
      }
    };

    _proto._addTouchEventListeners = function _addTouchEventListeners() {
      var _this3 = this;

      if (!this._touchSupported) {
        return;
      }

      var start = function start(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchStartX = event.originalEvent.clientX;
        } else if (!_this3._pointerEvent) {
          _this3.touchStartX = event.originalEvent.touches[0].clientX;
        }
      };

      var move = function move(event) {
        // ensure swiping with one touch and not pinching
        if (event.originalEvent.touches && event.originalEvent.touches.length > 1) {
          _this3.touchDeltaX = 0;
        } else {
          _this3.touchDeltaX = event.originalEvent.touches[0].clientX - _this3.touchStartX;
        }
      };

      var end = function end(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchDeltaX = event.originalEvent.clientX - _this3.touchStartX;
        }

        _this3._handleSwipe();

        if (_this3._config.pause === 'hover') {
          // If it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling
          _this3.pause();

          if (_this3.touchTimeout) {
            clearTimeout(_this3.touchTimeout);
          }

          _this3.touchTimeout = setTimeout(function (event) {
            return _this3.cycle(event);
          }, TOUCHEVENT_COMPAT_WAIT + _this3._config.interval);
        }
      };

      $__default['default'](this._element.querySelectorAll(SELECTOR_ITEM_IMG)).on(EVENT_DRAG_START, function (e) {
        return e.preventDefault();
      });

      if (this._pointerEvent) {
        $__default['default'](this._element).on(EVENT_POINTERDOWN, function (event) {
          return start(event);
        });
        $__default['default'](this._element).on(EVENT_POINTERUP, function (event) {
          return end(event);
        });

        this._element.classList.add(CLASS_NAME_POINTER_EVENT);
      } else {
        $__default['default'](this._element).on(EVENT_TOUCHSTART, function (event) {
          return start(event);
        });
        $__default['default'](this._element).on(EVENT_TOUCHMOVE, function (event) {
          return move(event);
        });
        $__default['default'](this._element).on(EVENT_TOUCHEND, function (event) {
          return end(event);
        });
      }
    };

    _proto._keydown = function _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }

      switch (event.which) {
        case ARROW_LEFT_KEYCODE:
          event.preventDefault();
          this.prev();
          break;

        case ARROW_RIGHT_KEYCODE:
          event.preventDefault();
          this.next();
          break;
      }
    };

    _proto._getItemIndex = function _getItemIndex(element) {
      this._items = element && element.parentNode ? [].slice.call(element.parentNode.querySelectorAll(SELECTOR_ITEM)) : [];
      return this._items.indexOf(element);
    };

    _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
      var isNextDirection = direction === DIRECTION_NEXT;
      var isPrevDirection = direction === DIRECTION_PREV;

      var activeIndex = this._getItemIndex(activeElement);

      var lastItemIndex = this._items.length - 1;
      var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

      if (isGoingToWrap && !this._config.wrap) {
        return activeElement;
      }

      var delta = direction === DIRECTION_PREV ? -1 : 1;
      var itemIndex = (activeIndex + delta) % this._items.length;
      return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
    };

    _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
      var targetIndex = this._getItemIndex(relatedTarget);

      var fromIndex = this._getItemIndex(this._element.querySelector(SELECTOR_ACTIVE_ITEM));

      var slideEvent = $__default['default'].Event(EVENT_SLIDE, {
        relatedTarget: relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      });
      $__default['default'](this._element).trigger(slideEvent);
      return slideEvent;
    };

    _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
      if (this._indicatorsElement) {
        var indicators = [].slice.call(this._indicatorsElement.querySelectorAll(SELECTOR_ACTIVE$1));
        $__default['default'](indicators).removeClass(CLASS_NAME_ACTIVE$1);

        var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

        if (nextIndicator) {
          $__default['default'](nextIndicator).addClass(CLASS_NAME_ACTIVE$1);
        }
      }
    };

    _proto._slide = function _slide(direction, element) {
      var _this4 = this;

      var activeElement = this._element.querySelector(SELECTOR_ACTIVE_ITEM);

      var activeElementIndex = this._getItemIndex(activeElement);

      var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

      var nextElementIndex = this._getItemIndex(nextElement);

      var isCycling = Boolean(this._interval);
      var directionalClassName;
      var orderClassName;
      var eventDirectionName;

      if (direction === DIRECTION_NEXT) {
        directionalClassName = CLASS_NAME_LEFT;
        orderClassName = CLASS_NAME_NEXT;
        eventDirectionName = DIRECTION_LEFT;
      } else {
        directionalClassName = CLASS_NAME_RIGHT;
        orderClassName = CLASS_NAME_PREV;
        eventDirectionName = DIRECTION_RIGHT;
      }

      if (nextElement && $__default['default'](nextElement).hasClass(CLASS_NAME_ACTIVE$1)) {
        this._isSliding = false;
        return;
      }

      var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

      if (slideEvent.isDefaultPrevented()) {
        return;
      }

      if (!activeElement || !nextElement) {
        // Some weirdness is happening, so we bail
        return;
      }

      this._isSliding = true;

      if (isCycling) {
        this.pause();
      }

      this._setActiveIndicatorElement(nextElement);

      var slidEvent = $__default['default'].Event(EVENT_SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
      });

      if ($__default['default'](this._element).hasClass(CLASS_NAME_SLIDE)) {
        $__default['default'](nextElement).addClass(orderClassName);
        Util.reflow(nextElement);
        $__default['default'](activeElement).addClass(directionalClassName);
        $__default['default'](nextElement).addClass(directionalClassName);
        var nextElementInterval = parseInt(nextElement.getAttribute('data-interval'), 10);

        if (nextElementInterval) {
          this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
          this._config.interval = nextElementInterval;
        } else {
          this._config.interval = this._config.defaultInterval || this._config.interval;
        }

        var transitionDuration = Util.getTransitionDurationFromElement(activeElement);
        $__default['default'](activeElement).one(Util.TRANSITION_END, function () {
          $__default['default'](nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(CLASS_NAME_ACTIVE$1);
          $__default['default'](activeElement).removeClass(CLASS_NAME_ACTIVE$1 + " " + orderClassName + " " + directionalClassName);
          _this4._isSliding = false;
          setTimeout(function () {
            return $__default['default'](_this4._element).trigger(slidEvent);
          }, 0);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        $__default['default'](activeElement).removeClass(CLASS_NAME_ACTIVE$1);
        $__default['default'](nextElement).addClass(CLASS_NAME_ACTIVE$1);
        this._isSliding = false;
        $__default['default'](this._element).trigger(slidEvent);
      }

      if (isCycling) {
        this.cycle();
      }
    } // Static
    ;

    Carousel._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default['default'](this).data(DATA_KEY$2);

        var _config = _extends({}, Default, $__default['default'](this).data());

        if (typeof config === 'object') {
          _config = _extends({}, _config, config);
        }

        var action = typeof config === 'string' ? config : _config.slide;

        if (!data) {
          data = new Carousel(this, _config);
          $__default['default'](this).data(DATA_KEY$2, data);
        }

        if (typeof config === 'number') {
          data.to(config);
        } else if (typeof action === 'string') {
          if (typeof data[action] === 'undefined') {
            throw new TypeError("No method named \"" + action + "\"");
          }

          data[action]();
        } else if (_config.interval && _config.ride) {
          data.pause();
          data.cycle();
        }
      });
    };

    Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
      var selector = Util.getSelectorFromElement(this);

      if (!selector) {
        return;
      }

      var target = $__default['default'](selector)[0];

      if (!target || !$__default['default'](target).hasClass(CLASS_NAME_CAROUSEL)) {
        return;
      }

      var config = _extends({}, $__default['default'](target).data(), $__default['default'](this).data());

      var slideIndex = this.getAttribute('data-slide-to');

      if (slideIndex) {
        config.interval = false;
      }

      Carousel._jQueryInterface.call($__default['default'](target), config);

      if (slideIndex) {
        $__default['default'](target).data(DATA_KEY$2).to(slideIndex);
      }

      event.preventDefault();
    };

    _createClass(Carousel, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$2;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);

    return Carousel;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](document).on(EVENT_CLICK_DATA_API$2, SELECTOR_DATA_SLIDE, Carousel._dataApiClickHandler);
  $__default['default'](window).on(EVENT_LOAD_DATA_API$1, function () {
    var carousels = [].slice.call(document.querySelectorAll(SELECTOR_DATA_RIDE));

    for (var i = 0, len = carousels.length; i < len; i++) {
      var $carousel = $__default['default'](carousels[i]);

      Carousel._jQueryInterface.call($carousel, $carousel.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$2] = Carousel._jQueryInterface;
  $__default['default'].fn[NAME$2].Constructor = Carousel;

  $__default['default'].fn[NAME$2].noConflict = function () {
    $__default['default'].fn[NAME$2] = JQUERY_NO_CONFLICT$2;
    return Carousel._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$3 = 'collapse';
  var VERSION$3 = '4.5.3';
  var DATA_KEY$3 = 'bs.collapse';
  var EVENT_KEY$3 = "." + DATA_KEY$3;
  var DATA_API_KEY$3 = '.data-api';
  var JQUERY_NO_CONFLICT$3 = $__default['default'].fn[NAME$3];
  var Default$1 = {
    toggle: true,
    parent: ''
  };
  var DefaultType$1 = {
    toggle: 'boolean',
    parent: '(string|element)'
  };
  var EVENT_SHOW = "show" + EVENT_KEY$3;
  var EVENT_SHOWN = "shown" + EVENT_KEY$3;
  var EVENT_HIDE = "hide" + EVENT_KEY$3;
  var EVENT_HIDDEN = "hidden" + EVENT_KEY$3;
  var EVENT_CLICK_DATA_API$3 = "click" + EVENT_KEY$3 + DATA_API_KEY$3;
  var CLASS_NAME_SHOW$1 = 'show';
  var CLASS_NAME_COLLAPSE = 'collapse';
  var CLASS_NAME_COLLAPSING = 'collapsing';
  var CLASS_NAME_COLLAPSED = 'collapsed';
  var DIMENSION_WIDTH = 'width';
  var DIMENSION_HEIGHT = 'height';
  var SELECTOR_ACTIVES = '.show, .collapsing';
  var SELECTOR_DATA_TOGGLE$1 = '[data-toggle="collapse"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Collapse = /*#__PURE__*/function () {
    function Collapse(element, config) {
      this._isTransitioning = false;
      this._element = element;
      this._config = this._getConfig(config);
      this._triggerArray = [].slice.call(document.querySelectorAll("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
      var toggleList = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE$1));

      for (var i = 0, len = toggleList.length; i < len; i++) {
        var elem = toggleList[i];
        var selector = Util.getSelectorFromElement(elem);
        var filterElement = [].slice.call(document.querySelectorAll(selector)).filter(function (foundElem) {
          return foundElem === element;
        });

        if (selector !== null && filterElement.length > 0) {
          this._selector = selector;

          this._triggerArray.push(elem);
        }
      }

      this._parent = this._config.parent ? this._getParent() : null;

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      }

      if (this._config.toggle) {
        this.toggle();
      }
    } // Getters


    var _proto = Collapse.prototype;

    // Public
    _proto.toggle = function toggle() {
      if ($__default['default'](this._element).hasClass(CLASS_NAME_SHOW$1)) {
        this.hide();
      } else {
        this.show();
      }
    };

    _proto.show = function show() {
      var _this = this;

      if (this._isTransitioning || $__default['default'](this._element).hasClass(CLASS_NAME_SHOW$1)) {
        return;
      }

      var actives;
      var activesData;

      if (this._parent) {
        actives = [].slice.call(this._parent.querySelectorAll(SELECTOR_ACTIVES)).filter(function (elem) {
          if (typeof _this._config.parent === 'string') {
            return elem.getAttribute('data-parent') === _this._config.parent;
          }

          return elem.classList.contains(CLASS_NAME_COLLAPSE);
        });

        if (actives.length === 0) {
          actives = null;
        }
      }

      if (actives) {
        activesData = $__default['default'](actives).not(this._selector).data(DATA_KEY$3);

        if (activesData && activesData._isTransitioning) {
          return;
        }
      }

      var startEvent = $__default['default'].Event(EVENT_SHOW);
      $__default['default'](this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      if (actives) {
        Collapse._jQueryInterface.call($__default['default'](actives).not(this._selector), 'hide');

        if (!activesData) {
          $__default['default'](actives).data(DATA_KEY$3, null);
        }
      }

      var dimension = this._getDimension();

      $__default['default'](this._element).removeClass(CLASS_NAME_COLLAPSE).addClass(CLASS_NAME_COLLAPSING);
      this._element.style[dimension] = 0;

      if (this._triggerArray.length) {
        $__default['default'](this._triggerArray).removeClass(CLASS_NAME_COLLAPSED).attr('aria-expanded', true);
      }

      this.setTransitioning(true);

      var complete = function complete() {
        $__default['default'](_this._element).removeClass(CLASS_NAME_COLLAPSING).addClass(CLASS_NAME_COLLAPSE + " " + CLASS_NAME_SHOW$1);
        _this._element.style[dimension] = '';

        _this.setTransitioning(false);

        $__default['default'](_this._element).trigger(EVENT_SHOWN);
      };

      var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      var scrollSize = "scroll" + capitalizedDimension;
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $__default['default'](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      this._element.style[dimension] = this._element[scrollSize] + "px";
    };

    _proto.hide = function hide() {
      var _this2 = this;

      if (this._isTransitioning || !$__default['default'](this._element).hasClass(CLASS_NAME_SHOW$1)) {
        return;
      }

      var startEvent = $__default['default'].Event(EVENT_HIDE);
      $__default['default'](this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      var dimension = this._getDimension();

      this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
      Util.reflow(this._element);
      $__default['default'](this._element).addClass(CLASS_NAME_COLLAPSING).removeClass(CLASS_NAME_COLLAPSE + " " + CLASS_NAME_SHOW$1);
      var triggerArrayLength = this._triggerArray.length;

      if (triggerArrayLength > 0) {
        for (var i = 0; i < triggerArrayLength; i++) {
          var trigger = this._triggerArray[i];
          var selector = Util.getSelectorFromElement(trigger);

          if (selector !== null) {
            var $elem = $__default['default']([].slice.call(document.querySelectorAll(selector)));

            if (!$elem.hasClass(CLASS_NAME_SHOW$1)) {
              $__default['default'](trigger).addClass(CLASS_NAME_COLLAPSED).attr('aria-expanded', false);
            }
          }
        }
      }

      this.setTransitioning(true);

      var complete = function complete() {
        _this2.setTransitioning(false);

        $__default['default'](_this2._element).removeClass(CLASS_NAME_COLLAPSING).addClass(CLASS_NAME_COLLAPSE).trigger(EVENT_HIDDEN);
      };

      this._element.style[dimension] = '';
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $__default['default'](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
    };

    _proto.setTransitioning = function setTransitioning(isTransitioning) {
      this._isTransitioning = isTransitioning;
    };

    _proto.dispose = function dispose() {
      $__default['default'].removeData(this._element, DATA_KEY$3);
      this._config = null;
      this._parent = null;
      this._element = null;
      this._triggerArray = null;
      this._isTransitioning = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default$1, config);
      config.toggle = Boolean(config.toggle); // Coerce string values

      Util.typeCheckConfig(NAME$3, config, DefaultType$1);
      return config;
    };

    _proto._getDimension = function _getDimension() {
      var hasWidth = $__default['default'](this._element).hasClass(DIMENSION_WIDTH);
      return hasWidth ? DIMENSION_WIDTH : DIMENSION_HEIGHT;
    };

    _proto._getParent = function _getParent() {
      var _this3 = this;

      var parent;

      if (Util.isElement(this._config.parent)) {
        parent = this._config.parent; // It's a jQuery object

        if (typeof this._config.parent.jquery !== 'undefined') {
          parent = this._config.parent[0];
        }
      } else {
        parent = document.querySelector(this._config.parent);
      }

      var selector = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]";
      var children = [].slice.call(parent.querySelectorAll(selector));
      $__default['default'](children).each(function (i, element) {
        _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
      });
      return parent;
    };

    _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
      var isOpen = $__default['default'](element).hasClass(CLASS_NAME_SHOW$1);

      if (triggerArray.length) {
        $__default['default'](triggerArray).toggleClass(CLASS_NAME_COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
      }
    } // Static
    ;

    Collapse._getTargetFromElement = function _getTargetFromElement(element) {
      var selector = Util.getSelectorFromElement(element);
      return selector ? document.querySelector(selector) : null;
    };

    Collapse._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $__default['default'](this);
        var data = $element.data(DATA_KEY$3);

        var _config = _extends({}, Default$1, $element.data(), typeof config === 'object' && config ? config : {});

        if (!data && _config.toggle && typeof config === 'string' && /show|hide/.test(config)) {
          _config.toggle = false;
        }

        if (!data) {
          data = new Collapse(this, _config);
          $element.data(DATA_KEY$3, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Collapse, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$3;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$1;
      }
    }]);

    return Collapse;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](document).on(EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$1, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.currentTarget.tagName === 'A') {
      event.preventDefault();
    }

    var $trigger = $__default['default'](this);
    var selector = Util.getSelectorFromElement(this);
    var selectors = [].slice.call(document.querySelectorAll(selector));
    $__default['default'](selectors).each(function () {
      var $target = $__default['default'](this);
      var data = $target.data(DATA_KEY$3);
      var config = data ? 'toggle' : $trigger.data();

      Collapse._jQueryInterface.call($target, config);
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$3] = Collapse._jQueryInterface;
  $__default['default'].fn[NAME$3].Constructor = Collapse;

  $__default['default'].fn[NAME$3].noConflict = function () {
    $__default['default'].fn[NAME$3] = JQUERY_NO_CONFLICT$3;
    return Collapse._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$4 = 'dropdown';
  var VERSION$4 = '4.5.3';
  var DATA_KEY$4 = 'bs.dropdown';
  var EVENT_KEY$4 = "." + DATA_KEY$4;
  var DATA_API_KEY$4 = '.data-api';
  var JQUERY_NO_CONFLICT$4 = $__default['default'].fn[NAME$4];
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

  var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key

  var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

  var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

  var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

  var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

  var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE);
  var EVENT_HIDE$1 = "hide" + EVENT_KEY$4;
  var EVENT_HIDDEN$1 = "hidden" + EVENT_KEY$4;
  var EVENT_SHOW$1 = "show" + EVENT_KEY$4;
  var EVENT_SHOWN$1 = "shown" + EVENT_KEY$4;
  var EVENT_CLICK = "click" + EVENT_KEY$4;
  var EVENT_CLICK_DATA_API$4 = "click" + EVENT_KEY$4 + DATA_API_KEY$4;
  var EVENT_KEYDOWN_DATA_API = "keydown" + EVENT_KEY$4 + DATA_API_KEY$4;
  var EVENT_KEYUP_DATA_API = "keyup" + EVENT_KEY$4 + DATA_API_KEY$4;
  var CLASS_NAME_DISABLED = 'disabled';
  var CLASS_NAME_SHOW$2 = 'show';
  var CLASS_NAME_DROPUP = 'dropup';
  var CLASS_NAME_DROPRIGHT = 'dropright';
  var CLASS_NAME_DROPLEFT = 'dropleft';
  var CLASS_NAME_MENURIGHT = 'dropdown-menu-right';
  var CLASS_NAME_POSITION_STATIC = 'position-static';
  var SELECTOR_DATA_TOGGLE$2 = '[data-toggle="dropdown"]';
  var SELECTOR_FORM_CHILD = '.dropdown form';
  var SELECTOR_MENU = '.dropdown-menu';
  var SELECTOR_NAVBAR_NAV = '.navbar-nav';
  var SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
  var PLACEMENT_TOP = 'top-start';
  var PLACEMENT_TOPEND = 'top-end';
  var PLACEMENT_BOTTOM = 'bottom-start';
  var PLACEMENT_BOTTOMEND = 'bottom-end';
  var PLACEMENT_RIGHT = 'right-start';
  var PLACEMENT_LEFT = 'left-start';
  var Default$2 = {
    offset: 0,
    flip: true,
    boundary: 'scrollParent',
    reference: 'toggle',
    display: 'dynamic',
    popperConfig: null
  };
  var DefaultType$2 = {
    offset: '(number|string|function)',
    flip: 'boolean',
    boundary: '(string|element)',
    reference: '(string|element)',
    display: 'string',
    popperConfig: '(null|object)'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Dropdown = /*#__PURE__*/function () {
    function Dropdown(element, config) {
      this._element = element;
      this._popper = null;
      this._config = this._getConfig(config);
      this._menu = this._getMenuElement();
      this._inNavbar = this._detectNavbar();

      this._addEventListeners();
    } // Getters


    var _proto = Dropdown.prototype;

    // Public
    _proto.toggle = function toggle() {
      if (this._element.disabled || $__default['default'](this._element).hasClass(CLASS_NAME_DISABLED)) {
        return;
      }

      var isActive = $__default['default'](this._menu).hasClass(CLASS_NAME_SHOW$2);

      Dropdown._clearMenus();

      if (isActive) {
        return;
      }

      this.show(true);
    };

    _proto.show = function show(usePopper) {
      if (usePopper === void 0) {
        usePopper = false;
      }

      if (this._element.disabled || $__default['default'](this._element).hasClass(CLASS_NAME_DISABLED) || $__default['default'](this._menu).hasClass(CLASS_NAME_SHOW$2)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var showEvent = $__default['default'].Event(EVENT_SHOW$1, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $__default['default'](parent).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      } // Disable totally Popper.js for Dropdown in Navbar


      if (!this._inNavbar && usePopper) {
        /**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */
        if (typeof Popper__default['default'] === 'undefined') {
          throw new TypeError('Bootstrap\'s dropdowns require Popper.js (https://popper.js.org/)');
        }

        var referenceElement = this._element;

        if (this._config.reference === 'parent') {
          referenceElement = parent;
        } else if (Util.isElement(this._config.reference)) {
          referenceElement = this._config.reference; // Check if it's jQuery element

          if (typeof this._config.reference.jquery !== 'undefined') {
            referenceElement = this._config.reference[0];
          }
        } // If boundary is not `scrollParent`, then set position to `static`
        // to allow the menu to "escape" the scroll parent's boundaries
        // https://github.com/twbs/bootstrap/issues/24251


        if (this._config.boundary !== 'scrollParent') {
          $__default['default'](parent).addClass(CLASS_NAME_POSITION_STATIC);
        }

        this._popper = new Popper__default['default'](referenceElement, this._menu, this._getPopperConfig());
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement && $__default['default'](parent).closest(SELECTOR_NAVBAR_NAV).length === 0) {
        $__default['default'](document.body).children().on('mouseover', null, $__default['default'].noop);
      }

      this._element.focus();

      this._element.setAttribute('aria-expanded', true);

      $__default['default'](this._menu).toggleClass(CLASS_NAME_SHOW$2);
      $__default['default'](parent).toggleClass(CLASS_NAME_SHOW$2).trigger($__default['default'].Event(EVENT_SHOWN$1, relatedTarget));
    };

    _proto.hide = function hide() {
      if (this._element.disabled || $__default['default'](this._element).hasClass(CLASS_NAME_DISABLED) || !$__default['default'](this._menu).hasClass(CLASS_NAME_SHOW$2)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var hideEvent = $__default['default'].Event(EVENT_HIDE$1, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $__default['default'](parent).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      if (this._popper) {
        this._popper.destroy();
      }

      $__default['default'](this._menu).toggleClass(CLASS_NAME_SHOW$2);
      $__default['default'](parent).toggleClass(CLASS_NAME_SHOW$2).trigger($__default['default'].Event(EVENT_HIDDEN$1, relatedTarget));
    };

    _proto.dispose = function dispose() {
      $__default['default'].removeData(this._element, DATA_KEY$4);
      $__default['default'](this._element).off(EVENT_KEY$4);
      this._element = null;
      this._menu = null;

      if (this._popper !== null) {
        this._popper.destroy();

        this._popper = null;
      }
    };

    _proto.update = function update() {
      this._inNavbar = this._detectNavbar();

      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Private
    ;

    _proto._addEventListeners = function _addEventListeners() {
      var _this = this;

      $__default['default'](this._element).on(EVENT_CLICK, function (event) {
        event.preventDefault();
        event.stopPropagation();

        _this.toggle();
      });
    };

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, this.constructor.Default, $__default['default'](this._element).data(), config);
      Util.typeCheckConfig(NAME$4, config, this.constructor.DefaultType);
      return config;
    };

    _proto._getMenuElement = function _getMenuElement() {
      if (!this._menu) {
        var parent = Dropdown._getParentFromElement(this._element);

        if (parent) {
          this._menu = parent.querySelector(SELECTOR_MENU);
        }
      }

      return this._menu;
    };

    _proto._getPlacement = function _getPlacement() {
      var $parentDropdown = $__default['default'](this._element.parentNode);
      var placement = PLACEMENT_BOTTOM; // Handle dropup

      if ($parentDropdown.hasClass(CLASS_NAME_DROPUP)) {
        placement = $__default['default'](this._menu).hasClass(CLASS_NAME_MENURIGHT) ? PLACEMENT_TOPEND : PLACEMENT_TOP;
      } else if ($parentDropdown.hasClass(CLASS_NAME_DROPRIGHT)) {
        placement = PLACEMENT_RIGHT;
      } else if ($parentDropdown.hasClass(CLASS_NAME_DROPLEFT)) {
        placement = PLACEMENT_LEFT;
      } else if ($__default['default'](this._menu).hasClass(CLASS_NAME_MENURIGHT)) {
        placement = PLACEMENT_BOTTOMEND;
      }

      return placement;
    };

    _proto._detectNavbar = function _detectNavbar() {
      return $__default['default'](this._element).closest('.navbar').length > 0;
    };

    _proto._getOffset = function _getOffset() {
      var _this2 = this;

      var offset = {};

      if (typeof this._config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _extends({}, data.offsets, _this2._config.offset(data.offsets, _this2._element) || {});
          return data;
        };
      } else {
        offset.offset = this._config.offset;
      }

      return offset;
    };

    _proto._getPopperConfig = function _getPopperConfig() {
      var popperConfig = {
        placement: this._getPlacement(),
        modifiers: {
          offset: this._getOffset(),
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        }
      }; // Disable Popper.js if we have a static display

      if (this._config.display === 'static') {
        popperConfig.modifiers.applyStyle = {
          enabled: false
        };
      }

      return _extends({}, popperConfig, this._config.popperConfig);
    } // Static
    ;

    Dropdown._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default['default'](this).data(DATA_KEY$4);

        var _config = typeof config === 'object' ? config : null;

        if (!data) {
          data = new Dropdown(this, _config);
          $__default['default'](this).data(DATA_KEY$4, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    Dropdown._clearMenus = function _clearMenus(event) {
      if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
        return;
      }

      var toggles = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE$2));

      for (var i = 0, len = toggles.length; i < len; i++) {
        var parent = Dropdown._getParentFromElement(toggles[i]);

        var context = $__default['default'](toggles[i]).data(DATA_KEY$4);
        var relatedTarget = {
          relatedTarget: toggles[i]
        };

        if (event && event.type === 'click') {
          relatedTarget.clickEvent = event;
        }

        if (!context) {
          continue;
        }

        var dropdownMenu = context._menu;

        if (!$__default['default'](parent).hasClass(CLASS_NAME_SHOW$2)) {
          continue;
        }

        if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $__default['default'].contains(parent, event.target)) {
          continue;
        }

        var hideEvent = $__default['default'].Event(EVENT_HIDE$1, relatedTarget);
        $__default['default'](parent).trigger(hideEvent);

        if (hideEvent.isDefaultPrevented()) {
          continue;
        } // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support


        if ('ontouchstart' in document.documentElement) {
          $__default['default'](document.body).children().off('mouseover', null, $__default['default'].noop);
        }

        toggles[i].setAttribute('aria-expanded', 'false');

        if (context._popper) {
          context._popper.destroy();
        }

        $__default['default'](dropdownMenu).removeClass(CLASS_NAME_SHOW$2);
        $__default['default'](parent).removeClass(CLASS_NAME_SHOW$2).trigger($__default['default'].Event(EVENT_HIDDEN$1, relatedTarget));
      }
    };

    Dropdown._getParentFromElement = function _getParentFromElement(element) {
      var parent;
      var selector = Util.getSelectorFromElement(element);

      if (selector) {
        parent = document.querySelector(selector);
      }

      return parent || element.parentNode;
    } // eslint-disable-next-line complexity
    ;

    Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
      // If not input/textarea:
      //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
      // If input/textarea:
      //  - If space key => not a dropdown command
      //  - If key is other than escape
      //    - If key is not up or down => not a dropdown command
      //    - If trigger inside the menu => not a dropdown command
      if (/input|textarea/i.test(event.target.tagName) ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || $__default['default'](event.target).closest(SELECTOR_MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
        return;
      }

      if (this.disabled || $__default['default'](this).hasClass(CLASS_NAME_DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this);

      var isActive = $__default['default'](parent).hasClass(CLASS_NAME_SHOW$2);

      if (!isActive && event.which === ESCAPE_KEYCODE) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (!isActive || event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE) {
        if (event.which === ESCAPE_KEYCODE) {
          $__default['default'](parent.querySelector(SELECTOR_DATA_TOGGLE$2)).trigger('focus');
        }

        $__default['default'](this).trigger('click');
        return;
      }

      var items = [].slice.call(parent.querySelectorAll(SELECTOR_VISIBLE_ITEMS)).filter(function (item) {
        return $__default['default'](item).is(':visible');
      });

      if (items.length === 0) {
        return;
      }

      var index = items.indexOf(event.target);

      if (event.which === ARROW_UP_KEYCODE && index > 0) {
        // Up
        index--;
      }

      if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
        // Down
        index++;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
    };

    _createClass(Dropdown, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$4;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$2;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$2;
      }
    }]);

    return Dropdown;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](document).on(EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$2, Dropdown._dataApiKeydownHandler).on(EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown._dataApiKeydownHandler).on(EVENT_CLICK_DATA_API$4 + " " + EVENT_KEYUP_DATA_API, Dropdown._clearMenus).on(EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$2, function (event) {
    event.preventDefault();
    event.stopPropagation();

    Dropdown._jQueryInterface.call($__default['default'](this), 'toggle');
  }).on(EVENT_CLICK_DATA_API$4, SELECTOR_FORM_CHILD, function (e) {
    e.stopPropagation();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$4] = Dropdown._jQueryInterface;
  $__default['default'].fn[NAME$4].Constructor = Dropdown;

  $__default['default'].fn[NAME$4].noConflict = function () {
    $__default['default'].fn[NAME$4] = JQUERY_NO_CONFLICT$4;
    return Dropdown._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$5 = 'modal';
  var VERSION$5 = '4.5.3';
  var DATA_KEY$5 = 'bs.modal';
  var EVENT_KEY$5 = "." + DATA_KEY$5;
  var DATA_API_KEY$5 = '.data-api';
  var JQUERY_NO_CONFLICT$5 = $__default['default'].fn[NAME$5];
  var ESCAPE_KEYCODE$1 = 27; // KeyboardEvent.which value for Escape (Esc) key

  var Default$3 = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
  };
  var DefaultType$3 = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
  };
  var EVENT_HIDE$2 = "hide" + EVENT_KEY$5;
  var EVENT_HIDE_PREVENTED = "hidePrevented" + EVENT_KEY$5;
  var EVENT_HIDDEN$2 = "hidden" + EVENT_KEY$5;
  var EVENT_SHOW$2 = "show" + EVENT_KEY$5;
  var EVENT_SHOWN$2 = "shown" + EVENT_KEY$5;
  var EVENT_FOCUSIN = "focusin" + EVENT_KEY$5;
  var EVENT_RESIZE = "resize" + EVENT_KEY$5;
  var EVENT_CLICK_DISMISS = "click.dismiss" + EVENT_KEY$5;
  var EVENT_KEYDOWN_DISMISS = "keydown.dismiss" + EVENT_KEY$5;
  var EVENT_MOUSEUP_DISMISS = "mouseup.dismiss" + EVENT_KEY$5;
  var EVENT_MOUSEDOWN_DISMISS = "mousedown.dismiss" + EVENT_KEY$5;
  var EVENT_CLICK_DATA_API$5 = "click" + EVENT_KEY$5 + DATA_API_KEY$5;
  var CLASS_NAME_SCROLLABLE = 'modal-dialog-scrollable';
  var CLASS_NAME_SCROLLBAR_MEASURER = 'modal-scrollbar-measure';
  var CLASS_NAME_BACKDROP = 'modal-backdrop';
  var CLASS_NAME_OPEN = 'modal-open';
  var CLASS_NAME_FADE$1 = 'fade';
  var CLASS_NAME_SHOW$3 = 'show';
  var CLASS_NAME_STATIC = 'modal-static';
  var SELECTOR_DIALOG = '.modal-dialog';
  var SELECTOR_MODAL_BODY = '.modal-body';
  var SELECTOR_DATA_TOGGLE$3 = '[data-toggle="modal"]';
  var SELECTOR_DATA_DISMISS = '[data-dismiss="modal"]';
  var SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
  var SELECTOR_STICKY_CONTENT = '.sticky-top';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Modal = /*#__PURE__*/function () {
    function Modal(element, config) {
      this._config = this._getConfig(config);
      this._element = element;
      this._dialog = element.querySelector(SELECTOR_DIALOG);
      this._backdrop = null;
      this._isShown = false;
      this._isBodyOverflowing = false;
      this._ignoreBackdropClick = false;
      this._isTransitioning = false;
      this._scrollbarWidth = 0;
    } // Getters


    var _proto = Modal.prototype;

    // Public
    _proto.toggle = function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    };

    _proto.show = function show(relatedTarget) {
      var _this = this;

      if (this._isShown || this._isTransitioning) {
        return;
      }

      if ($__default['default'](this._element).hasClass(CLASS_NAME_FADE$1)) {
        this._isTransitioning = true;
      }

      var showEvent = $__default['default'].Event(EVENT_SHOW$2, {
        relatedTarget: relatedTarget
      });
      $__default['default'](this._element).trigger(showEvent);

      if (this._isShown || showEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = true;

      this._checkScrollbar();

      this._setScrollbar();

      this._adjustDialog();

      this._setEscapeEvent();

      this._setResizeEvent();

      $__default['default'](this._element).on(EVENT_CLICK_DISMISS, SELECTOR_DATA_DISMISS, function (event) {
        return _this.hide(event);
      });
      $__default['default'](this._dialog).on(EVENT_MOUSEDOWN_DISMISS, function () {
        $__default['default'](_this._element).one(EVENT_MOUSEUP_DISMISS, function (event) {
          if ($__default['default'](event.target).is(_this._element)) {
            _this._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(function () {
        return _this._showElement(relatedTarget);
      });
    };

    _proto.hide = function hide(event) {
      var _this2 = this;

      if (event) {
        event.preventDefault();
      }

      if (!this._isShown || this._isTransitioning) {
        return;
      }

      var hideEvent = $__default['default'].Event(EVENT_HIDE$2);
      $__default['default'](this._element).trigger(hideEvent);

      if (!this._isShown || hideEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = false;
      var transition = $__default['default'](this._element).hasClass(CLASS_NAME_FADE$1);

      if (transition) {
        this._isTransitioning = true;
      }

      this._setEscapeEvent();

      this._setResizeEvent();

      $__default['default'](document).off(EVENT_FOCUSIN);
      $__default['default'](this._element).removeClass(CLASS_NAME_SHOW$3);
      $__default['default'](this._element).off(EVENT_CLICK_DISMISS);
      $__default['default'](this._dialog).off(EVENT_MOUSEDOWN_DISMISS);

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $__default['default'](this._element).one(Util.TRANSITION_END, function (event) {
          return _this2._hideModal(event);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        this._hideModal();
      }
    };

    _proto.dispose = function dispose() {
      [window, this._element, this._dialog].forEach(function (htmlElement) {
        return $__default['default'](htmlElement).off(EVENT_KEY$5);
      });
      /**
       * `document` has 2 events `EVENT_FOCUSIN` and `EVENT_CLICK_DATA_API`
       * Do not move `document` in `htmlElements` array
       * It will remove `EVENT_CLICK_DATA_API` event that should remain
       */

      $__default['default'](document).off(EVENT_FOCUSIN);
      $__default['default'].removeData(this._element, DATA_KEY$5);
      this._config = null;
      this._element = null;
      this._dialog = null;
      this._backdrop = null;
      this._isShown = null;
      this._isBodyOverflowing = null;
      this._ignoreBackdropClick = null;
      this._isTransitioning = null;
      this._scrollbarWidth = null;
    };

    _proto.handleUpdate = function handleUpdate() {
      this._adjustDialog();
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default$3, config);
      Util.typeCheckConfig(NAME$5, config, DefaultType$3);
      return config;
    };

    _proto._triggerBackdropTransition = function _triggerBackdropTransition() {
      var _this3 = this;

      if (this._config.backdrop === 'static') {
        var hideEventPrevented = $__default['default'].Event(EVENT_HIDE_PREVENTED);
        $__default['default'](this._element).trigger(hideEventPrevented);

        if (hideEventPrevented.isDefaultPrevented()) {
          return;
        }

        var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

        if (!isModalOverflowing) {
          this._element.style.overflowY = 'hidden';
        }

        this._element.classList.add(CLASS_NAME_STATIC);

        var modalTransitionDuration = Util.getTransitionDurationFromElement(this._dialog);
        $__default['default'](this._element).off(Util.TRANSITION_END);
        $__default['default'](this._element).one(Util.TRANSITION_END, function () {
          _this3._element.classList.remove(CLASS_NAME_STATIC);

          if (!isModalOverflowing) {
            $__default['default'](_this3._element).one(Util.TRANSITION_END, function () {
              _this3._element.style.overflowY = '';
            }).emulateTransitionEnd(_this3._element, modalTransitionDuration);
          }
        }).emulateTransitionEnd(modalTransitionDuration);

        this._element.focus();
      } else {
        this.hide();
      }
    };

    _proto._showElement = function _showElement(relatedTarget) {
      var _this4 = this;

      var transition = $__default['default'](this._element).hasClass(CLASS_NAME_FADE$1);
      var modalBody = this._dialog ? this._dialog.querySelector(SELECTOR_MODAL_BODY) : null;

      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // Don't move modal's DOM position
        document.body.appendChild(this._element);
      }

      this._element.style.display = 'block';

      this._element.removeAttribute('aria-hidden');

      this._element.setAttribute('aria-modal', true);

      this._element.setAttribute('role', 'dialog');

      if ($__default['default'](this._dialog).hasClass(CLASS_NAME_SCROLLABLE) && modalBody) {
        modalBody.scrollTop = 0;
      } else {
        this._element.scrollTop = 0;
      }

      if (transition) {
        Util.reflow(this._element);
      }

      $__default['default'](this._element).addClass(CLASS_NAME_SHOW$3);

      if (this._config.focus) {
        this._enforceFocus();
      }

      var shownEvent = $__default['default'].Event(EVENT_SHOWN$2, {
        relatedTarget: relatedTarget
      });

      var transitionComplete = function transitionComplete() {
        if (_this4._config.focus) {
          _this4._element.focus();
        }

        _this4._isTransitioning = false;
        $__default['default'](_this4._element).trigger(shownEvent);
      };

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._dialog);
        $__default['default'](this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(transitionDuration);
      } else {
        transitionComplete();
      }
    };

    _proto._enforceFocus = function _enforceFocus() {
      var _this5 = this;

      $__default['default'](document).off(EVENT_FOCUSIN) // Guard against infinite focus loop
      .on(EVENT_FOCUSIN, function (event) {
        if (document !== event.target && _this5._element !== event.target && $__default['default'](_this5._element).has(event.target).length === 0) {
          _this5._element.focus();
        }
      });
    };

    _proto._setEscapeEvent = function _setEscapeEvent() {
      var _this6 = this;

      if (this._isShown) {
        $__default['default'](this._element).on(EVENT_KEYDOWN_DISMISS, function (event) {
          if (_this6._config.keyboard && event.which === ESCAPE_KEYCODE$1) {
            event.preventDefault();

            _this6.hide();
          } else if (!_this6._config.keyboard && event.which === ESCAPE_KEYCODE$1) {
            _this6._triggerBackdropTransition();
          }
        });
      } else if (!this._isShown) {
        $__default['default'](this._element).off(EVENT_KEYDOWN_DISMISS);
      }
    };

    _proto._setResizeEvent = function _setResizeEvent() {
      var _this7 = this;

      if (this._isShown) {
        $__default['default'](window).on(EVENT_RESIZE, function (event) {
          return _this7.handleUpdate(event);
        });
      } else {
        $__default['default'](window).off(EVENT_RESIZE);
      }
    };

    _proto._hideModal = function _hideModal() {
      var _this8 = this;

      this._element.style.display = 'none';

      this._element.setAttribute('aria-hidden', true);

      this._element.removeAttribute('aria-modal');

      this._element.removeAttribute('role');

      this._isTransitioning = false;

      this._showBackdrop(function () {
        $__default['default'](document.body).removeClass(CLASS_NAME_OPEN);

        _this8._resetAdjustments();

        _this8._resetScrollbar();

        $__default['default'](_this8._element).trigger(EVENT_HIDDEN$2);
      });
    };

    _proto._removeBackdrop = function _removeBackdrop() {
      if (this._backdrop) {
        $__default['default'](this._backdrop).remove();
        this._backdrop = null;
      }
    };

    _proto._showBackdrop = function _showBackdrop(callback) {
      var _this9 = this;

      var animate = $__default['default'](this._element).hasClass(CLASS_NAME_FADE$1) ? CLASS_NAME_FADE$1 : '';

      if (this._isShown && this._config.backdrop) {
        this._backdrop = document.createElement('div');
        this._backdrop.className = CLASS_NAME_BACKDROP;

        if (animate) {
          this._backdrop.classList.add(animate);
        }

        $__default['default'](this._backdrop).appendTo(document.body);
        $__default['default'](this._element).on(EVENT_CLICK_DISMISS, function (event) {
          if (_this9._ignoreBackdropClick) {
            _this9._ignoreBackdropClick = false;
            return;
          }

          if (event.target !== event.currentTarget) {
            return;
          }

          _this9._triggerBackdropTransition();
        });

        if (animate) {
          Util.reflow(this._backdrop);
        }

        $__default['default'](this._backdrop).addClass(CLASS_NAME_SHOW$3);

        if (!callback) {
          return;
        }

        if (!animate) {
          callback();
          return;
        }

        var backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);
        $__default['default'](this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(backdropTransitionDuration);
      } else if (!this._isShown && this._backdrop) {
        $__default['default'](this._backdrop).removeClass(CLASS_NAME_SHOW$3);

        var callbackRemove = function callbackRemove() {
          _this9._removeBackdrop();

          if (callback) {
            callback();
          }
        };

        if ($__default['default'](this._element).hasClass(CLASS_NAME_FADE$1)) {
          var _backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);

          $__default['default'](this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);
        } else {
          callbackRemove();
        }
      } else if (callback) {
        callback();
      }
    } // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------
    ;

    _proto._adjustDialog = function _adjustDialog() {
      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!this._isBodyOverflowing && isModalOverflowing) {
        this._element.style.paddingLeft = this._scrollbarWidth + "px";
      }

      if (this._isBodyOverflowing && !isModalOverflowing) {
        this._element.style.paddingRight = this._scrollbarWidth + "px";
      }
    };

    _proto._resetAdjustments = function _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    };

    _proto._checkScrollbar = function _checkScrollbar() {
      var rect = document.body.getBoundingClientRect();
      this._isBodyOverflowing = Math.round(rect.left + rect.right) < window.innerWidth;
      this._scrollbarWidth = this._getScrollbarWidth();
    };

    _proto._setScrollbar = function _setScrollbar() {
      var _this10 = this;

      if (this._isBodyOverflowing) {
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
        var fixedContent = [].slice.call(document.querySelectorAll(SELECTOR_FIXED_CONTENT));
        var stickyContent = [].slice.call(document.querySelectorAll(SELECTOR_STICKY_CONTENT)); // Adjust fixed content padding

        $__default['default'](fixedContent).each(function (index, element) {
          var actualPadding = element.style.paddingRight;
          var calculatedPadding = $__default['default'](element).css('padding-right');
          $__default['default'](element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this10._scrollbarWidth + "px");
        }); // Adjust sticky content margin

        $__default['default'](stickyContent).each(function (index, element) {
          var actualMargin = element.style.marginRight;
          var calculatedMargin = $__default['default'](element).css('margin-right');
          $__default['default'](element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this10._scrollbarWidth + "px");
        }); // Adjust body padding

        var actualPadding = document.body.style.paddingRight;
        var calculatedPadding = $__default['default'](document.body).css('padding-right');
        $__default['default'](document.body).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
      }

      $__default['default'](document.body).addClass(CLASS_NAME_OPEN);
    };

    _proto._resetScrollbar = function _resetScrollbar() {
      // Restore fixed content padding
      var fixedContent = [].slice.call(document.querySelectorAll(SELECTOR_FIXED_CONTENT));
      $__default['default'](fixedContent).each(function (index, element) {
        var padding = $__default['default'](element).data('padding-right');
        $__default['default'](element).removeData('padding-right');
        element.style.paddingRight = padding ? padding : '';
      }); // Restore sticky content

      var elements = [].slice.call(document.querySelectorAll("" + SELECTOR_STICKY_CONTENT));
      $__default['default'](elements).each(function (index, element) {
        var margin = $__default['default'](element).data('margin-right');

        if (typeof margin !== 'undefined') {
          $__default['default'](element).css('margin-right', margin).removeData('margin-right');
        }
      }); // Restore body padding

      var padding = $__default['default'](document.body).data('padding-right');
      $__default['default'](document.body).removeData('padding-right');
      document.body.style.paddingRight = padding ? padding : '';
    };

    _proto._getScrollbarWidth = function _getScrollbarWidth() {
      // thx d.walsh
      var scrollDiv = document.createElement('div');
      scrollDiv.className = CLASS_NAME_SCROLLBAR_MEASURER;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    } // Static
    ;

    Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        var data = $__default['default'](this).data(DATA_KEY$5);

        var _config = _extends({}, Default$3, $__default['default'](this).data(), typeof config === 'object' && config ? config : {});

        if (!data) {
          data = new Modal(this, _config);
          $__default['default'](this).data(DATA_KEY$5, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](relatedTarget);
        } else if (_config.show) {
          data.show(relatedTarget);
        }
      });
    };

    _createClass(Modal, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$5;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$3;
      }
    }]);

    return Modal;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](document).on(EVENT_CLICK_DATA_API$5, SELECTOR_DATA_TOGGLE$3, function (event) {
    var _this11 = this;

    var target;
    var selector = Util.getSelectorFromElement(this);

    if (selector) {
      target = document.querySelector(selector);
    }

    var config = $__default['default'](target).data(DATA_KEY$5) ? 'toggle' : _extends({}, $__default['default'](target).data(), $__default['default'](this).data());

    if (this.tagName === 'A' || this.tagName === 'AREA') {
      event.preventDefault();
    }

    var $target = $__default['default'](target).one(EVENT_SHOW$2, function (showEvent) {
      if (showEvent.isDefaultPrevented()) {
        // Only register focus restorer if modal will actually get shown
        return;
      }

      $target.one(EVENT_HIDDEN$2, function () {
        if ($__default['default'](_this11).is(':visible')) {
          _this11.focus();
        }
      });
    });

    Modal._jQueryInterface.call($__default['default'](target), config, this);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$5] = Modal._jQueryInterface;
  $__default['default'].fn[NAME$5].Constructor = Modal;

  $__default['default'].fn[NAME$5].noConflict = function () {
    $__default['default'].fn[NAME$5] = JQUERY_NO_CONFLICT$5;
    return Modal._jQueryInterface;
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.5.3): tools/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  var uriAttrs = ['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href'];
  var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  var DefaultWhitelist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
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
    img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
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
  };
  /**
   * A pattern that recognizes a commonly useful subset of URLs that are safe.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi;
  /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

  function allowedAttribute(attr, allowedAttributeList) {
    var attrName = attr.nodeName.toLowerCase();

    if (allowedAttributeList.indexOf(attrName) !== -1) {
      if (uriAttrs.indexOf(attrName) !== -1) {
        return Boolean(attr.nodeValue.match(SAFE_URL_PATTERN) || attr.nodeValue.match(DATA_URL_PATTERN));
      }

      return true;
    }

    var regExp = allowedAttributeList.filter(function (attrRegex) {
      return attrRegex instanceof RegExp;
    }); // Check if a regular expression validates the attribute.

    for (var i = 0, len = regExp.length; i < len; i++) {
      if (attrName.match(regExp[i])) {
        return true;
      }
    }

    return false;
  }

  function sanitizeHtml(unsafeHtml, whiteList, sanitizeFn) {
    if (unsafeHtml.length === 0) {
      return unsafeHtml;
    }

    if (sanitizeFn && typeof sanitizeFn === 'function') {
      return sanitizeFn(unsafeHtml);
    }

    var domParser = new window.DOMParser();
    var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
    var whitelistKeys = Object.keys(whiteList);
    var elements = [].slice.call(createdDocument.body.querySelectorAll('*'));

    var _loop = function _loop(i, len) {
      var el = elements[i];
      var elName = el.nodeName.toLowerCase();

      if (whitelistKeys.indexOf(el.nodeName.toLowerCase()) === -1) {
        el.parentNode.removeChild(el);
        return "continue";
      }

      var attributeList = [].slice.call(el.attributes);
      var whitelistedAttributes = [].concat(whiteList['*'] || [], whiteList[elName] || []);
      attributeList.forEach(function (attr) {
        if (!allowedAttribute(attr, whitelistedAttributes)) {
          el.removeAttribute(attr.nodeName);
        }
      });
    };

    for (var i = 0, len = elements.length; i < len; i++) {
      var _ret = _loop(i);

      if (_ret === "continue") continue;
    }

    return createdDocument.body.innerHTML;
  }

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$6 = 'tooltip';
  var VERSION$6 = '4.5.3';
  var DATA_KEY$6 = 'bs.tooltip';
  var EVENT_KEY$6 = "." + DATA_KEY$6;
  var JQUERY_NO_CONFLICT$6 = $__default['default'].fn[NAME$6];
  var CLASS_PREFIX = 'bs-tooltip';
  var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
  var DISALLOWED_ATTRIBUTES = ['sanitize', 'whiteList', 'sanitizeFn'];
  var DefaultType$4 = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(number|string|function)',
    container: '(string|element|boolean)',
    fallbackPlacement: '(string|array)',
    boundary: '(string|element)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    whiteList: 'object',
    popperConfig: '(null|object)'
  };
  var AttachmentMap = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    LEFT: 'left'
  };
  var Default$4 = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: 0,
    container: false,
    fallbackPlacement: 'flip',
    boundary: 'scrollParent',
    sanitize: true,
    sanitizeFn: null,
    whiteList: DefaultWhitelist,
    popperConfig: null
  };
  var HOVER_STATE_SHOW = 'show';
  var HOVER_STATE_OUT = 'out';
  var Event = {
    HIDE: "hide" + EVENT_KEY$6,
    HIDDEN: "hidden" + EVENT_KEY$6,
    SHOW: "show" + EVENT_KEY$6,
    SHOWN: "shown" + EVENT_KEY$6,
    INSERTED: "inserted" + EVENT_KEY$6,
    CLICK: "click" + EVENT_KEY$6,
    FOCUSIN: "focusin" + EVENT_KEY$6,
    FOCUSOUT: "focusout" + EVENT_KEY$6,
    MOUSEENTER: "mouseenter" + EVENT_KEY$6,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$6
  };
  var CLASS_NAME_FADE$2 = 'fade';
  var CLASS_NAME_SHOW$4 = 'show';
  var SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
  var SELECTOR_ARROW = '.arrow';
  var TRIGGER_HOVER = 'hover';
  var TRIGGER_FOCUS = 'focus';
  var TRIGGER_CLICK = 'click';
  var TRIGGER_MANUAL = 'manual';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tooltip = /*#__PURE__*/function () {
    function Tooltip(element, config) {
      if (typeof Popper__default['default'] === 'undefined') {
        throw new TypeError('Bootstrap\'s tooltips require Popper.js (https://popper.js.org/)');
      } // private


      this._isEnabled = true;
      this._timeout = 0;
      this._hoverState = '';
      this._activeTrigger = {};
      this._popper = null; // Protected

      this.element = element;
      this.config = this._getConfig(config);
      this.tip = null;

      this._setListeners();
    } // Getters


    var _proto = Tooltip.prototype;

    // Public
    _proto.enable = function enable() {
      this._isEnabled = true;
    };

    _proto.disable = function disable() {
      this._isEnabled = false;
    };

    _proto.toggleEnabled = function toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    };

    _proto.toggle = function toggle(event) {
      if (!this._isEnabled) {
        return;
      }

      if (event) {
        var dataKey = this.constructor.DATA_KEY;
        var context = $__default['default'](event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $__default['default'](event.currentTarget).data(dataKey, context);
        }

        context._activeTrigger.click = !context._activeTrigger.click;

        if (context._isWithActiveTrigger()) {
          context._enter(null, context);
        } else {
          context._leave(null, context);
        }
      } else {
        if ($__default['default'](this.getTipElement()).hasClass(CLASS_NAME_SHOW$4)) {
          this._leave(null, this);

          return;
        }

        this._enter(null, this);
      }
    };

    _proto.dispose = function dispose() {
      clearTimeout(this._timeout);
      $__default['default'].removeData(this.element, this.constructor.DATA_KEY);
      $__default['default'](this.element).off(this.constructor.EVENT_KEY);
      $__default['default'](this.element).closest('.modal').off('hide.bs.modal', this._hideModalHandler);

      if (this.tip) {
        $__default['default'](this.tip).remove();
      }

      this._isEnabled = null;
      this._timeout = null;
      this._hoverState = null;
      this._activeTrigger = null;

      if (this._popper) {
        this._popper.destroy();
      }

      this._popper = null;
      this.element = null;
      this.config = null;
      this.tip = null;
    };

    _proto.show = function show() {
      var _this = this;

      if ($__default['default'](this.element).css('display') === 'none') {
        throw new Error('Please use show on visible elements');
      }

      var showEvent = $__default['default'].Event(this.constructor.Event.SHOW);

      if (this.isWithContent() && this._isEnabled) {
        $__default['default'](this.element).trigger(showEvent);
        var shadowRoot = Util.findShadowRoot(this.element);
        var isInTheDom = $__default['default'].contains(shadowRoot !== null ? shadowRoot : this.element.ownerDocument.documentElement, this.element);

        if (showEvent.isDefaultPrevented() || !isInTheDom) {
          return;
        }

        var tip = this.getTipElement();
        var tipId = Util.getUID(this.constructor.NAME);
        tip.setAttribute('id', tipId);
        this.element.setAttribute('aria-describedby', tipId);
        this.setContent();

        if (this.config.animation) {
          $__default['default'](tip).addClass(CLASS_NAME_FADE$2);
        }

        var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

        var attachment = this._getAttachment(placement);

        this.addAttachmentClass(attachment);

        var container = this._getContainer();

        $__default['default'](tip).data(this.constructor.DATA_KEY, this);

        if (!$__default['default'].contains(this.element.ownerDocument.documentElement, this.tip)) {
          $__default['default'](tip).appendTo(container);
        }

        $__default['default'](this.element).trigger(this.constructor.Event.INSERTED);
        this._popper = new Popper__default['default'](this.element, tip, this._getPopperConfig(attachment));
        $__default['default'](tip).addClass(CLASS_NAME_SHOW$4); // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

        if ('ontouchstart' in document.documentElement) {
          $__default['default'](document.body).children().on('mouseover', null, $__default['default'].noop);
        }

        var complete = function complete() {
          if (_this.config.animation) {
            _this._fixTransition();
          }

          var prevHoverState = _this._hoverState;
          _this._hoverState = null;
          $__default['default'](_this.element).trigger(_this.constructor.Event.SHOWN);

          if (prevHoverState === HOVER_STATE_OUT) {
            _this._leave(null, _this);
          }
        };

        if ($__default['default'](this.tip).hasClass(CLASS_NAME_FADE$2)) {
          var transitionDuration = Util.getTransitionDurationFromElement(this.tip);
          $__default['default'](this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        } else {
          complete();
        }
      }
    };

    _proto.hide = function hide(callback) {
      var _this2 = this;

      var tip = this.getTipElement();
      var hideEvent = $__default['default'].Event(this.constructor.Event.HIDE);

      var complete = function complete() {
        if (_this2._hoverState !== HOVER_STATE_SHOW && tip.parentNode) {
          tip.parentNode.removeChild(tip);
        }

        _this2._cleanTipClass();

        _this2.element.removeAttribute('aria-describedby');

        $__default['default'](_this2.element).trigger(_this2.constructor.Event.HIDDEN);

        if (_this2._popper !== null) {
          _this2._popper.destroy();
        }

        if (callback) {
          callback();
        }
      };

      $__default['default'](this.element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      $__default['default'](tip).removeClass(CLASS_NAME_SHOW$4); // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support

      if ('ontouchstart' in document.documentElement) {
        $__default['default'](document.body).children().off('mouseover', null, $__default['default'].noop);
      }

      this._activeTrigger[TRIGGER_CLICK] = false;
      this._activeTrigger[TRIGGER_FOCUS] = false;
      this._activeTrigger[TRIGGER_HOVER] = false;

      if ($__default['default'](this.tip).hasClass(CLASS_NAME_FADE$2)) {
        var transitionDuration = Util.getTransitionDurationFromElement(tip);
        $__default['default'](tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }

      this._hoverState = '';
    };

    _proto.update = function update() {
      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Protected
    ;

    _proto.isWithContent = function isWithContent() {
      return Boolean(this.getTitle());
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $__default['default'](this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $__default['default'](this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var tip = this.getTipElement();
      this.setElementContent($__default['default'](tip.querySelectorAll(SELECTOR_TOOLTIP_INNER)), this.getTitle());
      $__default['default'](tip).removeClass(CLASS_NAME_FADE$2 + " " + CLASS_NAME_SHOW$4);
    };

    _proto.setElementContent = function setElementContent($element, content) {
      if (typeof content === 'object' && (content.nodeType || content.jquery)) {
        // Content is a DOM node or a jQuery
        if (this.config.html) {
          if (!$__default['default'](content).parent().is($element)) {
            $element.empty().append(content);
          }
        } else {
          $element.text($__default['default'](content).text());
        }

        return;
      }

      if (this.config.html) {
        if (this.config.sanitize) {
          content = sanitizeHtml(content, this.config.whiteList, this.config.sanitizeFn);
        }

        $element.html(content);
      } else {
        $element.text(content);
      }
    };

    _proto.getTitle = function getTitle() {
      var title = this.element.getAttribute('data-original-title');

      if (!title) {
        title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
      }

      return title;
    } // Private
    ;

    _proto._getPopperConfig = function _getPopperConfig(attachment) {
      var _this3 = this;

      var defaultBsConfig = {
        placement: attachment,
        modifiers: {
          offset: this._getOffset(),
          flip: {
            behavior: this.config.fallbackPlacement
          },
          arrow: {
            element: SELECTOR_ARROW
          },
          preventOverflow: {
            boundariesElement: this.config.boundary
          }
        },
        onCreate: function onCreate(data) {
          if (data.originalPlacement !== data.placement) {
            _this3._handlePopperPlacementChange(data);
          }
        },
        onUpdate: function onUpdate(data) {
          return _this3._handlePopperPlacementChange(data);
        }
      };
      return _extends({}, defaultBsConfig, this.config.popperConfig);
    };

    _proto._getOffset = function _getOffset() {
      var _this4 = this;

      var offset = {};

      if (typeof this.config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _extends({}, data.offsets, _this4.config.offset(data.offsets, _this4.element) || {});
          return data;
        };
      } else {
        offset.offset = this.config.offset;
      }

      return offset;
    };

    _proto._getContainer = function _getContainer() {
      if (this.config.container === false) {
        return document.body;
      }

      if (Util.isElement(this.config.container)) {
        return $__default['default'](this.config.container);
      }

      return $__default['default'](document).find(this.config.container);
    };

    _proto._getAttachment = function _getAttachment(placement) {
      return AttachmentMap[placement.toUpperCase()];
    };

    _proto._setListeners = function _setListeners() {
      var _this5 = this;

      var triggers = this.config.trigger.split(' ');
      triggers.forEach(function (trigger) {
        if (trigger === 'click') {
          $__default['default'](_this5.element).on(_this5.constructor.Event.CLICK, _this5.config.selector, function (event) {
            return _this5.toggle(event);
          });
        } else if (trigger !== TRIGGER_MANUAL) {
          var eventIn = trigger === TRIGGER_HOVER ? _this5.constructor.Event.MOUSEENTER : _this5.constructor.Event.FOCUSIN;
          var eventOut = trigger === TRIGGER_HOVER ? _this5.constructor.Event.MOUSELEAVE : _this5.constructor.Event.FOCUSOUT;
          $__default['default'](_this5.element).on(eventIn, _this5.config.selector, function (event) {
            return _this5._enter(event);
          }).on(eventOut, _this5.config.selector, function (event) {
            return _this5._leave(event);
          });
        }
      });

      this._hideModalHandler = function () {
        if (_this5.element) {
          _this5.hide();
        }
      };

      $__default['default'](this.element).closest('.modal').on('hide.bs.modal', this._hideModalHandler);

      if (this.config.selector) {
        this.config = _extends({}, this.config, {
          trigger: 'manual',
          selector: ''
        });
      } else {
        this._fixTitle();
      }
    };

    _proto._fixTitle = function _fixTitle() {
      var titleType = typeof this.element.getAttribute('data-original-title');

      if (this.element.getAttribute('title') || titleType !== 'string') {
        this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
        this.element.setAttribute('title', '');
      }
    };

    _proto._enter = function _enter(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $__default['default'](event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $__default['default'](event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
      }

      if ($__default['default'](context.getTipElement()).hasClass(CLASS_NAME_SHOW$4) || context._hoverState === HOVER_STATE_SHOW) {
        context._hoverState = HOVER_STATE_SHOW;
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HOVER_STATE_SHOW;

      if (!context.config.delay || !context.config.delay.show) {
        context.show();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HOVER_STATE_SHOW) {
          context.show();
        }
      }, context.config.delay.show);
    };

    _proto._leave = function _leave(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $__default['default'](event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $__default['default'](event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = false;
      }

      if (context._isWithActiveTrigger()) {
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HOVER_STATE_OUT;

      if (!context.config.delay || !context.config.delay.hide) {
        context.hide();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HOVER_STATE_OUT) {
          context.hide();
        }
      }, context.config.delay.hide);
    };

    _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
      for (var trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
          return true;
        }
      }

      return false;
    };

    _proto._getConfig = function _getConfig(config) {
      var dataAttributes = $__default['default'](this.element).data();
      Object.keys(dataAttributes).forEach(function (dataAttr) {
        if (DISALLOWED_ATTRIBUTES.indexOf(dataAttr) !== -1) {
          delete dataAttributes[dataAttr];
        }
      });
      config = _extends({}, this.constructor.Default, dataAttributes, typeof config === 'object' && config ? config : {});

      if (typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }

      if (typeof config.title === 'number') {
        config.title = config.title.toString();
      }

      if (typeof config.content === 'number') {
        config.content = config.content.toString();
      }

      Util.typeCheckConfig(NAME$6, config, this.constructor.DefaultType);

      if (config.sanitize) {
        config.template = sanitizeHtml(config.template, config.whiteList, config.sanitizeFn);
      }

      return config;
    };

    _proto._getDelegateConfig = function _getDelegateConfig() {
      var config = {};

      if (this.config) {
        for (var key in this.config) {
          if (this.constructor.Default[key] !== this.config[key]) {
            config[key] = this.config[key];
          }
        }
      }

      return config;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $__default['default'](this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

      if (tabClass !== null && tabClass.length) {
        $tip.removeClass(tabClass.join(''));
      }
    };

    _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(popperData) {
      this.tip = popperData.instance.popper;

      this._cleanTipClass();

      this.addAttachmentClass(this._getAttachment(popperData.placement));
    };

    _proto._fixTransition = function _fixTransition() {
      var tip = this.getTipElement();
      var initConfigAnimation = this.config.animation;

      if (tip.getAttribute('x-placement') !== null) {
        return;
      }

      $__default['default'](tip).removeClass(CLASS_NAME_FADE$2);
      this.config.animation = false;
      this.hide();
      this.show();
      this.config.animation = initConfigAnimation;
    } // Static
    ;

    Tooltip._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $__default['default'](this);
        var data = $element.data(DATA_KEY$6);

        var _config = typeof config === 'object' && config;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Tooltip(this, _config);
          $element.data(DATA_KEY$6, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tooltip, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$6;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$4;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$6;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$6;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$6;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$4;
      }
    }]);

    return Tooltip;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $__default['default'].fn[NAME$6] = Tooltip._jQueryInterface;
  $__default['default'].fn[NAME$6].Constructor = Tooltip;

  $__default['default'].fn[NAME$6].noConflict = function () {
    $__default['default'].fn[NAME$6] = JQUERY_NO_CONFLICT$6;
    return Tooltip._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$7 = 'popover';
  var VERSION$7 = '4.5.3';
  var DATA_KEY$7 = 'bs.popover';
  var EVENT_KEY$7 = "." + DATA_KEY$7;
  var JQUERY_NO_CONFLICT$7 = $__default['default'].fn[NAME$7];
  var CLASS_PREFIX$1 = 'bs-popover';
  var BSCLS_PREFIX_REGEX$1 = new RegExp("(^|\\s)" + CLASS_PREFIX$1 + "\\S+", 'g');

  var Default$5 = _extends({}, Tooltip.Default, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
  });

  var DefaultType$5 = _extends({}, Tooltip.DefaultType, {
    content: '(string|element|function)'
  });

  var CLASS_NAME_FADE$3 = 'fade';
  var CLASS_NAME_SHOW$5 = 'show';
  var SELECTOR_TITLE = '.popover-header';
  var SELECTOR_CONTENT = '.popover-body';
  var Event$1 = {
    HIDE: "hide" + EVENT_KEY$7,
    HIDDEN: "hidden" + EVENT_KEY$7,
    SHOW: "show" + EVENT_KEY$7,
    SHOWN: "shown" + EVENT_KEY$7,
    INSERTED: "inserted" + EVENT_KEY$7,
    CLICK: "click" + EVENT_KEY$7,
    FOCUSIN: "focusin" + EVENT_KEY$7,
    FOCUSOUT: "focusout" + EVENT_KEY$7,
    MOUSEENTER: "mouseenter" + EVENT_KEY$7,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$7
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Popover = /*#__PURE__*/function (_Tooltip) {
    _inheritsLoose(Popover, _Tooltip);

    function Popover() {
      return _Tooltip.apply(this, arguments) || this;
    }

    var _proto = Popover.prototype;

    // Overrides
    _proto.isWithContent = function isWithContent() {
      return this.getTitle() || this._getContent();
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $__default['default'](this.getTipElement()).addClass(CLASS_PREFIX$1 + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $__default['default'](this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var $tip = $__default['default'](this.getTipElement()); // We use append for html objects to maintain js events

      this.setElementContent($tip.find(SELECTOR_TITLE), this.getTitle());

      var content = this._getContent();

      if (typeof content === 'function') {
        content = content.call(this.element);
      }

      this.setElementContent($tip.find(SELECTOR_CONTENT), content);
      $tip.removeClass(CLASS_NAME_FADE$3 + " " + CLASS_NAME_SHOW$5);
    } // Private
    ;

    _proto._getContent = function _getContent() {
      return this.element.getAttribute('data-content') || this.config.content;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $__default['default'](this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX$1);

      if (tabClass !== null && tabClass.length > 0) {
        $tip.removeClass(tabClass.join(''));
      }
    } // Static
    ;

    Popover._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default['default'](this).data(DATA_KEY$7);

        var _config = typeof config === 'object' ? config : null;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Popover(this, _config);
          $__default['default'](this).data(DATA_KEY$7, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Popover, null, [{
      key: "VERSION",
      // Getters
      get: function get() {
        return VERSION$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$5;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$7;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$7;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event$1;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$7;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$5;
      }
    }]);

    return Popover;
  }(Tooltip);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $__default['default'].fn[NAME$7] = Popover._jQueryInterface;
  $__default['default'].fn[NAME$7].Constructor = Popover;

  $__default['default'].fn[NAME$7].noConflict = function () {
    $__default['default'].fn[NAME$7] = JQUERY_NO_CONFLICT$7;
    return Popover._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$8 = 'scrollspy';
  var VERSION$8 = '4.5.3';
  var DATA_KEY$8 = 'bs.scrollspy';
  var EVENT_KEY$8 = "." + DATA_KEY$8;
  var DATA_API_KEY$6 = '.data-api';
  var JQUERY_NO_CONFLICT$8 = $__default['default'].fn[NAME$8];
  var Default$6 = {
    offset: 10,
    method: 'auto',
    target: ''
  };
  var DefaultType$6 = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  };
  var EVENT_ACTIVATE = "activate" + EVENT_KEY$8;
  var EVENT_SCROLL = "scroll" + EVENT_KEY$8;
  var EVENT_LOAD_DATA_API$2 = "load" + EVENT_KEY$8 + DATA_API_KEY$6;
  var CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
  var CLASS_NAME_ACTIVE$2 = 'active';
  var SELECTOR_DATA_SPY = '[data-spy="scroll"]';
  var SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
  var SELECTOR_NAV_LINKS = '.nav-link';
  var SELECTOR_NAV_ITEMS = '.nav-item';
  var SELECTOR_LIST_ITEMS = '.list-group-item';
  var SELECTOR_DROPDOWN = '.dropdown';
  var SELECTOR_DROPDOWN_ITEMS = '.dropdown-item';
  var SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
  var METHOD_OFFSET = 'offset';
  var METHOD_POSITION = 'position';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var ScrollSpy = /*#__PURE__*/function () {
    function ScrollSpy(element, config) {
      var _this = this;

      this._element = element;
      this._scrollElement = element.tagName === 'BODY' ? window : element;
      this._config = this._getConfig(config);
      this._selector = this._config.target + " " + SELECTOR_NAV_LINKS + "," + (this._config.target + " " + SELECTOR_LIST_ITEMS + ",") + (this._config.target + " " + SELECTOR_DROPDOWN_ITEMS);
      this._offsets = [];
      this._targets = [];
      this._activeTarget = null;
      this._scrollHeight = 0;
      $__default['default'](this._scrollElement).on(EVENT_SCROLL, function (event) {
        return _this._process(event);
      });
      this.refresh();

      this._process();
    } // Getters


    var _proto = ScrollSpy.prototype;

    // Public
    _proto.refresh = function refresh() {
      var _this2 = this;

      var autoMethod = this._scrollElement === this._scrollElement.window ? METHOD_OFFSET : METHOD_POSITION;
      var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
      var offsetBase = offsetMethod === METHOD_POSITION ? this._getScrollTop() : 0;
      this._offsets = [];
      this._targets = [];
      this._scrollHeight = this._getScrollHeight();
      var targets = [].slice.call(document.querySelectorAll(this._selector));
      targets.map(function (element) {
        var target;
        var targetSelector = Util.getSelectorFromElement(element);

        if (targetSelector) {
          target = document.querySelector(targetSelector);
        }

        if (target) {
          var targetBCR = target.getBoundingClientRect();

          if (targetBCR.width || targetBCR.height) {
            // TODO (fat): remove sketch reliance on jQuery position/offset
            return [$__default['default'](target)[offsetMethod]().top + offsetBase, targetSelector];
          }
        }

        return null;
      }).filter(function (item) {
        return item;
      }).sort(function (a, b) {
        return a[0] - b[0];
      }).forEach(function (item) {
        _this2._offsets.push(item[0]);

        _this2._targets.push(item[1]);
      });
    };

    _proto.dispose = function dispose() {
      $__default['default'].removeData(this._element, DATA_KEY$8);
      $__default['default'](this._scrollElement).off(EVENT_KEY$8);
      this._element = null;
      this._scrollElement = null;
      this._config = null;
      this._selector = null;
      this._offsets = null;
      this._targets = null;
      this._activeTarget = null;
      this._scrollHeight = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default$6, typeof config === 'object' && config ? config : {});

      if (typeof config.target !== 'string' && Util.isElement(config.target)) {
        var id = $__default['default'](config.target).attr('id');

        if (!id) {
          id = Util.getUID(NAME$8);
          $__default['default'](config.target).attr('id', id);
        }

        config.target = "#" + id;
      }

      Util.typeCheckConfig(NAME$8, config, DefaultType$6);
      return config;
    };

    _proto._getScrollTop = function _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    };

    _proto._getScrollHeight = function _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    };

    _proto._getOffsetHeight = function _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    };

    _proto._process = function _process() {
      var scrollTop = this._getScrollTop() + this._config.offset;

      var scrollHeight = this._getScrollHeight();

      var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

      if (this._scrollHeight !== scrollHeight) {
        this.refresh();
      }

      if (scrollTop >= maxScroll) {
        var target = this._targets[this._targets.length - 1];

        if (this._activeTarget !== target) {
          this._activate(target);
        }

        return;
      }

      if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
        this._activeTarget = null;

        this._clear();

        return;
      }

      for (var i = this._offsets.length; i--;) {
        var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

        if (isActiveTarget) {
          this._activate(this._targets[i]);
        }
      }
    };

    _proto._activate = function _activate(target) {
      this._activeTarget = target;

      this._clear();

      var queries = this._selector.split(',').map(function (selector) {
        return selector + "[data-target=\"" + target + "\"]," + selector + "[href=\"" + target + "\"]";
      });

      var $link = $__default['default']([].slice.call(document.querySelectorAll(queries.join(','))));

      if ($link.hasClass(CLASS_NAME_DROPDOWN_ITEM)) {
        $link.closest(SELECTOR_DROPDOWN).find(SELECTOR_DROPDOWN_TOGGLE).addClass(CLASS_NAME_ACTIVE$2);
        $link.addClass(CLASS_NAME_ACTIVE$2);
      } else {
        // Set triggered link as active
        $link.addClass(CLASS_NAME_ACTIVE$2); // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor

        $link.parents(SELECTOR_NAV_LIST_GROUP).prev(SELECTOR_NAV_LINKS + ", " + SELECTOR_LIST_ITEMS).addClass(CLASS_NAME_ACTIVE$2); // Handle special case when .nav-link is inside .nav-item

        $link.parents(SELECTOR_NAV_LIST_GROUP).prev(SELECTOR_NAV_ITEMS).children(SELECTOR_NAV_LINKS).addClass(CLASS_NAME_ACTIVE$2);
      }

      $__default['default'](this._scrollElement).trigger(EVENT_ACTIVATE, {
        relatedTarget: target
      });
    };

    _proto._clear = function _clear() {
      [].slice.call(document.querySelectorAll(this._selector)).filter(function (node) {
        return node.classList.contains(CLASS_NAME_ACTIVE$2);
      }).forEach(function (node) {
        return node.classList.remove(CLASS_NAME_ACTIVE$2);
      });
    } // Static
    ;

    ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default['default'](this).data(DATA_KEY$8);

        var _config = typeof config === 'object' && config;

        if (!data) {
          data = new ScrollSpy(this, _config);
          $__default['default'](this).data(DATA_KEY$8, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(ScrollSpy, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$8;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$6;
      }
    }]);

    return ScrollSpy;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](window).on(EVENT_LOAD_DATA_API$2, function () {
    var scrollSpys = [].slice.call(document.querySelectorAll(SELECTOR_DATA_SPY));
    var scrollSpysLength = scrollSpys.length;

    for (var i = scrollSpysLength; i--;) {
      var $spy = $__default['default'](scrollSpys[i]);

      ScrollSpy._jQueryInterface.call($spy, $spy.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$8] = ScrollSpy._jQueryInterface;
  $__default['default'].fn[NAME$8].Constructor = ScrollSpy;

  $__default['default'].fn[NAME$8].noConflict = function () {
    $__default['default'].fn[NAME$8] = JQUERY_NO_CONFLICT$8;
    return ScrollSpy._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$9 = 'tab';
  var VERSION$9 = '4.5.3';
  var DATA_KEY$9 = 'bs.tab';
  var EVENT_KEY$9 = "." + DATA_KEY$9;
  var DATA_API_KEY$7 = '.data-api';
  var JQUERY_NO_CONFLICT$9 = $__default['default'].fn[NAME$9];
  var EVENT_HIDE$3 = "hide" + EVENT_KEY$9;
  var EVENT_HIDDEN$3 = "hidden" + EVENT_KEY$9;
  var EVENT_SHOW$3 = "show" + EVENT_KEY$9;
  var EVENT_SHOWN$3 = "shown" + EVENT_KEY$9;
  var EVENT_CLICK_DATA_API$6 = "click" + EVENT_KEY$9 + DATA_API_KEY$7;
  var CLASS_NAME_DROPDOWN_MENU = 'dropdown-menu';
  var CLASS_NAME_ACTIVE$3 = 'active';
  var CLASS_NAME_DISABLED$1 = 'disabled';
  var CLASS_NAME_FADE$4 = 'fade';
  var CLASS_NAME_SHOW$6 = 'show';
  var SELECTOR_DROPDOWN$1 = '.dropdown';
  var SELECTOR_NAV_LIST_GROUP$1 = '.nav, .list-group';
  var SELECTOR_ACTIVE$2 = '.active';
  var SELECTOR_ACTIVE_UL = '> li > .active';
  var SELECTOR_DATA_TOGGLE$4 = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]';
  var SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
  var SELECTOR_DROPDOWN_ACTIVE_CHILD = '> .dropdown-menu .active';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tab = /*#__PURE__*/function () {
    function Tab(element) {
      this._element = element;
    } // Getters


    var _proto = Tab.prototype;

    // Public
    _proto.show = function show() {
      var _this = this;

      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $__default['default'](this._element).hasClass(CLASS_NAME_ACTIVE$3) || $__default['default'](this._element).hasClass(CLASS_NAME_DISABLED$1)) {
        return;
      }

      var target;
      var previous;
      var listElement = $__default['default'](this._element).closest(SELECTOR_NAV_LIST_GROUP$1)[0];
      var selector = Util.getSelectorFromElement(this._element);

      if (listElement) {
        var itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? SELECTOR_ACTIVE_UL : SELECTOR_ACTIVE$2;
        previous = $__default['default'].makeArray($__default['default'](listElement).find(itemSelector));
        previous = previous[previous.length - 1];
      }

      var hideEvent = $__default['default'].Event(EVENT_HIDE$3, {
        relatedTarget: this._element
      });
      var showEvent = $__default['default'].Event(EVENT_SHOW$3, {
        relatedTarget: previous
      });

      if (previous) {
        $__default['default'](previous).trigger(hideEvent);
      }

      $__default['default'](this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
        return;
      }

      if (selector) {
        target = document.querySelector(selector);
      }

      this._activate(this._element, listElement);

      var complete = function complete() {
        var hiddenEvent = $__default['default'].Event(EVENT_HIDDEN$3, {
          relatedTarget: _this._element
        });
        var shownEvent = $__default['default'].Event(EVENT_SHOWN$3, {
          relatedTarget: previous
        });
        $__default['default'](previous).trigger(hiddenEvent);
        $__default['default'](_this._element).trigger(shownEvent);
      };

      if (target) {
        this._activate(target, target.parentNode, complete);
      } else {
        complete();
      }
    };

    _proto.dispose = function dispose() {
      $__default['default'].removeData(this._element, DATA_KEY$9);
      this._element = null;
    } // Private
    ;

    _proto._activate = function _activate(element, container, callback) {
      var _this2 = this;

      var activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? $__default['default'](container).find(SELECTOR_ACTIVE_UL) : $__default['default'](container).children(SELECTOR_ACTIVE$2);
      var active = activeElements[0];
      var isTransitioning = callback && active && $__default['default'](active).hasClass(CLASS_NAME_FADE$4);

      var complete = function complete() {
        return _this2._transitionComplete(element, active, callback);
      };

      if (active && isTransitioning) {
        var transitionDuration = Util.getTransitionDurationFromElement(active);
        $__default['default'](active).removeClass(CLASS_NAME_SHOW$6).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto._transitionComplete = function _transitionComplete(element, active, callback) {
      if (active) {
        $__default['default'](active).removeClass(CLASS_NAME_ACTIVE$3);
        var dropdownChild = $__default['default'](active.parentNode).find(SELECTOR_DROPDOWN_ACTIVE_CHILD)[0];

        if (dropdownChild) {
          $__default['default'](dropdownChild).removeClass(CLASS_NAME_ACTIVE$3);
        }

        if (active.getAttribute('role') === 'tab') {
          active.setAttribute('aria-selected', false);
        }
      }

      $__default['default'](element).addClass(CLASS_NAME_ACTIVE$3);

      if (element.getAttribute('role') === 'tab') {
        element.setAttribute('aria-selected', true);
      }

      Util.reflow(element);

      if (element.classList.contains(CLASS_NAME_FADE$4)) {
        element.classList.add(CLASS_NAME_SHOW$6);
      }

      if (element.parentNode && $__default['default'](element.parentNode).hasClass(CLASS_NAME_DROPDOWN_MENU)) {
        var dropdownElement = $__default['default'](element).closest(SELECTOR_DROPDOWN$1)[0];

        if (dropdownElement) {
          var dropdownToggleList = [].slice.call(dropdownElement.querySelectorAll(SELECTOR_DROPDOWN_TOGGLE$1));
          $__default['default'](dropdownToggleList).addClass(CLASS_NAME_ACTIVE$3);
        }

        element.setAttribute('aria-expanded', true);
      }

      if (callback) {
        callback();
      }
    } // Static
    ;

    Tab._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $__default['default'](this);
        var data = $this.data(DATA_KEY$9);

        if (!data) {
          data = new Tab(this);
          $this.data(DATA_KEY$9, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tab, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$9;
      }
    }]);

    return Tab;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](document).on(EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$4, function (event) {
    event.preventDefault();

    Tab._jQueryInterface.call($__default['default'](this), 'show');
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$9] = Tab._jQueryInterface;
  $__default['default'].fn[NAME$9].Constructor = Tab;

  $__default['default'].fn[NAME$9].noConflict = function () {
    $__default['default'].fn[NAME$9] = JQUERY_NO_CONFLICT$9;
    return Tab._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$a = 'toast';
  var VERSION$a = '4.5.3';
  var DATA_KEY$a = 'bs.toast';
  var EVENT_KEY$a = "." + DATA_KEY$a;
  var JQUERY_NO_CONFLICT$a = $__default['default'].fn[NAME$a];
  var EVENT_CLICK_DISMISS$1 = "click.dismiss" + EVENT_KEY$a;
  var EVENT_HIDE$4 = "hide" + EVENT_KEY$a;
  var EVENT_HIDDEN$4 = "hidden" + EVENT_KEY$a;
  var EVENT_SHOW$4 = "show" + EVENT_KEY$a;
  var EVENT_SHOWN$4 = "shown" + EVENT_KEY$a;
  var CLASS_NAME_FADE$5 = 'fade';
  var CLASS_NAME_HIDE = 'hide';
  var CLASS_NAME_SHOW$7 = 'show';
  var CLASS_NAME_SHOWING = 'showing';
  var DefaultType$7 = {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
  };
  var Default$7 = {
    animation: true,
    autohide: true,
    delay: 500
  };
  var SELECTOR_DATA_DISMISS$1 = '[data-dismiss="toast"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Toast = /*#__PURE__*/function () {
    function Toast(element, config) {
      this._element = element;
      this._config = this._getConfig(config);
      this._timeout = null;

      this._setListeners();
    } // Getters


    var _proto = Toast.prototype;

    // Public
    _proto.show = function show() {
      var _this = this;

      var showEvent = $__default['default'].Event(EVENT_SHOW$4);
      $__default['default'](this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      }

      this._clearTimeout();

      if (this._config.animation) {
        this._element.classList.add(CLASS_NAME_FADE$5);
      }

      var complete = function complete() {
        _this._element.classList.remove(CLASS_NAME_SHOWING);

        _this._element.classList.add(CLASS_NAME_SHOW$7);

        $__default['default'](_this._element).trigger(EVENT_SHOWN$4);

        if (_this._config.autohide) {
          _this._timeout = setTimeout(function () {
            _this.hide();
          }, _this._config.delay);
        }
      };

      this._element.classList.remove(CLASS_NAME_HIDE);

      Util.reflow(this._element);

      this._element.classList.add(CLASS_NAME_SHOWING);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $__default['default'](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto.hide = function hide() {
      if (!this._element.classList.contains(CLASS_NAME_SHOW$7)) {
        return;
      }

      var hideEvent = $__default['default'].Event(EVENT_HIDE$4);
      $__default['default'](this._element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      this._close();
    };

    _proto.dispose = function dispose() {
      this._clearTimeout();

      if (this._element.classList.contains(CLASS_NAME_SHOW$7)) {
        this._element.classList.remove(CLASS_NAME_SHOW$7);
      }

      $__default['default'](this._element).off(EVENT_CLICK_DISMISS$1);
      $__default['default'].removeData(this._element, DATA_KEY$a);
      this._element = null;
      this._config = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default$7, $__default['default'](this._element).data(), typeof config === 'object' && config ? config : {});
      Util.typeCheckConfig(NAME$a, config, this.constructor.DefaultType);
      return config;
    };

    _proto._setListeners = function _setListeners() {
      var _this2 = this;

      $__default['default'](this._element).on(EVENT_CLICK_DISMISS$1, SELECTOR_DATA_DISMISS$1, function () {
        return _this2.hide();
      });
    };

    _proto._close = function _close() {
      var _this3 = this;

      var complete = function complete() {
        _this3._element.classList.add(CLASS_NAME_HIDE);

        $__default['default'](_this3._element).trigger(EVENT_HIDDEN$4);
      };

      this._element.classList.remove(CLASS_NAME_SHOW$7);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $__default['default'](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto._clearTimeout = function _clearTimeout() {
      clearTimeout(this._timeout);
      this._timeout = null;
    } // Static
    ;

    Toast._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $__default['default'](this);
        var data = $element.data(DATA_KEY$a);

        var _config = typeof config === 'object' && config;

        if (!data) {
          data = new Toast(this, _config);
          $element.data(DATA_KEY$a, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](this);
        }
      });
    };

    _createClass(Toast, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$a;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$7;
      }
    }]);

    return Toast;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $__default['default'].fn[NAME$a] = Toast._jQueryInterface;
  $__default['default'].fn[NAME$a].Constructor = Toast;

  $__default['default'].fn[NAME$a].noConflict = function () {
    $__default['default'].fn[NAME$a] = JQUERY_NO_CONFLICT$a;
    return Toast._jQueryInterface;
  };

  exports.Alert = Alert;
  exports.Button = Button;
  exports.Carousel = Carousel;
  exports.Collapse = Collapse;
  exports.Dropdown = Dropdown;
  exports.Modal = Modal;
  exports.Popover = Popover;
  exports.Scrollspy = ScrollSpy;
  exports.Tab = Tab;
  exports.Toast = Toast;
  exports.Tooltip = Tooltip;
  exports.Util = Util;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=bootstrap.js.map


/***/ }),

/***/ "./node_modules/bs-custom-file-input/dist/bs-custom-file-input.js":
/*!************************************************************************!*\
  !*** ./node_modules/bs-custom-file-input/dist/bs-custom-file-input.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * bsCustomFileInput v1.3.4 (https://github.com/Johann-S/bs-custom-file-input)
 * Copyright 2018 - 2020 Johann-S <johann.servoire@gmail.com>
 * Licensed under MIT (https://github.com/Johann-S/bs-custom-file-input/blob/master/LICENSE)
 */
(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, (function () { 'use strict';

  var Selector = {
    CUSTOMFILE: '.custom-file input[type="file"]',
    CUSTOMFILELABEL: '.custom-file-label',
    FORM: 'form',
    INPUT: 'input'
  };

  var textNodeType = 3;

  var getDefaultText = function getDefaultText(input) {
    var defaultText = '';
    var label = input.parentNode.querySelector(Selector.CUSTOMFILELABEL);

    if (label) {
      defaultText = label.textContent;
    }

    return defaultText;
  };

  var findFirstChildNode = function findFirstChildNode(element) {
    if (element.childNodes.length > 0) {
      var childNodes = [].slice.call(element.childNodes);

      for (var i = 0; i < childNodes.length; i++) {
        var node = childNodes[i];

        if (node.nodeType !== textNodeType) {
          return node;
        }
      }
    }

    return element;
  };

  var restoreDefaultText = function restoreDefaultText(input) {
    var defaultText = input.bsCustomFileInput.defaultText;
    var label = input.parentNode.querySelector(Selector.CUSTOMFILELABEL);

    if (label) {
      var element = findFirstChildNode(label);
      element.textContent = defaultText;
    }
  };

  var fileApi = !!window.File;
  var FAKE_PATH = 'fakepath';
  var FAKE_PATH_SEPARATOR = '\\';

  var getSelectedFiles = function getSelectedFiles(input) {
    if (input.hasAttribute('multiple') && fileApi) {
      return [].slice.call(input.files).map(function (file) {
        return file.name;
      }).join(', ');
    }

    if (input.value.indexOf(FAKE_PATH) !== -1) {
      var splittedValue = input.value.split(FAKE_PATH_SEPARATOR);
      return splittedValue[splittedValue.length - 1];
    }

    return input.value;
  };

  function handleInputChange() {
    var label = this.parentNode.querySelector(Selector.CUSTOMFILELABEL);

    if (label) {
      var element = findFirstChildNode(label);
      var inputValue = getSelectedFiles(this);

      if (inputValue.length) {
        element.textContent = inputValue;
      } else {
        restoreDefaultText(this);
      }
    }
  }

  function handleFormReset() {
    var customFileList = [].slice.call(this.querySelectorAll(Selector.INPUT)).filter(function (input) {
      return !!input.bsCustomFileInput;
    });

    for (var i = 0, len = customFileList.length; i < len; i++) {
      restoreDefaultText(customFileList[i]);
    }
  }

  var customProperty = 'bsCustomFileInput';
  var Event = {
    FORMRESET: 'reset',
    INPUTCHANGE: 'change'
  };
  var bsCustomFileInput = {
    init: function init(inputSelector, formSelector) {
      if (inputSelector === void 0) {
        inputSelector = Selector.CUSTOMFILE;
      }

      if (formSelector === void 0) {
        formSelector = Selector.FORM;
      }

      var customFileInputList = [].slice.call(document.querySelectorAll(inputSelector));
      var formList = [].slice.call(document.querySelectorAll(formSelector));

      for (var i = 0, len = customFileInputList.length; i < len; i++) {
        var input = customFileInputList[i];
        Object.defineProperty(input, customProperty, {
          value: {
            defaultText: getDefaultText(input)
          },
          writable: true
        });
        handleInputChange.call(input);
        input.addEventListener(Event.INPUTCHANGE, handleInputChange);
      }

      for (var _i = 0, _len = formList.length; _i < _len; _i++) {
        formList[_i].addEventListener(Event.FORMRESET, handleFormReset);

        Object.defineProperty(formList[_i], customProperty, {
          value: true,
          writable: true
        });
      }
    },
    destroy: function destroy() {
      var formList = [].slice.call(document.querySelectorAll(Selector.FORM)).filter(function (form) {
        return !!form.bsCustomFileInput;
      });
      var customFileInputList = [].slice.call(document.querySelectorAll(Selector.INPUT)).filter(function (input) {
        return !!input.bsCustomFileInput;
      });

      for (var i = 0, len = customFileInputList.length; i < len; i++) {
        var input = customFileInputList[i];
        restoreDefaultText(input);
        input[customProperty] = undefined;
        input.removeEventListener(Event.INPUTCHANGE, handleInputChange);
      }

      for (var _i2 = 0, _len2 = formList.length; _i2 < _len2; _i2++) {
        formList[_i2].removeEventListener(Event.FORMRESET, handleFormReset);

        formList[_i2][customProperty] = undefined;
      }
    }
  };

  return bsCustomFileInput;

})));
//# sourceMappingURL=bs-custom-file-input.js.map


/***/ }),

/***/ "./node_modules/core-js/internals/advance-string-index.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/advance-string-index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(/*! ../internals/string-multibyte */ "./node_modules/core-js/internals/string-multibyte.js").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/define-well-known-symbol.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/define-well-known-symbol.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js/internals/path.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/well-known-symbol-wrapped */ "./node_modules/core-js/internals/well-known-symbol-wrapped.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__(/*! ../modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "./node_modules/core-js/internals/inherit-if-required.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/inherit-if-required.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-regexp.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-regexp.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "./node_modules/core-js/internals/number-parse-float.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/number-parse-float.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var $parseFloat = global.parseFloat;
var FORCED = 1 / $parseFloat(whitespaces + '-0') !== -Infinity;

// `parseFloat` method
// https://tc39.github.io/ecma262/#sec-parsefloat-string
module.exports = FORCED ? function parseFloat(string) {
  var trimmedString = trim(String(string));
  var result = $parseFloat(trimmedString);
  return result === 0 && trimmedString.charAt(0) == '-' ? -0 : result;
} : $parseFloat;


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names-external.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names-external.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var nativeGetOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js").f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec-abstract.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec-abstract.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var regexpExec = __webpack_require__(/*! ./regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__(/*! ./regexp-flags */ "./node_modules/core-js/internals/regexp-flags.js");
var stickyHelpers = __webpack_require__(/*! ./regexp-sticky-helpers */ "./node_modules/core-js/internals/regexp-sticky-helpers.js");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-sticky-helpers.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-sticky-helpers.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__(/*! ./fails */ "./node_modules/core-js/internals/fails.js");

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),

/***/ "./node_modules/core-js/internals/set-species.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/set-species.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/species-constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/species-constructor.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol-wrapped.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol-wrapped.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

exports.f = wellKnownSymbol;


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.filter.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.filter.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $filter = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('filter');

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.is-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");

// `Array.isArray` method
// https://tc39.github.io/ecma262/#sec-array.isarray
$({ target: 'Array', stat: true }, {
  isArray: isArray
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.iterator.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/core-js/internals/define-iterator.js");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.join.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.join.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var nativeJoin = [].join;

var ES3_STRINGS = IndexedObject != Object;
var STRICT_METHOD = arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.github.io/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {
  join: function join(separator) {
    return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.parse-float.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.parse-float.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var parseFloatImplementation = __webpack_require__(/*! ../internals/number-parse-float */ "./node_modules/core-js/internals/number-parse-float.js");

// `parseFloat` method
// https://tc39.github.io/ecma262/#sec-parsefloat-string
$({ global: true, forced: parseFloat != parseFloatImplementation }, {
  parseFloat: parseFloatImplementation
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.constructor.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");
var inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ "./node_modules/core-js/internals/inherit-if-required.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var getOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js").f;
var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "./node_modules/core-js/internals/is-regexp.js");
var getFlags = __webpack_require__(/*! ../internals/regexp-flags */ "./node_modules/core-js/internals/regexp-flags.js");
var stickyHelpers = __webpack_require__(/*! ../internals/regexp-sticky-helpers */ "./node_modules/core-js/internals/regexp-sticky-helpers.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var setInternalState = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js").set;
var setSpecies = __webpack_require__(/*! ../internals/set-species */ "./node_modules/core-js/internals/set-species.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');
var NativeRegExp = global.RegExp;
var RegExpPrototype = NativeRegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;

// "new" should create a new object, old webkit bug
var CORRECT_NEW = new NativeRegExp(re1) !== re1;

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;

var FORCED = DESCRIPTORS && isForced('RegExp', (!CORRECT_NEW || UNSUPPORTED_Y || fails(function () {
  re2[MATCH] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
})));

// `RegExp` constructor
// https://tc39.github.io/ecma262/#sec-regexp-constructor
if (FORCED) {
  var RegExpWrapper = function RegExp(pattern, flags) {
    var thisIsRegExp = this instanceof RegExpWrapper;
    var patternIsRegExp = isRegExp(pattern);
    var flagsAreUndefined = flags === undefined;
    var sticky;

    if (!thisIsRegExp && patternIsRegExp && pattern.constructor === RegExpWrapper && flagsAreUndefined) {
      return pattern;
    }

    if (CORRECT_NEW) {
      if (patternIsRegExp && !flagsAreUndefined) pattern = pattern.source;
    } else if (pattern instanceof RegExpWrapper) {
      if (flagsAreUndefined) flags = getFlags.call(pattern);
      pattern = pattern.source;
    }

    if (UNSUPPORTED_Y) {
      sticky = !!flags && flags.indexOf('y') > -1;
      if (sticky) flags = flags.replace(/y/g, '');
    }

    var result = inheritIfRequired(
      CORRECT_NEW ? new NativeRegExp(pattern, flags) : NativeRegExp(pattern, flags),
      thisIsRegExp ? this : RegExpPrototype,
      RegExpWrapper
    );

    if (UNSUPPORTED_Y && sticky) setInternalState(result, { sticky: sticky });

    return result;
  };
  var proxy = function (key) {
    key in RegExpWrapper || defineProperty(RegExpWrapper, key, {
      configurable: true,
      get: function () { return NativeRegExp[key]; },
      set: function (it) { NativeRegExp[key] = it; }
    });
  };
  var keys = getOwnPropertyNames(NativeRegExp);
  var index = 0;
  while (keys.length > index) proxy(keys[index++]);
  RegExpPrototype.constructor = RegExpWrapper;
  RegExpWrapper.prototype = RegExpPrototype;
  redefine(global, 'RegExp', RegExpWrapper);
}

// https://tc39.github.io/ecma262/#sec-get-regexp-@@species
setSpecies('RegExp');


/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.exec.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.exec.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var exec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");

$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.match.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.match.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");

// @@match logic
fixRegExpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = regexp == undefined ? undefined : regexp[MATCH];
      return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative(nativeMatch, regexp, this);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.replace.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.replace.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");

var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      if (
        (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
        (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
      ) {
        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
        if (res.done) return res.value;
      }

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

  // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return nativeReplace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.split.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.split.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "./node_modules/core-js/internals/is-regexp.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "./node_modules/core-js/internals/species-constructor.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var callRegExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var arrayPush = [].push;
var min = Math.min;
var MAX_UINT32 = 0xFFFFFFFF;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

// @@split logic
fixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output.length > lim ? output.slice(0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
}, !SUPPORTS_Y);


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.description.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.description.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.github.io/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "./node_modules/core-js/internals/define-well-known-symbol.js");

// `Symbol.iterator` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var nativeObjectCreate = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertyNamesExternal = __webpack_require__(/*! ../internals/object-get-own-property-names-external */ "./node_modules/core-js/internals/object-get-own-property-names-external.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/well-known-symbol-wrapped */ "./node_modules/core-js/internals/well-known-symbol-wrapped.js");
var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "./node_modules/core-js/internals/define-well-known-symbol.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var $forEach = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.github.io/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.github.io/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.github.io/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.iterator.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.iterator.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var ArrayIteratorMethods = __webpack_require__(/*! ../modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),

/***/ "./node_modules/popper.js/dist/esm/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/popper.js/dist/esm/popper.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';

var timeoutDuration = function () {
  var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      return 1;
    }
  }
  return 0;
}();

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

/**
 * Returns the reference node of the reference object, or the reference object itself.
 * @method
 * @memberof Popper.Utils
 * @param {Element|Object} reference - the reference element (the popper will be relative to this)
 * @returns {Element} parent
 */
function getReferenceNode(reference) {
  return reference && reference.referenceNode ? reference.referenceNode : reference;
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent || null;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width']) + parseFloat(styles['border' + sideB + 'Width']);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.width;
  var height = sizes.height || element.clientHeight || result.height;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop);
    var marginLeft = parseFloat(styles.marginLeft);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  var parentNode = getParentNode(element);
  if (!parentNode) {
    return false;
  }
  return isFixed(parentNode);
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicitly asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);

  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;

  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized]);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width']);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

    // flips variation if reference element overflows boundaries
    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    // flips variation if popper content overflows boundaries
    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);

    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',
    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,
    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/* harmony default export */ __webpack_exports__["default"] = (Popper);
//# sourceMappingURL=popper.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHdpa2ltZWRpYS9qcXVlcnkuaTE4bi9zcmMvanF1ZXJ5LmkxOG4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B3aWtpbWVkaWEvanF1ZXJ5LmkxOG4vc3JjL2pxdWVyeS5pMThuLm1lc3NhZ2VzdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLWRhdGVwaWNrZXIvZGlzdC9qcy9ib290c3RyYXAtZGF0ZXBpY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLWRhdGVwaWNrZXIvZGlzdC9sb2NhbGVzL2Jvb3RzdHJhcC1kYXRlcGlja2VyLmZyLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL2Rpc3QvanMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9icy1jdXN0b20tZmlsZS1pbnB1dC9kaXN0L2JzLWN1c3RvbS1maWxlLWlucHV0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hZHZhbmNlLXN0cmluZy1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVmaW5lLXdlbGwta25vd24tc3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbmhlcml0LWlmLXJlcXVpcmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1yZWdleHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL251bWJlci1wYXJzZS1mbG9hdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMtZXh0ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlZ2V4cC1leGVjLWFic3RyYWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZWdleHAtZXhlYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVnZXhwLXN0aWNreS1oZWxwZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zZXQtc3BlY2llcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wtd3JhcHBlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmlzLWFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5qb2luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMucGFyc2UtZmxvYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5yZWdleHAuY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5yZWdleHAuZXhlYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5tYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5yZXBsYWNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLnNwbGl0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3ltYm9sLmRlc2NyaXB0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3ltYm9sLml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS1jb2xsZWN0aW9ucy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcG9wcGVyLmpzL2Rpc3QvZXNtL3BvcHBlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFF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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBLCtCQUErQjs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixvQkFBb0I7QUFDcEI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLDRCQUE0QixnQkFBZ0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLDRCQUE0QixnQkFBZ0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0osR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLDBCQUEwQixxQkFBcUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFF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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QTs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLFNBQVM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsMEJBQTBCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxVQUFVO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUYsQ0FBQzs7Ozs7Ozs7Ozs7O0FDdC9ERCwyREFBYSwwQkFBMEIsa2VBQWtlLFM7Ozs7Ozs7Ozs7OztBQ0F6Z0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxLQUE0RCxvQkFBb0IsbUJBQU8sQ0FBQyxvREFBUSxHQUFHLG1CQUFPLENBQUMsOERBQVc7QUFDeEgsRUFBRSxTQUN3STtBQUMxSSxDQUFDLHVDQUF1Qzs7QUFFeEMsc0NBQXNDLDREQUE0RCxnQkFBZ0I7O0FBRWxIO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQixzQkFBc0I7QUFDM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRTtBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUMsT0FBTzs7QUFFUDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0E7QUFDQSw2REFBNkQ7O0FBRTdEO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZCQUE2QjtBQUM3QixLQUFLO0FBQ0w7O0FBRUE7QUFDQSwrQkFBK0I7O0FBRS9CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5Q0FBeUMsU0FBUztBQUNsRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7OztBQUdMOztBQUVBLDJDQUEyQyxXQUFXO0FBQ3REOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qjs7QUFFOUIsK0JBQStCOztBQUUvQixtQ0FBbUM7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7O0FBR0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMERBQTBEO0FBQzFEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjs7QUFFM0I7QUFDQTtBQUNBLE9BQU87OztBQUdQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDOztBQUVqQztBQUNBLCtCQUErQjtBQUMvQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDhCQUE4Qjs7QUFFOUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQSwyQ0FBMkMsU0FBUztBQUNwRDs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOENBQThDLFNBQVM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FB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Q0EsU0FBUztBQUNULG9EQUFvRDs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVDQUF1Qzs7QUFFdkM7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLG9DQUFvQywwRUFBMEU7QUFDOUc7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFROztBQUVSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCO0FBQ3hCLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSwyQ0FBMkMsU0FBUztBQUNwRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCOztBQUU1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7O0FBRVQ7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RkFBOEY7O0FBRTlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxFQUFFOztBQUVYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxFQUFFOztBQUVYO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLEVBQUU7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sRUFBRTs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsbUdBQW1HOztBQUVwSTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsd0ZBQXdGOztBQUV4RjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUlBQXVJOztBQUV2STtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssRUFBRTs7QUFFUCx3Q0FBd0MsU0FBUztBQUNqRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLDBDQUEwQyxTQUFTO0FBQ25EOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87OztBQUdQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCOztBQUUxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOzs7QUFHTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrREFBK0Q7QUFDL0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdFQUFnRTtBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esb0NBQW9DLHdFQUF3RTtBQUM1RztBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCwwQkFBMEIsOEZBQThGOztBQUV4SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUgsaUNBQWlDO0FBQ2pDO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkRBQTZEOztBQUU3RDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBLEtBQUs7OztBQUdMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSwwQkFBMEIsK0RBQStEOztBQUV6RjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLHdDQUF3QyxLQUFLO0FBQzdDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSw0Q0FBNEM7QUFDNUM7O0FBRUEsbUlBQW1JOztBQUVuSTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUEsa0NBQWtDLEtBQUs7QUFDdkM7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7O0FBR0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLDBCQUEwQiw0R0FBNEc7QUFDdEk7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7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O0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsU0FBUztBQUN2QjtBQUNBLGNBQWMsT0FBTztBQUNyQjtBQUNBLGNBQWMsT0FBTztBQUNyQjtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRWUscUVBQU0sRUFBQztBQUN0QiIsImZpbGUiOiJ2ZW5kb3JzfmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogalF1ZXJ5IEludGVybmF0aW9uYWxpemF0aW9uIGxpYnJhcnlcbiAqXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTIgU2FudGhvc2ggVGhvdHRpbmdhbFxuICpcbiAqIGpxdWVyeS5pMThuIGlzIGR1YWwgbGljZW5zZWQgR1BMdjIgb3IgbGF0ZXIgYW5kIE1JVC4gWW91IGRvbid0IGhhdmUgdG8gZG9cbiAqIGFueXRoaW5nIHNwZWNpYWwgdG8gY2hvb3NlIG9uZSBsaWNlbnNlIG9yIHRoZSBvdGhlciBhbmQgeW91IGRvbid0IGhhdmUgdG9cbiAqIG5vdGlmeSBhbnlvbmUgd2hpY2ggbGljZW5zZSB5b3UgYXJlIHVzaW5nLiBZb3UgYXJlIGZyZWUgdG8gdXNlXG4gKiBVbml2ZXJzYWxMYW5ndWFnZVNlbGVjdG9yIGluIGNvbW1lcmNpYWwgcHJvamVjdHMgYXMgbG9uZyBhcyB0aGUgY29weXJpZ2h0XG4gKiBoZWFkZXIgaXMgbGVmdCBpbnRhY3QuIFNlZSBmaWxlcyBHUEwtTElDRU5TRSBhbmQgTUlULUxJQ0VOU0UgZm9yIGRldGFpbHMuXG4gKlxuICogQGxpY2VuY2UgR05VIEdlbmVyYWwgUHVibGljIExpY2VuY2UgMi4wIG9yIGxhdGVyXG4gKiBAbGljZW5jZSBNSVQgTGljZW5zZVxuICovXG5cbiggZnVuY3Rpb24gKCAkICkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIEkxOE4sXG5cdFx0c2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcblx0ICovXG5cdEkxOE4gPSBmdW5jdGlvbiAoIG9wdGlvbnMgKSB7XG5cdFx0Ly8gTG9hZCBkZWZhdWx0c1xuXHRcdHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKCB7fSwgSTE4Ti5kZWZhdWx0cywgb3B0aW9ucyApO1xuXG5cdFx0dGhpcy5wYXJzZXIgPSB0aGlzLm9wdGlvbnMucGFyc2VyO1xuXHRcdHRoaXMubG9jYWxlID0gdGhpcy5vcHRpb25zLmxvY2FsZTtcblx0XHR0aGlzLm1lc3NhZ2VTdG9yZSA9IHRoaXMub3B0aW9ucy5tZXNzYWdlU3RvcmU7XG5cdFx0dGhpcy5sYW5ndWFnZXMgPSB7fTtcblx0fTtcblxuXHRJMThOLnByb3RvdHlwZSA9IHtcblx0XHQvKipcblx0XHQgKiBMb2NhbGl6ZSBhIGdpdmVuIG1lc3NhZ2VLZXkgdG8gYSBsb2NhbGUuXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VLZXlcblx0XHQgKiBAcmV0dXJuIHtzdHJpbmd9IExvY2FsaXplZCBtZXNzYWdlXG5cdFx0ICovXG5cdFx0bG9jYWxpemU6IGZ1bmN0aW9uICggbWVzc2FnZUtleSApIHtcblx0XHRcdHZhciBsb2NhbGVQYXJ0cywgbG9jYWxlUGFydEluZGV4LCBsb2NhbGUsIGZhbGxiYWNrSW5kZXgsXG5cdFx0XHRcdHRyeWluZ0xvY2FsZSwgbWVzc2FnZTtcblxuXHRcdFx0bG9jYWxlID0gdGhpcy5sb2NhbGU7XG5cdFx0XHRmYWxsYmFja0luZGV4ID0gMDtcblxuXHRcdFx0d2hpbGUgKCBsb2NhbGUgKSB7XG5cdFx0XHRcdC8vIEl0ZXJhdGUgdGhyb3VnaCBsb2NhbGVzIHN0YXJ0aW5nIGF0IG1vc3Qtc3BlY2lmaWMgdW50aWxcblx0XHRcdFx0Ly8gbG9jYWxpemF0aW9uIGlzIGZvdW5kLiBBcyBpbiBmaS1MYXRuLUZJLCBmaS1MYXRuIGFuZCBmaS5cblx0XHRcdFx0bG9jYWxlUGFydHMgPSBsb2NhbGUuc3BsaXQoICctJyApO1xuXHRcdFx0XHRsb2NhbGVQYXJ0SW5kZXggPSBsb2NhbGVQYXJ0cy5sZW5ndGg7XG5cblx0XHRcdFx0ZG8ge1xuXHRcdFx0XHRcdHRyeWluZ0xvY2FsZSA9IGxvY2FsZVBhcnRzLnNsaWNlKCAwLCBsb2NhbGVQYXJ0SW5kZXggKS5qb2luKCAnLScgKTtcblx0XHRcdFx0XHRtZXNzYWdlID0gdGhpcy5tZXNzYWdlU3RvcmUuZ2V0KCB0cnlpbmdMb2NhbGUsIG1lc3NhZ2VLZXkgKTtcblxuXHRcdFx0XHRcdGlmICggbWVzc2FnZSApIHtcblx0XHRcdFx0XHRcdHJldHVybiBtZXNzYWdlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGxvY2FsZVBhcnRJbmRleC0tO1xuXHRcdFx0XHR9IHdoaWxlICggbG9jYWxlUGFydEluZGV4ICk7XG5cblx0XHRcdFx0aWYgKCBsb2NhbGUgPT09IHRoaXMub3B0aW9ucy5mYWxsYmFja0xvY2FsZSApIHtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGxvY2FsZSA9ICggJC5pMThuLmZhbGxiYWNrc1sgdGhpcy5sb2NhbGUgXSAmJlxuXHRcdFx0XHRcdFx0JC5pMThuLmZhbGxiYWNrc1sgdGhpcy5sb2NhbGUgXVsgZmFsbGJhY2tJbmRleCBdICkgfHxcblx0XHRcdFx0XHRcdHRoaXMub3B0aW9ucy5mYWxsYmFja0xvY2FsZTtcblx0XHRcdFx0JC5pMThuLmxvZyggJ1RyeWluZyBmYWxsYmFjayBsb2NhbGUgZm9yICcgKyB0aGlzLmxvY2FsZSArICc6ICcgKyBsb2NhbGUgKyAnICgnICsgbWVzc2FnZUtleSArICcpJyApO1xuXG5cdFx0XHRcdGZhbGxiYWNrSW5kZXgrKztcblx0XHRcdH1cblxuXHRcdFx0Ly8ga2V5IG5vdCBmb3VuZFxuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH0sXG5cblx0XHQvKlxuXHRcdCAqIERlc3Ryb3kgdGhlIGkxOG4gaW5zdGFuY2UuXG5cdFx0ICovXG5cdFx0ZGVzdHJveTogZnVuY3Rpb24gKCkge1xuXHRcdFx0JC5yZW1vdmVEYXRhKCBkb2N1bWVudCwgJ2kxOG4nICk7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIEdlbmVyYWwgbWVzc2FnZSBsb2FkaW5nIEFQSSBUaGlzIGNhbiB0YWtlIGEgVVJMIHN0cmluZyBmb3Jcblx0XHQgKiB0aGUganNvbiBmb3JtYXR0ZWQgbWVzc2FnZXMuIEV4YW1wbGU6XG5cdFx0ICogPGNvZGU+bG9hZCgncGF0aC90by9hbGxfbG9jYWxpemF0aW9ucy5qc29uJyk7PC9jb2RlPlxuXHRcdCAqXG5cdFx0ICogVG8gbG9hZCBhIGxvY2FsaXphdGlvbiBmaWxlIGZvciBhIGxvY2FsZTpcblx0XHQgKiA8Y29kZT5cblx0XHQgKiBsb2FkKCdwYXRoL3RvL2RlLW1lc3NhZ2VzLmpzb24nLCAnZGUnICk7XG5cdFx0ICogPC9jb2RlPlxuXHRcdCAqXG5cdFx0ICogVG8gbG9hZCBhIGxvY2FsaXphdGlvbiBmaWxlIGZyb20gYSBkaXJlY3Rvcnk6XG5cdFx0ICogPGNvZGU+XG5cdFx0ICogbG9hZCgncGF0aC90by9pMThuL2RpcmVjdG9yeScsICdkZScgKTtcblx0XHQgKiA8L2NvZGU+XG5cdFx0ICogVGhlIGFib3ZlIG1ldGhvZCBoYXMgdGhlIGFkdmFudGFnZSBvZiBmYWxsYmFjayByZXNvbHV0aW9uLlxuXHRcdCAqIGllLCBpdCB3aWxsIGF1dG9tYXRpY2FsbHkgbG9hZCB0aGUgZmFsbGJhY2sgbG9jYWxlcyBmb3IgZGUuXG5cdFx0ICogRm9yIG1vc3QgdXNlY2FzZXMsIHRoaXMgaXMgdGhlIHJlY29tbWVuZGVkIG1ldGhvZC5cblx0XHQgKiBJdCBpcyBvcHRpb25hbCB0byBoYXZlIHRyYWlsaW5nIHNsYXNoIGF0IGVuZC5cblx0XHQgKlxuXHRcdCAqIEEgZGF0YSBvYmplY3QgY29udGFpbmluZyBtZXNzYWdlIGtleS0gbWVzc2FnZSB0cmFuc2xhdGlvbiBtYXBwaW5nc1xuXHRcdCAqIGNhbiBhbHNvIGJlIHBhc3NlZC4gRXhhbXBsZTpcblx0XHQgKiA8Y29kZT5cblx0XHQgKiBsb2FkKCB7ICdoZWxsbycgOiAnSGVsbG8nIH0sIG9wdGlvbmFsTG9jYWxlICk7XG5cdFx0ICogPC9jb2RlPlxuXHRcdCAqXG5cdFx0ICogQSBzb3VyY2UgbWFwIGNvbnRhaW5pbmcga2V5LXZhbHVlIHBhaXIgb2YgbGFuZ3VhZ2VuYW1lIGFuZCBsb2NhdGlvbnNcblx0XHQgKiBjYW4gYWxzbyBiZSBwYXNzZWQuIEV4YW1wbGU6XG5cdFx0ICogPGNvZGU+XG5cdFx0ICogbG9hZCgge1xuXHRcdCAqIGJuOiAnaTE4bi9ibi5qc29uJyxcblx0XHQgKiBoZTogJ2kxOG4vaGUuanNvbicsXG5cdFx0ICogZW46ICdpMThuL2VuLmpzb24nXG5cdFx0ICogfSApXG5cdFx0ICogPC9jb2RlPlxuXHRcdCAqXG5cdFx0ICogSWYgdGhlIGRhdGEgYXJndW1lbnQgaXMgbnVsbC91bmRlZmluZWQvZmFsc2UsXG5cdFx0ICogYWxsIGNhY2hlZCBtZXNzYWdlcyBmb3IgdGhlIGkxOG4gaW5zdGFuY2Ugd2lsbCBnZXQgcmVzZXQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHNvdXJjZVxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhbGUgTGFuZ3VhZ2UgdGFnXG5cdFx0ICogQHJldHVybiB7alF1ZXJ5LlByb21pc2V9XG5cdFx0ICovXG5cdFx0bG9hZDogZnVuY3Rpb24gKCBzb3VyY2UsIGxvY2FsZSApIHtcblx0XHRcdHZhciBmYWxsYmFja0xvY2FsZXMsIGxvY0luZGV4LCBmYWxsYmFja0xvY2FsZSwgc291cmNlTWFwID0ge307XG5cdFx0XHRpZiAoICFzb3VyY2UgJiYgIWxvY2FsZSApIHtcblx0XHRcdFx0c291cmNlID0gJ2kxOG4vJyArICQuaTE4bigpLmxvY2FsZSArICcuanNvbic7XG5cdFx0XHRcdGxvY2FsZSA9ICQuaTE4bigpLmxvY2FsZTtcblx0XHRcdH1cblx0XHRcdGlmICggdHlwZW9mIHNvdXJjZSA9PT0gJ3N0cmluZycgJiZcblx0XHRcdFx0Ly8gc291cmNlIGV4dGVuc2lvbiBzaG91bGQgYmUganNvbiwgYnV0IGNhbiBoYXZlIHF1ZXJ5IHBhcmFtcyBhZnRlciB0aGF0LlxuXHRcdFx0XHRzb3VyY2Uuc3BsaXQoICc/JyApWyAwIF0uc3BsaXQoICcuJyApLnBvcCgpICE9PSAnanNvbidcblx0XHRcdCkge1xuXHRcdFx0XHQvLyBMb2FkIHNwZWNpZmllZCBsb2NhbGUgdGhlbiBjaGVjayBmb3IgZmFsbGJhY2tzIHdoZW4gZGlyZWN0b3J5IGlzXG5cdFx0XHRcdC8vIHNwZWNpZmllZCBpbiBsb2FkKClcblx0XHRcdFx0c291cmNlTWFwWyBsb2NhbGUgXSA9IHNvdXJjZSArICcvJyArIGxvY2FsZSArICcuanNvbic7XG5cdFx0XHRcdGZhbGxiYWNrTG9jYWxlcyA9ICggJC5pMThuLmZhbGxiYWNrc1sgbG9jYWxlIF0gfHwgW10gKVxuXHRcdFx0XHRcdC5jb25jYXQoIHRoaXMub3B0aW9ucy5mYWxsYmFja0xvY2FsZSApO1xuXHRcdFx0XHRmb3IgKCBsb2NJbmRleCA9IDA7IGxvY0luZGV4IDwgZmFsbGJhY2tMb2NhbGVzLmxlbmd0aDsgbG9jSW5kZXgrKyApIHtcblx0XHRcdFx0XHRmYWxsYmFja0xvY2FsZSA9IGZhbGxiYWNrTG9jYWxlc1sgbG9jSW5kZXggXTtcblx0XHRcdFx0XHRzb3VyY2VNYXBbIGZhbGxiYWNrTG9jYWxlIF0gPSBzb3VyY2UgKyAnLycgKyBmYWxsYmFja0xvY2FsZSArICcuanNvbic7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRoaXMubG9hZCggc291cmNlTWFwICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5tZXNzYWdlU3RvcmUubG9hZCggc291cmNlLCBsb2NhbGUgKTtcblx0XHRcdH1cblxuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBEb2VzIHBhcmFtZXRlciBhbmQgbWFnaWMgd29yZCBzdWJzdGl0dXRpb24uXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30ga2V5IE1lc3NhZ2Uga2V5XG5cdFx0ICogQHBhcmFtIHtBcnJheX0gcGFyYW1ldGVycyBNZXNzYWdlIHBhcmFtZXRlcnNcblx0XHQgKiBAcmV0dXJuIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0cGFyc2U6IGZ1bmN0aW9uICgga2V5LCBwYXJhbWV0ZXJzICkge1xuXHRcdFx0dmFyIG1lc3NhZ2UgPSB0aGlzLmxvY2FsaXplKCBrZXkgKTtcblx0XHRcdC8vIEZJWE1FOiBUaGlzIGNoYW5nZXMgdGhlIHN0YXRlIG9mIHRoZSBJMThOIG9iamVjdCxcblx0XHRcdC8vIHNob3VsZCBwcm9iYWJseSBub3QgY2hhbmdlIHRoZSAndGhpcy5wYXJzZXInIGJ1dCBqdXN0XG5cdFx0XHQvLyBwYXNzIGl0IHRvIHRoZSBwYXJzZXIuXG5cdFx0XHR0aGlzLnBhcnNlci5sYW5ndWFnZSA9ICQuaTE4bi5sYW5ndWFnZXNbICQuaTE4bigpLmxvY2FsZSBdIHx8ICQuaTE4bi5sYW5ndWFnZXNbICdkZWZhdWx0JyBdO1xuXHRcdFx0aWYgKCBtZXNzYWdlID09PSAnJyApIHtcblx0XHRcdFx0bWVzc2FnZSA9IGtleTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzLnBhcnNlci5wYXJzZSggbWVzc2FnZSwgcGFyYW1ldGVycyApO1xuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogUHJvY2VzcyBhIG1lc3NhZ2UgZnJvbSB0aGUgJC5JMThOIGluc3RhbmNlXG5cdCAqIGZvciB0aGUgY3VycmVudCBkb2N1bWVudCwgc3RvcmVkIGluIGpRdWVyeS5kYXRhKGRvY3VtZW50KS5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGtleSBLZXkgb2YgdGhlIG1lc3NhZ2UuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbTEgW3BhcmFtLi4uXSBWYXJpYWRpYyBsaXN0IG9mIHBhcmFtZXRlcnMgZm9yIHtrZXl9LlxuXHQgKiBAcmV0dXJuIHtzdHJpbmd8JC5JMThOfSBQYXJzZWQgbWVzc2FnZSwgb3IgaWYgbm8ga2V5IHdhcyBnaXZlblxuXHQgKiB0aGUgaW5zdGFuY2Ugb2YgJC5JMThOIGlzIHJldHVybmVkLlxuXHQgKi9cblx0JC5pMThuID0gZnVuY3Rpb24gKCBrZXksIHBhcmFtMSApIHtcblx0XHR2YXIgcGFyYW1ldGVycyxcblx0XHRcdGkxOG4gPSAkLmRhdGEoIGRvY3VtZW50LCAnaTE4bicgKSxcblx0XHRcdG9wdGlvbnMgPSB0eXBlb2Yga2V5ID09PSAnb2JqZWN0JyAmJiBrZXk7XG5cblx0XHQvLyBJZiB0aGUgbG9jYWxlIG9wdGlvbiBmb3IgdGhpcyBjYWxsIGlzIGRpZmZlcmVudCB0aGVuIHRoZSBzZXR1cCBzbyBmYXIsXG5cdFx0Ly8gdXBkYXRlIGl0IGF1dG9tYXRpY2FsbHkuIFRoaXMgZG9lc24ndCBqdXN0IGNoYW5nZSB0aGUgY29udGV4dCBmb3IgdGhpc1xuXHRcdC8vIGNhbGwgYnV0IGZvciBhbGwgZnV0dXJlIGNhbGwgYXMgd2VsbC5cblx0XHQvLyBJZiB0aGVyZSBpcyBubyBpMThuIHNldHVwIHlldCwgZG9uJ3QgZG8gdGhpcy4gSXQgd2lsbCBiZSB0YWtlbiBjYXJlIG9mXG5cdFx0Ly8gYnkgdGhlIGBuZXcgSTE4TmAgY29uc3RydWN0aW9uIGJlbG93LlxuXHRcdC8vIE5PVEU6IEl0IHNob3VsZCBvbmx5IGNoYW5nZSBsYW5ndWFnZSBmb3IgdGhpcyBvbmUgY2FsbC5cblx0XHQvLyBUaGVuIGNhY2hlIGluc3RhbmNlcyBvZiBJMThOIHNvbWV3aGVyZS5cblx0XHRpZiAoIG9wdGlvbnMgJiYgb3B0aW9ucy5sb2NhbGUgJiYgaTE4biAmJiBpMThuLmxvY2FsZSAhPT0gb3B0aW9ucy5sb2NhbGUgKSB7XG5cdFx0XHRpMThuLmxvY2FsZSA9IG9wdGlvbnMubG9jYWxlO1xuXHRcdH1cblxuXHRcdGlmICggIWkxOG4gKSB7XG5cdFx0XHRpMThuID0gbmV3IEkxOE4oIG9wdGlvbnMgKTtcblx0XHRcdCQuZGF0YSggZG9jdW1lbnQsICdpMThuJywgaTE4biApO1xuXHRcdH1cblxuXHRcdGlmICggdHlwZW9mIGtleSA9PT0gJ3N0cmluZycgKSB7XG5cdFx0XHRpZiAoIHBhcmFtMSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRwYXJhbWV0ZXJzID0gc2xpY2UuY2FsbCggYXJndW1lbnRzLCAxICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwYXJhbWV0ZXJzID0gW107XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBpMThuLnBhcnNlKCBrZXksIHBhcmFtZXRlcnMgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gRklYTUU6IHJlbW92ZSB0aGlzIGZlYXR1cmUvYnVnLlxuXHRcdFx0cmV0dXJuIGkxOG47XG5cdFx0fVxuXHR9O1xuXG5cdCQuZm4uaTE4biA9IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgaTE4biA9ICQuZGF0YSggZG9jdW1lbnQsICdpMThuJyApO1xuXG5cdFx0aWYgKCAhaTE4biApIHtcblx0XHRcdGkxOG4gPSBuZXcgSTE4TigpO1xuXHRcdFx0JC5kYXRhKCBkb2N1bWVudCwgJ2kxOG4nLCBpMThuICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24gKCkge1xuXHRcdFx0dmFyICR0aGlzID0gJCggdGhpcyApLFxuXHRcdFx0XHRtZXNzYWdlS2V5ID0gJHRoaXMuZGF0YSggJ2kxOG4nICksXG5cdFx0XHRcdGxCcmFja2V0LCByQnJhY2tldCwgdHlwZSwga2V5O1xuXG5cdFx0XHRpZiAoIG1lc3NhZ2VLZXkgKSB7XG5cdFx0XHRcdGxCcmFja2V0ID0gbWVzc2FnZUtleS5pbmRleE9mKCAnWycgKTtcblx0XHRcdFx0ckJyYWNrZXQgPSBtZXNzYWdlS2V5LmluZGV4T2YoICddJyApO1xuXHRcdFx0XHRpZiAoIGxCcmFja2V0ICE9PSAtMSAmJiByQnJhY2tldCAhPT0gLTEgJiYgbEJyYWNrZXQgPCByQnJhY2tldCApIHtcblx0XHRcdFx0XHR0eXBlID0gbWVzc2FnZUtleS5zbGljZSggbEJyYWNrZXQgKyAxLCByQnJhY2tldCApO1xuXHRcdFx0XHRcdGtleSA9IG1lc3NhZ2VLZXkuc2xpY2UoIHJCcmFja2V0ICsgMSApO1xuXHRcdFx0XHRcdGlmICggdHlwZSA9PT0gJ2h0bWwnICkge1xuXHRcdFx0XHRcdFx0JHRoaXMuaHRtbCggaTE4bi5wYXJzZSgga2V5ICkgKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0JHRoaXMuYXR0ciggdHlwZSwgaTE4bi5wYXJzZSgga2V5ICkgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JHRoaXMudGV4dCggaTE4bi5wYXJzZSggbWVzc2FnZUtleSApICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCR0aGlzLmZpbmQoICdbZGF0YS1pMThuXScgKS5pMThuKCk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9O1xuXG5cdGZ1bmN0aW9uIGdldERlZmF1bHRMb2NhbGUoKSB7XG5cdFx0dmFyIGxvY2FsZSA9ICQoICdodG1sJyApLmF0dHIoICdsYW5nJyApO1xuXHRcdGlmICggIWxvY2FsZSApIHtcblx0XHRcdGxvY2FsZSA9IG5hdmlnYXRvci5sYW5ndWFnZSB8fCBuYXZpZ2F0b3IudXNlckxhbmd1YWdlIHx8ICcnO1xuXHRcdH1cblx0XHRyZXR1cm4gbG9jYWxlO1xuXHR9XG5cblx0JC5pMThuLmxhbmd1YWdlcyA9IHt9O1xuXHQkLmkxOG4ubWVzc2FnZVN0b3JlID0gJC5pMThuLm1lc3NhZ2VTdG9yZSB8fCB7fTtcblx0JC5pMThuLnBhcnNlciA9IHtcblx0XHQvLyBUaGUgZGVmYXVsdCBwYXJzZXIgb25seSBoYW5kbGVzIHZhcmlhYmxlIHN1YnN0aXR1dGlvblxuXHRcdHBhcnNlOiBmdW5jdGlvbiAoIG1lc3NhZ2UsIHBhcmFtZXRlcnMgKSB7XG5cdFx0XHRyZXR1cm4gbWVzc2FnZS5yZXBsYWNlKCAvXFwkKFxcZCspL2csIGZ1bmN0aW9uICggc3RyLCBtYXRjaCApIHtcblx0XHRcdFx0dmFyIGluZGV4ID0gcGFyc2VJbnQoIG1hdGNoLCAxMCApIC0gMTtcblx0XHRcdFx0cmV0dXJuIHBhcmFtZXRlcnNbIGluZGV4IF0gIT09IHVuZGVmaW5lZCA/IHBhcmFtZXRlcnNbIGluZGV4IF0gOiAnJCcgKyBtYXRjaDtcblx0XHRcdH0gKTtcblx0XHR9LFxuXHRcdGVtaXR0ZXI6IHt9XG5cdH07XG5cdCQuaTE4bi5mYWxsYmFja3MgPSB7fTtcblx0JC5pMThuLmRlYnVnID0gZmFsc2U7XG5cdCQuaTE4bi5sb2cgPSBmdW5jdGlvbiAoIC8qIGFyZ3VtZW50cyAqLyApIHtcblx0XHRpZiAoIHdpbmRvdy5jb25zb2xlICYmICQuaTE4bi5kZWJ1ZyApIHtcblx0XHRcdHdpbmRvdy5jb25zb2xlLmxvZy5hcHBseSggd2luZG93LmNvbnNvbGUsIGFyZ3VtZW50cyApO1xuXHRcdH1cblx0fTtcblx0LyogU3RhdGljIG1lbWJlcnMgKi9cblx0STE4Ti5kZWZhdWx0cyA9IHtcblx0XHRsb2NhbGU6IGdldERlZmF1bHRMb2NhbGUoKSxcblx0XHRmYWxsYmFja0xvY2FsZTogJ2VuJyxcblx0XHRwYXJzZXI6ICQuaTE4bi5wYXJzZXIsXG5cdFx0bWVzc2FnZVN0b3JlOiAkLmkxOG4ubWVzc2FnZVN0b3JlXG5cdH07XG5cblx0Ly8gRXhwb3NlIGNvbnN0cnVjdG9yXG5cdCQuaTE4bi5jb25zdHJ1Y3RvciA9IEkxOE47XG59KCBqUXVlcnkgKSApO1xuIiwiLyohXG4gKiBqUXVlcnkgSW50ZXJuYXRpb25hbGl6YXRpb24gbGlicmFyeSAtIE1lc3NhZ2UgU3RvcmVcbiAqXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTIgU2FudGhvc2ggVGhvdHRpbmdhbFxuICpcbiAqIGpxdWVyeS5pMThuIGlzIGR1YWwgbGljZW5zZWQgR1BMdjIgb3IgbGF0ZXIgYW5kIE1JVC4gWW91IGRvbid0IGhhdmUgdG8gZG8gYW55dGhpbmcgc3BlY2lhbCB0b1xuICogY2hvb3NlIG9uZSBsaWNlbnNlIG9yIHRoZSBvdGhlciBhbmQgeW91IGRvbid0IGhhdmUgdG8gbm90aWZ5IGFueW9uZSB3aGljaCBsaWNlbnNlIHlvdSBhcmUgdXNpbmcuXG4gKiBZb3UgYXJlIGZyZWUgdG8gdXNlIFVuaXZlcnNhbExhbmd1YWdlU2VsZWN0b3IgaW4gY29tbWVyY2lhbCBwcm9qZWN0cyBhcyBsb25nIGFzIHRoZSBjb3B5cmlnaHRcbiAqIGhlYWRlciBpcyBsZWZ0IGludGFjdC4gU2VlIGZpbGVzIEdQTC1MSUNFTlNFIGFuZCBNSVQtTElDRU5TRSBmb3IgZGV0YWlscy5cbiAqXG4gKiBAbGljZW5jZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5jZSAyLjAgb3IgbGF0ZXJcbiAqIEBsaWNlbmNlIE1JVCBMaWNlbnNlXG4gKi9cblxuKCBmdW5jdGlvbiAoICQgKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgTWVzc2FnZVN0b3JlID0gZnVuY3Rpb24gKCkge1xuXHRcdHRoaXMubWVzc2FnZXMgPSB7fTtcblx0XHR0aGlzLnNvdXJjZXMgPSB7fTtcblx0fTtcblxuXHRmdW5jdGlvbiBqc29uTWVzc2FnZUxvYWRlciggdXJsICkge1xuXHRcdHZhciBkZWZlcnJlZCA9ICQuRGVmZXJyZWQoKTtcblxuXHRcdCQuZ2V0SlNPTiggdXJsIClcblx0XHRcdC5kb25lKCBkZWZlcnJlZC5yZXNvbHZlIClcblx0XHRcdC5mYWlsKCBmdW5jdGlvbiAoIGpxeGhyLCBzZXR0aW5ncywgZXhjZXB0aW9uICkge1xuXHRcdFx0XHQkLmkxOG4ubG9nKCAnRXJyb3IgaW4gbG9hZGluZyBtZXNzYWdlcyBmcm9tICcgKyB1cmwgKyAnIEV4Y2VwdGlvbjogJyArIGV4Y2VwdGlvbiApO1xuXHRcdFx0XHQvLyBJZ25vcmUgNDA0IGV4Y2VwdGlvbiwgYmVjYXVzZSB3ZSBhcmUgaGFuZGxpbmcgZmFsbGFiYWNrcyBleHBsaWNpdGx5XG5cdFx0XHRcdGRlZmVycmVkLnJlc29sdmUoKTtcblx0XHRcdH0gKTtcblxuXHRcdHJldHVybiBkZWZlcnJlZC5wcm9taXNlKCk7XG5cdH1cblxuXHQvKipcblx0ICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93aWtpbWVkaWEvanF1ZXJ5LmkxOG4vd2lraS9TcGVjaWZpY2F0aW9uI3dpa2ktTWVzc2FnZV9GaWxlX0xvYWRpbmdcblx0ICovXG5cdE1lc3NhZ2VTdG9yZS5wcm90b3R5cGUgPSB7XG5cblx0XHQvKipcblx0XHQgKiBHZW5lcmFsIG1lc3NhZ2UgbG9hZGluZyBBUEkgVGhpcyBjYW4gdGFrZSBhIFVSTCBzdHJpbmcgZm9yXG5cdFx0ICogdGhlIGpzb24gZm9ybWF0dGVkIG1lc3NhZ2VzLlxuXHRcdCAqIDxjb2RlPmxvYWQoJ3BhdGgvdG8vYWxsX2xvY2FsaXphdGlvbnMuanNvbicpOzwvY29kZT5cblx0XHQgKlxuXHRcdCAqIFRoaXMgY2FuIGFsc28gbG9hZCBhIGxvY2FsaXphdGlvbiBmaWxlIGZvciBhIGxvY2FsZSA8Y29kZT5cblx0XHQgKiBsb2FkKCAncGF0aC90by9kZS1tZXNzYWdlcy5qc29uJywgJ2RlJyApO1xuXHRcdCAqIDwvY29kZT5cblx0XHQgKiBBIGRhdGEgb2JqZWN0IGNvbnRhaW5pbmcgbWVzc2FnZSBrZXktIG1lc3NhZ2UgdHJhbnNsYXRpb24gbWFwcGluZ3Ncblx0XHQgKiBjYW4gYWxzbyBiZSBwYXNzZWQgRWc6XG5cdFx0ICogPGNvZGU+XG5cdFx0ICogbG9hZCggeyAnaGVsbG8nIDogJ0hlbGxvJyB9LCBvcHRpb25hbExvY2FsZSApO1xuXHRcdCAqIDwvY29kZT4gSWYgdGhlIGRhdGEgYXJndW1lbnQgaXNcblx0XHQgKiBudWxsL3VuZGVmaW5lZC9mYWxzZSxcblx0XHQgKiBhbGwgY2FjaGVkIG1lc3NhZ2VzIGZvciB0aGUgaTE4biBpbnN0YW5jZSB3aWxsIGdldCByZXNldC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc291cmNlXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGxvY2FsZSBMYW5ndWFnZSB0YWdcblx0XHQgKiBAcmV0dXJuIHtqUXVlcnkuUHJvbWlzZX1cblx0XHQgKi9cblx0XHRsb2FkOiBmdW5jdGlvbiAoIHNvdXJjZSwgbG9jYWxlICkge1xuXHRcdFx0dmFyIGtleSA9IG51bGwsXG5cdFx0XHRcdGRlZmVycmVkcyA9IFtdLFxuXHRcdFx0XHRtZXNzYWdlU3RvcmUgPSB0aGlzO1xuXG5cdFx0XHRpZiAoIHR5cGVvZiBzb3VyY2UgPT09ICdzdHJpbmcnICkge1xuXHRcdFx0XHQvLyBUaGlzIGlzIGEgVVJMIHRvIHRoZSBtZXNzYWdlcyBmaWxlLlxuXHRcdFx0XHQkLmkxOG4ubG9nKCAnTG9hZGluZyBtZXNzYWdlcyBmcm9tOiAnICsgc291cmNlICk7XG5cdFx0XHRcdHJldHVybiBqc29uTWVzc2FnZUxvYWRlciggc291cmNlIClcblx0XHRcdFx0XHQudGhlbiggZnVuY3Rpb24gKCBsb2NhbGl6YXRpb24gKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gbWVzc2FnZVN0b3JlLmxvYWQoIGxvY2FsaXphdGlvbiwgbG9jYWxlICk7XG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIGxvY2FsZSApIHtcblx0XHRcdFx0Ly8gc291cmNlIGlzIGFuIGtleS12YWx1ZSBwYWlyIG9mIG1lc3NhZ2VzIGZvciBnaXZlbiBsb2NhbGVcblx0XHRcdFx0bWVzc2FnZVN0b3JlLnNldCggbG9jYWxlLCBzb3VyY2UgKTtcblxuXHRcdFx0XHRyZXR1cm4gJC5EZWZlcnJlZCgpLnJlc29sdmUoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIHNvdXJjZSBpcyBhIGtleS12YWx1ZSBwYWlyIG9mIGxvY2FsZXMgYW5kIHRoZWlyIHNvdXJjZVxuXHRcdFx0XHRmb3IgKCBrZXkgaW4gc291cmNlICkge1xuXHRcdFx0XHRcdGlmICggT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKCBzb3VyY2UsIGtleSApICkge1xuXHRcdFx0XHRcdFx0bG9jYWxlID0ga2V5O1xuXHRcdFx0XHRcdFx0Ly8gTm8ge2xvY2FsZX0gZ2l2ZW4sIGFzc3VtZSBkYXRhIGlzIGEgZ3JvdXAgb2YgbGFuZ3VhZ2VzLFxuXHRcdFx0XHRcdFx0Ly8gY2FsbCB0aGlzIGZ1bmN0aW9uIGFnYWluIGZvciBlYWNoIGxhbmd1YWdlLlxuXHRcdFx0XHRcdFx0ZGVmZXJyZWRzLnB1c2goIG1lc3NhZ2VTdG9yZS5sb2FkKCBzb3VyY2VbIGtleSBdLCBsb2NhbGUgKSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gJC53aGVuLmFwcGx5KCAkLCBkZWZlcnJlZHMgKTtcblx0XHRcdH1cblxuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBTZXQgbWVzc2FnZXMgdG8gdGhlIGdpdmVuIGxvY2FsZS5cblx0XHQgKiBJZiBsb2NhbGUgZXhpc3RzLCBhZGQgbWVzc2FnZXMgdG8gdGhlIGxvY2FsZS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhbGVcblx0XHQgKiBAcGFyYW0ge09iamVjdH0gbWVzc2FnZXNcblx0XHQgKi9cblx0XHRzZXQ6IGZ1bmN0aW9uICggbG9jYWxlLCBtZXNzYWdlcyApIHtcblx0XHRcdGlmICggIXRoaXMubWVzc2FnZXNbIGxvY2FsZSBdICkge1xuXHRcdFx0XHR0aGlzLm1lc3NhZ2VzWyBsb2NhbGUgXSA9IG1lc3NhZ2VzO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5tZXNzYWdlc1sgbG9jYWxlIF0gPSAkLmV4dGVuZCggdGhpcy5tZXNzYWdlc1sgbG9jYWxlIF0sIG1lc3NhZ2VzICk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGxvY2FsZVxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlS2V5XG5cdFx0ICogQHJldHVybiB7Ym9vbGVhbn1cblx0XHQgKi9cblx0XHRnZXQ6IGZ1bmN0aW9uICggbG9jYWxlLCBtZXNzYWdlS2V5ICkge1xuXHRcdFx0cmV0dXJuIHRoaXMubWVzc2FnZXNbIGxvY2FsZSBdICYmIHRoaXMubWVzc2FnZXNbIGxvY2FsZSBdWyBtZXNzYWdlS2V5IF07XG5cdFx0fVxuXHR9O1xuXG5cdCQuZXh0ZW5kKCAkLmkxOG4ubWVzc2FnZVN0b3JlLCBuZXcgTWVzc2FnZVN0b3JlKCkgKTtcbn0oIGpRdWVyeSApICk7XG4iLCIvKiFcbiAqIERhdGVwaWNrZXIgZm9yIEJvb3RzdHJhcCB2MS45LjAgKGh0dHBzOi8vZ2l0aHViLmNvbS91eHNvbHV0aW9ucy9ib290c3RyYXAtZGF0ZXBpY2tlcilcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UgdjIuMCAoaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wKVxuICovXG5cbihmdW5jdGlvbihmYWN0b3J5KXtcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZShbJ2pxdWVyeSddLCBmYWN0b3J5KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgICAgICBmYWN0b3J5KHJlcXVpcmUoJ2pxdWVyeScpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBmYWN0b3J5KGpRdWVyeSk7XG4gICAgfVxufShmdW5jdGlvbigkLCB1bmRlZmluZWQpe1xuXHRmdW5jdGlvbiBVVENEYXRlKCl7XG5cdFx0cmV0dXJuIG5ldyBEYXRlKERhdGUuVVRDLmFwcGx5KERhdGUsIGFyZ3VtZW50cykpO1xuXHR9XG5cdGZ1bmN0aW9uIFVUQ1RvZGF5KCl7XG5cdFx0dmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcblx0XHRyZXR1cm4gVVRDRGF0ZSh0b2RheS5nZXRGdWxsWWVhcigpLCB0b2RheS5nZXRNb250aCgpLCB0b2RheS5nZXREYXRlKCkpO1xuXHR9XG5cdGZ1bmN0aW9uIGlzVVRDRXF1YWxzKGRhdGUxLCBkYXRlMikge1xuXHRcdHJldHVybiAoXG5cdFx0XHRkYXRlMS5nZXRVVENGdWxsWWVhcigpID09PSBkYXRlMi5nZXRVVENGdWxsWWVhcigpICYmXG5cdFx0XHRkYXRlMS5nZXRVVENNb250aCgpID09PSBkYXRlMi5nZXRVVENNb250aCgpICYmXG5cdFx0XHRkYXRlMS5nZXRVVENEYXRlKCkgPT09IGRhdGUyLmdldFVUQ0RhdGUoKVxuXHRcdCk7XG5cdH1cblx0ZnVuY3Rpb24gYWxpYXMobWV0aG9kLCBkZXByZWNhdGlvbk1zZyl7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCl7XG5cdFx0XHRpZiAoZGVwcmVjYXRpb25Nc2cgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHQkLmZuLmRhdGVwaWNrZXIuZGVwcmVjYXRlZChkZXByZWNhdGlvbk1zZyk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0aGlzW21ldGhvZF0uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHR9O1xuXHR9XG5cdGZ1bmN0aW9uIGlzVmFsaWREYXRlKGQpIHtcblx0XHRyZXR1cm4gZCAmJiAhaXNOYU4oZC5nZXRUaW1lKCkpO1xuXHR9XG5cblx0dmFyIERhdGVBcnJheSA9IChmdW5jdGlvbigpe1xuXHRcdHZhciBleHRyYXMgPSB7XG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKGkpe1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5zbGljZShpKVswXTtcblx0XHRcdH0sXG5cdFx0XHRjb250YWluczogZnVuY3Rpb24oZCl7XG5cdFx0XHRcdC8vIEFycmF5LmluZGV4T2YgaXMgbm90IGNyb3NzLWJyb3dzZXI7XG5cdFx0XHRcdC8vICQuaW5BcnJheSBkb2Vzbid0IHdvcmsgd2l0aCBEYXRlc1xuXHRcdFx0XHR2YXIgdmFsID0gZCAmJiBkLnZhbHVlT2YoKTtcblx0XHRcdFx0Zm9yICh2YXIgaT0wLCBsPXRoaXMubGVuZ3RoOyBpIDwgbDsgaSsrKVxuICAgICAgICAgIC8vIFVzZSBkYXRlIGFyaXRobWV0aWMgdG8gYWxsb3cgZGF0ZXMgd2l0aCBkaWZmZXJlbnQgdGltZXMgdG8gbWF0Y2hcbiAgICAgICAgICBpZiAoMCA8PSB0aGlzW2ldLnZhbHVlT2YoKSAtIHZhbCAmJiB0aGlzW2ldLnZhbHVlT2YoKSAtIHZhbCA8IDEwMDAqNjAqNjAqMjQpXG5cdFx0XHRcdFx0XHRyZXR1cm4gaTtcblx0XHRcdFx0cmV0dXJuIC0xO1xuXHRcdFx0fSxcblx0XHRcdHJlbW92ZTogZnVuY3Rpb24oaSl7XG5cdFx0XHRcdHRoaXMuc3BsaWNlKGksMSk7XG5cdFx0XHR9LFxuXHRcdFx0cmVwbGFjZTogZnVuY3Rpb24obmV3X2FycmF5KXtcblx0XHRcdFx0aWYgKCFuZXdfYXJyYXkpXG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRpZiAoISQuaXNBcnJheShuZXdfYXJyYXkpKVxuXHRcdFx0XHRcdG5ld19hcnJheSA9IFtuZXdfYXJyYXldO1xuXHRcdFx0XHR0aGlzLmNsZWFyKCk7XG5cdFx0XHRcdHRoaXMucHVzaC5hcHBseSh0aGlzLCBuZXdfYXJyYXkpO1xuXHRcdFx0fSxcblx0XHRcdGNsZWFyOiBmdW5jdGlvbigpe1xuXHRcdFx0XHR0aGlzLmxlbmd0aCA9IDA7XG5cdFx0XHR9LFxuXHRcdFx0Y29weTogZnVuY3Rpb24oKXtcblx0XHRcdFx0dmFyIGEgPSBuZXcgRGF0ZUFycmF5KCk7XG5cdFx0XHRcdGEucmVwbGFjZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuIGE7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHJldHVybiBmdW5jdGlvbigpe1xuXHRcdFx0dmFyIGEgPSBbXTtcblx0XHRcdGEucHVzaC5hcHBseShhLCBhcmd1bWVudHMpO1xuXHRcdFx0JC5leHRlbmQoYSwgZXh0cmFzKTtcblx0XHRcdHJldHVybiBhO1xuXHRcdH07XG5cdH0pKCk7XG5cblxuXHQvLyBQaWNrZXIgb2JqZWN0XG5cblx0dmFyIERhdGVwaWNrZXIgPSBmdW5jdGlvbihlbGVtZW50LCBvcHRpb25zKXtcblx0XHQkLmRhdGEoZWxlbWVudCwgJ2RhdGVwaWNrZXInLCB0aGlzKTtcblxuXHRcdHRoaXMuX2V2ZW50cyA9IFtdO1xuXHRcdHRoaXMuX3NlY29uZGFyeUV2ZW50cyA9IFtdO1xuXG5cdFx0dGhpcy5fcHJvY2Vzc19vcHRpb25zKG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5kYXRlcyA9IG5ldyBEYXRlQXJyYXkoKTtcblx0XHR0aGlzLnZpZXdEYXRlID0gdGhpcy5vLmRlZmF1bHRWaWV3RGF0ZTtcblx0XHR0aGlzLmZvY3VzRGF0ZSA9IG51bGw7XG5cblx0XHR0aGlzLmVsZW1lbnQgPSAkKGVsZW1lbnQpO1xuXHRcdHRoaXMuaXNJbnB1dCA9IHRoaXMuZWxlbWVudC5pcygnaW5wdXQnKTtcblx0XHR0aGlzLmlucHV0RmllbGQgPSB0aGlzLmlzSW5wdXQgPyB0aGlzLmVsZW1lbnQgOiB0aGlzLmVsZW1lbnQuZmluZCgnaW5wdXQnKTtcblx0XHR0aGlzLmNvbXBvbmVudCA9IHRoaXMuZWxlbWVudC5oYXNDbGFzcygnZGF0ZScpID8gdGhpcy5lbGVtZW50LmZpbmQoJy5hZGQtb24sIC5pbnB1dC1ncm91cC1hZGRvbiwgLmlucHV0LWdyb3VwLWFwcGVuZCwgLmlucHV0LWdyb3VwLXByZXBlbmQsIC5idG4nKSA6IGZhbHNlO1xuXHRcdGlmICh0aGlzLmNvbXBvbmVudCAmJiB0aGlzLmNvbXBvbmVudC5sZW5ndGggPT09IDApXG5cdFx0XHR0aGlzLmNvbXBvbmVudCA9IGZhbHNlO1xuXHRcdHRoaXMuaXNJbmxpbmUgPSAhdGhpcy5jb21wb25lbnQgJiYgdGhpcy5lbGVtZW50LmlzKCdkaXYnKTtcblxuXHRcdHRoaXMucGlja2VyID0gJChEUEdsb2JhbC50ZW1wbGF0ZSk7XG5cblx0XHQvLyBDaGVja2luZyB0ZW1wbGF0ZXMgYW5kIGluc2VydGluZ1xuXHRcdGlmICh0aGlzLl9jaGVja190ZW1wbGF0ZSh0aGlzLm8udGVtcGxhdGVzLmxlZnRBcnJvdykpIHtcblx0XHRcdHRoaXMucGlja2VyLmZpbmQoJy5wcmV2JykuaHRtbCh0aGlzLm8udGVtcGxhdGVzLmxlZnRBcnJvdyk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuX2NoZWNrX3RlbXBsYXRlKHRoaXMuby50ZW1wbGF0ZXMucmlnaHRBcnJvdykpIHtcblx0XHRcdHRoaXMucGlja2VyLmZpbmQoJy5uZXh0JykuaHRtbCh0aGlzLm8udGVtcGxhdGVzLnJpZ2h0QXJyb3cpO1xuXHRcdH1cblxuXHRcdHRoaXMuX2J1aWxkRXZlbnRzKCk7XG5cdFx0dGhpcy5fYXR0YWNoRXZlbnRzKCk7XG5cblx0XHRpZiAodGhpcy5pc0lubGluZSl7XG5cdFx0XHR0aGlzLnBpY2tlci5hZGRDbGFzcygnZGF0ZXBpY2tlci1pbmxpbmUnKS5hcHBlbmRUbyh0aGlzLmVsZW1lbnQpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHRoaXMucGlja2VyLmFkZENsYXNzKCdkYXRlcGlja2VyLWRyb3Bkb3duIGRyb3Bkb3duLW1lbnUnKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5vLnJ0bCl7XG5cdFx0XHR0aGlzLnBpY2tlci5hZGRDbGFzcygnZGF0ZXBpY2tlci1ydGwnKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5vLmNhbGVuZGFyV2Vla3MpIHtcblx0XHRcdHRoaXMucGlja2VyLmZpbmQoJy5kYXRlcGlja2VyLWRheXMgLmRhdGVwaWNrZXItc3dpdGNoLCB0aGVhZCAuZGF0ZXBpY2tlci10aXRsZSwgdGZvb3QgLnRvZGF5LCB0Zm9vdCAuY2xlYXInKVxuXHRcdFx0XHQuYXR0cignY29sc3BhbicsIGZ1bmN0aW9uKGksIHZhbCl7XG5cdFx0XHRcdFx0cmV0dXJuIE51bWJlcih2YWwpICsgMTtcblx0XHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0dGhpcy5fcHJvY2Vzc19vcHRpb25zKHtcblx0XHRcdHN0YXJ0RGF0ZTogdGhpcy5fby5zdGFydERhdGUsXG5cdFx0XHRlbmREYXRlOiB0aGlzLl9vLmVuZERhdGUsXG5cdFx0XHRkYXlzT2ZXZWVrRGlzYWJsZWQ6IHRoaXMuby5kYXlzT2ZXZWVrRGlzYWJsZWQsXG5cdFx0XHRkYXlzT2ZXZWVrSGlnaGxpZ2h0ZWQ6IHRoaXMuby5kYXlzT2ZXZWVrSGlnaGxpZ2h0ZWQsXG5cdFx0XHRkYXRlc0Rpc2FibGVkOiB0aGlzLm8uZGF0ZXNEaXNhYmxlZFxuXHRcdH0pO1xuXG5cdFx0dGhpcy5fYWxsb3dfdXBkYXRlID0gZmFsc2U7XG5cdFx0dGhpcy5zZXRWaWV3TW9kZSh0aGlzLm8uc3RhcnRWaWV3KTtcblx0XHR0aGlzLl9hbGxvd191cGRhdGUgPSB0cnVlO1xuXG5cdFx0dGhpcy5maWxsRG93KCk7XG5cdFx0dGhpcy5maWxsTW9udGhzKCk7XG5cblx0XHR0aGlzLnVwZGF0ZSgpO1xuXG5cdFx0aWYgKHRoaXMuaXNJbmxpbmUpe1xuXHRcdFx0dGhpcy5zaG93KCk7XG5cdFx0fVxuXHR9O1xuXG5cdERhdGVwaWNrZXIucHJvdG90eXBlID0ge1xuXHRcdGNvbnN0cnVjdG9yOiBEYXRlcGlja2VyLFxuXG5cdFx0X3Jlc29sdmVWaWV3TmFtZTogZnVuY3Rpb24odmlldyl7XG5cdFx0XHQkLmVhY2goRFBHbG9iYWwudmlld01vZGVzLCBmdW5jdGlvbihpLCB2aWV3TW9kZSl7XG5cdFx0XHRcdGlmICh2aWV3ID09PSBpIHx8ICQuaW5BcnJheSh2aWV3LCB2aWV3TW9kZS5uYW1lcykgIT09IC0xKXtcblx0XHRcdFx0XHR2aWV3ID0gaTtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm4gdmlldztcblx0XHR9LFxuXG5cdFx0X3Jlc29sdmVEYXlzT2ZXZWVrOiBmdW5jdGlvbihkYXlzT2ZXZWVrKXtcblx0XHRcdGlmICghJC5pc0FycmF5KGRheXNPZldlZWspKVxuXHRcdFx0XHRkYXlzT2ZXZWVrID0gZGF5c09mV2Vlay5zcGxpdCgvWyxcXHNdKi8pO1xuXHRcdFx0cmV0dXJuICQubWFwKGRheXNPZldlZWssIE51bWJlcik7XG5cdFx0fSxcblxuXHRcdF9jaGVja190ZW1wbGF0ZTogZnVuY3Rpb24odG1wKXtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdC8vIElmIGVtcHR5XG5cdFx0XHRcdGlmICh0bXAgPT09IHVuZGVmaW5lZCB8fCB0bXAgPT09IFwiXCIpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gSWYgbm8gaHRtbCwgZXZlcnl0aGluZyBva1xuXHRcdFx0XHRpZiAoKHRtcC5tYXRjaCgvWzw+XS9nKSB8fCBbXSkubGVuZ3RoIDw9IDApIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBDaGVja2luZyBpZiBodG1sIGlzIGZpbmVcblx0XHRcdFx0dmFyIGpEb20gPSAkKHRtcCk7XG5cdFx0XHRcdHJldHVybiBqRG9tLmxlbmd0aCA+IDA7XG5cdFx0XHR9XG5cdFx0XHRjYXRjaCAoZXgpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRfcHJvY2Vzc19vcHRpb25zOiBmdW5jdGlvbihvcHRzKXtcblx0XHRcdC8vIFN0b3JlIHJhdyBvcHRpb25zIGZvciByZWZlcmVuY2Vcblx0XHRcdHRoaXMuX28gPSAkLmV4dGVuZCh7fSwgdGhpcy5fbywgb3B0cyk7XG5cdFx0XHQvLyBQcm9jZXNzZWQgb3B0aW9uc1xuXHRcdFx0dmFyIG8gPSB0aGlzLm8gPSAkLmV4dGVuZCh7fSwgdGhpcy5fbyk7XG5cblx0XHRcdC8vIENoZWNrIGlmIFwiZGUtREVcIiBzdHlsZSBkYXRlIGlzIGF2YWlsYWJsZSwgaWYgbm90IGxhbmd1YWdlIHNob3VsZFxuXHRcdFx0Ly8gZmFsbGJhY2sgdG8gMiBsZXR0ZXIgY29kZSBlZyBcImRlXCJcblx0XHRcdHZhciBsYW5nID0gby5sYW5ndWFnZTtcblx0XHRcdGlmICghZGF0ZXNbbGFuZ10pe1xuXHRcdFx0XHRsYW5nID0gbGFuZy5zcGxpdCgnLScpWzBdO1xuXHRcdFx0XHRpZiAoIWRhdGVzW2xhbmddKVxuXHRcdFx0XHRcdGxhbmcgPSBkZWZhdWx0cy5sYW5ndWFnZTtcblx0XHRcdH1cblx0XHRcdG8ubGFuZ3VhZ2UgPSBsYW5nO1xuXG5cdFx0XHQvLyBSZXRyaWV2ZSB2aWV3IGluZGV4IGZyb20gYW55IGFsaWFzZXNcblx0XHRcdG8uc3RhcnRWaWV3ID0gdGhpcy5fcmVzb2x2ZVZpZXdOYW1lKG8uc3RhcnRWaWV3KTtcblx0XHRcdG8ubWluVmlld01vZGUgPSB0aGlzLl9yZXNvbHZlVmlld05hbWUoby5taW5WaWV3TW9kZSk7XG5cdFx0XHRvLm1heFZpZXdNb2RlID0gdGhpcy5fcmVzb2x2ZVZpZXdOYW1lKG8ubWF4Vmlld01vZGUpO1xuXG5cdFx0XHQvLyBDaGVjayB2aWV3IGlzIGJldHdlZW4gbWluIGFuZCBtYXhcblx0XHRcdG8uc3RhcnRWaWV3ID0gTWF0aC5tYXgodGhpcy5vLm1pblZpZXdNb2RlLCBNYXRoLm1pbih0aGlzLm8ubWF4Vmlld01vZGUsIG8uc3RhcnRWaWV3KSk7XG5cblx0XHRcdC8vIHRydWUsIGZhbHNlLCBvciBOdW1iZXIgPiAwXG5cdFx0XHRpZiAoby5tdWx0aWRhdGUgIT09IHRydWUpe1xuXHRcdFx0XHRvLm11bHRpZGF0ZSA9IE51bWJlcihvLm11bHRpZGF0ZSkgfHwgZmFsc2U7XG5cdFx0XHRcdGlmIChvLm11bHRpZGF0ZSAhPT0gZmFsc2UpXG5cdFx0XHRcdFx0by5tdWx0aWRhdGUgPSBNYXRoLm1heCgwLCBvLm11bHRpZGF0ZSk7XG5cdFx0XHR9XG5cdFx0XHRvLm11bHRpZGF0ZVNlcGFyYXRvciA9IFN0cmluZyhvLm11bHRpZGF0ZVNlcGFyYXRvcik7XG5cblx0XHRcdG8ud2Vla1N0YXJ0ICU9IDc7XG5cdFx0XHRvLndlZWtFbmQgPSAoby53ZWVrU3RhcnQgKyA2KSAlIDc7XG5cblx0XHRcdHZhciBmb3JtYXQgPSBEUEdsb2JhbC5wYXJzZUZvcm1hdChvLmZvcm1hdCk7XG5cdFx0XHRpZiAoby5zdGFydERhdGUgIT09IC1JbmZpbml0eSl7XG5cdFx0XHRcdGlmICghIW8uc3RhcnREYXRlKXtcblx0XHRcdFx0XHRpZiAoby5zdGFydERhdGUgaW5zdGFuY2VvZiBEYXRlKVxuXHRcdFx0XHRcdFx0by5zdGFydERhdGUgPSB0aGlzLl9sb2NhbF90b191dGModGhpcy5femVyb190aW1lKG8uc3RhcnREYXRlKSk7XG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0by5zdGFydERhdGUgPSBEUEdsb2JhbC5wYXJzZURhdGUoby5zdGFydERhdGUsIGZvcm1hdCwgby5sYW5ndWFnZSwgby5hc3N1bWVOZWFyYnlZZWFyKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRvLnN0YXJ0RGF0ZSA9IC1JbmZpbml0eTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKG8uZW5kRGF0ZSAhPT0gSW5maW5pdHkpe1xuXHRcdFx0XHRpZiAoISFvLmVuZERhdGUpe1xuXHRcdFx0XHRcdGlmIChvLmVuZERhdGUgaW5zdGFuY2VvZiBEYXRlKVxuXHRcdFx0XHRcdFx0by5lbmREYXRlID0gdGhpcy5fbG9jYWxfdG9fdXRjKHRoaXMuX3plcm9fdGltZShvLmVuZERhdGUpKTtcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRvLmVuZERhdGUgPSBEUEdsb2JhbC5wYXJzZURhdGUoby5lbmREYXRlLCBmb3JtYXQsIG8ubGFuZ3VhZ2UsIG8uYXNzdW1lTmVhcmJ5WWVhcik7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0by5lbmREYXRlID0gSW5maW5pdHk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0by5kYXlzT2ZXZWVrRGlzYWJsZWQgPSB0aGlzLl9yZXNvbHZlRGF5c09mV2VlayhvLmRheXNPZldlZWtEaXNhYmxlZHx8W10pO1xuXHRcdFx0by5kYXlzT2ZXZWVrSGlnaGxpZ2h0ZWQgPSB0aGlzLl9yZXNvbHZlRGF5c09mV2VlayhvLmRheXNPZldlZWtIaWdobGlnaHRlZHx8W10pO1xuXG5cdFx0XHRvLmRhdGVzRGlzYWJsZWQgPSBvLmRhdGVzRGlzYWJsZWR8fFtdO1xuXHRcdFx0aWYgKCEkLmlzQXJyYXkoby5kYXRlc0Rpc2FibGVkKSkge1xuXHRcdFx0XHRvLmRhdGVzRGlzYWJsZWQgPSBvLmRhdGVzRGlzYWJsZWQuc3BsaXQoJywnKTtcblx0XHRcdH1cblx0XHRcdG8uZGF0ZXNEaXNhYmxlZCA9ICQubWFwKG8uZGF0ZXNEaXNhYmxlZCwgZnVuY3Rpb24oZCl7XG5cdFx0XHRcdHJldHVybiBEUEdsb2JhbC5wYXJzZURhdGUoZCwgZm9ybWF0LCBvLmxhbmd1YWdlLCBvLmFzc3VtZU5lYXJieVllYXIpO1xuXHRcdFx0fSk7XG5cblx0XHRcdHZhciBwbGMgPSBTdHJpbmcoby5vcmllbnRhdGlvbikudG9Mb3dlckNhc2UoKS5zcGxpdCgvXFxzKy9nKSxcblx0XHRcdFx0X3BsYyA9IG8ub3JpZW50YXRpb24udG9Mb3dlckNhc2UoKTtcblx0XHRcdHBsYyA9ICQuZ3JlcChwbGMsIGZ1bmN0aW9uKHdvcmQpe1xuXHRcdFx0XHRyZXR1cm4gL15hdXRvfGxlZnR8cmlnaHR8dG9wfGJvdHRvbSQvLnRlc3Qod29yZCk7XG5cdFx0XHR9KTtcblx0XHRcdG8ub3JpZW50YXRpb24gPSB7eDogJ2F1dG8nLCB5OiAnYXV0byd9O1xuXHRcdFx0aWYgKCFfcGxjIHx8IF9wbGMgPT09ICdhdXRvJylcblx0XHRcdFx0OyAvLyBubyBhY3Rpb25cblx0XHRcdGVsc2UgaWYgKHBsYy5sZW5ndGggPT09IDEpe1xuXHRcdFx0XHRzd2l0Y2ggKHBsY1swXSl7XG5cdFx0XHRcdFx0Y2FzZSAndG9wJzpcblx0XHRcdFx0XHRjYXNlICdib3R0b20nOlxuXHRcdFx0XHRcdFx0by5vcmllbnRhdGlvbi55ID0gcGxjWzBdO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnbGVmdCc6XG5cdFx0XHRcdFx0Y2FzZSAncmlnaHQnOlxuXHRcdFx0XHRcdFx0by5vcmllbnRhdGlvbi54ID0gcGxjWzBdO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRfcGxjID0gJC5ncmVwKHBsYywgZnVuY3Rpb24od29yZCl7XG5cdFx0XHRcdFx0cmV0dXJuIC9ebGVmdHxyaWdodCQvLnRlc3Qod29yZCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRvLm9yaWVudGF0aW9uLnggPSBfcGxjWzBdIHx8ICdhdXRvJztcblxuXHRcdFx0XHRfcGxjID0gJC5ncmVwKHBsYywgZnVuY3Rpb24od29yZCl7XG5cdFx0XHRcdFx0cmV0dXJuIC9edG9wfGJvdHRvbSQvLnRlc3Qod29yZCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRvLm9yaWVudGF0aW9uLnkgPSBfcGxjWzBdIHx8ICdhdXRvJztcblx0XHRcdH1cblx0XHRcdGlmIChvLmRlZmF1bHRWaWV3RGF0ZSBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIG8uZGVmYXVsdFZpZXdEYXRlID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRvLmRlZmF1bHRWaWV3RGF0ZSA9IERQR2xvYmFsLnBhcnNlRGF0ZShvLmRlZmF1bHRWaWV3RGF0ZSwgZm9ybWF0LCBvLmxhbmd1YWdlLCBvLmFzc3VtZU5lYXJieVllYXIpO1xuXHRcdFx0fSBlbHNlIGlmIChvLmRlZmF1bHRWaWV3RGF0ZSkge1xuXHRcdFx0XHR2YXIgeWVhciA9IG8uZGVmYXVsdFZpZXdEYXRlLnllYXIgfHwgbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuXHRcdFx0XHR2YXIgbW9udGggPSBvLmRlZmF1bHRWaWV3RGF0ZS5tb250aCB8fCAwO1xuXHRcdFx0XHR2YXIgZGF5ID0gby5kZWZhdWx0Vmlld0RhdGUuZGF5IHx8IDE7XG5cdFx0XHRcdG8uZGVmYXVsdFZpZXdEYXRlID0gVVRDRGF0ZSh5ZWFyLCBtb250aCwgZGF5KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG8uZGVmYXVsdFZpZXdEYXRlID0gVVRDVG9kYXkoKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdF9hcHBseUV2ZW50czogZnVuY3Rpb24oZXZzKXtcblx0XHRcdGZvciAodmFyIGk9MCwgZWwsIGNoLCBldjsgaSA8IGV2cy5sZW5ndGg7IGkrKyl7XG5cdFx0XHRcdGVsID0gZXZzW2ldWzBdO1xuXHRcdFx0XHRpZiAoZXZzW2ldLmxlbmd0aCA9PT0gMil7XG5cdFx0XHRcdFx0Y2ggPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0ZXYgPSBldnNbaV1bMV07XG5cdFx0XHRcdH0gZWxzZSBpZiAoZXZzW2ldLmxlbmd0aCA9PT0gMyl7XG5cdFx0XHRcdFx0Y2ggPSBldnNbaV1bMV07XG5cdFx0XHRcdFx0ZXYgPSBldnNbaV1bMl07XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWwub24oZXYsIGNoKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdF91bmFwcGx5RXZlbnRzOiBmdW5jdGlvbihldnMpe1xuXHRcdFx0Zm9yICh2YXIgaT0wLCBlbCwgZXYsIGNoOyBpIDwgZXZzLmxlbmd0aDsgaSsrKXtcblx0XHRcdFx0ZWwgPSBldnNbaV1bMF07XG5cdFx0XHRcdGlmIChldnNbaV0ubGVuZ3RoID09PSAyKXtcblx0XHRcdFx0XHRjaCA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRldiA9IGV2c1tpXVsxXTtcblx0XHRcdFx0fSBlbHNlIGlmIChldnNbaV0ubGVuZ3RoID09PSAzKXtcblx0XHRcdFx0XHRjaCA9IGV2c1tpXVsxXTtcblx0XHRcdFx0XHRldiA9IGV2c1tpXVsyXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbC5vZmYoZXYsIGNoKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdF9idWlsZEV2ZW50czogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHZhciBldmVudHMgPSB7XG4gICAgICAgICAgICAgICAga2V5dXA6ICQucHJveHkoZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkLmluQXJyYXkoZS5rZXlDb2RlLCBbMjcsIDM3LCAzOSwgMzgsIDQwLCAzMiwgMTMsIDldKSA9PT0gLTEpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIH0sIHRoaXMpLFxuICAgICAgICAgICAgICAgIGtleWRvd246ICQucHJveHkodGhpcy5rZXlkb3duLCB0aGlzKSxcbiAgICAgICAgICAgICAgICBwYXN0ZTogJC5wcm94eSh0aGlzLnBhc3RlLCB0aGlzKVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuby5zaG93T25Gb2N1cyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGV2ZW50cy5mb2N1cyA9ICQucHJveHkodGhpcy5zaG93LCB0aGlzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuaXNJbnB1dCkgeyAvLyBzaW5nbGUgaW5wdXRcbiAgICAgICAgICAgICAgICB0aGlzLl9ldmVudHMgPSBbXG4gICAgICAgICAgICAgICAgICAgIFt0aGlzLmVsZW1lbnQsIGV2ZW50c11cbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY29tcG9uZW50OiBpbnB1dCArIGJ1dHRvblxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5jb21wb25lbnQgJiYgdGhpcy5pbnB1dEZpZWxkLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IFtcbiAgICAgICAgICAgICAgICAgICAgLy8gRm9yIGNvbXBvbmVudHMgdGhhdCBhcmUgbm90IHJlYWRvbmx5LCBhbGxvdyBrZXlib2FyZCBuYXZcbiAgICAgICAgICAgICAgICAgICAgW3RoaXMuaW5wdXRGaWVsZCwgZXZlbnRzXSxcbiAgICAgICAgICAgICAgICAgICAgW3RoaXMuY29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogJC5wcm94eSh0aGlzLnNob3csIHRoaXMpXG4gICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHR0aGlzLl9ldmVudHMgPSBbXG5cdFx0XHRcdFx0W3RoaXMuZWxlbWVudCwge1xuXHRcdFx0XHRcdFx0Y2xpY2s6ICQucHJveHkodGhpcy5zaG93LCB0aGlzKSxcblx0XHRcdFx0XHRcdGtleWRvd246ICQucHJveHkodGhpcy5rZXlkb3duLCB0aGlzKVxuXHRcdFx0XHRcdH1dXG5cdFx0XHRcdF07XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9ldmVudHMucHVzaChcblx0XHRcdFx0Ly8gQ29tcG9uZW50OiBsaXN0ZW4gZm9yIGJsdXIgb24gZWxlbWVudCBkZXNjZW5kYW50c1xuXHRcdFx0XHRbdGhpcy5lbGVtZW50LCAnKicsIHtcblx0XHRcdFx0XHRibHVyOiAkLnByb3h5KGZ1bmN0aW9uKGUpe1xuXHRcdFx0XHRcdFx0dGhpcy5fZm9jdXNlZF9mcm9tID0gZS50YXJnZXQ7XG5cdFx0XHRcdFx0fSwgdGhpcylcblx0XHRcdFx0fV0sXG5cdFx0XHRcdC8vIElucHV0OiBsaXN0ZW4gZm9yIGJsdXIgb24gZWxlbWVudFxuXHRcdFx0XHRbdGhpcy5lbGVtZW50LCB7XG5cdFx0XHRcdFx0Ymx1cjogJC5wcm94eShmdW5jdGlvbihlKXtcblx0XHRcdFx0XHRcdHRoaXMuX2ZvY3VzZWRfZnJvbSA9IGUudGFyZ2V0O1xuXHRcdFx0XHRcdH0sIHRoaXMpXG5cdFx0XHRcdH1dXG5cdFx0XHQpO1xuXG5cdFx0XHRpZiAodGhpcy5vLmltbWVkaWF0ZVVwZGF0ZXMpIHtcblx0XHRcdFx0Ly8gVHJpZ2dlciBpbnB1dCB1cGRhdGVzIGltbWVkaWF0ZWx5IG9uIGNoYW5nZWQgeWVhci9tb250aFxuXHRcdFx0XHR0aGlzLl9ldmVudHMucHVzaChbdGhpcy5lbGVtZW50LCB7XG5cdFx0XHRcdFx0J2NoYW5nZVllYXIgY2hhbmdlTW9udGgnOiAkLnByb3h5KGZ1bmN0aW9uKGUpe1xuXHRcdFx0XHRcdFx0dGhpcy51cGRhdGUoZS5kYXRlKTtcblx0XHRcdFx0XHR9LCB0aGlzKVxuXHRcdFx0XHR9XSk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX3NlY29uZGFyeUV2ZW50cyA9IFtcblx0XHRcdFx0W3RoaXMucGlja2VyLCB7XG5cdFx0XHRcdFx0Y2xpY2s6ICQucHJveHkodGhpcy5jbGljaywgdGhpcylcblx0XHRcdFx0fV0sXG5cdFx0XHRcdFt0aGlzLnBpY2tlciwgJy5wcmV2LCAubmV4dCcsIHtcblx0XHRcdFx0XHRjbGljazogJC5wcm94eSh0aGlzLm5hdkFycm93c0NsaWNrLCB0aGlzKVxuXHRcdFx0XHR9XSxcblx0XHRcdFx0W3RoaXMucGlja2VyLCAnLmRheTpub3QoLmRpc2FibGVkKScsIHtcblx0XHRcdFx0XHRjbGljazogJC5wcm94eSh0aGlzLmRheUNlbGxDbGljaywgdGhpcylcblx0XHRcdFx0fV0sXG5cdFx0XHRcdFskKHdpbmRvdyksIHtcblx0XHRcdFx0XHRyZXNpemU6ICQucHJveHkodGhpcy5wbGFjZSwgdGhpcylcblx0XHRcdFx0fV0sXG5cdFx0XHRcdFskKGRvY3VtZW50KSwge1xuXHRcdFx0XHRcdCdtb3VzZWRvd24gdG91Y2hzdGFydCc6ICQucHJveHkoZnVuY3Rpb24oZSl7XG5cdFx0XHRcdFx0XHQvLyBDbGlja2VkIG91dHNpZGUgdGhlIGRhdGVwaWNrZXIsIGhpZGUgaXRcblx0XHRcdFx0XHRcdGlmICghKFxuXHRcdFx0XHRcdFx0XHR0aGlzLmVsZW1lbnQuaXMoZS50YXJnZXQpIHx8XG5cdFx0XHRcdFx0XHRcdHRoaXMuZWxlbWVudC5maW5kKGUudGFyZ2V0KS5sZW5ndGggfHxcblx0XHRcdFx0XHRcdFx0dGhpcy5waWNrZXIuaXMoZS50YXJnZXQpIHx8XG5cdFx0XHRcdFx0XHRcdHRoaXMucGlja2VyLmZpbmQoZS50YXJnZXQpLmxlbmd0aCB8fFxuXHRcdFx0XHRcdFx0XHR0aGlzLmlzSW5saW5lXG5cdFx0XHRcdFx0XHQpKXtcblx0XHRcdFx0XHRcdFx0dGhpcy5oaWRlKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSwgdGhpcylcblx0XHRcdFx0fV1cblx0XHRcdF07XG5cdFx0fSxcblx0XHRfYXR0YWNoRXZlbnRzOiBmdW5jdGlvbigpe1xuXHRcdFx0dGhpcy5fZGV0YWNoRXZlbnRzKCk7XG5cdFx0XHR0aGlzLl9hcHBseUV2ZW50cyh0aGlzLl9ldmVudHMpO1xuXHRcdH0sXG5cdFx0X2RldGFjaEV2ZW50czogZnVuY3Rpb24oKXtcblx0XHRcdHRoaXMuX3VuYXBwbHlFdmVudHModGhpcy5fZXZlbnRzKTtcblx0XHR9LFxuXHRcdF9hdHRhY2hTZWNvbmRhcnlFdmVudHM6IGZ1bmN0aW9uKCl7XG5cdFx0XHR0aGlzLl9kZXRhY2hTZWNvbmRhcnlFdmVudHMoKTtcblx0XHRcdHRoaXMuX2FwcGx5RXZlbnRzKHRoaXMuX3NlY29uZGFyeUV2ZW50cyk7XG5cdFx0fSxcblx0XHRfZGV0YWNoU2Vjb25kYXJ5RXZlbnRzOiBmdW5jdGlvbigpe1xuXHRcdFx0dGhpcy5fdW5hcHBseUV2ZW50cyh0aGlzLl9zZWNvbmRhcnlFdmVudHMpO1xuXHRcdH0sXG5cdFx0X3RyaWdnZXI6IGZ1bmN0aW9uKGV2ZW50LCBhbHRkYXRlKXtcblx0XHRcdHZhciBkYXRlID0gYWx0ZGF0ZSB8fCB0aGlzLmRhdGVzLmdldCgtMSksXG5cdFx0XHRcdGxvY2FsX2RhdGUgPSB0aGlzLl91dGNfdG9fbG9jYWwoZGF0ZSk7XG5cblx0XHRcdHRoaXMuZWxlbWVudC50cmlnZ2VyKHtcblx0XHRcdFx0dHlwZTogZXZlbnQsXG5cdFx0XHRcdGRhdGU6IGxvY2FsX2RhdGUsXG5cdFx0XHRcdHZpZXdNb2RlOiB0aGlzLnZpZXdNb2RlLFxuXHRcdFx0XHRkYXRlczogJC5tYXAodGhpcy5kYXRlcywgdGhpcy5fdXRjX3RvX2xvY2FsKSxcblx0XHRcdFx0Zm9ybWF0OiAkLnByb3h5KGZ1bmN0aW9uKGl4LCBmb3JtYXQpe1xuXHRcdFx0XHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKXtcblx0XHRcdFx0XHRcdGl4ID0gdGhpcy5kYXRlcy5sZW5ndGggLSAxO1xuXHRcdFx0XHRcdFx0Zm9ybWF0ID0gdGhpcy5vLmZvcm1hdDtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBpeCA9PT0gJ3N0cmluZycpe1xuXHRcdFx0XHRcdFx0Zm9ybWF0ID0gaXg7XG5cdFx0XHRcdFx0XHRpeCA9IHRoaXMuZGF0ZXMubGVuZ3RoIC0gMTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Zm9ybWF0ID0gZm9ybWF0IHx8IHRoaXMuby5mb3JtYXQ7XG5cdFx0XHRcdFx0dmFyIGRhdGUgPSB0aGlzLmRhdGVzLmdldChpeCk7XG5cdFx0XHRcdFx0cmV0dXJuIERQR2xvYmFsLmZvcm1hdERhdGUoZGF0ZSwgZm9ybWF0LCB0aGlzLm8ubGFuZ3VhZ2UpO1xuXHRcdFx0XHR9LCB0aGlzKVxuXHRcdFx0fSk7XG5cdFx0fSxcblxuXHRcdHNob3c6IGZ1bmN0aW9uKCl7XG5cdFx0XHRpZiAodGhpcy5pbnB1dEZpZWxkLmlzKCc6ZGlzYWJsZWQnKSB8fCAodGhpcy5pbnB1dEZpZWxkLnByb3AoJ3JlYWRvbmx5JykgJiYgdGhpcy5vLmVuYWJsZU9uUmVhZG9ubHkgPT09IGZhbHNlKSlcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0aWYgKCF0aGlzLmlzSW5saW5lKVxuXHRcdFx0XHR0aGlzLnBpY2tlci5hcHBlbmRUbyh0aGlzLm8uY29udGFpbmVyKTtcblx0XHRcdHRoaXMucGxhY2UoKTtcblx0XHRcdHRoaXMucGlja2VyLnNob3coKTtcblx0XHRcdHRoaXMuX2F0dGFjaFNlY29uZGFyeUV2ZW50cygpO1xuXHRcdFx0dGhpcy5fdHJpZ2dlcignc2hvdycpO1xuXHRcdFx0aWYgKCh3aW5kb3cubmF2aWdhdG9yLm1zTWF4VG91Y2hQb2ludHMgfHwgJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQpICYmIHRoaXMuby5kaXNhYmxlVG91Y2hLZXlib2FyZCkge1xuXHRcdFx0XHQkKHRoaXMuZWxlbWVudCkuYmx1cigpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblxuXHRcdGhpZGU6IGZ1bmN0aW9uKCl7XG5cdFx0XHRpZiAodGhpcy5pc0lubGluZSB8fCAhdGhpcy5waWNrZXIuaXMoJzp2aXNpYmxlJykpXG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0dGhpcy5mb2N1c0RhdGUgPSBudWxsO1xuXHRcdFx0dGhpcy5waWNrZXIuaGlkZSgpLmRldGFjaCgpO1xuXHRcdFx0dGhpcy5fZGV0YWNoU2Vjb25kYXJ5RXZlbnRzKCk7XG5cdFx0XHR0aGlzLnNldFZpZXdNb2RlKHRoaXMuby5zdGFydFZpZXcpO1xuXG5cdFx0XHRpZiAodGhpcy5vLmZvcmNlUGFyc2UgJiYgdGhpcy5pbnB1dEZpZWxkLnZhbCgpKVxuXHRcdFx0XHR0aGlzLnNldFZhbHVlKCk7XG5cdFx0XHR0aGlzLl90cmlnZ2VyKCdoaWRlJyk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXG5cdFx0ZGVzdHJveTogZnVuY3Rpb24oKXtcblx0XHRcdHRoaXMuaGlkZSgpO1xuXHRcdFx0dGhpcy5fZGV0YWNoRXZlbnRzKCk7XG5cdFx0XHR0aGlzLl9kZXRhY2hTZWNvbmRhcnlFdmVudHMoKTtcblx0XHRcdHRoaXMucGlja2VyLnJlbW92ZSgpO1xuXHRcdFx0ZGVsZXRlIHRoaXMuZWxlbWVudC5kYXRhKCkuZGF0ZXBpY2tlcjtcblx0XHRcdGlmICghdGhpcy5pc0lucHV0KXtcblx0XHRcdFx0ZGVsZXRlIHRoaXMuZWxlbWVudC5kYXRhKCkuZGF0ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cblx0XHRwYXN0ZTogZnVuY3Rpb24oZSl7XG5cdFx0XHR2YXIgZGF0ZVN0cmluZztcblx0XHRcdGlmIChlLm9yaWdpbmFsRXZlbnQuY2xpcGJvYXJkRGF0YSAmJiBlLm9yaWdpbmFsRXZlbnQuY2xpcGJvYXJkRGF0YS50eXBlc1xuXHRcdFx0XHQmJiAkLmluQXJyYXkoJ3RleHQvcGxhaW4nLCBlLm9yaWdpbmFsRXZlbnQuY2xpcGJvYXJkRGF0YS50eXBlcykgIT09IC0xKSB7XG5cdFx0XHRcdGRhdGVTdHJpbmcgPSBlLm9yaWdpbmFsRXZlbnQuY2xpcGJvYXJkRGF0YS5nZXREYXRhKCd0ZXh0L3BsYWluJyk7XG5cdFx0XHR9IGVsc2UgaWYgKHdpbmRvdy5jbGlwYm9hcmREYXRhKSB7XG5cdFx0XHRcdGRhdGVTdHJpbmcgPSB3aW5kb3cuY2xpcGJvYXJkRGF0YS5nZXREYXRhKCdUZXh0Jyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnNldERhdGUoZGF0ZVN0cmluZyk7XG5cdFx0XHR0aGlzLnVwZGF0ZSgpO1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdH0sXG5cblx0XHRfdXRjX3RvX2xvY2FsOiBmdW5jdGlvbih1dGMpe1xuXHRcdFx0aWYgKCF1dGMpIHtcblx0XHRcdFx0cmV0dXJuIHV0Yztcblx0XHRcdH1cblxuXHRcdFx0dmFyIGxvY2FsID0gbmV3IERhdGUodXRjLmdldFRpbWUoKSArICh1dGMuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwMDAwKSk7XG5cblx0XHRcdGlmIChsb2NhbC5nZXRUaW1lem9uZU9mZnNldCgpICE9PSB1dGMuZ2V0VGltZXpvbmVPZmZzZXQoKSkge1xuXHRcdFx0XHRsb2NhbCA9IG5ldyBEYXRlKHV0Yy5nZXRUaW1lKCkgKyAobG9jYWwuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwMDAwKSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBsb2NhbDtcblx0XHR9LFxuXHRcdF9sb2NhbF90b191dGM6IGZ1bmN0aW9uKGxvY2FsKXtcblx0XHRcdHJldHVybiBsb2NhbCAmJiBuZXcgRGF0ZShsb2NhbC5nZXRUaW1lKCkgLSAobG9jYWwuZ2V0VGltZXpvbmVPZmZzZXQoKSo2MDAwMCkpO1xuXHRcdH0sXG5cdFx0X3plcm9fdGltZTogZnVuY3Rpb24obG9jYWwpe1xuXHRcdFx0cmV0dXJuIGxvY2FsICYmIG5ldyBEYXRlKGxvY2FsLmdldEZ1bGxZZWFyKCksIGxvY2FsLmdldE1vbnRoKCksIGxvY2FsLmdldERhdGUoKSk7XG5cdFx0fSxcblx0XHRfemVyb191dGNfdGltZTogZnVuY3Rpb24odXRjKXtcblx0XHRcdHJldHVybiB1dGMgJiYgVVRDRGF0ZSh1dGMuZ2V0VVRDRnVsbFllYXIoKSwgdXRjLmdldFVUQ01vbnRoKCksIHV0Yy5nZXRVVENEYXRlKCkpO1xuXHRcdH0sXG5cblx0XHRnZXREYXRlczogZnVuY3Rpb24oKXtcblx0XHRcdHJldHVybiAkLm1hcCh0aGlzLmRhdGVzLCB0aGlzLl91dGNfdG9fbG9jYWwpO1xuXHRcdH0sXG5cblx0XHRnZXRVVENEYXRlczogZnVuY3Rpb24oKXtcblx0XHRcdHJldHVybiAkLm1hcCh0aGlzLmRhdGVzLCBmdW5jdGlvbihkKXtcblx0XHRcdFx0cmV0dXJuIG5ldyBEYXRlKGQpO1xuXHRcdFx0fSk7XG5cdFx0fSxcblxuXHRcdGdldERhdGU6IGZ1bmN0aW9uKCl7XG5cdFx0XHRyZXR1cm4gdGhpcy5fdXRjX3RvX2xvY2FsKHRoaXMuZ2V0VVRDRGF0ZSgpKTtcblx0XHR9LFxuXG5cdFx0Z2V0VVRDRGF0ZTogZnVuY3Rpb24oKXtcblx0XHRcdHZhciBzZWxlY3RlZF9kYXRlID0gdGhpcy5kYXRlcy5nZXQoLTEpO1xuXHRcdFx0aWYgKHNlbGVjdGVkX2RhdGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRyZXR1cm4gbmV3IERhdGUoc2VsZWN0ZWRfZGF0ZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0Y2xlYXJEYXRlczogZnVuY3Rpb24oKXtcblx0XHRcdHRoaXMuaW5wdXRGaWVsZC52YWwoJycpO1xuXHRcdFx0dGhpcy51cGRhdGUoKTtcblx0XHRcdHRoaXMuX3RyaWdnZXIoJ2NoYW5nZURhdGUnKTtcblxuXHRcdFx0aWYgKHRoaXMuby5hdXRvY2xvc2UpIHtcblx0XHRcdFx0dGhpcy5oaWRlKCk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdHNldERhdGVzOiBmdW5jdGlvbigpe1xuXHRcdFx0dmFyIGFyZ3MgPSAkLmlzQXJyYXkoYXJndW1lbnRzWzBdKSA/IGFyZ3VtZW50c1swXSA6IGFyZ3VtZW50cztcblx0XHRcdHRoaXMudXBkYXRlLmFwcGx5KHRoaXMsIGFyZ3MpO1xuXHRcdFx0dGhpcy5fdHJpZ2dlcignY2hhbmdlRGF0ZScpO1xuXHRcdFx0dGhpcy5zZXRWYWx1ZSgpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblxuXHRcdHNldFVUQ0RhdGVzOiBmdW5jdGlvbigpe1xuXHRcdFx0dmFyIGFyZ3MgPSAkLmlzQXJyYXkoYXJndW1lbnRzWzBdKSA/IGFyZ3VtZW50c1swXSA6IGFyZ3VtZW50cztcblx0XHRcdHRoaXMuc2V0RGF0ZXMuYXBwbHkodGhpcywgJC5tYXAoYXJncywgdGhpcy5fdXRjX3RvX2xvY2FsKSk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXG5cdFx0c2V0RGF0ZTogYWxpYXMoJ3NldERhdGVzJyksXG5cdFx0c2V0VVRDRGF0ZTogYWxpYXMoJ3NldFVUQ0RhdGVzJyksXG5cdFx0cmVtb3ZlOiBhbGlhcygnZGVzdHJveScsICdNZXRob2QgYHJlbW92ZWAgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIHZlcnNpb24gMi4wLiBVc2UgYGRlc3Ryb3lgIGluc3RlYWQnKSxcblxuXHRcdHNldFZhbHVlOiBmdW5jdGlvbigpe1xuXHRcdFx0dmFyIGZvcm1hdHRlZCA9IHRoaXMuZ2V0Rm9ybWF0dGVkRGF0ZSgpO1xuXHRcdFx0dGhpcy5pbnB1dEZpZWxkLnZhbChmb3JtYXR0ZWQpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblxuXHRcdGdldEZvcm1hdHRlZERhdGU6IGZ1bmN0aW9uKGZvcm1hdCl7XG5cdFx0XHRpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpXG5cdFx0XHRcdGZvcm1hdCA9IHRoaXMuby5mb3JtYXQ7XG5cblx0XHRcdHZhciBsYW5nID0gdGhpcy5vLmxhbmd1YWdlO1xuXHRcdFx0cmV0dXJuICQubWFwKHRoaXMuZGF0ZXMsIGZ1bmN0aW9uKGQpe1xuXHRcdFx0XHRyZXR1cm4gRFBHbG9iYWwuZm9ybWF0RGF0ZShkLCBmb3JtYXQsIGxhbmcpO1xuXHRcdFx0fSkuam9pbih0aGlzLm8ubXVsdGlkYXRlU2VwYXJhdG9yKTtcblx0XHR9LFxuXG5cdFx0Z2V0U3RhcnREYXRlOiBmdW5jdGlvbigpe1xuXHRcdFx0cmV0dXJuIHRoaXMuby5zdGFydERhdGU7XG5cdFx0fSxcblxuXHRcdHNldFN0YXJ0RGF0ZTogZnVuY3Rpb24oc3RhcnREYXRlKXtcblx0XHRcdHRoaXMuX3Byb2Nlc3Nfb3B0aW9ucyh7c3RhcnREYXRlOiBzdGFydERhdGV9KTtcblx0XHRcdHRoaXMudXBkYXRlKCk7XG5cdFx0XHR0aGlzLnVwZGF0ZU5hdkFycm93cygpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblxuXHRcdGdldEVuZERhdGU6IGZ1bmN0aW9uKCl7XG5cdFx0XHRyZXR1cm4gdGhpcy5vLmVuZERhdGU7XG5cdFx0fSxcblxuXHRcdHNldEVuZERhdGU6IGZ1bmN0aW9uKGVuZERhdGUpe1xuXHRcdFx0dGhpcy5fcHJvY2Vzc19vcHRpb25zKHtlbmREYXRlOiBlbmREYXRlfSk7XG5cdFx0XHR0aGlzLnVwZGF0ZSgpO1xuXHRcdFx0dGhpcy51cGRhdGVOYXZBcnJvd3MoKTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cblx0XHRzZXREYXlzT2ZXZWVrRGlzYWJsZWQ6IGZ1bmN0aW9uKGRheXNPZldlZWtEaXNhYmxlZCl7XG5cdFx0XHR0aGlzLl9wcm9jZXNzX29wdGlvbnMoe2RheXNPZldlZWtEaXNhYmxlZDogZGF5c09mV2Vla0Rpc2FibGVkfSk7XG5cdFx0XHR0aGlzLnVwZGF0ZSgpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblxuXHRcdHNldERheXNPZldlZWtIaWdobGlnaHRlZDogZnVuY3Rpb24oZGF5c09mV2Vla0hpZ2hsaWdodGVkKXtcblx0XHRcdHRoaXMuX3Byb2Nlc3Nfb3B0aW9ucyh7ZGF5c09mV2Vla0hpZ2hsaWdodGVkOiBkYXlzT2ZXZWVrSGlnaGxpZ2h0ZWR9KTtcblx0XHRcdHRoaXMudXBkYXRlKCk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXG5cdFx0c2V0RGF0ZXNEaXNhYmxlZDogZnVuY3Rpb24oZGF0ZXNEaXNhYmxlZCl7XG5cdFx0XHR0aGlzLl9wcm9jZXNzX29wdGlvbnMoe2RhdGVzRGlzYWJsZWQ6IGRhdGVzRGlzYWJsZWR9KTtcblx0XHRcdHRoaXMudXBkYXRlKCk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXG5cdFx0cGxhY2U6IGZ1bmN0aW9uKCl7XG5cdFx0XHRpZiAodGhpcy5pc0lubGluZSlcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR2YXIgY2FsZW5kYXJXaWR0aCA9IHRoaXMucGlja2VyLm91dGVyV2lkdGgoKSxcblx0XHRcdFx0Y2FsZW5kYXJIZWlnaHQgPSB0aGlzLnBpY2tlci5vdXRlckhlaWdodCgpLFxuXHRcdFx0XHR2aXN1YWxQYWRkaW5nID0gMTAsXG5cdFx0XHRcdGNvbnRhaW5lciA9ICQodGhpcy5vLmNvbnRhaW5lciksXG5cdFx0XHRcdHdpbmRvd1dpZHRoID0gY29udGFpbmVyLndpZHRoKCksXG5cdFx0XHRcdHNjcm9sbFRvcCA9IHRoaXMuby5jb250YWluZXIgPT09ICdib2R5JyA/ICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpIDogY29udGFpbmVyLnNjcm9sbFRvcCgpLFxuXHRcdFx0XHRhcHBlbmRPZmZzZXQgPSBjb250YWluZXIub2Zmc2V0KCk7XG5cblx0XHRcdHZhciBwYXJlbnRzWmluZGV4ID0gWzBdO1xuXHRcdFx0dGhpcy5lbGVtZW50LnBhcmVudHMoKS5lYWNoKGZ1bmN0aW9uKCl7XG5cdFx0XHRcdHZhciBpdGVtWkluZGV4ID0gJCh0aGlzKS5jc3MoJ3otaW5kZXgnKTtcblx0XHRcdFx0aWYgKGl0ZW1aSW5kZXggIT09ICdhdXRvJyAmJiBOdW1iZXIoaXRlbVpJbmRleCkgIT09IDApIHBhcmVudHNaaW5kZXgucHVzaChOdW1iZXIoaXRlbVpJbmRleCkpO1xuXHRcdFx0fSk7XG5cdFx0XHR2YXIgekluZGV4ID0gTWF0aC5tYXguYXBwbHkoTWF0aCwgcGFyZW50c1ppbmRleCkgKyB0aGlzLm8uekluZGV4T2Zmc2V0O1xuXHRcdFx0dmFyIG9mZnNldCA9IHRoaXMuY29tcG9uZW50ID8gdGhpcy5jb21wb25lbnQucGFyZW50KCkub2Zmc2V0KCkgOiB0aGlzLmVsZW1lbnQub2Zmc2V0KCk7XG5cdFx0XHR2YXIgaGVpZ2h0ID0gdGhpcy5jb21wb25lbnQgPyB0aGlzLmNvbXBvbmVudC5vdXRlckhlaWdodCh0cnVlKSA6IHRoaXMuZWxlbWVudC5vdXRlckhlaWdodChmYWxzZSk7XG5cdFx0XHR2YXIgd2lkdGggPSB0aGlzLmNvbXBvbmVudCA/IHRoaXMuY29tcG9uZW50Lm91dGVyV2lkdGgodHJ1ZSkgOiB0aGlzLmVsZW1lbnQub3V0ZXJXaWR0aChmYWxzZSk7XG5cdFx0XHR2YXIgbGVmdCA9IG9mZnNldC5sZWZ0IC0gYXBwZW5kT2Zmc2V0LmxlZnQ7XG5cdFx0XHR2YXIgdG9wID0gb2Zmc2V0LnRvcCAtIGFwcGVuZE9mZnNldC50b3A7XG5cblx0XHRcdGlmICh0aGlzLm8uY29udGFpbmVyICE9PSAnYm9keScpIHtcblx0XHRcdFx0dG9wICs9IHNjcm9sbFRvcDtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5waWNrZXIucmVtb3ZlQ2xhc3MoXG5cdFx0XHRcdCdkYXRlcGlja2VyLW9yaWVudC10b3AgZGF0ZXBpY2tlci1vcmllbnQtYm90dG9tICcrXG5cdFx0XHRcdCdkYXRlcGlja2VyLW9yaWVudC1yaWdodCBkYXRlcGlja2VyLW9yaWVudC1sZWZ0J1xuXHRcdFx0KTtcblxuXHRcdFx0aWYgKHRoaXMuby5vcmllbnRhdGlvbi54ICE9PSAnYXV0bycpe1xuXHRcdFx0XHR0aGlzLnBpY2tlci5hZGRDbGFzcygnZGF0ZXBpY2tlci1vcmllbnQtJyArIHRoaXMuby5vcmllbnRhdGlvbi54KTtcblx0XHRcdFx0aWYgKHRoaXMuby5vcmllbnRhdGlvbi54ID09PSAncmlnaHQnKVxuXHRcdFx0XHRcdGxlZnQgLT0gY2FsZW5kYXJXaWR0aCAtIHdpZHRoO1xuXHRcdFx0fVxuXHRcdFx0Ly8gYXV0byB4IG9yaWVudGF0aW9uIGlzIGJlc3QtcGxhY2VtZW50OiBpZiBpdCBjcm9zc2VzIGEgd2luZG93XG5cdFx0XHQvLyBlZGdlLCBmdWRnZSBpdCBzaWRld2F5c1xuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGlmIChvZmZzZXQubGVmdCA8IDApIHtcblx0XHRcdFx0XHQvLyBjb21wb25lbnQgaXMgb3V0c2lkZSB0aGUgd2luZG93IG9uIHRoZSBsZWZ0IHNpZGUuIE1vdmUgaXQgaW50byB2aXNpYmxlIHJhbmdlXG5cdFx0XHRcdFx0dGhpcy5waWNrZXIuYWRkQ2xhc3MoJ2RhdGVwaWNrZXItb3JpZW50LWxlZnQnKTtcblx0XHRcdFx0XHRsZWZ0IC09IG9mZnNldC5sZWZ0IC0gdmlzdWFsUGFkZGluZztcblx0XHRcdFx0fSBlbHNlIGlmIChsZWZ0ICsgY2FsZW5kYXJXaWR0aCA+IHdpbmRvd1dpZHRoKSB7XG5cdFx0XHRcdFx0Ly8gdGhlIGNhbGVuZGFyIHBhc3NlcyB0aGUgd2lkb3cgcmlnaHQgZWRnZS4gQWxpZ24gaXQgdG8gY29tcG9uZW50IHJpZ2h0IHNpZGVcblx0XHRcdFx0XHR0aGlzLnBpY2tlci5hZGRDbGFzcygnZGF0ZXBpY2tlci1vcmllbnQtcmlnaHQnKTtcblx0XHRcdFx0XHRsZWZ0ICs9IHdpZHRoIC0gY2FsZW5kYXJXaWR0aDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpZiAodGhpcy5vLnJ0bCkge1xuXHRcdFx0XHRcdFx0Ly8gRGVmYXVsdCB0byByaWdodFxuXHRcdFx0XHRcdFx0dGhpcy5waWNrZXIuYWRkQ2xhc3MoJ2RhdGVwaWNrZXItb3JpZW50LXJpZ2h0Jyk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdC8vIERlZmF1bHQgdG8gbGVmdFxuXHRcdFx0XHRcdFx0dGhpcy5waWNrZXIuYWRkQ2xhc3MoJ2RhdGVwaWNrZXItb3JpZW50LWxlZnQnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gYXV0byB5IG9yaWVudGF0aW9uIGlzIGJlc3Qtc2l0dWF0aW9uOiB0b3Agb3IgYm90dG9tLCBubyBmdWRnaW5nLFxuXHRcdFx0Ly8gZGVjaXNpb24gYmFzZWQgb24gd2hpY2ggc2hvd3MgbW9yZSBvZiB0aGUgY2FsZW5kYXJcblx0XHRcdHZhciB5b3JpZW50ID0gdGhpcy5vLm9yaWVudGF0aW9uLnksXG5cdFx0XHRcdHRvcF9vdmVyZmxvdztcblx0XHRcdGlmICh5b3JpZW50ID09PSAnYXV0bycpe1xuXHRcdFx0XHR0b3Bfb3ZlcmZsb3cgPSAtc2Nyb2xsVG9wICsgdG9wIC0gY2FsZW5kYXJIZWlnaHQ7XG5cdFx0XHRcdHlvcmllbnQgPSB0b3Bfb3ZlcmZsb3cgPCAwID8gJ2JvdHRvbScgOiAndG9wJztcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5waWNrZXIuYWRkQ2xhc3MoJ2RhdGVwaWNrZXItb3JpZW50LScgKyB5b3JpZW50KTtcblx0XHRcdGlmICh5b3JpZW50ID09PSAndG9wJylcblx0XHRcdFx0dG9wIC09IGNhbGVuZGFySGVpZ2h0ICsgcGFyc2VJbnQodGhpcy5waWNrZXIuY3NzKCdwYWRkaW5nLXRvcCcpKTtcblx0XHRcdGVsc2Vcblx0XHRcdFx0dG9wICs9IGhlaWdodDtcblxuXHRcdFx0aWYgKHRoaXMuby5ydGwpIHtcblx0XHRcdFx0dmFyIHJpZ2h0ID0gd2luZG93V2lkdGggLSAobGVmdCArIHdpZHRoKTtcblx0XHRcdFx0dGhpcy5waWNrZXIuY3NzKHtcblx0XHRcdFx0XHR0b3A6IHRvcCxcblx0XHRcdFx0XHRyaWdodDogcmlnaHQsXG5cdFx0XHRcdFx0ekluZGV4OiB6SW5kZXhcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnBpY2tlci5jc3Moe1xuXHRcdFx0XHRcdHRvcDogdG9wLFxuXHRcdFx0XHRcdGxlZnQ6IGxlZnQsXG5cdFx0XHRcdFx0ekluZGV4OiB6SW5kZXhcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXG5cdFx0X2FsbG93X3VwZGF0ZTogdHJ1ZSxcblx0XHR1cGRhdGU6IGZ1bmN0aW9uKCl7XG5cdFx0XHRpZiAoIXRoaXMuX2FsbG93X3VwZGF0ZSlcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cblx0XHRcdHZhciBvbGREYXRlcyA9IHRoaXMuZGF0ZXMuY29weSgpLFxuXHRcdFx0XHRkYXRlcyA9IFtdLFxuXHRcdFx0XHRmcm9tQXJncyA9IGZhbHNlO1xuXHRcdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGgpe1xuXHRcdFx0XHQkLmVhY2goYXJndW1lbnRzLCAkLnByb3h5KGZ1bmN0aW9uKGksIGRhdGUpe1xuXHRcdFx0XHRcdGlmIChkYXRlIGluc3RhbmNlb2YgRGF0ZSlcblx0XHRcdFx0XHRcdGRhdGUgPSB0aGlzLl9sb2NhbF90b191dGMoZGF0ZSk7XG5cdFx0XHRcdFx0ZGF0ZXMucHVzaChkYXRlKTtcblx0XHRcdFx0fSwgdGhpcykpO1xuXHRcdFx0XHRmcm9tQXJncyA9IHRydWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkYXRlcyA9IHRoaXMuaXNJbnB1dFxuXHRcdFx0XHRcdFx0PyB0aGlzLmVsZW1lbnQudmFsKClcblx0XHRcdFx0XHRcdDogdGhpcy5lbGVtZW50LmRhdGEoJ2RhdGUnKSB8fCB0aGlzLmlucHV0RmllbGQudmFsKCk7XG5cdFx0XHRcdGlmIChkYXRlcyAmJiB0aGlzLm8ubXVsdGlkYXRlKVxuXHRcdFx0XHRcdGRhdGVzID0gZGF0ZXMuc3BsaXQodGhpcy5vLm11bHRpZGF0ZVNlcGFyYXRvcik7XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRkYXRlcyA9IFtkYXRlc107XG5cdFx0XHRcdGRlbGV0ZSB0aGlzLmVsZW1lbnQuZGF0YSgpLmRhdGU7XG5cdFx0XHR9XG5cblx0XHRcdGRhdGVzID0gJC5tYXAoZGF0ZXMsICQucHJveHkoZnVuY3Rpb24oZGF0ZSl7XG5cdFx0XHRcdHJldHVybiBEUEdsb2JhbC5wYXJzZURhdGUoZGF0ZSwgdGhpcy5vLmZvcm1hdCwgdGhpcy5vLmxhbmd1YWdlLCB0aGlzLm8uYXNzdW1lTmVhcmJ5WWVhcik7XG5cdFx0XHR9LCB0aGlzKSk7XG5cdFx0XHRkYXRlcyA9ICQuZ3JlcChkYXRlcywgJC5wcm94eShmdW5jdGlvbihkYXRlKXtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQhdGhpcy5kYXRlV2l0aGluUmFuZ2UoZGF0ZSkgfHxcblx0XHRcdFx0XHQhZGF0ZVxuXHRcdFx0XHQpO1xuXHRcdFx0fSwgdGhpcyksIHRydWUpO1xuXHRcdFx0dGhpcy5kYXRlcy5yZXBsYWNlKGRhdGVzKTtcblxuXHRcdFx0aWYgKHRoaXMuby51cGRhdGVWaWV3RGF0ZSkge1xuXHRcdFx0XHRpZiAodGhpcy5kYXRlcy5sZW5ndGgpXG5cdFx0XHRcdFx0dGhpcy52aWV3RGF0ZSA9IG5ldyBEYXRlKHRoaXMuZGF0ZXMuZ2V0KC0xKSk7XG5cdFx0XHRcdGVsc2UgaWYgKHRoaXMudmlld0RhdGUgPCB0aGlzLm8uc3RhcnREYXRlKVxuXHRcdFx0XHRcdHRoaXMudmlld0RhdGUgPSBuZXcgRGF0ZSh0aGlzLm8uc3RhcnREYXRlKTtcblx0XHRcdFx0ZWxzZSBpZiAodGhpcy52aWV3RGF0ZSA+IHRoaXMuby5lbmREYXRlKVxuXHRcdFx0XHRcdHRoaXMudmlld0RhdGUgPSBuZXcgRGF0ZSh0aGlzLm8uZW5kRGF0ZSk7XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHR0aGlzLnZpZXdEYXRlID0gdGhpcy5vLmRlZmF1bHRWaWV3RGF0ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGZyb21BcmdzKXtcblx0XHRcdFx0Ly8gc2V0dGluZyBkYXRlIGJ5IGNsaWNraW5nXG5cdFx0XHRcdHRoaXMuc2V0VmFsdWUoKTtcblx0XHRcdFx0dGhpcy5lbGVtZW50LmNoYW5nZSgpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAodGhpcy5kYXRlcy5sZW5ndGgpe1xuXHRcdFx0XHQvLyBzZXR0aW5nIGRhdGUgYnkgdHlwaW5nXG5cdFx0XHRcdGlmIChTdHJpbmcob2xkRGF0ZXMpICE9PSBTdHJpbmcodGhpcy5kYXRlcykgJiYgZnJvbUFyZ3MpIHtcblx0XHRcdFx0XHR0aGlzLl90cmlnZ2VyKCdjaGFuZ2VEYXRlJyk7XG5cdFx0XHRcdFx0dGhpcy5lbGVtZW50LmNoYW5nZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoIXRoaXMuZGF0ZXMubGVuZ3RoICYmIG9sZERhdGVzLmxlbmd0aCkge1xuXHRcdFx0XHR0aGlzLl90cmlnZ2VyKCdjbGVhckRhdGUnKTtcblx0XHRcdFx0dGhpcy5lbGVtZW50LmNoYW5nZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmZpbGwoKTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cblx0XHRmaWxsRG93OiBmdW5jdGlvbigpe1xuICAgICAgaWYgKHRoaXMuby5zaG93V2Vla0RheXMpIHtcblx0XHRcdHZhciBkb3dDbnQgPSB0aGlzLm8ud2Vla1N0YXJ0LFxuXHRcdFx0XHRodG1sID0gJzx0cj4nO1xuXHRcdFx0aWYgKHRoaXMuby5jYWxlbmRhcldlZWtzKXtcblx0XHRcdFx0aHRtbCArPSAnPHRoIGNsYXNzPVwiY3dcIj4mIzE2MDs8L3RoPic7XG5cdFx0XHR9XG5cdFx0XHR3aGlsZSAoZG93Q250IDwgdGhpcy5vLndlZWtTdGFydCArIDcpe1xuXHRcdFx0XHRodG1sICs9ICc8dGggY2xhc3M9XCJkb3cnO1xuICAgICAgICBpZiAoJC5pbkFycmF5KGRvd0NudCwgdGhpcy5vLmRheXNPZldlZWtEaXNhYmxlZCkgIT09IC0xKVxuICAgICAgICAgIGh0bWwgKz0gJyBkaXNhYmxlZCc7XG4gICAgICAgIGh0bWwgKz0gJ1wiPicrZGF0ZXNbdGhpcy5vLmxhbmd1YWdlXS5kYXlzTWluWyhkb3dDbnQrKyklN10rJzwvdGg+Jztcblx0XHRcdH1cblx0XHRcdGh0bWwgKz0gJzwvdHI+Jztcblx0XHRcdHRoaXMucGlja2VyLmZpbmQoJy5kYXRlcGlja2VyLWRheXMgdGhlYWQnKS5hcHBlbmQoaHRtbCk7XG4gICAgICB9XG5cdFx0fSxcblxuXHRcdGZpbGxNb250aHM6IGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgbG9jYWxEYXRlID0gdGhpcy5fdXRjX3RvX2xvY2FsKHRoaXMudmlld0RhdGUpO1xuXHRcdFx0dmFyIGh0bWwgPSAnJztcblx0XHRcdHZhciBmb2N1c2VkO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMjsgaSsrKXtcblx0XHRcdFx0Zm9jdXNlZCA9IGxvY2FsRGF0ZSAmJiBsb2NhbERhdGUuZ2V0TW9udGgoKSA9PT0gaSA/ICcgZm9jdXNlZCcgOiAnJztcblx0XHRcdFx0aHRtbCArPSAnPHNwYW4gY2xhc3M9XCJtb250aCcgKyBmb2N1c2VkICsgJ1wiPicgKyBkYXRlc1t0aGlzLm8ubGFuZ3VhZ2VdLm1vbnRoc1Nob3J0W2ldICsgJzwvc3Bhbj4nO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5waWNrZXIuZmluZCgnLmRhdGVwaWNrZXItbW9udGhzIHRkJykuaHRtbChodG1sKTtcblx0XHR9LFxuXG5cdFx0c2V0UmFuZ2U6IGZ1bmN0aW9uKHJhbmdlKXtcblx0XHRcdGlmICghcmFuZ2UgfHwgIXJhbmdlLmxlbmd0aClcblx0XHRcdFx0ZGVsZXRlIHRoaXMucmFuZ2U7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdHRoaXMucmFuZ2UgPSAkLm1hcChyYW5nZSwgZnVuY3Rpb24oZCl7XG5cdFx0XHRcdFx0cmV0dXJuIGQudmFsdWVPZigpO1xuXHRcdFx0XHR9KTtcblx0XHRcdHRoaXMuZmlsbCgpO1xuXHRcdH0sXG5cblx0XHRnZXRDbGFzc05hbWVzOiBmdW5jdGlvbihkYXRlKXtcblx0XHRcdHZhciBjbHMgPSBbXSxcblx0XHRcdFx0eWVhciA9IHRoaXMudmlld0RhdGUuZ2V0VVRDRnVsbFllYXIoKSxcblx0XHRcdFx0bW9udGggPSB0aGlzLnZpZXdEYXRlLmdldFVUQ01vbnRoKCksXG5cdFx0XHRcdHRvZGF5ID0gVVRDVG9kYXkoKTtcblx0XHRcdGlmIChkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgPCB5ZWFyIHx8IChkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgPT09IHllYXIgJiYgZGF0ZS5nZXRVVENNb250aCgpIDwgbW9udGgpKXtcblx0XHRcdFx0Y2xzLnB1c2goJ29sZCcpO1xuXHRcdFx0fSBlbHNlIGlmIChkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgPiB5ZWFyIHx8IChkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgPT09IHllYXIgJiYgZGF0ZS5nZXRVVENNb250aCgpID4gbW9udGgpKXtcblx0XHRcdFx0Y2xzLnB1c2goJ25ldycpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuZm9jdXNEYXRlICYmIGRhdGUudmFsdWVPZigpID09PSB0aGlzLmZvY3VzRGF0ZS52YWx1ZU9mKCkpXG5cdFx0XHRcdGNscy5wdXNoKCdmb2N1c2VkJyk7XG5cdFx0XHQvLyBDb21wYXJlIGludGVybmFsIFVUQyBkYXRlIHdpdGggVVRDIHRvZGF5LCBub3QgbG9jYWwgdG9kYXlcblx0XHRcdGlmICh0aGlzLm8udG9kYXlIaWdobGlnaHQgJiYgaXNVVENFcXVhbHMoZGF0ZSwgdG9kYXkpKSB7XG5cdFx0XHRcdGNscy5wdXNoKCd0b2RheScpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuZGF0ZXMuY29udGFpbnMoZGF0ZSkgIT09IC0xKVxuXHRcdFx0XHRjbHMucHVzaCgnYWN0aXZlJyk7XG5cdFx0XHRpZiAoIXRoaXMuZGF0ZVdpdGhpblJhbmdlKGRhdGUpKXtcblx0XHRcdFx0Y2xzLnB1c2goJ2Rpc2FibGVkJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5kYXRlSXNEaXNhYmxlZChkYXRlKSl7XG5cdFx0XHRcdGNscy5wdXNoKCdkaXNhYmxlZCcsICdkaXNhYmxlZC1kYXRlJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoJC5pbkFycmF5KGRhdGUuZ2V0VVRDRGF5KCksIHRoaXMuby5kYXlzT2ZXZWVrSGlnaGxpZ2h0ZWQpICE9PSAtMSl7XG5cdFx0XHRcdGNscy5wdXNoKCdoaWdobGlnaHRlZCcpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5yYW5nZSl7XG5cdFx0XHRcdGlmIChkYXRlID4gdGhpcy5yYW5nZVswXSAmJiBkYXRlIDwgdGhpcy5yYW5nZVt0aGlzLnJhbmdlLmxlbmd0aC0xXSl7XG5cdFx0XHRcdFx0Y2xzLnB1c2goJ3JhbmdlJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCQuaW5BcnJheShkYXRlLnZhbHVlT2YoKSwgdGhpcy5yYW5nZSkgIT09IC0xKXtcblx0XHRcdFx0XHRjbHMucHVzaCgnc2VsZWN0ZWQnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0ZS52YWx1ZU9mKCkgPT09IHRoaXMucmFuZ2VbMF0pe1xuICAgICAgICAgIGNscy5wdXNoKCdyYW5nZS1zdGFydCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRlLnZhbHVlT2YoKSA9PT0gdGhpcy5yYW5nZVt0aGlzLnJhbmdlLmxlbmd0aC0xXSl7XG4gICAgICAgICAgY2xzLnB1c2goJ3JhbmdlLWVuZCcpO1xuICAgICAgICB9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gY2xzO1xuXHRcdH0sXG5cblx0XHRfZmlsbF95ZWFyc1ZpZXc6IGZ1bmN0aW9uKHNlbGVjdG9yLCBjc3NDbGFzcywgZmFjdG9yLCB5ZWFyLCBzdGFydFllYXIsIGVuZFllYXIsIGJlZm9yZUZuKXtcblx0XHRcdHZhciBodG1sID0gJyc7XG5cdFx0XHR2YXIgc3RlcCA9IGZhY3RvciAvIDEwO1xuXHRcdFx0dmFyIHZpZXcgPSB0aGlzLnBpY2tlci5maW5kKHNlbGVjdG9yKTtcblx0XHRcdHZhciBzdGFydFZhbCA9IE1hdGguZmxvb3IoeWVhciAvIGZhY3RvcikgKiBmYWN0b3I7XG5cdFx0XHR2YXIgZW5kVmFsID0gc3RhcnRWYWwgKyBzdGVwICogOTtcblx0XHRcdHZhciBmb2N1c2VkVmFsID0gTWF0aC5mbG9vcih0aGlzLnZpZXdEYXRlLmdldEZ1bGxZZWFyKCkgLyBzdGVwKSAqIHN0ZXA7XG5cdFx0XHR2YXIgc2VsZWN0ZWQgPSAkLm1hcCh0aGlzLmRhdGVzLCBmdW5jdGlvbihkKXtcblx0XHRcdFx0cmV0dXJuIE1hdGguZmxvb3IoZC5nZXRVVENGdWxsWWVhcigpIC8gc3RlcCkgKiBzdGVwO1xuXHRcdFx0fSk7XG5cblx0XHRcdHZhciBjbGFzc2VzLCB0b29sdGlwLCBiZWZvcmU7XG5cdFx0XHRmb3IgKHZhciBjdXJyVmFsID0gc3RhcnRWYWwgLSBzdGVwOyBjdXJyVmFsIDw9IGVuZFZhbCArIHN0ZXA7IGN1cnJWYWwgKz0gc3RlcCkge1xuXHRcdFx0XHRjbGFzc2VzID0gW2Nzc0NsYXNzXTtcblx0XHRcdFx0dG9vbHRpcCA9IG51bGw7XG5cblx0XHRcdFx0aWYgKGN1cnJWYWwgPT09IHN0YXJ0VmFsIC0gc3RlcCkge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaCgnb2xkJyk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoY3VyclZhbCA9PT0gZW5kVmFsICsgc3RlcCkge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaCgnbmV3Jyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCQuaW5BcnJheShjdXJyVmFsLCBzZWxlY3RlZCkgIT09IC0xKSB7XG5cdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKCdhY3RpdmUnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoY3VyclZhbCA8IHN0YXJ0WWVhciB8fCBjdXJyVmFsID4gZW5kWWVhcikge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaCgnZGlzYWJsZWQnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoY3VyclZhbCA9PT0gZm9jdXNlZFZhbCkge1xuXHRcdFx0XHQgIGNsYXNzZXMucHVzaCgnZm9jdXNlZCcpO1xuICAgICAgICB9XG5cblx0XHRcdFx0aWYgKGJlZm9yZUZuICE9PSAkLm5vb3ApIHtcblx0XHRcdFx0XHRiZWZvcmUgPSBiZWZvcmVGbihuZXcgRGF0ZShjdXJyVmFsLCAwLCAxKSk7XG5cdFx0XHRcdFx0aWYgKGJlZm9yZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHRiZWZvcmUgPSB7fTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBiZWZvcmUgPT09ICdib29sZWFuJykge1xuXHRcdFx0XHRcdFx0YmVmb3JlID0ge2VuYWJsZWQ6IGJlZm9yZX07XG5cdFx0XHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgYmVmb3JlID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdFx0YmVmb3JlID0ge2NsYXNzZXM6IGJlZm9yZX07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChiZWZvcmUuZW5hYmxlZCA9PT0gZmFsc2UpIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaCgnZGlzYWJsZWQnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGJlZm9yZS5jbGFzc2VzKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzID0gY2xhc3Nlcy5jb25jYXQoYmVmb3JlLmNsYXNzZXMuc3BsaXQoL1xccysvKSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChiZWZvcmUudG9vbHRpcCkge1xuXHRcdFx0XHRcdFx0dG9vbHRpcCA9IGJlZm9yZS50b29sdGlwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGh0bWwgKz0gJzxzcGFuIGNsYXNzPVwiJyArIGNsYXNzZXMuam9pbignICcpICsgJ1wiJyArICh0b29sdGlwID8gJyB0aXRsZT1cIicgKyB0b29sdGlwICsgJ1wiJyA6ICcnKSArICc+JyArIGN1cnJWYWwgKyAnPC9zcGFuPic7XG5cdFx0XHR9XG5cblx0XHRcdHZpZXcuZmluZCgnLmRhdGVwaWNrZXItc3dpdGNoJykudGV4dChzdGFydFZhbCArICctJyArIGVuZFZhbCk7XG5cdFx0XHR2aWV3LmZpbmQoJ3RkJykuaHRtbChodG1sKTtcblx0XHR9LFxuXG5cdFx0ZmlsbDogZnVuY3Rpb24oKXtcblx0XHRcdHZhciBkID0gbmV3IERhdGUodGhpcy52aWV3RGF0ZSksXG5cdFx0XHRcdHllYXIgPSBkLmdldFVUQ0Z1bGxZZWFyKCksXG5cdFx0XHRcdG1vbnRoID0gZC5nZXRVVENNb250aCgpLFxuXHRcdFx0XHRzdGFydFllYXIgPSB0aGlzLm8uc3RhcnREYXRlICE9PSAtSW5maW5pdHkgPyB0aGlzLm8uc3RhcnREYXRlLmdldFVUQ0Z1bGxZZWFyKCkgOiAtSW5maW5pdHksXG5cdFx0XHRcdHN0YXJ0TW9udGggPSB0aGlzLm8uc3RhcnREYXRlICE9PSAtSW5maW5pdHkgPyB0aGlzLm8uc3RhcnREYXRlLmdldFVUQ01vbnRoKCkgOiAtSW5maW5pdHksXG5cdFx0XHRcdGVuZFllYXIgPSB0aGlzLm8uZW5kRGF0ZSAhPT0gSW5maW5pdHkgPyB0aGlzLm8uZW5kRGF0ZS5nZXRVVENGdWxsWWVhcigpIDogSW5maW5pdHksXG5cdFx0XHRcdGVuZE1vbnRoID0gdGhpcy5vLmVuZERhdGUgIT09IEluZmluaXR5ID8gdGhpcy5vLmVuZERhdGUuZ2V0VVRDTW9udGgoKSA6IEluZmluaXR5LFxuXHRcdFx0XHR0b2RheXR4dCA9IGRhdGVzW3RoaXMuby5sYW5ndWFnZV0udG9kYXkgfHwgZGF0ZXNbJ2VuJ10udG9kYXkgfHwgJycsXG5cdFx0XHRcdGNsZWFydHh0ID0gZGF0ZXNbdGhpcy5vLmxhbmd1YWdlXS5jbGVhciB8fCBkYXRlc1snZW4nXS5jbGVhciB8fCAnJyxcbiAgICAgICAgdGl0bGVGb3JtYXQgPSBkYXRlc1t0aGlzLm8ubGFuZ3VhZ2VdLnRpdGxlRm9ybWF0IHx8IGRhdGVzWydlbiddLnRpdGxlRm9ybWF0LFxuICAgICAgICB0b2RheURhdGUgPSBVVENUb2RheSgpLFxuICAgICAgICB0aXRsZUJ0blZpc2libGUgPSAodGhpcy5vLnRvZGF5QnRuID09PSB0cnVlIHx8IHRoaXMuby50b2RheUJ0biA9PT0gJ2xpbmtlZCcpICYmIHRvZGF5RGF0ZSA+PSB0aGlzLm8uc3RhcnREYXRlICYmIHRvZGF5RGF0ZSA8PSB0aGlzLm8uZW5kRGF0ZSAmJiAhdGhpcy53ZWVrT2ZEYXRlSXNEaXNhYmxlZCh0b2RheURhdGUpLFxuXHRcdFx0XHR0b29sdGlwLFxuXHRcdFx0XHRiZWZvcmU7XG5cdFx0XHRpZiAoaXNOYU4oeWVhcikgfHwgaXNOYU4obW9udGgpKVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR0aGlzLnBpY2tlci5maW5kKCcuZGF0ZXBpY2tlci1kYXlzIC5kYXRlcGlja2VyLXN3aXRjaCcpXG5cdFx0XHRcdFx0XHQudGV4dChEUEdsb2JhbC5mb3JtYXREYXRlKGQsIHRpdGxlRm9ybWF0LCB0aGlzLm8ubGFuZ3VhZ2UpKTtcblx0XHRcdHRoaXMucGlja2VyLmZpbmQoJ3Rmb290IC50b2RheScpXG5cdFx0XHRcdFx0XHQudGV4dCh0b2RheXR4dClcbiAgICAgICAgICAgIC5jc3MoJ2Rpc3BsYXknLCB0aXRsZUJ0blZpc2libGUgPyAndGFibGUtY2VsbCcgOiAnbm9uZScpO1xuXHRcdFx0dGhpcy5waWNrZXIuZmluZCgndGZvb3QgLmNsZWFyJylcblx0XHRcdFx0XHRcdC50ZXh0KGNsZWFydHh0KVxuXHRcdFx0XHRcdFx0LmNzcygnZGlzcGxheScsIHRoaXMuby5jbGVhckJ0biA9PT0gdHJ1ZSA/ICd0YWJsZS1jZWxsJyA6ICdub25lJyk7XG5cdFx0XHR0aGlzLnBpY2tlci5maW5kKCd0aGVhZCAuZGF0ZXBpY2tlci10aXRsZScpXG5cdFx0XHRcdFx0XHQudGV4dCh0aGlzLm8udGl0bGUpXG5cdFx0XHRcdFx0XHQuY3NzKCdkaXNwbGF5JywgdHlwZW9mIHRoaXMuby50aXRsZSA9PT0gJ3N0cmluZycgJiYgdGhpcy5vLnRpdGxlICE9PSAnJyA/ICd0YWJsZS1jZWxsJyA6ICdub25lJyk7XG5cdFx0XHR0aGlzLnVwZGF0ZU5hdkFycm93cygpO1xuXHRcdFx0dGhpcy5maWxsTW9udGhzKCk7XG5cdFx0XHR2YXIgcHJldk1vbnRoID0gVVRDRGF0ZSh5ZWFyLCBtb250aCwgMCksXG5cdFx0XHRcdGRheSA9IHByZXZNb250aC5nZXRVVENEYXRlKCk7XG5cdFx0XHRwcmV2TW9udGguc2V0VVRDRGF0ZShkYXkgLSAocHJldk1vbnRoLmdldFVUQ0RheSgpIC0gdGhpcy5vLndlZWtTdGFydCArIDcpJTcpO1xuXHRcdFx0dmFyIG5leHRNb250aCA9IG5ldyBEYXRlKHByZXZNb250aCk7XG5cdFx0XHRpZiAocHJldk1vbnRoLmdldFVUQ0Z1bGxZZWFyKCkgPCAxMDApe1xuICAgICAgICBuZXh0TW9udGguc2V0VVRDRnVsbFllYXIocHJldk1vbnRoLmdldFVUQ0Z1bGxZZWFyKCkpO1xuICAgICAgfVxuXHRcdFx0bmV4dE1vbnRoLnNldFVUQ0RhdGUobmV4dE1vbnRoLmdldFVUQ0RhdGUoKSArIDQyKTtcblx0XHRcdG5leHRNb250aCA9IG5leHRNb250aC52YWx1ZU9mKCk7XG5cdFx0XHR2YXIgaHRtbCA9IFtdO1xuXHRcdFx0dmFyIHdlZWtEYXksIGNsc05hbWU7XG5cdFx0XHR3aGlsZSAocHJldk1vbnRoLnZhbHVlT2YoKSA8IG5leHRNb250aCl7XG5cdFx0XHRcdHdlZWtEYXkgPSBwcmV2TW9udGguZ2V0VVRDRGF5KCk7XG5cdFx0XHRcdGlmICh3ZWVrRGF5ID09PSB0aGlzLm8ud2Vla1N0YXJ0KXtcblx0XHRcdFx0XHRodG1sLnB1c2goJzx0cj4nKTtcblx0XHRcdFx0XHRpZiAodGhpcy5vLmNhbGVuZGFyV2Vla3Mpe1xuXHRcdFx0XHRcdFx0Ly8gSVNPIDg2MDE6IEZpcnN0IHdlZWsgY29udGFpbnMgZmlyc3QgdGh1cnNkYXkuXG5cdFx0XHRcdFx0XHQvLyBJU08gYWxzbyBzdGF0ZXMgd2VlayBzdGFydHMgb24gTW9uZGF5LCBidXQgd2UgY2FuIGJlIG1vcmUgYWJzdHJhY3QgaGVyZS5cblx0XHRcdFx0XHRcdHZhclxuXHRcdFx0XHRcdFx0XHQvLyBTdGFydCBvZiBjdXJyZW50IHdlZWs6IGJhc2VkIG9uIHdlZWtzdGFydC9jdXJyZW50IGRhdGVcblx0XHRcdFx0XHRcdFx0d3MgPSBuZXcgRGF0ZSgrcHJldk1vbnRoICsgKHRoaXMuby53ZWVrU3RhcnQgLSB3ZWVrRGF5IC0gNykgJSA3ICogODY0ZTUpLFxuXHRcdFx0XHRcdFx0XHQvLyBUaHVyc2RheSBvZiB0aGlzIHdlZWtcblx0XHRcdFx0XHRcdFx0dGggPSBuZXcgRGF0ZShOdW1iZXIod3MpICsgKDcgKyA0IC0gd3MuZ2V0VVRDRGF5KCkpICUgNyAqIDg2NGU1KSxcblx0XHRcdFx0XHRcdFx0Ly8gRmlyc3QgVGh1cnNkYXkgb2YgeWVhciwgeWVhciBmcm9tIHRodXJzZGF5XG5cdFx0XHRcdFx0XHRcdHl0aCA9IG5ldyBEYXRlKE51bWJlcih5dGggPSBVVENEYXRlKHRoLmdldFVUQ0Z1bGxZZWFyKCksIDAsIDEpKSArICg3ICsgNCAtIHl0aC5nZXRVVENEYXkoKSkgJSA3ICogODY0ZTUpLFxuXHRcdFx0XHRcdFx0XHQvLyBDYWxlbmRhciB3ZWVrOiBtcyBiZXR3ZWVuIHRodXJzZGF5cywgZGl2IG1zIHBlciBkYXksIGRpdiA3IGRheXNcblx0XHRcdFx0XHRcdFx0Y2FsV2VlayA9ICh0aCAtIHl0aCkgLyA4NjRlNSAvIDcgKyAxO1xuXHRcdFx0XHRcdFx0aHRtbC5wdXNoKCc8dGQgY2xhc3M9XCJjd1wiPicrIGNhbFdlZWsgKyc8L3RkPicpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRjbHNOYW1lID0gdGhpcy5nZXRDbGFzc05hbWVzKHByZXZNb250aCk7XG5cdFx0XHRcdGNsc05hbWUucHVzaCgnZGF5Jyk7XG5cblx0XHRcdFx0dmFyIGNvbnRlbnQgPSBwcmV2TW9udGguZ2V0VVRDRGF0ZSgpO1xuXG5cdFx0XHRcdGlmICh0aGlzLm8uYmVmb3JlU2hvd0RheSAhPT0gJC5ub29wKXtcblx0XHRcdFx0XHRiZWZvcmUgPSB0aGlzLm8uYmVmb3JlU2hvd0RheSh0aGlzLl91dGNfdG9fbG9jYWwocHJldk1vbnRoKSk7XG5cdFx0XHRcdFx0aWYgKGJlZm9yZSA9PT0gdW5kZWZpbmVkKVxuXHRcdFx0XHRcdFx0YmVmb3JlID0ge307XG5cdFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGJlZm9yZSA9PT0gJ2Jvb2xlYW4nKVxuXHRcdFx0XHRcdFx0YmVmb3JlID0ge2VuYWJsZWQ6IGJlZm9yZX07XG5cdFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGJlZm9yZSA9PT0gJ3N0cmluZycpXG5cdFx0XHRcdFx0XHRiZWZvcmUgPSB7Y2xhc3NlczogYmVmb3JlfTtcblx0XHRcdFx0XHRpZiAoYmVmb3JlLmVuYWJsZWQgPT09IGZhbHNlKVxuXHRcdFx0XHRcdFx0Y2xzTmFtZS5wdXNoKCdkaXNhYmxlZCcpO1xuXHRcdFx0XHRcdGlmIChiZWZvcmUuY2xhc3Nlcylcblx0XHRcdFx0XHRcdGNsc05hbWUgPSBjbHNOYW1lLmNvbmNhdChiZWZvcmUuY2xhc3Nlcy5zcGxpdCgvXFxzKy8pKTtcblx0XHRcdFx0XHRpZiAoYmVmb3JlLnRvb2x0aXApXG5cdFx0XHRcdFx0XHR0b29sdGlwID0gYmVmb3JlLnRvb2x0aXA7XG5cdFx0XHRcdFx0aWYgKGJlZm9yZS5jb250ZW50KVxuXHRcdFx0XHRcdFx0Y29udGVudCA9IGJlZm9yZS5jb250ZW50O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly9DaGVjayBpZiB1bmlxdWVTb3J0IGV4aXN0cyAoc3VwcG9ydGVkIGJ5IGpxdWVyeSA+PTEuMTIgYW5kID49Mi4yKVxuXHRcdFx0XHQvL0ZhbGxiYWNrIHRvIHVuaXF1ZSBmdW5jdGlvbiBmb3Igb2xkZXIganF1ZXJ5IHZlcnNpb25zXG5cdFx0XHRcdGlmICgkLmlzRnVuY3Rpb24oJC51bmlxdWVTb3J0KSkge1xuXHRcdFx0XHRcdGNsc05hbWUgPSAkLnVuaXF1ZVNvcnQoY2xzTmFtZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y2xzTmFtZSA9ICQudW5pcXVlKGNsc05hbWUpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aHRtbC5wdXNoKCc8dGQgY2xhc3M9XCInK2Nsc05hbWUuam9pbignICcpKydcIicgKyAodG9vbHRpcCA/ICcgdGl0bGU9XCInK3Rvb2x0aXArJ1wiJyA6ICcnKSArICcgZGF0YS1kYXRlPVwiJyArIHByZXZNb250aC5nZXRUaW1lKCkudG9TdHJpbmcoKSArICdcIj4nICsgY29udGVudCArICc8L3RkPicpO1xuXHRcdFx0XHR0b29sdGlwID0gbnVsbDtcblx0XHRcdFx0aWYgKHdlZWtEYXkgPT09IHRoaXMuby53ZWVrRW5kKXtcblx0XHRcdFx0XHRodG1sLnB1c2goJzwvdHI+Jyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cHJldk1vbnRoLnNldFVUQ0RhdGUocHJldk1vbnRoLmdldFVUQ0RhdGUoKSArIDEpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5waWNrZXIuZmluZCgnLmRhdGVwaWNrZXItZGF5cyB0Ym9keScpLmh0bWwoaHRtbC5qb2luKCcnKSk7XG5cblx0XHRcdHZhciBtb250aHNUaXRsZSA9IGRhdGVzW3RoaXMuby5sYW5ndWFnZV0ubW9udGhzVGl0bGUgfHwgZGF0ZXNbJ2VuJ10ubW9udGhzVGl0bGUgfHwgJ01vbnRocyc7XG5cdFx0XHR2YXIgbW9udGhzID0gdGhpcy5waWNrZXIuZmluZCgnLmRhdGVwaWNrZXItbW9udGhzJylcblx0XHRcdFx0XHRcdC5maW5kKCcuZGF0ZXBpY2tlci1zd2l0Y2gnKVxuXHRcdFx0XHRcdFx0XHQudGV4dCh0aGlzLm8ubWF4Vmlld01vZGUgPCAyID8gbW9udGhzVGl0bGUgOiB5ZWFyKVxuXHRcdFx0XHRcdFx0XHQuZW5kKClcblx0XHRcdFx0XHRcdC5maW5kKCd0Ym9keSBzcGFuJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXG5cdFx0XHQkLmVhY2godGhpcy5kYXRlcywgZnVuY3Rpb24oaSwgZCl7XG5cdFx0XHRcdGlmIChkLmdldFVUQ0Z1bGxZZWFyKCkgPT09IHllYXIpXG5cdFx0XHRcdFx0bW9udGhzLmVxKGQuZ2V0VVRDTW9udGgoKSkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0fSk7XG5cblx0XHRcdGlmICh5ZWFyIDwgc3RhcnRZZWFyIHx8IHllYXIgPiBlbmRZZWFyKXtcblx0XHRcdFx0bW9udGhzLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHllYXIgPT09IHN0YXJ0WWVhcil7XG5cdFx0XHRcdG1vbnRocy5zbGljZSgwLCBzdGFydE1vbnRoKS5hZGRDbGFzcygnZGlzYWJsZWQnKTtcblx0XHRcdH1cblx0XHRcdGlmICh5ZWFyID09PSBlbmRZZWFyKXtcblx0XHRcdFx0bW9udGhzLnNsaWNlKGVuZE1vbnRoKzEpLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5vLmJlZm9yZVNob3dNb250aCAhPT0gJC5ub29wKXtcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xuXHRcdFx0XHQkLmVhY2gobW9udGhzLCBmdW5jdGlvbihpLCBtb250aCl7XG4gICAgICAgICAgdmFyIG1vRGF0ZSA9IG5ldyBEYXRlKHllYXIsIGksIDEpO1xuICAgICAgICAgIHZhciBiZWZvcmUgPSB0aGF0Lm8uYmVmb3JlU2hvd01vbnRoKG1vRGF0ZSk7XG5cdFx0XHRcdFx0aWYgKGJlZm9yZSA9PT0gdW5kZWZpbmVkKVxuXHRcdFx0XHRcdFx0YmVmb3JlID0ge307XG5cdFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGJlZm9yZSA9PT0gJ2Jvb2xlYW4nKVxuXHRcdFx0XHRcdFx0YmVmb3JlID0ge2VuYWJsZWQ6IGJlZm9yZX07XG5cdFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGJlZm9yZSA9PT0gJ3N0cmluZycpXG5cdFx0XHRcdFx0XHRiZWZvcmUgPSB7Y2xhc3NlczogYmVmb3JlfTtcblx0XHRcdFx0XHRpZiAoYmVmb3JlLmVuYWJsZWQgPT09IGZhbHNlICYmICEkKG1vbnRoKS5oYXNDbGFzcygnZGlzYWJsZWQnKSlcblx0XHRcdFx0XHQgICAgJChtb250aCkuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG5cdFx0XHRcdFx0aWYgKGJlZm9yZS5jbGFzc2VzKVxuXHRcdFx0XHRcdCAgICAkKG1vbnRoKS5hZGRDbGFzcyhiZWZvcmUuY2xhc3Nlcyk7XG5cdFx0XHRcdFx0aWYgKGJlZm9yZS50b29sdGlwKVxuXHRcdFx0XHRcdCAgICAkKG1vbnRoKS5wcm9wKCd0aXRsZScsIGJlZm9yZS50b29sdGlwKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEdlbmVyYXRpbmcgZGVjYWRlL3llYXJzIHBpY2tlclxuXHRcdFx0dGhpcy5fZmlsbF95ZWFyc1ZpZXcoXG5cdFx0XHRcdCcuZGF0ZXBpY2tlci15ZWFycycsXG5cdFx0XHRcdCd5ZWFyJyxcblx0XHRcdFx0MTAsXG5cdFx0XHRcdHllYXIsXG5cdFx0XHRcdHN0YXJ0WWVhcixcblx0XHRcdFx0ZW5kWWVhcixcblx0XHRcdFx0dGhpcy5vLmJlZm9yZVNob3dZZWFyXG5cdFx0XHQpO1xuXG5cdFx0XHQvLyBHZW5lcmF0aW5nIGNlbnR1cnkvZGVjYWRlcyBwaWNrZXJcblx0XHRcdHRoaXMuX2ZpbGxfeWVhcnNWaWV3KFxuXHRcdFx0XHQnLmRhdGVwaWNrZXItZGVjYWRlcycsXG5cdFx0XHRcdCdkZWNhZGUnLFxuXHRcdFx0XHQxMDAsXG5cdFx0XHRcdHllYXIsXG5cdFx0XHRcdHN0YXJ0WWVhcixcblx0XHRcdFx0ZW5kWWVhcixcblx0XHRcdFx0dGhpcy5vLmJlZm9yZVNob3dEZWNhZGVcblx0XHRcdCk7XG5cblx0XHRcdC8vIEdlbmVyYXRpbmcgbWlsbGVubml1bS9jZW50dXJpZXMgcGlja2VyXG5cdFx0XHR0aGlzLl9maWxsX3llYXJzVmlldyhcblx0XHRcdFx0Jy5kYXRlcGlja2VyLWNlbnR1cmllcycsXG5cdFx0XHRcdCdjZW50dXJ5Jyxcblx0XHRcdFx0MTAwMCxcblx0XHRcdFx0eWVhcixcblx0XHRcdFx0c3RhcnRZZWFyLFxuXHRcdFx0XHRlbmRZZWFyLFxuXHRcdFx0XHR0aGlzLm8uYmVmb3JlU2hvd0NlbnR1cnlcblx0XHRcdCk7XG5cdFx0fSxcblxuXHRcdHVwZGF0ZU5hdkFycm93czogZnVuY3Rpb24oKXtcblx0XHRcdGlmICghdGhpcy5fYWxsb3dfdXBkYXRlKVxuXHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdHZhciBkID0gbmV3IERhdGUodGhpcy52aWV3RGF0ZSksXG5cdFx0XHRcdHllYXIgPSBkLmdldFVUQ0Z1bGxZZWFyKCksXG5cdFx0XHRcdG1vbnRoID0gZC5nZXRVVENNb250aCgpLFxuXHRcdFx0XHRzdGFydFllYXIgPSB0aGlzLm8uc3RhcnREYXRlICE9PSAtSW5maW5pdHkgPyB0aGlzLm8uc3RhcnREYXRlLmdldFVUQ0Z1bGxZZWFyKCkgOiAtSW5maW5pdHksXG5cdFx0XHRcdHN0YXJ0TW9udGggPSB0aGlzLm8uc3RhcnREYXRlICE9PSAtSW5maW5pdHkgPyB0aGlzLm8uc3RhcnREYXRlLmdldFVUQ01vbnRoKCkgOiAtSW5maW5pdHksXG5cdFx0XHRcdGVuZFllYXIgPSB0aGlzLm8uZW5kRGF0ZSAhPT0gSW5maW5pdHkgPyB0aGlzLm8uZW5kRGF0ZS5nZXRVVENGdWxsWWVhcigpIDogSW5maW5pdHksXG5cdFx0XHRcdGVuZE1vbnRoID0gdGhpcy5vLmVuZERhdGUgIT09IEluZmluaXR5ID8gdGhpcy5vLmVuZERhdGUuZ2V0VVRDTW9udGgoKSA6IEluZmluaXR5LFxuXHRcdFx0XHRwcmV2SXNEaXNhYmxlZCxcblx0XHRcdFx0bmV4dElzRGlzYWJsZWQsXG5cdFx0XHRcdGZhY3RvciA9IDE7XG5cdFx0XHRzd2l0Y2ggKHRoaXMudmlld01vZGUpe1xuXHRcdFx0XHRjYXNlIDQ6XG5cdFx0XHRcdFx0ZmFjdG9yICo9IDEwO1xuXHRcdFx0XHRcdC8qIGZhbGxzIHRocm91Z2ggKi9cblx0XHRcdFx0Y2FzZSAzOlxuXHRcdFx0XHRcdGZhY3RvciAqPSAxMDtcblx0XHRcdFx0XHQvKiBmYWxscyB0aHJvdWdoICovXG5cdFx0XHRcdGNhc2UgMjpcblx0XHRcdFx0XHRmYWN0b3IgKj0gMTA7XG5cdFx0XHRcdFx0LyogZmFsbHMgdGhyb3VnaCAqL1xuXHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0cHJldklzRGlzYWJsZWQgPSBNYXRoLmZsb29yKHllYXIgLyBmYWN0b3IpICogZmFjdG9yIDw9IHN0YXJ0WWVhcjtcblx0XHRcdFx0XHRuZXh0SXNEaXNhYmxlZCA9IE1hdGguZmxvb3IoeWVhciAvIGZhY3RvcikgKiBmYWN0b3IgKyBmYWN0b3IgPiBlbmRZZWFyO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDA6XG5cdFx0XHRcdFx0cHJldklzRGlzYWJsZWQgPSB5ZWFyIDw9IHN0YXJ0WWVhciAmJiBtb250aCA8PSBzdGFydE1vbnRoO1xuXHRcdFx0XHRcdG5leHRJc0Rpc2FibGVkID0geWVhciA+PSBlbmRZZWFyICYmIG1vbnRoID49IGVuZE1vbnRoO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnBpY2tlci5maW5kKCcucHJldicpLnRvZ2dsZUNsYXNzKCdkaXNhYmxlZCcsIHByZXZJc0Rpc2FibGVkKTtcblx0XHRcdHRoaXMucGlja2VyLmZpbmQoJy5uZXh0JykudG9nZ2xlQ2xhc3MoJ2Rpc2FibGVkJywgbmV4dElzRGlzYWJsZWQpO1xuXHRcdH0sXG5cblx0XHRjbGljazogZnVuY3Rpb24oZSl7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0XHR2YXIgdGFyZ2V0LCBkaXIsIGRheSwgeWVhciwgbW9udGg7XG5cdFx0XHR0YXJnZXQgPSAkKGUudGFyZ2V0KTtcblxuXHRcdFx0Ly8gQ2xpY2tlZCBvbiB0aGUgc3dpdGNoXG5cdFx0XHRpZiAodGFyZ2V0Lmhhc0NsYXNzKCdkYXRlcGlja2VyLXN3aXRjaCcpICYmIHRoaXMudmlld01vZGUgIT09IHRoaXMuby5tYXhWaWV3TW9kZSl7XG5cdFx0XHRcdHRoaXMuc2V0Vmlld01vZGUodGhpcy52aWV3TW9kZSArIDEpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBDbGlja2VkIG9uIHRvZGF5IGJ1dHRvblxuXHRcdFx0aWYgKHRhcmdldC5oYXNDbGFzcygndG9kYXknKSAmJiAhdGFyZ2V0Lmhhc0NsYXNzKCdkYXknKSl7XG5cdFx0XHRcdHRoaXMuc2V0Vmlld01vZGUoMCk7XG5cdFx0XHRcdHRoaXMuX3NldERhdGUoVVRDVG9kYXkoKSwgdGhpcy5vLnRvZGF5QnRuID09PSAnbGlua2VkJyA/IG51bGwgOiAndmlldycpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBDbGlja2VkIG9uIGNsZWFyIGJ1dHRvblxuXHRcdFx0aWYgKHRhcmdldC5oYXNDbGFzcygnY2xlYXInKSl7XG5cdFx0XHRcdHRoaXMuY2xlYXJEYXRlcygpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIXRhcmdldC5oYXNDbGFzcygnZGlzYWJsZWQnKSl7XG5cdFx0XHRcdC8vIENsaWNrZWQgb24gYSBtb250aCwgeWVhciwgZGVjYWRlLCBjZW50dXJ5XG5cdFx0XHRcdGlmICh0YXJnZXQuaGFzQ2xhc3MoJ21vbnRoJylcblx0XHRcdFx0XHRcdHx8IHRhcmdldC5oYXNDbGFzcygneWVhcicpXG5cdFx0XHRcdFx0XHR8fCB0YXJnZXQuaGFzQ2xhc3MoJ2RlY2FkZScpXG5cdFx0XHRcdFx0XHR8fCB0YXJnZXQuaGFzQ2xhc3MoJ2NlbnR1cnknKSkge1xuXHRcdFx0XHRcdHRoaXMudmlld0RhdGUuc2V0VVRDRGF0ZSgxKTtcblxuXHRcdFx0XHRcdGRheSA9IDE7XG5cdFx0XHRcdFx0aWYgKHRoaXMudmlld01vZGUgPT09IDEpe1xuXHRcdFx0XHRcdFx0bW9udGggPSB0YXJnZXQucGFyZW50KCkuZmluZCgnc3BhbicpLmluZGV4KHRhcmdldCk7XG5cdFx0XHRcdFx0XHR5ZWFyID0gdGhpcy52aWV3RGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuXHRcdFx0XHRcdFx0dGhpcy52aWV3RGF0ZS5zZXRVVENNb250aChtb250aCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdG1vbnRoID0gMDtcblx0XHRcdFx0XHRcdHllYXIgPSBOdW1iZXIodGFyZ2V0LnRleHQoKSk7XG5cdFx0XHRcdFx0XHR0aGlzLnZpZXdEYXRlLnNldFVUQ0Z1bGxZZWFyKHllYXIpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRoaXMuX3RyaWdnZXIoRFBHbG9iYWwudmlld01vZGVzW3RoaXMudmlld01vZGUgLSAxXS5lLCB0aGlzLnZpZXdEYXRlKTtcblxuXHRcdFx0XHRcdGlmICh0aGlzLnZpZXdNb2RlID09PSB0aGlzLm8ubWluVmlld01vZGUpe1xuXHRcdFx0XHRcdFx0dGhpcy5fc2V0RGF0ZShVVENEYXRlKHllYXIsIG1vbnRoLCBkYXkpKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy5zZXRWaWV3TW9kZSh0aGlzLnZpZXdNb2RlIC0gMSk7XG5cdFx0XHRcdFx0XHR0aGlzLmZpbGwoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMucGlja2VyLmlzKCc6dmlzaWJsZScpICYmIHRoaXMuX2ZvY3VzZWRfZnJvbSl7XG5cdFx0XHRcdHRoaXMuX2ZvY3VzZWRfZnJvbS5mb2N1cygpO1xuXHRcdFx0fVxuXHRcdFx0ZGVsZXRlIHRoaXMuX2ZvY3VzZWRfZnJvbTtcblx0XHR9LFxuXG5cdFx0ZGF5Q2VsbENsaWNrOiBmdW5jdGlvbihlKXtcblx0XHRcdHZhciAkdGFyZ2V0ID0gJChlLmN1cnJlbnRUYXJnZXQpO1xuXHRcdFx0dmFyIHRpbWVzdGFtcCA9ICR0YXJnZXQuZGF0YSgnZGF0ZScpO1xuXHRcdFx0dmFyIGRhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXApO1xuXG5cdFx0XHRpZiAodGhpcy5vLnVwZGF0ZVZpZXdEYXRlKSB7XG5cdFx0XHRcdGlmIChkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgIT09IHRoaXMudmlld0RhdGUuZ2V0VVRDRnVsbFllYXIoKSkge1xuXHRcdFx0XHRcdHRoaXMuX3RyaWdnZXIoJ2NoYW5nZVllYXInLCB0aGlzLnZpZXdEYXRlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChkYXRlLmdldFVUQ01vbnRoKCkgIT09IHRoaXMudmlld0RhdGUuZ2V0VVRDTW9udGgoKSkge1xuXHRcdFx0XHRcdHRoaXMuX3RyaWdnZXIoJ2NoYW5nZU1vbnRoJywgdGhpcy52aWV3RGF0ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMuX3NldERhdGUoZGF0ZSk7XG5cdFx0fSxcblxuXHRcdC8vIENsaWNrZWQgb24gcHJldiBvciBuZXh0XG5cdFx0bmF2QXJyb3dzQ2xpY2s6IGZ1bmN0aW9uKGUpe1xuXHRcdFx0dmFyICR0YXJnZXQgPSAkKGUuY3VycmVudFRhcmdldCk7XG5cdFx0XHR2YXIgZGlyID0gJHRhcmdldC5oYXNDbGFzcygncHJldicpID8gLTEgOiAxO1xuXHRcdFx0aWYgKHRoaXMudmlld01vZGUgIT09IDApe1xuXHRcdFx0XHRkaXIgKj0gRFBHbG9iYWwudmlld01vZGVzW3RoaXMudmlld01vZGVdLm5hdlN0ZXAgKiAxMjtcblx0XHRcdH1cblx0XHRcdHRoaXMudmlld0RhdGUgPSB0aGlzLm1vdmVNb250aCh0aGlzLnZpZXdEYXRlLCBkaXIpO1xuXHRcdFx0dGhpcy5fdHJpZ2dlcihEUEdsb2JhbC52aWV3TW9kZXNbdGhpcy52aWV3TW9kZV0uZSwgdGhpcy52aWV3RGF0ZSk7XG5cdFx0XHR0aGlzLmZpbGwoKTtcblx0XHR9LFxuXG5cdFx0X3RvZ2dsZV9tdWx0aWRhdGU6IGZ1bmN0aW9uKGRhdGUpe1xuXHRcdFx0dmFyIGl4ID0gdGhpcy5kYXRlcy5jb250YWlucyhkYXRlKTtcblx0XHRcdGlmICghZGF0ZSl7XG5cdFx0XHRcdHRoaXMuZGF0ZXMuY2xlYXIoKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGl4ICE9PSAtMSl7XG5cdFx0XHRcdGlmICh0aGlzLm8ubXVsdGlkYXRlID09PSB0cnVlIHx8IHRoaXMuby5tdWx0aWRhdGUgPiAxIHx8IHRoaXMuby50b2dnbGVBY3RpdmUpe1xuXHRcdFx0XHRcdHRoaXMuZGF0ZXMucmVtb3ZlKGl4KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICh0aGlzLm8ubXVsdGlkYXRlID09PSBmYWxzZSkge1xuXHRcdFx0XHR0aGlzLmRhdGVzLmNsZWFyKCk7XG5cdFx0XHRcdHRoaXMuZGF0ZXMucHVzaChkYXRlKTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHR0aGlzLmRhdGVzLnB1c2goZGF0ZSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0eXBlb2YgdGhpcy5vLm11bHRpZGF0ZSA9PT0gJ251bWJlcicpXG5cdFx0XHRcdHdoaWxlICh0aGlzLmRhdGVzLmxlbmd0aCA+IHRoaXMuby5tdWx0aWRhdGUpXG5cdFx0XHRcdFx0dGhpcy5kYXRlcy5yZW1vdmUoMCk7XG5cdFx0fSxcblxuXHRcdF9zZXREYXRlOiBmdW5jdGlvbihkYXRlLCB3aGljaCl7XG5cdFx0XHRpZiAoIXdoaWNoIHx8IHdoaWNoID09PSAnZGF0ZScpXG5cdFx0XHRcdHRoaXMuX3RvZ2dsZV9tdWx0aWRhdGUoZGF0ZSAmJiBuZXcgRGF0ZShkYXRlKSk7XG5cdFx0XHRpZiAoKCF3aGljaCAmJiB0aGlzLm8udXBkYXRlVmlld0RhdGUpIHx8IHdoaWNoID09PSAndmlldycpXG5cdFx0XHRcdHRoaXMudmlld0RhdGUgPSBkYXRlICYmIG5ldyBEYXRlKGRhdGUpO1xuXG5cdFx0XHR0aGlzLmZpbGwoKTtcblx0XHRcdHRoaXMuc2V0VmFsdWUoKTtcblx0XHRcdGlmICghd2hpY2ggfHwgd2hpY2ggIT09ICd2aWV3Jykge1xuXHRcdFx0XHR0aGlzLl90cmlnZ2VyKCdjaGFuZ2VEYXRlJyk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmlucHV0RmllbGQudHJpZ2dlcignY2hhbmdlJyk7XG5cdFx0XHRpZiAodGhpcy5vLmF1dG9jbG9zZSAmJiAoIXdoaWNoIHx8IHdoaWNoID09PSAnZGF0ZScpKXtcblx0XHRcdFx0dGhpcy5oaWRlKCk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdG1vdmVEYXk6IGZ1bmN0aW9uKGRhdGUsIGRpcil7XG5cdFx0XHR2YXIgbmV3RGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuXHRcdFx0bmV3RGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpICsgZGlyKTtcblxuXHRcdFx0cmV0dXJuIG5ld0RhdGU7XG5cdFx0fSxcblxuXHRcdG1vdmVXZWVrOiBmdW5jdGlvbihkYXRlLCBkaXIpe1xuXHRcdFx0cmV0dXJuIHRoaXMubW92ZURheShkYXRlLCBkaXIgKiA3KTtcblx0XHR9LFxuXG5cdFx0bW92ZU1vbnRoOiBmdW5jdGlvbihkYXRlLCBkaXIpe1xuXHRcdFx0aWYgKCFpc1ZhbGlkRGF0ZShkYXRlKSlcblx0XHRcdFx0cmV0dXJuIHRoaXMuby5kZWZhdWx0Vmlld0RhdGU7XG5cdFx0XHRpZiAoIWRpcilcblx0XHRcdFx0cmV0dXJuIGRhdGU7XG5cdFx0XHR2YXIgbmV3X2RhdGUgPSBuZXcgRGF0ZShkYXRlLnZhbHVlT2YoKSksXG5cdFx0XHRcdGRheSA9IG5ld19kYXRlLmdldFVUQ0RhdGUoKSxcblx0XHRcdFx0bW9udGggPSBuZXdfZGF0ZS5nZXRVVENNb250aCgpLFxuXHRcdFx0XHRtYWcgPSBNYXRoLmFicyhkaXIpLFxuXHRcdFx0XHRuZXdfbW9udGgsIHRlc3Q7XG5cdFx0XHRkaXIgPSBkaXIgPiAwID8gMSA6IC0xO1xuXHRcdFx0aWYgKG1hZyA9PT0gMSl7XG5cdFx0XHRcdHRlc3QgPSBkaXIgPT09IC0xXG5cdFx0XHRcdFx0Ly8gSWYgZ29pbmcgYmFjayBvbmUgbW9udGgsIG1ha2Ugc3VyZSBtb250aCBpcyBub3QgY3VycmVudCBtb250aFxuXHRcdFx0XHRcdC8vIChlZywgTWFyIDMxIC0+IEZlYiAzMSA9PSBGZWIgMjgsIG5vdCBNYXIgMDIpXG5cdFx0XHRcdFx0PyBmdW5jdGlvbigpe1xuXHRcdFx0XHRcdFx0cmV0dXJuIG5ld19kYXRlLmdldFVUQ01vbnRoKCkgPT09IG1vbnRoO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBJZiBnb2luZyBmb3J3YXJkIG9uZSBtb250aCwgbWFrZSBzdXJlIG1vbnRoIGlzIGFzIGV4cGVjdGVkXG5cdFx0XHRcdFx0Ly8gKGVnLCBKYW4gMzEgLT4gRmViIDMxID09IEZlYiAyOCwgbm90IE1hciAwMilcblx0XHRcdFx0XHQ6IGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gbmV3X2RhdGUuZ2V0VVRDTW9udGgoKSAhPT0gbmV3X21vbnRoO1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdG5ld19tb250aCA9IG1vbnRoICsgZGlyO1xuXHRcdFx0XHRuZXdfZGF0ZS5zZXRVVENNb250aChuZXdfbW9udGgpO1xuXHRcdFx0XHQvLyBEZWMgLT4gSmFuICgxMikgb3IgSmFuIC0+IERlYyAoLTEpIC0tIGxpbWl0IGV4cGVjdGVkIGRhdGUgdG8gMC0xMVxuXHRcdFx0XHRuZXdfbW9udGggPSAobmV3X21vbnRoICsgMTIpICUgMTI7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0Ly8gRm9yIG1hZ25pdHVkZXMgPjEsIG1vdmUgb25lIG1vbnRoIGF0IGEgdGltZS4uLlxuXHRcdFx0XHRmb3IgKHZhciBpPTA7IGkgPCBtYWc7IGkrKylcblx0XHRcdFx0XHQvLyAuLi53aGljaCBtaWdodCBkZWNyZWFzZSB0aGUgZGF5IChlZywgSmFuIDMxIHRvIEZlYiAyOCwgZXRjKS4uLlxuXHRcdFx0XHRcdG5ld19kYXRlID0gdGhpcy5tb3ZlTW9udGgobmV3X2RhdGUsIGRpcik7XG5cdFx0XHRcdC8vIC4uLnRoZW4gcmVzZXQgdGhlIGRheSwga2VlcGluZyBpdCBpbiB0aGUgbmV3IG1vbnRoXG5cdFx0XHRcdG5ld19tb250aCA9IG5ld19kYXRlLmdldFVUQ01vbnRoKCk7XG5cdFx0XHRcdG5ld19kYXRlLnNldFVUQ0RhdGUoZGF5KTtcblx0XHRcdFx0dGVzdCA9IGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0cmV0dXJuIG5ld19tb250aCAhPT0gbmV3X2RhdGUuZ2V0VVRDTW9udGgoKTtcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdC8vIENvbW1vbiBkYXRlLXJlc2V0dGluZyBsb29wIC0tIGlmIGRhdGUgaXMgYmV5b25kIGVuZCBvZiBtb250aCwgbWFrZSBpdFxuXHRcdFx0Ly8gZW5kIG9mIG1vbnRoXG5cdFx0XHR3aGlsZSAodGVzdCgpKXtcblx0XHRcdFx0bmV3X2RhdGUuc2V0VVRDRGF0ZSgtLWRheSk7XG5cdFx0XHRcdG5ld19kYXRlLnNldFVUQ01vbnRoKG5ld19tb250aCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbmV3X2RhdGU7XG5cdFx0fSxcblxuXHRcdG1vdmVZZWFyOiBmdW5jdGlvbihkYXRlLCBkaXIpe1xuXHRcdFx0cmV0dXJuIHRoaXMubW92ZU1vbnRoKGRhdGUsIGRpcioxMik7XG5cdFx0fSxcblxuXHRcdG1vdmVBdmFpbGFibGVEYXRlOiBmdW5jdGlvbihkYXRlLCBkaXIsIGZuKXtcblx0XHRcdGRvIHtcblx0XHRcdFx0ZGF0ZSA9IHRoaXNbZm5dKGRhdGUsIGRpcik7XG5cblx0XHRcdFx0aWYgKCF0aGlzLmRhdGVXaXRoaW5SYW5nZShkYXRlKSlcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cblx0XHRcdFx0Zm4gPSAnbW92ZURheSc7XG5cdFx0XHR9XG5cdFx0XHR3aGlsZSAodGhpcy5kYXRlSXNEaXNhYmxlZChkYXRlKSk7XG5cblx0XHRcdHJldHVybiBkYXRlO1xuXHRcdH0sXG5cblx0XHR3ZWVrT2ZEYXRlSXNEaXNhYmxlZDogZnVuY3Rpb24oZGF0ZSl7XG5cdFx0XHRyZXR1cm4gJC5pbkFycmF5KGRhdGUuZ2V0VVRDRGF5KCksIHRoaXMuby5kYXlzT2ZXZWVrRGlzYWJsZWQpICE9PSAtMTtcblx0XHR9LFxuXG5cdFx0ZGF0ZUlzRGlzYWJsZWQ6IGZ1bmN0aW9uKGRhdGUpe1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0dGhpcy53ZWVrT2ZEYXRlSXNEaXNhYmxlZChkYXRlKSB8fFxuXHRcdFx0XHQkLmdyZXAodGhpcy5vLmRhdGVzRGlzYWJsZWQsIGZ1bmN0aW9uKGQpe1xuXHRcdFx0XHRcdHJldHVybiBpc1VUQ0VxdWFscyhkYXRlLCBkKTtcblx0XHRcdFx0fSkubGVuZ3RoID4gMFxuXHRcdFx0KTtcblx0XHR9LFxuXG5cdFx0ZGF0ZVdpdGhpblJhbmdlOiBmdW5jdGlvbihkYXRlKXtcblx0XHRcdHJldHVybiBkYXRlID49IHRoaXMuby5zdGFydERhdGUgJiYgZGF0ZSA8PSB0aGlzLm8uZW5kRGF0ZTtcblx0XHR9LFxuXG5cdFx0a2V5ZG93bjogZnVuY3Rpb24oZSl7XG5cdFx0XHRpZiAoIXRoaXMucGlja2VyLmlzKCc6dmlzaWJsZScpKXtcblx0XHRcdFx0aWYgKGUua2V5Q29kZSA9PT0gNDAgfHwgZS5rZXlDb2RlID09PSAyNykgeyAvLyBhbGxvdyBkb3duIHRvIHJlLXNob3cgcGlja2VyXG5cdFx0XHRcdFx0dGhpcy5zaG93KCk7XG5cdFx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR2YXIgZGF0ZUNoYW5nZWQgPSBmYWxzZSxcblx0XHRcdFx0ZGlyLCBuZXdWaWV3RGF0ZSxcblx0XHRcdFx0Zm9jdXNEYXRlID0gdGhpcy5mb2N1c0RhdGUgfHwgdGhpcy52aWV3RGF0ZTtcblx0XHRcdHN3aXRjaCAoZS5rZXlDb2RlKXtcblx0XHRcdFx0Y2FzZSAyNzogLy8gZXNjYXBlXG5cdFx0XHRcdFx0aWYgKHRoaXMuZm9jdXNEYXRlKXtcblx0XHRcdFx0XHRcdHRoaXMuZm9jdXNEYXRlID0gbnVsbDtcblx0XHRcdFx0XHRcdHRoaXMudmlld0RhdGUgPSB0aGlzLmRhdGVzLmdldCgtMSkgfHwgdGhpcy52aWV3RGF0ZTtcblx0XHRcdFx0XHRcdHRoaXMuZmlsbCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHR0aGlzLmhpZGUoKTtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAzNzogLy8gbGVmdFxuXHRcdFx0XHRjYXNlIDM4OiAvLyB1cFxuXHRcdFx0XHRjYXNlIDM5OiAvLyByaWdodFxuXHRcdFx0XHRjYXNlIDQwOiAvLyBkb3duXG5cdFx0XHRcdFx0aWYgKCF0aGlzLm8ua2V5Ym9hcmROYXZpZ2F0aW9uIHx8IHRoaXMuby5kYXlzT2ZXZWVrRGlzYWJsZWQubGVuZ3RoID09PSA3KVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0ZGlyID0gZS5rZXlDb2RlID09PSAzNyB8fCBlLmtleUNvZGUgPT09IDM4ID8gLTEgOiAxO1xuICAgICAgICAgIGlmICh0aGlzLnZpZXdNb2RlID09PSAwKSB7XG4gIFx0XHRcdFx0XHRpZiAoZS5jdHJsS2V5KXtcbiAgXHRcdFx0XHRcdFx0bmV3Vmlld0RhdGUgPSB0aGlzLm1vdmVBdmFpbGFibGVEYXRlKGZvY3VzRGF0ZSwgZGlyLCAnbW92ZVllYXInKTtcblxuICBcdFx0XHRcdFx0XHRpZiAobmV3Vmlld0RhdGUpXG4gIFx0XHRcdFx0XHRcdFx0dGhpcy5fdHJpZ2dlcignY2hhbmdlWWVhcicsIHRoaXMudmlld0RhdGUpO1xuICBcdFx0XHRcdFx0fSBlbHNlIGlmIChlLnNoaWZ0S2V5KXtcbiAgXHRcdFx0XHRcdFx0bmV3Vmlld0RhdGUgPSB0aGlzLm1vdmVBdmFpbGFibGVEYXRlKGZvY3VzRGF0ZSwgZGlyLCAnbW92ZU1vbnRoJyk7XG5cbiAgXHRcdFx0XHRcdFx0aWYgKG5ld1ZpZXdEYXRlKVxuICBcdFx0XHRcdFx0XHRcdHRoaXMuX3RyaWdnZXIoJ2NoYW5nZU1vbnRoJywgdGhpcy52aWV3RGF0ZSk7XG4gIFx0XHRcdFx0XHR9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMzcgfHwgZS5rZXlDb2RlID09PSAzOSl7XG4gIFx0XHRcdFx0XHRcdG5ld1ZpZXdEYXRlID0gdGhpcy5tb3ZlQXZhaWxhYmxlRGF0ZShmb2N1c0RhdGUsIGRpciwgJ21vdmVEYXknKTtcbiAgXHRcdFx0XHRcdH0gZWxzZSBpZiAoIXRoaXMud2Vla09mRGF0ZUlzRGlzYWJsZWQoZm9jdXNEYXRlKSl7XG4gIFx0XHRcdFx0XHRcdG5ld1ZpZXdEYXRlID0gdGhpcy5tb3ZlQXZhaWxhYmxlRGF0ZShmb2N1c0RhdGUsIGRpciwgJ21vdmVXZWVrJyk7XG4gIFx0XHRcdFx0XHR9XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnZpZXdNb2RlID09PSAxKSB7XG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAzOCB8fCBlLmtleUNvZGUgPT09IDQwKSB7XG4gICAgICAgICAgICAgIGRpciA9IGRpciAqIDQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdWaWV3RGF0ZSA9IHRoaXMubW92ZUF2YWlsYWJsZURhdGUoZm9jdXNEYXRlLCBkaXIsICdtb3ZlTW9udGgnKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMudmlld01vZGUgPT09IDIpIHtcbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDM4IHx8IGUua2V5Q29kZSA9PT0gNDApIHtcbiAgICAgICAgICAgICAgZGlyID0gZGlyICogNDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld1ZpZXdEYXRlID0gdGhpcy5tb3ZlQXZhaWxhYmxlRGF0ZShmb2N1c0RhdGUsIGRpciwgJ21vdmVZZWFyJyk7XG4gICAgICAgICAgfVxuXHRcdFx0XHRcdGlmIChuZXdWaWV3RGF0ZSl7XG5cdFx0XHRcdFx0XHR0aGlzLmZvY3VzRGF0ZSA9IHRoaXMudmlld0RhdGUgPSBuZXdWaWV3RGF0ZTtcblx0XHRcdFx0XHRcdHRoaXMuc2V0VmFsdWUoKTtcblx0XHRcdFx0XHRcdHRoaXMuZmlsbCgpO1xuXHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAxMzogLy8gZW50ZXJcblx0XHRcdFx0XHRpZiAoIXRoaXMuby5mb3JjZVBhcnNlKVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Zm9jdXNEYXRlID0gdGhpcy5mb2N1c0RhdGUgfHwgdGhpcy5kYXRlcy5nZXQoLTEpIHx8IHRoaXMudmlld0RhdGU7XG5cdFx0XHRcdFx0aWYgKHRoaXMuby5rZXlib2FyZE5hdmlnYXRpb24pIHtcblx0XHRcdFx0XHRcdHRoaXMuX3RvZ2dsZV9tdWx0aWRhdGUoZm9jdXNEYXRlKTtcblx0XHRcdFx0XHRcdGRhdGVDaGFuZ2VkID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5mb2N1c0RhdGUgPSBudWxsO1xuXHRcdFx0XHRcdHRoaXMudmlld0RhdGUgPSB0aGlzLmRhdGVzLmdldCgtMSkgfHwgdGhpcy52aWV3RGF0ZTtcblx0XHRcdFx0XHR0aGlzLnNldFZhbHVlKCk7XG5cdFx0XHRcdFx0dGhpcy5maWxsKCk7XG5cdFx0XHRcdFx0aWYgKHRoaXMucGlja2VyLmlzKCc6dmlzaWJsZScpKXtcblx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0XHRpZiAodGhpcy5vLmF1dG9jbG9zZSlcblx0XHRcdFx0XHRcdFx0dGhpcy5oaWRlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDk6IC8vIHRhYlxuXHRcdFx0XHRcdHRoaXMuZm9jdXNEYXRlID0gbnVsbDtcblx0XHRcdFx0XHR0aGlzLnZpZXdEYXRlID0gdGhpcy5kYXRlcy5nZXQoLTEpIHx8IHRoaXMudmlld0RhdGU7XG5cdFx0XHRcdFx0dGhpcy5maWxsKCk7XG5cdFx0XHRcdFx0dGhpcy5oaWRlKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZGF0ZUNoYW5nZWQpe1xuXHRcdFx0XHRpZiAodGhpcy5kYXRlcy5sZW5ndGgpXG5cdFx0XHRcdFx0dGhpcy5fdHJpZ2dlcignY2hhbmdlRGF0ZScpO1xuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0dGhpcy5fdHJpZ2dlcignY2xlYXJEYXRlJyk7XG5cdFx0XHRcdHRoaXMuaW5wdXRGaWVsZC50cmlnZ2VyKCdjaGFuZ2UnKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0c2V0Vmlld01vZGU6IGZ1bmN0aW9uKHZpZXdNb2RlKXtcblx0XHRcdHRoaXMudmlld01vZGUgPSB2aWV3TW9kZTtcblx0XHRcdHRoaXMucGlja2VyXG5cdFx0XHRcdC5jaGlsZHJlbignZGl2Jylcblx0XHRcdFx0LmhpZGUoKVxuXHRcdFx0XHQuZmlsdGVyKCcuZGF0ZXBpY2tlci0nICsgRFBHbG9iYWwudmlld01vZGVzW3RoaXMudmlld01vZGVdLmNsc05hbWUpXG5cdFx0XHRcdFx0LnNob3coKTtcblx0XHRcdHRoaXMudXBkYXRlTmF2QXJyb3dzKCk7XG4gICAgICB0aGlzLl90cmlnZ2VyKCdjaGFuZ2VWaWV3TW9kZScsIG5ldyBEYXRlKHRoaXMudmlld0RhdGUpKTtcblx0XHR9XG5cdH07XG5cblx0dmFyIERhdGVSYW5nZVBpY2tlciA9IGZ1bmN0aW9uKGVsZW1lbnQsIG9wdGlvbnMpe1xuXHRcdCQuZGF0YShlbGVtZW50LCAnZGF0ZXBpY2tlcicsIHRoaXMpO1xuXHRcdHRoaXMuZWxlbWVudCA9ICQoZWxlbWVudCk7XG5cdFx0dGhpcy5pbnB1dHMgPSAkLm1hcChvcHRpb25zLmlucHV0cywgZnVuY3Rpb24oaSl7XG5cdFx0XHRyZXR1cm4gaS5qcXVlcnkgPyBpWzBdIDogaTtcblx0XHR9KTtcblx0XHRkZWxldGUgb3B0aW9ucy5pbnB1dHM7XG5cblx0XHR0aGlzLmtlZXBFbXB0eVZhbHVlcyA9IG9wdGlvbnMua2VlcEVtcHR5VmFsdWVzO1xuXHRcdGRlbGV0ZSBvcHRpb25zLmtlZXBFbXB0eVZhbHVlcztcblxuXHRcdGRhdGVwaWNrZXJQbHVnaW4uY2FsbCgkKHRoaXMuaW5wdXRzKSwgb3B0aW9ucylcblx0XHRcdC5vbignY2hhbmdlRGF0ZScsICQucHJveHkodGhpcy5kYXRlVXBkYXRlZCwgdGhpcykpO1xuXG5cdFx0dGhpcy5waWNrZXJzID0gJC5tYXAodGhpcy5pbnB1dHMsIGZ1bmN0aW9uKGkpe1xuXHRcdFx0cmV0dXJuICQuZGF0YShpLCAnZGF0ZXBpY2tlcicpO1xuXHRcdH0pO1xuXHRcdHRoaXMudXBkYXRlRGF0ZXMoKTtcblx0fTtcblx0RGF0ZVJhbmdlUGlja2VyLnByb3RvdHlwZSA9IHtcblx0XHR1cGRhdGVEYXRlczogZnVuY3Rpb24oKXtcblx0XHRcdHRoaXMuZGF0ZXMgPSAkLm1hcCh0aGlzLnBpY2tlcnMsIGZ1bmN0aW9uKGkpe1xuXHRcdFx0XHRyZXR1cm4gaS5nZXRVVENEYXRlKCk7XG5cdFx0XHR9KTtcblx0XHRcdHRoaXMudXBkYXRlUmFuZ2VzKCk7XG5cdFx0fSxcblx0XHR1cGRhdGVSYW5nZXM6IGZ1bmN0aW9uKCl7XG5cdFx0XHR2YXIgcmFuZ2UgPSAkLm1hcCh0aGlzLmRhdGVzLCBmdW5jdGlvbihkKXtcblx0XHRcdFx0cmV0dXJuIGQudmFsdWVPZigpO1xuXHRcdFx0fSk7XG5cdFx0XHQkLmVhY2godGhpcy5waWNrZXJzLCBmdW5jdGlvbihpLCBwKXtcblx0XHRcdFx0cC5zZXRSYW5nZShyYW5nZSk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdGNsZWFyRGF0ZXM6IGZ1bmN0aW9uKCl7XG5cdFx0XHQkLmVhY2godGhpcy5waWNrZXJzLCBmdW5jdGlvbihpLCBwKXtcblx0XHRcdFx0cC5jbGVhckRhdGVzKCk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdGRhdGVVcGRhdGVkOiBmdW5jdGlvbihlKXtcblx0XHRcdC8vIGB0aGlzLnVwZGF0aW5nYCBpcyBhIHdvcmthcm91bmQgZm9yIHByZXZlbnRpbmcgaW5maW5pdGUgcmVjdXJzaW9uXG5cdFx0XHQvLyBiZXR3ZWVuIGBjaGFuZ2VEYXRlYCB0cmlnZ2VyaW5nIGFuZCBgc2V0VVRDRGF0ZWAgY2FsbGluZy4gIFVudGlsXG5cdFx0XHQvLyB0aGVyZSBpcyBhIGJldHRlciBtZWNoYW5pc20uXG5cdFx0XHRpZiAodGhpcy51cGRhdGluZylcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0dGhpcy51cGRhdGluZyA9IHRydWU7XG5cblx0XHRcdHZhciBkcCA9ICQuZGF0YShlLnRhcmdldCwgJ2RhdGVwaWNrZXInKTtcblxuXHRcdFx0aWYgKGRwID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgbmV3X2RhdGUgPSBkcC5nZXRVVENEYXRlKCksXG5cdFx0XHRcdGtlZXBfZW1wdHlfdmFsdWVzID0gdGhpcy5rZWVwRW1wdHlWYWx1ZXMsXG5cdFx0XHRcdGkgPSAkLmluQXJyYXkoZS50YXJnZXQsIHRoaXMuaW5wdXRzKSxcblx0XHRcdFx0aiA9IGkgLSAxLFxuXHRcdFx0XHRrID0gaSArIDEsXG5cdFx0XHRcdGwgPSB0aGlzLmlucHV0cy5sZW5ndGg7XG5cdFx0XHRpZiAoaSA9PT0gLTEpXG5cdFx0XHRcdHJldHVybjtcblxuXHRcdFx0JC5lYWNoKHRoaXMucGlja2VycywgZnVuY3Rpb24oaSwgcCl7XG5cdFx0XHRcdGlmICghcC5nZXRVVENEYXRlKCkgJiYgKHAgPT09IGRwIHx8ICFrZWVwX2VtcHR5X3ZhbHVlcykpXG5cdFx0XHRcdFx0cC5zZXRVVENEYXRlKG5ld19kYXRlKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRpZiAobmV3X2RhdGUgPCB0aGlzLmRhdGVzW2pdKXtcblx0XHRcdFx0Ly8gRGF0ZSBiZWluZyBtb3ZlZCBlYXJsaWVyL2xlZnRcblx0XHRcdFx0d2hpbGUgKGogPj0gMCAmJiBuZXdfZGF0ZSA8IHRoaXMuZGF0ZXNbal0pe1xuXHRcdFx0XHRcdHRoaXMucGlja2Vyc1tqLS1dLnNldFVUQ0RhdGUobmV3X2RhdGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKG5ld19kYXRlID4gdGhpcy5kYXRlc1trXSl7XG5cdFx0XHRcdC8vIERhdGUgYmVpbmcgbW92ZWQgbGF0ZXIvcmlnaHRcblx0XHRcdFx0d2hpbGUgKGsgPCBsICYmIG5ld19kYXRlID4gdGhpcy5kYXRlc1trXSl7XG5cdFx0XHRcdFx0dGhpcy5waWNrZXJzW2srK10uc2V0VVRDRGF0ZShuZXdfZGF0ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMudXBkYXRlRGF0ZXMoKTtcblxuXHRcdFx0ZGVsZXRlIHRoaXMudXBkYXRpbmc7XG5cdFx0fSxcblx0XHRkZXN0cm95OiBmdW5jdGlvbigpe1xuXHRcdFx0JC5tYXAodGhpcy5waWNrZXJzLCBmdW5jdGlvbihwKXsgcC5kZXN0cm95KCk7IH0pO1xuXHRcdFx0JCh0aGlzLmlucHV0cykub2ZmKCdjaGFuZ2VEYXRlJywgdGhpcy5kYXRlVXBkYXRlZCk7XG5cdFx0XHRkZWxldGUgdGhpcy5lbGVtZW50LmRhdGEoKS5kYXRlcGlja2VyO1xuXHRcdH0sXG5cdFx0cmVtb3ZlOiBhbGlhcygnZGVzdHJveScsICdNZXRob2QgYHJlbW92ZWAgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIHZlcnNpb24gMi4wLiBVc2UgYGRlc3Ryb3lgIGluc3RlYWQnKVxuXHR9O1xuXG5cdGZ1bmN0aW9uIG9wdHNfZnJvbV9lbChlbCwgcHJlZml4KXtcblx0XHQvLyBEZXJpdmUgb3B0aW9ucyBmcm9tIGVsZW1lbnQgZGF0YS1hdHRyc1xuXHRcdHZhciBkYXRhID0gJChlbCkuZGF0YSgpLFxuXHRcdFx0b3V0ID0ge30sIGlua2V5LFxuXHRcdFx0cmVwbGFjZSA9IG5ldyBSZWdFeHAoJ14nICsgcHJlZml4LnRvTG93ZXJDYXNlKCkgKyAnKFtBLVpdKScpO1xuXHRcdHByZWZpeCA9IG5ldyBSZWdFeHAoJ14nICsgcHJlZml4LnRvTG93ZXJDYXNlKCkpO1xuXHRcdGZ1bmN0aW9uIHJlX2xvd2VyKF8sYSl7XG5cdFx0XHRyZXR1cm4gYS50b0xvd2VyQ2FzZSgpO1xuXHRcdH1cblx0XHRmb3IgKHZhciBrZXkgaW4gZGF0YSlcblx0XHRcdGlmIChwcmVmaXgudGVzdChrZXkpKXtcblx0XHRcdFx0aW5rZXkgPSBrZXkucmVwbGFjZShyZXBsYWNlLCByZV9sb3dlcik7XG5cdFx0XHRcdG91dFtpbmtleV0gPSBkYXRhW2tleV07XG5cdFx0XHR9XG5cdFx0cmV0dXJuIG91dDtcblx0fVxuXG5cdGZ1bmN0aW9uIG9wdHNfZnJvbV9sb2NhbGUobGFuZyl7XG5cdFx0Ly8gRGVyaXZlIG9wdGlvbnMgZnJvbSBsb2NhbGUgcGx1Z2luc1xuXHRcdHZhciBvdXQgPSB7fTtcblx0XHQvLyBDaGVjayBpZiBcImRlLURFXCIgc3R5bGUgZGF0ZSBpcyBhdmFpbGFibGUsIGlmIG5vdCBsYW5ndWFnZSBzaG91bGRcblx0XHQvLyBmYWxsYmFjayB0byAyIGxldHRlciBjb2RlIGVnIFwiZGVcIlxuXHRcdGlmICghZGF0ZXNbbGFuZ10pe1xuXHRcdFx0bGFuZyA9IGxhbmcuc3BsaXQoJy0nKVswXTtcblx0XHRcdGlmICghZGF0ZXNbbGFuZ10pXG5cdFx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dmFyIGQgPSBkYXRlc1tsYW5nXTtcblx0XHQkLmVhY2gobG9jYWxlX29wdHMsIGZ1bmN0aW9uKGksayl7XG5cdFx0XHRpZiAoayBpbiBkKVxuXHRcdFx0XHRvdXRba10gPSBkW2tdO1xuXHRcdH0pO1xuXHRcdHJldHVybiBvdXQ7XG5cdH1cblxuXHR2YXIgb2xkID0gJC5mbi5kYXRlcGlja2VyO1xuXHR2YXIgZGF0ZXBpY2tlclBsdWdpbiA9IGZ1bmN0aW9uKG9wdGlvbil7XG5cdFx0dmFyIGFyZ3MgPSBBcnJheS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuXHRcdGFyZ3Muc2hpZnQoKTtcblx0XHR2YXIgaW50ZXJuYWxfcmV0dXJuO1xuXHRcdHRoaXMuZWFjaChmdW5jdGlvbigpe1xuXHRcdFx0dmFyICR0aGlzID0gJCh0aGlzKSxcblx0XHRcdFx0ZGF0YSA9ICR0aGlzLmRhdGEoJ2RhdGVwaWNrZXInKSxcblx0XHRcdFx0b3B0aW9ucyA9IHR5cGVvZiBvcHRpb24gPT09ICdvYmplY3QnICYmIG9wdGlvbjtcblx0XHRcdGlmICghZGF0YSl7XG5cdFx0XHRcdHZhciBlbG9wdHMgPSBvcHRzX2Zyb21fZWwodGhpcywgJ2RhdGUnKSxcblx0XHRcdFx0XHQvLyBQcmVsaW1pbmFyeSBvdGlvbnNcblx0XHRcdFx0XHR4b3B0cyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgZWxvcHRzLCBvcHRpb25zKSxcblx0XHRcdFx0XHRsb2NvcHRzID0gb3B0c19mcm9tX2xvY2FsZSh4b3B0cy5sYW5ndWFnZSksXG5cdFx0XHRcdFx0Ly8gT3B0aW9ucyBwcmlvcml0eToganMgYXJncywgZGF0YS1hdHRycywgbG9jYWxlcywgZGVmYXVsdHNcblx0XHRcdFx0XHRvcHRzID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBsb2NvcHRzLCBlbG9wdHMsIG9wdGlvbnMpO1xuXHRcdFx0XHRpZiAoJHRoaXMuaGFzQ2xhc3MoJ2lucHV0LWRhdGVyYW5nZScpIHx8IG9wdHMuaW5wdXRzKXtcblx0XHRcdFx0XHQkLmV4dGVuZChvcHRzLCB7XG5cdFx0XHRcdFx0XHRpbnB1dHM6IG9wdHMuaW5wdXRzIHx8ICR0aGlzLmZpbmQoJ2lucHV0JykudG9BcnJheSgpXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0ZGF0YSA9IG5ldyBEYXRlUmFuZ2VQaWNrZXIodGhpcywgb3B0cyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0ZGF0YSA9IG5ldyBEYXRlcGlja2VyKHRoaXMsIG9wdHMpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdCR0aGlzLmRhdGEoJ2RhdGVwaWNrZXInLCBkYXRhKTtcblx0XHRcdH1cblx0XHRcdGlmICh0eXBlb2Ygb3B0aW9uID09PSAnc3RyaW5nJyAmJiB0eXBlb2YgZGF0YVtvcHRpb25dID09PSAnZnVuY3Rpb24nKXtcblx0XHRcdFx0aW50ZXJuYWxfcmV0dXJuID0gZGF0YVtvcHRpb25dLmFwcGx5KGRhdGEsIGFyZ3MpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0aWYgKFxuXHRcdFx0aW50ZXJuYWxfcmV0dXJuID09PSB1bmRlZmluZWQgfHxcblx0XHRcdGludGVybmFsX3JldHVybiBpbnN0YW5jZW9mIERhdGVwaWNrZXIgfHxcblx0XHRcdGludGVybmFsX3JldHVybiBpbnN0YW5jZW9mIERhdGVSYW5nZVBpY2tlclxuXHRcdClcblx0XHRcdHJldHVybiB0aGlzO1xuXG5cdFx0aWYgKHRoaXMubGVuZ3RoID4gMSlcblx0XHRcdHRocm93IG5ldyBFcnJvcignVXNpbmcgb25seSBhbGxvd2VkIGZvciB0aGUgY29sbGVjdGlvbiBvZiBhIHNpbmdsZSBlbGVtZW50ICgnICsgb3B0aW9uICsgJyBmdW5jdGlvbiknKTtcblx0XHRlbHNlXG5cdFx0XHRyZXR1cm4gaW50ZXJuYWxfcmV0dXJuO1xuXHR9O1xuXHQkLmZuLmRhdGVwaWNrZXIgPSBkYXRlcGlja2VyUGx1Z2luO1xuXG5cdHZhciBkZWZhdWx0cyA9ICQuZm4uZGF0ZXBpY2tlci5kZWZhdWx0cyA9IHtcblx0XHRhc3N1bWVOZWFyYnlZZWFyOiBmYWxzZSxcblx0XHRhdXRvY2xvc2U6IGZhbHNlLFxuXHRcdGJlZm9yZVNob3dEYXk6ICQubm9vcCxcblx0XHRiZWZvcmVTaG93TW9udGg6ICQubm9vcCxcblx0XHRiZWZvcmVTaG93WWVhcjogJC5ub29wLFxuXHRcdGJlZm9yZVNob3dEZWNhZGU6ICQubm9vcCxcblx0XHRiZWZvcmVTaG93Q2VudHVyeTogJC5ub29wLFxuXHRcdGNhbGVuZGFyV2Vla3M6IGZhbHNlLFxuXHRcdGNsZWFyQnRuOiBmYWxzZSxcblx0XHR0b2dnbGVBY3RpdmU6IGZhbHNlLFxuXHRcdGRheXNPZldlZWtEaXNhYmxlZDogW10sXG5cdFx0ZGF5c09mV2Vla0hpZ2hsaWdodGVkOiBbXSxcblx0XHRkYXRlc0Rpc2FibGVkOiBbXSxcblx0XHRlbmREYXRlOiBJbmZpbml0eSxcblx0XHRmb3JjZVBhcnNlOiB0cnVlLFxuXHRcdGZvcm1hdDogJ21tL2RkL3l5eXknLFxuXHRcdGtlZXBFbXB0eVZhbHVlczogZmFsc2UsXG5cdFx0a2V5Ym9hcmROYXZpZ2F0aW9uOiB0cnVlLFxuXHRcdGxhbmd1YWdlOiAnZW4nLFxuXHRcdG1pblZpZXdNb2RlOiAwLFxuXHRcdG1heFZpZXdNb2RlOiA0LFxuXHRcdG11bHRpZGF0ZTogZmFsc2UsXG5cdFx0bXVsdGlkYXRlU2VwYXJhdG9yOiAnLCcsXG5cdFx0b3JpZW50YXRpb246IFwiYXV0b1wiLFxuXHRcdHJ0bDogZmFsc2UsXG5cdFx0c3RhcnREYXRlOiAtSW5maW5pdHksXG5cdFx0c3RhcnRWaWV3OiAwLFxuXHRcdHRvZGF5QnRuOiBmYWxzZSxcblx0XHR0b2RheUhpZ2hsaWdodDogZmFsc2UsXG5cdFx0dXBkYXRlVmlld0RhdGU6IHRydWUsXG5cdFx0d2Vla1N0YXJ0OiAwLFxuXHRcdGRpc2FibGVUb3VjaEtleWJvYXJkOiBmYWxzZSxcblx0XHRlbmFibGVPblJlYWRvbmx5OiB0cnVlLFxuXHRcdHNob3dPbkZvY3VzOiB0cnVlLFxuXHRcdHpJbmRleE9mZnNldDogMTAsXG5cdFx0Y29udGFpbmVyOiAnYm9keScsXG5cdFx0aW1tZWRpYXRlVXBkYXRlczogZmFsc2UsXG5cdFx0dGl0bGU6ICcnLFxuXHRcdHRlbXBsYXRlczoge1xuXHRcdFx0bGVmdEFycm93OiAnJiN4MDBBQjsnLFxuXHRcdFx0cmlnaHRBcnJvdzogJyYjeDAwQkI7J1xuXHRcdH0sXG4gICAgc2hvd1dlZWtEYXlzOiB0cnVlXG5cdH07XG5cdHZhciBsb2NhbGVfb3B0cyA9ICQuZm4uZGF0ZXBpY2tlci5sb2NhbGVfb3B0cyA9IFtcblx0XHQnZm9ybWF0Jyxcblx0XHQncnRsJyxcblx0XHQnd2Vla1N0YXJ0J1xuXHRdO1xuXHQkLmZuLmRhdGVwaWNrZXIuQ29uc3RydWN0b3IgPSBEYXRlcGlja2VyO1xuXHR2YXIgZGF0ZXMgPSAkLmZuLmRhdGVwaWNrZXIuZGF0ZXMgPSB7XG5cdFx0ZW46IHtcblx0XHRcdGRheXM6IFtcIlN1bmRheVwiLCBcIk1vbmRheVwiLCBcIlR1ZXNkYXlcIiwgXCJXZWRuZXNkYXlcIiwgXCJUaHVyc2RheVwiLCBcIkZyaWRheVwiLCBcIlNhdHVyZGF5XCJdLFxuXHRcdFx0ZGF5c1Nob3J0OiBbXCJTdW5cIiwgXCJNb25cIiwgXCJUdWVcIiwgXCJXZWRcIiwgXCJUaHVcIiwgXCJGcmlcIiwgXCJTYXRcIl0sXG5cdFx0XHRkYXlzTWluOiBbXCJTdVwiLCBcIk1vXCIsIFwiVHVcIiwgXCJXZVwiLCBcIlRoXCIsIFwiRnJcIiwgXCJTYVwiXSxcblx0XHRcdG1vbnRoczogW1wiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIl0sXG5cdFx0XHRtb250aHNTaG9ydDogW1wiSmFuXCIsIFwiRmViXCIsIFwiTWFyXCIsIFwiQXByXCIsIFwiTWF5XCIsIFwiSnVuXCIsIFwiSnVsXCIsIFwiQXVnXCIsIFwiU2VwXCIsIFwiT2N0XCIsIFwiTm92XCIsIFwiRGVjXCJdLFxuXHRcdFx0dG9kYXk6IFwiVG9kYXlcIixcblx0XHRcdGNsZWFyOiBcIkNsZWFyXCIsXG5cdFx0XHR0aXRsZUZvcm1hdDogXCJNTSB5eXl5XCJcblx0XHR9XG5cdH07XG5cblx0dmFyIERQR2xvYmFsID0ge1xuXHRcdHZpZXdNb2RlczogW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lczogWydkYXlzJywgJ21vbnRoJ10sXG5cdFx0XHRcdGNsc05hbWU6ICdkYXlzJyxcblx0XHRcdFx0ZTogJ2NoYW5nZU1vbnRoJ1xuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZXM6IFsnbW9udGhzJywgJ3llYXInXSxcblx0XHRcdFx0Y2xzTmFtZTogJ21vbnRocycsXG5cdFx0XHRcdGU6ICdjaGFuZ2VZZWFyJyxcblx0XHRcdFx0bmF2U3RlcDogMVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZXM6IFsneWVhcnMnLCAnZGVjYWRlJ10sXG5cdFx0XHRcdGNsc05hbWU6ICd5ZWFycycsXG5cdFx0XHRcdGU6ICdjaGFuZ2VEZWNhZGUnLFxuXHRcdFx0XHRuYXZTdGVwOiAxMFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZXM6IFsnZGVjYWRlcycsICdjZW50dXJ5J10sXG5cdFx0XHRcdGNsc05hbWU6ICdkZWNhZGVzJyxcblx0XHRcdFx0ZTogJ2NoYW5nZUNlbnR1cnknLFxuXHRcdFx0XHRuYXZTdGVwOiAxMDBcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWVzOiBbJ2NlbnR1cmllcycsICdtaWxsZW5uaXVtJ10sXG5cdFx0XHRcdGNsc05hbWU6ICdjZW50dXJpZXMnLFxuXHRcdFx0XHRlOiAnY2hhbmdlTWlsbGVubml1bScsXG5cdFx0XHRcdG5hdlN0ZXA6IDEwMDBcblx0XHRcdH1cblx0XHRdLFxuXHRcdHZhbGlkUGFydHM6IC9kZD98REQ/fG1tP3xNTT98eXkoPzp5eSk/L2csXG5cdFx0bm9ucHVuY3R1YXRpb246IC9bXiAtXFwvOi1AXFx1NWU3NFxcdTY3MDhcXHU2NWU1XFxbLWB7LX5cXHRcXG5cXHJdKy9nLFxuXHRcdHBhcnNlRm9ybWF0OiBmdW5jdGlvbihmb3JtYXQpe1xuXHRcdFx0aWYgKHR5cGVvZiBmb3JtYXQudG9WYWx1ZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZm9ybWF0LnRvRGlzcGxheSA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9ybWF0O1xuICAgICAgICAgICAgLy8gSUUgdHJlYXRzIFxcMCBhcyBhIHN0cmluZyBlbmQgaW4gaW5wdXRzICh0cnVuY2F0aW5nIHRoZSB2YWx1ZSksXG5cdFx0XHQvLyBzbyBpdCdzIGEgYmFkIGZvcm1hdCBkZWxpbWl0ZXIsIGFueXdheVxuXHRcdFx0dmFyIHNlcGFyYXRvcnMgPSBmb3JtYXQucmVwbGFjZSh0aGlzLnZhbGlkUGFydHMsICdcXDAnKS5zcGxpdCgnXFwwJyksXG5cdFx0XHRcdHBhcnRzID0gZm9ybWF0Lm1hdGNoKHRoaXMudmFsaWRQYXJ0cyk7XG5cdFx0XHRpZiAoIXNlcGFyYXRvcnMgfHwgIXNlcGFyYXRvcnMubGVuZ3RoIHx8ICFwYXJ0cyB8fCBwYXJ0cy5sZW5ndGggPT09IDApe1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGRhdGUgZm9ybWF0LlwiKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB7c2VwYXJhdG9yczogc2VwYXJhdG9ycywgcGFydHM6IHBhcnRzfTtcblx0XHR9LFxuXHRcdHBhcnNlRGF0ZTogZnVuY3Rpb24oZGF0ZSwgZm9ybWF0LCBsYW5ndWFnZSwgYXNzdW1lTmVhcmJ5KXtcblx0XHRcdGlmICghZGF0ZSlcblx0XHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0XHRcdGlmIChkYXRlIGluc3RhbmNlb2YgRGF0ZSlcblx0XHRcdFx0cmV0dXJuIGRhdGU7XG5cdFx0XHRpZiAodHlwZW9mIGZvcm1hdCA9PT0gJ3N0cmluZycpXG5cdFx0XHRcdGZvcm1hdCA9IERQR2xvYmFsLnBhcnNlRm9ybWF0KGZvcm1hdCk7XG5cdFx0XHRpZiAoZm9ybWF0LnRvVmFsdWUpXG5cdFx0XHRcdHJldHVybiBmb3JtYXQudG9WYWx1ZShkYXRlLCBmb3JtYXQsIGxhbmd1YWdlKTtcblx0XHRcdHZhciBmbl9tYXAgPSB7XG5cdFx0XHRcdFx0ZDogJ21vdmVEYXknLFxuXHRcdFx0XHRcdG06ICdtb3ZlTW9udGgnLFxuXHRcdFx0XHRcdHc6ICdtb3ZlV2VlaycsXG5cdFx0XHRcdFx0eTogJ21vdmVZZWFyJ1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRkYXRlQWxpYXNlcyA9IHtcblx0XHRcdFx0XHR5ZXN0ZXJkYXk6ICctMWQnLFxuXHRcdFx0XHRcdHRvZGF5OiAnKzBkJyxcblx0XHRcdFx0XHR0b21vcnJvdzogJysxZCdcblx0XHRcdFx0fSxcblx0XHRcdFx0cGFydHMsIHBhcnQsIGRpciwgaSwgZm47XG5cdFx0XHRpZiAoZGF0ZSBpbiBkYXRlQWxpYXNlcyl7XG5cdFx0XHRcdGRhdGUgPSBkYXRlQWxpYXNlc1tkYXRlXTtcblx0XHRcdH1cblx0XHRcdGlmICgvXltcXC0rXVxcZCtbZG13eV0oW1xccyxdK1tcXC0rXVxcZCtbZG13eV0pKiQvaS50ZXN0KGRhdGUpKXtcblx0XHRcdFx0cGFydHMgPSBkYXRlLm1hdGNoKC8oW1xcLStdXFxkKykoW2Rtd3ldKS9naSk7XG5cdFx0XHRcdGRhdGUgPSBuZXcgRGF0ZSgpO1xuXHRcdFx0XHRmb3IgKGk9MDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKXtcblx0XHRcdFx0XHRwYXJ0ID0gcGFydHNbaV0ubWF0Y2goLyhbXFwtK11cXGQrKShbZG13eV0pL2kpO1xuXHRcdFx0XHRcdGRpciA9IE51bWJlcihwYXJ0WzFdKTtcblx0XHRcdFx0XHRmbiA9IGZuX21hcFtwYXJ0WzJdLnRvTG93ZXJDYXNlKCldO1xuXHRcdFx0XHRcdGRhdGUgPSBEYXRlcGlja2VyLnByb3RvdHlwZVtmbl0oZGF0ZSwgZGlyKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gRGF0ZXBpY2tlci5wcm90b3R5cGUuX3plcm9fdXRjX3RpbWUoZGF0ZSk7XG5cdFx0XHR9XG5cblx0XHRcdHBhcnRzID0gZGF0ZSAmJiBkYXRlLm1hdGNoKHRoaXMubm9ucHVuY3R1YXRpb24pIHx8IFtdO1xuXG5cdFx0XHRmdW5jdGlvbiBhcHBseU5lYXJieVllYXIoeWVhciwgdGhyZXNob2xkKXtcblx0XHRcdFx0aWYgKHRocmVzaG9sZCA9PT0gdHJ1ZSlcblx0XHRcdFx0XHR0aHJlc2hvbGQgPSAxMDtcblxuXHRcdFx0XHQvLyBpZiB5ZWFyIGlzIDIgZGlnaXRzIG9yIGxlc3MsIHRoYW4gdGhlIHVzZXIgbW9zdCBsaWtlbHkgaXMgdHJ5aW5nIHRvIGdldCBhIHJlY2VudCBjZW50dXJ5XG5cdFx0XHRcdGlmICh5ZWFyIDwgMTAwKXtcblx0XHRcdFx0XHR5ZWFyICs9IDIwMDA7XG5cdFx0XHRcdFx0Ly8gaWYgdGhlIG5ldyB5ZWFyIGlzIG1vcmUgdGhhbiB0aHJlc2hvbGQgeWVhcnMgaW4gYWR2YW5jZSwgdXNlIGxhc3QgY2VudHVyeVxuXHRcdFx0XHRcdGlmICh5ZWFyID4gKChuZXcgRGF0ZSgpKS5nZXRGdWxsWWVhcigpK3RocmVzaG9sZCkpe1xuXHRcdFx0XHRcdFx0eWVhciAtPSAxMDA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIHllYXI7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBwYXJzZWQgPSB7fSxcblx0XHRcdFx0c2V0dGVyc19vcmRlciA9IFsneXl5eScsICd5eScsICdNJywgJ01NJywgJ20nLCAnbW0nLCAnZCcsICdkZCddLFxuXHRcdFx0XHRzZXR0ZXJzX21hcCA9IHtcblx0XHRcdFx0XHR5eXl5OiBmdW5jdGlvbihkLHYpe1xuXHRcdFx0XHRcdFx0cmV0dXJuIGQuc2V0VVRDRnVsbFllYXIoYXNzdW1lTmVhcmJ5ID8gYXBwbHlOZWFyYnlZZWFyKHYsIGFzc3VtZU5lYXJieSkgOiB2KTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdG06IGZ1bmN0aW9uKGQsdil7XG5cdFx0XHRcdFx0XHRpZiAoaXNOYU4oZCkpXG5cdFx0XHRcdFx0XHRcdHJldHVybiBkO1xuXHRcdFx0XHRcdFx0diAtPSAxO1xuXHRcdFx0XHRcdFx0d2hpbGUgKHYgPCAwKSB2ICs9IDEyO1xuXHRcdFx0XHRcdFx0diAlPSAxMjtcblx0XHRcdFx0XHRcdGQuc2V0VVRDTW9udGgodik7XG5cdFx0XHRcdFx0XHR3aGlsZSAoZC5nZXRVVENNb250aCgpICE9PSB2KVxuXHRcdFx0XHRcdFx0XHRkLnNldFVUQ0RhdGUoZC5nZXRVVENEYXRlKCktMSk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZDtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGQ6IGZ1bmN0aW9uKGQsdil7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZC5zZXRVVENEYXRlKHYpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0dmFsLCBmaWx0ZXJlZDtcblx0XHRcdHNldHRlcnNfbWFwWyd5eSddID0gc2V0dGVyc19tYXBbJ3l5eXknXTtcblx0XHRcdHNldHRlcnNfbWFwWydNJ10gPSBzZXR0ZXJzX21hcFsnTU0nXSA9IHNldHRlcnNfbWFwWydtbSddID0gc2V0dGVyc19tYXBbJ20nXTtcblx0XHRcdHNldHRlcnNfbWFwWydkZCddID0gc2V0dGVyc19tYXBbJ2QnXTtcblx0XHRcdGRhdGUgPSBVVENUb2RheSgpO1xuXHRcdFx0dmFyIGZwYXJ0cyA9IGZvcm1hdC5wYXJ0cy5zbGljZSgpO1xuXHRcdFx0Ly8gUmVtb3ZlIG5vb3AgcGFydHNcblx0XHRcdGlmIChwYXJ0cy5sZW5ndGggIT09IGZwYXJ0cy5sZW5ndGgpe1xuXHRcdFx0XHRmcGFydHMgPSAkKGZwYXJ0cykuZmlsdGVyKGZ1bmN0aW9uKGkscCl7XG5cdFx0XHRcdFx0cmV0dXJuICQuaW5BcnJheShwLCBzZXR0ZXJzX29yZGVyKSAhPT0gLTE7XG5cdFx0XHRcdH0pLnRvQXJyYXkoKTtcblx0XHRcdH1cblx0XHRcdC8vIFByb2Nlc3MgcmVtYWluZGVyXG5cdFx0XHRmdW5jdGlvbiBtYXRjaF9wYXJ0KCl7XG5cdFx0XHRcdHZhciBtID0gdGhpcy5zbGljZSgwLCBwYXJ0c1tpXS5sZW5ndGgpLFxuXHRcdFx0XHRcdHAgPSBwYXJ0c1tpXS5zbGljZSgwLCBtLmxlbmd0aCk7XG5cdFx0XHRcdHJldHVybiBtLnRvTG93ZXJDYXNlKCkgPT09IHAudG9Mb3dlckNhc2UoKTtcblx0XHRcdH1cblx0XHRcdGlmIChwYXJ0cy5sZW5ndGggPT09IGZwYXJ0cy5sZW5ndGgpe1xuXHRcdFx0XHR2YXIgY250O1xuXHRcdFx0XHRmb3IgKGk9MCwgY250ID0gZnBhcnRzLmxlbmd0aDsgaSA8IGNudDsgaSsrKXtcblx0XHRcdFx0XHR2YWwgPSBwYXJzZUludChwYXJ0c1tpXSwgMTApO1xuXHRcdFx0XHRcdHBhcnQgPSBmcGFydHNbaV07XG5cdFx0XHRcdFx0aWYgKGlzTmFOKHZhbCkpe1xuXHRcdFx0XHRcdFx0c3dpdGNoIChwYXJ0KXtcblx0XHRcdFx0XHRcdFx0Y2FzZSAnTU0nOlxuXHRcdFx0XHRcdFx0XHRcdGZpbHRlcmVkID0gJChkYXRlc1tsYW5ndWFnZV0ubW9udGhzKS5maWx0ZXIobWF0Y2hfcGFydCk7XG5cdFx0XHRcdFx0XHRcdFx0dmFsID0gJC5pbkFycmF5KGZpbHRlcmVkWzBdLCBkYXRlc1tsYW5ndWFnZV0ubW9udGhzKSArIDE7XG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ00nOlxuXHRcdFx0XHRcdFx0XHRcdGZpbHRlcmVkID0gJChkYXRlc1tsYW5ndWFnZV0ubW9udGhzU2hvcnQpLmZpbHRlcihtYXRjaF9wYXJ0KTtcblx0XHRcdFx0XHRcdFx0XHR2YWwgPSAkLmluQXJyYXkoZmlsdGVyZWRbMF0sIGRhdGVzW2xhbmd1YWdlXS5tb250aHNTaG9ydCkgKyAxO1xuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRwYXJzZWRbcGFydF0gPSB2YWw7XG5cdFx0XHRcdH1cblx0XHRcdFx0dmFyIF9kYXRlLCBzO1xuXHRcdFx0XHRmb3IgKGk9MDsgaSA8IHNldHRlcnNfb3JkZXIubGVuZ3RoOyBpKyspe1xuXHRcdFx0XHRcdHMgPSBzZXR0ZXJzX29yZGVyW2ldO1xuXHRcdFx0XHRcdGlmIChzIGluIHBhcnNlZCAmJiAhaXNOYU4ocGFyc2VkW3NdKSl7XG5cdFx0XHRcdFx0XHRfZGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuXHRcdFx0XHRcdFx0c2V0dGVyc19tYXBbc10oX2RhdGUsIHBhcnNlZFtzXSk7XG5cdFx0XHRcdFx0XHRpZiAoIWlzTmFOKF9kYXRlKSlcblx0XHRcdFx0XHRcdFx0ZGF0ZSA9IF9kYXRlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGRhdGU7XG5cdFx0fSxcblx0XHRmb3JtYXREYXRlOiBmdW5jdGlvbihkYXRlLCBmb3JtYXQsIGxhbmd1YWdlKXtcblx0XHRcdGlmICghZGF0ZSlcblx0XHRcdFx0cmV0dXJuICcnO1xuXHRcdFx0aWYgKHR5cGVvZiBmb3JtYXQgPT09ICdzdHJpbmcnKVxuXHRcdFx0XHRmb3JtYXQgPSBEUEdsb2JhbC5wYXJzZUZvcm1hdChmb3JtYXQpO1xuXHRcdFx0aWYgKGZvcm1hdC50b0Rpc3BsYXkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvcm1hdC50b0Rpc3BsYXkoZGF0ZSwgZm9ybWF0LCBsYW5ndWFnZSk7XG4gICAgICAgICAgICB2YXIgdmFsID0ge1xuXHRcdFx0XHRkOiBkYXRlLmdldFVUQ0RhdGUoKSxcblx0XHRcdFx0RDogZGF0ZXNbbGFuZ3VhZ2VdLmRheXNTaG9ydFtkYXRlLmdldFVUQ0RheSgpXSxcblx0XHRcdFx0REQ6IGRhdGVzW2xhbmd1YWdlXS5kYXlzW2RhdGUuZ2V0VVRDRGF5KCldLFxuXHRcdFx0XHRtOiBkYXRlLmdldFVUQ01vbnRoKCkgKyAxLFxuXHRcdFx0XHRNOiBkYXRlc1tsYW5ndWFnZV0ubW9udGhzU2hvcnRbZGF0ZS5nZXRVVENNb250aCgpXSxcblx0XHRcdFx0TU06IGRhdGVzW2xhbmd1YWdlXS5tb250aHNbZGF0ZS5nZXRVVENNb250aCgpXSxcblx0XHRcdFx0eXk6IGRhdGUuZ2V0VVRDRnVsbFllYXIoKS50b1N0cmluZygpLnN1YnN0cmluZygyKSxcblx0XHRcdFx0eXl5eTogZGF0ZS5nZXRVVENGdWxsWWVhcigpXG5cdFx0XHR9O1xuXHRcdFx0dmFsLmRkID0gKHZhbC5kIDwgMTAgPyAnMCcgOiAnJykgKyB2YWwuZDtcblx0XHRcdHZhbC5tbSA9ICh2YWwubSA8IDEwID8gJzAnIDogJycpICsgdmFsLm07XG5cdFx0XHRkYXRlID0gW107XG5cdFx0XHR2YXIgc2VwcyA9ICQuZXh0ZW5kKFtdLCBmb3JtYXQuc2VwYXJhdG9ycyk7XG5cdFx0XHRmb3IgKHZhciBpPTAsIGNudCA9IGZvcm1hdC5wYXJ0cy5sZW5ndGg7IGkgPD0gY250OyBpKyspe1xuXHRcdFx0XHRpZiAoc2Vwcy5sZW5ndGgpXG5cdFx0XHRcdFx0ZGF0ZS5wdXNoKHNlcHMuc2hpZnQoKSk7XG5cdFx0XHRcdGRhdGUucHVzaCh2YWxbZm9ybWF0LnBhcnRzW2ldXSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZGF0ZS5qb2luKCcnKTtcblx0XHR9LFxuXHRcdGhlYWRUZW1wbGF0ZTogJzx0aGVhZD4nK1xuXHRcdFx0ICAgICAgICAgICAgICAnPHRyPicrXG5cdFx0XHQgICAgICAgICAgICAgICAgJzx0aCBjb2xzcGFuPVwiN1wiIGNsYXNzPVwiZGF0ZXBpY2tlci10aXRsZVwiPjwvdGg+Jytcblx0XHRcdCAgICAgICAgICAgICAgJzwvdHI+Jytcblx0XHRcdFx0XHRcdFx0Jzx0cj4nK1xuXHRcdFx0XHRcdFx0XHRcdCc8dGggY2xhc3M9XCJwcmV2XCI+JytkZWZhdWx0cy50ZW1wbGF0ZXMubGVmdEFycm93Kyc8L3RoPicrXG5cdFx0XHRcdFx0XHRcdFx0Jzx0aCBjb2xzcGFuPVwiNVwiIGNsYXNzPVwiZGF0ZXBpY2tlci1zd2l0Y2hcIj48L3RoPicrXG5cdFx0XHRcdFx0XHRcdFx0Jzx0aCBjbGFzcz1cIm5leHRcIj4nK2RlZmF1bHRzLnRlbXBsYXRlcy5yaWdodEFycm93Kyc8L3RoPicrXG5cdFx0XHRcdFx0XHRcdCc8L3RyPicrXG5cdFx0XHRcdFx0XHQnPC90aGVhZD4nLFxuXHRcdGNvbnRUZW1wbGF0ZTogJzx0Ym9keT48dHI+PHRkIGNvbHNwYW49XCI3XCI+PC90ZD48L3RyPjwvdGJvZHk+Jyxcblx0XHRmb290VGVtcGxhdGU6ICc8dGZvb3Q+Jytcblx0XHRcdFx0XHRcdFx0Jzx0cj4nK1xuXHRcdFx0XHRcdFx0XHRcdCc8dGggY29sc3Bhbj1cIjdcIiBjbGFzcz1cInRvZGF5XCI+PC90aD4nK1xuXHRcdFx0XHRcdFx0XHQnPC90cj4nK1xuXHRcdFx0XHRcdFx0XHQnPHRyPicrXG5cdFx0XHRcdFx0XHRcdFx0Jzx0aCBjb2xzcGFuPVwiN1wiIGNsYXNzPVwiY2xlYXJcIj48L3RoPicrXG5cdFx0XHRcdFx0XHRcdCc8L3RyPicrXG5cdFx0XHRcdFx0XHQnPC90Zm9vdD4nXG5cdH07XG5cdERQR2xvYmFsLnRlbXBsYXRlID0gJzxkaXYgY2xhc3M9XCJkYXRlcGlja2VyXCI+Jytcblx0XHRcdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCJkYXRlcGlja2VyLWRheXNcIj4nK1xuXHRcdFx0XHRcdFx0XHRcdCc8dGFibGUgY2xhc3M9XCJ0YWJsZS1jb25kZW5zZWRcIj4nK1xuXHRcdFx0XHRcdFx0XHRcdFx0RFBHbG9iYWwuaGVhZFRlbXBsYXRlK1xuXHRcdFx0XHRcdFx0XHRcdFx0Jzx0Ym9keT48L3Rib2R5PicrXG5cdFx0XHRcdFx0XHRcdFx0XHREUEdsb2JhbC5mb290VGVtcGxhdGUrXG5cdFx0XHRcdFx0XHRcdFx0JzwvdGFibGU+Jytcblx0XHRcdFx0XHRcdFx0JzwvZGl2PicrXG5cdFx0XHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlci1tb250aHNcIj4nK1xuXHRcdFx0XHRcdFx0XHRcdCc8dGFibGUgY2xhc3M9XCJ0YWJsZS1jb25kZW5zZWRcIj4nK1xuXHRcdFx0XHRcdFx0XHRcdFx0RFBHbG9iYWwuaGVhZFRlbXBsYXRlK1xuXHRcdFx0XHRcdFx0XHRcdFx0RFBHbG9iYWwuY29udFRlbXBsYXRlK1xuXHRcdFx0XHRcdFx0XHRcdFx0RFBHbG9iYWwuZm9vdFRlbXBsYXRlK1xuXHRcdFx0XHRcdFx0XHRcdCc8L3RhYmxlPicrXG5cdFx0XHRcdFx0XHRcdCc8L2Rpdj4nK1xuXHRcdFx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cImRhdGVwaWNrZXIteWVhcnNcIj4nK1xuXHRcdFx0XHRcdFx0XHRcdCc8dGFibGUgY2xhc3M9XCJ0YWJsZS1jb25kZW5zZWRcIj4nK1xuXHRcdFx0XHRcdFx0XHRcdFx0RFBHbG9iYWwuaGVhZFRlbXBsYXRlK1xuXHRcdFx0XHRcdFx0XHRcdFx0RFBHbG9iYWwuY29udFRlbXBsYXRlK1xuXHRcdFx0XHRcdFx0XHRcdFx0RFBHbG9iYWwuZm9vdFRlbXBsYXRlK1xuXHRcdFx0XHRcdFx0XHRcdCc8L3RhYmxlPicrXG5cdFx0XHRcdFx0XHRcdCc8L2Rpdj4nK1xuXHRcdFx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cImRhdGVwaWNrZXItZGVjYWRlc1wiPicrXG5cdFx0XHRcdFx0XHRcdFx0Jzx0YWJsZSBjbGFzcz1cInRhYmxlLWNvbmRlbnNlZFwiPicrXG5cdFx0XHRcdFx0XHRcdFx0XHREUEdsb2JhbC5oZWFkVGVtcGxhdGUrXG5cdFx0XHRcdFx0XHRcdFx0XHREUEdsb2JhbC5jb250VGVtcGxhdGUrXG5cdFx0XHRcdFx0XHRcdFx0XHREUEdsb2JhbC5mb290VGVtcGxhdGUrXG5cdFx0XHRcdFx0XHRcdFx0JzwvdGFibGU+Jytcblx0XHRcdFx0XHRcdFx0JzwvZGl2PicrXG5cdFx0XHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlci1jZW50dXJpZXNcIj4nK1xuXHRcdFx0XHRcdFx0XHRcdCc8dGFibGUgY2xhc3M9XCJ0YWJsZS1jb25kZW5zZWRcIj4nK1xuXHRcdFx0XHRcdFx0XHRcdFx0RFBHbG9iYWwuaGVhZFRlbXBsYXRlK1xuXHRcdFx0XHRcdFx0XHRcdFx0RFBHbG9iYWwuY29udFRlbXBsYXRlK1xuXHRcdFx0XHRcdFx0XHRcdFx0RFBHbG9iYWwuZm9vdFRlbXBsYXRlK1xuXHRcdFx0XHRcdFx0XHRcdCc8L3RhYmxlPicrXG5cdFx0XHRcdFx0XHRcdCc8L2Rpdj4nK1xuXHRcdFx0XHRcdFx0JzwvZGl2Pic7XG5cblx0JC5mbi5kYXRlcGlja2VyLkRQR2xvYmFsID0gRFBHbG9iYWw7XG5cblxuXHQvKiBEQVRFUElDS0VSIE5PIENPTkZMSUNUXG5cdCogPT09PT09PT09PT09PT09PT09PSAqL1xuXG5cdCQuZm4uZGF0ZXBpY2tlci5ub0NvbmZsaWN0ID0gZnVuY3Rpb24oKXtcblx0XHQkLmZuLmRhdGVwaWNrZXIgPSBvbGQ7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0LyogREFURVBJQ0tFUiBWRVJTSU9OXG5cdCAqID09PT09PT09PT09PT09PT09PT0gKi9cblx0JC5mbi5kYXRlcGlja2VyLnZlcnNpb24gPSAnMS45LjAnO1xuXG5cdCQuZm4uZGF0ZXBpY2tlci5kZXByZWNhdGVkID0gZnVuY3Rpb24obXNnKXtcblx0XHR2YXIgY29uc29sZSA9IHdpbmRvdy5jb25zb2xlO1xuXHRcdGlmIChjb25zb2xlICYmIGNvbnNvbGUud2Fybikge1xuXHRcdFx0Y29uc29sZS53YXJuKCdERVBSRUNBVEVEOiAnICsgbXNnKTtcblx0XHR9XG5cdH07XG5cblxuXHQvKiBEQVRFUElDS0VSIERBVEEtQVBJXG5cdCogPT09PT09PT09PT09PT09PT09ICovXG5cblx0JChkb2N1bWVudCkub24oXG5cdFx0J2ZvY3VzLmRhdGVwaWNrZXIuZGF0YS1hcGkgY2xpY2suZGF0ZXBpY2tlci5kYXRhLWFwaScsXG5cdFx0J1tkYXRhLXByb3ZpZGU9XCJkYXRlcGlja2VyXCJdJyxcblx0XHRmdW5jdGlvbihlKXtcblx0XHRcdHZhciAkdGhpcyA9ICQodGhpcyk7XG5cdFx0XHRpZiAoJHRoaXMuZGF0YSgnZGF0ZXBpY2tlcicpKVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHQvLyBjb21wb25lbnQgY2xpY2sgcmVxdWlyZXMgdXMgdG8gZXhwbGljaXRseSBzaG93IGl0XG5cdFx0XHRkYXRlcGlja2VyUGx1Z2luLmNhbGwoJHRoaXMsICdzaG93Jyk7XG5cdFx0fVxuXHQpO1xuXHQkKGZ1bmN0aW9uKCl7XG5cdFx0ZGF0ZXBpY2tlclBsdWdpbi5jYWxsKCQoJ1tkYXRhLXByb3ZpZGU9XCJkYXRlcGlja2VyLWlubGluZVwiXScpKTtcblx0fSk7XG5cbn0pKTtcbiIsIiFmdW5jdGlvbihhKXthLmZuLmRhdGVwaWNrZXIuZGF0ZXMuZnI9e2RheXM6W1wiZGltYW5jaGVcIixcImx1bmRpXCIsXCJtYXJkaVwiLFwibWVyY3JlZGlcIixcImpldWRpXCIsXCJ2ZW5kcmVkaVwiLFwic2FtZWRpXCJdLGRheXNTaG9ydDpbXCJkaW0uXCIsXCJsdW4uXCIsXCJtYXIuXCIsXCJtZXIuXCIsXCJqZXUuXCIsXCJ2ZW4uXCIsXCJzYW0uXCJdLGRheXNNaW46W1wiZFwiLFwibFwiLFwibWFcIixcIm1lXCIsXCJqXCIsXCJ2XCIsXCJzXCJdLG1vbnRoczpbXCJqYW52aWVyXCIsXCJmw6l2cmllclwiLFwibWFyc1wiLFwiYXZyaWxcIixcIm1haVwiLFwianVpblwiLFwianVpbGxldFwiLFwiYW/Du3RcIixcInNlcHRlbWJyZVwiLFwib2N0b2JyZVwiLFwibm92ZW1icmVcIixcImTDqWNlbWJyZVwiXSxtb250aHNTaG9ydDpbXCJqYW52LlwiLFwiZsOpdnIuXCIsXCJtYXJzXCIsXCJhdnJpbFwiLFwibWFpXCIsXCJqdWluXCIsXCJqdWlsLlwiLFwiYW/Du3RcIixcInNlcHQuXCIsXCJvY3QuXCIsXCJub3YuXCIsXCJkw6ljLlwiXSx0b2RheTpcIkF1am91cmQnaHVpXCIsbW9udGhzVGl0bGU6XCJNb2lzXCIsY2xlYXI6XCJFZmZhY2VyXCIsd2Vla1N0YXJ0OjEsZm9ybWF0OlwiZGQvbW0veXl5eVwifX0oalF1ZXJ5KTsiLCIvKiFcbiAgKiBCb290c3RyYXAgdjQuNS4zIChodHRwczovL2dldGJvb3RzdHJhcC5jb20vKVxuICAqIENvcHlyaWdodCAyMDExLTIwMjAgVGhlIEJvb3RzdHJhcCBBdXRob3JzIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvZ3JhcGhzL2NvbnRyaWJ1dG9ycylcbiAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgKi9cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IGZhY3RvcnkoZXhwb3J0cywgcmVxdWlyZSgnanF1ZXJ5JyksIHJlcXVpcmUoJ3BvcHBlci5qcycpKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJ2V4cG9ydHMnLCAnanF1ZXJ5JywgJ3BvcHBlci5qcyddLCBmYWN0b3J5KSA6XG4gIChnbG9iYWwgPSB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWxUaGlzIDogZ2xvYmFsIHx8IHNlbGYsIGZhY3RvcnkoZ2xvYmFsLmJvb3RzdHJhcCA9IHt9LCBnbG9iYWwualF1ZXJ5LCBnbG9iYWwuUG9wcGVyKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoZXhwb3J0cywgJCwgUG9wcGVyKSB7ICd1c2Ugc3RyaWN0JztcblxuICBmdW5jdGlvbiBfaW50ZXJvcERlZmF1bHRMZWdhY3kgKGUpIHsgcmV0dXJuIGUgJiYgdHlwZW9mIGUgPT09ICdvYmplY3QnICYmICdkZWZhdWx0JyBpbiBlID8gZSA6IHsgJ2RlZmF1bHQnOiBlIH07IH1cblxuICB2YXIgJF9fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9faW50ZXJvcERlZmF1bHRMZWdhY3koJCk7XG4gIHZhciBQb3BwZXJfX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX2ludGVyb3BEZWZhdWx0TGVnYWN5KFBvcHBlcik7XG5cbiAgZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9XG5cbiAgZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gICAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH07XG5cbiAgICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gICAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7XG4gICAgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7XG4gICAgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbiAgfVxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgKHY0LjUuMyk6IHV0aWwuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIFByaXZhdGUgVHJhbnNpdGlvbkVuZCBIZWxwZXJzXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICB2YXIgVFJBTlNJVElPTl9FTkQgPSAndHJhbnNpdGlvbmVuZCc7XG4gIHZhciBNQVhfVUlEID0gMTAwMDAwMDtcbiAgdmFyIE1JTExJU0VDT05EU19NVUxUSVBMSUVSID0gMTAwMDsgLy8gU2hvdXRvdXQgQW5ndXNDcm9sbCAoaHR0cHM6Ly9nb28uZ2wvcHh3UUdwKVxuXG4gIGZ1bmN0aW9uIHRvVHlwZShvYmopIHtcbiAgICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gXCJcIiArIG9iajtcbiAgICB9XG5cbiAgICByZXR1cm4ge30udG9TdHJpbmcuY2FsbChvYmopLm1hdGNoKC9cXHMoW2Etel0rKS9pKVsxXS50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U3BlY2lhbFRyYW5zaXRpb25FbmRFdmVudCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYmluZFR5cGU6IFRSQU5TSVRJT05fRU5ELFxuICAgICAgZGVsZWdhdGVUeXBlOiBUUkFOU0lUSU9OX0VORCxcbiAgICAgIGhhbmRsZTogZnVuY3Rpb24gaGFuZGxlKGV2ZW50KSB7XG4gICAgICAgIGlmICgkX19kZWZhdWx0WydkZWZhdWx0J10oZXZlbnQudGFyZ2V0KS5pcyh0aGlzKSkge1xuICAgICAgICAgIHJldHVybiBldmVudC5oYW5kbGVPYmouaGFuZGxlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHByZWZlci1yZXN0LXBhcmFtc1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhbnNpdGlvbkVuZEVtdWxhdG9yKGR1cmF0aW9uKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBjYWxsZWQgPSBmYWxzZTtcbiAgICAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcykub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgfSk7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIWNhbGxlZCkge1xuICAgICAgICBVdGlsLnRyaWdnZXJUcmFuc2l0aW9uRW5kKF90aGlzKTtcbiAgICAgIH1cbiAgICB9LCBkdXJhdGlvbik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRUcmFuc2l0aW9uRW5kU3VwcG9ydCgpIHtcbiAgICAkX19kZWZhdWx0WydkZWZhdWx0J10uZm4uZW11bGF0ZVRyYW5zaXRpb25FbmQgPSB0cmFuc2l0aW9uRW5kRW11bGF0b3I7XG4gICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddLmV2ZW50LnNwZWNpYWxbVXRpbC5UUkFOU0lUSU9OX0VORF0gPSBnZXRTcGVjaWFsVHJhbnNpdGlvbkVuZEV2ZW50KCk7XG4gIH1cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIFB1YmxpYyBVdGlsIEFwaVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuXG4gIHZhciBVdGlsID0ge1xuICAgIFRSQU5TSVRJT05fRU5EOiAnYnNUcmFuc2l0aW9uRW5kJyxcbiAgICBnZXRVSUQ6IGZ1bmN0aW9uIGdldFVJRChwcmVmaXgpIHtcbiAgICAgIGRvIHtcbiAgICAgICAgcHJlZml4ICs9IH5+KE1hdGgucmFuZG9tKCkgKiBNQVhfVUlEKTsgLy8gXCJ+flwiIGFjdHMgbGlrZSBhIGZhc3RlciBNYXRoLmZsb29yKCkgaGVyZVxuICAgICAgfSB3aGlsZSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJlZml4KSk7XG5cbiAgICAgIHJldHVybiBwcmVmaXg7XG4gICAgfSxcbiAgICBnZXRTZWxlY3RvckZyb21FbGVtZW50OiBmdW5jdGlvbiBnZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgIHZhciBzZWxlY3RvciA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpO1xuXG4gICAgICBpZiAoIXNlbGVjdG9yIHx8IHNlbGVjdG9yID09PSAnIycpIHtcbiAgICAgICAgdmFyIGhyZWZBdHRyID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgICAgc2VsZWN0b3IgPSBocmVmQXR0ciAmJiBocmVmQXR0ciAhPT0gJyMnID8gaHJlZkF0dHIudHJpbSgpIDogJyc7XG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSA/IHNlbGVjdG9yIDogbnVsbDtcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfSxcbiAgICBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudDogZnVuY3Rpb24gZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfSAvLyBHZXQgdHJhbnNpdGlvbi1kdXJhdGlvbiBvZiB0aGUgZWxlbWVudFxuXG5cbiAgICAgIHZhciB0cmFuc2l0aW9uRHVyYXRpb24gPSAkX19kZWZhdWx0WydkZWZhdWx0J10oZWxlbWVudCkuY3NzKCd0cmFuc2l0aW9uLWR1cmF0aW9uJyk7XG4gICAgICB2YXIgdHJhbnNpdGlvbkRlbGF5ID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddKGVsZW1lbnQpLmNzcygndHJhbnNpdGlvbi1kZWxheScpO1xuICAgICAgdmFyIGZsb2F0VHJhbnNpdGlvbkR1cmF0aW9uID0gcGFyc2VGbG9hdCh0cmFuc2l0aW9uRHVyYXRpb24pO1xuICAgICAgdmFyIGZsb2F0VHJhbnNpdGlvbkRlbGF5ID0gcGFyc2VGbG9hdCh0cmFuc2l0aW9uRGVsYXkpOyAvLyBSZXR1cm4gMCBpZiBlbGVtZW50IG9yIHRyYW5zaXRpb24gZHVyYXRpb24gaXMgbm90IGZvdW5kXG5cbiAgICAgIGlmICghZmxvYXRUcmFuc2l0aW9uRHVyYXRpb24gJiYgIWZsb2F0VHJhbnNpdGlvbkRlbGF5KSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfSAvLyBJZiBtdWx0aXBsZSBkdXJhdGlvbnMgYXJlIGRlZmluZWQsIHRha2UgdGhlIGZpcnN0XG5cblxuICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uID0gdHJhbnNpdGlvbkR1cmF0aW9uLnNwbGl0KCcsJylbMF07XG4gICAgICB0cmFuc2l0aW9uRGVsYXkgPSB0cmFuc2l0aW9uRGVsYXkuc3BsaXQoJywnKVswXTtcbiAgICAgIHJldHVybiAocGFyc2VGbG9hdCh0cmFuc2l0aW9uRHVyYXRpb24pICsgcGFyc2VGbG9hdCh0cmFuc2l0aW9uRGVsYXkpKSAqIE1JTExJU0VDT05EU19NVUxUSVBMSUVSO1xuICAgIH0sXG4gICAgcmVmbG93OiBmdW5jdGlvbiByZWZsb3coZWxlbWVudCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgIH0sXG4gICAgdHJpZ2dlclRyYW5zaXRpb25FbmQ6IGZ1bmN0aW9uIHRyaWdnZXJUcmFuc2l0aW9uRW5kKGVsZW1lbnQpIHtcbiAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShlbGVtZW50KS50cmlnZ2VyKFRSQU5TSVRJT05fRU5EKTtcbiAgICB9LFxuICAgIHN1cHBvcnRzVHJhbnNpdGlvbkVuZDogZnVuY3Rpb24gc3VwcG9ydHNUcmFuc2l0aW9uRW5kKCkge1xuICAgICAgcmV0dXJuIEJvb2xlYW4oVFJBTlNJVElPTl9FTkQpO1xuICAgIH0sXG4gICAgaXNFbGVtZW50OiBmdW5jdGlvbiBpc0VsZW1lbnQob2JqKSB7XG4gICAgICByZXR1cm4gKG9ialswXSB8fCBvYmopLm5vZGVUeXBlO1xuICAgIH0sXG4gICAgdHlwZUNoZWNrQ29uZmlnOiBmdW5jdGlvbiB0eXBlQ2hlY2tDb25maWcoY29tcG9uZW50TmFtZSwgY29uZmlnLCBjb25maWdUeXBlcykge1xuICAgICAgZm9yICh2YXIgcHJvcGVydHkgaW4gY29uZmlnVHlwZXMpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChjb25maWdUeXBlcywgcHJvcGVydHkpKSB7XG4gICAgICAgICAgdmFyIGV4cGVjdGVkVHlwZXMgPSBjb25maWdUeXBlc1twcm9wZXJ0eV07XG4gICAgICAgICAgdmFyIHZhbHVlID0gY29uZmlnW3Byb3BlcnR5XTtcbiAgICAgICAgICB2YXIgdmFsdWVUeXBlID0gdmFsdWUgJiYgVXRpbC5pc0VsZW1lbnQodmFsdWUpID8gJ2VsZW1lbnQnIDogdG9UeXBlKHZhbHVlKTtcblxuICAgICAgICAgIGlmICghbmV3IFJlZ0V4cChleHBlY3RlZFR5cGVzKS50ZXN0KHZhbHVlVHlwZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihjb21wb25lbnROYW1lLnRvVXBwZXJDYXNlKCkgKyBcIjogXCIgKyAoXCJPcHRpb24gXFxcIlwiICsgcHJvcGVydHkgKyBcIlxcXCIgcHJvdmlkZWQgdHlwZSBcXFwiXCIgKyB2YWx1ZVR5cGUgKyBcIlxcXCIgXCIpICsgKFwiYnV0IGV4cGVjdGVkIHR5cGUgXFxcIlwiICsgZXhwZWN0ZWRUeXBlcyArIFwiXFxcIi5cIikpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgZmluZFNoYWRvd1Jvb3Q6IGZ1bmN0aW9uIGZpbmRTaGFkb3dSb290KGVsZW1lbnQpIHtcbiAgICAgIGlmICghZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmF0dGFjaFNoYWRvdykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gLy8gQ2FuIGZpbmQgdGhlIHNoYWRvdyByb290IG90aGVyd2lzZSBpdCdsbCByZXR1cm4gdGhlIGRvY3VtZW50XG5cblxuICAgICAgaWYgKHR5cGVvZiBlbGVtZW50LmdldFJvb3ROb2RlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhciByb290ID0gZWxlbWVudC5nZXRSb290Tm9kZSgpO1xuICAgICAgICByZXR1cm4gcm9vdCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QgPyByb290IDogbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBTaGFkb3dSb290KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgfSAvLyB3aGVuIHdlIGRvbid0IGZpbmQgYSBzaGFkb3cgcm9vdFxuXG5cbiAgICAgIGlmICghZWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gVXRpbC5maW5kU2hhZG93Um9vdChlbGVtZW50LnBhcmVudE5vZGUpO1xuICAgIH0sXG4gICAgalF1ZXJ5RGV0ZWN0aW9uOiBmdW5jdGlvbiBqUXVlcnlEZXRlY3Rpb24oKSB7XG4gICAgICBpZiAodHlwZW9mICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9vdHN0cmFwXFwncyBKYXZhU2NyaXB0IHJlcXVpcmVzIGpRdWVyeS4galF1ZXJ5IG11c3QgYmUgaW5jbHVkZWQgYmVmb3JlIEJvb3RzdHJhcFxcJ3MgSmF2YVNjcmlwdC4nKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHZlcnNpb24gPSAkX19kZWZhdWx0WydkZWZhdWx0J10uZm4uanF1ZXJ5LnNwbGl0KCcgJylbMF0uc3BsaXQoJy4nKTtcbiAgICAgIHZhciBtaW5NYWpvciA9IDE7XG4gICAgICB2YXIgbHRNYWpvciA9IDI7XG4gICAgICB2YXIgbWluTWlub3IgPSA5O1xuICAgICAgdmFyIG1pblBhdGNoID0gMTtcbiAgICAgIHZhciBtYXhNYWpvciA9IDQ7XG5cbiAgICAgIGlmICh2ZXJzaW9uWzBdIDwgbHRNYWpvciAmJiB2ZXJzaW9uWzFdIDwgbWluTWlub3IgfHwgdmVyc2lvblswXSA9PT0gbWluTWFqb3IgJiYgdmVyc2lvblsxXSA9PT0gbWluTWlub3IgJiYgdmVyc2lvblsyXSA8IG1pblBhdGNoIHx8IHZlcnNpb25bMF0gPj0gbWF4TWFqb3IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdCb290c3RyYXBcXCdzIEphdmFTY3JpcHQgcmVxdWlyZXMgYXQgbGVhc3QgalF1ZXJ5IHYxLjkuMSBidXQgbGVzcyB0aGFuIHY0LjAuMCcpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgVXRpbC5qUXVlcnlEZXRlY3Rpb24oKTtcbiAgc2V0VHJhbnNpdGlvbkVuZFN1cHBvcnQoKTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIENvbnN0YW50c1xuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgdmFyIE5BTUUgPSAnYWxlcnQnO1xuICB2YXIgVkVSU0lPTiA9ICc0LjUuMyc7XG4gIHZhciBEQVRBX0tFWSA9ICdicy5hbGVydCc7XG4gIHZhciBFVkVOVF9LRVkgPSBcIi5cIiArIERBVEFfS0VZO1xuICB2YXIgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSc7XG4gIHZhciBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkX19kZWZhdWx0WydkZWZhdWx0J10uZm5bTkFNRV07XG4gIHZhciBTRUxFQ1RPUl9ESVNNSVNTID0gJ1tkYXRhLWRpc21pc3M9XCJhbGVydFwiXSc7XG4gIHZhciBFVkVOVF9DTE9TRSA9IFwiY2xvc2VcIiArIEVWRU5UX0tFWTtcbiAgdmFyIEVWRU5UX0NMT1NFRCA9IFwiY2xvc2VkXCIgKyBFVkVOVF9LRVk7XG4gIHZhciBFVkVOVF9DTElDS19EQVRBX0FQSSA9IFwiY2xpY2tcIiArIEVWRU5UX0tFWSArIERBVEFfQVBJX0tFWTtcbiAgdmFyIENMQVNTX05BTUVfQUxFUlQgPSAnYWxlcnQnO1xuICB2YXIgQ0xBU1NfTkFNRV9GQURFID0gJ2ZhZGUnO1xuICB2YXIgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnO1xuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIENsYXNzIERlZmluaXRpb25cbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIHZhciBBbGVydCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQWxlcnQoZWxlbWVudCkge1xuICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgfSAvLyBHZXR0ZXJzXG5cblxuICAgIHZhciBfcHJvdG8gPSBBbGVydC5wcm90b3R5cGU7XG5cbiAgICAvLyBQdWJsaWNcbiAgICBfcHJvdG8uY2xvc2UgPSBmdW5jdGlvbiBjbG9zZShlbGVtZW50KSB7XG4gICAgICB2YXIgcm9vdEVsZW1lbnQgPSB0aGlzLl9lbGVtZW50O1xuXG4gICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICByb290RWxlbWVudCA9IHRoaXMuX2dldFJvb3RFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICB2YXIgY3VzdG9tRXZlbnQgPSB0aGlzLl90cmlnZ2VyQ2xvc2VFdmVudChyb290RWxlbWVudCk7XG5cbiAgICAgIGlmIChjdXN0b21FdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3JlbW92ZUVsZW1lbnQocm9vdEVsZW1lbnQpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uZGlzcG9zZSA9IGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XG4gICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10ucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSk7XG4gICAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcbiAgICB9IC8vIFByaXZhdGVcbiAgICA7XG5cbiAgICBfcHJvdG8uX2dldFJvb3RFbGVtZW50ID0gZnVuY3Rpb24gX2dldFJvb3RFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgIHZhciBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtZW50KTtcbiAgICAgIHZhciBwYXJlbnQgPSBmYWxzZTtcblxuICAgICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICAgIHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXBhcmVudCkge1xuICAgICAgICBwYXJlbnQgPSAkX19kZWZhdWx0WydkZWZhdWx0J10oZWxlbWVudCkuY2xvc2VzdChcIi5cIiArIENMQVNTX05BTUVfQUxFUlQpWzBdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGFyZW50O1xuICAgIH07XG5cbiAgICBfcHJvdG8uX3RyaWdnZXJDbG9zZUV2ZW50ID0gZnVuY3Rpb24gX3RyaWdnZXJDbG9zZUV2ZW50KGVsZW1lbnQpIHtcbiAgICAgIHZhciBjbG9zZUV2ZW50ID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddLkV2ZW50KEVWRU5UX0NMT1NFKTtcbiAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShlbGVtZW50KS50cmlnZ2VyKGNsb3NlRXZlbnQpO1xuICAgICAgcmV0dXJuIGNsb3NlRXZlbnQ7XG4gICAgfTtcblxuICAgIF9wcm90by5fcmVtb3ZlRWxlbWVudCA9IGZ1bmN0aW9uIF9yZW1vdmVFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShlbGVtZW50KS5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX1NIT1cpO1xuXG4gICAgICBpZiAoISRfX2RlZmF1bHRbJ2RlZmF1bHQnXShlbGVtZW50KS5oYXNDbGFzcyhDTEFTU19OQU1FX0ZBREUpKSB7XG4gICAgICAgIHRoaXMuX2Rlc3Ryb3lFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQoZWxlbWVudCk7XG4gICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oZWxlbWVudCkub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICByZXR1cm4gX3RoaXMuX2Rlc3Ryb3lFbGVtZW50KGVsZW1lbnQsIGV2ZW50KTtcbiAgICAgIH0pLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25EdXJhdGlvbik7XG4gICAgfTtcblxuICAgIF9wcm90by5fZGVzdHJveUVsZW1lbnQgPSBmdW5jdGlvbiBfZGVzdHJveUVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKGVsZW1lbnQpLmRldGFjaCgpLnRyaWdnZXIoRVZFTlRfQ0xPU0VEKS5yZW1vdmUoKTtcbiAgICB9IC8vIFN0YXRpY1xuICAgIDtcblxuICAgIEFsZXJ0Ll9qUXVlcnlJbnRlcmZhY2UgPSBmdW5jdGlvbiBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciAkZWxlbWVudCA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKTtcbiAgICAgICAgdmFyIGRhdGEgPSAkZWxlbWVudC5kYXRhKERBVEFfS0VZKTtcblxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICBkYXRhID0gbmV3IEFsZXJ0KHRoaXMpO1xuICAgICAgICAgICRlbGVtZW50LmRhdGEoREFUQV9LRVksIGRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZyA9PT0gJ2Nsb3NlJykge1xuICAgICAgICAgIGRhdGFbY29uZmlnXSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIEFsZXJ0Ll9oYW5kbGVEaXNtaXNzID0gZnVuY3Rpb24gX2hhbmRsZURpc21pc3MoYWxlcnRJbnN0YW5jZSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgYWxlcnRJbnN0YW5jZS5jbG9zZSh0aGlzKTtcbiAgICAgIH07XG4gICAgfTtcblxuICAgIF9jcmVhdGVDbGFzcyhBbGVydCwgbnVsbCwgW3tcbiAgICAgIGtleTogXCJWRVJTSU9OXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIFZFUlNJT047XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEFsZXJ0O1xuICB9KCk7XG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG5cbiAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKGRvY3VtZW50KS5vbihFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfRElTTUlTUywgQWxlcnQuX2hhbmRsZURpc21pc3MobmV3IEFsZXJ0KCkpKTtcbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBqUXVlcnlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FXSA9IEFsZXJ0Ll9qUXVlcnlJbnRlcmZhY2U7XG4gICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IEFsZXJ0O1xuXG4gICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FXS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVDtcbiAgICByZXR1cm4gQWxlcnQuX2pRdWVyeUludGVyZmFjZTtcbiAgfTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIENvbnN0YW50c1xuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgdmFyIE5BTUUkMSA9ICdidXR0b24nO1xuICB2YXIgVkVSU0lPTiQxID0gJzQuNS4zJztcbiAgdmFyIERBVEFfS0VZJDEgPSAnYnMuYnV0dG9uJztcbiAgdmFyIEVWRU5UX0tFWSQxID0gXCIuXCIgKyBEQVRBX0tFWSQxO1xuICB2YXIgREFUQV9BUElfS0VZJDEgPSAnLmRhdGEtYXBpJztcbiAgdmFyIEpRVUVSWV9OT19DT05GTElDVCQxID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddLmZuW05BTUUkMV07XG4gIHZhciBDTEFTU19OQU1FX0FDVElWRSA9ICdhY3RpdmUnO1xuICB2YXIgQ0xBU1NfTkFNRV9CVVRUT04gPSAnYnRuJztcbiAgdmFyIENMQVNTX05BTUVfRk9DVVMgPSAnZm9jdXMnO1xuICB2YXIgU0VMRUNUT1JfREFUQV9UT0dHTEVfQ0FSUk9UID0gJ1tkYXRhLXRvZ2dsZV49XCJidXR0b25cIl0nO1xuICB2YXIgU0VMRUNUT1JfREFUQV9UT0dHTEVTID0gJ1tkYXRhLXRvZ2dsZT1cImJ1dHRvbnNcIl0nO1xuICB2YXIgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtdG9nZ2xlPVwiYnV0dG9uXCJdJztcbiAgdmFyIFNFTEVDVE9SX0RBVEFfVE9HR0xFU19CVVRUT05TID0gJ1tkYXRhLXRvZ2dsZT1cImJ1dHRvbnNcIl0gLmJ0bic7XG4gIHZhciBTRUxFQ1RPUl9JTlBVVCA9ICdpbnB1dDpub3QoW3R5cGU9XCJoaWRkZW5cIl0pJztcbiAgdmFyIFNFTEVDVE9SX0FDVElWRSA9ICcuYWN0aXZlJztcbiAgdmFyIFNFTEVDVE9SX0JVVFRPTiA9ICcuYnRuJztcbiAgdmFyIEVWRU5UX0NMSUNLX0RBVEFfQVBJJDEgPSBcImNsaWNrXCIgKyBFVkVOVF9LRVkkMSArIERBVEFfQVBJX0tFWSQxO1xuICB2YXIgRVZFTlRfRk9DVVNfQkxVUl9EQVRBX0FQSSA9IFwiZm9jdXNcIiArIEVWRU5UX0tFWSQxICsgREFUQV9BUElfS0VZJDEgKyBcIiBcIiArIChcImJsdXJcIiArIEVWRU5UX0tFWSQxICsgREFUQV9BUElfS0VZJDEpO1xuICB2YXIgRVZFTlRfTE9BRF9EQVRBX0FQSSA9IFwibG9hZFwiICsgRVZFTlRfS0VZJDEgKyBEQVRBX0FQSV9LRVkkMTtcbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBDbGFzcyBEZWZpbml0aW9uXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICB2YXIgQnV0dG9uID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBCdXR0b24oZWxlbWVudCkge1xuICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICB0aGlzLnNob3VsZEF2b2lkVHJpZ2dlckNoYW5nZSA9IGZhbHNlO1xuICAgIH0gLy8gR2V0dGVyc1xuXG5cbiAgICB2YXIgX3Byb3RvID0gQnV0dG9uLnByb3RvdHlwZTtcblxuICAgIC8vIFB1YmxpY1xuICAgIF9wcm90by50b2dnbGUgPSBmdW5jdGlvbiB0b2dnbGUoKSB7XG4gICAgICB2YXIgdHJpZ2dlckNoYW5nZUV2ZW50ID0gdHJ1ZTtcbiAgICAgIHZhciBhZGRBcmlhUHJlc3NlZCA9IHRydWU7XG4gICAgICB2YXIgcm9vdEVsZW1lbnQgPSAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcy5fZWxlbWVudCkuY2xvc2VzdChTRUxFQ1RPUl9EQVRBX1RPR0dMRVMpWzBdO1xuXG4gICAgICBpZiAocm9vdEVsZW1lbnQpIHtcbiAgICAgICAgdmFyIGlucHV0ID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SX0lOUFVUKTtcblxuICAgICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgICBpZiAoaW5wdXQudHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgICAgICAgaWYgKGlucHV0LmNoZWNrZWQgJiYgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9BQ1RJVkUpKSB7XG4gICAgICAgICAgICAgIHRyaWdnZXJDaGFuZ2VFdmVudCA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdmFyIGFjdGl2ZUVsZW1lbnQgPSByb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SX0FDVElWRSk7XG5cbiAgICAgICAgICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oYWN0aXZlRWxlbWVudCkucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9BQ1RJVkUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRyaWdnZXJDaGFuZ2VFdmVudCkge1xuICAgICAgICAgICAgLy8gaWYgaXQncyBub3QgYSByYWRpbyBidXR0b24gb3IgY2hlY2tib3ggZG9uJ3QgYWRkIGEgcG9pbnRsZXNzL2ludmFsaWQgY2hlY2tlZCBwcm9wZXJ0eSB0byB0aGUgaW5wdXRcbiAgICAgICAgICAgIGlmIChpbnB1dC50eXBlID09PSAnY2hlY2tib3gnIHx8IGlucHV0LnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgICAgICAgaW5wdXQuY2hlY2tlZCA9ICF0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0FDVElWRSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5zaG91bGRBdm9pZFRyaWdnZXJDaGFuZ2UpIHtcbiAgICAgICAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKGlucHV0KS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbnB1dC5mb2N1cygpO1xuICAgICAgICAgIGFkZEFyaWFQcmVzc2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCEodGhpcy5fZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykgfHwgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpKSB7XG4gICAgICAgIGlmIChhZGRBcmlhUHJlc3NlZCkge1xuICAgICAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLXByZXNzZWQnLCAhdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9BQ1RJVkUpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0cmlnZ2VyQ2hhbmdlRXZlbnQpIHtcbiAgICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcy5fZWxlbWVudCkudG9nZ2xlQ2xhc3MoQ0xBU1NfTkFNRV9BQ1RJVkUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5kaXNwb3NlID0gZnVuY3Rpb24gZGlzcG9zZSgpIHtcbiAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZJDEpO1xuICAgICAgdGhpcy5fZWxlbWVudCA9IG51bGw7XG4gICAgfSAvLyBTdGF0aWNcbiAgICA7XG5cbiAgICBCdXR0b24uX2pRdWVyeUludGVyZmFjZSA9IGZ1bmN0aW9uIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnLCBhdm9pZFRyaWdnZXJDaGFuZ2UpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgJGVsZW1lbnQgPSAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcyk7XG4gICAgICAgIHZhciBkYXRhID0gJGVsZW1lbnQuZGF0YShEQVRBX0tFWSQxKTtcblxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICBkYXRhID0gbmV3IEJ1dHRvbih0aGlzKTtcbiAgICAgICAgICAkZWxlbWVudC5kYXRhKERBVEFfS0VZJDEsIGRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YS5zaG91bGRBdm9pZFRyaWdnZXJDaGFuZ2UgPSBhdm9pZFRyaWdnZXJDaGFuZ2U7XG5cbiAgICAgICAgaWYgKGNvbmZpZyA9PT0gJ3RvZ2dsZScpIHtcbiAgICAgICAgICBkYXRhW2NvbmZpZ10oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF9jcmVhdGVDbGFzcyhCdXR0b24sIG51bGwsIFt7XG4gICAgICBrZXk6IFwiVkVSU0lPTlwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBWRVJTSU9OJDE7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEJ1dHRvbjtcbiAgfSgpO1xuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuXG4gICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShkb2N1bWVudCkub24oRVZFTlRfQ0xJQ0tfREFUQV9BUEkkMSwgU0VMRUNUT1JfREFUQV9UT0dHTEVfQ0FSUk9ULCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB2YXIgYnV0dG9uID0gZXZlbnQudGFyZ2V0O1xuICAgIHZhciBpbml0aWFsQnV0dG9uID0gYnV0dG9uO1xuXG4gICAgaWYgKCEkX19kZWZhdWx0WydkZWZhdWx0J10oYnV0dG9uKS5oYXNDbGFzcyhDTEFTU19OQU1FX0JVVFRPTikpIHtcbiAgICAgIGJ1dHRvbiA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShidXR0b24pLmNsb3Nlc3QoU0VMRUNUT1JfQlVUVE9OKVswXTtcbiAgICB9XG5cbiAgICBpZiAoIWJ1dHRvbiB8fCBidXR0b24uaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpIHx8IGJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIHdvcmsgYXJvdW5kIEZpcmVmb3ggYnVnICMxNTQwOTk1XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBpbnB1dEJ0biA9IGJ1dHRvbi5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SX0lOUFVUKTtcblxuICAgICAgaWYgKGlucHV0QnRuICYmIChpbnB1dEJ0bi5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykgfHwgaW5wdXRCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpKSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyB3b3JrIGFyb3VuZCBGaXJlZm94IGJ1ZyAjMTU0MDk5NVxuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGluaXRpYWxCdXR0b24udGFnTmFtZSA9PT0gJ0lOUFVUJyB8fCBidXR0b24udGFnTmFtZSAhPT0gJ0xBQkVMJykge1xuICAgICAgICBCdXR0b24uX2pRdWVyeUludGVyZmFjZS5jYWxsKCRfX2RlZmF1bHRbJ2RlZmF1bHQnXShidXR0b24pLCAndG9nZ2xlJywgaW5pdGlhbEJ1dHRvbi50YWdOYW1lID09PSAnSU5QVVQnKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pLm9uKEVWRU5UX0ZPQ1VTX0JMVVJfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFX0NBUlJPVCwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdmFyIGJ1dHRvbiA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShldmVudC50YXJnZXQpLmNsb3Nlc3QoU0VMRUNUT1JfQlVUVE9OKVswXTtcbiAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oYnV0dG9uKS50b2dnbGVDbGFzcyhDTEFTU19OQU1FX0ZPQ1VTLCAvXmZvY3VzKGluKT8kLy50ZXN0KGV2ZW50LnR5cGUpKTtcbiAgfSk7XG4gICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh3aW5kb3cpLm9uKEVWRU5UX0xPQURfREFUQV9BUEksIGZ1bmN0aW9uICgpIHtcbiAgICAvLyBlbnN1cmUgY29ycmVjdCBhY3RpdmUgY2xhc3MgaXMgc2V0IHRvIG1hdGNoIHRoZSBjb250cm9scycgYWN0dWFsIHZhbHVlcy9zdGF0ZXNcbiAgICAvLyBmaW5kIGFsbCBjaGVja2JveGVzL3JlYWRpbyBidXR0b25zIGluc2lkZSBkYXRhLXRvZ2dsZSBncm91cHNcbiAgICB2YXIgYnV0dG9ucyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTRUxFQ1RPUl9EQVRBX1RPR0dMRVNfQlVUVE9OUykpO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGJ1dHRvbnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHZhciBidXR0b24gPSBidXR0b25zW2ldO1xuICAgICAgdmFyIGlucHV0ID0gYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoU0VMRUNUT1JfSU5QVVQpO1xuXG4gICAgICBpZiAoaW5wdXQuY2hlY2tlZCB8fCBpbnB1dC5oYXNBdHRyaWJ1dGUoJ2NoZWNrZWQnKSkge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSk7XG4gICAgICB9XG4gICAgfSAvLyBmaW5kIGFsbCBidXR0b24gdG9nZ2xlc1xuXG5cbiAgICBidXR0b25zID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNFTEVDVE9SX0RBVEFfVE9HR0xFKSk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDAsIF9sZW4gPSBidXR0b25zLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICB2YXIgX2J1dHRvbiA9IGJ1dHRvbnNbX2ldO1xuXG4gICAgICBpZiAoX2J1dHRvbi5nZXRBdHRyaWJ1dGUoJ2FyaWEtcHJlc3NlZCcpID09PSAndHJ1ZScpIHtcbiAgICAgICAgX2J1dHRvbi5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF9idXR0b24uY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBqUXVlcnlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJDFdID0gQnV0dG9uLl9qUXVlcnlJbnRlcmZhY2U7XG4gICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJDFdLkNvbnN0cnVjdG9yID0gQnV0dG9uO1xuXG4gICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJDFdLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddLmZuW05BTUUkMV0gPSBKUVVFUllfTk9fQ09ORkxJQ1QkMTtcbiAgICByZXR1cm4gQnV0dG9uLl9qUXVlcnlJbnRlcmZhY2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBDb25zdGFudHNcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIHZhciBOQU1FJDIgPSAnY2Fyb3VzZWwnO1xuICB2YXIgVkVSU0lPTiQyID0gJzQuNS4zJztcbiAgdmFyIERBVEFfS0VZJDIgPSAnYnMuY2Fyb3VzZWwnO1xuICB2YXIgRVZFTlRfS0VZJDIgPSBcIi5cIiArIERBVEFfS0VZJDI7XG4gIHZhciBEQVRBX0FQSV9LRVkkMiA9ICcuZGF0YS1hcGknO1xuICB2YXIgSlFVRVJZX05PX0NPTkZMSUNUJDIgPSAkX19kZWZhdWx0WydkZWZhdWx0J10uZm5bTkFNRSQyXTtcbiAgdmFyIEFSUk9XX0xFRlRfS0VZQ09ERSA9IDM3OyAvLyBLZXlib2FyZEV2ZW50LndoaWNoIHZhbHVlIGZvciBsZWZ0IGFycm93IGtleVxuXG4gIHZhciBBUlJPV19SSUdIVF9LRVlDT0RFID0gMzk7IC8vIEtleWJvYXJkRXZlbnQud2hpY2ggdmFsdWUgZm9yIHJpZ2h0IGFycm93IGtleVxuXG4gIHZhciBUT1VDSEVWRU5UX0NPTVBBVF9XQUlUID0gNTAwOyAvLyBUaW1lIGZvciBtb3VzZSBjb21wYXQgZXZlbnRzIHRvIGZpcmUgYWZ0ZXIgdG91Y2hcblxuICB2YXIgU1dJUEVfVEhSRVNIT0xEID0gNDA7XG4gIHZhciBEZWZhdWx0ID0ge1xuICAgIGludGVydmFsOiA1MDAwLFxuICAgIGtleWJvYXJkOiB0cnVlLFxuICAgIHNsaWRlOiBmYWxzZSxcbiAgICBwYXVzZTogJ2hvdmVyJyxcbiAgICB3cmFwOiB0cnVlLFxuICAgIHRvdWNoOiB0cnVlXG4gIH07XG4gIHZhciBEZWZhdWx0VHlwZSA9IHtcbiAgICBpbnRlcnZhbDogJyhudW1iZXJ8Ym9vbGVhbiknLFxuICAgIGtleWJvYXJkOiAnYm9vbGVhbicsXG4gICAgc2xpZGU6ICcoYm9vbGVhbnxzdHJpbmcpJyxcbiAgICBwYXVzZTogJyhzdHJpbmd8Ym9vbGVhbiknLFxuICAgIHdyYXA6ICdib29sZWFuJyxcbiAgICB0b3VjaDogJ2Jvb2xlYW4nXG4gIH07XG4gIHZhciBESVJFQ1RJT05fTkVYVCA9ICduZXh0JztcbiAgdmFyIERJUkVDVElPTl9QUkVWID0gJ3ByZXYnO1xuICB2YXIgRElSRUNUSU9OX0xFRlQgPSAnbGVmdCc7XG4gIHZhciBESVJFQ1RJT05fUklHSFQgPSAncmlnaHQnO1xuICB2YXIgRVZFTlRfU0xJREUgPSBcInNsaWRlXCIgKyBFVkVOVF9LRVkkMjtcbiAgdmFyIEVWRU5UX1NMSUQgPSBcInNsaWRcIiArIEVWRU5UX0tFWSQyO1xuICB2YXIgRVZFTlRfS0VZRE9XTiA9IFwia2V5ZG93blwiICsgRVZFTlRfS0VZJDI7XG4gIHZhciBFVkVOVF9NT1VTRUVOVEVSID0gXCJtb3VzZWVudGVyXCIgKyBFVkVOVF9LRVkkMjtcbiAgdmFyIEVWRU5UX01PVVNFTEVBVkUgPSBcIm1vdXNlbGVhdmVcIiArIEVWRU5UX0tFWSQyO1xuICB2YXIgRVZFTlRfVE9VQ0hTVEFSVCA9IFwidG91Y2hzdGFydFwiICsgRVZFTlRfS0VZJDI7XG4gIHZhciBFVkVOVF9UT1VDSE1PVkUgPSBcInRvdWNobW92ZVwiICsgRVZFTlRfS0VZJDI7XG4gIHZhciBFVkVOVF9UT1VDSEVORCA9IFwidG91Y2hlbmRcIiArIEVWRU5UX0tFWSQyO1xuICB2YXIgRVZFTlRfUE9JTlRFUkRPV04gPSBcInBvaW50ZXJkb3duXCIgKyBFVkVOVF9LRVkkMjtcbiAgdmFyIEVWRU5UX1BPSU5URVJVUCA9IFwicG9pbnRlcnVwXCIgKyBFVkVOVF9LRVkkMjtcbiAgdmFyIEVWRU5UX0RSQUdfU1RBUlQgPSBcImRyYWdzdGFydFwiICsgRVZFTlRfS0VZJDI7XG4gIHZhciBFVkVOVF9MT0FEX0RBVEFfQVBJJDEgPSBcImxvYWRcIiArIEVWRU5UX0tFWSQyICsgREFUQV9BUElfS0VZJDI7XG4gIHZhciBFVkVOVF9DTElDS19EQVRBX0FQSSQyID0gXCJjbGlja1wiICsgRVZFTlRfS0VZJDIgKyBEQVRBX0FQSV9LRVkkMjtcbiAgdmFyIENMQVNTX05BTUVfQ0FST1VTRUwgPSAnY2Fyb3VzZWwnO1xuICB2YXIgQ0xBU1NfTkFNRV9BQ1RJVkUkMSA9ICdhY3RpdmUnO1xuICB2YXIgQ0xBU1NfTkFNRV9TTElERSA9ICdzbGlkZSc7XG4gIHZhciBDTEFTU19OQU1FX1JJR0hUID0gJ2Nhcm91c2VsLWl0ZW0tcmlnaHQnO1xuICB2YXIgQ0xBU1NfTkFNRV9MRUZUID0gJ2Nhcm91c2VsLWl0ZW0tbGVmdCc7XG4gIHZhciBDTEFTU19OQU1FX05FWFQgPSAnY2Fyb3VzZWwtaXRlbS1uZXh0JztcbiAgdmFyIENMQVNTX05BTUVfUFJFViA9ICdjYXJvdXNlbC1pdGVtLXByZXYnO1xuICB2YXIgQ0xBU1NfTkFNRV9QT0lOVEVSX0VWRU5UID0gJ3BvaW50ZXItZXZlbnQnO1xuICB2YXIgU0VMRUNUT1JfQUNUSVZFJDEgPSAnLmFjdGl2ZSc7XG4gIHZhciBTRUxFQ1RPUl9BQ1RJVkVfSVRFTSA9ICcuYWN0aXZlLmNhcm91c2VsLWl0ZW0nO1xuICB2YXIgU0VMRUNUT1JfSVRFTSA9ICcuY2Fyb3VzZWwtaXRlbSc7XG4gIHZhciBTRUxFQ1RPUl9JVEVNX0lNRyA9ICcuY2Fyb3VzZWwtaXRlbSBpbWcnO1xuICB2YXIgU0VMRUNUT1JfTkVYVF9QUkVWID0gJy5jYXJvdXNlbC1pdGVtLW5leHQsIC5jYXJvdXNlbC1pdGVtLXByZXYnO1xuICB2YXIgU0VMRUNUT1JfSU5ESUNBVE9SUyA9ICcuY2Fyb3VzZWwtaW5kaWNhdG9ycyc7XG4gIHZhciBTRUxFQ1RPUl9EQVRBX1NMSURFID0gJ1tkYXRhLXNsaWRlXSwgW2RhdGEtc2xpZGUtdG9dJztcbiAgdmFyIFNFTEVDVE9SX0RBVEFfUklERSA9ICdbZGF0YS1yaWRlPVwiY2Fyb3VzZWxcIl0nO1xuICB2YXIgUG9pbnRlclR5cGUgPSB7XG4gICAgVE9VQ0g6ICd0b3VjaCcsXG4gICAgUEVOOiAncGVuJ1xuICB9O1xuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIENsYXNzIERlZmluaXRpb25cbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIHZhciBDYXJvdXNlbCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ2Fyb3VzZWwoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgICB0aGlzLl9pdGVtcyA9IG51bGw7XG4gICAgICB0aGlzLl9pbnRlcnZhbCA9IG51bGw7XG4gICAgICB0aGlzLl9hY3RpdmVFbGVtZW50ID0gbnVsbDtcbiAgICAgIHRoaXMuX2lzUGF1c2VkID0gZmFsc2U7XG4gICAgICB0aGlzLl9pc1NsaWRpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMudG91Y2hUaW1lb3V0ID0gbnVsbDtcbiAgICAgIHRoaXMudG91Y2hTdGFydFggPSAwO1xuICAgICAgdGhpcy50b3VjaERlbHRhWCA9IDA7XG4gICAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKTtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoU0VMRUNUT1JfSU5ESUNBVE9SUyk7XG4gICAgICB0aGlzLl90b3VjaFN1cHBvcnRlZCA9ICdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCB8fCBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPiAwO1xuICAgICAgdGhpcy5fcG9pbnRlckV2ZW50ID0gQm9vbGVhbih3aW5kb3cuUG9pbnRlckV2ZW50IHx8IHdpbmRvdy5NU1BvaW50ZXJFdmVudCk7XG5cbiAgICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfSAvLyBHZXR0ZXJzXG5cblxuICAgIHZhciBfcHJvdG8gPSBDYXJvdXNlbC5wcm90b3R5cGU7XG5cbiAgICAvLyBQdWJsaWNcbiAgICBfcHJvdG8ubmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICBpZiAoIXRoaXMuX2lzU2xpZGluZykge1xuICAgICAgICB0aGlzLl9zbGlkZShESVJFQ1RJT05fTkVYVCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5uZXh0V2hlblZpc2libGUgPSBmdW5jdGlvbiBuZXh0V2hlblZpc2libGUoKSB7XG4gICAgICB2YXIgJGVsZW1lbnQgPSAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcy5fZWxlbWVudCk7IC8vIERvbid0IGNhbGwgbmV4dCB3aGVuIHRoZSBwYWdlIGlzbid0IHZpc2libGVcbiAgICAgIC8vIG9yIHRoZSBjYXJvdXNlbCBvciBpdHMgcGFyZW50IGlzbid0IHZpc2libGVcblxuICAgICAgaWYgKCFkb2N1bWVudC5oaWRkZW4gJiYgJGVsZW1lbnQuaXMoJzp2aXNpYmxlJykgJiYgJGVsZW1lbnQuY3NzKCd2aXNpYmlsaXR5JykgIT09ICdoaWRkZW4nKSB7XG4gICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8ucHJldiA9IGZ1bmN0aW9uIHByZXYoKSB7XG4gICAgICBpZiAoIXRoaXMuX2lzU2xpZGluZykge1xuICAgICAgICB0aGlzLl9zbGlkZShESVJFQ1RJT05fUFJFVik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5wYXVzZSA9IGZ1bmN0aW9uIHBhdXNlKGV2ZW50KSB7XG4gICAgICBpZiAoIWV2ZW50KSB7XG4gICAgICAgIHRoaXMuX2lzUGF1c2VkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihTRUxFQ1RPUl9ORVhUX1BSRVYpKSB7XG4gICAgICAgIFV0aWwudHJpZ2dlclRyYW5zaXRpb25FbmQodGhpcy5fZWxlbWVudCk7XG4gICAgICAgIHRoaXMuY3ljbGUodHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWwpO1xuICAgICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsO1xuICAgIH07XG5cbiAgICBfcHJvdG8uY3ljbGUgPSBmdW5jdGlvbiBjeWNsZShldmVudCkge1xuICAgICAgaWYgKCFldmVudCkge1xuICAgICAgICB0aGlzLl9pc1BhdXNlZCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5faW50ZXJ2YWwpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbCk7XG4gICAgICAgIHRoaXMuX2ludGVydmFsID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5pbnRlcnZhbCAmJiAhdGhpcy5faXNQYXVzZWQpIHtcbiAgICAgICAgdGhpcy5faW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlID8gdGhpcy5uZXh0V2hlblZpc2libGUgOiB0aGlzLm5leHQpLmJpbmQodGhpcyksIHRoaXMuX2NvbmZpZy5pbnRlcnZhbCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by50byA9IGZ1bmN0aW9uIHRvKGluZGV4KSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB0aGlzLl9hY3RpdmVFbGVtZW50ID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SX0FDVElWRV9JVEVNKTtcblxuICAgICAgdmFyIGFjdGl2ZUluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KHRoaXMuX2FjdGl2ZUVsZW1lbnQpO1xuXG4gICAgICBpZiAoaW5kZXggPiB0aGlzLl9pdGVtcy5sZW5ndGggLSAxIHx8IGluZGV4IDwgMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMuX2VsZW1lbnQpLm9uZShFVkVOVF9TTElELCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLnRvKGluZGV4KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGFjdGl2ZUluZGV4ID09PSBpbmRleCkge1xuICAgICAgICB0aGlzLnBhdXNlKCk7XG4gICAgICAgIHRoaXMuY3ljbGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgZGlyZWN0aW9uID0gaW5kZXggPiBhY3RpdmVJbmRleCA/IERJUkVDVElPTl9ORVhUIDogRElSRUNUSU9OX1BSRVY7XG5cbiAgICAgIHRoaXMuX3NsaWRlKGRpcmVjdGlvbiwgdGhpcy5faXRlbXNbaW5kZXhdKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLmRpc3Bvc2UgPSBmdW5jdGlvbiBkaXNwb3NlKCkge1xuICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMuX2VsZW1lbnQpLm9mZihFVkVOVF9LRVkkMik7XG4gICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10ucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSQyKTtcbiAgICAgIHRoaXMuX2l0ZW1zID0gbnVsbDtcbiAgICAgIHRoaXMuX2NvbmZpZyA9IG51bGw7XG4gICAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcbiAgICAgIHRoaXMuX2ludGVydmFsID0gbnVsbDtcbiAgICAgIHRoaXMuX2lzUGF1c2VkID0gbnVsbDtcbiAgICAgIHRoaXMuX2lzU2xpZGluZyA9IG51bGw7XG4gICAgICB0aGlzLl9hY3RpdmVFbGVtZW50ID0gbnVsbDtcbiAgICAgIHRoaXMuX2luZGljYXRvcnNFbGVtZW50ID0gbnVsbDtcbiAgICB9IC8vIFByaXZhdGVcbiAgICA7XG5cbiAgICBfcHJvdG8uX2dldENvbmZpZyA9IGZ1bmN0aW9uIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgICBjb25maWcgPSBfZXh0ZW5kcyh7fSwgRGVmYXVsdCwgY29uZmlnKTtcbiAgICAgIFV0aWwudHlwZUNoZWNrQ29uZmlnKE5BTUUkMiwgY29uZmlnLCBEZWZhdWx0VHlwZSk7XG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2hhbmRsZVN3aXBlID0gZnVuY3Rpb24gX2hhbmRsZVN3aXBlKCkge1xuICAgICAgdmFyIGFic0RlbHRheCA9IE1hdGguYWJzKHRoaXMudG91Y2hEZWx0YVgpO1xuXG4gICAgICBpZiAoYWJzRGVsdGF4IDw9IFNXSVBFX1RIUkVTSE9MRCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBkaXJlY3Rpb24gPSBhYnNEZWx0YXggLyB0aGlzLnRvdWNoRGVsdGFYO1xuICAgICAgdGhpcy50b3VjaERlbHRhWCA9IDA7IC8vIHN3aXBlIGxlZnRcblxuICAgICAgaWYgKGRpcmVjdGlvbiA+IDApIHtcbiAgICAgICAgdGhpcy5wcmV2KCk7XG4gICAgICB9IC8vIHN3aXBlIHJpZ2h0XG5cblxuICAgICAgaWYgKGRpcmVjdGlvbiA8IDApIHtcbiAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5fYWRkRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbiBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5rZXlib2FyZCkge1xuICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcy5fZWxlbWVudCkub24oRVZFTlRfS0VZRE9XTiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMi5fa2V5ZG93bihldmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLnBhdXNlID09PSAnaG92ZXInKSB7XG4gICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzLl9lbGVtZW50KS5vbihFVkVOVF9NT1VTRUVOVEVSLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLnBhdXNlKGV2ZW50KTtcbiAgICAgICAgfSkub24oRVZFTlRfTU9VU0VMRUFWRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMi5jeWNsZShldmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLnRvdWNoKSB7XG4gICAgICAgIHRoaXMuX2FkZFRvdWNoRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLl9hZGRUb3VjaEV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24gX2FkZFRvdWNoRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgaWYgKCF0aGlzLl90b3VjaFN1cHBvcnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBzdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KGV2ZW50KSB7XG4gICAgICAgIGlmIChfdGhpczMuX3BvaW50ZXJFdmVudCAmJiBQb2ludGVyVHlwZVtldmVudC5vcmlnaW5hbEV2ZW50LnBvaW50ZXJUeXBlLnRvVXBwZXJDYXNlKCldKSB7XG4gICAgICAgICAgX3RoaXMzLnRvdWNoU3RhcnRYID0gZXZlbnQub3JpZ2luYWxFdmVudC5jbGllbnRYO1xuICAgICAgICB9IGVsc2UgaWYgKCFfdGhpczMuX3BvaW50ZXJFdmVudCkge1xuICAgICAgICAgIF90aGlzMy50b3VjaFN0YXJ0WCA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB2YXIgbW92ZSA9IGZ1bmN0aW9uIG1vdmUoZXZlbnQpIHtcbiAgICAgICAgLy8gZW5zdXJlIHN3aXBpbmcgd2l0aCBvbmUgdG91Y2ggYW5kIG5vdCBwaW5jaGluZ1xuICAgICAgICBpZiAoZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzICYmIGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgX3RoaXMzLnRvdWNoRGVsdGFYID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpczMudG91Y2hEZWx0YVggPSBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCAtIF90aGlzMy50b3VjaFN0YXJ0WDtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdmFyIGVuZCA9IGZ1bmN0aW9uIGVuZChldmVudCkge1xuICAgICAgICBpZiAoX3RoaXMzLl9wb2ludGVyRXZlbnQgJiYgUG9pbnRlclR5cGVbZXZlbnQub3JpZ2luYWxFdmVudC5wb2ludGVyVHlwZS50b1VwcGVyQ2FzZSgpXSkge1xuICAgICAgICAgIF90aGlzMy50b3VjaERlbHRhWCA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQuY2xpZW50WCAtIF90aGlzMy50b3VjaFN0YXJ0WDtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzMy5faGFuZGxlU3dpcGUoKTtcblxuICAgICAgICBpZiAoX3RoaXMzLl9jb25maWcucGF1c2UgPT09ICdob3ZlcicpIHtcbiAgICAgICAgICAvLyBJZiBpdCdzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2UsIG1vdXNlZW50ZXIvbGVhdmUgYXJlIGZpcmVkIGFzXG4gICAgICAgICAgLy8gcGFydCBvZiB0aGUgbW91c2UgY29tcGF0aWJpbGl0eSBldmVudHMgb24gZmlyc3QgdGFwIC0gdGhlIGNhcm91c2VsXG4gICAgICAgICAgLy8gd291bGQgc3RvcCBjeWNsaW5nIHVudGlsIHVzZXIgdGFwcGVkIG91dCBvZiBpdDtcbiAgICAgICAgICAvLyBoZXJlLCB3ZSBsaXN0ZW4gZm9yIHRvdWNoZW5kLCBleHBsaWNpdGx5IHBhdXNlIHRoZSBjYXJvdXNlbFxuICAgICAgICAgIC8vIChhcyBpZiBpdCdzIHRoZSBzZWNvbmQgdGltZSB3ZSB0YXAgb24gaXQsIG1vdXNlZW50ZXIgY29tcGF0IGV2ZW50XG4gICAgICAgICAgLy8gaXMgTk9UIGZpcmVkKSBhbmQgYWZ0ZXIgYSB0aW1lb3V0ICh0byBhbGxvdyBmb3IgbW91c2UgY29tcGF0aWJpbGl0eVxuICAgICAgICAgIC8vIGV2ZW50cyB0byBmaXJlKSB3ZSBleHBsaWNpdGx5IHJlc3RhcnQgY3ljbGluZ1xuICAgICAgICAgIF90aGlzMy5wYXVzZSgpO1xuXG4gICAgICAgICAgaWYgKF90aGlzMy50b3VjaFRpbWVvdXQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChfdGhpczMudG91Y2hUaW1lb3V0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBfdGhpczMudG91Y2hUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczMuY3ljbGUoZXZlbnQpO1xuICAgICAgICAgIH0sIFRPVUNIRVZFTlRfQ09NUEFUX1dBSVQgKyBfdGhpczMuX2NvbmZpZy5pbnRlcnZhbCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU0VMRUNUT1JfSVRFTV9JTUcpKS5vbihFVkVOVF9EUkFHX1NUQVJULCBmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICh0aGlzLl9wb2ludGVyRXZlbnQpIHtcbiAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMuX2VsZW1lbnQpLm9uKEVWRU5UX1BPSU5URVJET1dOLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICByZXR1cm4gc3RhcnQoZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMuX2VsZW1lbnQpLm9uKEVWRU5UX1BPSU5URVJVUCwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgcmV0dXJuIGVuZChldmVudCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1BPSU5URVJfRVZFTlQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMuX2VsZW1lbnQpLm9uKEVWRU5UX1RPVUNIU1RBUlQsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIHJldHVybiBzdGFydChldmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcy5fZWxlbWVudCkub24oRVZFTlRfVE9VQ0hNT1ZFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICByZXR1cm4gbW92ZShldmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcy5fZWxlbWVudCkub24oRVZFTlRfVE9VQ0hFTkQsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIHJldHVybiBlbmQoZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLl9rZXlkb3duID0gZnVuY3Rpb24gX2tleWRvd24oZXZlbnQpIHtcbiAgICAgIGlmICgvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHN3aXRjaCAoZXZlbnQud2hpY2gpIHtcbiAgICAgICAgY2FzZSBBUlJPV19MRUZUX0tFWUNPREU6XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLnByZXYoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIEFSUk9XX1JJR0hUX0tFWUNPREU6XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLl9nZXRJdGVtSW5kZXggPSBmdW5jdGlvbiBfZ2V0SXRlbUluZGV4KGVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX2l0ZW1zID0gZWxlbWVudCAmJiBlbGVtZW50LnBhcmVudE5vZGUgPyBbXS5zbGljZS5jYWxsKGVsZW1lbnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKFNFTEVDVE9SX0lURU0pKSA6IFtdO1xuICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zLmluZGV4T2YoZWxlbWVudCk7XG4gICAgfTtcblxuICAgIF9wcm90by5fZ2V0SXRlbUJ5RGlyZWN0aW9uID0gZnVuY3Rpb24gX2dldEl0ZW1CeURpcmVjdGlvbihkaXJlY3Rpb24sIGFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHZhciBpc05leHREaXJlY3Rpb24gPSBkaXJlY3Rpb24gPT09IERJUkVDVElPTl9ORVhUO1xuICAgICAgdmFyIGlzUHJldkRpcmVjdGlvbiA9IGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OX1BSRVY7XG5cbiAgICAgIHZhciBhY3RpdmVJbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleChhY3RpdmVFbGVtZW50KTtcblxuICAgICAgdmFyIGxhc3RJdGVtSW5kZXggPSB0aGlzLl9pdGVtcy5sZW5ndGggLSAxO1xuICAgICAgdmFyIGlzR29pbmdUb1dyYXAgPSBpc1ByZXZEaXJlY3Rpb24gJiYgYWN0aXZlSW5kZXggPT09IDAgfHwgaXNOZXh0RGlyZWN0aW9uICYmIGFjdGl2ZUluZGV4ID09PSBsYXN0SXRlbUluZGV4O1xuXG4gICAgICBpZiAoaXNHb2luZ1RvV3JhcCAmJiAhdGhpcy5fY29uZmlnLndyYXApIHtcbiAgICAgICAgcmV0dXJuIGFjdGl2ZUVsZW1lbnQ7XG4gICAgICB9XG5cbiAgICAgIHZhciBkZWx0YSA9IGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OX1BSRVYgPyAtMSA6IDE7XG4gICAgICB2YXIgaXRlbUluZGV4ID0gKGFjdGl2ZUluZGV4ICsgZGVsdGEpICUgdGhpcy5faXRlbXMubGVuZ3RoO1xuICAgICAgcmV0dXJuIGl0ZW1JbmRleCA9PT0gLTEgPyB0aGlzLl9pdGVtc1t0aGlzLl9pdGVtcy5sZW5ndGggLSAxXSA6IHRoaXMuX2l0ZW1zW2l0ZW1JbmRleF07XG4gICAgfTtcblxuICAgIF9wcm90by5fdHJpZ2dlclNsaWRlRXZlbnQgPSBmdW5jdGlvbiBfdHJpZ2dlclNsaWRlRXZlbnQocmVsYXRlZFRhcmdldCwgZXZlbnREaXJlY3Rpb25OYW1lKSB7XG4gICAgICB2YXIgdGFyZ2V0SW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgocmVsYXRlZFRhcmdldCk7XG5cbiAgICAgIHZhciBmcm9tSW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgodGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SX0FDVElWRV9JVEVNKSk7XG5cbiAgICAgIHZhciBzbGlkZUV2ZW50ID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddLkV2ZW50KEVWRU5UX1NMSURFLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHJlbGF0ZWRUYXJnZXQsXG4gICAgICAgIGRpcmVjdGlvbjogZXZlbnREaXJlY3Rpb25OYW1lLFxuICAgICAgICBmcm9tOiBmcm9tSW5kZXgsXG4gICAgICAgIHRvOiB0YXJnZXRJbmRleFxuICAgICAgfSk7XG4gICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcy5fZWxlbWVudCkudHJpZ2dlcihzbGlkZUV2ZW50KTtcbiAgICAgIHJldHVybiBzbGlkZUV2ZW50O1xuICAgIH07XG5cbiAgICBfcHJvdG8uX3NldEFjdGl2ZUluZGljYXRvckVsZW1lbnQgPSBmdW5jdGlvbiBfc2V0QWN0aXZlSW5kaWNhdG9yRWxlbWVudChlbGVtZW50KSB7XG4gICAgICBpZiAodGhpcy5faW5kaWNhdG9yc0VsZW1lbnQpIHtcbiAgICAgICAgdmFyIGluZGljYXRvcnMgPSBbXS5zbGljZS5jYWxsKHRoaXMuX2luZGljYXRvcnNFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU0VMRUNUT1JfQUNUSVZFJDEpKTtcbiAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKGluZGljYXRvcnMpLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfQUNUSVZFJDEpO1xuXG4gICAgICAgIHZhciBuZXh0SW5kaWNhdG9yID0gdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQuY2hpbGRyZW5bdGhpcy5fZ2V0SXRlbUluZGV4KGVsZW1lbnQpXTtcblxuICAgICAgICBpZiAobmV4dEluZGljYXRvcikge1xuICAgICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShuZXh0SW5kaWNhdG9yKS5hZGRDbGFzcyhDTEFTU19OQU1FX0FDVElWRSQxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8uX3NsaWRlID0gZnVuY3Rpb24gX3NsaWRlKGRpcmVjdGlvbiwgZWxlbWVudCkge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIHZhciBhY3RpdmVFbGVtZW50ID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SX0FDVElWRV9JVEVNKTtcblxuICAgICAgdmFyIGFjdGl2ZUVsZW1lbnRJbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleChhY3RpdmVFbGVtZW50KTtcblxuICAgICAgdmFyIG5leHRFbGVtZW50ID0gZWxlbWVudCB8fCBhY3RpdmVFbGVtZW50ICYmIHRoaXMuX2dldEl0ZW1CeURpcmVjdGlvbihkaXJlY3Rpb24sIGFjdGl2ZUVsZW1lbnQpO1xuXG4gICAgICB2YXIgbmV4dEVsZW1lbnRJbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleChuZXh0RWxlbWVudCk7XG5cbiAgICAgIHZhciBpc0N5Y2xpbmcgPSBCb29sZWFuKHRoaXMuX2ludGVydmFsKTtcbiAgICAgIHZhciBkaXJlY3Rpb25hbENsYXNzTmFtZTtcbiAgICAgIHZhciBvcmRlckNsYXNzTmFtZTtcbiAgICAgIHZhciBldmVudERpcmVjdGlvbk5hbWU7XG5cbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IERJUkVDVElPTl9ORVhUKSB7XG4gICAgICAgIGRpcmVjdGlvbmFsQ2xhc3NOYW1lID0gQ0xBU1NfTkFNRV9MRUZUO1xuICAgICAgICBvcmRlckNsYXNzTmFtZSA9IENMQVNTX05BTUVfTkVYVDtcbiAgICAgICAgZXZlbnREaXJlY3Rpb25OYW1lID0gRElSRUNUSU9OX0xFRlQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkaXJlY3Rpb25hbENsYXNzTmFtZSA9IENMQVNTX05BTUVfUklHSFQ7XG4gICAgICAgIG9yZGVyQ2xhc3NOYW1lID0gQ0xBU1NfTkFNRV9QUkVWO1xuICAgICAgICBldmVudERpcmVjdGlvbk5hbWUgPSBESVJFQ1RJT05fUklHSFQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZXh0RWxlbWVudCAmJiAkX19kZWZhdWx0WydkZWZhdWx0J10obmV4dEVsZW1lbnQpLmhhc0NsYXNzKENMQVNTX05BTUVfQUNUSVZFJDEpKSB7XG4gICAgICAgIHRoaXMuX2lzU2xpZGluZyA9IGZhbHNlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBzbGlkZUV2ZW50ID0gdGhpcy5fdHJpZ2dlclNsaWRlRXZlbnQobmV4dEVsZW1lbnQsIGV2ZW50RGlyZWN0aW9uTmFtZSk7XG5cbiAgICAgIGlmIChzbGlkZUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCFhY3RpdmVFbGVtZW50IHx8ICFuZXh0RWxlbWVudCkge1xuICAgICAgICAvLyBTb21lIHdlaXJkbmVzcyBpcyBoYXBwZW5pbmcsIHNvIHdlIGJhaWxcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9pc1NsaWRpbmcgPSB0cnVlO1xuXG4gICAgICBpZiAoaXNDeWNsaW5nKSB7XG4gICAgICAgIHRoaXMucGF1c2UoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fc2V0QWN0aXZlSW5kaWNhdG9yRWxlbWVudChuZXh0RWxlbWVudCk7XG5cbiAgICAgIHZhciBzbGlkRXZlbnQgPSAkX19kZWZhdWx0WydkZWZhdWx0J10uRXZlbnQoRVZFTlRfU0xJRCwge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiBuZXh0RWxlbWVudCxcbiAgICAgICAgZGlyZWN0aW9uOiBldmVudERpcmVjdGlvbk5hbWUsXG4gICAgICAgIGZyb206IGFjdGl2ZUVsZW1lbnRJbmRleCxcbiAgICAgICAgdG86IG5leHRFbGVtZW50SW5kZXhcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENMQVNTX05BTUVfU0xJREUpKSB7XG4gICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShuZXh0RWxlbWVudCkuYWRkQ2xhc3Mob3JkZXJDbGFzc05hbWUpO1xuICAgICAgICBVdGlsLnJlZmxvdyhuZXh0RWxlbWVudCk7XG4gICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShhY3RpdmVFbGVtZW50KS5hZGRDbGFzcyhkaXJlY3Rpb25hbENsYXNzTmFtZSk7XG4gICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShuZXh0RWxlbWVudCkuYWRkQ2xhc3MoZGlyZWN0aW9uYWxDbGFzc05hbWUpO1xuICAgICAgICB2YXIgbmV4dEVsZW1lbnRJbnRlcnZhbCA9IHBhcnNlSW50KG5leHRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pbnRlcnZhbCcpLCAxMCk7XG5cbiAgICAgICAgaWYgKG5leHRFbGVtZW50SW50ZXJ2YWwpIHtcbiAgICAgICAgICB0aGlzLl9jb25maWcuZGVmYXVsdEludGVydmFsID0gdGhpcy5fY29uZmlnLmRlZmF1bHRJbnRlcnZhbCB8fCB0aGlzLl9jb25maWcuaW50ZXJ2YWw7XG4gICAgICAgICAgdGhpcy5fY29uZmlnLmludGVydmFsID0gbmV4dEVsZW1lbnRJbnRlcnZhbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9jb25maWcuaW50ZXJ2YWwgPSB0aGlzLl9jb25maWcuZGVmYXVsdEludGVydmFsIHx8IHRoaXMuX2NvbmZpZy5pbnRlcnZhbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0cmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KGFjdGl2ZUVsZW1lbnQpO1xuICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oYWN0aXZlRWxlbWVudCkub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10obmV4dEVsZW1lbnQpLnJlbW92ZUNsYXNzKGRpcmVjdGlvbmFsQ2xhc3NOYW1lICsgXCIgXCIgKyBvcmRlckNsYXNzTmFtZSkuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9BQ1RJVkUkMSk7XG4gICAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKGFjdGl2ZUVsZW1lbnQpLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfQUNUSVZFJDEgKyBcIiBcIiArIG9yZGVyQ2xhc3NOYW1lICsgXCIgXCIgKyBkaXJlY3Rpb25hbENsYXNzTmFtZSk7XG4gICAgICAgICAgX3RoaXM0Ll9pc1NsaWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAkX19kZWZhdWx0WydkZWZhdWx0J10oX3RoaXM0Ll9lbGVtZW50KS50cmlnZ2VyKHNsaWRFdmVudCk7XG4gICAgICAgICAgfSwgMCk7XG4gICAgICAgIH0pLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25EdXJhdGlvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oYWN0aXZlRWxlbWVudCkucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9BQ1RJVkUkMSk7XG4gICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShuZXh0RWxlbWVudCkuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9BQ1RJVkUkMSk7XG4gICAgICAgIHRoaXMuX2lzU2xpZGluZyA9IGZhbHNlO1xuICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcy5fZWxlbWVudCkudHJpZ2dlcihzbGlkRXZlbnQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNDeWNsaW5nKSB7XG4gICAgICAgIHRoaXMuY3ljbGUoKTtcbiAgICAgIH1cbiAgICB9IC8vIFN0YXRpY1xuICAgIDtcblxuICAgIENhcm91c2VsLl9qUXVlcnlJbnRlcmZhY2UgPSBmdW5jdGlvbiBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkYXRhID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMpLmRhdGEoREFUQV9LRVkkMik7XG5cbiAgICAgICAgdmFyIF9jb25maWcgPSBfZXh0ZW5kcyh7fSwgRGVmYXVsdCwgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMpLmRhdGEoKSk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgX2NvbmZpZyA9IF9leHRlbmRzKHt9LCBfY29uZmlnLCBjb25maWcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGFjdGlvbiA9IHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnID8gY29uZmlnIDogX2NvbmZpZy5zbGlkZTtcblxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICBkYXRhID0gbmV3IENhcm91c2VsKHRoaXMsIF9jb25maWcpO1xuICAgICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKS5kYXRhKERBVEFfS0VZJDIsIGRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgZGF0YS50byhjb25maWcpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBhY3Rpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2FjdGlvbl0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTm8gbWV0aG9kIG5hbWVkIFxcXCJcIiArIGFjdGlvbiArIFwiXFxcIlwiKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkYXRhW2FjdGlvbl0oKTtcbiAgICAgICAgfSBlbHNlIGlmIChfY29uZmlnLmludGVydmFsICYmIF9jb25maWcucmlkZSkge1xuICAgICAgICAgIGRhdGEucGF1c2UoKTtcbiAgICAgICAgICBkYXRhLmN5Y2xlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBDYXJvdXNlbC5fZGF0YUFwaUNsaWNrSGFuZGxlciA9IGZ1bmN0aW9uIF9kYXRhQXBpQ2xpY2tIYW5kbGVyKGV2ZW50KSB7XG4gICAgICB2YXIgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQodGhpcyk7XG5cbiAgICAgIGlmICghc2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgdGFyZ2V0ID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddKHNlbGVjdG9yKVswXTtcblxuICAgICAgaWYgKCF0YXJnZXQgfHwgISRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0YXJnZXQpLmhhc0NsYXNzKENMQVNTX05BTUVfQ0FST1VTRUwpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbmZpZyA9IF9leHRlbmRzKHt9LCAkX19kZWZhdWx0WydkZWZhdWx0J10odGFyZ2V0KS5kYXRhKCksICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKS5kYXRhKCkpO1xuXG4gICAgICB2YXIgc2xpZGVJbmRleCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLXNsaWRlLXRvJyk7XG5cbiAgICAgIGlmIChzbGlkZUluZGV4KSB7XG4gICAgICAgIGNvbmZpZy5pbnRlcnZhbCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBDYXJvdXNlbC5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRhcmdldCksIGNvbmZpZyk7XG5cbiAgICAgIGlmIChzbGlkZUluZGV4KSB7XG4gICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0YXJnZXQpLmRhdGEoREFUQV9LRVkkMikudG8oc2xpZGVJbmRleCk7XG4gICAgICB9XG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfTtcblxuICAgIF9jcmVhdGVDbGFzcyhDYXJvdXNlbCwgbnVsbCwgW3tcbiAgICAgIGtleTogXCJWRVJTSU9OXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIFZFUlNJT04kMjtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiRGVmYXVsdFwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBEZWZhdWx0O1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBDYXJvdXNlbDtcbiAgfSgpO1xuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuXG4gICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShkb2N1bWVudCkub24oRVZFTlRfQ0xJQ0tfREFUQV9BUEkkMiwgU0VMRUNUT1JfREFUQV9TTElERSwgQ2Fyb3VzZWwuX2RhdGFBcGlDbGlja0hhbmRsZXIpO1xuICAkX19kZWZhdWx0WydkZWZhdWx0J10od2luZG93KS5vbihFVkVOVF9MT0FEX0RBVEFfQVBJJDEsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY2Fyb3VzZWxzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNFTEVDVE9SX0RBVEFfUklERSkpO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNhcm91c2Vscy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgdmFyICRjYXJvdXNlbCA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShjYXJvdXNlbHNbaV0pO1xuXG4gICAgICBDYXJvdXNlbC5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJGNhcm91c2VsLCAkY2Fyb3VzZWwuZGF0YSgpKTtcbiAgICB9XG4gIH0pO1xuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIGpRdWVyeVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgJF9fZGVmYXVsdFsnZGVmYXVsdCddLmZuW05BTUUkMl0gPSBDYXJvdXNlbC5falF1ZXJ5SW50ZXJmYWNlO1xuICAkX19kZWZhdWx0WydkZWZhdWx0J10uZm5bTkFNRSQyXS5Db25zdHJ1Y3RvciA9IENhcm91c2VsO1xuXG4gICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJDJdLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddLmZuW05BTUUkMl0gPSBKUVVFUllfTk9fQ09ORkxJQ1QkMjtcbiAgICByZXR1cm4gQ2Fyb3VzZWwuX2pRdWVyeUludGVyZmFjZTtcbiAgfTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIENvbnN0YW50c1xuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgdmFyIE5BTUUkMyA9ICdjb2xsYXBzZSc7XG4gIHZhciBWRVJTSU9OJDMgPSAnNC41LjMnO1xuICB2YXIgREFUQV9LRVkkMyA9ICdicy5jb2xsYXBzZSc7XG4gIHZhciBFVkVOVF9LRVkkMyA9IFwiLlwiICsgREFUQV9LRVkkMztcbiAgdmFyIERBVEFfQVBJX0tFWSQzID0gJy5kYXRhLWFwaSc7XG4gIHZhciBKUVVFUllfTk9fQ09ORkxJQ1QkMyA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJDNdO1xuICB2YXIgRGVmYXVsdCQxID0ge1xuICAgIHRvZ2dsZTogdHJ1ZSxcbiAgICBwYXJlbnQ6ICcnXG4gIH07XG4gIHZhciBEZWZhdWx0VHlwZSQxID0ge1xuICAgIHRvZ2dsZTogJ2Jvb2xlYW4nLFxuICAgIHBhcmVudDogJyhzdHJpbmd8ZWxlbWVudCknXG4gIH07XG4gIHZhciBFVkVOVF9TSE9XID0gXCJzaG93XCIgKyBFVkVOVF9LRVkkMztcbiAgdmFyIEVWRU5UX1NIT1dOID0gXCJzaG93blwiICsgRVZFTlRfS0VZJDM7XG4gIHZhciBFVkVOVF9ISURFID0gXCJoaWRlXCIgKyBFVkVOVF9LRVkkMztcbiAgdmFyIEVWRU5UX0hJRERFTiA9IFwiaGlkZGVuXCIgKyBFVkVOVF9LRVkkMztcbiAgdmFyIEVWRU5UX0NMSUNLX0RBVEFfQVBJJDMgPSBcImNsaWNrXCIgKyBFVkVOVF9LRVkkMyArIERBVEFfQVBJX0tFWSQzO1xuICB2YXIgQ0xBU1NfTkFNRV9TSE9XJDEgPSAnc2hvdyc7XG4gIHZhciBDTEFTU19OQU1FX0NPTExBUFNFID0gJ2NvbGxhcHNlJztcbiAgdmFyIENMQVNTX05BTUVfQ09MTEFQU0lORyA9ICdjb2xsYXBzaW5nJztcbiAgdmFyIENMQVNTX05BTUVfQ09MTEFQU0VEID0gJ2NvbGxhcHNlZCc7XG4gIHZhciBESU1FTlNJT05fV0lEVEggPSAnd2lkdGgnO1xuICB2YXIgRElNRU5TSU9OX0hFSUdIVCA9ICdoZWlnaHQnO1xuICB2YXIgU0VMRUNUT1JfQUNUSVZFUyA9ICcuc2hvdywgLmNvbGxhcHNpbmcnO1xuICB2YXIgU0VMRUNUT1JfREFUQV9UT0dHTEUkMSA9ICdbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXSc7XG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgdmFyIENvbGxhcHNlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDb2xsYXBzZShlbGVtZW50LCBjb25maWcpIHtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKTtcbiAgICAgIHRoaXMuX3RyaWdnZXJBcnJheSA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXRvZ2dsZT1cXFwiY29sbGFwc2VcXFwiXVtocmVmPVxcXCIjXCIgKyBlbGVtZW50LmlkICsgXCJcXFwiXSxcIiArIChcIltkYXRhLXRvZ2dsZT1cXFwiY29sbGFwc2VcXFwiXVtkYXRhLXRhcmdldD1cXFwiI1wiICsgZWxlbWVudC5pZCArIFwiXFxcIl1cIikpKTtcbiAgICAgIHZhciB0b2dnbGVMaXN0ID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNFTEVDVE9SX0RBVEFfVE9HR0xFJDEpKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHRvZ2dsZUxpc3QubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdmFyIGVsZW0gPSB0b2dnbGVMaXN0W2ldO1xuICAgICAgICB2YXIgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbSk7XG4gICAgICAgIHZhciBmaWx0ZXJFbGVtZW50ID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSkuZmlsdGVyKGZ1bmN0aW9uIChmb3VuZEVsZW0pIHtcbiAgICAgICAgICByZXR1cm4gZm91bmRFbGVtID09PSBlbGVtZW50O1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoc2VsZWN0b3IgIT09IG51bGwgJiYgZmlsdGVyRWxlbWVudC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdGhpcy5fc2VsZWN0b3IgPSBzZWxlY3RvcjtcblxuICAgICAgICAgIHRoaXMuX3RyaWdnZXJBcnJheS5wdXNoKGVsZW0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3BhcmVudCA9IHRoaXMuX2NvbmZpZy5wYXJlbnQgPyB0aGlzLl9nZXRQYXJlbnQoKSA6IG51bGw7XG5cbiAgICAgIGlmICghdGhpcy5fY29uZmlnLnBhcmVudCkge1xuICAgICAgICB0aGlzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3ModGhpcy5fZWxlbWVudCwgdGhpcy5fdHJpZ2dlckFycmF5KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy50b2dnbGUpIHtcbiAgICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICAgIH1cbiAgICB9IC8vIEdldHRlcnNcblxuXG4gICAgdmFyIF9wcm90byA9IENvbGxhcHNlLnByb3RvdHlwZTtcblxuICAgIC8vIFB1YmxpY1xuICAgIF9wcm90by50b2dnbGUgPSBmdW5jdGlvbiB0b2dnbGUoKSB7XG4gICAgICBpZiAoJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENMQVNTX05BTUVfU0hPVyQxKSkge1xuICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8uc2hvdyA9IGZ1bmN0aW9uIHNob3coKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBpZiAodGhpcy5faXNUcmFuc2l0aW9uaW5nIHx8ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDTEFTU19OQU1FX1NIT1ckMSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgYWN0aXZlcztcbiAgICAgIHZhciBhY3RpdmVzRGF0YTtcblxuICAgICAgaWYgKHRoaXMuX3BhcmVudCkge1xuICAgICAgICBhY3RpdmVzID0gW10uc2xpY2UuY2FsbCh0aGlzLl9wYXJlbnQucXVlcnlTZWxlY3RvckFsbChTRUxFQ1RPUl9BQ1RJVkVTKSkuZmlsdGVyKGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBfdGhpcy5fY29uZmlnLnBhcmVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1wYXJlbnQnKSA9PT0gX3RoaXMuX2NvbmZpZy5wYXJlbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfQ09MTEFQU0UpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoYWN0aXZlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBhY3RpdmVzID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoYWN0aXZlcykge1xuICAgICAgICBhY3RpdmVzRGF0YSA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShhY3RpdmVzKS5ub3QodGhpcy5fc2VsZWN0b3IpLmRhdGEoREFUQV9LRVkkMyk7XG5cbiAgICAgICAgaWYgKGFjdGl2ZXNEYXRhICYmIGFjdGl2ZXNEYXRhLl9pc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHN0YXJ0RXZlbnQgPSAkX19kZWZhdWx0WydkZWZhdWx0J10uRXZlbnQoRVZFTlRfU0hPVyk7XG4gICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcy5fZWxlbWVudCkudHJpZ2dlcihzdGFydEV2ZW50KTtcblxuICAgICAgaWYgKHN0YXJ0RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoYWN0aXZlcykge1xuICAgICAgICBDb2xsYXBzZS5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJF9fZGVmYXVsdFsnZGVmYXVsdCddKGFjdGl2ZXMpLm5vdCh0aGlzLl9zZWxlY3RvciksICdoaWRlJyk7XG5cbiAgICAgICAgaWYgKCFhY3RpdmVzRGF0YSkge1xuICAgICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShhY3RpdmVzKS5kYXRhKERBVEFfS0VZJDMsIG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBkaW1lbnNpb24gPSB0aGlzLl9nZXREaW1lbnNpb24oKTtcblxuICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMuX2VsZW1lbnQpLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfQ09MTEFQU0UpLmFkZENsYXNzKENMQVNTX05BTUVfQ09MTEFQU0lORyk7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSAwO1xuXG4gICAgICBpZiAodGhpcy5fdHJpZ2dlckFycmF5Lmxlbmd0aCkge1xuICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcy5fdHJpZ2dlckFycmF5KS5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX0NPTExBUFNFRCkuYXR0cignYXJpYS1leHBhbmRlZCcsIHRydWUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFRyYW5zaXRpb25pbmcodHJ1ZSk7XG5cbiAgICAgIHZhciBjb21wbGV0ZSA9IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oX3RoaXMuX2VsZW1lbnQpLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfQ09MTEFQU0lORykuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9DT0xMQVBTRSArIFwiIFwiICsgQ0xBU1NfTkFNRV9TSE9XJDEpO1xuICAgICAgICBfdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gJyc7XG5cbiAgICAgICAgX3RoaXMuc2V0VHJhbnNpdGlvbmluZyhmYWxzZSk7XG5cbiAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKF90aGlzLl9lbGVtZW50KS50cmlnZ2VyKEVWRU5UX1NIT1dOKTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBjYXBpdGFsaXplZERpbWVuc2lvbiA9IGRpbWVuc2lvblswXS50b1VwcGVyQ2FzZSgpICsgZGltZW5zaW9uLnNsaWNlKDEpO1xuICAgICAgdmFyIHNjcm9sbFNpemUgPSBcInNjcm9sbFwiICsgY2FwaXRhbGl6ZWREaW1lbnNpb247XG4gICAgICB2YXIgdHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KTtcbiAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzLl9lbGVtZW50KS5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgY29tcGxldGUpLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25EdXJhdGlvbik7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSB0aGlzLl9lbGVtZW50W3Njcm9sbFNpemVdICsgXCJweFwiO1xuICAgIH07XG5cbiAgICBfcHJvdG8uaGlkZSA9IGZ1bmN0aW9uIGhpZGUoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgaWYgKHRoaXMuX2lzVHJhbnNpdGlvbmluZyB8fCAhJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENMQVNTX05BTUVfU0hPVyQxKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBzdGFydEV2ZW50ID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddLkV2ZW50KEVWRU5UX0hJREUpO1xuICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc3RhcnRFdmVudCk7XG5cbiAgICAgIGlmIChzdGFydEV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGRpbWVuc2lvbiA9IHRoaXMuX2dldERpbWVuc2lvbigpO1xuXG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSB0aGlzLl9lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpW2RpbWVuc2lvbl0gKyBcInB4XCI7XG4gICAgICBVdGlsLnJlZmxvdyh0aGlzLl9lbGVtZW50KTtcbiAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzLl9lbGVtZW50KS5hZGRDbGFzcyhDTEFTU19OQU1FX0NPTExBUFNJTkcpLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfQ09MTEFQU0UgKyBcIiBcIiArIENMQVNTX05BTUVfU0hPVyQxKTtcbiAgICAgIHZhciB0cmlnZ2VyQXJyYXlMZW5ndGggPSB0aGlzLl90cmlnZ2VyQXJyYXkubGVuZ3RoO1xuXG4gICAgICBpZiAodHJpZ2dlckFycmF5TGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRyaWdnZXJBcnJheUxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIHRyaWdnZXIgPSB0aGlzLl90cmlnZ2VyQXJyYXlbaV07XG4gICAgICAgICAgdmFyIHNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KHRyaWdnZXIpO1xuXG4gICAgICAgICAgaWYgKHNlbGVjdG9yICE9PSBudWxsKSB7XG4gICAgICAgICAgICB2YXIgJGVsZW0gPSAkX19kZWZhdWx0WydkZWZhdWx0J10oW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSkpO1xuXG4gICAgICAgICAgICBpZiAoISRlbGVtLmhhc0NsYXNzKENMQVNTX05BTUVfU0hPVyQxKSkge1xuICAgICAgICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10odHJpZ2dlcikuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9DT0xMQVBTRUQpLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0VHJhbnNpdGlvbmluZyh0cnVlKTtcblxuICAgICAgdmFyIGNvbXBsZXRlID0gZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICAgIF90aGlzMi5zZXRUcmFuc2l0aW9uaW5nKGZhbHNlKTtcblxuICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oX3RoaXMyLl9lbGVtZW50KS5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX0NPTExBUFNJTkcpLmFkZENsYXNzKENMQVNTX05BTUVfQ09MTEFQU0UpLnRyaWdnZXIoRVZFTlRfSElEREVOKTtcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9ICcnO1xuICAgICAgdmFyIHRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudCk7XG4gICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcy5fZWxlbWVudCkub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKS5lbXVsYXRlVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRHVyYXRpb24pO1xuICAgIH07XG5cbiAgICBfcHJvdG8uc2V0VHJhbnNpdGlvbmluZyA9IGZ1bmN0aW9uIHNldFRyYW5zaXRpb25pbmcoaXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBpc1RyYW5zaXRpb25pbmc7XG4gICAgfTtcblxuICAgIF9wcm90by5kaXNwb3NlID0gZnVuY3Rpb24gZGlzcG9zZSgpIHtcbiAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZJDMpO1xuICAgICAgdGhpcy5fY29uZmlnID0gbnVsbDtcbiAgICAgIHRoaXMuX3BhcmVudCA9IG51bGw7XG4gICAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcbiAgICAgIHRoaXMuX3RyaWdnZXJBcnJheSA9IG51bGw7XG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBudWxsO1xuICAgIH0gLy8gUHJpdmF0ZVxuICAgIDtcblxuICAgIF9wcm90by5fZ2V0Q29uZmlnID0gZnVuY3Rpb24gX2dldENvbmZpZyhjb25maWcpIHtcbiAgICAgIGNvbmZpZyA9IF9leHRlbmRzKHt9LCBEZWZhdWx0JDEsIGNvbmZpZyk7XG4gICAgICBjb25maWcudG9nZ2xlID0gQm9vbGVhbihjb25maWcudG9nZ2xlKTsgLy8gQ29lcmNlIHN0cmluZyB2YWx1ZXNcblxuICAgICAgVXRpbC50eXBlQ2hlY2tDb25maWcoTkFNRSQzLCBjb25maWcsIERlZmF1bHRUeXBlJDEpO1xuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9nZXREaW1lbnNpb24gPSBmdW5jdGlvbiBfZ2V0RGltZW5zaW9uKCkge1xuICAgICAgdmFyIGhhc1dpZHRoID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKERJTUVOU0lPTl9XSURUSCk7XG4gICAgICByZXR1cm4gaGFzV2lkdGggPyBESU1FTlNJT05fV0lEVEggOiBESU1FTlNJT05fSEVJR0hUO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2dldFBhcmVudCA9IGZ1bmN0aW9uIF9nZXRQYXJlbnQoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdmFyIHBhcmVudDtcblxuICAgICAgaWYgKFV0aWwuaXNFbGVtZW50KHRoaXMuX2NvbmZpZy5wYXJlbnQpKSB7XG4gICAgICAgIHBhcmVudCA9IHRoaXMuX2NvbmZpZy5wYXJlbnQ7IC8vIEl0J3MgYSBqUXVlcnkgb2JqZWN0XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9jb25maWcucGFyZW50LmpxdWVyeSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBwYXJlbnQgPSB0aGlzLl9jb25maWcucGFyZW50WzBdO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuX2NvbmZpZy5wYXJlbnQpO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2VsZWN0b3IgPSBcIltkYXRhLXRvZ2dsZT1cXFwiY29sbGFwc2VcXFwiXVtkYXRhLXBhcmVudD1cXFwiXCIgKyB0aGlzLl9jb25maWcucGFyZW50ICsgXCJcXFwiXVwiO1xuICAgICAgdmFyIGNoaWxkcmVuID0gW10uc2xpY2UuY2FsbChwYXJlbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xuICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKGNoaWxkcmVuKS5lYWNoKGZ1bmN0aW9uIChpLCBlbGVtZW50KSB7XG4gICAgICAgIF90aGlzMy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKENvbGxhcHNlLl9nZXRUYXJnZXRGcm9tRWxlbWVudChlbGVtZW50KSwgW2VsZW1lbnRdKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MgPSBmdW5jdGlvbiBfYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKGVsZW1lbnQsIHRyaWdnZXJBcnJheSkge1xuICAgICAgdmFyIGlzT3BlbiA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShlbGVtZW50KS5oYXNDbGFzcyhDTEFTU19OQU1FX1NIT1ckMSk7XG5cbiAgICAgIGlmICh0cmlnZ2VyQXJyYXkubGVuZ3RoKSB7XG4gICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0cmlnZ2VyQXJyYXkpLnRvZ2dsZUNsYXNzKENMQVNTX05BTUVfQ09MTEFQU0VELCAhaXNPcGVuKS5hdHRyKCdhcmlhLWV4cGFuZGVkJywgaXNPcGVuKTtcbiAgICAgIH1cbiAgICB9IC8vIFN0YXRpY1xuICAgIDtcblxuICAgIENvbGxhcHNlLl9nZXRUYXJnZXRGcm9tRWxlbWVudCA9IGZ1bmN0aW9uIF9nZXRUYXJnZXRGcm9tRWxlbWVudChlbGVtZW50KSB7XG4gICAgICB2YXIgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbWVudCk7XG4gICAgICByZXR1cm4gc2VsZWN0b3IgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSA6IG51bGw7XG4gICAgfTtcblxuICAgIENvbGxhcHNlLl9qUXVlcnlJbnRlcmZhY2UgPSBmdW5jdGlvbiBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciAkZWxlbWVudCA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKTtcbiAgICAgICAgdmFyIGRhdGEgPSAkZWxlbWVudC5kYXRhKERBVEFfS0VZJDMpO1xuXG4gICAgICAgIHZhciBfY29uZmlnID0gX2V4dGVuZHMoe30sIERlZmF1bHQkMSwgJGVsZW1lbnQuZGF0YSgpLCB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWcgPyBjb25maWcgOiB7fSk7XG5cbiAgICAgICAgaWYgKCFkYXRhICYmIF9jb25maWcudG9nZ2xlICYmIHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnICYmIC9zaG93fGhpZGUvLnRlc3QoY29uZmlnKSkge1xuICAgICAgICAgIF9jb25maWcudG9nZ2xlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICBkYXRhID0gbmV3IENvbGxhcHNlKHRoaXMsIF9jb25maWcpO1xuICAgICAgICAgICRlbGVtZW50LmRhdGEoREFUQV9LRVkkMywgZGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJObyBtZXRob2QgbmFtZWQgXFxcIlwiICsgY29uZmlnICsgXCJcXFwiXCIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRhdGFbY29uZmlnXSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX2NyZWF0ZUNsYXNzKENvbGxhcHNlLCBudWxsLCBbe1xuICAgICAga2V5OiBcIlZFUlNJT05cIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gVkVSU0lPTiQzO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJEZWZhdWx0XCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIERlZmF1bHQkMTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQ29sbGFwc2U7XG4gIH0oKTtcbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cblxuICAkX19kZWZhdWx0WydkZWZhdWx0J10oZG9jdW1lbnQpLm9uKEVWRU5UX0NMSUNLX0RBVEFfQVBJJDMsIFNFTEVDVE9SX0RBVEFfVE9HR0xFJDEsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIC8vIHByZXZlbnREZWZhdWx0IG9ubHkgZm9yIDxhPiBlbGVtZW50cyAod2hpY2ggY2hhbmdlIHRoZSBVUkwpIG5vdCBpbnNpZGUgdGhlIGNvbGxhcHNpYmxlIGVsZW1lbnRcbiAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC50YWdOYW1lID09PSAnQScpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgdmFyICR0cmlnZ2VyID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMpO1xuICAgIHZhciBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCh0aGlzKTtcbiAgICB2YXIgc2VsZWN0b3JzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XG4gICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHNlbGVjdG9ycykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJHRhcmdldCA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKTtcbiAgICAgIHZhciBkYXRhID0gJHRhcmdldC5kYXRhKERBVEFfS0VZJDMpO1xuICAgICAgdmFyIGNvbmZpZyA9IGRhdGEgPyAndG9nZ2xlJyA6ICR0cmlnZ2VyLmRhdGEoKTtcblxuICAgICAgQ29sbGFwc2UuX2pRdWVyeUludGVyZmFjZS5jYWxsKCR0YXJnZXQsIGNvbmZpZyk7XG4gICAgfSk7XG4gIH0pO1xuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIGpRdWVyeVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgJF9fZGVmYXVsdFsnZGVmYXVsdCddLmZuW05BTUUkM10gPSBDb2xsYXBzZS5falF1ZXJ5SW50ZXJmYWNlO1xuICAkX19kZWZhdWx0WydkZWZhdWx0J10uZm5bTkFNRSQzXS5Db25zdHJ1Y3RvciA9IENvbGxhcHNlO1xuXG4gICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJDNdLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddLmZuW05BTUUkM10gPSBKUVVFUllfTk9fQ09ORkxJQ1QkMztcbiAgICByZXR1cm4gQ29sbGFwc2UuX2pRdWVyeUludGVyZmFjZTtcbiAgfTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIENvbnN0YW50c1xuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgdmFyIE5BTUUkNCA9ICdkcm9wZG93bic7XG4gIHZhciBWRVJTSU9OJDQgPSAnNC41LjMnO1xuICB2YXIgREFUQV9LRVkkNCA9ICdicy5kcm9wZG93bic7XG4gIHZhciBFVkVOVF9LRVkkNCA9IFwiLlwiICsgREFUQV9LRVkkNDtcbiAgdmFyIERBVEFfQVBJX0tFWSQ0ID0gJy5kYXRhLWFwaSc7XG4gIHZhciBKUVVFUllfTk9fQ09ORkxJQ1QkNCA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJDRdO1xuICB2YXIgRVNDQVBFX0tFWUNPREUgPSAyNzsgLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3IgRXNjYXBlIChFc2MpIGtleVxuXG4gIHZhciBTUEFDRV9LRVlDT0RFID0gMzI7IC8vIEtleWJvYXJkRXZlbnQud2hpY2ggdmFsdWUgZm9yIHNwYWNlIGtleVxuXG4gIHZhciBUQUJfS0VZQ09ERSA9IDk7IC8vIEtleWJvYXJkRXZlbnQud2hpY2ggdmFsdWUgZm9yIHRhYiBrZXlcblxuICB2YXIgQVJST1dfVVBfS0VZQ09ERSA9IDM4OyAvLyBLZXlib2FyZEV2ZW50LndoaWNoIHZhbHVlIGZvciB1cCBhcnJvdyBrZXlcblxuICB2YXIgQVJST1dfRE9XTl9LRVlDT0RFID0gNDA7IC8vIEtleWJvYXJkRXZlbnQud2hpY2ggdmFsdWUgZm9yIGRvd24gYXJyb3cga2V5XG5cbiAgdmFyIFJJR0hUX01PVVNFX0JVVFRPTl9XSElDSCA9IDM7IC8vIE1vdXNlRXZlbnQud2hpY2ggdmFsdWUgZm9yIHRoZSByaWdodCBidXR0b24gKGFzc3VtaW5nIGEgcmlnaHQtaGFuZGVkIG1vdXNlKVxuXG4gIHZhciBSRUdFWFBfS0VZRE9XTiA9IG5ldyBSZWdFeHAoQVJST1dfVVBfS0VZQ09ERSArIFwifFwiICsgQVJST1dfRE9XTl9LRVlDT0RFICsgXCJ8XCIgKyBFU0NBUEVfS0VZQ09ERSk7XG4gIHZhciBFVkVOVF9ISURFJDEgPSBcImhpZGVcIiArIEVWRU5UX0tFWSQ0O1xuICB2YXIgRVZFTlRfSElEREVOJDEgPSBcImhpZGRlblwiICsgRVZFTlRfS0VZJDQ7XG4gIHZhciBFVkVOVF9TSE9XJDEgPSBcInNob3dcIiArIEVWRU5UX0tFWSQ0O1xuICB2YXIgRVZFTlRfU0hPV04kMSA9IFwic2hvd25cIiArIEVWRU5UX0tFWSQ0O1xuICB2YXIgRVZFTlRfQ0xJQ0sgPSBcImNsaWNrXCIgKyBFVkVOVF9LRVkkNDtcbiAgdmFyIEVWRU5UX0NMSUNLX0RBVEFfQVBJJDQgPSBcImNsaWNrXCIgKyBFVkVOVF9LRVkkNCArIERBVEFfQVBJX0tFWSQ0O1xuICB2YXIgRVZFTlRfS0VZRE9XTl9EQVRBX0FQSSA9IFwia2V5ZG93blwiICsgRVZFTlRfS0VZJDQgKyBEQVRBX0FQSV9LRVkkNDtcbiAgdmFyIEVWRU5UX0tFWVVQX0RBVEFfQVBJID0gXCJrZXl1cFwiICsgRVZFTlRfS0VZJDQgKyBEQVRBX0FQSV9LRVkkNDtcbiAgdmFyIENMQVNTX05BTUVfRElTQUJMRUQgPSAnZGlzYWJsZWQnO1xuICB2YXIgQ0xBU1NfTkFNRV9TSE9XJDIgPSAnc2hvdyc7XG4gIHZhciBDTEFTU19OQU1FX0RST1BVUCA9ICdkcm9wdXAnO1xuICB2YXIgQ0xBU1NfTkFNRV9EUk9QUklHSFQgPSAnZHJvcHJpZ2h0JztcbiAgdmFyIENMQVNTX05BTUVfRFJPUExFRlQgPSAnZHJvcGxlZnQnO1xuICB2YXIgQ0xBU1NfTkFNRV9NRU5VUklHSFQgPSAnZHJvcGRvd24tbWVudS1yaWdodCc7XG4gIHZhciBDTEFTU19OQU1FX1BPU0lUSU9OX1NUQVRJQyA9ICdwb3NpdGlvbi1zdGF0aWMnO1xuICB2YXIgU0VMRUNUT1JfREFUQV9UT0dHTEUkMiA9ICdbZGF0YS10b2dnbGU9XCJkcm9wZG93blwiXSc7XG4gIHZhciBTRUxFQ1RPUl9GT1JNX0NISUxEID0gJy5kcm9wZG93biBmb3JtJztcbiAgdmFyIFNFTEVDVE9SX01FTlUgPSAnLmRyb3Bkb3duLW1lbnUnO1xuICB2YXIgU0VMRUNUT1JfTkFWQkFSX05BViA9ICcubmF2YmFyLW5hdic7XG4gIHZhciBTRUxFQ1RPUl9WSVNJQkxFX0lURU1TID0gJy5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpJztcbiAgdmFyIFBMQUNFTUVOVF9UT1AgPSAndG9wLXN0YXJ0JztcbiAgdmFyIFBMQUNFTUVOVF9UT1BFTkQgPSAndG9wLWVuZCc7XG4gIHZhciBQTEFDRU1FTlRfQk9UVE9NID0gJ2JvdHRvbS1zdGFydCc7XG4gIHZhciBQTEFDRU1FTlRfQk9UVE9NRU5EID0gJ2JvdHRvbS1lbmQnO1xuICB2YXIgUExBQ0VNRU5UX1JJR0hUID0gJ3JpZ2h0LXN0YXJ0JztcbiAgdmFyIFBMQUNFTUVOVF9MRUZUID0gJ2xlZnQtc3RhcnQnO1xuICB2YXIgRGVmYXVsdCQyID0ge1xuICAgIG9mZnNldDogMCxcbiAgICBmbGlwOiB0cnVlLFxuICAgIGJvdW5kYXJ5OiAnc2Nyb2xsUGFyZW50JyxcbiAgICByZWZlcmVuY2U6ICd0b2dnbGUnLFxuICAgIGRpc3BsYXk6ICdkeW5hbWljJyxcbiAgICBwb3BwZXJDb25maWc6IG51bGxcbiAgfTtcbiAgdmFyIERlZmF1bHRUeXBlJDIgPSB7XG4gICAgb2Zmc2V0OiAnKG51bWJlcnxzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgICBmbGlwOiAnYm9vbGVhbicsXG4gICAgYm91bmRhcnk6ICcoc3RyaW5nfGVsZW1lbnQpJyxcbiAgICByZWZlcmVuY2U6ICcoc3RyaW5nfGVsZW1lbnQpJyxcbiAgICBkaXNwbGF5OiAnc3RyaW5nJyxcbiAgICBwb3BwZXJDb25maWc6ICcobnVsbHxvYmplY3QpJ1xuICB9O1xuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIENsYXNzIERlZmluaXRpb25cbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIHZhciBEcm9wZG93biA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRHJvcGRvd24oZWxlbWVudCwgY29uZmlnKSB7XG4gICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgIHRoaXMuX3BvcHBlciA9IG51bGw7XG4gICAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKTtcbiAgICAgIHRoaXMuX21lbnUgPSB0aGlzLl9nZXRNZW51RWxlbWVudCgpO1xuICAgICAgdGhpcy5faW5OYXZiYXIgPSB0aGlzLl9kZXRlY3ROYXZiYXIoKTtcblxuICAgICAgdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9IC8vIEdldHRlcnNcblxuXG4gICAgdmFyIF9wcm90byA9IERyb3Bkb3duLnByb3RvdHlwZTtcblxuICAgIC8vIFB1YmxpY1xuICAgIF9wcm90by50b2dnbGUgPSBmdW5jdGlvbiB0b2dnbGUoKSB7XG4gICAgICBpZiAodGhpcy5fZWxlbWVudC5kaXNhYmxlZCB8fCAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9ESVNBQkxFRCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgaXNBY3RpdmUgPSAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcy5fbWVudSkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9TSE9XJDIpO1xuXG4gICAgICBEcm9wZG93bi5fY2xlYXJNZW51cygpO1xuXG4gICAgICBpZiAoaXNBY3RpdmUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNob3codHJ1ZSk7XG4gICAgfTtcblxuICAgIF9wcm90by5zaG93ID0gZnVuY3Rpb24gc2hvdyh1c2VQb3BwZXIpIHtcbiAgICAgIGlmICh1c2VQb3BwZXIgPT09IHZvaWQgMCkge1xuICAgICAgICB1c2VQb3BwZXIgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2VsZW1lbnQuZGlzYWJsZWQgfHwgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENMQVNTX05BTUVfRElTQUJMRUQpIHx8ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzLl9tZW51KS5oYXNDbGFzcyhDTEFTU19OQU1FX1NIT1ckMikpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVsYXRlZFRhcmdldCA9IHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgICAgfTtcbiAgICAgIHZhciBzaG93RXZlbnQgPSAkX19kZWZhdWx0WydkZWZhdWx0J10uRXZlbnQoRVZFTlRfU0hPVyQxLCByZWxhdGVkVGFyZ2V0KTtcblxuICAgICAgdmFyIHBhcmVudCA9IERyb3Bkb3duLl9nZXRQYXJlbnRGcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KTtcblxuICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHBhcmVudCkudHJpZ2dlcihzaG93RXZlbnQpO1xuXG4gICAgICBpZiAoc2hvd0V2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gRGlzYWJsZSB0b3RhbGx5IFBvcHBlci5qcyBmb3IgRHJvcGRvd24gaW4gTmF2YmFyXG5cblxuICAgICAgaWYgKCF0aGlzLl9pbk5hdmJhciAmJiB1c2VQb3BwZXIpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENoZWNrIGZvciBQb3BwZXIgZGVwZW5kZW5jeVxuICAgICAgICAgKiBQb3BwZXIgLSBodHRwczovL3BvcHBlci5qcy5vcmdcbiAgICAgICAgICovXG4gICAgICAgIGlmICh0eXBlb2YgUG9wcGVyX19kZWZhdWx0WydkZWZhdWx0J10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9vdHN0cmFwXFwncyBkcm9wZG93bnMgcmVxdWlyZSBQb3BwZXIuanMgKGh0dHBzOi8vcG9wcGVyLmpzLm9yZy8pJyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX2VsZW1lbnQ7XG5cbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UgPT09ICdwYXJlbnQnKSB7XG4gICAgICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IHBhcmVudDtcbiAgICAgICAgfSBlbHNlIGlmIChVdGlsLmlzRWxlbWVudCh0aGlzLl9jb25maWcucmVmZXJlbmNlKSkge1xuICAgICAgICAgIHJlZmVyZW5jZUVsZW1lbnQgPSB0aGlzLl9jb25maWcucmVmZXJlbmNlOyAvLyBDaGVjayBpZiBpdCdzIGpRdWVyeSBlbGVtZW50XG5cbiAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UuanF1ZXJ5ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX2NvbmZpZy5yZWZlcmVuY2VbMF07XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIElmIGJvdW5kYXJ5IGlzIG5vdCBgc2Nyb2xsUGFyZW50YCwgdGhlbiBzZXQgcG9zaXRpb24gdG8gYHN0YXRpY2BcbiAgICAgICAgLy8gdG8gYWxsb3cgdGhlIG1lbnUgdG8gXCJlc2NhcGVcIiB0aGUgc2Nyb2xsIHBhcmVudCdzIGJvdW5kYXJpZXNcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8yNDI1MVxuXG5cbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5ib3VuZGFyeSAhPT0gJ3Njcm9sbFBhcmVudCcpIHtcbiAgICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10ocGFyZW50KS5hZGRDbGFzcyhDTEFTU19OQU1FX1BPU0lUSU9OX1NUQVRJQyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9wb3BwZXIgPSBuZXcgUG9wcGVyX19kZWZhdWx0WydkZWZhdWx0J10ocmVmZXJlbmNlRWxlbWVudCwgdGhpcy5fbWVudSwgdGhpcy5fZ2V0UG9wcGVyQ29uZmlnKCkpO1xuICAgICAgfSAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgYWRkIGV4dHJhXG4gICAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHRvIHRoZSBib2R5J3MgaW1tZWRpYXRlIGNoaWxkcmVuO1xuICAgICAgLy8gb25seSBuZWVkZWQgYmVjYXVzZSBvZiBicm9rZW4gZXZlbnQgZGVsZWdhdGlvbiBvbiBpT1NcbiAgICAgIC8vIGh0dHBzOi8vd3d3LnF1aXJrc21vZGUub3JnL2Jsb2cvYXJjaGl2ZXMvMjAxNC8wMi9tb3VzZV9ldmVudF9idWIuaHRtbFxuXG5cbiAgICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHBhcmVudCkuY2xvc2VzdChTRUxFQ1RPUl9OQVZCQVJfTkFWKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKGRvY3VtZW50LmJvZHkpLmNoaWxkcmVuKCkub24oJ21vdXNlb3ZlcicsIG51bGwsICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5ub29wKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZWxlbWVudC5mb2N1cygpO1xuXG4gICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpO1xuXG4gICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcy5fbWVudSkudG9nZ2xlQ2xhc3MoQ0xBU1NfTkFNRV9TSE9XJDIpO1xuICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHBhcmVudCkudG9nZ2xlQ2xhc3MoQ0xBU1NfTkFNRV9TSE9XJDIpLnRyaWdnZXIoJF9fZGVmYXVsdFsnZGVmYXVsdCddLkV2ZW50KEVWRU5UX1NIT1dOJDEsIHJlbGF0ZWRUYXJnZXQpKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLmhpZGUgPSBmdW5jdGlvbiBoaWRlKCkge1xuICAgICAgaWYgKHRoaXMuX2VsZW1lbnQuZGlzYWJsZWQgfHwgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENMQVNTX05BTUVfRElTQUJMRUQpIHx8ICEkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcy5fbWVudSkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9TSE9XJDIpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlbGF0ZWRUYXJnZXQgPSB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRoaXMuX2VsZW1lbnRcbiAgICAgIH07XG4gICAgICB2YXIgaGlkZUV2ZW50ID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddLkV2ZW50KEVWRU5UX0hJREUkMSwgcmVsYXRlZFRhcmdldCk7XG5cbiAgICAgIHZhciBwYXJlbnQgPSBEcm9wZG93bi5fZ2V0UGFyZW50RnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudCk7XG5cbiAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShwYXJlbnQpLnRyaWdnZXIoaGlkZUV2ZW50KTtcblxuICAgICAgaWYgKGhpZGVFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgICAgdGhpcy5fcG9wcGVyLmRlc3Ryb3koKTtcbiAgICAgIH1cblxuICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMuX21lbnUpLnRvZ2dsZUNsYXNzKENMQVNTX05BTUVfU0hPVyQyKTtcbiAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShwYXJlbnQpLnRvZ2dsZUNsYXNzKENMQVNTX05BTUVfU0hPVyQyKS50cmlnZ2VyKCRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5FdmVudChFVkVOVF9ISURERU4kMSwgcmVsYXRlZFRhcmdldCkpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uZGlzcG9zZSA9IGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XG4gICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10ucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSQ0KTtcbiAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzLl9lbGVtZW50KS5vZmYoRVZFTlRfS0VZJDQpO1xuICAgICAgdGhpcy5fZWxlbWVudCA9IG51bGw7XG4gICAgICB0aGlzLl9tZW51ID0gbnVsbDtcblxuICAgICAgaWYgKHRoaXMuX3BvcHBlciAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpO1xuXG4gICAgICAgIHRoaXMuX3BvcHBlciA9IG51bGw7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgICB0aGlzLl9pbk5hdmJhciA9IHRoaXMuX2RldGVjdE5hdmJhcigpO1xuXG4gICAgICBpZiAodGhpcy5fcG9wcGVyICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX3BvcHBlci5zY2hlZHVsZVVwZGF0ZSgpO1xuICAgICAgfVxuICAgIH0gLy8gUHJpdmF0ZVxuICAgIDtcblxuICAgIF9wcm90by5fYWRkRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbiBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcy5fZWxlbWVudCkub24oRVZFTlRfQ0xJQ0ssIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBfdGhpcy50b2dnbGUoKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2dldENvbmZpZyA9IGZ1bmN0aW9uIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgICBjb25maWcgPSBfZXh0ZW5kcyh7fSwgdGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0LCAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcy5fZWxlbWVudCkuZGF0YSgpLCBjb25maWcpO1xuICAgICAgVXRpbC50eXBlQ2hlY2tDb25maWcoTkFNRSQ0LCBjb25maWcsIHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFR5cGUpO1xuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9nZXRNZW51RWxlbWVudCA9IGZ1bmN0aW9uIF9nZXRNZW51RWxlbWVudCgpIHtcbiAgICAgIGlmICghdGhpcy5fbWVudSkge1xuICAgICAgICB2YXIgcGFyZW50ID0gRHJvcGRvd24uX2dldFBhcmVudEZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpO1xuXG4gICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICB0aGlzLl9tZW51ID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoU0VMRUNUT1JfTUVOVSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuX21lbnU7XG4gICAgfTtcblxuICAgIF9wcm90by5fZ2V0UGxhY2VtZW50ID0gZnVuY3Rpb24gX2dldFBsYWNlbWVudCgpIHtcbiAgICAgIHZhciAkcGFyZW50RHJvcGRvd24gPSAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcy5fZWxlbWVudC5wYXJlbnROb2RlKTtcbiAgICAgIHZhciBwbGFjZW1lbnQgPSBQTEFDRU1FTlRfQk9UVE9NOyAvLyBIYW5kbGUgZHJvcHVwXG5cbiAgICAgIGlmICgkcGFyZW50RHJvcGRvd24uaGFzQ2xhc3MoQ0xBU1NfTkFNRV9EUk9QVVApKSB7XG4gICAgICAgIHBsYWNlbWVudCA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzLl9tZW51KS5oYXNDbGFzcyhDTEFTU19OQU1FX01FTlVSSUdIVCkgPyBQTEFDRU1FTlRfVE9QRU5EIDogUExBQ0VNRU5UX1RPUDtcbiAgICAgIH0gZWxzZSBpZiAoJHBhcmVudERyb3Bkb3duLmhhc0NsYXNzKENMQVNTX05BTUVfRFJPUFJJR0hUKSkge1xuICAgICAgICBwbGFjZW1lbnQgPSBQTEFDRU1FTlRfUklHSFQ7XG4gICAgICB9IGVsc2UgaWYgKCRwYXJlbnREcm9wZG93bi5oYXNDbGFzcyhDTEFTU19OQU1FX0RST1BMRUZUKSkge1xuICAgICAgICBwbGFjZW1lbnQgPSBQTEFDRU1FTlRfTEVGVDtcbiAgICAgIH0gZWxzZSBpZiAoJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMuX21lbnUpLmhhc0NsYXNzKENMQVNTX05BTUVfTUVOVVJJR0hUKSkge1xuICAgICAgICBwbGFjZW1lbnQgPSBQTEFDRU1FTlRfQk9UVE9NRU5EO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGxhY2VtZW50O1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2RldGVjdE5hdmJhciA9IGZ1bmN0aW9uIF9kZXRlY3ROYXZiYXIoKSB7XG4gICAgICByZXR1cm4gJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMuX2VsZW1lbnQpLmNsb3Nlc3QoJy5uYXZiYXInKS5sZW5ndGggPiAwO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2dldE9mZnNldCA9IGZ1bmN0aW9uIF9nZXRPZmZzZXQoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIG9mZnNldCA9IHt9O1xuXG4gICAgICBpZiAodHlwZW9mIHRoaXMuX2NvbmZpZy5vZmZzZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgb2Zmc2V0LmZuID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICBkYXRhLm9mZnNldHMgPSBfZXh0ZW5kcyh7fSwgZGF0YS5vZmZzZXRzLCBfdGhpczIuX2NvbmZpZy5vZmZzZXQoZGF0YS5vZmZzZXRzLCBfdGhpczIuX2VsZW1lbnQpIHx8IHt9KTtcbiAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9mZnNldC5vZmZzZXQgPSB0aGlzLl9jb25maWcub2Zmc2V0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gb2Zmc2V0O1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2dldFBvcHBlckNvbmZpZyA9IGZ1bmN0aW9uIF9nZXRQb3BwZXJDb25maWcoKSB7XG4gICAgICB2YXIgcG9wcGVyQ29uZmlnID0ge1xuICAgICAgICBwbGFjZW1lbnQ6IHRoaXMuX2dldFBsYWNlbWVudCgpLFxuICAgICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgICBvZmZzZXQ6IHRoaXMuX2dldE9mZnNldCgpLFxuICAgICAgICAgIGZsaXA6IHtcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRoaXMuX2NvbmZpZy5mbGlwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwcmV2ZW50T3ZlcmZsb3c6IHtcbiAgICAgICAgICAgIGJvdW5kYXJpZXNFbGVtZW50OiB0aGlzLl9jb25maWcuYm91bmRhcnlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07IC8vIERpc2FibGUgUG9wcGVyLmpzIGlmIHdlIGhhdmUgYSBzdGF0aWMgZGlzcGxheVxuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmRpc3BsYXkgPT09ICdzdGF0aWMnKSB7XG4gICAgICAgIHBvcHBlckNvbmZpZy5tb2RpZmllcnMuYXBwbHlTdHlsZSA9IHtcbiAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHBvcHBlckNvbmZpZywgdGhpcy5fY29uZmlnLnBvcHBlckNvbmZpZyk7XG4gICAgfSAvLyBTdGF0aWNcbiAgICA7XG5cbiAgICBEcm9wZG93bi5falF1ZXJ5SW50ZXJmYWNlID0gZnVuY3Rpb24gX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGF0YSA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKS5kYXRhKERBVEFfS0VZJDQpO1xuXG4gICAgICAgIHZhciBfY29uZmlnID0gdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgPyBjb25maWcgOiBudWxsO1xuXG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgIGRhdGEgPSBuZXcgRHJvcGRvd24odGhpcywgX2NvbmZpZyk7XG4gICAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMpLmRhdGEoREFUQV9LRVkkNCwgZGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJObyBtZXRob2QgbmFtZWQgXFxcIlwiICsgY29uZmlnICsgXCJcXFwiXCIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRhdGFbY29uZmlnXSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgRHJvcGRvd24uX2NsZWFyTWVudXMgPSBmdW5jdGlvbiBfY2xlYXJNZW51cyhldmVudCkge1xuICAgICAgaWYgKGV2ZW50ICYmIChldmVudC53aGljaCA9PT0gUklHSFRfTU9VU0VfQlVUVE9OX1dISUNIIHx8IGV2ZW50LnR5cGUgPT09ICdrZXl1cCcgJiYgZXZlbnQud2hpY2ggIT09IFRBQl9LRVlDT0RFKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciB0b2dnbGVzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNFTEVDVE9SX0RBVEFfVE9HR0xFJDIpKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHRvZ2dsZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdmFyIHBhcmVudCA9IERyb3Bkb3duLl9nZXRQYXJlbnRGcm9tRWxlbWVudCh0b2dnbGVzW2ldKTtcblxuICAgICAgICB2YXIgY29udGV4dCA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0b2dnbGVzW2ldKS5kYXRhKERBVEFfS0VZJDQpO1xuICAgICAgICB2YXIgcmVsYXRlZFRhcmdldCA9IHtcbiAgICAgICAgICByZWxhdGVkVGFyZ2V0OiB0b2dnbGVzW2ldXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGV2ZW50ICYmIGV2ZW50LnR5cGUgPT09ICdjbGljaycpIHtcbiAgICAgICAgICByZWxhdGVkVGFyZ2V0LmNsaWNrRXZlbnQgPSBldmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRyb3Bkb3duTWVudSA9IGNvbnRleHQuX21lbnU7XG5cbiAgICAgICAgaWYgKCEkX19kZWZhdWx0WydkZWZhdWx0J10ocGFyZW50KS5oYXNDbGFzcyhDTEFTU19OQU1FX1NIT1ckMikpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2NsaWNrJyAmJiAvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKSB8fCBldmVudC50eXBlID09PSAna2V5dXAnICYmIGV2ZW50LndoaWNoID09PSBUQUJfS0VZQ09ERSkgJiYgJF9fZGVmYXVsdFsnZGVmYXVsdCddLmNvbnRhaW5zKHBhcmVudCwgZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGhpZGVFdmVudCA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5FdmVudChFVkVOVF9ISURFJDEsIHJlbGF0ZWRUYXJnZXQpO1xuICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10ocGFyZW50KS50cmlnZ2VyKGhpZGVFdmVudCk7XG5cbiAgICAgICAgaWYgKGhpZGVFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9IC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSByZW1vdmUgdGhlIGV4dHJhXG4gICAgICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgd2UgYWRkZWQgZm9yIGlPUyBzdXBwb3J0XG5cblxuICAgICAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKGRvY3VtZW50LmJvZHkpLmNoaWxkcmVuKCkub2ZmKCdtb3VzZW92ZXInLCBudWxsLCAkX19kZWZhdWx0WydkZWZhdWx0J10ubm9vcCk7XG4gICAgICAgIH1cblxuICAgICAgICB0b2dnbGVzW2ldLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuXG4gICAgICAgIGlmIChjb250ZXh0Ll9wb3BwZXIpIHtcbiAgICAgICAgICBjb250ZXh0Ll9wb3BwZXIuZGVzdHJveSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKGRyb3Bkb3duTWVudSkucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9TSE9XJDIpO1xuICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10ocGFyZW50KS5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX1NIT1ckMikudHJpZ2dlcigkX19kZWZhdWx0WydkZWZhdWx0J10uRXZlbnQoRVZFTlRfSElEREVOJDEsIHJlbGF0ZWRUYXJnZXQpKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgRHJvcGRvd24uX2dldFBhcmVudEZyb21FbGVtZW50ID0gZnVuY3Rpb24gX2dldFBhcmVudEZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgIHZhciBwYXJlbnQ7XG4gICAgICB2YXIgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhcmVudCB8fCBlbGVtZW50LnBhcmVudE5vZGU7XG4gICAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuICAgIDtcblxuICAgIERyb3Bkb3duLl9kYXRhQXBpS2V5ZG93bkhhbmRsZXIgPSBmdW5jdGlvbiBfZGF0YUFwaUtleWRvd25IYW5kbGVyKGV2ZW50KSB7XG4gICAgICAvLyBJZiBub3QgaW5wdXQvdGV4dGFyZWE6XG4gICAgICAvLyAgLSBBbmQgbm90IGEga2V5IGluIFJFR0VYUF9LRVlET1dOID0+IG5vdCBhIGRyb3Bkb3duIGNvbW1hbmRcbiAgICAgIC8vIElmIGlucHV0L3RleHRhcmVhOlxuICAgICAgLy8gIC0gSWYgc3BhY2Uga2V5ID0+IG5vdCBhIGRyb3Bkb3duIGNvbW1hbmRcbiAgICAgIC8vICAtIElmIGtleSBpcyBvdGhlciB0aGFuIGVzY2FwZVxuICAgICAgLy8gICAgLSBJZiBrZXkgaXMgbm90IHVwIG9yIGRvd24gPT4gbm90IGEgZHJvcGRvd24gY29tbWFuZFxuICAgICAgLy8gICAgLSBJZiB0cmlnZ2VyIGluc2lkZSB0aGUgbWVudSA9PiBub3QgYSBkcm9wZG93biBjb21tYW5kXG4gICAgICBpZiAoL2lucHV0fHRleHRhcmVhL2kudGVzdChldmVudC50YXJnZXQudGFnTmFtZSkgPyBldmVudC53aGljaCA9PT0gU1BBQ0VfS0VZQ09ERSB8fCBldmVudC53aGljaCAhPT0gRVNDQVBFX0tFWUNPREUgJiYgKGV2ZW50LndoaWNoICE9PSBBUlJPV19ET1dOX0tFWUNPREUgJiYgZXZlbnQud2hpY2ggIT09IEFSUk9XX1VQX0tFWUNPREUgfHwgJF9fZGVmYXVsdFsnZGVmYXVsdCddKGV2ZW50LnRhcmdldCkuY2xvc2VzdChTRUxFQ1RPUl9NRU5VKS5sZW5ndGgpIDogIVJFR0VYUF9LRVlET1dOLnRlc3QoZXZlbnQud2hpY2gpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMpLmhhc0NsYXNzKENMQVNTX05BTUVfRElTQUJMRUQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHBhcmVudCA9IERyb3Bkb3duLl9nZXRQYXJlbnRGcm9tRWxlbWVudCh0aGlzKTtcblxuICAgICAgdmFyIGlzQWN0aXZlID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddKHBhcmVudCkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9TSE9XJDIpO1xuXG4gICAgICBpZiAoIWlzQWN0aXZlICYmIGV2ZW50LndoaWNoID09PSBFU0NBUEVfS0VZQ09ERSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgaWYgKCFpc0FjdGl2ZSB8fCBldmVudC53aGljaCA9PT0gRVNDQVBFX0tFWUNPREUgfHwgZXZlbnQud2hpY2ggPT09IFNQQUNFX0tFWUNPREUpIHtcbiAgICAgICAgaWYgKGV2ZW50LndoaWNoID09PSBFU0NBUEVfS0VZQ09ERSkge1xuICAgICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShwYXJlbnQucXVlcnlTZWxlY3RvcihTRUxFQ1RPUl9EQVRBX1RPR0dMRSQyKSkudHJpZ2dlcignZm9jdXMnKTtcbiAgICAgICAgfVxuXG4gICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBpdGVtcyA9IFtdLnNsaWNlLmNhbGwocGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU0VMRUNUT1JfVklTSUJMRV9JVEVNUykpLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gJF9fZGVmYXVsdFsnZGVmYXVsdCddKGl0ZW0pLmlzKCc6dmlzaWJsZScpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgaW5kZXggPSBpdGVtcy5pbmRleE9mKGV2ZW50LnRhcmdldCk7XG5cbiAgICAgIGlmIChldmVudC53aGljaCA9PT0gQVJST1dfVVBfS0VZQ09ERSAmJiBpbmRleCA+IDApIHtcbiAgICAgICAgLy8gVXBcbiAgICAgICAgaW5kZXgtLTtcbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50LndoaWNoID09PSBBUlJPV19ET1dOX0tFWUNPREUgJiYgaW5kZXggPCBpdGVtcy5sZW5ndGggLSAxKSB7XG4gICAgICAgIC8vIERvd25cbiAgICAgICAgaW5kZXgrKztcbiAgICAgIH1cblxuICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICBpbmRleCA9IDA7XG4gICAgICB9XG5cbiAgICAgIGl0ZW1zW2luZGV4XS5mb2N1cygpO1xuICAgIH07XG5cbiAgICBfY3JlYXRlQ2xhc3MoRHJvcGRvd24sIG51bGwsIFt7XG4gICAgICBrZXk6IFwiVkVSU0lPTlwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBWRVJTSU9OJDQ7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIkRlZmF1bHRcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gRGVmYXVsdCQyO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJEZWZhdWx0VHlwZVwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBEZWZhdWx0VHlwZSQyO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBEcm9wZG93bjtcbiAgfSgpO1xuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuXG4gICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShkb2N1bWVudCkub24oRVZFTlRfS0VZRE9XTl9EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUkMiwgRHJvcGRvd24uX2RhdGFBcGlLZXlkb3duSGFuZGxlcikub24oRVZFTlRfS0VZRE9XTl9EQVRBX0FQSSwgU0VMRUNUT1JfTUVOVSwgRHJvcGRvd24uX2RhdGFBcGlLZXlkb3duSGFuZGxlcikub24oRVZFTlRfQ0xJQ0tfREFUQV9BUEkkNCArIFwiIFwiICsgRVZFTlRfS0VZVVBfREFUQV9BUEksIERyb3Bkb3duLl9jbGVhck1lbnVzKS5vbihFVkVOVF9DTElDS19EQVRBX0FQSSQ0LCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSQyLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgRHJvcGRvd24uX2pRdWVyeUludGVyZmFjZS5jYWxsKCRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKSwgJ3RvZ2dsZScpO1xuICB9KS5vbihFVkVOVF9DTElDS19EQVRBX0FQSSQ0LCBTRUxFQ1RPUl9GT1JNX0NISUxELCBmdW5jdGlvbiAoZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH0pO1xuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIGpRdWVyeVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgJF9fZGVmYXVsdFsnZGVmYXVsdCddLmZuW05BTUUkNF0gPSBEcm9wZG93bi5falF1ZXJ5SW50ZXJmYWNlO1xuICAkX19kZWZhdWx0WydkZWZhdWx0J10uZm5bTkFNRSQ0XS5Db25zdHJ1Y3RvciA9IERyb3Bkb3duO1xuXG4gICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJDRdLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddLmZuW05BTUUkNF0gPSBKUVVFUllfTk9fQ09ORkxJQ1QkNDtcbiAgICByZXR1cm4gRHJvcGRvd24uX2pRdWVyeUludGVyZmFjZTtcbiAgfTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIENvbnN0YW50c1xuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgdmFyIE5BTUUkNSA9ICdtb2RhbCc7XG4gIHZhciBWRVJTSU9OJDUgPSAnNC41LjMnO1xuICB2YXIgREFUQV9LRVkkNSA9ICdicy5tb2RhbCc7XG4gIHZhciBFVkVOVF9LRVkkNSA9IFwiLlwiICsgREFUQV9LRVkkNTtcbiAgdmFyIERBVEFfQVBJX0tFWSQ1ID0gJy5kYXRhLWFwaSc7XG4gIHZhciBKUVVFUllfTk9fQ09ORkxJQ1QkNSA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJDVdO1xuICB2YXIgRVNDQVBFX0tFWUNPREUkMSA9IDI3OyAvLyBLZXlib2FyZEV2ZW50LndoaWNoIHZhbHVlIGZvciBFc2NhcGUgKEVzYykga2V5XG5cbiAgdmFyIERlZmF1bHQkMyA9IHtcbiAgICBiYWNrZHJvcDogdHJ1ZSxcbiAgICBrZXlib2FyZDogdHJ1ZSxcbiAgICBmb2N1czogdHJ1ZSxcbiAgICBzaG93OiB0cnVlXG4gIH07XG4gIHZhciBEZWZhdWx0VHlwZSQzID0ge1xuICAgIGJhY2tkcm9wOiAnKGJvb2xlYW58c3RyaW5nKScsXG4gICAga2V5Ym9hcmQ6ICdib29sZWFuJyxcbiAgICBmb2N1czogJ2Jvb2xlYW4nLFxuICAgIHNob3c6ICdib29sZWFuJ1xuICB9O1xuICB2YXIgRVZFTlRfSElERSQyID0gXCJoaWRlXCIgKyBFVkVOVF9LRVkkNTtcbiAgdmFyIEVWRU5UX0hJREVfUFJFVkVOVEVEID0gXCJoaWRlUHJldmVudGVkXCIgKyBFVkVOVF9LRVkkNTtcbiAgdmFyIEVWRU5UX0hJRERFTiQyID0gXCJoaWRkZW5cIiArIEVWRU5UX0tFWSQ1O1xuICB2YXIgRVZFTlRfU0hPVyQyID0gXCJzaG93XCIgKyBFVkVOVF9LRVkkNTtcbiAgdmFyIEVWRU5UX1NIT1dOJDIgPSBcInNob3duXCIgKyBFVkVOVF9LRVkkNTtcbiAgdmFyIEVWRU5UX0ZPQ1VTSU4gPSBcImZvY3VzaW5cIiArIEVWRU5UX0tFWSQ1O1xuICB2YXIgRVZFTlRfUkVTSVpFID0gXCJyZXNpemVcIiArIEVWRU5UX0tFWSQ1O1xuICB2YXIgRVZFTlRfQ0xJQ0tfRElTTUlTUyA9IFwiY2xpY2suZGlzbWlzc1wiICsgRVZFTlRfS0VZJDU7XG4gIHZhciBFVkVOVF9LRVlET1dOX0RJU01JU1MgPSBcImtleWRvd24uZGlzbWlzc1wiICsgRVZFTlRfS0VZJDU7XG4gIHZhciBFVkVOVF9NT1VTRVVQX0RJU01JU1MgPSBcIm1vdXNldXAuZGlzbWlzc1wiICsgRVZFTlRfS0VZJDU7XG4gIHZhciBFVkVOVF9NT1VTRURPV05fRElTTUlTUyA9IFwibW91c2Vkb3duLmRpc21pc3NcIiArIEVWRU5UX0tFWSQ1O1xuICB2YXIgRVZFTlRfQ0xJQ0tfREFUQV9BUEkkNSA9IFwiY2xpY2tcIiArIEVWRU5UX0tFWSQ1ICsgREFUQV9BUElfS0VZJDU7XG4gIHZhciBDTEFTU19OQU1FX1NDUk9MTEFCTEUgPSAnbW9kYWwtZGlhbG9nLXNjcm9sbGFibGUnO1xuICB2YXIgQ0xBU1NfTkFNRV9TQ1JPTExCQVJfTUVBU1VSRVIgPSAnbW9kYWwtc2Nyb2xsYmFyLW1lYXN1cmUnO1xuICB2YXIgQ0xBU1NfTkFNRV9CQUNLRFJPUCA9ICdtb2RhbC1iYWNrZHJvcCc7XG4gIHZhciBDTEFTU19OQU1FX09QRU4gPSAnbW9kYWwtb3Blbic7XG4gIHZhciBDTEFTU19OQU1FX0ZBREUkMSA9ICdmYWRlJztcbiAgdmFyIENMQVNTX05BTUVfU0hPVyQzID0gJ3Nob3cnO1xuICB2YXIgQ0xBU1NfTkFNRV9TVEFUSUMgPSAnbW9kYWwtc3RhdGljJztcbiAgdmFyIFNFTEVDVE9SX0RJQUxPRyA9ICcubW9kYWwtZGlhbG9nJztcbiAgdmFyIFNFTEVDVE9SX01PREFMX0JPRFkgPSAnLm1vZGFsLWJvZHknO1xuICB2YXIgU0VMRUNUT1JfREFUQV9UT0dHTEUkMyA9ICdbZGF0YS10b2dnbGU9XCJtb2RhbFwiXSc7XG4gIHZhciBTRUxFQ1RPUl9EQVRBX0RJU01JU1MgPSAnW2RhdGEtZGlzbWlzcz1cIm1vZGFsXCJdJztcbiAgdmFyIFNFTEVDVE9SX0ZJWEVEX0NPTlRFTlQgPSAnLmZpeGVkLXRvcCwgLmZpeGVkLWJvdHRvbSwgLmlzLWZpeGVkLCAuc3RpY2t5LXRvcCc7XG4gIHZhciBTRUxFQ1RPUl9TVElDS1lfQ09OVEVOVCA9ICcuc3RpY2t5LXRvcCc7XG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgdmFyIE1vZGFsID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNb2RhbChlbGVtZW50LCBjb25maWcpIHtcbiAgICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpO1xuICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICB0aGlzLl9kaWFsb2cgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoU0VMRUNUT1JfRElBTE9HKTtcbiAgICAgIHRoaXMuX2JhY2tkcm9wID0gbnVsbDtcbiAgICAgIHRoaXMuX2lzU2hvd24gPSBmYWxzZTtcbiAgICAgIHRoaXMuX2lzQm9keU92ZXJmbG93aW5nID0gZmFsc2U7XG4gICAgICB0aGlzLl9pZ25vcmVCYWNrZHJvcENsaWNrID0gZmFsc2U7XG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3Njcm9sbGJhcldpZHRoID0gMDtcbiAgICB9IC8vIEdldHRlcnNcblxuXG4gICAgdmFyIF9wcm90byA9IE1vZGFsLnByb3RvdHlwZTtcblxuICAgIC8vIFB1YmxpY1xuICAgIF9wcm90by50b2dnbGUgPSBmdW5jdGlvbiB0b2dnbGUocmVsYXRlZFRhcmdldCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2lzU2hvd24gPyB0aGlzLmhpZGUoKSA6IHRoaXMuc2hvdyhyZWxhdGVkVGFyZ2V0KTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLnNob3cgPSBmdW5jdGlvbiBzaG93KHJlbGF0ZWRUYXJnZXQpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGlmICh0aGlzLl9pc1Nob3duIHx8IHRoaXMuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICgkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9GQURFJDEpKSB7XG4gICAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBzaG93RXZlbnQgPSAkX19kZWZhdWx0WydkZWZhdWx0J10uRXZlbnQoRVZFTlRfU0hPVyQyLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHJlbGF0ZWRUYXJnZXRcbiAgICAgIH0pO1xuICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc2hvd0V2ZW50KTtcblxuICAgICAgaWYgKHRoaXMuX2lzU2hvd24gfHwgc2hvd0V2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5faXNTaG93biA9IHRydWU7XG5cbiAgICAgIHRoaXMuX2NoZWNrU2Nyb2xsYmFyKCk7XG5cbiAgICAgIHRoaXMuX3NldFNjcm9sbGJhcigpO1xuXG4gICAgICB0aGlzLl9hZGp1c3REaWFsb2coKTtcblxuICAgICAgdGhpcy5fc2V0RXNjYXBlRXZlbnQoKTtcblxuICAgICAgdGhpcy5fc2V0UmVzaXplRXZlbnQoKTtcblxuICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMuX2VsZW1lbnQpLm9uKEVWRU5UX0NMSUNLX0RJU01JU1MsIFNFTEVDVE9SX0RBVEFfRElTTUlTUywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5oaWRlKGV2ZW50KTtcbiAgICAgIH0pO1xuICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMuX2RpYWxvZykub24oRVZFTlRfTU9VU0VET1dOX0RJU01JU1MsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKF90aGlzLl9lbGVtZW50KS5vbmUoRVZFTlRfTU9VU0VVUF9ESVNNSVNTLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBpZiAoJF9fZGVmYXVsdFsnZGVmYXVsdCddKGV2ZW50LnRhcmdldCkuaXMoX3RoaXMuX2VsZW1lbnQpKSB7XG4gICAgICAgICAgICBfdGhpcy5faWdub3JlQmFja2Ryb3BDbGljayA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLl9zaG93QmFja2Ryb3AoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMuX3Nob3dFbGVtZW50KHJlbGF0ZWRUYXJnZXQpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF9wcm90by5oaWRlID0gZnVuY3Rpb24gaGlkZShldmVudCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIGlmIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuX2lzU2hvd24gfHwgdGhpcy5faXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGhpZGVFdmVudCA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5FdmVudChFVkVOVF9ISURFJDIpO1xuICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoaGlkZUV2ZW50KTtcblxuICAgICAgaWYgKCF0aGlzLl9pc1Nob3duIHx8IGhpZGVFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2lzU2hvd24gPSBmYWxzZTtcbiAgICAgIHZhciB0cmFuc2l0aW9uID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENMQVNTX05BTUVfRkFERSQxKTtcblxuICAgICAgaWYgKHRyYW5zaXRpb24pIHtcbiAgICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fc2V0RXNjYXBlRXZlbnQoKTtcblxuICAgICAgdGhpcy5fc2V0UmVzaXplRXZlbnQoKTtcblxuICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKGRvY3VtZW50KS5vZmYoRVZFTlRfRk9DVVNJTik7XG4gICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcy5fZWxlbWVudCkucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9TSE9XJDMpO1xuICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMuX2VsZW1lbnQpLm9mZihFVkVOVF9DTElDS19ESVNNSVNTKTtcbiAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzLl9kaWFsb2cpLm9mZihFVkVOVF9NT1VTRURPV05fRElTTUlTUyk7XG5cbiAgICAgIGlmICh0cmFuc2l0aW9uKSB7XG4gICAgICAgIHZhciB0cmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpO1xuICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcy5fZWxlbWVudCkub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczIuX2hpZGVNb2RhbChldmVudCk7XG4gICAgICAgIH0pLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25EdXJhdGlvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9oaWRlTW9kYWwoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLmRpc3Bvc2UgPSBmdW5jdGlvbiBkaXNwb3NlKCkge1xuICAgICAgW3dpbmRvdywgdGhpcy5fZWxlbWVudCwgdGhpcy5fZGlhbG9nXS5mb3JFYWNoKGZ1bmN0aW9uIChodG1sRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gJF9fZGVmYXVsdFsnZGVmYXVsdCddKGh0bWxFbGVtZW50KS5vZmYoRVZFTlRfS0VZJDUpO1xuICAgICAgfSk7XG4gICAgICAvKipcbiAgICAgICAqIGBkb2N1bWVudGAgaGFzIDIgZXZlbnRzIGBFVkVOVF9GT0NVU0lOYCBhbmQgYEVWRU5UX0NMSUNLX0RBVEFfQVBJYFxuICAgICAgICogRG8gbm90IG1vdmUgYGRvY3VtZW50YCBpbiBgaHRtbEVsZW1lbnRzYCBhcnJheVxuICAgICAgICogSXQgd2lsbCByZW1vdmUgYEVWRU5UX0NMSUNLX0RBVEFfQVBJYCBldmVudCB0aGF0IHNob3VsZCByZW1haW5cbiAgICAgICAqL1xuXG4gICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oZG9jdW1lbnQpLm9mZihFVkVOVF9GT0NVU0lOKTtcbiAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZJDUpO1xuICAgICAgdGhpcy5fY29uZmlnID0gbnVsbDtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xuICAgICAgdGhpcy5fZGlhbG9nID0gbnVsbDtcbiAgICAgIHRoaXMuX2JhY2tkcm9wID0gbnVsbDtcbiAgICAgIHRoaXMuX2lzU2hvd24gPSBudWxsO1xuICAgICAgdGhpcy5faXNCb2R5T3ZlcmZsb3dpbmcgPSBudWxsO1xuICAgICAgdGhpcy5faWdub3JlQmFja2Ryb3BDbGljayA9IG51bGw7XG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBudWxsO1xuICAgICAgdGhpcy5fc2Nyb2xsYmFyV2lkdGggPSBudWxsO1xuICAgIH07XG5cbiAgICBfcHJvdG8uaGFuZGxlVXBkYXRlID0gZnVuY3Rpb24gaGFuZGxlVXBkYXRlKCkge1xuICAgICAgdGhpcy5fYWRqdXN0RGlhbG9nKCk7XG4gICAgfSAvLyBQcml2YXRlXG4gICAgO1xuXG4gICAgX3Byb3RvLl9nZXRDb25maWcgPSBmdW5jdGlvbiBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgICAgY29uZmlnID0gX2V4dGVuZHMoe30sIERlZmF1bHQkMywgY29uZmlnKTtcbiAgICAgIFV0aWwudHlwZUNoZWNrQ29uZmlnKE5BTUUkNSwgY29uZmlnLCBEZWZhdWx0VHlwZSQzKTtcbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfTtcblxuICAgIF9wcm90by5fdHJpZ2dlckJhY2tkcm9wVHJhbnNpdGlvbiA9IGZ1bmN0aW9uIF90cmlnZ2VyQmFja2Ryb3BUcmFuc2l0aW9uKCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcuYmFja2Ryb3AgPT09ICdzdGF0aWMnKSB7XG4gICAgICAgIHZhciBoaWRlRXZlbnRQcmV2ZW50ZWQgPSAkX19kZWZhdWx0WydkZWZhdWx0J10uRXZlbnQoRVZFTlRfSElERV9QUkVWRU5URUQpO1xuICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcy5fZWxlbWVudCkudHJpZ2dlcihoaWRlRXZlbnRQcmV2ZW50ZWQpO1xuXG4gICAgICAgIGlmIChoaWRlRXZlbnRQcmV2ZW50ZWQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaXNNb2RhbE92ZXJmbG93aW5nID0gdGhpcy5fZWxlbWVudC5zY3JvbGxIZWlnaHQgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXG4gICAgICAgIGlmICghaXNNb2RhbE92ZXJmbG93aW5nKSB7XG4gICAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5vdmVyZmxvd1kgPSAnaGlkZGVuJztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NUQVRJQyk7XG5cbiAgICAgICAgdmFyIG1vZGFsVHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9kaWFsb2cpO1xuICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcy5fZWxlbWVudCkub2ZmKFV0aWwuVFJBTlNJVElPTl9FTkQpO1xuICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcy5fZWxlbWVudCkub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpczMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NUQVRJQyk7XG5cbiAgICAgICAgICBpZiAoIWlzTW9kYWxPdmVyZmxvd2luZykge1xuICAgICAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKF90aGlzMy5fZWxlbWVudCkub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgX3RoaXMzLl9lbGVtZW50LnN0eWxlLm92ZXJmbG93WSA9ICcnO1xuICAgICAgICAgICAgfSkuZW11bGF0ZVRyYW5zaXRpb25FbmQoX3RoaXMzLl9lbGVtZW50LCBtb2RhbFRyYW5zaXRpb25EdXJhdGlvbik7XG4gICAgICAgICAgfVxuICAgICAgICB9KS5lbXVsYXRlVHJhbnNpdGlvbkVuZChtb2RhbFRyYW5zaXRpb25EdXJhdGlvbik7XG5cbiAgICAgICAgdGhpcy5fZWxlbWVudC5mb2N1cygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5fc2hvd0VsZW1lbnQgPSBmdW5jdGlvbiBfc2hvd0VsZW1lbnQocmVsYXRlZFRhcmdldCkge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIHZhciB0cmFuc2l0aW9uID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENMQVNTX05BTUVfRkFERSQxKTtcbiAgICAgIHZhciBtb2RhbEJvZHkgPSB0aGlzLl9kaWFsb2cgPyB0aGlzLl9kaWFsb2cucXVlcnlTZWxlY3RvcihTRUxFQ1RPUl9NT0RBTF9CT0RZKSA6IG51bGw7XG5cbiAgICAgIGlmICghdGhpcy5fZWxlbWVudC5wYXJlbnROb2RlIHx8IHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgLy8gRG9uJ3QgbW92ZSBtb2RhbCdzIERPTSBwb3NpdGlvblxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuX2VsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcblxuICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnLCB0cnVlKTtcblxuICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnZGlhbG9nJyk7XG5cbiAgICAgIGlmICgkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcy5fZGlhbG9nKS5oYXNDbGFzcyhDTEFTU19OQU1FX1NDUk9MTEFCTEUpICYmIG1vZGFsQm9keSkge1xuICAgICAgICBtb2RhbEJvZHkuc2Nyb2xsVG9wID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc2Nyb2xsVG9wID0gMDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRyYW5zaXRpb24pIHtcbiAgICAgICAgVXRpbC5yZWZsb3codGhpcy5fZWxlbWVudCk7XG4gICAgICB9XG5cbiAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzLl9lbGVtZW50KS5hZGRDbGFzcyhDTEFTU19OQU1FX1NIT1ckMyk7XG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcuZm9jdXMpIHtcbiAgICAgICAgdGhpcy5fZW5mb3JjZUZvY3VzKCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBzaG93bkV2ZW50ID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddLkV2ZW50KEVWRU5UX1NIT1dOJDIsIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogcmVsYXRlZFRhcmdldFxuICAgICAgfSk7XG5cbiAgICAgIHZhciB0cmFuc2l0aW9uQ29tcGxldGUgPSBmdW5jdGlvbiB0cmFuc2l0aW9uQ29tcGxldGUoKSB7XG4gICAgICAgIGlmIChfdGhpczQuX2NvbmZpZy5mb2N1cykge1xuICAgICAgICAgIF90aGlzNC5fZWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXM0Ll9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZTtcbiAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKF90aGlzNC5fZWxlbWVudCkudHJpZ2dlcihzaG93bkV2ZW50KTtcbiAgICAgIH07XG5cbiAgICAgIGlmICh0cmFuc2l0aW9uKSB7XG4gICAgICAgIHZhciB0cmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2RpYWxvZyk7XG4gICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzLl9kaWFsb2cpLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCB0cmFuc2l0aW9uQ29tcGxldGUpLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25EdXJhdGlvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmFuc2l0aW9uQ29tcGxldGUoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLl9lbmZvcmNlRm9jdXMgPSBmdW5jdGlvbiBfZW5mb3JjZUZvY3VzKCkge1xuICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShkb2N1bWVudCkub2ZmKEVWRU5UX0ZPQ1VTSU4pIC8vIEd1YXJkIGFnYWluc3QgaW5maW5pdGUgZm9jdXMgbG9vcFxuICAgICAgLm9uKEVWRU5UX0ZPQ1VTSU4sIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoZG9jdW1lbnQgIT09IGV2ZW50LnRhcmdldCAmJiBfdGhpczUuX2VsZW1lbnQgIT09IGV2ZW50LnRhcmdldCAmJiAkX19kZWZhdWx0WydkZWZhdWx0J10oX3RoaXM1Ll9lbGVtZW50KS5oYXMoZXZlbnQudGFyZ2V0KS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBfdGhpczUuX2VsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF9wcm90by5fc2V0RXNjYXBlRXZlbnQgPSBmdW5jdGlvbiBfc2V0RXNjYXBlRXZlbnQoKSB7XG4gICAgICB2YXIgX3RoaXM2ID0gdGhpcztcblxuICAgICAgaWYgKHRoaXMuX2lzU2hvd24pIHtcbiAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMuX2VsZW1lbnQpLm9uKEVWRU5UX0tFWURPV05fRElTTUlTUywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgaWYgKF90aGlzNi5fY29uZmlnLmtleWJvYXJkICYmIGV2ZW50LndoaWNoID09PSBFU0NBUEVfS0VZQ09ERSQxKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBfdGhpczYuaGlkZSgpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoIV90aGlzNi5fY29uZmlnLmtleWJvYXJkICYmIGV2ZW50LndoaWNoID09PSBFU0NBUEVfS0VZQ09ERSQxKSB7XG4gICAgICAgICAgICBfdGhpczYuX3RyaWdnZXJCYWNrZHJvcFRyYW5zaXRpb24oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICghdGhpcy5faXNTaG93bikge1xuICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcy5fZWxlbWVudCkub2ZmKEVWRU5UX0tFWURPV05fRElTTUlTUyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5fc2V0UmVzaXplRXZlbnQgPSBmdW5jdGlvbiBfc2V0UmVzaXplRXZlbnQoKSB7XG4gICAgICB2YXIgX3RoaXM3ID0gdGhpcztcblxuICAgICAgaWYgKHRoaXMuX2lzU2hvd24pIHtcbiAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHdpbmRvdykub24oRVZFTlRfUkVTSVpFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXM3LmhhbmRsZVVwZGF0ZShldmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHdpbmRvdykub2ZmKEVWRU5UX1JFU0laRSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5faGlkZU1vZGFsID0gZnVuY3Rpb24gX2hpZGVNb2RhbCgpIHtcbiAgICAgIHZhciBfdGhpczggPSB0aGlzO1xuXG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIHRydWUpO1xuXG4gICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1tb2RhbCcpO1xuXG4gICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgncm9sZScpO1xuXG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZTtcblxuICAgICAgdGhpcy5fc2hvd0JhY2tkcm9wKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKGRvY3VtZW50LmJvZHkpLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfT1BFTik7XG5cbiAgICAgICAgX3RoaXM4Ll9yZXNldEFkanVzdG1lbnRzKCk7XG5cbiAgICAgICAgX3RoaXM4Ll9yZXNldFNjcm9sbGJhcigpO1xuXG4gICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShfdGhpczguX2VsZW1lbnQpLnRyaWdnZXIoRVZFTlRfSElEREVOJDIpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF9wcm90by5fcmVtb3ZlQmFja2Ryb3AgPSBmdW5jdGlvbiBfcmVtb3ZlQmFja2Ryb3AoKSB7XG4gICAgICBpZiAodGhpcy5fYmFja2Ryb3ApIHtcbiAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMuX2JhY2tkcm9wKS5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5fYmFja2Ryb3AgPSBudWxsO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8uX3Nob3dCYWNrZHJvcCA9IGZ1bmN0aW9uIF9zaG93QmFja2Ryb3AoY2FsbGJhY2spIHtcbiAgICAgIHZhciBfdGhpczkgPSB0aGlzO1xuXG4gICAgICB2YXIgYW5pbWF0ZSA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDTEFTU19OQU1FX0ZBREUkMSkgPyBDTEFTU19OQU1FX0ZBREUkMSA6ICcnO1xuXG4gICAgICBpZiAodGhpcy5faXNTaG93biAmJiB0aGlzLl9jb25maWcuYmFja2Ryb3ApIHtcbiAgICAgICAgdGhpcy5fYmFja2Ryb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5fYmFja2Ryb3AuY2xhc3NOYW1lID0gQ0xBU1NfTkFNRV9CQUNLRFJPUDtcblxuICAgICAgICBpZiAoYW5pbWF0ZSkge1xuICAgICAgICAgIHRoaXMuX2JhY2tkcm9wLmNsYXNzTGlzdC5hZGQoYW5pbWF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcy5fYmFja2Ryb3ApLmFwcGVuZFRvKGRvY3VtZW50LmJvZHkpO1xuICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcy5fZWxlbWVudCkub24oRVZFTlRfQ0xJQ0tfRElTTUlTUywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgaWYgKF90aGlzOS5faWdub3JlQmFja2Ryb3BDbGljaykge1xuICAgICAgICAgICAgX3RoaXM5Ll9pZ25vcmVCYWNrZHJvcENsaWNrID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCAhPT0gZXZlbnQuY3VycmVudFRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIF90aGlzOS5fdHJpZ2dlckJhY2tkcm9wVHJhbnNpdGlvbigpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoYW5pbWF0ZSkge1xuICAgICAgICAgIFV0aWwucmVmbG93KHRoaXMuX2JhY2tkcm9wKTtcbiAgICAgICAgfVxuXG4gICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzLl9iYWNrZHJvcCkuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9TSE9XJDMpO1xuXG4gICAgICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWFuaW1hdGUpIHtcbiAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fYmFja2Ryb3ApO1xuICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcy5fYmFja2Ryb3ApLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBjYWxsYmFjaykuZW11bGF0ZVRyYW5zaXRpb25FbmQoYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24pO1xuICAgICAgfSBlbHNlIGlmICghdGhpcy5faXNTaG93biAmJiB0aGlzLl9iYWNrZHJvcCkge1xuICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcy5fYmFja2Ryb3ApLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfU0hPVyQzKTtcblxuICAgICAgICB2YXIgY2FsbGJhY2tSZW1vdmUgPSBmdW5jdGlvbiBjYWxsYmFja1JlbW92ZSgpIHtcbiAgICAgICAgICBfdGhpczkuX3JlbW92ZUJhY2tkcm9wKCk7XG5cbiAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICgkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9GQURFJDEpKSB7XG4gICAgICAgICAgdmFyIF9iYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fYmFja2Ryb3ApO1xuXG4gICAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMuX2JhY2tkcm9wKS5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgY2FsbGJhY2tSZW1vdmUpLmVtdWxhdGVUcmFuc2l0aW9uRW5kKF9iYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2FsbGJhY2tSZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH0gLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIHRoZSBmb2xsb3dpbmcgbWV0aG9kcyBhcmUgdXNlZCB0byBoYW5kbGUgb3ZlcmZsb3dpbmcgbW9kYWxzXG4gICAgLy8gdG9kbyAoZmF0KTogdGhlc2Ugc2hvdWxkIHByb2JhYmx5IGJlIHJlZmFjdG9yZWQgb3V0IG9mIG1vZGFsLmpzXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIDtcblxuICAgIF9wcm90by5fYWRqdXN0RGlhbG9nID0gZnVuY3Rpb24gX2FkanVzdERpYWxvZygpIHtcbiAgICAgIHZhciBpc01vZGFsT3ZlcmZsb3dpbmcgPSB0aGlzLl9lbGVtZW50LnNjcm9sbEhlaWdodCA+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cbiAgICAgIGlmICghdGhpcy5faXNCb2R5T3ZlcmZsb3dpbmcgJiYgaXNNb2RhbE92ZXJmbG93aW5nKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ0xlZnQgPSB0aGlzLl9zY3JvbGxiYXJXaWR0aCArIFwicHhcIjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2lzQm9keU92ZXJmbG93aW5nICYmICFpc01vZGFsT3ZlcmZsb3dpbmcpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5wYWRkaW5nUmlnaHQgPSB0aGlzLl9zY3JvbGxiYXJXaWR0aCArIFwicHhcIjtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLl9yZXNldEFkanVzdG1lbnRzID0gZnVuY3Rpb24gX3Jlc2V0QWRqdXN0bWVudHMoKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdMZWZ0ID0gJyc7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdSaWdodCA9ICcnO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2NoZWNrU2Nyb2xsYmFyID0gZnVuY3Rpb24gX2NoZWNrU2Nyb2xsYmFyKCkge1xuICAgICAgdmFyIHJlY3QgPSBkb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgdGhpcy5faXNCb2R5T3ZlcmZsb3dpbmcgPSBNYXRoLnJvdW5kKHJlY3QubGVmdCArIHJlY3QucmlnaHQpIDwgd2luZG93LmlubmVyV2lkdGg7XG4gICAgICB0aGlzLl9zY3JvbGxiYXJXaWR0aCA9IHRoaXMuX2dldFNjcm9sbGJhcldpZHRoKCk7XG4gICAgfTtcblxuICAgIF9wcm90by5fc2V0U2Nyb2xsYmFyID0gZnVuY3Rpb24gX3NldFNjcm9sbGJhcigpIHtcbiAgICAgIHZhciBfdGhpczEwID0gdGhpcztcblxuICAgICAgaWYgKHRoaXMuX2lzQm9keU92ZXJmbG93aW5nKSB7XG4gICAgICAgIC8vIE5vdGU6IERPTU5vZGUuc3R5bGUucGFkZGluZ1JpZ2h0IHJldHVybnMgdGhlIGFjdHVhbCB2YWx1ZSBvciAnJyBpZiBub3Qgc2V0XG4gICAgICAgIC8vICAgd2hpbGUgJChET01Ob2RlKS5jc3MoJ3BhZGRpbmctcmlnaHQnKSByZXR1cm5zIHRoZSBjYWxjdWxhdGVkIHZhbHVlIG9yIDAgaWYgbm90IHNldFxuICAgICAgICB2YXIgZml4ZWRDb250ZW50ID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNFTEVDVE9SX0ZJWEVEX0NPTlRFTlQpKTtcbiAgICAgICAgdmFyIHN0aWNreUNvbnRlbnQgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU0VMRUNUT1JfU1RJQ0tZX0NPTlRFTlQpKTsgLy8gQWRqdXN0IGZpeGVkIGNvbnRlbnQgcGFkZGluZ1xuXG4gICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShmaXhlZENvbnRlbnQpLmVhY2goZnVuY3Rpb24gKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICAgICAgdmFyIGFjdHVhbFBhZGRpbmcgPSBlbGVtZW50LnN0eWxlLnBhZGRpbmdSaWdodDtcbiAgICAgICAgICB2YXIgY2FsY3VsYXRlZFBhZGRpbmcgPSAkX19kZWZhdWx0WydkZWZhdWx0J10oZWxlbWVudCkuY3NzKCdwYWRkaW5nLXJpZ2h0Jyk7XG4gICAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKGVsZW1lbnQpLmRhdGEoJ3BhZGRpbmctcmlnaHQnLCBhY3R1YWxQYWRkaW5nKS5jc3MoJ3BhZGRpbmctcmlnaHQnLCBwYXJzZUZsb2F0KGNhbGN1bGF0ZWRQYWRkaW5nKSArIF90aGlzMTAuX3Njcm9sbGJhcldpZHRoICsgXCJweFwiKTtcbiAgICAgICAgfSk7IC8vIEFkanVzdCBzdGlja3kgY29udGVudCBtYXJnaW5cblxuICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oc3RpY2t5Q29udGVudCkuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGVsZW1lbnQpIHtcbiAgICAgICAgICB2YXIgYWN0dWFsTWFyZ2luID0gZWxlbWVudC5zdHlsZS5tYXJnaW5SaWdodDtcbiAgICAgICAgICB2YXIgY2FsY3VsYXRlZE1hcmdpbiA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShlbGVtZW50KS5jc3MoJ21hcmdpbi1yaWdodCcpO1xuICAgICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShlbGVtZW50KS5kYXRhKCdtYXJnaW4tcmlnaHQnLCBhY3R1YWxNYXJnaW4pLmNzcygnbWFyZ2luLXJpZ2h0JywgcGFyc2VGbG9hdChjYWxjdWxhdGVkTWFyZ2luKSAtIF90aGlzMTAuX3Njcm9sbGJhcldpZHRoICsgXCJweFwiKTtcbiAgICAgICAgfSk7IC8vIEFkanVzdCBib2R5IHBhZGRpbmdcblxuICAgICAgICB2YXIgYWN0dWFsUGFkZGluZyA9IGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0O1xuICAgICAgICB2YXIgY2FsY3VsYXRlZFBhZGRpbmcgPSAkX19kZWZhdWx0WydkZWZhdWx0J10oZG9jdW1lbnQuYm9keSkuY3NzKCdwYWRkaW5nLXJpZ2h0Jyk7XG4gICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShkb2N1bWVudC5ib2R5KS5kYXRhKCdwYWRkaW5nLXJpZ2h0JywgYWN0dWFsUGFkZGluZykuY3NzKCdwYWRkaW5nLXJpZ2h0JywgcGFyc2VGbG9hdChjYWxjdWxhdGVkUGFkZGluZykgKyB0aGlzLl9zY3JvbGxiYXJXaWR0aCArIFwicHhcIik7XG4gICAgICB9XG5cbiAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShkb2N1bWVudC5ib2R5KS5hZGRDbGFzcyhDTEFTU19OQU1FX09QRU4pO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX3Jlc2V0U2Nyb2xsYmFyID0gZnVuY3Rpb24gX3Jlc2V0U2Nyb2xsYmFyKCkge1xuICAgICAgLy8gUmVzdG9yZSBmaXhlZCBjb250ZW50IHBhZGRpbmdcbiAgICAgIHZhciBmaXhlZENvbnRlbnQgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU0VMRUNUT1JfRklYRURfQ09OVEVOVCkpO1xuICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKGZpeGVkQ29udGVudCkuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIHBhZGRpbmcgPSAkX19kZWZhdWx0WydkZWZhdWx0J10oZWxlbWVudCkuZGF0YSgncGFkZGluZy1yaWdodCcpO1xuICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oZWxlbWVudCkucmVtb3ZlRGF0YSgncGFkZGluZy1yaWdodCcpO1xuICAgICAgICBlbGVtZW50LnN0eWxlLnBhZGRpbmdSaWdodCA9IHBhZGRpbmcgPyBwYWRkaW5nIDogJyc7XG4gICAgICB9KTsgLy8gUmVzdG9yZSBzdGlja3kgY29udGVudFxuXG4gICAgICB2YXIgZWxlbWVudHMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJcIiArIFNFTEVDVE9SX1NUSUNLWV9DT05URU5UKSk7XG4gICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oZWxlbWVudHMpLmVhY2goZnVuY3Rpb24gKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICAgIHZhciBtYXJnaW4gPSAkX19kZWZhdWx0WydkZWZhdWx0J10oZWxlbWVudCkuZGF0YSgnbWFyZ2luLXJpZ2h0Jyk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBtYXJnaW4gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKGVsZW1lbnQpLmNzcygnbWFyZ2luLXJpZ2h0JywgbWFyZ2luKS5yZW1vdmVEYXRhKCdtYXJnaW4tcmlnaHQnKTtcbiAgICAgICAgfVxuICAgICAgfSk7IC8vIFJlc3RvcmUgYm9keSBwYWRkaW5nXG5cbiAgICAgIHZhciBwYWRkaW5nID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddKGRvY3VtZW50LmJvZHkpLmRhdGEoJ3BhZGRpbmctcmlnaHQnKTtcbiAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShkb2N1bWVudC5ib2R5KS5yZW1vdmVEYXRhKCdwYWRkaW5nLXJpZ2h0Jyk7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IHBhZGRpbmcgPyBwYWRkaW5nIDogJyc7XG4gICAgfTtcblxuICAgIF9wcm90by5fZ2V0U2Nyb2xsYmFyV2lkdGggPSBmdW5jdGlvbiBfZ2V0U2Nyb2xsYmFyV2lkdGgoKSB7XG4gICAgICAvLyB0aHggZC53YWxzaFxuICAgICAgdmFyIHNjcm9sbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgc2Nyb2xsRGl2LmNsYXNzTmFtZSA9IENMQVNTX05BTUVfU0NST0xMQkFSX01FQVNVUkVSO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JvbGxEaXYpO1xuICAgICAgdmFyIHNjcm9sbGJhcldpZHRoID0gc2Nyb2xsRGl2LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIC0gc2Nyb2xsRGl2LmNsaWVudFdpZHRoO1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzY3JvbGxEaXYpO1xuICAgICAgcmV0dXJuIHNjcm9sbGJhcldpZHRoO1xuICAgIH0gLy8gU3RhdGljXG4gICAgO1xuXG4gICAgTW9kYWwuX2pRdWVyeUludGVyZmFjZSA9IGZ1bmN0aW9uIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnLCByZWxhdGVkVGFyZ2V0KSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRhdGEgPSAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcykuZGF0YShEQVRBX0tFWSQ1KTtcblxuICAgICAgICB2YXIgX2NvbmZpZyA9IF9leHRlbmRzKHt9LCBEZWZhdWx0JDMsICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKS5kYXRhKCksIHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZyA/IGNvbmZpZyA6IHt9KTtcblxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICBkYXRhID0gbmV3IE1vZGFsKHRoaXMsIF9jb25maWcpO1xuICAgICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKS5kYXRhKERBVEFfS0VZJDUsIGRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTm8gbWV0aG9kIG5hbWVkIFxcXCJcIiArIGNvbmZpZyArIFwiXFxcIlwiKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkYXRhW2NvbmZpZ10ocmVsYXRlZFRhcmdldCk7XG4gICAgICAgIH0gZWxzZSBpZiAoX2NvbmZpZy5zaG93KSB7XG4gICAgICAgICAgZGF0YS5zaG93KHJlbGF0ZWRUYXJnZXQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX2NyZWF0ZUNsYXNzKE1vZGFsLCBudWxsLCBbe1xuICAgICAga2V5OiBcIlZFUlNJT05cIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gVkVSU0lPTiQ1O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJEZWZhdWx0XCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIERlZmF1bHQkMztcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gTW9kYWw7XG4gIH0oKTtcbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cblxuICAkX19kZWZhdWx0WydkZWZhdWx0J10oZG9jdW1lbnQpLm9uKEVWRU5UX0NMSUNLX0RBVEFfQVBJJDUsIFNFTEVDVE9SX0RBVEFfVE9HR0xFJDMsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIHZhciBfdGhpczExID0gdGhpcztcblxuICAgIHZhciB0YXJnZXQ7XG4gICAgdmFyIHNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KHRoaXMpO1xuXG4gICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICB9XG5cbiAgICB2YXIgY29uZmlnID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRhcmdldCkuZGF0YShEQVRBX0tFWSQ1KSA/ICd0b2dnbGUnIDogX2V4dGVuZHMoe30sICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0YXJnZXQpLmRhdGEoKSwgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMpLmRhdGEoKSk7XG5cbiAgICBpZiAodGhpcy50YWdOYW1lID09PSAnQScgfHwgdGhpcy50YWdOYW1lID09PSAnQVJFQScpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgdmFyICR0YXJnZXQgPSAkX19kZWZhdWx0WydkZWZhdWx0J10odGFyZ2V0KS5vbmUoRVZFTlRfU0hPVyQyLCBmdW5jdGlvbiAoc2hvd0V2ZW50KSB7XG4gICAgICBpZiAoc2hvd0V2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgIC8vIE9ubHkgcmVnaXN0ZXIgZm9jdXMgcmVzdG9yZXIgaWYgbW9kYWwgd2lsbCBhY3R1YWxseSBnZXQgc2hvd25cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAkdGFyZ2V0Lm9uZShFVkVOVF9ISURERU4kMiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoJF9fZGVmYXVsdFsnZGVmYXVsdCddKF90aGlzMTEpLmlzKCc6dmlzaWJsZScpKSB7XG4gICAgICAgICAgX3RoaXMxMS5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIE1vZGFsLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkX19kZWZhdWx0WydkZWZhdWx0J10odGFyZ2V0KSwgY29uZmlnLCB0aGlzKTtcbiAgfSk7XG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogalF1ZXJ5XG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAkX19kZWZhdWx0WydkZWZhdWx0J10uZm5bTkFNRSQ1XSA9IE1vZGFsLl9qUXVlcnlJbnRlcmZhY2U7XG4gICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJDVdLkNvbnN0cnVjdG9yID0gTW9kYWw7XG5cbiAgJF9fZGVmYXVsdFsnZGVmYXVsdCddLmZuW05BTUUkNV0ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkX19kZWZhdWx0WydkZWZhdWx0J10uZm5bTkFNRSQ1XSA9IEpRVUVSWV9OT19DT05GTElDVCQ1O1xuICAgIHJldHVybiBNb2RhbC5falF1ZXJ5SW50ZXJmYWNlO1xuICB9O1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgKHY0LjUuMyk6IHRvb2xzL3Nhbml0aXplci5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG4gIHZhciB1cmlBdHRycyA9IFsnYmFja2dyb3VuZCcsICdjaXRlJywgJ2hyZWYnLCAnaXRlbXR5cGUnLCAnbG9uZ2Rlc2MnLCAncG9zdGVyJywgJ3NyYycsICd4bGluazpocmVmJ107XG4gIHZhciBBUklBX0FUVFJJQlVURV9QQVRURVJOID0gL15hcmlhLVtcXHctXSokL2k7XG4gIHZhciBEZWZhdWx0V2hpdGVsaXN0ID0ge1xuICAgIC8vIEdsb2JhbCBhdHRyaWJ1dGVzIGFsbG93ZWQgb24gYW55IHN1cHBsaWVkIGVsZW1lbnQgYmVsb3cuXG4gICAgJyonOiBbJ2NsYXNzJywgJ2RpcicsICdpZCcsICdsYW5nJywgJ3JvbGUnLCBBUklBX0FUVFJJQlVURV9QQVRURVJOXSxcbiAgICBhOiBbJ3RhcmdldCcsICdocmVmJywgJ3RpdGxlJywgJ3JlbCddLFxuICAgIGFyZWE6IFtdLFxuICAgIGI6IFtdLFxuICAgIGJyOiBbXSxcbiAgICBjb2w6IFtdLFxuICAgIGNvZGU6IFtdLFxuICAgIGRpdjogW10sXG4gICAgZW06IFtdLFxuICAgIGhyOiBbXSxcbiAgICBoMTogW10sXG4gICAgaDI6IFtdLFxuICAgIGgzOiBbXSxcbiAgICBoNDogW10sXG4gICAgaDU6IFtdLFxuICAgIGg2OiBbXSxcbiAgICBpOiBbXSxcbiAgICBpbWc6IFsnc3JjJywgJ3NyY3NldCcsICdhbHQnLCAndGl0bGUnLCAnd2lkdGgnLCAnaGVpZ2h0J10sXG4gICAgbGk6IFtdLFxuICAgIG9sOiBbXSxcbiAgICBwOiBbXSxcbiAgICBwcmU6IFtdLFxuICAgIHM6IFtdLFxuICAgIHNtYWxsOiBbXSxcbiAgICBzcGFuOiBbXSxcbiAgICBzdWI6IFtdLFxuICAgIHN1cDogW10sXG4gICAgc3Ryb25nOiBbXSxcbiAgICB1OiBbXSxcbiAgICB1bDogW11cbiAgfTtcbiAgLyoqXG4gICAqIEEgcGF0dGVybiB0aGF0IHJlY29nbml6ZXMgYSBjb21tb25seSB1c2VmdWwgc3Vic2V0IG9mIFVSTHMgdGhhdCBhcmUgc2FmZS5cbiAgICpcbiAgICogU2hvdXRvdXQgdG8gQW5ndWxhciA3IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi83LjIuNC9wYWNrYWdlcy9jb3JlL3NyYy9zYW5pdGl6YXRpb24vdXJsX3Nhbml0aXplci50c1xuICAgKi9cblxuICB2YXIgU0FGRV9VUkxfUEFUVEVSTiA9IC9eKD86KD86aHR0cHM/fG1haWx0b3xmdHB8dGVsfGZpbGUpOnxbXiMmLzo/XSooPzpbIy8/XXwkKSkvZ2k7XG4gIC8qKlxuICAgKiBBIHBhdHRlcm4gdGhhdCBtYXRjaGVzIHNhZmUgZGF0YSBVUkxzLiBPbmx5IG1hdGNoZXMgaW1hZ2UsIHZpZGVvIGFuZCBhdWRpbyB0eXBlcy5cbiAgICpcbiAgICogU2hvdXRvdXQgdG8gQW5ndWxhciA3IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi83LjIuNC9wYWNrYWdlcy9jb3JlL3NyYy9zYW5pdGl6YXRpb24vdXJsX3Nhbml0aXplci50c1xuICAgKi9cblxuICB2YXIgREFUQV9VUkxfUEFUVEVSTiA9IC9eZGF0YTooPzppbWFnZVxcLyg/OmJtcHxnaWZ8anBlZ3xqcGd8cG5nfHRpZmZ8d2VicCl8dmlkZW9cXC8oPzptcGVnfG1wNHxvZ2d8d2VibSl8YXVkaW9cXC8oPzptcDN8b2dhfG9nZ3xvcHVzKSk7YmFzZTY0LFtcXGQrL2Etel0rPSokL2k7XG5cbiAgZnVuY3Rpb24gYWxsb3dlZEF0dHJpYnV0ZShhdHRyLCBhbGxvd2VkQXR0cmlidXRlTGlzdCkge1xuICAgIHZhciBhdHRyTmFtZSA9IGF0dHIubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgIGlmIChhbGxvd2VkQXR0cmlidXRlTGlzdC5pbmRleE9mKGF0dHJOYW1lKSAhPT0gLTEpIHtcbiAgICAgIGlmICh1cmlBdHRycy5pbmRleE9mKGF0dHJOYW1lKSAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIEJvb2xlYW4oYXR0ci5ub2RlVmFsdWUubWF0Y2goU0FGRV9VUkxfUEFUVEVSTikgfHwgYXR0ci5ub2RlVmFsdWUubWF0Y2goREFUQV9VUkxfUEFUVEVSTikpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgcmVnRXhwID0gYWxsb3dlZEF0dHJpYnV0ZUxpc3QuZmlsdGVyKGZ1bmN0aW9uIChhdHRyUmVnZXgpIHtcbiAgICAgIHJldHVybiBhdHRyUmVnZXggaW5zdGFuY2VvZiBSZWdFeHA7XG4gICAgfSk7IC8vIENoZWNrIGlmIGEgcmVndWxhciBleHByZXNzaW9uIHZhbGlkYXRlcyB0aGUgYXR0cmlidXRlLlxuXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHJlZ0V4cC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgaWYgKGF0dHJOYW1lLm1hdGNoKHJlZ0V4cFtpXSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gc2FuaXRpemVIdG1sKHVuc2FmZUh0bWwsIHdoaXRlTGlzdCwgc2FuaXRpemVGbikge1xuICAgIGlmICh1bnNhZmVIdG1sLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHVuc2FmZUh0bWw7XG4gICAgfVxuXG4gICAgaWYgKHNhbml0aXplRm4gJiYgdHlwZW9mIHNhbml0aXplRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBzYW5pdGl6ZUZuKHVuc2FmZUh0bWwpO1xuICAgIH1cblxuICAgIHZhciBkb21QYXJzZXIgPSBuZXcgd2luZG93LkRPTVBhcnNlcigpO1xuICAgIHZhciBjcmVhdGVkRG9jdW1lbnQgPSBkb21QYXJzZXIucGFyc2VGcm9tU3RyaW5nKHVuc2FmZUh0bWwsICd0ZXh0L2h0bWwnKTtcbiAgICB2YXIgd2hpdGVsaXN0S2V5cyA9IE9iamVjdC5rZXlzKHdoaXRlTGlzdCk7XG4gICAgdmFyIGVsZW1lbnRzID0gW10uc2xpY2UuY2FsbChjcmVhdGVkRG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yQWxsKCcqJykpO1xuXG4gICAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AoaSwgbGVuKSB7XG4gICAgICB2YXIgZWwgPSBlbGVtZW50c1tpXTtcbiAgICAgIHZhciBlbE5hbWUgPSBlbC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICBpZiAod2hpdGVsaXN0S2V5cy5pbmRleE9mKGVsLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpID09PSAtMSkge1xuICAgICAgICBlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKTtcbiAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgIH1cblxuICAgICAgdmFyIGF0dHJpYnV0ZUxpc3QgPSBbXS5zbGljZS5jYWxsKGVsLmF0dHJpYnV0ZXMpO1xuICAgICAgdmFyIHdoaXRlbGlzdGVkQXR0cmlidXRlcyA9IFtdLmNvbmNhdCh3aGl0ZUxpc3RbJyonXSB8fCBbXSwgd2hpdGVMaXN0W2VsTmFtZV0gfHwgW10pO1xuICAgICAgYXR0cmlidXRlTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgIGlmICghYWxsb3dlZEF0dHJpYnV0ZShhdHRyLCB3aGl0ZWxpc3RlZEF0dHJpYnV0ZXMpKSB7XG4gICAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKGF0dHIubm9kZU5hbWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGVsZW1lbnRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICB2YXIgX3JldCA9IF9sb29wKGkpO1xuXG4gICAgICBpZiAoX3JldCA9PT0gXCJjb250aW51ZVwiKSBjb250aW51ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlZERvY3VtZW50LmJvZHkuaW5uZXJIVE1MO1xuICB9XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBDb25zdGFudHNcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIHZhciBOQU1FJDYgPSAndG9vbHRpcCc7XG4gIHZhciBWRVJTSU9OJDYgPSAnNC41LjMnO1xuICB2YXIgREFUQV9LRVkkNiA9ICdicy50b29sdGlwJztcbiAgdmFyIEVWRU5UX0tFWSQ2ID0gXCIuXCIgKyBEQVRBX0tFWSQ2O1xuICB2YXIgSlFVRVJZX05PX0NPTkZMSUNUJDYgPSAkX19kZWZhdWx0WydkZWZhdWx0J10uZm5bTkFNRSQ2XTtcbiAgdmFyIENMQVNTX1BSRUZJWCA9ICdicy10b29sdGlwJztcbiAgdmFyIEJTQ0xTX1BSRUZJWF9SRUdFWCA9IG5ldyBSZWdFeHAoXCIoXnxcXFxccylcIiArIENMQVNTX1BSRUZJWCArIFwiXFxcXFMrXCIsICdnJyk7XG4gIHZhciBESVNBTExPV0VEX0FUVFJJQlVURVMgPSBbJ3Nhbml0aXplJywgJ3doaXRlTGlzdCcsICdzYW5pdGl6ZUZuJ107XG4gIHZhciBEZWZhdWx0VHlwZSQ0ID0ge1xuICAgIGFuaW1hdGlvbjogJ2Jvb2xlYW4nLFxuICAgIHRlbXBsYXRlOiAnc3RyaW5nJyxcbiAgICB0aXRsZTogJyhzdHJpbmd8ZWxlbWVudHxmdW5jdGlvbiknLFxuICAgIHRyaWdnZXI6ICdzdHJpbmcnLFxuICAgIGRlbGF5OiAnKG51bWJlcnxvYmplY3QpJyxcbiAgICBodG1sOiAnYm9vbGVhbicsXG4gICAgc2VsZWN0b3I6ICcoc3RyaW5nfGJvb2xlYW4pJyxcbiAgICBwbGFjZW1lbnQ6ICcoc3RyaW5nfGZ1bmN0aW9uKScsXG4gICAgb2Zmc2V0OiAnKG51bWJlcnxzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgICBjb250YWluZXI6ICcoc3RyaW5nfGVsZW1lbnR8Ym9vbGVhbiknLFxuICAgIGZhbGxiYWNrUGxhY2VtZW50OiAnKHN0cmluZ3xhcnJheSknLFxuICAgIGJvdW5kYXJ5OiAnKHN0cmluZ3xlbGVtZW50KScsXG4gICAgc2FuaXRpemU6ICdib29sZWFuJyxcbiAgICBzYW5pdGl6ZUZuOiAnKG51bGx8ZnVuY3Rpb24pJyxcbiAgICB3aGl0ZUxpc3Q6ICdvYmplY3QnLFxuICAgIHBvcHBlckNvbmZpZzogJyhudWxsfG9iamVjdCknXG4gIH07XG4gIHZhciBBdHRhY2htZW50TWFwID0ge1xuICAgIEFVVE86ICdhdXRvJyxcbiAgICBUT1A6ICd0b3AnLFxuICAgIFJJR0hUOiAncmlnaHQnLFxuICAgIEJPVFRPTTogJ2JvdHRvbScsXG4gICAgTEVGVDogJ2xlZnQnXG4gIH07XG4gIHZhciBEZWZhdWx0JDQgPSB7XG4gICAgYW5pbWF0aW9uOiB0cnVlLFxuICAgIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cInRvb2x0aXBcIiByb2xlPVwidG9vbHRpcFwiPicgKyAnPGRpdiBjbGFzcz1cImFycm93XCI+PC9kaXY+JyArICc8ZGl2IGNsYXNzPVwidG9vbHRpcC1pbm5lclwiPjwvZGl2PjwvZGl2PicsXG4gICAgdHJpZ2dlcjogJ2hvdmVyIGZvY3VzJyxcbiAgICB0aXRsZTogJycsXG4gICAgZGVsYXk6IDAsXG4gICAgaHRtbDogZmFsc2UsXG4gICAgc2VsZWN0b3I6IGZhbHNlLFxuICAgIHBsYWNlbWVudDogJ3RvcCcsXG4gICAgb2Zmc2V0OiAwLFxuICAgIGNvbnRhaW5lcjogZmFsc2UsXG4gICAgZmFsbGJhY2tQbGFjZW1lbnQ6ICdmbGlwJyxcbiAgICBib3VuZGFyeTogJ3Njcm9sbFBhcmVudCcsXG4gICAgc2FuaXRpemU6IHRydWUsXG4gICAgc2FuaXRpemVGbjogbnVsbCxcbiAgICB3aGl0ZUxpc3Q6IERlZmF1bHRXaGl0ZWxpc3QsXG4gICAgcG9wcGVyQ29uZmlnOiBudWxsXG4gIH07XG4gIHZhciBIT1ZFUl9TVEFURV9TSE9XID0gJ3Nob3cnO1xuICB2YXIgSE9WRVJfU1RBVEVfT1VUID0gJ291dCc7XG4gIHZhciBFdmVudCA9IHtcbiAgICBISURFOiBcImhpZGVcIiArIEVWRU5UX0tFWSQ2LFxuICAgIEhJRERFTjogXCJoaWRkZW5cIiArIEVWRU5UX0tFWSQ2LFxuICAgIFNIT1c6IFwic2hvd1wiICsgRVZFTlRfS0VZJDYsXG4gICAgU0hPV046IFwic2hvd25cIiArIEVWRU5UX0tFWSQ2LFxuICAgIElOU0VSVEVEOiBcImluc2VydGVkXCIgKyBFVkVOVF9LRVkkNixcbiAgICBDTElDSzogXCJjbGlja1wiICsgRVZFTlRfS0VZJDYsXG4gICAgRk9DVVNJTjogXCJmb2N1c2luXCIgKyBFVkVOVF9LRVkkNixcbiAgICBGT0NVU09VVDogXCJmb2N1c291dFwiICsgRVZFTlRfS0VZJDYsXG4gICAgTU9VU0VFTlRFUjogXCJtb3VzZWVudGVyXCIgKyBFVkVOVF9LRVkkNixcbiAgICBNT1VTRUxFQVZFOiBcIm1vdXNlbGVhdmVcIiArIEVWRU5UX0tFWSQ2XG4gIH07XG4gIHZhciBDTEFTU19OQU1FX0ZBREUkMiA9ICdmYWRlJztcbiAgdmFyIENMQVNTX05BTUVfU0hPVyQ0ID0gJ3Nob3cnO1xuICB2YXIgU0VMRUNUT1JfVE9PTFRJUF9JTk5FUiA9ICcudG9vbHRpcC1pbm5lcic7XG4gIHZhciBTRUxFQ1RPUl9BUlJPVyA9ICcuYXJyb3cnO1xuICB2YXIgVFJJR0dFUl9IT1ZFUiA9ICdob3Zlcic7XG4gIHZhciBUUklHR0VSX0ZPQ1VTID0gJ2ZvY3VzJztcbiAgdmFyIFRSSUdHRVJfQ0xJQ0sgPSAnY2xpY2snO1xuICB2YXIgVFJJR0dFUl9NQU5VQUwgPSAnbWFudWFsJztcbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBDbGFzcyBEZWZpbml0aW9uXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICB2YXIgVG9vbHRpcCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVG9vbHRpcChlbGVtZW50LCBjb25maWcpIHtcbiAgICAgIGlmICh0eXBlb2YgUG9wcGVyX19kZWZhdWx0WydkZWZhdWx0J10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Jvb3RzdHJhcFxcJ3MgdG9vbHRpcHMgcmVxdWlyZSBQb3BwZXIuanMgKGh0dHBzOi8vcG9wcGVyLmpzLm9yZy8pJyk7XG4gICAgICB9IC8vIHByaXZhdGVcblxuXG4gICAgICB0aGlzLl9pc0VuYWJsZWQgPSB0cnVlO1xuICAgICAgdGhpcy5fdGltZW91dCA9IDA7XG4gICAgICB0aGlzLl9ob3ZlclN0YXRlID0gJyc7XG4gICAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyID0ge307XG4gICAgICB0aGlzLl9wb3BwZXIgPSBudWxsOyAvLyBQcm90ZWN0ZWRcblxuICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZyk7XG4gICAgICB0aGlzLnRpcCA9IG51bGw7XG5cbiAgICAgIHRoaXMuX3NldExpc3RlbmVycygpO1xuICAgIH0gLy8gR2V0dGVyc1xuXG5cbiAgICB2YXIgX3Byb3RvID0gVG9vbHRpcC5wcm90b3R5cGU7XG5cbiAgICAvLyBQdWJsaWNcbiAgICBfcHJvdG8uZW5hYmxlID0gZnVuY3Rpb24gZW5hYmxlKCkge1xuICAgICAgdGhpcy5faXNFbmFibGVkID0gdHJ1ZTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLmRpc2FibGUgPSBmdW5jdGlvbiBkaXNhYmxlKCkge1xuICAgICAgdGhpcy5faXNFbmFibGVkID0gZmFsc2U7XG4gICAgfTtcblxuICAgIF9wcm90by50b2dnbGVFbmFibGVkID0gZnVuY3Rpb24gdG9nZ2xlRW5hYmxlZCgpIHtcbiAgICAgIHRoaXMuX2lzRW5hYmxlZCA9ICF0aGlzLl9pc0VuYWJsZWQ7XG4gICAgfTtcblxuICAgIF9wcm90by50b2dnbGUgPSBmdW5jdGlvbiB0b2dnbGUoZXZlbnQpIHtcbiAgICAgIGlmICghdGhpcy5faXNFbmFibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgIHZhciBkYXRhS2V5ID0gdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWTtcbiAgICAgICAgdmFyIGNvbnRleHQgPSAkX19kZWZhdWx0WydkZWZhdWx0J10oZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YShkYXRhS2V5KTtcblxuICAgICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgICBjb250ZXh0ID0gbmV3IHRoaXMuY29uc3RydWN0b3IoZXZlbnQuY3VycmVudFRhcmdldCwgdGhpcy5fZ2V0RGVsZWdhdGVDb25maWcoKSk7XG4gICAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSwgY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Ll9hY3RpdmVUcmlnZ2VyLmNsaWNrID0gIWNvbnRleHQuX2FjdGl2ZVRyaWdnZXIuY2xpY2s7XG5cbiAgICAgICAgaWYgKGNvbnRleHQuX2lzV2l0aEFjdGl2ZVRyaWdnZXIoKSkge1xuICAgICAgICAgIGNvbnRleHQuX2VudGVyKG51bGwsIGNvbnRleHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnRleHQuX2xlYXZlKG51bGwsIGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMuZ2V0VGlwRWxlbWVudCgpKS5oYXNDbGFzcyhDTEFTU19OQU1FX1NIT1ckNCkpIHtcbiAgICAgICAgICB0aGlzLl9sZWF2ZShudWxsLCB0aGlzKTtcblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2VudGVyKG51bGwsIHRoaXMpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8uZGlzcG9zZSA9IGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dCk7XG4gICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10ucmVtb3ZlRGF0YSh0aGlzLmVsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVkpO1xuICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMuZWxlbWVudCkub2ZmKHRoaXMuY29uc3RydWN0b3IuRVZFTlRfS0VZKTtcbiAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzLmVsZW1lbnQpLmNsb3Nlc3QoJy5tb2RhbCcpLm9mZignaGlkZS5icy5tb2RhbCcsIHRoaXMuX2hpZGVNb2RhbEhhbmRsZXIpO1xuXG4gICAgICBpZiAodGhpcy50aXApIHtcbiAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMudGlwKS5yZW1vdmUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5faXNFbmFibGVkID0gbnVsbDtcbiAgICAgIHRoaXMuX3RpbWVvdXQgPSBudWxsO1xuICAgICAgdGhpcy5faG92ZXJTdGF0ZSA9IG51bGw7XG4gICAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyID0gbnVsbDtcblxuICAgICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9wb3BwZXIgPSBudWxsO1xuICAgICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgICAgIHRoaXMuY29uZmlnID0gbnVsbDtcbiAgICAgIHRoaXMudGlwID0gbnVsbDtcbiAgICB9O1xuXG4gICAgX3Byb3RvLnNob3cgPSBmdW5jdGlvbiBzaG93KCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgaWYgKCRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzLmVsZW1lbnQpLmNzcygnZGlzcGxheScpID09PSAnbm9uZScpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgdXNlIHNob3cgb24gdmlzaWJsZSBlbGVtZW50cycpO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2hvd0V2ZW50ID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddLkV2ZW50KHRoaXMuY29uc3RydWN0b3IuRXZlbnQuU0hPVyk7XG5cbiAgICAgIGlmICh0aGlzLmlzV2l0aENvbnRlbnQoKSAmJiB0aGlzLl9pc0VuYWJsZWQpIHtcbiAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMuZWxlbWVudCkudHJpZ2dlcihzaG93RXZlbnQpO1xuICAgICAgICB2YXIgc2hhZG93Um9vdCA9IFV0aWwuZmluZFNoYWRvd1Jvb3QodGhpcy5lbGVtZW50KTtcbiAgICAgICAgdmFyIGlzSW5UaGVEb20gPSAkX19kZWZhdWx0WydkZWZhdWx0J10uY29udGFpbnMoc2hhZG93Um9vdCAhPT0gbnVsbCA/IHNoYWRvd1Jvb3QgOiB0aGlzLmVsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHRoaXMuZWxlbWVudCk7XG5cbiAgICAgICAgaWYgKHNob3dFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSB8fCAhaXNJblRoZURvbSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0aXAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKTtcbiAgICAgICAgdmFyIHRpcElkID0gVXRpbC5nZXRVSUQodGhpcy5jb25zdHJ1Y3Rvci5OQU1FKTtcbiAgICAgICAgdGlwLnNldEF0dHJpYnV0ZSgnaWQnLCB0aXBJZCk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCB0aXBJZCk7XG4gICAgICAgIHRoaXMuc2V0Q29udGVudCgpO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5hbmltYXRpb24pIHtcbiAgICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10odGlwKS5hZGRDbGFzcyhDTEFTU19OQU1FX0ZBREUkMik7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcGxhY2VtZW50ID0gdHlwZW9mIHRoaXMuY29uZmlnLnBsYWNlbWVudCA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuY29uZmlnLnBsYWNlbWVudC5jYWxsKHRoaXMsIHRpcCwgdGhpcy5lbGVtZW50KSA6IHRoaXMuY29uZmlnLnBsYWNlbWVudDtcblxuICAgICAgICB2YXIgYXR0YWNobWVudCA9IHRoaXMuX2dldEF0dGFjaG1lbnQocGxhY2VtZW50KTtcblxuICAgICAgICB0aGlzLmFkZEF0dGFjaG1lbnRDbGFzcyhhdHRhY2htZW50KTtcblxuICAgICAgICB2YXIgY29udGFpbmVyID0gdGhpcy5fZ2V0Q29udGFpbmVyKCk7XG5cbiAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRpcCkuZGF0YSh0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZLCB0aGlzKTtcblxuICAgICAgICBpZiAoISRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5jb250YWlucyh0aGlzLmVsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHRoaXMudGlwKSkge1xuICAgICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aXApLmFwcGVuZFRvKGNvbnRhaW5lcik7XG4gICAgICAgIH1cblxuICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcy5lbGVtZW50KS50cmlnZ2VyKHRoaXMuY29uc3RydWN0b3IuRXZlbnQuSU5TRVJURUQpO1xuICAgICAgICB0aGlzLl9wb3BwZXIgPSBuZXcgUG9wcGVyX19kZWZhdWx0WydkZWZhdWx0J10odGhpcy5lbGVtZW50LCB0aXAsIHRoaXMuX2dldFBvcHBlckNvbmZpZyhhdHRhY2htZW50KSk7XG4gICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aXApLmFkZENsYXNzKENMQVNTX05BTUVfU0hPVyQ0KTsgLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIGFkZCBleHRyYVxuICAgICAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHRvIHRoZSBib2R5J3MgaW1tZWRpYXRlIGNoaWxkcmVuO1xuICAgICAgICAvLyBvbmx5IG5lZWRlZCBiZWNhdXNlIG9mIGJyb2tlbiBldmVudCBkZWxlZ2F0aW9uIG9uIGlPU1xuICAgICAgICAvLyBodHRwczovL3d3dy5xdWlya3Ntb2RlLm9yZy9ibG9nL2FyY2hpdmVzLzIwMTQvMDIvbW91c2VfZXZlbnRfYnViLmh0bWxcblxuICAgICAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKGRvY3VtZW50LmJvZHkpLmNoaWxkcmVuKCkub24oJ21vdXNlb3ZlcicsIG51bGwsICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5ub29wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjb21wbGV0ZSA9IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgICAgIGlmIChfdGhpcy5jb25maWcuYW5pbWF0aW9uKSB7XG4gICAgICAgICAgICBfdGhpcy5fZml4VHJhbnNpdGlvbigpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBwcmV2SG92ZXJTdGF0ZSA9IF90aGlzLl9ob3ZlclN0YXRlO1xuICAgICAgICAgIF90aGlzLl9ob3ZlclN0YXRlID0gbnVsbDtcbiAgICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oX3RoaXMuZWxlbWVudCkudHJpZ2dlcihfdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5TSE9XTik7XG5cbiAgICAgICAgICBpZiAocHJldkhvdmVyU3RhdGUgPT09IEhPVkVSX1NUQVRFX09VVCkge1xuICAgICAgICAgICAgX3RoaXMuX2xlYXZlKG51bGwsIF90aGlzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzLnRpcCkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9GQURFJDIpKSB7XG4gICAgICAgICAgdmFyIHRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy50aXApO1xuICAgICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzLnRpcCkub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKS5lbXVsYXRlVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRHVyYXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLmhpZGUgPSBmdW5jdGlvbiBoaWRlKGNhbGxiYWNrKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIHRpcCA9IHRoaXMuZ2V0VGlwRWxlbWVudCgpO1xuICAgICAgdmFyIGhpZGVFdmVudCA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5FdmVudCh0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LkhJREUpO1xuXG4gICAgICB2YXIgY29tcGxldGUgPSBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgICAgaWYgKF90aGlzMi5faG92ZXJTdGF0ZSAhPT0gSE9WRVJfU1RBVEVfU0hPVyAmJiB0aXAucGFyZW50Tm9kZSkge1xuICAgICAgICAgIHRpcC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRpcCk7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpczIuX2NsZWFuVGlwQ2xhc3MoKTtcblxuICAgICAgICBfdGhpczIuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknKTtcblxuICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oX3RoaXMyLmVsZW1lbnQpLnRyaWdnZXIoX3RoaXMyLmNvbnN0cnVjdG9yLkV2ZW50LkhJRERFTik7XG5cbiAgICAgICAgaWYgKF90aGlzMi5fcG9wcGVyICE9PSBudWxsKSB7XG4gICAgICAgICAgX3RoaXMyLl9wb3BwZXIuZGVzdHJveSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMuZWxlbWVudCkudHJpZ2dlcihoaWRlRXZlbnQpO1xuXG4gICAgICBpZiAoaGlkZUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRpcCkucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9TSE9XJDQpOyAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgcmVtb3ZlIHRoZSBleHRyYVxuICAgICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB3ZSBhZGRlZCBmb3IgaU9TIHN1cHBvcnRcblxuICAgICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oZG9jdW1lbnQuYm9keSkuY2hpbGRyZW4oKS5vZmYoJ21vdXNlb3ZlcicsIG51bGwsICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5ub29wKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fYWN0aXZlVHJpZ2dlcltUUklHR0VSX0NMSUNLXSA9IGZhbHNlO1xuICAgICAgdGhpcy5fYWN0aXZlVHJpZ2dlcltUUklHR0VSX0ZPQ1VTXSA9IGZhbHNlO1xuICAgICAgdGhpcy5fYWN0aXZlVHJpZ2dlcltUUklHR0VSX0hPVkVSXSA9IGZhbHNlO1xuXG4gICAgICBpZiAoJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMudGlwKS5oYXNDbGFzcyhDTEFTU19OQU1FX0ZBREUkMikpIHtcbiAgICAgICAgdmFyIHRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGlwKTtcbiAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRpcCkub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKS5lbXVsYXRlVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRHVyYXRpb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tcGxldGUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5faG92ZXJTdGF0ZSA9ICcnO1xuICAgIH07XG5cbiAgICBfcHJvdG8udXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgICAgaWYgKHRoaXMuX3BvcHBlciAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLl9wb3BwZXIuc2NoZWR1bGVVcGRhdGUoKTtcbiAgICAgIH1cbiAgICB9IC8vIFByb3RlY3RlZFxuICAgIDtcblxuICAgIF9wcm90by5pc1dpdGhDb250ZW50ID0gZnVuY3Rpb24gaXNXaXRoQ29udGVudCgpIHtcbiAgICAgIHJldHVybiBCb29sZWFuKHRoaXMuZ2V0VGl0bGUoKSk7XG4gICAgfTtcblxuICAgIF9wcm90by5hZGRBdHRhY2htZW50Q2xhc3MgPSBmdW5jdGlvbiBhZGRBdHRhY2htZW50Q2xhc3MoYXR0YWNobWVudCkge1xuICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMuZ2V0VGlwRWxlbWVudCgpKS5hZGRDbGFzcyhDTEFTU19QUkVGSVggKyBcIi1cIiArIGF0dGFjaG1lbnQpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uZ2V0VGlwRWxlbWVudCA9IGZ1bmN0aW9uIGdldFRpcEVsZW1lbnQoKSB7XG4gICAgICB0aGlzLnRpcCA9IHRoaXMudGlwIHx8ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzLmNvbmZpZy50ZW1wbGF0ZSlbMF07XG4gICAgICByZXR1cm4gdGhpcy50aXA7XG4gICAgfTtcblxuICAgIF9wcm90by5zZXRDb250ZW50ID0gZnVuY3Rpb24gc2V0Q29udGVudCgpIHtcbiAgICAgIHZhciB0aXAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKTtcbiAgICAgIHRoaXMuc2V0RWxlbWVudENvbnRlbnQoJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRpcC5xdWVyeVNlbGVjdG9yQWxsKFNFTEVDVE9SX1RPT0xUSVBfSU5ORVIpKSwgdGhpcy5nZXRUaXRsZSgpKTtcbiAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aXApLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfRkFERSQyICsgXCIgXCIgKyBDTEFTU19OQU1FX1NIT1ckNCk7XG4gICAgfTtcblxuICAgIF9wcm90by5zZXRFbGVtZW50Q29udGVudCA9IGZ1bmN0aW9uIHNldEVsZW1lbnRDb250ZW50KCRlbGVtZW50LCBjb250ZW50KSB7XG4gICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdvYmplY3QnICYmIChjb250ZW50Lm5vZGVUeXBlIHx8IGNvbnRlbnQuanF1ZXJ5KSkge1xuICAgICAgICAvLyBDb250ZW50IGlzIGEgRE9NIG5vZGUgb3IgYSBqUXVlcnlcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmh0bWwpIHtcbiAgICAgICAgICBpZiAoISRfX2RlZmF1bHRbJ2RlZmF1bHQnXShjb250ZW50KS5wYXJlbnQoKS5pcygkZWxlbWVudCkpIHtcbiAgICAgICAgICAgICRlbGVtZW50LmVtcHR5KCkuYXBwZW5kKGNvbnRlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkZWxlbWVudC50ZXh0KCRfX2RlZmF1bHRbJ2RlZmF1bHQnXShjb250ZW50KS50ZXh0KCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5jb25maWcuaHRtbCkge1xuICAgICAgICBpZiAodGhpcy5jb25maWcuc2FuaXRpemUpIHtcbiAgICAgICAgICBjb250ZW50ID0gc2FuaXRpemVIdG1sKGNvbnRlbnQsIHRoaXMuY29uZmlnLndoaXRlTGlzdCwgdGhpcy5jb25maWcuc2FuaXRpemVGbik7XG4gICAgICAgIH1cblxuICAgICAgICAkZWxlbWVudC5odG1sKGNvbnRlbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJGVsZW1lbnQudGV4dChjb250ZW50KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLmdldFRpdGxlID0gZnVuY3Rpb24gZ2V0VGl0bGUoKSB7XG4gICAgICB2YXIgdGl0bGUgPSB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLW9yaWdpbmFsLXRpdGxlJyk7XG5cbiAgICAgIGlmICghdGl0bGUpIHtcbiAgICAgICAgdGl0bGUgPSB0eXBlb2YgdGhpcy5jb25maWcudGl0bGUgPT09ICdmdW5jdGlvbicgPyB0aGlzLmNvbmZpZy50aXRsZS5jYWxsKHRoaXMuZWxlbWVudCkgOiB0aGlzLmNvbmZpZy50aXRsZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRpdGxlO1xuICAgIH0gLy8gUHJpdmF0ZVxuICAgIDtcblxuICAgIF9wcm90by5fZ2V0UG9wcGVyQ29uZmlnID0gZnVuY3Rpb24gX2dldFBvcHBlckNvbmZpZyhhdHRhY2htZW50KSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdmFyIGRlZmF1bHRCc0NvbmZpZyA9IHtcbiAgICAgICAgcGxhY2VtZW50OiBhdHRhY2htZW50LFxuICAgICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgICBvZmZzZXQ6IHRoaXMuX2dldE9mZnNldCgpLFxuICAgICAgICAgIGZsaXA6IHtcbiAgICAgICAgICAgIGJlaGF2aW9yOiB0aGlzLmNvbmZpZy5mYWxsYmFja1BsYWNlbWVudFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYXJyb3c6IHtcbiAgICAgICAgICAgIGVsZW1lbnQ6IFNFTEVDVE9SX0FSUk9XXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwcmV2ZW50T3ZlcmZsb3c6IHtcbiAgICAgICAgICAgIGJvdW5kYXJpZXNFbGVtZW50OiB0aGlzLmNvbmZpZy5ib3VuZGFyeVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb25DcmVhdGU6IGZ1bmN0aW9uIG9uQ3JlYXRlKGRhdGEpIHtcbiAgICAgICAgICBpZiAoZGF0YS5vcmlnaW5hbFBsYWNlbWVudCAhPT0gZGF0YS5wbGFjZW1lbnQpIHtcbiAgICAgICAgICAgIF90aGlzMy5faGFuZGxlUG9wcGVyUGxhY2VtZW50Q2hhbmdlKGRhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb25VcGRhdGU6IGZ1bmN0aW9uIG9uVXBkYXRlKGRhdGEpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMzLl9oYW5kbGVQb3BwZXJQbGFjZW1lbnRDaGFuZ2UoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIGRlZmF1bHRCc0NvbmZpZywgdGhpcy5jb25maWcucG9wcGVyQ29uZmlnKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9nZXRPZmZzZXQgPSBmdW5jdGlvbiBfZ2V0T2Zmc2V0KCkge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIHZhciBvZmZzZXQgPSB7fTtcblxuICAgICAgaWYgKHR5cGVvZiB0aGlzLmNvbmZpZy5vZmZzZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgb2Zmc2V0LmZuID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICBkYXRhLm9mZnNldHMgPSBfZXh0ZW5kcyh7fSwgZGF0YS5vZmZzZXRzLCBfdGhpczQuY29uZmlnLm9mZnNldChkYXRhLm9mZnNldHMsIF90aGlzNC5lbGVtZW50KSB8fCB7fSk7XG4gICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvZmZzZXQub2Zmc2V0ID0gdGhpcy5jb25maWcub2Zmc2V0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gb2Zmc2V0O1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2dldENvbnRhaW5lciA9IGZ1bmN0aW9uIF9nZXRDb250YWluZXIoKSB7XG4gICAgICBpZiAodGhpcy5jb25maWcuY29udGFpbmVyID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuYm9keTtcbiAgICAgIH1cblxuICAgICAgaWYgKFV0aWwuaXNFbGVtZW50KHRoaXMuY29uZmlnLmNvbnRhaW5lcikpIHtcbiAgICAgICAgcmV0dXJuICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzLmNvbmZpZy5jb250YWluZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gJF9fZGVmYXVsdFsnZGVmYXVsdCddKGRvY3VtZW50KS5maW5kKHRoaXMuY29uZmlnLmNvbnRhaW5lcik7XG4gICAgfTtcblxuICAgIF9wcm90by5fZ2V0QXR0YWNobWVudCA9IGZ1bmN0aW9uIF9nZXRBdHRhY2htZW50KHBsYWNlbWVudCkge1xuICAgICAgcmV0dXJuIEF0dGFjaG1lbnRNYXBbcGxhY2VtZW50LnRvVXBwZXJDYXNlKCldO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX3NldExpc3RlbmVycyA9IGZ1bmN0aW9uIF9zZXRMaXN0ZW5lcnMoKSB7XG4gICAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgICAgdmFyIHRyaWdnZXJzID0gdGhpcy5jb25maWcudHJpZ2dlci5zcGxpdCgnICcpO1xuICAgICAgdHJpZ2dlcnMuZm9yRWFjaChmdW5jdGlvbiAodHJpZ2dlcikge1xuICAgICAgICBpZiAodHJpZ2dlciA9PT0gJ2NsaWNrJykge1xuICAgICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShfdGhpczUuZWxlbWVudCkub24oX3RoaXM1LmNvbnN0cnVjdG9yLkV2ZW50LkNMSUNLLCBfdGhpczUuY29uZmlnLnNlbGVjdG9yLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczUudG9nZ2xlKGV2ZW50KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICh0cmlnZ2VyICE9PSBUUklHR0VSX01BTlVBTCkge1xuICAgICAgICAgIHZhciBldmVudEluID0gdHJpZ2dlciA9PT0gVFJJR0dFUl9IT1ZFUiA/IF90aGlzNS5jb25zdHJ1Y3Rvci5FdmVudC5NT1VTRUVOVEVSIDogX3RoaXM1LmNvbnN0cnVjdG9yLkV2ZW50LkZPQ1VTSU47XG4gICAgICAgICAgdmFyIGV2ZW50T3V0ID0gdHJpZ2dlciA9PT0gVFJJR0dFUl9IT1ZFUiA/IF90aGlzNS5jb25zdHJ1Y3Rvci5FdmVudC5NT1VTRUxFQVZFIDogX3RoaXM1LmNvbnN0cnVjdG9yLkV2ZW50LkZPQ1VTT1VUO1xuICAgICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShfdGhpczUuZWxlbWVudCkub24oZXZlbnRJbiwgX3RoaXM1LmNvbmZpZy5zZWxlY3RvciwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXM1Ll9lbnRlcihldmVudCk7XG4gICAgICAgICAgfSkub24oZXZlbnRPdXQsIF90aGlzNS5jb25maWcuc2VsZWN0b3IsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzNS5fbGVhdmUoZXZlbnQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5faGlkZU1vZGFsSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKF90aGlzNS5lbGVtZW50KSB7XG4gICAgICAgICAgX3RoaXM1LmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMuZWxlbWVudCkuY2xvc2VzdCgnLm1vZGFsJykub24oJ2hpZGUuYnMubW9kYWwnLCB0aGlzLl9oaWRlTW9kYWxIYW5kbGVyKTtcblxuICAgICAgaWYgKHRoaXMuY29uZmlnLnNlbGVjdG9yKSB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gX2V4dGVuZHMoe30sIHRoaXMuY29uZmlnLCB7XG4gICAgICAgICAgdHJpZ2dlcjogJ21hbnVhbCcsXG4gICAgICAgICAgc2VsZWN0b3I6ICcnXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZml4VGl0bGUoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLl9maXhUaXRsZSA9IGZ1bmN0aW9uIF9maXhUaXRsZSgpIHtcbiAgICAgIHZhciB0aXRsZVR5cGUgPSB0eXBlb2YgdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1vcmlnaW5hbC10aXRsZScpO1xuXG4gICAgICBpZiAodGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgndGl0bGUnKSB8fCB0aXRsZVR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtb3JpZ2luYWwtdGl0bGUnLCB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0aXRsZScpIHx8ICcnKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgndGl0bGUnLCAnJyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5fZW50ZXIgPSBmdW5jdGlvbiBfZW50ZXIoZXZlbnQsIGNvbnRleHQpIHtcbiAgICAgIHZhciBkYXRhS2V5ID0gdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWTtcbiAgICAgIGNvbnRleHQgPSBjb250ZXh0IHx8ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKGRhdGFLZXkpO1xuXG4gICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgY29udGV4dCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKGV2ZW50LmN1cnJlbnRUYXJnZXQsIHRoaXMuX2dldERlbGVnYXRlQ29uZmlnKCkpO1xuICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YShkYXRhS2V5LCBjb250ZXh0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXJbZXZlbnQudHlwZSA9PT0gJ2ZvY3VzaW4nID8gVFJJR0dFUl9GT0NVUyA6IFRSSUdHRVJfSE9WRVJdID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCRfX2RlZmF1bHRbJ2RlZmF1bHQnXShjb250ZXh0LmdldFRpcEVsZW1lbnQoKSkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9TSE9XJDQpIHx8IGNvbnRleHQuX2hvdmVyU3RhdGUgPT09IEhPVkVSX1NUQVRFX1NIT1cpIHtcbiAgICAgICAgY29udGV4dC5faG92ZXJTdGF0ZSA9IEhPVkVSX1NUQVRFX1NIT1c7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY2xlYXJUaW1lb3V0KGNvbnRleHQuX3RpbWVvdXQpO1xuICAgICAgY29udGV4dC5faG92ZXJTdGF0ZSA9IEhPVkVSX1NUQVRFX1NIT1c7XG5cbiAgICAgIGlmICghY29udGV4dC5jb25maWcuZGVsYXkgfHwgIWNvbnRleHQuY29uZmlnLmRlbGF5LnNob3cpIHtcbiAgICAgICAgY29udGV4dC5zaG93KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5fdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoY29udGV4dC5faG92ZXJTdGF0ZSA9PT0gSE9WRVJfU1RBVEVfU0hPVykge1xuICAgICAgICAgIGNvbnRleHQuc2hvdygpO1xuICAgICAgICB9XG4gICAgICB9LCBjb250ZXh0LmNvbmZpZy5kZWxheS5zaG93KTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9sZWF2ZSA9IGZ1bmN0aW9uIF9sZWF2ZShldmVudCwgY29udGV4dCkge1xuICAgICAgdmFyIGRhdGFLZXkgPSB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZO1xuICAgICAgY29udGV4dCA9IGNvbnRleHQgfHwgJF9fZGVmYXVsdFsnZGVmYXVsdCddKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSk7XG5cbiAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICBjb250ZXh0ID0gbmV3IHRoaXMuY29uc3RydWN0b3IoZXZlbnQuY3VycmVudFRhcmdldCwgdGhpcy5fZ2V0RGVsZWdhdGVDb25maWcoKSk7XG4gICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKGRhdGFLZXksIGNvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgY29udGV4dC5fYWN0aXZlVHJpZ2dlcltldmVudC50eXBlID09PSAnZm9jdXNvdXQnID8gVFJJR0dFUl9GT0NVUyA6IFRSSUdHRVJfSE9WRVJdID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb250ZXh0Ll9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjbGVhclRpbWVvdXQoY29udGV4dC5fdGltZW91dCk7XG4gICAgICBjb250ZXh0Ll9ob3ZlclN0YXRlID0gSE9WRVJfU1RBVEVfT1VUO1xuXG4gICAgICBpZiAoIWNvbnRleHQuY29uZmlnLmRlbGF5IHx8ICFjb250ZXh0LmNvbmZpZy5kZWxheS5oaWRlKSB7XG4gICAgICAgIGNvbnRleHQuaGlkZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGNvbnRleHQuX2hvdmVyU3RhdGUgPT09IEhPVkVSX1NUQVRFX09VVCkge1xuICAgICAgICAgIGNvbnRleHQuaGlkZSgpO1xuICAgICAgICB9XG4gICAgICB9LCBjb250ZXh0LmNvbmZpZy5kZWxheS5oaWRlKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9pc1dpdGhBY3RpdmVUcmlnZ2VyID0gZnVuY3Rpb24gX2lzV2l0aEFjdGl2ZVRyaWdnZXIoKSB7XG4gICAgICBmb3IgKHZhciB0cmlnZ2VyIGluIHRoaXMuX2FjdGl2ZVRyaWdnZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuX2FjdGl2ZVRyaWdnZXJbdHJpZ2dlcl0pIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIF9wcm90by5fZ2V0Q29uZmlnID0gZnVuY3Rpb24gX2dldENvbmZpZyhjb25maWcpIHtcbiAgICAgIHZhciBkYXRhQXR0cmlidXRlcyA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzLmVsZW1lbnQpLmRhdGEoKTtcbiAgICAgIE9iamVjdC5rZXlzKGRhdGFBdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChkYXRhQXR0cikge1xuICAgICAgICBpZiAoRElTQUxMT1dFRF9BVFRSSUJVVEVTLmluZGV4T2YoZGF0YUF0dHIpICE9PSAtMSkge1xuICAgICAgICAgIGRlbGV0ZSBkYXRhQXR0cmlidXRlc1tkYXRhQXR0cl07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgY29uZmlnID0gX2V4dGVuZHMoe30sIHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdCwgZGF0YUF0dHJpYnV0ZXMsIHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZyA/IGNvbmZpZyA6IHt9KTtcblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcuZGVsYXkgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGNvbmZpZy5kZWxheSA9IHtcbiAgICAgICAgICBzaG93OiBjb25maWcuZGVsYXksXG4gICAgICAgICAgaGlkZTogY29uZmlnLmRlbGF5XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnLnRpdGxlID09PSAnbnVtYmVyJykge1xuICAgICAgICBjb25maWcudGl0bGUgPSBjb25maWcudGl0bGUudG9TdHJpbmcoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcuY29udGVudCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgY29uZmlnLmNvbnRlbnQgPSBjb25maWcuY29udGVudC50b1N0cmluZygpO1xuICAgICAgfVxuXG4gICAgICBVdGlsLnR5cGVDaGVja0NvbmZpZyhOQU1FJDYsIGNvbmZpZywgdGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0VHlwZSk7XG5cbiAgICAgIGlmIChjb25maWcuc2FuaXRpemUpIHtcbiAgICAgICAgY29uZmlnLnRlbXBsYXRlID0gc2FuaXRpemVIdG1sKGNvbmZpZy50ZW1wbGF0ZSwgY29uZmlnLndoaXRlTGlzdCwgY29uZmlnLnNhbml0aXplRm4pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2dldERlbGVnYXRlQ29uZmlnID0gZnVuY3Rpb24gX2dldERlbGVnYXRlQ29uZmlnKCkge1xuICAgICAgdmFyIGNvbmZpZyA9IHt9O1xuXG4gICAgICBpZiAodGhpcy5jb25maWcpIHtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMuY29uZmlnKSB7XG4gICAgICAgICAgaWYgKHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFtrZXldICE9PSB0aGlzLmNvbmZpZ1trZXldKSB7XG4gICAgICAgICAgICBjb25maWdba2V5XSA9IHRoaXMuY29uZmlnW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfTtcblxuICAgIF9wcm90by5fY2xlYW5UaXBDbGFzcyA9IGZ1bmN0aW9uIF9jbGVhblRpcENsYXNzKCkge1xuICAgICAgdmFyICR0aXAgPSAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcy5nZXRUaXBFbGVtZW50KCkpO1xuICAgICAgdmFyIHRhYkNsYXNzID0gJHRpcC5hdHRyKCdjbGFzcycpLm1hdGNoKEJTQ0xTX1BSRUZJWF9SRUdFWCk7XG5cbiAgICAgIGlmICh0YWJDbGFzcyAhPT0gbnVsbCAmJiB0YWJDbGFzcy5sZW5ndGgpIHtcbiAgICAgICAgJHRpcC5yZW1vdmVDbGFzcyh0YWJDbGFzcy5qb2luKCcnKSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5faGFuZGxlUG9wcGVyUGxhY2VtZW50Q2hhbmdlID0gZnVuY3Rpb24gX2hhbmRsZVBvcHBlclBsYWNlbWVudENoYW5nZShwb3BwZXJEYXRhKSB7XG4gICAgICB0aGlzLnRpcCA9IHBvcHBlckRhdGEuaW5zdGFuY2UucG9wcGVyO1xuXG4gICAgICB0aGlzLl9jbGVhblRpcENsYXNzKCk7XG5cbiAgICAgIHRoaXMuYWRkQXR0YWNobWVudENsYXNzKHRoaXMuX2dldEF0dGFjaG1lbnQocG9wcGVyRGF0YS5wbGFjZW1lbnQpKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9maXhUcmFuc2l0aW9uID0gZnVuY3Rpb24gX2ZpeFRyYW5zaXRpb24oKSB7XG4gICAgICB2YXIgdGlwID0gdGhpcy5nZXRUaXBFbGVtZW50KCk7XG4gICAgICB2YXIgaW5pdENvbmZpZ0FuaW1hdGlvbiA9IHRoaXMuY29uZmlnLmFuaW1hdGlvbjtcblxuICAgICAgaWYgKHRpcC5nZXRBdHRyaWJ1dGUoJ3gtcGxhY2VtZW50JykgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10odGlwKS5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX0ZBREUkMik7XG4gICAgICB0aGlzLmNvbmZpZy5hbmltYXRpb24gPSBmYWxzZTtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgICB0aGlzLmNvbmZpZy5hbmltYXRpb24gPSBpbml0Q29uZmlnQW5pbWF0aW9uO1xuICAgIH0gLy8gU3RhdGljXG4gICAgO1xuXG4gICAgVG9vbHRpcC5falF1ZXJ5SW50ZXJmYWNlID0gZnVuY3Rpb24gX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgJGVsZW1lbnQgPSAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcyk7XG4gICAgICAgIHZhciBkYXRhID0gJGVsZW1lbnQuZGF0YShEQVRBX0tFWSQ2KTtcblxuICAgICAgICB2YXIgX2NvbmZpZyA9IHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZztcblxuICAgICAgICBpZiAoIWRhdGEgJiYgL2Rpc3Bvc2V8aGlkZS8udGVzdChjb25maWcpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgZGF0YSA9IG5ldyBUb29sdGlwKHRoaXMsIF9jb25maWcpO1xuICAgICAgICAgICRlbGVtZW50LmRhdGEoREFUQV9LRVkkNiwgZGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJObyBtZXRob2QgbmFtZWQgXFxcIlwiICsgY29uZmlnICsgXCJcXFwiXCIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRhdGFbY29uZmlnXSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX2NyZWF0ZUNsYXNzKFRvb2x0aXAsIG51bGwsIFt7XG4gICAgICBrZXk6IFwiVkVSU0lPTlwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBWRVJTSU9OJDY7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIkRlZmF1bHRcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gRGVmYXVsdCQ0O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJOQU1FXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIE5BTUUkNjtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiREFUQV9LRVlcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gREFUQV9LRVkkNjtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiRXZlbnRcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gRXZlbnQ7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIkVWRU5UX0tFWVwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBFVkVOVF9LRVkkNjtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiRGVmYXVsdFR5cGVcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gRGVmYXVsdFR5cGUkNDtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gVG9vbHRpcDtcbiAgfSgpO1xuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIGpRdWVyeVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cblxuICAkX19kZWZhdWx0WydkZWZhdWx0J10uZm5bTkFNRSQ2XSA9IFRvb2x0aXAuX2pRdWVyeUludGVyZmFjZTtcbiAgJF9fZGVmYXVsdFsnZGVmYXVsdCddLmZuW05BTUUkNl0uQ29uc3RydWN0b3IgPSBUb29sdGlwO1xuXG4gICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJDZdLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddLmZuW05BTUUkNl0gPSBKUVVFUllfTk9fQ09ORkxJQ1QkNjtcbiAgICByZXR1cm4gVG9vbHRpcC5falF1ZXJ5SW50ZXJmYWNlO1xuICB9O1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ29uc3RhbnRzXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICB2YXIgTkFNRSQ3ID0gJ3BvcG92ZXInO1xuICB2YXIgVkVSU0lPTiQ3ID0gJzQuNS4zJztcbiAgdmFyIERBVEFfS0VZJDcgPSAnYnMucG9wb3Zlcic7XG4gIHZhciBFVkVOVF9LRVkkNyA9IFwiLlwiICsgREFUQV9LRVkkNztcbiAgdmFyIEpRVUVSWV9OT19DT05GTElDVCQ3ID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddLmZuW05BTUUkN107XG4gIHZhciBDTEFTU19QUkVGSVgkMSA9ICdicy1wb3BvdmVyJztcbiAgdmFyIEJTQ0xTX1BSRUZJWF9SRUdFWCQxID0gbmV3IFJlZ0V4cChcIihefFxcXFxzKVwiICsgQ0xBU1NfUFJFRklYJDEgKyBcIlxcXFxTK1wiLCAnZycpO1xuXG4gIHZhciBEZWZhdWx0JDUgPSBfZXh0ZW5kcyh7fSwgVG9vbHRpcC5EZWZhdWx0LCB7XG4gICAgcGxhY2VtZW50OiAncmlnaHQnLFxuICAgIHRyaWdnZXI6ICdjbGljaycsXG4gICAgY29udGVudDogJycsXG4gICAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwicG9wb3ZlclwiIHJvbGU9XCJ0b29sdGlwXCI+JyArICc8ZGl2IGNsYXNzPVwiYXJyb3dcIj48L2Rpdj4nICsgJzxoMyBjbGFzcz1cInBvcG92ZXItaGVhZGVyXCI+PC9oMz4nICsgJzxkaXYgY2xhc3M9XCJwb3BvdmVyLWJvZHlcIj48L2Rpdj48L2Rpdj4nXG4gIH0pO1xuXG4gIHZhciBEZWZhdWx0VHlwZSQ1ID0gX2V4dGVuZHMoe30sIFRvb2x0aXAuRGVmYXVsdFR5cGUsIHtcbiAgICBjb250ZW50OiAnKHN0cmluZ3xlbGVtZW50fGZ1bmN0aW9uKSdcbiAgfSk7XG5cbiAgdmFyIENMQVNTX05BTUVfRkFERSQzID0gJ2ZhZGUnO1xuICB2YXIgQ0xBU1NfTkFNRV9TSE9XJDUgPSAnc2hvdyc7XG4gIHZhciBTRUxFQ1RPUl9USVRMRSA9ICcucG9wb3Zlci1oZWFkZXInO1xuICB2YXIgU0VMRUNUT1JfQ09OVEVOVCA9ICcucG9wb3Zlci1ib2R5JztcbiAgdmFyIEV2ZW50JDEgPSB7XG4gICAgSElERTogXCJoaWRlXCIgKyBFVkVOVF9LRVkkNyxcbiAgICBISURERU46IFwiaGlkZGVuXCIgKyBFVkVOVF9LRVkkNyxcbiAgICBTSE9XOiBcInNob3dcIiArIEVWRU5UX0tFWSQ3LFxuICAgIFNIT1dOOiBcInNob3duXCIgKyBFVkVOVF9LRVkkNyxcbiAgICBJTlNFUlRFRDogXCJpbnNlcnRlZFwiICsgRVZFTlRfS0VZJDcsXG4gICAgQ0xJQ0s6IFwiY2xpY2tcIiArIEVWRU5UX0tFWSQ3LFxuICAgIEZPQ1VTSU46IFwiZm9jdXNpblwiICsgRVZFTlRfS0VZJDcsXG4gICAgRk9DVVNPVVQ6IFwiZm9jdXNvdXRcIiArIEVWRU5UX0tFWSQ3LFxuICAgIE1PVVNFRU5URVI6IFwibW91c2VlbnRlclwiICsgRVZFTlRfS0VZJDcsXG4gICAgTU9VU0VMRUFWRTogXCJtb3VzZWxlYXZlXCIgKyBFVkVOVF9LRVkkN1xuICB9O1xuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIENsYXNzIERlZmluaXRpb25cbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIHZhciBQb3BvdmVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfVG9vbHRpcCkge1xuICAgIF9pbmhlcml0c0xvb3NlKFBvcG92ZXIsIF9Ub29sdGlwKTtcblxuICAgIGZ1bmN0aW9uIFBvcG92ZXIoKSB7XG4gICAgICByZXR1cm4gX1Rvb2x0aXAuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cblxuICAgIHZhciBfcHJvdG8gPSBQb3BvdmVyLnByb3RvdHlwZTtcblxuICAgIC8vIE92ZXJyaWRlc1xuICAgIF9wcm90by5pc1dpdGhDb250ZW50ID0gZnVuY3Rpb24gaXNXaXRoQ29udGVudCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldFRpdGxlKCkgfHwgdGhpcy5fZ2V0Q29udGVudCgpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uYWRkQXR0YWNobWVudENsYXNzID0gZnVuY3Rpb24gYWRkQXR0YWNobWVudENsYXNzKGF0dGFjaG1lbnQpIHtcbiAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzLmdldFRpcEVsZW1lbnQoKSkuYWRkQ2xhc3MoQ0xBU1NfUFJFRklYJDEgKyBcIi1cIiArIGF0dGFjaG1lbnQpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uZ2V0VGlwRWxlbWVudCA9IGZ1bmN0aW9uIGdldFRpcEVsZW1lbnQoKSB7XG4gICAgICB0aGlzLnRpcCA9IHRoaXMudGlwIHx8ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzLmNvbmZpZy50ZW1wbGF0ZSlbMF07XG4gICAgICByZXR1cm4gdGhpcy50aXA7XG4gICAgfTtcblxuICAgIF9wcm90by5zZXRDb250ZW50ID0gZnVuY3Rpb24gc2V0Q29udGVudCgpIHtcbiAgICAgIHZhciAkdGlwID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMuZ2V0VGlwRWxlbWVudCgpKTsgLy8gV2UgdXNlIGFwcGVuZCBmb3IgaHRtbCBvYmplY3RzIHRvIG1haW50YWluIGpzIGV2ZW50c1xuXG4gICAgICB0aGlzLnNldEVsZW1lbnRDb250ZW50KCR0aXAuZmluZChTRUxFQ1RPUl9USVRMRSksIHRoaXMuZ2V0VGl0bGUoKSk7XG5cbiAgICAgIHZhciBjb250ZW50ID0gdGhpcy5fZ2V0Q29udGVudCgpO1xuXG4gICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY29udGVudCA9IGNvbnRlbnQuY2FsbCh0aGlzLmVsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldEVsZW1lbnRDb250ZW50KCR0aXAuZmluZChTRUxFQ1RPUl9DT05URU5UKSwgY29udGVudCk7XG4gICAgICAkdGlwLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfRkFERSQzICsgXCIgXCIgKyBDTEFTU19OQU1FX1NIT1ckNSk7XG4gICAgfSAvLyBQcml2YXRlXG4gICAgO1xuXG4gICAgX3Byb3RvLl9nZXRDb250ZW50ID0gZnVuY3Rpb24gX2dldENvbnRlbnQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1jb250ZW50JykgfHwgdGhpcy5jb25maWcuY29udGVudDtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9jbGVhblRpcENsYXNzID0gZnVuY3Rpb24gX2NsZWFuVGlwQ2xhc3MoKSB7XG4gICAgICB2YXIgJHRpcCA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzLmdldFRpcEVsZW1lbnQoKSk7XG4gICAgICB2YXIgdGFiQ2xhc3MgPSAkdGlwLmF0dHIoJ2NsYXNzJykubWF0Y2goQlNDTFNfUFJFRklYX1JFR0VYJDEpO1xuXG4gICAgICBpZiAodGFiQ2xhc3MgIT09IG51bGwgJiYgdGFiQ2xhc3MubGVuZ3RoID4gMCkge1xuICAgICAgICAkdGlwLnJlbW92ZUNsYXNzKHRhYkNsYXNzLmpvaW4oJycpKTtcbiAgICAgIH1cbiAgICB9IC8vIFN0YXRpY1xuICAgIDtcblxuICAgIFBvcG92ZXIuX2pRdWVyeUludGVyZmFjZSA9IGZ1bmN0aW9uIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRhdGEgPSAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcykuZGF0YShEQVRBX0tFWSQ3KTtcblxuICAgICAgICB2YXIgX2NvbmZpZyA9IHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDogbnVsbDtcblxuICAgICAgICBpZiAoIWRhdGEgJiYgL2Rpc3Bvc2V8aGlkZS8udGVzdChjb25maWcpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgZGF0YSA9IG5ldyBQb3BvdmVyKHRoaXMsIF9jb25maWcpO1xuICAgICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKS5kYXRhKERBVEFfS0VZJDcsIGRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTm8gbWV0aG9kIG5hbWVkIFxcXCJcIiArIGNvbmZpZyArIFwiXFxcIlwiKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkYXRhW2NvbmZpZ10oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF9jcmVhdGVDbGFzcyhQb3BvdmVyLCBudWxsLCBbe1xuICAgICAga2V5OiBcIlZFUlNJT05cIixcbiAgICAgIC8vIEdldHRlcnNcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gVkVSU0lPTiQ3O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJEZWZhdWx0XCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIERlZmF1bHQkNTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiTkFNRVwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBOQU1FJDc7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIkRBVEFfS0VZXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIERBVEFfS0VZJDc7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIkV2ZW50XCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIEV2ZW50JDE7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIkVWRU5UX0tFWVwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBFVkVOVF9LRVkkNztcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiRGVmYXVsdFR5cGVcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gRGVmYXVsdFR5cGUkNTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gUG9wb3ZlcjtcbiAgfShUb29sdGlwKTtcbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBqUXVlcnlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG5cbiAgJF9fZGVmYXVsdFsnZGVmYXVsdCddLmZuW05BTUUkN10gPSBQb3BvdmVyLl9qUXVlcnlJbnRlcmZhY2U7XG4gICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJDddLkNvbnN0cnVjdG9yID0gUG9wb3ZlcjtcblxuICAkX19kZWZhdWx0WydkZWZhdWx0J10uZm5bTkFNRSQ3XS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJDddID0gSlFVRVJZX05PX0NPTkZMSUNUJDc7XG4gICAgcmV0dXJuIFBvcG92ZXIuX2pRdWVyeUludGVyZmFjZTtcbiAgfTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIENvbnN0YW50c1xuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgdmFyIE5BTUUkOCA9ICdzY3JvbGxzcHknO1xuICB2YXIgVkVSU0lPTiQ4ID0gJzQuNS4zJztcbiAgdmFyIERBVEFfS0VZJDggPSAnYnMuc2Nyb2xsc3B5JztcbiAgdmFyIEVWRU5UX0tFWSQ4ID0gXCIuXCIgKyBEQVRBX0tFWSQ4O1xuICB2YXIgREFUQV9BUElfS0VZJDYgPSAnLmRhdGEtYXBpJztcbiAgdmFyIEpRVUVSWV9OT19DT05GTElDVCQ4ID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddLmZuW05BTUUkOF07XG4gIHZhciBEZWZhdWx0JDYgPSB7XG4gICAgb2Zmc2V0OiAxMCxcbiAgICBtZXRob2Q6ICdhdXRvJyxcbiAgICB0YXJnZXQ6ICcnXG4gIH07XG4gIHZhciBEZWZhdWx0VHlwZSQ2ID0ge1xuICAgIG9mZnNldDogJ251bWJlcicsXG4gICAgbWV0aG9kOiAnc3RyaW5nJyxcbiAgICB0YXJnZXQ6ICcoc3RyaW5nfGVsZW1lbnQpJ1xuICB9O1xuICB2YXIgRVZFTlRfQUNUSVZBVEUgPSBcImFjdGl2YXRlXCIgKyBFVkVOVF9LRVkkODtcbiAgdmFyIEVWRU5UX1NDUk9MTCA9IFwic2Nyb2xsXCIgKyBFVkVOVF9LRVkkODtcbiAgdmFyIEVWRU5UX0xPQURfREFUQV9BUEkkMiA9IFwibG9hZFwiICsgRVZFTlRfS0VZJDggKyBEQVRBX0FQSV9LRVkkNjtcbiAgdmFyIENMQVNTX05BTUVfRFJPUERPV05fSVRFTSA9ICdkcm9wZG93bi1pdGVtJztcbiAgdmFyIENMQVNTX05BTUVfQUNUSVZFJDIgPSAnYWN0aXZlJztcbiAgdmFyIFNFTEVDVE9SX0RBVEFfU1BZID0gJ1tkYXRhLXNweT1cInNjcm9sbFwiXSc7XG4gIHZhciBTRUxFQ1RPUl9OQVZfTElTVF9HUk9VUCA9ICcubmF2LCAubGlzdC1ncm91cCc7XG4gIHZhciBTRUxFQ1RPUl9OQVZfTElOS1MgPSAnLm5hdi1saW5rJztcbiAgdmFyIFNFTEVDVE9SX05BVl9JVEVNUyA9ICcubmF2LWl0ZW0nO1xuICB2YXIgU0VMRUNUT1JfTElTVF9JVEVNUyA9ICcubGlzdC1ncm91cC1pdGVtJztcbiAgdmFyIFNFTEVDVE9SX0RST1BET1dOID0gJy5kcm9wZG93bic7XG4gIHZhciBTRUxFQ1RPUl9EUk9QRE9XTl9JVEVNUyA9ICcuZHJvcGRvd24taXRlbSc7XG4gIHZhciBTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUgPSAnLmRyb3Bkb3duLXRvZ2dsZSc7XG4gIHZhciBNRVRIT0RfT0ZGU0VUID0gJ29mZnNldCc7XG4gIHZhciBNRVRIT0RfUE9TSVRJT04gPSAncG9zaXRpb24nO1xuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIENsYXNzIERlZmluaXRpb25cbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIHZhciBTY3JvbGxTcHkgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNjcm9sbFNweShlbGVtZW50LCBjb25maWcpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgdGhpcy5fc2Nyb2xsRWxlbWVudCA9IGVsZW1lbnQudGFnTmFtZSA9PT0gJ0JPRFknID8gd2luZG93IDogZWxlbWVudDtcbiAgICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpO1xuICAgICAgdGhpcy5fc2VsZWN0b3IgPSB0aGlzLl9jb25maWcudGFyZ2V0ICsgXCIgXCIgKyBTRUxFQ1RPUl9OQVZfTElOS1MgKyBcIixcIiArICh0aGlzLl9jb25maWcudGFyZ2V0ICsgXCIgXCIgKyBTRUxFQ1RPUl9MSVNUX0lURU1TICsgXCIsXCIpICsgKHRoaXMuX2NvbmZpZy50YXJnZXQgKyBcIiBcIiArIFNFTEVDVE9SX0RST1BET1dOX0lURU1TKTtcbiAgICAgIHRoaXMuX29mZnNldHMgPSBbXTtcbiAgICAgIHRoaXMuX3RhcmdldHMgPSBbXTtcbiAgICAgIHRoaXMuX2FjdGl2ZVRhcmdldCA9IG51bGw7XG4gICAgICB0aGlzLl9zY3JvbGxIZWlnaHQgPSAwO1xuICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMuX3Njcm9sbEVsZW1lbnQpLm9uKEVWRU5UX1NDUk9MTCwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5fcHJvY2VzcyhldmVudCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMucmVmcmVzaCgpO1xuXG4gICAgICB0aGlzLl9wcm9jZXNzKCk7XG4gICAgfSAvLyBHZXR0ZXJzXG5cblxuICAgIHZhciBfcHJvdG8gPSBTY3JvbGxTcHkucHJvdG90eXBlO1xuXG4gICAgLy8gUHVibGljXG4gICAgX3Byb3RvLnJlZnJlc2ggPSBmdW5jdGlvbiByZWZyZXNoKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBhdXRvTWV0aG9kID0gdGhpcy5fc2Nyb2xsRWxlbWVudCA9PT0gdGhpcy5fc2Nyb2xsRWxlbWVudC53aW5kb3cgPyBNRVRIT0RfT0ZGU0VUIDogTUVUSE9EX1BPU0lUSU9OO1xuICAgICAgdmFyIG9mZnNldE1ldGhvZCA9IHRoaXMuX2NvbmZpZy5tZXRob2QgPT09ICdhdXRvJyA/IGF1dG9NZXRob2QgOiB0aGlzLl9jb25maWcubWV0aG9kO1xuICAgICAgdmFyIG9mZnNldEJhc2UgPSBvZmZzZXRNZXRob2QgPT09IE1FVEhPRF9QT1NJVElPTiA/IHRoaXMuX2dldFNjcm9sbFRvcCgpIDogMDtcbiAgICAgIHRoaXMuX29mZnNldHMgPSBbXTtcbiAgICAgIHRoaXMuX3RhcmdldHMgPSBbXTtcbiAgICAgIHRoaXMuX3Njcm9sbEhlaWdodCA9IHRoaXMuX2dldFNjcm9sbEhlaWdodCgpO1xuICAgICAgdmFyIHRhcmdldHMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5fc2VsZWN0b3IpKTtcbiAgICAgIHRhcmdldHMubWFwKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHZhciB0YXJnZXQ7XG4gICAgICAgIHZhciB0YXJnZXRTZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICBpZiAodGFyZ2V0U2VsZWN0b3IpIHtcbiAgICAgICAgICB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldFNlbGVjdG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICB2YXIgdGFyZ2V0QkNSID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgICAgaWYgKHRhcmdldEJDUi53aWR0aCB8fCB0YXJnZXRCQ1IuaGVpZ2h0KSB7XG4gICAgICAgICAgICAvLyBUT0RPIChmYXQpOiByZW1vdmUgc2tldGNoIHJlbGlhbmNlIG9uIGpRdWVyeSBwb3NpdGlvbi9vZmZzZXRcbiAgICAgICAgICAgIHJldHVybiBbJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRhcmdldClbb2Zmc2V0TWV0aG9kXSgpLnRvcCArIG9mZnNldEJhc2UsIHRhcmdldFNlbGVjdG9yXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0pLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgIH0pLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGFbMF0gLSBiWzBdO1xuICAgICAgfSkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBfdGhpczIuX29mZnNldHMucHVzaChpdGVtWzBdKTtcblxuICAgICAgICBfdGhpczIuX3RhcmdldHMucHVzaChpdGVtWzFdKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfcHJvdG8uZGlzcG9zZSA9IGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XG4gICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10ucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSQ4KTtcbiAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzLl9zY3JvbGxFbGVtZW50KS5vZmYoRVZFTlRfS0VZJDgpO1xuICAgICAgdGhpcy5fZWxlbWVudCA9IG51bGw7XG4gICAgICB0aGlzLl9zY3JvbGxFbGVtZW50ID0gbnVsbDtcbiAgICAgIHRoaXMuX2NvbmZpZyA9IG51bGw7XG4gICAgICB0aGlzLl9zZWxlY3RvciA9IG51bGw7XG4gICAgICB0aGlzLl9vZmZzZXRzID0gbnVsbDtcbiAgICAgIHRoaXMuX3RhcmdldHMgPSBudWxsO1xuICAgICAgdGhpcy5fYWN0aXZlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIHRoaXMuX3Njcm9sbEhlaWdodCA9IG51bGw7XG4gICAgfSAvLyBQcml2YXRlXG4gICAgO1xuXG4gICAgX3Byb3RvLl9nZXRDb25maWcgPSBmdW5jdGlvbiBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgICAgY29uZmlnID0gX2V4dGVuZHMoe30sIERlZmF1bHQkNiwgdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnID8gY29uZmlnIDoge30pO1xuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZy50YXJnZXQgIT09ICdzdHJpbmcnICYmIFV0aWwuaXNFbGVtZW50KGNvbmZpZy50YXJnZXQpKSB7XG4gICAgICAgIHZhciBpZCA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShjb25maWcudGFyZ2V0KS5hdHRyKCdpZCcpO1xuXG4gICAgICAgIGlmICghaWQpIHtcbiAgICAgICAgICBpZCA9IFV0aWwuZ2V0VUlEKE5BTUUkOCk7XG4gICAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKGNvbmZpZy50YXJnZXQpLmF0dHIoJ2lkJywgaWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uZmlnLnRhcmdldCA9IFwiI1wiICsgaWQ7XG4gICAgICB9XG5cbiAgICAgIFV0aWwudHlwZUNoZWNrQ29uZmlnKE5BTUUkOCwgY29uZmlnLCBEZWZhdWx0VHlwZSQ2KTtcbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfTtcblxuICAgIF9wcm90by5fZ2V0U2Nyb2xsVG9wID0gZnVuY3Rpb24gX2dldFNjcm9sbFRvcCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zY3JvbGxFbGVtZW50ID09PSB3aW5kb3cgPyB0aGlzLl9zY3JvbGxFbGVtZW50LnBhZ2VZT2Zmc2V0IDogdGhpcy5fc2Nyb2xsRWxlbWVudC5zY3JvbGxUb3A7XG4gICAgfTtcblxuICAgIF9wcm90by5fZ2V0U2Nyb2xsSGVpZ2h0ID0gZnVuY3Rpb24gX2dldFNjcm9sbEhlaWdodCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zY3JvbGxFbGVtZW50LnNjcm9sbEhlaWdodCB8fCBNYXRoLm1heChkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCk7XG4gICAgfTtcblxuICAgIF9wcm90by5fZ2V0T2Zmc2V0SGVpZ2h0ID0gZnVuY3Rpb24gX2dldE9mZnNldEhlaWdodCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zY3JvbGxFbGVtZW50ID09PSB3aW5kb3cgPyB3aW5kb3cuaW5uZXJIZWlnaHQgOiB0aGlzLl9zY3JvbGxFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9wcm9jZXNzID0gZnVuY3Rpb24gX3Byb2Nlc3MoKSB7XG4gICAgICB2YXIgc2Nyb2xsVG9wID0gdGhpcy5fZ2V0U2Nyb2xsVG9wKCkgKyB0aGlzLl9jb25maWcub2Zmc2V0O1xuXG4gICAgICB2YXIgc2Nyb2xsSGVpZ2h0ID0gdGhpcy5fZ2V0U2Nyb2xsSGVpZ2h0KCk7XG5cbiAgICAgIHZhciBtYXhTY3JvbGwgPSB0aGlzLl9jb25maWcub2Zmc2V0ICsgc2Nyb2xsSGVpZ2h0IC0gdGhpcy5fZ2V0T2Zmc2V0SGVpZ2h0KCk7XG5cbiAgICAgIGlmICh0aGlzLl9zY3JvbGxIZWlnaHQgIT09IHNjcm9sbEhlaWdodCkge1xuICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNjcm9sbFRvcCA+PSBtYXhTY3JvbGwpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IHRoaXMuX3RhcmdldHNbdGhpcy5fdGFyZ2V0cy5sZW5ndGggLSAxXTtcblxuICAgICAgICBpZiAodGhpcy5fYWN0aXZlVGFyZ2V0ICE9PSB0YXJnZXQpIHtcbiAgICAgICAgICB0aGlzLl9hY3RpdmF0ZSh0YXJnZXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fYWN0aXZlVGFyZ2V0ICYmIHNjcm9sbFRvcCA8IHRoaXMuX29mZnNldHNbMF0gJiYgdGhpcy5fb2Zmc2V0c1swXSA+IDApIHtcbiAgICAgICAgdGhpcy5fYWN0aXZlVGFyZ2V0ID0gbnVsbDtcblxuICAgICAgICB0aGlzLl9jbGVhcigpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMuX29mZnNldHMubGVuZ3RoOyBpLS07KSB7XG4gICAgICAgIHZhciBpc0FjdGl2ZVRhcmdldCA9IHRoaXMuX2FjdGl2ZVRhcmdldCAhPT0gdGhpcy5fdGFyZ2V0c1tpXSAmJiBzY3JvbGxUb3AgPj0gdGhpcy5fb2Zmc2V0c1tpXSAmJiAodHlwZW9mIHRoaXMuX29mZnNldHNbaSArIDFdID09PSAndW5kZWZpbmVkJyB8fCBzY3JvbGxUb3AgPCB0aGlzLl9vZmZzZXRzW2kgKyAxXSk7XG5cbiAgICAgICAgaWYgKGlzQWN0aXZlVGFyZ2V0KSB7XG4gICAgICAgICAgdGhpcy5fYWN0aXZhdGUodGhpcy5fdGFyZ2V0c1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLl9hY3RpdmF0ZSA9IGZ1bmN0aW9uIF9hY3RpdmF0ZSh0YXJnZXQpIHtcbiAgICAgIHRoaXMuX2FjdGl2ZVRhcmdldCA9IHRhcmdldDtcblxuICAgICAgdGhpcy5fY2xlYXIoKTtcblxuICAgICAgdmFyIHF1ZXJpZXMgPSB0aGlzLl9zZWxlY3Rvci5zcGxpdCgnLCcpLm1hcChmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIHNlbGVjdG9yICsgXCJbZGF0YS10YXJnZXQ9XFxcIlwiICsgdGFyZ2V0ICsgXCJcXFwiXSxcIiArIHNlbGVjdG9yICsgXCJbaHJlZj1cXFwiXCIgKyB0YXJnZXQgKyBcIlxcXCJdXCI7XG4gICAgICB9KTtcblxuICAgICAgdmFyICRsaW5rID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddKFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChxdWVyaWVzLmpvaW4oJywnKSkpKTtcblxuICAgICAgaWYgKCRsaW5rLmhhc0NsYXNzKENMQVNTX05BTUVfRFJPUERPV05fSVRFTSkpIHtcbiAgICAgICAgJGxpbmsuY2xvc2VzdChTRUxFQ1RPUl9EUk9QRE9XTikuZmluZChTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUpLmFkZENsYXNzKENMQVNTX05BTUVfQUNUSVZFJDIpO1xuICAgICAgICAkbGluay5hZGRDbGFzcyhDTEFTU19OQU1FX0FDVElWRSQyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFNldCB0cmlnZ2VyZWQgbGluayBhcyBhY3RpdmVcbiAgICAgICAgJGxpbmsuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9BQ1RJVkUkMik7IC8vIFNldCB0cmlnZ2VyZWQgbGlua3MgcGFyZW50cyBhcyBhY3RpdmVcbiAgICAgICAgLy8gV2l0aCBib3RoIDx1bD4gYW5kIDxuYXY+IG1hcmt1cCBhIHBhcmVudCBpcyB0aGUgcHJldmlvdXMgc2libGluZyBvZiBhbnkgbmF2IGFuY2VzdG9yXG5cbiAgICAgICAgJGxpbmsucGFyZW50cyhTRUxFQ1RPUl9OQVZfTElTVF9HUk9VUCkucHJldihTRUxFQ1RPUl9OQVZfTElOS1MgKyBcIiwgXCIgKyBTRUxFQ1RPUl9MSVNUX0lURU1TKS5hZGRDbGFzcyhDTEFTU19OQU1FX0FDVElWRSQyKTsgLy8gSGFuZGxlIHNwZWNpYWwgY2FzZSB3aGVuIC5uYXYtbGluayBpcyBpbnNpZGUgLm5hdi1pdGVtXG5cbiAgICAgICAgJGxpbmsucGFyZW50cyhTRUxFQ1RPUl9OQVZfTElTVF9HUk9VUCkucHJldihTRUxFQ1RPUl9OQVZfSVRFTVMpLmNoaWxkcmVuKFNFTEVDVE9SX05BVl9MSU5LUykuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9BQ1RJVkUkMik7XG4gICAgICB9XG5cbiAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzLl9zY3JvbGxFbGVtZW50KS50cmlnZ2VyKEVWRU5UX0FDVElWQVRFLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRhcmdldFxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF9wcm90by5fY2xlYXIgPSBmdW5jdGlvbiBfY2xlYXIoKSB7XG4gICAgICBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5fc2VsZWN0b3IpKS5maWx0ZXIoZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfQUNUSVZFJDIpO1xuICAgICAgfSkuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICByZXR1cm4gbm9kZS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFJDIpO1xuICAgICAgfSk7XG4gICAgfSAvLyBTdGF0aWNcbiAgICA7XG5cbiAgICBTY3JvbGxTcHkuX2pRdWVyeUludGVyZmFjZSA9IGZ1bmN0aW9uIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRhdGEgPSAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcykuZGF0YShEQVRBX0tFWSQ4KTtcblxuICAgICAgICB2YXIgX2NvbmZpZyA9IHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZztcblxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICBkYXRhID0gbmV3IFNjcm9sbFNweSh0aGlzLCBfY29uZmlnKTtcbiAgICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcykuZGF0YShEQVRBX0tFWSQ4LCBkYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk5vIG1ldGhvZCBuYW1lZCBcXFwiXCIgKyBjb25maWcgKyBcIlxcXCJcIik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGF0YVtjb25maWddKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfY3JlYXRlQ2xhc3MoU2Nyb2xsU3B5LCBudWxsLCBbe1xuICAgICAga2V5OiBcIlZFUlNJT05cIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gVkVSU0lPTiQ4O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJEZWZhdWx0XCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIERlZmF1bHQkNjtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gU2Nyb2xsU3B5O1xuICB9KCk7XG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG5cbiAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHdpbmRvdykub24oRVZFTlRfTE9BRF9EQVRBX0FQSSQyLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNjcm9sbFNweXMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU0VMRUNUT1JfREFUQV9TUFkpKTtcbiAgICB2YXIgc2Nyb2xsU3B5c0xlbmd0aCA9IHNjcm9sbFNweXMubGVuZ3RoO1xuXG4gICAgZm9yICh2YXIgaSA9IHNjcm9sbFNweXNMZW5ndGg7IGktLTspIHtcbiAgICAgIHZhciAkc3B5ID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddKHNjcm9sbFNweXNbaV0pO1xuXG4gICAgICBTY3JvbGxTcHkuX2pRdWVyeUludGVyZmFjZS5jYWxsKCRzcHksICRzcHkuZGF0YSgpKTtcbiAgICB9XG4gIH0pO1xuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIGpRdWVyeVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgJF9fZGVmYXVsdFsnZGVmYXVsdCddLmZuW05BTUUkOF0gPSBTY3JvbGxTcHkuX2pRdWVyeUludGVyZmFjZTtcbiAgJF9fZGVmYXVsdFsnZGVmYXVsdCddLmZuW05BTUUkOF0uQ29uc3RydWN0b3IgPSBTY3JvbGxTcHk7XG5cbiAgJF9fZGVmYXVsdFsnZGVmYXVsdCddLmZuW05BTUUkOF0ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkX19kZWZhdWx0WydkZWZhdWx0J10uZm5bTkFNRSQ4XSA9IEpRVUVSWV9OT19DT05GTElDVCQ4O1xuICAgIHJldHVybiBTY3JvbGxTcHkuX2pRdWVyeUludGVyZmFjZTtcbiAgfTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIENvbnN0YW50c1xuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgdmFyIE5BTUUkOSA9ICd0YWInO1xuICB2YXIgVkVSU0lPTiQ5ID0gJzQuNS4zJztcbiAgdmFyIERBVEFfS0VZJDkgPSAnYnMudGFiJztcbiAgdmFyIEVWRU5UX0tFWSQ5ID0gXCIuXCIgKyBEQVRBX0tFWSQ5O1xuICB2YXIgREFUQV9BUElfS0VZJDcgPSAnLmRhdGEtYXBpJztcbiAgdmFyIEpRVUVSWV9OT19DT05GTElDVCQ5ID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddLmZuW05BTUUkOV07XG4gIHZhciBFVkVOVF9ISURFJDMgPSBcImhpZGVcIiArIEVWRU5UX0tFWSQ5O1xuICB2YXIgRVZFTlRfSElEREVOJDMgPSBcImhpZGRlblwiICsgRVZFTlRfS0VZJDk7XG4gIHZhciBFVkVOVF9TSE9XJDMgPSBcInNob3dcIiArIEVWRU5UX0tFWSQ5O1xuICB2YXIgRVZFTlRfU0hPV04kMyA9IFwic2hvd25cIiArIEVWRU5UX0tFWSQ5O1xuICB2YXIgRVZFTlRfQ0xJQ0tfREFUQV9BUEkkNiA9IFwiY2xpY2tcIiArIEVWRU5UX0tFWSQ5ICsgREFUQV9BUElfS0VZJDc7XG4gIHZhciBDTEFTU19OQU1FX0RST1BET1dOX01FTlUgPSAnZHJvcGRvd24tbWVudSc7XG4gIHZhciBDTEFTU19OQU1FX0FDVElWRSQzID0gJ2FjdGl2ZSc7XG4gIHZhciBDTEFTU19OQU1FX0RJU0FCTEVEJDEgPSAnZGlzYWJsZWQnO1xuICB2YXIgQ0xBU1NfTkFNRV9GQURFJDQgPSAnZmFkZSc7XG4gIHZhciBDTEFTU19OQU1FX1NIT1ckNiA9ICdzaG93JztcbiAgdmFyIFNFTEVDVE9SX0RST1BET1dOJDEgPSAnLmRyb3Bkb3duJztcbiAgdmFyIFNFTEVDVE9SX05BVl9MSVNUX0dST1VQJDEgPSAnLm5hdiwgLmxpc3QtZ3JvdXAnO1xuICB2YXIgU0VMRUNUT1JfQUNUSVZFJDIgPSAnLmFjdGl2ZSc7XG4gIHZhciBTRUxFQ1RPUl9BQ1RJVkVfVUwgPSAnPiBsaSA+IC5hY3RpdmUnO1xuICB2YXIgU0VMRUNUT1JfREFUQV9UT0dHTEUkNCA9ICdbZGF0YS10b2dnbGU9XCJ0YWJcIl0sIFtkYXRhLXRvZ2dsZT1cInBpbGxcIl0sIFtkYXRhLXRvZ2dsZT1cImxpc3RcIl0nO1xuICB2YXIgU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFJDEgPSAnLmRyb3Bkb3duLXRvZ2dsZSc7XG4gIHZhciBTRUxFQ1RPUl9EUk9QRE9XTl9BQ1RJVkVfQ0hJTEQgPSAnPiAuZHJvcGRvd24tbWVudSAuYWN0aXZlJztcbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBDbGFzcyBEZWZpbml0aW9uXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICB2YXIgVGFiID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUYWIoZWxlbWVudCkge1xuICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgfSAvLyBHZXR0ZXJzXG5cblxuICAgIHZhciBfcHJvdG8gPSBUYWIucHJvdG90eXBlO1xuXG4gICAgLy8gUHVibGljXG4gICAgX3Byb3RvLnNob3cgPSBmdW5jdGlvbiBzaG93KCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgaWYgKHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZSAmJiB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFICYmICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDTEFTU19OQU1FX0FDVElWRSQzKSB8fCAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9ESVNBQkxFRCQxKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciB0YXJnZXQ7XG4gICAgICB2YXIgcHJldmlvdXM7XG4gICAgICB2YXIgbGlzdEVsZW1lbnQgPSAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcy5fZWxlbWVudCkuY2xvc2VzdChTRUxFQ1RPUl9OQVZfTElTVF9HUk9VUCQxKVswXTtcbiAgICAgIHZhciBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KTtcblxuICAgICAgaWYgKGxpc3RFbGVtZW50KSB7XG4gICAgICAgIHZhciBpdGVtU2VsZWN0b3IgPSBsaXN0RWxlbWVudC5ub2RlTmFtZSA9PT0gJ1VMJyB8fCBsaXN0RWxlbWVudC5ub2RlTmFtZSA9PT0gJ09MJyA/IFNFTEVDVE9SX0FDVElWRV9VTCA6IFNFTEVDVE9SX0FDVElWRSQyO1xuICAgICAgICBwcmV2aW91cyA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5tYWtlQXJyYXkoJF9fZGVmYXVsdFsnZGVmYXVsdCddKGxpc3RFbGVtZW50KS5maW5kKGl0ZW1TZWxlY3RvcikpO1xuICAgICAgICBwcmV2aW91cyA9IHByZXZpb3VzW3ByZXZpb3VzLmxlbmd0aCAtIDFdO1xuICAgICAgfVxuXG4gICAgICB2YXIgaGlkZUV2ZW50ID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddLkV2ZW50KEVWRU5UX0hJREUkMywge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiB0aGlzLl9lbGVtZW50XG4gICAgICB9KTtcbiAgICAgIHZhciBzaG93RXZlbnQgPSAkX19kZWZhdWx0WydkZWZhdWx0J10uRXZlbnQoRVZFTlRfU0hPVyQzLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHByZXZpb3VzXG4gICAgICB9KTtcblxuICAgICAgaWYgKHByZXZpb3VzKSB7XG4gICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShwcmV2aW91cykudHJpZ2dlcihoaWRlRXZlbnQpO1xuICAgICAgfVxuXG4gICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcy5fZWxlbWVudCkudHJpZ2dlcihzaG93RXZlbnQpO1xuXG4gICAgICBpZiAoc2hvd0V2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpIHx8IGhpZGVFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fYWN0aXZhdGUodGhpcy5fZWxlbWVudCwgbGlzdEVsZW1lbnQpO1xuXG4gICAgICB2YXIgY29tcGxldGUgPSBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgICAgdmFyIGhpZGRlbkV2ZW50ID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddLkV2ZW50KEVWRU5UX0hJRERFTiQzLCB7XG4gICAgICAgICAgcmVsYXRlZFRhcmdldDogX3RoaXMuX2VsZW1lbnRcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBzaG93bkV2ZW50ID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddLkV2ZW50KEVWRU5UX1NIT1dOJDMsIHtcbiAgICAgICAgICByZWxhdGVkVGFyZ2V0OiBwcmV2aW91c1xuICAgICAgICB9KTtcbiAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHByZXZpb3VzKS50cmlnZ2VyKGhpZGRlbkV2ZW50KTtcbiAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKF90aGlzLl9lbGVtZW50KS50cmlnZ2VyKHNob3duRXZlbnQpO1xuICAgICAgfTtcblxuICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICB0aGlzLl9hY3RpdmF0ZSh0YXJnZXQsIHRhcmdldC5wYXJlbnROb2RlLCBjb21wbGV0ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb21wbGV0ZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8uZGlzcG9zZSA9IGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XG4gICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10ucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSQ5KTtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xuICAgIH0gLy8gUHJpdmF0ZVxuICAgIDtcblxuICAgIF9wcm90by5fYWN0aXZhdGUgPSBmdW5jdGlvbiBfYWN0aXZhdGUoZWxlbWVudCwgY29udGFpbmVyLCBjYWxsYmFjaykge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBhY3RpdmVFbGVtZW50cyA9IGNvbnRhaW5lciAmJiAoY29udGFpbmVyLm5vZGVOYW1lID09PSAnVUwnIHx8IGNvbnRhaW5lci5ub2RlTmFtZSA9PT0gJ09MJykgPyAkX19kZWZhdWx0WydkZWZhdWx0J10oY29udGFpbmVyKS5maW5kKFNFTEVDVE9SX0FDVElWRV9VTCkgOiAkX19kZWZhdWx0WydkZWZhdWx0J10oY29udGFpbmVyKS5jaGlsZHJlbihTRUxFQ1RPUl9BQ1RJVkUkMik7XG4gICAgICB2YXIgYWN0aXZlID0gYWN0aXZlRWxlbWVudHNbMF07XG4gICAgICB2YXIgaXNUcmFuc2l0aW9uaW5nID0gY2FsbGJhY2sgJiYgYWN0aXZlICYmICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShhY3RpdmUpLmhhc0NsYXNzKENMQVNTX05BTUVfRkFERSQ0KTtcblxuICAgICAgdmFyIGNvbXBsZXRlID0gZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICAgIHJldHVybiBfdGhpczIuX3RyYW5zaXRpb25Db21wbGV0ZShlbGVtZW50LCBhY3RpdmUsIGNhbGxiYWNrKTtcbiAgICAgIH07XG5cbiAgICAgIGlmIChhY3RpdmUgJiYgaXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICAgIHZhciB0cmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KGFjdGl2ZSk7XG4gICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShhY3RpdmUpLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfU0hPVyQ2KS5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgY29tcGxldGUpLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25EdXJhdGlvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb21wbGV0ZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8uX3RyYW5zaXRpb25Db21wbGV0ZSA9IGZ1bmN0aW9uIF90cmFuc2l0aW9uQ29tcGxldGUoZWxlbWVudCwgYWN0aXZlLCBjYWxsYmFjaykge1xuICAgICAgaWYgKGFjdGl2ZSkge1xuICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oYWN0aXZlKS5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX0FDVElWRSQzKTtcbiAgICAgICAgdmFyIGRyb3Bkb3duQ2hpbGQgPSAkX19kZWZhdWx0WydkZWZhdWx0J10oYWN0aXZlLnBhcmVudE5vZGUpLmZpbmQoU0VMRUNUT1JfRFJPUERPV05fQUNUSVZFX0NISUxEKVswXTtcblxuICAgICAgICBpZiAoZHJvcGRvd25DaGlsZCkge1xuICAgICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShkcm9wZG93bkNoaWxkKS5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX0FDVElWRSQzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhY3RpdmUuZ2V0QXR0cmlidXRlKCdyb2xlJykgPT09ICd0YWInKSB7XG4gICAgICAgICAgYWN0aXZlLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oZWxlbWVudCkuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9BQ1RJVkUkMyk7XG5cbiAgICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZSgncm9sZScpID09PSAndGFiJykge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsIHRydWUpO1xuICAgICAgfVxuXG4gICAgICBVdGlsLnJlZmxvdyhlbGVtZW50KTtcblxuICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSQ0KSkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XJDYpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlICYmICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShlbGVtZW50LnBhcmVudE5vZGUpLmhhc0NsYXNzKENMQVNTX05BTUVfRFJPUERPV05fTUVOVSkpIHtcbiAgICAgICAgdmFyIGRyb3Bkb3duRWxlbWVudCA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShlbGVtZW50KS5jbG9zZXN0KFNFTEVDVE9SX0RST1BET1dOJDEpWzBdO1xuXG4gICAgICAgIGlmIChkcm9wZG93bkVsZW1lbnQpIHtcbiAgICAgICAgICB2YXIgZHJvcGRvd25Ub2dnbGVMaXN0ID0gW10uc2xpY2UuY2FsbChkcm9wZG93bkVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUkMSkpO1xuICAgICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShkcm9wZG93blRvZ2dsZUxpc3QpLmFkZENsYXNzKENMQVNTX05BTUVfQUNUSVZFJDMpO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfSAvLyBTdGF0aWNcbiAgICA7XG5cbiAgICBUYWIuX2pRdWVyeUludGVyZmFjZSA9IGZ1bmN0aW9uIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyICR0aGlzID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMpO1xuICAgICAgICB2YXIgZGF0YSA9ICR0aGlzLmRhdGEoREFUQV9LRVkkOSk7XG5cbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgZGF0YSA9IG5ldyBUYWIodGhpcyk7XG4gICAgICAgICAgJHRoaXMuZGF0YShEQVRBX0tFWSQ5LCBkYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk5vIG1ldGhvZCBuYW1lZCBcXFwiXCIgKyBjb25maWcgKyBcIlxcXCJcIik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGF0YVtjb25maWddKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfY3JlYXRlQ2xhc3MoVGFiLCBudWxsLCBbe1xuICAgICAga2V5OiBcIlZFUlNJT05cIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gVkVSU0lPTiQ5O1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBUYWI7XG4gIH0oKTtcbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cblxuICAkX19kZWZhdWx0WydkZWZhdWx0J10oZG9jdW1lbnQpLm9uKEVWRU5UX0NMSUNLX0RBVEFfQVBJJDYsIFNFTEVDVE9SX0RBVEFfVE9HR0xFJDQsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBUYWIuX2pRdWVyeUludGVyZmFjZS5jYWxsKCRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKSwgJ3Nob3cnKTtcbiAgfSk7XG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogalF1ZXJ5XG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAkX19kZWZhdWx0WydkZWZhdWx0J10uZm5bTkFNRSQ5XSA9IFRhYi5falF1ZXJ5SW50ZXJmYWNlO1xuICAkX19kZWZhdWx0WydkZWZhdWx0J10uZm5bTkFNRSQ5XS5Db25zdHJ1Y3RvciA9IFRhYjtcblxuICAkX19kZWZhdWx0WydkZWZhdWx0J10uZm5bTkFNRSQ5XS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJDldID0gSlFVRVJZX05PX0NPTkZMSUNUJDk7XG4gICAgcmV0dXJuIFRhYi5falF1ZXJ5SW50ZXJmYWNlO1xuICB9O1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ29uc3RhbnRzXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICB2YXIgTkFNRSRhID0gJ3RvYXN0JztcbiAgdmFyIFZFUlNJT04kYSA9ICc0LjUuMyc7XG4gIHZhciBEQVRBX0tFWSRhID0gJ2JzLnRvYXN0JztcbiAgdmFyIEVWRU5UX0tFWSRhID0gXCIuXCIgKyBEQVRBX0tFWSRhO1xuICB2YXIgSlFVRVJZX05PX0NPTkZMSUNUJGEgPSAkX19kZWZhdWx0WydkZWZhdWx0J10uZm5bTkFNRSRhXTtcbiAgdmFyIEVWRU5UX0NMSUNLX0RJU01JU1MkMSA9IFwiY2xpY2suZGlzbWlzc1wiICsgRVZFTlRfS0VZJGE7XG4gIHZhciBFVkVOVF9ISURFJDQgPSBcImhpZGVcIiArIEVWRU5UX0tFWSRhO1xuICB2YXIgRVZFTlRfSElEREVOJDQgPSBcImhpZGRlblwiICsgRVZFTlRfS0VZJGE7XG4gIHZhciBFVkVOVF9TSE9XJDQgPSBcInNob3dcIiArIEVWRU5UX0tFWSRhO1xuICB2YXIgRVZFTlRfU0hPV04kNCA9IFwic2hvd25cIiArIEVWRU5UX0tFWSRhO1xuICB2YXIgQ0xBU1NfTkFNRV9GQURFJDUgPSAnZmFkZSc7XG4gIHZhciBDTEFTU19OQU1FX0hJREUgPSAnaGlkZSc7XG4gIHZhciBDTEFTU19OQU1FX1NIT1ckNyA9ICdzaG93JztcbiAgdmFyIENMQVNTX05BTUVfU0hPV0lORyA9ICdzaG93aW5nJztcbiAgdmFyIERlZmF1bHRUeXBlJDcgPSB7XG4gICAgYW5pbWF0aW9uOiAnYm9vbGVhbicsXG4gICAgYXV0b2hpZGU6ICdib29sZWFuJyxcbiAgICBkZWxheTogJ251bWJlcidcbiAgfTtcbiAgdmFyIERlZmF1bHQkNyA9IHtcbiAgICBhbmltYXRpb246IHRydWUsXG4gICAgYXV0b2hpZGU6IHRydWUsXG4gICAgZGVsYXk6IDUwMFxuICB9O1xuICB2YXIgU0VMRUNUT1JfREFUQV9ESVNNSVNTJDEgPSAnW2RhdGEtZGlzbWlzcz1cInRvYXN0XCJdJztcbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBDbGFzcyBEZWZpbml0aW9uXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICB2YXIgVG9hc3QgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRvYXN0KGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKTtcbiAgICAgIHRoaXMuX3RpbWVvdXQgPSBudWxsO1xuXG4gICAgICB0aGlzLl9zZXRMaXN0ZW5lcnMoKTtcbiAgICB9IC8vIEdldHRlcnNcblxuXG4gICAgdmFyIF9wcm90byA9IFRvYXN0LnByb3RvdHlwZTtcblxuICAgIC8vIFB1YmxpY1xuICAgIF9wcm90by5zaG93ID0gZnVuY3Rpb24gc2hvdygpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHZhciBzaG93RXZlbnQgPSAkX19kZWZhdWx0WydkZWZhdWx0J10uRXZlbnQoRVZFTlRfU0hPVyQ0KTtcbiAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKHNob3dFdmVudCk7XG5cbiAgICAgIGlmIChzaG93RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9jbGVhclRpbWVvdXQoKTtcblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5hbmltYXRpb24pIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfRkFERSQ1KTtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbXBsZXRlID0gZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICAgIF90aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XSU5HKTtcblxuICAgICAgICBfdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVyQ3KTtcblxuICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oX3RoaXMuX2VsZW1lbnQpLnRyaWdnZXIoRVZFTlRfU0hPV04kNCk7XG5cbiAgICAgICAgaWYgKF90aGlzLl9jb25maWcuYXV0b2hpZGUpIHtcbiAgICAgICAgICBfdGhpcy5fdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuaGlkZSgpO1xuICAgICAgICAgIH0sIF90aGlzLl9jb25maWcuZGVsYXkpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9ISURFKTtcblxuICAgICAgVXRpbC5yZWZsb3codGhpcy5fZWxlbWVudCk7XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1dJTkcpO1xuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmFuaW1hdGlvbikge1xuICAgICAgICB2YXIgdHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KTtcbiAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMuX2VsZW1lbnQpLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBjb21wbGV0ZSkuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5oaWRlID0gZnVuY3Rpb24gaGlkZSgpIHtcbiAgICAgIGlmICghdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XJDcpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGhpZGVFdmVudCA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5FdmVudChFVkVOVF9ISURFJDQpO1xuICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoaGlkZUV2ZW50KTtcblxuICAgICAgaWYgKGhpZGVFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2Nsb3NlKCk7XG4gICAgfTtcblxuICAgIF9wcm90by5kaXNwb3NlID0gZnVuY3Rpb24gZGlzcG9zZSgpIHtcbiAgICAgIHRoaXMuX2NsZWFyVGltZW91dCgpO1xuXG4gICAgICBpZiAodGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XJDcpKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1ckNyk7XG4gICAgICB9XG5cbiAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzLl9lbGVtZW50KS5vZmYoRVZFTlRfQ0xJQ0tfRElTTUlTUyQxKTtcbiAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZJGEpO1xuICAgICAgdGhpcy5fZWxlbWVudCA9IG51bGw7XG4gICAgICB0aGlzLl9jb25maWcgPSBudWxsO1xuICAgIH0gLy8gUHJpdmF0ZVxuICAgIDtcblxuICAgIF9wcm90by5fZ2V0Q29uZmlnID0gZnVuY3Rpb24gX2dldENvbmZpZyhjb25maWcpIHtcbiAgICAgIGNvbmZpZyA9IF9leHRlbmRzKHt9LCBEZWZhdWx0JDcsICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzLl9lbGVtZW50KS5kYXRhKCksIHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZyA/IGNvbmZpZyA6IHt9KTtcbiAgICAgIFV0aWwudHlwZUNoZWNrQ29uZmlnKE5BTUUkYSwgY29uZmlnLCB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRUeXBlKTtcbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfTtcblxuICAgIF9wcm90by5fc2V0TGlzdGVuZXJzID0gZnVuY3Rpb24gX3NldExpc3RlbmVycygpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcy5fZWxlbWVudCkub24oRVZFTlRfQ0xJQ0tfRElTTUlTUyQxLCBTRUxFQ1RPUl9EQVRBX0RJU01JU1MkMSwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMyLmhpZGUoKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2Nsb3NlID0gZnVuY3Rpb24gX2Nsb3NlKCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIHZhciBjb21wbGV0ZSA9IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgICBfdGhpczMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0hJREUpO1xuXG4gICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShfdGhpczMuX2VsZW1lbnQpLnRyaWdnZXIoRVZFTlRfSElEREVOJDQpO1xuICAgICAgfTtcblxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVyQ3KTtcblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5hbmltYXRpb24pIHtcbiAgICAgICAgdmFyIHRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudCk7XG4gICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzLl9lbGVtZW50KS5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgY29tcGxldGUpLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25EdXJhdGlvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb21wbGV0ZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8uX2NsZWFyVGltZW91dCA9IGZ1bmN0aW9uIF9jbGVhclRpbWVvdXQoKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dCk7XG4gICAgICB0aGlzLl90aW1lb3V0ID0gbnVsbDtcbiAgICB9IC8vIFN0YXRpY1xuICAgIDtcblxuICAgIFRvYXN0Ll9qUXVlcnlJbnRlcmZhY2UgPSBmdW5jdGlvbiBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciAkZWxlbWVudCA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKTtcbiAgICAgICAgdmFyIGRhdGEgPSAkZWxlbWVudC5kYXRhKERBVEFfS0VZJGEpO1xuXG4gICAgICAgIHZhciBfY29uZmlnID0gdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnO1xuXG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgIGRhdGEgPSBuZXcgVG9hc3QodGhpcywgX2NvbmZpZyk7XG4gICAgICAgICAgJGVsZW1lbnQuZGF0YShEQVRBX0tFWSRhLCBkYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk5vIG1ldGhvZCBuYW1lZCBcXFwiXCIgKyBjb25maWcgKyBcIlxcXCJcIik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGF0YVtjb25maWddKHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX2NyZWF0ZUNsYXNzKFRvYXN0LCBudWxsLCBbe1xuICAgICAga2V5OiBcIlZFUlNJT05cIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gVkVSU0lPTiRhO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJEZWZhdWx0VHlwZVwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBEZWZhdWx0VHlwZSQ3O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJEZWZhdWx0XCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIERlZmF1bHQkNztcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gVG9hc3Q7XG4gIH0oKTtcbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBqUXVlcnlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG5cbiAgJF9fZGVmYXVsdFsnZGVmYXVsdCddLmZuW05BTUUkYV0gPSBUb2FzdC5falF1ZXJ5SW50ZXJmYWNlO1xuICAkX19kZWZhdWx0WydkZWZhdWx0J10uZm5bTkFNRSRhXS5Db25zdHJ1Y3RvciA9IFRvYXN0O1xuXG4gICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJGFdLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddLmZuW05BTUUkYV0gPSBKUVVFUllfTk9fQ09ORkxJQ1QkYTtcbiAgICByZXR1cm4gVG9hc3QuX2pRdWVyeUludGVyZmFjZTtcbiAgfTtcblxuICBleHBvcnRzLkFsZXJ0ID0gQWxlcnQ7XG4gIGV4cG9ydHMuQnV0dG9uID0gQnV0dG9uO1xuICBleHBvcnRzLkNhcm91c2VsID0gQ2Fyb3VzZWw7XG4gIGV4cG9ydHMuQ29sbGFwc2UgPSBDb2xsYXBzZTtcbiAgZXhwb3J0cy5Ecm9wZG93biA9IERyb3Bkb3duO1xuICBleHBvcnRzLk1vZGFsID0gTW9kYWw7XG4gIGV4cG9ydHMuUG9wb3ZlciA9IFBvcG92ZXI7XG4gIGV4cG9ydHMuU2Nyb2xsc3B5ID0gU2Nyb2xsU3B5O1xuICBleHBvcnRzLlRhYiA9IFRhYjtcbiAgZXhwb3J0cy5Ub2FzdCA9IFRvYXN0O1xuICBleHBvcnRzLlRvb2x0aXAgPSBUb29sdGlwO1xuICBleHBvcnRzLlV0aWwgPSBVdGlsO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbn0pKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ib290c3RyYXAuanMubWFwXG4iLCIvKiFcbiAqIGJzQ3VzdG9tRmlsZUlucHV0IHYxLjMuNCAoaHR0cHM6Ly9naXRodWIuY29tL0pvaGFubi1TL2JzLWN1c3RvbS1maWxlLWlucHV0KVxuICogQ29weXJpZ2h0IDIwMTggLSAyMDIwIEpvaGFubi1TIDxqb2hhbm4uc2Vydm9pcmVAZ21haWwuY29tPlxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vSm9oYW5uLVMvYnMtY3VzdG9tLWZpbGUtaW5wdXQvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqL1xuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuICAoZ2xvYmFsID0gZ2xvYmFsIHx8IHNlbGYsIGdsb2JhbC5ic0N1c3RvbUZpbGVJbnB1dCA9IGZhY3RvcnkoKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuICB2YXIgU2VsZWN0b3IgPSB7XG4gICAgQ1VTVE9NRklMRTogJy5jdXN0b20tZmlsZSBpbnB1dFt0eXBlPVwiZmlsZVwiXScsXG4gICAgQ1VTVE9NRklMRUxBQkVMOiAnLmN1c3RvbS1maWxlLWxhYmVsJyxcbiAgICBGT1JNOiAnZm9ybScsXG4gICAgSU5QVVQ6ICdpbnB1dCdcbiAgfTtcblxuICB2YXIgdGV4dE5vZGVUeXBlID0gMztcblxuICB2YXIgZ2V0RGVmYXVsdFRleHQgPSBmdW5jdGlvbiBnZXREZWZhdWx0VGV4dChpbnB1dCkge1xuICAgIHZhciBkZWZhdWx0VGV4dCA9ICcnO1xuICAgIHZhciBsYWJlbCA9IGlucHV0LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5DVVNUT01GSUxFTEFCRUwpO1xuXG4gICAgaWYgKGxhYmVsKSB7XG4gICAgICBkZWZhdWx0VGV4dCA9IGxhYmVsLnRleHRDb250ZW50O1xuICAgIH1cblxuICAgIHJldHVybiBkZWZhdWx0VGV4dDtcbiAgfTtcblxuICB2YXIgZmluZEZpcnN0Q2hpbGROb2RlID0gZnVuY3Rpb24gZmluZEZpcnN0Q2hpbGROb2RlKGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHZhciBjaGlsZE5vZGVzID0gW10uc2xpY2UuY2FsbChlbGVtZW50LmNoaWxkTm9kZXMpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIG5vZGUgPSBjaGlsZE5vZGVzW2ldO1xuXG4gICAgICAgIGlmIChub2RlLm5vZGVUeXBlICE9PSB0ZXh0Tm9kZVR5cGUpIHtcbiAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9O1xuXG4gIHZhciByZXN0b3JlRGVmYXVsdFRleHQgPSBmdW5jdGlvbiByZXN0b3JlRGVmYXVsdFRleHQoaW5wdXQpIHtcbiAgICB2YXIgZGVmYXVsdFRleHQgPSBpbnB1dC5ic0N1c3RvbUZpbGVJbnB1dC5kZWZhdWx0VGV4dDtcbiAgICB2YXIgbGFiZWwgPSBpbnB1dC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuQ1VTVE9NRklMRUxBQkVMKTtcblxuICAgIGlmIChsYWJlbCkge1xuICAgICAgdmFyIGVsZW1lbnQgPSBmaW5kRmlyc3RDaGlsZE5vZGUobGFiZWwpO1xuICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGRlZmF1bHRUZXh0O1xuICAgIH1cbiAgfTtcblxuICB2YXIgZmlsZUFwaSA9ICEhd2luZG93LkZpbGU7XG4gIHZhciBGQUtFX1BBVEggPSAnZmFrZXBhdGgnO1xuICB2YXIgRkFLRV9QQVRIX1NFUEFSQVRPUiA9ICdcXFxcJztcblxuICB2YXIgZ2V0U2VsZWN0ZWRGaWxlcyA9IGZ1bmN0aW9uIGdldFNlbGVjdGVkRmlsZXMoaW5wdXQpIHtcbiAgICBpZiAoaW5wdXQuaGFzQXR0cmlidXRlKCdtdWx0aXBsZScpICYmIGZpbGVBcGkpIHtcbiAgICAgIHJldHVybiBbXS5zbGljZS5jYWxsKGlucHV0LmZpbGVzKS5tYXAoZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgICAgcmV0dXJuIGZpbGUubmFtZTtcbiAgICAgIH0pLmpvaW4oJywgJyk7XG4gICAgfVxuXG4gICAgaWYgKGlucHV0LnZhbHVlLmluZGV4T2YoRkFLRV9QQVRIKSAhPT0gLTEpIHtcbiAgICAgIHZhciBzcGxpdHRlZFZhbHVlID0gaW5wdXQudmFsdWUuc3BsaXQoRkFLRV9QQVRIX1NFUEFSQVRPUik7XG4gICAgICByZXR1cm4gc3BsaXR0ZWRWYWx1ZVtzcGxpdHRlZFZhbHVlLmxlbmd0aCAtIDFdO1xuICAgIH1cblxuICAgIHJldHVybiBpbnB1dC52YWx1ZTtcbiAgfTtcblxuICBmdW5jdGlvbiBoYW5kbGVJbnB1dENoYW5nZSgpIHtcbiAgICB2YXIgbGFiZWwgPSB0aGlzLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5DVVNUT01GSUxFTEFCRUwpO1xuXG4gICAgaWYgKGxhYmVsKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IGZpbmRGaXJzdENoaWxkTm9kZShsYWJlbCk7XG4gICAgICB2YXIgaW5wdXRWYWx1ZSA9IGdldFNlbGVjdGVkRmlsZXModGhpcyk7XG5cbiAgICAgIGlmIChpbnB1dFZhbHVlLmxlbmd0aCkge1xuICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gaW5wdXRWYWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3RvcmVEZWZhdWx0VGV4dCh0aGlzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVGb3JtUmVzZXQoKSB7XG4gICAgdmFyIGN1c3RvbUZpbGVMaXN0ID0gW10uc2xpY2UuY2FsbCh0aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuSU5QVVQpKS5maWx0ZXIoZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgICByZXR1cm4gISFpbnB1dC5ic0N1c3RvbUZpbGVJbnB1dDtcbiAgICB9KTtcblxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjdXN0b21GaWxlTGlzdC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgcmVzdG9yZURlZmF1bHRUZXh0KGN1c3RvbUZpbGVMaXN0W2ldKTtcbiAgICB9XG4gIH1cblxuICB2YXIgY3VzdG9tUHJvcGVydHkgPSAnYnNDdXN0b21GaWxlSW5wdXQnO1xuICB2YXIgRXZlbnQgPSB7XG4gICAgRk9STVJFU0VUOiAncmVzZXQnLFxuICAgIElOUFVUQ0hBTkdFOiAnY2hhbmdlJ1xuICB9O1xuICB2YXIgYnNDdXN0b21GaWxlSW5wdXQgPSB7XG4gICAgaW5pdDogZnVuY3Rpb24gaW5pdChpbnB1dFNlbGVjdG9yLCBmb3JtU2VsZWN0b3IpIHtcbiAgICAgIGlmIChpbnB1dFNlbGVjdG9yID09PSB2b2lkIDApIHtcbiAgICAgICAgaW5wdXRTZWxlY3RvciA9IFNlbGVjdG9yLkNVU1RPTUZJTEU7XG4gICAgICB9XG5cbiAgICAgIGlmIChmb3JtU2VsZWN0b3IgPT09IHZvaWQgMCkge1xuICAgICAgICBmb3JtU2VsZWN0b3IgPSBTZWxlY3Rvci5GT1JNO1xuICAgICAgfVxuXG4gICAgICB2YXIgY3VzdG9tRmlsZUlucHV0TGlzdCA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChpbnB1dFNlbGVjdG9yKSk7XG4gICAgICB2YXIgZm9ybUxpc3QgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZm9ybVNlbGVjdG9yKSk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjdXN0b21GaWxlSW5wdXRMaXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHZhciBpbnB1dCA9IGN1c3RvbUZpbGVJbnB1dExpc3RbaV07XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpbnB1dCwgY3VzdG9tUHJvcGVydHksIHtcbiAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgZGVmYXVsdFRleHQ6IGdldERlZmF1bHRUZXh0KGlucHV0KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIGhhbmRsZUlucHV0Q2hhbmdlLmNhbGwoaW5wdXQpO1xuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKEV2ZW50LklOUFVUQ0hBTkdFLCBoYW5kbGVJbnB1dENoYW5nZSk7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIF9pID0gMCwgX2xlbiA9IGZvcm1MaXN0Lmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICAgIGZvcm1MaXN0W19pXS5hZGRFdmVudExpc3RlbmVyKEV2ZW50LkZPUk1SRVNFVCwgaGFuZGxlRm9ybVJlc2V0KTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZm9ybUxpc3RbX2ldLCBjdXN0b21Qcm9wZXJ0eSwge1xuICAgICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgIHZhciBmb3JtTGlzdCA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5GT1JNKSkuZmlsdGVyKGZ1bmN0aW9uIChmb3JtKSB7XG4gICAgICAgIHJldHVybiAhIWZvcm0uYnNDdXN0b21GaWxlSW5wdXQ7XG4gICAgICB9KTtcbiAgICAgIHZhciBjdXN0b21GaWxlSW5wdXRMaXN0ID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLklOUFVUKSkuZmlsdGVyKGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgICByZXR1cm4gISFpbnB1dC5ic0N1c3RvbUZpbGVJbnB1dDtcbiAgICAgIH0pO1xuXG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gY3VzdG9tRmlsZUlucHV0TGlzdC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2YXIgaW5wdXQgPSBjdXN0b21GaWxlSW5wdXRMaXN0W2ldO1xuICAgICAgICByZXN0b3JlRGVmYXVsdFRleHQoaW5wdXQpO1xuICAgICAgICBpbnB1dFtjdXN0b21Qcm9wZXJ0eV0gPSB1bmRlZmluZWQ7XG4gICAgICAgIGlucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoRXZlbnQuSU5QVVRDSEFOR0UsIGhhbmRsZUlucHV0Q2hhbmdlKTtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgX2kyID0gMCwgX2xlbjIgPSBmb3JtTGlzdC5sZW5ndGg7IF9pMiA8IF9sZW4yOyBfaTIrKykge1xuICAgICAgICBmb3JtTGlzdFtfaTJdLnJlbW92ZUV2ZW50TGlzdGVuZXIoRXZlbnQuRk9STVJFU0VULCBoYW5kbGVGb3JtUmVzZXQpO1xuXG4gICAgICAgIGZvcm1MaXN0W19pMl1bY3VzdG9tUHJvcGVydHldID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gYnNDdXN0b21GaWxlSW5wdXQ7XG5cbn0pKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1icy1jdXN0b20tZmlsZS1pbnB1dC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjaGFyQXQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLW11bHRpYnl0ZScpLmNoYXJBdDtcblxuLy8gYEFkdmFuY2VTdHJpbmdJbmRleGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hZHZhbmNlc3RyaW5naW5kZXhcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFMsIGluZGV4LCB1bmljb2RlKSB7XG4gIHJldHVybiBpbmRleCArICh1bmljb2RlID8gY2hhckF0KFMsIGluZGV4KS5sZW5ndGggOiAxKTtcbn07XG4iLCJ2YXIgcGF0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9wYXRoJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIHdyYXBwZWRXZWxsS25vd25TeW1ib2xNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wtd3JhcHBlZCcpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKS5mO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChOQU1FKSB7XG4gIHZhciBTeW1ib2wgPSBwYXRoLlN5bWJvbCB8fCAocGF0aC5TeW1ib2wgPSB7fSk7XG4gIGlmICghaGFzKFN5bWJvbCwgTkFNRSkpIGRlZmluZVByb3BlcnR5KFN5bWJvbCwgTkFNRSwge1xuICAgIHZhbHVlOiB3cmFwcGVkV2VsbEtub3duU3ltYm9sTW9kdWxlLmYoTkFNRSlcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gVE9ETzogUmVtb3ZlIGZyb20gYGNvcmUtanNANGAgc2luY2UgaXQncyBtb3ZlZCB0byBlbnRyeSBwb2ludHNcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXMucmVnZXhwLmV4ZWMnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgcmVnZXhwRXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYycpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcblxudmFyIFJFUExBQ0VfU1VQUE9SVFNfTkFNRURfR1JPVVBTID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gI3JlcGxhY2UgbmVlZHMgYnVpbHQtaW4gc3VwcG9ydCBmb3IgbmFtZWQgZ3JvdXBzLlxuICAvLyAjbWF0Y2ggd29ya3MgZmluZSBiZWNhdXNlIGl0IGp1c3QgcmV0dXJuIHRoZSBleGVjIHJlc3VsdHMsIGV2ZW4gaWYgaXQgaGFzXG4gIC8vIGEgXCJncm9wc1wiIHByb3BlcnR5LlxuICB2YXIgcmUgPSAvLi87XG4gIHJlLmV4ZWMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHJlc3VsdC5ncm91cHMgPSB7IGE6ICc3JyB9O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIHJldHVybiAnJy5yZXBsYWNlKHJlLCAnJDxhPicpICE9PSAnNyc7XG59KTtcblxuLy8gSUUgPD0gMTEgcmVwbGFjZXMgJDAgd2l0aCB0aGUgd2hvbGUgbWF0Y2gsIGFzIGlmIGl0IHdhcyAkJlxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNjAyNDY2Ni9nZXR0aW5nLWllLXRvLXJlcGxhY2UtYS1yZWdleC13aXRoLXRoZS1saXRlcmFsLXN0cmluZy0wXG52YXIgUkVQTEFDRV9LRUVQU18kMCA9IChmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAnYScucmVwbGFjZSgvLi8sICckMCcpID09PSAnJDAnO1xufSkoKTtcblxudmFyIFJFUExBQ0UgPSB3ZWxsS25vd25TeW1ib2woJ3JlcGxhY2UnKTtcbi8vIFNhZmFyaSA8PSAxMy4wLjMoPykgc3Vic3RpdHV0ZXMgbnRoIGNhcHR1cmUgd2hlcmUgbj5tIHdpdGggYW4gZW1wdHkgc3RyaW5nXG52YXIgUkVHRVhQX1JFUExBQ0VfU1VCU1RJVFVURVNfVU5ERUZJTkVEX0NBUFRVUkUgPSAoZnVuY3Rpb24gKCkge1xuICBpZiAoLy4vW1JFUExBQ0VdKSB7XG4gICAgcmV0dXJuIC8uL1tSRVBMQUNFXSgnYScsICckMCcpID09PSAnJztcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59KSgpO1xuXG4vLyBDaHJvbWUgNTEgaGFzIGEgYnVnZ3kgXCJzcGxpdFwiIGltcGxlbWVudGF0aW9uIHdoZW4gUmVnRXhwI2V4ZWMgIT09IG5hdGl2ZUV4ZWNcbi8vIFdlZXggSlMgaGFzIGZyb3plbiBidWlsdC1pbiBwcm90b3R5cGVzLCBzbyB1c2UgdHJ5IC8gY2F0Y2ggd3JhcHBlclxudmFyIFNQTElUX1dPUktTX1dJVEhfT1ZFUldSSVRURU5fRVhFQyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciByZSA9IC8oPzopLztcbiAgdmFyIG9yaWdpbmFsRXhlYyA9IHJlLmV4ZWM7XG4gIHJlLmV4ZWMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBvcmlnaW5hbEV4ZWMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfTtcbiAgdmFyIHJlc3VsdCA9ICdhYicuc3BsaXQocmUpO1xuICByZXR1cm4gcmVzdWx0Lmxlbmd0aCAhPT0gMiB8fCByZXN1bHRbMF0gIT09ICdhJyB8fCByZXN1bHRbMV0gIT09ICdiJztcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVksIGxlbmd0aCwgZXhlYywgc2hhbSkge1xuICB2YXIgU1lNQk9MID0gd2VsbEtub3duU3ltYm9sKEtFWSk7XG5cbiAgdmFyIERFTEVHQVRFU19UT19TWU1CT0wgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIC8vIFN0cmluZyBtZXRob2RzIGNhbGwgc3ltYm9sLW5hbWVkIFJlZ0VwIG1ldGhvZHNcbiAgICB2YXIgTyA9IHt9O1xuICAgIE9bU1lNQk9MXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH07XG4gICAgcmV0dXJuICcnW0tFWV0oTykgIT0gNztcbiAgfSk7XG5cbiAgdmFyIERFTEVHQVRFU19UT19FWEVDID0gREVMRUdBVEVTX1RPX1NZTUJPTCAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIC8vIFN5bWJvbC1uYW1lZCBSZWdFeHAgbWV0aG9kcyBjYWxsIC5leGVjXG4gICAgdmFyIGV4ZWNDYWxsZWQgPSBmYWxzZTtcbiAgICB2YXIgcmUgPSAvYS87XG5cbiAgICBpZiAoS0VZID09PSAnc3BsaXQnKSB7XG4gICAgICAvLyBXZSBjYW4ndCB1c2UgcmVhbCByZWdleCBoZXJlIHNpbmNlIGl0IGNhdXNlcyBkZW9wdGltaXphdGlvblxuICAgICAgLy8gYW5kIHNlcmlvdXMgcGVyZm9ybWFuY2UgZGVncmFkYXRpb24gaW4gVjhcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8zMDZcbiAgICAgIHJlID0ge307XG4gICAgICAvLyBSZWdFeHBbQEBzcGxpdF0gZG9lc24ndCBjYWxsIHRoZSByZWdleCdzIGV4ZWMgbWV0aG9kLCBidXQgZmlyc3QgY3JlYXRlc1xuICAgICAgLy8gYSBuZXcgb25lLiBXZSBuZWVkIHRvIHJldHVybiB0aGUgcGF0Y2hlZCByZWdleCB3aGVuIGNyZWF0aW5nIHRoZSBuZXcgb25lLlxuICAgICAgcmUuY29uc3RydWN0b3IgPSB7fTtcbiAgICAgIHJlLmNvbnN0cnVjdG9yW1NQRUNJRVNdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gcmU7IH07XG4gICAgICByZS5mbGFncyA9ICcnO1xuICAgICAgcmVbU1lNQk9MXSA9IC8uL1tTWU1CT0xdO1xuICAgIH1cblxuICAgIHJlLmV4ZWMgPSBmdW5jdGlvbiAoKSB7IGV4ZWNDYWxsZWQgPSB0cnVlOyByZXR1cm4gbnVsbDsgfTtcblxuICAgIHJlW1NZTUJPTF0oJycpO1xuICAgIHJldHVybiAhZXhlY0NhbGxlZDtcbiAgfSk7XG5cbiAgaWYgKFxuICAgICFERUxFR0FURVNfVE9fU1lNQk9MIHx8XG4gICAgIURFTEVHQVRFU19UT19FWEVDIHx8XG4gICAgKEtFWSA9PT0gJ3JlcGxhY2UnICYmICEoXG4gICAgICBSRVBMQUNFX1NVUFBPUlRTX05BTUVEX0dST1VQUyAmJlxuICAgICAgUkVQTEFDRV9LRUVQU18kMCAmJlxuICAgICAgIVJFR0VYUF9SRVBMQUNFX1NVQlNUSVRVVEVTX1VOREVGSU5FRF9DQVBUVVJFXG4gICAgKSkgfHxcbiAgICAoS0VZID09PSAnc3BsaXQnICYmICFTUExJVF9XT1JLU19XSVRIX09WRVJXUklUVEVOX0VYRUMpXG4gICkge1xuICAgIHZhciBuYXRpdmVSZWdFeHBNZXRob2QgPSAvLi9bU1lNQk9MXTtcbiAgICB2YXIgbWV0aG9kcyA9IGV4ZWMoU1lNQk9MLCAnJ1tLRVldLCBmdW5jdGlvbiAobmF0aXZlTWV0aG9kLCByZWdleHAsIHN0ciwgYXJnMiwgZm9yY2VTdHJpbmdNZXRob2QpIHtcbiAgICAgIGlmIChyZWdleHAuZXhlYyA9PT0gcmVnZXhwRXhlYykge1xuICAgICAgICBpZiAoREVMRUdBVEVTX1RPX1NZTUJPTCAmJiAhZm9yY2VTdHJpbmdNZXRob2QpIHtcbiAgICAgICAgICAvLyBUaGUgbmF0aXZlIFN0cmluZyBtZXRob2QgYWxyZWFkeSBkZWxlZ2F0ZXMgdG8gQEBtZXRob2QgKHRoaXNcbiAgICAgICAgICAvLyBwb2x5ZmlsbGVkIGZ1bmN0aW9uKSwgbGVhc2luZyB0byBpbmZpbml0ZSByZWN1cnNpb24uXG4gICAgICAgICAgLy8gV2UgYXZvaWQgaXQgYnkgZGlyZWN0bHkgY2FsbGluZyB0aGUgbmF0aXZlIEBAbWV0aG9kIG1ldGhvZC5cbiAgICAgICAgICByZXR1cm4geyBkb25lOiB0cnVlLCB2YWx1ZTogbmF0aXZlUmVnRXhwTWV0aG9kLmNhbGwocmVnZXhwLCBzdHIsIGFyZzIpIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSwgdmFsdWU6IG5hdGl2ZU1ldGhvZC5jYWxsKHN0ciwgcmVnZXhwLCBhcmcyKSB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHsgZG9uZTogZmFsc2UgfTtcbiAgICB9LCB7XG4gICAgICBSRVBMQUNFX0tFRVBTXyQwOiBSRVBMQUNFX0tFRVBTXyQwLFxuICAgICAgUkVHRVhQX1JFUExBQ0VfU1VCU1RJVFVURVNfVU5ERUZJTkVEX0NBUFRVUkU6IFJFR0VYUF9SRVBMQUNFX1NVQlNUSVRVVEVTX1VOREVGSU5FRF9DQVBUVVJFXG4gICAgfSk7XG4gICAgdmFyIHN0cmluZ01ldGhvZCA9IG1ldGhvZHNbMF07XG4gICAgdmFyIHJlZ2V4TWV0aG9kID0gbWV0aG9kc1sxXTtcblxuICAgIHJlZGVmaW5lKFN0cmluZy5wcm90b3R5cGUsIEtFWSwgc3RyaW5nTWV0aG9kKTtcbiAgICByZWRlZmluZShSZWdFeHAucHJvdG90eXBlLCBTWU1CT0wsIGxlbmd0aCA9PSAyXG4gICAgICAvLyAyMS4yLjUuOCBSZWdFeHAucHJvdG90eXBlW0BAcmVwbGFjZV0oc3RyaW5nLCByZXBsYWNlVmFsdWUpXG4gICAgICAvLyAyMS4yLjUuMTEgUmVnRXhwLnByb3RvdHlwZVtAQHNwbGl0XShzdHJpbmcsIGxpbWl0KVxuICAgICAgPyBmdW5jdGlvbiAoc3RyaW5nLCBhcmcpIHsgcmV0dXJuIHJlZ2V4TWV0aG9kLmNhbGwoc3RyaW5nLCB0aGlzLCBhcmcpOyB9XG4gICAgICAvLyAyMS4yLjUuNiBSZWdFeHAucHJvdG90eXBlW0BAbWF0Y2hdKHN0cmluZylcbiAgICAgIC8vIDIxLjIuNS45IFJlZ0V4cC5wcm90b3R5cGVbQEBzZWFyY2hdKHN0cmluZylcbiAgICAgIDogZnVuY3Rpb24gKHN0cmluZykgeyByZXR1cm4gcmVnZXhNZXRob2QuY2FsbChzdHJpbmcsIHRoaXMpOyB9XG4gICAgKTtcbiAgfVxuXG4gIGlmIChzaGFtKSBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoUmVnRXhwLnByb3RvdHlwZVtTWU1CT0xdLCAnc2hhbScsIHRydWUpO1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qtc2V0LXByb3RvdHlwZS1vZicpO1xuXG4vLyBtYWtlcyBzdWJjbGFzc2luZyB3b3JrIGNvcnJlY3QgZm9yIHdyYXBwZWQgYnVpbHQtaW5zXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkdGhpcywgZHVtbXksIFdyYXBwZXIpIHtcbiAgdmFyIE5ld1RhcmdldCwgTmV3VGFyZ2V0UHJvdG90eXBlO1xuICBpZiAoXG4gICAgLy8gaXQgY2FuIHdvcmsgb25seSB3aXRoIG5hdGl2ZSBgc2V0UHJvdG90eXBlT2ZgXG4gICAgc2V0UHJvdG90eXBlT2YgJiZcbiAgICAvLyB3ZSBoYXZlbid0IGNvbXBsZXRlbHkgY29ycmVjdCBwcmUtRVM2IHdheSBmb3IgZ2V0dGluZyBgbmV3LnRhcmdldGAsIHNvIHVzZSB0aGlzXG4gICAgdHlwZW9mIChOZXdUYXJnZXQgPSBkdW1teS5jb25zdHJ1Y3RvcikgPT0gJ2Z1bmN0aW9uJyAmJlxuICAgIE5ld1RhcmdldCAhPT0gV3JhcHBlciAmJlxuICAgIGlzT2JqZWN0KE5ld1RhcmdldFByb3RvdHlwZSA9IE5ld1RhcmdldC5wcm90b3R5cGUpICYmXG4gICAgTmV3VGFyZ2V0UHJvdG90eXBlICE9PSBXcmFwcGVyLnByb3RvdHlwZVxuICApIHNldFByb3RvdHlwZU9mKCR0aGlzLCBOZXdUYXJnZXRQcm90b3R5cGUpO1xuICByZXR1cm4gJHRoaXM7XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIE1BVENIID0gd2VsbEtub3duU3ltYm9sKCdtYXRjaCcpO1xuXG4vLyBgSXNSZWdFeHBgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtaXNyZWdleHBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBpc1JlZ0V4cDtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiAoKGlzUmVnRXhwID0gaXRbTUFUQ0hdKSAhPT0gdW5kZWZpbmVkID8gISFpc1JlZ0V4cCA6IGNsYXNzb2YoaXQpID09ICdSZWdFeHAnKTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHRyaW0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0nKS50cmltO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciAkcGFyc2VGbG9hdCA9IGdsb2JhbC5wYXJzZUZsb2F0O1xudmFyIEZPUkNFRCA9IDEgLyAkcGFyc2VGbG9hdCh3aGl0ZXNwYWNlcyArICctMCcpICE9PSAtSW5maW5pdHk7XG5cbi8vIGBwYXJzZUZsb2F0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXBhcnNlZmxvYXQtc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IEZPUkNFRCA/IGZ1bmN0aW9uIHBhcnNlRmxvYXQoc3RyaW5nKSB7XG4gIHZhciB0cmltbWVkU3RyaW5nID0gdHJpbShTdHJpbmcoc3RyaW5nKSk7XG4gIHZhciByZXN1bHQgPSAkcGFyc2VGbG9hdCh0cmltbWVkU3RyaW5nKTtcbiAgcmV0dXJuIHJlc3VsdCA9PT0gMCAmJiB0cmltbWVkU3RyaW5nLmNoYXJBdCgwKSA9PSAnLScgPyAtMCA6IHJlc3VsdDtcbn0gOiAkcGFyc2VGbG9hdDtcbiIsInZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBuYXRpdmVHZXRPd25Qcm9wZXJ0eU5hbWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzJykuZjtcblxudmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG4gID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xuXG52YXIgZ2V0V2luZG93TmFtZXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gbmF0aXZlR2V0T3duUHJvcGVydHlOYW1lcyhpdCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHJldHVybiB3aW5kb3dOYW1lcyAmJiB0b1N0cmluZy5jYWxsKGl0KSA9PSAnW29iamVjdCBXaW5kb3ddJ1xuICAgID8gZ2V0V2luZG93TmFtZXMoaXQpXG4gICAgOiBuYXRpdmVHZXRPd25Qcm9wZXJ0eU5hbWVzKHRvSW5kZXhlZE9iamVjdChpdCkpO1xufTtcbiIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9jbGFzc29mLXJhdycpO1xudmFyIHJlZ2V4cEV4ZWMgPSByZXF1aXJlKCcuL3JlZ2V4cC1leGVjJyk7XG5cbi8vIGBSZWdFeHBFeGVjYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlZ2V4cGV4ZWNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFIsIFMpIHtcbiAgdmFyIGV4ZWMgPSBSLmV4ZWM7XG4gIGlmICh0eXBlb2YgZXhlYyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciByZXN1bHQgPSBleGVjLmNhbGwoUiwgUyk7XG4gICAgaWYgKHR5cGVvZiByZXN1bHQgIT09ICdvYmplY3QnKSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoJ1JlZ0V4cCBleGVjIG1ldGhvZCByZXR1cm5lZCBzb21ldGhpbmcgb3RoZXIgdGhhbiBhbiBPYmplY3Qgb3IgbnVsbCcpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgaWYgKGNsYXNzb2YoUikgIT09ICdSZWdFeHAnKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdSZWdFeHAjZXhlYyBjYWxsZWQgb24gaW5jb21wYXRpYmxlIHJlY2VpdmVyJyk7XG4gIH1cblxuICByZXR1cm4gcmVnZXhwRXhlYy5jYWxsKFIsIFMpO1xufTtcblxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHJlZ2V4cEZsYWdzID0gcmVxdWlyZSgnLi9yZWdleHAtZmxhZ3MnKTtcbnZhciBzdGlja3lIZWxwZXJzID0gcmVxdWlyZSgnLi9yZWdleHAtc3RpY2t5LWhlbHBlcnMnKTtcblxudmFyIG5hdGl2ZUV4ZWMgPSBSZWdFeHAucHJvdG90eXBlLmV4ZWM7XG4vLyBUaGlzIGFsd2F5cyByZWZlcnMgdG8gdGhlIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbiwgYmVjYXVzZSB0aGVcbi8vIFN0cmluZyNyZXBsYWNlIHBvbHlmaWxsIHVzZXMgLi9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljLmpzLFxuLy8gd2hpY2ggbG9hZHMgdGhpcyBmaWxlIGJlZm9yZSBwYXRjaGluZyB0aGUgbWV0aG9kLlxudmFyIG5hdGl2ZVJlcGxhY2UgPSBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2U7XG5cbnZhciBwYXRjaGVkRXhlYyA9IG5hdGl2ZUV4ZWM7XG5cbnZhciBVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgcmUxID0gL2EvO1xuICB2YXIgcmUyID0gL2IqL2c7XG4gIG5hdGl2ZUV4ZWMuY2FsbChyZTEsICdhJyk7XG4gIG5hdGl2ZUV4ZWMuY2FsbChyZTIsICdhJyk7XG4gIHJldHVybiByZTEubGFzdEluZGV4ICE9PSAwIHx8IHJlMi5sYXN0SW5kZXggIT09IDA7XG59KSgpO1xuXG52YXIgVU5TVVBQT1JURURfWSA9IHN0aWNreUhlbHBlcnMuVU5TVVBQT1JURURfWSB8fCBzdGlja3lIZWxwZXJzLkJST0tFTl9DQVJFVDtcblxuLy8gbm9ucGFydGljaXBhdGluZyBjYXB0dXJpbmcgZ3JvdXAsIGNvcGllZCBmcm9tIGVzNS1zaGltJ3MgU3RyaW5nI3NwbGl0IHBhdGNoLlxudmFyIE5QQ0dfSU5DTFVERUQgPSAvKCk/Py8uZXhlYygnJylbMV0gIT09IHVuZGVmaW5lZDtcblxudmFyIFBBVENIID0gVVBEQVRFU19MQVNUX0lOREVYX1dST05HIHx8IE5QQ0dfSU5DTFVERUQgfHwgVU5TVVBQT1JURURfWTtcblxuaWYgKFBBVENIKSB7XG4gIHBhdGNoZWRFeGVjID0gZnVuY3Rpb24gZXhlYyhzdHIpIHtcbiAgICB2YXIgcmUgPSB0aGlzO1xuICAgIHZhciBsYXN0SW5kZXgsIHJlQ29weSwgbWF0Y2gsIGk7XG4gICAgdmFyIHN0aWNreSA9IFVOU1VQUE9SVEVEX1kgJiYgcmUuc3RpY2t5O1xuICAgIHZhciBmbGFncyA9IHJlZ2V4cEZsYWdzLmNhbGwocmUpO1xuICAgIHZhciBzb3VyY2UgPSByZS5zb3VyY2U7XG4gICAgdmFyIGNoYXJzQWRkZWQgPSAwO1xuICAgIHZhciBzdHJDb3B5ID0gc3RyO1xuXG4gICAgaWYgKHN0aWNreSkge1xuICAgICAgZmxhZ3MgPSBmbGFncy5yZXBsYWNlKCd5JywgJycpO1xuICAgICAgaWYgKGZsYWdzLmluZGV4T2YoJ2cnKSA9PT0gLTEpIHtcbiAgICAgICAgZmxhZ3MgKz0gJ2cnO1xuICAgICAgfVxuXG4gICAgICBzdHJDb3B5ID0gU3RyaW5nKHN0cikuc2xpY2UocmUubGFzdEluZGV4KTtcbiAgICAgIC8vIFN1cHBvcnQgYW5jaG9yZWQgc3RpY2t5IGJlaGF2aW9yLlxuICAgICAgaWYgKHJlLmxhc3RJbmRleCA+IDAgJiYgKCFyZS5tdWx0aWxpbmUgfHwgcmUubXVsdGlsaW5lICYmIHN0cltyZS5sYXN0SW5kZXggLSAxXSAhPT0gJ1xcbicpKSB7XG4gICAgICAgIHNvdXJjZSA9ICcoPzogJyArIHNvdXJjZSArICcpJztcbiAgICAgICAgc3RyQ29weSA9ICcgJyArIHN0ckNvcHk7XG4gICAgICAgIGNoYXJzQWRkZWQrKztcbiAgICAgIH1cbiAgICAgIC8vIF4oPyArIHJ4ICsgKSBpcyBuZWVkZWQsIGluIGNvbWJpbmF0aW9uIHdpdGggc29tZSBzdHIgc2xpY2luZywgdG9cbiAgICAgIC8vIHNpbXVsYXRlIHRoZSAneScgZmxhZy5cbiAgICAgIHJlQ29weSA9IG5ldyBSZWdFeHAoJ14oPzonICsgc291cmNlICsgJyknLCBmbGFncyk7XG4gICAgfVxuXG4gICAgaWYgKE5QQ0dfSU5DTFVERUQpIHtcbiAgICAgIHJlQ29weSA9IG5ldyBSZWdFeHAoJ14nICsgc291cmNlICsgJyQoPyFcXFxccyknLCBmbGFncyk7XG4gICAgfVxuICAgIGlmIChVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcpIGxhc3RJbmRleCA9IHJlLmxhc3RJbmRleDtcblxuICAgIG1hdGNoID0gbmF0aXZlRXhlYy5jYWxsKHN0aWNreSA/IHJlQ29weSA6IHJlLCBzdHJDb3B5KTtcblxuICAgIGlmIChzdGlja3kpIHtcbiAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICBtYXRjaC5pbnB1dCA9IG1hdGNoLmlucHV0LnNsaWNlKGNoYXJzQWRkZWQpO1xuICAgICAgICBtYXRjaFswXSA9IG1hdGNoWzBdLnNsaWNlKGNoYXJzQWRkZWQpO1xuICAgICAgICBtYXRjaC5pbmRleCA9IHJlLmxhc3RJbmRleDtcbiAgICAgICAgcmUubGFzdEluZGV4ICs9IG1hdGNoWzBdLmxlbmd0aDtcbiAgICAgIH0gZWxzZSByZS5sYXN0SW5kZXggPSAwO1xuICAgIH0gZWxzZSBpZiAoVVBEQVRFU19MQVNUX0lOREVYX1dST05HICYmIG1hdGNoKSB7XG4gICAgICByZS5sYXN0SW5kZXggPSByZS5nbG9iYWwgPyBtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aCA6IGxhc3RJbmRleDtcbiAgICB9XG4gICAgaWYgKE5QQ0dfSU5DTFVERUQgJiYgbWF0Y2ggJiYgbWF0Y2gubGVuZ3RoID4gMSkge1xuICAgICAgLy8gRml4IGJyb3dzZXJzIHdob3NlIGBleGVjYCBtZXRob2RzIGRvbid0IGNvbnNpc3RlbnRseSByZXR1cm4gYHVuZGVmaW5lZGBcbiAgICAgIC8vIGZvciBOUENHLCBsaWtlIElFOC4gTk9URTogVGhpcyBkb2Vzbicgd29yayBmb3IgLyguPyk/L1xuICAgICAgbmF0aXZlUmVwbGFjZS5jYWxsKG1hdGNoWzBdLCByZUNvcHksIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yIChpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGggLSAyOyBpKyspIHtcbiAgICAgICAgICBpZiAoYXJndW1lbnRzW2ldID09PSB1bmRlZmluZWQpIG1hdGNoW2ldID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2g7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcGF0Y2hlZEV4ZWM7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vZmFpbHMnKTtcblxuLy8gYmFiZWwtbWluaWZ5IHRyYW5zcGlsZXMgUmVnRXhwKCdhJywgJ3knKSAtPiAvYS95IGFuZCBpdCBjYXVzZXMgU3ludGF4RXJyb3IsXG4vLyBzbyB3ZSB1c2UgYW4gaW50ZXJtZWRpYXRlIGZ1bmN0aW9uLlxuZnVuY3Rpb24gUkUocywgZikge1xuICByZXR1cm4gUmVnRXhwKHMsIGYpO1xufVxuXG5leHBvcnRzLlVOU1VQUE9SVEVEX1kgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGJhYmVsLW1pbmlmeSB0cmFuc3BpbGVzIFJlZ0V4cCgnYScsICd5JykgLT4gL2EveSBhbmQgaXQgY2F1c2VzIFN5bnRheEVycm9yXG4gIHZhciByZSA9IFJFKCdhJywgJ3knKTtcbiAgcmUubGFzdEluZGV4ID0gMjtcbiAgcmV0dXJuIHJlLmV4ZWMoJ2FiY2QnKSAhPSBudWxsO1xufSk7XG5cbmV4cG9ydHMuQlJPS0VOX0NBUkVUID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD03NzM2ODdcbiAgdmFyIHJlID0gUkUoJ15yJywgJ2d5Jyk7XG4gIHJlLmxhc3RJbmRleCA9IDI7XG4gIHJldHVybiByZS5leGVjKCdzdHInKSAhPSBudWxsO1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ09OU1RSVUNUT1JfTkFNRSkge1xuICB2YXIgQ29uc3RydWN0b3IgPSBnZXRCdWlsdEluKENPTlNUUlVDVE9SX05BTUUpO1xuICB2YXIgZGVmaW5lUHJvcGVydHkgPSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mO1xuXG4gIGlmIChERVNDUklQVE9SUyAmJiBDb25zdHJ1Y3RvciAmJiAhQ29uc3RydWN0b3JbU1BFQ0lFU10pIHtcbiAgICBkZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgU1BFQ0lFUywge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9XG4gICAgfSk7XG4gIH1cbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtZnVuY3Rpb24nKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcblxuLy8gYFNwZWNpZXNDb25zdHJ1Y3RvcmAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zcGVjaWVzY29uc3RydWN0b3Jcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIGRlZmF1bHRDb25zdHJ1Y3Rvcikge1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yO1xuICB2YXIgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBkZWZhdWx0Q29uc3RydWN0b3IgOiBhRnVuY3Rpb24oUyk7XG59O1xuIiwidmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG5leHBvcnRzLmYgPSB3ZWxsS25vd25TeW1ib2w7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkZmlsdGVyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZpbHRlcjtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG52YXIgYXJyYXlNZXRob2RVc2VzVG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLXVzZXMtdG8tbGVuZ3RoJyk7XG5cbnZhciBIQVNfU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnZmlsdGVyJyk7XG4vLyBFZGdlIDE0LSBpc3N1ZVxudmFyIFVTRVNfVE9fTEVOR1RIID0gYXJyYXlNZXRob2RVc2VzVG9MZW5ndGgoJ2ZpbHRlcicpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZpbHRlcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmlsdGVyXG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIUhBU19TUEVDSUVTX1NVUFBPUlQgfHwgIVVTRVNfVE9fTEVOR1RIIH0sIHtcbiAgZmlsdGVyOiBmdW5jdGlvbiBmaWx0ZXIoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgICByZXR1cm4gJGZpbHRlcih0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xuXG4vLyBgQXJyYXkuaXNBcnJheWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5pc2FycmF5XG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBzdGF0OiB0cnVlIH0sIHtcbiAgaXNBcnJheTogaXNBcnJheVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZGQtdG8tdW5zY29wYWJsZXMnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzJyk7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xudmFyIGRlZmluZUl0ZXJhdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1pdGVyYXRvcicpO1xuXG52YXIgQVJSQVlfSVRFUkFUT1IgPSAnQXJyYXkgSXRlcmF0b3InO1xudmFyIHNldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLnNldDtcbnZhciBnZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXR0ZXJGb3IoQVJSQVlfSVRFUkFUT1IpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmVudHJpZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmVudHJpZXNcbi8vIGBBcnJheS5wcm90b3R5cGUua2V5c2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUua2V5c1xuLy8gYEFycmF5LnByb3RvdHlwZS52YWx1ZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnZhbHVlc1xuLy8gYEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEBpdGVyYXRvclxuLy8gYENyZWF0ZUFycmF5SXRlcmF0b3JgIGludGVybmFsIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtY3JlYXRlYXJyYXlpdGVyYXRvclxubW9kdWxlLmV4cG9ydHMgPSBkZWZpbmVJdGVyYXRvcihBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gIHNldEludGVybmFsU3RhdGUodGhpcywge1xuICAgIHR5cGU6IEFSUkFZX0lURVJBVE9SLFxuICAgIHRhcmdldDogdG9JbmRleGVkT2JqZWN0KGl0ZXJhdGVkKSwgLy8gdGFyZ2V0XG4gICAgaW5kZXg6IDAsICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gICAga2luZDoga2luZCAgICAgICAgICAgICAgICAgICAgICAgICAvLyBraW5kXG4gIH0pO1xuLy8gYCVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLSVhcnJheWl0ZXJhdG9ycHJvdG90eXBlJS5uZXh0XG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBzdGF0ZSA9IGdldEludGVybmFsU3RhdGUodGhpcyk7XG4gIHZhciB0YXJnZXQgPSBzdGF0ZS50YXJnZXQ7XG4gIHZhciBraW5kID0gc3RhdGUua2luZDtcbiAgdmFyIGluZGV4ID0gc3RhdGUuaW5kZXgrKztcbiAgaWYgKCF0YXJnZXQgfHwgaW5kZXggPj0gdGFyZ2V0Lmxlbmd0aCkge1xuICAgIHN0YXRlLnRhcmdldCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cbiAgaWYgKGtpbmQgPT0gJ2tleXMnKSByZXR1cm4geyB2YWx1ZTogaW5kZXgsIGRvbmU6IGZhbHNlIH07XG4gIGlmIChraW5kID09ICd2YWx1ZXMnKSByZXR1cm4geyB2YWx1ZTogdGFyZ2V0W2luZGV4XSwgZG9uZTogZmFsc2UgfTtcbiAgcmV0dXJuIHsgdmFsdWU6IFtpbmRleCwgdGFyZ2V0W2luZGV4XV0sIGRvbmU6IGZhbHNlIH07XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJVxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtY3JlYXRldW5tYXBwZWRhcmd1bWVudHNvYmplY3Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWNyZWF0ZW1hcHBlZGFyZ3VtZW50c29iamVjdFxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLUBAdW5zY29wYWJsZXNcbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIGFycmF5TWV0aG9kSXNTdHJpY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdCcpO1xuXG52YXIgbmF0aXZlSm9pbiA9IFtdLmpvaW47XG5cbnZhciBFUzNfU1RSSU5HUyA9IEluZGV4ZWRPYmplY3QgIT0gT2JqZWN0O1xudmFyIFNUUklDVF9NRVRIT0QgPSBhcnJheU1ldGhvZElzU3RyaWN0KCdqb2luJywgJywnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5qb2luYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5qb2luXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBFUzNfU1RSSU5HUyB8fCAhU1RSSUNUX01FVEhPRCB9LCB7XG4gIGpvaW46IGZ1bmN0aW9uIGpvaW4oc2VwYXJhdG9yKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUpvaW4uY2FsbCh0b0luZGV4ZWRPYmplY3QodGhpcyksIHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkID8gJywnIDogc2VwYXJhdG9yKTtcbiAgfVxufSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBwYXJzZUZsb2F0SW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbnVtYmVyLXBhcnNlLWZsb2F0Jyk7XG5cbi8vIGBwYXJzZUZsb2F0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXBhcnNlZmxvYXQtc3RyaW5nXG4kKHsgZ2xvYmFsOiB0cnVlLCBmb3JjZWQ6IHBhcnNlRmxvYXQgIT0gcGFyc2VGbG9hdEltcGxlbWVudGF0aW9uIH0sIHtcbiAgcGFyc2VGbG9hdDogcGFyc2VGbG9hdEltcGxlbWVudGF0aW9uXG59KTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc0ZvcmNlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1mb3JjZWQnKTtcbnZhciBpbmhlcml0SWZSZXF1aXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmhlcml0LWlmLXJlcXVpcmVkJyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpLmY7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcycpLmY7XG52YXIgaXNSZWdFeHAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcmVnZXhwJyk7XG52YXIgZ2V0RmxhZ3MgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWZsYWdzJyk7XG52YXIgc3RpY2t5SGVscGVycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtc3RpY2t5LWhlbHBlcnMnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgc2V0SW50ZXJuYWxTdGF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpLnNldDtcbnZhciBzZXRTcGVjaWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1zcGVjaWVzJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBNQVRDSCA9IHdlbGxLbm93blN5bWJvbCgnbWF0Y2gnKTtcbnZhciBOYXRpdmVSZWdFeHAgPSBnbG9iYWwuUmVnRXhwO1xudmFyIFJlZ0V4cFByb3RvdHlwZSA9IE5hdGl2ZVJlZ0V4cC5wcm90b3R5cGU7XG52YXIgcmUxID0gL2EvZztcbnZhciByZTIgPSAvYS9nO1xuXG4vLyBcIm5ld1wiIHNob3VsZCBjcmVhdGUgYSBuZXcgb2JqZWN0LCBvbGQgd2Via2l0IGJ1Z1xudmFyIENPUlJFQ1RfTkVXID0gbmV3IE5hdGl2ZVJlZ0V4cChyZTEpICE9PSByZTE7XG5cbnZhciBVTlNVUFBPUlRFRF9ZID0gc3RpY2t5SGVscGVycy5VTlNVUFBPUlRFRF9ZO1xuXG52YXIgRk9SQ0VEID0gREVTQ1JJUFRPUlMgJiYgaXNGb3JjZWQoJ1JlZ0V4cCcsICghQ09SUkVDVF9ORVcgfHwgVU5TVVBQT1JURURfWSB8fCBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJlMltNQVRDSF0gPSBmYWxzZTtcbiAgLy8gUmVnRXhwIGNvbnN0cnVjdG9yIGNhbiBhbHRlciBmbGFncyBhbmQgSXNSZWdFeHAgd29ya3MgY29ycmVjdCB3aXRoIEBAbWF0Y2hcbiAgcmV0dXJuIE5hdGl2ZVJlZ0V4cChyZTEpICE9IHJlMSB8fCBOYXRpdmVSZWdFeHAocmUyKSA9PSByZTIgfHwgTmF0aXZlUmVnRXhwKHJlMSwgJ2knKSAhPSAnL2EvaSc7XG59KSkpO1xuXG4vLyBgUmVnRXhwYCBjb25zdHJ1Y3RvclxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVnZXhwLWNvbnN0cnVjdG9yXG5pZiAoRk9SQ0VEKSB7XG4gIHZhciBSZWdFeHBXcmFwcGVyID0gZnVuY3Rpb24gUmVnRXhwKHBhdHRlcm4sIGZsYWdzKSB7XG4gICAgdmFyIHRoaXNJc1JlZ0V4cCA9IHRoaXMgaW5zdGFuY2VvZiBSZWdFeHBXcmFwcGVyO1xuICAgIHZhciBwYXR0ZXJuSXNSZWdFeHAgPSBpc1JlZ0V4cChwYXR0ZXJuKTtcbiAgICB2YXIgZmxhZ3NBcmVVbmRlZmluZWQgPSBmbGFncyA9PT0gdW5kZWZpbmVkO1xuICAgIHZhciBzdGlja3k7XG5cbiAgICBpZiAoIXRoaXNJc1JlZ0V4cCAmJiBwYXR0ZXJuSXNSZWdFeHAgJiYgcGF0dGVybi5jb25zdHJ1Y3RvciA9PT0gUmVnRXhwV3JhcHBlciAmJiBmbGFnc0FyZVVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHBhdHRlcm47XG4gICAgfVxuXG4gICAgaWYgKENPUlJFQ1RfTkVXKSB7XG4gICAgICBpZiAocGF0dGVybklzUmVnRXhwICYmICFmbGFnc0FyZVVuZGVmaW5lZCkgcGF0dGVybiA9IHBhdHRlcm4uc291cmNlO1xuICAgIH0gZWxzZSBpZiAocGF0dGVybiBpbnN0YW5jZW9mIFJlZ0V4cFdyYXBwZXIpIHtcbiAgICAgIGlmIChmbGFnc0FyZVVuZGVmaW5lZCkgZmxhZ3MgPSBnZXRGbGFncy5jYWxsKHBhdHRlcm4pO1xuICAgICAgcGF0dGVybiA9IHBhdHRlcm4uc291cmNlO1xuICAgIH1cblxuICAgIGlmIChVTlNVUFBPUlRFRF9ZKSB7XG4gICAgICBzdGlja3kgPSAhIWZsYWdzICYmIGZsYWdzLmluZGV4T2YoJ3knKSA+IC0xO1xuICAgICAgaWYgKHN0aWNreSkgZmxhZ3MgPSBmbGFncy5yZXBsYWNlKC95L2csICcnKTtcbiAgICB9XG5cbiAgICB2YXIgcmVzdWx0ID0gaW5oZXJpdElmUmVxdWlyZWQoXG4gICAgICBDT1JSRUNUX05FVyA/IG5ldyBOYXRpdmVSZWdFeHAocGF0dGVybiwgZmxhZ3MpIDogTmF0aXZlUmVnRXhwKHBhdHRlcm4sIGZsYWdzKSxcbiAgICAgIHRoaXNJc1JlZ0V4cCA/IHRoaXMgOiBSZWdFeHBQcm90b3R5cGUsXG4gICAgICBSZWdFeHBXcmFwcGVyXG4gICAgKTtcblxuICAgIGlmIChVTlNVUFBPUlRFRF9ZICYmIHN0aWNreSkgc2V0SW50ZXJuYWxTdGF0ZShyZXN1bHQsIHsgc3RpY2t5OiBzdGlja3kgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICB2YXIgcHJveHkgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAga2V5IGluIFJlZ0V4cFdyYXBwZXIgfHwgZGVmaW5lUHJvcGVydHkoUmVnRXhwV3JhcHBlciwga2V5LCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIE5hdGl2ZVJlZ0V4cFtrZXldOyB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiAoaXQpIHsgTmF0aXZlUmVnRXhwW2tleV0gPSBpdDsgfVxuICAgIH0pO1xuICB9O1xuICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXMoTmF0aXZlUmVnRXhwKTtcbiAgdmFyIGluZGV4ID0gMDtcbiAgd2hpbGUgKGtleXMubGVuZ3RoID4gaW5kZXgpIHByb3h5KGtleXNbaW5kZXgrK10pO1xuICBSZWdFeHBQcm90b3R5cGUuY29uc3RydWN0b3IgPSBSZWdFeHBXcmFwcGVyO1xuICBSZWdFeHBXcmFwcGVyLnByb3RvdHlwZSA9IFJlZ0V4cFByb3RvdHlwZTtcbiAgcmVkZWZpbmUoZ2xvYmFsLCAnUmVnRXhwJywgUmVnRXhwV3JhcHBlcik7XG59XG5cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWdldC1yZWdleHAtQEBzcGVjaWVzXG5zZXRTcGVjaWVzKCdSZWdFeHAnKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGV4ZWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMnKTtcblxuJCh7IHRhcmdldDogJ1JlZ0V4cCcsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IC8uLy5leGVjICE9PSBleGVjIH0sIHtcbiAgZXhlYzogZXhlY1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZml4LXJlZ2V4cC13ZWxsLWtub3duLXN5bWJvbC1sb2dpYycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgYWR2YW5jZVN0cmluZ0luZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkdmFuY2Utc3RyaW5nLWluZGV4Jyk7XG52YXIgcmVnRXhwRXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYy1hYnN0cmFjdCcpO1xuXG4vLyBAQG1hdGNoIGxvZ2ljXG5maXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYygnbWF0Y2gnLCAxLCBmdW5jdGlvbiAoTUFUQ0gsIG5hdGl2ZU1hdGNoLCBtYXliZUNhbGxOYXRpdmUpIHtcbiAgcmV0dXJuIFtcbiAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS5tYXRjaGAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5tYXRjaFxuICAgIGZ1bmN0aW9uIG1hdGNoKHJlZ2V4cCkge1xuICAgICAgdmFyIE8gPSByZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpO1xuICAgICAgdmFyIG1hdGNoZXIgPSByZWdleHAgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogcmVnZXhwW01BVENIXTtcbiAgICAgIHJldHVybiBtYXRjaGVyICE9PSB1bmRlZmluZWQgPyBtYXRjaGVyLmNhbGwocmVnZXhwLCBPKSA6IG5ldyBSZWdFeHAocmVnZXhwKVtNQVRDSF0oU3RyaW5nKE8pKTtcbiAgICB9LFxuICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAbWF0Y2hdYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLUBAbWF0Y2hcbiAgICBmdW5jdGlvbiAocmVnZXhwKSB7XG4gICAgICB2YXIgcmVzID0gbWF5YmVDYWxsTmF0aXZlKG5hdGl2ZU1hdGNoLCByZWdleHAsIHRoaXMpO1xuICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuXG4gICAgICB2YXIgcnggPSBhbk9iamVjdChyZWdleHApO1xuICAgICAgdmFyIFMgPSBTdHJpbmcodGhpcyk7XG5cbiAgICAgIGlmICghcnguZ2xvYmFsKSByZXR1cm4gcmVnRXhwRXhlYyhyeCwgUyk7XG5cbiAgICAgIHZhciBmdWxsVW5pY29kZSA9IHJ4LnVuaWNvZGU7XG4gICAgICByeC5sYXN0SW5kZXggPSAwO1xuICAgICAgdmFyIEEgPSBbXTtcbiAgICAgIHZhciBuID0gMDtcbiAgICAgIHZhciByZXN1bHQ7XG4gICAgICB3aGlsZSAoKHJlc3VsdCA9IHJlZ0V4cEV4ZWMocngsIFMpKSAhPT0gbnVsbCkge1xuICAgICAgICB2YXIgbWF0Y2hTdHIgPSBTdHJpbmcocmVzdWx0WzBdKTtcbiAgICAgICAgQVtuXSA9IG1hdGNoU3RyO1xuICAgICAgICBpZiAobWF0Y2hTdHIgPT09ICcnKSByeC5sYXN0SW5kZXggPSBhZHZhbmNlU3RyaW5nSW5kZXgoUywgdG9MZW5ndGgocngubGFzdEluZGV4KSwgZnVsbFVuaWNvZGUpO1xuICAgICAgICBuKys7XG4gICAgICB9XG4gICAgICByZXR1cm4gbiA9PT0gMCA/IG51bGwgOiBBO1xuICAgIH1cbiAgXTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlcicpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgYWR2YW5jZVN0cmluZ0luZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkdmFuY2Utc3RyaW5nLWluZGV4Jyk7XG52YXIgcmVnRXhwRXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYy1hYnN0cmFjdCcpO1xuXG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xudmFyIFNVQlNUSVRVVElPTl9TWU1CT0xTID0gL1xcJChbJCYnYF18XFxkXFxkP3w8W14+XSo+KS9nO1xudmFyIFNVQlNUSVRVVElPTl9TWU1CT0xTX05PX05BTUVEID0gL1xcJChbJCYnYF18XFxkXFxkPykvZztcblxudmFyIG1heWJlVG9TdHJpbmcgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyBpdCA6IFN0cmluZyhpdCk7XG59O1xuXG4vLyBAQHJlcGxhY2UgbG9naWNcbmZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljKCdyZXBsYWNlJywgMiwgZnVuY3Rpb24gKFJFUExBQ0UsIG5hdGl2ZVJlcGxhY2UsIG1heWJlQ2FsbE5hdGl2ZSwgcmVhc29uKSB7XG4gIHZhciBSRUdFWFBfUkVQTEFDRV9TVUJTVElUVVRFU19VTkRFRklORURfQ0FQVFVSRSA9IHJlYXNvbi5SRUdFWFBfUkVQTEFDRV9TVUJTVElUVVRFU19VTkRFRklORURfQ0FQVFVSRTtcbiAgdmFyIFJFUExBQ0VfS0VFUFNfJDAgPSByZWFzb24uUkVQTEFDRV9LRUVQU18kMDtcbiAgdmFyIFVOU0FGRV9TVUJTVElUVVRFID0gUkVHRVhQX1JFUExBQ0VfU1VCU1RJVFVURVNfVU5ERUZJTkVEX0NBUFRVUkUgPyAnJCcgOiAnJDAnO1xuXG4gIHJldHVybiBbXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUucmVwbGFjZWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlXG4gICAgZnVuY3Rpb24gcmVwbGFjZShzZWFyY2hWYWx1ZSwgcmVwbGFjZVZhbHVlKSB7XG4gICAgICB2YXIgTyA9IHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcyk7XG4gICAgICB2YXIgcmVwbGFjZXIgPSBzZWFyY2hWYWx1ZSA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBzZWFyY2hWYWx1ZVtSRVBMQUNFXTtcbiAgICAgIHJldHVybiByZXBsYWNlciAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gcmVwbGFjZXIuY2FsbChzZWFyY2hWYWx1ZSwgTywgcmVwbGFjZVZhbHVlKVxuICAgICAgICA6IG5hdGl2ZVJlcGxhY2UuY2FsbChTdHJpbmcoTyksIHNlYXJjaFZhbHVlLCByZXBsYWNlVmFsdWUpO1xuICAgIH0sXG4gICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEByZXBsYWNlXWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQHJlcGxhY2VcbiAgICBmdW5jdGlvbiAocmVnZXhwLCByZXBsYWNlVmFsdWUpIHtcbiAgICAgIGlmIChcbiAgICAgICAgKCFSRUdFWFBfUkVQTEFDRV9TVUJTVElUVVRFU19VTkRFRklORURfQ0FQVFVSRSAmJiBSRVBMQUNFX0tFRVBTXyQwKSB8fFxuICAgICAgICAodHlwZW9mIHJlcGxhY2VWYWx1ZSA9PT0gJ3N0cmluZycgJiYgcmVwbGFjZVZhbHVlLmluZGV4T2YoVU5TQUZFX1NVQlNUSVRVVEUpID09PSAtMSlcbiAgICAgICkge1xuICAgICAgICB2YXIgcmVzID0gbWF5YmVDYWxsTmF0aXZlKG5hdGl2ZVJlcGxhY2UsIHJlZ2V4cCwgdGhpcywgcmVwbGFjZVZhbHVlKTtcbiAgICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgcnggPSBhbk9iamVjdChyZWdleHApO1xuICAgICAgdmFyIFMgPSBTdHJpbmcodGhpcyk7XG5cbiAgICAgIHZhciBmdW5jdGlvbmFsUmVwbGFjZSA9IHR5cGVvZiByZXBsYWNlVmFsdWUgPT09ICdmdW5jdGlvbic7XG4gICAgICBpZiAoIWZ1bmN0aW9uYWxSZXBsYWNlKSByZXBsYWNlVmFsdWUgPSBTdHJpbmcocmVwbGFjZVZhbHVlKTtcblxuICAgICAgdmFyIGdsb2JhbCA9IHJ4Lmdsb2JhbDtcbiAgICAgIGlmIChnbG9iYWwpIHtcbiAgICAgICAgdmFyIGZ1bGxVbmljb2RlID0gcngudW5pY29kZTtcbiAgICAgICAgcngubGFzdEluZGV4ID0gMDtcbiAgICAgIH1cbiAgICAgIHZhciByZXN1bHRzID0gW107XG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVnRXhwRXhlYyhyeCwgUyk7XG4gICAgICAgIGlmIChyZXN1bHQgPT09IG51bGwpIGJyZWFrO1xuXG4gICAgICAgIHJlc3VsdHMucHVzaChyZXN1bHQpO1xuICAgICAgICBpZiAoIWdsb2JhbCkgYnJlYWs7XG5cbiAgICAgICAgdmFyIG1hdGNoU3RyID0gU3RyaW5nKHJlc3VsdFswXSk7XG4gICAgICAgIGlmIChtYXRjaFN0ciA9PT0gJycpIHJ4Lmxhc3RJbmRleCA9IGFkdmFuY2VTdHJpbmdJbmRleChTLCB0b0xlbmd0aChyeC5sYXN0SW5kZXgpLCBmdWxsVW5pY29kZSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBhY2N1bXVsYXRlZFJlc3VsdCA9ICcnO1xuICAgICAgdmFyIG5leHRTb3VyY2VQb3NpdGlvbiA9IDA7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0c1tpXTtcblxuICAgICAgICB2YXIgbWF0Y2hlZCA9IFN0cmluZyhyZXN1bHRbMF0pO1xuICAgICAgICB2YXIgcG9zaXRpb24gPSBtYXgobWluKHRvSW50ZWdlcihyZXN1bHQuaW5kZXgpLCBTLmxlbmd0aCksIDApO1xuICAgICAgICB2YXIgY2FwdHVyZXMgPSBbXTtcbiAgICAgICAgLy8gTk9URTogVGhpcyBpcyBlcXVpdmFsZW50IHRvXG4gICAgICAgIC8vICAgY2FwdHVyZXMgPSByZXN1bHQuc2xpY2UoMSkubWFwKG1heWJlVG9TdHJpbmcpXG4gICAgICAgIC8vIGJ1dCBmb3Igc29tZSByZWFzb24gYG5hdGl2ZVNsaWNlLmNhbGwocmVzdWx0LCAxLCByZXN1bHQubGVuZ3RoKWAgKGNhbGxlZCBpblxuICAgICAgICAvLyB0aGUgc2xpY2UgcG9seWZpbGwgd2hlbiBzbGljaW5nIG5hdGl2ZSBhcnJheXMpIFwiZG9lc24ndCB3b3JrXCIgaW4gc2FmYXJpIDkgYW5kXG4gICAgICAgIC8vIGNhdXNlcyBhIGNyYXNoIChodHRwczovL3Bhc3RlYmluLmNvbS9OMjFRemVRQSkgd2hlbiB0cnlpbmcgdG8gZGVidWcgaXQuXG4gICAgICAgIGZvciAodmFyIGogPSAxOyBqIDwgcmVzdWx0Lmxlbmd0aDsgaisrKSBjYXB0dXJlcy5wdXNoKG1heWJlVG9TdHJpbmcocmVzdWx0W2pdKSk7XG4gICAgICAgIHZhciBuYW1lZENhcHR1cmVzID0gcmVzdWx0Lmdyb3VwcztcbiAgICAgICAgaWYgKGZ1bmN0aW9uYWxSZXBsYWNlKSB7XG4gICAgICAgICAgdmFyIHJlcGxhY2VyQXJncyA9IFttYXRjaGVkXS5jb25jYXQoY2FwdHVyZXMsIHBvc2l0aW9uLCBTKTtcbiAgICAgICAgICBpZiAobmFtZWRDYXB0dXJlcyAhPT0gdW5kZWZpbmVkKSByZXBsYWNlckFyZ3MucHVzaChuYW1lZENhcHR1cmVzKTtcbiAgICAgICAgICB2YXIgcmVwbGFjZW1lbnQgPSBTdHJpbmcocmVwbGFjZVZhbHVlLmFwcGx5KHVuZGVmaW5lZCwgcmVwbGFjZXJBcmdzKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVwbGFjZW1lbnQgPSBnZXRTdWJzdGl0dXRpb24obWF0Y2hlZCwgUywgcG9zaXRpb24sIGNhcHR1cmVzLCBuYW1lZENhcHR1cmVzLCByZXBsYWNlVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwb3NpdGlvbiA+PSBuZXh0U291cmNlUG9zaXRpb24pIHtcbiAgICAgICAgICBhY2N1bXVsYXRlZFJlc3VsdCArPSBTLnNsaWNlKG5leHRTb3VyY2VQb3NpdGlvbiwgcG9zaXRpb24pICsgcmVwbGFjZW1lbnQ7XG4gICAgICAgICAgbmV4dFNvdXJjZVBvc2l0aW9uID0gcG9zaXRpb24gKyBtYXRjaGVkLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGFjY3VtdWxhdGVkUmVzdWx0ICsgUy5zbGljZShuZXh0U291cmNlUG9zaXRpb24pO1xuICAgIH1cbiAgXTtcblxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1nZXRzdWJzdGl0dXRpb25cbiAgZnVuY3Rpb24gZ2V0U3Vic3RpdHV0aW9uKG1hdGNoZWQsIHN0ciwgcG9zaXRpb24sIGNhcHR1cmVzLCBuYW1lZENhcHR1cmVzLCByZXBsYWNlbWVudCkge1xuICAgIHZhciB0YWlsUG9zID0gcG9zaXRpb24gKyBtYXRjaGVkLmxlbmd0aDtcbiAgICB2YXIgbSA9IGNhcHR1cmVzLmxlbmd0aDtcbiAgICB2YXIgc3ltYm9scyA9IFNVQlNUSVRVVElPTl9TWU1CT0xTX05PX05BTUVEO1xuICAgIGlmIChuYW1lZENhcHR1cmVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG5hbWVkQ2FwdHVyZXMgPSB0b09iamVjdChuYW1lZENhcHR1cmVzKTtcbiAgICAgIHN5bWJvbHMgPSBTVUJTVElUVVRJT05fU1lNQk9MUztcbiAgICB9XG4gICAgcmV0dXJuIG5hdGl2ZVJlcGxhY2UuY2FsbChyZXBsYWNlbWVudCwgc3ltYm9scywgZnVuY3Rpb24gKG1hdGNoLCBjaCkge1xuICAgICAgdmFyIGNhcHR1cmU7XG4gICAgICBzd2l0Y2ggKGNoLmNoYXJBdCgwKSkge1xuICAgICAgICBjYXNlICckJzogcmV0dXJuICckJztcbiAgICAgICAgY2FzZSAnJic6IHJldHVybiBtYXRjaGVkO1xuICAgICAgICBjYXNlICdgJzogcmV0dXJuIHN0ci5zbGljZSgwLCBwb3NpdGlvbik7XG4gICAgICAgIGNhc2UgXCInXCI6IHJldHVybiBzdHIuc2xpY2UodGFpbFBvcyk7XG4gICAgICAgIGNhc2UgJzwnOlxuICAgICAgICAgIGNhcHR1cmUgPSBuYW1lZENhcHR1cmVzW2NoLnNsaWNlKDEsIC0xKV07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6IC8vIFxcZFxcZD9cbiAgICAgICAgICB2YXIgbiA9ICtjaDtcbiAgICAgICAgICBpZiAobiA9PT0gMCkgcmV0dXJuIG1hdGNoO1xuICAgICAgICAgIGlmIChuID4gbSkge1xuICAgICAgICAgICAgdmFyIGYgPSBmbG9vcihuIC8gMTApO1xuICAgICAgICAgICAgaWYgKGYgPT09IDApIHJldHVybiBtYXRjaDtcbiAgICAgICAgICAgIGlmIChmIDw9IG0pIHJldHVybiBjYXB0dXJlc1tmIC0gMV0gPT09IHVuZGVmaW5lZCA/IGNoLmNoYXJBdCgxKSA6IGNhcHR1cmVzW2YgLSAxXSArIGNoLmNoYXJBdCgxKTtcbiAgICAgICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FwdHVyZSA9IGNhcHR1cmVzW24gLSAxXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjYXB0dXJlID09PSB1bmRlZmluZWQgPyAnJyA6IGNhcHR1cmU7XG4gICAgfSk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMnKTtcbnZhciBpc1JlZ0V4cCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1yZWdleHAnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG52YXIgYWR2YW5jZVN0cmluZ0luZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkdmFuY2Utc3RyaW5nLWluZGV4Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgY2FsbFJlZ0V4cEV4ZWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMtYWJzdHJhY3QnKTtcbnZhciByZWdleHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxudmFyIGFycmF5UHVzaCA9IFtdLnB1c2g7XG52YXIgbWluID0gTWF0aC5taW47XG52YXIgTUFYX1VJTlQzMiA9IDB4RkZGRkZGRkY7XG5cbi8vIGJhYmVsLW1pbmlmeSB0cmFuc3BpbGVzIFJlZ0V4cCgneCcsICd5JykgLT4gL3gveSBhbmQgaXQgY2F1c2VzIFN5bnRheEVycm9yXG52YXIgU1VQUE9SVFNfWSA9ICFmYWlscyhmdW5jdGlvbiAoKSB7IHJldHVybiAhUmVnRXhwKE1BWF9VSU5UMzIsICd5Jyk7IH0pO1xuXG4vLyBAQHNwbGl0IGxvZ2ljXG5maXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYygnc3BsaXQnLCAyLCBmdW5jdGlvbiAoU1BMSVQsIG5hdGl2ZVNwbGl0LCBtYXliZUNhbGxOYXRpdmUpIHtcbiAgdmFyIGludGVybmFsU3BsaXQ7XG4gIGlmIChcbiAgICAnYWJiYycuc3BsaXQoLyhiKSovKVsxXSA9PSAnYycgfHxcbiAgICAndGVzdCcuc3BsaXQoLyg/OikvLCAtMSkubGVuZ3RoICE9IDQgfHxcbiAgICAnYWInLnNwbGl0KC8oPzphYikqLykubGVuZ3RoICE9IDIgfHxcbiAgICAnLicuc3BsaXQoLyguPykoLj8pLykubGVuZ3RoICE9IDQgfHxcbiAgICAnLicuc3BsaXQoLygpKCkvKS5sZW5ndGggPiAxIHx8XG4gICAgJycuc3BsaXQoLy4/LykubGVuZ3RoXG4gICkge1xuICAgIC8vIGJhc2VkIG9uIGVzNS1zaGltIGltcGxlbWVudGF0aW9uLCBuZWVkIHRvIHJld29yayBpdFxuICAgIGludGVybmFsU3BsaXQgPSBmdW5jdGlvbiAoc2VwYXJhdG9yLCBsaW1pdCkge1xuICAgICAgdmFyIHN0cmluZyA9IFN0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpKTtcbiAgICAgIHZhciBsaW0gPSBsaW1pdCA9PT0gdW5kZWZpbmVkID8gTUFYX1VJTlQzMiA6IGxpbWl0ID4+PiAwO1xuICAgICAgaWYgKGxpbSA9PT0gMCkgcmV0dXJuIFtdO1xuICAgICAgaWYgKHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkKSByZXR1cm4gW3N0cmluZ107XG4gICAgICAvLyBJZiBgc2VwYXJhdG9yYCBpcyBub3QgYSByZWdleCwgdXNlIG5hdGl2ZSBzcGxpdFxuICAgICAgaWYgKCFpc1JlZ0V4cChzZXBhcmF0b3IpKSB7XG4gICAgICAgIHJldHVybiBuYXRpdmVTcGxpdC5jYWxsKHN0cmluZywgc2VwYXJhdG9yLCBsaW0pO1xuICAgICAgfVxuICAgICAgdmFyIG91dHB1dCA9IFtdO1xuICAgICAgdmFyIGZsYWdzID0gKHNlcGFyYXRvci5pZ25vcmVDYXNlID8gJ2knIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3IubXVsdGlsaW5lID8gJ20nIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3IudW5pY29kZSA/ICd1JyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAoc2VwYXJhdG9yLnN0aWNreSA/ICd5JyA6ICcnKTtcbiAgICAgIHZhciBsYXN0TGFzdEluZGV4ID0gMDtcbiAgICAgIC8vIE1ha2UgYGdsb2JhbGAgYW5kIGF2b2lkIGBsYXN0SW5kZXhgIGlzc3VlcyBieSB3b3JraW5nIHdpdGggYSBjb3B5XG4gICAgICB2YXIgc2VwYXJhdG9yQ29weSA9IG5ldyBSZWdFeHAoc2VwYXJhdG9yLnNvdXJjZSwgZmxhZ3MgKyAnZycpO1xuICAgICAgdmFyIG1hdGNoLCBsYXN0SW5kZXgsIGxhc3RMZW5ndGg7XG4gICAgICB3aGlsZSAobWF0Y2ggPSByZWdleHBFeGVjLmNhbGwoc2VwYXJhdG9yQ29weSwgc3RyaW5nKSkge1xuICAgICAgICBsYXN0SW5kZXggPSBzZXBhcmF0b3JDb3B5Lmxhc3RJbmRleDtcbiAgICAgICAgaWYgKGxhc3RJbmRleCA+IGxhc3RMYXN0SW5kZXgpIHtcbiAgICAgICAgICBvdXRwdXQucHVzaChzdHJpbmcuc2xpY2UobGFzdExhc3RJbmRleCwgbWF0Y2guaW5kZXgpKTtcbiAgICAgICAgICBpZiAobWF0Y2gubGVuZ3RoID4gMSAmJiBtYXRjaC5pbmRleCA8IHN0cmluZy5sZW5ndGgpIGFycmF5UHVzaC5hcHBseShvdXRwdXQsIG1hdGNoLnNsaWNlKDEpKTtcbiAgICAgICAgICBsYXN0TGVuZ3RoID0gbWF0Y2hbMF0ubGVuZ3RoO1xuICAgICAgICAgIGxhc3RMYXN0SW5kZXggPSBsYXN0SW5kZXg7XG4gICAgICAgICAgaWYgKG91dHB1dC5sZW5ndGggPj0gbGltKSBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VwYXJhdG9yQ29weS5sYXN0SW5kZXggPT09IG1hdGNoLmluZGV4KSBzZXBhcmF0b3JDb3B5Lmxhc3RJbmRleCsrOyAvLyBBdm9pZCBhbiBpbmZpbml0ZSBsb29wXG4gICAgICB9XG4gICAgICBpZiAobGFzdExhc3RJbmRleCA9PT0gc3RyaW5nLmxlbmd0aCkge1xuICAgICAgICBpZiAobGFzdExlbmd0aCB8fCAhc2VwYXJhdG9yQ29weS50ZXN0KCcnKSkgb3V0cHV0LnB1c2goJycpO1xuICAgICAgfSBlbHNlIG91dHB1dC5wdXNoKHN0cmluZy5zbGljZShsYXN0TGFzdEluZGV4KSk7XG4gICAgICByZXR1cm4gb3V0cHV0Lmxlbmd0aCA+IGxpbSA/IG91dHB1dC5zbGljZSgwLCBsaW0pIDogb3V0cHV0O1xuICAgIH07XG4gIC8vIENoYWtyYSwgVjhcbiAgfSBlbHNlIGlmICgnMCcuc3BsaXQodW5kZWZpbmVkLCAwKS5sZW5ndGgpIHtcbiAgICBpbnRlcm5hbFNwbGl0ID0gZnVuY3Rpb24gKHNlcGFyYXRvciwgbGltaXQpIHtcbiAgICAgIHJldHVybiBzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCAmJiBsaW1pdCA9PT0gMCA/IFtdIDogbmF0aXZlU3BsaXQuY2FsbCh0aGlzLCBzZXBhcmF0b3IsIGxpbWl0KTtcbiAgICB9O1xuICB9IGVsc2UgaW50ZXJuYWxTcGxpdCA9IG5hdGl2ZVNwbGl0O1xuXG4gIHJldHVybiBbXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUuc3BsaXRgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuc3BsaXRcbiAgICBmdW5jdGlvbiBzcGxpdChzZXBhcmF0b3IsIGxpbWl0KSB7XG4gICAgICB2YXIgTyA9IHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcyk7XG4gICAgICB2YXIgc3BsaXR0ZXIgPSBzZXBhcmF0b3IgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogc2VwYXJhdG9yW1NQTElUXTtcbiAgICAgIHJldHVybiBzcGxpdHRlciAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gc3BsaXR0ZXIuY2FsbChzZXBhcmF0b3IsIE8sIGxpbWl0KVxuICAgICAgICA6IGludGVybmFsU3BsaXQuY2FsbChTdHJpbmcoTyksIHNlcGFyYXRvciwgbGltaXQpO1xuICAgIH0sXG4gICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEBzcGxpdF1gIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEBzcGxpdFxuICAgIC8vXG4gICAgLy8gTk9URTogVGhpcyBjYW5ub3QgYmUgcHJvcGVybHkgcG9seWZpbGxlZCBpbiBlbmdpbmVzIHRoYXQgZG9uJ3Qgc3VwcG9ydFxuICAgIC8vIHRoZSAneScgZmxhZy5cbiAgICBmdW5jdGlvbiAocmVnZXhwLCBsaW1pdCkge1xuICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZShpbnRlcm5hbFNwbGl0LCByZWdleHAsIHRoaXMsIGxpbWl0LCBpbnRlcm5hbFNwbGl0ICE9PSBuYXRpdmVTcGxpdCk7XG4gICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XG5cbiAgICAgIHZhciByeCA9IGFuT2JqZWN0KHJlZ2V4cCk7XG4gICAgICB2YXIgUyA9IFN0cmluZyh0aGlzKTtcbiAgICAgIHZhciBDID0gc3BlY2llc0NvbnN0cnVjdG9yKHJ4LCBSZWdFeHApO1xuXG4gICAgICB2YXIgdW5pY29kZU1hdGNoaW5nID0gcngudW5pY29kZTtcbiAgICAgIHZhciBmbGFncyA9IChyeC5pZ25vcmVDYXNlID8gJ2knIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChyeC5tdWx0aWxpbmUgPyAnbScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHJ4LnVuaWNvZGUgPyAndScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKFNVUFBPUlRTX1kgPyAneScgOiAnZycpO1xuXG4gICAgICAvLyBeKD8gKyByeCArICkgaXMgbmVlZGVkLCBpbiBjb21iaW5hdGlvbiB3aXRoIHNvbWUgUyBzbGljaW5nLCB0b1xuICAgICAgLy8gc2ltdWxhdGUgdGhlICd5JyBmbGFnLlxuICAgICAgdmFyIHNwbGl0dGVyID0gbmV3IEMoU1VQUE9SVFNfWSA/IHJ4IDogJ14oPzonICsgcnguc291cmNlICsgJyknLCBmbGFncyk7XG4gICAgICB2YXIgbGltID0gbGltaXQgPT09IHVuZGVmaW5lZCA/IE1BWF9VSU5UMzIgOiBsaW1pdCA+Pj4gMDtcbiAgICAgIGlmIChsaW0gPT09IDApIHJldHVybiBbXTtcbiAgICAgIGlmIChTLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGNhbGxSZWdFeHBFeGVjKHNwbGl0dGVyLCBTKSA9PT0gbnVsbCA/IFtTXSA6IFtdO1xuICAgICAgdmFyIHAgPSAwO1xuICAgICAgdmFyIHEgPSAwO1xuICAgICAgdmFyIEEgPSBbXTtcbiAgICAgIHdoaWxlIChxIDwgUy5sZW5ndGgpIHtcbiAgICAgICAgc3BsaXR0ZXIubGFzdEluZGV4ID0gU1VQUE9SVFNfWSA/IHEgOiAwO1xuICAgICAgICB2YXIgeiA9IGNhbGxSZWdFeHBFeGVjKHNwbGl0dGVyLCBTVVBQT1JUU19ZID8gUyA6IFMuc2xpY2UocSkpO1xuICAgICAgICB2YXIgZTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHogPT09IG51bGwgfHxcbiAgICAgICAgICAoZSA9IG1pbih0b0xlbmd0aChzcGxpdHRlci5sYXN0SW5kZXggKyAoU1VQUE9SVFNfWSA/IDAgOiBxKSksIFMubGVuZ3RoKSkgPT09IHBcbiAgICAgICAgKSB7XG4gICAgICAgICAgcSA9IGFkdmFuY2VTdHJpbmdJbmRleChTLCBxLCB1bmljb2RlTWF0Y2hpbmcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIEEucHVzaChTLnNsaWNlKHAsIHEpKTtcbiAgICAgICAgICBpZiAoQS5sZW5ndGggPT09IGxpbSkgcmV0dXJuIEE7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPD0gei5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgIEEucHVzaCh6W2ldKTtcbiAgICAgICAgICAgIGlmIChBLmxlbmd0aCA9PT0gbGltKSByZXR1cm4gQTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcSA9IHAgPSBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBBLnB1c2goUy5zbGljZShwKSk7XG4gICAgICByZXR1cm4gQTtcbiAgICB9XG4gIF07XG59LCAhU1VQUE9SVFNfWSk7XG4iLCIvLyBgU3ltYm9sLnByb3RvdHlwZS5kZXNjcmlwdGlvbmAgZ2V0dGVyXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zeW1ib2wucHJvdG90eXBlLmRlc2NyaXB0aW9uXG4ndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpLmY7XG52YXIgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb3B5LWNvbnN0cnVjdG9yLXByb3BlcnRpZXMnKTtcblxudmFyIE5hdGl2ZVN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG5cbmlmIChERVNDUklQVE9SUyAmJiB0eXBlb2YgTmF0aXZlU3ltYm9sID09ICdmdW5jdGlvbicgJiYgKCEoJ2Rlc2NyaXB0aW9uJyBpbiBOYXRpdmVTeW1ib2wucHJvdG90eXBlKSB8fFxuICAvLyBTYWZhcmkgMTIgYnVnXG4gIE5hdGl2ZVN5bWJvbCgpLmRlc2NyaXB0aW9uICE9PSB1bmRlZmluZWRcbikpIHtcbiAgdmFyIEVtcHR5U3RyaW5nRGVzY3JpcHRpb25TdG9yZSA9IHt9O1xuICAvLyB3cmFwIFN5bWJvbCBjb25zdHJ1Y3RvciBmb3IgY29ycmVjdCB3b3JrIHdpdGggdW5kZWZpbmVkIGRlc2NyaXB0aW9uXG4gIHZhciBTeW1ib2xXcmFwcGVyID0gZnVuY3Rpb24gU3ltYm9sKCkge1xuICAgIHZhciBkZXNjcmlwdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPCAxIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogU3RyaW5nKGFyZ3VtZW50c1swXSk7XG4gICAgdmFyIHJlc3VsdCA9IHRoaXMgaW5zdGFuY2VvZiBTeW1ib2xXcmFwcGVyXG4gICAgICA/IG5ldyBOYXRpdmVTeW1ib2woZGVzY3JpcHRpb24pXG4gICAgICAvLyBpbiBFZGdlIDEzLCBTdHJpbmcoU3ltYm9sKHVuZGVmaW5lZCkpID09PSAnU3ltYm9sKHVuZGVmaW5lZCknXG4gICAgICA6IGRlc2NyaXB0aW9uID09PSB1bmRlZmluZWQgPyBOYXRpdmVTeW1ib2woKSA6IE5hdGl2ZVN5bWJvbChkZXNjcmlwdGlvbik7XG4gICAgaWYgKGRlc2NyaXB0aW9uID09PSAnJykgRW1wdHlTdHJpbmdEZXNjcmlwdGlvblN0b3JlW3Jlc3VsdF0gPSB0cnVlO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMoU3ltYm9sV3JhcHBlciwgTmF0aXZlU3ltYm9sKTtcbiAgdmFyIHN5bWJvbFByb3RvdHlwZSA9IFN5bWJvbFdyYXBwZXIucHJvdG90eXBlID0gTmF0aXZlU3ltYm9sLnByb3RvdHlwZTtcbiAgc3ltYm9sUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU3ltYm9sV3JhcHBlcjtcblxuICB2YXIgc3ltYm9sVG9TdHJpbmcgPSBzeW1ib2xQcm90b3R5cGUudG9TdHJpbmc7XG4gIHZhciBuYXRpdmUgPSBTdHJpbmcoTmF0aXZlU3ltYm9sKCd0ZXN0JykpID09ICdTeW1ib2wodGVzdCknO1xuICB2YXIgcmVnZXhwID0gL15TeW1ib2xcXCgoLiopXFwpW14pXSskLztcbiAgZGVmaW5lUHJvcGVydHkoc3ltYm9sUHJvdG90eXBlLCAnZGVzY3JpcHRpb24nLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZGVzY3JpcHRpb24oKSB7XG4gICAgICB2YXIgc3ltYm9sID0gaXNPYmplY3QodGhpcykgPyB0aGlzLnZhbHVlT2YoKSA6IHRoaXM7XG4gICAgICB2YXIgc3RyaW5nID0gc3ltYm9sVG9TdHJpbmcuY2FsbChzeW1ib2wpO1xuICAgICAgaWYgKGhhcyhFbXB0eVN0cmluZ0Rlc2NyaXB0aW9uU3RvcmUsIHN5bWJvbCkpIHJldHVybiAnJztcbiAgICAgIHZhciBkZXNjID0gbmF0aXZlID8gc3RyaW5nLnNsaWNlKDcsIC0xKSA6IHN0cmluZy5yZXBsYWNlKHJlZ2V4cCwgJyQxJyk7XG4gICAgICByZXR1cm4gZGVzYyA9PT0gJycgPyB1bmRlZmluZWQgOiBkZXNjO1xuICAgIH1cbiAgfSk7XG5cbiAgJCh7IGdsb2JhbDogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcbiAgICBTeW1ib2w6IFN5bWJvbFdyYXBwZXJcbiAgfSk7XG59XG4iLCJ2YXIgZGVmaW5lV2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS13ZWxsLWtub3duLXN5bWJvbCcpO1xuXG4vLyBgU3ltYm9sLml0ZXJhdG9yYCB3ZWxsLWtub3duIHN5bWJvbFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3ltYm9sLml0ZXJhdG9yXG5kZWZpbmVXZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmF0aXZlLXN5bWJvbCcpO1xudmFyIFVTRV9TWU1CT0xfQVNfVUlEID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIG5hdGl2ZU9iamVjdENyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtY3JlYXRlJyk7XG52YXIgb2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cycpO1xudmFyIGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzRXh0ZXJuYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMtZXh0ZXJuYWwnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scycpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1wcm9wZXJ0eS1pcy1lbnVtZXJhYmxlJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciB3cmFwcGVkV2VsbEtub3duU3ltYm9sTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLXdyYXBwZWQnKTtcbnZhciBkZWZpbmVXZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLXdlbGwta25vd24tc3ltYm9sJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJyk7XG52YXIgJGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZm9yRWFjaDtcblxudmFyIEhJRERFTiA9IHNoYXJlZEtleSgnaGlkZGVuJyk7XG52YXIgU1lNQk9MID0gJ1N5bWJvbCc7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG52YXIgVE9fUFJJTUlUSVZFID0gd2VsbEtub3duU3ltYm9sKCd0b1ByaW1pdGl2ZScpO1xudmFyIHNldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLnNldDtcbnZhciBnZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXR0ZXJGb3IoU1lNQk9MKTtcbnZhciBPYmplY3RQcm90b3R5cGUgPSBPYmplY3RbUFJPVE9UWVBFXTtcbnZhciAkU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbnZhciAkc3RyaW5naWZ5ID0gZ2V0QnVpbHRJbignSlNPTicsICdzdHJpbmdpZnknKTtcbnZhciBuYXRpdmVHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUuZjtcbnZhciBuYXRpdmVEZWZpbmVQcm9wZXJ0eSA9IGRlZmluZVByb3BlcnR5TW9kdWxlLmY7XG52YXIgbmF0aXZlR2V0T3duUHJvcGVydHlOYW1lcyA9IGdldE93blByb3BlcnR5TmFtZXNFeHRlcm5hbC5mO1xudmFyIG5hdGl2ZVByb3BlcnR5SXNFbnVtZXJhYmxlID0gcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUuZjtcbnZhciBBbGxTeW1ib2xzID0gc2hhcmVkKCdzeW1ib2xzJyk7XG52YXIgT2JqZWN0UHJvdG90eXBlU3ltYm9scyA9IHNoYXJlZCgnb3Atc3ltYm9scycpO1xudmFyIFN0cmluZ1RvU3ltYm9sUmVnaXN0cnkgPSBzaGFyZWQoJ3N0cmluZy10by1zeW1ib2wtcmVnaXN0cnknKTtcbnZhciBTeW1ib2xUb1N0cmluZ1JlZ2lzdHJ5ID0gc2hhcmVkKCdzeW1ib2wtdG8tc3RyaW5nLXJlZ2lzdHJ5Jyk7XG52YXIgV2VsbEtub3duU3ltYm9sc1N0b3JlID0gc2hhcmVkKCd3a3MnKTtcbnZhciBRT2JqZWN0ID0gZ2xvYmFsLlFPYmplY3Q7XG4vLyBEb24ndCB1c2Ugc2V0dGVycyBpbiBRdCBTY3JpcHQsIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xNzNcbnZhciBVU0VfU0VUVEVSID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzY3JpcHRvciA9IERFU0NSSVBUT1JTICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIG5hdGl2ZU9iamVjdENyZWF0ZShuYXRpdmVEZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBuYXRpdmVEZWZpbmVQcm9wZXJ0eSh0aGlzLCAnYScsIHsgdmFsdWU6IDcgfSkuYTsgfVxuICB9KSkuYSAhPSA3O1xufSkgPyBmdW5jdGlvbiAoTywgUCwgQXR0cmlidXRlcykge1xuICB2YXIgT2JqZWN0UHJvdG90eXBlRGVzY3JpcHRvciA9IG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvcihPYmplY3RQcm90b3R5cGUsIFApO1xuICBpZiAoT2JqZWN0UHJvdG90eXBlRGVzY3JpcHRvcikgZGVsZXRlIE9iamVjdFByb3RvdHlwZVtQXTtcbiAgbmF0aXZlRGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG4gIGlmIChPYmplY3RQcm90b3R5cGVEZXNjcmlwdG9yICYmIE8gIT09IE9iamVjdFByb3RvdHlwZSkge1xuICAgIG5hdGl2ZURlZmluZVByb3BlcnR5KE9iamVjdFByb3RvdHlwZSwgUCwgT2JqZWN0UHJvdG90eXBlRGVzY3JpcHRvcik7XG4gIH1cbn0gOiBuYXRpdmVEZWZpbmVQcm9wZXJ0eTtcblxudmFyIHdyYXAgPSBmdW5jdGlvbiAodGFnLCBkZXNjcmlwdGlvbikge1xuICB2YXIgc3ltYm9sID0gQWxsU3ltYm9sc1t0YWddID0gbmF0aXZlT2JqZWN0Q3JlYXRlKCRTeW1ib2xbUFJPVE9UWVBFXSk7XG4gIHNldEludGVybmFsU3RhdGUoc3ltYm9sLCB7XG4gICAgdHlwZTogU1lNQk9MLFxuICAgIHRhZzogdGFnLFxuICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvblxuICB9KTtcbiAgaWYgKCFERVNDUklQVE9SUykgc3ltYm9sLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIHJldHVybiBzeW1ib2w7XG59O1xuXG52YXIgaXNTeW1ib2wgPSBVU0VfU1lNQk9MX0FTX1VJRCA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gT2JqZWN0KGl0KSBpbnN0YW5jZW9mICRTeW1ib2w7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBpZiAoTyA9PT0gT2JqZWN0UHJvdG90eXBlKSAkZGVmaW5lUHJvcGVydHkoT2JqZWN0UHJvdG90eXBlU3ltYm9scywgUCwgQXR0cmlidXRlcyk7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5ID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSkpIHtcbiAgICBpZiAoIUF0dHJpYnV0ZXMuZW51bWVyYWJsZSkge1xuICAgICAgaWYgKCFoYXMoTywgSElEREVOKSkgbmF0aXZlRGVmaW5lUHJvcGVydHkoTywgSElEREVOLCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMSwge30pKTtcbiAgICAgIE9bSElEREVOXVtrZXldID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGhhcyhPLCBISURERU4pICYmIE9bSElEREVOXVtrZXldKSBPW0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgQXR0cmlidXRlcyA9IG5hdGl2ZU9iamVjdENyZWF0ZShBdHRyaWJ1dGVzLCB7IGVudW1lcmFibGU6IGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigwLCBmYWxzZSkgfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzY3JpcHRvcihPLCBrZXksIEF0dHJpYnV0ZXMpO1xuICB9IHJldHVybiBuYXRpdmVEZWZpbmVQcm9wZXJ0eShPLCBrZXksIEF0dHJpYnV0ZXMpO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIgcHJvcGVydGllcyA9IHRvSW5kZXhlZE9iamVjdChQcm9wZXJ0aWVzKTtcbiAgdmFyIGtleXMgPSBvYmplY3RLZXlzKHByb3BlcnRpZXMpLmNvbmNhdCgkZ2V0T3duUHJvcGVydHlTeW1ib2xzKHByb3BlcnRpZXMpKTtcbiAgJGZvckVhY2goa2V5cywgZnVuY3Rpb24gKGtleSkge1xuICAgIGlmICghREVTQ1JJUFRPUlMgfHwgJHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocHJvcGVydGllcywga2V5KSkgJGRlZmluZVByb3BlcnR5KE8sIGtleSwgcHJvcGVydGllc1trZXldKTtcbiAgfSk7XG4gIHJldHVybiBPO1xufTtcblxudmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gbmF0aXZlT2JqZWN0Q3JlYXRlKE8pIDogJGRlZmluZVByb3BlcnRpZXMobmF0aXZlT2JqZWN0Q3JlYXRlKE8pLCBQcm9wZXJ0aWVzKTtcbn07XG5cbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShWKSB7XG4gIHZhciBQID0gdG9QcmltaXRpdmUoViwgdHJ1ZSk7XG4gIHZhciBlbnVtZXJhYmxlID0gbmF0aXZlUHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh0aGlzLCBQKTtcbiAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvdHlwZSAmJiBoYXMoQWxsU3ltYm9scywgUCkgJiYgIWhhcyhPYmplY3RQcm90b3R5cGVTeW1ib2xzLCBQKSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gZW51bWVyYWJsZSB8fCAhaGFzKHRoaXMsIFApIHx8ICFoYXMoQWxsU3ltYm9scywgUCkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW1BdID8gZW51bWVyYWJsZSA6IHRydWU7XG59O1xuXG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIHZhciBpdCA9IHRvSW5kZXhlZE9iamVjdChPKTtcbiAgdmFyIGtleSA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvdHlwZSAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9iamVjdFByb3RvdHlwZVN5bWJvbHMsIGtleSkpIHJldHVybjtcbiAgdmFyIGRlc2NyaXB0b3IgPSBuYXRpdmVHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSk7XG4gIGlmIChkZXNjcmlwdG9yICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpIHtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSB0cnVlO1xuICB9XG4gIHJldHVybiBkZXNjcmlwdG9yO1xufTtcblxudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHZhciBuYW1lcyA9IG5hdGl2ZUdldE93blByb3BlcnR5TmFtZXModG9JbmRleGVkT2JqZWN0KE8pKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICAkZm9yRWFjaChuYW1lcywgZnVuY3Rpb24gKGtleSkge1xuICAgIGlmICghaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhoaWRkZW5LZXlzLCBrZXkpKSByZXN1bHQucHVzaChrZXkpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pIHtcbiAgdmFyIElTX09CSkVDVF9QUk9UT1RZUEUgPSBPID09PSBPYmplY3RQcm90b3R5cGU7XG4gIHZhciBuYW1lcyA9IG5hdGl2ZUdldE93blByb3BlcnR5TmFtZXMoSVNfT0JKRUNUX1BST1RPVFlQRSA/IE9iamVjdFByb3RvdHlwZVN5bWJvbHMgOiB0b0luZGV4ZWRPYmplY3QoTykpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gICRmb3JFYWNoKG5hbWVzLCBmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICghSVNfT0JKRUNUX1BST1RPVFlQRSB8fCBoYXMoT2JqZWN0UHJvdG90eXBlLCBrZXkpKSkge1xuICAgICAgcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gYFN5bWJvbGAgY29uc3RydWN0b3Jcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN5bWJvbC1jb25zdHJ1Y3RvclxuaWYgKCFOQVRJVkVfU1lNQk9MKSB7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKSB7XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKSB0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvcicpO1xuICAgIHZhciBkZXNjcmlwdGlvbiA9ICFhcmd1bWVudHMubGVuZ3RoIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogU3RyaW5nKGFyZ3VtZW50c1swXSk7XG4gICAgdmFyIHRhZyA9IHVpZChkZXNjcmlwdGlvbik7XG4gICAgdmFyIHNldHRlciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvdHlwZSkgc2V0dGVyLmNhbGwoT2JqZWN0UHJvdG90eXBlU3ltYm9scywgdmFsdWUpO1xuICAgICAgaWYgKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpIHRoaXNbSElEREVOXVt0YWddID0gZmFsc2U7XG4gICAgICBzZXRTeW1ib2xEZXNjcmlwdG9yKHRoaXMsIHRhZywgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZiAoREVTQ1JJUFRPUlMgJiYgVVNFX1NFVFRFUikgc2V0U3ltYm9sRGVzY3JpcHRvcihPYmplY3RQcm90b3R5cGUsIHRhZywgeyBjb25maWd1cmFibGU6IHRydWUsIHNldDogc2V0dGVyIH0pO1xuICAgIHJldHVybiB3cmFwKHRhZywgZGVzY3JpcHRpb24pO1xuICB9O1xuXG4gIHJlZGVmaW5lKCRTeW1ib2xbUFJPVE9UWVBFXSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIGdldEludGVybmFsU3RhdGUodGhpcykudGFnO1xuICB9KTtcblxuICByZWRlZmluZSgkU3ltYm9sLCAnd2l0aG91dFNldHRlcicsIGZ1bmN0aW9uIChkZXNjcmlwdGlvbikge1xuICAgIHJldHVybiB3cmFwKHVpZChkZXNjcmlwdGlvbiksIGRlc2NyaXB0aW9uKTtcbiAgfSk7XG5cbiAgcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUuZiA9ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgZGVmaW5lUHJvcGVydHlNb2R1bGUuZiA9ICRkZWZpbmVQcm9wZXJ0eTtcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlLmYgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlLmYgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzRXh0ZXJuYWwuZiA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgd3JhcHBlZFdlbGxLbm93blN5bWJvbE1vZHVsZS5mID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gd3JhcCh3ZWxsS25vd25TeW1ib2wobmFtZSksIG5hbWUpO1xuICB9O1xuXG4gIGlmIChERVNDUklQVE9SUykge1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLVN5bWJvbC1kZXNjcmlwdGlvblxuICAgIG5hdGl2ZURlZmluZVByb3BlcnR5KCRTeW1ib2xbUFJPVE9UWVBFXSwgJ2Rlc2NyaXB0aW9uJywge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBkZXNjcmlwdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGdldEludGVybmFsU3RhdGUodGhpcykuZGVzY3JpcHRpb247XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKCFJU19QVVJFKSB7XG4gICAgICByZWRlZmluZShPYmplY3RQcm90b3R5cGUsICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgeyB1bnNhZmU6IHRydWUgfSk7XG4gICAgfVxuICB9XG59XG5cbiQoeyBnbG9iYWw6IHRydWUsIHdyYXA6IHRydWUsIGZvcmNlZDogIU5BVElWRV9TWU1CT0wsIHNoYW06ICFOQVRJVkVfU1lNQk9MIH0sIHtcbiAgU3ltYm9sOiAkU3ltYm9sXG59KTtcblxuJGZvckVhY2gob2JqZWN0S2V5cyhXZWxsS25vd25TeW1ib2xzU3RvcmUpLCBmdW5jdGlvbiAobmFtZSkge1xuICBkZWZpbmVXZWxsS25vd25TeW1ib2wobmFtZSk7XG59KTtcblxuJCh7IHRhcmdldDogU1lNQk9MLCBzdGF0OiB0cnVlLCBmb3JjZWQ6ICFOQVRJVkVfU1lNQk9MIH0sIHtcbiAgLy8gYFN5bWJvbC5mb3JgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zeW1ib2wuZm9yXG4gICdmb3InOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIHN0cmluZyA9IFN0cmluZyhrZXkpO1xuICAgIGlmIChoYXMoU3RyaW5nVG9TeW1ib2xSZWdpc3RyeSwgc3RyaW5nKSkgcmV0dXJuIFN0cmluZ1RvU3ltYm9sUmVnaXN0cnlbc3RyaW5nXTtcbiAgICB2YXIgc3ltYm9sID0gJFN5bWJvbChzdHJpbmcpO1xuICAgIFN0cmluZ1RvU3ltYm9sUmVnaXN0cnlbc3RyaW5nXSA9IHN5bWJvbDtcbiAgICBTeW1ib2xUb1N0cmluZ1JlZ2lzdHJ5W3N5bWJvbF0gPSBzdHJpbmc7XG4gICAgcmV0dXJuIHN5bWJvbDtcbiAgfSxcbiAgLy8gYFN5bWJvbC5rZXlGb3JgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zeW1ib2wua2V5Zm9yXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKHN5bSkge1xuICAgIGlmICghaXNTeW1ib2woc3ltKSkgdGhyb3cgVHlwZUVycm9yKHN5bSArICcgaXMgbm90IGEgc3ltYm9sJyk7XG4gICAgaWYgKGhhcyhTeW1ib2xUb1N0cmluZ1JlZ2lzdHJ5LCBzeW0pKSByZXR1cm4gU3ltYm9sVG9TdHJpbmdSZWdpc3RyeVtzeW1dO1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uICgpIHsgVVNFX1NFVFRFUiA9IHRydWU7IH0sXG4gIHVzZVNpbXBsZTogZnVuY3Rpb24gKCkgeyBVU0VfU0VUVEVSID0gZmFsc2U7IH1cbn0pO1xuXG4kKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiAhTkFUSVZFX1NZTUJPTCwgc2hhbTogIURFU0NSSVBUT1JTIH0sIHtcbiAgLy8gYE9iamVjdC5jcmVhdGVgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuY3JlYXRlXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0eVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyBgT2JqZWN0LmRlZmluZVByb3BlcnRpZXNgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydGllc1xuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yc1xuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Jcbn0pO1xuXG4kKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiAhTkFUSVZFX1NZTUJPTCB9LCB7XG4gIC8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc2AgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eW5hbWVzXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyBgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9sc2AgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eXN5bWJvbHNcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gQ2hyb21lIDM4IGFuZCAzOSBgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9sc2AgZmFpbHMgb24gcHJpbWl0aXZlc1xuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzQ0M1xuJCh7IHRhcmdldDogJ09iamVjdCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogZmFpbHMoZnVuY3Rpb24gKCkgeyBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUuZigxKTsgfSkgfSwge1xuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkge1xuICAgIHJldHVybiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUuZih0b09iamVjdChpdCkpO1xuICB9XG59KTtcblxuLy8gYEpTT04uc3RyaW5naWZ5YCBtZXRob2QgYmVoYXZpb3Igd2l0aCBzeW1ib2xzXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1qc29uLnN0cmluZ2lmeVxuaWYgKCRzdHJpbmdpZnkpIHtcbiAgdmFyIEZPUkNFRF9KU09OX1NUUklOR0lGWSA9ICFOQVRJVkVfU1lNQk9MIHx8IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3ltYm9sID0gJFN5bWJvbCgpO1xuICAgIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gICAgcmV0dXJuICRzdHJpbmdpZnkoW3N5bWJvbF0pICE9ICdbbnVsbF0nXG4gICAgICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcbiAgICAgIHx8ICRzdHJpbmdpZnkoeyBhOiBzeW1ib2wgfSkgIT0gJ3t9J1xuICAgICAgLy8gVjggdGhyb3dzIG9uIGJveGVkIHN5bWJvbHNcbiAgICAgIHx8ICRzdHJpbmdpZnkoT2JqZWN0KHN5bWJvbCkpICE9ICd7fSc7XG4gIH0pO1xuXG4gICQoeyB0YXJnZXQ6ICdKU09OJywgc3RhdDogdHJ1ZSwgZm9yY2VkOiBGT1JDRURfSlNPTl9TVFJJTkdJRlkgfSwge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICAgIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0LCByZXBsYWNlciwgc3BhY2UpIHtcbiAgICAgIHZhciBhcmdzID0gW2l0XTtcbiAgICAgIHZhciBpbmRleCA9IDE7XG4gICAgICB2YXIgJHJlcGxhY2VyO1xuICAgICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpbmRleCkgYXJncy5wdXNoKGFyZ3VtZW50c1tpbmRleCsrXSk7XG4gICAgICAkcmVwbGFjZXIgPSByZXBsYWNlcjtcbiAgICAgIGlmICghaXNPYmplY3QocmVwbGFjZXIpICYmIGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKSByZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICAgIGlmICghaXNBcnJheShyZXBsYWNlcikpIHJlcGxhY2VyID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiAkcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykgdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgICAgaWYgKCFpc1N5bWJvbCh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgICAgIH07XG4gICAgICBhcmdzWzFdID0gcmVwbGFjZXI7XG4gICAgICByZXR1cm4gJHN0cmluZ2lmeS5hcHBseShudWxsLCBhcmdzKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vLyBgU3ltYm9sLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zeW1ib2wucHJvdG90eXBlLUBAdG9wcmltaXRpdmVcbmlmICghJFN5bWJvbFtQUk9UT1RZUEVdW1RPX1BSSU1JVElWRV0pIHtcbiAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KCRTeW1ib2xbUFJPVE9UWVBFXSwgVE9fUFJJTUlUSVZFLCAkU3ltYm9sW1BST1RPVFlQRV0udmFsdWVPZik7XG59XG4vLyBgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXWAgcHJvcGVydHlcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN5bWJvbC5wcm90b3R5cGUtQEB0b3N0cmluZ3RhZ1xuc2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgU1lNQk9MKTtcblxuaGlkZGVuS2V5c1tISURERU5dID0gdHJ1ZTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgRE9NSXRlcmFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvbS1pdGVyYWJsZXMnKTtcbnZhciBBcnJheUl0ZXJhdG9yTWV0aG9kcyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvZXMuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcbnZhciBUT19TVFJJTkdfVEFHID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xudmFyIEFycmF5VmFsdWVzID0gQXJyYXlJdGVyYXRvck1ldGhvZHMudmFsdWVzO1xuXG5mb3IgKHZhciBDT0xMRUNUSU9OX05BTUUgaW4gRE9NSXRlcmFibGVzKSB7XG4gIHZhciBDb2xsZWN0aW9uID0gZ2xvYmFsW0NPTExFQ1RJT05fTkFNRV07XG4gIHZhciBDb2xsZWN0aW9uUHJvdG90eXBlID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgaWYgKENvbGxlY3Rpb25Qcm90b3R5cGUpIHtcbiAgICAvLyBzb21lIENocm9tZSB2ZXJzaW9ucyBoYXZlIG5vbi1jb25maWd1cmFibGUgbWV0aG9kcyBvbiBET01Ub2tlbkxpc3RcbiAgICBpZiAoQ29sbGVjdGlvblByb3RvdHlwZVtJVEVSQVRPUl0gIT09IEFycmF5VmFsdWVzKSB0cnkge1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KENvbGxlY3Rpb25Qcm90b3R5cGUsIElURVJBVE9SLCBBcnJheVZhbHVlcyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIENvbGxlY3Rpb25Qcm90b3R5cGVbSVRFUkFUT1JdID0gQXJyYXlWYWx1ZXM7XG4gICAgfVxuICAgIGlmICghQ29sbGVjdGlvblByb3RvdHlwZVtUT19TVFJJTkdfVEFHXSkge1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KENvbGxlY3Rpb25Qcm90b3R5cGUsIFRPX1NUUklOR19UQUcsIENPTExFQ1RJT05fTkFNRSk7XG4gICAgfVxuICAgIGlmIChET01JdGVyYWJsZXNbQ09MTEVDVElPTl9OQU1FXSkgZm9yICh2YXIgTUVUSE9EX05BTUUgaW4gQXJyYXlJdGVyYXRvck1ldGhvZHMpIHtcbiAgICAgIC8vIHNvbWUgQ2hyb21lIHZlcnNpb25zIGhhdmUgbm9uLWNvbmZpZ3VyYWJsZSBtZXRob2RzIG9uIERPTVRva2VuTGlzdFxuICAgICAgaWYgKENvbGxlY3Rpb25Qcm90b3R5cGVbTUVUSE9EX05BTUVdICE9PSBBcnJheUl0ZXJhdG9yTWV0aG9kc1tNRVRIT0RfTkFNRV0pIHRyeSB7XG4gICAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShDb2xsZWN0aW9uUHJvdG90eXBlLCBNRVRIT0RfTkFNRSwgQXJyYXlJdGVyYXRvck1ldGhvZHNbTUVUSE9EX05BTUVdKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIENvbGxlY3Rpb25Qcm90b3R5cGVbTUVUSE9EX05BTUVdID0gQXJyYXlJdGVyYXRvck1ldGhvZHNbTUVUSE9EX05BTUVdO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLyoqIVxuICogQGZpbGVPdmVydmlldyBLaWNrYXNzIGxpYnJhcnkgdG8gY3JlYXRlIGFuZCBwbGFjZSBwb3BwZXJzIG5lYXIgdGhlaXIgcmVmZXJlbmNlIGVsZW1lbnRzLlxuICogQHZlcnNpb24gMS4xNi4xXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE2IEZlZGVyaWNvIFppdm9sbyBhbmQgY29udHJpYnV0b3JzXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiBTT0ZUV0FSRS5cbiAqL1xudmFyIGlzQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCc7XG5cbnZhciB0aW1lb3V0RHVyYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBsb25nZXJUaW1lb3V0QnJvd3NlcnMgPSBbJ0VkZ2UnLCAnVHJpZGVudCcsICdGaXJlZm94J107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbG9uZ2VyVGltZW91dEJyb3dzZXJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKGlzQnJvd3NlciAmJiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YobG9uZ2VyVGltZW91dEJyb3dzZXJzW2ldKSA+PSAwKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIDA7XG59KCk7XG5cbmZ1bmN0aW9uIG1pY3JvdGFza0RlYm91bmNlKGZuKSB7XG4gIHZhciBjYWxsZWQgPSBmYWxzZTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoY2FsbGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNhbGxlZCA9IHRydWU7XG4gICAgd2luZG93LlByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgY2FsbGVkID0gZmFsc2U7XG4gICAgICBmbigpO1xuICAgIH0pO1xuICB9O1xufVxuXG5mdW5jdGlvbiB0YXNrRGVib3VuY2UoZm4pIHtcbiAgdmFyIHNjaGVkdWxlZCA9IGZhbHNlO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmICghc2NoZWR1bGVkKSB7XG4gICAgICBzY2hlZHVsZWQgPSB0cnVlO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNjaGVkdWxlZCA9IGZhbHNlO1xuICAgICAgICBmbigpO1xuICAgICAgfSwgdGltZW91dER1cmF0aW9uKTtcbiAgICB9XG4gIH07XG59XG5cbnZhciBzdXBwb3J0c01pY3JvVGFza3MgPSBpc0Jyb3dzZXIgJiYgd2luZG93LlByb21pc2U7XG5cbi8qKlxuKiBDcmVhdGUgYSBkZWJvdW5jZWQgdmVyc2lvbiBvZiBhIG1ldGhvZCwgdGhhdCdzIGFzeW5jaHJvbm91c2x5IGRlZmVycmVkXG4qIGJ1dCBjYWxsZWQgaW4gdGhlIG1pbmltdW0gdGltZSBwb3NzaWJsZS5cbipcbiogQG1ldGhvZFxuKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4qIEBhcmd1bWVudCB7RnVuY3Rpb259IGZuXG4qIEByZXR1cm5zIHtGdW5jdGlvbn1cbiovXG52YXIgZGVib3VuY2UgPSBzdXBwb3J0c01pY3JvVGFza3MgPyBtaWNyb3Rhc2tEZWJvdW5jZSA6IHRhc2tEZWJvdW5jZTtcblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgZ2l2ZW4gdmFyaWFibGUgaXMgYSBmdW5jdGlvblxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtBbnl9IGZ1bmN0aW9uVG9DaGVjayAtIHZhcmlhYmxlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gYW5zd2VyIHRvOiBpcyBhIGZ1bmN0aW9uP1xuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGZ1bmN0aW9uVG9DaGVjaykge1xuICB2YXIgZ2V0VHlwZSA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb25Ub0NoZWNrICYmIGdldFR5cGUudG9TdHJpbmcuY2FsbChmdW5jdGlvblRvQ2hlY2spID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufVxuXG4vKipcbiAqIEdldCBDU1MgY29tcHV0ZWQgcHJvcGVydHkgb2YgdGhlIGdpdmVuIGVsZW1lbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWVtZW50fSBlbGVtZW50XG4gKiBAYXJndW1lbnQge1N0cmluZ30gcHJvcGVydHlcbiAqL1xuZnVuY3Rpb24gZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGVsZW1lbnQsIHByb3BlcnR5KSB7XG4gIGlmIChlbGVtZW50Lm5vZGVUeXBlICE9PSAxKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIC8vIE5PVEU6IDEgRE9NIGFjY2VzcyBoZXJlXG4gIHZhciB3aW5kb3cgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG4gIHZhciBjc3MgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCBudWxsKTtcbiAgcmV0dXJuIHByb3BlcnR5ID8gY3NzW3Byb3BlcnR5XSA6IGNzcztcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBwYXJlbnROb2RlIG9yIHRoZSBob3N0IG9mIHRoZSBlbGVtZW50XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm5zIHtFbGVtZW50fSBwYXJlbnRcbiAqL1xuZnVuY3Rpb24gZ2V0UGFyZW50Tm9kZShlbGVtZW50KSB7XG4gIGlmIChlbGVtZW50Lm5vZGVOYW1lID09PSAnSFRNTCcpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuICByZXR1cm4gZWxlbWVudC5wYXJlbnROb2RlIHx8IGVsZW1lbnQuaG9zdDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBzY3JvbGxpbmcgcGFyZW50IG9mIHRoZSBnaXZlbiBlbGVtZW50XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm5zIHtFbGVtZW50fSBzY3JvbGwgcGFyZW50XG4gKi9cbmZ1bmN0aW9uIGdldFNjcm9sbFBhcmVudChlbGVtZW50KSB7XG4gIC8vIFJldHVybiBib2R5LCBgZ2V0U2Nyb2xsYCB3aWxsIHRha2UgY2FyZSB0byBnZXQgdGhlIGNvcnJlY3QgYHNjcm9sbFRvcGAgZnJvbSBpdFxuICBpZiAoIWVsZW1lbnQpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuYm9keTtcbiAgfVxuXG4gIHN3aXRjaCAoZWxlbWVudC5ub2RlTmFtZSkge1xuICAgIGNhc2UgJ0hUTUwnOlxuICAgIGNhc2UgJ0JPRFknOlxuICAgICAgcmV0dXJuIGVsZW1lbnQub3duZXJEb2N1bWVudC5ib2R5O1xuICAgIGNhc2UgJyNkb2N1bWVudCc6XG4gICAgICByZXR1cm4gZWxlbWVudC5ib2R5O1xuICB9XG5cbiAgLy8gRmlyZWZveCB3YW50IHVzIHRvIGNoZWNrIGAteGAgYW5kIGAteWAgdmFyaWF0aW9ucyBhcyB3ZWxsXG5cbiAgdmFyIF9nZXRTdHlsZUNvbXB1dGVkUHJvcCA9IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShlbGVtZW50KSxcbiAgICAgIG92ZXJmbG93ID0gX2dldFN0eWxlQ29tcHV0ZWRQcm9wLm92ZXJmbG93LFxuICAgICAgb3ZlcmZsb3dYID0gX2dldFN0eWxlQ29tcHV0ZWRQcm9wLm92ZXJmbG93WCxcbiAgICAgIG92ZXJmbG93WSA9IF9nZXRTdHlsZUNvbXB1dGVkUHJvcC5vdmVyZmxvd1k7XG5cbiAgaWYgKC8oYXV0b3xzY3JvbGx8b3ZlcmxheSkvLnRlc3Qob3ZlcmZsb3cgKyBvdmVyZmxvd1kgKyBvdmVyZmxvd1gpKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICByZXR1cm4gZ2V0U2Nyb2xsUGFyZW50KGdldFBhcmVudE5vZGUoZWxlbWVudCkpO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHJlZmVyZW5jZSBub2RlIG9mIHRoZSByZWZlcmVuY2Ugb2JqZWN0LCBvciB0aGUgcmVmZXJlbmNlIG9iamVjdCBpdHNlbGYuXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcGFyYW0ge0VsZW1lbnR8T2JqZWN0fSByZWZlcmVuY2UgLSB0aGUgcmVmZXJlbmNlIGVsZW1lbnQgKHRoZSBwb3BwZXIgd2lsbCBiZSByZWxhdGl2ZSB0byB0aGlzKVxuICogQHJldHVybnMge0VsZW1lbnR9IHBhcmVudFxuICovXG5mdW5jdGlvbiBnZXRSZWZlcmVuY2VOb2RlKHJlZmVyZW5jZSkge1xuICByZXR1cm4gcmVmZXJlbmNlICYmIHJlZmVyZW5jZS5yZWZlcmVuY2VOb2RlID8gcmVmZXJlbmNlLnJlZmVyZW5jZU5vZGUgOiByZWZlcmVuY2U7XG59XG5cbnZhciBpc0lFMTEgPSBpc0Jyb3dzZXIgJiYgISEod2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmIGRvY3VtZW50LmRvY3VtZW50TW9kZSk7XG52YXIgaXNJRTEwID0gaXNCcm93c2VyICYmIC9NU0lFIDEwLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuXG4vKipcbiAqIERldGVybWluZXMgaWYgdGhlIGJyb3dzZXIgaXMgSW50ZXJuZXQgRXhwbG9yZXJcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7TnVtYmVyfSB2ZXJzaW9uIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gaXNJRVxuICovXG5mdW5jdGlvbiBpc0lFKHZlcnNpb24pIHtcbiAgaWYgKHZlcnNpb24gPT09IDExKSB7XG4gICAgcmV0dXJuIGlzSUUxMTtcbiAgfVxuICBpZiAodmVyc2lvbiA9PT0gMTApIHtcbiAgICByZXR1cm4gaXNJRTEwO1xuICB9XG4gIHJldHVybiBpc0lFMTEgfHwgaXNJRTEwO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIG9mZnNldCBwYXJlbnQgb2YgdGhlIGdpdmVuIGVsZW1lbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudFxuICogQHJldHVybnMge0VsZW1lbnR9IG9mZnNldCBwYXJlbnRcbiAqL1xuZnVuY3Rpb24gZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQpIHtcbiAgaWYgKCFlbGVtZW50KSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgfVxuXG4gIHZhciBub09mZnNldFBhcmVudCA9IGlzSUUoMTApID8gZG9jdW1lbnQuYm9keSA6IG51bGw7XG5cbiAgLy8gTk9URTogMSBET00gYWNjZXNzIGhlcmVcbiAgdmFyIG9mZnNldFBhcmVudCA9IGVsZW1lbnQub2Zmc2V0UGFyZW50IHx8IG51bGw7XG4gIC8vIFNraXAgaGlkZGVuIGVsZW1lbnRzIHdoaWNoIGRvbid0IGhhdmUgYW4gb2Zmc2V0UGFyZW50XG4gIHdoaWxlIChvZmZzZXRQYXJlbnQgPT09IG5vT2Zmc2V0UGFyZW50ICYmIGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nKSB7XG4gICAgb2Zmc2V0UGFyZW50ID0gKGVsZW1lbnQgPSBlbGVtZW50Lm5leHRFbGVtZW50U2libGluZykub2Zmc2V0UGFyZW50O1xuICB9XG5cbiAgdmFyIG5vZGVOYW1lID0gb2Zmc2V0UGFyZW50ICYmIG9mZnNldFBhcmVudC5ub2RlTmFtZTtcblxuICBpZiAoIW5vZGVOYW1lIHx8IG5vZGVOYW1lID09PSAnQk9EWScgfHwgbm9kZU5hbWUgPT09ICdIVE1MJykge1xuICAgIHJldHVybiBlbGVtZW50ID8gZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCA6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgfVxuXG4gIC8vIC5vZmZzZXRQYXJlbnQgd2lsbCByZXR1cm4gdGhlIGNsb3Nlc3QgVEgsIFREIG9yIFRBQkxFIGluIGNhc2VcbiAgLy8gbm8gb2Zmc2V0UGFyZW50IGlzIHByZXNlbnQsIEkgaGF0ZSB0aGlzIGpvYi4uLlxuICBpZiAoWydUSCcsICdURCcsICdUQUJMRSddLmluZGV4T2Yob2Zmc2V0UGFyZW50Lm5vZGVOYW1lKSAhPT0gLTEgJiYgZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KG9mZnNldFBhcmVudCwgJ3Bvc2l0aW9uJykgPT09ICdzdGF0aWMnKSB7XG4gICAgcmV0dXJuIGdldE9mZnNldFBhcmVudChvZmZzZXRQYXJlbnQpO1xuICB9XG5cbiAgcmV0dXJuIG9mZnNldFBhcmVudDtcbn1cblxuZnVuY3Rpb24gaXNPZmZzZXRDb250YWluZXIoZWxlbWVudCkge1xuICB2YXIgbm9kZU5hbWUgPSBlbGVtZW50Lm5vZGVOYW1lO1xuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0JPRFknKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiBub2RlTmFtZSA9PT0gJ0hUTUwnIHx8IGdldE9mZnNldFBhcmVudChlbGVtZW50LmZpcnN0RWxlbWVudENoaWxkKSA9PT0gZWxlbWVudDtcbn1cblxuLyoqXG4gKiBGaW5kcyB0aGUgcm9vdCBub2RlIChkb2N1bWVudCwgc2hhZG93RE9NIHJvb3QpIG9mIHRoZSBnaXZlbiBlbGVtZW50XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IG5vZGVcbiAqIEByZXR1cm5zIHtFbGVtZW50fSByb290IG5vZGVcbiAqL1xuZnVuY3Rpb24gZ2V0Um9vdChub2RlKSB7XG4gIGlmIChub2RlLnBhcmVudE5vZGUgIT09IG51bGwpIHtcbiAgICByZXR1cm4gZ2V0Um9vdChub2RlLnBhcmVudE5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIG5vZGU7XG59XG5cbi8qKlxuICogRmluZHMgdGhlIG9mZnNldCBwYXJlbnQgY29tbW9uIHRvIHRoZSB0d28gcHJvdmlkZWQgbm9kZXNcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudDFcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudDJcbiAqIEByZXR1cm5zIHtFbGVtZW50fSBjb21tb24gb2Zmc2V0IHBhcmVudFxuICovXG5mdW5jdGlvbiBmaW5kQ29tbW9uT2Zmc2V0UGFyZW50KGVsZW1lbnQxLCBlbGVtZW50Mikge1xuICAvLyBUaGlzIGNoZWNrIGlzIG5lZWRlZCB0byBhdm9pZCBlcnJvcnMgaW4gY2FzZSBvbmUgb2YgdGhlIGVsZW1lbnRzIGlzbid0IGRlZmluZWQgZm9yIGFueSByZWFzb25cbiAgaWYgKCFlbGVtZW50MSB8fCAhZWxlbWVudDEubm9kZVR5cGUgfHwgIWVsZW1lbnQyIHx8ICFlbGVtZW50Mi5ub2RlVHlwZSkge1xuICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIH1cblxuICAvLyBIZXJlIHdlIG1ha2Ugc3VyZSB0byBnaXZlIGFzIFwic3RhcnRcIiB0aGUgZWxlbWVudCB0aGF0IGNvbWVzIGZpcnN0IGluIHRoZSBET01cbiAgdmFyIG9yZGVyID0gZWxlbWVudDEuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZWxlbWVudDIpICYgTm9kZS5ET0NVTUVOVF9QT1NJVElPTl9GT0xMT1dJTkc7XG4gIHZhciBzdGFydCA9IG9yZGVyID8gZWxlbWVudDEgOiBlbGVtZW50MjtcbiAgdmFyIGVuZCA9IG9yZGVyID8gZWxlbWVudDIgOiBlbGVtZW50MTtcblxuICAvLyBHZXQgY29tbW9uIGFuY2VzdG9yIGNvbnRhaW5lclxuICB2YXIgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICByYW5nZS5zZXRTdGFydChzdGFydCwgMCk7XG4gIHJhbmdlLnNldEVuZChlbmQsIDApO1xuICB2YXIgY29tbW9uQW5jZXN0b3JDb250YWluZXIgPSByYW5nZS5jb21tb25BbmNlc3RvckNvbnRhaW5lcjtcblxuICAvLyBCb3RoIG5vZGVzIGFyZSBpbnNpZGUgI2RvY3VtZW50XG5cbiAgaWYgKGVsZW1lbnQxICE9PSBjb21tb25BbmNlc3RvckNvbnRhaW5lciAmJiBlbGVtZW50MiAhPT0gY29tbW9uQW5jZXN0b3JDb250YWluZXIgfHwgc3RhcnQuY29udGFpbnMoZW5kKSkge1xuICAgIGlmIChpc09mZnNldENvbnRhaW5lcihjb21tb25BbmNlc3RvckNvbnRhaW5lcikpIHtcbiAgICAgIHJldHVybiBjb21tb25BbmNlc3RvckNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2V0T2Zmc2V0UGFyZW50KGNvbW1vbkFuY2VzdG9yQ29udGFpbmVyKTtcbiAgfVxuXG4gIC8vIG9uZSBvZiB0aGUgbm9kZXMgaXMgaW5zaWRlIHNoYWRvd0RPTSwgZmluZCB3aGljaCBvbmVcbiAgdmFyIGVsZW1lbnQxcm9vdCA9IGdldFJvb3QoZWxlbWVudDEpO1xuICBpZiAoZWxlbWVudDFyb290Lmhvc3QpIHtcbiAgICByZXR1cm4gZmluZENvbW1vbk9mZnNldFBhcmVudChlbGVtZW50MXJvb3QuaG9zdCwgZWxlbWVudDIpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmaW5kQ29tbW9uT2Zmc2V0UGFyZW50KGVsZW1lbnQxLCBnZXRSb290KGVsZW1lbnQyKS5ob3N0KTtcbiAgfVxufVxuXG4vKipcbiAqIEdldHMgdGhlIHNjcm9sbCB2YWx1ZSBvZiB0aGUgZ2l2ZW4gZWxlbWVudCBpbiB0aGUgZ2l2ZW4gc2lkZSAodG9wIGFuZCBsZWZ0KVxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50XG4gKiBAYXJndW1lbnQge1N0cmluZ30gc2lkZSBgdG9wYCBvciBgbGVmdGBcbiAqIEByZXR1cm5zIHtudW1iZXJ9IGFtb3VudCBvZiBzY3JvbGxlZCBwaXhlbHNcbiAqL1xuZnVuY3Rpb24gZ2V0U2Nyb2xsKGVsZW1lbnQpIHtcbiAgdmFyIHNpZGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICd0b3AnO1xuXG4gIHZhciB1cHBlclNpZGUgPSBzaWRlID09PSAndG9wJyA/ICdzY3JvbGxUb3AnIDogJ3Njcm9sbExlZnQnO1xuICB2YXIgbm9kZU5hbWUgPSBlbGVtZW50Lm5vZGVOYW1lO1xuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0JPRFknIHx8IG5vZGVOYW1lID09PSAnSFRNTCcpIHtcbiAgICB2YXIgaHRtbCA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgdmFyIHNjcm9sbGluZ0VsZW1lbnQgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudCB8fCBodG1sO1xuICAgIHJldHVybiBzY3JvbGxpbmdFbGVtZW50W3VwcGVyU2lkZV07XG4gIH1cblxuICByZXR1cm4gZWxlbWVudFt1cHBlclNpZGVdO1xufVxuXG4vKlxuICogU3VtIG9yIHN1YnRyYWN0IHRoZSBlbGVtZW50IHNjcm9sbCB2YWx1ZXMgKGxlZnQgYW5kIHRvcCkgZnJvbSBhIGdpdmVuIHJlY3Qgb2JqZWN0XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcGFyYW0ge09iamVjdH0gcmVjdCAtIFJlY3Qgb2JqZWN0IHlvdSB3YW50IHRvIGNoYW5nZVxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIFRoZSBlbGVtZW50IGZyb20gdGhlIGZ1bmN0aW9uIHJlYWRzIHRoZSBzY3JvbGwgdmFsdWVzXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHN1YnRyYWN0IC0gc2V0IHRvIHRydWUgaWYgeW91IHdhbnQgdG8gc3VidHJhY3QgdGhlIHNjcm9sbCB2YWx1ZXNcbiAqIEByZXR1cm4ge09iamVjdH0gcmVjdCAtIFRoZSBtb2RpZmllciByZWN0IG9iamVjdFxuICovXG5mdW5jdGlvbiBpbmNsdWRlU2Nyb2xsKHJlY3QsIGVsZW1lbnQpIHtcbiAgdmFyIHN1YnRyYWN0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBmYWxzZTtcblxuICB2YXIgc2Nyb2xsVG9wID0gZ2V0U2Nyb2xsKGVsZW1lbnQsICd0b3AnKTtcbiAgdmFyIHNjcm9sbExlZnQgPSBnZXRTY3JvbGwoZWxlbWVudCwgJ2xlZnQnKTtcbiAgdmFyIG1vZGlmaWVyID0gc3VidHJhY3QgPyAtMSA6IDE7XG4gIHJlY3QudG9wICs9IHNjcm9sbFRvcCAqIG1vZGlmaWVyO1xuICByZWN0LmJvdHRvbSArPSBzY3JvbGxUb3AgKiBtb2RpZmllcjtcbiAgcmVjdC5sZWZ0ICs9IHNjcm9sbExlZnQgKiBtb2RpZmllcjtcbiAgcmVjdC5yaWdodCArPSBzY3JvbGxMZWZ0ICogbW9kaWZpZXI7XG4gIHJldHVybiByZWN0O1xufVxuXG4vKlxuICogSGVscGVyIHRvIGRldGVjdCBib3JkZXJzIG9mIGEgZ2l2ZW4gZWxlbWVudFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtDU1NTdHlsZURlY2xhcmF0aW9ufSBzdHlsZXNcbiAqIFJlc3VsdCBvZiBgZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5YCBvbiB0aGUgZ2l2ZW4gZWxlbWVudFxuICogQHBhcmFtIHtTdHJpbmd9IGF4aXMgLSBgeGAgb3IgYHlgXG4gKiBAcmV0dXJuIHtudW1iZXJ9IGJvcmRlcnMgLSBUaGUgYm9yZGVycyBzaXplIG9mIHRoZSBnaXZlbiBheGlzXG4gKi9cblxuZnVuY3Rpb24gZ2V0Qm9yZGVyc1NpemUoc3R5bGVzLCBheGlzKSB7XG4gIHZhciBzaWRlQSA9IGF4aXMgPT09ICd4JyA/ICdMZWZ0JyA6ICdUb3AnO1xuICB2YXIgc2lkZUIgPSBzaWRlQSA9PT0gJ0xlZnQnID8gJ1JpZ2h0JyA6ICdCb3R0b20nO1xuXG4gIHJldHVybiBwYXJzZUZsb2F0KHN0eWxlc1snYm9yZGVyJyArIHNpZGVBICsgJ1dpZHRoJ10pICsgcGFyc2VGbG9hdChzdHlsZXNbJ2JvcmRlcicgKyBzaWRlQiArICdXaWR0aCddKTtcbn1cblxuZnVuY3Rpb24gZ2V0U2l6ZShheGlzLCBib2R5LCBodG1sLCBjb21wdXRlZFN0eWxlKSB7XG4gIHJldHVybiBNYXRoLm1heChib2R5WydvZmZzZXQnICsgYXhpc10sIGJvZHlbJ3Njcm9sbCcgKyBheGlzXSwgaHRtbFsnY2xpZW50JyArIGF4aXNdLCBodG1sWydvZmZzZXQnICsgYXhpc10sIGh0bWxbJ3Njcm9sbCcgKyBheGlzXSwgaXNJRSgxMCkgPyBwYXJzZUludChodG1sWydvZmZzZXQnICsgYXhpc10pICsgcGFyc2VJbnQoY29tcHV0ZWRTdHlsZVsnbWFyZ2luJyArIChheGlzID09PSAnSGVpZ2h0JyA/ICdUb3AnIDogJ0xlZnQnKV0pICsgcGFyc2VJbnQoY29tcHV0ZWRTdHlsZVsnbWFyZ2luJyArIChheGlzID09PSAnSGVpZ2h0JyA/ICdCb3R0b20nIDogJ1JpZ2h0JyldKSA6IDApO1xufVxuXG5mdW5jdGlvbiBnZXRXaW5kb3dTaXplcyhkb2N1bWVudCkge1xuICB2YXIgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gIHZhciBodG1sID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICB2YXIgY29tcHV0ZWRTdHlsZSA9IGlzSUUoMTApICYmIGdldENvbXB1dGVkU3R5bGUoaHRtbCk7XG5cbiAgcmV0dXJuIHtcbiAgICBoZWlnaHQ6IGdldFNpemUoJ0hlaWdodCcsIGJvZHksIGh0bWwsIGNvbXB1dGVkU3R5bGUpLFxuICAgIHdpZHRoOiBnZXRTaXplKCdXaWR0aCcsIGJvZHksIGh0bWwsIGNvbXB1dGVkU3R5bGUpXG4gIH07XG59XG5cbnZhciBjbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG52YXIgY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7XG5cblxuXG5cblxudmFyIGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gKG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59O1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxuLyoqXG4gKiBHaXZlbiBlbGVtZW50IG9mZnNldHMsIGdlbmVyYXRlIGFuIG91dHB1dCBzaW1pbGFyIHRvIGdldEJvdW5kaW5nQ2xpZW50UmVjdFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IG9mZnNldHNcbiAqIEByZXR1cm5zIHtPYmplY3R9IENsaWVudFJlY3QgbGlrZSBvdXRwdXRcbiAqL1xuZnVuY3Rpb24gZ2V0Q2xpZW50UmVjdChvZmZzZXRzKSB7XG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgb2Zmc2V0cywge1xuICAgIHJpZ2h0OiBvZmZzZXRzLmxlZnQgKyBvZmZzZXRzLndpZHRoLFxuICAgIGJvdHRvbTogb2Zmc2V0cy50b3AgKyBvZmZzZXRzLmhlaWdodFxuICB9KTtcbn1cblxuLyoqXG4gKiBHZXQgYm91bmRpbmcgY2xpZW50IHJlY3Qgb2YgZ2l2ZW4gZWxlbWVudFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICogQHJldHVybiB7T2JqZWN0fSBjbGllbnQgcmVjdFxuICovXG5mdW5jdGlvbiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCkge1xuICB2YXIgcmVjdCA9IHt9O1xuXG4gIC8vIElFMTAgMTAgRklYOiBQbGVhc2UsIGRvbid0IGFzaywgdGhlIGVsZW1lbnQgaXNuJ3RcbiAgLy8gY29uc2lkZXJlZCBpbiBET00gaW4gc29tZSBjaXJjdW1zdGFuY2VzLi4uXG4gIC8vIFRoaXMgaXNuJ3QgcmVwcm9kdWNpYmxlIGluIElFMTAgY29tcGF0aWJpbGl0eSBtb2RlIG9mIElFMTFcbiAgdHJ5IHtcbiAgICBpZiAoaXNJRSgxMCkpIHtcbiAgICAgIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgdmFyIHNjcm9sbFRvcCA9IGdldFNjcm9sbChlbGVtZW50LCAndG9wJyk7XG4gICAgICB2YXIgc2Nyb2xsTGVmdCA9IGdldFNjcm9sbChlbGVtZW50LCAnbGVmdCcpO1xuICAgICAgcmVjdC50b3AgKz0gc2Nyb2xsVG9wO1xuICAgICAgcmVjdC5sZWZ0ICs9IHNjcm9sbExlZnQ7XG4gICAgICByZWN0LmJvdHRvbSArPSBzY3JvbGxUb3A7XG4gICAgICByZWN0LnJpZ2h0ICs9IHNjcm9sbExlZnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0ge1xuICAgIGxlZnQ6IHJlY3QubGVmdCxcbiAgICB0b3A6IHJlY3QudG9wLFxuICAgIHdpZHRoOiByZWN0LnJpZ2h0IC0gcmVjdC5sZWZ0LFxuICAgIGhlaWdodDogcmVjdC5ib3R0b20gLSByZWN0LnRvcFxuICB9O1xuXG4gIC8vIHN1YnRyYWN0IHNjcm9sbGJhciBzaXplIGZyb20gc2l6ZXNcbiAgdmFyIHNpemVzID0gZWxlbWVudC5ub2RlTmFtZSA9PT0gJ0hUTUwnID8gZ2V0V2luZG93U2l6ZXMoZWxlbWVudC5vd25lckRvY3VtZW50KSA6IHt9O1xuICB2YXIgd2lkdGggPSBzaXplcy53aWR0aCB8fCBlbGVtZW50LmNsaWVudFdpZHRoIHx8IHJlc3VsdC53aWR0aDtcbiAgdmFyIGhlaWdodCA9IHNpemVzLmhlaWdodCB8fCBlbGVtZW50LmNsaWVudEhlaWdodCB8fCByZXN1bHQuaGVpZ2h0O1xuXG4gIHZhciBob3JpelNjcm9sbGJhciA9IGVsZW1lbnQub2Zmc2V0V2lkdGggLSB3aWR0aDtcbiAgdmFyIHZlcnRTY3JvbGxiYXIgPSBlbGVtZW50Lm9mZnNldEhlaWdodCAtIGhlaWdodDtcblxuICAvLyBpZiBhbiBoeXBvdGhldGljYWwgc2Nyb2xsYmFyIGlzIGRldGVjdGVkLCB3ZSBtdXN0IGJlIHN1cmUgaXQncyBub3QgYSBgYm9yZGVyYFxuICAvLyB3ZSBtYWtlIHRoaXMgY2hlY2sgY29uZGl0aW9uYWwgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnNcbiAgaWYgKGhvcml6U2Nyb2xsYmFyIHx8IHZlcnRTY3JvbGxiYXIpIHtcbiAgICB2YXIgc3R5bGVzID0gZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGVsZW1lbnQpO1xuICAgIGhvcml6U2Nyb2xsYmFyIC09IGdldEJvcmRlcnNTaXplKHN0eWxlcywgJ3gnKTtcbiAgICB2ZXJ0U2Nyb2xsYmFyIC09IGdldEJvcmRlcnNTaXplKHN0eWxlcywgJ3knKTtcblxuICAgIHJlc3VsdC53aWR0aCAtPSBob3JpelNjcm9sbGJhcjtcbiAgICByZXN1bHQuaGVpZ2h0IC09IHZlcnRTY3JvbGxiYXI7XG4gIH1cblxuICByZXR1cm4gZ2V0Q2xpZW50UmVjdChyZXN1bHQpO1xufVxuXG5mdW5jdGlvbiBnZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUoY2hpbGRyZW4sIHBhcmVudCkge1xuICB2YXIgZml4ZWRQb3NpdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogZmFsc2U7XG5cbiAgdmFyIGlzSUUxMCA9IGlzSUUoMTApO1xuICB2YXIgaXNIVE1MID0gcGFyZW50Lm5vZGVOYW1lID09PSAnSFRNTCc7XG4gIHZhciBjaGlsZHJlblJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoY2hpbGRyZW4pO1xuICB2YXIgcGFyZW50UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChwYXJlbnQpO1xuICB2YXIgc2Nyb2xsUGFyZW50ID0gZ2V0U2Nyb2xsUGFyZW50KGNoaWxkcmVuKTtcblxuICB2YXIgc3R5bGVzID0gZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KHBhcmVudCk7XG4gIHZhciBib3JkZXJUb3BXaWR0aCA9IHBhcnNlRmxvYXQoc3R5bGVzLmJvcmRlclRvcFdpZHRoKTtcbiAgdmFyIGJvcmRlckxlZnRXaWR0aCA9IHBhcnNlRmxvYXQoc3R5bGVzLmJvcmRlckxlZnRXaWR0aCk7XG5cbiAgLy8gSW4gY2FzZXMgd2hlcmUgdGhlIHBhcmVudCBpcyBmaXhlZCwgd2UgbXVzdCBpZ25vcmUgbmVnYXRpdmUgc2Nyb2xsIGluIG9mZnNldCBjYWxjXG4gIGlmIChmaXhlZFBvc2l0aW9uICYmIGlzSFRNTCkge1xuICAgIHBhcmVudFJlY3QudG9wID0gTWF0aC5tYXgocGFyZW50UmVjdC50b3AsIDApO1xuICAgIHBhcmVudFJlY3QubGVmdCA9IE1hdGgubWF4KHBhcmVudFJlY3QubGVmdCwgMCk7XG4gIH1cbiAgdmFyIG9mZnNldHMgPSBnZXRDbGllbnRSZWN0KHtcbiAgICB0b3A6IGNoaWxkcmVuUmVjdC50b3AgLSBwYXJlbnRSZWN0LnRvcCAtIGJvcmRlclRvcFdpZHRoLFxuICAgIGxlZnQ6IGNoaWxkcmVuUmVjdC5sZWZ0IC0gcGFyZW50UmVjdC5sZWZ0IC0gYm9yZGVyTGVmdFdpZHRoLFxuICAgIHdpZHRoOiBjaGlsZHJlblJlY3Qud2lkdGgsXG4gICAgaGVpZ2h0OiBjaGlsZHJlblJlY3QuaGVpZ2h0XG4gIH0pO1xuICBvZmZzZXRzLm1hcmdpblRvcCA9IDA7XG4gIG9mZnNldHMubWFyZ2luTGVmdCA9IDA7XG5cbiAgLy8gU3VidHJhY3QgbWFyZ2lucyBvZiBkb2N1bWVudEVsZW1lbnQgaW4gY2FzZSBpdCdzIGJlaW5nIHVzZWQgYXMgcGFyZW50XG4gIC8vIHdlIGRvIHRoaXMgb25seSBvbiBIVE1MIGJlY2F1c2UgaXQncyB0aGUgb25seSBlbGVtZW50IHRoYXQgYmVoYXZlc1xuICAvLyBkaWZmZXJlbnRseSB3aGVuIG1hcmdpbnMgYXJlIGFwcGxpZWQgdG8gaXQuIFRoZSBtYXJnaW5zIGFyZSBpbmNsdWRlZCBpblxuICAvLyB0aGUgYm94IG9mIHRoZSBkb2N1bWVudEVsZW1lbnQsIGluIHRoZSBvdGhlciBjYXNlcyBub3QuXG4gIGlmICghaXNJRTEwICYmIGlzSFRNTCkge1xuICAgIHZhciBtYXJnaW5Ub3AgPSBwYXJzZUZsb2F0KHN0eWxlcy5tYXJnaW5Ub3ApO1xuICAgIHZhciBtYXJnaW5MZWZ0ID0gcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luTGVmdCk7XG5cbiAgICBvZmZzZXRzLnRvcCAtPSBib3JkZXJUb3BXaWR0aCAtIG1hcmdpblRvcDtcbiAgICBvZmZzZXRzLmJvdHRvbSAtPSBib3JkZXJUb3BXaWR0aCAtIG1hcmdpblRvcDtcbiAgICBvZmZzZXRzLmxlZnQgLT0gYm9yZGVyTGVmdFdpZHRoIC0gbWFyZ2luTGVmdDtcbiAgICBvZmZzZXRzLnJpZ2h0IC09IGJvcmRlckxlZnRXaWR0aCAtIG1hcmdpbkxlZnQ7XG5cbiAgICAvLyBBdHRhY2ggbWFyZ2luVG9wIGFuZCBtYXJnaW5MZWZ0IGJlY2F1c2UgaW4gc29tZSBjaXJjdW1zdGFuY2VzIHdlIG1heSBuZWVkIHRoZW1cbiAgICBvZmZzZXRzLm1hcmdpblRvcCA9IG1hcmdpblRvcDtcbiAgICBvZmZzZXRzLm1hcmdpbkxlZnQgPSBtYXJnaW5MZWZ0O1xuICB9XG5cbiAgaWYgKGlzSUUxMCAmJiAhZml4ZWRQb3NpdGlvbiA/IHBhcmVudC5jb250YWlucyhzY3JvbGxQYXJlbnQpIDogcGFyZW50ID09PSBzY3JvbGxQYXJlbnQgJiYgc2Nyb2xsUGFyZW50Lm5vZGVOYW1lICE9PSAnQk9EWScpIHtcbiAgICBvZmZzZXRzID0gaW5jbHVkZVNjcm9sbChvZmZzZXRzLCBwYXJlbnQpO1xuICB9XG5cbiAgcmV0dXJuIG9mZnNldHM7XG59XG5cbmZ1bmN0aW9uIGdldFZpZXdwb3J0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcnRiaXRyYXJ5Tm9kZShlbGVtZW50KSB7XG4gIHZhciBleGNsdWRlU2Nyb2xsID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcblxuICB2YXIgaHRtbCA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIHZhciByZWxhdGl2ZU9mZnNldCA9IGdldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZShlbGVtZW50LCBodG1sKTtcbiAgdmFyIHdpZHRoID0gTWF0aC5tYXgoaHRtbC5jbGllbnRXaWR0aCwgd2luZG93LmlubmVyV2lkdGggfHwgMCk7XG4gIHZhciBoZWlnaHQgPSBNYXRoLm1heChodG1sLmNsaWVudEhlaWdodCwgd2luZG93LmlubmVySGVpZ2h0IHx8IDApO1xuXG4gIHZhciBzY3JvbGxUb3AgPSAhZXhjbHVkZVNjcm9sbCA/IGdldFNjcm9sbChodG1sKSA6IDA7XG4gIHZhciBzY3JvbGxMZWZ0ID0gIWV4Y2x1ZGVTY3JvbGwgPyBnZXRTY3JvbGwoaHRtbCwgJ2xlZnQnKSA6IDA7XG5cbiAgdmFyIG9mZnNldCA9IHtcbiAgICB0b3A6IHNjcm9sbFRvcCAtIHJlbGF0aXZlT2Zmc2V0LnRvcCArIHJlbGF0aXZlT2Zmc2V0Lm1hcmdpblRvcCxcbiAgICBsZWZ0OiBzY3JvbGxMZWZ0IC0gcmVsYXRpdmVPZmZzZXQubGVmdCArIHJlbGF0aXZlT2Zmc2V0Lm1hcmdpbkxlZnQsXG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0XG4gIH07XG5cbiAgcmV0dXJuIGdldENsaWVudFJlY3Qob2Zmc2V0KTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgZ2l2ZW4gZWxlbWVudCBpcyBmaXhlZCBvciBpcyBpbnNpZGUgYSBmaXhlZCBwYXJlbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudFxuICogQGFyZ3VtZW50IHtFbGVtZW50fSBjdXN0b21Db250YWluZXJcbiAqIEByZXR1cm5zIHtCb29sZWFufSBhbnN3ZXIgdG8gXCJpc0ZpeGVkP1wiXG4gKi9cbmZ1bmN0aW9uIGlzRml4ZWQoZWxlbWVudCkge1xuICB2YXIgbm9kZU5hbWUgPSBlbGVtZW50Lm5vZGVOYW1lO1xuICBpZiAobm9kZU5hbWUgPT09ICdCT0RZJyB8fCBub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkoZWxlbWVudCwgJ3Bvc2l0aW9uJykgPT09ICdmaXhlZCcpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICB2YXIgcGFyZW50Tm9kZSA9IGdldFBhcmVudE5vZGUoZWxlbWVudCk7XG4gIGlmICghcGFyZW50Tm9kZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gaXNGaXhlZChwYXJlbnROb2RlKTtcbn1cblxuLyoqXG4gKiBGaW5kcyB0aGUgZmlyc3QgcGFyZW50IG9mIGFuIGVsZW1lbnQgdGhhdCBoYXMgYSB0cmFuc2Zvcm1lZCBwcm9wZXJ0eSBkZWZpbmVkXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm5zIHtFbGVtZW50fSBmaXJzdCB0cmFuc2Zvcm1lZCBwYXJlbnQgb3IgZG9jdW1lbnRFbGVtZW50XG4gKi9cblxuZnVuY3Rpb24gZ2V0Rml4ZWRQb3NpdGlvbk9mZnNldFBhcmVudChlbGVtZW50KSB7XG4gIC8vIFRoaXMgY2hlY2sgaXMgbmVlZGVkIHRvIGF2b2lkIGVycm9ycyBpbiBjYXNlIG9uZSBvZiB0aGUgZWxlbWVudHMgaXNuJ3QgZGVmaW5lZCBmb3IgYW55IHJlYXNvblxuICBpZiAoIWVsZW1lbnQgfHwgIWVsZW1lbnQucGFyZW50RWxlbWVudCB8fCBpc0lFKCkpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICB9XG4gIHZhciBlbCA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgd2hpbGUgKGVsICYmIGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShlbCwgJ3RyYW5zZm9ybScpID09PSAnbm9uZScpIHtcbiAgICBlbCA9IGVsLnBhcmVudEVsZW1lbnQ7XG4gIH1cbiAgcmV0dXJuIGVsIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbn1cblxuLyoqXG4gKiBDb21wdXRlZCB0aGUgYm91bmRhcmllcyBsaW1pdHMgYW5kIHJldHVybiB0aGVtXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwb3BwZXJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHJlZmVyZW5jZVxuICogQHBhcmFtIHtudW1iZXJ9IHBhZGRpbmdcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGJvdW5kYXJpZXNFbGVtZW50IC0gRWxlbWVudCB1c2VkIHRvIGRlZmluZSB0aGUgYm91bmRhcmllc1xuICogQHBhcmFtIHtCb29sZWFufSBmaXhlZFBvc2l0aW9uIC0gSXMgaW4gZml4ZWQgcG9zaXRpb24gbW9kZVxuICogQHJldHVybnMge09iamVjdH0gQ29vcmRpbmF0ZXMgb2YgdGhlIGJvdW5kYXJpZXNcbiAqL1xuZnVuY3Rpb24gZ2V0Qm91bmRhcmllcyhwb3BwZXIsIHJlZmVyZW5jZSwgcGFkZGluZywgYm91bmRhcmllc0VsZW1lbnQpIHtcbiAgdmFyIGZpeGVkUG9zaXRpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gNCAmJiBhcmd1bWVudHNbNF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s0XSA6IGZhbHNlO1xuXG4gIC8vIE5PVEU6IDEgRE9NIGFjY2VzcyBoZXJlXG5cbiAgdmFyIGJvdW5kYXJpZXMgPSB7IHRvcDogMCwgbGVmdDogMCB9O1xuICB2YXIgb2Zmc2V0UGFyZW50ID0gZml4ZWRQb3NpdGlvbiA/IGdldEZpeGVkUG9zaXRpb25PZmZzZXRQYXJlbnQocG9wcGVyKSA6IGZpbmRDb21tb25PZmZzZXRQYXJlbnQocG9wcGVyLCBnZXRSZWZlcmVuY2VOb2RlKHJlZmVyZW5jZSkpO1xuXG4gIC8vIEhhbmRsZSB2aWV3cG9ydCBjYXNlXG4gIGlmIChib3VuZGFyaWVzRWxlbWVudCA9PT0gJ3ZpZXdwb3J0Jykge1xuICAgIGJvdW5kYXJpZXMgPSBnZXRWaWV3cG9ydE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJ0Yml0cmFyeU5vZGUob2Zmc2V0UGFyZW50LCBmaXhlZFBvc2l0aW9uKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBIYW5kbGUgb3RoZXIgY2FzZXMgYmFzZWQgb24gRE9NIGVsZW1lbnQgdXNlZCBhcyBib3VuZGFyaWVzXG4gICAgdmFyIGJvdW5kYXJpZXNOb2RlID0gdm9pZCAwO1xuICAgIGlmIChib3VuZGFyaWVzRWxlbWVudCA9PT0gJ3Njcm9sbFBhcmVudCcpIHtcbiAgICAgIGJvdW5kYXJpZXNOb2RlID0gZ2V0U2Nyb2xsUGFyZW50KGdldFBhcmVudE5vZGUocmVmZXJlbmNlKSk7XG4gICAgICBpZiAoYm91bmRhcmllc05vZGUubm9kZU5hbWUgPT09ICdCT0RZJykge1xuICAgICAgICBib3VuZGFyaWVzTm9kZSA9IHBvcHBlci5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGJvdW5kYXJpZXNFbGVtZW50ID09PSAnd2luZG93Jykge1xuICAgICAgYm91bmRhcmllc05vZGUgPSBwb3BwZXIub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJvdW5kYXJpZXNOb2RlID0gYm91bmRhcmllc0VsZW1lbnQ7XG4gICAgfVxuXG4gICAgdmFyIG9mZnNldHMgPSBnZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUoYm91bmRhcmllc05vZGUsIG9mZnNldFBhcmVudCwgZml4ZWRQb3NpdGlvbik7XG5cbiAgICAvLyBJbiBjYXNlIG9mIEhUTUwsIHdlIG5lZWQgYSBkaWZmZXJlbnQgY29tcHV0YXRpb25cbiAgICBpZiAoYm91bmRhcmllc05vZGUubm9kZU5hbWUgPT09ICdIVE1MJyAmJiAhaXNGaXhlZChvZmZzZXRQYXJlbnQpKSB7XG4gICAgICB2YXIgX2dldFdpbmRvd1NpemVzID0gZ2V0V2luZG93U2l6ZXMocG9wcGVyLm93bmVyRG9jdW1lbnQpLFxuICAgICAgICAgIGhlaWdodCA9IF9nZXRXaW5kb3dTaXplcy5oZWlnaHQsXG4gICAgICAgICAgd2lkdGggPSBfZ2V0V2luZG93U2l6ZXMud2lkdGg7XG5cbiAgICAgIGJvdW5kYXJpZXMudG9wICs9IG9mZnNldHMudG9wIC0gb2Zmc2V0cy5tYXJnaW5Ub3A7XG4gICAgICBib3VuZGFyaWVzLmJvdHRvbSA9IGhlaWdodCArIG9mZnNldHMudG9wO1xuICAgICAgYm91bmRhcmllcy5sZWZ0ICs9IG9mZnNldHMubGVmdCAtIG9mZnNldHMubWFyZ2luTGVmdDtcbiAgICAgIGJvdW5kYXJpZXMucmlnaHQgPSB3aWR0aCArIG9mZnNldHMubGVmdDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZm9yIGFsbCB0aGUgb3RoZXIgRE9NIGVsZW1lbnRzLCB0aGlzIG9uZSBpcyBnb29kXG4gICAgICBib3VuZGFyaWVzID0gb2Zmc2V0cztcbiAgICB9XG4gIH1cblxuICAvLyBBZGQgcGFkZGluZ3NcbiAgcGFkZGluZyA9IHBhZGRpbmcgfHwgMDtcbiAgdmFyIGlzUGFkZGluZ051bWJlciA9IHR5cGVvZiBwYWRkaW5nID09PSAnbnVtYmVyJztcbiAgYm91bmRhcmllcy5sZWZ0ICs9IGlzUGFkZGluZ051bWJlciA/IHBhZGRpbmcgOiBwYWRkaW5nLmxlZnQgfHwgMDtcbiAgYm91bmRhcmllcy50b3AgKz0gaXNQYWRkaW5nTnVtYmVyID8gcGFkZGluZyA6IHBhZGRpbmcudG9wIHx8IDA7XG4gIGJvdW5kYXJpZXMucmlnaHQgLT0gaXNQYWRkaW5nTnVtYmVyID8gcGFkZGluZyA6IHBhZGRpbmcucmlnaHQgfHwgMDtcbiAgYm91bmRhcmllcy5ib3R0b20gLT0gaXNQYWRkaW5nTnVtYmVyID8gcGFkZGluZyA6IHBhZGRpbmcuYm90dG9tIHx8IDA7XG5cbiAgcmV0dXJuIGJvdW5kYXJpZXM7XG59XG5cbmZ1bmN0aW9uIGdldEFyZWEoX3JlZikge1xuICB2YXIgd2lkdGggPSBfcmVmLndpZHRoLFxuICAgICAgaGVpZ2h0ID0gX3JlZi5oZWlnaHQ7XG5cbiAgcmV0dXJuIHdpZHRoICogaGVpZ2h0O1xufVxuXG4vKipcbiAqIFV0aWxpdHkgdXNlZCB0byB0cmFuc2Zvcm0gdGhlIGBhdXRvYCBwbGFjZW1lbnQgdG8gdGhlIHBsYWNlbWVudCB3aXRoIG1vcmVcbiAqIGF2YWlsYWJsZSBzcGFjZS5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSB1cGRhdGUgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cbmZ1bmN0aW9uIGNvbXB1dGVBdXRvUGxhY2VtZW50KHBsYWNlbWVudCwgcmVmUmVjdCwgcG9wcGVyLCByZWZlcmVuY2UsIGJvdW5kYXJpZXNFbGVtZW50KSB7XG4gIHZhciBwYWRkaW5nID0gYXJndW1lbnRzLmxlbmd0aCA+IDUgJiYgYXJndW1lbnRzWzVdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNV0gOiAwO1xuXG4gIGlmIChwbGFjZW1lbnQuaW5kZXhPZignYXV0bycpID09PSAtMSkge1xuICAgIHJldHVybiBwbGFjZW1lbnQ7XG4gIH1cblxuICB2YXIgYm91bmRhcmllcyA9IGdldEJvdW5kYXJpZXMocG9wcGVyLCByZWZlcmVuY2UsIHBhZGRpbmcsIGJvdW5kYXJpZXNFbGVtZW50KTtcblxuICB2YXIgcmVjdHMgPSB7XG4gICAgdG9wOiB7XG4gICAgICB3aWR0aDogYm91bmRhcmllcy53aWR0aCxcbiAgICAgIGhlaWdodDogcmVmUmVjdC50b3AgLSBib3VuZGFyaWVzLnRvcFxuICAgIH0sXG4gICAgcmlnaHQ6IHtcbiAgICAgIHdpZHRoOiBib3VuZGFyaWVzLnJpZ2h0IC0gcmVmUmVjdC5yaWdodCxcbiAgICAgIGhlaWdodDogYm91bmRhcmllcy5oZWlnaHRcbiAgICB9LFxuICAgIGJvdHRvbToge1xuICAgICAgd2lkdGg6IGJvdW5kYXJpZXMud2lkdGgsXG4gICAgICBoZWlnaHQ6IGJvdW5kYXJpZXMuYm90dG9tIC0gcmVmUmVjdC5ib3R0b21cbiAgICB9LFxuICAgIGxlZnQ6IHtcbiAgICAgIHdpZHRoOiByZWZSZWN0LmxlZnQgLSBib3VuZGFyaWVzLmxlZnQsXG4gICAgICBoZWlnaHQ6IGJvdW5kYXJpZXMuaGVpZ2h0XG4gICAgfVxuICB9O1xuXG4gIHZhciBzb3J0ZWRBcmVhcyA9IE9iamVjdC5rZXlzKHJlY3RzKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICBrZXk6IGtleVxuICAgIH0sIHJlY3RzW2tleV0sIHtcbiAgICAgIGFyZWE6IGdldEFyZWEocmVjdHNba2V5XSlcbiAgICB9KTtcbiAgfSkuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBiLmFyZWEgLSBhLmFyZWE7XG4gIH0pO1xuXG4gIHZhciBmaWx0ZXJlZEFyZWFzID0gc29ydGVkQXJlYXMuZmlsdGVyKGZ1bmN0aW9uIChfcmVmMikge1xuICAgIHZhciB3aWR0aCA9IF9yZWYyLndpZHRoLFxuICAgICAgICBoZWlnaHQgPSBfcmVmMi5oZWlnaHQ7XG4gICAgcmV0dXJuIHdpZHRoID49IHBvcHBlci5jbGllbnRXaWR0aCAmJiBoZWlnaHQgPj0gcG9wcGVyLmNsaWVudEhlaWdodDtcbiAgfSk7XG5cbiAgdmFyIGNvbXB1dGVkUGxhY2VtZW50ID0gZmlsdGVyZWRBcmVhcy5sZW5ndGggPiAwID8gZmlsdGVyZWRBcmVhc1swXS5rZXkgOiBzb3J0ZWRBcmVhc1swXS5rZXk7XG5cbiAgdmFyIHZhcmlhdGlvbiA9IHBsYWNlbWVudC5zcGxpdCgnLScpWzFdO1xuXG4gIHJldHVybiBjb21wdXRlZFBsYWNlbWVudCArICh2YXJpYXRpb24gPyAnLScgKyB2YXJpYXRpb24gOiAnJyk7XG59XG5cbi8qKlxuICogR2V0IG9mZnNldHMgdG8gdGhlIHJlZmVyZW5jZSBlbGVtZW50XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7RWxlbWVudH0gcG9wcGVyIC0gdGhlIHBvcHBlciBlbGVtZW50XG4gKiBAcGFyYW0ge0VsZW1lbnR9IHJlZmVyZW5jZSAtIHRoZSByZWZlcmVuY2UgZWxlbWVudCAodGhlIHBvcHBlciB3aWxsIGJlIHJlbGF0aXZlIHRvIHRoaXMpXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGZpeGVkUG9zaXRpb24gLSBpcyBpbiBmaXhlZCBwb3NpdGlvbiBtb2RlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgb2Zmc2V0cyB3aGljaCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlclxuICovXG5mdW5jdGlvbiBnZXRSZWZlcmVuY2VPZmZzZXRzKHN0YXRlLCBwb3BwZXIsIHJlZmVyZW5jZSkge1xuICB2YXIgZml4ZWRQb3NpdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogbnVsbDtcblxuICB2YXIgY29tbW9uT2Zmc2V0UGFyZW50ID0gZml4ZWRQb3NpdGlvbiA/IGdldEZpeGVkUG9zaXRpb25PZmZzZXRQYXJlbnQocG9wcGVyKSA6IGZpbmRDb21tb25PZmZzZXRQYXJlbnQocG9wcGVyLCBnZXRSZWZlcmVuY2VOb2RlKHJlZmVyZW5jZSkpO1xuICByZXR1cm4gZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlKHJlZmVyZW5jZSwgY29tbW9uT2Zmc2V0UGFyZW50LCBmaXhlZFBvc2l0aW9uKTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIG91dGVyIHNpemVzIG9mIHRoZSBnaXZlbiBlbGVtZW50IChvZmZzZXQgc2l6ZSArIG1hcmdpbnMpXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm5zIHtPYmplY3R9IG9iamVjdCBjb250YWluaW5nIHdpZHRoIGFuZCBoZWlnaHQgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBnZXRPdXRlclNpemVzKGVsZW1lbnQpIHtcbiAgdmFyIHdpbmRvdyA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcbiAgdmFyIHN0eWxlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICB2YXIgeCA9IHBhcnNlRmxvYXQoc3R5bGVzLm1hcmdpblRvcCB8fCAwKSArIHBhcnNlRmxvYXQoc3R5bGVzLm1hcmdpbkJvdHRvbSB8fCAwKTtcbiAgdmFyIHkgPSBwYXJzZUZsb2F0KHN0eWxlcy5tYXJnaW5MZWZ0IHx8IDApICsgcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luUmlnaHQgfHwgMCk7XG4gIHZhciByZXN1bHQgPSB7XG4gICAgd2lkdGg6IGVsZW1lbnQub2Zmc2V0V2lkdGggKyB5LFxuICAgIGhlaWdodDogZWxlbWVudC5vZmZzZXRIZWlnaHQgKyB4XG4gIH07XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogR2V0IHRoZSBvcHBvc2l0ZSBwbGFjZW1lbnQgb2YgdGhlIGdpdmVuIG9uZVxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtTdHJpbmd9IHBsYWNlbWVudFxuICogQHJldHVybnMge1N0cmluZ30gZmxpcHBlZCBwbGFjZW1lbnRcbiAqL1xuZnVuY3Rpb24gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHZhciBoYXNoID0geyBsZWZ0OiAncmlnaHQnLCByaWdodDogJ2xlZnQnLCBib3R0b206ICd0b3AnLCB0b3A6ICdib3R0b20nIH07XG4gIHJldHVybiBwbGFjZW1lbnQucmVwbGFjZSgvbGVmdHxyaWdodHxib3R0b218dG9wL2csIGZ1bmN0aW9uIChtYXRjaGVkKSB7XG4gICAgcmV0dXJuIGhhc2hbbWF0Y2hlZF07XG4gIH0pO1xufVxuXG4vKipcbiAqIEdldCBvZmZzZXRzIHRvIHRoZSBwb3BwZXJcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBwb3NpdGlvbiAtIENTUyBwb3NpdGlvbiB0aGUgUG9wcGVyIHdpbGwgZ2V0IGFwcGxpZWRcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBvcHBlciAtIHRoZSBwb3BwZXIgZWxlbWVudFxuICogQHBhcmFtIHtPYmplY3R9IHJlZmVyZW5jZU9mZnNldHMgLSB0aGUgcmVmZXJlbmNlIG9mZnNldHMgKHRoZSBwb3BwZXIgd2lsbCBiZSByZWxhdGl2ZSB0byB0aGlzKVxuICogQHBhcmFtIHtTdHJpbmd9IHBsYWNlbWVudCAtIG9uZSBvZiB0aGUgdmFsaWQgcGxhY2VtZW50IG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IHBvcHBlck9mZnNldHMgLSBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgb2Zmc2V0cyB3aGljaCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlclxuICovXG5mdW5jdGlvbiBnZXRQb3BwZXJPZmZzZXRzKHBvcHBlciwgcmVmZXJlbmNlT2Zmc2V0cywgcGxhY2VtZW50KSB7XG4gIHBsYWNlbWVudCA9IHBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuXG4gIC8vIEdldCBwb3BwZXIgbm9kZSBzaXplc1xuICB2YXIgcG9wcGVyUmVjdCA9IGdldE91dGVyU2l6ZXMocG9wcGVyKTtcblxuICAvLyBBZGQgcG9zaXRpb24sIHdpZHRoIGFuZCBoZWlnaHQgdG8gb3VyIG9mZnNldHMgb2JqZWN0XG4gIHZhciBwb3BwZXJPZmZzZXRzID0ge1xuICAgIHdpZHRoOiBwb3BwZXJSZWN0LndpZHRoLFxuICAgIGhlaWdodDogcG9wcGVyUmVjdC5oZWlnaHRcbiAgfTtcblxuICAvLyBkZXBlbmRpbmcgYnkgdGhlIHBvcHBlciBwbGFjZW1lbnQgd2UgaGF2ZSB0byBjb21wdXRlIGl0cyBvZmZzZXRzIHNsaWdodGx5IGRpZmZlcmVudGx5XG4gIHZhciBpc0hvcml6ID0gWydyaWdodCcsICdsZWZ0J10uaW5kZXhPZihwbGFjZW1lbnQpICE9PSAtMTtcbiAgdmFyIG1haW5TaWRlID0gaXNIb3JpeiA/ICd0b3AnIDogJ2xlZnQnO1xuICB2YXIgc2Vjb25kYXJ5U2lkZSA9IGlzSG9yaXogPyAnbGVmdCcgOiAndG9wJztcbiAgdmFyIG1lYXN1cmVtZW50ID0gaXNIb3JpeiA/ICdoZWlnaHQnIDogJ3dpZHRoJztcbiAgdmFyIHNlY29uZGFyeU1lYXN1cmVtZW50ID0gIWlzSG9yaXogPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG5cbiAgcG9wcGVyT2Zmc2V0c1ttYWluU2lkZV0gPSByZWZlcmVuY2VPZmZzZXRzW21haW5TaWRlXSArIHJlZmVyZW5jZU9mZnNldHNbbWVhc3VyZW1lbnRdIC8gMiAtIHBvcHBlclJlY3RbbWVhc3VyZW1lbnRdIC8gMjtcbiAgaWYgKHBsYWNlbWVudCA9PT0gc2Vjb25kYXJ5U2lkZSkge1xuICAgIHBvcHBlck9mZnNldHNbc2Vjb25kYXJ5U2lkZV0gPSByZWZlcmVuY2VPZmZzZXRzW3NlY29uZGFyeVNpZGVdIC0gcG9wcGVyUmVjdFtzZWNvbmRhcnlNZWFzdXJlbWVudF07XG4gIH0gZWxzZSB7XG4gICAgcG9wcGVyT2Zmc2V0c1tzZWNvbmRhcnlTaWRlXSA9IHJlZmVyZW5jZU9mZnNldHNbZ2V0T3Bwb3NpdGVQbGFjZW1lbnQoc2Vjb25kYXJ5U2lkZSldO1xuICB9XG5cbiAgcmV0dXJuIHBvcHBlck9mZnNldHM7XG59XG5cbi8qKlxuICogTWltaWNzIHRoZSBgZmluZGAgbWV0aG9kIG9mIEFycmF5XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0FycmF5fSBhcnJcbiAqIEBhcmd1bWVudCBwcm9wXG4gKiBAYXJndW1lbnQgdmFsdWVcbiAqIEByZXR1cm5zIGluZGV4IG9yIC0xXG4gKi9cbmZ1bmN0aW9uIGZpbmQoYXJyLCBjaGVjaykge1xuICAvLyB1c2UgbmF0aXZlIGZpbmQgaWYgc3VwcG9ydGVkXG4gIGlmIChBcnJheS5wcm90b3R5cGUuZmluZCkge1xuICAgIHJldHVybiBhcnIuZmluZChjaGVjayk7XG4gIH1cblxuICAvLyB1c2UgYGZpbHRlcmAgdG8gb2J0YWluIHRoZSBzYW1lIGJlaGF2aW9yIG9mIGBmaW5kYFxuICByZXR1cm4gYXJyLmZpbHRlcihjaGVjaylbMF07XG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hpbmcgb2JqZWN0XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0FycmF5fSBhcnJcbiAqIEBhcmd1bWVudCBwcm9wXG4gKiBAYXJndW1lbnQgdmFsdWVcbiAqIEByZXR1cm5zIGluZGV4IG9yIC0xXG4gKi9cbmZ1bmN0aW9uIGZpbmRJbmRleChhcnIsIHByb3AsIHZhbHVlKSB7XG4gIC8vIHVzZSBuYXRpdmUgZmluZEluZGV4IGlmIHN1cHBvcnRlZFxuICBpZiAoQXJyYXkucHJvdG90eXBlLmZpbmRJbmRleCkge1xuICAgIHJldHVybiBhcnIuZmluZEluZGV4KGZ1bmN0aW9uIChjdXIpIHtcbiAgICAgIHJldHVybiBjdXJbcHJvcF0gPT09IHZhbHVlO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gdXNlIGBmaW5kYCArIGBpbmRleE9mYCBpZiBgZmluZEluZGV4YCBpc24ndCBzdXBwb3J0ZWRcbiAgdmFyIG1hdGNoID0gZmluZChhcnIsIGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqW3Byb3BdID09PSB2YWx1ZTtcbiAgfSk7XG4gIHJldHVybiBhcnIuaW5kZXhPZihtYXRjaCk7XG59XG5cbi8qKlxuICogTG9vcCB0cm91Z2ggdGhlIGxpc3Qgb2YgbW9kaWZpZXJzIGFuZCBydW4gdGhlbSBpbiBvcmRlcixcbiAqIGVhY2ggb2YgdGhlbSB3aWxsIHRoZW4gZWRpdCB0aGUgZGF0YSBvYmplY3QuXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcGFyYW0ge2RhdGFPYmplY3R9IGRhdGFcbiAqIEBwYXJhbSB7QXJyYXl9IG1vZGlmaWVyc1xuICogQHBhcmFtIHtTdHJpbmd9IGVuZHMgLSBPcHRpb25hbCBtb2RpZmllciBuYW1lIHVzZWQgYXMgc3RvcHBlclxuICogQHJldHVybnMge2RhdGFPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIHJ1bk1vZGlmaWVycyhtb2RpZmllcnMsIGRhdGEsIGVuZHMpIHtcbiAgdmFyIG1vZGlmaWVyc1RvUnVuID0gZW5kcyA9PT0gdW5kZWZpbmVkID8gbW9kaWZpZXJzIDogbW9kaWZpZXJzLnNsaWNlKDAsIGZpbmRJbmRleChtb2RpZmllcnMsICduYW1lJywgZW5kcykpO1xuXG4gIG1vZGlmaWVyc1RvUnVuLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgaWYgKG1vZGlmaWVyWydmdW5jdGlvbiddKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGRvdC1ub3RhdGlvblxuICAgICAgY29uc29sZS53YXJuKCdgbW9kaWZpZXIuZnVuY3Rpb25gIGlzIGRlcHJlY2F0ZWQsIHVzZSBgbW9kaWZpZXIuZm5gIScpO1xuICAgIH1cbiAgICB2YXIgZm4gPSBtb2RpZmllclsnZnVuY3Rpb24nXSB8fCBtb2RpZmllci5mbjsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBkb3Qtbm90YXRpb25cbiAgICBpZiAobW9kaWZpZXIuZW5hYmxlZCAmJiBpc0Z1bmN0aW9uKGZuKSkge1xuICAgICAgLy8gQWRkIHByb3BlcnRpZXMgdG8gb2Zmc2V0cyB0byBtYWtlIHRoZW0gYSBjb21wbGV0ZSBjbGllbnRSZWN0IG9iamVjdFxuICAgICAgLy8gd2UgZG8gdGhpcyBiZWZvcmUgZWFjaCBtb2RpZmllciB0byBtYWtlIHN1cmUgdGhlIHByZXZpb3VzIG9uZSBkb2Vzbid0XG4gICAgICAvLyBtZXNzIHdpdGggdGhlc2UgdmFsdWVzXG4gICAgICBkYXRhLm9mZnNldHMucG9wcGVyID0gZ2V0Q2xpZW50UmVjdChkYXRhLm9mZnNldHMucG9wcGVyKTtcbiAgICAgIGRhdGEub2Zmc2V0cy5yZWZlcmVuY2UgPSBnZXRDbGllbnRSZWN0KGRhdGEub2Zmc2V0cy5yZWZlcmVuY2UpO1xuXG4gICAgICBkYXRhID0gZm4oZGF0YSwgbW9kaWZpZXIpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbi8qKlxuICogVXBkYXRlcyB0aGUgcG9zaXRpb24gb2YgdGhlIHBvcHBlciwgY29tcHV0aW5nIHRoZSBuZXcgb2Zmc2V0cyBhbmQgYXBwbHlpbmdcbiAqIHRoZSBuZXcgc3R5bGUuPGJyIC8+XG4gKiBQcmVmZXIgYHNjaGVkdWxlVXBkYXRlYCBvdmVyIGB1cGRhdGVgIGJlY2F1c2Ugb2YgcGVyZm9ybWFuY2UgcmVhc29ucy5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXJcbiAqL1xuZnVuY3Rpb24gdXBkYXRlKCkge1xuICAvLyBpZiBwb3BwZXIgaXMgZGVzdHJveWVkLCBkb24ndCBwZXJmb3JtIGFueSBmdXJ0aGVyIHVwZGF0ZVxuICBpZiAodGhpcy5zdGF0ZS5pc0Rlc3Ryb3llZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBkYXRhID0ge1xuICAgIGluc3RhbmNlOiB0aGlzLFxuICAgIHN0eWxlczoge30sXG4gICAgYXJyb3dTdHlsZXM6IHt9LFxuICAgIGF0dHJpYnV0ZXM6IHt9LFxuICAgIGZsaXBwZWQ6IGZhbHNlLFxuICAgIG9mZnNldHM6IHt9XG4gIH07XG5cbiAgLy8gY29tcHV0ZSByZWZlcmVuY2UgZWxlbWVudCBvZmZzZXRzXG4gIGRhdGEub2Zmc2V0cy5yZWZlcmVuY2UgPSBnZXRSZWZlcmVuY2VPZmZzZXRzKHRoaXMuc3RhdGUsIHRoaXMucG9wcGVyLCB0aGlzLnJlZmVyZW5jZSwgdGhpcy5vcHRpb25zLnBvc2l0aW9uRml4ZWQpO1xuXG4gIC8vIGNvbXB1dGUgYXV0byBwbGFjZW1lbnQsIHN0b3JlIHBsYWNlbWVudCBpbnNpZGUgdGhlIGRhdGEgb2JqZWN0LFxuICAvLyBtb2RpZmllcnMgd2lsbCBiZSBhYmxlIHRvIGVkaXQgYHBsYWNlbWVudGAgaWYgbmVlZGVkXG4gIC8vIGFuZCByZWZlciB0byBvcmlnaW5hbFBsYWNlbWVudCB0byBrbm93IHRoZSBvcmlnaW5hbCB2YWx1ZVxuICBkYXRhLnBsYWNlbWVudCA9IGNvbXB1dGVBdXRvUGxhY2VtZW50KHRoaXMub3B0aW9ucy5wbGFjZW1lbnQsIGRhdGEub2Zmc2V0cy5yZWZlcmVuY2UsIHRoaXMucG9wcGVyLCB0aGlzLnJlZmVyZW5jZSwgdGhpcy5vcHRpb25zLm1vZGlmaWVycy5mbGlwLmJvdW5kYXJpZXNFbGVtZW50LCB0aGlzLm9wdGlvbnMubW9kaWZpZXJzLmZsaXAucGFkZGluZyk7XG5cbiAgLy8gc3RvcmUgdGhlIGNvbXB1dGVkIHBsYWNlbWVudCBpbnNpZGUgYG9yaWdpbmFsUGxhY2VtZW50YFxuICBkYXRhLm9yaWdpbmFsUGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQ7XG5cbiAgZGF0YS5wb3NpdGlvbkZpeGVkID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uRml4ZWQ7XG5cbiAgLy8gY29tcHV0ZSB0aGUgcG9wcGVyIG9mZnNldHNcbiAgZGF0YS5vZmZzZXRzLnBvcHBlciA9IGdldFBvcHBlck9mZnNldHModGhpcy5wb3BwZXIsIGRhdGEub2Zmc2V0cy5yZWZlcmVuY2UsIGRhdGEucGxhY2VtZW50KTtcblxuICBkYXRhLm9mZnNldHMucG9wcGVyLnBvc2l0aW9uID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uRml4ZWQgPyAnZml4ZWQnIDogJ2Fic29sdXRlJztcblxuICAvLyBydW4gdGhlIG1vZGlmaWVyc1xuICBkYXRhID0gcnVuTW9kaWZpZXJzKHRoaXMubW9kaWZpZXJzLCBkYXRhKTtcblxuICAvLyB0aGUgZmlyc3QgYHVwZGF0ZWAgd2lsbCBjYWxsIGBvbkNyZWF0ZWAgY2FsbGJhY2tcbiAgLy8gdGhlIG90aGVyIG9uZXMgd2lsbCBjYWxsIGBvblVwZGF0ZWAgY2FsbGJhY2tcbiAgaWYgKCF0aGlzLnN0YXRlLmlzQ3JlYXRlZCkge1xuICAgIHRoaXMuc3RhdGUuaXNDcmVhdGVkID0gdHJ1ZTtcbiAgICB0aGlzLm9wdGlvbnMub25DcmVhdGUoZGF0YSk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5vcHRpb25zLm9uVXBkYXRlKGRhdGEpO1xuICB9XG59XG5cbi8qKlxuICogSGVscGVyIHVzZWQgdG8ga25vdyBpZiB0aGUgZ2l2ZW4gbW9kaWZpZXIgaXMgZW5hYmxlZC5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICovXG5mdW5jdGlvbiBpc01vZGlmaWVyRW5hYmxlZChtb2RpZmllcnMsIG1vZGlmaWVyTmFtZSkge1xuICByZXR1cm4gbW9kaWZpZXJzLnNvbWUoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgbmFtZSA9IF9yZWYubmFtZSxcbiAgICAgICAgZW5hYmxlZCA9IF9yZWYuZW5hYmxlZDtcbiAgICByZXR1cm4gZW5hYmxlZCAmJiBuYW1lID09PSBtb2RpZmllck5hbWU7XG4gIH0pO1xufVxuXG4vKipcbiAqIEdldCB0aGUgcHJlZml4ZWQgc3VwcG9ydGVkIHByb3BlcnR5IG5hbWVcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7U3RyaW5nfSBwcm9wZXJ0eSAoY2FtZWxDYXNlKVxuICogQHJldHVybnMge1N0cmluZ30gcHJlZml4ZWQgcHJvcGVydHkgKGNhbWVsQ2FzZSBvciBQYXNjYWxDYXNlLCBkZXBlbmRpbmcgb24gdGhlIHZlbmRvciBwcmVmaXgpXG4gKi9cbmZ1bmN0aW9uIGdldFN1cHBvcnRlZFByb3BlcnR5TmFtZShwcm9wZXJ0eSkge1xuICB2YXIgcHJlZml4ZXMgPSBbZmFsc2UsICdtcycsICdXZWJraXQnLCAnTW96JywgJ08nXTtcbiAgdmFyIHVwcGVyUHJvcCA9IHByb3BlcnR5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvcGVydHkuc2xpY2UoMSk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcmVmaXhlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBwcmVmaXggPSBwcmVmaXhlc1tpXTtcbiAgICB2YXIgdG9DaGVjayA9IHByZWZpeCA/ICcnICsgcHJlZml4ICsgdXBwZXJQcm9wIDogcHJvcGVydHk7XG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudC5ib2R5LnN0eWxlW3RvQ2hlY2tdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHRvQ2hlY2s7XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIERlc3Ryb3lzIHRoZSBwb3BwZXIuXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyXG4gKi9cbmZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gIHRoaXMuc3RhdGUuaXNEZXN0cm95ZWQgPSB0cnVlO1xuXG4gIC8vIHRvdWNoIERPTSBvbmx5IGlmIGBhcHBseVN0eWxlYCBtb2RpZmllciBpcyBlbmFibGVkXG4gIGlmIChpc01vZGlmaWVyRW5hYmxlZCh0aGlzLm1vZGlmaWVycywgJ2FwcGx5U3R5bGUnKSkge1xuICAgIHRoaXMucG9wcGVyLnJlbW92ZUF0dHJpYnV0ZSgneC1wbGFjZW1lbnQnKTtcbiAgICB0aGlzLnBvcHBlci5zdHlsZS5wb3NpdGlvbiA9ICcnO1xuICAgIHRoaXMucG9wcGVyLnN0eWxlLnRvcCA9ICcnO1xuICAgIHRoaXMucG9wcGVyLnN0eWxlLmxlZnQgPSAnJztcbiAgICB0aGlzLnBvcHBlci5zdHlsZS5yaWdodCA9ICcnO1xuICAgIHRoaXMucG9wcGVyLnN0eWxlLmJvdHRvbSA9ICcnO1xuICAgIHRoaXMucG9wcGVyLnN0eWxlLndpbGxDaGFuZ2UgPSAnJztcbiAgICB0aGlzLnBvcHBlci5zdHlsZVtnZXRTdXBwb3J0ZWRQcm9wZXJ0eU5hbWUoJ3RyYW5zZm9ybScpXSA9ICcnO1xuICB9XG5cbiAgdGhpcy5kaXNhYmxlRXZlbnRMaXN0ZW5lcnMoKTtcblxuICAvLyByZW1vdmUgdGhlIHBvcHBlciBpZiB1c2VyIGV4cGxpY2l0bHkgYXNrZWQgZm9yIHRoZSBkZWxldGlvbiBvbiBkZXN0cm95XG4gIC8vIGRvIG5vdCB1c2UgYHJlbW92ZWAgYmVjYXVzZSBJRTExIGRvZXNuJ3Qgc3VwcG9ydCBpdFxuICBpZiAodGhpcy5vcHRpb25zLnJlbW92ZU9uRGVzdHJveSkge1xuICAgIHRoaXMucG9wcGVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5wb3BwZXIpO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuXG4vKipcbiAqIEdldCB0aGUgd2luZG93IGFzc29jaWF0ZWQgd2l0aCB0aGUgZWxlbWVudFxuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJucyB7V2luZG93fVxuICovXG5mdW5jdGlvbiBnZXRXaW5kb3coZWxlbWVudCkge1xuICB2YXIgb3duZXJEb2N1bWVudCA9IGVsZW1lbnQub3duZXJEb2N1bWVudDtcbiAgcmV0dXJuIG93bmVyRG9jdW1lbnQgPyBvd25lckRvY3VtZW50LmRlZmF1bHRWaWV3IDogd2luZG93O1xufVxuXG5mdW5jdGlvbiBhdHRhY2hUb1Njcm9sbFBhcmVudHMoc2Nyb2xsUGFyZW50LCBldmVudCwgY2FsbGJhY2ssIHNjcm9sbFBhcmVudHMpIHtcbiAgdmFyIGlzQm9keSA9IHNjcm9sbFBhcmVudC5ub2RlTmFtZSA9PT0gJ0JPRFknO1xuICB2YXIgdGFyZ2V0ID0gaXNCb2R5ID8gc2Nyb2xsUGFyZW50Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcgOiBzY3JvbGxQYXJlbnQ7XG4gIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjaywgeyBwYXNzaXZlOiB0cnVlIH0pO1xuXG4gIGlmICghaXNCb2R5KSB7XG4gICAgYXR0YWNoVG9TY3JvbGxQYXJlbnRzKGdldFNjcm9sbFBhcmVudCh0YXJnZXQucGFyZW50Tm9kZSksIGV2ZW50LCBjYWxsYmFjaywgc2Nyb2xsUGFyZW50cyk7XG4gIH1cbiAgc2Nyb2xsUGFyZW50cy5wdXNoKHRhcmdldCk7XG59XG5cbi8qKlxuICogU2V0dXAgbmVlZGVkIGV2ZW50IGxpc3RlbmVycyB1c2VkIHRvIHVwZGF0ZSB0aGUgcG9wcGVyIHBvc2l0aW9uXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzZXR1cEV2ZW50TGlzdGVuZXJzKHJlZmVyZW5jZSwgb3B0aW9ucywgc3RhdGUsIHVwZGF0ZUJvdW5kKSB7XG4gIC8vIFJlc2l6ZSBldmVudCBsaXN0ZW5lciBvbiB3aW5kb3dcbiAgc3RhdGUudXBkYXRlQm91bmQgPSB1cGRhdGVCb3VuZDtcbiAgZ2V0V2luZG93KHJlZmVyZW5jZSkuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc3RhdGUudXBkYXRlQm91bmQsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcblxuICAvLyBTY3JvbGwgZXZlbnQgbGlzdGVuZXIgb24gc2Nyb2xsIHBhcmVudHNcbiAgdmFyIHNjcm9sbEVsZW1lbnQgPSBnZXRTY3JvbGxQYXJlbnQocmVmZXJlbmNlKTtcbiAgYXR0YWNoVG9TY3JvbGxQYXJlbnRzKHNjcm9sbEVsZW1lbnQsICdzY3JvbGwnLCBzdGF0ZS51cGRhdGVCb3VuZCwgc3RhdGUuc2Nyb2xsUGFyZW50cyk7XG4gIHN0YXRlLnNjcm9sbEVsZW1lbnQgPSBzY3JvbGxFbGVtZW50O1xuICBzdGF0ZS5ldmVudHNFbmFibGVkID0gdHJ1ZTtcblxuICByZXR1cm4gc3RhdGU7XG59XG5cbi8qKlxuICogSXQgd2lsbCBhZGQgcmVzaXplL3Njcm9sbCBldmVudHMgYW5kIHN0YXJ0IHJlY2FsY3VsYXRpbmdcbiAqIHBvc2l0aW9uIG9mIHRoZSBwb3BwZXIgZWxlbWVudCB3aGVuIHRoZXkgYXJlIHRyaWdnZXJlZC5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXJcbiAqL1xuZnVuY3Rpb24gZW5hYmxlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gIGlmICghdGhpcy5zdGF0ZS5ldmVudHNFbmFibGVkKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHNldHVwRXZlbnRMaXN0ZW5lcnModGhpcy5yZWZlcmVuY2UsIHRoaXMub3B0aW9ucywgdGhpcy5zdGF0ZSwgdGhpcy5zY2hlZHVsZVVwZGF0ZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmUgZXZlbnQgbGlzdGVuZXJzIHVzZWQgdG8gdXBkYXRlIHRoZSBwb3BwZXIgcG9zaXRpb25cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXJzKHJlZmVyZW5jZSwgc3RhdGUpIHtcbiAgLy8gUmVtb3ZlIHJlc2l6ZSBldmVudCBsaXN0ZW5lciBvbiB3aW5kb3dcbiAgZ2V0V2luZG93KHJlZmVyZW5jZSkucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc3RhdGUudXBkYXRlQm91bmQpO1xuXG4gIC8vIFJlbW92ZSBzY3JvbGwgZXZlbnQgbGlzdGVuZXIgb24gc2Nyb2xsIHBhcmVudHNcbiAgc3RhdGUuc2Nyb2xsUGFyZW50cy5mb3JFYWNoKGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc3RhdGUudXBkYXRlQm91bmQpO1xuICB9KTtcblxuICAvLyBSZXNldCBzdGF0ZVxuICBzdGF0ZS51cGRhdGVCb3VuZCA9IG51bGw7XG4gIHN0YXRlLnNjcm9sbFBhcmVudHMgPSBbXTtcbiAgc3RhdGUuc2Nyb2xsRWxlbWVudCA9IG51bGw7XG4gIHN0YXRlLmV2ZW50c0VuYWJsZWQgPSBmYWxzZTtcbiAgcmV0dXJuIHN0YXRlO1xufVxuXG4vKipcbiAqIEl0IHdpbGwgcmVtb3ZlIHJlc2l6ZS9zY3JvbGwgZXZlbnRzIGFuZCB3b24ndCByZWNhbGN1bGF0ZSBwb3BwZXIgcG9zaXRpb25cbiAqIHdoZW4gdGhleSBhcmUgdHJpZ2dlcmVkLiBJdCBhbHNvIHdvbid0IHRyaWdnZXIgYG9uVXBkYXRlYCBjYWxsYmFjayBhbnltb3JlLFxuICogdW5sZXNzIHlvdSBjYWxsIGB1cGRhdGVgIG1ldGhvZCBtYW51YWxseS5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXJcbiAqL1xuZnVuY3Rpb24gZGlzYWJsZUV2ZW50TGlzdGVuZXJzKCkge1xuICBpZiAodGhpcy5zdGF0ZS5ldmVudHNFbmFibGVkKSB7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5zY2hlZHVsZVVwZGF0ZSk7XG4gICAgdGhpcy5zdGF0ZSA9IHJlbW92ZUV2ZW50TGlzdGVuZXJzKHRoaXMucmVmZXJlbmNlLCB0aGlzLnN0YXRlKTtcbiAgfVxufVxuXG4vKipcbiAqIFRlbGxzIGlmIGEgZ2l2ZW4gaW5wdXQgaXMgYSBudW1iZXJcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7Kn0gaW5wdXQgdG8gY2hlY2tcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzTnVtZXJpYyhuKSB7XG4gIHJldHVybiBuICE9PSAnJyAmJiAhaXNOYU4ocGFyc2VGbG9hdChuKSkgJiYgaXNGaW5pdGUobik7XG59XG5cbi8qKlxuICogU2V0IHRoZSBzdHlsZSB0byB0aGUgZ2l2ZW4gcG9wcGVyXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnQgLSBFbGVtZW50IHRvIGFwcGx5IHRoZSBzdHlsZSB0b1xuICogQGFyZ3VtZW50IHtPYmplY3R9IHN0eWxlc1xuICogT2JqZWN0IHdpdGggYSBsaXN0IG9mIHByb3BlcnRpZXMgYW5kIHZhbHVlcyB3aGljaCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gc2V0U3R5bGVzKGVsZW1lbnQsIHN0eWxlcykge1xuICBPYmplY3Qua2V5cyhzdHlsZXMpLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcbiAgICB2YXIgdW5pdCA9ICcnO1xuICAgIC8vIGFkZCB1bml0IGlmIHRoZSB2YWx1ZSBpcyBudW1lcmljIGFuZCBpcyBvbmUgb2YgdGhlIGZvbGxvd2luZ1xuICAgIGlmIChbJ3dpZHRoJywgJ2hlaWdodCcsICd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXS5pbmRleE9mKHByb3ApICE9PSAtMSAmJiBpc051bWVyaWMoc3R5bGVzW3Byb3BdKSkge1xuICAgICAgdW5pdCA9ICdweCc7XG4gICAgfVxuICAgIGVsZW1lbnQuc3R5bGVbcHJvcF0gPSBzdHlsZXNbcHJvcF0gKyB1bml0O1xuICB9KTtcbn1cblxuLyoqXG4gKiBTZXQgdGhlIGF0dHJpYnV0ZXMgdG8gdGhlIGdpdmVuIHBvcHBlclxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50IC0gRWxlbWVudCB0byBhcHBseSB0aGUgYXR0cmlidXRlcyB0b1xuICogQGFyZ3VtZW50IHtPYmplY3R9IHN0eWxlc1xuICogT2JqZWN0IHdpdGggYSBsaXN0IG9mIHByb3BlcnRpZXMgYW5kIHZhbHVlcyB3aGljaCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlcyhlbGVtZW50LCBhdHRyaWJ1dGVzKSB7XG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcbiAgICB2YXIgdmFsdWUgPSBhdHRyaWJ1dGVzW3Byb3BdO1xuICAgIGlmICh2YWx1ZSAhPT0gZmFsc2UpIHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKHByb3AsIGF0dHJpYnV0ZXNbcHJvcF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShwcm9wKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IGB1cGRhdGVgIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEuc3R5bGVzIC0gTGlzdCBvZiBzdHlsZSBwcm9wZXJ0aWVzIC0gdmFsdWVzIHRvIGFwcGx5IHRvIHBvcHBlciBlbGVtZW50XG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YS5hdHRyaWJ1dGVzIC0gTGlzdCBvZiBhdHRyaWJ1dGUgcHJvcGVydGllcyAtIHZhbHVlcyB0byBhcHBseSB0byBwb3BwZXIgZWxlbWVudFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIHNhbWUgZGF0YSBvYmplY3RcbiAqL1xuZnVuY3Rpb24gYXBwbHlTdHlsZShkYXRhKSB7XG4gIC8vIGFueSBwcm9wZXJ0eSBwcmVzZW50IGluIGBkYXRhLnN0eWxlc2Agd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBwb3BwZXIsXG4gIC8vIGluIHRoaXMgd2F5IHdlIGNhbiBtYWtlIHRoZSAzcmQgcGFydHkgbW9kaWZpZXJzIGFkZCBjdXN0b20gc3R5bGVzIHRvIGl0XG4gIC8vIEJlIGF3YXJlLCBtb2RpZmllcnMgY291bGQgb3ZlcnJpZGUgdGhlIHByb3BlcnRpZXMgZGVmaW5lZCBpbiB0aGUgcHJldmlvdXNcbiAgLy8gbGluZXMgb2YgdGhpcyBtb2RpZmllciFcbiAgc2V0U3R5bGVzKGRhdGEuaW5zdGFuY2UucG9wcGVyLCBkYXRhLnN0eWxlcyk7XG5cbiAgLy8gYW55IHByb3BlcnR5IHByZXNlbnQgaW4gYGRhdGEuYXR0cmlidXRlc2Agd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBwb3BwZXIsXG4gIC8vIHRoZXkgd2lsbCBiZSBzZXQgYXMgSFRNTCBhdHRyaWJ1dGVzIG9mIHRoZSBlbGVtZW50XG4gIHNldEF0dHJpYnV0ZXMoZGF0YS5pbnN0YW5jZS5wb3BwZXIsIGRhdGEuYXR0cmlidXRlcyk7XG5cbiAgLy8gaWYgYXJyb3dFbGVtZW50IGlzIGRlZmluZWQgYW5kIGFycm93U3R5bGVzIGhhcyBzb21lIHByb3BlcnRpZXNcbiAgaWYgKGRhdGEuYXJyb3dFbGVtZW50ICYmIE9iamVjdC5rZXlzKGRhdGEuYXJyb3dTdHlsZXMpLmxlbmd0aCkge1xuICAgIHNldFN0eWxlcyhkYXRhLmFycm93RWxlbWVudCwgZGF0YS5hcnJvd1N0eWxlcyk7XG4gIH1cblxuICByZXR1cm4gZGF0YTtcbn1cblxuLyoqXG4gKiBTZXQgdGhlIHgtcGxhY2VtZW50IGF0dHJpYnV0ZSBiZWZvcmUgZXZlcnl0aGluZyBlbHNlIGJlY2F1c2UgaXQgY291bGQgYmUgdXNlZFxuICogdG8gYWRkIG1hcmdpbnMgdG8gdGhlIHBvcHBlciBtYXJnaW5zIG5lZWRzIHRvIGJlIGNhbGN1bGF0ZWQgdG8gZ2V0IHRoZVxuICogY29ycmVjdCBwb3BwZXIgb2Zmc2V0cy5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIubW9kaWZpZXJzXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSByZWZlcmVuY2UgLSBUaGUgcmVmZXJlbmNlIGVsZW1lbnQgdXNlZCB0byBwb3NpdGlvbiB0aGUgcG9wcGVyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwb3BwZXIgLSBUaGUgSFRNTCBlbGVtZW50IHVzZWQgYXMgcG9wcGVyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFBvcHBlci5qcyBvcHRpb25zXG4gKi9cbmZ1bmN0aW9uIGFwcGx5U3R5bGVPbkxvYWQocmVmZXJlbmNlLCBwb3BwZXIsIG9wdGlvbnMsIG1vZGlmaWVyT3B0aW9ucywgc3RhdGUpIHtcbiAgLy8gY29tcHV0ZSByZWZlcmVuY2UgZWxlbWVudCBvZmZzZXRzXG4gIHZhciByZWZlcmVuY2VPZmZzZXRzID0gZ2V0UmVmZXJlbmNlT2Zmc2V0cyhzdGF0ZSwgcG9wcGVyLCByZWZlcmVuY2UsIG9wdGlvbnMucG9zaXRpb25GaXhlZCk7XG5cbiAgLy8gY29tcHV0ZSBhdXRvIHBsYWNlbWVudCwgc3RvcmUgcGxhY2VtZW50IGluc2lkZSB0aGUgZGF0YSBvYmplY3QsXG4gIC8vIG1vZGlmaWVycyB3aWxsIGJlIGFibGUgdG8gZWRpdCBgcGxhY2VtZW50YCBpZiBuZWVkZWRcbiAgLy8gYW5kIHJlZmVyIHRvIG9yaWdpbmFsUGxhY2VtZW50IHRvIGtub3cgdGhlIG9yaWdpbmFsIHZhbHVlXG4gIHZhciBwbGFjZW1lbnQgPSBjb21wdXRlQXV0b1BsYWNlbWVudChvcHRpb25zLnBsYWNlbWVudCwgcmVmZXJlbmNlT2Zmc2V0cywgcG9wcGVyLCByZWZlcmVuY2UsIG9wdGlvbnMubW9kaWZpZXJzLmZsaXAuYm91bmRhcmllc0VsZW1lbnQsIG9wdGlvbnMubW9kaWZpZXJzLmZsaXAucGFkZGluZyk7XG5cbiAgcG9wcGVyLnNldEF0dHJpYnV0ZSgneC1wbGFjZW1lbnQnLCBwbGFjZW1lbnQpO1xuXG4gIC8vIEFwcGx5IGBwb3NpdGlvbmAgdG8gcG9wcGVyIGJlZm9yZSBhbnl0aGluZyBlbHNlIGJlY2F1c2VcbiAgLy8gd2l0aG91dCB0aGUgcG9zaXRpb24gYXBwbGllZCB3ZSBjYW4ndCBndWFyYW50ZWUgY29ycmVjdCBjb21wdXRhdGlvbnNcbiAgc2V0U3R5bGVzKHBvcHBlciwgeyBwb3NpdGlvbjogb3B0aW9ucy5wb3NpdGlvbkZpeGVkID8gJ2ZpeGVkJyA6ICdhYnNvbHV0ZScgfSk7XG5cbiAgcmV0dXJuIG9wdGlvbnM7XG59XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgYHVwZGF0ZWAgbWV0aG9kXG4gKiBAYXJndW1lbnQge0Jvb2xlYW59IHNob3VsZFJvdW5kIC0gSWYgdGhlIG9mZnNldHMgc2hvdWxkIGJlIHJvdW5kZWQgYXQgYWxsXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgcG9wcGVyJ3MgcG9zaXRpb24gb2Zmc2V0cyByb3VuZGVkXG4gKlxuICogVGhlIHRhbGUgb2YgcGl4ZWwtcGVyZmVjdCBwb3NpdGlvbmluZy4gSXQncyBzdGlsbCBub3QgMTAwJSBwZXJmZWN0LCBidXQgYXNcbiAqIGdvb2QgYXMgaXQgY2FuIGJlIHdpdGhpbiByZWFzb24uXG4gKiBEaXNjdXNzaW9uIGhlcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9GZXpWcmFzdGEvcG9wcGVyLmpzL3B1bGwvNzE1XG4gKlxuICogTG93IERQSSBzY3JlZW5zIGNhdXNlIGEgcG9wcGVyIHRvIGJlIGJsdXJyeSBpZiBub3QgdXNpbmcgZnVsbCBwaXhlbHMgKFNhZmFyaVxuICogYXMgd2VsbCBvbiBIaWdoIERQSSBzY3JlZW5zKS5cbiAqXG4gKiBGaXJlZm94IHByZWZlcnMgbm8gcm91bmRpbmcgZm9yIHBvc2l0aW9uaW5nIGFuZCBkb2VzIG5vdCBoYXZlIGJsdXJyaW5lc3Mgb25cbiAqIGhpZ2ggRFBJIHNjcmVlbnMuXG4gKlxuICogT25seSBob3Jpem9udGFsIHBsYWNlbWVudCBhbmQgbGVmdC9yaWdodCB2YWx1ZXMgbmVlZCB0byBiZSBjb25zaWRlcmVkLlxuICovXG5mdW5jdGlvbiBnZXRSb3VuZGVkT2Zmc2V0cyhkYXRhLCBzaG91bGRSb3VuZCkge1xuICB2YXIgX2RhdGEkb2Zmc2V0cyA9IGRhdGEub2Zmc2V0cyxcbiAgICAgIHBvcHBlciA9IF9kYXRhJG9mZnNldHMucG9wcGVyLFxuICAgICAgcmVmZXJlbmNlID0gX2RhdGEkb2Zmc2V0cy5yZWZlcmVuY2U7XG4gIHZhciByb3VuZCA9IE1hdGgucm91bmQsXG4gICAgICBmbG9vciA9IE1hdGguZmxvb3I7XG5cbiAgdmFyIG5vUm91bmQgPSBmdW5jdGlvbiBub1JvdW5kKHYpIHtcbiAgICByZXR1cm4gdjtcbiAgfTtcblxuICB2YXIgcmVmZXJlbmNlV2lkdGggPSByb3VuZChyZWZlcmVuY2Uud2lkdGgpO1xuICB2YXIgcG9wcGVyV2lkdGggPSByb3VuZChwb3BwZXIud2lkdGgpO1xuXG4gIHZhciBpc1ZlcnRpY2FsID0gWydsZWZ0JywgJ3JpZ2h0J10uaW5kZXhPZihkYXRhLnBsYWNlbWVudCkgIT09IC0xO1xuICB2YXIgaXNWYXJpYXRpb24gPSBkYXRhLnBsYWNlbWVudC5pbmRleE9mKCctJykgIT09IC0xO1xuICB2YXIgc2FtZVdpZHRoUGFyaXR5ID0gcmVmZXJlbmNlV2lkdGggJSAyID09PSBwb3BwZXJXaWR0aCAlIDI7XG4gIHZhciBib3RoT2RkV2lkdGggPSByZWZlcmVuY2VXaWR0aCAlIDIgPT09IDEgJiYgcG9wcGVyV2lkdGggJSAyID09PSAxO1xuXG4gIHZhciBob3Jpem9udGFsVG9JbnRlZ2VyID0gIXNob3VsZFJvdW5kID8gbm9Sb3VuZCA6IGlzVmVydGljYWwgfHwgaXNWYXJpYXRpb24gfHwgc2FtZVdpZHRoUGFyaXR5ID8gcm91bmQgOiBmbG9vcjtcbiAgdmFyIHZlcnRpY2FsVG9JbnRlZ2VyID0gIXNob3VsZFJvdW5kID8gbm9Sb3VuZCA6IHJvdW5kO1xuXG4gIHJldHVybiB7XG4gICAgbGVmdDogaG9yaXpvbnRhbFRvSW50ZWdlcihib3RoT2RkV2lkdGggJiYgIWlzVmFyaWF0aW9uICYmIHNob3VsZFJvdW5kID8gcG9wcGVyLmxlZnQgLSAxIDogcG9wcGVyLmxlZnQpLFxuICAgIHRvcDogdmVydGljYWxUb0ludGVnZXIocG9wcGVyLnRvcCksXG4gICAgYm90dG9tOiB2ZXJ0aWNhbFRvSW50ZWdlcihwb3BwZXIuYm90dG9tKSxcbiAgICByaWdodDogaG9yaXpvbnRhbFRvSW50ZWdlcihwb3BwZXIucmlnaHQpXG4gIH07XG59XG5cbnZhciBpc0ZpcmVmb3ggPSBpc0Jyb3dzZXIgJiYgL0ZpcmVmb3gvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IGB1cGRhdGVgIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5mdW5jdGlvbiBjb21wdXRlU3R5bGUoZGF0YSwgb3B0aW9ucykge1xuICB2YXIgeCA9IG9wdGlvbnMueCxcbiAgICAgIHkgPSBvcHRpb25zLnk7XG4gIHZhciBwb3BwZXIgPSBkYXRhLm9mZnNldHMucG9wcGVyO1xuXG4gIC8vIFJlbW92ZSB0aGlzIGxlZ2FjeSBzdXBwb3J0IGluIFBvcHBlci5qcyB2MlxuXG4gIHZhciBsZWdhY3lHcHVBY2NlbGVyYXRpb25PcHRpb24gPSBmaW5kKGRhdGEuaW5zdGFuY2UubW9kaWZpZXJzLCBmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICByZXR1cm4gbW9kaWZpZXIubmFtZSA9PT0gJ2FwcGx5U3R5bGUnO1xuICB9KS5ncHVBY2NlbGVyYXRpb247XG4gIGlmIChsZWdhY3lHcHVBY2NlbGVyYXRpb25PcHRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnNvbGUud2FybignV0FSTklORzogYGdwdUFjY2VsZXJhdGlvbmAgb3B0aW9uIG1vdmVkIHRvIGBjb21wdXRlU3R5bGVgIG1vZGlmaWVyIGFuZCB3aWxsIG5vdCBiZSBzdXBwb3J0ZWQgaW4gZnV0dXJlIHZlcnNpb25zIG9mIFBvcHBlci5qcyEnKTtcbiAgfVxuICB2YXIgZ3B1QWNjZWxlcmF0aW9uID0gbGVnYWN5R3B1QWNjZWxlcmF0aW9uT3B0aW9uICE9PSB1bmRlZmluZWQgPyBsZWdhY3lHcHVBY2NlbGVyYXRpb25PcHRpb24gOiBvcHRpb25zLmdwdUFjY2VsZXJhdGlvbjtcblxuICB2YXIgb2Zmc2V0UGFyZW50ID0gZ2V0T2Zmc2V0UGFyZW50KGRhdGEuaW5zdGFuY2UucG9wcGVyKTtcbiAgdmFyIG9mZnNldFBhcmVudFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3Qob2Zmc2V0UGFyZW50KTtcblxuICAvLyBTdHlsZXNcbiAgdmFyIHN0eWxlcyA9IHtcbiAgICBwb3NpdGlvbjogcG9wcGVyLnBvc2l0aW9uXG4gIH07XG5cbiAgdmFyIG9mZnNldHMgPSBnZXRSb3VuZGVkT2Zmc2V0cyhkYXRhLCB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyA8IDIgfHwgIWlzRmlyZWZveCk7XG5cbiAgdmFyIHNpZGVBID0geCA9PT0gJ2JvdHRvbScgPyAndG9wJyA6ICdib3R0b20nO1xuICB2YXIgc2lkZUIgPSB5ID09PSAncmlnaHQnID8gJ2xlZnQnIDogJ3JpZ2h0JztcblxuICAvLyBpZiBncHVBY2NlbGVyYXRpb24gaXMgc2V0IHRvIGB0cnVlYCBhbmQgdHJhbnNmb3JtIGlzIHN1cHBvcnRlZCxcbiAgLy8gIHdlIHVzZSBgdHJhbnNsYXRlM2RgIHRvIGFwcGx5IHRoZSBwb3NpdGlvbiB0byB0aGUgcG9wcGVyIHdlXG4gIC8vIGF1dG9tYXRpY2FsbHkgdXNlIHRoZSBzdXBwb3J0ZWQgcHJlZml4ZWQgdmVyc2lvbiBpZiBuZWVkZWRcbiAgdmFyIHByZWZpeGVkUHJvcGVydHkgPSBnZXRTdXBwb3J0ZWRQcm9wZXJ0eU5hbWUoJ3RyYW5zZm9ybScpO1xuXG4gIC8vIG5vdywgbGV0J3MgbWFrZSBhIHN0ZXAgYmFjayBhbmQgbG9vayBhdCB0aGlzIGNvZGUgY2xvc2VseSAod3RmPylcbiAgLy8gSWYgdGhlIGNvbnRlbnQgb2YgdGhlIHBvcHBlciBncm93cyBvbmNlIGl0J3MgYmVlbiBwb3NpdGlvbmVkLCBpdFxuICAvLyBtYXkgaGFwcGVuIHRoYXQgdGhlIHBvcHBlciBnZXRzIG1pc3BsYWNlZCBiZWNhdXNlIG9mIHRoZSBuZXcgY29udGVudFxuICAvLyBvdmVyZmxvd2luZyBpdHMgcmVmZXJlbmNlIGVsZW1lbnRcbiAgLy8gVG8gYXZvaWQgdGhpcyBwcm9ibGVtLCB3ZSBwcm92aWRlIHR3byBvcHRpb25zICh4IGFuZCB5KSwgd2hpY2ggYWxsb3dcbiAgLy8gdGhlIGNvbnN1bWVyIHRvIGRlZmluZSB0aGUgb2Zmc2V0IG9yaWdpbi5cbiAgLy8gSWYgd2UgcG9zaXRpb24gYSBwb3BwZXIgb24gdG9wIG9mIGEgcmVmZXJlbmNlIGVsZW1lbnQsIHdlIGNhbiBzZXRcbiAgLy8gYHhgIHRvIGB0b3BgIHRvIG1ha2UgdGhlIHBvcHBlciBncm93IHRvd2FyZHMgaXRzIHRvcCBpbnN0ZWFkIG9mXG4gIC8vIGl0cyBib3R0b20uXG4gIHZhciBsZWZ0ID0gdm9pZCAwLFxuICAgICAgdG9wID0gdm9pZCAwO1xuICBpZiAoc2lkZUEgPT09ICdib3R0b20nKSB7XG4gICAgLy8gd2hlbiBvZmZzZXRQYXJlbnQgaXMgPGh0bWw+IHRoZSBwb3NpdGlvbmluZyBpcyByZWxhdGl2ZSB0byB0aGUgYm90dG9tIG9mIHRoZSBzY3JlZW4gKGV4Y2x1ZGluZyB0aGUgc2Nyb2xsYmFyKVxuICAgIC8vIGFuZCBub3QgdGhlIGJvdHRvbSBvZiB0aGUgaHRtbCBlbGVtZW50XG4gICAgaWYgKG9mZnNldFBhcmVudC5ub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XG4gICAgICB0b3AgPSAtb2Zmc2V0UGFyZW50LmNsaWVudEhlaWdodCArIG9mZnNldHMuYm90dG9tO1xuICAgIH0gZWxzZSB7XG4gICAgICB0b3AgPSAtb2Zmc2V0UGFyZW50UmVjdC5oZWlnaHQgKyBvZmZzZXRzLmJvdHRvbTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdG9wID0gb2Zmc2V0cy50b3A7XG4gIH1cbiAgaWYgKHNpZGVCID09PSAncmlnaHQnKSB7XG4gICAgaWYgKG9mZnNldFBhcmVudC5ub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XG4gICAgICBsZWZ0ID0gLW9mZnNldFBhcmVudC5jbGllbnRXaWR0aCArIG9mZnNldHMucmlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxlZnQgPSAtb2Zmc2V0UGFyZW50UmVjdC53aWR0aCArIG9mZnNldHMucmlnaHQ7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGxlZnQgPSBvZmZzZXRzLmxlZnQ7XG4gIH1cbiAgaWYgKGdwdUFjY2VsZXJhdGlvbiAmJiBwcmVmaXhlZFByb3BlcnR5KSB7XG4gICAgc3R5bGVzW3ByZWZpeGVkUHJvcGVydHldID0gJ3RyYW5zbGF0ZTNkKCcgKyBsZWZ0ICsgJ3B4LCAnICsgdG9wICsgJ3B4LCAwKSc7XG4gICAgc3R5bGVzW3NpZGVBXSA9IDA7XG4gICAgc3R5bGVzW3NpZGVCXSA9IDA7XG4gICAgc3R5bGVzLndpbGxDaGFuZ2UgPSAndHJhbnNmb3JtJztcbiAgfSBlbHNlIHtcbiAgICAvLyBvdGh3ZXJpc2UsIHdlIHVzZSB0aGUgc3RhbmRhcmQgYHRvcGAsIGBsZWZ0YCwgYGJvdHRvbWAgYW5kIGByaWdodGAgcHJvcGVydGllc1xuICAgIHZhciBpbnZlcnRUb3AgPSBzaWRlQSA9PT0gJ2JvdHRvbScgPyAtMSA6IDE7XG4gICAgdmFyIGludmVydExlZnQgPSBzaWRlQiA9PT0gJ3JpZ2h0JyA/IC0xIDogMTtcbiAgICBzdHlsZXNbc2lkZUFdID0gdG9wICogaW52ZXJ0VG9wO1xuICAgIHN0eWxlc1tzaWRlQl0gPSBsZWZ0ICogaW52ZXJ0TGVmdDtcbiAgICBzdHlsZXMud2lsbENoYW5nZSA9IHNpZGVBICsgJywgJyArIHNpZGVCO1xuICB9XG5cbiAgLy8gQXR0cmlidXRlc1xuICB2YXIgYXR0cmlidXRlcyA9IHtcbiAgICAneC1wbGFjZW1lbnQnOiBkYXRhLnBsYWNlbWVudFxuICB9O1xuXG4gIC8vIFVwZGF0ZSBgZGF0YWAgYXR0cmlidXRlcywgc3R5bGVzIGFuZCBhcnJvd1N0eWxlc1xuICBkYXRhLmF0dHJpYnV0ZXMgPSBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywgZGF0YS5hdHRyaWJ1dGVzKTtcbiAgZGF0YS5zdHlsZXMgPSBfZXh0ZW5kcyh7fSwgc3R5bGVzLCBkYXRhLnN0eWxlcyk7XG4gIGRhdGEuYXJyb3dTdHlsZXMgPSBfZXh0ZW5kcyh7fSwgZGF0YS5vZmZzZXRzLmFycm93LCBkYXRhLmFycm93U3R5bGVzKTtcblxuICByZXR1cm4gZGF0YTtcbn1cblxuLyoqXG4gKiBIZWxwZXIgdXNlZCB0byBrbm93IGlmIHRoZSBnaXZlbiBtb2RpZmllciBkZXBlbmRzIGZyb20gYW5vdGhlciBvbmUuPGJyIC8+XG4gKiBJdCBjaGVja3MgaWYgdGhlIG5lZWRlZCBtb2RpZmllciBpcyBsaXN0ZWQgYW5kIGVuYWJsZWQuXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcGFyYW0ge0FycmF5fSBtb2RpZmllcnMgLSBsaXN0IG9mIG1vZGlmaWVyc1xuICogQHBhcmFtIHtTdHJpbmd9IHJlcXVlc3RpbmdOYW1lIC0gbmFtZSBvZiByZXF1ZXN0aW5nIG1vZGlmaWVyXG4gKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdGVkTmFtZSAtIG5hbWUgb2YgcmVxdWVzdGVkIG1vZGlmaWVyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNNb2RpZmllclJlcXVpcmVkKG1vZGlmaWVycywgcmVxdWVzdGluZ05hbWUsIHJlcXVlc3RlZE5hbWUpIHtcbiAgdmFyIHJlcXVlc3RpbmcgPSBmaW5kKG1vZGlmaWVycywgZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgbmFtZSA9IF9yZWYubmFtZTtcbiAgICByZXR1cm4gbmFtZSA9PT0gcmVxdWVzdGluZ05hbWU7XG4gIH0pO1xuXG4gIHZhciBpc1JlcXVpcmVkID0gISFyZXF1ZXN0aW5nICYmIG1vZGlmaWVycy5zb21lKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgIHJldHVybiBtb2RpZmllci5uYW1lID09PSByZXF1ZXN0ZWROYW1lICYmIG1vZGlmaWVyLmVuYWJsZWQgJiYgbW9kaWZpZXIub3JkZXIgPCByZXF1ZXN0aW5nLm9yZGVyO1xuICB9KTtcblxuICBpZiAoIWlzUmVxdWlyZWQpIHtcbiAgICB2YXIgX3JlcXVlc3RpbmcgPSAnYCcgKyByZXF1ZXN0aW5nTmFtZSArICdgJztcbiAgICB2YXIgcmVxdWVzdGVkID0gJ2AnICsgcmVxdWVzdGVkTmFtZSArICdgJztcbiAgICBjb25zb2xlLndhcm4ocmVxdWVzdGVkICsgJyBtb2RpZmllciBpcyByZXF1aXJlZCBieSAnICsgX3JlcXVlc3RpbmcgKyAnIG1vZGlmaWVyIGluIG9yZGVyIHRvIHdvcmssIGJlIHN1cmUgdG8gaW5jbHVkZSBpdCBiZWZvcmUgJyArIF9yZXF1ZXN0aW5nICsgJyEnKTtcbiAgfVxuICByZXR1cm4gaXNSZXF1aXJlZDtcbn1cblxuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSB1cGRhdGUgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cbmZ1bmN0aW9uIGFycm93KGRhdGEsIG9wdGlvbnMpIHtcbiAgdmFyIF9kYXRhJG9mZnNldHMkYXJyb3c7XG5cbiAgLy8gYXJyb3cgZGVwZW5kcyBvbiBrZWVwVG9nZXRoZXIgaW4gb3JkZXIgdG8gd29ya1xuICBpZiAoIWlzTW9kaWZpZXJSZXF1aXJlZChkYXRhLmluc3RhbmNlLm1vZGlmaWVycywgJ2Fycm93JywgJ2tlZXBUb2dldGhlcicpKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICB2YXIgYXJyb3dFbGVtZW50ID0gb3B0aW9ucy5lbGVtZW50O1xuXG4gIC8vIGlmIGFycm93RWxlbWVudCBpcyBhIHN0cmluZywgc3VwcG9zZSBpdCdzIGEgQ1NTIHNlbGVjdG9yXG4gIGlmICh0eXBlb2YgYXJyb3dFbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgIGFycm93RWxlbWVudCA9IGRhdGEuaW5zdGFuY2UucG9wcGVyLnF1ZXJ5U2VsZWN0b3IoYXJyb3dFbGVtZW50KTtcblxuICAgIC8vIGlmIGFycm93RWxlbWVudCBpcyBub3QgZm91bmQsIGRvbid0IHJ1biB0aGUgbW9kaWZpZXJcbiAgICBpZiAoIWFycm93RWxlbWVudCkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIGlmIHRoZSBhcnJvd0VsZW1lbnQgaXNuJ3QgYSBxdWVyeSBzZWxlY3RvciB3ZSBtdXN0IGNoZWNrIHRoYXQgdGhlXG4gICAgLy8gcHJvdmlkZWQgRE9NIG5vZGUgaXMgY2hpbGQgb2YgaXRzIHBvcHBlciBub2RlXG4gICAgaWYgKCFkYXRhLmluc3RhbmNlLnBvcHBlci5jb250YWlucyhhcnJvd0VsZW1lbnQpKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1dBUk5JTkc6IGBhcnJvdy5lbGVtZW50YCBtdXN0IGJlIGNoaWxkIG9mIGl0cyBwb3BwZXIgZWxlbWVudCEnKTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgfVxuXG4gIHZhciBwbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuICB2YXIgX2RhdGEkb2Zmc2V0cyA9IGRhdGEub2Zmc2V0cyxcbiAgICAgIHBvcHBlciA9IF9kYXRhJG9mZnNldHMucG9wcGVyLFxuICAgICAgcmVmZXJlbmNlID0gX2RhdGEkb2Zmc2V0cy5yZWZlcmVuY2U7XG5cbiAgdmFyIGlzVmVydGljYWwgPSBbJ2xlZnQnLCAncmlnaHQnXS5pbmRleE9mKHBsYWNlbWVudCkgIT09IC0xO1xuXG4gIHZhciBsZW4gPSBpc1ZlcnRpY2FsID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuICB2YXIgc2lkZUNhcGl0YWxpemVkID0gaXNWZXJ0aWNhbCA/ICdUb3AnIDogJ0xlZnQnO1xuICB2YXIgc2lkZSA9IHNpZGVDYXBpdGFsaXplZC50b0xvd2VyQ2FzZSgpO1xuICB2YXIgYWx0U2lkZSA9IGlzVmVydGljYWwgPyAnbGVmdCcgOiAndG9wJztcbiAgdmFyIG9wU2lkZSA9IGlzVmVydGljYWwgPyAnYm90dG9tJyA6ICdyaWdodCc7XG4gIHZhciBhcnJvd0VsZW1lbnRTaXplID0gZ2V0T3V0ZXJTaXplcyhhcnJvd0VsZW1lbnQpW2xlbl07XG5cbiAgLy9cbiAgLy8gZXh0ZW5kcyBrZWVwVG9nZXRoZXIgYmVoYXZpb3IgbWFraW5nIHN1cmUgdGhlIHBvcHBlciBhbmQgaXRzXG4gIC8vIHJlZmVyZW5jZSBoYXZlIGVub3VnaCBwaXhlbHMgaW4gY29uanVuY3Rpb25cbiAgLy9cblxuICAvLyB0b3AvbGVmdCBzaWRlXG4gIGlmIChyZWZlcmVuY2Vbb3BTaWRlXSAtIGFycm93RWxlbWVudFNpemUgPCBwb3BwZXJbc2lkZV0pIHtcbiAgICBkYXRhLm9mZnNldHMucG9wcGVyW3NpZGVdIC09IHBvcHBlcltzaWRlXSAtIChyZWZlcmVuY2Vbb3BTaWRlXSAtIGFycm93RWxlbWVudFNpemUpO1xuICB9XG4gIC8vIGJvdHRvbS9yaWdodCBzaWRlXG4gIGlmIChyZWZlcmVuY2Vbc2lkZV0gKyBhcnJvd0VsZW1lbnRTaXplID4gcG9wcGVyW29wU2lkZV0pIHtcbiAgICBkYXRhLm9mZnNldHMucG9wcGVyW3NpZGVdICs9IHJlZmVyZW5jZVtzaWRlXSArIGFycm93RWxlbWVudFNpemUgLSBwb3BwZXJbb3BTaWRlXTtcbiAgfVxuICBkYXRhLm9mZnNldHMucG9wcGVyID0gZ2V0Q2xpZW50UmVjdChkYXRhLm9mZnNldHMucG9wcGVyKTtcblxuICAvLyBjb21wdXRlIGNlbnRlciBvZiB0aGUgcG9wcGVyXG4gIHZhciBjZW50ZXIgPSByZWZlcmVuY2Vbc2lkZV0gKyByZWZlcmVuY2VbbGVuXSAvIDIgLSBhcnJvd0VsZW1lbnRTaXplIC8gMjtcblxuICAvLyBDb21wdXRlIHRoZSBzaWRlVmFsdWUgdXNpbmcgdGhlIHVwZGF0ZWQgcG9wcGVyIG9mZnNldHNcbiAgLy8gdGFrZSBwb3BwZXIgbWFyZ2luIGluIGFjY291bnQgYmVjYXVzZSB3ZSBkb24ndCBoYXZlIHRoaXMgaW5mbyBhdmFpbGFibGVcbiAgdmFyIGNzcyA9IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShkYXRhLmluc3RhbmNlLnBvcHBlcik7XG4gIHZhciBwb3BwZXJNYXJnaW5TaWRlID0gcGFyc2VGbG9hdChjc3NbJ21hcmdpbicgKyBzaWRlQ2FwaXRhbGl6ZWRdKTtcbiAgdmFyIHBvcHBlckJvcmRlclNpZGUgPSBwYXJzZUZsb2F0KGNzc1snYm9yZGVyJyArIHNpZGVDYXBpdGFsaXplZCArICdXaWR0aCddKTtcbiAgdmFyIHNpZGVWYWx1ZSA9IGNlbnRlciAtIGRhdGEub2Zmc2V0cy5wb3BwZXJbc2lkZV0gLSBwb3BwZXJNYXJnaW5TaWRlIC0gcG9wcGVyQm9yZGVyU2lkZTtcblxuICAvLyBwcmV2ZW50IGFycm93RWxlbWVudCBmcm9tIGJlaW5nIHBsYWNlZCBub3QgY29udGlndW91c2x5IHRvIGl0cyBwb3BwZXJcbiAgc2lkZVZhbHVlID0gTWF0aC5tYXgoTWF0aC5taW4ocG9wcGVyW2xlbl0gLSBhcnJvd0VsZW1lbnRTaXplLCBzaWRlVmFsdWUpLCAwKTtcblxuICBkYXRhLmFycm93RWxlbWVudCA9IGFycm93RWxlbWVudDtcbiAgZGF0YS5vZmZzZXRzLmFycm93ID0gKF9kYXRhJG9mZnNldHMkYXJyb3cgPSB7fSwgZGVmaW5lUHJvcGVydHkoX2RhdGEkb2Zmc2V0cyRhcnJvdywgc2lkZSwgTWF0aC5yb3VuZChzaWRlVmFsdWUpKSwgZGVmaW5lUHJvcGVydHkoX2RhdGEkb2Zmc2V0cyRhcnJvdywgYWx0U2lkZSwgJycpLCBfZGF0YSRvZmZzZXRzJGFycm93KTtcblxuICByZXR1cm4gZGF0YTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIG9wcG9zaXRlIHBsYWNlbWVudCB2YXJpYXRpb24gb2YgdGhlIGdpdmVuIG9uZVxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtTdHJpbmd9IHBsYWNlbWVudCB2YXJpYXRpb25cbiAqIEByZXR1cm5zIHtTdHJpbmd9IGZsaXBwZWQgcGxhY2VtZW50IHZhcmlhdGlvblxuICovXG5mdW5jdGlvbiBnZXRPcHBvc2l0ZVZhcmlhdGlvbih2YXJpYXRpb24pIHtcbiAgaWYgKHZhcmlhdGlvbiA9PT0gJ2VuZCcpIHtcbiAgICByZXR1cm4gJ3N0YXJ0JztcbiAgfSBlbHNlIGlmICh2YXJpYXRpb24gPT09ICdzdGFydCcpIHtcbiAgICByZXR1cm4gJ2VuZCc7XG4gIH1cbiAgcmV0dXJuIHZhcmlhdGlvbjtcbn1cblxuLyoqXG4gKiBMaXN0IG9mIGFjY2VwdGVkIHBsYWNlbWVudHMgdG8gdXNlIGFzIHZhbHVlcyBvZiB0aGUgYHBsYWNlbWVudGAgb3B0aW9uLjxiciAvPlxuICogVmFsaWQgcGxhY2VtZW50cyBhcmU6XG4gKiAtIGBhdXRvYFxuICogLSBgdG9wYFxuICogLSBgcmlnaHRgXG4gKiAtIGBib3R0b21gXG4gKiAtIGBsZWZ0YFxuICpcbiAqIEVhY2ggcGxhY2VtZW50IGNhbiBoYXZlIGEgdmFyaWF0aW9uIGZyb20gdGhpcyBsaXN0OlxuICogLSBgLXN0YXJ0YFxuICogLSBgLWVuZGBcbiAqXG4gKiBWYXJpYXRpb25zIGFyZSBpbnRlcnByZXRlZCBlYXNpbHkgaWYgeW91IHRoaW5rIG9mIHRoZW0gYXMgdGhlIGxlZnQgdG8gcmlnaHRcbiAqIHdyaXR0ZW4gbGFuZ3VhZ2VzLiBIb3Jpem9udGFsbHkgKGB0b3BgIGFuZCBgYm90dG9tYCksIGBzdGFydGAgaXMgbGVmdCBhbmQgYGVuZGBcbiAqIGlzIHJpZ2h0LjxiciAvPlxuICogVmVydGljYWxseSAoYGxlZnRgIGFuZCBgcmlnaHRgKSwgYHN0YXJ0YCBpcyB0b3AgYW5kIGBlbmRgIGlzIGJvdHRvbS5cbiAqXG4gKiBTb21lIHZhbGlkIGV4YW1wbGVzIGFyZTpcbiAqIC0gYHRvcC1lbmRgIChvbiB0b3Agb2YgcmVmZXJlbmNlLCByaWdodCBhbGlnbmVkKVxuICogLSBgcmlnaHQtc3RhcnRgIChvbiByaWdodCBvZiByZWZlcmVuY2UsIHRvcCBhbGlnbmVkKVxuICogLSBgYm90dG9tYCAob24gYm90dG9tLCBjZW50ZXJlZClcbiAqIC0gYGF1dG8tZW5kYCAob24gdGhlIHNpZGUgd2l0aCBtb3JlIHNwYWNlIGF2YWlsYWJsZSwgYWxpZ25tZW50IGRlcGVuZHMgYnkgcGxhY2VtZW50KVxuICpcbiAqIEBzdGF0aWNcbiAqIEB0eXBlIHtBcnJheX1cbiAqIEBlbnVtIHtTdHJpbmd9XG4gKiBAcmVhZG9ubHlcbiAqIEBtZXRob2QgcGxhY2VtZW50c1xuICogQG1lbWJlcm9mIFBvcHBlclxuICovXG52YXIgcGxhY2VtZW50cyA9IFsnYXV0by1zdGFydCcsICdhdXRvJywgJ2F1dG8tZW5kJywgJ3RvcC1zdGFydCcsICd0b3AnLCAndG9wLWVuZCcsICdyaWdodC1zdGFydCcsICdyaWdodCcsICdyaWdodC1lbmQnLCAnYm90dG9tLWVuZCcsICdib3R0b20nLCAnYm90dG9tLXN0YXJ0JywgJ2xlZnQtZW5kJywgJ2xlZnQnLCAnbGVmdC1zdGFydCddO1xuXG4vLyBHZXQgcmlkIG9mIGBhdXRvYCBgYXV0by1zdGFydGAgYW5kIGBhdXRvLWVuZGBcbnZhciB2YWxpZFBsYWNlbWVudHMgPSBwbGFjZW1lbnRzLnNsaWNlKDMpO1xuXG4vKipcbiAqIEdpdmVuIGFuIGluaXRpYWwgcGxhY2VtZW50LCByZXR1cm5zIGFsbCB0aGUgc3Vic2VxdWVudCBwbGFjZW1lbnRzXG4gKiBjbG9ja3dpc2UgKG9yIGNvdW50ZXItY2xvY2t3aXNlKS5cbiAqXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge1N0cmluZ30gcGxhY2VtZW50IC0gQSB2YWxpZCBwbGFjZW1lbnQgKGl0IGFjY2VwdHMgdmFyaWF0aW9ucylcbiAqIEBhcmd1bWVudCB7Qm9vbGVhbn0gY291bnRlciAtIFNldCB0byB0cnVlIHRvIHdhbGsgdGhlIHBsYWNlbWVudHMgY291bnRlcmNsb2Nrd2lzZVxuICogQHJldHVybnMge0FycmF5fSBwbGFjZW1lbnRzIGluY2x1ZGluZyB0aGVpciB2YXJpYXRpb25zXG4gKi9cbmZ1bmN0aW9uIGNsb2Nrd2lzZShwbGFjZW1lbnQpIHtcbiAgdmFyIGNvdW50ZXIgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuXG4gIHZhciBpbmRleCA9IHZhbGlkUGxhY2VtZW50cy5pbmRleE9mKHBsYWNlbWVudCk7XG4gIHZhciBhcnIgPSB2YWxpZFBsYWNlbWVudHMuc2xpY2UoaW5kZXggKyAxKS5jb25jYXQodmFsaWRQbGFjZW1lbnRzLnNsaWNlKDAsIGluZGV4KSk7XG4gIHJldHVybiBjb3VudGVyID8gYXJyLnJldmVyc2UoKSA6IGFycjtcbn1cblxudmFyIEJFSEFWSU9SUyA9IHtcbiAgRkxJUDogJ2ZsaXAnLFxuICBDTE9DS1dJU0U6ICdjbG9ja3dpc2UnLFxuICBDT1VOVEVSQ0xPQ0tXSVNFOiAnY291bnRlcmNsb2Nrd2lzZSdcbn07XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgdXBkYXRlIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5mdW5jdGlvbiBmbGlwKGRhdGEsIG9wdGlvbnMpIHtcbiAgLy8gaWYgYGlubmVyYCBtb2RpZmllciBpcyBlbmFibGVkLCB3ZSBjYW4ndCB1c2UgdGhlIGBmbGlwYCBtb2RpZmllclxuICBpZiAoaXNNb2RpZmllckVuYWJsZWQoZGF0YS5pbnN0YW5jZS5tb2RpZmllcnMsICdpbm5lcicpKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBpZiAoZGF0YS5mbGlwcGVkICYmIGRhdGEucGxhY2VtZW50ID09PSBkYXRhLm9yaWdpbmFsUGxhY2VtZW50KSB7XG4gICAgLy8gc2VlbXMgbGlrZSBmbGlwIGlzIHRyeWluZyB0byBsb29wLCBwcm9iYWJseSB0aGVyZSdzIG5vdCBlbm91Z2ggc3BhY2Ugb24gYW55IG9mIHRoZSBmbGlwcGFibGUgc2lkZXNcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIHZhciBib3VuZGFyaWVzID0gZ2V0Qm91bmRhcmllcyhkYXRhLmluc3RhbmNlLnBvcHBlciwgZGF0YS5pbnN0YW5jZS5yZWZlcmVuY2UsIG9wdGlvbnMucGFkZGluZywgb3B0aW9ucy5ib3VuZGFyaWVzRWxlbWVudCwgZGF0YS5wb3NpdGlvbkZpeGVkKTtcblxuICB2YXIgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbiAgdmFyIHBsYWNlbWVudE9wcG9zaXRlID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgdmFyIHZhcmlhdGlvbiA9IGRhdGEucGxhY2VtZW50LnNwbGl0KCctJylbMV0gfHwgJyc7XG5cbiAgdmFyIGZsaXBPcmRlciA9IFtdO1xuXG4gIHN3aXRjaCAob3B0aW9ucy5iZWhhdmlvcikge1xuICAgIGNhc2UgQkVIQVZJT1JTLkZMSVA6XG4gICAgICBmbGlwT3JkZXIgPSBbcGxhY2VtZW50LCBwbGFjZW1lbnRPcHBvc2l0ZV07XG4gICAgICBicmVhaztcbiAgICBjYXNlIEJFSEFWSU9SUy5DTE9DS1dJU0U6XG4gICAgICBmbGlwT3JkZXIgPSBjbG9ja3dpc2UocGxhY2VtZW50KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgQkVIQVZJT1JTLkNPVU5URVJDTE9DS1dJU0U6XG4gICAgICBmbGlwT3JkZXIgPSBjbG9ja3dpc2UocGxhY2VtZW50LCB0cnVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBmbGlwT3JkZXIgPSBvcHRpb25zLmJlaGF2aW9yO1xuICB9XG5cbiAgZmxpcE9yZGVyLmZvckVhY2goZnVuY3Rpb24gKHN0ZXAsIGluZGV4KSB7XG4gICAgaWYgKHBsYWNlbWVudCAhPT0gc3RlcCB8fCBmbGlwT3JkZXIubGVuZ3RoID09PSBpbmRleCArIDEpIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIHBsYWNlbWVudCA9IGRhdGEucGxhY2VtZW50LnNwbGl0KCctJylbMF07XG4gICAgcGxhY2VtZW50T3Bwb3NpdGUgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuXG4gICAgdmFyIHBvcHBlck9mZnNldHMgPSBkYXRhLm9mZnNldHMucG9wcGVyO1xuICAgIHZhciByZWZPZmZzZXRzID0gZGF0YS5vZmZzZXRzLnJlZmVyZW5jZTtcblxuICAgIC8vIHVzaW5nIGZsb29yIGJlY2F1c2UgdGhlIHJlZmVyZW5jZSBvZmZzZXRzIG1heSBjb250YWluIGRlY2ltYWxzIHdlIGFyZSBub3QgZ29pbmcgdG8gY29uc2lkZXIgaGVyZVxuICAgIHZhciBmbG9vciA9IE1hdGguZmxvb3I7XG4gICAgdmFyIG92ZXJsYXBzUmVmID0gcGxhY2VtZW50ID09PSAnbGVmdCcgJiYgZmxvb3IocG9wcGVyT2Zmc2V0cy5yaWdodCkgPiBmbG9vcihyZWZPZmZzZXRzLmxlZnQpIHx8IHBsYWNlbWVudCA9PT0gJ3JpZ2h0JyAmJiBmbG9vcihwb3BwZXJPZmZzZXRzLmxlZnQpIDwgZmxvb3IocmVmT2Zmc2V0cy5yaWdodCkgfHwgcGxhY2VtZW50ID09PSAndG9wJyAmJiBmbG9vcihwb3BwZXJPZmZzZXRzLmJvdHRvbSkgPiBmbG9vcihyZWZPZmZzZXRzLnRvcCkgfHwgcGxhY2VtZW50ID09PSAnYm90dG9tJyAmJiBmbG9vcihwb3BwZXJPZmZzZXRzLnRvcCkgPCBmbG9vcihyZWZPZmZzZXRzLmJvdHRvbSk7XG5cbiAgICB2YXIgb3ZlcmZsb3dzTGVmdCA9IGZsb29yKHBvcHBlck9mZnNldHMubGVmdCkgPCBmbG9vcihib3VuZGFyaWVzLmxlZnQpO1xuICAgIHZhciBvdmVyZmxvd3NSaWdodCA9IGZsb29yKHBvcHBlck9mZnNldHMucmlnaHQpID4gZmxvb3IoYm91bmRhcmllcy5yaWdodCk7XG4gICAgdmFyIG92ZXJmbG93c1RvcCA9IGZsb29yKHBvcHBlck9mZnNldHMudG9wKSA8IGZsb29yKGJvdW5kYXJpZXMudG9wKTtcbiAgICB2YXIgb3ZlcmZsb3dzQm90dG9tID0gZmxvb3IocG9wcGVyT2Zmc2V0cy5ib3R0b20pID4gZmxvb3IoYm91bmRhcmllcy5ib3R0b20pO1xuXG4gICAgdmFyIG92ZXJmbG93c0JvdW5kYXJpZXMgPSBwbGFjZW1lbnQgPT09ICdsZWZ0JyAmJiBvdmVyZmxvd3NMZWZ0IHx8IHBsYWNlbWVudCA9PT0gJ3JpZ2h0JyAmJiBvdmVyZmxvd3NSaWdodCB8fCBwbGFjZW1lbnQgPT09ICd0b3AnICYmIG92ZXJmbG93c1RvcCB8fCBwbGFjZW1lbnQgPT09ICdib3R0b20nICYmIG92ZXJmbG93c0JvdHRvbTtcblxuICAgIC8vIGZsaXAgdGhlIHZhcmlhdGlvbiBpZiByZXF1aXJlZFxuICAgIHZhciBpc1ZlcnRpY2FsID0gWyd0b3AnLCAnYm90dG9tJ10uaW5kZXhPZihwbGFjZW1lbnQpICE9PSAtMTtcblxuICAgIC8vIGZsaXBzIHZhcmlhdGlvbiBpZiByZWZlcmVuY2UgZWxlbWVudCBvdmVyZmxvd3MgYm91bmRhcmllc1xuICAgIHZhciBmbGlwcGVkVmFyaWF0aW9uQnlSZWYgPSAhIW9wdGlvbnMuZmxpcFZhcmlhdGlvbnMgJiYgKGlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAnc3RhcnQnICYmIG92ZXJmbG93c0xlZnQgfHwgaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdlbmQnICYmIG92ZXJmbG93c1JpZ2h0IHx8ICFpc1ZlcnRpY2FsICYmIHZhcmlhdGlvbiA9PT0gJ3N0YXJ0JyAmJiBvdmVyZmxvd3NUb3AgfHwgIWlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAnZW5kJyAmJiBvdmVyZmxvd3NCb3R0b20pO1xuXG4gICAgLy8gZmxpcHMgdmFyaWF0aW9uIGlmIHBvcHBlciBjb250ZW50IG92ZXJmbG93cyBib3VuZGFyaWVzXG4gICAgdmFyIGZsaXBwZWRWYXJpYXRpb25CeUNvbnRlbnQgPSAhIW9wdGlvbnMuZmxpcFZhcmlhdGlvbnNCeUNvbnRlbnQgJiYgKGlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAnc3RhcnQnICYmIG92ZXJmbG93c1JpZ2h0IHx8IGlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAnZW5kJyAmJiBvdmVyZmxvd3NMZWZ0IHx8ICFpc1ZlcnRpY2FsICYmIHZhcmlhdGlvbiA9PT0gJ3N0YXJ0JyAmJiBvdmVyZmxvd3NCb3R0b20gfHwgIWlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAnZW5kJyAmJiBvdmVyZmxvd3NUb3ApO1xuXG4gICAgdmFyIGZsaXBwZWRWYXJpYXRpb24gPSBmbGlwcGVkVmFyaWF0aW9uQnlSZWYgfHwgZmxpcHBlZFZhcmlhdGlvbkJ5Q29udGVudDtcblxuICAgIGlmIChvdmVybGFwc1JlZiB8fCBvdmVyZmxvd3NCb3VuZGFyaWVzIHx8IGZsaXBwZWRWYXJpYXRpb24pIHtcbiAgICAgIC8vIHRoaXMgYm9vbGVhbiB0byBkZXRlY3QgYW55IGZsaXAgbG9vcFxuICAgICAgZGF0YS5mbGlwcGVkID0gdHJ1ZTtcblxuICAgICAgaWYgKG92ZXJsYXBzUmVmIHx8IG92ZXJmbG93c0JvdW5kYXJpZXMpIHtcbiAgICAgICAgcGxhY2VtZW50ID0gZmxpcE9yZGVyW2luZGV4ICsgMV07XG4gICAgICB9XG5cbiAgICAgIGlmIChmbGlwcGVkVmFyaWF0aW9uKSB7XG4gICAgICAgIHZhcmlhdGlvbiA9IGdldE9wcG9zaXRlVmFyaWF0aW9uKHZhcmlhdGlvbik7XG4gICAgICB9XG5cbiAgICAgIGRhdGEucGxhY2VtZW50ID0gcGxhY2VtZW50ICsgKHZhcmlhdGlvbiA/ICctJyArIHZhcmlhdGlvbiA6ICcnKTtcblxuICAgICAgLy8gdGhpcyBvYmplY3QgY29udGFpbnMgYHBvc2l0aW9uYCwgd2Ugd2FudCB0byBwcmVzZXJ2ZSBpdCBhbG9uZyB3aXRoXG4gICAgICAvLyBhbnkgYWRkaXRpb25hbCBwcm9wZXJ0eSB3ZSBtYXkgYWRkIGluIHRoZSBmdXR1cmVcbiAgICAgIGRhdGEub2Zmc2V0cy5wb3BwZXIgPSBfZXh0ZW5kcyh7fSwgZGF0YS5vZmZzZXRzLnBvcHBlciwgZ2V0UG9wcGVyT2Zmc2V0cyhkYXRhLmluc3RhbmNlLnBvcHBlciwgZGF0YS5vZmZzZXRzLnJlZmVyZW5jZSwgZGF0YS5wbGFjZW1lbnQpKTtcblxuICAgICAgZGF0YSA9IHJ1bk1vZGlmaWVycyhkYXRhLmluc3RhbmNlLm1vZGlmaWVycywgZGF0YSwgJ2ZsaXAnKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gZGF0YTtcbn1cblxuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSB1cGRhdGUgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cbmZ1bmN0aW9uIGtlZXBUb2dldGhlcihkYXRhKSB7XG4gIHZhciBfZGF0YSRvZmZzZXRzID0gZGF0YS5vZmZzZXRzLFxuICAgICAgcG9wcGVyID0gX2RhdGEkb2Zmc2V0cy5wb3BwZXIsXG4gICAgICByZWZlcmVuY2UgPSBfZGF0YSRvZmZzZXRzLnJlZmVyZW5jZTtcblxuICB2YXIgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbiAgdmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbiAgdmFyIGlzVmVydGljYWwgPSBbJ3RvcCcsICdib3R0b20nXS5pbmRleE9mKHBsYWNlbWVudCkgIT09IC0xO1xuICB2YXIgc2lkZSA9IGlzVmVydGljYWwgPyAncmlnaHQnIDogJ2JvdHRvbSc7XG4gIHZhciBvcFNpZGUgPSBpc1ZlcnRpY2FsID8gJ2xlZnQnIDogJ3RvcCc7XG4gIHZhciBtZWFzdXJlbWVudCA9IGlzVmVydGljYWwgPyAnd2lkdGgnIDogJ2hlaWdodCc7XG5cbiAgaWYgKHBvcHBlcltzaWRlXSA8IGZsb29yKHJlZmVyZW5jZVtvcFNpZGVdKSkge1xuICAgIGRhdGEub2Zmc2V0cy5wb3BwZXJbb3BTaWRlXSA9IGZsb29yKHJlZmVyZW5jZVtvcFNpZGVdKSAtIHBvcHBlclttZWFzdXJlbWVudF07XG4gIH1cbiAgaWYgKHBvcHBlcltvcFNpZGVdID4gZmxvb3IocmVmZXJlbmNlW3NpZGVdKSkge1xuICAgIGRhdGEub2Zmc2V0cy5wb3BwZXJbb3BTaWRlXSA9IGZsb29yKHJlZmVyZW5jZVtzaWRlXSk7XG4gIH1cblxuICByZXR1cm4gZGF0YTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhIHN0cmluZyBjb250YWluaW5nIHZhbHVlICsgdW5pdCBpbnRvIGEgcHggdmFsdWUgbnVtYmVyXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiB7bW9kaWZpZXJzfm9mZnNldH1cbiAqIEBwcml2YXRlXG4gKiBAYXJndW1lbnQge1N0cmluZ30gc3RyIC0gVmFsdWUgKyB1bml0IHN0cmluZ1xuICogQGFyZ3VtZW50IHtTdHJpbmd9IG1lYXN1cmVtZW50IC0gYGhlaWdodGAgb3IgYHdpZHRoYFxuICogQGFyZ3VtZW50IHtPYmplY3R9IHBvcHBlck9mZnNldHNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSByZWZlcmVuY2VPZmZzZXRzXG4gKiBAcmV0dXJucyB7TnVtYmVyfFN0cmluZ31cbiAqIFZhbHVlIGluIHBpeGVscywgb3Igb3JpZ2luYWwgc3RyaW5nIGlmIG5vIHZhbHVlcyB3ZXJlIGV4dHJhY3RlZFxuICovXG5mdW5jdGlvbiB0b1ZhbHVlKHN0ciwgbWVhc3VyZW1lbnQsIHBvcHBlck9mZnNldHMsIHJlZmVyZW5jZU9mZnNldHMpIHtcbiAgLy8gc2VwYXJhdGUgdmFsdWUgZnJvbSB1bml0XG4gIHZhciBzcGxpdCA9IHN0ci5tYXRjaCgvKCg/OlxcLXxcXCspP1xcZCpcXC4/XFxkKikoLiopLyk7XG4gIHZhciB2YWx1ZSA9ICtzcGxpdFsxXTtcbiAgdmFyIHVuaXQgPSBzcGxpdFsyXTtcblxuICAvLyBJZiBpdCdzIG5vdCBhIG51bWJlciBpdCdzIGFuIG9wZXJhdG9yLCBJIGd1ZXNzXG4gIGlmICghdmFsdWUpIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG5cbiAgaWYgKHVuaXQuaW5kZXhPZignJScpID09PSAwKSB7XG4gICAgdmFyIGVsZW1lbnQgPSB2b2lkIDA7XG4gICAgc3dpdGNoICh1bml0KSB7XG4gICAgICBjYXNlICclcCc6XG4gICAgICAgIGVsZW1lbnQgPSBwb3BwZXJPZmZzZXRzO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJyUnOlxuICAgICAgY2FzZSAnJXInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgZWxlbWVudCA9IHJlZmVyZW5jZU9mZnNldHM7XG4gICAgfVxuXG4gICAgdmFyIHJlY3QgPSBnZXRDbGllbnRSZWN0KGVsZW1lbnQpO1xuICAgIHJldHVybiByZWN0W21lYXN1cmVtZW50XSAvIDEwMCAqIHZhbHVlO1xuICB9IGVsc2UgaWYgKHVuaXQgPT09ICd2aCcgfHwgdW5pdCA9PT0gJ3Z3Jykge1xuICAgIC8vIGlmIGlzIGEgdmggb3IgdncsIHdlIGNhbGN1bGF0ZSB0aGUgc2l6ZSBiYXNlZCBvbiB0aGUgdmlld3BvcnRcbiAgICB2YXIgc2l6ZSA9IHZvaWQgMDtcbiAgICBpZiAodW5pdCA9PT0gJ3ZoJykge1xuICAgICAgc2l6ZSA9IE1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsIHdpbmRvdy5pbm5lckhlaWdodCB8fCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2l6ZSA9IE1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCwgd2luZG93LmlubmVyV2lkdGggfHwgMCk7XG4gICAgfVxuICAgIHJldHVybiBzaXplIC8gMTAwICogdmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgLy8gaWYgaXMgYW4gZXhwbGljaXQgcGl4ZWwgdW5pdCwgd2UgZ2V0IHJpZCBvZiB0aGUgdW5pdCBhbmQga2VlcCB0aGUgdmFsdWVcbiAgICAvLyBpZiBpcyBhbiBpbXBsaWNpdCB1bml0LCBpdCdzIHB4LCBhbmQgd2UgcmV0dXJuIGp1c3QgdGhlIHZhbHVlXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59XG5cbi8qKlxuICogUGFyc2UgYW4gYG9mZnNldGAgc3RyaW5nIHRvIGV4dHJhcG9sYXRlIGB4YCBhbmQgYHlgIG51bWVyaWMgb2Zmc2V0cy5cbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIHttb2RpZmllcnN+b2Zmc2V0fVxuICogQHByaXZhdGVcbiAqIEBhcmd1bWVudCB7U3RyaW5nfSBvZmZzZXRcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBwb3BwZXJPZmZzZXRzXG4gKiBAYXJndW1lbnQge09iamVjdH0gcmVmZXJlbmNlT2Zmc2V0c1xuICogQGFyZ3VtZW50IHtTdHJpbmd9IGJhc2VQbGFjZW1lbnRcbiAqIEByZXR1cm5zIHtBcnJheX0gYSB0d28gY2VsbHMgYXJyYXkgd2l0aCB4IGFuZCB5IG9mZnNldHMgaW4gbnVtYmVyc1xuICovXG5mdW5jdGlvbiBwYXJzZU9mZnNldChvZmZzZXQsIHBvcHBlck9mZnNldHMsIHJlZmVyZW5jZU9mZnNldHMsIGJhc2VQbGFjZW1lbnQpIHtcbiAgdmFyIG9mZnNldHMgPSBbMCwgMF07XG5cbiAgLy8gVXNlIGhlaWdodCBpZiBwbGFjZW1lbnQgaXMgbGVmdCBvciByaWdodCBhbmQgaW5kZXggaXMgMCBvdGhlcndpc2UgdXNlIHdpZHRoXG4gIC8vIGluIHRoaXMgd2F5IHRoZSBmaXJzdCBvZmZzZXQgd2lsbCB1c2UgYW4gYXhpcyBhbmQgdGhlIHNlY29uZCBvbmVcbiAgLy8gd2lsbCB1c2UgdGhlIG90aGVyIG9uZVxuICB2YXIgdXNlSGVpZ2h0ID0gWydyaWdodCcsICdsZWZ0J10uaW5kZXhPZihiYXNlUGxhY2VtZW50KSAhPT0gLTE7XG5cbiAgLy8gU3BsaXQgdGhlIG9mZnNldCBzdHJpbmcgdG8gb2J0YWluIGEgbGlzdCBvZiB2YWx1ZXMgYW5kIG9wZXJhbmRzXG4gIC8vIFRoZSByZWdleCBhZGRyZXNzZXMgdmFsdWVzIHdpdGggdGhlIHBsdXMgb3IgbWludXMgc2lnbiBpbiBmcm9udCAoKzEwLCAtMjAsIGV0YylcbiAgdmFyIGZyYWdtZW50cyA9IG9mZnNldC5zcGxpdCgvKFxcK3xcXC0pLykubWFwKGZ1bmN0aW9uIChmcmFnKSB7XG4gICAgcmV0dXJuIGZyYWcudHJpbSgpO1xuICB9KTtcblxuICAvLyBEZXRlY3QgaWYgdGhlIG9mZnNldCBzdHJpbmcgY29udGFpbnMgYSBwYWlyIG9mIHZhbHVlcyBvciBhIHNpbmdsZSBvbmVcbiAgLy8gdGhleSBjb3VsZCBiZSBzZXBhcmF0ZWQgYnkgY29tbWEgb3Igc3BhY2VcbiAgdmFyIGRpdmlkZXIgPSBmcmFnbWVudHMuaW5kZXhPZihmaW5kKGZyYWdtZW50cywgZnVuY3Rpb24gKGZyYWcpIHtcbiAgICByZXR1cm4gZnJhZy5zZWFyY2goLyx8XFxzLykgIT09IC0xO1xuICB9KSk7XG5cbiAgaWYgKGZyYWdtZW50c1tkaXZpZGVyXSAmJiBmcmFnbWVudHNbZGl2aWRlcl0uaW5kZXhPZignLCcpID09PSAtMSkge1xuICAgIGNvbnNvbGUud2FybignT2Zmc2V0cyBzZXBhcmF0ZWQgYnkgd2hpdGUgc3BhY2UocykgYXJlIGRlcHJlY2F0ZWQsIHVzZSBhIGNvbW1hICgsKSBpbnN0ZWFkLicpO1xuICB9XG5cbiAgLy8gSWYgZGl2aWRlciBpcyBmb3VuZCwgd2UgZGl2aWRlIHRoZSBsaXN0IG9mIHZhbHVlcyBhbmQgb3BlcmFuZHMgdG8gZGl2aWRlXG4gIC8vIHRoZW0gYnkgb2ZzZXQgWCBhbmQgWS5cbiAgdmFyIHNwbGl0UmVnZXggPSAvXFxzKixcXHMqfFxccysvO1xuICB2YXIgb3BzID0gZGl2aWRlciAhPT0gLTEgPyBbZnJhZ21lbnRzLnNsaWNlKDAsIGRpdmlkZXIpLmNvbmNhdChbZnJhZ21lbnRzW2RpdmlkZXJdLnNwbGl0KHNwbGl0UmVnZXgpWzBdXSksIFtmcmFnbWVudHNbZGl2aWRlcl0uc3BsaXQoc3BsaXRSZWdleClbMV1dLmNvbmNhdChmcmFnbWVudHMuc2xpY2UoZGl2aWRlciArIDEpKV0gOiBbZnJhZ21lbnRzXTtcblxuICAvLyBDb252ZXJ0IHRoZSB2YWx1ZXMgd2l0aCB1bml0cyB0byBhYnNvbHV0ZSBwaXhlbHMgdG8gYWxsb3cgb3VyIGNvbXB1dGF0aW9uc1xuICBvcHMgPSBvcHMubWFwKGZ1bmN0aW9uIChvcCwgaW5kZXgpIHtcbiAgICAvLyBNb3N0IG9mIHRoZSB1bml0cyByZWx5IG9uIHRoZSBvcmllbnRhdGlvbiBvZiB0aGUgcG9wcGVyXG4gICAgdmFyIG1lYXN1cmVtZW50ID0gKGluZGV4ID09PSAxID8gIXVzZUhlaWdodCA6IHVzZUhlaWdodCkgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG4gICAgdmFyIG1lcmdlV2l0aFByZXZpb3VzID0gZmFsc2U7XG4gICAgcmV0dXJuIG9wXG4gICAgLy8gVGhpcyBhZ2dyZWdhdGVzIGFueSBgK2Agb3IgYC1gIHNpZ24gdGhhdCBhcmVuJ3QgY29uc2lkZXJlZCBvcGVyYXRvcnNcbiAgICAvLyBlLmcuOiAxMCArICs1ID0+IFsxMCwgKywgKzVdXG4gICAgLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xuICAgICAgaWYgKGFbYS5sZW5ndGggLSAxXSA9PT0gJycgJiYgWycrJywgJy0nXS5pbmRleE9mKGIpICE9PSAtMSkge1xuICAgICAgICBhW2EubGVuZ3RoIC0gMV0gPSBiO1xuICAgICAgICBtZXJnZVdpdGhQcmV2aW91cyA9IHRydWU7XG4gICAgICAgIHJldHVybiBhO1xuICAgICAgfSBlbHNlIGlmIChtZXJnZVdpdGhQcmV2aW91cykge1xuICAgICAgICBhW2EubGVuZ3RoIC0gMV0gKz0gYjtcbiAgICAgICAgbWVyZ2VXaXRoUHJldmlvdXMgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYS5jb25jYXQoYik7XG4gICAgICB9XG4gICAgfSwgW10pXG4gICAgLy8gSGVyZSB3ZSBjb252ZXJ0IHRoZSBzdHJpbmcgdmFsdWVzIGludG8gbnVtYmVyIHZhbHVlcyAoaW4gcHgpXG4gICAgLm1hcChmdW5jdGlvbiAoc3RyKSB7XG4gICAgICByZXR1cm4gdG9WYWx1ZShzdHIsIG1lYXN1cmVtZW50LCBwb3BwZXJPZmZzZXRzLCByZWZlcmVuY2VPZmZzZXRzKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gTG9vcCB0cm91Z2ggdGhlIG9mZnNldHMgYXJyYXlzIGFuZCBleGVjdXRlIHRoZSBvcGVyYXRpb25zXG4gIG9wcy5mb3JFYWNoKGZ1bmN0aW9uIChvcCwgaW5kZXgpIHtcbiAgICBvcC5mb3JFYWNoKGZ1bmN0aW9uIChmcmFnLCBpbmRleDIpIHtcbiAgICAgIGlmIChpc051bWVyaWMoZnJhZykpIHtcbiAgICAgICAgb2Zmc2V0c1tpbmRleF0gKz0gZnJhZyAqIChvcFtpbmRleDIgLSAxXSA9PT0gJy0nID8gLTEgOiAxKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBvZmZzZXRzO1xufVxuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IHVwZGF0ZSBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEBhcmd1bWVudCB7TnVtYmVyfFN0cmluZ30gb3B0aW9ucy5vZmZzZXQ9MFxuICogVGhlIG9mZnNldCB2YWx1ZSBhcyBkZXNjcmliZWQgaW4gdGhlIG1vZGlmaWVyIGRlc2NyaXB0aW9uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cbmZ1bmN0aW9uIG9mZnNldChkYXRhLCBfcmVmKSB7XG4gIHZhciBvZmZzZXQgPSBfcmVmLm9mZnNldDtcbiAgdmFyIHBsYWNlbWVudCA9IGRhdGEucGxhY2VtZW50LFxuICAgICAgX2RhdGEkb2Zmc2V0cyA9IGRhdGEub2Zmc2V0cyxcbiAgICAgIHBvcHBlciA9IF9kYXRhJG9mZnNldHMucG9wcGVyLFxuICAgICAgcmVmZXJlbmNlID0gX2RhdGEkb2Zmc2V0cy5yZWZlcmVuY2U7XG5cbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBwbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcblxuICB2YXIgb2Zmc2V0cyA9IHZvaWQgMDtcbiAgaWYgKGlzTnVtZXJpYygrb2Zmc2V0KSkge1xuICAgIG9mZnNldHMgPSBbK29mZnNldCwgMF07XG4gIH0gZWxzZSB7XG4gICAgb2Zmc2V0cyA9IHBhcnNlT2Zmc2V0KG9mZnNldCwgcG9wcGVyLCByZWZlcmVuY2UsIGJhc2VQbGFjZW1lbnQpO1xuICB9XG5cbiAgaWYgKGJhc2VQbGFjZW1lbnQgPT09ICdsZWZ0Jykge1xuICAgIHBvcHBlci50b3AgKz0gb2Zmc2V0c1swXTtcbiAgICBwb3BwZXIubGVmdCAtPSBvZmZzZXRzWzFdO1xuICB9IGVsc2UgaWYgKGJhc2VQbGFjZW1lbnQgPT09ICdyaWdodCcpIHtcbiAgICBwb3BwZXIudG9wICs9IG9mZnNldHNbMF07XG4gICAgcG9wcGVyLmxlZnQgKz0gb2Zmc2V0c1sxXTtcbiAgfSBlbHNlIGlmIChiYXNlUGxhY2VtZW50ID09PSAndG9wJykge1xuICAgIHBvcHBlci5sZWZ0ICs9IG9mZnNldHNbMF07XG4gICAgcG9wcGVyLnRvcCAtPSBvZmZzZXRzWzFdO1xuICB9IGVsc2UgaWYgKGJhc2VQbGFjZW1lbnQgPT09ICdib3R0b20nKSB7XG4gICAgcG9wcGVyLmxlZnQgKz0gb2Zmc2V0c1swXTtcbiAgICBwb3BwZXIudG9wICs9IG9mZnNldHNbMV07XG4gIH1cblxuICBkYXRhLnBvcHBlciA9IHBvcHBlcjtcbiAgcmV0dXJuIGRhdGE7XG59XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgYHVwZGF0ZWAgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cbmZ1bmN0aW9uIHByZXZlbnRPdmVyZmxvdyhkYXRhLCBvcHRpb25zKSB7XG4gIHZhciBib3VuZGFyaWVzRWxlbWVudCA9IG9wdGlvbnMuYm91bmRhcmllc0VsZW1lbnQgfHwgZ2V0T2Zmc2V0UGFyZW50KGRhdGEuaW5zdGFuY2UucG9wcGVyKTtcblxuICAvLyBJZiBvZmZzZXRQYXJlbnQgaXMgdGhlIHJlZmVyZW5jZSBlbGVtZW50LCB3ZSByZWFsbHkgd2FudCB0b1xuICAvLyBnbyBvbmUgc3RlcCB1cCBhbmQgdXNlIHRoZSBuZXh0IG9mZnNldFBhcmVudCBhcyByZWZlcmVuY2UgdG9cbiAgLy8gYXZvaWQgdG8gbWFrZSB0aGlzIG1vZGlmaWVyIGNvbXBsZXRlbHkgdXNlbGVzcyBhbmQgbG9vayBsaWtlIGJyb2tlblxuICBpZiAoZGF0YS5pbnN0YW5jZS5yZWZlcmVuY2UgPT09IGJvdW5kYXJpZXNFbGVtZW50KSB7XG4gICAgYm91bmRhcmllc0VsZW1lbnQgPSBnZXRPZmZzZXRQYXJlbnQoYm91bmRhcmllc0VsZW1lbnQpO1xuICB9XG5cbiAgLy8gTk9URTogRE9NIGFjY2VzcyBoZXJlXG4gIC8vIHJlc2V0cyB0aGUgcG9wcGVyJ3MgcG9zaXRpb24gc28gdGhhdCB0aGUgZG9jdW1lbnQgc2l6ZSBjYW4gYmUgY2FsY3VsYXRlZCBleGNsdWRpbmdcbiAgLy8gdGhlIHNpemUgb2YgdGhlIHBvcHBlciBlbGVtZW50IGl0c2VsZlxuICB2YXIgdHJhbnNmb3JtUHJvcCA9IGdldFN1cHBvcnRlZFByb3BlcnR5TmFtZSgndHJhbnNmb3JtJyk7XG4gIHZhciBwb3BwZXJTdHlsZXMgPSBkYXRhLmluc3RhbmNlLnBvcHBlci5zdHlsZTsgLy8gYXNzaWdubWVudCB0byBoZWxwIG1pbmlmaWNhdGlvblxuICB2YXIgdG9wID0gcG9wcGVyU3R5bGVzLnRvcCxcbiAgICAgIGxlZnQgPSBwb3BwZXJTdHlsZXMubGVmdCxcbiAgICAgIHRyYW5zZm9ybSA9IHBvcHBlclN0eWxlc1t0cmFuc2Zvcm1Qcm9wXTtcblxuICBwb3BwZXJTdHlsZXMudG9wID0gJyc7XG4gIHBvcHBlclN0eWxlcy5sZWZ0ID0gJyc7XG4gIHBvcHBlclN0eWxlc1t0cmFuc2Zvcm1Qcm9wXSA9ICcnO1xuXG4gIHZhciBib3VuZGFyaWVzID0gZ2V0Qm91bmRhcmllcyhkYXRhLmluc3RhbmNlLnBvcHBlciwgZGF0YS5pbnN0YW5jZS5yZWZlcmVuY2UsIG9wdGlvbnMucGFkZGluZywgYm91bmRhcmllc0VsZW1lbnQsIGRhdGEucG9zaXRpb25GaXhlZCk7XG5cbiAgLy8gTk9URTogRE9NIGFjY2VzcyBoZXJlXG4gIC8vIHJlc3RvcmVzIHRoZSBvcmlnaW5hbCBzdHlsZSBwcm9wZXJ0aWVzIGFmdGVyIHRoZSBvZmZzZXRzIGhhdmUgYmVlbiBjb21wdXRlZFxuICBwb3BwZXJTdHlsZXMudG9wID0gdG9wO1xuICBwb3BwZXJTdHlsZXMubGVmdCA9IGxlZnQ7XG4gIHBvcHBlclN0eWxlc1t0cmFuc2Zvcm1Qcm9wXSA9IHRyYW5zZm9ybTtcblxuICBvcHRpb25zLmJvdW5kYXJpZXMgPSBib3VuZGFyaWVzO1xuXG4gIHZhciBvcmRlciA9IG9wdGlvbnMucHJpb3JpdHk7XG4gIHZhciBwb3BwZXIgPSBkYXRhLm9mZnNldHMucG9wcGVyO1xuXG4gIHZhciBjaGVjayA9IHtcbiAgICBwcmltYXJ5OiBmdW5jdGlvbiBwcmltYXJ5KHBsYWNlbWVudCkge1xuICAgICAgdmFyIHZhbHVlID0gcG9wcGVyW3BsYWNlbWVudF07XG4gICAgICBpZiAocG9wcGVyW3BsYWNlbWVudF0gPCBib3VuZGFyaWVzW3BsYWNlbWVudF0gJiYgIW9wdGlvbnMuZXNjYXBlV2l0aFJlZmVyZW5jZSkge1xuICAgICAgICB2YWx1ZSA9IE1hdGgubWF4KHBvcHBlcltwbGFjZW1lbnRdLCBib3VuZGFyaWVzW3BsYWNlbWVudF0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRlZmluZVByb3BlcnR5KHt9LCBwbGFjZW1lbnQsIHZhbHVlKTtcbiAgICB9LFxuICAgIHNlY29uZGFyeTogZnVuY3Rpb24gc2Vjb25kYXJ5KHBsYWNlbWVudCkge1xuICAgICAgdmFyIG1haW5TaWRlID0gcGxhY2VtZW50ID09PSAncmlnaHQnID8gJ2xlZnQnIDogJ3RvcCc7XG4gICAgICB2YXIgdmFsdWUgPSBwb3BwZXJbbWFpblNpZGVdO1xuICAgICAgaWYgKHBvcHBlcltwbGFjZW1lbnRdID4gYm91bmRhcmllc1twbGFjZW1lbnRdICYmICFvcHRpb25zLmVzY2FwZVdpdGhSZWZlcmVuY2UpIHtcbiAgICAgICAgdmFsdWUgPSBNYXRoLm1pbihwb3BwZXJbbWFpblNpZGVdLCBib3VuZGFyaWVzW3BsYWNlbWVudF0gLSAocGxhY2VtZW50ID09PSAncmlnaHQnID8gcG9wcGVyLndpZHRoIDogcG9wcGVyLmhlaWdodCkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRlZmluZVByb3BlcnR5KHt9LCBtYWluU2lkZSwgdmFsdWUpO1xuICAgIH1cbiAgfTtcblxuICBvcmRlci5mb3JFYWNoKGZ1bmN0aW9uIChwbGFjZW1lbnQpIHtcbiAgICB2YXIgc2lkZSA9IFsnbGVmdCcsICd0b3AnXS5pbmRleE9mKHBsYWNlbWVudCkgIT09IC0xID8gJ3ByaW1hcnknIDogJ3NlY29uZGFyeSc7XG4gICAgcG9wcGVyID0gX2V4dGVuZHMoe30sIHBvcHBlciwgY2hlY2tbc2lkZV0ocGxhY2VtZW50KSk7XG4gIH0pO1xuXG4gIGRhdGEub2Zmc2V0cy5wb3BwZXIgPSBwb3BwZXI7XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgYHVwZGF0ZWAgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cbmZ1bmN0aW9uIHNoaWZ0KGRhdGEpIHtcbiAgdmFyIHBsYWNlbWVudCA9IGRhdGEucGxhY2VtZW50O1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IHBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuICB2YXIgc2hpZnR2YXJpYXRpb24gPSBwbGFjZW1lbnQuc3BsaXQoJy0nKVsxXTtcblxuICAvLyBpZiBzaGlmdCBzaGlmdHZhcmlhdGlvbiBpcyBzcGVjaWZpZWQsIHJ1biB0aGUgbW9kaWZpZXJcbiAgaWYgKHNoaWZ0dmFyaWF0aW9uKSB7XG4gICAgdmFyIF9kYXRhJG9mZnNldHMgPSBkYXRhLm9mZnNldHMsXG4gICAgICAgIHJlZmVyZW5jZSA9IF9kYXRhJG9mZnNldHMucmVmZXJlbmNlLFxuICAgICAgICBwb3BwZXIgPSBfZGF0YSRvZmZzZXRzLnBvcHBlcjtcblxuICAgIHZhciBpc1ZlcnRpY2FsID0gWydib3R0b20nLCAndG9wJ10uaW5kZXhPZihiYXNlUGxhY2VtZW50KSAhPT0gLTE7XG4gICAgdmFyIHNpZGUgPSBpc1ZlcnRpY2FsID8gJ2xlZnQnIDogJ3RvcCc7XG4gICAgdmFyIG1lYXN1cmVtZW50ID0gaXNWZXJ0aWNhbCA/ICd3aWR0aCcgOiAnaGVpZ2h0JztcblxuICAgIHZhciBzaGlmdE9mZnNldHMgPSB7XG4gICAgICBzdGFydDogZGVmaW5lUHJvcGVydHkoe30sIHNpZGUsIHJlZmVyZW5jZVtzaWRlXSksXG4gICAgICBlbmQ6IGRlZmluZVByb3BlcnR5KHt9LCBzaWRlLCByZWZlcmVuY2Vbc2lkZV0gKyByZWZlcmVuY2VbbWVhc3VyZW1lbnRdIC0gcG9wcGVyW21lYXN1cmVtZW50XSlcbiAgICB9O1xuXG4gICAgZGF0YS5vZmZzZXRzLnBvcHBlciA9IF9leHRlbmRzKHt9LCBwb3BwZXIsIHNoaWZ0T2Zmc2V0c1tzaGlmdHZhcmlhdGlvbl0pO1xuICB9XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgdXBkYXRlIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5mdW5jdGlvbiBoaWRlKGRhdGEpIHtcbiAgaWYgKCFpc01vZGlmaWVyUmVxdWlyZWQoZGF0YS5pbnN0YW5jZS5tb2RpZmllcnMsICdoaWRlJywgJ3ByZXZlbnRPdmVyZmxvdycpKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICB2YXIgcmVmUmVjdCA9IGRhdGEub2Zmc2V0cy5yZWZlcmVuY2U7XG4gIHZhciBib3VuZCA9IGZpbmQoZGF0YS5pbnN0YW5jZS5tb2RpZmllcnMsIGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgIHJldHVybiBtb2RpZmllci5uYW1lID09PSAncHJldmVudE92ZXJmbG93JztcbiAgfSkuYm91bmRhcmllcztcblxuICBpZiAocmVmUmVjdC5ib3R0b20gPCBib3VuZC50b3AgfHwgcmVmUmVjdC5sZWZ0ID4gYm91bmQucmlnaHQgfHwgcmVmUmVjdC50b3AgPiBib3VuZC5ib3R0b20gfHwgcmVmUmVjdC5yaWdodCA8IGJvdW5kLmxlZnQpIHtcbiAgICAvLyBBdm9pZCB1bm5lY2Vzc2FyeSBET00gYWNjZXNzIGlmIHZpc2liaWxpdHkgaGFzbid0IGNoYW5nZWRcbiAgICBpZiAoZGF0YS5oaWRlID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBkYXRhLmhpZGUgPSB0cnVlO1xuICAgIGRhdGEuYXR0cmlidXRlc1sneC1vdXQtb2YtYm91bmRhcmllcyddID0gJyc7XG4gIH0gZWxzZSB7XG4gICAgLy8gQXZvaWQgdW5uZWNlc3NhcnkgRE9NIGFjY2VzcyBpZiB2aXNpYmlsaXR5IGhhc24ndCBjaGFuZ2VkXG4gICAgaWYgKGRhdGEuaGlkZSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIGRhdGEuaGlkZSA9IGZhbHNlO1xuICAgIGRhdGEuYXR0cmlidXRlc1sneC1vdXQtb2YtYm91bmRhcmllcyddID0gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gZGF0YTtcbn1cblxuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSBgdXBkYXRlYCBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZnVuY3Rpb24gaW5uZXIoZGF0YSkge1xuICB2YXIgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQ7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gcGxhY2VtZW50LnNwbGl0KCctJylbMF07XG4gIHZhciBfZGF0YSRvZmZzZXRzID0gZGF0YS5vZmZzZXRzLFxuICAgICAgcG9wcGVyID0gX2RhdGEkb2Zmc2V0cy5wb3BwZXIsXG4gICAgICByZWZlcmVuY2UgPSBfZGF0YSRvZmZzZXRzLnJlZmVyZW5jZTtcblxuICB2YXIgaXNIb3JpeiA9IFsnbGVmdCcsICdyaWdodCddLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgIT09IC0xO1xuXG4gIHZhciBzdWJ0cmFjdExlbmd0aCA9IFsndG9wJywgJ2xlZnQnXS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpID09PSAtMTtcblxuICBwb3BwZXJbaXNIb3JpeiA/ICdsZWZ0JyA6ICd0b3AnXSA9IHJlZmVyZW5jZVtiYXNlUGxhY2VtZW50XSAtIChzdWJ0cmFjdExlbmd0aCA/IHBvcHBlcltpc0hvcml6ID8gJ3dpZHRoJyA6ICdoZWlnaHQnXSA6IDApO1xuXG4gIGRhdGEucGxhY2VtZW50ID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgZGF0YS5vZmZzZXRzLnBvcHBlciA9IGdldENsaWVudFJlY3QocG9wcGVyKTtcblxuICByZXR1cm4gZGF0YTtcbn1cblxuLyoqXG4gKiBNb2RpZmllciBmdW5jdGlvbiwgZWFjaCBtb2RpZmllciBjYW4gaGF2ZSBhIGZ1bmN0aW9uIG9mIHRoaXMgdHlwZSBhc3NpZ25lZFxuICogdG8gaXRzIGBmbmAgcHJvcGVydHkuPGJyIC8+XG4gKiBUaGVzZSBmdW5jdGlvbnMgd2lsbCBiZSBjYWxsZWQgb24gZWFjaCB1cGRhdGUsIHRoaXMgbWVhbnMgdGhhdCB5b3UgbXVzdFxuICogbWFrZSBzdXJlIHRoZXkgYXJlIHBlcmZvcm1hbnQgZW5vdWdoIHRvIGF2b2lkIHBlcmZvcm1hbmNlIGJvdHRsZW5lY2tzLlxuICpcbiAqIEBmdW5jdGlvbiBNb2RpZmllckZuXG4gKiBAYXJndW1lbnQge2RhdGFPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IGB1cGRhdGVgIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge2RhdGFPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuXG4vKipcbiAqIE1vZGlmaWVycyBhcmUgcGx1Z2lucyB1c2VkIHRvIGFsdGVyIHRoZSBiZWhhdmlvciBvZiB5b3VyIHBvcHBlcnMuPGJyIC8+XG4gKiBQb3BwZXIuanMgdXNlcyBhIHNldCBvZiA5IG1vZGlmaWVycyB0byBwcm92aWRlIGFsbCB0aGUgYmFzaWMgZnVuY3Rpb25hbGl0aWVzXG4gKiBuZWVkZWQgYnkgdGhlIGxpYnJhcnkuXG4gKlxuICogVXN1YWxseSB5b3UgZG9uJ3Qgd2FudCB0byBvdmVycmlkZSB0aGUgYG9yZGVyYCwgYGZuYCBhbmQgYG9uTG9hZGAgcHJvcHMuXG4gKiBBbGwgdGhlIG90aGVyIHByb3BlcnRpZXMgYXJlIGNvbmZpZ3VyYXRpb25zIHRoYXQgY291bGQgYmUgdHdlYWtlZC5cbiAqIEBuYW1lc3BhY2UgbW9kaWZpZXJzXG4gKi9cbnZhciBtb2RpZmllcnMgPSB7XG4gIC8qKlxuICAgKiBNb2RpZmllciB1c2VkIHRvIHNoaWZ0IHRoZSBwb3BwZXIgb24gdGhlIHN0YXJ0IG9yIGVuZCBvZiBpdHMgcmVmZXJlbmNlXG4gICAqIGVsZW1lbnQuPGJyIC8+XG4gICAqIEl0IHdpbGwgcmVhZCB0aGUgdmFyaWF0aW9uIG9mIHRoZSBgcGxhY2VtZW50YCBwcm9wZXJ0eS48YnIgLz5cbiAgICogSXQgY2FuIGJlIG9uZSBlaXRoZXIgYC1lbmRgIG9yIGAtc3RhcnRgLlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAgc2hpZnQ6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9MTAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiAxMDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBzaGlmdFxuICB9LFxuXG4gIC8qKlxuICAgKiBUaGUgYG9mZnNldGAgbW9kaWZpZXIgY2FuIHNoaWZ0IHlvdXIgcG9wcGVyIG9uIGJvdGggaXRzIGF4aXMuXG4gICAqXG4gICAqIEl0IGFjY2VwdHMgdGhlIGZvbGxvd2luZyB1bml0czpcbiAgICogLSBgcHhgIG9yIHVuaXQtbGVzcywgaW50ZXJwcmV0ZWQgYXMgcGl4ZWxzXG4gICAqIC0gYCVgIG9yIGAlcmAsIHBlcmNlbnRhZ2UgcmVsYXRpdmUgdG8gdGhlIGxlbmd0aCBvZiB0aGUgcmVmZXJlbmNlIGVsZW1lbnRcbiAgICogLSBgJXBgLCBwZXJjZW50YWdlIHJlbGF0aXZlIHRvIHRoZSBsZW5ndGggb2YgdGhlIHBvcHBlciBlbGVtZW50XG4gICAqIC0gYHZ3YCwgQ1NTIHZpZXdwb3J0IHdpZHRoIHVuaXRcbiAgICogLSBgdmhgLCBDU1Mgdmlld3BvcnQgaGVpZ2h0IHVuaXRcbiAgICpcbiAgICogRm9yIGxlbmd0aCBpcyBpbnRlbmRlZCB0aGUgbWFpbiBheGlzIHJlbGF0aXZlIHRvIHRoZSBwbGFjZW1lbnQgb2YgdGhlIHBvcHBlci48YnIgLz5cbiAgICogVGhpcyBtZWFucyB0aGF0IGlmIHRoZSBwbGFjZW1lbnQgaXMgYHRvcGAgb3IgYGJvdHRvbWAsIHRoZSBsZW5ndGggd2lsbCBiZSB0aGVcbiAgICogYHdpZHRoYC4gSW4gY2FzZSBvZiBgbGVmdGAgb3IgYHJpZ2h0YCwgaXQgd2lsbCBiZSB0aGUgYGhlaWdodGAuXG4gICAqXG4gICAqIFlvdSBjYW4gcHJvdmlkZSBhIHNpbmdsZSB2YWx1ZSAoYXMgYE51bWJlcmAgb3IgYFN0cmluZ2ApLCBvciBhIHBhaXIgb2YgdmFsdWVzXG4gICAqIGFzIGBTdHJpbmdgIGRpdmlkZWQgYnkgYSBjb21tYSBvciBvbmUgKG9yIG1vcmUpIHdoaXRlIHNwYWNlcy48YnIgLz5cbiAgICogVGhlIGxhdHRlciBpcyBhIGRlcHJlY2F0ZWQgbWV0aG9kIGJlY2F1c2UgaXQgbGVhZHMgdG8gY29uZnVzaW9uIGFuZCB3aWxsIGJlXG4gICAqIHJlbW92ZWQgaW4gdjIuPGJyIC8+XG4gICAqIEFkZGl0aW9uYWxseSwgaXQgYWNjZXB0cyBhZGRpdGlvbnMgYW5kIHN1YnRyYWN0aW9ucyBiZXR3ZWVuIGRpZmZlcmVudCB1bml0cy5cbiAgICogTm90ZSB0aGF0IG11bHRpcGxpY2F0aW9ucyBhbmQgZGl2aXNpb25zIGFyZW4ndCBzdXBwb3J0ZWQuXG4gICAqXG4gICAqIFZhbGlkIGV4YW1wbGVzIGFyZTpcbiAgICogYGBgXG4gICAqIDEwXG4gICAqICcxMCUnXG4gICAqICcxMCwgMTAnXG4gICAqICcxMCUsIDEwJ1xuICAgKiAnMTAgKyAxMCUnXG4gICAqICcxMCAtIDV2aCArIDMlJ1xuICAgKiAnLTEwcHggKyA1dmgsIDVweCAtIDYlJ1xuICAgKiBgYGBcbiAgICogPiAqKk5CKio6IElmIHlvdSBkZXNpcmUgdG8gYXBwbHkgb2Zmc2V0cyB0byB5b3VyIHBvcHBlcnMgaW4gYSB3YXkgdGhhdCBtYXkgbWFrZSB0aGVtIG92ZXJsYXBcbiAgICogPiB3aXRoIHRoZWlyIHJlZmVyZW5jZSBlbGVtZW50LCB1bmZvcnR1bmF0ZWx5LCB5b3Ugd2lsbCBoYXZlIHRvIGRpc2FibGUgdGhlIGBmbGlwYCBtb2RpZmllci5cbiAgICogPiBZb3UgY2FuIHJlYWQgbW9yZSBvbiB0aGlzIGF0IHRoaXMgW2lzc3VlXShodHRwczovL2dpdGh1Yi5jb20vRmV6VnJhc3RhL3BvcHBlci5qcy9pc3N1ZXMvMzczKS5cbiAgICpcbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIG9mZnNldDoge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj0yMDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDIwMCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IG9mZnNldCxcbiAgICAvKiogQHByb3Age051bWJlcnxTdHJpbmd9IG9mZnNldD0wXG4gICAgICogVGhlIG9mZnNldCB2YWx1ZSBhcyBkZXNjcmliZWQgaW4gdGhlIG1vZGlmaWVyIGRlc2NyaXB0aW9uXG4gICAgICovXG4gICAgb2Zmc2V0OiAwXG4gIH0sXG5cbiAgLyoqXG4gICAqIE1vZGlmaWVyIHVzZWQgdG8gcHJldmVudCB0aGUgcG9wcGVyIGZyb20gYmVpbmcgcG9zaXRpb25lZCBvdXRzaWRlIHRoZSBib3VuZGFyeS5cbiAgICpcbiAgICogQSBzY2VuYXJpbyBleGlzdHMgd2hlcmUgdGhlIHJlZmVyZW5jZSBpdHNlbGYgaXMgbm90IHdpdGhpbiB0aGUgYm91bmRhcmllcy48YnIgLz5cbiAgICogV2UgY2FuIHNheSBpdCBoYXMgXCJlc2NhcGVkIHRoZSBib3VuZGFyaWVzXCIg4oCUIG9yIGp1c3QgXCJlc2NhcGVkXCIuPGJyIC8+XG4gICAqIEluIHRoaXMgY2FzZSB3ZSBuZWVkIHRvIGRlY2lkZSB3aGV0aGVyIHRoZSBwb3BwZXIgc2hvdWxkIGVpdGhlcjpcbiAgICpcbiAgICogLSBkZXRhY2ggZnJvbSB0aGUgcmVmZXJlbmNlIGFuZCByZW1haW4gXCJ0cmFwcGVkXCIgaW4gdGhlIGJvdW5kYXJpZXMsIG9yXG4gICAqIC0gaWYgaXQgc2hvdWxkIGlnbm9yZSB0aGUgYm91bmRhcnkgYW5kIFwiZXNjYXBlIHdpdGggaXRzIHJlZmVyZW5jZVwiXG4gICAqXG4gICAqIFdoZW4gYGVzY2FwZVdpdGhSZWZlcmVuY2VgIGlzIHNldCB0b2B0cnVlYCBhbmQgcmVmZXJlbmNlIGlzIGNvbXBsZXRlbHlcbiAgICogb3V0c2lkZSBpdHMgYm91bmRhcmllcywgdGhlIHBvcHBlciB3aWxsIG92ZXJmbG93IChvciBjb21wbGV0ZWx5IGxlYXZlKVxuICAgKiB0aGUgYm91bmRhcmllcyBpbiBvcmRlciB0byByZW1haW4gYXR0YWNoZWQgdG8gdGhlIGVkZ2Ugb2YgdGhlIHJlZmVyZW5jZS5cbiAgICpcbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIHByZXZlbnRPdmVyZmxvdzoge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj0zMDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDMwMCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IHByZXZlbnRPdmVyZmxvdyxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7QXJyYXl9IFtwcmlvcml0eT1bJ2xlZnQnLCdyaWdodCcsJ3RvcCcsJ2JvdHRvbSddXVxuICAgICAqIFBvcHBlciB3aWxsIHRyeSB0byBwcmV2ZW50IG92ZXJmbG93IGZvbGxvd2luZyB0aGVzZSBwcmlvcml0aWVzIGJ5IGRlZmF1bHQsXG4gICAgICogdGhlbiwgaXQgY291bGQgb3ZlcmZsb3cgb24gdGhlIGxlZnQgYW5kIG9uIHRvcCBvZiB0aGUgYGJvdW5kYXJpZXNFbGVtZW50YFxuICAgICAqL1xuICAgIHByaW9yaXR5OiBbJ2xlZnQnLCAncmlnaHQnLCAndG9wJywgJ2JvdHRvbSddLFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtudW1iZXJ9IHBhZGRpbmc9NVxuICAgICAqIEFtb3VudCBvZiBwaXhlbCB1c2VkIHRvIGRlZmluZSBhIG1pbmltdW0gZGlzdGFuY2UgYmV0d2VlbiB0aGUgYm91bmRhcmllc1xuICAgICAqIGFuZCB0aGUgcG9wcGVyLiBUaGlzIG1ha2VzIHN1cmUgdGhlIHBvcHBlciBhbHdheXMgaGFzIGEgbGl0dGxlIHBhZGRpbmdcbiAgICAgKiBiZXR3ZWVuIHRoZSBlZGdlcyBvZiBpdHMgY29udGFpbmVyXG4gICAgICovXG4gICAgcGFkZGluZzogNSxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7U3RyaW5nfEhUTUxFbGVtZW50fSBib3VuZGFyaWVzRWxlbWVudD0nc2Nyb2xsUGFyZW50J1xuICAgICAqIEJvdW5kYXJpZXMgdXNlZCBieSB0aGUgbW9kaWZpZXIuIENhbiBiZSBgc2Nyb2xsUGFyZW50YCwgYHdpbmRvd2AsXG4gICAgICogYHZpZXdwb3J0YCBvciBhbnkgRE9NIGVsZW1lbnQuXG4gICAgICovXG4gICAgYm91bmRhcmllc0VsZW1lbnQ6ICdzY3JvbGxQYXJlbnQnXG4gIH0sXG5cbiAgLyoqXG4gICAqIE1vZGlmaWVyIHVzZWQgdG8gbWFrZSBzdXJlIHRoZSByZWZlcmVuY2UgYW5kIGl0cyBwb3BwZXIgc3RheSBuZWFyIGVhY2ggb3RoZXJcbiAgICogd2l0aG91dCBsZWF2aW5nIGFueSBnYXAgYmV0d2VlbiB0aGUgdHdvLiBFc3BlY2lhbGx5IHVzZWZ1bCB3aGVuIHRoZSBhcnJvdyBpc1xuICAgKiBlbmFibGVkIGFuZCB5b3Ugd2FudCB0byBlbnN1cmUgdGhhdCBpdCBwb2ludHMgdG8gaXRzIHJlZmVyZW5jZSBlbGVtZW50LlxuICAgKiBJdCBjYXJlcyBvbmx5IGFib3V0IHRoZSBmaXJzdCBheGlzLiBZb3UgY2FuIHN0aWxsIGhhdmUgcG9wcGVycyB3aXRoIG1hcmdpblxuICAgKiBiZXR3ZWVuIHRoZSBwb3BwZXIgYW5kIGl0cyByZWZlcmVuY2UgZWxlbWVudC5cbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIGtlZXBUb2dldGhlcjoge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj00MDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDQwMCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IGtlZXBUb2dldGhlclxuICB9LFxuXG4gIC8qKlxuICAgKiBUaGlzIG1vZGlmaWVyIGlzIHVzZWQgdG8gbW92ZSB0aGUgYGFycm93RWxlbWVudGAgb2YgdGhlIHBvcHBlciB0byBtYWtlXG4gICAqIHN1cmUgaXQgaXMgcG9zaXRpb25lZCBiZXR3ZWVuIHRoZSByZWZlcmVuY2UgZWxlbWVudCBhbmQgaXRzIHBvcHBlciBlbGVtZW50LlxuICAgKiBJdCB3aWxsIHJlYWQgdGhlIG91dGVyIHNpemUgb2YgdGhlIGBhcnJvd0VsZW1lbnRgIG5vZGUgdG8gZGV0ZWN0IGhvdyBtYW55XG4gICAqIHBpeGVscyBvZiBjb25qdW5jdGlvbiBhcmUgbmVlZGVkLlxuICAgKlxuICAgKiBJdCBoYXMgbm8gZWZmZWN0IGlmIG5vIGBhcnJvd0VsZW1lbnRgIGlzIHByb3ZpZGVkLlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAgYXJyb3c6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9NTAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiA1MDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBhcnJvdyxcbiAgICAvKiogQHByb3Age1N0cmluZ3xIVE1MRWxlbWVudH0gZWxlbWVudD0nW3gtYXJyb3ddJyAtIFNlbGVjdG9yIG9yIG5vZGUgdXNlZCBhcyBhcnJvdyAqL1xuICAgIGVsZW1lbnQ6ICdbeC1hcnJvd10nXG4gIH0sXG5cbiAgLyoqXG4gICAqIE1vZGlmaWVyIHVzZWQgdG8gZmxpcCB0aGUgcG9wcGVyJ3MgcGxhY2VtZW50IHdoZW4gaXQgc3RhcnRzIHRvIG92ZXJsYXAgaXRzXG4gICAqIHJlZmVyZW5jZSBlbGVtZW50LlxuICAgKlxuICAgKiBSZXF1aXJlcyB0aGUgYHByZXZlbnRPdmVyZmxvd2AgbW9kaWZpZXIgYmVmb3JlIGl0IGluIG9yZGVyIHRvIHdvcmsuXG4gICAqXG4gICAqICoqTk9URToqKiB0aGlzIG1vZGlmaWVyIHdpbGwgaW50ZXJydXB0IHRoZSBjdXJyZW50IHVwZGF0ZSBjeWNsZSBhbmQgd2lsbFxuICAgKiByZXN0YXJ0IGl0IGlmIGl0IGRldGVjdHMgdGhlIG5lZWQgdG8gZmxpcCB0aGUgcGxhY2VtZW50LlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAgZmxpcDoge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj02MDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDYwMCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IGZsaXAsXG4gICAgLyoqXG4gICAgICogQHByb3Age1N0cmluZ3xBcnJheX0gYmVoYXZpb3I9J2ZsaXAnXG4gICAgICogVGhlIGJlaGF2aW9yIHVzZWQgdG8gY2hhbmdlIHRoZSBwb3BwZXIncyBwbGFjZW1lbnQuIEl0IGNhbiBiZSBvbmUgb2ZcbiAgICAgKiBgZmxpcGAsIGBjbG9ja3dpc2VgLCBgY291bnRlcmNsb2Nrd2lzZWAgb3IgYW4gYXJyYXkgd2l0aCBhIGxpc3Qgb2YgdmFsaWRcbiAgICAgKiBwbGFjZW1lbnRzICh3aXRoIG9wdGlvbmFsIHZhcmlhdGlvbnMpXG4gICAgICovXG4gICAgYmVoYXZpb3I6ICdmbGlwJyxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7bnVtYmVyfSBwYWRkaW5nPTVcbiAgICAgKiBUaGUgcG9wcGVyIHdpbGwgZmxpcCBpZiBpdCBoaXRzIHRoZSBlZGdlcyBvZiB0aGUgYGJvdW5kYXJpZXNFbGVtZW50YFxuICAgICAqL1xuICAgIHBhZGRpbmc6IDUsXG4gICAgLyoqXG4gICAgICogQHByb3Age1N0cmluZ3xIVE1MRWxlbWVudH0gYm91bmRhcmllc0VsZW1lbnQ9J3ZpZXdwb3J0J1xuICAgICAqIFRoZSBlbGVtZW50IHdoaWNoIHdpbGwgZGVmaW5lIHRoZSBib3VuZGFyaWVzIG9mIHRoZSBwb3BwZXIgcG9zaXRpb24uXG4gICAgICogVGhlIHBvcHBlciB3aWxsIG5ldmVyIGJlIHBsYWNlZCBvdXRzaWRlIG9mIHRoZSBkZWZpbmVkIGJvdW5kYXJpZXNcbiAgICAgKiAoZXhjZXB0IGlmIGBrZWVwVG9nZXRoZXJgIGlzIGVuYWJsZWQpXG4gICAgICovXG4gICAgYm91bmRhcmllc0VsZW1lbnQ6ICd2aWV3cG9ydCcsXG4gICAgLyoqXG4gICAgICogQHByb3Age0Jvb2xlYW59IGZsaXBWYXJpYXRpb25zPWZhbHNlXG4gICAgICogVGhlIHBvcHBlciB3aWxsIHN3aXRjaCBwbGFjZW1lbnQgdmFyaWF0aW9uIGJldHdlZW4gYC1zdGFydGAgYW5kIGAtZW5kYCB3aGVuXG4gICAgICogdGhlIHJlZmVyZW5jZSBlbGVtZW50IG92ZXJsYXBzIGl0cyBib3VuZGFyaWVzLlxuICAgICAqXG4gICAgICogVGhlIG9yaWdpbmFsIHBsYWNlbWVudCBzaG91bGQgaGF2ZSBhIHNldCB2YXJpYXRpb24uXG4gICAgICovXG4gICAgZmxpcFZhcmlhdGlvbnM6IGZhbHNlLFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtCb29sZWFufSBmbGlwVmFyaWF0aW9uc0J5Q29udGVudD1mYWxzZVxuICAgICAqIFRoZSBwb3BwZXIgd2lsbCBzd2l0Y2ggcGxhY2VtZW50IHZhcmlhdGlvbiBiZXR3ZWVuIGAtc3RhcnRgIGFuZCBgLWVuZGAgd2hlblxuICAgICAqIHRoZSBwb3BwZXIgZWxlbWVudCBvdmVybGFwcyBpdHMgcmVmZXJlbmNlIGJvdW5kYXJpZXMuXG4gICAgICpcbiAgICAgKiBUaGUgb3JpZ2luYWwgcGxhY2VtZW50IHNob3VsZCBoYXZlIGEgc2V0IHZhcmlhdGlvbi5cbiAgICAgKi9cbiAgICBmbGlwVmFyaWF0aW9uc0J5Q29udGVudDogZmFsc2VcbiAgfSxcblxuICAvKipcbiAgICogTW9kaWZpZXIgdXNlZCB0byBtYWtlIHRoZSBwb3BwZXIgZmxvdyB0b3dhcmQgdGhlIGlubmVyIG9mIHRoZSByZWZlcmVuY2UgZWxlbWVudC5cbiAgICogQnkgZGVmYXVsdCwgd2hlbiB0aGlzIG1vZGlmaWVyIGlzIGRpc2FibGVkLCB0aGUgcG9wcGVyIHdpbGwgYmUgcGxhY2VkIG91dHNpZGVcbiAgICogdGhlIHJlZmVyZW5jZSBlbGVtZW50LlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAgaW5uZXI6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9NzAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiA3MDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPWZhbHNlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IGlubmVyXG4gIH0sXG5cbiAgLyoqXG4gICAqIE1vZGlmaWVyIHVzZWQgdG8gaGlkZSB0aGUgcG9wcGVyIHdoZW4gaXRzIHJlZmVyZW5jZSBlbGVtZW50IGlzIG91dHNpZGUgb2YgdGhlXG4gICAqIHBvcHBlciBib3VuZGFyaWVzLiBJdCB3aWxsIHNldCBhIGB4LW91dC1vZi1ib3VuZGFyaWVzYCBhdHRyaWJ1dGUgd2hpY2ggY2FuXG4gICAqIGJlIHVzZWQgdG8gaGlkZSB3aXRoIGEgQ1NTIHNlbGVjdG9yIHRoZSBwb3BwZXIgd2hlbiBpdHMgcmVmZXJlbmNlIGlzXG4gICAqIG91dCBvZiBib3VuZGFyaWVzLlxuICAgKlxuICAgKiBSZXF1aXJlcyB0aGUgYHByZXZlbnRPdmVyZmxvd2AgbW9kaWZpZXIgYmVmb3JlIGl0IGluIG9yZGVyIHRvIHdvcmsuXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBoaWRlOiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTgwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogODAwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjogaGlkZVxuICB9LFxuXG4gIC8qKlxuICAgKiBDb21wdXRlcyB0aGUgc3R5bGUgdGhhdCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlciBlbGVtZW50IHRvIGdldHNcbiAgICogcHJvcGVybHkgcG9zaXRpb25lZC5cbiAgICpcbiAgICogTm90ZSB0aGF0IHRoaXMgbW9kaWZpZXIgd2lsbCBub3QgdG91Y2ggdGhlIERPTSwgaXQganVzdCBwcmVwYXJlcyB0aGUgc3R5bGVzXG4gICAqIHNvIHRoYXQgYGFwcGx5U3R5bGVgIG1vZGlmaWVyIGNhbiBhcHBseSBpdC4gVGhpcyBzZXBhcmF0aW9uIGlzIHVzZWZ1bFxuICAgKiBpbiBjYXNlIHlvdSBuZWVkIHRvIHJlcGxhY2UgYGFwcGx5U3R5bGVgIHdpdGggYSBjdXN0b20gaW1wbGVtZW50YXRpb24uXG4gICAqXG4gICAqIFRoaXMgbW9kaWZpZXIgaGFzIGA4NTBgIGFzIGBvcmRlcmAgdmFsdWUgdG8gbWFpbnRhaW4gYmFja3dhcmQgY29tcGF0aWJpbGl0eVxuICAgKiB3aXRoIHByZXZpb3VzIHZlcnNpb25zIG9mIFBvcHBlci5qcy4gRXhwZWN0IHRoZSBtb2RpZmllcnMgb3JkZXJpbmcgbWV0aG9kXG4gICAqIHRvIGNoYW5nZSBpbiBmdXR1cmUgbWFqb3IgdmVyc2lvbnMgb2YgdGhlIGxpYnJhcnkuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBjb21wdXRlU3R5bGU6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9ODUwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiA4NTAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBjb21wdXRlU3R5bGUsXG4gICAgLyoqXG4gICAgICogQHByb3Age0Jvb2xlYW59IGdwdUFjY2VsZXJhdGlvbj10cnVlXG4gICAgICogSWYgdHJ1ZSwgaXQgdXNlcyB0aGUgQ1NTIDNEIHRyYW5zZm9ybWF0aW9uIHRvIHBvc2l0aW9uIHRoZSBwb3BwZXIuXG4gICAgICogT3RoZXJ3aXNlLCBpdCB3aWxsIHVzZSB0aGUgYHRvcGAgYW5kIGBsZWZ0YCBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgZ3B1QWNjZWxlcmF0aW9uOiB0cnVlLFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtzdHJpbmd9IFt4PSdib3R0b20nXVxuICAgICAqIFdoZXJlIHRvIGFuY2hvciB0aGUgWCBheGlzIChgYm90dG9tYCBvciBgdG9wYCkuIEFLQSBYIG9mZnNldCBvcmlnaW4uXG4gICAgICogQ2hhbmdlIHRoaXMgaWYgeW91ciBwb3BwZXIgc2hvdWxkIGdyb3cgaW4gYSBkaXJlY3Rpb24gZGlmZmVyZW50IGZyb20gYGJvdHRvbWBcbiAgICAgKi9cbiAgICB4OiAnYm90dG9tJyxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7c3RyaW5nfSBbeD0nbGVmdCddXG4gICAgICogV2hlcmUgdG8gYW5jaG9yIHRoZSBZIGF4aXMgKGBsZWZ0YCBvciBgcmlnaHRgKS4gQUtBIFkgb2Zmc2V0IG9yaWdpbi5cbiAgICAgKiBDaGFuZ2UgdGhpcyBpZiB5b3VyIHBvcHBlciBzaG91bGQgZ3JvdyBpbiBhIGRpcmVjdGlvbiBkaWZmZXJlbnQgZnJvbSBgcmlnaHRgXG4gICAgICovXG4gICAgeTogJ3JpZ2h0J1xuICB9LFxuXG4gIC8qKlxuICAgKiBBcHBsaWVzIHRoZSBjb21wdXRlZCBzdHlsZXMgdG8gdGhlIHBvcHBlciBlbGVtZW50LlxuICAgKlxuICAgKiBBbGwgdGhlIERPTSBtYW5pcHVsYXRpb25zIGFyZSBsaW1pdGVkIHRvIHRoaXMgbW9kaWZpZXIuIFRoaXMgaXMgdXNlZnVsIGluIGNhc2VcbiAgICogeW91IHdhbnQgdG8gaW50ZWdyYXRlIFBvcHBlci5qcyBpbnNpZGUgYSBmcmFtZXdvcmsgb3IgdmlldyBsaWJyYXJ5IGFuZCB5b3VcbiAgICogd2FudCB0byBkZWxlZ2F0ZSBhbGwgdGhlIERPTSBtYW5pcHVsYXRpb25zIHRvIGl0LlxuICAgKlxuICAgKiBOb3RlIHRoYXQgaWYgeW91IGRpc2FibGUgdGhpcyBtb2RpZmllciwgeW91IG11c3QgbWFrZSBzdXJlIHRoZSBwb3BwZXIgZWxlbWVudFxuICAgKiBoYXMgaXRzIHBvc2l0aW9uIHNldCB0byBgYWJzb2x1dGVgIGJlZm9yZSBQb3BwZXIuanMgY2FuIGRvIGl0cyB3b3JrIVxuICAgKlxuICAgKiBKdXN0IGRpc2FibGUgdGhpcyBtb2RpZmllciBhbmQgZGVmaW5lIHlvdXIgb3duIHRvIGFjaGlldmUgdGhlIGRlc2lyZWQgZWZmZWN0LlxuICAgKlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAgYXBwbHlTdHlsZToge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj05MDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDkwMCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IGFwcGx5U3R5bGUsXG4gICAgLyoqIEBwcm9wIHtGdW5jdGlvbn0gKi9cbiAgICBvbkxvYWQ6IGFwcGx5U3R5bGVPbkxvYWQsXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjEwLjAsIHRoZSBwcm9wZXJ0eSBtb3ZlZCB0byBgY29tcHV0ZVN0eWxlYCBtb2RpZmllclxuICAgICAqIEBwcm9wIHtCb29sZWFufSBncHVBY2NlbGVyYXRpb249dHJ1ZVxuICAgICAqIElmIHRydWUsIGl0IHVzZXMgdGhlIENTUyAzRCB0cmFuc2Zvcm1hdGlvbiB0byBwb3NpdGlvbiB0aGUgcG9wcGVyLlxuICAgICAqIE90aGVyd2lzZSwgaXQgd2lsbCB1c2UgdGhlIGB0b3BgIGFuZCBgbGVmdGAgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGdwdUFjY2VsZXJhdGlvbjogdW5kZWZpbmVkXG4gIH1cbn07XG5cbi8qKlxuICogVGhlIGBkYXRhT2JqZWN0YCBpcyBhbiBvYmplY3QgY29udGFpbmluZyBhbGwgdGhlIGluZm9ybWF0aW9uIHVzZWQgYnkgUG9wcGVyLmpzLlxuICogVGhpcyBvYmplY3QgaXMgcGFzc2VkIHRvIG1vZGlmaWVycyBhbmQgdG8gdGhlIGBvbkNyZWF0ZWAgYW5kIGBvblVwZGF0ZWAgY2FsbGJhY2tzLlxuICogQG5hbWUgZGF0YU9iamVjdFxuICogQHByb3BlcnR5IHtPYmplY3R9IGRhdGEuaW5zdGFuY2UgVGhlIFBvcHBlci5qcyBpbnN0YW5jZVxuICogQHByb3BlcnR5IHtTdHJpbmd9IGRhdGEucGxhY2VtZW50IFBsYWNlbWVudCBhcHBsaWVkIHRvIHBvcHBlclxuICogQHByb3BlcnR5IHtTdHJpbmd9IGRhdGEub3JpZ2luYWxQbGFjZW1lbnQgUGxhY2VtZW50IG9yaWdpbmFsbHkgZGVmaW5lZCBvbiBpbml0XG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IGRhdGEuZmxpcHBlZCBUcnVlIGlmIHBvcHBlciBoYXMgYmVlbiBmbGlwcGVkIGJ5IGZsaXAgbW9kaWZpZXJcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gZGF0YS5oaWRlIFRydWUgaWYgdGhlIHJlZmVyZW5jZSBlbGVtZW50IGlzIG91dCBvZiBib3VuZGFyaWVzLCB1c2VmdWwgdG8ga25vdyB3aGVuIHRvIGhpZGUgdGhlIHBvcHBlclxuICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gZGF0YS5hcnJvd0VsZW1lbnQgTm9kZSB1c2VkIGFzIGFycm93IGJ5IGFycm93IG1vZGlmaWVyXG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YS5zdHlsZXMgQW55IENTUyBwcm9wZXJ0eSBkZWZpbmVkIGhlcmUgd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBwb3BwZXIuIEl0IGV4cGVjdHMgdGhlIEphdmFTY3JpcHQgbm9tZW5jbGF0dXJlIChlZy4gYG1hcmdpbkJvdHRvbWApXG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YS5hcnJvd1N0eWxlcyBBbnkgQ1NTIHByb3BlcnR5IGRlZmluZWQgaGVyZSB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlciBhcnJvdy4gSXQgZXhwZWN0cyB0aGUgSmF2YVNjcmlwdCBub21lbmNsYXR1cmUgKGVnLiBgbWFyZ2luQm90dG9tYClcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhLmJvdW5kYXJpZXMgT2Zmc2V0cyBvZiB0aGUgcG9wcGVyIGJvdW5kYXJpZXNcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhLm9mZnNldHMgVGhlIG1lYXN1cmVtZW50cyBvZiBwb3BwZXIsIHJlZmVyZW5jZSBhbmQgYXJyb3cgZWxlbWVudHNcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhLm9mZnNldHMucG9wcGVyIGB0b3BgLCBgbGVmdGAsIGB3aWR0aGAsIGBoZWlnaHRgIHZhbHVlc1xuICogQHByb3BlcnR5IHtPYmplY3R9IGRhdGEub2Zmc2V0cy5yZWZlcmVuY2UgYHRvcGAsIGBsZWZ0YCwgYHdpZHRoYCwgYGhlaWdodGAgdmFsdWVzXG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YS5vZmZzZXRzLmFycm93XSBgdG9wYCBhbmQgYGxlZnRgIG9mZnNldHMsIG9ubHkgb25lIG9mIHRoZW0gd2lsbCBiZSBkaWZmZXJlbnQgZnJvbSAwXG4gKi9cblxuLyoqXG4gKiBEZWZhdWx0IG9wdGlvbnMgcHJvdmlkZWQgdG8gUG9wcGVyLmpzIGNvbnN0cnVjdG9yLjxiciAvPlxuICogVGhlc2UgY2FuIGJlIG92ZXJyaWRkZW4gdXNpbmcgdGhlIGBvcHRpb25zYCBhcmd1bWVudCBvZiBQb3BwZXIuanMuPGJyIC8+XG4gKiBUbyBvdmVycmlkZSBhbiBvcHRpb24sIHNpbXBseSBwYXNzIGFuIG9iamVjdCB3aXRoIHRoZSBzYW1lXG4gKiBzdHJ1Y3R1cmUgb2YgdGhlIGBvcHRpb25zYCBvYmplY3QsIGFzIHRoZSAzcmQgYXJndW1lbnQuIEZvciBleGFtcGxlOlxuICogYGBgXG4gKiBuZXcgUG9wcGVyKHJlZiwgcG9wLCB7XG4gKiAgIG1vZGlmaWVyczoge1xuICogICAgIHByZXZlbnRPdmVyZmxvdzogeyBlbmFibGVkOiBmYWxzZSB9XG4gKiAgIH1cbiAqIH0pXG4gKiBgYGBcbiAqIEB0eXBlIHtPYmplY3R9XG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyb2YgUG9wcGVyXG4gKi9cbnZhciBEZWZhdWx0cyA9IHtcbiAgLyoqXG4gICAqIFBvcHBlcidzIHBsYWNlbWVudC5cbiAgICogQHByb3Age1BvcHBlci5wbGFjZW1lbnRzfSBwbGFjZW1lbnQ9J2JvdHRvbSdcbiAgICovXG4gIHBsYWNlbWVudDogJ2JvdHRvbScsXG5cbiAgLyoqXG4gICAqIFNldCB0aGlzIHRvIHRydWUgaWYgeW91IHdhbnQgcG9wcGVyIHRvIHBvc2l0aW9uIGl0IHNlbGYgaW4gJ2ZpeGVkJyBtb2RlXG4gICAqIEBwcm9wIHtCb29sZWFufSBwb3NpdGlvbkZpeGVkPWZhbHNlXG4gICAqL1xuICBwb3NpdGlvbkZpeGVkOiBmYWxzZSxcblxuICAvKipcbiAgICogV2hldGhlciBldmVudHMgKHJlc2l6ZSwgc2Nyb2xsKSBhcmUgaW5pdGlhbGx5IGVuYWJsZWQuXG4gICAqIEBwcm9wIHtCb29sZWFufSBldmVudHNFbmFibGVkPXRydWVcbiAgICovXG4gIGV2ZW50c0VuYWJsZWQ6IHRydWUsXG5cbiAgLyoqXG4gICAqIFNldCB0byB0cnVlIGlmIHlvdSB3YW50IHRvIGF1dG9tYXRpY2FsbHkgcmVtb3ZlIHRoZSBwb3BwZXIgd2hlblxuICAgKiB5b3UgY2FsbCB0aGUgYGRlc3Ryb3lgIG1ldGhvZC5cbiAgICogQHByb3Age0Jvb2xlYW59IHJlbW92ZU9uRGVzdHJveT1mYWxzZVxuICAgKi9cbiAgcmVtb3ZlT25EZXN0cm95OiBmYWxzZSxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgY2FsbGVkIHdoZW4gdGhlIHBvcHBlciBpcyBjcmVhdGVkLjxiciAvPlxuICAgKiBCeSBkZWZhdWx0LCBpdCBpcyBzZXQgdG8gbm8tb3AuPGJyIC8+XG4gICAqIEFjY2VzcyBQb3BwZXIuanMgaW5zdGFuY2Ugd2l0aCBgZGF0YS5pbnN0YW5jZWAuXG4gICAqIEBwcm9wIHtvbkNyZWF0ZX1cbiAgICovXG4gIG9uQ3JlYXRlOiBmdW5jdGlvbiBvbkNyZWF0ZSgpIHt9LFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBjYWxsZWQgd2hlbiB0aGUgcG9wcGVyIGlzIHVwZGF0ZWQuIFRoaXMgY2FsbGJhY2sgaXMgbm90IGNhbGxlZFxuICAgKiBvbiB0aGUgaW5pdGlhbGl6YXRpb24vY3JlYXRpb24gb2YgdGhlIHBvcHBlciwgYnV0IG9ubHkgb24gc3Vic2VxdWVudFxuICAgKiB1cGRhdGVzLjxiciAvPlxuICAgKiBCeSBkZWZhdWx0LCBpdCBpcyBzZXQgdG8gbm8tb3AuPGJyIC8+XG4gICAqIEFjY2VzcyBQb3BwZXIuanMgaW5zdGFuY2Ugd2l0aCBgZGF0YS5pbnN0YW5jZWAuXG4gICAqIEBwcm9wIHtvblVwZGF0ZX1cbiAgICovXG4gIG9uVXBkYXRlOiBmdW5jdGlvbiBvblVwZGF0ZSgpIHt9LFxuXG4gIC8qKlxuICAgKiBMaXN0IG9mIG1vZGlmaWVycyB1c2VkIHRvIG1vZGlmeSB0aGUgb2Zmc2V0cyBiZWZvcmUgdGhleSBhcmUgYXBwbGllZCB0byB0aGUgcG9wcGVyLlxuICAgKiBUaGV5IHByb3ZpZGUgbW9zdCBvZiB0aGUgZnVuY3Rpb25hbGl0aWVzIG9mIFBvcHBlci5qcy5cbiAgICogQHByb3Age21vZGlmaWVyc31cbiAgICovXG4gIG1vZGlmaWVyczogbW9kaWZpZXJzXG59O1xuXG4vKipcbiAqIEBjYWxsYmFjayBvbkNyZWF0ZVxuICogQHBhcmFtIHtkYXRhT2JqZWN0fSBkYXRhXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgb25VcGRhdGVcbiAqIEBwYXJhbSB7ZGF0YU9iamVjdH0gZGF0YVxuICovXG5cbi8vIFV0aWxzXG4vLyBNZXRob2RzXG52YXIgUG9wcGVyID0gZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBQb3BwZXIuanMgaW5zdGFuY2UuXG4gICAqIEBjbGFzcyBQb3BwZXJcbiAgICogQHBhcmFtIHtFbGVtZW50fHJlZmVyZW5jZU9iamVjdH0gcmVmZXJlbmNlIC0gVGhlIHJlZmVyZW5jZSBlbGVtZW50IHVzZWQgdG8gcG9zaXRpb24gdGhlIHBvcHBlclxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IHBvcHBlciAtIFRoZSBIVE1MIC8gWE1MIGVsZW1lbnQgdXNlZCBhcyB0aGUgcG9wcGVyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gWW91ciBjdXN0b20gb3B0aW9ucyB0byBvdmVycmlkZSB0aGUgb25lcyBkZWZpbmVkIGluIFtEZWZhdWx0c10oI2RlZmF1bHRzKVxuICAgKiBAcmV0dXJuIHtPYmplY3R9IGluc3RhbmNlIC0gVGhlIGdlbmVyYXRlZCBQb3BwZXIuanMgaW5zdGFuY2VcbiAgICovXG4gIGZ1bmN0aW9uIFBvcHBlcihyZWZlcmVuY2UsIHBvcHBlcikge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgUG9wcGVyKTtcblxuICAgIHRoaXMuc2NoZWR1bGVVcGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKF90aGlzLnVwZGF0ZSk7XG4gICAgfTtcblxuICAgIC8vIG1ha2UgdXBkYXRlKCkgZGVib3VuY2VkLCBzbyB0aGF0IGl0IG9ubHkgcnVucyBhdCBtb3N0IG9uY2UtcGVyLXRpY2tcbiAgICB0aGlzLnVwZGF0ZSA9IGRlYm91bmNlKHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuXG4gICAgLy8gd2l0aCB7fSB3ZSBjcmVhdGUgYSBuZXcgb2JqZWN0IHdpdGggdGhlIG9wdGlvbnMgaW5zaWRlIGl0XG4gICAgdGhpcy5vcHRpb25zID0gX2V4dGVuZHMoe30sIFBvcHBlci5EZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAvLyBpbml0IHN0YXRlXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzRGVzdHJveWVkOiBmYWxzZSxcbiAgICAgIGlzQ3JlYXRlZDogZmFsc2UsXG4gICAgICBzY3JvbGxQYXJlbnRzOiBbXVxuICAgIH07XG5cbiAgICAvLyBnZXQgcmVmZXJlbmNlIGFuZCBwb3BwZXIgZWxlbWVudHMgKGFsbG93IGpRdWVyeSB3cmFwcGVycylcbiAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZSAmJiByZWZlcmVuY2UuanF1ZXJ5ID8gcmVmZXJlbmNlWzBdIDogcmVmZXJlbmNlO1xuICAgIHRoaXMucG9wcGVyID0gcG9wcGVyICYmIHBvcHBlci5qcXVlcnkgPyBwb3BwZXJbMF0gOiBwb3BwZXI7XG5cbiAgICAvLyBEZWVwIG1lcmdlIG1vZGlmaWVycyBvcHRpb25zXG4gICAgdGhpcy5vcHRpb25zLm1vZGlmaWVycyA9IHt9O1xuICAgIE9iamVjdC5rZXlzKF9leHRlbmRzKHt9LCBQb3BwZXIuRGVmYXVsdHMubW9kaWZpZXJzLCBvcHRpb25zLm1vZGlmaWVycykpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIF90aGlzLm9wdGlvbnMubW9kaWZpZXJzW25hbWVdID0gX2V4dGVuZHMoe30sIFBvcHBlci5EZWZhdWx0cy5tb2RpZmllcnNbbmFtZV0gfHwge30sIG9wdGlvbnMubW9kaWZpZXJzID8gb3B0aW9ucy5tb2RpZmllcnNbbmFtZV0gOiB7fSk7XG4gICAgfSk7XG5cbiAgICAvLyBSZWZhY3RvcmluZyBtb2RpZmllcnMnIGxpc3QgKE9iamVjdCA9PiBBcnJheSlcbiAgICB0aGlzLm1vZGlmaWVycyA9IE9iamVjdC5rZXlzKHRoaXMub3B0aW9ucy5tb2RpZmllcnMpLm1hcChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgICAgbmFtZTogbmFtZVxuICAgICAgfSwgX3RoaXMub3B0aW9ucy5tb2RpZmllcnNbbmFtZV0pO1xuICAgIH0pXG4gICAgLy8gc29ydCB0aGUgbW9kaWZpZXJzIGJ5IG9yZGVyXG4gICAgLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBhLm9yZGVyIC0gYi5vcmRlcjtcbiAgICB9KTtcblxuICAgIC8vIG1vZGlmaWVycyBoYXZlIHRoZSBhYmlsaXR5IHRvIGV4ZWN1dGUgYXJiaXRyYXJ5IGNvZGUgd2hlbiBQb3BwZXIuanMgZ2V0IGluaXRlZFxuICAgIC8vIHN1Y2ggY29kZSBpcyBleGVjdXRlZCBpbiB0aGUgc2FtZSBvcmRlciBvZiBpdHMgbW9kaWZpZXJcbiAgICAvLyB0aGV5IGNvdWxkIGFkZCBuZXcgcHJvcGVydGllcyB0byB0aGVpciBvcHRpb25zIGNvbmZpZ3VyYXRpb25cbiAgICAvLyBCRSBBV0FSRTogZG9uJ3QgYWRkIG9wdGlvbnMgdG8gYG9wdGlvbnMubW9kaWZpZXJzLm5hbWVgIGJ1dCB0byBgbW9kaWZpZXJPcHRpb25zYCFcbiAgICB0aGlzLm1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllck9wdGlvbnMpIHtcbiAgICAgIGlmIChtb2RpZmllck9wdGlvbnMuZW5hYmxlZCAmJiBpc0Z1bmN0aW9uKG1vZGlmaWVyT3B0aW9ucy5vbkxvYWQpKSB7XG4gICAgICAgIG1vZGlmaWVyT3B0aW9ucy5vbkxvYWQoX3RoaXMucmVmZXJlbmNlLCBfdGhpcy5wb3BwZXIsIF90aGlzLm9wdGlvbnMsIG1vZGlmaWVyT3B0aW9ucywgX3RoaXMuc3RhdGUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gZmlyZSB0aGUgZmlyc3QgdXBkYXRlIHRvIHBvc2l0aW9uIHRoZSBwb3BwZXIgaW4gdGhlIHJpZ2h0IHBsYWNlXG4gICAgdGhpcy51cGRhdGUoKTtcblxuICAgIHZhciBldmVudHNFbmFibGVkID0gdGhpcy5vcHRpb25zLmV2ZW50c0VuYWJsZWQ7XG4gICAgaWYgKGV2ZW50c0VuYWJsZWQpIHtcbiAgICAgIC8vIHNldHVwIGV2ZW50IGxpc3RlbmVycywgdGhleSB3aWxsIHRha2UgY2FyZSBvZiB1cGRhdGUgdGhlIHBvc2l0aW9uIGluIHNwZWNpZmljIHNpdHVhdGlvbnNcbiAgICAgIHRoaXMuZW5hYmxlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlLmV2ZW50c0VuYWJsZWQgPSBldmVudHNFbmFibGVkO1xuICB9XG5cbiAgLy8gV2UgY2FuJ3QgdXNlIGNsYXNzIHByb3BlcnRpZXMgYmVjYXVzZSB0aGV5IGRvbid0IGdldCBsaXN0ZWQgaW4gdGhlXG4gIC8vIGNsYXNzIHByb3RvdHlwZSBhbmQgYnJlYWsgc3R1ZmYgbGlrZSBTaW5vbiBzdHVic1xuXG5cbiAgY3JlYXRlQ2xhc3MoUG9wcGVyLCBbe1xuICAgIGtleTogJ3VwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZSQkMSgpIHtcbiAgICAgIHJldHVybiB1cGRhdGUuY2FsbCh0aGlzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdkZXN0cm95JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSQkMSgpIHtcbiAgICAgIHJldHVybiBkZXN0cm95LmNhbGwodGhpcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZW5hYmxlRXZlbnRMaXN0ZW5lcnMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlbmFibGVFdmVudExpc3RlbmVycyQkMSgpIHtcbiAgICAgIHJldHVybiBlbmFibGVFdmVudExpc3RlbmVycy5jYWxsKHRoaXMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2Rpc2FibGVFdmVudExpc3RlbmVycycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRpc2FibGVFdmVudExpc3RlbmVycyQkMSgpIHtcbiAgICAgIHJldHVybiBkaXNhYmxlRXZlbnRMaXN0ZW5lcnMuY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTY2hlZHVsZXMgYW4gdXBkYXRlLiBJdCB3aWxsIHJ1biBvbiB0aGUgbmV4dCBVSSB1cGRhdGUgYXZhaWxhYmxlLlxuICAgICAqIEBtZXRob2Qgc2NoZWR1bGVVcGRhdGVcbiAgICAgKiBAbWVtYmVyb2YgUG9wcGVyXG4gICAgICovXG5cblxuICAgIC8qKlxuICAgICAqIENvbGxlY3Rpb24gb2YgdXRpbGl0aWVzIHVzZWZ1bCB3aGVuIHdyaXRpbmcgY3VzdG9tIG1vZGlmaWVycy5cbiAgICAgKiBTdGFydGluZyBmcm9tIHZlcnNpb24gMS43LCB0aGlzIG1ldGhvZCBpcyBhdmFpbGFibGUgb25seSBpZiB5b3VcbiAgICAgKiBpbmNsdWRlIGBwb3BwZXItdXRpbHMuanNgIGJlZm9yZSBgcG9wcGVyLmpzYC5cbiAgICAgKlxuICAgICAqICoqREVQUkVDQVRJT04qKjogVGhpcyB3YXkgdG8gYWNjZXNzIFBvcHBlclV0aWxzIGlzIGRlcHJlY2F0ZWRcbiAgICAgKiBhbmQgd2lsbCBiZSByZW1vdmVkIGluIHYyISBVc2UgdGhlIFBvcHBlclV0aWxzIG1vZHVsZSBkaXJlY3RseSBpbnN0ZWFkLlxuICAgICAqIER1ZSB0byB0aGUgaGlnaCBpbnN0YWJpbGl0eSBvZiB0aGUgbWV0aG9kcyBjb250YWluZWQgaW4gVXRpbHMsIHdlIGNhbid0XG4gICAgICogZ3VhcmFudGVlIHRoZW0gdG8gZm9sbG93IHNlbXZlci4gVXNlIHRoZW0gYXQgeW91ciBvd24gcmlzayFcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS44XG4gICAgICogQG1lbWJlciBVdGlsc1xuICAgICAqIEBtZW1iZXJvZiBQb3BwZXJcbiAgICAgKi9cblxuICB9XSk7XG4gIHJldHVybiBQb3BwZXI7XG59KCk7XG5cbi8qKlxuICogVGhlIGByZWZlcmVuY2VPYmplY3RgIGlzIGFuIG9iamVjdCB0aGF0IHByb3ZpZGVzIGFuIGludGVyZmFjZSBjb21wYXRpYmxlIHdpdGggUG9wcGVyLmpzXG4gKiBhbmQgbGV0cyB5b3UgdXNlIGl0IGFzIHJlcGxhY2VtZW50IG9mIGEgcmVhbCBET00gbm9kZS48YnIgLz5cbiAqIFlvdSBjYW4gdXNlIHRoaXMgbWV0aG9kIHRvIHBvc2l0aW9uIGEgcG9wcGVyIHJlbGF0aXZlbHkgdG8gYSBzZXQgb2YgY29vcmRpbmF0ZXNcbiAqIGluIGNhc2UgeW91IGRvbid0IGhhdmUgYSBET00gbm9kZSB0byB1c2UgYXMgcmVmZXJlbmNlLlxuICpcbiAqIGBgYFxuICogbmV3IFBvcHBlcihyZWZlcmVuY2VPYmplY3QsIHBvcHBlck5vZGUpO1xuICogYGBgXG4gKlxuICogTkI6IFRoaXMgZmVhdHVyZSBpc24ndCBzdXBwb3J0ZWQgaW4gSW50ZXJuZXQgRXhwbG9yZXIgMTAuXG4gKiBAbmFtZSByZWZlcmVuY2VPYmplY3RcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGRhdGEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0XG4gKiBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIHNldCBvZiBjb29yZGluYXRlcyBjb21wYXRpYmxlIHdpdGggdGhlIG5hdGl2ZSBgZ2V0Qm91bmRpbmdDbGllbnRSZWN0YCBtZXRob2QuXG4gKiBAcHJvcGVydHkge251bWJlcn0gZGF0YS5jbGllbnRXaWR0aFxuICogQW4gRVM2IGdldHRlciB0aGF0IHdpbGwgcmV0dXJuIHRoZSB3aWR0aCBvZiB0aGUgdmlydHVhbCByZWZlcmVuY2UgZWxlbWVudC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBkYXRhLmNsaWVudEhlaWdodFxuICogQW4gRVM2IGdldHRlciB0aGF0IHdpbGwgcmV0dXJuIHRoZSBoZWlnaHQgb2YgdGhlIHZpcnR1YWwgcmVmZXJlbmNlIGVsZW1lbnQuXG4gKi9cblxuXG5Qb3BwZXIuVXRpbHMgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBnbG9iYWwpLlBvcHBlclV0aWxzO1xuUG9wcGVyLnBsYWNlbWVudHMgPSBwbGFjZW1lbnRzO1xuUG9wcGVyLkRlZmF1bHRzID0gRGVmYXVsdHM7XG5cbmV4cG9ydCBkZWZhdWx0IFBvcHBlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBvcHBlci5qcy5tYXBcbiJdLCJzb3VyY2VSb290IjoiIn0=