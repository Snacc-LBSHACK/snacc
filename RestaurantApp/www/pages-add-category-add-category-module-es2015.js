(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-category-add-category-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-category/add-category.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-category/add-category.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Food Category</ion-title>\n    <ion-button (click)=\"addnew()\" slot=\"end\" fill=\"clear\" color=\"light\">\n      <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n    <div class=\"back_image\"></div>\n    <ion-input type=\"text\" placeholder=\"Category Name\"></ion-input>\n\n    <ion-button (click)=\"addnew()\" expand=\"block\">\n      Add Category\n    </ion-button>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/add-category/add-category-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/add-category/add-category-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: AddCategoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCategoryPageRoutingModule", function() { return AddCategoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _add_category_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-category.page */ "./src/app/pages/add-category/add-category.page.ts");




const routes = [
    {
        path: '',
        component: _add_category_page__WEBPACK_IMPORTED_MODULE_3__["AddCategoryPage"]
    }
];
let AddCategoryPageRoutingModule = class AddCategoryPageRoutingModule {
};
AddCategoryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddCategoryPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/add-category/add-category.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/add-category/add-category.module.ts ***!
  \***********************************************************/
/*! exports provided: AddCategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCategoryPageModule", function() { return AddCategoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _add_category_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-category-routing.module */ "./src/app/pages/add-category/add-category-routing.module.ts");
/* harmony import */ var _add_category_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-category.page */ "./src/app/pages/add-category/add-category.page.ts");







let AddCategoryPageModule = class AddCategoryPageModule {
};
AddCategoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_category_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddCategoryPageRoutingModule"]
        ],
        declarations: [_add_category_page__WEBPACK_IMPORTED_MODULE_6__["AddCategoryPage"]]
    })
], AddCategoryPageModule);



/***/ }),

/***/ "./src/app/pages/add-category/add-category.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/add-category/add-category.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div {\n  padding: 20px;\n}\n.main_content_div .back_image {\n  height: 300px;\n  width: 100%;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  position: relative;\n  border: 1px solid lightgray;\n  border-radius: 5px;\n}\n.main_content_div ion-input {\n  border-radius: 5px;\n  border: 1px solid lightgray;\n  margin-top: 20px;\n  --padding-start: 8px;\n}\n.main_content_div ion-button {\n  --border-radius: 5px;\n  font-weight: 600;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRkLWNhdGVnb3J5L0Y6XFxMQlMgIEhBQ0tcXEFwcF9jb2RlXFxSZXN0YXVyYW50QXBwL3NyY1xcYXBwXFxwYWdlc1xcYWRkLWNhdGVnb3J5XFxhZGQtY2F0ZWdvcnkucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hZGQtY2F0ZWdvcnkvYWRkLWNhdGVnb3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSjtBREFJO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUNFUjtBRENJO0VBQ0ksa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUNDUjtBREVJO0VBQ0ksb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZGQtY2F0ZWdvcnkvYWRkLWNhdGVnb3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluX2NvbnRlbnRfZGl2e1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgLmJhY2tfaW1hZ2V7XG4gICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuXG4gICAgaW9uLWlucHV0e1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0IDogOHB4O1xuICAgIH1cblxuICAgIGlvbi1idXR0b257XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cbn0iLCIubWFpbl9jb250ZW50X2RpdiB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYmFja19pbWFnZSB7XG4gIGhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24taW5wdXQge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24tYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/add-category/add-category.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/add-category/add-category.page.ts ***!
  \*********************************************************/
/*! exports provided: AddCategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCategoryPage", function() { return AddCategoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AddCategoryPage = class AddCategoryPage {
    constructor() { }
    ngOnInit() {
    }
    addnew() {
    }
};
AddCategoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-category',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-category.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-category/add-category.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-category.page.scss */ "./src/app/pages/add-category/add-category.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AddCategoryPage);



/***/ })

}]);
//# sourceMappingURL=pages-add-category-add-category-module-es2015.js.map