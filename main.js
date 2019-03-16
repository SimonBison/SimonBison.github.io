(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  <u>\n    About Simon\n  </u>\n</h1>\n\n&nbsp;\n\n<h2>\n  Hello! I'm Simon, a Java Developer based in Chicago, IL who enjoys building web apps.\n  I'm a backend developer who discovered how much he likes to tinker also on the frontend.\n  During my 2+ years as a professional Software Developer I had the chance to work on a variety of interesting\n  projects, tools and technologies on a daily basis.\n\n  I like to travel, that's why I'm not scared of relocation :)\n</h2>\n"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "tr.even {\n  background: azure;\n  color: black; }\n\ntr.odd {\n  background: black;\n  color: azure; }\n\nbutton {\n  background-color: red; }\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _models_models_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/models.component */ "./src/app/models/models.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        redirectTo: '/home', pathMatch: 'full'
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'about',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]
    },
    {
        path: 'contact',
        component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"]
    },
    {
        path: 'models',
        component: _models_models_component__WEBPACK_IMPORTED_MODULE_5__["ModelsComponent"]
    },
    {
        path: 'portfolio',
        component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_6__["PortfolioComponent"]
    },
    {
        path: 'skills',
        component: _skills_skills_component__WEBPACK_IMPORTED_MODULE_7__["SkillsComponent"]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<ul>\n  <li><a routerLink=\"home\">Home</a> </li>\n  <li><a routerLink=\"about\">About Simon</a> </li>\n  <li><a routerLink=\"skills\">Skills & Education</a> </li>\n  <li><a routerLink=\"portfolio\">Portfolio & Experience</a> </li>\n  <li><a routerLink=\"contact\">Contact Me</a> </li>\n</ul>\n\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}.\n  </h1>\n  <div style=\"text-align:center\">\n    <img width=\"100\" alt=\"SBI\" src=\"assets/img/SzymonBiz.jpg\">\n  </div>\n  <h3> Java Developer / Junior Full Stack Developer </h3>\n</div>\n\n\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Simon\'s website';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _models_models_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./models/models.component */ "./src/app/models/models.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _skills_components_skilltable_skilltable_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./skills/components/skilltable/skilltable.component */ "./src/app/skills/components/skilltable/skilltable.component.ts");
/* harmony import */ var _skills_components_coursetable_coursetable_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./skills/components/coursetable/coursetable.component */ "./src/app/skills/components/coursetable/coursetable.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _models_models_component__WEBPACK_IMPORTED_MODULE_9__["ModelsComponent"],
                _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_10__["PortfolioComponent"],
                _services_services_component__WEBPACK_IMPORTED_MODULE_11__["ServicesComponent"],
                _skills_skills_component__WEBPACK_IMPORTED_MODULE_12__["SkillsComponent"],
                _skills_components_skilltable_skilltable_component__WEBPACK_IMPORTED_MODULE_13__["SkilltableComponent"],
                _skills_components_coursetable_coursetable_component__WEBPACK_IMPORTED_MODULE_14__["CoursetableComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  <u>\n    Contact Me\n  </u>\n</h1>\n\n&nbsp;\n\n<div style=\"text-align:center\">\n  <h1 class=\"well\">\n    Submit Feedback\n  </h1>\n  <div class=\"container\">\n    <div class=\"col-md-5\">\n      <div class=\"form-area\">\n        <form role=\"form\">\n          <br style=\"clear:both\">\n          <h3 style=\"margin-bottom: 25px; text-align: center;\">Contact Form</h3>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" placeholder=\"Name\" [(ngModel)]=\"name\" required>\n          </div>\n          <div class=\"form-group\">\n            <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"Email\" [(ngModel)]=\"email\" required>\n          </div>\n          <div class=\"form-group\">\n            <input type=\"phone\" class=\"form-control\" id=\"mobile\" name=\"mobile\" placeholder=\"Mobile Number\" [(ngModel)]=\"mobile\" required>\n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" id=\"subject\" name=\"subject\" placeholder=\"Subject\" [(ngModel)]=\"subject\" required>\n          </div>\n          <div class=\"form-group\">\n            <textarea class=\"form-control\" type=\"textarea\" id=\"message\" name=\"message\" placeholder=\"Message\" [(ngModel)]=\"message\" maxlength=\"140\" rows=\"7\"></textarea>\n          </div>\n          <button type=\"button\" id=\"submit\" name=\"submit\" class=\"btn btn-primary pull-right\" (click)=\"save(name, email, mobile, subject, message)\">Submit Form</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  background-color: red; }\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = /** @class */ (function () {
    function ContactComponent(http) {
        this.http = http;
        this.title = 'Simple Example Contact-us page using Angular 4';
        this.data = [];
    }
    ContactComponent.prototype.save = function (name, email, mobile, subject, message) {
        this.data['name'] = name;
        this.data['email'] = email;
        this.data['mobile'] = mobile;
        this.data['subject'] = subject;
        this.data['message'] = message;
        console.log(this.data);
        //add request to send email or into mysql
        this.http.put('http://localhost/api/v1/update/', this.data).subscribe(function (res) {
            console.log(res);
        }, function (err) {
            if (err.error instanceof Error) {
                console.log("Client-side error occured.");
            }
            else {
                console.log("Server-side error occurred.");
            }
        });
    };
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  <u>\n    Home\n  </u>\n</h1>\n\n&nbsp;\n\n\n<h3><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/SimonBison\">My Github Repositories</a></h3>\n<h3><a target=\"_blank\" rel=\"noopener\" href=\"https://stackoverflow.com/users/7246535/simonbison\">My Stackoverflow Profile</a> </h3>\n<h3><a target=\"_blank\" rel=\"noopener\" href=\"https://www.linkedin.com/in/simonbison\">My LinkedIn Profile</a></h3>\n\n\n&nbsp;\n\n<div style=\"text-align:center\">\n\n  <h1>DOWNLOAD</h1>\n\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/models/models.component.html":
/*!**********************************************!*\
  !*** ./src/app/models/models.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  models works!\n</p>\n"

/***/ }),

/***/ "./src/app/models/models.component.scss":
/*!**********************************************!*\
  !*** ./src/app/models/models.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/models/models.component.ts":
/*!********************************************!*\
  !*** ./src/app/models/models.component.ts ***!
  \********************************************/
/*! exports provided: ModelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelsComponent", function() { return ModelsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModelsComponent = /** @class */ (function () {
    function ModelsComponent() {
    }
    ModelsComponent.prototype.ngOnInit = function () {
    };
    ModelsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-models',
            template: __webpack_require__(/*! ./models.component.html */ "./src/app/models/models.component.html"),
            styles: [__webpack_require__(/*! ./models.component.scss */ "./src/app/models/models.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ModelsComponent);
    return ModelsComponent;
}());



/***/ }),

/***/ "./src/app/portfolio/portfolio.component.html":
/*!****************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  <u>\n    Portfolio & Experience\n  </u>\n</h1>\n\n&nbsp;\n\n\n<h3><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/SimonBison\">My Github Repositories</a></h3>\n\n"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.scss":
/*!****************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.ts":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent() {
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.scss */ "./src/app/portfolio/portfolio.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/services/services.component.html":
/*!**************************************************!*\
  !*** ./src/app/services/services.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  services works!\n</p>\n"

/***/ }),

/***/ "./src/app/services/services.component.scss":
/*!**************************************************!*\
  !*** ./src/app/services/services.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/services/services.component.ts":
/*!************************************************!*\
  !*** ./src/app/services/services.component.ts ***!
  \************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.scss */ "./src/app/services/services.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/skills/components/coursetable/coursetable.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/skills/components/coursetable/coursetable.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  coursetable works!\n</p>\n"

/***/ }),

/***/ "./src/app/skills/components/coursetable/coursetable.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/skills/components/coursetable/coursetable.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/skills/components/coursetable/coursetable.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/skills/components/coursetable/coursetable.component.ts ***!
  \************************************************************************/
/*! exports provided: CoursetableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursetableComponent", function() { return CoursetableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CoursetableComponent = /** @class */ (function () {
    function CoursetableComponent() {
    }
    CoursetableComponent.prototype.ngOnInit = function () {
    };
    CoursetableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'coursetable',
            template: __webpack_require__(/*! ./coursetable.component.html */ "./src/app/skills/components/coursetable/coursetable.component.html"),
            styles: [__webpack_require__(/*! ./coursetable.component.scss */ "./src/app/skills/components/coursetable/coursetable.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CoursetableComponent);
    return CoursetableComponent;
}());



/***/ }),

/***/ "./src/app/skills/components/skilltable/skilltable.component.html":
/*!************************************************************************!*\
  !*** ./src/app/skills/components/skilltable/skilltable.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  skilltable works!\n</p>\n"

/***/ }),

/***/ "./src/app/skills/components/skilltable/skilltable.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/skills/components/skilltable/skilltable.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/skills/components/skilltable/skilltable.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/skills/components/skilltable/skilltable.component.ts ***!
  \**********************************************************************/
/*! exports provided: SkilltableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkilltableComponent", function() { return SkilltableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SkilltableComponent = /** @class */ (function () {
    function SkilltableComponent() {
    }
    SkilltableComponent.prototype.ngOnInit = function () {
    };
    SkilltableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-skilltable',
            template: __webpack_require__(/*! ./skilltable.component.html */ "./src/app/skills/components/skilltable/skilltable.component.html"),
            styles: [__webpack_require__(/*! ./skilltable.component.scss */ "./src/app/skills/components/skilltable/skilltable.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SkilltableComponent);
    return SkilltableComponent;
}());



/***/ }),

/***/ "./src/app/skills/skills.component.html":
/*!**********************************************!*\
  !*** ./src/app/skills/skills.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\r\n  <u>\r\n    Skills & Education\r\n  </u>\r\n</h1>\r\n\r\n&nbsp;\r\n\r\n<h1>\r\n  Skills:\r\n</h1>\r\n\r\n<h2>\r\n  Tech skills: <button (click)=\"toggleDiv1()\">show/hide</button>\r\n</h2>\r\n<div *ngIf=\"visibleSkills\"> <table>\r\n  <tr>\r\n    <td>S No.</td>\r\n    <td>Course</td>\r\n  </tr>\r\n  <tr *ngFor=\"let record of skills; let id=index; let firstRecord = first; let lastRecord = last; let evenRecord = even;\r\n  let oddRecord = odd;\" [ngClass]=\"{odd: oddRecord, even: evenRecord, first: firstRecord, last: lastRecord}\">\r\n    <td>{{id + 1}}</td>\r\n    <td>{{record.skill}}</td>\r\n  </tr>\r\n</table> </div>\r\n\r\n&nbsp;\r\n\r\n<h1>\r\n  Education:\r\n</h1>\r\n\r\n<table>\r\n  <h3>\r\n    University of Applied Sciences BFI Vienna / University of Economics in Katowice:\r\n  </h3>\r\n\r\n  <u>Master of Science</u> (Joint Master degree - Vienna & Katowice)\r\n\r\n  <h3>\r\n    Quantitative Asset and Risk Management\r\n  </h3>\r\n</table>\r\n\r\n&nbsp;\r\n\r\n<table>\r\n  <h3>\r\n    University of Economics in Katowice:\r\n  </h3>\r\n\r\n  <u>Bachelor of Science</u>\r\n\r\n  <h3>\r\n    Financial Engineering\r\n  </h3>\r\n</table>\r\n\r\n&nbsp;\r\n\r\n<h2>\r\n  Courses taken on University: <button (click)=\"toggleDiv2()\">show/hide</button>\r\n</h2>\r\n<div *ngIf=\"visibleCourses\"> <table>\r\n  <tr>\r\n    <td>S No.</td>\r\n    <td>Course</td>\r\n  </tr>\r\n  <tr *ngFor=\"let record of courses; let id=index; let firstRecord = first; let lastRecord = last; let evenRecord = even;\r\n  let oddRecord = odd;\" [ngClass]=\"{odd: oddRecord, even: evenRecord, first: firstRecord, last: lastRecord}\">\r\n    <td>{{id + 1}}</td>\r\n    <td>{{record.course}}</td>\r\n  </tr>\r\n</table> </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/skills/skills.component.scss":
/*!**********************************************!*\
  !*** ./src/app/skills/skills.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "tr.even {\n  background: azure;\n  color: black; }\n\ntr.odd {\n  background: black;\n  color: azure; }\n\nbutton {\n  background-color: red; }\n"

/***/ }),

/***/ "./src/app/skills/skills.component.ts":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SkillsComponent = /** @class */ (function () {
    function SkillsComponent() {
        this.skills = [
            {
                skill: 'IntelliJ IDEA'
            },
            {
                skill: 'Java 8 / 11'
            },
            {
                skill: 'Spring Boot'
            },
            {
                skill: 'Spring MVC'
            },
            {
                skill: 'REST API'
            },
            {
                skill: 'Angular'
            },
            {
                skill: 'TypeScript'
            },
            {
                skill: 'JPA'
            },
            {
                skill: 'MySQL'
            },
            {
                skill: 'Microservices'
            },
            {
                skill: 'PowerShell'
            },
            {
                skill: 'Postman'
            },
            {
                skill: 'Bootstrap'
            },
            {
                skill: 'HTML5'
            },
            {
                skill: 'CSS'
            },
            {
                skill: 'SASS'
            },
            {
                skill: 'Docker'
            },
            {
                skill: 'Oracle Database'
            },
            {
                skill: 'Git'
            },
            {
                skill: 'Maven'
            },
            {
                skill: 'Jira'
            },
            {
                skill: 'Confluence'
            },
            {
                skill: 'Jenkins'
            },
            {
                skill: 'Json'
            },
            {
                skill: 'GitBash'
            },
            {
                skill: 'PowerShell'
            },
            {
                skill: 'Python 3'
            }
        ];
        this.courses = [
            {
                course: 'Programming in JAVA'
            },
            {
                course: 'Time Series Analysis'
            },
            {
                course: 'Advanced Programming in MS-OFFICE'
            },
            {
                course: 'Advanced use of a Spreadsheet in Finance'
            },
            {
                course: 'Alternative Investments'
            },
            {
                course: 'Database Design. SQL Language'
            },
            {
                course: 'Econometric Modelling'
            },
            {
                course: 'Econometrics'
            },
            {
                course: 'Equity and Foreign Exchange Derivatives'
            },
            {
                course: 'Financial Derivative Instruments'
            },
            {
                course: 'Financial Fixed Income Instruments'
            },
            {
                course: 'Financial Modelling with a Spreadsheet'
            },
            {
                course: 'Fixed Income and Credit Derivatives'
            },
            {
                course: 'Time Series Analysis'
            },
            {
                course: 'Game Theory in Finance'
            },
            {
                course: 'Mathematics'
            },
            {
                course: 'Measurement of Credit Risk'
            },
            {
                course: 'Measurement of Market Risk'
            },
            {
                course: 'Methods and Algorithms of Optimization'
            },
            {
                course: 'Multivariate Methods (in R package)'
            },
            {
                course: 'Probabilistic Methods in Risk Analysis with R package'
            },
            {
                course: 'Stochastic Processes'
            },
            {
                course: 'Programming and Databases'
            },
            {
                course: 'Programming in Python Language'
            },
            {
                course: 'Statistics'
            },
            {
                course: 'Structured Products'
            },
            {
                course: 'Use of Excel/VBA in Financial Engineering'
            }
        ];
        this.visibleSkills = false;
        this.visibleCourses = false;
    }
    SkillsComponent.prototype.toggleDiv1 = function () {
        this.visibleSkills = !this.visibleSkills;
    };
    SkillsComponent.prototype.toggleDiv2 = function () {
        this.visibleCourses = !this.visibleCourses;
    };
    SkillsComponent.prototype.ngOnInit = function () { };
    SkillsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-skills',
            template: __webpack_require__(/*! ./skills.component.html */ "./src/app/skills/skills.component.html"),
            styles: [__webpack_require__(/*! ./skills.component.scss */ "./src/app/skills/skills.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SkillsComponent);
    return SkillsComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Programowanie\Programy\ANGULAR\my-website-v2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map