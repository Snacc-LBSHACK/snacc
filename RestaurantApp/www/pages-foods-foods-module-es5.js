function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-foods-foods-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/foods/foods.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/foods/foods.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesFoodsFoodsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{'Foods' | translate}}</ion-title>\n    <ion-button (click)=\"addnew()\" slot=\"end\" fill=\"clear\" color=\"light\">\n      <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"mainContent\">\n    <h2 class=\"ion-text-center\" *ngIf=\"!dummy?.length && !categories?.length\">{{'No Foods Found' | translate}}</h2>\n    <ion-item *ngFor=\"let item of dummy\">\n      <ion-thumbnail slot=\"start\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-thumbnail>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <div *ngFor=\"let item of categories\">\n      <ion-label class=\"head_lbl\">{{item.name}}</ion-label>\n\n      <div *ngFor=\"let food of foods;\">\n        <span *ngIf=\"item.id == food.cid.id\" class=\"card_div\" (click)=\"foodsInfo(food)\">\n          <!-- <div class=\"back_image\" [style.backgroundImage]=\"'url('+food.cover+')'\"></div> -->\n          <img [src]=\"food.cover\" class=\"back_image\" alt=\"\">\n          <div class=\"content_div\">\n            <ion-label class=\"title\">{{food.name}}</ion-label>\n            <ion-label class=\"small\">{{food.desc}}</ion-label>\n            <ion-label *ngIf=\"food.veg\" class=\"veg\">Veg</ion-label>\n            <ion-label *ngIf=\"!food.veg\" class=\"nonVeg\">Non Veg</ion-label>\n\n            <ion-label class=\"title\">{{getCurrency()}} {{food.price}}</ion-label>\n          </div>\n        </span>\n      </div>\n\n    </div>\n\n\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/foods/foods-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/foods/foods-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: FoodsPageRoutingModule */

  /***/
  function srcAppPagesFoodsFoodsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FoodsPageRoutingModule", function () {
      return FoodsPageRoutingModule;
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


    var _foods_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./foods.page */
    "./src/app/pages/foods/foods.page.ts");

    var routes = [{
      path: '',
      component: _foods_page__WEBPACK_IMPORTED_MODULE_3__["FoodsPage"]
    }];

    var FoodsPageRoutingModule = function FoodsPageRoutingModule() {
      _classCallCheck(this, FoodsPageRoutingModule);
    };

    FoodsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FoodsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/foods/foods.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/foods/foods.module.ts ***!
    \*********************************************/

  /*! exports provided: FoodsPageModule */

  /***/
  function srcAppPagesFoodsFoodsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FoodsPageModule", function () {
      return FoodsPageModule;
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


    var _foods_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./foods-routing.module */
    "./src/app/pages/foods/foods-routing.module.ts");
    /* harmony import */


    var _foods_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./foods.page */
    "./src/app/pages/foods/foods.page.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var FoodsPageModule = function FoodsPageModule() {
      _classCallCheck(this, FoodsPageModule);
    };

    FoodsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _foods_routing_module__WEBPACK_IMPORTED_MODULE_5__["FoodsPageRoutingModule"]],
      declarations: [_foods_page__WEBPACK_IMPORTED_MODULE_6__["FoodsPage"]]
    })], FoodsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/foods/foods.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/pages/foods/foods.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesFoodsFoodsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mainContent {\n  padding: 20px;\n}\n.mainContent .head_lbl {\n  font-weight: 600;\n  font-size: 20px;\n  display: block;\n  margin-bottom: 10px;\n}\n.mainContent .card_div {\n  display: flex;\n  flex-direction: row;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n  padding: 15px;\n  margin-bottom: 15px;\n}\n.mainContent .card_div .back_image {\n  width: 90px;\n  height: 90px;\n  border-radius: 5px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.mainContent .card_div .content_div {\n  padding-left: 20px;\n}\n.mainContent .card_div .content_div ion-label {\n  display: flex;\n}\n.mainContent .card_div .content_div .title {\n  font-weight: 600;\n  font-size: 16px;\n}\n.mainContent .card_div .content_div .small {\n  color: gray;\n  font-size: 14px;\n}\n.mainContent .card_div .content_div .veg {\n  color: green;\n}\n.mainContent .card_div .content_div .nonVeg {\n  color: red;\n}\n.mainContent .card_div .content_div .lonveg {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZm9vZHMvRjpcXExCUyAgSEFDS1xcQXBwX2NvZGVcXFJlc3RhdXJhbnRBcHAvc3JjXFxhcHBcXHBhZ2VzXFxmb29kc1xcZm9vZHMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9mb29kcy9mb29kcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7QUR5Q0k7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUN2Q1I7QUQ0Q0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDMUNSO0FEMkNRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQ3pDWjtBRDJDUTtFQUNJLGtCQUFBO0FDekNaO0FEMENZO0VBQ0ksYUFBQTtBQ3hDaEI7QUQyQ1k7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUN6Q2hCO0FEMkNZO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUN6Q2hCO0FEMkNZO0VBQ0ksWUFBQTtBQ3pDaEI7QUQyQ1k7RUFDSSxVQUFBO0FDekNoQjtBRDJDWTtFQUNJLCtCQUFBO0FDekNoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Zvb2RzL2Zvb2RzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluQ29udGVudHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIC8vIC5jYXRlTmFtZXtcbiAgICAvLyAgICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgICAvLyAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgLy8gICAgIGNvbG9yOiBibGFjaztcbiAgICAvLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgLy8gfVxuICAgIC8vIC5mb29kc3tcbiAgICAvLyAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIC8vICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIC8vICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIC8vICAgICBib3gtc2hhZG93OiAwcHggMXB4IDE0cHggMnB4IGxpZ2h0Z3JleTtcbiAgICAvLyAgICAgLmJnQ292ZXJ7XG4gICAgLy8gICAgICAgICB3aWR0aDogOTBweDtcbiAgICAvLyAgICAgICAgIGhlaWdodDogOTBweDtcbiAgICAvLyAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAvLyAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAvLyAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgLy8gICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC8vICAgICB9IFxuICAgIC8vICAgICAubmFtZXtcbiAgICAvLyAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgIC8vICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgLy8gICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAvLyAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgLmRlc2NyaXB0aW9ue1xuICAgIC8vICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgLy8gICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgLnByaWNle1xuICAgIC8vICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgLy8gICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgLmNhdGV7XG4gICAgLy8gICAgICAgICBtYXJnaW46IDBweDtcbiAgICAvLyAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAvLyAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cblxuICAgIC5oZWFkX2xibHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG5cblxuXG4gICAgLmNhcmRfZGl2e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4ICA2cHggcmdiYSgwLDAsMCwwLjIpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgIC5iYWNrX2ltYWdle1xuICAgICAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudF9kaXZ7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC50aXRsZXtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zbWFsbHtcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudmVne1xuICAgICAgICAgICAgICAgIGNvbG9yOiBncmVlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ub25WZWd7XG4gICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5sb252ZWd7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbn1cbiIsIi5tYWluQ29udGVudCB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4ubWFpbkNvbnRlbnQgLmhlYWRfbGJsIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5tYWluQ29udGVudCAuY2FyZF9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5tYWluQ29udGVudCAuY2FyZF9kaXYgLmJhY2tfaW1hZ2Uge1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiA5MHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5tYWluQ29udGVudCAuY2FyZF9kaXYgLmNvbnRlbnRfZGl2IHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuLm1haW5Db250ZW50IC5jYXJkX2RpdiAuY29udGVudF9kaXYgaW9uLWxhYmVsIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5tYWluQ29udGVudCAuY2FyZF9kaXYgLmNvbnRlbnRfZGl2IC50aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5tYWluQ29udGVudCAuY2FyZF9kaXYgLmNvbnRlbnRfZGl2IC5zbWFsbCB7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ubWFpbkNvbnRlbnQgLmNhcmRfZGl2IC5jb250ZW50X2RpdiAudmVnIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuLm1haW5Db250ZW50IC5jYXJkX2RpdiAuY29udGVudF9kaXYgLm5vblZlZyB7XG4gIGNvbG9yOiByZWQ7XG59XG4ubWFpbkNvbnRlbnQgLmNhcmRfZGl2IC5jb250ZW50X2RpdiAubG9udmVnIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/foods/foods.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/foods/foods.page.ts ***!
    \*******************************************/

  /*! exports provided: FoodsPage */

  /***/
  function srcAppPagesFoodsFoodsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FoodsPage", function () {
      return FoodsPage;
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


    var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/apis.service */
    "./src/app/services/apis.service.ts");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");

    var FoodsPage = /*#__PURE__*/function () {
      function FoodsPage(router, api, util) {
        _classCallCheck(this, FoodsPage);

        this.router = router;
        this.api = api;
        this.util = util;
        this.foods = [];
        this.categories = [];
        this.dummy = Array(50);
      }

      _createClass(FoodsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.getFoods();
        }
      }, {
        key: "getFoods",
        value: function getFoods() {
          var _this = this;

          this.api.getVenueCategories(localStorage.getItem('uid')).then(function (data) {
            console.log(data);
            _this.dummy = [];

            if (data) {
              _this.categories = data;

              _this.api.getFoods(localStorage.getItem('uid')).then(function (data) {
                console.log(data);

                if (data) {
                  _this.foods = data;
                }
              }, function (error) {
                console.log(error);
                _this.dummy = [];

                _this.util.errorToast(_this.util.translate('Something went wrong'));
              })["catch"](function (error) {
                _this.dummy = [];
                console.log(error);

                _this.util.errorToast(_this.util.translate('Something went wrong'));
              });
            }
          }, function (error) {
            console.log(error);
            _this.dummy = [];

            _this.util.errorToast(_this.util.translate('Something went wrong'));
          })["catch"](function (error) {
            console.log(error);
            _this.dummy = [];

            _this.util.errorToast(_this.util.translate('Something went wrong'));
          });
        }
      }, {
        key: "addnew",
        value: function addnew() {
          this.router.navigate(['/add-new-foods']);
        }
      }, {
        key: "foodsInfo",
        value: function foodsInfo(item) {
          console.log(item);
          var navData = {
            queryParams: {
              id: item.id
            }
          };
          this.router.navigate(['add-new-foods'], navData);
        }
      }, {
        key: "getCurrency",
        value: function getCurrency() {
          return this.util.getCurrecySymbol();
        }
      }]);

      return FoodsPage;
    }();

    FoodsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]
      }];
    };

    FoodsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-foods',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./foods.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/foods/foods.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./foods.page.scss */
      "./src/app/pages/foods/foods.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]])], FoodsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-foods-foods-module-es5.js.map