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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/forms/form-action-texts/form-action-texts.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/forms/form-action-texts/form-action-texts.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"{'move-main-color-layer': slideElements}\" class=\"floating-layout-wrapper\">\r\n  <div  class=\"floating-texts-wrapper\">\r\n    <div [ngClass]=\"{'move-login-text': slideElements}\" class=\"floating-text-login\">\r\n      <h2>Howdy chief!</h2>\r\n      <p>Please fill in the details so that we start getting to know you!</p>\r\n      <button (click)=\"toggleFormMovements()\">Log in</button>\r\n    </div>\r\n    <div class=\"floating-text-sign-up\">\r\n      <h2>Good to have you back!</h2>\r\n      <p>Please login using your credentials</p>\r\n      <button\r\n              [ngClass]=\"{'deactivate': (isUserLoggedIn | async) === true}\"\r\n              *ngIf=\"(isUserSignedUp | async) !== true \" (click)=\"toggleFormMovements()\">Sign up</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/forms/forms.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/forms/forms.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-wrapper\">\r\n  <div class=\"form-body\">\r\n    <app-login-form [formMoveInitiated]=initiateSlide></app-login-form>\r\n    <app-signup-form [formMoveInitiated]=initiateSlide></app-signup-form>\r\n    <app-form-action-texts (moveForms)=\"moveForms($event)\"></app-form-action-texts>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/forms/login-form/login-form.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/forms/login-form/login-form.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-form-wrapper\">\r\n  <div class=\"login-form-body\" [ngClass]=\"{'move-log-in-form':formMoveInitiated}\">\r\n    <h2>Log in</h2>\r\n    <form [formGroup] = loginForm (ngSubmit)=\"onSubmitLogin()\">\r\n      <label for=\"email\"></label>\r\n      <input required id=\"email\" formControlName=\"email\" placeholder=\"Email\" type=\"email\">\r\n      <small [class.hide-input-validation]=\"(loginEmail.valid || loginEmail.untouched) && loginChecker.email\">\r\n        Email is not valid\r\n      </small>\r\n      <label for=\"password\"></label>\r\n      <input required id=\"password\" formControlName=\"password\" placeholder=\"Password\" type=\"password\">\r\n      <small [class.hide-input-validation]=\"(loginPassword.valid || loginPassword.untouched) && loginChecker.password\">\r\n        Password is too short (Min 9 chars)\r\n      </small>\r\n      <button [disabled]=\"\r\n      (isUserSignedIn | async) === true ||\r\n      loginEmail.invalid ||\r\n      loginPassword.invalid\" type=\"submit\">Log in</button>\r\n      <span *ngIf=\"(loaderSub | async) === false\" class=\"loader\"></span>\r\n    </form>\r\n  </div>\r\n</div>\r\n<div class=\"notification-messages login-messages\">\r\n  <p *ngIf=\"(isUserSignedIn | async) === true\">Welcome!</p>\r\n  <p class=\"submission-error\" *ngIf=\"(isUserSignedIn | async) !== true\">{{ isUserSignedIn | async }}</p>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/forms/sign-up-form/sign-up-form.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/forms/sign-up-form/sign-up-form.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"signup-form-wrapper\">\r\n  <div class=\"signup-form-body\" [ngClass]=\"{'move-sign-up-form':formMoveInitiated}\">\r\n    <h2>Sign up</h2>\r\n    <form [formGroup] = signUpForm (ngSubmit)=\"onSubmitSignUp()\">\r\n      <label for=\"email_sign_up\"></label>\r\n      <input required id=\"email_sign_up\" formControlName=\"email\" placeholder=\"Email\" type=\"email\">\r\n      <small [class.hide-input-validation]=\"(signUpEmail.valid || signUpEmail.untouched) && signUpChecker.email\">\r\n        Email is not valid\r\n      </small>\r\n      <label for=\"password_sign_up\"></label>\r\n      <input required id=\"password_sign_up\" formControlName=\"password\" placeholder=\"Password\" type=\"password\">\r\n      <small [class.hide-input-validation]=\"signUpPassword.valid || (signUpPassword.invalid && signUpPassword.pristine)\">\r\n        Password is too short (Min 9 chars)\r\n      </small>\r\n      <button [disabled]=\"\r\n      (isUserSignedUp | async) === true ||\r\n      signUpEmail.invalid ||\r\n      signUpPassword.invalid\" type=\"submit\">Sign up</button>\r\n      <span *ngIf=\"(loaderSub | async) === false\" class=\"loader\"></span>\r\n    </form>\r\n  </div>\r\n</div>\r\n<div class=\"notification-messages signup-messages\">\r\n  <p *ngIf=\"(isUserSignedUp | async) === true\">Thank you for joining us!<br> All you have to do now is log in on the left side.</p>\r\n  <p class=\"submission-error\" *ngIf=\"(isUserSignedUp | async) !== true\">{{ isUserSignedUp | async }}</p>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"logOut()\">Logout</button>\n<h1>Work in progress :)</h1>\n"

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
/* harmony import */ var _forms_forms_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forms/forms.component */ "./src/app/forms/forms.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");





const appRoutes = [
    { path: 'authentication', component: _forms_forms_component__WEBPACK_IMPORTED_MODULE_3__["FormsComponent"] },
    {
        path: '',
        redirectTo: '/authentication',
        pathMatch: 'full'
    },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
        this.title = 'the-gents-chat';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _forms_forms_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forms/forms.component */ "./src/app/forms/forms.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _forms_form_action_texts_form_action_texts_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./forms/form-action-texts/form-action-texts.component */ "./src/app/forms/form-action-texts/form-action-texts.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _forms_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./forms/login-form/login-form.component */ "./src/app/forms/login-form/login-form.component.ts");
/* harmony import */ var _forms_sign_up_form_sign_up_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./forms/sign-up-form/sign-up-form.component */ "./src/app/forms/sign-up-form/sign-up-form.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _forms_forms_component__WEBPACK_IMPORTED_MODULE_5__["FormsComponent"],
            _forms_form_action_texts_form_action_texts_component__WEBPACK_IMPORTED_MODULE_9__["FormActionTextsComponent"],
            _forms_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_11__["LoginFormComponent"],
            _forms_sign_up_form_sign_up_form_component__WEBPACK_IMPORTED_MODULE_12__["SignUpFormComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/forms/form-action-texts/form-action-texts.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/forms/form-action-texts/form-action-texts.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".floating-layout-wrapper {\n  position: absolute;\n  transform: translateZ(0);\n  right: 0;\n  width: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 2;\n  height: 100%;\n  overflow: hidden;\n  transition: all 0.7s ease-in-out;\n  flex-wrap: wrap;\n  background-image: linear-gradient(-60deg, #ff5858 0%, #f09819 100%);\n}\n.floating-layout-wrapper .floating-texts-wrapper {\n  display: flex;\n}\n.floating-layout-wrapper .floating-texts-wrapper div {\n  width: 350px;\n  text-align: center;\n  color: white;\n  transition: all 0.7s ease-in-out;\n}\n.floating-layout-wrapper .floating-texts-wrapper div p {\n  padding: 0 20px;\n  line-height: 22px;\n}\n.floating-layout-wrapper .floating-texts-wrapper .floating-text-login {\n  margin-left: -400px;\n}\n.floating-layout-wrapper .floating-texts-wrapper .floating-text-sign-up {\n  text-align: center;\n  color: white;\n  margin-left: 50px;\n}\n.floating-layout-wrapper .floating-texts-wrapper .floating-text-sign-up p {\n  padding: 0 20px;\n  line-height: 22px;\n}\n.floating-layout-wrapper .floating-texts-wrapper button {\n  border: 1px solid white;\n  border-radius: 15px;\n  font-family: \"Roboto\", sans-serif;\n  color: white;\n  margin-top: 10px;\n  padding: 8px 35px;\n  background-color: transparent;\n  transition: all 0.2s ease-in-out;\n  font-weight: 500;\n}\n.floating-layout-wrapper .floating-texts-wrapper button.deactivate {\n  pointer-events: none;\n  background-color: grey;\n  border: none;\n  cursor: not-allowed;\n}\n.floating-layout-wrapper .floating-texts-wrapper button:hover {\n  cursor: pointer;\n  background-color: white;\n  color: #F09819;\n  border-color: transparent;\n  outline: none;\n}\n.floating-layout-wrapper .floating-texts-wrapper button:focus {\n  outline: none;\n}\n.floating-layout-wrapper .floating-texts-wrapper h2 {\n  color: white;\n  font-size: 30px;\n  letter-spacing: 0.04rem;\n}\n/* Movement classes */\n.move-main-color-layer {\n  margin-right: 350px;\n}\n.move-login-text {\n  margin-left: 400px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybXMvZm9ybS1hY3Rpb24tdGV4dHMvQzpcXFVzZXJzXFxuemltYW5cXERlc2t0b3BcXHdlYlxcbG9naW4td2l0aC1hdXRoL3NyY1xcYXBwXFxmb3Jtc1xcZm9ybS1hY3Rpb24tdGV4dHNcXGZvcm0tYWN0aW9uLXRleHRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb3Jtcy9mb3JtLWFjdGlvbi10ZXh0cy9mb3JtLWFjdGlvbi10ZXh0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLG1FQUFBO0FDQ0Y7QURDRTtFQUNFLGFBQUE7QUNDSjtBRENJO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FDQ047QURDTTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0NSO0FER0k7RUFDRSxtQkFBQTtBQ0ROO0FESUk7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0ZOO0FESU07RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNGUjtBREtJO0VBQ0UsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7QUNITjtBREtNO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0hSO0FETU07RUFDRSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0FDSlI7QURPTTtFQUNFLGFBQUE7QUNMUjtBRFNJO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQ1BOO0FEWUEscUJBQUE7QUFFQTtFQUNFLG1CQUFBO0FDVkY7QURhQTtFQUNFLDZCQUFBO0FDVkYiLCJmaWxlIjoic3JjL2FwcC9mb3Jtcy9mb3JtLWFjdGlvbi10ZXh0cy9mb3JtLWFjdGlvbi10ZXh0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbG9hdGluZy1sYXlvdXQtd3JhcHBlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICByaWdodDogMDtcclxuICB3aWR0aDogNTAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB6LWluZGV4OiAyO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuN3MgZWFzZS1pbi1vdXQ7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtNjBkZWcsICNmZjU4NTggMCUsICNmMDk4MTkgMTAwJSk7XHJcblxyXG4gIC5mbG9hdGluZy10ZXh0cy13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgZGl2IHtcclxuICAgICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuN3MgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZmxvYXRpbmctdGV4dC1sb2dpbiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtNDAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmZsb2F0aW5nLXRleHQtc2lnbi11cCB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBtYXJnaW4tbGVmdDogNTBweDtcclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICBwYWRkaW5nOiA4cHggMzVweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG5cclxuICAgICAgJi5kZWFjdGl2YXRlIHtcclxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgY29sb3I6ICNGMDk4MTk7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaDIge1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDRyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiBNb3ZlbWVudCBjbGFzc2VzICovXHJcblxyXG4ubW92ZS1tYWluLWNvbG9yLWxheWVyIHtcclxuICBtYXJnaW4tcmlnaHQ6IDM1MHB4O1xyXG59XHJcblxyXG4ubW92ZS1sb2dpbi10ZXh0IHtcclxuICBtYXJnaW4tbGVmdDogNDAwcHggIWltcG9ydGFudDtcclxufVxyXG4iLCIuZmxvYXRpbmctbGF5b3V0LXdyYXBwZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IGFsbCAwLjdzIGVhc2UtaW4tb3V0O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtNjBkZWcsICNmZjU4NTggMCUsICNmMDk4MTkgMTAwJSk7XG59XG4uZmxvYXRpbmctbGF5b3V0LXdyYXBwZXIgLmZsb2F0aW5nLXRleHRzLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmZsb2F0aW5nLWxheW91dC13cmFwcGVyIC5mbG9hdGluZy10ZXh0cy13cmFwcGVyIGRpdiB7XG4gIHdpZHRoOiAzNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjdzIGVhc2UtaW4tb3V0O1xufVxuLmZsb2F0aW5nLWxheW91dC13cmFwcGVyIC5mbG9hdGluZy10ZXh0cy13cmFwcGVyIGRpdiBwIHtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbn1cbi5mbG9hdGluZy1sYXlvdXQtd3JhcHBlciAuZmxvYXRpbmctdGV4dHMtd3JhcHBlciAuZmxvYXRpbmctdGV4dC1sb2dpbiB7XG4gIG1hcmdpbi1sZWZ0OiAtNDAwcHg7XG59XG4uZmxvYXRpbmctbGF5b3V0LXdyYXBwZXIgLmZsb2F0aW5nLXRleHRzLXdyYXBwZXIgLmZsb2F0aW5nLXRleHQtc2lnbi11cCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogNTBweDtcbn1cbi5mbG9hdGluZy1sYXlvdXQtd3JhcHBlciAuZmxvYXRpbmctdGV4dHMtd3JhcHBlciAuZmxvYXRpbmctdGV4dC1zaWduLXVwIHAge1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xufVxuLmZsb2F0aW5nLWxheW91dC13cmFwcGVyIC5mbG9hdGluZy10ZXh0cy13cmFwcGVyIGJ1dHRvbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBwYWRkaW5nOiA4cHggMzVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmZsb2F0aW5nLWxheW91dC13cmFwcGVyIC5mbG9hdGluZy10ZXh0cy13cmFwcGVyIGJ1dHRvbi5kZWFjdGl2YXRlIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cbi5mbG9hdGluZy1sYXlvdXQtd3JhcHBlciAuZmxvYXRpbmctdGV4dHMtd3JhcHBlciBidXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogI0YwOTgxOTtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5mbG9hdGluZy1sYXlvdXQtd3JhcHBlciAuZmxvYXRpbmctdGV4dHMtd3JhcHBlciBidXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuLmZsb2F0aW5nLWxheW91dC13cmFwcGVyIC5mbG9hdGluZy10ZXh0cy13cmFwcGVyIGgyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA0cmVtO1xufVxuXG4vKiBNb3ZlbWVudCBjbGFzc2VzICovXG4ubW92ZS1tYWluLWNvbG9yLWxheWVyIHtcbiAgbWFyZ2luLXJpZ2h0OiAzNTBweDtcbn1cblxuLm1vdmUtbG9naW4tdGV4dCB7XG4gIG1hcmdpbi1sZWZ0OiA0MDBweCAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/forms/form-action-texts/form-action-texts.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/forms/form-action-texts/form-action-texts.component.ts ***!
  \************************************************************************/
/*! exports provided: FormActionTextsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormActionTextsComponent", function() { return FormActionTextsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");



let FormActionTextsComponent = class FormActionTextsComponent {
    constructor(authService) {
        this.authService = authService;
        this.slideElements = false;
        this.isUserSignedUp = this.authService.signedUpSubj;
        this.isUserLoggedIn = this.authService.loggedInSubj;
        this.moveForms = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    toggleFormMovements() {
        this.slideElements = !this.slideElements;
        this.moveForms.emit(this.slideElements);
    }
};
FormActionTextsComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], FormActionTextsComponent.prototype, "moveForms", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FormActionTextsComponent.prototype, "triggerFormMovement", void 0);
FormActionTextsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-action-texts',
        template: __webpack_require__(/*! raw-loader!./form-action-texts.component.html */ "./node_modules/raw-loader/index.js!./src/app/forms/form-action-texts/form-action-texts.component.html"),
        styles: [__webpack_require__(/*! ./form-action-texts.component.scss */ "./src/app/forms/form-action-texts/form-action-texts.component.scss")]
    })
], FormActionTextsComponent);



/***/ }),

/***/ "./src/app/forms/forms.component.scss":
/*!********************************************!*\
  !*** ./src/app/forms/forms.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-wrapper {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.form-wrapper .form-body {\n  position: relative;\n  display: flex;\n  width: 700px;\n  height: 400px;\n  box-shadow: -18px 19px 30px -11px rgba(0, 0, 0, 0.61);\n  border-radius: 10px;\n  overflow: hidden;\n}\n.form-wrapper .form-body app-login-form,\n.form-wrapper .form-body app-signup-form {\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybXMvQzpcXFVzZXJzXFxuemltYW5cXERlc2t0b3BcXHdlYlxcbG9naW4td2l0aC1hdXRoL3NyY1xcYXBwXFxmb3Jtc1xcZm9ybXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Zvcm1zL2Zvcm1zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0NGO0FEQ0U7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUdBLHFEQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0k7O0VBRUUsVUFBQTtBQ0NOIiwiZmlsZSI6InNyYy9hcHAvZm9ybXMvZm9ybXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS13cmFwcGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAuZm9ybS1ib2R5IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogNzAwcHg7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMThweCAxOXB4IDMwcHggLTExcHggcmdiYSgwLDAsMCwwLjYxKTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogLTE4cHggMTlweCAzMHB4IC0xMXB4IHJnYmEoMCwwLDAsMC42MSk7XHJcbiAgICBib3gtc2hhZG93OiAtMThweCAxOXB4IDMwcHggLTExcHggcmdiYSgwLDAsMCwwLjYxKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgIGFwcC1sb2dpbi1mb3JtLFxyXG4gICAgYXBwLXNpZ251cC1mb3JtIHtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmZvcm0td3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmZvcm0td3JhcHBlciAuZm9ybS1ib2R5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogNzAwcHg7XG4gIGhlaWdodDogNDAwcHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogLTE4cHggMTlweCAzMHB4IC0xMXB4IHJnYmEoMCwgMCwgMCwgMC42MSk7XG4gIC1tb3otYm94LXNoYWRvdzogLTE4cHggMTlweCAzMHB4IC0xMXB4IHJnYmEoMCwgMCwgMCwgMC42MSk7XG4gIGJveC1zaGFkb3c6IC0xOHB4IDE5cHggMzBweCAtMTFweCByZ2JhKDAsIDAsIDAsIDAuNjEpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmZvcm0td3JhcHBlciAuZm9ybS1ib2R5IGFwcC1sb2dpbi1mb3JtLFxuLmZvcm0td3JhcHBlciAuZm9ybS1ib2R5IGFwcC1zaWdudXAtZm9ybSB7XG4gIHdpZHRoOiA1MCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/forms/forms.component.ts":
/*!******************************************!*\
  !*** ./src/app/forms/forms.component.ts ***!
  \******************************************/
/*! exports provided: FormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsComponent", function() { return FormsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FormsComponent = class FormsComponent {
    constructor() {
    }
    moveForms(data) {
        this.initiateSlide = data;
    }
};
FormsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forms',
        template: __webpack_require__(/*! raw-loader!./forms.component.html */ "./node_modules/raw-loader/index.js!./src/app/forms/forms.component.html"),
        styles: [__webpack_require__(/*! ./forms.component.scss */ "./src/app/forms/forms.component.scss")]
    })
], FormsComponent);



/***/ }),

/***/ "./src/app/forms/login-form/login-form.component.scss":
/*!************************************************************!*\
  !*** ./src/app/forms/login-form/login-form.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  color: #362843;\n  text-align: center;\n}\n\nform {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  position: relative;\n}\n\nform input {\n  border: none;\n  background-color: #88d3ce;\n  border-radius: 4px;\n  outline: none;\n  color: #3D3943;\n  width: 75%;\n  font-weight: bold;\n  letter-spacing: 0.04rem;\n  font-family: inherit;\n  padding: 12px 0 12px 10px;\n}\n\nform input:not(:first-of-type) {\n  margin-top: 20px;\n}\n\nform small {\n  width: 75%;\n  padding-top: 5px;\n  text-align: left;\n  position: absolute;\n  font-weight: bold;\n  color: #ff5858;\n}\n\nform button {\n  background-color: #FF926B;\n  border-radius: 15px;\n  border: 1px solid transparent;\n  margin-top: 20px;\n  font-family: \"Roboto\", sans-serif;\n  color: white;\n  font-weight: 500;\n  padding: 8px 35px;\n  outline: none;\n  transition: all 0.2s ease-in-out;\n}\n\nform button:disabled {\n  background-color: grey;\n  cursor: not-allowed;\n}\n\nform button:hover:not([disabled]) {\n  cursor: pointer;\n  color: #FF926B;\n  border-color: #FF926B;\n  background-color: transparent;\n}\n\nform button:focus {\n  outline: none;\n}\n\n/* Movement classes */\n\n.move-log-in-form {\n  margin-left: 350px;\n}\n\n.move-sign-up-form {\n  margin-left: 0 !important;\n}\n\n/* Form Validation classes */\n\n.hide-input-validation {\n  display: none;\n}\n\n/* Loader */\n\n.loader {\n  position: absolute;\n  right: 76px;\n  bottom: 1px;\n  font-size: 10px;\n  text-indent: -9999em;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: #ffffff;\n  background: linear-gradient(to right, #0e766f 10%, rgba(255, 255, 255, 0) 42%);\n  -webkit-animation: load3 1.4s infinite linear;\n  animation: load3 1.4s infinite linear;\n  transform: translateZ(0);\n  transition: all 0.2s ease-in-out;\n}\n\n.loader:before {\n  width: 50%;\n  height: 50%;\n  border-radius: 100% 0 0 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  content: \"\";\n}\n\n.loader:after {\n  width: 75%;\n  height: 75%;\n  border-radius: 50%;\n  content: \"\";\n  margin: auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n\n@-webkit-keyframes load3 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes load3 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.notification-messages {\n  position: absolute;\n  width: 40%;\n}\n\n.notification-messages p {\n  font-weight: bold;\n  font-size: 13px;\n  text-align: center;\n}\n\n.notification-messages p.submission-error {\n  color: #fd7646;\n}\n\n:host {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  flex-direction: column;\n  background: white;\n}\n\n:host .login-form-body {\n  transition: all 0.6s ease-in-out;\n  transition-delay: 0.05s;\n  width: 100%;\n  transform: translateZ(0);\n  overflow: hidden;\n}\n\n:host .login-form-body small:nth-of-type(1) {\n  margin-top: 36px;\n}\n\n:host .login-form-body small:nth-of-type(2) {\n  margin-top: 97px;\n}\n\n.login-messages {\n  bottom: 47px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybXMvbG9naW4tZm9ybS9DOlxcVXNlcnNcXG56aW1hblxcRGVza3RvcFxcd2ViXFxsb2dpbi13aXRoLWF1dGgvc3JjXFxhcHBcXGZvcm1zXFxsb2dpbi1mb3JtXFxsb2dpbi1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb3Jtcy9sb2dpbi1mb3JtL2xvZ2luLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Zvcm1zL2xvZ2luLWZvcm0vQzpcXFVzZXJzXFxuemltYW5cXERlc2t0b3BcXHdlYlxcbG9naW4td2l0aC1hdXRoL3N0ZGluIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURDRTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURDSTtFQUNFLGdCQUFBO0FDQ047O0FER0U7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDREo7O0FESUU7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7QUNGSjs7QURJSTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7QUNGTjs7QURPTTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtBQ0xSOztBRFNJO0VBQ0UsYUFBQTtBQ1BOOztBRFlBLHFCQUFBOztBQUVBO0VBQ0Usa0JBQUE7QUNWRjs7QURhQTtFQUNFLHlCQUFBO0FDVkY7O0FEYUEsNEJBQUE7O0FBRUE7RUFDRSxhQUFBO0FDWEY7O0FEY0EsV0FBQTs7QUFDQTtFQUVFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4RUFBQTtFQUNBLDZDQUFBO0VBQ0EscUNBQUE7RUFDQSx3QkFBQTtFQUNBLGdDQUFBO0FDWkY7O0FEY0U7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7QUNaSjs7QURlRTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQ2JKOztBRGdCRTtFQUNFO0lBRUUsdUJBQUE7RUNkSjtFRGdCRTtJQUVFLHlCQUFBO0VDZEo7QUFDRjs7QURnQkU7RUFDRTtJQUVFLHVCQUFBO0VDZEo7RURnQkU7SUFFRSx5QkFBQTtFQ2RKO0FBQ0Y7O0FEa0JBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FDZkY7O0FEaUJFO0VBS0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNuQko7O0FEY0k7RUFDRSxjQUFBO0FDWk47O0FDL0lBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QURrSkY7O0FDaEpFO0VBQ0UsZ0NBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FEa0pKOztBQy9JTTtFQUNFLGdCQUFBO0FEaUpSOztBQzlJTTtFQUNFLGdCQUFBO0FEZ0pSOztBQzFJQTtFQUNFLFlBQUE7QUQ2SUYiLCJmaWxlIjoic3JjL2FwcC9mb3Jtcy9sb2dpbi1mb3JtL2xvZ2luLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XHJcbiAgY29sb3I6ICMzNjI4NDM7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgaW5wdXQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg4ZDNjZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjb2xvcjogIzNEMzk0MztcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjA0cmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDAgMTJweCAxMHB4O1xyXG5cclxuICAgICY6bm90KDpmaXJzdC1vZi10eXBlKSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzbWFsbCB7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjZmY1ODU4O1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjkyNkI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHBhZGRpbmc6IDhweCAzNXB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlciB7XHJcblxyXG4gICAgICAmOm5vdChbZGlzYWJsZWRdKSB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGNvbG9yOiAjRkY5MjZCO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogI0ZGOTI2QjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyogTW92ZW1lbnQgY2xhc3NlcyAqL1xyXG5cclxuLm1vdmUtbG9nLWluLWZvcm0ge1xyXG4gIG1hcmdpbi1sZWZ0OiAzNTBweDtcclxufVxyXG5cclxuLm1vdmUtc2lnbi11cC1mb3JtIHtcclxuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiBGb3JtIFZhbGlkYXRpb24gY2xhc3NlcyAqL1xyXG5cclxuLmhpZGUtaW5wdXQtdmFsaWRhdGlvbiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLyogTG9hZGVyICovXHJcbi5sb2FkZXJcclxue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogNzZweDtcclxuICBib3R0b206IDFweDtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgdGV4dC1pbmRlbnQ6IC05OTk5ZW07XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzBlNzY2ZiAxMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgNDIlKTtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZDMgMS40cyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgYW5pbWF0aW9uOiBsb2FkMyAxLjRzIGluZmluaXRlIGxpbmVhcjtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcclxuXHJcbiAgJjpiZWZvcmUge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJSAwIDAgMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBjb250ZW50OiAnJztcclxuICB9XHJcblxyXG4gICY6YWZ0ZXIge1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIGhlaWdodDogNzUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG5cclxuICBALXdlYmtpdC1rZXlmcmFtZXMgbG9hZDMge1xyXG4gICAgMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgbG9hZDMge1xyXG4gICAgMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uLW1lc3NhZ2VzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDQwJTtcclxuXHJcbiAgcCB7XHJcblxyXG4gICAgJi5zdWJtaXNzaW9uLWVycm9yIHtcclxuICAgICAgY29sb3I6ICNmZDc2NDY7XHJcbiAgICB9XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn1cclxuIiwiaDIge1xuICBjb2xvcjogIzM2Mjg0MztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuZm9ybSBpbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg4ZDNjZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogIzNEMzk0MztcbiAgd2lkdGg6IDc1JTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA0cmVtO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgcGFkZGluZzogMTJweCAwIDEycHggMTBweDtcbn1cbmZvcm0gaW5wdXQ6bm90KDpmaXJzdC1vZi10eXBlKSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5mb3JtIHNtYWxsIHtcbiAgd2lkdGg6IDc1JTtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNmZjU4NTg7XG59XG5mb3JtIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjkyNkI7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nOiA4cHggMzVweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5mb3JtIGJ1dHRvbjpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5mb3JtIGJ1dHRvbjpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjRkY5MjZCO1xuICBib3JkZXItY29sb3I6ICNGRjkyNkI7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuZm9ybSBidXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4vKiBNb3ZlbWVudCBjbGFzc2VzICovXG4ubW92ZS1sb2ctaW4tZm9ybSB7XG4gIG1hcmdpbi1sZWZ0OiAzNTBweDtcbn1cblxuLm1vdmUtc2lnbi11cC1mb3JtIHtcbiAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbn1cblxuLyogRm9ybSBWYWxpZGF0aW9uIGNsYXNzZXMgKi9cbi5oaWRlLWlucHV0LXZhbGlkYXRpb24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBMb2FkZXIgKi9cbi5sb2FkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA3NnB4O1xuICBib3R0b206IDFweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB0ZXh0LWluZGVudDogLTk5OTllbTtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwZTc2NmYgMTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDQyJSk7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkMyAxLjRzIGluZmluaXRlIGxpbmVhcjtcbiAgYW5pbWF0aW9uOiBsb2FkMyAxLjRzIGluZmluaXRlIGxpbmVhcjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cbi5sb2FkZXI6YmVmb3JlIHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA1MCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCUgMCAwIDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBjb250ZW50OiBcIlwiO1xufVxuLmxvYWRlcjphZnRlciB7XG4gIHdpZHRoOiA3NSU7XG4gIGhlaWdodDogNzUlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIG1hcmdpbjogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgbG9hZDMge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBsb2FkMyB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5cbi5ub3RpZmljYXRpb24tbWVzc2FnZXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA0MCU7XG59XG4ubm90aWZpY2F0aW9uLW1lc3NhZ2VzIHAge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubm90aWZpY2F0aW9uLW1lc3NhZ2VzIHAuc3VibWlzc2lvbi1lcnJvciB7XG4gIGNvbG9yOiAjZmQ3NjQ2O1xufVxuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbjpob3N0IC5sb2dpbi1mb3JtLWJvZHkge1xuICB0cmFuc2l0aW9uOiBhbGwgMC42cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4wNXM7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG46aG9zdCAubG9naW4tZm9ybS1ib2R5IHNtYWxsOm50aC1vZi10eXBlKDEpIHtcbiAgbWFyZ2luLXRvcDogMzZweDtcbn1cbjpob3N0IC5sb2dpbi1mb3JtLWJvZHkgc21hbGw6bnRoLW9mLXR5cGUoMikge1xuICBtYXJnaW4tdG9wOiA5N3B4O1xufVxuXG4ubG9naW4tbWVzc2FnZXMge1xuICBib3R0b206IDQ3cHg7XG59IiwiQGltcG9ydCBcIi4uL2NvbW1vbi9jb21tb24tZm9ybXNcIjtcclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcblxyXG4gIC5sb2dpbi1mb3JtLWJvZHkge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNnMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAuMDVzO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgIHNtYWxsIHtcclxuICAgICAgJjpudGgtb2YtdHlwZSgxKSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzZweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpudGgtb2YtdHlwZSgyKSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogOTdweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmxvZ2luLW1lc3NhZ2VzIHtcclxuICBib3R0b206IDQ3cHg7XHJcbn1cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/forms/login-form/login-form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/forms/login-form/login-form.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");






let LoginFormComponent = class LoginFormComponent {
    constructor(formBuild, authService) {
        this.formBuild = formBuild;
        this.authService = authService;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["ReplaySubject"](1);
        this.isUserSignedIn = this.authService.loggedInSubj;
        this.loaderSub = this.authService.logInLoaderSubj;
        this.loginChecker = {
            email: true,
            password: true
        };
    }
    get loginEmail() {
        return this.loginForm.get('email');
    }
    get loginPassword() {
        return this.loginForm.get('password');
    }
    onSubmitLogin() {
        // check the password and email fields
        if ((this.loginForm.value.email === '' && this.loginForm.value.password === '') ||
            this.loginForm.controls.email.status === 'INVALID' &&
                this.loginForm.controls.password.status === 'INVALID') {
            this.loginChecker.email = false;
            this.loginChecker.password = false;
            return;
        }
        if (this.loginForm.value.email === '' || this.loginForm.controls.email.status === 'INVALID') {
            this.loginChecker.email = false;
            return;
        }
        if (this.loginForm.value.password === '' || this.loginForm.controls.password.status === 'INVALID') {
            this.loginChecker.password = false;
            return;
        }
        this.authService.logInUser(this.loginEmail.value, this.loginPassword.value);
        this.loginForm.reset();
    }
    ngOnInit() {
        /* Login Form validation
       ----------------------------------------------------- */
        this.loginForm = this.formBuild.group({
            email: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')
                ]],
            password: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(9)
                ]]
        });
        // this is where we get data from the login form
        this.loginForm.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$))
            .subscribe(value => {
            // handles hiding error messages when typing is detected
            if (value.email !== '') {
                this.loginChecker.email = true;
            }
            if (value.password !== '') {
                this.loginChecker.password = true;
            }
        });
    }
    ngOnDestroy() {
        this.destroyed$.next(true);
        this.destroyed$.complete();
    }
};
LoginFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LoginFormComponent.prototype, "formMoveInitiated", void 0);
LoginFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-form',
        template: __webpack_require__(/*! raw-loader!./login-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/forms/login-form/login-form.component.html"),
        styles: [__webpack_require__(/*! ./login-form.component.scss */ "./src/app/forms/login-form/login-form.component.scss")]
    })
], LoginFormComponent);



/***/ }),

/***/ "./src/app/forms/sign-up-form/sign-up-form.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/forms/sign-up-form/sign-up-form.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  color: #362843;\n  text-align: center;\n}\n\nform {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  position: relative;\n}\n\nform input {\n  border: none;\n  background-color: #88d3ce;\n  border-radius: 4px;\n  outline: none;\n  color: #3D3943;\n  width: 75%;\n  font-weight: bold;\n  letter-spacing: 0.04rem;\n  font-family: inherit;\n  padding: 12px 0 12px 10px;\n}\n\nform input:not(:first-of-type) {\n  margin-top: 20px;\n}\n\nform small {\n  width: 75%;\n  padding-top: 5px;\n  text-align: left;\n  position: absolute;\n  font-weight: bold;\n  color: #ff5858;\n}\n\nform button {\n  background-color: #FF926B;\n  border-radius: 15px;\n  border: 1px solid transparent;\n  margin-top: 20px;\n  font-family: \"Roboto\", sans-serif;\n  color: white;\n  font-weight: 500;\n  padding: 8px 35px;\n  outline: none;\n  transition: all 0.2s ease-in-out;\n}\n\nform button:disabled {\n  background-color: grey;\n  cursor: not-allowed;\n}\n\nform button:hover:not([disabled]) {\n  cursor: pointer;\n  color: #FF926B;\n  border-color: #FF926B;\n  background-color: transparent;\n}\n\nform button:focus {\n  outline: none;\n}\n\n/* Movement classes */\n\n.move-log-in-form {\n  margin-left: 350px;\n}\n\n.move-sign-up-form {\n  margin-left: 0 !important;\n}\n\n/* Form Validation classes */\n\n.hide-input-validation {\n  display: none;\n}\n\n/* Loader */\n\n.loader {\n  position: absolute;\n  right: 76px;\n  bottom: 1px;\n  font-size: 10px;\n  text-indent: -9999em;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: #ffffff;\n  background: linear-gradient(to right, #0e766f 10%, rgba(255, 255, 255, 0) 42%);\n  -webkit-animation: load3 1.4s infinite linear;\n  animation: load3 1.4s infinite linear;\n  transform: translateZ(0);\n  transition: all 0.2s ease-in-out;\n}\n\n.loader:before {\n  width: 50%;\n  height: 50%;\n  border-radius: 100% 0 0 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  content: \"\";\n}\n\n.loader:after {\n  width: 75%;\n  height: 75%;\n  border-radius: 50%;\n  content: \"\";\n  margin: auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n\n@-webkit-keyframes load3 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes load3 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.notification-messages {\n  position: absolute;\n  width: 40%;\n}\n\n.notification-messages p {\n  font-weight: bold;\n  font-size: 13px;\n  text-align: center;\n}\n\n.notification-messages p.submission-error {\n  color: #fd7646;\n}\n\n:host {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  flex-direction: column;\n  background: white;\n}\n\n:host .signup-form-body {\n  transition: all 0.6s ease-in-out;\n  transition-delay: 0.05s;\n  width: 100%;\n  transform: translateZ(0);\n  overflow: hidden;\n  margin-left: -350px;\n}\n\n:host .signup-form-body small:nth-of-type(1) {\n  margin-top: 36px;\n}\n\n:host .signup-form-body small:nth-of-type(2) {\n  margin-top: 97px;\n}\n\n:host .signup-form-body small:nth-of-type(3) {\n  margin-top: 157px;\n}\n\n.signup-messages {\n  bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybXMvc2lnbi11cC1mb3JtL0M6XFxVc2Vyc1xcbnppbWFuXFxEZXNrdG9wXFx3ZWJcXGxvZ2luLXdpdGgtYXV0aC9zcmNcXGFwcFxcZm9ybXNcXHNpZ24tdXAtZm9ybVxcc2lnbi11cC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb3Jtcy9zaWduLXVwLWZvcm0vc2lnbi11cC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb3Jtcy9zaWduLXVwLWZvcm0vQzpcXFVzZXJzXFxuemltYW5cXERlc2t0b3BcXHdlYlxcbG9naW4td2l0aC1hdXRoL3N0ZGluIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURDRTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURDSTtFQUNFLGdCQUFBO0FDQ047O0FER0U7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDREo7O0FESUU7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7QUNGSjs7QURJSTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7QUNGTjs7QURPTTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtBQ0xSOztBRFNJO0VBQ0UsYUFBQTtBQ1BOOztBRFlBLHFCQUFBOztBQUVBO0VBQ0Usa0JBQUE7QUNWRjs7QURhQTtFQUNFLHlCQUFBO0FDVkY7O0FEYUEsNEJBQUE7O0FBRUE7RUFDRSxhQUFBO0FDWEY7O0FEY0EsV0FBQTs7QUFDQTtFQUVFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4RUFBQTtFQUNBLDZDQUFBO0VBQ0EscUNBQUE7RUFDQSx3QkFBQTtFQUNBLGdDQUFBO0FDWkY7O0FEY0U7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7QUNaSjs7QURlRTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQ2JKOztBRGdCRTtFQUNFO0lBRUUsdUJBQUE7RUNkSjtFRGdCRTtJQUVFLHlCQUFBO0VDZEo7QUFDRjs7QURnQkU7RUFDRTtJQUVFLHVCQUFBO0VDZEo7RURnQkU7SUFFRSx5QkFBQTtFQ2RKO0FBQ0Y7O0FEa0JBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FDZkY7O0FEaUJFO0VBS0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNuQko7O0FEY0k7RUFDRSxjQUFBO0FDWk47O0FDL0lBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QURrSkY7O0FDaEpFO0VBQ0UsZ0NBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QURrSko7O0FDL0lNO0VBQ0UsZ0JBQUE7QURpSlI7O0FDOUlNO0VBQ0UsZ0JBQUE7QURnSlI7O0FDN0lNO0VBQ0UsaUJBQUE7QUQrSVI7O0FDeklBO0VBQ0UsWUFBQTtBRDRJRiIsImZpbGUiOiJzcmMvYXBwL2Zvcm1zL3NpZ24tdXAtZm9ybS9zaWduLXVwLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XHJcbiAgY29sb3I6ICMzNjI4NDM7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgaW5wdXQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg4ZDNjZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjb2xvcjogIzNEMzk0MztcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjA0cmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDAgMTJweCAxMHB4O1xyXG5cclxuICAgICY6bm90KDpmaXJzdC1vZi10eXBlKSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzbWFsbCB7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjZmY1ODU4O1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjkyNkI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHBhZGRpbmc6IDhweCAzNXB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlciB7XHJcblxyXG4gICAgICAmOm5vdChbZGlzYWJsZWRdKSB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGNvbG9yOiAjRkY5MjZCO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogI0ZGOTI2QjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyogTW92ZW1lbnQgY2xhc3NlcyAqL1xyXG5cclxuLm1vdmUtbG9nLWluLWZvcm0ge1xyXG4gIG1hcmdpbi1sZWZ0OiAzNTBweDtcclxufVxyXG5cclxuLm1vdmUtc2lnbi11cC1mb3JtIHtcclxuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiBGb3JtIFZhbGlkYXRpb24gY2xhc3NlcyAqL1xyXG5cclxuLmhpZGUtaW5wdXQtdmFsaWRhdGlvbiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLyogTG9hZGVyICovXHJcbi5sb2FkZXJcclxue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogNzZweDtcclxuICBib3R0b206IDFweDtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgdGV4dC1pbmRlbnQ6IC05OTk5ZW07XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzBlNzY2ZiAxMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgNDIlKTtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZDMgMS40cyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgYW5pbWF0aW9uOiBsb2FkMyAxLjRzIGluZmluaXRlIGxpbmVhcjtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcclxuXHJcbiAgJjpiZWZvcmUge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJSAwIDAgMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBjb250ZW50OiAnJztcclxuICB9XHJcblxyXG4gICY6YWZ0ZXIge1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIGhlaWdodDogNzUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG5cclxuICBALXdlYmtpdC1rZXlmcmFtZXMgbG9hZDMge1xyXG4gICAgMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgbG9hZDMge1xyXG4gICAgMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uLW1lc3NhZ2VzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDQwJTtcclxuXHJcbiAgcCB7XHJcblxyXG4gICAgJi5zdWJtaXNzaW9uLWVycm9yIHtcclxuICAgICAgY29sb3I6ICNmZDc2NDY7XHJcbiAgICB9XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn1cclxuIiwiaDIge1xuICBjb2xvcjogIzM2Mjg0MztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuZm9ybSBpbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg4ZDNjZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogIzNEMzk0MztcbiAgd2lkdGg6IDc1JTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA0cmVtO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgcGFkZGluZzogMTJweCAwIDEycHggMTBweDtcbn1cbmZvcm0gaW5wdXQ6bm90KDpmaXJzdC1vZi10eXBlKSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5mb3JtIHNtYWxsIHtcbiAgd2lkdGg6IDc1JTtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNmZjU4NTg7XG59XG5mb3JtIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjkyNkI7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nOiA4cHggMzVweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5mb3JtIGJ1dHRvbjpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5mb3JtIGJ1dHRvbjpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjRkY5MjZCO1xuICBib3JkZXItY29sb3I6ICNGRjkyNkI7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuZm9ybSBidXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4vKiBNb3ZlbWVudCBjbGFzc2VzICovXG4ubW92ZS1sb2ctaW4tZm9ybSB7XG4gIG1hcmdpbi1sZWZ0OiAzNTBweDtcbn1cblxuLm1vdmUtc2lnbi11cC1mb3JtIHtcbiAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbn1cblxuLyogRm9ybSBWYWxpZGF0aW9uIGNsYXNzZXMgKi9cbi5oaWRlLWlucHV0LXZhbGlkYXRpb24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBMb2FkZXIgKi9cbi5sb2FkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA3NnB4O1xuICBib3R0b206IDFweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB0ZXh0LWluZGVudDogLTk5OTllbTtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwZTc2NmYgMTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDQyJSk7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkMyAxLjRzIGluZmluaXRlIGxpbmVhcjtcbiAgYW5pbWF0aW9uOiBsb2FkMyAxLjRzIGluZmluaXRlIGxpbmVhcjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cbi5sb2FkZXI6YmVmb3JlIHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA1MCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCUgMCAwIDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBjb250ZW50OiBcIlwiO1xufVxuLmxvYWRlcjphZnRlciB7XG4gIHdpZHRoOiA3NSU7XG4gIGhlaWdodDogNzUlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIG1hcmdpbjogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgbG9hZDMge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBsb2FkMyB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5cbi5ub3RpZmljYXRpb24tbWVzc2FnZXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA0MCU7XG59XG4ubm90aWZpY2F0aW9uLW1lc3NhZ2VzIHAge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubm90aWZpY2F0aW9uLW1lc3NhZ2VzIHAuc3VibWlzc2lvbi1lcnJvciB7XG4gIGNvbG9yOiAjZmQ3NjQ2O1xufVxuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbjpob3N0IC5zaWdudXAtZm9ybS1ib2R5IHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNnMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMDVzO1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tbGVmdDogLTM1MHB4O1xufVxuOmhvc3QgLnNpZ251cC1mb3JtLWJvZHkgc21hbGw6bnRoLW9mLXR5cGUoMSkge1xuICBtYXJnaW4tdG9wOiAzNnB4O1xufVxuOmhvc3QgLnNpZ251cC1mb3JtLWJvZHkgc21hbGw6bnRoLW9mLXR5cGUoMikge1xuICBtYXJnaW4tdG9wOiA5N3B4O1xufVxuOmhvc3QgLnNpZ251cC1mb3JtLWJvZHkgc21hbGw6bnRoLW9mLXR5cGUoMykge1xuICBtYXJnaW4tdG9wOiAxNTdweDtcbn1cblxuLnNpZ251cC1tZXNzYWdlcyB7XG4gIGJvdHRvbTogMzBweDtcbn0iLCJAaW1wb3J0IFwiLi4vY29tbW9uL2NvbW1vbi1mb3Jtc1wiO1xyXG46aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuXHJcbiAgLnNpZ251cC1mb3JtLWJvZHkge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNnMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAuMDVzO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0zNTBweDtcclxuXHJcbiAgICBzbWFsbCB7XHJcbiAgICAgICY6bnRoLW9mLXR5cGUoMSkge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDM2cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bnRoLW9mLXR5cGUoMikge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDk3cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bnRoLW9mLXR5cGUoMykge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1N3B4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc2lnbnVwLW1lc3NhZ2VzIHtcclxuICBib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/forms/sign-up-form/sign-up-form.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/forms/sign-up-form/sign-up-form.component.ts ***!
  \**************************************************************/
/*! exports provided: SignUpFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpFormComponent", function() { return SignUpFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");





let SignUpFormComponent = class SignUpFormComponent {
    constructor(formBuild, authService) {
        this.formBuild = formBuild;
        this.authService = authService;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
        this.isUserSignedUp = this.authService.signedUpSubj;
        this.loaderSub = this.authService.signUpLoaderSubj;
        this.signUpChecker = {
            email: true,
            password: true,
        };
    }
    get signUpEmail() {
        return this.signUpForm.get('email');
    }
    get signUpPassword() {
        return this.signUpForm.get('password');
    }
    onSubmitSignUp() {
        // check the password, email and name fields
        if ((this.signUpForm.value.email === '' && this.signUpForm.value.password === '' && this.signUpForm.value.name === '') ||
            this.signUpForm.controls.email.status === 'INVALID' &&
                this.signUpForm.controls.password.status === 'INVALID' &&
                this.signUpForm.controls.name.status === 'INVALID') {
            this.signUpChecker.email = false;
            this.signUpChecker.password = false;
            return;
        }
        if (this.signUpForm.value.email === '' || this.signUpForm.controls.email.status === 'INVALID') {
            this.signUpChecker.email = false;
            return;
        }
        if (this.signUpForm.value.password === '' || this.signUpForm.controls.password.status === 'INVALID') {
            this.signUpChecker.password = false;
            return;
        }
        this.authService.signUpUser(this.signUpEmail.value, this.signUpPassword.value);
        this.signUpForm.reset();
    }
    ngOnInit() {
        this.signUpForm = this.formBuild.group({
            email: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')
                ]],
            password: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(9)
                ]]
        });
    }
    ngOnDestroy() {
        this.destroyed$.next(true);
        this.destroyed$.complete();
    }
};
SignUpFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SignUpFormComponent.prototype, "formMoveInitiated", void 0);
SignUpFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup-form',
        template: __webpack_require__(/*! raw-loader!./sign-up-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/forms/sign-up-form/sign-up-form.component.html"),
        styles: [__webpack_require__(/*! ./sign-up-form.component.scss */ "./src/app/forms/sign-up-form/sign-up-form.component.scss")]
    })
], SignUpFormComponent);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  background-color: #FF926B;\n  border-radius: 15px;\n  border: 1px solid transparent;\n  font-family: \"Roboto\", sans-serif;\n  color: white;\n  font-weight: 500;\n  padding: 8px 35px;\n  outline: none;\n  transition: all 0.2s ease-in-out;\n  margin: 50px 0 0 50px;\n  cursor: pointer;\n}\n\nh1 {\n  text-align: center;\n  color: #ea4e16;\n  transform: rotate(40deg);\n  margin-top: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXG56aW1hblxcRGVza3RvcFxcd2ViXFxsb2dpbi13aXRoLWF1dGgvc3JjXFxhcHBcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGlDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGOTI2QjtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBwYWRkaW5nOiA4cHggMzVweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgbWFyZ2luOiA1MHB4IDAgMCA1MHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuaDEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogI2VhNGUxNjtcclxuICB0cmFuc2Zvcm06cm90YXRlKDQwZGVnKTtcclxuICBtYXJnaW4tdG9wOiAxMDBweDtcclxufVxyXG4iLCJidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY5MjZCO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZzogOHB4IDM1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICBtYXJnaW46IDUwcHggMCAwIDUwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZWE0ZTE2O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0MGRlZyk7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xufSJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let HomeComponent = class HomeComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    logOut() {
        localStorage.clear();
        this.router.navigate(['/authentication']);
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/services/apiKeys.ts":
/*!*************************************!*\
  !*** ./src/app/services/apiKeys.ts ***!
  \*************************************/
/*! exports provided: apiKeys */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiKeys", function() { return apiKeys; });
const apiKeys = 'AIzaSyD-sHjvR3PkMiatG0fmGre1fxnJidcGEvY';


/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _apiKeys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./apiKeys */ "./src/app/services/apiKeys.ts");






let AuthService = class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.firebaseAPIKey = _apiKeys__WEBPACK_IMPORTED_MODULE_5__["apiKeys"];
        this.signUpEndpoint = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.firebaseAPIKey}`;
        this.logInEndpoint = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.firebaseAPIKey}`;
        this.failedSignUpMessage = `There was a problem with the sign up
                         or the email address is already registered!`;
        this.failedLogInMessage = 'The email/password is incorrect';
        this.signedUpSubj = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.loggedInSubj = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.signUpLoaderSubj = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.logInLoaderSubj = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    signUpUser(email, password) {
        this.signUpLoaderSubj.next(false);
        this.http.post(this.signUpEndpoint, {
            email,
            password,
            returnSecureToken: true
        }).subscribe(() => {
            this.signedUpSubj.next(true);
            this.signUpLoaderSubj.next(true);
        }, () => {
            console.log(this.firebaseAPIKey);
            this.signedUpSubj.next(this.failedSignUpMessage);
            this.signUpLoaderSubj.next(true);
        });
    }
    logInUser(email, password) {
        this.logInLoaderSubj.next(false);
        this.http.post(this.logInEndpoint, {
            email,
            password,
            returnSecureToken: true
        }).subscribe((data) => {
            const requestMomentDate = new Date().getTime();
            localStorage.setItem('requestMomentDate', String(requestMomentDate));
            localStorage.setItem('tokenExpiry', data.expiresIn);
            this.loggedInSubj.next(true);
            this.logInLoaderSubj.next(true);
            this.router.navigate(['/home']);
        }, () => {
            this.loggedInSubj.next(this.failedLogInMessage);
            this.logInLoaderSubj.next(true);
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\nziman\Desktop\web\login-with-auth\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map