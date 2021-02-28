(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-register-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding\">\n  <ion-slides mode=\"md\" [options]=\"slideOpts\">\n    <ion-slide>\n      <ion-button (click)=\"back()\" fill=\"clear\" class=\"backBtn\">\n        <ion-icon slot=\"start\" name=\"arrow-back-outline\" color=\"primary\"></ion-icon>\n      </ion-button>\n      <div class=\"emailForm\">\n        <h2 class=\"ion-text-center\">{{'Sign Up' |  translate}}</h2>\n        <p class=\"subtitle ion-text-center\">Enter your profile detail to <br>access your account </p>\n        <ion-item lines=\"none\">\n          <ion-input type=\"email\" [(ngModel)]=\"user.email\" [placeholder]=\"('Email' | translate )\"></ion-input>\n        </ion-item>\n        <ion-button class=\"btn_class\" color=\"primary\" (click)=\"emailValidation()\" expand=\"block\" [disabled]=\"isLogin\">\n\n          <span *ngIf=\"!isLogin\"> {{'Next' |  translate}}</span>\n          <ion-spinner name=\"circles\" *ngIf=\"isLogin\"></ion-spinner>\n        </ion-button>\n      </div>\n    </ion-slide>\n\n    <!-- <ion-slide>\n      <ion-button (click)=\"back()\" fill=\"clear\" class=\"backBtn\">\n        <ion-icon slot=\"start\" name=\"arrow-back-outline\" color=\"primary\"></ion-icon>\n      </ion-button>\n      <div class=\"emailForm\">\n        <p class=\"subtitle ion-text-center\">Create Strong Password for your account </p>\n        <ion-item lines=\"none\">\n          <ion-input type=\"password\" [(ngModel)]=\"user.password\" placeholder=\"Password\"></ion-input>\n        </ion-item>\n        <ion-button class=\"btn_class\" color=\"primary\" (click)=\"password()\" expand=\"block\">\n          Next\n        </ion-button>\n      </div>\n    </ion-slide> -->\n\n    <ion-slide>\n      <ion-button (click)=\"prev()\" fill=\"clear\" class=\"backBtn\">\n        <ion-icon slot=\"start\" name=\"arrow-back-outline\" color=\"primary\"></ion-icon>\n      </ion-button>\n      <div class=\"emailForm\">\n        <ion-item lines=\"none\">\n          <ion-input type=\"text\" [(ngModel)]=\"user.first_name\" [placeholder]=\"('First Name' | translate )\"></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-input type=\"text\" [(ngModel)]=\"user.last_name\" [placeholder]=\"('Last Name' | translate )\"></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-input type=\"number\" [(ngModel)]=\"user.phone\" [placeholder]=\"('Phone Number' | translate )\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type=\"password\" [(ngModel)]=\"user.password\" [placeholder]=\"('Password' | translate )\"></ion-input>\n        </ion-item>\n        <ion-button class=\"btn_class\" color=\"primary\" (click)=\"submit()\" expand=\"block\" [disabled]=\"isLogin\">\n          <span *ngIf=\"!isLogin\"> {{'Submit' | translate}}</span>\n          <ion-spinner name=\"circles\" *ngIf=\"isLogin\"></ion-spinner>\n        </ion-button>\n      </div>\n    </ion-slide>\n  </ion-slides>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/register/register-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/register/register-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "./src/app/pages/register/register.page.ts");




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/register/register.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.module.ts ***!
  \***************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "./src/app/pages/register/register-routing.module.ts");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/pages/register/register.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");








let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "./src/app/pages/register/register.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-slides {\n  height: 90vh;\n}\n\n.backBtn {\n  position: absolute;\n  top: 20px;\n  left: 0;\n}\n\nh2 {\n  color: var(--ion-color-primary) !important;\n}\n\np {\n  color: var(--ion-color-primary) !important;\n}\n\nion-item {\n  --ion-background-color:#f3f3f3;\n  border-radius: 5px !important;\n  margin-top: 10px;\n}\n\n.btn_class {\n  color: var(--ion-color-primary);\n  height: 50px;\n  margin-top: 20px;\n}\n\n.emailForm {\n  text-align: center;\n  width: 100%;\n}\n\n.emailForm .login-logo {\n  text-align: center;\n  margin: auto;\n  right: 0px;\n  left: 0px;\n  margin-top: 30%;\n  margin-bottom: 20px;\n}\n\n.emailForm .login-logo .logo_icon {\n  width: 110px !important;\n}\n\n.emailForm .back_img {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  width: 95% !important;\n  height: 25vh;\n  border: 1px solid var(--ion-color-primary);\n  border-radius: 5px;\n}\n\n.emailForm .back_img .gender {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  width: 25px !important;\n  height: 25px;\n  position: absolute;\n  right: 20px;\n  top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvRjpcXExCUyAgSEFDS1xcQXBwX2NvZGVcXFJlc3RhdXJhbnRBcHAvc3JjXFxhcHBcXHBhZ2VzXFxyZWdpc3RlclxccmVnaXN0ZXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxZQUFBO0FDQUo7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0FDQ0o7O0FEQ0E7RUFDSSwwQ0FBQTtBQ0VKOztBREFBO0VBQ0ksMENBQUE7QUNHSjs7QUREQTtFQUNJLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQ0lKOztBREZDO0VBQ0csK0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNLSjs7QURIQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQ01KOztBRExJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNPUjs7QUROUTtFQUNJLHVCQUFBO0FDUVo7O0FETEs7RUFDRywyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0FDT1I7O0FETFE7RUFDSSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDT1oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1zbGlkZXN7XG4gICAgaGVpZ2h0OiA5MHZoO1xufVxuLmJhY2tCdG57XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjBweDtcbiAgICBsZWZ0OiAwO1xufVxuaDJ7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xufVxucHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XG59XG5pb24taXRlbXtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNmM2YzZjM7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cbiAuYnRuX2NsYXNze1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmVtYWlsRm9ybXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLmxvZ2luLWxvZ28ge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAzMCU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIC5sb2dvX2ljb257XG4gICAgICAgICAgICB3aWR0aDogMTEwcHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAgLmJhY2tfaW1ne1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6IDI1dmg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTs7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgLy8gYm94LXNoYWRvdzogNnB4IDZweCAyMHB4IDBweCB3aGl0ZTtcbiAgICAgICAgLmdlbmRlcntcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgICAgICB3aWR0aDogMjVweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiA5MHZoO1xufVxuXG4uYmFja0J0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMHB4O1xuICBsZWZ0OiAwO1xufVxuXG5oMiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcbn1cblxucCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNmM2YzZjM7XG4gIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uYnRuX2NsYXNzIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uZW1haWxGb3JtIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cbi5lbWFpbEZvcm0gLmxvZ2luLWxvZ28ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogYXV0bztcbiAgcmlnaHQ6IDBweDtcbiAgbGVmdDogMHB4O1xuICBtYXJnaW4tdG9wOiAzMCU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uZW1haWxGb3JtIC5sb2dpbi1sb2dvIC5sb2dvX2ljb24ge1xuICB3aWR0aDogMTEwcHggIWltcG9ydGFudDtcbn1cbi5lbWFpbEZvcm0gLmJhY2tfaW1nIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIHdpZHRoOiA5NSUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAyNXZoO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5lbWFpbEZvcm0gLmJhY2tfaW1nIC5nZW5kZXIge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgd2lkdGg6IDI1cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xuICB0b3A6IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/register/register.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/register/register.page.ts ***!
  \*************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/apis.service */ "./src/app/services/apis.service.ts");







let RegisterPage = class RegisterPage {
    constructor(location, util, api, navCtrl) {
        this.location = location;
        this.util = util;
        this.api = api;
        this.navCtrl = navCtrl;
        this.user = {
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            gender: 'male',
            phone: '',
            address: '',
            avatar: ''
        };
        this.slideOpts = {
            slidesPerView: 1,
            allowTouchMove: false
        };
        this.submitted = false;
        this.isLogin = false;
    }
    ngOnInit() {
    }
    goNext() {
        this.slides.slideNext(500).then(d => console.log(d));
    }
    emailValidation() {
        console.log('user', this.user);
        const emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
        if (this.user.email === '' || !this.user.email) {
            this.util.showToast(this.util.translate('Please enter email'), 'danger', 'bottom');
            return false;
        }
        if (!(emailfilter.test(this.user.email))) {
            this.util.showToast(this.util.translate('Please enter valid email'), 'danger', 'bottom');
            return false;
        }
        this.isLogin = true;
        this.api.checkEmail(this.user.email).then((datas) => {
            this.isLogin = false;
            if (!datas.length) {
                this.goNext();
            }
            else {
                this.util.hide();
                this.util.showErrorAlert(this.util.translate('this email id is already register, please use another to login'));
                return false;
            }
        }, error => {
            this.isLogin = false;
            this.util.hide();
            this.util.errorToast(this.util.translate('Something went wrong'));
        }).catch((error) => {
            this.isLogin = false;
            this.util.hide();
            this.util.errorToast(this.util.translate('Something went wrong'));
        });
    }
    prev() {
        this.slides.slidePrev(1000).then(d => console.log(d));
    }
    back() {
        this.location.back();
    }
    submit() {
        this.isLogin = true;
        this.api.register(this.user.email, this.user.password, this.user.first_name, this.user.last_name).then((data) => {
            console.log(data);
            this.isLogin = false;
            if (data && data.uid) {
                localStorage.setItem('uid', data.uid);
                this.navCtrl.navigateRoot(['/']);
            }
        }).catch(error => {
            console.log(error);
            this.isLogin = false;
            this.util.showToast(`${error}`, 'danger', 'bottom');
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
], RegisterPage.prototype, "slides", void 0);
RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.page.scss */ "./src/app/pages/register/register.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"],
        src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], RegisterPage);



/***/ })

}]);
//# sourceMappingURL=pages-register-register-module-es2015.js.map