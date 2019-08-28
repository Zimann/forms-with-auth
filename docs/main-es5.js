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

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/forms/form-action-texts/form-action-texts.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/forms/form-action-texts/form-action-texts.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"{'move-main-color-layer': slideElements}\" class=\"floating-layout-wrapper\">\r\n  <div  class=\"floating-texts-wrapper\">\r\n    <div [ngClass]=\"{'move-login-text': slideElements}\" class=\"floating-text-login\">\r\n      <h2>Howdy chief!</h2>\r\n      <p>Please fill in the details so that we start getting to know you!</p>\r\n      <button (click)=\"toggleFormMovements()\">Log in</button>\r\n    </div>\r\n    <div class=\"floating-text-sign-up\">\r\n      <h2>Good to have you back!</h2>\r\n      <p>Please login using your credentials</p>\r\n      <button (click)=\"toggleFormMovements()\">Sign up</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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

module.exports = "<div class=\"login-form-wrapper\">\n  <div class=\"login-form-body\" [ngClass]=\"{'move-log-in-form':formMoveInitiated}\">\n    <h2>Log in</h2>\n    <form [formGroup] = loginForm (ngSubmit)=\"onSubmitLogin()\">\n      <label for=\"email\"></label>\n      <input required id=\"email\" formControlName=\"email\" placeholder=\"Email\" type=\"email\">\n      <small [class.hide-input-validation]=\"(loginEmail.valid || loginEmail.untouched) && loginChecker.email\">\n        Email is not valid\n      </small>\n      <label for=\"password\"></label>\n      <input required id=\"password\" formControlName=\"password\" placeholder=\"Password\" type=\"password\">\n      <small [class.hide-input-validation]=\"(loginPassword.valid || loginPassword.untouched) && loginChecker.password\">\n        Password is not valid\n      </small>\n      <button [disabled]=\"signInSubmitted\" type=\"submit\">Log in</button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/forms/sign-up-form/sign-up-form.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/forms/sign-up-form/sign-up-form.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"signup-form-wrapper\">\n  <div class=\"signup-form-body\" [ngClass]=\"{'move-sign-up-form':formMoveInitiated}\">\n    <h2>Sign up</h2>\n    <form [formGroup] = signUpForm (ngSubmit)=\"onSubmitSignUp()\">\n      <label for=\"name\"></label>\n      <input required id=\"name\" formControlName=\"name\" placeholder=\"Name\" type=\"text\">\n      <small [class.hide-input-validation]=\"(signUpName.valid || signUpName.untouched) && signUpChecker.name\">\n        Please enter a name\n      </small>\n      <label for=\"email_sign_up\"></label>\n      <input required id=\"email_sign_up\" formControlName=\"email\" placeholder=\"Email\" type=\"email\">\n      <small [class.hide-input-validation]=\"(signUpEmail.valid || signUpEmail.untouched) && signUpChecker.email\">\n        Email is not valid\n      </small>\n      <label for=\"password_sign_up\"></label>\n      <input required id=\"password_sign_up\" formControlName=\"password\" placeholder=\"Password\" type=\"password\">\n      <small [class.hide-input-validation]=\"(signUpPassword.valid || signUpPassword.untouched) && signUpChecker.password\">\n        Password is too short (Min 9 chars)\n      </small>\n      <button [disabled]=\"signUpSubmitted\" type=\"submit\">Sign up</button>\n    </form>\n  </div>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _forms_forms_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forms/forms.component */ "./src/app/forms/forms.component.ts");




var appRoutes = [
    { path: 'home', component: _forms_forms_component__WEBPACK_IMPORTED_MODULE_3__["FormsComponent"] },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'the-gents-chat';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _forms_forms_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forms/forms.component */ "./src/app/forms/forms.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _forms_form_action_texts_form_action_texts_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./forms/form-action-texts/form-action-texts.component */ "./src/app/forms/form-action-texts/form-action-texts.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _forms_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./forms/login-form/login-form.component */ "./src/app/forms/login-form/login-form.component.ts");
/* harmony import */ var _forms_sign_up_form_sign_up_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./forms/sign-up-form/sign-up-form.component */ "./src/app/forms/sign-up-form/sign-up-form.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _forms_forms_component__WEBPACK_IMPORTED_MODULE_5__["FormsComponent"],
                _forms_form_action_texts_form_action_texts_component__WEBPACK_IMPORTED_MODULE_9__["FormActionTextsComponent"],
                _forms_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_11__["LoginFormComponent"],
                _forms_sign_up_form_sign_up_form_component__WEBPACK_IMPORTED_MODULE_12__["SignUpFormComponent"]
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
    return AppModule;
}());



/***/ }),

/***/ "./src/app/forms/form-action-texts/form-action-texts.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/forms/form-action-texts/form-action-texts.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".floating-layout-wrapper {\n  position: absolute;\n  transform: translateZ(0);\n  right: 0;\n  width: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  overflow: hidden;\n  transition: all 0.7s ease-in-out;\n  flex-wrap: wrap;\n  background-image: linear-gradient(-60deg, #ff5858 0%, #f09819 100%);\n}\n.floating-layout-wrapper .floating-texts-wrapper {\n  display: flex;\n}\n.floating-layout-wrapper .floating-texts-wrapper div {\n  width: 350px;\n  text-align: center;\n  color: white;\n  transition: all 0.7s ease-in-out;\n}\n.floating-layout-wrapper .floating-texts-wrapper div p {\n  padding: 0 20px;\n  line-height: 22px;\n}\n.floating-layout-wrapper .floating-texts-wrapper .floating-text-login {\n  margin-left: -400px;\n}\n.floating-layout-wrapper .floating-texts-wrapper .floating-text-sign-up {\n  text-align: center;\n  color: white;\n  margin-left: 50px;\n}\n.floating-layout-wrapper .floating-texts-wrapper .floating-text-sign-up p {\n  padding: 0 20px;\n  line-height: 22px;\n}\n.floating-layout-wrapper .floating-texts-wrapper button {\n  border: 1px solid white;\n  border-radius: 15px;\n  font-family: \"Roboto\", sans-serif;\n  color: white;\n  margin-top: 10px;\n  padding: 8px 35px;\n  background-color: transparent;\n  transition: all 0.2s ease-in-out;\n  font-weight: 500;\n}\n.floating-layout-wrapper .floating-texts-wrapper button:hover {\n  cursor: pointer;\n  background-color: white;\n  color: #F09819;\n  border-color: transparent;\n  outline: none;\n}\n.floating-layout-wrapper .floating-texts-wrapper button:focus {\n  outline: none;\n}\n.floating-layout-wrapper .floating-texts-wrapper h2 {\n  color: white;\n  font-size: 30px;\n  letter-spacing: 0.04rem;\n}\n/* Movement classes */\n.move-main-color-layer {\n  margin-right: 350px;\n}\n.move-login-text {\n  margin-left: 400px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybXMvZm9ybS1hY3Rpb24tdGV4dHMvQzpcXFVzZXJzXFxuemltYW5cXERlc2t0b3BcXHdlYlxcb3duX2dpdGh1YlxcbG9naW4tc2lnbnVwLXN3aXRjaC9zcmNcXGFwcFxcZm9ybXNcXGZvcm0tYWN0aW9uLXRleHRzXFxmb3JtLWFjdGlvbi10ZXh0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZm9ybXMvZm9ybS1hY3Rpb24tdGV4dHMvZm9ybS1hY3Rpb24tdGV4dHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLG1FQUFBO0FDQ0Y7QURDRTtFQUNFLGFBQUE7QUNDSjtBRENJO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FDQ047QURDTTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0NSO0FER0k7RUFDRSxtQkFBQTtBQ0ROO0FESUk7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0ZOO0FESU07RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNGUjtBREtNO0VBQ0UsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7QUNIUjtBREtRO0VBQ0UsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQ0hWO0FETVE7RUFDRSxhQUFBO0FDSlY7QURRSTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUNOTjtBRFdBLHFCQUFBO0FBRUE7RUFDRSxtQkFBQTtBQ1RGO0FEWUE7RUFDRSw2QkFBQTtBQ1RGIiwiZmlsZSI6InNyYy9hcHAvZm9ybXMvZm9ybS1hY3Rpb24tdGV4dHMvZm9ybS1hY3Rpb24tdGV4dHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxvYXRpbmctbGF5b3V0LXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93OmhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC43cyBlYXNlLWluLW91dDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC02MGRlZywgI2ZmNTg1OCAwJSwgI2YwOTgxOSAxMDAlKTtcclxuXHJcbiAgLmZsb2F0aW5nLXRleHRzLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICBkaXYge1xyXG4gICAgICB3aWR0aDogMzUwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC43cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5mbG9hdGluZy10ZXh0LWxvZ2luIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IC00MDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZmxvYXRpbmctdGV4dC1zaWduLXVwIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDM1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGNvbG9yOiAjRjA5ODE5O1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgaDIge1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDRyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiBNb3ZlbWVudCBjbGFzc2VzICovXHJcblxyXG4ubW92ZS1tYWluLWNvbG9yLWxheWVyIHtcclxuICBtYXJnaW4tcmlnaHQ6IDM1MHB4O1xyXG59XHJcblxyXG4ubW92ZS1sb2dpbi10ZXh0IHtcclxuICBtYXJnaW4tbGVmdDogNDAwcHggIWltcG9ydGFudDtcclxufVxyXG4iLCIuZmxvYXRpbmctbGF5b3V0LXdyYXBwZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IGFsbCAwLjdzIGVhc2UtaW4tb3V0O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtNjBkZWcsICNmZjU4NTggMCUsICNmMDk4MTkgMTAwJSk7XG59XG4uZmxvYXRpbmctbGF5b3V0LXdyYXBwZXIgLmZsb2F0aW5nLXRleHRzLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmZsb2F0aW5nLWxheW91dC13cmFwcGVyIC5mbG9hdGluZy10ZXh0cy13cmFwcGVyIGRpdiB7XG4gIHdpZHRoOiAzNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjdzIGVhc2UtaW4tb3V0O1xufVxuLmZsb2F0aW5nLWxheW91dC13cmFwcGVyIC5mbG9hdGluZy10ZXh0cy13cmFwcGVyIGRpdiBwIHtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbn1cbi5mbG9hdGluZy1sYXlvdXQtd3JhcHBlciAuZmxvYXRpbmctdGV4dHMtd3JhcHBlciAuZmxvYXRpbmctdGV4dC1sb2dpbiB7XG4gIG1hcmdpbi1sZWZ0OiAtNDAwcHg7XG59XG4uZmxvYXRpbmctbGF5b3V0LXdyYXBwZXIgLmZsb2F0aW5nLXRleHRzLXdyYXBwZXIgLmZsb2F0aW5nLXRleHQtc2lnbi11cCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogNTBweDtcbn1cbi5mbG9hdGluZy1sYXlvdXQtd3JhcHBlciAuZmxvYXRpbmctdGV4dHMtd3JhcHBlciAuZmxvYXRpbmctdGV4dC1zaWduLXVwIHAge1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xufVxuLmZsb2F0aW5nLWxheW91dC13cmFwcGVyIC5mbG9hdGluZy10ZXh0cy13cmFwcGVyIGJ1dHRvbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBwYWRkaW5nOiA4cHggMzVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmZsb2F0aW5nLWxheW91dC13cmFwcGVyIC5mbG9hdGluZy10ZXh0cy13cmFwcGVyIGJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiAjRjA5ODE5O1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBvdXRsaW5lOiBub25lO1xufVxuLmZsb2F0aW5nLWxheW91dC13cmFwcGVyIC5mbG9hdGluZy10ZXh0cy13cmFwcGVyIGJ1dHRvbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uZmxvYXRpbmctbGF5b3V0LXdyYXBwZXIgLmZsb2F0aW5nLXRleHRzLXdyYXBwZXIgaDIge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDRyZW07XG59XG5cbi8qIE1vdmVtZW50IGNsYXNzZXMgKi9cbi5tb3ZlLW1haW4tY29sb3ItbGF5ZXIge1xuICBtYXJnaW4tcmlnaHQ6IDM1MHB4O1xufVxuXG4ubW92ZS1sb2dpbi10ZXh0IHtcbiAgbWFyZ2luLWxlZnQ6IDQwMHB4ICFpbXBvcnRhbnQ7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FormActionTextsComponent = /** @class */ (function () {
    function FormActionTextsComponent() {
        this.slideElements = false;
        this.moveForms = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    FormActionTextsComponent.prototype.ngOnInit = function () {
    };
    FormActionTextsComponent.prototype.toggleFormMovements = function () {
        this.slideElements = !this.slideElements;
        this.moveForms.emit(this.slideElements);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], FormActionTextsComponent.prototype, "moveForms", void 0);
    FormActionTextsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form-action-texts',
            template: __webpack_require__(/*! raw-loader!./form-action-texts.component.html */ "./node_modules/raw-loader/index.js!./src/app/forms/form-action-texts/form-action-texts.component.html"),
            styles: [__webpack_require__(/*! ./form-action-texts.component.scss */ "./src/app/forms/form-action-texts/form-action-texts.component.scss")]
        })
    ], FormActionTextsComponent);
    return FormActionTextsComponent;
}());



/***/ }),

/***/ "./src/app/forms/forms.component.scss":
/*!********************************************!*\
  !*** ./src/app/forms/forms.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-wrapper {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.form-wrapper .form-body {\n  position: relative;\n  display: flex;\n  width: 700px;\n  height: 400px;\n  box-shadow: -18px 19px 30px -11px rgba(0, 0, 0, 0.61);\n  border-radius: 10px;\n  overflow: hidden;\n}\n.form-wrapper .form-body app-login-form,\n.form-wrapper .form-body app-signup-form {\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybXMvQzpcXFVzZXJzXFxuemltYW5cXERlc2t0b3BcXHdlYlxcb3duX2dpdGh1YlxcbG9naW4tc2lnbnVwLXN3aXRjaC9zcmNcXGFwcFxcZm9ybXNcXGZvcm1zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb3Jtcy9mb3Jtcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNDRjtBRENFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFHQSxxREFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENJOztFQUVFLFVBQUE7QUNDTiIsImZpbGUiOiJzcmMvYXBwL2Zvcm1zL2Zvcm1zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0td3JhcHBlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgLmZvcm0tYm9keSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDcwMHB4O1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTE4cHggMTlweCAzMHB4IC0xMXB4IHJnYmEoMCwwLDAsMC42MSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IC0xOHB4IDE5cHggMzBweCAtMTFweCByZ2JhKDAsMCwwLDAuNjEpO1xyXG4gICAgYm94LXNoYWRvdzogLTE4cHggMTlweCAzMHB4IC0xMXB4IHJnYmEoMCwwLDAsMC42MSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICBhcHAtbG9naW4tZm9ybSxcclxuICAgIGFwcC1zaWdudXAtZm9ybSB7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5mb3JtLXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5mb3JtLXdyYXBwZXIgLmZvcm0tYm9keSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDcwMHB4O1xuICBoZWlnaHQ6IDQwMHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IC0xOHB4IDE5cHggMzBweCAtMTFweCByZ2JhKDAsIDAsIDAsIDAuNjEpO1xuICAtbW96LWJveC1zaGFkb3c6IC0xOHB4IDE5cHggMzBweCAtMTFweCByZ2JhKDAsIDAsIDAsIDAuNjEpO1xuICBib3gtc2hhZG93OiAtMThweCAxOXB4IDMwcHggLTExcHggcmdiYSgwLCAwLCAwLCAwLjYxKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5mb3JtLXdyYXBwZXIgLmZvcm0tYm9keSBhcHAtbG9naW4tZm9ybSxcbi5mb3JtLXdyYXBwZXIgLmZvcm0tYm9keSBhcHAtc2lnbnVwLWZvcm0ge1xuICB3aWR0aDogNTAlO1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FormsComponent = /** @class */ (function () {
    function FormsComponent() {
    }
    FormsComponent.prototype.moveForms = function (data) {
        this.initiateSlide = data;
    };
    FormsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forms',
            template: __webpack_require__(/*! raw-loader!./forms.component.html */ "./node_modules/raw-loader/index.js!./src/app/forms/forms.component.html"),
            styles: [__webpack_require__(/*! ./forms.component.scss */ "./src/app/forms/forms.component.scss")]
        })
    ], FormsComponent);
    return FormsComponent;
}());



/***/ }),

/***/ "./src/app/forms/login-form/login-form.component.scss":
/*!************************************************************!*\
  !*** ./src/app/forms/login-form/login-form.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  color: #362843;\n  text-align: center;\n}\n\nform {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  position: relative;\n}\n\nform input {\n  border: none;\n  background-color: #88d3ce;\n  border-radius: 4px;\n  outline: none;\n  color: #3D3943;\n  width: 75%;\n  font-weight: bold;\n  letter-spacing: 0.04rem;\n  font-family: inherit;\n  padding: 12px 0 12px 10px;\n}\n\nform input:not(:first-of-type) {\n  margin-top: 20px;\n}\n\nform small {\n  width: 75%;\n  padding-top: 5px;\n  text-align: left;\n  position: absolute;\n  font-weight: bold;\n  color: #ff5858;\n}\n\nform button {\n  background-color: #FF926B;\n  border-radius: 15px;\n  border: 1px solid transparent;\n  margin-top: 20px;\n  font-family: \"Roboto\", sans-serif;\n  color: white;\n  font-weight: 500;\n  padding: 8px 35px;\n  outline: none;\n  transition: all 0.2s ease-in-out;\n}\n\nform button:hover {\n  cursor: pointer;\n  color: #FF926B;\n  border-color: #FF926B;\n  background-color: transparent;\n}\n\nform button:focus {\n  outline: none;\n}\n\n/* Movement classes */\n\n.move-log-in-form {\n  margin-left: 350px;\n}\n\n.move-sign-up-form {\n  margin-left: 0 !important;\n}\n\n/* Form Validation classes */\n\n.hide-input-validation {\n  display: none;\n}\n\n:host {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  flex-direction: column;\n  background: white;\n}\n\n:host .login-form-body {\n  transition: all 0.6s ease-in-out;\n  transition-delay: 0.05s;\n  width: 100%;\n  transform: translateZ(0);\n  overflow: hidden;\n}\n\n:host .login-form-body small:nth-of-type(1) {\n  margin-top: 36px;\n}\n\n:host .login-form-body small:nth-of-type(2) {\n  margin-top: 97px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybXMvbG9naW4tZm9ybS9DOlxcVXNlcnNcXG56aW1hblxcRGVza3RvcFxcd2ViXFxvd25fZ2l0aHViXFxsb2dpbi1zaWdudXAtc3dpdGNoL3NyY1xcYXBwXFxmb3Jtc1xcbG9naW4tZm9ybVxcbG9naW4tZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZm9ybXMvbG9naW4tZm9ybS9sb2dpbi1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb3Jtcy9sb2dpbi1mb3JtL0M6XFxVc2Vyc1xcbnppbWFuXFxEZXNrdG9wXFx3ZWJcXG93bl9naXRodWJcXGxvZ2luLXNpZ251cC1zd2l0Y2gvc3RkaW4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBRENFO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtBQ0NKOztBRENJO0VBQ0UsZ0JBQUE7QUNDTjs7QURHRTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNESjs7QURJRTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtBQ0ZKOztBRElJO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0FDRk47O0FES0k7RUFDRSxhQUFBO0FDSE47O0FEUUEscUJBQUE7O0FBRUE7RUFDRSxrQkFBQTtBQ05GOztBRFNBO0VBQ0UseUJBQUE7QUNORjs7QURTQSw0QkFBQTs7QUFFQTtFQUNFLGFBQUE7QUNQRjs7QUNuRUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBRHNFRjs7QUNwRUU7RUFDRSxnQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QURzRUo7O0FDbkVNO0VBQ0UsZ0JBQUE7QURxRVI7O0FDbEVNO0VBQ0UsZ0JBQUE7QURvRVIiLCJmaWxlIjoic3JjL2FwcC9mb3Jtcy9sb2dpbi1mb3JtL2xvZ2luLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XHJcbiAgY29sb3I6ICMzNjI4NDM7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgaW5wdXQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg4ZDNjZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjb2xvcjogIzNEMzk0MztcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjA0cmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDAgMTJweCAxMHB4O1xyXG5cclxuICAgICY6bm90KDpmaXJzdC1vZi10eXBlKSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzbWFsbCB7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjZmY1ODU4O1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjkyNkI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHBhZGRpbmc6IDhweCAzNXB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgY29sb3I6ICNGRjkyNkI7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogI0ZGOTI2QjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiBNb3ZlbWVudCBjbGFzc2VzICovXHJcblxyXG4ubW92ZS1sb2ctaW4tZm9ybSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDM1MHB4O1xyXG59XHJcblxyXG4ubW92ZS1zaWduLXVwLWZvcm0ge1xyXG4gIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIEZvcm0gVmFsaWRhdGlvbiBjbGFzc2VzICovXHJcblxyXG4uaGlkZS1pbnB1dC12YWxpZGF0aW9uIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbiIsImgyIHtcbiAgY29sb3I6ICMzNjI4NDM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmZvcm0gaW5wdXQge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4OGQzY2U7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6ICMzRDM5NDM7XG4gIHdpZHRoOiA3NSU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNHJlbTtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIHBhZGRpbmc6IDEycHggMCAxMnB4IDEwcHg7XG59XG5mb3JtIGlucHV0Om5vdCg6Zmlyc3Qtb2YtdHlwZSkge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuZm9ybSBzbWFsbCB7XG4gIHdpZHRoOiA3NSU7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZmY1ODU4O1xufVxuZm9ybSBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY5MjZCO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZzogOHB4IDM1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuZm9ybSBidXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjRkY5MjZCO1xuICBib3JkZXItY29sb3I6ICNGRjkyNkI7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuZm9ybSBidXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4vKiBNb3ZlbWVudCBjbGFzc2VzICovXG4ubW92ZS1sb2ctaW4tZm9ybSB7XG4gIG1hcmdpbi1sZWZ0OiAzNTBweDtcbn1cblxuLm1vdmUtc2lnbi11cC1mb3JtIHtcbiAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbn1cblxuLyogRm9ybSBWYWxpZGF0aW9uIGNsYXNzZXMgKi9cbi5oaWRlLWlucHV0LXZhbGlkYXRpb24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbjpob3N0IC5sb2dpbi1mb3JtLWJvZHkge1xuICB0cmFuc2l0aW9uOiBhbGwgMC42cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4wNXM7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG46aG9zdCAubG9naW4tZm9ybS1ib2R5IHNtYWxsOm50aC1vZi10eXBlKDEpIHtcbiAgbWFyZ2luLXRvcDogMzZweDtcbn1cbjpob3N0IC5sb2dpbi1mb3JtLWJvZHkgc21hbGw6bnRoLW9mLXR5cGUoMikge1xuICBtYXJnaW4tdG9wOiA5N3B4O1xufSIsIkBpbXBvcnQgXCIuLi9jb21tb24vY29tbW9uLWZvcm1zXCI7XHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG5cclxuICAubG9naW4tZm9ybS1ib2R5IHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjZzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbi1kZWxheTogLjA1cztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICBzbWFsbCB7XHJcbiAgICAgICY6bnRoLW9mLXR5cGUoMSkge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDM2cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bnRoLW9mLXR5cGUoMikge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDk3cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG4iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(formBuild, loginService) {
        this.formBuild = formBuild;
        this.loginService = loginService;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["ReplaySubject"](1);
        this.loginChecker = {
            email: true,
            password: true
        };
    }
    Object.defineProperty(LoginFormComponent.prototype, "loginEmail", {
        get: function () {
            return this.loginForm.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginFormComponent.prototype, "loginPassword", {
        get: function () {
            return this.loginForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    LoginFormComponent.prototype.onSubmitLogin = function () {
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
        this.signInSubmitted = true;
        this.loginService.postLoginData(this.loginForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1))
            .subscribe(function (response) { return console.log('Success'); }, function (error) { return console.log(error); });
    };
    LoginFormComponent.prototype.ngOnInit = function () {
        var _this = this;
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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroyed$))
            .subscribe(function (value) {
            // handles hiding error messages when typing is detected
            if (value.email !== '') {
                _this.loginChecker.email = true;
            }
            if (value.password !== '') {
                _this.loginChecker.password = true;
            }
        });
    };
    LoginFormComponent.prototype.ngOnDestroy = function () {
        this.destroyed$.next(true);
        this.destroyed$.complete();
    };
    LoginFormComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }
    ]; };
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
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/app/forms/sign-up-form/sign-up-form.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/forms/sign-up-form/sign-up-form.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  color: #362843;\n  text-align: center;\n}\n\nform {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  position: relative;\n}\n\nform input {\n  border: none;\n  background-color: #88d3ce;\n  border-radius: 4px;\n  outline: none;\n  color: #3D3943;\n  width: 75%;\n  font-weight: bold;\n  letter-spacing: 0.04rem;\n  font-family: inherit;\n  padding: 12px 0 12px 10px;\n}\n\nform input:not(:first-of-type) {\n  margin-top: 20px;\n}\n\nform small {\n  width: 75%;\n  padding-top: 5px;\n  text-align: left;\n  position: absolute;\n  font-weight: bold;\n  color: #ff5858;\n}\n\nform button {\n  background-color: #FF926B;\n  border-radius: 15px;\n  border: 1px solid transparent;\n  margin-top: 20px;\n  font-family: \"Roboto\", sans-serif;\n  color: white;\n  font-weight: 500;\n  padding: 8px 35px;\n  outline: none;\n  transition: all 0.2s ease-in-out;\n}\n\nform button:hover {\n  cursor: pointer;\n  color: #FF926B;\n  border-color: #FF926B;\n  background-color: transparent;\n}\n\nform button:focus {\n  outline: none;\n}\n\n/* Movement classes */\n\n.move-log-in-form {\n  margin-left: 350px;\n}\n\n.move-sign-up-form {\n  margin-left: 0 !important;\n}\n\n/* Form Validation classes */\n\n.hide-input-validation {\n  display: none;\n}\n\n:host {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  flex-direction: column;\n  background: white;\n}\n\n:host .signup-form-body {\n  transition: all 0.6s ease-in-out;\n  transition-delay: 0.05s;\n  width: 100%;\n  transform: translateZ(0);\n  overflow: hidden;\n  margin-left: -350px;\n}\n\n:host .signup-form-body small:nth-of-type(1) {\n  margin-top: 36px;\n}\n\n:host .signup-form-body small:nth-of-type(2) {\n  margin-top: 97px;\n}\n\n:host .signup-form-body small:nth-of-type(3) {\n  margin-top: 157px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybXMvc2lnbi11cC1mb3JtL0M6XFxVc2Vyc1xcbnppbWFuXFxEZXNrdG9wXFx3ZWJcXG93bl9naXRodWJcXGxvZ2luLXNpZ251cC1zd2l0Y2gvc3JjXFxhcHBcXGZvcm1zXFxzaWduLXVwLWZvcm1cXHNpZ24tdXAtZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZm9ybXMvc2lnbi11cC1mb3JtL3NpZ24tdXAtZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZm9ybXMvc2lnbi11cC1mb3JtL0M6XFxVc2Vyc1xcbnppbWFuXFxEZXNrdG9wXFx3ZWJcXG93bl9naXRodWJcXGxvZ2luLXNpZ251cC1zd2l0Y2gvc3RkaW4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBRENFO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtBQ0NKOztBRENJO0VBQ0UsZ0JBQUE7QUNDTjs7QURHRTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNESjs7QURJRTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtBQ0ZKOztBRElJO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0FDRk47O0FES0k7RUFDRSxhQUFBO0FDSE47O0FEUUEscUJBQUE7O0FBRUE7RUFDRSxrQkFBQTtBQ05GOztBRFNBO0VBQ0UseUJBQUE7QUNORjs7QURTQSw0QkFBQTs7QUFFQTtFQUNFLGFBQUE7QUNQRjs7QUNuRUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBRHNFRjs7QUNwRUU7RUFDRSxnQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBRHNFSjs7QUNuRU07RUFDRSxnQkFBQTtBRHFFUjs7QUNsRU07RUFDRSxnQkFBQTtBRG9FUjs7QUNqRU07RUFDRSxpQkFBQTtBRG1FUiIsImZpbGUiOiJzcmMvYXBwL2Zvcm1zL3NpZ24tdXAtZm9ybS9zaWduLXVwLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XHJcbiAgY29sb3I6ICMzNjI4NDM7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgaW5wdXQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg4ZDNjZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjb2xvcjogIzNEMzk0MztcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjA0cmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDAgMTJweCAxMHB4O1xyXG5cclxuICAgICY6bm90KDpmaXJzdC1vZi10eXBlKSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzbWFsbCB7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjZmY1ODU4O1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjkyNkI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHBhZGRpbmc6IDhweCAzNXB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgY29sb3I6ICNGRjkyNkI7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogI0ZGOTI2QjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiBNb3ZlbWVudCBjbGFzc2VzICovXHJcblxyXG4ubW92ZS1sb2ctaW4tZm9ybSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDM1MHB4O1xyXG59XHJcblxyXG4ubW92ZS1zaWduLXVwLWZvcm0ge1xyXG4gIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIEZvcm0gVmFsaWRhdGlvbiBjbGFzc2VzICovXHJcblxyXG4uaGlkZS1pbnB1dC12YWxpZGF0aW9uIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbiIsImgyIHtcbiAgY29sb3I6ICMzNjI4NDM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmZvcm0gaW5wdXQge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4OGQzY2U7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6ICMzRDM5NDM7XG4gIHdpZHRoOiA3NSU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNHJlbTtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIHBhZGRpbmc6IDEycHggMCAxMnB4IDEwcHg7XG59XG5mb3JtIGlucHV0Om5vdCg6Zmlyc3Qtb2YtdHlwZSkge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuZm9ybSBzbWFsbCB7XG4gIHdpZHRoOiA3NSU7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZmY1ODU4O1xufVxuZm9ybSBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY5MjZCO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZzogOHB4IDM1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuZm9ybSBidXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjRkY5MjZCO1xuICBib3JkZXItY29sb3I6ICNGRjkyNkI7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuZm9ybSBidXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4vKiBNb3ZlbWVudCBjbGFzc2VzICovXG4ubW92ZS1sb2ctaW4tZm9ybSB7XG4gIG1hcmdpbi1sZWZ0OiAzNTBweDtcbn1cblxuLm1vdmUtc2lnbi11cC1mb3JtIHtcbiAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbn1cblxuLyogRm9ybSBWYWxpZGF0aW9uIGNsYXNzZXMgKi9cbi5oaWRlLWlucHV0LXZhbGlkYXRpb24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbjpob3N0IC5zaWdudXAtZm9ybS1ib2R5IHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNnMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMDVzO1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tbGVmdDogLTM1MHB4O1xufVxuOmhvc3QgLnNpZ251cC1mb3JtLWJvZHkgc21hbGw6bnRoLW9mLXR5cGUoMSkge1xuICBtYXJnaW4tdG9wOiAzNnB4O1xufVxuOmhvc3QgLnNpZ251cC1mb3JtLWJvZHkgc21hbGw6bnRoLW9mLXR5cGUoMikge1xuICBtYXJnaW4tdG9wOiA5N3B4O1xufVxuOmhvc3QgLnNpZ251cC1mb3JtLWJvZHkgc21hbGw6bnRoLW9mLXR5cGUoMykge1xuICBtYXJnaW4tdG9wOiAxNTdweDtcbn0iLCJAaW1wb3J0IFwiLi4vY29tbW9uL2NvbW1vbi1mb3Jtc1wiO1xyXG46aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuXHJcbiAgLnNpZ251cC1mb3JtLWJvZHkge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNnMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAuMDVzO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0zNTBweDtcclxuXHJcbiAgICBzbWFsbCB7XHJcbiAgICAgICY6bnRoLW9mLXR5cGUoMSkge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDM2cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bnRoLW9mLXR5cGUoMikge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDk3cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bnRoLW9mLXR5cGUoMykge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1N3B4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuIl19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_signup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/signup.service */ "./src/app/services/signup.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var SignUpFormComponent = /** @class */ (function () {
    function SignUpFormComponent(formBuild, signUpService) {
        this.formBuild = formBuild;
        this.signUpService = signUpService;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["ReplaySubject"](1);
        this.signUpChecker = {
            email: true,
            password: true,
            name: true
        };
    }
    Object.defineProperty(SignUpFormComponent.prototype, "signUpEmail", {
        get: function () {
            return this.signUpForm.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignUpFormComponent.prototype, "signUpName", {
        get: function () {
            return this.signUpForm.get('name');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignUpFormComponent.prototype, "signUpPassword", {
        get: function () {
            return this.signUpForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    SignUpFormComponent.prototype.onSubmitSignUp = function () {
        // check the password, email and name fields
        if ((this.signUpForm.value.email === '' && this.signUpForm.value.password === '' && this.signUpForm.value.name === '') ||
            this.signUpForm.controls.email.status === 'INVALID' &&
                this.signUpForm.controls.password.status === 'INVALID' &&
                this.signUpForm.controls.name.status === 'INVALID') {
            this.signUpChecker.email = false;
            this.signUpChecker.password = false;
            this.signUpChecker.name = false;
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
        this.signUpSubmitted = true;
        this.signUpService.postSignUpData(this.signUpForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1))
            .subscribe(function (response) { return console.log('Success'); }, function (error) { return console.log(error); });
    };
    SignUpFormComponent.prototype.ngOnInit = function () {
        this.signUpForm = this.formBuild.group({
            name: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
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
    };
    SignUpFormComponent.prototype.ngOnDestroy = function () {
        this.destroyed$.next(true);
        this.destroyed$.complete();
    };
    SignUpFormComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_signup_service__WEBPACK_IMPORTED_MODULE_3__["SignupService"] }
    ]; };
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
    return SignUpFormComponent;
}());



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        // TODO post the data to a built access point
        this.loginUrl = 'localhost..';
    }
    LoginService.prototype.postLoginData = function (loginForm) {
        return this.http.post(this.loginUrl, loginForm.value);
    };
    LoginService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/signup.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/signup.service.ts ***!
  \********************************************/
/*! exports provided: SignupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupService", function() { return SignupService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SignupService = /** @class */ (function () {
    function SignupService(http) {
        this.http = http;
        this.signUpUrl = 'localhost..';
    }
    SignupService.prototype.postSignUpData = function (signUpForm) {
        return this.http.post(this.signUpUrl, signUpForm.value);
    };
    SignupService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    SignupService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], SignupService);
    return SignupService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\nziman\Desktop\web\own_github\login-signup-switch\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map