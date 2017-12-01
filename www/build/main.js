webpackJsonp([2],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_sms__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_local_notifications__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the PlacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PlacePage = (function () {
    function PlacePage(navCtrl, navParams, emailComposer, sms, plt, localNotifications, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.emailComposer = emailComposer;
        this.sms = sms;
        this.plt = plt;
        this.localNotifications = localNotifications;
        var idvar = navParams.get('id');
        var namevar = navParams.get('name');
        this.id = idvar;
        this.name = namevar;
        console.log(namevar);
        this.plt.ready().then(function (readySource) {
            _this.localNotifications.on('click', function (notification, state) {
                var json = JSON.parse(notification.data);
                var alert = alertCtrl.create({
                    title: notification.title,
                    subTitle: json.mydata
                });
                alert.present();
            });
        });
    }
    PlacePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlacePage');
    };
    PlacePage.prototype.sendEmail = function () {
        var email = {
            to: 'max@mustermann.de',
            cc: 'erika@mustermann.de',
            bcc: ['john@doe.com', 'jane@doe.com'],
            attachments: [
                'file://img/logo.png',
                'res://icon.png',
                'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
                'file://README.pdf'
            ],
            subject: 'Cordova Icons',
            body: 'How are you? Nice greetings from Leipzig',
            isHtml: true
        };
        // Send a text message using default options
        this.emailComposer.open(email);
    };
    PlacePage.prototype.sendSMS = function () {
        this.sms.send('+447428722845', 'Hey! Fancy meeting up?');
    };
    PlacePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-place',template:/*ion-inline-start:"/Users/raudaschla/Desktop/icebreaker/src/pages/place/place.html"*/'<!--\n  Generated template for the PlacePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<style type="text/css">\n	.image {\n     height: 5vw; \n     width: 5vw; \n    border: 2px solid #fff;\n    border-radius: 50%;\n    box-shadow: 0 0 5px gray;\n    display: inline-block;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.circle-pic{\n    width: 40vw;\n    height: 40vw;\n    -webkit-border-radius: 50%;\n    border-radius: 50%;\n\n    border: 2px solid #fff;\n    border-radius: 50%;\n    box-shadow: 0 0 5px gray;\n    display: inline-block;\n    margin-left: auto;\n    margin-right: auto;\nmargin-bottom: 2vw;\n    \n}\n\n.center {\n	display: block;\n  vertical-align: middle;\n  text-align: center;\n}\n</style>\n\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{name}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n  <ion-content padding="true" class="has-header">\n\n\n\n    <img class="circle-pic center" \n src="http://lorempixel.com/1000/1000/people/" />\n\n\n 	<div class="center">\n    <h1 id="profile-heading1" style="color:#000000;">{{name}}</h1>\n    <div id="profile-markdown1" class="show-list-numbers-and-dots">\n      <p style="color:#000000;">Some friendly\n        <strong>markdown</strong>\n      </p>\n    </div>\n    \n    <button ion-button (click)="sendEmail()">Want to meet up?</button>\n    <button ion-button (click)="sendSMS()">Send SMS</button>\n    </div>\n  </ion-content>\n'/*ion-inline-end:"/Users/raudaschla/Desktop/icebreaker/src/pages/place/place.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__["a" /* EmailComposer */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_sms__["a" /* SMS */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_local_notifications__["a" /* LocalNotifications */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PlacePage);
    return PlacePage;
}());

//# sourceMappingURL=place.js.map

/***/ }),

/***/ 116:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		278,
		1
	],
	"../pages/place/place.module": [
		279,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_email_composer__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_local_notifications__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__place_place__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = (function () {
    function HomePage(navParams, navCtrl, geolocation, emailComposer, localNotifications, http) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.emailComposer = emailComposer;
        this.localNotifications = localNotifications;
        this.http = http;
        var usernameVar = navParams.get('username');
        console.log(usernameVar);
        this.username = usernameVar;
    }
    HomePage.prototype.test = function () {
        //     let watch = this.geolocation.watchPosition();
        // watch.subscribe((data) => {
        //  // data can be a set of coordinates, or an error (if an error occurred).
        //  // data.coords.latitude
        //  // data.coords.longitude
        //  console.log(data.coords.latitude);
        var _this = this;
        //  this.location = data;
        // });
        this.geolocation.getCurrentPosition()
            .then(function (location) {
            console.log('lat: ' + location.coords.latitude + ', lon: ' + location.coords.longitude);
            _this.location = location;
        });
    };
    HomePage.prototype.doubletest = function () {
        this.doubletestVar = 'location';
        this.http.get('http://ionicframework.com/', {}, {})
            .then(function (data) {
            console.log(data.status);
            console.log(data.data); // data received by server
            console.log(data.headers);
        })
            .catch(function (error) {
            console.log(error.status);
            console.log(error.error); // error message as string
            console.log(error.headers);
        });
        this.localNotifications.schedule({
            title: "Hello",
            at: new Date(new Date().getTime() + 3600),
            led: 'FF0000',
            data: { mydata: 'My hidden message this is' },
            text: 'Single ILocalNotification'
        });
    };
    HomePage.prototype.loadLoginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.loadPlacePage = function (id, name, image) {
        console.log(id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__place_place__["a" /* PlacePage */], {
            id: id,
            name: name,
            image: image
        });
    };
    HomePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            _this.test();
            _this.onOpenPlace();
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    HomePage.prototype.onOpenPlace = function () {
        this.samples = [
            { "id": 1, "name": "Adrian", "interests": "Medicine", "image": "http://lorempixel.com/100/100/people/" },
            { "id": 2, "name": "Adrian2", "interests": "Medicine2", "image": "http://lorempixel.com/100/100/people/" },
            { "id": 1, "name": "Adrian", "interests": "Medicine", "image": "http://lorempixel.com/100/100/people/" },
            { "id": 2, "name": "Adrian2", "interests": "Medicine2", "image": "http://lorempixel.com/100/100/people/" },
            { "id": 1, "name": "Adrian", "interests": "Medicine", "image": "http://lorempixel.com/100/100/people/" },
            { "id": 2, "name": "Adrian2", "interests": "Medicine2", "image": "http://lorempixel.com/100/100/people/" },
            { "id": 1, "name": "Adrian", "interests": "Medicine", "image": "http://lorempixel.com/100/100/people/" },
            { "id": 2, "name": "Adrian2", "interests": "Medicine2", "image": "http://lorempixel.com/100/100/people/" },
            { "id": 1, "name": "Adrian", "interests": "Medicine", "image": "http://lorempixel.com/100/100/people/" },
            { "id": 2, "name": "Adrian2", "interests": "Medicine2", "image": "http://lorempixel.com/100/100/people/" },
            { "id": 1, "name": "Adrian", "interests": "Medicine", "image": "http://lorempixel.com/100/100/people/" },
            { "id": 2, "name": "Adrian2", "interests": "Medicine2", "image": "http://lorempixel.com/100/100/people/" },
            { "id": 1, "name": "Adrian", "interests": "Medicine", "image": "http://lorempixel.com/100/100/people/" },
            { "id": 2, "name": "Adrian2", "interests": "Medicine2", "image": "http://lorempixel.com/100/100/people/" },
            { "id": 1, "name": "Adrian", "interests": "Medicine", "image": "http://lorempixel.com/100/100/people/" },
            { "id": 2, "name": "Adrian2", "interests": "Medicine2", "image": "http://lorempixel.com/100/100/people/" },
            { "id": 1, "name": "Adrian", "interests": "Medicine", "image": "http://lorempixel.com/100/100/people/" },
            { "id": 2, "name": "Adrian2", "interests": "Medicine2", "image": "http://lorempixel.com/100/100/people/" },
            { "id": 1, "name": "Adrian", "interests": "Medicine", "image": "http://lorempixel.com/100/100/people/" },
            { "id": 2, "name": "Adrian2", "interests": "Medicine2", "image": "http://lorempixel.com/100/100/people/" },
            { "id": 1, "name": "Adrian", "interests": "Medicine", "image": "http://lorempixel.com/100/100/people/" },
            { "id": 2, "name": "Adrian2", "interests": "Medicine2", "image": "http://lorempixel.com/100/100/people/" },
            { "id": 1, "name": "Adrian", "interests": "Medicine", "image": "http://lorempixel.com/100/100/people/" },
            { "id": 2, "name": "Adrian2", "interests": "Medicine2", "image": "http://lorempixel.com/100/100/people/" },
            { "id": 1, "name": "Adrian", "interests": "Medicine", "image": "http://lorempixel.com/100/100/people/" },
            { "id": 2, "name": "Adrian2", "interests": "Medicine2", "image": "http://lorempixel.com/100/100/people/" },
            { "id": 1, "name": "Adrian", "interests": "Medicine", "image": "http://lorempixel.com/100/100/people/" },
            { "id": 2, "name": "Adrian2", "interests": "Medicine2", "image": "http://lorempixel.com/100/100/people/" }
        ];
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/raudaschla/Desktop/icebreaker/src/pages/home/home.html"*/'<style type="text/css">\n  .pull-right {\nposition: absolute;\nright: 2px;\ntop: 0px;\n}\n\n.pull-right img {\n      height: 50px;\n          border-radius: 50px;\n}\n\n\n.fixed-header{\n  margin-top:43px;\n  /* \n   The ionic header bar is 43px in height,\n   put your content below the header bar.\n  */\n}\n\n.platform-webview.platform-ios.platform-cordova .fixed-header{\n  margin-top:63px;\n  /* On iOS, moving a div out of ion-content,\n  I think you need to compensation for the 20px system status bar.\n  so it\'s 43px+20px=63px. but I\'m not so sure, it hasn\'t been tested.\n  Test it yourself and make modifications if needed.\n  */\n}\n\n.my-video\n{\n  height:200px;\n  width:100%;\n  position:absolute;\n  background:grey;\n  color:red;\n  text-align:center;\n  padding:20px;\n}\n\n.ion-content-below-my-video{\n  margin-top:200px!important;\n}\n\n.platform-webview.platform-ios.platform-cordova .ion-content-below-my-video{\n  margin-top:220px;\n  /*\n  Same as .fixed-header\n  */\n}\n\n  .center {\n  display: block;\n  vertical-align: middle;\n  text-align: center;\n}\n</style>\n\n\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Researchers Near You\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n\n\n<ion-content padding="true" class="">\n\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n      pullingIcon="arrow-dropdown"\n      pullingText="Pull to refresh"\n      refreshingSpinner="circles"\n      refreshingText="Refreshing...">\n    </ion-refresher-content>\n  </ion-refresher>\n\n \n\n <div class="center">\n\n   <h1 *ngIf="username">Welcome {{username}}</h1>\n   \n   <button ion-button  (click)="test()">Loctae</button>\n   <button ion-button (click)="doubletest()">doubletest</button>\n\n      <button ion-button (click)="loadLoginPage()">Login</button>\n\n      <button ion-button (click)="onOpenPlace()">onOpenPlace</button>\n\n\n      \n </div>\n      \n\n<ion-list>\n    <ion-item *ngFor="let item of samples" (click)="loadPlacePage(item.id, item.name)">\n\n      <div class="item-icon-left">\n        <h4>{{item.name}}</h4>\n        <p>{{item.interests}}</p>\n    </div>\n    <div class="pull-right">\n        <img src="{{item.image}}">\n    </div>\n  \n    </ion-item>\n  </ion-list>\n\n    <ion-list>\n\n\n\n         <p>{{ location?.coords.latitude }}</p>\n          <p>{{ doubletestVar }}</p>\n    </ion-list>\n  </ion-content>\n\n'/*ion-inline-end:"/Users/raudaschla/Desktop/icebreaker/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_email_composer__["a" /* EmailComposer */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_local_notifications__["a" /* LocalNotifications */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_http__["a" /* HTTP */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_email_composer__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_local_notifications__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_sms__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_place_place__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_place_place__["a" /* PlacePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/place/place.module#PlacePageModule', name: 'PlacePage', segment: 'place', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_place_place__["a" /* PlacePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_sms__["a" /* SMS */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_http__["a" /* HTTP */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_local_notifications__["a" /* LocalNotifications */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_email_composer__["a" /* EmailComposer */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, geolocation) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            console.log('test');
        });
    }
    MyApp.prototype.test = function () {
        console.log('test2');
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/raudaschla/Desktop/icebreaker/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/raudaschla/Desktop/icebreaker/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.loadHomePage = function () {
        this.http.get('http://ionicframework.com/?username=' + this.username + '&password=' + this.password, {}, {})
            .then(function (data) {
            console.log(data.status);
            console.log(data.data); // data received by server
            console.log(data.headers);
        })
            .catch(function (error) {
            console.log(error.status);
            console.log(error.error); // error message as string
            console.log(error.headers);
        });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], {
            username: this.username
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/raudaschla/Desktop/icebreaker/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n  <ion-content padding="true" class="has-header">\n   <ion-list>\n<ion-item>\n    <ion-label floating>Username</ion-label>\n    <ion-input type="text" [(ngModel)]="username"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Password</ion-label>\n    <ion-input type="password" [(ngModel)]="password"></ion-input>\n  </ion-item>\n</ion-list>\n	\n       <button ion-button (click)="loadHomePage()">Log in</button>\n       <button ion-button (click)="loadHomePage()">Or create an account</button>\n\n\n\n  </ion-content>\n'/*ion-inline-end:"/Users/raudaschla/Desktop/icebreaker/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__["a" /* HTTP */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map