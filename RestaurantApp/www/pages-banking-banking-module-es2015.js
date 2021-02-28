(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-banking-banking-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/banking/banking.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/banking/banking.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{'Confirm Bank' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"div_inner_slider\" *ngIf=\"!cid\">\n    <p class=\"head_lbl\">{{'Enter Card Details' |  translate}}</p>\n    <ion-input type=\"text\" [(ngModel)]=\"name\" [placeholder]=\"('Your name' | translate )\" class=\"bordered\"></ion-input>\n    <ion-input type=\"email\" [(ngModel)]=\"email\"  [placeholder]=\"('Your name' | translate )\" class=\"bordered\"></ion-input>\n    <ion-input type=\"number\" [(ngModel)]=\"number\" [placeholder]=\"('Card Number' | translate )\" class=\"bordered\"></ion-input>\n    <ion-row class=\"ion-no-padding\" style=\"margin-top: 20px;\">\n      <ion-col size=\"5.5\" class=\"bordered\">\n        <ion-datetime pickerFormat=\"MM/YYYY\" [(ngModel)]=\"date\" [min]=\"getMin()\" [max]=\"getMax()\"\n          displayFormat=\"MM/YYYY\" [placeholder]=\"('Expire Date' | translate )\">\n        </ion-datetime>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"5.5\" class=\"bordered\">\n        <ion-input [(ngModel)]=\"cvc\" type=\"number\" [placeholder]=\"('CVC' | translate )\"></ion-input>\n      </ion-col>\n    </ion-row>\n    <div class=\"instructions\">\n      <p class=\"bold\">{{'Instructions' | translate}}</p>\n      <p class=\"normal\">{{'This is Testing Mode use following details' | translate}} </p>\n      <p class=\"info\">{{'Card Number' | translate}} : 4242 4242 4242 4242</p>\n      <p class=\"info\">{{'CVC' | translate}} : 220</p>\n      <p class=\"info\">{{'Expire Date' | translate}} : {{'Future Years' | translate}}</p>\n    </div>\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"onslide2()\" style=\"padding-right: 10px;\">\n      <ion-fab-button color=\"primary\">\n        <ion-icon name=\"arrow-forward\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n  </div>\n  <div class=\"div_inner_slider\" *ngIf=\"cid\">\n    <p class=\"head_lbl\">{{'Enter Bank Details' | translate}}</p>\n    <ion-input type=\"text\" [(ngModel)]=\"account_holder_name\" [placeholder]=\"('Account Holdername' | translate )\" class=\"bordered\">\n    </ion-input>\n    <ion-input type=\"number\" [(ngModel)]=\"routing_number\" [placeholder]=\"('Routing Number' | translate )\" class=\"bordered\">\n    </ion-input>\n    <ion-input type=\"number\" [(ngModel)]=\"account_number\" [placeholder]=\"('Account Number' | translate )\" class=\"bordered\">\n    </ion-input>\n    <div class=\"instructions\">\n      <p class=\"bold\">{{'Instructions' | translate}}</p>\n      <p class=\"normal\">{{'This is Testing Mode use following details' | translate}} </p>\n      <p class=\"info\">{{'Routing number' | translate}} : 11 00 00 000</p>\n      <p class=\"info\">{{'Account number' | translate}} : 000 123 456 789</p>\n    </div>\n    <ion-button style=\"margin-top: 20px;\" (click)=\"createBankInfo()\" expand=\"block\" shape=\"round\">\n      {{'Submit' | translate}}\n    </ion-button>\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/banking/banking-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/banking/banking-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: BankingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankingPageRoutingModule", function() { return BankingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _banking_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./banking.page */ "./src/app/pages/banking/banking.page.ts");




const routes = [
    {
        path: '',
        component: _banking_page__WEBPACK_IMPORTED_MODULE_3__["BankingPage"]
    }
];
let BankingPageRoutingModule = class BankingPageRoutingModule {
};
BankingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BankingPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/banking/banking.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/banking/banking.module.ts ***!
  \*************************************************/
/*! exports provided: BankingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankingPageModule", function() { return BankingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _banking_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./banking-routing.module */ "./src/app/pages/banking/banking-routing.module.ts");
/* harmony import */ var _banking_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./banking.page */ "./src/app/pages/banking/banking.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");








let BankingPageModule = class BankingPageModule {
};
BankingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _banking_routing_module__WEBPACK_IMPORTED_MODULE_5__["BankingPageRoutingModule"],
        ],
        declarations: [_banking_page__WEBPACK_IMPORTED_MODULE_6__["BankingPage"]]
    })
], BankingPageModule);



/***/ }),

/***/ "./src/app/pages/banking/banking.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/banking/banking.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".div_inner_slider .head_lbl {\n  font-weight: bold;\n  text-align: center;\n  font-size: 1.5rem;\n}\n.div_inner_slider .bordered {\n  border-bottom: 1px solid lightgray;\n}\n.div_inner_slider .bordered ion-datetime {\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n}\n.div_inner_slider .instructions {\n  margin-top: 20px;\n  font-size: 1.2rem;\n  font-weight: bold;\n}\n.div_inner_slider .instructions .normal {\n  font-size: 1rem;\n}\n.div_inner_slider .instructions .info {\n  margin: 0px;\n  color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYmFua2luZy9GOlxcTEJTICBIQUNLXFxBcHBfY29kZVxcUmVzdGF1cmFudEFwcC9zcmNcXGFwcFxccGFnZXNcXGJhbmtpbmdcXGJhbmtpbmcucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9iYW5raW5nL2JhbmtpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDQVI7QURFSTtFQUNJLGtDQUFBO0FDQVI7QURDUTtFQUNHLGtCQUFBO0VBQ0EscUJBQUE7QUNDWDtBREVJO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDQVI7QURDUTtFQUNJLGVBQUE7QUNDWjtBRENRO0VBQ0ksV0FBQTtFQUNBLFdBQUE7QUNDWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JhbmtpbmcvYmFua2luZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGl2X2lubmVyX3NsaWRlcntcbiAgICAuaGVhZF9sYmx7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIH1cbiAgICAuYm9yZGVyZWR7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgIGlvbi1kYXRldGltZSB7XG4gICAgICAgICAgIC0tcGFkZGluZy10b3A6IDBweDtcbiAgICAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5pbnN0cnVjdGlvbnN7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgLm5vcm1hbHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgfVxuICAgICAgICAuaW5mb3tcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIuZGl2X2lubmVyX3NsaWRlciAuaGVhZF9sYmwge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cbi5kaXZfaW5uZXJfc2xpZGVyIC5ib3JkZXJlZCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG4uZGl2X2lubmVyX3NsaWRlciAuYm9yZGVyZWQgaW9uLWRhdGV0aW1lIHtcbiAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG59XG4uZGl2X2lubmVyX3NsaWRlciAuaW5zdHJ1Y3Rpb25zIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmRpdl9pbm5lcl9zbGlkZXIgLmluc3RydWN0aW9ucyAubm9ybWFsIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuLmRpdl9pbm5lcl9zbGlkZXIgLmluc3RydWN0aW9ucyAuaW5mbyB7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjogZ3JheTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/banking/banking.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/banking/banking.page.ts ***!
  \***********************************************/
/*! exports provided: BankingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankingPage", function() { return BankingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/apis.service */ "./src/app/services/apis.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");






let BankingPage = class BankingPage {
    constructor(api, util, navCtrl) {
        this.api = api;
        this.util = util;
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    getMin() {
        return moment__WEBPACK_IMPORTED_MODULE_2__().format('YYYY-MM-DD');
    }
    getMax() {
        return moment__WEBPACK_IMPORTED_MODULE_2__().add('15', 'years').format('YYYY-MM-DD');
    }
    updateRest(body) {
        this.api.updateVenue(body).then((data) => {
            console.log(data);
        });
    }
    onslide2() {
        console.log(this.number, this.date, this.cvc);
        if (!this.number || !this.date || !this.cvc || !this.email || !this.name) {
            this.util.errorToast('All Fields are required');
            return false;
        }
        const emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
        if (!(emailfilter.test(this.email))) {
            this.util.errorToast('Please enter valid email');
            return false;
        }
        const month = moment__WEBPACK_IMPORTED_MODULE_2__(this.date).format('MM');
        const year = moment__WEBPACK_IMPORTED_MODULE_2__(this.date).format('YYYY');
        const param = {
            'card[number]': this.number,
            'card[exp_month]': month,
            'card[exp_year]': year,
            'card[cvc]': this.cvc
        };
        console.log('parms', param);
        this.util.show();
        this.api.httpPost('https://api.stripe.com/v1/tokens', param).subscribe((data) => {
            console.log(data);
            if (data && data.id) {
                this.token = data.id;
                const customer = {
                    description: 'Customer for food app',
                    source: this.token,
                    email: this.email
                };
                this.api.httpPost('https://api.stripe.com/v1/customers', customer).subscribe((customer) => {
                    console.log(customer);
                    this.util.hide();
                    if (customer && customer.id) {
                        this.cid = customer.id;
                        const cid = {
                            uid: localStorage.getItem('uid'),
                            cid: this.cid
                        };
                        this.updateRest(cid);
                    }
                }, error => {
                    this.util.hide();
                    console.log();
                    if (error && error.error && error.error.error && error.error.error.message) {
                        this.util.showErrorAlert(error.error.error.message);
                        return false;
                    }
                    this.util.errorToast('Error \n Something went wrong');
                });
            }
            else {
                this.util.hide();
            }
        }, (error) => {
            console.log(error);
            this.util.hide();
            console.log();
            if (error && error.error && error.error.error && error.error.error.message) {
                this.util.showErrorAlert(error.error.error.message);
                return false;
            }
            this.util.errorToast('Error \n Something went wrong');
        });
    }
    createBankInfo() {
        if (!this.account_holder_name || !this.account_number || !this.routing_number) {
            this.util.errorToast('All Fields are required');
            return false;
        }
        console.log(this.account_holder_name, this.account_number, this.routing_number);
        const param = {
            'bank_account[country]': 'US',
            'bank_account[currency]': 'usd',
            'bank_account[account_holder_name]': this.account_holder_name,
            'bank_account[account_holder_type]': 'individual',
            'bank_account[routing_number]': this.routing_number,
            'bank_account[account_number]': '000' + this.account_number
        };
        this.util.show();
        this.api.httpPost('https://api.stripe.com/v1/tokens', param).subscribe((data) => {
            console.log(data);
            if (data && data.id) {
                this.bid = data.id;
                const bank = {
                    source: this.bid
                };
                this.api.httpPost('https://api.stripe.com/v1/customers/' + this.cid, bank).subscribe((backRespone) => {
                    console.log(backRespone);
                    this.util.hide();
                    const bid = {
                        uid: localStorage.getItem('uid'),
                        bid: backRespone.default_source
                    };
                    this.updateRest(bid);
                    this.util.showToast('Account Created with stripe', 'success', 'bottom');
                    this.navCtrl.back();
                }, error => {
                    this.util.hide();
                    console.log();
                    if (error && error.error && error.error.error && error.error.error.message) {
                        this.util.showErrorAlert(error.error.error.message);
                        return false;
                    }
                    this.util.errorToast('Error \n Something went wrong');
                });
            }
        }, (error) => {
            console.log(error);
            this.util.hide();
            console.log();
            if (error && error.error && error.error.error && error.error.error.message) {
                this.util.showErrorAlert(error.error.error.message);
                return false;
            }
            this.util.errorToast('Error \n Something went wrong');
        });
    }
};
BankingPage.ctorParameters = () => [
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
];
BankingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-banking',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./banking.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/banking/banking.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./banking.page.scss */ "./src/app/pages/banking/banking.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])
], BankingPage);



/***/ })

}]);
//# sourceMappingURL=pages-banking-banking-module-es2015.js.map