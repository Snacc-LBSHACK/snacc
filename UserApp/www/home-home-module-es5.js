function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"ios\">\n  <!-- <ion-toolbar [hidden]=\"headerHidden\" class=\"animated fadeInDown\" *ngIf=\"haveLocation\"> -->\n  <ion-toolbar>\n    <div class=\"deliveryAddress\">\n      <img src=\"assets/pin.png\" alt=\"\" class=\"pin\" (click)=\"changeLocation()\">\n      <p class=\"address\" (click)=\"changeLocation()\"> {{cityName | slice:0:25}}</p>\n      <div class=\"userPhoto\" [style.backgroundImage]=\"'url('+ profile +')'\" *ngIf=\"profile\"></div>\n      <div class=\"userPhoto\" [style.backgroundImage]=\"'url(assets/user.png)'\" *ngIf=\"!profile\"></div>\n    </div>\n    <div class=\"div_searchbar\">\n      <ion-searchbar animated=\"true\" mode=\"ios\" [placeholder]=\"('Search Restaurants' | translate) || '&nbsp;'\"\n        (ionChange)=\"onSearchChange($event)\" [debounce]=\"250\" class=\"search_bar\"></ion-searchbar>\n    </div>\n  </ion-toolbar>\n  <div class=\"chips_div animated fadeInDown\" *ngIf=\"allRest?.length\">\n    <ion-label class=\"chip\" *ngFor=\"let item of chips;let i = index\" (click)=\"addFilter(i)\">{{item}}</ion-label>\n  </div>\n  <ion-item>\n    <ion-label> <span *ngIf=\"!nearme\">{{'Near Me' | translate}}</span> <span\n        *ngIf=\"nearme\">{{'All Rest' | translate}}</span> </ion-label>\n    <ion-toggle slot=\"end\" (ionChange)=\"nearMe()\" [(ngModel)]=\"nearme\"></ion-toggle>\n  </ion-item>\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\" (ionScroll)=\"onScroll($event)\">\n  <div class=\"main_content_div\">\n    <ion-slides [options]=\"slideOpts\" *ngIf=\"banners?.length && allRest?.length\">\n      <ion-slide *ngFor=\"let item of banners\" (click)=\"openOffers(item)\">\n        <div class=\"back_image\" [ngStyle]=\"{'background-image':'url('+item.banner+')'}\">\n        </div>\n      </ion-slide>\n    </ion-slides>\n    <div class=\"noData\" *ngIf=\"!dummy?.length && !allRest?.length\" [style.backgroundImage]=\"'url(assets/nothing.jpg)'\">\n\n    </div>\n    <p style=\"font-weight: bold;text-align: center;\" *ngIf=\"!dummy?.length && !allRest?.length\">\n      {{'No Restaurants Found!' | translate}}\n    </p>\n    <div *ngFor=\"let item of dummy\">\n      <ion-list>\n        <ion-item>\n          <ion-thumbnail slot=\"start\">\n            <ion-skeleton-text animated></ion-skeleton-text>\n          </ion-thumbnail>\n          <ion-label>\n            <h3>\n              <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n            </h3>\n            <p>\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n            </p>\n            <p>\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n            </p>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n    </div>\n    <div class=\"card_div\">\n      <ion-row [className]=\"item && item.status =='close' ? 'cardClosed ion-no-padding':'card ion-no-padding'\"\n        *ngFor=\"let item of allRest\">\n        <ion-col size=\"4\">\n          <div class=\"image_div\" (click)=\"openMenu(item)\" [style.backgroundImage]=\"'url('+item.cover+')'\"></div>\n        </ion-col>\n        <ion-col size=\"6\">\n          <div class=\"desc_div\" (click)=\"openMenu(item)\">\n            <ion-label class=\"heading_lbl\">{{item.name}}</ion-label>\n            <ion-label class=\"small_lbl\">{{getCusine(item.cusine)}}</ion-label>\n            <ion-label class=\"small_lbl\">{{item.dishPrice}}{{getCurrency()}} {{'per person' | translate}} |\n              {{item.time}}\n              {{'min' | translate}}</ion-label>\n\n          </div>\n        </ion-col>\n        <ion-col size=\"2\">\n          <div class=\"ratting\">\n            <ion-label class=\"rateNumber\">{{item.ratting}}</ion-label>\n          </div>\n          <p class=\"closed\" *ngIf=\"item && item.status =='close'\">{{'Closed' | translate}}</p>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/UserGuard/auth.guard.ts":
  /*!*****************************************!*\
    !*** ./src/app/UserGuard/auth.guard.ts ***!
    \*****************************************/

  /*! exports provided: UserGuard */

  /***/
  function srcAppUserGuardAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserGuard", function () {
      return UserGuard;
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

    var UserGuard = /*#__PURE__*/function () {
      function UserGuard(navCtrl) {
        _classCallCheck(this, UserGuard);

        this.navCtrl = navCtrl;
      }

      _createClass(UserGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var selectedCity = localStorage.getItem('selectedCity');
          console.log('selectedCity', localStorage.getItem('selectedCity'));

          if (selectedCity && selectedCity != null && selectedCity !== 'null') {
            return true;
          }

          this.navCtrl.navigateRoot(['/cities']);
          return false;
        }
      }]);

      return UserGuard;
    }();

    UserGuard.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    UserGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], UserGuard);
    /***/
  },

  /***/
  "./src/app/pages/home/home-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/home/home-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: HomePageRoutingModule */

  /***/
  function srcAppPagesHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
      return HomePageRoutingModule;
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


    var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/pages/home/home.page.ts");
    /* harmony import */


    var src_app_UserGuard_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/UserGuard/auth.guard */
    "./src/app/UserGuard/auth.guard.ts");

    var routes = [{
      path: '',
      component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
      canActivate: [src_app_UserGuard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["UserGuard"]]
    }];

    var HomePageRoutingModule = function HomePageRoutingModule() {
      _classCallCheck(this, HomePageRoutingModule);
    };

    HomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/home/home.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/home/home.module.ts ***!
    \*******************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppPagesHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
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


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/pages/home/home-routing.module.ts");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/pages/home/home.page.ts");
    /* harmony import */


    var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/directives/shared.module */
    "./src/app/directives/shared.module.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"], src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/pages/home/home.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/home/home.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-toolbar:last-child {\n  --border-width: 0px;\n}\n\n.animated {\n  background-repeat: no-repeat;\n  background-position: left top;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n@-webkit-keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-20px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n  }\n}\n\n@keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown;\n}\n\n.header-md:after {\n  background: none;\n}\n\n.deliveryAddress {\n  display: flex;\n  justify-content: space-between;\n  padding: 20px 10px 0px 10px;\n}\n\n.deliveryAddress .pin {\n  width: 25px;\n  height: 25px;\n}\n\n.deliveryAddress .address {\n  font-size: 1rem;\n  margin: 0px;\n}\n\n.deliveryAddress .userPhoto {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.div_searchbar {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-top: 8px;\n}\n\n.div_searchbar .search_bar {\n  padding: 0px;\n  width: 100%;\n}\n\n.chips_div {\n  display: flex;\n  flex-direction: row;\n  overflow: scroll;\n  scrollbar-width: none;\n  /* Firefox */\n  -ms-overflow-style: none;\n  /* Internet Explorer 10+ */\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.chips_div ::-webkit-scrollbar {\n  width: 0px;\n  background: transparent;\n}\n\n.chips_div ::-webkit-scrollbar-thumb {\n  background: transparent;\n}\n\n.chips_div .chip {\n  border-radius: 3px;\n  padding: 5px 20px;\n  margin-right: 10px;\n  white-space: nowrap;\n  color: lightgray;\n  font-size: 12px;\n  font-weight: bold;\n  border: 1px solid lightgray;\n  border-radius: 5px;\n}\n\n.chips_div .selected {\n  border-radius: 3px;\n  padding: 5px 20px;\n  margin-right: 10px;\n  white-space: nowrap;\n  background: var(--ion-color-primary);\n  color: white;\n  font-size: 12px;\n  font-weight: bold;\n  border: 1px solid lightgray;\n  border-radius: 5px;\n}\n\n.heading {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n  align-items: center;\n  margin-bottom: 10px;\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\n.heading .heading_lbl {\n  font-size: 20px;\n  display: block;\n  text-align: left;\n  color: var(--ion-color-primary);\n}\n\n.heading .small_lbl {\n  font-size: 12px;\n  color: lightgray;\n}\n\n.main_content_div {\n  padding: 16px;\n}\n\n.main_content_div .back_image {\n  height: 150px;\n  margin-left: 10px;\n  margin-bottom: 10px;\n  width: 100%;\n  border-radius: 20px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.main_content_div .noData {\n  border-radius: 10px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  width: 100%;\n  height: 250px;\n}\n\n.main_content_div .heading {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n  align-items: center;\n  margin-bottom: 10px;\n}\n\n.main_content_div .heading .heading_lbl {\n  font-size: 20px;\n  display: block;\n  text-align: left;\n  color: var(--ion-color-primary);\n}\n\n.main_content_div .heading .small_lbl {\n  font-size: 12px;\n  color: lightgray;\n}\n\n.main_content_div .slider_div .card {\n  margin-top: 15px;\n}\n\n.main_content_div .slider_div .card .back_image {\n  height: 200px;\n  width: 250px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 10px;\n  position: relative;\n}\n\n.main_content_div .slider_div .card .back_image .time_lbl {\n  padding: 10px;\n  position: absolute;\n  background: white;\n  bottom: 15px;\n  right: 15px;\n  border-radius: 25px;\n  font-size: 12px;\n}\n\n.main_content_div .slider_div .card .heading_lbl {\n  font-size: 20px;\n  display: block;\n  margin-top: 10px;\n  text-align: left;\n}\n\n.main_content_div .slider_div .card .price_rating {\n  display: flex;\n  height: 25px;\n  align-items: flex-start;\n}\n\n.main_content_div .slider_div .card .price_rating .rating {\n  color: var(--ion-color-primary);\n  font-size: 15px;\n  margin-left: 10px;\n}\n\n.main_content_div .slider_div .card .price_rating .red_lbl {\n  color: var(--ion-color-primary);\n  font-size: 12px;\n}\n\n.main_content_div .slider_div .card .price_rating .small_lbl {\n  font-size: 12px;\n  color: lightgray;\n}\n\n.main_content_div .card_div .heading {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n  align-items: center;\n  margin-bottom: 10px;\n}\n\n.main_content_div .card_div .heading .heading_lbl {\n  font-size: 20px;\n  display: block;\n  text-align: left;\n  color: var(--ion-color-primary);\n}\n\n.main_content_div .card_div .heading .small_lbl {\n  font-size: 12px;\n  color: lightgray;\n}\n\n.main_content_div .card_div .card {\n  display: flex;\n  width: 100%;\n  flex-direction: row;\n}\n\n.main_content_div .card_div .card .image_div {\n  border-radius: 10px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%;\n  height: 100px;\n}\n\n.main_content_div .card_div .card .desc_div .heading_lbl {\n  font-size: 1rem;\n  display: block;\n  text-align: left;\n}\n\n.main_content_div .card_div .card .desc_div .small_lbl {\n  font-size: 0.8rem;\n  color: lightgray;\n  display: block;\n  text-align: left;\n}\n\n.main_content_div .card_div .card .ratting {\n  background: green;\n  padding: 2px 5px;\n  text-align: center;\n}\n\n.main_content_div .card_div .card .ratting .rateNumber {\n  color: white;\n  font-size: 0.8rem;\n}\n\n.main_content_div .card_div .cardClosed {\n  display: flex;\n  width: 100%;\n  flex-direction: row;\n  background: #ebebeb;\n  margin: 10px 0px;\n  border-radius: 15px;\n}\n\n.main_content_div .card_div .cardClosed .image_div {\n  border-radius: 10px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%;\n  height: 100px;\n}\n\n.main_content_div .card_div .cardClosed .desc_div .heading_lbl {\n  font-size: 1rem;\n  display: block;\n  text-align: left;\n}\n\n.main_content_div .card_div .cardClosed .desc_div .small_lbl {\n  font-size: 0.8rem;\n  color: lightgray;\n  display: block;\n  text-align: left;\n}\n\n.main_content_div .card_div .cardClosed .ratting {\n  background: green;\n  padding: 2px 5px;\n  text-align: center;\n}\n\n.main_content_div .card_div .cardClosed .ratting .rateNumber {\n  color: white;\n  font-size: 0.8rem;\n}\n\n.main_content_div .card_div .cardClosed .closed {\n  position: absolute;\n  bottom: 0px;\n  right: 0px;\n  color: var(--ion-color-primary);\n  font-weight: bold;\n  border-radius: 5px;\n  font-size: 1rem;\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9GOlxcTEJTICBIQUNLXFxBcHBfY29kZVxcVXNlckFwcC9zcmNcXGFwcFxccGFnZXNcXGhvbWVcXGhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksbUJBQUE7QUNBSjs7QURFQztFQUNHLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVJO0VBQ0k7SUFDSSxVQUFBO0lBQ0Esb0NBQUE7RUNDVjtFRENNO0lBQ0ksVUFBQTtJQUNBLGdDQUFBO0VDQ1Y7QUFDRjs7QURFSTtFQUNBO0lBQ0ksVUFBQTtJQUNBLDRCQUFBO0VDQU47RURFRTtJQUNJLFVBQUE7SUFDQSx3QkFBQTtFQ0FOO0FBQ0Y7O0FER0k7RUFDSSxrQ0FBQTtFQUNBLDBCQUFBO0FDRFI7O0FER0E7RUFDSSxnQkFBQTtBQ0FKOztBREVBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsMkJBQUE7QUNDSjs7QURBSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDRVI7O0FEQUk7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQ0VSOztBREFJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQ0VSOztBRENBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFFQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDQ1I7O0FESUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQXVCLFlBQUE7RUFDdkIsd0JBQUE7RUFBMkIsMEJBQUE7RUFDM0Isa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURBSTtFQUNJLFVBQUE7RUFDQSx1QkFBQTtBQ0VSOztBREFJO0VBQ0ksdUJBQUE7QUNFUjs7QURBSTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FDRVI7O0FEQUk7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUNFUjs7QURFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FEQ0k7RUFDSSxlQUFBO0VBRUEsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7QUNBUjs7QURFSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0FSOztBRElBO0VBQ0ksYUFBQTtBQ0RKOztBREVJO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUNBUjs7QURFSTtFQUNJLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNBUjs7QURFSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNBUjs7QURFUTtFQUNJLGVBQUE7RUFFQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtBQ0RaOztBREdRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDRFo7O0FET1E7RUFDSSxnQkFBQTtBQ0xaOztBRE1ZO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDSmhCOztBRE1nQjtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNKcEI7O0FEUVk7RUFDSSxlQUFBO0VBRUEsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNQaEI7O0FEU1k7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FDUGhCOztBRFFnQjtFQUNJLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDTnBCOztBRFFnQjtFQUNJLCtCQUFBO0VBQ0EsZUFBQTtBQ05wQjs7QURTZ0I7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNQcEI7O0FEZVE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDYlo7O0FEZVk7RUFDSSxlQUFBO0VBRUEsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7QUNkaEI7O0FEZ0JZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDZGhCOztBRGtCUTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNoQlo7O0FEa0JZO0VBQ0ksbUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ2hCaEI7O0FEbUJnQjtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNqQnBCOztBRG1CZ0I7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDakJwQjs7QURxQlk7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNuQmhCOztBRG9CZ0I7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUNsQnBCOztBRHNCUTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNwQlo7O0FEcUJZO0VBQ0ksbUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ25CaEI7O0FEc0JnQjtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNwQnBCOztBRHNCZ0I7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDcEJwQjs7QUR3Qlk7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUN0QmhCOztBRHVCZ0I7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUNyQnBCOztBRHdCWTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSwrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ3RCaEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24tdG9vbGJhcjpsYXN0LWNoaWxkIHtcbiAgICAtLWJvcmRlci13aWR0aDogMHB4O1xufVxuIC5hbmltYXRlZCB7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IHRvcDtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgICB9XG4gICAgXG4gICAgQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbkRvd24ge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIEBrZXlmcmFtZXMgZmFkZUluRG93biB7XG4gICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIH1cbiAgICB9XG4gICAgXG4gICAgLmZhZGVJbkRvd24ge1xuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Eb3duO1xuICAgICAgICBhbmltYXRpb24tbmFtZTogZmFkZUluRG93bjtcbn1cbi5oZWFkZXItbWQ6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG59XG4uZGVsaXZlcnlBZGRyZXNze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDIwcHggMTBweCAwcHggMTBweDtcbiAgICAucGlue1xuICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgIH1cbiAgICAuYWRkcmVzc3tcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICB9XG4gICAgLnVzZXJQaG90b3tcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgfVxufVxuLmRpdl9zZWFyY2hiYXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICAgIHBhZGRpbmctdG9wOiA4cHg7XG5cbiAgICAuc2VhcmNoX2JhcntcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICBcbn1cblxuLmNoaXBzX2RpdntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7IC8qIEZpcmVmb3ggKi9cbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7ICAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMCsgKi9cbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgd2lkdGg6IDBweDsgXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuICAgIC5jaGlwe1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIHBhZGRpbmc6IDVweCAyMHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIGNvbG9yOiBsaWdodGdyYXk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cbiAgICAuc2VsZWN0ZWR7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgcGFkZGluZzogNXB4IDIwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cbn1cblxuLmhlYWRpbmd7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG5cbiAgICAuaGVhZGluZ19sYmx7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgLy9mb250LWZhbWlseTogb3Blbi1ib2xkO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICB9XG4gICAgLnNtYWxsX2xibHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBjb2xvcjogbGlnaHRncmF5O1xuICAgICAgICAvLy8vZm9udC1mYW1pbHk6IG9wZW4tcmVndWxhcjtcbiAgICB9XG59XG4ubWFpbl9jb250ZW50X2RpdntcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIC5iYWNrX2ltYWdle1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB9XG4gICAgLm5vRGF0YXtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIH1cbiAgICAuaGVhZGluZ3tcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICAgICAgICAuaGVhZGluZ19sYmx7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAvL2ZvbnQtZmFtaWx5OiBvcGVuLWJvbGQ7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICB9XG4gICAgICAgIC5zbWFsbF9sYmx7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBjb2xvcjogbGlnaHRncmF5O1xuICAgICAgICAgICAgLy9mb250LWZhbWlseTogb3Blbi1yZWd1bGFyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnNsaWRlcl9kaXZ7XG4gICAgICAgIC5jYXJke1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgICAgIC5iYWNrX2ltYWdle1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgICAgICAgICAudGltZV9sYmx7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgLy9mb250LWZhbWlseTogb3Blbi1yZWd1bGFyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5oZWFkaW5nX2xibHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgLy9mb250LWZhbWlseTogb3Blbi1ib2xkO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcmljZV9yYXRpbmd7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDsgICAgIFxuICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDs7ICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAucmF0aW5ne1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucmVkX2xibHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICAvL2ZvbnQtZmFtaWx5OiBvcGVuLXJlZ3VsYXI7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuc21hbGxfbGJse1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBsaWdodGdyYXk7XG4gICAgICAgICAgICAgICAgICAgIC8vZm9udC1mYW1pbHk6IG9wZW4tcmVndWxhcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuY2FyZF9kaXZ7XG4gICAgICAgIC5oZWFkaW5ne1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG4gICAgICAgICAgICAuaGVhZGluZ19sYmx7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgIC8vZm9udC1mYW1pbHk6IG9wZW4tYm9sZDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc21hbGxfbGJse1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogbGlnaHRncmF5O1xuICAgICAgICAgICAgICAgIC8vZm9udC1mYW1pbHk6IG9wZW4tcmVndWxhcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuY2FyZHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAvLyBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgLmltYWdlX2RpdntcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kZXNjX2RpdntcbiAgICAgICAgICAgICAgICAuaGVhZGluZ19sYmx7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5zbWFsbF9sYmx7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogbGlnaHRncmF5O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmF0dGluZ3tcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAycHggNXB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAucmF0ZU51bWJlcntcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmRDbG9zZWR7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ViZWJlYjtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgLmltYWdlX2RpdntcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kZXNjX2RpdntcbiAgICAgICAgICAgICAgICAuaGVhZGluZ19sYmx7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5zbWFsbF9sYmx7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogbGlnaHRncmF5O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmF0dGluZ3tcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAycHggNXB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAucmF0ZU51bWJlcntcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2xvc2Vke1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW9uLXRvb2xiYXI6bGFzdC1jaGlsZCB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG59XG5cbi5hbmltYXRlZCB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgdG9wO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbkRvd24ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBmYWRlSW5Eb3duIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuLmZhZGVJbkRvd24ge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Eb3duO1xuICBhbmltYXRpb24tbmFtZTogZmFkZUluRG93bjtcbn1cblxuLmhlYWRlci1tZDphZnRlciB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi5kZWxpdmVyeUFkZHJlc3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDIwcHggMTBweCAwcHggMTBweDtcbn1cbi5kZWxpdmVyeUFkZHJlc3MgLnBpbiB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG59XG4uZGVsaXZlcnlBZGRyZXNzIC5hZGRyZXNzIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBtYXJnaW46IDBweDtcbn1cbi5kZWxpdmVyeUFkZHJlc3MgLnVzZXJQaG90byB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uZGl2X3NlYXJjaGJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgcGFkZGluZy10b3A6IDhweDtcbn1cbi5kaXZfc2VhcmNoYmFyIC5zZWFyY2hfYmFyIHtcbiAgcGFkZGluZzogMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNoaXBzX2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgLyogRmlyZWZveCAqL1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gIC8qIEludGVybmV0IEV4cGxvcmVyIDEwKyAqL1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5jaGlwc19kaXYgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAwcHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLmNoaXBzX2RpdiA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4uY2hpcHNfZGl2IC5jaGlwIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nOiA1cHggMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBjb2xvcjogbGlnaHRncmF5O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5jaGlwc19kaXYgLnNlbGVjdGVkIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nOiA1cHggMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5oZWFkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuLmhlYWRpbmcgLmhlYWRpbmdfbGJsIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbi5oZWFkaW5nIC5zbWFsbF9sYmwge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiBsaWdodGdyYXk7XG59XG5cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgcGFkZGluZzogMTZweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5iYWNrX2ltYWdlIHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubm9EYXRhIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI1MHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmhlYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmhlYWRpbmcgLmhlYWRpbmdfbGJsIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5oZWFkaW5nIC5zbWFsbF9sYmwge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiBsaWdodGdyYXk7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuc2xpZGVyX2RpdiAuY2FyZCB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuc2xpZGVyX2RpdiAuY2FyZCAuYmFja19pbWFnZSB7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAyNTBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuc2xpZGVyX2RpdiAuY2FyZCAuYmFja19pbWFnZSAudGltZV9sYmwge1xuICBwYWRkaW5nOiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3R0b206IDE1cHg7XG4gIHJpZ2h0OiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuc2xpZGVyX2RpdiAuY2FyZCAuaGVhZGluZ19sYmwge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLm1haW5fY29udGVudF9kaXYgLnNsaWRlcl9kaXYgLmNhcmQgLnByaWNlX3JhdGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMjVweDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuc2xpZGVyX2RpdiAuY2FyZCAucHJpY2VfcmF0aW5nIC5yYXRpbmcge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnNsaWRlcl9kaXYgLmNhcmQgLnByaWNlX3JhdGluZyAucmVkX2xibCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5zbGlkZXJfZGl2IC5jYXJkIC5wcmljZV9yYXRpbmcgLnNtYWxsX2xibCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IGxpZ2h0Z3JheTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdiAuaGVhZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYgLmhlYWRpbmcgLmhlYWRpbmdfbGJsIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdiAuaGVhZGluZyAuc21hbGxfbGJsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogbGlnaHRncmF5O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2IC5jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYgLmNhcmQgLmltYWdlX2RpdiB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYgLmNhcmQgLmRlc2NfZGl2IC5oZWFkaW5nX2xibCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYgLmNhcmQgLmRlc2NfZGl2IC5zbWFsbF9sYmwge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYgLmNhcmQgLnJhdHRpbmcge1xuICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgcGFkZGluZzogMnB4IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2IC5jYXJkIC5yYXR0aW5nIC5yYXRlTnVtYmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdiAuY2FyZENsb3NlZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBiYWNrZ3JvdW5kOiAjZWJlYmViO1xuICBtYXJnaW46IDEwcHggMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2IC5jYXJkQ2xvc2VkIC5pbWFnZV9kaXYge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2IC5jYXJkQ2xvc2VkIC5kZXNjX2RpdiAuaGVhZGluZ19sYmwge1xuICBmb250LXNpemU6IDFyZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2IC5jYXJkQ2xvc2VkIC5kZXNjX2RpdiAuc21hbGxfbGJsIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGNvbG9yOiBsaWdodGdyYXk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2IC5jYXJkQ2xvc2VkIC5yYXR0aW5nIHtcbiAgYmFja2dyb3VuZDogZ3JlZW47XG4gIHBhZGRpbmc6IDJweCA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdiAuY2FyZENsb3NlZCAucmF0dGluZyAucmF0ZU51bWJlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYgLmNhcmRDbG9zZWQgLmNsb3NlZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgcGFkZGluZzogNXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/home/home.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/home/home.page.ts ***!
    \*****************************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppPagesHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
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


    var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/android-permissions/ngx */
    "./node_modules/@ionic-native/android-permissions/ngx/index.js");
    /* harmony import */


    var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/diagnostic/ngx */
    "./node_modules/@ionic-native/diagnostic/ngx/index.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/apis.service */
    "./src/app/services/apis.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_11__);

    var HomePage = /*#__PURE__*/function () {
      function HomePage(platform, androidPermissions, diagnostic, geolocation, router, api, util, apis, modalController, navCtrl) {
        var _this = this;

        _classCallCheck(this, HomePage);

        this.platform = platform;
        this.androidPermissions = androidPermissions;
        this.diagnostic = diagnostic;
        this.geolocation = geolocation;
        this.router = router;
        this.api = api;
        this.util = util;
        this.apis = apis;
        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.allRest = [];
        this.chips = []; // address: any;

        this.dummyRest = [];
        this.dummy = Array(50);
        this.nearme = false;
        this.banners = [];
        this.slideOpts = {
          slidesPerView: 1.7
        };
        var currentLng = this.util.getLanguage();
        console.log('current language --->', currentLng);
        this.chips = [this.util.translate('Ratting 4.0+'), this.util.translate('Fastest Delivery'), this.util.translate('Cost')]; // ['Ratting 4.0+', 'Fastest Delivery', 'Cost'];

        this.haveLocation = false;

        if (this.platform.is('ios')) {
          this.plt = 'ios';
        } else {
          this.plt = 'android';
        }

        this.api.getBanners().then(function (data) {
          console.log(data);
          _this.banners = data;
        })["catch"](function (error) {
          console.log(error);
        });
        var city = JSON.parse(localStorage.getItem('selectedCity'));
        console.log(city);

        if (city && city.name) {
          this.cityName = city.name;
          this.cityId = city.id;
          this.getRest();
        }
      }

      _createClass(HomePage, [{
        key: "addFilter",
        value: function addFilter(index) {
          console.log(index);

          if (index === 0) {
            console.log('rating');
            this.allRest = Object(lodash__WEBPACK_IMPORTED_MODULE_10__["orderBy"])(this.allRest, 'ratting', 'desc');
          } else if (index === 1) {
            console.log('fast');
            this.allRest = Object(lodash__WEBPACK_IMPORTED_MODULE_10__["orderBy"])(this.allRest, 'time', 'asc');
          } else {
            console.log('cost');
            this.allRest = Object(lodash__WEBPACK_IMPORTED_MODULE_10__["orderBy"])(this.allRest, 'dishPrice', 'asc');
          }

          this.allRest = Object(lodash__WEBPACK_IMPORTED_MODULE_10__["uniqBy"])(this.allRest, 'id');
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.getLocation();
          this.getProfile();
        } // getAddressMy() {
        //   const add = JSON.parse(localStorage.getItem('deliveryAddress'));
        //   if (add && add.address) {
        //     this.address = add.address;
        //     this.lat = add.lat;
        //     this.lng = add.lng;
        //   }
        //   return this.address;
        // }

      }, {
        key: "getLocation",
        value: function getLocation() {
          var _this2 = this;

          this.platform.ready().then(function () {
            if (_this2.platform.is('android')) {
              _this2.androidPermissions.checkPermission(_this2.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION).then(function (result) {
                return console.log('Has permission?', result.hasPermission);
              }, function (err) {
                return _this2.androidPermissions.requestPermission(_this2.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION);
              });

              _this2.grantRequest();
            } else if (_this2.platform.is('ios')) {
              _this2.grantRequest();
            } else {
              _this2.geolocation.getCurrentPosition({
                maximumAge: 3000,
                timeout: 10000,
                enableHighAccuracy: false
              }).then(function (resp) {
                if (resp) {
                  console.log('resp', resp);
                  _this2.lat = resp.coords.latitude;
                  _this2.lng = resp.coords.longitude; // this.getAddress(this.lat, this.lng);
                }
              })["catch"](function (error) {
                console.log(error);

                _this2.grantRequest();
              });
            }
          });
        }
      }, {
        key: "grantRequest",
        value: function grantRequest() {
          var _this3 = this;

          this.diagnostic.isLocationEnabled().then(function (data) {
            if (data) {
              _this3.geolocation.getCurrentPosition({
                maximumAge: 3000,
                timeout: 10000,
                enableHighAccuracy: false
              }).then(function (resp) {
                if (resp) {
                  console.log('resp', resp);
                  _this3.lat = resp.coords.latitude;
                  _this3.lng = resp.coords.longitude; // this.getAddress(this.lat, this.lng);
                }
              })["catch"](function (error) {
                console.log(error);
              });
            } else {
              _this3.diagnostic.switchToLocationSettings();

              _this3.geolocation.getCurrentPosition({
                maximumAge: 3000,
                timeout: 10000,
                enableHighAccuracy: false
              }).then(function (resp) {
                if (resp) {
                  console.log('ress,', resp);
                  _this3.lat = resp.coords.latitude;
                  _this3.lng = resp.coords.longitude; // this.getAddress(this.lat, this.lng);
                }
              })["catch"](function (error) {
                console.log(error);
              });
            }
          }, function (error) {
            console.log('errir', error);
            _this3.dummy = [];
          })["catch"](function (error) {
            console.log('error', error);
            _this3.dummy = [];
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log('init');
        } // getAddress(lat, lng) {
        //   setTimeout(() => {
        //     this.haveLocation = true;
        //     const geocoder = new google.maps.Geocoder();
        //     const location = new google.maps.LatLng(lat, lng);
        //     geocoder.geocode({ 'location': location }, (results, status) => {
        //       console.log(results);
        //       console.log('status', status)
        //       if (results && results.length) {
        //         this.address = results[0].formatted_address;
        //         this.lat = lat;
        //         this.lng = lng;
        //         const address = {
        //           address: this.address,
        //           lat: this.lat,
        //           lng: this.lng,
        //           id: ''
        //         };
        //         localStorage.setItem('deliveryAddress', JSON.stringify(address));
        //       } else {
        //         this.dummy = [];
        //         this.util.errorToast('Something went wrong please try again later');
        //       }
        //     });
        //     localStorage.setItem('myLat', this.lat);
        //     localStorage.setItem('myLng', this.lng);
        //     this.getRest();
        //   }, 1000);
        // }

      }, {
        key: "degreesToRadians",
        value: function degreesToRadians(degrees) {
          return degrees * Math.PI / 180;
        }
      }, {
        key: "distanceInKmBetweenEarthCoordinates",
        value: function distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
          console.log(lat1, lon1, lat2, lon2);
          var earthRadiusKm = 6371;
          var dLat = this.degreesToRadians(lat2 - lat1);
          var dLon = this.degreesToRadians(lon2 - lon1);
          lat1 = this.degreesToRadians(lat1);
          lat2 = this.degreesToRadians(lat2);
          var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
          var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
          return earthRadiusKm * c;
        }
      }, {
        key: "getTime",
        value: function getTime(time) {
          return moment__WEBPACK_IMPORTED_MODULE_9__(time).format('mm');
        }
      }, {
        key: "presentModal",
        value: function presentModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.router.navigate(['choose-address']);

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "nearMe",
        value: function nearMe() {
          var _this4 = this;

          this.dummy = Array(50);
          this.allRest = [];

          if (this.nearme) {
            this.dummyRest.forEach(function (element) {
              return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var distance;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return this.distanceInKmBetweenEarthCoordinates(this.lat, this.lng, element.lat, element.lng);

                      case 2:
                        distance = _context2.sent;
                        console.log('distance', distance); // Distance

                        if (distance < 10) {
                          this.allRest.push(element);
                        }

                      case 5:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));
            });
            this.dummy = [];
          } else {
            this.allRest = this.dummyRest;
            this.dummy = [];
          }
        }
      }, {
        key: "getRest",
        value: function getRest() {
          var _this5 = this;

          this.dummy = Array(10);
          this.api.getVenues().then(function (data) {
            console.log(data);

            if (data && data.length) {
              _this5.allRest = [];
              data.forEach(function (element) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          if (element && element.isClose === false && element.city === this.cityId) {
                            element.time = moment__WEBPACK_IMPORTED_MODULE_9__(element.time).format('HH');
                            this.allRest.push(element);
                            this.dummyRest.push(element);
                          }

                        case 1:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3, this);
                }));
              });
              _this5.dummy = [];
            } else {
              _this5.allRest = [];
              _this5.dummy = [];
            }
          }, function (error) {
            console.log(error);
            _this5.dummy = [];
          })["catch"](function (error) {
            console.log(error);
            _this5.dummy = [];
          });
        }
      }, {
        key: "openMenu",
        value: function openMenu(item) {
          if (item && item.status === 'close') {
            return false;
          }

          var navData = {
            queryParams: {
              id: item.uid
            }
          };
          this.router.navigate(['category'], navData);
        }
      }, {
        key: "openOffers",
        value: function openOffers(item) {
          var navData = {
            queryParams: {
              id: item.restId
            }
          };
          this.router.navigate(['category'], navData);
        }
      }, {
        key: "onSearchChange",
        value: function onSearchChange(event) {
          console.log(event.detail.value);
          this.allRest = this.dummyRest.filter(function (ele) {
            return ele.name.toLowerCase().includes(event.detail.value.toLowerCase());
          });
        }
      }, {
        key: "getCusine",
        value: function getCusine(cusine) {
          return cusine.join('-');
        }
      }, {
        key: "onScroll",
        value: function onScroll(event) {
          if (event.detail.deltaY > 0 && this.headerHidden) return;
          if (event.detail.deltaY < 0 && !this.headerHidden) return;

          if (event.detail.deltaY > 80) {
            this.headerHidden = true;
          } else {
            this.headerHidden = false;
          }
        }
      }, {
        key: "getProfile",
        value: function getProfile() {
          var _this6 = this;

          if (localStorage.getItem('uid')) {
            this.apis.getProfile(localStorage.getItem('uid')).then(function (data) {
              console.log(data);

              if (data && data.cover) {
                _this6.profile = data.cover;
              }

              if (data && data.status === 'deactive') {
                localStorage.removeItem('uid');

                _this6.api.logout().then(function (data) {
                  console.log(data);
                });

                _this6.router.navigate(['login']);

                sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
                  title: 'Error',
                  text: 'Your are blocked please contact administrator',
                  icon: 'error',
                  showConfirmButton: true,
                  showCancelButton: true,
                  confirmButtonText: 'Need Help?',
                  backdrop: false,
                  background: 'white'
                }).then(function (data) {
                  if (data && data.value) {
                    _this6.router.navigate(['inbox']);
                  }
                });
              }
            }, function (err) {
              console.log('Err', err);
            })["catch"](function (e) {
              console.log('Err', e);
            });
          }
        }
      }, {
        key: "chipChange",
        value: function chipChange(item) {
          var _this7 = this;

          this.allRest = this.dummyRest;
          console.log(item);

          if (item === 'Fastest Delivery') {
            this.allRest.sort(function (a, b) {
              a = new Date(a.time);
              b = new Date(b.time);
              return a > b ? -1 : a < b ? 1 : 0;
            });
          }

          if (item === 'Ratting 4.0+') {
            this.allRest = [];
            this.dummyRest.forEach(function (ele) {
              if (ele.ratting >= 4) {
                _this7.allRest.push(ele);
              }
            });
          }

          if (item === 'Cost') {
            this.allRest.sort(function (a, b) {
              a = a.time;
              b = b.time;
              return a > b ? -1 : a < b ? 1 : 0;
            });
          }
        }
      }, {
        key: "changeLocation",
        value: function changeLocation() {
          this.navCtrl.navigateRoot(['cities']);
        }
      }, {
        key: "getCurrency",
        value: function getCurrency() {
          return this.util.getCurrecySymbol();
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"]
      }, {
        type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_2__["AndroidPermissions"]
      }, {
        type: _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_3__["Diagnostic"]
      }, {
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_6__["ApisService"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_8__["UtilService"]
      }, {
        type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_6__["ApisService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]
      }];
    };

    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/pages/home/home.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_2__["AndroidPermissions"], _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_3__["Diagnostic"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_6__["ApisService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_8__["UtilService"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_6__["ApisService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]])], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map