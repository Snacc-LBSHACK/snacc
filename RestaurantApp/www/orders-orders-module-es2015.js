(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orders-orders-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/orders/orders.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/orders/orders.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{'Our Orders' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n    <div class=\"segment_div\">\n      <ion-label [class.active]=\"seg_id == 1\" (click)=\"onClick(1)\">{{'New Order' | translate}}</ion-label>\n      <ion-label [class.active]=\"seg_id == 2\" (click)=\"onClick(2)\">{{'Ongoing Order' | translate}}</ion-label>\n      <ion-label [class.active]=\"seg_id == 3\" (click)=\"onClick(3)\">{{'Past Order' | translate}}</ion-label>\n    </div>\n\n    <div class=\"centent_div\" *ngIf=\"seg_id == 1\">\n      <h2 class=\"ion-text-center\" *ngIf=\"!dummy?.length && !newOrders?.length\">{{'No New Orders' | translate}}</h2>\n      <ion-item *ngFor=\"let item of dummy\">\n        <ion-thumbnail slot=\"start\">\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </ion-thumbnail>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n          <p>\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n          </p>\n        </ion-label>\n      </ion-item>\n      <div class=\"card_div\" *ngFor=\"let item of newOrders\" (click)=\"goToOrderDetail(item.id)\">\n\n        <div class=\"resto_detail\">\n          <div class=\"back_image\" [style.backgroundImage]=\"'url('+getProfilePic(item.uid)+')'\"></div>\n          <div style=\"margin-left: 10px;\">\n            <ion-label class=\"res_name\">{{item.uid.fullname}}</ion-label>\n            <ion-label class=\"res_location\">{{item.time}}</ion-label>\n            <ion-label class=\"res_location\">{{item.id}}</ion-label>\n          </div>\n\n          <!-- <div class=\"order_id\">\n            <ion-label>{{'Order ID' | translate}}</ion-label>\n            <ion-label style=\"font-size:.8rem\">{{item.id}}</ion-label>\n          </div> -->\n        </div>\n\n        <div class=\"line_div\"></div>\n\n        <div class=\"order_detail\">\n          <ion-label class=\"head_gray\">{{'ITEMS' | translate}}</ion-label>\n          <!-- <div class=\"small_lbl\">\n            <ion-label *ngFor=\"let order of item.order\">{{order.quantiy}} X {{order.name}} <span\n                class=\"prize\">{{getCurrency()}}{{order.price}}</span></ion-label>\n          </div> -->\n          <div class=\"small_lbl\">\n            <span *ngFor=\"let order of item.order;let ol = index\">\n              <div *ngIf=\"!order.selectedItem || !order.selectedItem.length\" class=\"border_bottom\">\n                {{order.name}} X {{order.quantiy}} <span *ngIf=\"ol !=item.order.length\">,</span>\n              </div>\n\n              <div *ngFor=\"let subItems of order.selectedItem;let j = index\" class=\"subNames\">\n                <ion-label class=\"food_title\">{{order.name}} X {{order.selectedItem[j].total}}</ion-label>\n                <div *ngFor=\"let addods of subItems.item\" class=\"flex_titles\">\n                  <p class=\"sub_name\">\n                    - {{addods.name}}\n                  </p>\n                  <p class=\"sub_name\">\n                    {{getCurrency()}} {{addods.value}}\n                  </p>\n                </div>\n              </div>\n            </span>\n          </div>\n          <ion-label class=\"head_gray\">{{'ORDERED ON' | translate}}</ion-label>\n          <ion-label class=\"small_lbl\">{{item.time}} </ion-label>\n          <ion-label class=\"head_gray\">{{'TOTAL AMOUNT' | translate}}</ion-label>\n          <ion-label class=\"small_lbl\">{{getCurrency()}}{{item.grandTotal}}</ion-label>\n        </div>\n\n      </div>\n    </div>\n\n    <div class=\"centent_div\" *ngIf=\"seg_id == 2\">\n      <h2 class=\"ion-text-center\" *ngIf=\"!dummy?.length && !onGoingOrders?.length\">{{'No New Orders' | translate}}</h2>\n      <ion-item *ngFor=\"let item of dummy\">\n        <ion-thumbnail slot=\"start\">\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </ion-thumbnail>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n          <p>\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n          </p>\n        </ion-label>\n      </ion-item>\n      <div class=\"card_div\" *ngFor=\"let item of onGoingOrders\" (click)=\"goToOrderDetail(item.id)\">\n\n        <div class=\"resto_detail\">\n          <div class=\"back_image\" [style.backgroundImage]=\"'url('+getProfilePic(item.uid)+')'\"></div>\n          <div style=\"margin-left: 10px;\">\n            <ion-label class=\"res_name\">{{item.uid.fullname}}</ion-label>\n            <ion-label class=\"res_location\">{{item.time}}</ion-label>\n            <ion-label class=\"res_location\">{{item.id}}</ion-label>\n          </div>\n\n          <!-- <div class=\"order_id\">\n            <ion-label>{{'Order ID' | translate}}</ion-label>\n            <ion-label style=\"font-size:.8rem\">{{item.id}}</ion-label>\n          </div> -->\n        </div>\n\n        <div class=\"line_div\"></div>\n\n        <div class=\"order_detail\">\n          <ion-label class=\"head_gray\">{{'ITEMS' | translate}}</ion-label>\n          <!-- <div class=\"small_lbl\">\n            <ion-label *ngFor=\"let order of item.order\">{{order.quantiy}} X {{order.name}} <span\n                class=\"prize\">{{getCurrency()}}{{order.price}}</span></ion-label>\n          </div> -->\n          <div class=\"small_lbl\">\n            <span *ngFor=\"let order of item.order;let ol = index\">\n              <div *ngIf=\"!order.selectedItem || !order.selectedItem.length\" class=\"border_bottom\">\n                {{order.name}} X {{order.quantiy}} <span *ngIf=\"ol !=item.order.length\">,</span>\n              </div>\n\n              <div *ngFor=\"let subItems of order.selectedItem;let j = index\" class=\"subNames\">\n                <ion-label class=\"food_title\">{{order.name}} X {{order.selectedItem[j].total}}</ion-label>\n                <div *ngFor=\"let addods of subItems.item\" class=\"flex_titles\">\n                  <p class=\"sub_name\">\n                    - {{addods.name}}\n                  </p>\n                  <p class=\"sub_name\">\n                    {{getCurrency()}} {{addods.value}}\n                  </p>\n                </div>\n              </div>\n            </span>\n          </div>\n          <ion-label class=\"head_gray\">{{'ORDERED ON' | translate}}</ion-label>\n          <ion-label class=\"small_lbl\">{{item.time}} </ion-label>\n          <ion-label class=\"head_gray\">{{'TOTAL AMOUNT' | translate}}</ion-label>\n          <ion-label class=\"small_lbl\">{{getCurrency()}}{{item.grandTotal}}</ion-label>\n        </div>\n\n      </div>\n    </div>\n\n    <div class=\"centent_div\" *ngIf=\"seg_id == 3\">\n      <h2 class=\"ion-text-center\" *ngIf=\"!dummy?.length && !oldOrders?.length\">{{'No New Orders' | translate}}</h2>\n      <ion-item *ngFor=\"let item of dummy\">\n        <ion-thumbnail slot=\"start\">\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </ion-thumbnail>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n          <p>\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n          </p>\n        </ion-label>\n      </ion-item>\n      <div class=\"card_div\" *ngFor=\"let item of oldOrders\" (click)=\"goToOrderDetail(item.id)\">\n\n        <div class=\"resto_detail\">\n          <div class=\"back_image\" [style.backgroundImage]=\"'url('+getProfilePic(item.uid)+')'\"></div>\n          <div style=\"margin-left: 10px;\">\n            <ion-label class=\"res_name\">{{item.uid.fullname}}</ion-label>\n            <ion-label class=\"res_location\">{{item.time}}</ion-label>\n            <ion-label class=\"res_location\">{{item.id}}</ion-label>\n          </div>\n\n          <!-- <div class=\"order_id\">\n            <ion-label>{{'Order ID' | translate}}</ion-label>\n            <ion-label style=\"font-size:.8rem\">{{item.id}}</ion-label>\n          </div> -->\n        </div>\n\n        <div class=\"line_div\"></div>\n\n        <div class=\"order_detail\">\n          <ion-label class=\"head_gray\">{{'ITEMS' | translate}}</ion-label>\n          <!-- <div class=\"small_lbl\">\n            <ion-label *ngFor=\"let order of item.order\">{{order.quantiy}} X {{order.name}} <span\n                class=\"prize\">{{getCurrency()}}{{order.price}}</span></ion-label>\n          </div> -->\n          <div class=\"small_lbl\">\n            <span *ngFor=\"let order of item.order;let ol = index\">\n              <div *ngIf=\"!order.selectedItem || !order.selectedItem.length\" class=\"border_bottom\">\n                {{order.name}} X {{order.quantiy}} <span *ngIf=\"ol !=item.order.length\">,</span>\n              </div>\n\n              <div *ngFor=\"let subItems of order.selectedItem;let j = index\" class=\"subNames\">\n                <ion-label class=\"food_title\">{{order.name}} X {{order.selectedItem[j].total}}</ion-label>\n                <div *ngFor=\"let addods of subItems.item\" class=\"flex_titles\">\n                  <p class=\"sub_name\">\n                    - {{addods.name}}\n                  </p>\n                  <p class=\"sub_name\">\n                    {{getCurrency()}} {{addods.value}}\n                  </p>\n                </div>\n              </div>\n            </span>\n          </div>\n          <ion-label class=\"head_gray\">{{'ORDERED ON' | translate}}</ion-label>\n          <ion-label class=\"small_lbl\">{{item.time}} </ion-label>\n          <ion-label class=\"head_gray\">{{'TOTAL AMOUNT' | translate}}</ion-label>\n          <ion-label class=\"small_lbl\">{{getCurrency()}}{{item.grandTotal}}</ion-label>\n        </div>\n\n      </div>\n    </div>\n\n\n\n\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/orders/orders-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/orders/orders-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: OrdersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPageRoutingModule", function() { return OrdersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _orders_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orders.page */ "./src/app/pages/orders/orders.page.ts");




const routes = [
    {
        path: '',
        component: _orders_page__WEBPACK_IMPORTED_MODULE_3__["OrdersPage"]
    }
];
let OrdersPageRoutingModule = class OrdersPageRoutingModule {
};
OrdersPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrdersPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/orders/orders.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/orders/orders.module.ts ***!
  \***********************************************/
/*! exports provided: OrdersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPageModule", function() { return OrdersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _orders_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./orders-routing.module */ "./src/app/pages/orders/orders-routing.module.ts");
/* harmony import */ var _orders_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orders.page */ "./src/app/pages/orders/orders.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");








let OrdersPageModule = class OrdersPageModule {
};
OrdersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _orders_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrdersPageRoutingModule"]
        ],
        declarations: [_orders_page__WEBPACK_IMPORTED_MODULE_6__["OrdersPage"]]
    })
], OrdersPageModule);



/***/ }),

/***/ "./src/app/pages/orders/orders.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/orders/orders.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div {\n  width: 100%;\n}\n.main_content_div .segment_div {\n  display: flex;\n  margin-top: 20px;\n  border-bottom: 1px solid lightgray;\n  justify-content: space-around;\n}\n.main_content_div .segment_div ion-label {\n  color: gray;\n  padding-bottom: 10px;\n  width: 100%;\n  text-align: center;\n}\n.main_content_div .segment_div .active {\n  border-bottom: 1px solid red;\n}\n.main_content_div .centent_div {\n  padding: 20px;\n}\n.main_content_div .centent_div ion-label {\n  display: block;\n}\n.main_content_div .card_div {\n  width: 100%;\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n  padding: 15px;\n  margin-bottom: 20px;\n  border: 0.5px solid lightgray;\n}\n.main_content_div .card_div .line_div {\n  height: 1px;\n  width: 100%;\n  background: lightgray;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.main_content_div .card_div .resto_detail {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  position: relative;\n}\n.main_content_div .card_div .resto_detail .back_image {\n  height: 50px;\n  width: 50px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 100%;\n}\n.main_content_div .card_div .resto_detail .res_name {\n  font-weight: 600;\n  font-size: 14px;\n}\n.main_content_div .card_div .resto_detail .res_location {\n  color: lightgray;\n  font-size: 14px;\n}\n.main_content_div .card_div .resto_detail .order_id {\n  position: absolute;\n  right: 5px;\n  font-size: 0.6rem;\n}\n.main_content_div .card_div .resto_detail .order_id ion-label {\n  text-align: right;\n}\n.main_content_div .card_div .order_detail .head_gray {\n  color: lightgray;\n  font-size: 13px;\n  margin-top: 10px;\n}\n.main_content_div .card_div .order_detail .small_lbl {\n  font-size: 14px;\n  font-weight: 600;\n}\n.main_content_div .card_div .order_detail .border_bottom {\n  border-bottom: 1px dashed lightgray;\n  padding: 5px 0px;\n  font-size: 15px;\n  font-weight: bold;\n}\n.main_content_div .card_div .order_detail .subNames {\n  border-bottom: 1px dashed lightgray;\n  padding-bottom: 5px;\n}\n.main_content_div .card_div .order_detail .subNames .food_title {\n  font-size: 15px;\n  font-weight: bold;\n}\n.main_content_div .card_div .order_detail .subNames .flex_titles {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.main_content_div .card_div .order_detail .subNames .flex_titles .sub_name {\n  margin: 0px;\n  color: black;\n  font-size: 12px;\n}\n.main_content_div .card_div .order_detail .prize {\n  position: absolute;\n  right: 35px;\n  font-weight: 600 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3JkZXJzL0Y6XFxMQlMgIEhBQ0tcXEFwcF9jb2RlXFxSZXN0YXVyYW50QXBwL3NyY1xcYXBwXFxwYWdlc1xcb3JkZXJzXFxvcmRlcnMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9vcmRlcnMvb3JkZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSjtBRENJO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSw2QkFBQTtBQ0NSO0FEQVE7RUFDSSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNFWjtBREFRO0VBQ0ksNEJBQUE7QUNFWjtBREVJO0VBQ0ksYUFBQTtBQ0FSO0FERVE7RUFDSSxjQUFBO0FDQVo7QURJSTtFQUNJLFdBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUNGUjtBRElRO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNGWjtBRElRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0ZaO0FESVk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0FDRmhCO0FES1k7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUNIZDtBREtZO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FDSGhCO0FETVk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQ0poQjtBREtnQjtFQUNHLGlCQUFBO0FDSG5CO0FEU1k7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1BoQjtBRFNZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDUGhCO0FEVWE7RUFDRyxtQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDUmhCO0FEVVk7RUFDSSxtQ0FBQTtFQUNBLG1CQUFBO0FDUmhCO0FEU2dCO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDUHBCO0FEU2dCO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUNQcEI7QURRb0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNOeEI7QURXWTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0FDVGhCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvb3JkZXJzL29yZGVycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbl9jb250ZW50X2RpdntcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIC5zZWdtZW50X2RpdntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmFjdGl2ZXtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuY2VudGVudF9kaXZ7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG5cbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmNhcmRfZGl2e1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggcmdiYSgwLDAsMCwwLjIpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICBib3JkZXI6IDAuNXB4IHNvbGlkIGxpZ2h0Z3JheTtcblxuICAgICAgICAubGluZV9kaXZ7XG4gICAgICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnJlc3RvX2RldGFpbHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgXG4gICAgICAgICAgICAuYmFja19pbWFnZXtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucmVzX25hbWV7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7ICBcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIC5yZXNfbG9jYXRpb257XG4gICAgICAgICAgICAgICAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5vcmRlcl9pZHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDVweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IC42cmVtO1xuICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLm9yZGVyX2RldGFpbHtcbiAgICAgICAgICAgIC5oZWFkX2dyYXl7XG4gICAgICAgICAgICAgICAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zbWFsbF9sYmx7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAuYm9yZGVyX2JvdHRvbXtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIGxpZ2h0Z3JheTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zdWJOYW1lc3tcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIGxpZ2h0Z3JheTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICAgIC5mb29kX3RpdGxle1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZmxleF90aXRsZXN7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgICAgLnN1Yl9uYW1le1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wcml6ZXtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDM1cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsIi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuc2VnbWVudF9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5zZWdtZW50X2RpdiBpb24tbGFiZWwge1xuICBjb2xvcjogZ3JheTtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuc2VnbWVudF9kaXYgLmFjdGl2ZSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZWQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2VudGVudF9kaXYge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNlbnRlbnRfZGl2IGlvbi1sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCBsaWdodGdyYXk7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYgLmxpbmVfZGl2IHtcbiAgaGVpZ2h0OiAxcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYgLnJlc3RvX2RldGFpbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdiAucmVzdG9fZGV0YWlsIC5iYWNrX2ltYWdlIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2IC5yZXN0b19kZXRhaWwgLnJlc19uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2IC5yZXN0b19kZXRhaWwgLnJlc19sb2NhdGlvbiB7XG4gIGNvbG9yOiBsaWdodGdyYXk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdiAucmVzdG9fZGV0YWlsIC5vcmRlcl9pZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbiAgZm9udC1zaXplOiAwLjZyZW07XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYgLnJlc3RvX2RldGFpbCAub3JkZXJfaWQgaW9uLWxhYmVsIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYgLm9yZGVyX2RldGFpbCAuaGVhZF9ncmF5IHtcbiAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2IC5vcmRlcl9kZXRhaWwgLnNtYWxsX2xibCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdiAub3JkZXJfZGV0YWlsIC5ib3JkZXJfYm90dG9tIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCBsaWdodGdyYXk7XG4gIHBhZGRpbmc6IDVweCAwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYgLm9yZGVyX2RldGFpbCAuc3ViTmFtZXMge1xuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIGxpZ2h0Z3JheTtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdiAub3JkZXJfZGV0YWlsIC5zdWJOYW1lcyAuZm9vZF90aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYgLm9yZGVyX2RldGFpbCAuc3ViTmFtZXMgLmZsZXhfdGl0bGVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2IC5vcmRlcl9kZXRhaWwgLnN1Yk5hbWVzIC5mbGV4X3RpdGxlcyAuc3ViX25hbWUge1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDEycHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYgLm9yZGVyX2RldGFpbCAucHJpemUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAzNXB4O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/orders/orders.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/orders/orders.page.ts ***!
  \*********************************************/
/*! exports provided: OrdersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPage", function() { return OrdersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/apis.service */ "./src/app/services/apis.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);







let OrdersPage = class OrdersPage {
    constructor(api, util, router, adb) {
        this.api = api;
        this.util = util;
        this.router = router;
        this.adb = adb;
        this.seg_id = 1;
        this.newOrders = [];
        this.onGoingOrders = [];
        this.oldOrders = [];
        this.dummy = Array(50);
        if (localStorage.getItem('uid')) {
            this.adb.collection('orders', ref => ref.where('restId', '==', localStorage.getItem('uid'))).snapshotChanges().subscribe((data) => {
                console.log('---->', data);
                if (data) {
                    this.getOrders();
                }
            });
        }
    }
    ngOnInit() {
        console.log('init');
    }
    ngAfterViewInit() {
        console.log('ngAfterViewInit');
    }
    ionViewWillEnter() {
        console.log('enter');
        this.newOrders = [];
        this.onGoingOrders = [];
        this.oldOrders = [];
        this.dummy = Array(50);
        this.api.getVenueDetails(localStorage.getItem('uid')).then(data => {
            console.log(data);
            if (!data) {
                console.log('no data');
                this.util.showSimpleAlert('Please create your venue profile first');
                this.router.navigate(['venue-profile']);
                this.dummy = [];
            }
            else if (data.status === 'close') {
                this.router.navigate(['login']);
                localStorage.removeItem('uid');
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                    title: this.util.translate('Error'),
                    text: this.util.translate('Your are blocked please contact administrator'),
                    icon: 'error',
                    showConfirmButton: true,
                    showCancelButton: true,
                    confirmButtonText: this.util.translate('Need Help?'),
                    backdrop: false,
                    background: 'white'
                }).then(data => {
                    if (data && data.value) {
                        this.router.navigate(['inbox']);
                    }
                });
            }
            else {
                this.getOrders();
            }
        }).catch(error => {
            this.dummy = [];
            console.log(error);
            this.util.errorToast(this.util.translate('Something went wrong'));
        });
    }
    onClick(val) {
        this.seg_id = val;
    }
    goToOrderDetail(ids) {
        console.log(ids);
        const navData = {
            queryParams: {
                id: ids
            }
        };
        this.router.navigate(['/order-detail'], navData);
    }
    getOrders() {
        console.log('vid', localStorage.getItem('uid'));
        this.dummy = Array(50);
        this.api.getMyOrders(localStorage.getItem('uid')).then((data) => {
            this.dummy = [];
            console.log('orders', data);
            if (data && data.length > 0) {
                this.newOrders = [];
                this.onGoingOrders = [];
                this.oldOrders = [];
                data.forEach(element => {
                    element.order = JSON.parse(element.order);
                    if (element.status === 'created') {
                        this.newOrders.push(element);
                    }
                    else if (element.status === 'accepted' || element.status === 'ongoing') {
                        this.onGoingOrders.push(element);
                    }
                    else if (element.status === 'delivered' || element.status === 'cancel' || element.status === 'rejected') {
                        this.oldOrders.push(element);
                    }
                });
                console.log('new order', this.newOrders);
            }
        }, err => {
            console.log(err);
            this.dummy = [];
            this.util.errorToast(this.util.translate('Something went wrong'));
        }).catch(e => {
            console.log(e);
            this.dummy = [];
            this.util.errorToast(this.util.translate('Something went wrong'));
        });
    }
    getProfilePic(item) {
        return item && item.cover ? item.cover : 'assets/imgs/user.jpg';
    }
    getCurrency() {
        return this.util.getCurrecySymbol();
    }
};
OrdersPage.ctorParameters = () => [
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__["ApisService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] }
];
OrdersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-orders',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./orders.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/orders/orders.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./orders.page.scss */ "./src/app/pages/orders/orders.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__["ApisService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]])
], OrdersPage);



/***/ })

}]);
//# sourceMappingURL=orders-orders-module-es2015.js.map