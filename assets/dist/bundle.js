/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* arctic scroll */

(function ($) {
    $.fn.arctic_scroll = function (options) {

        var defaults = {
            elem: $(this),
            speed: 500,
            scroll_selector: 'html,body'
        };

        var options = $.extend(defaults, options),
            to_scroll = options.scroll_selector;

        options.elem.click(function(event){
            event.preventDefault();
            var offset = ($(this).attr('data-offset')) ? $(this).attr('data-offset') : false,
                position = ($(this).attr('data-position')) ? $(this).attr('data-position') : false;

            if (offset) {
                var toMove = parseInt(offset);
                $(options.scroll_selector).stop(true, false).animate({scrollTop: ($(this.hash).offset().top + toMove) }, options.speed);
            } else if (position) {
                var toMove = parseInt(position);
                $(options.scroll_selector).stop(true, false).animate({scrollTop: toMove }, options.speed);
            } else {
                $(options.scroll_selector).stop(true, false).animate({scrollTop: ($(this.hash).offset().top) }, options.speed);
            }
        });

    };
})(jQuery);

$(function(){
    $(".arctic_scroll").arctic_scroll({
        speed: 800
    });
});

/* hide cover img chevron */

$(document).scroll(function() {
    var y = $(this).scrollTop();
    var scrollOffset = $('#scroll-to-text').offset().top + (-350);

    if (y > scrollOffset) {
        $('#scroll-to-text').addClass('hide');
    }
    else {
        $('#scroll-to-text').removeClass('hide');
    }
    
});

/* nav hide/show */

$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 800) {
        $('#navigation').addClass('show');
        $('#navigation').removeClass('hide');
    }
    else {
        $('#navigation').addClass('hide');
        $('#navigation').removeClass('show');
    }
});

/* slick carousel */

$(document).ready(function(){
  $('.index-header').slick({
  dots: true,
  draggable: true,
  infinite: true,
  fade: true,
  autoplay: true,
  });
});




/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(6)(__webpack_require__(5))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(3);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(7)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js?indentedSyntax!./../../node_modules/postcss-loader/index.js!./default.sass", function() {
			var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js?indentedSyntax!./../../node_modules/postcss-loader/index.js!./default.sass");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/* Imports */\n/* Slider */\n.slick-slider {\n  position: relative;\n  display: block;\n  box-sizing: border-box;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -ms-touch-action: pan-y;\n  touch-action: pan-y;\n  -webkit-tap-highlight-color: transparent; }\n\n.slick-list {\n  position: relative;\n  overflow: hidden;\n  display: block;\n  margin: 0;\n  padding: 0; }\n  .slick-list:focus {\n    outline: none; }\n  .slick-list.dragging {\n    cursor: pointer;\n    cursor: hand; }\n\n.slick-slider .slick-track,\n.slick-slider .slick-list {\n  -webkit-transform: translate3d(0, 0, 0);\n  -moz-transform: translate3d(0, 0, 0);\n  -ms-transform: translate3d(0, 0, 0);\n  -o-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0); }\n\n.slick-track {\n  position: relative;\n  left: 0;\n  top: 0;\n  display: block; }\n  .slick-track:before, .slick-track:after {\n    content: \"\";\n    display: table; }\n  .slick-track:after {\n    clear: both; }\n  .slick-loading .slick-track {\n    visibility: hidden; }\n\n.slick-slide {\n  float: left;\n  height: 100%;\n  min-height: 1px;\n  display: none; }\n  [dir=\"rtl\"] .slick-slide {\n    float: right; }\n  .slick-slide img {\n    display: block; }\n  .slick-slide.slick-loading img {\n    display: none; }\n  .slick-slide.dragging img {\n    pointer-events: none; }\n  .slick-initialized .slick-slide {\n    display: block; }\n  .slick-loading .slick-slide {\n    visibility: hidden; }\n  .slick-vertical .slick-slide {\n    display: block;\n    height: auto;\n    border: 1px solid transparent; }\n\n.slick-arrow.slick-hidden {\n  display: none; }\n\n/* Slider */\n.slick-loading .slick-list {\n  background: #fff url(\"/./ajax-loader.gif\") center center no-repeat; }\n\n/* Icons */\n@font-face {\n  font-family: \"slick\";\n  src: url(\"/./assets/fonts/slick.eot\");\n  src: url(\"/./assets/fonts/slick.eot?#iefix\") format(\"embedded-opentype\"), url(\"/./assets/fonts/slick.woff\") format(\"woff\"), url(\"/./assets/fonts/slick.ttf\") format(\"truetype\"), url(\"/./assets/fonts/slick.svg#slick\") format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n\n/* Arrows */\n.slick-prev,\n.slick-next {\n  position: absolute;\n  display: block;\n  height: 20px;\n  width: 20px;\n  line-height: 0px;\n  font-size: 0px;\n  cursor: pointer;\n  background: transparent;\n  color: transparent;\n  top: 50%;\n  -webkit-transform: translate(0, -50%);\n  -ms-transform: translate(0, -50%);\n  transform: translate(0, -50%);\n  padding: 0;\n  border: none;\n  outline: none; }\n  .slick-prev:hover, .slick-prev:focus,\n  .slick-next:hover,\n  .slick-next:focus {\n    outline: none;\n    background: transparent;\n    color: transparent; }\n    .slick-prev:hover:before, .slick-prev:focus:before,\n    .slick-next:hover:before,\n    .slick-next:focus:before {\n      opacity: 1; }\n  .slick-prev.slick-disabled:before,\n  .slick-next.slick-disabled:before {\n    opacity: 0.25; }\n  .slick-prev:before,\n  .slick-next:before {\n    font-family: \"slick\";\n    font-size: 20px;\n    line-height: 1;\n    color: white;\n    opacity: 0.75;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale; }\n\n.slick-prev {\n  left: -25px; }\n  [dir=\"rtl\"] .slick-prev {\n    left: auto;\n    right: -25px; }\n  .slick-prev:before {\n    content: \"\\2190\"; }\n    [dir=\"rtl\"] .slick-prev:before {\n      content: \"\\2192\"; }\n\n.slick-next {\n  right: -25px; }\n  [dir=\"rtl\"] .slick-next {\n    left: -25px;\n    right: auto; }\n  .slick-next:before {\n    content: \"\\2192\"; }\n    [dir=\"rtl\"] .slick-next:before {\n      content: \"\\2190\"; }\n\n/* Dots */\n.slick-dotted.slick-slider {\n  margin-bottom: 30px; }\n\n.slick-dots {\n  position: absolute;\n  bottom: -25px;\n  list-style: none;\n  display: block;\n  text-align: center;\n  padding: 0;\n  margin: 0;\n  width: 100%; }\n  .slick-dots li {\n    position: relative;\n    display: inline-block;\n    height: 20px;\n    width: 20px;\n    margin: 0 5px;\n    padding: 0;\n    cursor: pointer; }\n    .slick-dots li button {\n      border: 0;\n      background: transparent;\n      display: block;\n      height: 20px;\n      width: 20px;\n      outline: none;\n      line-height: 0px;\n      font-size: 0px;\n      color: transparent;\n      padding: 5px;\n      cursor: pointer; }\n      .slick-dots li button:hover, .slick-dots li button:focus {\n        outline: none; }\n        .slick-dots li button:hover:before, .slick-dots li button:focus:before {\n          opacity: 1; }\n      .slick-dots li button:before {\n        position: absolute;\n        top: 0;\n        left: 0;\n        content: \"\\2022\";\n        width: 20px;\n        height: 20px;\n        font-family: \"slick\";\n        font-size: 6px;\n        line-height: 20px;\n        text-align: center;\n        color: black;\n        opacity: 0.25;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale; }\n    .slick-dots li.slick-active button:before {\n      color: black;\n      opacity: 0.75; }\n\n@font-face {\n  font-family: 'icomoon';\n  src: url(\"/./assets/fonts/icomoon.eot?cyye9d\");\n  src: url(\"/./assets/fonts/icomoon.eot?cyye9d#iefix\") format(\"embedded-opentype\"), url(\"/./assets/fonts/icomoon.ttf?cyye9d\") format(\"truetype\"), url(\"/./assets/fonts/icomoon.woff?cyye9d\") format(\"woff\"), url(\"/./assets/fonts/icomoon.svg?cyye9d#icomoon\") format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n\n[class^=\"icon-\"], [class*=\" icon-\"], .icon {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  display: inline-block;\n  font-family: 'icomoon' !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.icon-laptop:before {\n  content: \"\\E001\"; }\n\n.icon-browser:before {\n  content: \"\\E00C\"; }\n\n.icon-ribbon:before {\n  content: \"\\E01E\"; }\n\n.icon-chat:before {\n  content: \"\\E049\"; }\n\n.icon-heart:before {\n  content: \"\\E04A\"; }\n\n.icon-lifesaver:before {\n  content: \"\\E054\"; }\n\n.icon-quote:before {\n  content: \"\\E057\"; }\n\n.icon-scope:before {\n  content: \"\\E058\"; }\n\n.icon-happy:before {\n  content: \"\\E05B\"; }\n\n.icon-sad:before {\n  content: \"\\E05C\"; }\n\n.icon-facebook:before {\n  content: \"\\E05D\"; }\n\n.icon-twitter:before {\n  content: \"\\E05E\"; }\n\n.icon-googleplus:before {\n  content: \"\\E05F\"; }\n\n.icon-rss:before {\n  content: \"\\E060\"; }\n\n.icon-tumblr:before {\n  content: \"\\E061\"; }\n\n.icon-linkedin:before {\n  content: \"\\E062\"; }\n\n.icon-dribbble:before {\n  content: \"\\E063\"; }\n\n.icon-chevron-down:before {\n  content: \"\\E900\"; }\n\n.icon-chevron-left:before {\n  content: \"\\E901\"; }\n\n.icon-chevron-right:before {\n  content: \"\\E902\"; }\n\n.icon-chevron-small-down:before {\n  content: \"\\E903\"; }\n\n.icon-chevron-small-left:before {\n  content: \"\\E904\"; }\n\n.icon-chevron-small-right:before {\n  content: \"\\E905\"; }\n\n.icon-chevron-small-up:before {\n  content: \"\\E906\"; }\n\n.icon-chevron-thin-down:before {\n  content: \"\\E907\"; }\n\n.icon-chevron-thin-left:before {\n  content: \"\\E908\"; }\n\n.icon-chevron-thin-right:before {\n  content: \"\\E909\"; }\n\n.icon-chevron-thin-up:before {\n  content: \"\\E90A\"; }\n\n.icon-chevron-up:before {\n  content: \"\\E90B\"; }\n\n.icon-chevron-with-circle-down:before {\n  content: \"\\E90C\"; }\n\n.icon-chevron-with-circle-left:before {\n  content: \"\\E90D\"; }\n\n.icon-chevron-with-circle-right:before {\n  content: \"\\E90E\"; }\n\n.icon-chevron-with-circle-up:before {\n  content: \"\\E90F\"; }\n\n.icon-menu:before {\n  content: \"\\E120\"; }\n\n.icon-ellipsis:before {\n  content: \"\\E129\"; }\n\n/*!\nPure v0.6.2\nCopyright 2013 Yahoo!\nLicensed under the BSD License.\nhttps://github.com/yahoo/pure/blob/master/LICENSE.md\n*/\n/*!\nnormalize.css v^3.0 | MIT License | git.io/normalize\nCopyright (c) Nicolas Gallagher and Jonathan Neal\n*/\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\nimg, legend {\n  border: 0; }\n\nlegend, td, th {\n  padding: 0; }\n\nhtml {\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%; }\n\nbody {\n  margin: 0; }\n\narticle, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary {\n  display: block; }\n\naudio, canvas, progress, video {\n  display: inline-block;\n  vertical-align: baseline; }\n\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n[hidden], template {\n  display: none; }\n\na {\n  background-color: transparent; }\n\na:active, a:hover {\n  outline: 0; }\n\nabbr[title] {\n  border-bottom: 1px dotted; }\n\nb, optgroup, strong {\n  font-weight: 700; }\n\ndfn {\n  font-style: italic; }\n\nh1 {\n  font-size: 2em;\n  margin: .67em 0; }\n\nmark {\n  background: #ff0;\n  color: #000; }\n\nsmall {\n  font-size: 80%; }\n\nsub, sup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsup {\n  top: -.5em; }\n\nsub {\n  bottom: -.25em; }\n\nsvg:not(:root) {\n  overflow: hidden; }\n\nfigure {\n  margin: 1em 40px; }\n\nhr {\n  box-sizing: content-box;\n  height: 0; }\n\npre, textarea {\n  overflow: auto; }\n\ncode, kbd, pre, samp {\n  font-family: monospace,monospace;\n  font-size: 1em; }\n\nbutton, input, optgroup, select, textarea {\n  color: inherit;\n  font: inherit;\n  margin: 0; }\n\nbutton {\n  overflow: visible; }\n\nbutton, select {\n  text-transform: none; }\n\nbutton, html input[type=button], input[type=reset], input[type=submit] {\n  -webkit-appearance: button;\n  cursor: pointer; }\n\nbutton[disabled], html input[disabled] {\n  cursor: default; }\n\nbutton::-moz-focus-inner, input::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\ninput {\n  line-height: normal; }\n\ninput[type=checkbox], input[type=radio] {\n  box-sizing: border-box;\n  padding: 0; }\n\ninput[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button {\n  height: auto; }\n\ninput[type=search] {\n  -webkit-appearance: textfield;\n  box-sizing: content-box; }\n\ninput[type=search]::-webkit-search-cancel-button, input[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\nfieldset {\n  border: 1px solid silver;\n  margin: 0 2px;\n  padding: .35em .625em .75em; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n.hidden, [hidden] {\n  display: none !important; }\n\n.pure-img {\n  max-width: 100%;\n  height: auto;\n  display: block; }\n\n/*!\nPure v0.6.2\nCopyright 2013 Yahoo!\nLicensed under the BSD License.\nhttps://github.com/yahoo/pure/blob/master/LICENSE.md\n*/\n.pure-g {\n  letter-spacing: -.31em;\n  text-rendering: optimizespeed;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-flow: row wrap;\n  -ms-flex-flow: row wrap;\n  flex-flow: row wrap;\n  -webkit-align-content: flex-start;\n  -ms-flex-line-pack: start;\n  align-content: flex-start; }\n\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  table .pure-g {\n    display: block; } }\n\n.opera-only :-o-prefocus, .pure-g {\n  word-spacing: -.43em; }\n\n.pure-u, .pure-u-1, .loop-article, .loop-article:nth-child(1), .loop-article:nth-child(2), .pure-u-1-1, .pure-u-1-12, .pure-u-1-2, .pure-u-1-24, .pure-u-1-3, .pure-u-1-4, .pure-u-1-5, .pure-u-1-6, .pure-u-1-8, .pure-u-10-24, .pure-u-11-12, .pure-u-11-24, .pure-u-12-24, .pure-u-13-24, .pure-u-14-24, .pure-u-15-24, .pure-u-16-24, .pure-u-17-24, .pure-u-18-24, .pure-u-19-24, .pure-u-2-24, .pure-u-2-3, .pure-u-2-5, .pure-u-20-24, .pure-u-21-24, .pure-u-22-24, .pure-u-23-24, .pure-u-24-24, .pure-u-3-24, .pure-u-3-4, .pure-u-3-5, .pure-u-3-8, .pure-u-4-24, .pure-u-4-5, .pure-u-5-12, .pure-u-5-24, .pure-u-5-5, .pure-u-5-6, .pure-u-5-8, .pure-u-6-24, .pure-u-7-12, .pure-u-7-24, .pure-u-7-8, .pure-u-8-24, .pure-u-9-24 {\n  display: inline-block;\n  zoom: 1;\n  letter-spacing: normal;\n  word-spacing: normal;\n  vertical-align: top;\n  text-rendering: auto; }\n\n.pure-u-1-24 {\n  width: 4.1667%; }\n\n.pure-u-1-12, .pure-u-2-24 {\n  width: 8.3333%; }\n\n.pure-u-1-8, .pure-u-3-24 {\n  width: 12.5%; }\n\n.pure-u-1-6, .pure-u-4-24 {\n  width: 16.6667%; }\n\n.pure-u-1-5 {\n  width: 20%; }\n\n.pure-u-5-24 {\n  width: 20.8333%; }\n\n.pure-u-1-4, .pure-u-6-24 {\n  width: 25%; }\n\n.pure-u-7-24 {\n  width: 29.1667%; }\n\n.pure-u-1-3, .pure-u-8-24 {\n  width: 33.3333%; }\n\n.pure-u-3-8, .pure-u-9-24 {\n  width: 37.5%; }\n\n.pure-u-2-5 {\n  width: 40%; }\n\n.pure-u-10-24, .pure-u-5-12 {\n  width: 41.6667%; }\n\n.pure-u-11-24 {\n  width: 45.8333%; }\n\n.pure-u-1-2, .pure-u-12-24 {\n  width: 50%; }\n\n.pure-u-13-24 {\n  width: 54.1667%; }\n\n.pure-u-14-24, .pure-u-7-12 {\n  width: 58.3333%; }\n\n.pure-u-3-5 {\n  width: 60%; }\n\n.pure-u-15-24, .pure-u-5-8 {\n  width: 62.5%; }\n\n.pure-u-16-24, .pure-u-2-3 {\n  width: 66.6667%; }\n\n.pure-u-17-24 {\n  width: 70.8333%; }\n\n.pure-u-18-24, .pure-u-3-4 {\n  width: 75%; }\n\n.pure-u-19-24 {\n  width: 79.1667%; }\n\n.pure-u-4-5 {\n  width: 80%; }\n\n.pure-u-20-24, .pure-u-5-6 {\n  width: 83.3333%; }\n\n.pure-u-21-24, .pure-u-7-8 {\n  width: 87.5%; }\n\n.pure-u-11-12, .pure-u-22-24 {\n  width: 91.6667%; }\n\n.pure-u-23-24 {\n  width: 95.8333%; }\n\n.pure-u-1, .loop-article, .loop-article:nth-child(1), .loop-article:nth-child(2), .pure-u-1-1, .pure-u-24-24, .pure-u-5-5 {\n  width: 100%; }\n\n/*!\nPure v0.6.2\nCopyright 2013 Yahoo!\nLicensed under the BSD License.\nhttps://github.com/yahoo/pure/blob/master/LICENSE.md\n*/\n@media screen and (min-width: 35.5em) {\n  .pure-u-sm-1, .pure-u-sm-1-1, .pure-u-sm-1-12, .pure-u-sm-1-2, .pure-u-sm-1-24, .pure-u-sm-1-3, .pure-u-sm-1-4, .pure-u-sm-1-5, .pure-u-sm-1-6, .pure-u-sm-1-8, .pure-u-sm-10-24, .pure-u-sm-11-12, .pure-u-sm-11-24, .pure-u-sm-12-24, .pure-u-sm-13-24, .pure-u-sm-14-24, .pure-u-sm-15-24, .pure-u-sm-16-24, .pure-u-sm-17-24, .pure-u-sm-18-24, .pure-u-sm-19-24, .pure-u-sm-2-24, .pure-u-sm-2-3, .pure-u-sm-2-5, .pure-u-sm-20-24, .pure-u-sm-21-24, .pure-u-sm-22-24, .pure-u-sm-23-24, .pure-u-sm-24-24, .pure-u-sm-3-24, .pure-u-sm-3-4, .pure-u-sm-3-5, .pure-u-sm-3-8, .pure-u-sm-4-24, .pure-u-sm-4-5, .pure-u-sm-5-12, .pure-u-sm-5-24, .pure-u-sm-5-5, .pure-u-sm-5-6, .pure-u-sm-5-8, .pure-u-sm-6-24, .pure-u-sm-7-12, .pure-u-sm-7-24, .pure-u-sm-7-8, .pure-u-sm-8-24, .pure-u-sm-9-24 {\n    display: inline-block;\n    zoom: 1;\n    letter-spacing: normal;\n    word-spacing: normal;\n    vertical-align: top;\n    text-rendering: auto; }\n  .pure-u-sm-1-24 {\n    width: 4.1667%; }\n  .pure-u-sm-1-12, .pure-u-sm-2-24 {\n    width: 8.3333%; }\n  .pure-u-sm-1-8, .pure-u-sm-3-24 {\n    width: 12.5%; }\n  .pure-u-sm-1-6, .pure-u-sm-4-24 {\n    width: 16.6667%; }\n  .pure-u-sm-1-5 {\n    width: 20%; }\n  .pure-u-sm-5-24 {\n    width: 20.8333%; }\n  .pure-u-sm-1-4, .pure-u-sm-6-24 {\n    width: 25%; }\n  .pure-u-sm-7-24 {\n    width: 29.1667%; }\n  .pure-u-sm-1-3, .pure-u-sm-8-24 {\n    width: 33.3333%; }\n  .pure-u-sm-3-8, .pure-u-sm-9-24 {\n    width: 37.5%; }\n  .pure-u-sm-2-5 {\n    width: 40%; }\n  .pure-u-sm-10-24, .pure-u-sm-5-12 {\n    width: 41.6667%; }\n  .pure-u-sm-11-24 {\n    width: 45.8333%; }\n  .pure-u-sm-1-2, .pure-u-sm-12-24 {\n    width: 50%; }\n  .pure-u-sm-13-24 {\n    width: 54.1667%; }\n  .pure-u-sm-14-24, .pure-u-sm-7-12 {\n    width: 58.3333%; }\n  .pure-u-sm-3-5 {\n    width: 60%; }\n  .pure-u-sm-15-24, .pure-u-sm-5-8 {\n    width: 62.5%; }\n  .pure-u-sm-16-24, .pure-u-sm-2-3 {\n    width: 66.6667%; }\n  .pure-u-sm-17-24 {\n    width: 70.8333%; }\n  .pure-u-sm-18-24, .pure-u-sm-3-4 {\n    width: 75%; }\n  .pure-u-sm-19-24 {\n    width: 79.1667%; }\n  .pure-u-sm-4-5 {\n    width: 80%; }\n  .pure-u-sm-20-24, .pure-u-sm-5-6 {\n    width: 83.3333%; }\n  .pure-u-sm-21-24, .pure-u-sm-7-8 {\n    width: 87.5%; }\n  .pure-u-sm-11-12, .pure-u-sm-22-24 {\n    width: 91.6667%; }\n  .pure-u-sm-23-24 {\n    width: 95.8333%; }\n  .pure-u-sm-1, .pure-u-sm-1-1, .pure-u-sm-24-24, .pure-u-sm-5-5 {\n    width: 100%; } }\n\n@media screen and (min-width: 48em) {\n  .pure-u-md-1, .pure-u-md-1-1, .pure-u-md-1-12, .pure-u-md-1-2, .loop-article:nth-child(1), .loop-article:nth-child(2), .pure-u-md-1-24, .pure-u-md-1-3, .pure-u-md-1-4, .loop-article, .pure-u-md-1-5, .pure-u-md-1-6, .pure-u-md-1-8, .pure-u-md-10-24, .pure-u-md-11-12, .pure-u-md-11-24, .pure-u-md-12-24, .pure-u-md-13-24, .pure-u-md-14-24, .pure-u-md-15-24, .pure-u-md-16-24, .pure-u-md-17-24, .pure-u-md-18-24, .pure-u-md-19-24, .pure-u-md-2-24, .pure-u-md-2-3, .pure-u-md-2-5, .pure-u-md-20-24, .pure-u-md-21-24, .pure-u-md-22-24, .pure-u-md-23-24, .pure-u-md-24-24, .pure-u-md-3-24, .pure-u-md-3-4, .pure-u-md-3-5, .pure-u-md-3-8, .pure-u-md-4-24, .pure-u-md-4-5, .pure-u-md-5-12, .pure-u-md-5-24, .pure-u-md-5-5, .pure-u-md-5-6, .pure-u-md-5-8, .pure-u-md-6-24, .pure-u-md-7-12, .pure-u-md-7-24, .pure-u-md-7-8, .pure-u-md-8-24, .pure-u-md-9-24 {\n    display: inline-block;\n    zoom: 1;\n    letter-spacing: normal;\n    word-spacing: normal;\n    vertical-align: top;\n    text-rendering: auto; }\n  .pure-u-md-1-24 {\n    width: 4.1667%; }\n  .pure-u-md-1-12, .pure-u-md-2-24 {\n    width: 8.3333%; }\n  .pure-u-md-1-8, .pure-u-md-3-24 {\n    width: 12.5%; }\n  .pure-u-md-1-6, .pure-u-md-4-24 {\n    width: 16.6667%; }\n  .pure-u-md-1-5 {\n    width: 20%; }\n  .pure-u-md-5-24 {\n    width: 20.8333%; }\n  .pure-u-md-1-4, .loop-article, .pure-u-md-6-24 {\n    width: 25%; }\n  .pure-u-md-7-24 {\n    width: 29.1667%; }\n  .pure-u-md-1-3, .pure-u-md-8-24 {\n    width: 33.3333%; }\n  .pure-u-md-3-8, .pure-u-md-9-24 {\n    width: 37.5%; }\n  .pure-u-md-2-5 {\n    width: 40%; }\n  .pure-u-md-10-24, .pure-u-md-5-12 {\n    width: 41.6667%; }\n  .pure-u-md-11-24 {\n    width: 45.8333%; }\n  .pure-u-md-1-2, .loop-article:nth-child(1), .loop-article:nth-child(2), .pure-u-md-12-24 {\n    width: 50%; }\n  .pure-u-md-13-24 {\n    width: 54.1667%; }\n  .pure-u-md-14-24, .pure-u-md-7-12 {\n    width: 58.3333%; }\n  .pure-u-md-3-5 {\n    width: 60%; }\n  .pure-u-md-15-24, .pure-u-md-5-8 {\n    width: 62.5%; }\n  .pure-u-md-16-24, .pure-u-md-2-3 {\n    width: 66.6667%; }\n  .pure-u-md-17-24 {\n    width: 70.8333%; }\n  .pure-u-md-18-24, .pure-u-md-3-4 {\n    width: 75%; }\n  .pure-u-md-19-24 {\n    width: 79.1667%; }\n  .pure-u-md-4-5 {\n    width: 80%; }\n  .pure-u-md-20-24, .pure-u-md-5-6 {\n    width: 83.3333%; }\n  .pure-u-md-21-24, .pure-u-md-7-8 {\n    width: 87.5%; }\n  .pure-u-md-11-12, .pure-u-md-22-24 {\n    width: 91.6667%; }\n  .pure-u-md-23-24 {\n    width: 95.8333%; }\n  .pure-u-md-1, .pure-u-md-1-1, .pure-u-md-24-24, .pure-u-md-5-5 {\n    width: 100%; } }\n\n@media screen and (min-width: 64em) {\n  .pure-u-lg-1, .pure-u-lg-1-1, .pure-u-lg-1-12, .pure-u-lg-1-2, .pure-u-lg-1-24, .pure-u-lg-1-3, .pure-u-lg-1-4, .pure-u-lg-1-5, .pure-u-lg-1-6, .pure-u-lg-1-8, .pure-u-lg-10-24, .pure-u-lg-11-12, .pure-u-lg-11-24, .pure-u-lg-12-24, .pure-u-lg-13-24, .pure-u-lg-14-24, .pure-u-lg-15-24, .pure-u-lg-16-24, .pure-u-lg-17-24, .pure-u-lg-18-24, .pure-u-lg-19-24, .pure-u-lg-2-24, .pure-u-lg-2-3, .pure-u-lg-2-5, .pure-u-lg-20-24, .pure-u-lg-21-24, .pure-u-lg-22-24, .pure-u-lg-23-24, .pure-u-lg-24-24, .pure-u-lg-3-24, .pure-u-lg-3-4, .pure-u-lg-3-5, .pure-u-lg-3-8, .pure-u-lg-4-24, .pure-u-lg-4-5, .pure-u-lg-5-12, .pure-u-lg-5-24, .pure-u-lg-5-5, .pure-u-lg-5-6, .pure-u-lg-5-8, .pure-u-lg-6-24, .pure-u-lg-7-12, .pure-u-lg-7-24, .pure-u-lg-7-8, .pure-u-lg-8-24, .pure-u-lg-9-24 {\n    display: inline-block;\n    zoom: 1;\n    letter-spacing: normal;\n    word-spacing: normal;\n    vertical-align: top;\n    text-rendering: auto; }\n  .pure-u-lg-1-24 {\n    width: 4.1667%; }\n  .pure-u-lg-1-12, .pure-u-lg-2-24 {\n    width: 8.3333%; }\n  .pure-u-lg-1-8, .pure-u-lg-3-24 {\n    width: 12.5%; }\n  .pure-u-lg-1-6, .pure-u-lg-4-24 {\n    width: 16.6667%; }\n  .pure-u-lg-1-5 {\n    width: 20%; }\n  .pure-u-lg-5-24 {\n    width: 20.8333%; }\n  .pure-u-lg-1-4, .pure-u-lg-6-24 {\n    width: 25%; }\n  .pure-u-lg-7-24 {\n    width: 29.1667%; }\n  .pure-u-lg-1-3, .pure-u-lg-8-24 {\n    width: 33.3333%; }\n  .pure-u-lg-3-8, .pure-u-lg-9-24 {\n    width: 37.5%; }\n  .pure-u-lg-2-5 {\n    width: 40%; }\n  .pure-u-lg-10-24, .pure-u-lg-5-12 {\n    width: 41.6667%; }\n  .pure-u-lg-11-24 {\n    width: 45.8333%; }\n  .pure-u-lg-1-2, .pure-u-lg-12-24 {\n    width: 50%; }\n  .pure-u-lg-13-24 {\n    width: 54.1667%; }\n  .pure-u-lg-14-24, .pure-u-lg-7-12 {\n    width: 58.3333%; }\n  .pure-u-lg-3-5 {\n    width: 60%; }\n  .pure-u-lg-15-24, .pure-u-lg-5-8 {\n    width: 62.5%; }\n  .pure-u-lg-16-24, .pure-u-lg-2-3 {\n    width: 66.6667%; }\n  .pure-u-lg-17-24 {\n    width: 70.8333%; }\n  .pure-u-lg-18-24, .pure-u-lg-3-4 {\n    width: 75%; }\n  .pure-u-lg-19-24 {\n    width: 79.1667%; }\n  .pure-u-lg-4-5 {\n    width: 80%; }\n  .pure-u-lg-20-24, .pure-u-lg-5-6 {\n    width: 83.3333%; }\n  .pure-u-lg-21-24, .pure-u-lg-7-8 {\n    width: 87.5%; }\n  .pure-u-lg-11-12, .pure-u-lg-22-24 {\n    width: 91.6667%; }\n  .pure-u-lg-23-24 {\n    width: 95.8333%; }\n  .pure-u-lg-1, .pure-u-lg-1-1, .pure-u-lg-24-24, .pure-u-lg-5-5 {\n    width: 100%; } }\n\n@media screen and (min-width: 80em) {\n  .pure-u-xl-1, .pure-u-xl-1-1, .pure-u-xl-1-12, .pure-u-xl-1-2, .pure-u-xl-1-24, .pure-u-xl-1-3, .pure-u-xl-1-4, .pure-u-xl-1-5, .pure-u-xl-1-6, .pure-u-xl-1-8, .pure-u-xl-10-24, .pure-u-xl-11-12, .pure-u-xl-11-24, .pure-u-xl-12-24, .pure-u-xl-13-24, .pure-u-xl-14-24, .pure-u-xl-15-24, .pure-u-xl-16-24, .pure-u-xl-17-24, .pure-u-xl-18-24, .pure-u-xl-19-24, .pure-u-xl-2-24, .pure-u-xl-2-3, .pure-u-xl-2-5, .pure-u-xl-20-24, .pure-u-xl-21-24, .pure-u-xl-22-24, .pure-u-xl-23-24, .pure-u-xl-24-24, .pure-u-xl-3-24, .pure-u-xl-3-4, .pure-u-xl-3-5, .pure-u-xl-3-8, .pure-u-xl-4-24, .pure-u-xl-4-5, .pure-u-xl-5-12, .pure-u-xl-5-24, .pure-u-xl-5-5, .pure-u-xl-5-6, .pure-u-xl-5-8, .pure-u-xl-6-24, .pure-u-xl-7-12, .pure-u-xl-7-24, .pure-u-xl-7-8, .pure-u-xl-8-24, .pure-u-xl-9-24 {\n    display: inline-block;\n    zoom: 1;\n    letter-spacing: normal;\n    word-spacing: normal;\n    vertical-align: top;\n    text-rendering: auto; }\n  .pure-u-xl-1-24 {\n    width: 4.1667%; }\n  .pure-u-xl-1-12, .pure-u-xl-2-24 {\n    width: 8.3333%; }\n  .pure-u-xl-1-8, .pure-u-xl-3-24 {\n    width: 12.5%; }\n  .pure-u-xl-1-6, .pure-u-xl-4-24 {\n    width: 16.6667%; }\n  .pure-u-xl-1-5 {\n    width: 20%; }\n  .pure-u-xl-5-24 {\n    width: 20.8333%; }\n  .pure-u-xl-1-4, .pure-u-xl-6-24 {\n    width: 25%; }\n  .pure-u-xl-7-24 {\n    width: 29.1667%; }\n  .pure-u-xl-1-3, .pure-u-xl-8-24 {\n    width: 33.3333%; }\n  .pure-u-xl-3-8, .pure-u-xl-9-24 {\n    width: 37.5%; }\n  .pure-u-xl-2-5 {\n    width: 40%; }\n  .pure-u-xl-10-24, .pure-u-xl-5-12 {\n    width: 41.6667%; }\n  .pure-u-xl-11-24 {\n    width: 45.8333%; }\n  .pure-u-xl-1-2, .pure-u-xl-12-24 {\n    width: 50%; }\n  .pure-u-xl-13-24 {\n    width: 54.1667%; }\n  .pure-u-xl-14-24, .pure-u-xl-7-12 {\n    width: 58.3333%; }\n  .pure-u-xl-3-5 {\n    width: 60%; }\n  .pure-u-xl-15-24, .pure-u-xl-5-8 {\n    width: 62.5%; }\n  .pure-u-xl-16-24, .pure-u-xl-2-3 {\n    width: 66.6667%; }\n  .pure-u-xl-17-24 {\n    width: 70.8333%; }\n  .pure-u-xl-18-24, .pure-u-xl-3-4 {\n    width: 75%; }\n  .pure-u-xl-19-24 {\n    width: 79.1667%; }\n  .pure-u-xl-4-5 {\n    width: 80%; }\n  .pure-u-xl-20-24, .pure-u-xl-5-6 {\n    width: 83.3333%; }\n  .pure-u-xl-21-24, .pure-u-xl-7-8 {\n    width: 87.5%; }\n  .pure-u-xl-11-12, .pure-u-xl-22-24 {\n    width: 91.6667%; }\n  .pure-u-xl-23-24 {\n    width: 95.8333%; }\n  .pure-u-xl-1, .pure-u-xl-1-1, .pure-u-xl-24-24, .pure-u-xl-5-5 {\n    width: 100%; } }\n\n/* Variables */\n/* Basic */\n#navigation .nav-reveal a {\n  position: fixed;\n  top: 50%;\n  outline: none;\n  text-align: left;\n  z-index: 1000;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  overflow: hidden;\n  width: 50px;\n  height: 120px;\n  border: none;\n  transition: width 0.4s, background-color 0.4s; }\n  #navigation .nav-reveal a:hover {\n    width: 260px;\n    background-color: #3A4145; }\n    #navigation .nav-reveal a:hover svg {\n      fill: #111; }\n  #navigation .nav-reveal a.prev {\n    left: 0; }\n    #navigation .nav-reveal a.prev svg {\n      left: 0;\n      margin-left: 30px;\n      float: left; }\n    #navigation .nav-reveal a.prev div {\n      margin-left: 50px; }\n  #navigation .nav-reveal a.next {\n    right: 0; }\n    #navigation .nav-reveal a.next svg {\n      right: 0;\n      margin-right: 30px;\n      float: right; }\n    #navigation .nav-reveal a.next div {\n      margin-right: 50px; }\n  #navigation .nav-reveal a svg {\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    fill: #3A4145; }\n  #navigation .nav-reveal a div {\n    position: absolute;\n    box-sizing: border-box;\n    padding: 1em 2em;\n    width: 210px;\n    top: 50%;\n    transform: translateY(-50%);\n    font-size: smaller; }\n    #navigation .nav-reveal a div h6 {\n      margin: 0;\n      color: #f5f5f5; }\n    #navigation .nav-reveal a div p {\n      margin: 0;\n      font-family: \"Rubik\", Futura, Helvetica, Arial, sans-serif;\n      color: #f5f5f5; }\n\n.nav-reveal a.prev div {\n  left: 0;\n  text-align: right; }\n\n.nav-reveal a.next div {\n  right: 0; }\n\n/* Additional purecss configs */\n/* Set your content font stack here: */\nhtml, button, input, select, textarea, .pure-g [class*=\"pure-u\"] {\n  font-family: \"Merriweather\", Garamond, Times New Roman, serif; }\n\n[class^=\"pure-u\"], [class^=\"pure-u-md\"] {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.wrapper {\n  padding: 1em; }\n\n/* General */\nhtml {\n  height: 100%;\n  max-height: 100%;\n  font-size: 62.5%;\n  tap-highlight-color: transparent; }\n\nbody {\n  height: 100%;\n  max-height: 100%;\n  width: 100%;\n  letter-spacing: 0.01rem;\n  font-size: 1.6rem;\n  line-height: 1.9em;\n  color: #3A4145;\n  background-color: #f5f5f5;\n  text-rendering: geometricPrecision;\n  margin: 0 auto; }\n\n::-moz-selection {\n  background: rgba(46, 147, 221, 0.125); }\n\n::selection {\n  background: rgba(46, 147, 221, 0.125); }\n\nh1, h2, #top-navigation h1, h3,\nh4, h5, h6 {\n  color: #2E2E2E;\n  line-height: 1.15em;\n  margin: 0 0 0.4em 0;\n  font-family: \"Rubik\", Futura, Helvetica, Arial, sans-serif;\n  text-rendering: geometricPrecision; }\n\nh1 {\n  font-size: 5rem;\n  letter-spacing: -2px;\n  text-indent: -3px; }\n\nh2, #top-navigation h1 {\n  font-size: 3.6rem;\n  letter-spacing: -1px; }\n\nh3 {\n  font-size: 3rem;\n  letter-spacing: -0.6px; }\n\nh4 {\n  font-size: 2.5rem; }\n\nh5 {\n  font-size: 2rem; }\n\nh6 {\n  font-size: 1.6rem; }\n\na {\n  color: #3A4145;\n  padding-bottom: .4rem;\n  border-bottom: 1px solid #2e93dd;\n  transition: color 0.3s ease, background-color 0.3s ease;\n  text-decoration: none; }\n  a:hover {\n    color: #111;\n    background-color: rgba(46, 147, 221, 0.125);\n    transition: color 0.3s ease, background-color 0.3s ease; }\n\np, ul, ol, dl {\n  margin: 0 0 1.75em 0;\n  text-rendering: geometricPrecision; }\n\nol, ul {\n  padding-left: 3rem; }\n\nul {\n  list-style-type: square; }\n\nol ol, ul ul,\nul ol, ol ul {\n  margin: 0 0 0.4em 0;\n  padding-left: 2em; }\n\ndl dt {\n  float: left;\n  width: 180px;\n  overflow: hidden;\n  clear: left;\n  text-align: right;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-weight: 700;\n  margin-bottom: 1em; }\n\ndl dd {\n  margin-left: 200px;\n  margin-bottom: 1em; }\n\nli {\n  margin: 0.4em 0; }\n\nli li {\n  margin: 0; }\n\nli > p:last-of-type {\n  margin-bottom: 0; }\n\nstrong {\n  font-weight: 700; }\n\nmark {\n  background-color: rgba(46, 147, 221, 0.125); }\n\nblockquote::before {\n  content: '';\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: auto;\n  transform: translateY(-140%);\n  width: 32px;\n  height: 32px;\n  background-image: url(\"data:image/svg+xml;utf-8,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'><g fill='#3A4145'><path d='M16 32c8.8 0 16-7.2 16-16s-7.2-16-16-16-16 7.2-16 16 7.2 16 16 16zM16 1c8.3 0 15 6.7 15 15s-6.7 15-15 15-15-6.7-15-15 6.7-15 15-15zM10.7 13.6c0.5 0.2 1 0.1 1.5-0.2 0.2-0.1 0.3-0.5 0.2-0.7s-0.5-0.3-0.7-0.2c-0.2 0.2-0.5 0.2-0.7 0.1-0.2-0.1-0.4-0.3-0.6-0.6-0.2-0.3-0.2-0.6-0.1-0.9 0.1-0.3 0.2-0.5 0.5-0.7 0.6-0.4 1.4-0.2 1.9 0.2 0.9 0.7 1.3 1.8 1.3 3.7 0 2.8-1.3 6.3-3.7 7.6-0.2 0.1-0.3 0.4-0.2 0.7 0.1 0.2 0.3 0.3 0.4 0.3 0.1 0 0.2 0 0.2-0.1 2.9-1.5 4.3-5.4 4.3-8.4 0-2.2-0.5-3.7-1.7-4.5-1-0.7-2.2-0.8-3.1-0.3-0.5 0.3-0.8 0.8-1 1.3s0 1.1 0.3 1.6c0.3 0.5 0.7 0.8 1.2 1zM18.7 13.6c0.5 0.2 1 0.1 1.5-0.2 0.2-0.1 0.3-0.5 0.2-0.7s-0.5-0.3-0.7-0.2c-0.2 0.2-0.5 0.2-0.7 0.1-0.2-0.1-0.4-0.3-0.6-0.6-0.2-0.3-0.2-0.6-0.1-0.9 0.1-0.3 0.2-0.5 0.5-0.7 0.6-0.4 1.4-0.2 1.9 0.2 0.9 0.7 1.3 1.8 1.3 3.7 0 2.8-1.3 6.3-3.7 7.6-0.2 0.1-0.3 0.4-0.2 0.7 0.1 0.2 0.3 0.3 0.4 0.3 0.1 0 0.2 0 0.2-0.1 2.9-1.5 4.3-5.4 4.3-8.4 0-2.2-0.5-3.7-1.7-4.5-1-0.7-2.2-0.8-3.1-0.3-0.5 0.3-0.8 0.8-1 1.3-0.1 0.6 0 1.1 0.3 1.6 0.3 0.5 0.7 0.8 1.2 1z'/></g></svg>\"); }\n\nblockquote {\n  position: relative;\n  text-align: center;\n  margin: 8rem 5rem 5rem 5rem; }\n  blockquote p {\n    display: inline;\n    color: #111;\n    font-style: italic; }\n    blockquote p:first-child::before, blockquote p:last-child::after {\n      display: block;\n      content: \"\";\n      height: 1rem;\n      margin: auto; }\n    blockquote p:first-child::before {\n      width: 20rem;\n      border-top: 1px solid #2e93dd; }\n    blockquote p:last-child::after {\n      width: 12rem;\n      border-bottom: 1px solid #2e93dd; }\n  blockquote cite {\n    display: block;\n    text-align: center;\n    font-style: normal;\n    font-weight: 900;\n    margin-top: 1rem; }\n    blockquote cite::before {\n      display: block;\n      content: \"\";\n      height: 1rem;\n      margin: auto;\n      width: 12rem;\n      border-top: 1px solid #2e93dd; }\n\ncode {\n  font-family: \"Space Mono\", Monaco, Consolas, monospace; }\n\nfigure {\n  margin: 0; }\n\nimg {\n  display: block;\n  max-width: 100%;\n  height: auto;\n  margin: 2rem auto; }\n\n/* Util */\n.clearfix:after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.max-width {\n  max-width: 1200px;\n  margin: 0 auto; }\n\n.show {\n  opacity: 1;\n  transition: all 0.3s ease; }\n\n.hide {\n  opacity: 0;\n  transition: all 0.3s ease; }\n\n/* Default */\n#footer {\n  background: #3A4145;\n  text-align: center;\n  padding: 3em 0; }\n  #footer a {\n    border: none; }\n    #footer a:hover {\n      background: none; }\n    #footer a svg {\n      fill: #f5f5f5; }\n      #footer a svg:hover {\n        fill: #2e93dd; }\n  #footer p {\n    font-family: \"Rubik\", Futura, Helvetica, Arial, sans-serif;\n    color: #f5f5f5; }\n\n/* Top Navigation */\n#top-navigation {\n  position: fixed;\n  height: 80px;\n  width: 100%;\n  background: white;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  z-index: 999; }\n  #top-navigation .wrapper {\n    overflow: hidden; }\n  #top-navigation h1 {\n    float: left;\n    font-family: \"Merriweather\", Garamond, Times New Roman, serif;\n    color: #3A4145;\n    transition: color .5s ease; }\n    #top-navigation h1:hover {\n      color: #111; }\n  #top-navigation .icon-menu {\n    float: right;\n    fill: #3A4145; }\n    #top-navigation .icon-menu:hover {\n      fill: #111; }\n\n/* Index */\n.index-header {\n  height: 500px; }\n\n.featured-article {\n  height: 260px;\n  padding: 180px 0 60px 0;\n  background: 0 0 no-repeat;\n  background-size: cover; }\n\n/* Loop */\n.loop-article {\n  perspective: 100px;\n  margin-bottom: 1rem; }\n  .loop-article figure {\n    overflow: hidden;\n    display: inline-block;\n    box-sizing: border-box;\n    background: 0 0 no-repeat scroll center;\n    background-size: cover;\n    height: 300px;\n    min-width: 100%;\n    padding: 2em;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); }\n    .loop-article figure:hover {\n      filter: saturate(0.5);\n      z-index: 999; }\n    .loop-article figure:hover > header, .loop-article figure:hover > section, .loop-article figure:hover > footer {\n      opacity: 1;\n      transform: translateY(0%);\n      transition: opacity 0.3s ease-in-out, transform 0.4s ease-out; }\n  .loop-article section, .loop-article footer {\n    opacity: 0;\n    transform: translateY(-100%); }\n  .loop-article header {\n    transform: translateY(160px);\n    transition: opacity 0.3s 0.1s ease-in-out, transform 0.2s ease-in-out;\n    padding-bottom: 1rem; }\n    .loop-article header h2 a, .loop-article header #top-navigation h1 a, #top-navigation .loop-article header h1 a {\n      font-family: \"Merriweather\", Garamond, Times New Roman, serif;\n      color: #f5f5f5;\n      border: none; }\n      .loop-article header h2 a:hover, .loop-article header #top-navigation h1 a:hover, #top-navigation .loop-article header h1 a:hover {\n        background-color: rgba(46, 147, 221, 0); }\n  .loop-article section {\n    transition: opacity 0.2s ease-in-out, transform 0.5s ease-out;\n    padding-bottom: 1rem; }\n    .loop-article section p {\n      display: inline;\n      padding: .1em 0;\n      background-color: #f5f5f5; }\n  .loop-article footer {\n    transition: opacity 0.1s ease-in-out, transform 0.5s ease-out;\n    color: #f5f5f5; }\n    .loop-article footer a {\n      color: #f5f5f5;\n      font-weight: 900; }\n\n/* Post */\n.post-head {\n  height: 100vh;\n  overflow: hidden;\n  background: 0 0 no-repeat fixed;\n  background-size: cover;\n  margin-bottom: 6rem;\n  border-bottom: 5rem #2E2E2E solid; }\n  .post-head .post-head-wrap {\n    position: relative;\n    height: 100vh;\n    text-align: center;\n    box-sizing: border-box;\n    background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.65) 100%); }\n    .post-head .post-head-wrap .post-title-wrap {\n      position: absolute;\n      max-width: 800px;\n      left: 0;\n      right: 0;\n      bottom: 4rem;\n      margin: 0 auto; }\n      .post-head .post-head-wrap .post-title-wrap .post-title {\n        font-family: \"Merriweather\", Garamond, Times New Roman, serif;\n        color: #f5f5f5; }\n      .post-head .post-head-wrap .post-title-wrap a {\n        background: none;\n        border: none;\n        color: #f5f5f5;\n        font-size: 4rem; }\n        .post-head .post-head-wrap .post-title-wrap a:hover {\n          color: #2e93dd; }\n        .post-head .post-head-wrap .post-title-wrap a svg {\n          animation: color-arrow 6s infinite;\n          fill: #f5f5f5; }\n          .post-head .post-head-wrap .post-title-wrap a svg:hover {\n            fill: #2e93dd; }\n\n.post-meta p {\n  font-family: \"Rubik\", Futura, Helvetica, Arial, sans-serif;\n  font-size: smaller; }\n\n.post-meta .tag-prefix {\n  color: #2e93dd; }\n\n.post-content {\n  box-sizing: border-box; }\n  .post-content section {\n    margin-bottom: 6rem; }\n  .post-content .output p:first-of-type::first-letter {\n    font-size: 10rem;\n    font-weight: 900;\n    line-height: 5.7rem;\n    float: left;\n    text-transform: uppercase;\n    margin: 1.6rem .8rem 0 0; }\n  .post-content .output a {\n    font-weight: 900; }\n  .post-content .output iframe {\n    max-width: 100%; }\n  .post-content .share {\n    width: 100%;\n    text-align: center;\n    font-size: 3rem; }\n    .post-content .share h4 {\n      font-family: \"Merriweather\", Garamond, Times New Roman, serif; }\n    .post-content .share a {\n      border: none; }\n      .post-content .share a:hover {\n        background: none; }\n      .post-content .share a svg {\n        fill: #3A4145;\n        transition: fill .5s ease; }\n        .post-content .share a svg:hover {\n          fill: #111; }\n  .post-content .comments {\n    text-align: center; }\n    .post-content .comments h4 {\n      font-family: \"Merriweather\", Garamond, Times New Roman, serif; }\n\n.post-related {\n  font-size: smaller; }\n  .post-related h6 {\n    font-size: 1em; }\n  .post-related p {\n    font-family: \"Rubik\", Futura, Helvetica, Arial, sans-serif; }\n\n@keyframes color-arrow {\n  0%, 100% {\n    fill: #f5f5f5; }\n  50% {\n    fill: #2e93dd; } }\n", ""]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "/*\n     _ _      _       _\n ___| (_) ___| | __  (_)___\n/ __| | |/ __| |/ /  | / __|\n\\__ \\ | | (__|   < _ | \\__ \\\n|___/_|_|\\___|_|\\_(_)/ |___/\n                   |__/\n\n Version: 1.6.0\n  Author: Ken Wheeler\n Website: http://kenwheeler.github.io\n    Docs: http://kenwheeler.github.io/slick\n    Repo: http://github.com/kenwheeler/slick\n  Issues: http://github.com/kenwheeler/slick/issues\n\n */\n! function(a) {\n    \"use strict\";\n    \"function\" == typeof define && define.amd ? define([\"jquery\"], a) : \"undefined\" != typeof exports ? module.exports = a(require(\"jquery\")) : a(jQuery)\n}(function(a) {\n    \"use strict\";\n    var b = window.Slick || {};\n    b = function() {\n        function c(c, d) {\n            var f, e = this;\n            e.defaults = {\n                accessibility: !0,\n                adaptiveHeight: !1,\n                appendArrows: a(c),\n                appendDots: a(c),\n                arrows: !0,\n                asNavFor: null,\n                prevArrow: '<button type=\"button\" data-role=\"none\" class=\"slick-prev\" aria-label=\"Previous\" tabindex=\"0\" role=\"button\">Previous</button>',\n                nextArrow: '<button type=\"button\" data-role=\"none\" class=\"slick-next\" aria-label=\"Next\" tabindex=\"0\" role=\"button\">Next</button>',\n                autoplay: !1,\n                autoplaySpeed: 3e3,\n                centerMode: !1,\n                centerPadding: \"50px\",\n                cssEase: \"ease\",\n                customPaging: function(b, c) {\n                    return a('<button type=\"button\" data-role=\"none\" role=\"button\" tabindex=\"0\" />').text(c + 1)\n                },\n                dots: !1,\n                dotsClass: \"slick-dots\",\n                draggable: !0,\n                easing: \"linear\",\n                edgeFriction: .35,\n                fade: !1,\n                focusOnSelect: !1,\n                infinite: !0,\n                initialSlide: 0,\n                lazyLoad: \"ondemand\",\n                mobileFirst: !1,\n                pauseOnHover: !0,\n                pauseOnFocus: !0,\n                pauseOnDotsHover: !1,\n                respondTo: \"window\",\n                responsive: null,\n                rows: 1,\n                rtl: !1,\n                slide: \"\",\n                slidesPerRow: 1,\n                slidesToShow: 1,\n                slidesToScroll: 1,\n                speed: 500,\n                swipe: !0,\n                swipeToSlide: !1,\n                touchMove: !0,\n                touchThreshold: 5,\n                useCSS: !0,\n                useTransform: !0,\n                variableWidth: !1,\n                vertical: !1,\n                verticalSwiping: !1,\n                waitForAnimate: !0,\n                zIndex: 1e3\n            }, e.initials = {\n                animating: !1,\n                dragging: !1,\n                autoPlayTimer: null,\n                currentDirection: 0,\n                currentLeft: null,\n                currentSlide: 0,\n                direction: 1,\n                $dots: null,\n                listWidth: null,\n                listHeight: null,\n                loadIndex: 0,\n                $nextArrow: null,\n                $prevArrow: null,\n                slideCount: null,\n                slideWidth: null,\n                $slideTrack: null,\n                $slides: null,\n                sliding: !1,\n                slideOffset: 0,\n                swipeLeft: null,\n                $list: null,\n                touchObject: {},\n                transformsEnabled: !1,\n                unslicked: !1\n            }, a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = !1, e.focussed = !1, e.interrupted = !1, e.hidden = \"hidden\", e.paused = !0, e.positionProp = null, e.respondTo = null, e.rowCount = 1, e.shouldClick = !0, e.$slider = a(c), e.$slidesCache = null, e.transformType = null, e.transitionType = null, e.visibilityChange = \"visibilitychange\", e.windowWidth = 0, e.windowTimer = null, f = a(c).data(\"slick\") || {}, e.options = a.extend({}, e.defaults, d, f), e.currentSlide = e.options.initialSlide, e.originalSettings = e.options, \"undefined\" != typeof document.mozHidden ? (e.hidden = \"mozHidden\", e.visibilityChange = \"mozvisibilitychange\") : \"undefined\" != typeof document.webkitHidden && (e.hidden = \"webkitHidden\", e.visibilityChange = \"webkitvisibilitychange\"), e.autoPlay = a.proxy(e.autoPlay, e), e.autoPlayClear = a.proxy(e.autoPlayClear, e), e.autoPlayIterator = a.proxy(e.autoPlayIterator, e), e.changeSlide = a.proxy(e.changeSlide, e), e.clickHandler = a.proxy(e.clickHandler, e), e.selectHandler = a.proxy(e.selectHandler, e), e.setPosition = a.proxy(e.setPosition, e), e.swipeHandler = a.proxy(e.swipeHandler, e), e.dragHandler = a.proxy(e.dragHandler, e), e.keyHandler = a.proxy(e.keyHandler, e), e.instanceUid = b++, e.htmlExpr = /^(?:\\s*(<[\\w\\W]+>)[^>]*)$/, e.registerBreakpoints(), e.init(!0)\n        }\n        var b = 0;\n        return c\n    }(), b.prototype.activateADA = function() {\n        var a = this;\n        a.$slideTrack.find(\".slick-active\").attr({\n            \"aria-hidden\": \"false\"\n        }).find(\"a, input, button, select\").attr({\n            tabindex: \"0\"\n        })\n    }, b.prototype.addSlide = b.prototype.slickAdd = function(b, c, d) {\n        var e = this;\n        if (\"boolean\" == typeof c) d = c, c = null;\n        else if (0 > c || c >= e.slideCount) return !1;\n        e.unload(), \"number\" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function(b, c) {\n            a(c).attr(\"data-slick-index\", b)\n        }), e.$slidesCache = e.$slides, e.reinit()\n    }, b.prototype.animateHeight = function() {\n        var a = this;\n        if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {\n            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);\n            a.$list.animate({\n                height: b\n            }, a.options.speed)\n        }\n    }, b.prototype.animateSlide = function(b, c) {\n        var d = {},\n            e = this;\n        e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({\n            left: b\n        }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({\n            top: b\n        }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({\n            animStart: e.currentLeft\n        }).animate({\n            animStart: b\n        }, {\n            duration: e.options.speed,\n            easing: e.options.easing,\n            step: function(a) {\n                a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = \"translate(\" + a + \"px, 0px)\", e.$slideTrack.css(d)) : (d[e.animType] = \"translate(0px,\" + a + \"px)\", e.$slideTrack.css(d))\n            },\n            complete: function() {\n                c && c.call()\n            }\n        })) : (e.applyTransition(), b = Math.ceil(b), e.options.vertical === !1 ? d[e.animType] = \"translate3d(\" + b + \"px, 0px, 0px)\" : d[e.animType] = \"translate3d(0px,\" + b + \"px, 0px)\", e.$slideTrack.css(d), c && setTimeout(function() {\n            e.disableTransition(), c.call()\n        }, e.options.speed))\n    }, b.prototype.getNavTarget = function() {\n        var b = this,\n            c = b.options.asNavFor;\n        return c && null !== c && (c = a(c).not(b.$slider)), c\n    }, b.prototype.asNavFor = function(b) {\n        var c = this,\n            d = c.getNavTarget();\n        null !== d && \"object\" == typeof d && d.each(function() {\n            var c = a(this).slick(\"getSlick\");\n            c.unslicked || c.slideHandler(b, !0)\n        })\n    }, b.prototype.applyTransition = function(a) {\n        var b = this,\n            c = {};\n        b.options.fade === !1 ? c[b.transitionType] = b.transformType + \" \" + b.options.speed + \"ms \" + b.options.cssEase : c[b.transitionType] = \"opacity \" + b.options.speed + \"ms \" + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)\n    }, b.prototype.autoPlay = function() {\n        var a = this;\n        a.autoPlayClear(), a.slideCount > a.options.slidesToShow && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))\n    }, b.prototype.autoPlayClear = function() {\n        var a = this;\n        a.autoPlayTimer && clearInterval(a.autoPlayTimer)\n    }, b.prototype.autoPlayIterator = function() {\n        var a = this,\n            b = a.currentSlide + a.options.slidesToScroll;\n        a.paused || a.interrupted || a.focussed || (a.options.infinite === !1 && (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1 ? a.direction = 0 : 0 === a.direction && (b = a.currentSlide - a.options.slidesToScroll, a.currentSlide - 1 === 0 && (a.direction = 1))), a.slideHandler(b))\n    }, b.prototype.buildArrows = function() {\n        var b = this;\n        b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass(\"slick-arrow\"), b.$nextArrow = a(b.options.nextArrow).addClass(\"slick-arrow\"), b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass(\"slick-hidden\").removeAttr(\"aria-hidden tabindex\"), b.$nextArrow.removeClass(\"slick-hidden\").removeAttr(\"aria-hidden tabindex\"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass(\"slick-disabled\").attr(\"aria-disabled\", \"true\")) : b.$prevArrow.add(b.$nextArrow).addClass(\"slick-hidden\").attr({\n            \"aria-disabled\": \"true\",\n            tabindex: \"-1\"\n        }))\n    }, b.prototype.buildDots = function() {\n        var c, d, b = this;\n        if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {\n            for (b.$slider.addClass(\"slick-dotted\"), d = a(\"<ul />\").addClass(b.options.dotsClass), c = 0; c <= b.getDotCount(); c += 1) d.append(a(\"<li />\").append(b.options.customPaging.call(this, b, c)));\n            b.$dots = d.appendTo(b.options.appendDots), b.$dots.find(\"li\").first().addClass(\"slick-active\").attr(\"aria-hidden\", \"false\")\n        }\n    }, b.prototype.buildOut = function() {\n        var b = this;\n        b.$slides = b.$slider.children(b.options.slide + \":not(.slick-cloned)\").addClass(\"slick-slide\"), b.slideCount = b.$slides.length, b.$slides.each(function(b, c) {\n            a(c).attr(\"data-slick-index\", b).data(\"originalStyling\", a(c).attr(\"style\") || \"\")\n        }), b.$slider.addClass(\"slick-slider\"), b.$slideTrack = 0 === b.slideCount ? a('<div class=\"slick-track\"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class=\"slick-track\"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live=\"polite\" class=\"slick-list\"/>').parent(), b.$slideTrack.css(\"opacity\", 0), (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), a(\"img[data-lazy]\", b.$slider).not(\"[src]\").addClass(\"slick-loading\"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses(\"number\" == typeof b.currentSlide ? b.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass(\"draggable\")\n    }, b.prototype.buildRows = function() {\n        var b, c, d, e, f, g, h, a = this;\n        if (e = document.createDocumentFragment(), g = a.$slider.children(), a.options.rows > 1) {\n            for (h = a.options.slidesPerRow * a.options.rows, f = Math.ceil(g.length / h), b = 0; f > b; b++) {\n                var i = document.createElement(\"div\");\n                for (c = 0; c < a.options.rows; c++) {\n                    var j = document.createElement(\"div\");\n                    for (d = 0; d < a.options.slidesPerRow; d++) {\n                        var k = b * h + (c * a.options.slidesPerRow + d);\n                        g.get(k) && j.appendChild(g.get(k))\n                    }\n                    i.appendChild(j)\n                }\n                e.appendChild(i)\n            }\n            a.$slider.empty().append(e), a.$slider.children().children().children().css({\n                width: 100 / a.options.slidesPerRow + \"%\",\n                display: \"inline-block\"\n            })\n        }\n    }, b.prototype.checkResponsive = function(b, c) {\n        var e, f, g, d = this,\n            h = !1,\n            i = d.$slider.width(),\n            j = window.innerWidth || a(window).width();\n        if (\"window\" === d.respondTo ? g = j : \"slider\" === d.respondTo ? g = i : \"min\" === d.respondTo && (g = Math.min(j, i)), d.options.responsive && d.options.responsive.length && null !== d.options.responsive) {\n            f = null;\n            for (e in d.breakpoints) d.breakpoints.hasOwnProperty(e) && (d.originalSettings.mobileFirst === !1 ? g < d.breakpoints[e] && (f = d.breakpoints[e]) : g > d.breakpoints[e] && (f = d.breakpoints[e]));\n            null !== f ? null !== d.activeBreakpoint ? (f !== d.activeBreakpoint || c) && (d.activeBreakpoint = f, \"unslick\" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : (d.activeBreakpoint = f, \"unslick\" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : null !== d.activeBreakpoint && (d.activeBreakpoint = null, d.options = d.originalSettings, b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b), h = f), b || h === !1 || d.$slider.trigger(\"breakpoint\", [d, h])\n        }\n    }, b.prototype.changeSlide = function(b, c) {\n        var f, g, h, d = this,\n            e = a(b.currentTarget);\n        switch (e.is(\"a\") && b.preventDefault(), e.is(\"li\") || (e = e.closest(\"li\")), h = d.slideCount % d.options.slidesToScroll !== 0, f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll, b.data.message) {\n            case \"previous\":\n                g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c);\n                break;\n            case \"next\":\n                g = 0 === f ? d.options.slidesToScroll : f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c);\n                break;\n            case \"index\":\n                var i = 0 === b.data.index ? 0 : b.data.index || e.index() * d.options.slidesToScroll;\n                d.slideHandler(d.checkNavigable(i), !1, c), e.children().trigger(\"focus\");\n                break;\n            default:\n                return\n        }\n    }, b.prototype.checkNavigable = function(a) {\n        var c, d, b = this;\n        if (c = b.getNavigableIndexes(), d = 0, a > c[c.length - 1]) a = c[c.length - 1];\n        else\n            for (var e in c) {\n                if (a < c[e]) {\n                    a = d;\n                    break\n                }\n                d = c[e]\n            }\n        return a\n    }, b.prototype.cleanUpEvents = function() {\n        var b = this;\n        b.options.dots && null !== b.$dots && a(\"li\", b.$dots).off(\"click.slick\", b.changeSlide).off(\"mouseenter.slick\", a.proxy(b.interrupt, b, !0)).off(\"mouseleave.slick\", a.proxy(b.interrupt, b, !1)), b.$slider.off(\"focus.slick blur.slick\"), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off(\"click.slick\", b.changeSlide), b.$nextArrow && b.$nextArrow.off(\"click.slick\", b.changeSlide)), b.$list.off(\"touchstart.slick mousedown.slick\", b.swipeHandler), b.$list.off(\"touchmove.slick mousemove.slick\", b.swipeHandler), b.$list.off(\"touchend.slick mouseup.slick\", b.swipeHandler), b.$list.off(\"touchcancel.slick mouseleave.slick\", b.swipeHandler), b.$list.off(\"click.slick\", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.cleanUpSlideEvents(), b.options.accessibility === !0 && b.$list.off(\"keydown.slick\", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off(\"click.slick\", b.selectHandler), a(window).off(\"orientationchange.slick.slick-\" + b.instanceUid, b.orientationChange), a(window).off(\"resize.slick.slick-\" + b.instanceUid, b.resize), a(\"[draggable!=true]\", b.$slideTrack).off(\"dragstart\", b.preventDefault), a(window).off(\"load.slick.slick-\" + b.instanceUid, b.setPosition), a(document).off(\"ready.slick.slick-\" + b.instanceUid, b.setPosition)\n    }, b.prototype.cleanUpSlideEvents = function() {\n        var b = this;\n        b.$list.off(\"mouseenter.slick\", a.proxy(b.interrupt, b, !0)), b.$list.off(\"mouseleave.slick\", a.proxy(b.interrupt, b, !1))\n    }, b.prototype.cleanUpRows = function() {\n        var b, a = this;\n        a.options.rows > 1 && (b = a.$slides.children().children(), b.removeAttr(\"style\"), a.$slider.empty().append(b))\n    }, b.prototype.clickHandler = function(a) {\n        var b = this;\n        b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault())\n    }, b.prototype.destroy = function(b) {\n        var c = this;\n        c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(\".slick-cloned\", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass(\"slick-disabled slick-arrow slick-hidden\").removeAttr(\"aria-hidden aria-disabled tabindex\").css(\"display\", \"\"), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass(\"slick-disabled slick-arrow slick-hidden\").removeAttr(\"aria-hidden aria-disabled tabindex\").css(\"display\", \"\"), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass(\"slick-slide slick-active slick-center slick-visible slick-current\").removeAttr(\"aria-hidden\").removeAttr(\"data-slick-index\").each(function() {\n            a(this).attr(\"style\", a(this).data(\"originalStyling\"))\n        }), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass(\"slick-slider\"), c.$slider.removeClass(\"slick-initialized\"), c.$slider.removeClass(\"slick-dotted\"), c.unslicked = !0, b || c.$slider.trigger(\"destroy\", [c])\n    }, b.prototype.disableTransition = function(a) {\n        var b = this,\n            c = {};\n        c[b.transitionType] = \"\", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)\n    }, b.prototype.fadeSlide = function(a, b) {\n        var c = this;\n        c.cssTransitions === !1 ? (c.$slides.eq(a).css({\n            zIndex: c.options.zIndex\n        }), c.$slides.eq(a).animate({\n            opacity: 1\n        }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({\n            opacity: 1,\n            zIndex: c.options.zIndex\n        }), b && setTimeout(function() {\n            c.disableTransition(a), b.call()\n        }, c.options.speed))\n    }, b.prototype.fadeSlideOut = function(a) {\n        var b = this;\n        b.cssTransitions === !1 ? b.$slides.eq(a).animate({\n            opacity: 0,\n            zIndex: b.options.zIndex - 2\n        }, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({\n            opacity: 0,\n            zIndex: b.options.zIndex - 2\n        }))\n    }, b.prototype.filterSlides = b.prototype.slickFilter = function(a) {\n        var b = this;\n        null !== a && (b.$slidesCache = b.$slides, b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit())\n    }, b.prototype.focusHandler = function() {\n        var b = this;\n        b.$slider.off(\"focus.slick blur.slick\").on(\"focus.slick blur.slick\", \"*:not(.slick-arrow)\", function(c) {\n            c.stopImmediatePropagation();\n            var d = a(this);\n            setTimeout(function() {\n                b.options.pauseOnFocus && (b.focussed = d.is(\":focus\"), b.autoPlay())\n            }, 0)\n        })\n    }, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function() {\n        var a = this;\n        return a.currentSlide\n    }, b.prototype.getDotCount = function() {\n        var a = this,\n            b = 0,\n            c = 0,\n            d = 0;\n        if (a.options.infinite === !0)\n            for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;\n        else if (a.options.centerMode === !0) d = a.slideCount;\n        else if (a.options.asNavFor)\n            for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;\n        else d = 1 + Math.ceil((a.slideCount - a.options.slidesToShow) / a.options.slidesToScroll);\n        return d - 1\n    }, b.prototype.getLeft = function(a) {\n        var c, d, f, b = this,\n            e = 0;\n        return b.slideOffset = 0, d = b.$slides.first().outerHeight(!0), b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = b.slideWidth * b.options.slidesToShow * -1, e = d * b.options.slidesToShow * -1), b.slideCount % b.options.slidesToScroll !== 0 && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (a > b.slideCount ? (b.slideOffset = (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth * -1, e = (b.options.slidesToShow - (a - b.slideCount)) * d * -1) : (b.slideOffset = b.slideCount % b.options.slidesToScroll * b.slideWidth * -1, e = b.slideCount % b.options.slidesToScroll * d * -1))) : a + b.options.slidesToShow > b.slideCount && (b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth, e = (a + b.options.slidesToShow - b.slideCount) * d), b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0, e = 0), b.options.centerMode === !0 && b.options.infinite === !0 ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : b.options.centerMode === !0 && (b.slideOffset = 0, b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)), c = b.options.vertical === !1 ? a * b.slideWidth * -1 + b.slideOffset : a * d * -1 + e, b.options.variableWidth === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(\".slick-slide\").eq(a) : b.$slideTrack.children(\".slick-slide\").eq(a + b.options.slidesToShow), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, b.options.centerMode === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(\".slick-slide\").eq(a) : b.$slideTrack.children(\".slick-slide\").eq(a + b.options.slidesToShow + 1), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, c += (b.$list.width() - f.outerWidth()) / 2)), c\n    }, b.prototype.getOption = b.prototype.slickGetOption = function(a) {\n        var b = this;\n        return b.options[a]\n    }, b.prototype.getNavigableIndexes = function() {\n        var e, a = this,\n            b = 0,\n            c = 0,\n            d = [];\n        for (a.options.infinite === !1 ? e = a.slideCount : (b = -1 * a.options.slidesToScroll, c = -1 * a.options.slidesToScroll, e = 2 * a.slideCount); e > b;) d.push(b), b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;\n        return d\n    }, b.prototype.getSlick = function() {\n        return this\n    }, b.prototype.getSlideCount = function() {\n        var c, d, e, b = this;\n        return e = b.options.centerMode === !0 ? b.slideWidth * Math.floor(b.options.slidesToShow / 2) : 0, b.options.swipeToSlide === !0 ? (b.$slideTrack.find(\".slick-slide\").each(function(c, f) {\n            return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft ? (d = f, !1) : void 0\n        }), c = Math.abs(a(d).attr(\"data-slick-index\") - b.currentSlide) || 1) : b.options.slidesToScroll\n    }, b.prototype.goTo = b.prototype.slickGoTo = function(a, b) {\n        var c = this;\n        c.changeSlide({\n            data: {\n                message: \"index\",\n                index: parseInt(a)\n            }\n        }, b)\n    }, b.prototype.init = function(b) {\n        var c = this;\n        a(c.$slider).hasClass(\"slick-initialized\") || (a(c.$slider).addClass(\"slick-initialized\"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots(), c.checkResponsive(!0), c.focusHandler()), b && c.$slider.trigger(\"init\", [c]), c.options.accessibility === !0 && c.initADA(), c.options.autoplay && (c.paused = !1, c.autoPlay())\n    }, b.prototype.initADA = function() {\n        var b = this;\n        b.$slides.add(b.$slideTrack.find(\".slick-cloned\")).attr({\n            \"aria-hidden\": \"true\",\n            tabindex: \"-1\"\n        }).find(\"a, input, button, select\").attr({\n            tabindex: \"-1\"\n        }), b.$slideTrack.attr(\"role\", \"listbox\"), b.$slides.not(b.$slideTrack.find(\".slick-cloned\")).each(function(c) {\n            a(this).attr({\n                role: \"option\",\n                \"aria-describedby\": \"slick-slide\" + b.instanceUid + c\n            })\n        }), null !== b.$dots && b.$dots.attr(\"role\", \"tablist\").find(\"li\").each(function(c) {\n            a(this).attr({\n                role: \"presentation\",\n                \"aria-selected\": \"false\",\n                \"aria-controls\": \"navigation\" + b.instanceUid + c,\n                id: \"slick-slide\" + b.instanceUid + c\n            })\n        }).first().attr(\"aria-selected\", \"true\").end().find(\"button\").attr(\"role\", \"button\").end().closest(\"div\").attr(\"role\", \"toolbar\"), b.activateADA()\n    }, b.prototype.initArrowEvents = function() {\n        var a = this;\n        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.off(\"click.slick\").on(\"click.slick\", {\n            message: \"previous\"\n        }, a.changeSlide), a.$nextArrow.off(\"click.slick\").on(\"click.slick\", {\n            message: \"next\"\n        }, a.changeSlide))\n    }, b.prototype.initDotEvents = function() {\n        var b = this;\n        b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a(\"li\", b.$dots).on(\"click.slick\", {\n            message: \"index\"\n        }, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && a(\"li\", b.$dots).on(\"mouseenter.slick\", a.proxy(b.interrupt, b, !0)).on(\"mouseleave.slick\", a.proxy(b.interrupt, b, !1))\n    }, b.prototype.initSlideEvents = function() {\n        var b = this;\n        b.options.pauseOnHover && (b.$list.on(\"mouseenter.slick\", a.proxy(b.interrupt, b, !0)), b.$list.on(\"mouseleave.slick\", a.proxy(b.interrupt, b, !1)))\n    }, b.prototype.initializeEvents = function() {\n        var b = this;\n        b.initArrowEvents(), b.initDotEvents(), b.initSlideEvents(), b.$list.on(\"touchstart.slick mousedown.slick\", {\n            action: \"start\"\n        }, b.swipeHandler), b.$list.on(\"touchmove.slick mousemove.slick\", {\n            action: \"move\"\n        }, b.swipeHandler), b.$list.on(\"touchend.slick mouseup.slick\", {\n            action: \"end\"\n        }, b.swipeHandler), b.$list.on(\"touchcancel.slick mouseleave.slick\", {\n            action: \"end\"\n        }, b.swipeHandler), b.$list.on(\"click.slick\", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), b.options.accessibility === !0 && b.$list.on(\"keydown.slick\", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on(\"click.slick\", b.selectHandler), a(window).on(\"orientationchange.slick.slick-\" + b.instanceUid, a.proxy(b.orientationChange, b)), a(window).on(\"resize.slick.slick-\" + b.instanceUid, a.proxy(b.resize, b)), a(\"[draggable!=true]\", b.$slideTrack).on(\"dragstart\", b.preventDefault), a(window).on(\"load.slick.slick-\" + b.instanceUid, b.setPosition), a(document).on(\"ready.slick.slick-\" + b.instanceUid, b.setPosition)\n    }, b.prototype.initUI = function() {\n        var a = this;\n        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show()\n    }, b.prototype.keyHandler = function(a) {\n        var b = this;\n        a.target.tagName.match(\"TEXTAREA|INPUT|SELECT\") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({\n            data: {\n                message: b.options.rtl === !0 ? \"next\" : \"previous\"\n            }\n        }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({\n            data: {\n                message: b.options.rtl === !0 ? \"previous\" : \"next\"\n            }\n        }))\n    }, b.prototype.lazyLoad = function() {\n        function g(c) {\n            a(\"img[data-lazy]\", c).each(function() {\n                var c = a(this),\n                    d = a(this).attr(\"data-lazy\"),\n                    e = document.createElement(\"img\");\n                e.onload = function() {\n                    c.animate({\n                        opacity: 0\n                    }, 100, function() {\n                        c.attr(\"src\", d).animate({\n                            opacity: 1\n                        }, 200, function() {\n                            c.removeAttr(\"data-lazy\").removeClass(\"slick-loading\")\n                        }), b.$slider.trigger(\"lazyLoaded\", [b, c, d])\n                    })\n                }, e.onerror = function() {\n                    c.removeAttr(\"data-lazy\").removeClass(\"slick-loading\").addClass(\"slick-lazyload-error\"), b.$slider.trigger(\"lazyLoadError\", [b, c, d])\n                }, e.src = d\n            })\n        }\n        var c, d, e, f, b = this;\n        b.options.centerMode === !0 ? b.options.infinite === !0 ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1), f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)), f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide, f = Math.ceil(e + b.options.slidesToShow), b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)), c = b.$slider.find(\".slick-slide\").slice(e, f), g(c), b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find(\".slick-slide\"), g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(\".slick-cloned\").slice(0, b.options.slidesToShow), g(d)) : 0 === b.currentSlide && (d = b.$slider.find(\".slick-cloned\").slice(-1 * b.options.slidesToShow), g(d))\n    }, b.prototype.loadSlider = function() {\n        var a = this;\n        a.setPosition(), a.$slideTrack.css({\n            opacity: 1\n        }), a.$slider.removeClass(\"slick-loading\"), a.initUI(), \"progressive\" === a.options.lazyLoad && a.progressiveLazyLoad()\n    }, b.prototype.next = b.prototype.slickNext = function() {\n        var a = this;\n        a.changeSlide({\n            data: {\n                message: \"next\"\n            }\n        })\n    }, b.prototype.orientationChange = function() {\n        var a = this;\n        a.checkResponsive(), a.setPosition()\n    }, b.prototype.pause = b.prototype.slickPause = function() {\n        var a = this;\n        a.autoPlayClear(), a.paused = !0\n    }, b.prototype.play = b.prototype.slickPlay = function() {\n        var a = this;\n        a.autoPlay(), a.options.autoplay = !0, a.paused = !1, a.focussed = !1, a.interrupted = !1\n    }, b.prototype.postSlide = function(a) {\n        var b = this;\n        b.unslicked || (b.$slider.trigger(\"afterChange\", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay && b.autoPlay(), b.options.accessibility === !0 && b.initADA())\n    }, b.prototype.prev = b.prototype.slickPrev = function() {\n        var a = this;\n        a.changeSlide({\n            data: {\n                message: \"previous\"\n            }\n        })\n    }, b.prototype.preventDefault = function(a) {\n        a.preventDefault()\n    }, b.prototype.progressiveLazyLoad = function(b) {\n        b = b || 1;\n        var e, f, g, c = this,\n            d = a(\"img[data-lazy]\", c.$slider);\n        d.length ? (e = d.first(), f = e.attr(\"data-lazy\"), g = document.createElement(\"img\"), g.onload = function() {\n            e.attr(\"src\", f).removeAttr(\"data-lazy\").removeClass(\"slick-loading\"), c.options.adaptiveHeight === !0 && c.setPosition(), c.$slider.trigger(\"lazyLoaded\", [c, e, f]), c.progressiveLazyLoad()\n        }, g.onerror = function() {\n            3 > b ? setTimeout(function() {\n                c.progressiveLazyLoad(b + 1)\n            }, 500) : (e.removeAttr(\"data-lazy\").removeClass(\"slick-loading\").addClass(\"slick-lazyload-error\"), c.$slider.trigger(\"lazyLoadError\", [c, e, f]), c.progressiveLazyLoad())\n        }, g.src = f) : c.$slider.trigger(\"allImagesLoaded\", [c])\n    }, b.prototype.refresh = function(b) {\n        var d, e, c = this;\n        e = c.slideCount - c.options.slidesToShow, !c.options.infinite && c.currentSlide > e && (c.currentSlide = e), c.slideCount <= c.options.slidesToShow && (c.currentSlide = 0), d = c.currentSlide, c.destroy(!0), a.extend(c, c.initials, {\n            currentSlide: d\n        }), c.init(), b || c.changeSlide({\n            data: {\n                message: \"index\",\n                index: d\n            }\n        }, !1)\n    }, b.prototype.registerBreakpoints = function() {\n        var c, d, e, b = this,\n            f = b.options.responsive || null;\n        if (\"array\" === a.type(f) && f.length) {\n            b.respondTo = b.options.respondTo || \"window\";\n            for (c in f)\n                if (e = b.breakpoints.length - 1, d = f[c].breakpoint, f.hasOwnProperty(c)) {\n                    for (; e >= 0;) b.breakpoints[e] && b.breakpoints[e] === d && b.breakpoints.splice(e, 1), e--;\n                    b.breakpoints.push(d), b.breakpointSettings[d] = f[c].settings\n                }\n            b.breakpoints.sort(function(a, c) {\n                return b.options.mobileFirst ? a - c : c - a\n            })\n        }\n    }, b.prototype.reinit = function() {\n        var b = this;\n        b.$slides = b.$slideTrack.children(b.options.slide).addClass(\"slick-slide\"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.cleanUpSlideEvents(), b.initSlideEvents(), b.checkResponsive(!1, !0), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on(\"click.slick\", b.selectHandler), b.setSlideClasses(\"number\" == typeof b.currentSlide ? b.currentSlide : 0), b.setPosition(), b.focusHandler(), b.paused = !b.options.autoplay, b.autoPlay(), b.$slider.trigger(\"reInit\", [b])\n    }, b.prototype.resize = function() {\n        var b = this;\n        a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function() {\n            b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition()\n        }, 50))\n    }, b.prototype.removeSlide = b.prototype.slickRemove = function(a, b, c) {\n        var d = this;\n        return \"boolean\" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit())\n    }, b.prototype.setCSS = function(a) {\n        var d, e, b = this,\n            c = {};\n        b.options.rtl === !0 && (a = -a), d = \"left\" == b.positionProp ? Math.ceil(a) + \"px\" : \"0px\", e = \"top\" == b.positionProp ? Math.ceil(a) + \"px\" : \"0px\", c[b.positionProp] = a, b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {}, b.cssTransitions === !1 ? (c[b.animType] = \"translate(\" + d + \", \" + e + \")\", b.$slideTrack.css(c)) : (c[b.animType] = \"translate3d(\" + d + \", \" + e + \", 0px)\", b.$slideTrack.css(c)))\n    }, b.prototype.setDimensions = function() {\n        var a = this;\n        a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({\n            padding: \"0px \" + a.options.centerPadding\n        }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({\n            padding: a.options.centerPadding + \" 0px\"\n        })), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(\".slick-slide\").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(\".slick-slide\").length)));\n        var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();\n        a.options.variableWidth === !1 && a.$slideTrack.children(\".slick-slide\").width(a.slideWidth - b)\n    }, b.prototype.setFade = function() {\n        var c, b = this;\n        b.$slides.each(function(d, e) {\n            c = b.slideWidth * d * -1, b.options.rtl === !0 ? a(e).css({\n                position: \"relative\",\n                right: c,\n                top: 0,\n                zIndex: b.options.zIndex - 2,\n                opacity: 0\n            }) : a(e).css({\n                position: \"relative\",\n                left: c,\n                top: 0,\n                zIndex: b.options.zIndex - 2,\n                opacity: 0\n            })\n        }), b.$slides.eq(b.currentSlide).css({\n            zIndex: b.options.zIndex - 1,\n            opacity: 1\n        })\n    }, b.prototype.setHeight = function() {\n        var a = this;\n        if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {\n            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);\n            a.$list.css(\"height\", b)\n        }\n    }, b.prototype.setOption = b.prototype.slickSetOption = function() {\n        var c, d, e, f, h, b = this,\n            g = !1;\n        if (\"object\" === a.type(arguments[0]) ? (e = arguments[0], g = arguments[1], h = \"multiple\") : \"string\" === a.type(arguments[0]) && (e = arguments[0], f = arguments[1], g = arguments[2], \"responsive\" === arguments[0] && \"array\" === a.type(arguments[1]) ? h = \"responsive\" : \"undefined\" != typeof arguments[1] && (h = \"single\")), \"single\" === h) b.options[e] = f;\n        else if (\"multiple\" === h) a.each(e, function(a, c) {\n            b.options[a] = c\n        });\n        else if (\"responsive\" === h)\n            for (d in f)\n                if (\"array\" !== a.type(b.options.responsive)) b.options.responsive = [f[d]];\n                else {\n                    for (c = b.options.responsive.length - 1; c >= 0;) b.options.responsive[c].breakpoint === f[d].breakpoint && b.options.responsive.splice(c, 1), c--;\n                    b.options.responsive.push(f[d])\n                }\n        g && (b.unload(), b.reinit())\n    }, b.prototype.setPosition = function() {\n        var a = this;\n        a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger(\"setPosition\", [a])\n    }, b.prototype.setProps = function() {\n        var a = this,\n            b = document.body.style;\n        a.positionProp = a.options.vertical === !0 ? \"top\" : \"left\", \"top\" === a.positionProp ? a.$slider.addClass(\"slick-vertical\") : a.$slider.removeClass(\"slick-vertical\"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), a.options.fade && (\"number\" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), void 0 !== b.OTransform && (a.animType = \"OTransform\", a.transformType = \"-o-transform\", a.transitionType = \"OTransition\", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = \"MozTransform\", a.transformType = \"-moz-transform\", a.transitionType = \"MozTransition\", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = \"webkitTransform\", a.transformType = \"-webkit-transform\", a.transitionType = \"webkitTransition\", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = \"msTransform\", a.transformType = \"-ms-transform\", a.transitionType = \"msTransition\", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = \"transform\", a.transformType = \"transform\", a.transitionType = \"transition\"), a.transformsEnabled = a.options.useTransform && null !== a.animType && a.animType !== !1\n    }, b.prototype.setSlideClasses = function(a) {\n        var c, d, e, f, b = this;\n        d = b.$slider.find(\".slick-slide\").removeClass(\"slick-active slick-center slick-current\").attr(\"aria-hidden\", \"true\"), b.$slides.eq(a).addClass(\"slick-current\"), b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2), b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass(\"slick-active\").attr(\"aria-hidden\", \"false\") : (e = b.options.slidesToShow + a,\n            d.slice(e - c + 1, e + c + 2).addClass(\"slick-active\").attr(\"aria-hidden\", \"false\")), 0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass(\"slick-center\") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass(\"slick-center\")), b.$slides.eq(a).addClass(\"slick-center\")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass(\"slick-active\").attr(\"aria-hidden\", \"false\") : d.length <= b.options.slidesToShow ? d.addClass(\"slick-active\").attr(\"aria-hidden\", \"false\") : (f = b.slideCount % b.options.slidesToShow, e = b.options.infinite === !0 ? b.options.slidesToShow + a : a, b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass(\"slick-active\").attr(\"aria-hidden\", \"false\") : d.slice(e, e + b.options.slidesToShow).addClass(\"slick-active\").attr(\"aria-hidden\", \"false\")), \"ondemand\" === b.options.lazyLoad && b.lazyLoad()\n    }, b.prototype.setupInfinite = function() {\n        var c, d, e, b = this;\n        if (b.options.fade === !0 && (b.options.centerMode = !1), b.options.infinite === !0 && b.options.fade === !1 && (d = null, b.slideCount > b.options.slidesToShow)) {\n            for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow, c = b.slideCount; c > b.slideCount - e; c -= 1) d = c - 1, a(b.$slides[d]).clone(!0).attr(\"id\", \"\").attr(\"data-slick-index\", d - b.slideCount).prependTo(b.$slideTrack).addClass(\"slick-cloned\");\n            for (c = 0; e > c; c += 1) d = c, a(b.$slides[d]).clone(!0).attr(\"id\", \"\").attr(\"data-slick-index\", d + b.slideCount).appendTo(b.$slideTrack).addClass(\"slick-cloned\");\n            b.$slideTrack.find(\".slick-cloned\").find(\"[id]\").each(function() {\n                a(this).attr(\"id\", \"\")\n            })\n        }\n    }, b.prototype.interrupt = function(a) {\n        var b = this;\n        a || b.autoPlay(), b.interrupted = a\n    }, b.prototype.selectHandler = function(b) {\n        var c = this,\n            d = a(b.target).is(\".slick-slide\") ? a(b.target) : a(b.target).parents(\".slick-slide\"),\n            e = parseInt(d.attr(\"data-slick-index\"));\n        return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), void c.asNavFor(e)) : void c.slideHandler(e)\n    }, b.prototype.slideHandler = function(a, b, c) {\n        var d, e, f, g, j, h = null,\n            i = this;\n        return b = b || !1, i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a), d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function() {\n            i.postSlide(d)\n        }) : i.postSlide(d))) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function() {\n            i.postSlide(d)\n        }) : i.postSlide(d))) : (i.options.autoplay && clearInterval(i.autoPlayTimer), e = 0 > d ? i.slideCount % i.options.slidesToScroll !== 0 ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? i.slideCount % i.options.slidesToScroll !== 0 ? 0 : d - i.slideCount : d, i.animating = !0, i.$slider.trigger(\"beforeChange\", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.options.asNavFor && (j = i.getNavTarget(), j = j.slick(\"getSlick\"), j.slideCount <= j.options.slidesToShow && j.setSlideClasses(i.currentSlide)), i.updateDots(), i.updateArrows(), i.options.fade === !0 ? (c !== !0 ? (i.fadeSlideOut(f), i.fadeSlide(e, function() {\n            i.postSlide(e)\n        })) : i.postSlide(e), void i.animateHeight()) : void(c !== !0 ? i.animateSlide(h, function() {\n            i.postSlide(e)\n        }) : i.postSlide(e))))\n    }, b.prototype.startLoad = function() {\n        var a = this;\n        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass(\"slick-loading\")\n    }, b.prototype.swipeDirection = function() {\n        var a, b, c, d, e = this;\n        return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? \"left\" : \"right\" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? \"left\" : \"right\" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? \"right\" : \"left\" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? \"down\" : \"up\" : \"vertical\"\n    }, b.prototype.swipeEnd = function(a) {\n        var c, d, b = this;\n        if (b.dragging = !1, b.interrupted = !1, b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0, void 0 === b.touchObject.curX) return !1;\n        if (b.touchObject.edgeHit === !0 && b.$slider.trigger(\"edge\", [b, b.swipeDirection()]), b.touchObject.swipeLength >= b.touchObject.minSwipe) {\n            switch (d = b.swipeDirection()) {\n                case \"left\":\n                case \"down\":\n                    c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(), b.currentDirection = 0;\n                    break;\n                case \"right\":\n                case \"up\":\n                    c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(), b.currentDirection = 1\n            }\n            \"vertical\" != d && (b.slideHandler(c), b.touchObject = {}, b.$slider.trigger(\"swipe\", [b, d]))\n        } else b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), b.touchObject = {})\n    }, b.prototype.swipeHandler = function(a) {\n        var b = this;\n        if (!(b.options.swipe === !1 || \"ontouchend\" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf(\"mouse\"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) {\n            case \"start\":\n                b.swipeStart(a);\n                break;\n            case \"move\":\n                b.swipeMove(a);\n                break;\n            case \"end\":\n                b.swipeEnd(a)\n        }\n    }, b.prototype.swipeMove = function(a) {\n        var d, e, f, g, h, b = this;\n        return h = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !b.dragging || h && 1 !== h.length ? !1 : (d = b.getLeft(b.currentSlide), b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX, b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY, b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))), b.options.verticalSwiping === !0 && (b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curY - b.touchObject.startY, 2)))), e = b.swipeDirection(), \"vertical\" !== e ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(), g = (b.options.rtl === !1 ? 1 : -1) * (b.touchObject.curX > b.touchObject.startX ? 1 : -1), b.options.verticalSwiping === !0 && (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1), f = b.touchObject.swipeLength, b.touchObject.edgeHit = !1, b.options.infinite === !1 && (0 === b.currentSlide && \"right\" === e || b.currentSlide >= b.getDotCount() && \"left\" === e) && (f = b.touchObject.swipeLength * b.options.edgeFriction, b.touchObject.edgeHit = !0), b.options.vertical === !1 ? b.swipeLeft = d + f * g : b.swipeLeft = d + f * (b.$list.height() / b.listWidth) * g, b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g), b.options.fade === !0 || b.options.touchMove === !1 ? !1 : b.animating === !0 ? (b.swipeLeft = null, !1) : void b.setCSS(b.swipeLeft)) : void 0)\n    }, b.prototype.swipeStart = function(a) {\n        var c, b = this;\n        return b.interrupted = !0, 1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]), b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX, b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY, void(b.dragging = !0))\n    }, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function() {\n        var a = this;\n        null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit())\n    }, b.prototype.unload = function() {\n        var b = this;\n        a(\".slick-cloned\", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass(\"slick-slide slick-active slick-visible slick-current\").attr(\"aria-hidden\", \"true\").css(\"width\", \"\")\n    }, b.prototype.unslick = function(a) {\n        var b = this;\n        b.$slider.trigger(\"unslick\", [b, a]), b.destroy()\n    }, b.prototype.updateArrows = function() {\n        var b, a = this;\n        b = Math.floor(a.options.slidesToShow / 2), a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && !a.options.infinite && (a.$prevArrow.removeClass(\"slick-disabled\").attr(\"aria-disabled\", \"false\"), a.$nextArrow.removeClass(\"slick-disabled\").attr(\"aria-disabled\", \"false\"), 0 === a.currentSlide ? (a.$prevArrow.addClass(\"slick-disabled\").attr(\"aria-disabled\", \"true\"), a.$nextArrow.removeClass(\"slick-disabled\").attr(\"aria-disabled\", \"false\")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && a.options.centerMode === !1 ? (a.$nextArrow.addClass(\"slick-disabled\").attr(\"aria-disabled\", \"true\"), a.$prevArrow.removeClass(\"slick-disabled\").attr(\"aria-disabled\", \"false\")) : a.currentSlide >= a.slideCount - 1 && a.options.centerMode === !0 && (a.$nextArrow.addClass(\"slick-disabled\").attr(\"aria-disabled\", \"true\"), a.$prevArrow.removeClass(\"slick-disabled\").attr(\"aria-disabled\", \"false\")))\n    }, b.prototype.updateDots = function() {\n        var a = this;\n        null !== a.$dots && (a.$dots.find(\"li\").removeClass(\"slick-active\").attr(\"aria-hidden\", \"true\"), a.$dots.find(\"li\").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass(\"slick-active\").attr(\"aria-hidden\", \"false\"))\n    }, b.prototype.visibility = function() {\n        var a = this;\n        a.options.autoplay && (document[a.hidden] ? a.interrupted = !0 : a.interrupted = !1)\n    }, a.fn.slick = function() {\n        var f, g, a = this,\n            c = arguments[0],\n            d = Array.prototype.slice.call(arguments, 1),\n            e = a.length;\n        for (f = 0; e > f; f++)\n            if (\"object\" == typeof c || \"undefined\" == typeof c ? a[f].slick = new b(a[f], c) : g = a[f].slick[c].apply(a[f].slick, d), \"undefined\" != typeof g) return g;\n        return a\n    }\n});\n"

/***/ }),
/* 6 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function(src) {
	if (typeof execScript !== "undefined")
		execScript(src);
	else
		eval.call(null, src);
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// Load stylesheets
// require("../css/screen.css");
__webpack_require__(2);

// Load default scripts
__webpack_require__(1);
__webpack_require__(0);


/***/ })
/******/ ]);