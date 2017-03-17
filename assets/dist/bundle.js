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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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

/* expand top nav */

$(document).ready(function() {
    var clicked = false;
    $("#menu-button").click(function() {
        if (!clicked) {
            $('#top-navigation').addClass('expanded');
            $('#top-navigation').removeClass('minified');
            $('#menu-open').removeClass('show')
            $('#menu-open').addClass('hide')
            $('#menu-closed').removeClass('hide')
            $('#menu-closed').addClass('show')
            clicked = true;
        } else {
            $('#top-navigation').addClass('minified');
            $('#top-navigation').removeClass('expanded');
            $('#menu-open').removeClass('hide')
            $('#menu-open').addClass('show')
            $('#menu-closed').removeClass('show')
            $('#menu-closed').addClass('hide')
            clicked = false;
        }
    });
});

/* expand search box */

$(document).ready(function() {

    $("#search-placeholder").click(function(e) {
        $('#search').addClass('show search-expanded');
        $('#search').removeClass('hide search-minified');
        $("#search-placeholder").addClass('hide');
        $("#search-placeholder").removeClass('show');
        e.stopPropagation()
    });

    $(document).click(function(e) {
        if ($(e.target).is("#search") === false) {
            $('#search').addClass('hide search-minified');
            $('#search').removeClass('show search-expanded');
            $("#search-placeholder").addClass('show');
            $("#search-placeholder").removeClass('hide');
        }
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
    if (y > 600) {
        $('#navigation').addClass('show');
        $('#navigation').removeClass('hide');
    }
    else {
        $('#navigation').addClass('hide');
        $('#navigation').removeClass('show');
    }
});

/* expand share icon */

$(document).ready(function() {
    var clicked = false;
    var hovered = false;
    $("#share-icon").click(function() {
        if (!clicked) {
            $('.share-link').addClass('show');
            $('.share-link').removeClass('hide');
            clicked = true;
        } else {
            $('.share-link').addClass('hide');
            $('.share-link').removeClass('show');
            clicked = false;
        }
    });
    $(".share-link").hover(function() {
        if (!hovered && clicked) {
            $(this).parents('a').find('.share-span').addClass('show');
            $(this).parents('a').find('.share-span').removeClass('hide');
            hovered = true;
        } else {
            $(this).parents('a').find('.share-span').addClass('hide');
            $(this).parents('a').find('.share-span').removeClass('show');
            hovered = false;
        }
    });
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(4)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js?indentedSyntax!./../../node_modules/postcss-loader/index.js!./style.sass", function() {
			var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js?indentedSyntax!./../../node_modules/postcss-loader/index.js!./style.sass");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "/* Imports */\n/*!\nPure v0.6.2\nCopyright 2013 Yahoo!\nLicensed under the BSD License.\nhttps://github.com/yahoo/pure/blob/master/LICENSE.md\n*/\n/*!\nnormalize.css v^3.0 | MIT License | git.io/normalize\nCopyright (c) Nicolas Gallagher and Jonathan Neal\n*/\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\nimg, legend {\n  border: 0; }\n\nlegend, td, th {\n  padding: 0; }\n\nhtml {\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%; }\n\nbody {\n  margin: 0; }\n\narticle, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary {\n  display: block; }\n\naudio, canvas, progress, video {\n  display: inline-block;\n  vertical-align: baseline; }\n\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n[hidden], template {\n  display: none; }\n\na {\n  background-color: transparent; }\n\na:active, a:hover {\n  outline: 0; }\n\nabbr[title] {\n  border-bottom: 1px dotted; }\n\nb, optgroup, strong {\n  font-weight: 700; }\n\ndfn {\n  font-style: italic; }\n\nh1 {\n  font-size: 2em;\n  margin: .67em 0; }\n\nmark {\n  background: #ff0;\n  color: #000; }\n\nsmall {\n  font-size: 80%; }\n\nsub, sup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsup {\n  top: -.5em; }\n\nsub {\n  bottom: -.25em; }\n\nsvg:not(:root) {\n  overflow: hidden; }\n\nfigure {\n  margin: 1em 40px; }\n\nhr {\n  box-sizing: content-box;\n  height: 0; }\n\npre, textarea {\n  overflow: auto; }\n\ncode, kbd, pre, samp {\n  font-family: monospace,monospace;\n  font-size: 1em; }\n\nbutton, input, optgroup, select, textarea {\n  color: inherit;\n  font: inherit;\n  margin: 0; }\n\nbutton {\n  overflow: visible; }\n\nbutton, select {\n  text-transform: none; }\n\nbutton, html input[type=button], input[type=reset], input[type=submit] {\n  -webkit-appearance: button;\n  cursor: pointer; }\n\nbutton[disabled], html input[disabled] {\n  cursor: default; }\n\nbutton::-moz-focus-inner, input::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\ninput {\n  line-height: normal; }\n\ninput[type=checkbox], input[type=radio] {\n  box-sizing: border-box;\n  padding: 0; }\n\ninput[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button {\n  height: auto; }\n\ninput[type=search] {\n  -webkit-appearance: textfield;\n  box-sizing: content-box; }\n\ninput[type=search]::-webkit-search-cancel-button, input[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\nfieldset {\n  border: 1px solid silver;\n  margin: 0 2px;\n  padding: .35em .625em .75em; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n.hidden, [hidden] {\n  display: none !important; }\n\n.pure-img {\n  max-width: 100%;\n  height: auto;\n  display: block; }\n\n/*!\nPure v0.6.2\nCopyright 2013 Yahoo!\nLicensed under the BSD License.\nhttps://github.com/yahoo/pure/blob/master/LICENSE.md\n*/\n.pure-g {\n  letter-spacing: -.31em;\n  text-rendering: optimizespeed;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-flow: row wrap;\n  -ms-flex-flow: row wrap;\n  flex-flow: row wrap;\n  -webkit-align-content: flex-start;\n  -ms-flex-line-pack: start;\n  align-content: flex-start; }\n\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  table .pure-g {\n    display: block; } }\n\n.opera-only :-o-prefocus, .pure-g {\n  word-spacing: -.43em; }\n\n.pure-u, .pure-u-1, .loop-article, .loop-article:nth-child(1), .loop-article:nth-child(2), .pure-u-1-1, .pure-u-1-12, .pure-u-1-2, .pure-u-1-24, .pure-u-1-3, .pure-u-1-4, .pure-u-1-5, .pure-u-1-6, .pure-u-1-8, .pure-u-10-24, .pure-u-11-12, .pure-u-11-24, .pure-u-12-24, .pure-u-13-24, .pure-u-14-24, .pure-u-15-24, .pure-u-16-24, .pure-u-17-24, .pure-u-18-24, .pure-u-19-24, .pure-u-2-24, .pure-u-2-3, .pure-u-2-5, .pure-u-20-24, .pure-u-21-24, .pure-u-22-24, .pure-u-23-24, .pure-u-24-24, .pure-u-3-24, .pure-u-3-4, .pure-u-3-5, .pure-u-3-8, .pure-u-4-24, .pure-u-4-5, .pure-u-5-12, .pure-u-5-24, .pure-u-5-5, .pure-u-5-6, .pure-u-5-8, .pure-u-6-24, .pure-u-7-12, .pure-u-7-24, .pure-u-7-8, .pure-u-8-24, .pure-u-9-24 {\n  display: inline-block;\n  zoom: 1;\n  letter-spacing: normal;\n  word-spacing: normal;\n  vertical-align: top;\n  text-rendering: auto; }\n\n.pure-u-1-24 {\n  width: 4.1667%; }\n\n.pure-u-1-12, .pure-u-2-24 {\n  width: 8.3333%; }\n\n.pure-u-1-8, .pure-u-3-24 {\n  width: 12.5%; }\n\n.pure-u-1-6, .pure-u-4-24 {\n  width: 16.6667%; }\n\n.pure-u-1-5 {\n  width: 20%; }\n\n.pure-u-5-24 {\n  width: 20.8333%; }\n\n.pure-u-1-4, .pure-u-6-24 {\n  width: 25%; }\n\n.pure-u-7-24 {\n  width: 29.1667%; }\n\n.pure-u-1-3, .pure-u-8-24 {\n  width: 33.3333%; }\n\n.pure-u-3-8, .pure-u-9-24 {\n  width: 37.5%; }\n\n.pure-u-2-5 {\n  width: 40%; }\n\n.pure-u-10-24, .pure-u-5-12 {\n  width: 41.6667%; }\n\n.pure-u-11-24 {\n  width: 45.8333%; }\n\n.pure-u-1-2, .pure-u-12-24 {\n  width: 50%; }\n\n.pure-u-13-24 {\n  width: 54.1667%; }\n\n.pure-u-14-24, .pure-u-7-12 {\n  width: 58.3333%; }\n\n.pure-u-3-5 {\n  width: 60%; }\n\n.pure-u-15-24, .pure-u-5-8 {\n  width: 62.5%; }\n\n.pure-u-16-24, .pure-u-2-3 {\n  width: 66.6667%; }\n\n.pure-u-17-24 {\n  width: 70.8333%; }\n\n.pure-u-18-24, .pure-u-3-4 {\n  width: 75%; }\n\n.pure-u-19-24 {\n  width: 79.1667%; }\n\n.pure-u-4-5 {\n  width: 80%; }\n\n.pure-u-20-24, .pure-u-5-6 {\n  width: 83.3333%; }\n\n.pure-u-21-24, .pure-u-7-8 {\n  width: 87.5%; }\n\n.pure-u-11-12, .pure-u-22-24 {\n  width: 91.6667%; }\n\n.pure-u-23-24 {\n  width: 95.8333%; }\n\n.pure-u-1, .loop-article, .loop-article:nth-child(1), .loop-article:nth-child(2), .pure-u-1-1, .pure-u-24-24, .pure-u-5-5 {\n  width: 100%; }\n\n/*!\nPure v0.6.2\nCopyright 2013 Yahoo!\nLicensed under the BSD License.\nhttps://github.com/yahoo/pure/blob/master/LICENSE.md\n*/\n@media screen and (min-width: 35.5em) {\n  .pure-u-sm-1, .pure-u-sm-1-1, .pure-u-sm-1-12, .pure-u-sm-1-2, .pure-u-sm-1-24, .pure-u-sm-1-3, .pure-u-sm-1-4, .pure-u-sm-1-5, .pure-u-sm-1-6, .pure-u-sm-1-8, .pure-u-sm-10-24, .pure-u-sm-11-12, .pure-u-sm-11-24, .pure-u-sm-12-24, .pure-u-sm-13-24, .pure-u-sm-14-24, .pure-u-sm-15-24, .pure-u-sm-16-24, .pure-u-sm-17-24, .pure-u-sm-18-24, .pure-u-sm-19-24, .pure-u-sm-2-24, .pure-u-sm-2-3, .pure-u-sm-2-5, .pure-u-sm-20-24, .pure-u-sm-21-24, .pure-u-sm-22-24, .pure-u-sm-23-24, .pure-u-sm-24-24, .pure-u-sm-3-24, .pure-u-sm-3-4, .pure-u-sm-3-5, .pure-u-sm-3-8, .pure-u-sm-4-24, .pure-u-sm-4-5, .pure-u-sm-5-12, .pure-u-sm-5-24, .pure-u-sm-5-5, .pure-u-sm-5-6, .pure-u-sm-5-8, .pure-u-sm-6-24, .pure-u-sm-7-12, .pure-u-sm-7-24, .pure-u-sm-7-8, .pure-u-sm-8-24, .pure-u-sm-9-24 {\n    display: inline-block;\n    zoom: 1;\n    letter-spacing: normal;\n    word-spacing: normal;\n    vertical-align: top;\n    text-rendering: auto; }\n  .pure-u-sm-1-24 {\n    width: 4.1667%; }\n  .pure-u-sm-1-12, .pure-u-sm-2-24 {\n    width: 8.3333%; }\n  .pure-u-sm-1-8, .pure-u-sm-3-24 {\n    width: 12.5%; }\n  .pure-u-sm-1-6, .pure-u-sm-4-24 {\n    width: 16.6667%; }\n  .pure-u-sm-1-5 {\n    width: 20%; }\n  .pure-u-sm-5-24 {\n    width: 20.8333%; }\n  .pure-u-sm-1-4, .pure-u-sm-6-24 {\n    width: 25%; }\n  .pure-u-sm-7-24 {\n    width: 29.1667%; }\n  .pure-u-sm-1-3, .pure-u-sm-8-24 {\n    width: 33.3333%; }\n  .pure-u-sm-3-8, .pure-u-sm-9-24 {\n    width: 37.5%; }\n  .pure-u-sm-2-5 {\n    width: 40%; }\n  .pure-u-sm-10-24, .pure-u-sm-5-12 {\n    width: 41.6667%; }\n  .pure-u-sm-11-24 {\n    width: 45.8333%; }\n  .pure-u-sm-1-2, .pure-u-sm-12-24 {\n    width: 50%; }\n  .pure-u-sm-13-24 {\n    width: 54.1667%; }\n  .pure-u-sm-14-24, .pure-u-sm-7-12 {\n    width: 58.3333%; }\n  .pure-u-sm-3-5 {\n    width: 60%; }\n  .pure-u-sm-15-24, .pure-u-sm-5-8 {\n    width: 62.5%; }\n  .pure-u-sm-16-24, .pure-u-sm-2-3 {\n    width: 66.6667%; }\n  .pure-u-sm-17-24 {\n    width: 70.8333%; }\n  .pure-u-sm-18-24, .pure-u-sm-3-4 {\n    width: 75%; }\n  .pure-u-sm-19-24 {\n    width: 79.1667%; }\n  .pure-u-sm-4-5 {\n    width: 80%; }\n  .pure-u-sm-20-24, .pure-u-sm-5-6 {\n    width: 83.3333%; }\n  .pure-u-sm-21-24, .pure-u-sm-7-8 {\n    width: 87.5%; }\n  .pure-u-sm-11-12, .pure-u-sm-22-24 {\n    width: 91.6667%; }\n  .pure-u-sm-23-24 {\n    width: 95.8333%; }\n  .pure-u-sm-1, .pure-u-sm-1-1, .pure-u-sm-24-24, .pure-u-sm-5-5 {\n    width: 100%; } }\n\n@media screen and (min-width: 48em) {\n  .pure-u-md-1, .pure-u-md-1-1, .pure-u-md-1-12, .pure-u-md-1-2, .loop-article:nth-child(1), .loop-article:nth-child(2), .pure-u-md-1-24, .pure-u-md-1-3, .pure-u-md-1-4, .loop-article, .pure-u-md-1-5, .pure-u-md-1-6, .pure-u-md-1-8, .pure-u-md-10-24, .pure-u-md-11-12, .pure-u-md-11-24, .pure-u-md-12-24, .pure-u-md-13-24, .pure-u-md-14-24, .pure-u-md-15-24, .pure-u-md-16-24, .pure-u-md-17-24, .pure-u-md-18-24, .pure-u-md-19-24, .pure-u-md-2-24, .pure-u-md-2-3, .pure-u-md-2-5, .pure-u-md-20-24, .pure-u-md-21-24, .pure-u-md-22-24, .pure-u-md-23-24, .pure-u-md-24-24, .pure-u-md-3-24, .pure-u-md-3-4, .pure-u-md-3-5, .pure-u-md-3-8, .pure-u-md-4-24, .pure-u-md-4-5, .pure-u-md-5-12, .pure-u-md-5-24, .pure-u-md-5-5, .pure-u-md-5-6, .pure-u-md-5-8, .pure-u-md-6-24, .pure-u-md-7-12, .pure-u-md-7-24, .pure-u-md-7-8, .pure-u-md-8-24, .pure-u-md-9-24 {\n    display: inline-block;\n    zoom: 1;\n    letter-spacing: normal;\n    word-spacing: normal;\n    vertical-align: top;\n    text-rendering: auto; }\n  .pure-u-md-1-24 {\n    width: 4.1667%; }\n  .pure-u-md-1-12, .pure-u-md-2-24 {\n    width: 8.3333%; }\n  .pure-u-md-1-8, .pure-u-md-3-24 {\n    width: 12.5%; }\n  .pure-u-md-1-6, .pure-u-md-4-24 {\n    width: 16.6667%; }\n  .pure-u-md-1-5 {\n    width: 20%; }\n  .pure-u-md-5-24 {\n    width: 20.8333%; }\n  .pure-u-md-1-4, .loop-article, .pure-u-md-6-24 {\n    width: 25%; }\n  .pure-u-md-7-24 {\n    width: 29.1667%; }\n  .pure-u-md-1-3, .pure-u-md-8-24 {\n    width: 33.3333%; }\n  .pure-u-md-3-8, .pure-u-md-9-24 {\n    width: 37.5%; }\n  .pure-u-md-2-5 {\n    width: 40%; }\n  .pure-u-md-10-24, .pure-u-md-5-12 {\n    width: 41.6667%; }\n  .pure-u-md-11-24 {\n    width: 45.8333%; }\n  .pure-u-md-1-2, .loop-article:nth-child(1), .loop-article:nth-child(2), .pure-u-md-12-24 {\n    width: 50%; }\n  .pure-u-md-13-24 {\n    width: 54.1667%; }\n  .pure-u-md-14-24, .pure-u-md-7-12 {\n    width: 58.3333%; }\n  .pure-u-md-3-5 {\n    width: 60%; }\n  .pure-u-md-15-24, .pure-u-md-5-8 {\n    width: 62.5%; }\n  .pure-u-md-16-24, .pure-u-md-2-3 {\n    width: 66.6667%; }\n  .pure-u-md-17-24 {\n    width: 70.8333%; }\n  .pure-u-md-18-24, .pure-u-md-3-4 {\n    width: 75%; }\n  .pure-u-md-19-24 {\n    width: 79.1667%; }\n  .pure-u-md-4-5 {\n    width: 80%; }\n  .pure-u-md-20-24, .pure-u-md-5-6 {\n    width: 83.3333%; }\n  .pure-u-md-21-24, .pure-u-md-7-8 {\n    width: 87.5%; }\n  .pure-u-md-11-12, .pure-u-md-22-24 {\n    width: 91.6667%; }\n  .pure-u-md-23-24 {\n    width: 95.8333%; }\n  .pure-u-md-1, .pure-u-md-1-1, .pure-u-md-24-24, .pure-u-md-5-5 {\n    width: 100%; } }\n\n@media screen and (min-width: 64em) {\n  .pure-u-lg-1, .pure-u-lg-1-1, .pure-u-lg-1-12, .pure-u-lg-1-2, .pure-u-lg-1-24, .pure-u-lg-1-3, .pure-u-lg-1-4, .pure-u-lg-1-5, .pure-u-lg-1-6, .pure-u-lg-1-8, .pure-u-lg-10-24, .pure-u-lg-11-12, .pure-u-lg-11-24, .pure-u-lg-12-24, .pure-u-lg-13-24, .pure-u-lg-14-24, .pure-u-lg-15-24, .pure-u-lg-16-24, .pure-u-lg-17-24, .pure-u-lg-18-24, .pure-u-lg-19-24, .pure-u-lg-2-24, .pure-u-lg-2-3, .pure-u-lg-2-5, .pure-u-lg-20-24, .pure-u-lg-21-24, .pure-u-lg-22-24, .pure-u-lg-23-24, .pure-u-lg-24-24, .pure-u-lg-3-24, .pure-u-lg-3-4, .pure-u-lg-3-5, .pure-u-lg-3-8, .pure-u-lg-4-24, .pure-u-lg-4-5, .pure-u-lg-5-12, .pure-u-lg-5-24, .pure-u-lg-5-5, .pure-u-lg-5-6, .pure-u-lg-5-8, .pure-u-lg-6-24, .pure-u-lg-7-12, .pure-u-lg-7-24, .pure-u-lg-7-8, .pure-u-lg-8-24, .pure-u-lg-9-24 {\n    display: inline-block;\n    zoom: 1;\n    letter-spacing: normal;\n    word-spacing: normal;\n    vertical-align: top;\n    text-rendering: auto; }\n  .pure-u-lg-1-24 {\n    width: 4.1667%; }\n  .pure-u-lg-1-12, .pure-u-lg-2-24 {\n    width: 8.3333%; }\n  .pure-u-lg-1-8, .pure-u-lg-3-24 {\n    width: 12.5%; }\n  .pure-u-lg-1-6, .pure-u-lg-4-24 {\n    width: 16.6667%; }\n  .pure-u-lg-1-5 {\n    width: 20%; }\n  .pure-u-lg-5-24 {\n    width: 20.8333%; }\n  .pure-u-lg-1-4, .pure-u-lg-6-24 {\n    width: 25%; }\n  .pure-u-lg-7-24 {\n    width: 29.1667%; }\n  .pure-u-lg-1-3, .pure-u-lg-8-24 {\n    width: 33.3333%; }\n  .pure-u-lg-3-8, .pure-u-lg-9-24 {\n    width: 37.5%; }\n  .pure-u-lg-2-5 {\n    width: 40%; }\n  .pure-u-lg-10-24, .pure-u-lg-5-12 {\n    width: 41.6667%; }\n  .pure-u-lg-11-24 {\n    width: 45.8333%; }\n  .pure-u-lg-1-2, .pure-u-lg-12-24 {\n    width: 50%; }\n  .pure-u-lg-13-24 {\n    width: 54.1667%; }\n  .pure-u-lg-14-24, .pure-u-lg-7-12 {\n    width: 58.3333%; }\n  .pure-u-lg-3-5 {\n    width: 60%; }\n  .pure-u-lg-15-24, .pure-u-lg-5-8 {\n    width: 62.5%; }\n  .pure-u-lg-16-24, .pure-u-lg-2-3 {\n    width: 66.6667%; }\n  .pure-u-lg-17-24 {\n    width: 70.8333%; }\n  .pure-u-lg-18-24, .pure-u-lg-3-4 {\n    width: 75%; }\n  .pure-u-lg-19-24 {\n    width: 79.1667%; }\n  .pure-u-lg-4-5 {\n    width: 80%; }\n  .pure-u-lg-20-24, .pure-u-lg-5-6 {\n    width: 83.3333%; }\n  .pure-u-lg-21-24, .pure-u-lg-7-8 {\n    width: 87.5%; }\n  .pure-u-lg-11-12, .pure-u-lg-22-24 {\n    width: 91.6667%; }\n  .pure-u-lg-23-24 {\n    width: 95.8333%; }\n  .pure-u-lg-1, .pure-u-lg-1-1, .pure-u-lg-24-24, .pure-u-lg-5-5 {\n    width: 100%; } }\n\n@media screen and (min-width: 80em) {\n  .pure-u-xl-1, .pure-u-xl-1-1, .pure-u-xl-1-12, .pure-u-xl-1-2, .pure-u-xl-1-24, .pure-u-xl-1-3, .pure-u-xl-1-4, .pure-u-xl-1-5, .pure-u-xl-1-6, .pure-u-xl-1-8, .pure-u-xl-10-24, .pure-u-xl-11-12, .pure-u-xl-11-24, .pure-u-xl-12-24, .pure-u-xl-13-24, .pure-u-xl-14-24, .pure-u-xl-15-24, .pure-u-xl-16-24, .pure-u-xl-17-24, .pure-u-xl-18-24, .pure-u-xl-19-24, .pure-u-xl-2-24, .pure-u-xl-2-3, .pure-u-xl-2-5, .pure-u-xl-20-24, .pure-u-xl-21-24, .pure-u-xl-22-24, .pure-u-xl-23-24, .pure-u-xl-24-24, .pure-u-xl-3-24, .pure-u-xl-3-4, .pure-u-xl-3-5, .pure-u-xl-3-8, .pure-u-xl-4-24, .pure-u-xl-4-5, .pure-u-xl-5-12, .pure-u-xl-5-24, .pure-u-xl-5-5, .pure-u-xl-5-6, .pure-u-xl-5-8, .pure-u-xl-6-24, .pure-u-xl-7-12, .pure-u-xl-7-24, .pure-u-xl-7-8, .pure-u-xl-8-24, .pure-u-xl-9-24 {\n    display: inline-block;\n    zoom: 1;\n    letter-spacing: normal;\n    word-spacing: normal;\n    vertical-align: top;\n    text-rendering: auto; }\n  .pure-u-xl-1-24 {\n    width: 4.1667%; }\n  .pure-u-xl-1-12, .pure-u-xl-2-24 {\n    width: 8.3333%; }\n  .pure-u-xl-1-8, .pure-u-xl-3-24 {\n    width: 12.5%; }\n  .pure-u-xl-1-6, .pure-u-xl-4-24 {\n    width: 16.6667%; }\n  .pure-u-xl-1-5 {\n    width: 20%; }\n  .pure-u-xl-5-24 {\n    width: 20.8333%; }\n  .pure-u-xl-1-4, .pure-u-xl-6-24 {\n    width: 25%; }\n  .pure-u-xl-7-24 {\n    width: 29.1667%; }\n  .pure-u-xl-1-3, .pure-u-xl-8-24 {\n    width: 33.3333%; }\n  .pure-u-xl-3-8, .pure-u-xl-9-24 {\n    width: 37.5%; }\n  .pure-u-xl-2-5 {\n    width: 40%; }\n  .pure-u-xl-10-24, .pure-u-xl-5-12 {\n    width: 41.6667%; }\n  .pure-u-xl-11-24 {\n    width: 45.8333%; }\n  .pure-u-xl-1-2, .pure-u-xl-12-24 {\n    width: 50%; }\n  .pure-u-xl-13-24 {\n    width: 54.1667%; }\n  .pure-u-xl-14-24, .pure-u-xl-7-12 {\n    width: 58.3333%; }\n  .pure-u-xl-3-5 {\n    width: 60%; }\n  .pure-u-xl-15-24, .pure-u-xl-5-8 {\n    width: 62.5%; }\n  .pure-u-xl-16-24, .pure-u-xl-2-3 {\n    width: 66.6667%; }\n  .pure-u-xl-17-24 {\n    width: 70.8333%; }\n  .pure-u-xl-18-24, .pure-u-xl-3-4 {\n    width: 75%; }\n  .pure-u-xl-19-24 {\n    width: 79.1667%; }\n  .pure-u-xl-4-5 {\n    width: 80%; }\n  .pure-u-xl-20-24, .pure-u-xl-5-6 {\n    width: 83.3333%; }\n  .pure-u-xl-21-24, .pure-u-xl-7-8 {\n    width: 87.5%; }\n  .pure-u-xl-11-12, .pure-u-xl-22-24 {\n    width: 91.6667%; }\n  .pure-u-xl-23-24 {\n    width: 95.8333%; }\n  .pure-u-xl-1, .pure-u-xl-1-1, .pure-u-xl-24-24, .pure-u-xl-5-5 {\n    width: 100%; } }\n\n/* Variables */\n/* Set your content font stack here: */\nhtml, button, input, select, textarea, .pure-g [class*=\"pure-u\"] {\n  font-family: \"Merriweather\", Garamond, Times New Roman, serif; }\n\n[class^=\"pure-u\"], [class^=\"pure-u-sm\"], [class^=\"pure-u-md\"], [class^=\"pure-u-lg\"] {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.wrapper {\n  padding: 1em; }\n\n/* General */\nhtml {\n  height: 100%;\n  max-height: 100%;\n  font-size: 62.5%;\n  tap-highlight-color: transparent; }\n\nbody {\n  height: 100%;\n  max-height: 100%;\n  width: 100%;\n  letter-spacing: 0.01rem;\n  font-size: 1.6rem;\n  line-height: 1.9em;\n  color: #3A4145;\n  background-color: #f5f5f5;\n  text-rendering: geometricPrecision;\n  margin: 0 auto;\n  padding-top: 70px; }\n\n::-moz-selection {\n  background: rgba(110, 181, 204, 0.125); }\n\n::selection {\n  background: rgba(110, 181, 204, 0.125); }\n\nh1, h2, #top-navigation #blog-title h1, h3,\nh4, h5, h6 {\n  color: #2E2E2E;\n  line-height: 1.15em;\n  margin: 0 0 0.4em 0;\n  font-family: \"Rubik\", Futura, Helvetica, Arial, sans-serif;\n  text-rendering: geometricPrecision; }\n\nh1 {\n  font-size: 5rem;\n  letter-spacing: -2px;\n  text-indent: -3px; }\n\nh2, #top-navigation #blog-title h1 {\n  font-size: 3.6rem;\n  letter-spacing: -1px; }\n\nh3 {\n  font-size: 3rem;\n  letter-spacing: -0.6px; }\n\nh4 {\n  font-size: 2.5rem; }\n\nh5 {\n  font-size: 2rem; }\n\nh6 {\n  font-size: 1.6rem; }\n\na {\n  color: #3A4145;\n  padding-bottom: .4rem;\n  border-bottom: 1px solid #6EB5CC;\n  transition: color 0.3s ease, background-color 0.3s ease;\n  text-decoration: none; }\n  a:hover {\n    color: #111;\n    background-color: rgba(110, 181, 204, 0.125);\n    transition: color 0.3s ease, background-color 0.3s ease; }\n\np, ul, ol, dl {\n  margin: 0 0 1.75em 0;\n  text-rendering: geometricPrecision; }\n\nol, ul {\n  padding-left: 3rem; }\n\nul {\n  list-style-type: square; }\n\nol ol, ul ul,\nul ol, ol ul {\n  margin: 0 0 0.4em 0;\n  padding-left: 2em; }\n\ndl dt {\n  float: left;\n  width: 180px;\n  overflow: hidden;\n  clear: left;\n  text-align: right;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-weight: 700;\n  margin-bottom: 1em; }\n\ndl dd {\n  margin-left: 200px;\n  margin-bottom: 1em; }\n\nli {\n  margin: 0.4em 0; }\n\nli li {\n  margin: 0; }\n\nli > p:last-of-type {\n  margin-bottom: 0; }\n\nstrong {\n  font-weight: 700; }\n\nmark {\n  background-color: rgba(110, 181, 204, 0.125); }\n\nblockquote::before {\n  content: '';\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: auto;\n  transform: translateY(-140%);\n  width: 32px;\n  height: 32px;\n  background-image: url(\"data:image/svg+xml;utf-8,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'><g fill='#3A4145'><path d='M16 32c8.8 0 16-7.2 16-16s-7.2-16-16-16-16 7.2-16 16 7.2 16 16 16zM16 1c8.3 0 15 6.7 15 15s-6.7 15-15 15-15-6.7-15-15 6.7-15 15-15zM10.7 13.6c0.5 0.2 1 0.1 1.5-0.2 0.2-0.1 0.3-0.5 0.2-0.7s-0.5-0.3-0.7-0.2c-0.2 0.2-0.5 0.2-0.7 0.1-0.2-0.1-0.4-0.3-0.6-0.6-0.2-0.3-0.2-0.6-0.1-0.9 0.1-0.3 0.2-0.5 0.5-0.7 0.6-0.4 1.4-0.2 1.9 0.2 0.9 0.7 1.3 1.8 1.3 3.7 0 2.8-1.3 6.3-3.7 7.6-0.2 0.1-0.3 0.4-0.2 0.7 0.1 0.2 0.3 0.3 0.4 0.3 0.1 0 0.2 0 0.2-0.1 2.9-1.5 4.3-5.4 4.3-8.4 0-2.2-0.5-3.7-1.7-4.5-1-0.7-2.2-0.8-3.1-0.3-0.5 0.3-0.8 0.8-1 1.3s0 1.1 0.3 1.6c0.3 0.5 0.7 0.8 1.2 1zM18.7 13.6c0.5 0.2 1 0.1 1.5-0.2 0.2-0.1 0.3-0.5 0.2-0.7s-0.5-0.3-0.7-0.2c-0.2 0.2-0.5 0.2-0.7 0.1-0.2-0.1-0.4-0.3-0.6-0.6-0.2-0.3-0.2-0.6-0.1-0.9 0.1-0.3 0.2-0.5 0.5-0.7 0.6-0.4 1.4-0.2 1.9 0.2 0.9 0.7 1.3 1.8 1.3 3.7 0 2.8-1.3 6.3-3.7 7.6-0.2 0.1-0.3 0.4-0.2 0.7 0.1 0.2 0.3 0.3 0.4 0.3 0.1 0 0.2 0 0.2-0.1 2.9-1.5 4.3-5.4 4.3-8.4 0-2.2-0.5-3.7-1.7-4.5-1-0.7-2.2-0.8-3.1-0.3-0.5 0.3-0.8 0.8-1 1.3-0.1 0.6 0 1.1 0.3 1.6 0.3 0.5 0.7 0.8 1.2 1z'/></g></svg>\"); }\n\nblockquote {\n  position: relative;\n  text-align: center;\n  margin: 8rem 5rem 5rem 5rem; }\n  blockquote p {\n    display: inline;\n    color: #111;\n    font-style: italic; }\n    blockquote p:first-child::before, blockquote p:last-child::after {\n      display: block;\n      content: \"\";\n      height: 1rem;\n      margin: auto; }\n    blockquote p:first-child::before {\n      width: 20rem;\n      border-top: 1px solid #6EB5CC; }\n    blockquote p:last-child::after {\n      width: 12rem;\n      border-bottom: 1px solid #6EB5CC; }\n  blockquote cite {\n    display: block;\n    text-align: center;\n    font-style: normal;\n    font-weight: 900;\n    margin-top: 1rem; }\n    blockquote cite::before {\n      display: block;\n      content: \"\";\n      height: 1rem;\n      margin: auto;\n      width: 12rem;\n      border-top: 1px solid #6EB5CC; }\n\ncode {\n  font-family: \"Space Mono\", Monaco, Consolas, monospace; }\n\nfigure {\n  margin: 0; }\n\nimg {\n  display: block;\n  max-width: 100%;\n  height: auto;\n  margin: 2rem auto; }\n\ninput[type=text] {\n  outline: none;\n  border: 1px solid #CED7D6;\n  background-color: white;\n  background-position: 5px 5px;\n  background-repeat: no-repeat;\n  height: 40px;\n  box-sizing: border-box;\n  padding: 5px 30px;\n  transition: all .6s ease;\n  font-family: \"Rubik\", Futura, Helvetica, Arial, sans-serif; }\n  input[type=text]:focus {\n    border: 1px solid #6EB5CC; }\n\n/* Util */\n.clearfix:after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.max-width {\n  max-width: 1200px;\n  margin: 0 auto; }\n\n.show {\n  opacity: 1;\n  transition: opacity 0.3s ease; }\n\n.hide {\n  opacity: 0;\n  transition: opacity 0.1s ease; }\n\n.expanded {\n  height: 200px;\n  transition: height 0.3s ease; }\n\n.minified {\n  height: 70px;\n  transition: height 0.3s ease; }\n\n.search-expanded {\n  width: 200px;\n  transition: width 0.3s ease; }\n\n.search-minified {\n  width: 0px;\n  transition: width 0.3s ease; }\n\n.clean-a, .featured-article .featured-excerpt a, #post-head .post-head-wrap .post-scroll-wrap a {\n  border: none; }\n  .clean-a:hover, .featured-article .featured-excerpt a:hover, #post-head .post-head-wrap .post-scroll-wrap a:hover {\n    background: none; }\n\n#footer {\n  background: #CED7D6;\n  text-align: center;\n  padding: 2em 0; }\n  #footer a {\n    border: none; }\n    #footer a:hover {\n      background: none; }\n    #footer a svg {\n      fill: #3A4145; }\n      #footer a svg:hover {\n        fill: #6EB5CC; }\n  #footer p {\n    font-family: \"Rubik\", Futura, Helvetica, Arial, sans-serif; }\n  #footer svg {\n    transition: fill .5s ease; }\n  #footer .twitter:hover {\n    fill: #1DA1F2; }\n  #footer .facebook:hover {\n    fill: #3B579D; }\n  #footer .google:hover {\n    fill: #C13C31; }\n  #footer .linkedin:hover {\n    fill: #0177B5; }\n  #footer .youtube:hover {\n    fill: #E62117; }\n\n#top-navigation {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  background: #f5f5f5;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  z-index: 999;\n  overflow: hidden; }\n  #top-navigation #blog-title h1 {\n    display: block;\n    font-family: \"Merriweather\", Garamond, Times New Roman, serif;\n    transition: color .5s ease; }\n    #top-navigation #blog-title h1:hover {\n      color: #111; }\n  #top-navigation #menu {\n    position: relative; }\n    #top-navigation #menu #search {\n      float: left; }\n    #top-navigation #menu #search-placeholder {\n      position: absolute;\n      left: 6px;\n      top: 6px; }\n    #top-navigation #menu #menu-button {\n      float: right;\n      fill: #3A4145; }\n      #top-navigation #menu #menu-button:hover {\n        fill: #111; }\n  #top-navigation #menu-items ul {\n    text-align: center; }\n    #top-navigation #menu-items ul a {\n      padding: 0 1em; }\n      #top-navigation #menu-items ul a li {\n        display: inline-block; }\n    #top-navigation #menu-items ul .nav-current {\n      font-weight: 900; }\n\n/* Index */\n#index-header #blog-cover {\n  height: 30vh;\n  width: 100vw;\n  background-size: cover;\n  background-position: center;\n  margin-bottom: 6rem;\n  border-bottom: 5rem #CED7D6 solid; }\n\n.featured-article figure {\n  max-width: 100%;\n  height: 400px;\n  background-size: cover;\n  background-position: center; }\n\n.featured-article h2, .featured-article #top-navigation #blog-title h1, #top-navigation #blog-title .featured-article h1 {\n  max-width: 600px;\n  font-family: \"Merriweather\", Garamond, Times New Roman, serif; }\n\n.featured-article .featured-meta {\n  font-family: \"Rubik\", Futura, Helvetica, Arial, sans-serif;\n  font-size: smaller; }\n\n/* Loop */\n.pagination {\n  text-align: center;\n  font-family: \"Rubik\", Futura, Helvetica, Arial, sans-serif;\n  font-size: smaller;\n  margin: 1em 0; }\n\n.loop-article {\n  margin-bottom: 1rem; }\n  .loop-article:nth-child(1) figure, .loop-article:nth-child(2) figure {\n    max-width: 100%;\n    height: 200px;\n    background-size: cover;\n    background-position: center; }\n  .loop-article:nth-child(1) header, .loop-article:nth-child(2) header {\n    margin: 2em 0 0 0; }\n    .loop-article:nth-child(1) header h3, .loop-article:nth-child(2) header h3 {\n      font-family: \"Merriweather\", Garamond, Times New Roman, serif;\n      text-align: center;\n      font-size: 3rem; }\n  .loop-article:nth-child(1) section p, .loop-article:nth-child(2) section p {\n    font-family: \"Merriweather\", Garamond, Times New Roman, serif;\n    font-size: 1.6rem; }\n  .loop-article:nth-child(1) footer, .loop-article:nth-child(2) footer {\n    display: block; }\n    .loop-article:nth-child(1) footer p, .loop-article:nth-child(2) footer p {\n      font-family: \"Rubik\", Futura, Helvetica, Arial, sans-serif;\n      font-size: smaller; }\n  .loop-article header h3 {\n    font-family: \"Rubik\", Futura, Helvetica, Arial, sans-serif;\n    font-size: 1.6rem; }\n  .loop-article section p {\n    font-family: \"Rubik\", Futura, Helvetica, Arial, sans-serif;\n    font-size: smaller; }\n  .loop-article footer {\n    display: none; }\n\n/* Basic */\n#navigation .nav-reveal a {\n  position: fixed;\n  top: 50%;\n  outline: none;\n  text-align: left;\n  z-index: 1000;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  overflow: hidden;\n  width: 50px;\n  height: 120px;\n  border: none;\n  transition: width 0.4s, background-color 0.4s; }\n  #navigation .nav-reveal a:hover {\n    width: 260px;\n    background-color: #6EB5CC; }\n    #navigation .nav-reveal a:hover svg {\n      fill: #f5f5f5; }\n  #navigation .nav-reveal a.prev {\n    left: 0; }\n    #navigation .nav-reveal a.prev svg {\n      left: 0;\n      margin-left: 30px;\n      float: left; }\n    #navigation .nav-reveal a.prev div {\n      margin-left: 50px; }\n  #navigation .nav-reveal a.next {\n    right: 0; }\n    #navigation .nav-reveal a.next svg {\n      right: 0;\n      margin-right: 30px;\n      float: right; }\n    #navigation .nav-reveal a.next div {\n      margin-right: 50px; }\n  #navigation .nav-reveal a svg {\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    fill: #3A4145; }\n  #navigation .nav-reveal a div {\n    position: absolute;\n    box-sizing: border-box;\n    padding: 1em 2em;\n    width: 210px;\n    top: 50%;\n    transform: translateY(-50%); }\n    #navigation .nav-reveal a div h6 {\n      margin: 0;\n      color: #f5f5f5;\n      font-size: 0.81em; }\n    #navigation .nav-reveal a div p {\n      margin: 0;\n      font-family: \"Rubik\", Futura, Helvetica, Arial, sans-serif;\n      color: #f5f5f5;\n      font-size: 0.8em; }\n\n.nav-reveal a.prev div {\n  left: 0;\n  text-align: right; }\n\n.nav-reveal a.next div {\n  right: 0; }\n\n/* Post */\n#post-head {\n  height: 100vh;\n  overflow: hidden;\n  background: 0 0 no-repeat fixed;\n  background-size: cover;\n  margin-bottom: 6rem;\n  border-bottom: 5rem #CED7D6 solid; }\n  #post-head .post-head-wrap {\n    position: relative;\n    height: 100vh;\n    text-align: center;\n    box-sizing: border-box;\n    background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.65) 100%); }\n    #post-head .post-head-wrap .post-scroll-wrap {\n      position: absolute;\n      max-width: 800px;\n      left: 0;\n      right: 0;\n      bottom: 70px;\n      margin: 0 auto; }\n      #post-head .post-head-wrap .post-scroll-wrap p {\n        font-family: \"Rubik\", Futura, Helvetica, Arial, sans-serif;\n        color: #f5f5f5; }\n      #post-head .post-head-wrap .post-scroll-wrap a {\n        color: #f5f5f5; }\n        #post-head .post-head-wrap .post-scroll-wrap a:hover {\n          color: #6EB5CC; }\n        #post-head .post-head-wrap .post-scroll-wrap a svg {\n          animation: color-arrow 6s infinite;\n          fill: #f5f5f5; }\n          #post-head .post-head-wrap .post-scroll-wrap a svg:hover {\n            fill: #6EB5CC; }\n\n#post-title h1 {\n  text-align: center; }\n\n#post-meta p {\n  font-family: \"Rubik\", Futura, Helvetica, Arial, sans-serif;\n  font-size: smaller; }\n\n#post-meta .tag-prefix {\n  color: #6EB5CC; }\n\n#post-meta #meta-share a {\n  display: block;\n  position: relative;\n  height: 30px; }\n  #post-meta #meta-share a svg {\n    position: absolute;\n    margin-top: 0;\n    top: 0;\n    left: 0;\n    fill: #3A4145;\n    transition: fill .5s ease; }\n    #post-meta #meta-share a svg:hover {\n      fill: #6EB5CC; }\n    #post-meta #meta-share a svg #share-i {\n      fill: #f5f5f5; }\n  #post-meta #meta-share a span {\n    font-family: \"Rubik\", Futura, Helvetica, Arial, sans-serif;\n    font-size: smaller;\n    position: absolute;\n    top: 50%;\n    left: 35px;\n    transform: translateY(-50%);\n    transition: opacity .3s ease-out; }\n  #post-meta #meta-share a .twitter:hover {\n    fill: #1DA1F2; }\n  #post-meta #meta-share a .facebook:hover {\n    fill: #3B579D; }\n  #post-meta #meta-share a .google:hover {\n    fill: #C13C31; }\n  #post-meta #meta-share a .linkedin:hover {\n    fill: #0177B5; }\n  #post-meta #meta-share a .youtube:hover {\n    fill: #E62117; }\n  #post-meta #meta-share a .share-link {\n    transition: opacity .5s ease-in-out; }\n\n#post-content {\n  box-sizing: border-box; }\n  #post-content section {\n    margin-bottom: 6rem; }\n  #post-content .output p:first-of-type::first-letter {\n    font-size: 10rem;\n    font-weight: 900;\n    line-height: 5.7rem;\n    float: left;\n    text-transform: uppercase;\n    margin: 1.6rem .8rem 0 0; }\n  #post-content .output a {\n    font-weight: 900; }\n  #post-content .output iframe {\n    max-width: 100%; }\n  #post-content #share {\n    width: 100%;\n    text-align: center;\n    font-size: 3rem; }\n    #post-content #share h4 {\n      font-family: \"Merriweather\", Garamond, Times New Roman, serif; }\n    #post-content #share a {\n      border: none; }\n      #post-content #share a:hover {\n        background: none; }\n      #post-content #share a svg {\n        fill: #3A4145;\n        transition: fill .5s ease; }\n        #post-content #share a svg:hover {\n          fill: #111; }\n  #post-content #comments {\n    text-align: center; }\n    #post-content #comments h4 {\n      font-family: \"Merriweather\", Garamond, Times New Roman, serif; }\n\n#post-related {\n  padding: 0 1em;\n  font-size: smaller; }\n  #post-related article {\n    position: relative;\n    margin-bottom: 2em; }\n    #post-related article h6 {\n      font-size: 1em; }\n      #post-related article h6:hover {\n        color: #111; }\n    #post-related article p {\n      font-family: \"Rubik\", Futura, Helvetica, Arial, sans-serif;\n      line-height: 1.85em;\n      margin-bottom: .5em; }\n\n@keyframes color-arrow {\n  0%, 100% {\n    fill: #f5f5f5; }\n  50% {\n    fill: #6EB5CC; } }\n", ""]);

// exports


/***/ }),
/* 3 */
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
/* 4 */
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// Load stylesheets
// require("../css/screen.css");
__webpack_require__(1);

// Load default scripts
__webpack_require__(0);



/***/ })
/******/ ]);