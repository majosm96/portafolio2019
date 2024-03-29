(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n  <app-header></app-header>\n  <router-outlet></router-outlet>\n  <app-footer></app-footer>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/home/home.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/home/home.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main role=\"main l-group\">\n    <!--Teaser about me-->\n    <section class=\"l-group section-wrap group personal-info\">\n\n      <div class=\"personal-info__item align\">\n        <div class=\"img-wrapper\">\n          <img class=\"my-img\" src=\"/assets/images/majito.png\" alt=\"\">\n      </div>\n\n        <ul class=\"social-icons\">\n          <li><a target=\"_blank\" href=\"https://github.com/majosm96\"><i class=\"fa fa-github\" aria-hidden=\"true\"></i></a></li>\n          <li><a target=\"_blank\" href=\"https://medium.com/@marajossols/highlights\"><i class=\"fa fa-medium\" aria-hidden=\"true\"></i></a></li>\n          <li><a target=\"_blank\" href=\"https://www.linkedin.com/in/mar%C3%ADa-jos%C3%A9-sol%C3%ADs-129525122/\"><i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i></a></li>\n          <li><a target=\"_blank\" href=\"https://twitter.com/majosm969\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a></li>\n        </ul>\n      </div>\n\n      <div class=\"personal-info__item item2\" id=\"\">\n        <h1>Hello</h1>\n        <p>I'm Maria Jose, a designer with some developer and QA skills. Also photographer amateur, environmentalist and lover of the adventure. I love working with people who\n        <strong>love</strong> what they do. :)</p>\n      </div>\n\n    </section>\n\n    <!--List of works-->\n    <section class=\"l-group section-wrap group\" id=\"projects\">\n\n      <h2 class=\"h2-section\">Work</h2>\n\n      <div class=\"bg-pattern\">\n\n        <nav class=\"projects\">\n\n          <a [routerLink]=\"'/projects/1'\" class=\"project draw-border-blue\">\n              <div class=\"project-info\">\n                <h4 class=\"project__title\">05 Minute foundation</h4>\n                <p>UI</p>\n              </div>\n              <div class=\"project-img\">\n                <img class=\"\" src=\"/assets/images/wave.jpg\" alt=\"Blog post\">\n              </div>\n          </a>\n\n          <a [routerLink]=\"'/projects/3'\" class=\"project draw-border-blue\">\n            <div class=\"project-info\">\n              <h4 class=\"project__title\">Micro World</h4>\n              <p>Biodesign</p>\n            </div>\n            <div class=\"project-img\">\n              <img class=\"\" src=\"/assets/images/forest.jpg\" alt=\"Blog post\">\n            </div>\n          </a>\n\n          <a [routerLink]=\"'/projects/2'\" class=\"project ddraw-border-blue\">\n            <div class=\"project-info\">\n              <h4 class=\"project__title\">Cedro Negro</h4>\n              <p>Branding, UX & UI</p>\n            </div>\n            <div class=\"project-img\">\n              <img class=\"\" src=\"/assets/images/cedronegro.jpg\" alt=\"Blog post\">\n            </div>\n          </a>\n          \n          <a [routerLink]=\"'/projects/4'\"  class=\"project draw-border-blue\">\n              <div class=\"project-info\">\n                <h4 class=\"project__title\">Galaxies</h4>\n                <p>UX - UI</p>\n              </div>\n              <div class=\"project-img\">\n                <img class=\"\" src=\"/assets/images/galaxias.png\" alt=\"Blog post\">\n              </div>\n          </a>\n\n          <!-- <a href=\"project04.html\"  class=\"project draw-border-blue\">\n              <div class=\"project-info\">\n                <h4 class=\"project__title\">Remora</h4>\n                <p>HTML, CSS, Sass, Gulp, JavaScript</p>\n              </div>\n              <div class=\"project-img\">\n                <img class=\"\" src=\"img/remora.jpg\" alt=\"Blog post\">\n              </div>\n          </a> -->\n\n          <!-- <a href=\"project05.html\"  class=\"project draw-border-yellow\">\n              <div class=\"project-info\">\n                <h4 class=\"project__title\">Events</h4>\n                <p>UI</p>\n              </div>\n              <div class=\"project-img\">\n                <img class=\"\" src=\"/assets/images/party.jpg\" alt=\"Blog post\">\n              </div>\n          </a>        -->\n        </nav>\n\n      </div>\n\n    </section>\n\n    <!--Skills-->\n    <section class=\"l-group section-wrap bg-yellow\" id=\"skills\">\n\n      <h2 class=\"h2-section\">Skills</h2>\n\n      <div class=\"l-group section-wrap group skills\">\n        <div class=\"skills__item-skill\">\n          <div class=\"skills__img\">\n            <img src=\"/assets/images/design02.png\" alt=\"\">\n          </div>\n          <h4>Design</h4>\n          <p>UX, UI, Figma, Photoshop, Illustrator, Zeplin, Design Thinking</p>\n        </div>\n\n        <div class=\"skills__item-skill\">\n          <div class=\"skills__img\">\n            <img src=\"/assets/images/heartyellow.png\" alt=\"\">\n          </div>\n          <h4>Soft Skills</h4>\n            <p>Nonviolent Communication, Entrepreneurship, Agile Methodologies</p>\n        </div>\n\n        <div class=\"skills__item-skill\">\n            <div class=\"skills__img\">\n              <img src=\"/assets/images/code02.png\" alt=\"\">\n            </div>\n            <h4>Web</h4>\n            <p>HTML, CSS , JavaScript, Angular</p>\n        </div>\n      </div>\n\n    </section>\n\n    <!--Contact-->\n    <section class=\"l-group section-wrap group\" id=\"contact\">\n\n      <div class=\"contact__title\">\n        <h2 class=\"h2-section\">Contact</h2>\n\n      </div>\n\n\n      <div class=\"bg-pattern contact__message-cont\">\n        <div class=\"contact__message\">\n            <img class=\"contact__img\" src=\"/assets/images/mail_basic.png\" alt=\"\">\n            <p>Do you want to work together? I probably do, too. Just drop me a line and say hello.</p>\n            <a class=\"a--underline\" href=\"mailto:someone@example.com?Subject=Hello%20again\">majosm96@gmail.com</a>\n        </div>\n      </div>\n\n    </section>\n  </main>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/project/project.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/project/project.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <main role=\"main\">\n      <!--Teaser about me-->\n      <section class=\"l-group section-wrap bg-purple\">\n\n        <div class=\"project-info__title\">\n          <h1>{{ selectedProject.title }}</h1>\n        </div>\n\n      </section>\n\n      <section *ngIf=\"selectedProject?.wireframes\">\n\n      </section>\n      \n      <!--About project-->\n      <section class=\"l-group section-wrap group\" id=\"\">\n\n        <div class=\"l-group section-wrap project-info__details\">\n          <div class=\"project-info__item\">\n            <p *ngFor=\"let p of selectedProject.about\">{{ p }}</p>\n            <a *ngIf=\"selectedProject.siteUrl\" target=\"_blank\" class=\"a--underline\" href=\"{{ selectedProject.siteUrl }}\">Visit Site</a>\n            <a *ngIf=\"selectedProject.siteCode\" target=\"_blank\" class=\"a--underline\" href=\"{{ selectedProject.siteCode }}\">View Code</a>\n          </div>\n        </div>\n        \n        <div class=\"l-group section-wrap\">\n            <h2>Role</h2>\n            <p *ngFor=\"let p of selectedProject.about2\">{{ p }}</p>  \n        </div>\n\n        <div class=\"l-group section-wrap\">\n            <h2>Challenge</h2>\n            <p *ngFor=\"let p of selectedProject.about3\">{{ p }}</p>  \n        </div>\n\n        <div class=\"l-group section-wrap\">\n          <img *ngIf=\"selectedProject.img\" class=\"project__mobile-img\" src=\"{{ selectedProject.img }}\" alt=\"\">\n        </div>\n\n        <div class=\"l-group section-wrap\" *ngIf=\"selectedProject.section2\">\n          <h2>{{ selectedProject.section2.title }}</h2>\n          <p>{{ selectedProject.section2.info }}</p>\n          <div class=\"project__mobile-imgs\">\n            <img  *ngFor=\"let img of selectedProject.section2.img\" src=\"{{ img }}\" alt=\"\">\n          </div>\n        </div>\n        \n        <div class=\"l-group section-wrap\">\n          <div class=\"section-wrap\" *ngIf=\"selectedProject?.mobile?.text\">\n            <h2 class=\"\">Final Product</h2>\n            <p>{{ selectedProject.mobile.text }}</p>\n          </div>\n          <div class=\"project__mobile-imgs\">\n            <img  *ngFor=\"let img of selectedProject.mobile.img\" src=\"{{ img }}\" alt=\"\">\n          </div>\n          <div *ngIf=\"selectedProject.video\">\n            <iframe [src]=\"sanitizerUrl(selectedProject.video)\" width=\"640\" height=\"443\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen></ iframe>\n          </div>\n        </div>  \n      </section>\n\n      <app-contact></app-contact>\n    </main>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/contact/contact.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/contact/contact.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--Contact-->\n<section class=\"l-group section-wrap group\" id=\"contact\">\n\n<!-- <div class=\"contact__title\">\n    <h2 class=\"h2-section\">Contact</h2>\n\n</div> -->\n\n\n<div class=\"bg-pattern contact__message-cont\">\n    <div class=\"contact__message\">\n    <img class=\"contact__img\" src=\"/assets/images/mail_basic.png\" alt=\"\">\n    <p>Would you want to work together? I probably do, too. Just drop me a line and say hello.</p>\n    <a class=\"a--underline\" href=\"\">majosm96@gmail.com</a>\n    </div>\n</div>\n\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/footer/footer.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/footer/footer.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"site-footer\">\n    <div class=\"\">\n      <ul class=\"social-menu-footer\">\n        <li><a target=\"_blank\" href=\"https://github.com/majosm96\"><i class=\"fa fa-github\" aria-hidden=\"true\"></i></a></li>\n        <li><a target=\"_blank\" href=\"https://www.linkedin.com/in/mar%C3%ADa-jos%C3%A9-sol%C3%ADs-129525122/\"><i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i></a></li>\n        <li><a target=\"_blank\" href=\"https://twitter.com/majosm969\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a></li>\n        <li><a target=\"_blank\" href=\"https://medium.com/@marajossols/highlights\"><i class=\"fa fa-medium\" aria-hidden=\"true\"></i></a></li>\n      </ul>\n    </div>\n  \n    <div class=\"footer-info\">\n      <p>© 2019 MARIA JOSE SOLIS. ALL RIGHTS RESERVED.</p>\n    </div>\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/header/header.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/header/header.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"l-group\">\n    <header class=\"l-group site-header\" role=\"banner\">\n      <div class=\"site-nav\">\n        <a href=\"/home\" class=\"logo\">\n          <img src=\"/assets/images/eye_basic.png\" alt=\"Logo Maria Jose Solis\">\n        </a>\n        <nav class=\"main-menu\" id=\"menu\">\n          <img src=\"/assets/images/menu_dark_heavy.png\" (click)=\"toggleMenu()\" alt=\"Menu\" class=\"menu-img\">\n        </nav>\n      </div>\n\n      <div class=\"navigation\" id=\"navigation\">\n\n        <div class=\"site-nav\">\n          <a href=\"/home\" class=\"logo\">\n          <img src=\"/assets/images/eye_close.png\" (click)=\"toggleMenu()\" alt=\"Logo Maria Jose Solis\">\n        </a>\n          <nav class=\"main-menu\" id=\"hideMenu\">\n            <img src=\"/assets/images/close.png\" alt=\"Close icon\" (click)=\"toggleMenu()\" class=\"menu-img menu-img__close\">\n          </nav>\n        </div>\n\n        <div class=\"left-nav\"></div>\n\n        <div class=\"right-nav\" id=#menu>\n          <ul class=\"inner-nav\">\n            <li><a class=\"underline menuItem\" href=\"/home#projects\" (click)=\"toggleMenu()\" >Work</a></li>\n            <!-- <li><a class=\"underline menuItem\" href=\"#about\">About</a></li> -->\n            <li><a class=\"underline menuItem\" href=\"/home#skills\" (click)=\"toggleMenu()\" >Skills</a></li>\n            <li><a class=\"underline menuItem\" href=\"/home#contact\" (click)=\"toggleMenu()\" >Contact</a></li>\n          </ul>\n        </div>\n\n      </div>\n\n    </header>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'portfolio';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _modules_main_main_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/main/main.module */ "./src/app/modules/main/main.module.ts");







let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _modules_main_main_module__WEBPACK_IMPORTED_MODULE_6__["MainModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/modules/main/home/home.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/modules/main/home/home.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".item2 {\n  padding-top: 10rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJpYWpvc2UvRGVza3RvcC9Qb3J0YWZvbGlvL3BvcnRhZm9saW8yMDE5L3BvcnRmb2xpby9zcmMvYXBwL21vZHVsZXMvbWFpbi9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtMiB7XG4gICAgcGFkZGluZy10b3A6IDEwcmVtO1xufSIsIi5pdGVtMiB7XG4gIHBhZGRpbmctdG9wOiAxMHJlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/home/home.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/main/home/home.component.ts ***!
  \*****************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/modules/main/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/modules/main/main-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/main/main-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: MainRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainRoutingModule", function() { return MainRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project/project.component */ "./src/app/modules/main/project/project.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/modules/main/home/home.component.ts");





const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    },
    {
        path: 'projects/:id',
        component: _project_project_component__WEBPACK_IMPORTED_MODULE_3__["ProjectComponent"]
    }
];
let MainRoutingModule = class MainRoutingModule {
};
MainRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], MainRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/main.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/main/main.module.ts ***!
  \*********************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project/project.component */ "./src/app/modules/main/project/project.component.ts");
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-routing.module */ "./src/app/modules/main/main-routing.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/modules/main/home/home.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");







let MainModule = class MainModule {
};
MainModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _project_project_component__WEBPACK_IMPORTED_MODULE_3__["ProjectComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _main_routing_module__WEBPACK_IMPORTED_MODULE_4__["MainRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
        ]
    })
], MainModule);



/***/ }),

/***/ "./src/app/modules/main/project/project.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/modules/main/project/project.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9wcm9qZWN0L3Byb2plY3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/main/project/project.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/main/project/project.component.ts ***!
  \***********************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");




let ProjectComponent = class ProjectComponent {
    constructor(route, sanitizer) {
        this.route = route;
        this.sanitizer = sanitizer;
        this.projects = [{
                id: 1,
                title: '05 Minute foundation',
                wireframes: true,
                about: [
                    'As a participant of the DoAction day is a charity hackathon that uses WordPress to uplift local communities. Five minute is a foundation committed to the protection of our oceans and the education of future responsible consumers. Their main goal is to clean the planet, starting with the most spectacular gift of nature, the beaches.',
                    'The client already had a website, we redesigned it, based on both their needs and that of future users.'
                ],
                about2: [
                    'Responsible for providing visual direction of and delivering design assets and accountable for the design solutions produced in the work process.'
                ],
                about3: [
                    'Understand the user needs by the client only in one day and then transform this into a functional product'
                ],
                // tools: 'Responsible for providing visual direction of and delivering design assets & Accountable for the design solutions produced in the work process',
                // img: '/assets/images/conversabledesk.png',
                mobile: {
                    text: 'The site was developed for mobile devices',
                    img: [
                        '/assets/images/5m01.jpg',
                        '/assets/images/5m02.jpg',
                        '/assets/images/5m03.jpg',
                        '/assets/images/5m04.jpg',
                        '/assets/images/5m05.png'
                    ]
                },
            },
            {
                id: 2,
                title: 'Cedro Negro Furniture',
                video: 'https://player.vimeo.com/video/378460077',
                wireframes: {
                    img: '/assets/images/cedro01.png',
                    title: 'Test'
                },
                about: [
                    'Cedro negro is a furniture studio consolidated by an artisan high-quality woodwork with more than 20 years of experience, what makes this project fantastic that not only the furniture making is done is not that a creative process is also done working in continuous flow with the clients.'
                ],
                about2: [
                    'Brand design', 'As UX/UI Designer, I worked with the client and user to develop the better solution', 'Solving the problems and connecting with the user to improve usability, accessibility and user delight.'
                ],
                about3: [
                    'Without nothing base transforming all this process that only the artist understand into something that everybody can understanding at the same time increase their database clients'
                ],
                img: '/assets/images/cedronegrobrand.jpg',
                section2: {
                    title: 'User research',
                    info: 'I further analyzed the research data gathered by the marketing team to find out who the users are and their preference. I found users needs to know all the process and portfolio.',
                    img: [
                        '/assets/images/cedro-persona01.png',
                        '/assets/images/cedro-persona02.png',
                        '/assets/images/cedro-persona03.png',
                    ]
                },
                mobile: {
                    text: 'User testing is usually done in person to observe user behavior. It could be a feedback told by the user verbally or we could spot the problem with the user’s reactions',
                }
            },
            {
                id: 3,
                title: 'Micro world - Biodesign',
                video: 'https://player.vimeo.com/video/379582711',
                wireframes: true,
                about: [
                    'As part of Copenhagen Institute of Interaction Design summer school one of the most rich and clarity experience that ever had.'
                ],
                about2: [
                    'UX Designer'
                ],
                about3: [
                    'How can we reconnect and foster deep conversations with nature in order to transfer the hidden knowledge from our fellow companions (other species) through digital technology? This based on Micro scale Microscopic organisms, the category ‘Microbes’ that includes a massive range of organisms including bacteria, fungi, viruses, algae, archaea and protozoa. Some of these, such as bacteria and fungi, are well known, but others such as archaea much less so.'
                ],
                // tools: 'Responsible for providing visual direction of and delivering design assets & Accountable for the design solutions produced in the work process',
                // img: '/assets/images/conversabledesk.png',
                mobile: {
                    text: 'Our concept was guided walking tours at the jungle that brings exposure, understanding, and connection to the micro-universe. How does it work? In order to see the micro-world a flower, all people in the group must to touch their hands and then a video mapping will start to projecting of the microscopic images of the flower. It was based on how the bacterias work together in symbiosis with another organisms.',
                },
            },
            {
                id: 4,
                title: 'Galaxies',
                video: 'https://player.vimeo.com/video/225519371',
                wireframes: {
                    img: '/assets/images/cedro01.png',
                    title: 'Test'
                },
                about: [
                    'It was a UX class project where we have to develop an interface based on the galaxies of the universe. Using all the tools we learned during the course.'
                ],
                about2: [
                    'UX/UI Designer'
                ],
                about3: [
                    'The most challenging thing was visualizing a lot of information in a pleasant way and with the least cognitive load for the users was presented.'
                ],
                section2: {
                    title: 'User research',
                    info: 'I took design decisions based on the analysis and use of tools such as user personas, interviews, card sorting, analysis references, and user tests.',
                    img: [
                        '/assets/images/users.png',
                    ]
                },
                mobile: {
                    text: 'User testing is usually done in person to observe user behavior. It could be a feedback told by the user verbally or we could spot the problem with the user’s reactions',
                }
            }
        ];
    }
    sanitizerUrl(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
    ngOnInit() {
        window.scroll(0, 0); // Goes to page top
        const projectId = Number(this.route.snapshot.paramMap.get('id'));
        this.selectedProject = this.projects.find(p => p.id === projectId);
    }
};
ProjectComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }
];
ProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-project',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./project.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/project/project.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./project.component.scss */ "./src/app/modules/main/project/project.component.scss")).default]
    })
], ProjectComponent);



/***/ }),

/***/ "./src/app/modules/shared/contact/contact.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/modules/shared/contact/contact.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/shared/contact/contact.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/shared/contact/contact.component.ts ***!
  \*************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactComponent = class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/contact/contact.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.scss */ "./src/app/modules/shared/contact/contact.component.scss")).default]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/modules/shared/footer/footer.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/modules/shared/footer/footer.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/shared/footer/footer.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/shared/footer/footer.component.ts ***!
  \***********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/modules/shared/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/modules/shared/header/header.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/modules/shared/header/header.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/shared/header/header.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/shared/header/header.component.ts ***!
  \***********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() {
    }
    ngOnInit() {
    }
    toggleMenu() {
        let menu = document.getElementById("navigation");
        if (menu.style.display == "block") {
            menu.style.display = "none";
        }
        else {
            menu.style.display = "block";
        }
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/modules/shared/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/modules/shared/shared.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/shared/shared.module.ts ***!
  \*************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/modules/shared/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/modules/shared/footer/footer.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/modules/shared/contact/contact.component.ts");






let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [
            _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
            _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mariajose/Desktop/Portafolio/portafolio2019/portfolio/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map