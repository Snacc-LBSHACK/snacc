function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-reset-reset-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reset/reset.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reset/reset.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesResetResetPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\" color=\"dark\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{'Forgot Password?' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"login-logo\">\n    <img src=\"assets/icon.png\" class=\"logo_icon\" alt=\"yoga\">\n  </div>\n\n  <form #loginForm=\"ngForm\" novalidate>\n    <ion-list lines=\"none\">\n      <ion-item lines=\"none\">\n        <ion-input [(ngModel)]=\"login.email\" [placeholder]=\"('Email' | translate )\" name=\"email\" #email=\"ngModel\" spellcheck=\"false\"\n          autocapitalize=\"off\" required>\n        </ion-input>\n      </ion-item>\n      <ion-text color=\"danger\">\n        <p [hidden]=\"email.valid || submitted == false\" class=\"ion-padding-start\">\n          {{'Email is required' | translate}}\n        </p>\n      </ion-text>\n\n      <ion-row class=\"ion-no-margin ion-no-padding\" style=\"margin-top: 20px;\">\n        <ion-col class=\"ion-no-margin ion-no-padding\">\n          <ion-button class=\"btn_class\" (click)=\"onLogin(loginForm)\" type=\"submit\" expand=\"block\">\n            {{'Send Link' | translate}}\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-list>\n  </form>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/reset/reset-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/reset/reset-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: ResetPageRoutingModule */

  /***/
  function srcAppPagesResetResetRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetPageRoutingModule", function () {
      return ResetPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _reset_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./reset.page */
    "./src/app/pages/reset/reset.page.ts");

    var routes = [{
      path: '',
      component: _reset_page__WEBPACK_IMPORTED_MODULE_3__["ResetPage"]
    }];

    var ResetPageRoutingModule = function ResetPageRoutingModule() {
      _classCallCheck(this, ResetPageRoutingModule);
    };

    ResetPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ResetPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/reset/reset.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/reset/reset.module.ts ***!
    \*********************************************/

  /*! exports provided: ResetPageModule */

  /***/
  function srcAppPagesResetResetModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetPageModule", function () {
      return ResetPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _reset_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./reset-routing.module */
    "./src/app/pages/reset/reset-routing.module.ts");
    /* harmony import */


    var _reset_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./reset.page */
    "./src/app/pages/reset/reset.page.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var ResetPageModule = function ResetPageModule() {
      _classCallCheck(this, ResetPageModule);
    };

    ResetPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _reset_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResetPageRoutingModule"]],
      declarations: [_reset_page__WEBPACK_IMPORTED_MODULE_6__["ResetPage"]]
    })], ResetPageModule);
    /***/
  },

  /***/
  "./src/app/pages/reset/reset.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/pages/reset/reset.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesResetResetPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".login-logo {\n  text-align: center;\n  margin: auto;\n  right: 0px;\n  left: 0px;\n  margin-top: 30%;\n  margin-bottom: 20px;\n}\n.login-logo .logo_icon {\n  width: 110px !important;\n}\n.login-logo .login-name {\n  margin: 0px;\n  font-size: 1.5rem;\n}\n.login-logo .subTitle {\n  margin: 0px;\n  font-size: 1rem;\n}\n.frgTag {\n  text-align: right;\n  color: var(--ion-color-primary);\n}\n.btn_class {\n  color: white;\n  height: 50px;\n}\n.login-logo img {\n  max-width: 150px;\n}\n.list {\n  margin-bottom: 0;\n}\nion-list {\n  --ion-background-color:transparent;\n  margin: 0px;\n}\nion-item {\n  --ion-background-color:#f3f3f3;\n  border-radius: 5px !important;\n  margin-top: 10px;\n}\n.createAcc {\n  text-align: center;\n}\n.createAcc .registerTag {\n  color: var(--ion-color-primary);\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVzZXQvRjpcXExCUyAgSEFDS1xcQXBwX2NvZGVcXFJlc3RhdXJhbnRBcHAvc3JjXFxhcHBcXHBhZ2VzXFxyZXNldFxccmVzZXQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9yZXNldC9yZXNldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUU7RUFDTSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0NSO0FEQVE7RUFDSSx1QkFBQTtBQ0VaO0FEQVE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7QUNFWjtBREFRO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUNFWjtBRENJO0VBQ1EsaUJBQUE7RUFDQSwrQkFBQTtBQ0VaO0FEQUk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQ0dSO0FEREk7RUFDSyxnQkFBQTtBQ0lUO0FERkk7RUFDSSxnQkFBQTtBQ0tSO0FESEk7RUFDSSxrQ0FBQTtFQUNBLFdBQUE7QUNNUjtBREpJO0VBQ0ssOEJBQUE7RUFDRCw2QkFBQTtFQUNBLGdCQUFBO0FDT1I7QURIRztFQUNJLGtCQUFBO0FDTVA7QURMTztFQUNLLCtCQUFBO0VBQ0EsaUJBQUE7QUNPWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Jlc2V0L3Jlc2V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgLmxvZ2luLWxvZ28ge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAzMCU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIC5sb2dvX2ljb257XG4gICAgICAgICAgICB3aWR0aDogMTEwcHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAubG9naW4tbmFtZXtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgLnN1YlRpdGxle1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmZyZ1RhZ3tcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIH1cbiAgICAuYnRuX2NsYXNze1xuICAgICAgICBjb2xvcjogd2hpdGUgO1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgfVxuICAgIC5sb2dpbi1sb2dvIGltZyB7XG4gICAgICAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICAgIH1cbiAgICAubGlzdCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuICAgIGlvbi1saXN0e1xuICAgICAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICB9XG4gICAgaW9uLWl0ZW17XG4gICAgICAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNmM2YzZjM7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBcbiAgICB9XG4gIFxuICAgLmNyZWF0ZUFjY3tcbiAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgLnJlZ2lzdGVyVGFne1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTs7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICB9XG4gICB9ICIsIi5sb2dpbi1sb2dvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IGF1dG87XG4gIHJpZ2h0OiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgbWFyZ2luLXRvcDogMzAlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmxvZ2luLWxvZ28gLmxvZ29faWNvbiB7XG4gIHdpZHRoOiAxMTBweCAhaW1wb3J0YW50O1xufVxuLmxvZ2luLWxvZ28gLmxvZ2luLW5hbWUge1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG4ubG9naW4tbG9nbyAuc3ViVGl0bGUge1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4uZnJnVGFnIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5idG5fY2xhc3Mge1xuICBjb2xvcjogd2hpdGU7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLmxvZ2luLWxvZ28gaW1nIHtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbn1cblxuLmxpc3Qge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG5pb24tbGlzdCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XG4gIG1hcmdpbjogMHB4O1xufVxuXG5pb24taXRlbSB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2YzZjNmMztcbiAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5jcmVhdGVBY2Mge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY3JlYXRlQWNjIC5yZWdpc3RlclRhZyB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/reset/reset.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/reset/reset.page.ts ***!
    \*******************************************/

  /*! exports provided: ResetPage */

  /***/
  function srcAppPagesResetResetPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetPage", function () {
      return ResetPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/apis.service */
    "./src/app/services/apis.service.ts");

    var ResetPage = /*#__PURE__*/function () {
      function ResetPage(navCtrl, util, api) {
        _classCallCheck(this, ResetPage);

        this.navCtrl = navCtrl;
        this.util = util;
        this.api = api;
        this.login = {
          email: ''
        };
        this.submitted = false;
      }

      _createClass(ResetPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onLogin",
        value: function onLogin(form) {
          var _this = this;

          console.log('form', form);
          this.submitted = true;

          if (form.valid) {
            var emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;

            if (!emailfilter.test(this.login.email)) {
              this.util.showToast(this.util.translate('Please enter valid email'), 'danger', 'bottom');
              return false;
            }

            this.util.show();
            this.api.resetPassword(this.login.email).then(function (data) {
              _this.util.hide();

              _this.util.showToast(_this.util.translate('Reset Password link is sent to your email'), 'dark', 'bottom');

              console.log('sent', data);

              _this.navCtrl.back();
            }, function (error) {
              console.log(error);

              _this.util.hide();

              _this.util.errorToast(_this.util.translate('Something went wrong'));
            })["catch"](function (error) {
              console.log(error);

              _this.util.hide();

              _this.util.errorToast(_this.util.translate('Something went wrong'));
            });
          }
        }
      }]);

      return ResetPage;
    }();

    ResetPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]
      }, {
        type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"]
      }];
    };

    ResetPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-reset',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./reset.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reset/reset.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./reset.page.scss */
      "./src/app/pages/reset/reset.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"]])], ResetPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-reset-reset-module-es5.js.map