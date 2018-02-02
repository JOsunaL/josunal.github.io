webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/aleatorio.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AleatorioPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AleatorioPipe = (function () {
    function AleatorioPipe() {
        this.arrayval = [];
        this.comprobarrep = [];
    }
    AleatorioPipe.prototype.transform = function (value, args) {
        for (var x = 0; x < 3; x++) {
            var num_ale = Math.floor(Math.random() * value.length);
            while (num_ale in this.comprobarrep) {
                num_ale = Math.floor(Math.random() * value.length);
            }
            if (value[num_ale] != undefined) {
                // Esta comprobacion es debido a que se añade al array 3 veces un undefined, de este modo,
                // evitamos que incluya undefined en el array
                if (value[num_ale].thumbnail == "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Fgenerated_images_sorted%252FFighter%252Ftommy-wauchope-bud-light-living-champion%252Ftommy-wauchope-bud-light-living-champion_530229_medium_thumbnail.png?-mw300-mh300-tc1") {
                    value[num_ale].thumbnail = "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Fgenerated_images_sorted%252FFighter%252FRaoni-Barcelos%252FRaoni-Barcelos_641628_medium_thumbnail.jpg?-mw300-mh300-tc1";
                }
                this.comprobarrep.push(num_ale);
                this.arrayval.push(value[num_ale]);
            }
        }
        return this.arrayval;
    };
    AleatorioPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'aleatorio'
        })
    ], AleatorioPipe);
    return AleatorioPipe;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-cabecera></app-cabecera>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cabecera_cabecera_component__ = __webpack_require__("../../../../../src/app/cabecera/cabecera.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inicio_inicio_component__ = __webpack_require__("../../../../../src/app/inicio/inicio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fighters_fighters_component__ = __webpack_require__("../../../../../src/app/fighters/fighters.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__news_news_component__ = __webpack_require__("../../../../../src/app/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__datos_ufc_service__ = __webpack_require__("../../../../../src/app/datos-ufc.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__events_events_component__ = __webpack_require__("../../../../../src/app/events/events.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__aleatorio_pipe__ = __webpack_require__("../../../../../src/app/aleatorio.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__filtrarfecha_pipe__ = __webpack_require__("../../../../../src/app/filtrarfecha.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__filtrarpeso_pipe__ = __webpack_require__("../../../../../src/app/filtrarpeso.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__error_error_component__ = __webpack_require__("../../../../../src/app/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__filtrartitulo_pipe__ = __webpack_require__("../../../../../src/app/filtrartitulo.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__buscarluchador_pipe__ = __webpack_require__("../../../../../src/app/buscarluchador.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var routes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_4__inicio_inicio_component__["a" /* InicioComponent */] },
    { path: 'fighters', component: __WEBPACK_IMPORTED_MODULE_5__fighters_fighters_component__["a" /* FightersComponent */] },
    { path: 'news', component: __WEBPACK_IMPORTED_MODULE_6__news_news_component__["a" /* NewsComponent */] },
    { path: 'events', component: __WEBPACK_IMPORTED_MODULE_10__events_events_component__["a" /* EventsComponent */] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_16__error_error_component__["a" /* ErrorComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__cabecera_cabecera_component__["a" /* CabeceraComponent */],
                __WEBPACK_IMPORTED_MODULE_4__inicio_inicio_component__["a" /* InicioComponent */],
                __WEBPACK_IMPORTED_MODULE_5__fighters_fighters_component__["a" /* FightersComponent */],
                __WEBPACK_IMPORTED_MODULE_6__news_news_component__["a" /* NewsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__events_events_component__["a" /* EventsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__aleatorio_pipe__["a" /* AleatorioPipe */],
                __WEBPACK_IMPORTED_MODULE_13__filtrarfecha_pipe__["a" /* FiltrarfechaPipe */],
                __WEBPACK_IMPORTED_MODULE_14__filtrarpeso_pipe__["a" /* FiltrarpesoPipe */],
                __WEBPACK_IMPORTED_MODULE_16__error_error_component__["a" /* ErrorComponent */],
                __WEBPACK_IMPORTED_MODULE_17__filtrartitulo_pipe__["a" /* FiltrartituloPipe */],
                __WEBPACK_IMPORTED_MODULE_18__buscarluchador_pipe__["a" /* BuscarluchadorPipe */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_router__["b" /* RouterModule */].forRoot(routes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__datos_ufc_service__["a" /* DatosUfcService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/buscarluchador.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuscarluchadorPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BuscarluchadorPipe = (function () {
    function BuscarluchadorPipe() {
    }
    BuscarluchadorPipe.prototype.transform = function (value, args) {
        var filtro = args;
        var ret = value.filter(function (luchador) {
            return luchador.first_name.toLowerCase().includes(filtro.toLowerCase()) || luchador.last_name.toLowerCase().includes(filtro.toLowerCase());
        });
        return ret;
    };
    BuscarluchadorPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'buscarluchador'
        })
    ], BuscarluchadorPipe);
    return BuscarluchadorPipe;
}());



/***/ }),

/***/ "../../../../../src/app/cabecera/cabecera.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url('https://fonts.googleapis.com/css?family=Anton');\r\n\r\n.cabecera {\r\n  background-color: #292929;\r\n}\r\n\r\n.menu {\r\n  text-align: center;\r\n  color: #000000;\r\n  font-family: \"Anton\";\r\n  font-size: 30px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -ms-flex-line-pack: center;\r\n      align-content: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  border: solid 2px black;\r\n}\r\n\r\n.menu>a{\r\n  color: black;\r\n}\r\n\r\n.menu-img {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -ms-flex-line-pack: center;\r\n      align-content: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  border: solid 2px black;\r\n}\r\n\r\n#int_menu-img:hover {\r\n  -webkit-transform: scale(1.2);\r\n  transform: scale(1.2) rotate(340deg);\r\n}\r\n\r\n.menu:hover > img {\r\n  -webkit-transform: scale(1.2);\r\n  transform: scale(1.2)\r\n}\r\n\r\n.menu:hover {\r\n  text-decoration: underline;\r\n  background-color: #090909;\r\n}\r\n\r\n.enlace {\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n\r\na {\r\n  color: #FFFFFF;\r\n}\r\n\r\n.enlace:hover > a {\r\n  font-style: italic;\r\n}\r\n\r\n.espacio {\r\n  height: 7px;\r\n}\r\n\r\n#padre_bread{\r\n  background-color: #292929;\r\n}\r\n\r\n#hijo_bread{\r\n  background-color: #292929;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cabecera/cabecera.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"col-12 espacio\"></div>\n  <div class=\"row cabecera\">\n    <div class=\"col-1 menu-img\"><a (click)=\"cambioHome()\" [routerLink]=\"['home']\"><img id=\"int_menu-img\"\n                                                                                       src=\"assets/logo-page.png\"/></a>\n    </div>\n    <div class=\"col-3 menu\"><a (click)=\"cambioNews()\" [routerLink]=\"['news']\">News</a></div>\n    <div class=\"col-4 menu\"><a (click)=\"cambioFighters()\" [routerLink]=\"['fighters']\">Fighters</a></div>\n    <div class=\"col-3 menu\"><a (click)=\"cambioEvents()\" [routerLink]=\"['events']\">Events</a></div>\n    <div class=\"col-1 menu\"><img src=\"assets/settings.png\"/></div>\n    <div class=\"col-12\">\n      <nav aria-label=\"breadcrumb\" id=\"padre_bread\">\n        <ol class=\"breadcrumb\" id=\"hijo_bread\">\n          <li class=\"breadcrumb-item enlace\"><a (click)=\"cambioHome()\" [routerLink]=\"['home']\">Home</a></li>\n          <li class=\"breadcrumb-item enlace\" *ngIf=\"DatosUfcService.controlarBread == 'figthers'\" aria-current=\"page\"><a\n            [routerLink]=\"['fighters']\" (click)=\"cambioFighters()\">Fighters</a></li>\n          <li class=\"breadcrumb-item enlace\" *ngIf=\"DatosUfcService.controlarBread == 'news'\" aria-current=\"page\"><a\n            [routerLink]=\"['news']\" (click)=\"cambioNews()\">News</a></li>\n          <li class=\"breadcrumb-item enlace\" *ngIf=\"DatosUfcService.controlarBread == 'events'\" aria-current=\"page\"><a\n            [routerLink]=\"['events']\" (click)=\"cambioEvents()\">Events</a></li>\n        </ol>\n      </nav>\n    </div>\n  </div>\n</div>\n<br>\n"

/***/ }),

/***/ "../../../../../src/app/cabecera/cabecera.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CabeceraComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datos_ufc_service__ = __webpack_require__("../../../../../src/app/datos-ufc.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CabeceraComponent = (function () {
    function CabeceraComponent(router, DatosUfcService) {
        this.router = router;
        this.DatosUfcService = DatosUfcService;
    }
    CabeceraComponent.prototype.ngOnInit = function () {
    };
    CabeceraComponent.prototype.cambioFighters = function () {
        this.DatosUfcService.controlarBread = 'figthers';
    };
    CabeceraComponent.prototype.cambioNews = function () {
        this.DatosUfcService.controlarBread = 'news';
    };
    CabeceraComponent.prototype.cambioEvents = function () {
        this.DatosUfcService.controlarBread = 'events';
    };
    CabeceraComponent.prototype.cambioHome = function () {
        this.DatosUfcService.controlarBread = 'home';
    };
    CabeceraComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cabecera',
            template: __webpack_require__("../../../../../src/app/cabecera/cabecera.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cabecera/cabecera.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__datos_ufc_service__["a" /* DatosUfcService */]])
    ], CabeceraComponent);
    return CabeceraComponent;
}());



/***/ }),

/***/ "../../../../../src/app/datos-ufc.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatosUfcService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DatosUfcService = (function () {
    function DatosUfcService(http) {
        this.http = http;
        this.apiantonio = "https://atalgaba.com/api.php?url=";
        this.controlarBread = "home";
    }
    DatosUfcService.prototype.luchadores = function () {
        return this.http.get(this.apiantonio + "http://ufc-data-api.ufc.com/api/v1/us/fighters");
    };
    DatosUfcService.prototype.luchadorEspecifico = function (idfight) {
        var _this = this;
        this.listaFighters = this.luchadores();
        this.listaFighters.subscribe(function (data) {
            _this.listadelucha = data;
        });
        for (var x in this.listadelucha) {
            if (this.listadelucha[x].id == idfight) {
                return this.listadelucha[x];
            }
        }
    };
    DatosUfcService.prototype.noticias = function () {
        return this.http.get(this.apiantonio + "http://ufc-data-api.ufc.com/api/v1/us/news");
    };
    DatosUfcService.prototype.eventos = function () {
        return this.http.get(this.apiantonio + "http://ufc-data-api.ufc.com/api/v1/us/events");
    };
    DatosUfcService.prototype.currluchadores = function () {
        return this.http.get(this.apiantonio + "http://ufc-data-api.ufc.com/api/v1/us/fighters/title_holders");
    };
    DatosUfcService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DatosUfcService);
    return DatosUfcService;
}());



/***/ }),

/***/ "../../../../../src/app/error/error.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1, h2 , a{\r\n  font-family: Anton, sans-serif;\r\n  font-style: italic;\r\n  font-weight: bold;\r\n  color: #FFFFFF;\r\n  text-align: center;\r\n  font-size: 70px;\r\n}\r\nh2{\r\n  font-size: 50px;\r\n}\r\na:hover{\r\n  text-decoration: underline;\r\n}\r\nimg {\r\n  width: 500px;\r\n  height: 281px;\r\n  border: 2px solid white;\r\n  display:block;\r\n  margin:auto;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/error/error.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Error 404!</h1>\n<h1>The page is missing or does not exist!</h1>\n<img src=\"{{cambio}}\" (click)=\"cambiaImg()\" class=\"imagen\"/>\n<h1 *ngIf=\"mostrar\"><a [routerLink]=\"['']\"> Go to Home</a></h1>\n"

/***/ }),

/***/ "../../../../../src/app/error/error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorComponent = (function () {
    function ErrorComponent() {
        this.cambio = "../../assets/triste.jpg";
        this.mostrar = false;
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent.prototype.cambiaImg = function () {
        if (this.cambio == "../../assets/contento.jpg") {
            this.cambio = "../../assets/triste.jpg";
            this.mostrar = false;
        }
        else {
            this.cambio = "../../assets/contento.jpg";
            this.mostrar = true;
        }
    };
    ErrorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-error',
            template: __webpack_require__("../../../../../src/app/error/error.component.html"),
            styles: [__webpack_require__("../../../../../src/app/error/error.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/events/events.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.imagenEvent {\r\n  width: 500px;\r\n  height: 281px;\r\n  border: 2px solid white;\r\n}\r\n\r\n.tickets {\r\n  background-color: darkred;\r\n}\r\n\r\n.evento{\r\n  margin-top: 10px;\r\n}\r\n\r\n.infoevent {\r\n  background-color: black;\r\n  color: #FFFFFF;\r\n  font-family: Arial, sans-serif;\r\n  font-style: italic;\r\n  font-weight: bold;\r\n  font-size: 15px;\r\n  border: dashed 2px white;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -ms-flex-line-pack: center;\r\n      align-content: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\n\r\n.enlace {\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n\r\n.enlace:hover {\r\n  font-style: italic;\r\n}\r\n\r\n.espacio {\r\n  height: 30px;\r\n}\r\n\r\nh1 {\r\n  font-family: Anton, sans-serif;\r\n  font-style: italic;\r\n  font-weight: bold;\r\n  color: #FFFFFF;\r\n  text-align: center;\r\n  font-size: 70px;\r\n  text-decoration: underline;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/events/events.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12\"><h1>Upcoming and past events!</h1></div>\n    <div class=\"col-11 evento\" *ngFor=\"let evento of listaEventos\">\n      <div class=\"row\">\n        <div class=\"col-6\">\n            <img src=\"{{evento.feature_image}}\" alt=\"Not found - Event UFC Image\" class=\"imagenEvent\"\n                 (error)=\"updateUrl($event)\"/>\n        </div>\n        <div class=\"col-6 infoevent\">\n          <div *ngIf=\"evento.base_title\">Title event: {{evento.base_title}}</div>\n          <div *ngIf=\"evento.event_date\">Date event: {{evento.event_date | filtrarfecha}}</div>\n          <div *ngIf=\"evento.title_tag_line\">Main event: {{evento.title_tag_line}}</div>\n          <div *ngIf=\"evento.arena\">Arena: {{evento.arena}}</div>\n          <div *ngIf=\"evento.location\">Location: {{evento.location}}</div>\n          <div *ngIf=\"evento.subtitle\">{{evento.subtitle}}</div>\n          <div *ngIf=\"evento.ticketurl\">Buy tickets now: <a class=\"enlace tickets\" target=\"_blank\"\n                                                            href=\"{{evento.ticketurl}}\">{{evento.ticketurl}}</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/events/events.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datos_ufc_service__ = __webpack_require__("../../../../../src/app/datos-ufc.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventsComponent = (function () {
    function EventsComponent(DatosUfcService) {
        this.DatosUfcService = DatosUfcService;
        this.listaEventos = [];
    }
    EventsComponent.prototype.ngOnInit = function () {
        this.getEvents();
    };
    EventsComponent.prototype.updateUrl = function (evento) {
        evento.target.src = "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Ffeatures%252F019907_WEB_EventPlaceholderRebrand_PPV.jpg?-mw500-mh500-tc1";
    };
    EventsComponent.prototype.getEvents = function () {
        var _this = this;
        this.DatosUfcService.eventos().subscribe(function (data) {
            _this.listaEventos = data;
        });
    };
    EventsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-events',
            template: __webpack_require__("../../../../../src/app/events/events.component.html"),
            styles: [__webpack_require__("../../../../../src/app/events/events.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__datos_ufc_service__["a" /* DatosUfcService */]])
    ], EventsComponent);
    return EventsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/fighters/fighters.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input {\r\n  background-color: black;\r\n  border: solid 2px white;\r\n  color: white;\r\n}\r\n\r\ninput:focus {\r\n  background-color: black;\r\n  border: solid 2px white;\r\n  color: white;\r\n}\r\n\r\nh1 {\r\n  font-family: Anton, sans-serif;\r\n  font-style: italic;\r\n  font-weight: bold;\r\n  color: #FFFFFF;\r\n  text-align: center;\r\n  font-size: 70px;\r\n  text-decoration: underline;\r\n}\r\n\r\ndiv {\r\n  color: #FFFFFF;\r\n  font-size: 20px;\r\n}\r\n\r\n.luchadores {\r\n  margin-top: 10px;\r\n}\r\n\r\n.infolucha {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -ms-flex-line-pack: center;\r\n      align-content: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/fighters/fighters.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <input [(ngModel)]=\"busqueda\" type=\"text\" class=\"form-control\"\n             placeholder=\"Write the name of a fighter and press enter to find it...\"/>\n    </div>\n  </div>\n  <h1>Random fighters!</h1>\n  <div class=\"col-11 luchadores\" *ngFor=\"let fighter of listaLuchadores | aleatorio\">\n    <div class=\"row\" (click)=\"abrir(fighter)\"\n         *ngIf=\"fighter.last_name != 'To Be Determined' && fighter.last_name != 'To Be Announced' && fighter.last_name != 'To be announced' && fighter.last_name != 'To be determined'\">\n      <img src=\"{{fighter.thumbnail}}\" alt=\"Not found - Event UFC Image\" class=\"imagenEvent col-3\"/>\n      <div class=\"col-4 infolucha\">\n        <div *ngIf=\"fighter.first_name || fighter.last_name\">{{fighter.first_name}} {{fighter.last_name}}</div>\n        <h3 *ngIf=\"fighter.title_holder\">CHAMPION!</h3>\n        <div *ngIf=\"fighter.muestra\">\n          <div *ngIf=\"fighter.wins\"><b>Wins: </b> {{fighter.wins}}</div>\n          <div *ngIf=\"fighter.losses\"><b>Losses: </b> {{fighter.losses}}</div>\n        </div>\n      </div>\n      <div *ngIf=\"fighter.muestra\" class=\"col-5 infolucha\">\n        <div *ngIf=\"fighter.weight_class\"><b>Weight Class: </b>{{fighter.weight_class | filtrarpeso}}</div>\n        <div *ngIf=\"fighter.losses\"><b>Losses: </b> {{fighter.losses}}</div>\n        <div *ngIf=\"fighter.fighter_status\"><b>Status: </b> {{fighter.fighter_status}}</div>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"busqueda\" class=\"col-12\">\n    <h1>Results</h1>\n    <div class=\"col-11 luchadores\" *ngFor=\"let fighter of listaLuchadores | buscarluchador:busqueda\">\n      <div class=\"row\" (click)=\"abrir(fighter)\"\n           *ngIf=\"fighter.last_name != 'To Be Determined' && fighter.last_name != 'To Be Announced' && fighter.last_name != 'To be announced' && fighter.last_name != 'To be determined'\">\n        <img src=\"{{fighter.thumbnail}}\" alt=\"Not found - Event UFC Image\" class=\"imagenEvent col-3\"/>\n        <div class=\"col-4 infolucha\">\n          <div *ngIf=\"fighter.first_name || fighter.last_name\">{{fighter.first_name}} {{fighter.last_name}}</div>\n          <h3 *ngIf=\"fighter.title_holder\">CHAMPION!</h3>\n          <div *ngIf=\"fighter.muestra\">\n            <div *ngIf=\"fighter.wins\"><b>Wins: </b> {{fighter.wins}}</div>\n            <div *ngIf=\"fighter.losses\"><b>Losses: </b> {{fighter.losses}}</div>\n          </div>\n        </div>\n        <div *ngIf=\"fighter.muestra\" class=\"col-5 infolucha\">\n          <div *ngIf=\"fighter.weight_class\"><b>Weight Class: </b>{{fighter.weight_class | filtrarpeso}}</div>\n          <div *ngIf=\"fighter.losses\"><b>Losses: </b> {{fighter.losses}}</div>\n          <div *ngIf=\"fighter.fighter_status\"><b>Status: </b> {{fighter.fighter_status}}</div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/fighters/fighters.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FightersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datos_ufc_service__ = __webpack_require__("../../../../../src/app/datos-ufc.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FightersComponent = (function () {
    function FightersComponent(router, DatosUfcService) {
        this.router = router;
        this.DatosUfcService = DatosUfcService;
        this.listaLuchadores = [];
    }
    FightersComponent.prototype.ngOnInit = function () {
        this.getFighters();
    };
    FightersComponent.prototype.getFighters = function () {
        var _this = this;
        this.DatosUfcService.luchadores().subscribe(function (data) {
            _this.listaLuchadores = data;
        });
    };
    FightersComponent.prototype.abrir = function (objeto) {
        objeto.muestra = true;
    };
    FightersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-fighters',
            template: __webpack_require__("../../../../../src/app/fighters/fighters.component.html"),
            styles: [__webpack_require__("../../../../../src/app/fighters/fighters.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_1__datos_ufc_service__["a" /* DatosUfcService */]])
    ], FightersComponent);
    return FightersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/filtrarfecha.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiltrarfechaPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FiltrarfechaPipe = (function () {
    function FiltrarfechaPipe() {
    }
    FiltrarfechaPipe.prototype.transform = function (value, args) {
        return value.substr(0, 10);
    };
    FiltrarfechaPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'filtrarfecha'
        })
    ], FiltrarfechaPipe);
    return FiltrarfechaPipe;
}());



/***/ }),

/***/ "../../../../../src/app/filtrarpeso.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiltrarpesoPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FiltrarpesoPipe = (function () {
    function FiltrarpesoPipe() {
    }
    FiltrarpesoPipe.prototype.transform = function (value, args) {
        value = value.split("_").join(" ");
        return value;
    };
    FiltrarpesoPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'filtrarpeso'
        })
    ], FiltrarpesoPipe);
    return FiltrarpesoPipe;
}());



/***/ }),

/***/ "../../../../../src/app/filtrartitulo.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiltrartituloPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FiltrartituloPipe = (function () {
    function FiltrartituloPipe() {
    }
    FiltrartituloPipe.prototype.transform = function (value, args) {
        value = value.split("-").join(" ");
        return value;
    };
    FiltrartituloPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'filtrartitulo'
        })
    ], FiltrartituloPipe);
    return FiltrartituloPipe;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url('https://fonts.googleapis.com/css?family=Anton');\r\n.foot{\r\n  background-color: #292929;\r\n  color: #FFFFFF;\r\n}\r\n.menu-img{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -ms-flex-line-pack: center;\r\n      align-content: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\n.redes{\r\n  text-align: right;\r\n}\r\n.menu-img:hover{\r\n  -webkit-transform: scale(1.2);\r\n  transform: scale(1.2);\r\n  background-color: #090909;\r\n}\r\n.identificador{\r\n  padding-left: 120px;\r\n}\r\n.enlace{\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n.enlace:hover{\r\n  font-style: italic;\r\n}\r\n.espacio{\r\n  height: 7px;\r\n}\r\n.fondo_blanco{\r\n  background-color: #FFFFFF;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"container-fluid\">\n  <div class=\"row foot\">\n    <div class=\"col-12 espacio\"></div>\n    <div class=\"col-11\">\n      <div class=\"row\">\n        <div class=\"col-6 identificador\">\n          <div class=\"col-12\">By: Juan Osuna Lorenzo - 2º DAW - DWEC</div>\n          <div class=\"col-12\">Nickname: SrSnaKe</div>\n          <div class=\"col-12\">Used API: <a href=\"http://ufc-data-api.ufc.com/api/v1/us/\" target=\"_blank\" class=\"enlace\">UFC-DATA-API</a>\n          </div>\n        </div>\n        <div class=\"col-6 redes\">\n          <div class=\"col-12\">Email account &nbsp;<img alt=\"Contacto por Correo\" height=\"22\"\n                                                       src=\"http://2.bp.blogspot.com/-OjUzWLUCv4s/Uid1WOlDc0I/AAAAAAAACB0/Lhqbb2gb9Sc/s1600/correo.png\"\n                                                       title=\"Contacto por Correo\" width=\"22\"/>\n          </div>\n          <div class=\"col-12\"><a href=\"https://github.com/JOsunaL\" class=\"enlace\">Github account - JOsunaL</a>\n            &nbsp;<img class=\"fondo_blanco\" alt=\"Sígueme en Github\" height=\"22\"\n                       src=\"https://assets-cdn.github.com/favicon.ico\"\n                       title=\"Sígueme en Github\" width=\"22\"/>\n          </div>\n          <div class=\"col-12\">Twitter account &nbsp;<img class=\"fondo_blanco\" alt=\"Siguenos en Twitter\"\n                                                         height=\"22\"\n                                                         src=\"https://abs.twimg.com/favicons/favicon.ico\"\n                                                         title=\"Siguenos en Twitter\" width=\"22\"/>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-1 menu-img\"><img src=\"assets/settings.png\"/></div>\n    <div class=\"col-12 espacio\"></div>\n  </div>\n  <div class=\"col-12 espacio\"></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/inicio/inicio.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Istok+Web);\r\n@import url('https://fonts.googleapis.com/css?family=Anton');\r\n@-webkit-keyframes slidy {\r\n  0% {\r\n    left: 0%;\r\n  }\r\n  20% {\r\n    left: 0%;\r\n  }\r\n  25% {\r\n    left: -100%;\r\n  }\r\n  45% {\r\n    left: -100%;\r\n  }\r\n  50% {\r\n    left: -200%;\r\n  }\r\n  70% {\r\n    left: -200%;\r\n  }\r\n  75% {\r\n    left: -300%;\r\n  }\r\n  95% {\r\n    left: -300%;\r\n  }\r\n  100% {\r\n    left: -400%;\r\n  }\r\n}\r\n@keyframes slidy {\r\n  0% {\r\n    left: 0%;\r\n  }\r\n  20% {\r\n    left: 0%;\r\n  }\r\n  25% {\r\n    left: -100%;\r\n  }\r\n  45% {\r\n    left: -100%;\r\n  }\r\n  50% {\r\n    left: -200%;\r\n  }\r\n  70% {\r\n    left: -200%;\r\n  }\r\n  75% {\r\n    left: -300%;\r\n  }\r\n  95% {\r\n    left: -300%;\r\n  }\r\n  100% {\r\n    left: -400%;\r\n  }\r\n}\r\n* {\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\nbody, figure {\r\n  margin: 0;\r\n  background: #101010;\r\n  font-family: Istok Web, sans-serif;\r\n  font-weight: 100;\r\n}\r\ndiv#captioned-gallery {\r\n  width: 100%;\r\n  overflow: hidden;\r\n}\r\nfigure.slider {\r\n  position: relative;\r\n  width: 500%;\r\n  font-size: 0;\r\n  -webkit-animation: 30s slidy infinite;\r\n          animation: 30s slidy infinite;\r\n}\r\nfigure.slider figure {\r\n  width: 20%;\r\n  height: auto;\r\n  display: inline-block;\r\n  position: inherit;\r\n}\r\nfigure.slider img {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\nfigure.slider figure figcaption {\r\n  position: absolute;\r\n  bottom: 0;\r\n  background: rgba(0, 0, 0, 0.4);\r\n  color: #fff;\r\n  width: 100%;\r\n  font-size: 2rem;\r\n  padding: .6rem;\r\n}\r\n.borde {\r\n  border: dashed 5px dimgrey;\r\n}\r\nh1 {\r\n  font-family: Anton, sans-serif;\r\n  font-style: italic;\r\n  font-weight: bold;\r\n  color: #FFFFFF;\r\n  text-align: center;\r\n  font-size: 70px;\r\n  text-decoration: underline;\r\n}\r\n.campeones {\r\n  font-family: Arial, sans-serif;\r\n  font-style: italic;\r\n  font-weight: bold;\r\n  color: black;\r\n  text-align: center;\r\n  font-size: 20px;\r\n  border: dashed 2px dimgrey;\r\n  overflow: hidden;\r\n  background-color: black;\r\n}\r\n.champ {\r\n  background-color: white;\r\n}\r\n.campeones > img {\r\n  background-color: black;\r\n}\r\n.imagenEvent {\r\n  width: 500px;\r\n  height: 281px;\r\n  border: 2px solid white;\r\n}\r\n.tickets{\r\n  background-color: darkred;\r\n}\r\n.infoevent {\r\n  background-color: black;\r\n  color: #FFFFFF;\r\n  font-family: Arial, sans-serif;\r\n  font-style: italic;\r\n  font-weight: bold;\r\n  font-size: 15px;\r\n  border: dashed 2px white;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -ms-flex-line-pack: center;\r\n      align-content: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\n.enlace {\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n.enlace:hover {\r\n  font-style: italic;\r\n}\r\n.espacio{\r\n  height: 30px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/inicio/inicio.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-10 offset-1\">\n      <div id=\"captioned-gallery\">\n        <figure class=\"slider\">\n          <figure>\n            <img src=\"assets/new1.jpg\" class=\"borde\">\n            <figcaption>Stipe Miocic leaves his mark by being the first full weight to defend his championship three\n              times and he looks overwhelming\n            </figcaption>\n          </figure>\n          <figure>\n            <img src=\"assets/new2.jpg\" class=\"borde\">\n            <figcaption>McGregor's title is in danger: the UFC sets the fight to replace him</figcaption>\n          </figure>\n          <figure>\n            <img src=\"assets/new3.jpg\" class=\"borde\">\n            <figcaption>Clash of world champions for Bellator 194!</figcaption>\n          </figure>\n          <figure>\n            <img src=\"assets/new4.jpg\" class=\"borde\">\n            <figcaption>Nate Díaz put a date on his return to the UFC octagon</figcaption>\n          </figure>\n          <figure>\n            <img src=\"assets/new1.jpg\" class=\"borde\">\n            <figcaption>Stipe Miocic leaves his mark by being the first full weight to defend his championship three\n              times and he looks overwhelming\n            </figcaption>\n          </figure>\n        </figure>\n      </div>\n    </div>\n  </div>\n  <br>\n  <div class=\"row\">\n    <div class=\"col-12\"><h1>Example events</h1></div>\n    <div class=\"col-12\" *ngFor=\"let evento of listaEventos | aleatorio\">\n      <div class=\"row\">\n        <div class=\"col-6\">\n          <div>\n            <img src=\"{{evento.feature_image}}\" class=\"imagenEvent\"\n                 (error)=\"updateUrl($event)\"/>\n          </div>\n        </div>\n        <div class=\"col-6 infoevent\">\n          <div *ngIf=\"evento.base_title\">Title event: {{evento.base_title}}</div>\n          <div *ngIf=\"evento.event_date\">Date event: {{evento.event_date | filtrarfecha}}</div>\n          <div *ngIf=\"evento.title_tag_line\">Main event: {{evento.title_tag_line}}</div>\n          <div *ngIf=\"evento.arena\">Arena: {{evento.arena}}</div>\n          <div *ngIf=\"evento.location\">Location: {{evento.location}}</div>\n          <div *ngIf=\"evento.subtitle\">{{evento.subtitle}}</div>\n          <div *ngIf=\"evento.ticketurl\">Buy tickets now: <a class=\"enlace tickets\" target=\"_blank\"\n                                                            href=\"{{evento.ticketurl}}\">{{evento.ticketurl}}</a>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12 espacio\">\n          </div>\n        </div>\n      </div>\n    </div>\n    <br>\n    <div class=\"row\">\n      <div class=\"col-12\"><h1>Current Champions</h1></div>\n      <div class=\"row\">\n        <div class=\"col-12 col-md-3 col-sm-6 campeones\" *ngFor=\"let campeon of listaCampeones\">\n          <img src=\"{{campeon.belt_thumbnail}}\"/>\n          <div class=\"champ\">\n            <div class=\"titulo\">Weight Class:<br>{{campeon.weight_class | filtrarpeso}}</div>\n            <div class=\"nombre\">Name:<br>{{campeon.first_name}} {{campeon.last_name}}</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/inicio/inicio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datos_ufc_service__ = __webpack_require__("../../../../../src/app/datos-ufc.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InicioComponent = (function () {
    function InicioComponent(DatosUfcService) {
        this.DatosUfcService = DatosUfcService;
        this.listaCampeones = [];
        this.listaEventos = [];
    }
    InicioComponent.prototype.ngOnInit = function () {
        this.getCurrent();
        this.getEvents();
    };
    InicioComponent.prototype.getEvents = function () {
        var _this = this;
        this.DatosUfcService.eventos().subscribe(function (data) {
            _this.listaEventos = data;
        });
    };
    InicioComponent.prototype.getCurrent = function () {
        var _this = this;
        this.DatosUfcService.currluchadores().subscribe(function (data) {
            _this.listaCampeones = data;
        });
    };
    InicioComponent.prototype.updateUrl = function (evento) {
        evento.target.src = "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Ffeatures%252F019907_WEB_EventPlaceholderRebrand_PPV.jpg?-mw500-mh500-tc1";
    };
    InicioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-inicio',
            template: __webpack_require__("../../../../../src/app/inicio/inicio.component.html"),
            styles: [__webpack_require__("../../../../../src/app/inicio/inicio.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__datos_ufc_service__["a" /* DatosUfcService */]])
    ], InicioComponent);
    return InicioComponent;
}());



/***/ }),

/***/ "../../../../../src/app/news/news.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\r\n  font-family: Anton, sans-serif;\r\n  font-style: italic;\r\n  font-weight: bold;\r\n  color: #FFFFFF;\r\n  text-align: center;\r\n  font-size: 70px;\r\n  text-decoration: underline;\r\n}\r\n\r\n.enlace {\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n\r\n.enlace:hover {\r\n  font-style: italic;\r\n}\r\n\r\n.espacio {\r\n  height: 30px;\r\n}\r\n\r\ndiv {\r\n  color: #FFFFFF;\r\n}\r\n\r\nimg {\r\n  display: block;\r\n  margin: auto;\r\n  border: dashed 2px white;\r\n}\r\n\r\n.margen {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.centrar {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -ms-flex-line-pack: center;\r\n      align-content: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\n\r\n.negro{\r\n  color: black;\r\n}\r\n\r\n.info{\r\n  border-radius: 5px 30px 5px 30px;\r\n  border: solid 1px black;\r\n  background-color: #FFFFFF;\r\n  font-weight: bold;\r\n  padding-left: 50px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/news/news.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1>Recent news!</h1>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-12 row margen\" *ngFor=\"let noticia of listaNews\" (mouseover)=\"cambiarVerdadero(noticia)\"\r\n         (mouseleave)=\"cambiarFalso(noticia)\">\r\n      <div class=\"col-4\"><img (error)=\"updateUrl($event)\" src=\"{{noticia.thumbnail}}\"/></div>\r\n      <div class=\"col-8 centrar\">\r\n        <h2>{{noticia.url_name | filtrartitulo}}</h2>\r\n        <div *ngIf=\"noticia.encima\" class=\"info centrar\">\r\n          <div class=\"negro col-12\"  *ngIf=\"noticia.author\">Created {{noticia.author}}</div>\r\n          <div class=\"negro col-12\"  *ngIf=\"noticia.article_date\">Article date: {{noticia.article_date | filtrarfecha}}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/news/news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datos_ufc_service__ = __webpack_require__("../../../../../src/app/datos-ufc.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsComponent = (function () {
    function NewsComponent(DatosUfcService) {
        this.DatosUfcService = DatosUfcService;
        this.listaNews = [];
        this.encima = false;
    }
    NewsComponent.prototype.ngOnInit = function () {
        this.getNews();
    };
    NewsComponent.prototype.getNews = function () {
        var _this = this;
        this.DatosUfcService.noticias().subscribe(function (data) {
            _this.listaNews = data;
        });
    };
    NewsComponent.prototype.cambiarVerdadero = function (noticia) {
        noticia.encima = true;
    };
    NewsComponent.prototype.cambiarFalso = function (noticia) {
        noticia.encima = false;
    };
    NewsComponent.prototype.updateUrl = function (evento) {
        evento.target.src = "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252F220%252FUFClogo.jpg?mw300-mh300-tc1";
    };
    NewsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-news',
            template: __webpack_require__("../../../../../src/app/news/news.component.html"),
            styles: [__webpack_require__("../../../../../src/app/news/news.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__datos_ufc_service__["a" /* DatosUfcService */]])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map