(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-order-detail-order-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order-detail/order-detail.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order-detail/order-detail.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" color=\"dark\" mode=\"md\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{'Order Details' | translate}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"printOrder()\">\n        <ion-icon slot=\"start\" name=\"print-outline\"></ion-icon>\n        {{'Print' | translate}}\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"!loaded\" style=\"display: flex;flex-direction: column;justify-content: center;align-items: center;\">\n    <ion-spinner color=\"primary\" name=\"crescent\"></ion-spinner>\n  </div>\n  <div *ngIf=\"loaded\" class=\"main_content_div\">\n\n\n    <div class=\"card_div\">\n      <div class=\"resto_detail\">\n        <div class=\"back_image\" [style.backgroundImage]=\"'url('+userPic+')'\"></div>\n        <div style=\"margin-left: 10px;\">\n          <ion-label class=\"res_name\">{{userName}}</ion-label>\n          <ion-label class=\"res_location\">{{time}}</ion-label>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"orderId\">\n      <div class=\"order_id\">\n        <ion-label>{{'Order ID' | translate}}</ion-label>\n        <ion-label>{{id}}</ion-label>\n      </div>\n    </div>\n    <div class=\"line_div\"></div>\n\n\n    <div class=\"card_div2\" *ngIf=\"phone\">\n      <div class=\"personal_detail\">\n        <div style=\"display: flex;\">\n          <ion-icon name=\"call\"></ion-icon>&nbsp;&nbsp;\n          <ion-label class=\"res_name\">{{phone}}</ion-label>\n        </div>\n        <div>\n          <ion-button (click)=\"call()\" size=\"small\" fill=\"outline\">{{'Call' | translate}}</ion-button>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"line_div\"></div>\n\n    <div class=\"card_div2\" *ngIf=\"userEmail\">\n      <div class=\"personal_detail\">\n        <div style=\"display: flex;\">\n          <ion-icon name=\"mail\"></ion-icon>&nbsp;&nbsp;\n          <ion-label class=\"res_name\">{{userEmail}}</ion-label>\n        </div>\n        <div>\n          <ion-button (click)=\"email()\" size=\"small\" fill=\"outline\">{{'Email' | translate}}</ion-button>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"line_div\"></div>\n\n    <div class=\"card_div2\">\n      <div class=\"personal_detail\">\n        <div style=\"display: flex;\">\n          <ion-icon name=\"location\"></ion-icon>&nbsp;&nbsp;\n          <ion-label class=\"res_name\">{{deliveryAddress}}</ion-label>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"card_div2\">\n      <div class=\"personal_detail\">\n        <div *ngIf=\"status != 'delivered'  && status != 'cancel' && status !='reject' && status !='created' \">\n          <ion-button (click)=\"goToTracker()\" size=\"small\" fill=\"outline\">{{'Navigate' | translate}}</ion-button>\n        </div>\n      </div>\n    </div>\n\n    <span *ngFor=\"let item of orders\">\n\n      <div *ngFor=\"let subItems of item.selectedItem;let j = index\" class=\"subNames\">\n        <ion-label class=\"food_title\">\n          {{item.name}} X\n          {{item.selectedItem[j].total}}</ion-label>\n        <div *ngFor=\"let addods of subItems.item\" class=\"flex_titles\">\n          <p class=\"sub_name\">\n            - {{addods.name}}\n          </p>\n          <p class=\"sub_name\">\n            {{getCurrency()}} {{addods.value}}\n          </p>\n        </div>\n      </div>\n\n      <div class=\"card_div4\" *ngIf=\"!item.selectedItem || !item.selectedItem.length\">\n        <div class=\"flex_div\">\n          <ion-label class=\"food_title\">{{item.name}} X {{item.quantiy}} </ion-label>\n          <ion-label class=\"food_price\">{{getCurrency()}}{{item.quantiy * item.price}}</ion-label>\n        </div>\n\n      </div>\n\n    </span>\n\n    <div class=\"card_div2\">\n\n      <div class=\"order_detail\">\n        <ion-label class=\"small_lbl2\">{{'SubTotal' | translate}}<span class=\"prize1\">{{getCurrency()}}{{total}}</span>\n        </ion-label>\n        <ion-label class=\"small_lbl2\">{{'Delivery Charge' | translate}}<span class=\"prize1\">{{getCurrency()}}5</span>\n        </ion-label>\n        <ion-label class=\"small_lbl2\">{{'Service Tax' | translate}}<span\n            class=\"prize1\">{{getCurrency()}}{{serviceTax}}</span>\n        </ion-label>\n        <ion-label class=\"small_lbl2\">{{'Total' | translate}}<span class=\"prize1\">{{getCurrency()}}{{grandTotal}}</span>\n        </ion-label>\n      </div>\n\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <div class=\"btn_div\" *ngIf=\"status == 'created'\">\n      <ion-button (click)=\"changeStatus('rejected')\" size=\"small\" class=\"reject\">\n        {{'Reject Order' | translate}}\n      </ion-button>\n      <ion-button (click)=\"changeStatus('accepted')\" size=\"small\" class=\"accept\">\n        {{'Accept Order' | translate}}\n      </ion-button>\n    </div>\n\n    <div class=\"status_div\" *ngIf=\"status == 'accepted' || status == 'ongoing' \">\n      <div style=\"width: 200px;\">\n        <ion-select placeholder=\"Choose Status\" [(ngModel)]=\"changeStatusOrder\">\n          <ion-select-option value=\"ongoing\">{{'Ongoing' |  translate}}</ion-select-option>\n          <ion-select-option value=\"cancel\">{{'Cancel' | translate}}</ion-select-option>\n          <ion-select-option value=\"delivered\">{{'Delivered' | translate}}</ion-select-option>\n        </ion-select>\n      </div>\n\n      <div>\n        <ion-button (click)=\"changeOrderStatus()\" size=\"small\">\n          {{'Update Status' | translate}}\n        </ion-button>\n      </div>\n    </div>\n\n    <ion-label class=\"green\" *ngIf=\"status == 'delivered'\">{{'Order Status' | translate}} :\n      {{'Order Delivered' | translate}}</ion-label>\n    <ion-label class=\"red\" *ngIf=\"status == 'cancel'\">{{'Order Cancelled by user' | translate}}</ion-label>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/order-detail/order-detail-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/order-detail/order-detail-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: OrderDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailPageRoutingModule", function() { return OrderDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _order_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-detail.page */ "./src/app/pages/order-detail/order-detail.page.ts");




const routes = [
    {
        path: '',
        component: _order_detail_page__WEBPACK_IMPORTED_MODULE_3__["OrderDetailPage"]
    }
];
let OrderDetailPageRoutingModule = class OrderDetailPageRoutingModule {
};
OrderDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrderDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/order-detail/order-detail.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/order-detail/order-detail.module.ts ***!
  \***********************************************************/
/*! exports provided: OrderDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailPageModule", function() { return OrderDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _order_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-detail-routing.module */ "./src/app/pages/order-detail/order-detail-routing.module.ts");
/* harmony import */ var _order_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-detail.page */ "./src/app/pages/order-detail/order-detail.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");








let OrderDetailPageModule = class OrderDetailPageModule {
};
OrderDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _order_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderDetailPageRoutingModule"]
        ],
        declarations: [_order_detail_page__WEBPACK_IMPORTED_MODULE_6__["OrderDetailPage"]]
    })
], OrderDetailPageModule);



/***/ }),

/***/ "./src/app/pages/order-detail/order-detail.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/order-detail/order-detail.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div {\n  width: 100%;\n}\n.main_content_div .line_div {\n  height: 1px;\n  width: 100%;\n  background: lightgray;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .card_div {\n  padding: 20px;\n}\n.main_content_div .card_div .resto_detail {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  position: relative;\n}\n.main_content_div .card_div .resto_detail .back_image {\n  height: 50px;\n  width: 50px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 100%;\n}\n.main_content_div .card_div .resto_detail .res_name {\n  font-weight: 600;\n  font-size: 14px;\n}\n.main_content_div .card_div .resto_detail .res_location {\n  color: gray;\n  font-size: 14px;\n}\n.main_content_div .card_div .resto_detail .order_id {\n  position: absolute;\n  right: 5px;\n}\n.main_content_div .card_div .resto_detail .order_id ion-label {\n  text-align: right;\n}\n.main_content_div .orderId {\n  padding: 10px 20px;\n  font-weight: 600;\n  font-size: 14px;\n}\n.main_content_div .card_div4 {\n  border-bottom: 1px dashed lightgray;\n  padding: 10px 20px;\n}\n.main_content_div .card_div4 .flex_div {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.main_content_div .card_div4 .flex_div .food_title {\n  font-size: 15px;\n  font-weight: bold;\n}\n.main_content_div .card_div4 .flex_div .food_price {\n  font-size: 15px;\n}\n.main_content_div .card_div4 .flex_div .fav_lbl {\n  color: red;\n  font-size: 12px;\n  border: 1px solid red;\n  border-radius: 25px;\n  padding: 2px 10px;\n}\n.main_content_div .subNames {\n  border-bottom: 1px dashed lightgray;\n  padding: 20px;\n}\n.main_content_div .subNames .food_title {\n  font-size: 15px;\n  font-weight: bold;\n}\n.main_content_div .subNames .food_title .veg {\n  height: 12px;\n  width: 12px;\n}\n.main_content_div .subNames .food_title .rate_lbl {\n  background: #b2d9b2;\n  border: 1px solid #7bdb7b;\n  padding: 3px 8px;\n  border-radius: 5px;\n  font-size: 14px;\n  font-weight: 600;\n}\n.main_content_div .subNames .flex_titles {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.main_content_div .subNames .flex_titles .sub_name {\n  margin: 0px;\n  color: black;\n  font-size: 12px;\n}\n.main_content_div .card_div2 {\n  padding: 10px 20px;\n}\n.main_content_div .card_div2 .personal_detail {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n.main_content_div .card_div2 .personal_detail ion-icon {\n  font-size: 20px;\n  color: var(--ion-color-primary);\n}\n.main_content_div .card_div2 .personal_detail ion-button {\n  --border-radius: 3px;\n  font-weight: 600;\n}\n.main_content_div .card_div2 .personal_detail .res_name {\n  font-weight: 600;\n  font-size: 14px;\n}\n.main_content_div .card_div2 .order_detail .head_gray {\n  color: gray;\n  font-size: 13px;\n  margin-top: 10px;\n}\n.main_content_div .card_div2 .order_detail .small_lbl {\n  font-size: 14px;\n  font-weight: 600;\n}\n.main_content_div .card_div2 .order_detail .prize {\n  position: absolute;\n  right: 35px;\n  font-weight: 600 !important;\n  color: black;\n}\n.main_content_div .card_div2 .order_detail .prize1 {\n  position: absolute;\n  right: 35px;\n  font-weight: 600 !important;\n  color: black;\n  font-size: 16px;\n  margin-top: 10px;\n}\n.main_content_div .card_div2 .order_detail .small_lbl2 {\n  font-size: 16px;\n  font-weight: 600;\n  margin-top: 10px;\n}\n.btn_div {\n  display: flex;\n  justify-content: center;\n}\n.btn_div ion-button {\n  font-weight: 600;\n  --border-radius: 5px;\n  width: 130px;\n}\n.btn_div .accept {\n  --background: green;\n}\n.status_div {\n  display: flex;\n  justify-content: space-between;\n  padding-left: 20px;\n  padding-right: 20px;\n  align-items: center;\n}\n.status_div ion-select {\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  --padding-top: 3px;\n  --padding-bottom:3px;\n  width: 100%;\n}\n.status_div ion-button {\n  font-weight: 600;\n  --border-radius: 5px;\n}\n.green {\n  display: block;\n  text-align: center;\n  color: green;\n  font-weight: 600;\n}\n.red {\n  display: block;\n  text-align: center;\n  color: var(--ion-color-primary);\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3JkZXItZGV0YWlsL0Y6XFxMQlMgIEhBQ0tcXEFwcF9jb2RlXFxSZXN0YXVyYW50QXBwL3NyY1xcYXBwXFxwYWdlc1xcb3JkZXItZGV0YWlsXFxvcmRlci1kZXRhaWwucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9vcmRlci1kZXRhaWwvb3JkZXItZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSjtBRENJO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQ0NSO0FERUk7RUFDSSxjQUFBO0FDQVI7QURHSTtFQUNJLGFBQUE7QUNEUjtBREdRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0RaO0FER1k7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0FDRGhCO0FESVk7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUNGZDtBRElZO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUNGaEI7QURLWTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQ0hoQjtBREtnQjtFQUNHLGlCQUFBO0FDSG5CO0FEU0k7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ1BSO0FEVUk7RUFDRyxtQ0FBQTtFQUNBLGtCQUFBO0FDUlA7QURTUTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDUFo7QURRWTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ05oQjtBRFFZO0VBQ0ksZUFBQTtBQ05oQjtBRFFZO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNOaEI7QURVSTtFQUNJLG1DQUFBO0VBQ0EsYUFBQTtBQ1JSO0FEU1E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNQWjtBRFFZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNOaEI7QURRWTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDTmhCO0FEU1E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ1BaO0FEUVk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNOaEI7QURhSTtFQUNJLGtCQUFBO0FDWFI7QURZUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNWWjtBRFlZO0VBQ0ksZUFBQTtFQUNBLCtCQUFBO0FDVmhCO0FEWVk7RUFDSSxvQkFBQTtFQUNBLGdCQUFBO0FDVmhCO0FEWWE7RUFDQyxnQkFBQTtFQUNBLGVBQUE7QUNWZDtBRGVZO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ2JoQjtBRGVZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDYmhCO0FEZ0JZO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0FDZGhCO0FEaUJZO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDZmhCO0FEbUJZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNqQmhCO0FEdUJBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FDcEJKO0FEc0JJO0VBQ0ksZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUNwQlI7QURzQkk7RUFDSSxtQkFBQTtBQ3BCUjtBRHdCQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ3JCSjtBRHVCSTtFQUNJLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtBQ3JCUjtBRHdCSTtFQUNJLGdCQUFBO0VBQ0Esb0JBQUE7QUN0QlI7QUQwQkE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUN2Qko7QUR5QkE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FDdEJKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvb3JkZXItZGV0YWlsL29yZGVyLWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbl9jb250ZW50X2RpdntcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIC5saW5lX2RpdntcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG4gICAgfVxuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgLmNhcmRfZGl2e1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgICAgIC5yZXN0b19kZXRhaWx7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIFxuICAgICAgICAgICAgLmJhY2tfaW1hZ2V7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnJlc19uYW1le1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwOyAgXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAucmVzX2xvY2F0aW9ue1xuICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm9yZGVyX2lke1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogNXB4O1xuXG4gICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAub3JkZXJJZHtcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwOyAgXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5cbiAgICAuY2FyZF9kaXY0e1xuICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgbGlnaHRncmF5O1xuICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgICAgLmZsZXhfZGl2e1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAuZm9vZF90aXRsZXtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZm9vZF9wcmljZXtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZmF2X2xibHtcbiAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAycHggMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgfVxuICAgIC5zdWJOYW1lc3tcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCBsaWdodGdyYXk7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIC5mb29kX3RpdGxle1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAudmVne1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTJweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yYXRlX2xibHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYjJkOWIyO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM3YmRiN2I7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogM3B4IDhweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmZsZXhfdGl0bGVze1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAuc3ViX25hbWV7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICAuY2FyZF9kaXYye1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgIC5wZXJzb25hbF9kZXRhaWx7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAucmVzX25hbWV7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7ICBcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfSBcbiAgICAgICAgfVxuXG4gICAgICAgIC5vcmRlcl9kZXRhaWx7XG4gICAgICAgICAgICAuaGVhZF9ncmF5e1xuICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNtYWxsX2xibHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnByaXple1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogMzVweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucHJpemUxe1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogMzVweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zbWFsbF9sYmwye1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5idG5fZGl2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICBpb24tYnV0dG9ue1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgd2lkdGg6IDEzMHB4O1xuICAgIH1cbiAgICAuYWNjZXB0e1xuICAgICAgICAtLWJhY2tncm91bmQ6IGdyZWVuO1xuICAgIH1cbn1cblxuLnN0YXR1c19kaXZ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGlvbi1zZWxlY3R7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAtLXBhZGRpbmctdG9wOiAzcHg7XG4gICAgICAgIC0tcGFkZGluZy1ib3R0b20gOjNweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgaW9uLWJ1dHRvbntcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxufVxuXG4uZ3JlZW57XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiBncmVlbjtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuLnJlZHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBmb250LXdlaWdodDogNjAwO1xufSIsIi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGluZV9kaXYge1xuICBoZWlnaHQ6IDFweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IGlvbi1sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2IHtcbiAgcGFkZGluZzogMjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdiAucmVzdG9fZGV0YWlsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2IC5yZXN0b19kZXRhaWwgLmJhY2tfaW1hZ2Uge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYgLnJlc3RvX2RldGFpbCAucmVzX25hbWUge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYgLnJlc3RvX2RldGFpbCAucmVzX2xvY2F0aW9uIHtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdiAucmVzdG9fZGV0YWlsIC5vcmRlcl9pZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdiAucmVzdG9fZGV0YWlsIC5vcmRlcl9pZCBpb24tbGFiZWwge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5vcmRlcklkIHtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXY0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCBsaWdodGdyYXk7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdjQgLmZsZXhfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2NCAuZmxleF9kaXYgLmZvb2RfdGl0bGUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2NCAuZmxleF9kaXYgLmZvb2RfcHJpY2Uge1xuICBmb250LXNpemU6IDE1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXY0IC5mbGV4X2RpdiAuZmF2X2xibCB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBwYWRkaW5nOiAycHggMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5zdWJOYW1lcyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgbGlnaHRncmF5O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnN1Yk5hbWVzIC5mb29kX3RpdGxlIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5zdWJOYW1lcyAuZm9vZF90aXRsZSAudmVnIHtcbiAgaGVpZ2h0OiAxMnB4O1xuICB3aWR0aDogMTJweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5zdWJOYW1lcyAuZm9vZF90aXRsZSAucmF0ZV9sYmwge1xuICBiYWNrZ3JvdW5kOiAjYjJkOWIyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjN2JkYjdiO1xuICBwYWRkaW5nOiAzcHggOHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5zdWJOYW1lcyAuZmxleF90aXRsZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ubWFpbl9jb250ZW50X2RpdiAuc3ViTmFtZXMgLmZsZXhfdGl0bGVzIC5zdWJfbmFtZSB7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdjIge1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYyIC5wZXJzb25hbF9kZXRhaWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYyIC5wZXJzb25hbF9kZXRhaWwgaW9uLWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYyIC5wZXJzb25hbF9kZXRhaWwgaW9uLWJ1dHRvbiB7XG4gIC0tYm9yZGVyLXJhZGl1czogM3B4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2MiAucGVyc29uYWxfZGV0YWlsIC5yZXNfbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdjIgLm9yZGVyX2RldGFpbCAuaGVhZF9ncmF5IHtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdjIgLm9yZGVyX2RldGFpbCAuc21hbGxfbGJsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2MiAub3JkZXJfZGV0YWlsIC5wcml6ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDM1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgY29sb3I6IGJsYWNrO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2MiAub3JkZXJfZGV0YWlsIC5wcml6ZTEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAzNXB4O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2MiAub3JkZXJfZGV0YWlsIC5zbWFsbF9sYmwyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uYnRuX2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmJ0bl9kaXYgaW9uLWJ1dHRvbiB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogMTMwcHg7XG59XG4uYnRuX2RpdiAuYWNjZXB0IHtcbiAgLS1iYWNrZ3JvdW5kOiBncmVlbjtcbn1cblxuLnN0YXR1c19kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zdGF0dXNfZGl2IGlvbi1zZWxlY3Qge1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOjNweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uc3RhdHVzX2RpdiBpb24tYnV0dG9uIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5ncmVlbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiBncmVlbjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnJlZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/order-detail/order-detail.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/order-detail/order-detail.page.ts ***!
  \*********************************************************/
/*! exports provided: OrderDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailPage", function() { return OrderDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/apis.service */ "./src/app/services/apis.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _select_drivers_select_drivers_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../select-drivers/select-drivers.page */ "./src/app/pages/select-drivers/select-drivers.page.ts");
/* harmony import */ var _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/printer/ngx */ "./node_modules/@ionic-native/printer/ngx/index.js");









let OrderDetailPage = class OrderDetailPage {
    constructor(router, route, api, util, navCtrl, printer, modalController) {
        this.router = router;
        this.route = route;
        this.api = api;
        this.util = util;
        this.navCtrl = navCtrl;
        this.printer = printer;
        this.modalController = modalController;
        this.orders = [];
        this.drivers = [];
        this.dummyDriver = [];
        this.orderString = [];
        this.loaded = false;
    }
    ngOnInit() {
        this.route.queryParams.subscribe(data => {
            console.log(data);
            this.id = data.id;
            console.log('thisidd', this.id);
            this.getOrder();
        });
    }
    back() {
        this.util.publishNewAddress('hello');
        this.navCtrl.back();
    }
    presentModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _select_drivers_select_drivers_page__WEBPACK_IMPORTED_MODULE_7__["SelectDriversPage"],
                backdropDismiss: false,
                showBackdrop: true,
                componentProps: {
                    item: this.dummyDriver
                }
            });
            modal.onDidDismiss().then((data) => {
                console.log(data);
                if (data && data.role === 'selected') {
                    this.drivers = data.data;
                    if (this.drivers && this.drivers.length) {
                        this.placeOrder();
                    }
                }
            });
            yield modal.present();
        });
    }
    degreesToRadians(degrees) {
        return degrees * Math.PI / 180;
    }
    placeOrder() {
        const param = {
            driverId: this.drivers[0].uid,
            dId: this.drivers[0].uid,
            status: 'accepted'
        };
        const value = 'accepted';
        this.util.show(this.util.translate('Please wait'));
        this.api.updateOrder(this.id, param).then((data) => {
            const parm = {
                current: 'busy',
            };
            this.api.updateProfile(this.drivers[0].uid, parm).then((data) => {
                console.log(data);
            }).catch(error => {
                console.log(error);
            });
            if (this.drivers[0] && this.drivers[0].fcm_token !== '') {
                this.api.sendNotification(this.util.translate('New Order Received '), this.util.translate('New Order'), this.drivers[0].fcm_token).subscribe((data) => {
                    console.log('send notifications', data);
                }, error => {
                    console.log(error);
                });
            }
            console.log('data', data);
            const msg = this.util.translate('Your Order is ') + value + this.util.translate(' By ') + this.restName;
            this.api.sendNotification(msg, 'Order ' + value, this.token).subscribe((data) => {
                console.log(data);
                this.util.hide();
                this.navCtrl.back();
            }, error => {
                this.util.hide();
                console.log('err', error);
            });
            this.util.publishNewAddress('hello');
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                title: this.util.translate('success'),
                text: this.util.translate('Order status changed to ') + value,
                icon: 'success',
                timer: 2000,
                backdrop: false,
                background: 'white'
            });
            this.navCtrl.back();
        }).catch(error => {
            console.log(error);
            this.util.hide();
            this.util.errorToast(this.util.translate('Something went wrong'));
        });
    }
    distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
        console.log(lat1, lon1, lat2, lon2);
        const earthRadiusKm = 6371;
        const dLat = this.degreesToRadians(lat2 - lat1);
        const dLon = this.degreesToRadians(lon2 - lon1);
        lat1 = this.degreesToRadians(lat1);
        lat2 = this.degreesToRadians(lat2);
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return earthRadiusKm * c;
    }
    getDrivers() {
        this.api.getDrivers().then((data) => {
            console.log('drivers', data);
            this.dummyDriver = [];
            this.drivers = [];
            if (data && data.length > 0) {
                data.forEach((element) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    const distance = yield this.distanceInKmBetweenEarthCoordinates(this.userLat, this.userLng, parseFloat(element.lat), parseFloat(element.lng));
                    console.log(distance);
                    // if (element.current === 'active' && element.status === 'active') {
                    element.distance = distance ? distance : 10;
                    this.dummyDriver.push(element);
                    // }
                }));
                data.forEach((element) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    const distance = yield this.distanceInKmBetweenEarthCoordinates(this.userLat, this.userLng, parseFloat(element.lat), parseFloat(element.lng));
                    if (distance < 10 && element.current === 'active' && element.status === 'active') {
                        this.drivers.push(element);
                    }
                }));
            }
        }).catch(error => {
            console.log(error);
        });
    }
    getOrder() {
        this.api.getOrderById(this.id).then((data) => {
            this.loaded = true;
            console.log(data);
            if (data) {
                this.grandTotal = data.grandTotal;
                this.orders = JSON.parse(data.order);
                this.serviceTax = data.serviceTax;
                this.status = data.status;
                this.time = data.time;
                this.total = data.total;
                this.address = data.vid.address;
                this.restName = data.vid.name;
                this.deliveryAddress = data.address.address;
                if (data && data.vid && data.vid.lat) {
                    this.userLat = data.vid.lat;
                    this.userLng = data.vid.lng;
                }
                this.userName = data.uid.fullname;
                this.phone = data.uid.phone;
                this.token = data.uid.fcm_token;
                this.userEmail = data.uid.email;
                this.paid = data.paid;
                this.userPic = data.uid && data.uid.cover ? data.uid.cover : 'assets/imgs/user.jpg';
                console.log('this', this.orders);
                this.getDrivers();
                this.orders.forEach(element => {
                    console.log('ele,me=====>', element);
                    if (element && element.selectedItem && element.selectedItem.length > 0) {
                        console.log('======>>');
                        let items = '';
                        element.selectedItem.forEach((subItems, j) => {
                            const subDatas = [];
                            items = '<div style="border-bottom:1px dashed lightgray"> <p style="font-weight:bold"> ' + element.name + ' X ' +
                                element.selectedItem[j].total + '##ITEWS## </p></div>';
                            subItems.item.forEach((addons, k) => {
                                subDatas.push('<div style="display:flex;flex-direction:row;justify-content:space-between"> <p style="font-weight:bold;color:gray;margin:0px;"> -' +
                                    addons.name + '</p> <p style="font-weight:bold;color:gray;margin:0px;">' + this.getCurrency() + ' ' + addons.value + '</p> </div> ');
                            });
                            const subOrders = subDatas.join('');
                            const info = items.replace('##ITEWS##', subOrders);
                            this.orderString.push(info);
                        });
                        console.log('news --->>', items);
                    }
                    else {
                        const items = '<div style="border-bottom:1px dashed lightgray;display:flex;flex-direction:row;justify-content:space-between"> <p style="font-weight:bold"> ' +
                            element.name + ' X ' +
                            element.quantiy + ' </p> <p style="font-weight:bold">' + element.price + this.getCurrency() + '</p> </div>';
                        this.orderString.push(items);
                    }
                });
                console.log('orderstring', this.orderString);
            }
        }, error => {
            this.loaded = true;
            this.util.errorToast(this.util.translate('Something went wrong'));
            console.log('error in orders', error);
        }).catch(error => {
            this.loaded = true;
            this.util.errorToast(this.util.translate('Something went wrong'));
            console.log('error in order', error);
        });
    }
    goToTracker() {
        const navData = {
            queryParams: {
                id: this.id
            }
        };
        this.router.navigate(['/tracker'], navData);
    }
    changeStatus(value) {
        if (value === 'accepted') {
            console.log('accepted', this.drivers);
            this.presentModal();
        }
        else {
            this.util.show(this.util.translate('Please wait'));
            this.api.updateOrderStatus(this.id, value).then((data) => {
                console.log('data', data);
                const msg = this.util.translate('Your Order is ') + value + this.util.translate(' By ') + this.restName;
                this.api.sendNotification(msg, 'Order ' + value, this.token).subscribe((data) => {
                    console.log(data);
                    this.util.hide();
                    this.navCtrl.back();
                }, error => {
                    this.util.hide();
                    console.log('err', error);
                });
                this.util.publishNewAddress('hello');
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                    title: this.util.translate('success'),
                    text: this.util.translate('Order status changed to ') + value,
                    icon: 'success',
                    timer: 2000,
                    backdrop: false,
                    background: 'white'
                });
                this.navCtrl.back();
            }).catch(error => {
                console.log(error);
                this.util.hide();
                this.util.errorToast(this.util.translate('Something went wrong'));
            });
        }
    }
    changeOrderStatus() {
        console.log('order status', this.changeStatusOrder);
        if (this.changeStatusOrder) {
            this.changeStatus(this.changeStatusOrder);
        }
    }
    call() {
        if (this.phone) {
            window.open('tel:' + this.phone);
        }
        else {
            this.util.errorToast(this.util.translate('Number not found'));
        }
    }
    email() {
        if (this.userEmail) {
            window.open('mailto:' + this.userEmail);
        }
        else {
            this.util.errorToast(this.util.translate('Email not found'));
        }
    }
    printOrder() {
        const options = {
            name: 'Foodie Order Summary',
            duplex: false,
        };
        const order = this.orderString.join('');
        const content = '<div style="padding: 20px;display: flex;flex-direction: column;"> <img src="assets/icon.png" style="text-align: center; height: 100px;width: 100px;" alt=""> <h2 style="text-align: center;">Foodies Order Summary</h2> <p style="float: left;margin:0px;"><b>' +
            this.id + '</b></p> <p style="float: left;margin:0px;"><b>' + this.restName + '</b></p> <p style="float: left;margin:0px;"><b>' + this.userName + '</b></p> <p style="float: left;margin:0px;">' + this.time + ' </p> <p style="font-weight: bold;margin:0px;">' + this.util.translate('ITEMS') + '</p> ' + order + ' <p style="border-bottom: 1px solid black;margin:0px;"><span style="float: left;font-weight: bold;">' + this.util.translate('SubTotal') + '</span> <span style="float: right;font-weight: bold;">' + this.getCurrency() + this.total + '</span> <p style="border-bottom: 1px solid black;"><span style="float: left;font-weight: bold;">' + this.util.translate('Delivery Charge') + '</span> <span style="float: right;font-weight: bold;">' + this.getCurrency() + '5</span> </p> <p style="border-bottom: 1px solid black;"><span style="float: left;font-weight: bold;">' + this.util.translate('Service Tax') + '</span> <span style="float: right;font-weight: bold;">' + this.getCurrency() +
            this.serviceTax + '</span> </p> <p style="border-bottom: 1px solid black;"><span style="float: left;font-weight: bold;">' + this.util.translate('Total') + '</span> <span style="float: right;font-weight: bold;">' + this.getCurrency() + this.grandTotal + '</span> </p> <h1 style="text-align: center;text-transform: uppercase;">' + this.paid + '</h1> </div>';
        this.printer.print(content, options).then((data) => {
            console.log(data);
        }).catch(error => {
            console.log(error);
        });
    }
    getCurrency() {
        return this.util.getCurrecySymbol();
    }
};
OrderDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_8__["Printer"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
];
OrderDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./order-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order-detail/order-detail.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./order-detail.page.scss */ "./src/app/pages/order-detail/order-detail.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
        _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_8__["Printer"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]])
], OrderDetailPage);



/***/ })

}]);
//# sourceMappingURL=pages-order-detail-order-detail-module-es2015.js.map