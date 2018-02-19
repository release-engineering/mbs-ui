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

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mbs_modules_modules_component__ = __webpack_require__("../../../../../src/app/mbs/modules/modules.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mbs_module_components_module_components_component__ = __webpack_require__("../../../../../src/app/mbs/module-components/module-components.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mbs_module_detail_module_detail_component__ = __webpack_require__("../../../../../src/app/mbs/module-detail/module-detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'module/:id',
        component: __WEBPACK_IMPORTED_MODULE_4__mbs_module_detail_module_detail_component__["a" /* ModuleDetailComponent */],
        pathMatch: 'full'
    },
    {
        path: 'modules',
        component: __WEBPACK_IMPORTED_MODULE_2__mbs_modules_modules_component__["a" /* ModulesComponent */],
        pathMatch: 'full'
    },
    {
        path: 'components',
        component: __WEBPACK_IMPORTED_MODULE_3__mbs_module_components_module_components_component__["a" /* ModuleComponentsComponent */],
        pathMatch: 'full'
    },
    {
        path: '',
        redirectTo: '/modules',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid bg-dark\">\n    <nav class=\"navbar navbar-dark bg-dark navbar-expand-lg\">\n        <a class=\"navbar-brand\" href=\"#\" (click)=\"navbarCollapsed = true\" #navbarBrand>\n            <img src=\"./assets/mbs.png\" width=\"32.5\" height=\"32.5\" alt=\"\">\n            <span id=\"logoTextShort\">MBS</span>\n            <span id=\"logoText\">Module Build Service</span>\n        </a>\n\n        <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" (click)=\"navbarCollapsed = !navbarCollapsed\"\n            [attr.aria-expanded]=\"!navbarCollapsed\" aria-controls=\"navbarContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n\n        <div class=\"navbar-collapse\" [ngbCollapse]=\"navbarCollapsed\" id=\"navbarContent\">\n            <ul class=\"navbar-nav ml-auto\">\n                <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n                    <a class=\"nav-link\" routerLink=\"/modules\" (click)=\"navbarCollapsed = true\">Modules</a>\n                </li>\n                <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n                    <a class=\"nav-link\" routerLink=\"/components\" (click)=\"navbarCollapsed = true\">Components</a>\n                </li>\n            </ul>\n        </div>\n    </nav>\n</div>\n\n<div class=\"container mt-5 mb-5\">\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-brand span {\n  margin-left: 0.4em; }\n\n@media (max-width: 767px) {\n  #logoTextShort {\n    display: inline; }\n  #logoText {\n    display: None; } }\n\n@media (min-width: 768px) {\n  .navbar {\n    padding-left: 10% !important;\n    padding-right: 10% !important; }\n  #logoTextShort {\n    display: None; }\n  #logoText {\n    display: inline; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

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

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.navbarCollapsed = true;
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_infinite_scroll__ = __webpack_require__("../../../../ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_progressbar__ = __webpack_require__("../../../../ngx-progressbar/modules/ngx-progressbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_mbs_modules_modules_component__ = __webpack_require__("../../../../../src/app/mbs/modules/modules.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_mbs_services_module_service__ = __webpack_require__("../../../../../src/app/mbs/services/module.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_mbs_module_components_module_components_component__ = __webpack_require__("../../../../../src/app/mbs/module-components/module-components.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_mbs_module_detail_module_detail_component__ = __webpack_require__("../../../../../src/app/mbs/module-detail/module-detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8_app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9_mbs_modules_modules_component__["a" /* ModulesComponent */],
                __WEBPACK_IMPORTED_MODULE_11_mbs_module_components_module_components_component__["a" /* ModuleComponentsComponent */],
                __WEBPACK_IMPORTED_MODULE_12_mbs_module_detail_module_detail_component__["a" /* ModuleDetailComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7_app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_ngx_infinite_scroll__["a" /* InfiniteScrollModule */],
                __WEBPACK_IMPORTED_MODULE_6_ngx_progressbar__["c" /* NgProgressModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10_mbs_services_module_service__["a" /* ModuleService */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_6_ngx_progressbar__["b" /* NgProgressInterceptor */], multi: true }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8_app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/mbs/base-components/base-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseListComponent; });
var BaseListComponent = /** @class */ (function () {
    function BaseListComponent() {
        this.loading = false;
        this.exhausted = false;
    }
    BaseListComponent.prototype.processRouteParams = function (params) {
        // TODO: Add validation here
        if (params.get('orderBy')) {
            this.orderBy = params.get('orderBy');
        }
        else {
            this.orderBy = 'id';
        }
        if (params.get('orderDirection')) {
            this.orderDirection = params.get('orderDirection');
        }
        else {
            this.orderDirection = 'desc';
        }
    };
    BaseListComponent.prototype.getOrderDirection = function (header) {
        if (header.toLowerCase().replace(' ', '_') == this.orderBy && this.orderDirection == 'desc') {
            return 'asc';
        }
        return 'desc';
    };
    BaseListComponent.prototype.getArrowClass = function (header) {
        if (header.toLowerCase().replace(' ', '_') == this.orderBy) {
            if (this.orderDirection == 'asc') {
                return 'orderAsc';
            }
            else {
                return 'orderDesc';
            }
        }
        return '';
    };
    return BaseListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/mbs/module-components/module-components.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-progress [thick]=\"true\"></ng-progress>\n\n<h2 class=\"title\">Components</h2>\n\n<table class=\"table table-responsive-sm table-hover table-bordered mbs-list-table\" infinite-scroll (scrolled)=\"onScrollDown()\">\n  <thead>\n    <th *ngFor=\"let header of ['ID', 'Module Build', 'Package', 'Task ID', 'State']\" scope=\"col\">\n      <a *ngIf=\"header != 'Module Build'\" [routerLink]=\"['/components', {'orderBy': header.toLowerCase().replace(' ', '_'), 'orderDirection': getOrderDirection(header)}]\"\n          [ngClass]=\"getArrowClass(header)\">\n        {{ header }}\n      </a>\n      <span *ngIf=\"header == 'Module Build'\">{{ header }}</span>\n    </th>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let component of components\">\n      <td scope=\"row\">{{ component.id }}</td>\n      <td scope=\"row\"><a [routerLink]=\"['/module', component.module_build]\">{{ component.module_build }}</a></td>\n      <td scope=\"row\">{{ component.package }}</td>\n      <td scope=\"row\">\n        <a href=\"{{ kojiUrl + 'taskinfo?taskID=' + component.task_id }}\" target=\"_blank\">\n          {{ component.task_id }}\n        </a>\n      </td>\n      <td class=\"{{ getStateCssClass(component) }}\" scope=\"row\">\n        {{ component.state_name.charAt(0) + component.state_name.toLowerCase().slice(1) }}\n      </td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/mbs/module-components/module-components.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table thead th {\n  width: 15%;\n  white-space: nowrap; }\n\ntable thead th:nth-child(3) {\n  width: 25%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mbs/module-components/module-components.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuleComponentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_progressbar__ = __webpack_require__("../../../../ngx-progressbar/modules/ngx-progressbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mbs_base_components_base_list_component__ = __webpack_require__("../../../../../src/app/mbs/base-components/base-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mbs_services_module_service__ = __webpack_require__("../../../../../src/app/mbs/services/module.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mbs_environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ModuleComponentsComponent = /** @class */ (function (_super) {
    __extends(ModuleComponentsComponent, _super);
    function ModuleComponentsComponent(router, route, ngProgress, moduleService) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.route = route;
        _this.ngProgress = ngProgress;
        _this.moduleService = moduleService;
        _this.kojiUrl = __WEBPACK_IMPORTED_MODULE_5_mbs_environments_environment__["a" /* environment */].kojiUrl;
        _this.components = [];
        return _this;
    }
    ModuleComponentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.processRouteParams(params);
            _this.components = [];
            _this.exhausted = false;
            _this.currentPage = 1;
            _this.getComponents();
        });
    };
    ModuleComponentsComponent.prototype.getComponents = function () {
        var _this = this;
        if (!this.exhausted && !this.loading) {
            this.loading = true;
            this.moduleService.getComponents(this.currentPage, this.orderBy, this.orderDirection).subscribe(function (data) {
                if (data.items.length) {
                    _this.components = _this.components.concat(data.items);
                    _this.currentPage += 1;
                }
                else {
                    _this.exhausted = true;
                }
            }, function (error) {
                console.log(error);
            }, function () {
                _this.loading = false;
            });
        }
    };
    ModuleComponentsComponent.prototype.getStateCssClass = function (component) {
        switch (component.state_name) {
            case 'COMPLETE':
                return 'text-success';
            case 'FAILED':
                return 'text-danger';
            case 'CANCELED':
            case 'DELETED':
                return 'text-warning';
            default:
                return 'text-info';
        }
    };
    ModuleComponentsComponent.prototype.onScrollDown = function () {
        this.getComponents();
    };
    ModuleComponentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-module-components',
            template: __webpack_require__("../../../../../src/app/mbs/module-components/module-components.component.html"),
            styles: [__webpack_require__("../../../../../src/app/mbs/module-components/module-components.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_progressbar__["a" /* NgProgress */],
            __WEBPACK_IMPORTED_MODULE_4_mbs_services_module_service__["a" /* ModuleService */]])
    ], ModuleComponentsComponent);
    return ModuleComponentsComponent;
}(__WEBPACK_IMPORTED_MODULE_3_mbs_base_components_base_list_component__["a" /* BaseListComponent */]));



/***/ }),

/***/ "../../../../../src/app/mbs/module-detail/module-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-progress [thick]=\"true\"></ng-progress>\n\n<span *ngIf=\"module\">\n  <h2 class=\"title\">Module #{{ module.id }}</h2>\n\n  <!-- Tracker if the build has failed -->\n  <ul *ngIf=\"module.state_name == 'failed' || module.state_name == 'garbage'\" class=\"build-tracker build-tracker-failed\">\n    <li>Init</li>\n    <li>Wait</li>\n    <li>Build</li>\n    <li>Done</li>\n    <li>{{ module.state_name.charAt(0).toUpperCase() + module.state_name.slice(1) }}</li>\n  </ul>\n  <!-- Tracker if the build has succeeded -->\n  <ul *ngIf=\"module.state_name != 'failed' && module.state_name != 'garbage'\" class=\"build-tracker\">\n    <li [ngClass]=\"{'build-tracker-step-done': module.state > 0, 'build-tracker-step-active': module.state == 0}\">Init</li>\n    <li [ngClass]=\"{'build-tracker-step-done': module.state > 1, 'build-tracker-step-active': module.state == 1}\">Wait</li>\n    <li [ngClass]=\"{'build-tracker-step-done': module.state > 2, 'build-tracker-step-active': module.state == 2}\">Build</li>\n    <li [ngClass]=\"{'build-tracker-step-done': module.state > 3, 'build-tracker-step-active': module.state == 3}\">Done</li>\n    <li [ngClass]=\"{'build-tracker-step-done': module.state >= 4}\">Ready</li>\n  </ul>\n\n  <table class=\"table table-hover table-bordered\">\n    <thead>\n      <td scope=\"col\">Property</td>\n      <td scope=\"col\">Value</td>\n    </thead>\n    <tbody>\n      <tr>\n        <td scope=\"row\">Components</td>\n        <td scope=\"row\">{{ num_built_components }}/{{ num_components }} complete</td>\n      </tr>\n      <tr *ngIf=\"module.context !== undefined\">\n        <td scope=\"row\">Context</td>\n        <td scope=\"row\">{{ module.context }}</td>\n      </tr>\n      <tr>\n        <td scope=\"row\">ID</td>\n        <td scope=\"row\">{{ module.id }}</td>\n      </tr>\n      <tr>\n        <td scope=\"row\">Koji Tag</td>\n        <td scope=\"row\">{{ module.koji_tag }}</td>\n      </tr>\n      <tr>\n        <td scope=\"row\">Name</td>\n        <td scope=\"row\">{{ module.name }}</td>\n      </tr>\n      <tr>\n        <td scope=\"row\">Owner</td>\n        <td scope=\"row\">{{ module.owner }}</td>\n      </tr>\n      <tr>\n        <td scope=\"row\">Rebuild Strategy</td>\n        <td scope=\"row\">{{ module.rebuild_strategy }}</td>\n      </tr>\n      <tr>\n        <td scope=\"row\">State</td>\n        <td scope=\"row\">\n          {{ module.state_name.toUpperCase().charAt(0) + module.state_name.slice(1) }}\n        </td>\n      </tr>\n      <tr>\n        <td scope=\"row\">State Reason</td>\n        <td scope=\"row\">{{ module.state_reason }}</td>\n      </tr>\n      <tr>\n        <td scope=\"row\">Stream</td>\n        <td scope=\"row\">{{ module.stream }}</td>\n      </tr>\n      <tr>\n        <td scope=\"row\">Time Completed</td>\n        <td scope=\"row\">{{ module.time_completed }}</td>\n      </tr>\n      <tr>\n        <td scope=\"row\">Time Modifed</td>\n        <td scope=\"row\">{{ module.time_modified }}</td>\n      </tr>\n      <tr>\n        <td scope=\"row\">Time Submitted</td>\n        <td scope=\"row\">{{ module.time_submitted }}</td>\n      </tr>\n      <tr>\n        <td scope=\"row\">Version</td>\n        <td scope=\"row\">{{ module.version }}</td>\n      </tr>\n    </tbody>\n  </table>\n</span>\n"

/***/ }),

/***/ "../../../../../src/app/mbs/module-detail/module-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table tbody td:first-child {\n  width: 30%; }\n\nul.build-tracker {\n  padding: 0 0 65px 0;\n  margin: 1rem 0 1.5rem 0; }\n\nul.build-tracker li {\n    width: 20%;\n    list-style-type: none;\n    float: left;\n    position: relative;\n    text-align: center; }\n\nul.build-tracker li:before {\n    font-family: FontAwesome;\n    content: '\\F10C';\n    font-size: 30px;\n    color: #28a745;\n    line-height: 0.8;\n    background-color: #ffffff;\n    width: 25px;\n    height: 23px;\n    display: block;\n    margin: 0 auto 5px; }\n\nul.build-tracker li:after {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 3px;\n    background-color: #343a40;\n    top: 12px;\n    left: -50%;\n    z-index: -1; }\n\n@media (min-width: 767px) {\n    ul.build-tracker {\n      padding: 10px 0 80px 0;\n      margin: 3rem 0 3rem 0; }\n      ul.build-tracker li:before {\n        font-size: 50px;\n        width: 42.5px;\n        height: 40px;\n        line-height: 0.8;\n        margin: 0 auto 15px; }\n      ul.build-tracker li:after {\n        top: 20px; } }\n\nul.build-tracker li:first-child:after {\n    content: none; }\n\nul.build-tracker li.build-tracker-step-done:before {\n    content: '\\F05D'; }\n\nul.build-tracker li.build-tracker-step-active:before {\n    border-radius: 50%;\n    -webkit-box-shadow: 0 0 0 0 rgba(40, 167, 69, 0.7);\n            box-shadow: 0 0 0 0 rgba(40, 167, 69, 0.7);\n    -webkit-animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);\n            animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1); }\n\nul.build-tracker-failed li:before {\n  color: #cc0000;\n  content: '\\F05C'; }\n\n@-webkit-keyframes pulse {\n  to {\n    -webkit-box-shadow: 0 0 0 15px rgba(204, 0, 0, 0);\n            box-shadow: 0 0 0 15px rgba(204, 0, 0, 0); } }\n\n@keyframes pulse {\n  to {\n    -webkit-box-shadow: 0 0 0 15px rgba(204, 0, 0, 0);\n            box-shadow: 0 0 0 15px rgba(204, 0, 0, 0); } }\n\n@media (min-width: 767px) {\n  @-webkit-keyframes pulse {\n    to {\n      -webkit-box-shadow: 0 0 0 25px rgba(204, 0, 0, 0);\n              box-shadow: 0 0 0 25px rgba(204, 0, 0, 0); } }\n  @keyframes pulse {\n    to {\n      -webkit-box-shadow: 0 0 0 25px rgba(204, 0, 0, 0);\n              box-shadow: 0 0 0 25px rgba(204, 0, 0, 0); } } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mbs/module-detail/module-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuleDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mbs_services_module_service__ = __webpack_require__("../../../../../src/app/mbs/services/module.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModuleDetailComponent = /** @class */ (function () {
    function ModuleDetailComponent(route, moduleService) {
        this.route = route;
        this.moduleService = moduleService;
    }
    ModuleDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getModule();
        // Run it every 15 seconds
        this.interval = setInterval(function () { _this.getModule(); }, 15000);
    };
    ModuleDetailComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.interval);
    };
    ModuleDetailComponent.prototype.getModule = function () {
        var _this = this;
        // Don't reload the page when the build has failed or completed
        if (this.module == null || (this.module.state_name != 'failed' && this.module.state_name != 'ready')) {
            var moduleObservable = this.route.paramMap.switchMap(function (params) { return _this.moduleService.getModule(+params.get('id')); });
            moduleObservable.subscribe(function (data) {
                _this.module = data;
                var num_built_components = 0;
                var num_components = 0;
                for (var component in _this.module.tasks.rpms) {
                    num_components += 1;
                    if (_this.module.tasks.rpms[component].state == 1) {
                        num_built_components += 1;
                    }
                }
                _this.num_built_components = num_built_components;
                _this.num_components = num_components;
            }, function (error) {
                console.log(error);
            });
        }
    };
    ModuleDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-module-detail',
            template: __webpack_require__("../../../../../src/app/mbs/module-detail/module-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/mbs/module-detail/module-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2_mbs_services_module_service__["a" /* ModuleService */]])
    ], ModuleDetailComponent);
    return ModuleDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/mbs/modules/modules.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-progress [thick]=\"true\"></ng-progress>\n\n<h2 class=\"title\">Modules</h2>\n\n<table class=\"table table-responsive-sm table-hover table-bordered mbs-list-table\" infinite-scroll (scrolled)=\"onScrollDown()\">\n  <thead>\n    <ng-container *ngFor=\"let header of ['ID', 'Name', 'Stream', 'Version', 'Context', 'State']\">\n      <th *ngIf=\"header !== 'Context' || (modules.length && modules[0].context !== undefined)\"\n          [attr.id]=\"header.toLowerCase() + 'Header'\" scope=\"col\">\n        <a [routerLink]=\"['/modules', {'orderBy': header.toLowerCase(), 'orderDirection': getOrderDirection(header)}]\"\n            [ngClass]=\"getArrowClass(header)\">\n          {{ header }}\n        </a>\n      </th>\n    </ng-container>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let module of modules\">\n      <td scope=\"row\"><a [routerLink]=\"['/module', module.id]\">{{ module.id }}</a></td>\n      <td scope=\"row\">{{ module.name }}</td>\n      <td scope=\"row\">{{ module.stream }}</td>\n      <td scope=\"row\">{{ module.version }}</td>\n      <td *ngIf=\"module.context !== undefined\" scope=\"row\" class=\"context\">{{ module.context }}</td>\n      <td class=\"{{ getStateCssClass(module) }}\" scope=\"row\">\n        {{ module.state_name.toUpperCase().charAt(0) + module.state_name.slice(1) }}\n      </td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/mbs/modules/modules.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table thead th {\n  width: 20%;\n  white-space: nowrap; }\n\ntable thead #nameHeader {\n  width: 30%; }\n\n@media (max-width: 767px) {\n  table #contextHeader, table td.context {\n    display: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mbs/modules/modules.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModulesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_progressbar__ = __webpack_require__("../../../../ngx-progressbar/modules/ngx-progressbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mbs_base_components_base_list_component__ = __webpack_require__("../../../../../src/app/mbs/base-components/base-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mbs_services_module_service__ = __webpack_require__("../../../../../src/app/mbs/services/module.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ModulesComponent = /** @class */ (function (_super) {
    __extends(ModulesComponent, _super);
    function ModulesComponent(router, route, ngProgress, moduleService) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.route = route;
        _this.ngProgress = ngProgress;
        _this.moduleService = moduleService;
        return _this;
    }
    ModulesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.processRouteParams(params);
            _this.modules = [];
            _this.exhausted = false;
            _this.currentPage = 1;
            _this.getModules();
        });
    };
    ModulesComponent.prototype.getModules = function () {
        var _this = this;
        if (!this.exhausted && !this.loading) {
            this.loading = true;
            this.moduleService.getModules(this.currentPage, this.orderBy, this.orderDirection).subscribe(function (data) {
                if (data.items.length) {
                    _this.modules = _this.modules.concat(data.items);
                    _this.currentPage += 1;
                }
                else {
                    _this.exhausted = true;
                }
            }, function (error) {
                console.log(error);
            }, function () {
                _this.loading = false;
            });
        }
    };
    ModulesComponent.prototype.getStateCssClass = function (module) {
        switch (module.state_name) {
            case 'ready': {
                return 'text-success';
            }
            case 'failed': {
                return 'text-danger';
            }
            default: {
                return 'text-info';
            }
        }
    };
    ModulesComponent.prototype.onScrollDown = function () {
        this.getModules();
    };
    ModulesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-modules',
            template: __webpack_require__("../../../../../src/app/mbs/modules/modules.component.html"),
            styles: [__webpack_require__("../../../../../src/app/mbs/modules/modules.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_progressbar__["a" /* NgProgress */],
            __WEBPACK_IMPORTED_MODULE_4_mbs_services_module_service__["a" /* ModuleService */]])
    ], ModulesComponent);
    return ModulesComponent;
}(__WEBPACK_IMPORTED_MODULE_3_mbs_base_components_base_list_component__["a" /* BaseListComponent */]));



/***/ }),

/***/ "../../../../../src/app/mbs/services/module.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mbs_environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModuleService = /** @class */ (function () {
    function ModuleService(http) {
        this.http = http;
        this.mbsUrl = __WEBPACK_IMPORTED_MODULE_2_mbs_environments_environment__["a" /* environment */].mbsUrl;
    }
    ModuleService.prototype.getOrderKey = function (orderDirection) {
        if (orderDirection == 'desc') {
            return 'order_desc_by';
        }
        else {
            return 'order_by';
        }
    };
    ModuleService.prototype.getModules = function (page, orderBy, orderDirection) {
        if (page === void 0) { page = 1; }
        if (orderBy === void 0) { orderBy = 'id'; }
        if (orderDirection === void 0) { orderDirection = 'desc'; }
        var orderKey = this.getOrderKey(orderDirection);
        var url = this.mbsUrl + 'module-builds/?short=true&per_page=40&page=' + page + '&' + orderKey + '=' + orderBy;
        return this.http.get(url);
    };
    ModuleService.prototype.getModule = function (id) {
        return this.http.get(this.mbsUrl + 'module-builds/' + id);
    };
    ModuleService.prototype.getComponents = function (page, orderBy, orderDirection) {
        if (page === void 0) { page = 1; }
        if (orderBy === void 0) { orderBy = 'id'; }
        if (orderDirection === void 0) { orderDirection = 'desc'; }
        var orderKey = this.getOrderKey(orderDirection);
        var url = this.mbsUrl + 'component-builds/?per_page=40&page=' + page + '&' + orderKey + '=' + orderBy;
        return this.http.get(url);
    };
    ModuleService.prototype.getComponent = function (id) {
        return this.http.get(this.mbsUrl + 'component-builds/' + id);
    };
    ModuleService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ModuleService);
    return ModuleService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    mbsUrl: 'https://mbs.fedoraproject.org/module-build-service/1/',
    kojiUrl: 'https://koji.fedoraproject.org/koji/'
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
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