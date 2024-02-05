(self["webpackChunkPesiSite"] = self["webpackChunkPesiSite"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule),
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _guards_logged_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards/logged.guard */ 7025);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/login/login.component */ 6666);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guards/auth.guard */ 1391);
/* harmony import */ var _components_my_account_page_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/my-account-page/my-account/my-account.component */ 5763);
/* harmony import */ var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/admin.guard */ 5336);
/* harmony import */ var _components_users_page_users_users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/users-page/users/users.component */ 735);
/* harmony import */ var _resolvers_users_resolvers_users_filter_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resolvers/users-resolvers/users-filter.resolver */ 7014);
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/not-found/not-found.component */ 6218);
/* harmony import */ var _components_installations_page_installations_installations_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/installations-page/installations/installations.component */ 5988);
/* harmony import */ var _resolvers_installations_resolvers_installations_filter_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resolvers/installations-resolvers/installations-filter.resolver */ 7602);
/* harmony import */ var _resolvers_installations_resolvers_installations_resolver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./resolvers/installations-resolvers/installations.resolver */ 1270);
/* harmony import */ var _resolvers_users_resolvers_users_resolver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./resolvers/users-resolvers/users.resolver */ 6241);
/* harmony import */ var _components_subjects_page_subjects_subjects_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/subjects-page/subjects/subjects.component */ 7521);
/* harmony import */ var _resolvers_subjects_resolvers_subjects_filter_resolver__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./resolvers/subjects-resolvers/subjects-filter.resolver */ 3608);
/* harmony import */ var _resolvers_subjects_resolvers_subjects_resolver__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./resolvers/subjects-resolvers/subjects.resolver */ 1792);
/* harmony import */ var _components_cards_page_cards_cards_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/cards-page/cards/cards.component */ 5847);
/* harmony import */ var _resolvers_cards_resolvers_cards_filter_resolver__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./resolvers/cards-resolvers/cards-filter.resolver */ 7298);
/* harmony import */ var _resolvers_cards_resolvers_cards_resolver__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./resolvers/cards-resolvers/cards.resolver */ 9219);
/* harmony import */ var _components_events_page_events_events_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/events-page/events/events.component */ 4930);
/* harmony import */ var _resolvers_events_resolvers_events_filters_resolver__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./resolvers/events-resolvers/events-filters.resolver */ 9510);
/* harmony import */ var _resolvers_events_resolvers_events_resolver__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./resolvers/events-resolvers/events.resolver */ 7227);
/* harmony import */ var _components_materials_page_materials_materials_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/materials-page/materials/materials.component */ 7999);
/* harmony import */ var _resolvers_materials_resolver_materials_filter_resolver__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./resolvers/materials-resolver/materials-filter.resolver */ 5660);
/* harmony import */ var _resolvers_materials_resolver_materials_resolver__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./resolvers/materials-resolver/materials.resolver */ 2039);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ 1699);



























const routes = [{
  path: 'login',
  canActivate: [_guards_logged_guard__WEBPACK_IMPORTED_MODULE_0__.loggedGuard],
  component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent
}, {
  path: 'my-account',
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.authGuard],
  component: _components_my_account_page_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_3__.MyAccountComponent
}, {
  path: 'events',
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.authGuard],
  component: _components_events_page_events_events_component__WEBPACK_IMPORTED_MODULE_18__.EventsComponent,
  resolve: {
    filters: _resolvers_events_resolvers_events_filters_resolver__WEBPACK_IMPORTED_MODULE_19__.eventsFiltersResolver,
    events: _resolvers_events_resolvers_events_resolver__WEBPACK_IMPORTED_MODULE_20__.eventsResolver
  },
  runGuardsAndResolvers: 'paramsOrQueryParamsChange'
}, {
  path: 'cards',
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.authGuard],
  component: _components_cards_page_cards_cards_component__WEBPACK_IMPORTED_MODULE_15__.CardsComponent,
  resolve: {
    filters: _resolvers_cards_resolvers_cards_filter_resolver__WEBPACK_IMPORTED_MODULE_16__.cardsFilterResolver,
    cards: _resolvers_cards_resolvers_cards_resolver__WEBPACK_IMPORTED_MODULE_17__.cardsResolver
  },
  runGuardsAndResolvers: 'paramsOrQueryParamsChange'
}, {
  path: 'subjects',
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.authGuard],
  component: _components_subjects_page_subjects_subjects_component__WEBPACK_IMPORTED_MODULE_12__.SubjectsComponent,
  resolve: {
    filters: _resolvers_subjects_resolvers_subjects_filter_resolver__WEBPACK_IMPORTED_MODULE_13__.subjectsFilterResolver,
    subjects: _resolvers_subjects_resolvers_subjects_resolver__WEBPACK_IMPORTED_MODULE_14__.subjectsResolver
  },
  runGuardsAndResolvers: 'paramsOrQueryParamsChange'
}, {
  path: 'materials',
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.authGuard],
  component: _components_materials_page_materials_materials_component__WEBPACK_IMPORTED_MODULE_21__.MaterialsComponent,
  resolve: {
    filters: _resolvers_materials_resolver_materials_filter_resolver__WEBPACK_IMPORTED_MODULE_22__.materialsFilterResolver,
    subjects: _resolvers_materials_resolver_materials_resolver__WEBPACK_IMPORTED_MODULE_23__.materialsResolver
  },
  runGuardsAndResolvers: 'paramsOrQueryParamsChange'
}, {
  path: 'installations',
  canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_4__.adminGuard],
  component: _components_installations_page_installations_installations_component__WEBPACK_IMPORTED_MODULE_8__.InstallationsComponent,
  resolve: {
    filters: _resolvers_installations_resolvers_installations_filter_resolver__WEBPACK_IMPORTED_MODULE_9__.installationsFilterResolver,
    installations: _resolvers_installations_resolvers_installations_resolver__WEBPACK_IMPORTED_MODULE_10__.installationsResolver
  },
  runGuardsAndResolvers: 'paramsOrQueryParamsChange'
}, {
  path: 'users',
  canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_4__.adminGuard],
  component: _components_users_page_users_users_component__WEBPACK_IMPORTED_MODULE_5__.UsersComponent,
  resolve: {
    filters: _resolvers_users_resolvers_users_filter_resolver__WEBPACK_IMPORTED_MODULE_6__.usersFilterResolver,
    users: _resolvers_users_resolvers_users_resolver__WEBPACK_IMPORTED_MODULE_11__.usersResolver
  },
  runGuardsAndResolvers: 'paramsOrQueryParamsChange'
}, {
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
}, {
  path: '404',
  component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__.NotFoundComponent
}, {
  path: '**',
  redirectTo: 'events',
  pathMatch: 'full'
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_25__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_25__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_25__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_25__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var C_Users_ricca_OneDrive_Desktop_OnPesi_baronpesisite_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth.service */ 2333);
/* harmony import */ var _services_jwt_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/jwt.service */ 61);
/* harmony import */ var ngx_progressbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-progressbar */ 467);
/* harmony import */ var _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/sidenav/sidenav.component */ 2952);






class AppComponent {
  constructor(authSrv, jwtSrv) {
    this.authSrv = authSrv;
    this.jwtSrv = jwtSrv;
    this.title = 'PesiSite';
  }
  ngOnInit() {
    this.authSrv.fetchUser().subscribe();
  }
  ngOnDestroy() {
    var _this = this;
    return (0,C_Users_ricca_OneDrive_Desktop_OnPesi_baronpesisite_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.jwtSrv.hasToken()) {
        _this.authSrv.lastAccess("offline");
      }
    })();
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_jwt_service__WEBPACK_IMPORTED_MODULE_2__.JwtService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    hostBindings: function AppComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("beforeunload", function AppComponent_beforeunload_HostBindingHandler() {
          return ctx.ngOnDestroy();
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"]);
      }
    },
    decls: 2,
    vars: 1,
    consts: [["color", "#ffffff", 3, "spinner"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-sidenav")(1, "ng-progress", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("spinner", true);
      }
    },
    dependencies: [ngx_progressbar__WEBPACK_IMPORTED_MODULE_5__.NgProgressComponent, _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_3__.SidenavComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sidenav/sidenav.component */ 2952);
/* harmony import */ var _components_users_page_users_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/users-page/users/users.component */ 735);
/* harmony import */ var _components_users_page_user_table_user_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/users-page/user-table/user-table.component */ 5048);
/* harmony import */ var _components_users_page_user_filter_user_filter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/users-page/user-filter/user-filter.component */ 2065);
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/not-found/not-found.component */ 6218);
/* harmony import */ var _components_my_account_page_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/my-account-page/my-account/my-account.component */ 5763);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/login/login.component */ 6666);
/* harmony import */ var _components_users_page_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/users-page/add-user/add-user.component */ 7819);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/material/select */ 6355);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! @angular/material/tabs */ 989);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @angular/material/list */ 3228);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @angular/material/toolbar */ 2484);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @angular/material/menu */ 8128);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @angular/material/sidenav */ 1465);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! @angular/material/paginator */ 9687);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./interceptors/auth.interceptor */ 4094);
/* harmony import */ var _directives_if_authenticated_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directives/if-authenticated.directive */ 9242);
/* harmony import */ var _directives_if_admin_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./directives/if-admin.directive */ 7432);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/badge */ 5392);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/slider */ 549);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/sort */ 7963);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/material/autocomplete */ 9892);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @angular/material/expansion */ 8060);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! @angular/material/tooltip */ 702);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! @angular/material/divider */ 9400);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! @angular/material/stepper */ 6272);
/* harmony import */ var _components_installations_page_installations_installations_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/installations-page/installations/installations.component */ 5988);
/* harmony import */ var _components_installations_page_installation_table_installation_table_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/installations-page/installation-table/installation-table.component */ 1376);
/* harmony import */ var _components_installations_page_installation_filter_installation_filter_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/installations-page/installation-filter/installation-filter.component */ 5715);
/* harmony import */ var _components_installations_page_add_installation_add_installation_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/installations-page/add-installation/add-installation.component */ 1647);
/* harmony import */ var _pipes_yes_no_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pipes/yes-no.pipe */ 7592);
/* harmony import */ var _pipes_datetime_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pipes/datetime.pipe */ 7811);
/* harmony import */ var _components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/confirm/confirm.component */ 6497);
/* harmony import */ var _components_my_account_page_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/my-account-page/change-password/change-password.component */ 9823);
/* harmony import */ var _components_subjects_page_subjects_subjects_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/subjects-page/subjects/subjects.component */ 7521);
/* harmony import */ var _components_subjects_page_subject_table_subject_table_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/subjects-page/subject-table/subject-table.component */ 3454);
/* harmony import */ var _components_subjects_page_subject_filter_subject_filter_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/subjects-page/subject-filter/subject-filter.component */ 7586);
/* harmony import */ var _components_subjects_page_add_subject_add_subject_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/subjects-page/add-subject/add-subject.component */ 8806);
/* harmony import */ var _components_cards_page_cards_cards_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/cards-page/cards/cards.component */ 5847);
/* harmony import */ var _components_cards_page_card_table_card_table_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/cards-page/card-table/card-table.component */ 6969);
/* harmony import */ var _components_cards_page_card_filter_card_filter_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/cards-page/card-filter/card-filter.component */ 9902);
/* harmony import */ var _components_events_page_events_events_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/events-page/events/events.component */ 4930);
/* harmony import */ var _components_events_page_event_table_event_table_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/events-page/event-table/event-table.component */ 6298);
/* harmony import */ var _components_events_page_event_filter_event_filter_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/events-page/event-filter/event-filter.component */ 7437);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! @angular/material/datepicker */ 2226);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _pipes_string_pipe__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pipes/string.pipe */ 2330);
/* harmony import */ var _pipes_type_user_pipe__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pipes/type-user.pipe */ 7487);
/* harmony import */ var _directives_if_super_admin_directive__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./directives/if-super-admin.directive */ 3019);
/* harmony import */ var _components_users_page_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/users-page/edit-user/edit-user.component */ 9104);
/* harmony import */ var _components_installations_page_edit_installation_edit_installation_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/installations-page/edit-installation/edit-installation.component */ 4021);
/* harmony import */ var _components_subjects_page_edit_subject_edit_subject_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/subjects-page/edit-subject/edit-subject.component */ 3240);
/* harmony import */ var _components_cards_page_edit_card_edit_card_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/cards-page/edit-card/edit-card.component */ 8332);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! @angular/material/slide-toggle */ 9293);
/* harmony import */ var ngx_progressbar__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ngx-progressbar */ 467);
/* harmony import */ var ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ngx-progressbar/http */ 5874);
/* harmony import */ var _components_materials_page_materials_materials_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/materials-page/materials/materials.component */ 7999);
/* harmony import */ var _components_materials_page_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/materials-page/material-table/material-table.component */ 8698);
/* harmony import */ var _components_materials_page_material_filter_material_filter_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/materials-page/material-filter/material-filter.component */ 9590);
/* harmony import */ var _components_materials_page_add_material_add_material_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/materials-page/add-material/add-material.component */ 1194);
/* harmony import */ var _components_materials_page_edit_material_edit_material_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/materials-page/edit-material/edit-material.component */ 888);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! @angular/service-worker */ 1509);

















































































class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_43__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_43__["ɵɵdefineInjector"]({
    providers: [{
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_44__.HTTP_INTERCEPTORS,
      useClass: _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_10__.AuthInterceptor,
      multi: true
    }],
    imports: [_angular_material_badge__WEBPACK_IMPORTED_MODULE_45__.MatBadgeModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_46__.MatSliderModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_47__.MatSortModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_48__.MatAutocompleteModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_49__.MatSelectModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_50__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_51__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_52__.FormsModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_53__.MatButtonModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_54__.MatSidenavModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_55__.MatMenuModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_56__.MatToolbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_57__.MatIconModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_58__.MatListModule, _angular_router__WEBPACK_IMPORTED_MODULE_59__.RouterModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_60__.MatExpansionModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_61__.MatTooltipModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_44__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_52__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_52__.ReactiveFormsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_62__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_63__.MatInputModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_64__.MatDividerModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_65__.MatCardModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_66__.MatSnackBarModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_67__.MatTabsModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_68__.MatTableModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_69__.MatDialogModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_70__.MatStepperModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_71__.MatPaginatorModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_72__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_73__.MatNativeDateModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_74__.MatSlideToggleModule, ngx_progressbar__WEBPACK_IMPORTED_MODULE_75__.NgProgressModule.withConfig({
      color: "darkgreen"
    }), ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_76__.NgProgressHttpModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_77__.ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !(0,_angular_core__WEBPACK_IMPORTED_MODULE_43__.isDevMode)(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_43__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_2__.SidenavComponent, _components_users_page_users_users_component__WEBPACK_IMPORTED_MODULE_3__.UsersComponent, _components_users_page_user_table_user_table_component__WEBPACK_IMPORTED_MODULE_4__.UserTableComponent, _components_users_page_user_filter_user_filter_component__WEBPACK_IMPORTED_MODULE_5__.UserFilterComponent, _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__.NotFoundComponent, _components_my_account_page_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_7__.MyAccountComponent, _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__.LoginComponent, _components_users_page_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_9__.AddUserComponent, _directives_if_authenticated_directive__WEBPACK_IMPORTED_MODULE_11__.IfAuthenticatedDirective, _directives_if_admin_directive__WEBPACK_IMPORTED_MODULE_12__.IfAdminDirective, _components_installations_page_installations_installations_component__WEBPACK_IMPORTED_MODULE_13__.InstallationsComponent, _components_installations_page_installation_table_installation_table_component__WEBPACK_IMPORTED_MODULE_14__.InstallationTableComponent, _components_installations_page_installation_filter_installation_filter_component__WEBPACK_IMPORTED_MODULE_15__.InstallationFilterComponent, _components_installations_page_add_installation_add_installation_component__WEBPACK_IMPORTED_MODULE_16__.AddInstallationComponent, _pipes_yes_no_pipe__WEBPACK_IMPORTED_MODULE_17__.YesNoPipe, _pipes_datetime_pipe__WEBPACK_IMPORTED_MODULE_18__.DatetimePipe, _components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_19__.ConfirmComponent, _components_my_account_page_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_20__.ChangePasswordComponent, _components_subjects_page_subjects_subjects_component__WEBPACK_IMPORTED_MODULE_21__.SubjectsComponent, _components_subjects_page_subject_table_subject_table_component__WEBPACK_IMPORTED_MODULE_22__.SubjectTableComponent, _components_subjects_page_subject_filter_subject_filter_component__WEBPACK_IMPORTED_MODULE_23__.SubjectFilterComponent, _components_subjects_page_add_subject_add_subject_component__WEBPACK_IMPORTED_MODULE_24__.AddSubjectComponent, _components_cards_page_cards_cards_component__WEBPACK_IMPORTED_MODULE_25__.CardsComponent, _components_cards_page_card_table_card_table_component__WEBPACK_IMPORTED_MODULE_26__.CardTableComponent, _components_cards_page_card_filter_card_filter_component__WEBPACK_IMPORTED_MODULE_27__.CardFilterComponent, _components_events_page_events_events_component__WEBPACK_IMPORTED_MODULE_28__.EventsComponent, _components_events_page_event_table_event_table_component__WEBPACK_IMPORTED_MODULE_29__.EventTableComponent, _components_events_page_event_filter_event_filter_component__WEBPACK_IMPORTED_MODULE_30__.EventFilterComponent, _pipes_string_pipe__WEBPACK_IMPORTED_MODULE_31__.StringPipe, _pipes_type_user_pipe__WEBPACK_IMPORTED_MODULE_32__.TypeUserPipe, _directives_if_super_admin_directive__WEBPACK_IMPORTED_MODULE_33__.IfSuperAdminDirective, _components_users_page_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_34__.EditUserComponent, _components_installations_page_edit_installation_edit_installation_component__WEBPACK_IMPORTED_MODULE_35__.EditInstallationComponent, _components_subjects_page_edit_subject_edit_subject_component__WEBPACK_IMPORTED_MODULE_36__.EditSubjectComponent, _components_cards_page_edit_card_edit_card_component__WEBPACK_IMPORTED_MODULE_37__.EditCardComponent, _components_materials_page_materials_materials_component__WEBPACK_IMPORTED_MODULE_38__.MaterialsComponent, _components_materials_page_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_39__.MaterialTableComponent, _components_materials_page_material_filter_material_filter_component__WEBPACK_IMPORTED_MODULE_40__.MaterialFilterComponent, _components_materials_page_add_material_add_material_component__WEBPACK_IMPORTED_MODULE_41__.AddMaterialComponent, _components_materials_page_edit_material_edit_material_component__WEBPACK_IMPORTED_MODULE_42__.EditMaterialComponent],
    imports: [_angular_material_badge__WEBPACK_IMPORTED_MODULE_45__.MatBadgeModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_46__.MatSliderModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_47__.MatSortModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_48__.MatAutocompleteModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_49__.MatSelectModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_50__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_51__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_52__.FormsModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_53__.MatButtonModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_54__.MatSidenavModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_55__.MatMenuModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_56__.MatToolbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_57__.MatIconModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_58__.MatListModule, _angular_router__WEBPACK_IMPORTED_MODULE_59__.RouterModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_60__.MatExpansionModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_61__.MatTooltipModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_44__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_52__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_52__.ReactiveFormsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_62__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_63__.MatInputModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_64__.MatDividerModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_65__.MatCardModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_66__.MatSnackBarModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_67__.MatTabsModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_68__.MatTableModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_69__.MatDialogModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_70__.MatStepperModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_71__.MatPaginatorModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_72__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_73__.MatNativeDateModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_74__.MatSlideToggleModule, ngx_progressbar__WEBPACK_IMPORTED_MODULE_75__.NgProgressModule, ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_76__.NgProgressHttpModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_77__.ServiceWorkerModule]
  });
})();

/***/ }),

/***/ 9902:
/*!****************************************************************************!*\
  !*** ./src/app/components/cards-page/card-filter/card-filter.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardFilterComponent: () => (/* binding */ CardFilterComponent)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 7178);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 274);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 4520);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 655);
/* harmony import */ var src_utils_has_value__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/utils/has-value */ 6097);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var src_app_services_cards_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cards.service */ 1573);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_services_installations_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/installations.service */ 5333);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 6355);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/menu */ 8128);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _directives_if_admin_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../directives/if-admin.directive */ 7432);

















function CardFilterComponent_mat_form_field_22_mat_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 18)(1, "div", 16)(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Codice: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Descrizione: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const installation_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", installation_r12.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", installation_r12.installationCode, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", installation_r12.description, " ");
  }
}
function CardFilterComponent_mat_form_field_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-form-field")(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Installazione");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-select", 14)(4, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, CardFilterComponent_mat_form_field_22_mat_option_6_Template, 9, 3, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 1, ctx_r4.installations$));
  }
}
function CardFilterComponent_mat_form_field_53_mat_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 18)(1, "div", 16)(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Codice: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Descrizione: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const installation_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", installation_r14.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", installation_r14.installationCode, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", installation_r14.description, " ");
  }
}
function CardFilterComponent_mat_form_field_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-form-field")(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Installazione");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-select", 14)(4, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, CardFilterComponent_mat_form_field_53_mat_option_6_Template, 9, 3, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 1, ctx_r10.installations$));
  }
}
class CardFilterComponent {
  constructor(fb, dialog, cardsSrv, router, installationsSrv) {
    this.fb = fb;
    this.dialog = dialog;
    this.cardsSrv = cardsSrv;
    this.router = router;
    this.installationsSrv = installationsSrv;
    this.filtersForm = this.fb.group({
      numberCard: this.fb.control(''),
      plate: this.fb.control(''),
      materialDescription: this.fb.control(''),
      socialReason: this.fb.control(''),
      installationId: this.fb.control(null)
    });
    this.installations$ = this.installationsSrv.installations$;
    this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
  }
  ngOnInit() {
    this.cardsSrv.filters$.subscribe(value => {
      this.filtersForm.patchValue(value || {
        numberCard: '',
        plate: '',
        materialDescription: '',
        socialReason: '',
        installationId: null
      }, {
        emitEvent: false
      });
      if (this.filtersForm.value.installationId) {
        let installationId = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.toNumber)(this.filtersForm.value.installationId);
        this.filtersForm.get('installationId')?.setValue(installationId);
      }
      this.filtersForm.markAsPristine();
    });
    this.filtersForm.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroyed$), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.filter)(_ => this.filtersForm.valid), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.map)(value => (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omitBy)(value, val => val === '')), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.debounceTime)(200)).subscribe(value => {
      const v = value;
      this.router.navigate([], {
        queryParams: v
      });
    });
  }
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
  deleteFilters() {
    this.filtersForm.patchValue({
      numberCard: '',
      plate: '',
      materialDescription: '',
      socialReason: '',
      installationId: null
    });
  }
  hasValue() {
    if ((0,src_utils_has_value__WEBPACK_IMPORTED_MODULE_1__.hasValueInOptionalFields)(this.filtersForm)) {
      return false;
    } else {
      return true;
    }
  }
  static #_ = this.ɵfac = function CardFilterComponent_Factory(t) {
    return new (t || CardFilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_cards_service__WEBPACK_IMPORTED_MODULE_2__.CardsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_installations_service__WEBPACK_IMPORTED_MODULE_3__.InstallationsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: CardFilterComponent,
    selectors: [["app-card-filter"]],
    decls: 56,
    vars: 3,
    consts: [[3, "formGroup"], [1, "filter-cards"], ["matInput", "", "placeholder", "Numero carta", "formControlName", "numberCard"], ["input", ""], ["matInput", "", "placeholder", "Targa", "formControlName", "plate"], ["matInput", "", "placeholder", "Materiale", "formControlName", "materialDescription"], ["matInput", "", "placeholder", "Ragione Sociale", "formControlName", "socialReason"], [4, "appIfAdmin"], [1, "filter-cards-mobile"], ["mat-raised-button", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["fxLayout", "column", 1, "matMenu", 2, "width", "100%", "margin", "0", "padding", "0", 3, "click"], ["mat-raised-button", "", 3, "disabled", "click"], [1, "pi", "pi-filter-slash"], ["formControlName", "installationId"], ["value", ""], [2, "margin", "10px auto 10px auto"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
    template: function CardFilterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "mat-form-field")(3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Numero Carta");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-form-field")(8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Targa");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "input", 4, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "mat-form-field")(13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Materiale");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "input", 5, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "mat-form-field")(18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Ragione Sociale");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "input", 6, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, CardFilterComponent_mat_form_field_22_Template, 8, 3, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 8)(24, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Filtri");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "mat-menu", null, 10)(28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CardFilterComponent_Template_div_click_28_listener($event) {
          return $event.stopPropagation();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "mat-form-field")(30, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Numero Carta");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "mat-form-field")(36, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "Targa");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](38, "input", 4, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "mat-form-field")(42, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "Materiale");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](44, "input", 5, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "mat-form-field")(48, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "Ragione Sociale");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](50, "input", 6, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](53, CardFilterComponent_mat_form_field_53_Template, 8, 3, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CardFilterComponent_Template_button_click_54_listener() {
          return ctx.deleteFilters();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](55, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.filtersForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matMenuTriggerFor", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.hasValue());
      }
    },
    dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__.MatMenuTrigger, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInput, _directives_if_admin_directive__WEBPACK_IMPORTED_MODULE_4__.IfAdminDirective, _angular_common__WEBPACK_IMPORTED_MODULE_17__.AsyncPipe],
    styles: ["form[_ngcontent-%COMP%]{\n    display: flex; \n    flex-direction: row; \n    margin-top: auto;\n}\nmat-form-field[_ngcontent-%COMP%]{\n    margin: 0px 5px 0px 5px;\n}\nbutton[_ngcontent-%COMP%]{\n    margin-left: 10px; \n    margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jYXJkcy1wYWdlL2NhcmQtZmlsdGVyL2NhcmQtZmlsdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImZvcm17XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7IFxyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxufVxyXG5tYXQtZm9ybS1maWVsZHtcclxuICAgIG1hcmdpbjogMHB4IDVweCAwcHggNXB4O1xyXG59XHJcbmJ1dHRvbntcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4OyBcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 6969:
/*!**************************************************************************!*\
  !*** ./src/app/components/cards-page/card-table/card-table.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardTableComponent: () => (/* binding */ CardTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ 9687);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sort */ 7963);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 274);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 7178);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit_card_edit_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../edit-card/edit-card.component */ 8332);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_cards_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cards.service */ 1573);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _pipes_string_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../pipes/string.pipe */ 2330);
















function CardTableComponent_th_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Numero Carta ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function CardTableComponent_td_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", row_r19.numberCard, " ");
  }
}
function CardTableComponent_th_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Codice Carta ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function CardTableComponent_td_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", row_r20.cardCode, " ");
  }
}
function CardTableComponent_th_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Veicolo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function CardTableComponent_td_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", row_r21.vehicle, " ");
  }
}
function CardTableComponent_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Targa ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function CardTableComponent_td_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", row_r22.plate, " ");
  }
}
function CardTableComponent_th_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Materiale ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function CardTableComponent_td_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", row_r23.materialId == null ? null : row_r23.materialId.description, " ");
  }
}
function CardTableComponent_th_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Ragione Sociale ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function CardTableComponent_td_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", row_r24.subjectId == null ? null : row_r24.subjectId.socialReason, " ");
  }
}
function CardTableComponent_th_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Installazione ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function CardTableComponent_td_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", row_r25.installationId == null ? null : row_r25.installationId.description, " ");
  }
}
function CardTableComponent_th_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "th", 19);
  }
}
function CardTableComponent_td_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 18)(1, "div", 20)(2, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CardTableComponent_td_25_Template_button_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r28);
      const row_r26 = restoredCtx.$implicit;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r27.edit(row_r26));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
}
function CardTableComponent_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 22);
  }
}
function CardTableComponent_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 23);
  }
}
function CardTableComponent_tr_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 24)(1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "string");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "string");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "string");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "string");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "string");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate5"]("Nessun dato trovato per i filtri ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 5, ctx_r18.filter == null ? null : ctx_r18.filter.numberCard), " ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 7, ctx_r18.filter == null ? null : ctx_r18.filter.plate), " ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 9, ctx_r18.filter == null ? null : ctx_r18.filter.materialDescription), " ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 11, ctx_r18.filter == null ? null : ctx_r18.filter.socialReason), " ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 13, ctx_r18.filter == null ? null : ctx_r18.filter.installationId), " ");
  }
}
const _c0 = function () {
  return [10, 25, 50, 100];
};
class CardTableComponent {
  constructor(cardSrv, dialog) {
    this.cardSrv = cardSrv;
    this.dialog = dialog;
    this.displayedColumns = ['numberCard', 'cardCode', 'vehicle', 'plate', 'materialId.description', 'subjectId.socialReason', 'installationId.description', 'actions'];
    this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.paginator = null;
    this.sort = null;
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource();
    this.dataSource.sortingDataAccessor = lodash__WEBPACK_IMPORTED_MODULE_0__.get;
    this.dataSource.sort = this.sort;
  }
  ngOnInit() {
    this.cardSrv.cards$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroyed$)).subscribe(cards => {
      this.dataSource.data = cards;
      this.dataSource._updateChangeSubscription();
    });
    this.cardSrv.filters$.subscribe(value => {
      this.filter = value;
    });
    this.cardSrv.actions$.subscribe(value => {
      if (this.paginator) {
        if (value === "filter") this.paginator.firstPage();
        if (value === "add") this.paginator.lastPage();
      }
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
  edit(card) {
    const dialogRef = this.dialog.open(_edit_card_edit_card_component__WEBPACK_IMPORTED_MODULE_1__.EditCardComponent, {
      data: card
    });
  }
  static #_ = this.ɵfac = function CardTableComponent_Factory(t) {
    return new (t || CardTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_cards_service__WEBPACK_IMPORTED_MODULE_2__.CardsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: CardTableComponent,
    selectors: [["app-card-table"]],
    viewQuery: function CardTableComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSort, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
      }
    },
    decls: 33,
    vars: 6,
    consts: [["mat-table", "", "matSort", "", 1, "mat-elevation-z8", "table-cards", 3, "dataSource"], ["matColumnDef", "numberCard"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "cardCode"], ["matColumnDef", "vehicle"], ["matColumnDef", "plate"], ["matColumnDef", "materialId.description"], ["matColumnDef", "subjectId.socialReason"], ["matColumnDef", "installationId.description"], ["matColumnDef", "actions", "stickyEnd", ""], ["mat-header-cell", "", 4, "matHeaderCellDef"], [1, "div"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["showFirstLastButtons", "", "aria-label", "Select page of users", 3, "length", "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], [1, "actions"], ["mat-mini-fab", "", "color", "primary", "aria-label", "Example icon button with a menu icon", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]],
    template: function CardTableComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card-content")(1, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, CardTableComponent_th_3_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, CardTableComponent_td_4_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](5, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, CardTableComponent_th_6_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, CardTableComponent_td_7_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](8, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, CardTableComponent_th_9_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, CardTableComponent_td_10_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](11, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, CardTableComponent_th_12_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, CardTableComponent_td_13_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](14, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, CardTableComponent_th_15_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, CardTableComponent_td_16_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](17, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, CardTableComponent_th_18_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, CardTableComponent_td_19_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](20, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, CardTableComponent_th_21_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, CardTableComponent_td_22_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](23, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, CardTableComponent_th_24_Template, 1, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, CardTableComponent_td_25_Template, 5, 0, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, CardTableComponent_tr_27_Template, 1, 0, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, CardTableComponent_tr_28_Template, 1, 0, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, CardTableComponent_tr_29_Template, 8, 15, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "mat-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "mat-paginator", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("length", ctx.dataSource.data.length)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](5, _c0));
      }
    },
    dependencies: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSortHeader, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatMiniFabButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardFooter, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatNoDataRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginator, _pipes_string_pipe__WEBPACK_IMPORTED_MODULE_3__.StringPipe],
    styles: ["table[_ngcontent-%COMP%] {\n    width: 100%;\n    overflow: auto\n}\n.actions[_ngcontent-%COMP%]{\n  display: flex;\n  flex-direction: row;\n}\nbutton[_ngcontent-%COMP%]{\n    margin: 3px;\n}\nmat-card-footer[_ngcontent-%COMP%]{\n    display: flex;\n    flex-wrap: wrap;\n    padding-bottom: 5px;\n    justify-content: flex-end;\n}\nmat-paginator[_ngcontent-%COMP%]{\n    background-color: var(--primary-color);\n    color: var(--white);\n    border-radius: 50px;\n}\n.div[_ngcontent-%COMP%]{\n    position: fixed; \n    margin: auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jYXJkcy1wYWdlL2NhcmQtdGFibGUvY2FyZC10YWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYO0FBQ0o7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxzQ0FBc0M7SUFDdEMsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEIiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvXHJcbn1cclxuLmFjdGlvbnN7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcbmJ1dHRvbntcclxuICAgIG1hcmdpbjogM3B4O1xyXG59XHJcbm1hdC1jYXJkLWZvb3RlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5tYXQtcGFnaW5hdG9ye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxufVxyXG4uZGl2e1xyXG4gICAgcG9zaXRpb246IGZpeGVkOyBcclxuICAgIG1hcmdpbjogYXV0bztcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 5847:
/*!****************************************************************!*\
  !*** ./src/app/components/cards-page/cards/cards.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardsComponent: () => (/* binding */ CardsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _card_table_card_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../card-table/card-table.component */ 6969);
/* harmony import */ var _card_filter_card_filter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../card-filter/card-filter.component */ 9902);




class CardsComponent {
  static #_ = this.ɵfac = function CardsComponent_Factory(t) {
    return new (t || CardsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: CardsComponent,
    selectors: [["app-cards"]],
    decls: 5,
    vars: 0,
    consts: [[1, "container-page"]],
    template: function CardsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "mat-card")(2, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-card-filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-card-table");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardHeader, _card_table_card_table_component__WEBPACK_IMPORTED_MODULE_0__.CardTableComponent, _card_filter_card_filter_component__WEBPACK_IMPORTED_MODULE_1__.CardFilterComponent],
    styles: ["mat-card[_ngcontent-%COMP%]{\n    margin: 2%;\n    background-color: var(--primary-color);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jYXJkcy1wYWdlL2NhcmRzL2NhcmRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1Ysc0NBQXNDO0FBQzFDIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmR7XHJcbiAgICBtYXJnaW46IDIlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 8332:
/*!************************************************************************!*\
  !*** ./src/app/components/cards-page/edit-card/edit-card.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditCardComponent: () => (/* binding */ EditCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 7178);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 3252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_snackbars_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/snackbars.service */ 9176);
/* harmony import */ var src_app_services_cards_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cards.service */ 1573);
/* harmony import */ var src_app_services_installations_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/installations.service */ 5333);
/* harmony import */ var src_app_services_subjects_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/subjects.service */ 1239);
/* harmony import */ var src_app_services_materials_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/materials.service */ 1244);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 6355);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 26);


















function EditCardComponent_mat_option_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 7)(1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const material_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", material_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", material_r2.description, " ");
  }
}
function EditCardComponent_mat_option_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 7)(1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const subject_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", subject_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", subject_r3.socialReason, " ");
  }
}
class EditCardComponent {
  constructor(snackbarsSrv, fb, cardsSrv, dialogRef, installationsSrv, subjectsSrv, materialsSrv, data) {
    this.snackbarsSrv = snackbarsSrv;
    this.fb = fb;
    this.cardsSrv = cardsSrv;
    this.dialogRef = dialogRef;
    this.installationsSrv = installationsSrv;
    this.subjectsSrv = subjectsSrv;
    this.materialsSrv = materialsSrv;
    this.data = data;
    this.materials$ = this.materialsSrv.materials$;
    this.subjects$ = this.subjectsSrv.subjects$;
    this.installations$ = this.installationsSrv.installations$;
    this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    this.hide = true;
    this.editForm = this.fb.group({
      vehicle: [data.vehicle, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(20)],
      plate: [data.plate, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(20)],
      materialId: [data.materialId?.id],
      subjectId: [data.subjectId?.id]
    });
  }
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
  onNoClick() {
    this.dialogRef.close();
  }
  edit() {
    if (this.editForm.valid) {
      const {
        vehicle,
        plate,
        materialId,
        subjectId
      } = this.editForm.value;
      const card = {
        vehicle: vehicle ? vehicle : null,
        plate: plate ? plate : null,
        materialId: materialId ? (0,lodash__WEBPACK_IMPORTED_MODULE_0__.toNumber)(materialId) : null,
        subjectId: subjectId !== null ? (0,lodash__WEBPACK_IMPORTED_MODULE_0__.toNumber)(subjectId) : null
      };
      this.cardsSrv.edit(this.data.id, card).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.throwError)(err))).subscribe(value => {
        this.snackbarsSrv.openSnackBar("Carta modificata!", "green");
        this.dialogRef.close();
      }, error => {
        let message = "";
        if (error.status === 400) message = error.error.message;else message = "Errore generico, per favore riprova più tardi";
        this.snackbarsSrv.openSnackBar(message, "red");
      });
    }
  }
  static #_ = this.ɵfac = function EditCardComponent_Factory(t) {
    return new (t || EditCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_snackbars_service__WEBPACK_IMPORTED_MODULE_1__.SnackbarsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_cards_service__WEBPACK_IMPORTED_MODULE_2__.CardsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_installations_service__WEBPACK_IMPORTED_MODULE_3__.InstallationsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_subjects_service__WEBPACK_IMPORTED_MODULE_4__.SubjectsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_materials_service__WEBPACK_IMPORTED_MODULE_5__.MaterialsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: EditCardComponent,
    selectors: [["app-edit-card"]],
    decls: 34,
    vars: 12,
    consts: [[1, "container-dialog"], ["mat-dialog-title", ""], ["mat-dialog-content", ""], [3, "formGroup"], ["matInput", "", "type", "text", "formControlName", "vehicle", 3, "maxlength"], ["matInput", "", "type", "text", "formControlName", "plate", 3, "maxlength"], ["formControlName", "materialId"], [3, "value"], [2, "margin", "10px auto 10px auto"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "subjectId"], ["mat-dialog-actions", ""], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"]],
    template: function EditCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Modifica carta");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 2)(4, "form", 3)(5, "mat-form-field")(6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Veicolo");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "mat-form-field")(10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Targa");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "mat-form-field")(14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Materiale");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "mat-select", 6)(17, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, EditCardComponent_mat_option_19_Template, 3, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](20, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "mat-form-field")(22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Ragione Sociale");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "mat-select", 10)(25, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, EditCardComponent_mat_option_27_Template, 3, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](28, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 11)(30, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EditCardComponent_Template_button_click_30_listener() {
          return ctx.onNoClick();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "Esci");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EditCardComponent_Template_button_click_32_listener() {
          return ctx.edit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Salva");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.editForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("maxlength", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("maxlength", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](20, 8, ctx.materials$));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](28, 10, ctx.subjects$));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.editForm.valid);
      }
    },
    dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.MaxLengthValidator, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInput, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogActions, _angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe],
    styles: ["form[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jYXJkcy1wYWdlL2VkaXQtY2FyZC9lZGl0LWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJmb3Jte1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 6497:
/*!*********************************************************!*\
  !*** ./src/app/components/confirm/confirm.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfirmComponent: () => (/* binding */ ConfirmComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 895);




class ConfirmComponent {
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
  }
  onNoClick() {
    this.dialogRef.close();
  }
  static #_ = this.ɵfac = function ConfirmComponent_Factory(t) {
    return new (t || ConfirmComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ConfirmComponent,
    selectors: [["app-confirm"]],
    decls: 10,
    vars: 2,
    consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "mat-dialog-close"]],
    template: function ConfirmComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Conferma");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1)(3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2)(6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmComponent_Template_button_click_6_listener() {
          return ctx.onNoClick();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Si");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Sei sicuro di voler ", ctx.data.action, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
      }
    },
    dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions],
    styles: ["form[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n    min-width: 300px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb25maXJtL2NvbmZpcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZ0JBQWdCO0FBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWluLXdpZHRoOiAzMDBweDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 7437:
/*!*******************************************************************************!*\
  !*** ./src/app/components/events-page/event-filter/event-filter.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventFilterComponent: () => (/* binding */ EventFilterComponent)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 7178);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 274);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 4520);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 655);
/* harmony import */ var src_utils_has_value__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/utils/has-value */ 6097);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var src_app_services_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/events.service */ 2090);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_services_installations_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/installations.service */ 5333);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 6355);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/menu */ 8128);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/datepicker */ 2226);
/* harmony import */ var _directives_if_admin_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../directives/if-admin.directive */ 7432);


















function EventFilterComponent_mat_form_field_33_mat_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 24)(1, "div", 22)(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Codice: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Descrizione: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const installation_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", installation_r14.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", installation_r14.installationCode, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", installation_r14.description, " ");
  }
}
function EventFilterComponent_mat_form_field_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-form-field")(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Installazione");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-select", 20)(4, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, EventFilterComponent_mat_form_field_33_mat_option_6_Template, 9, 3, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 1, ctx_r5.installations$));
  }
}
function EventFilterComponent_mat_form_field_76_mat_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 24)(1, "div")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Codice: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Descrizione: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const installation_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", installation_r16.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", installation_r16.installationCode, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", installation_r16.description, " ");
  }
}
function EventFilterComponent_mat_form_field_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-form-field")(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Installazione");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-select", 20)(4, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, EventFilterComponent_mat_form_field_76_mat_option_6_Template, 9, 3, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 1, ctx_r12.installations$));
  }
}
class EventFilterComponent {
  constructor(fb, dialog, eventsSrv, router, installationsSrv) {
    this.fb = fb;
    this.dialog = dialog;
    this.eventsSrv = eventsSrv;
    this.router = router;
    this.installationsSrv = installationsSrv;
    this.filtersForm = this.fb.group({
      dtMin: this.fb.control(null),
      dtMax: this.fb.control(null),
      numberCard: this.fb.control(''),
      plate: this.fb.control(''),
      materialDescription: this.fb.control(''),
      socialReason: this.fb.control(''),
      installationId: this.fb.control(null)
    });
    this.installations$ = this.installationsSrv.installations$;
    this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
  }
  ngOnInit() {
    this.eventsSrv.filters$.subscribe(value => {
      this.filtersForm.patchValue(value || {
        dtMin: null,
        dtMax: null,
        numberCard: '',
        plate: '',
        materialDescription: '',
        socialReason: '',
        installationId: null
      }, {
        emitEvent: false
      });
      if (this.filtersForm.value.installationId) {
        let installationId = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.toNumber)(this.filtersForm.value.installationId);
        this.filtersForm.get('installationId')?.setValue(installationId);
      }
      if (this.filtersForm.value.dtMin) {
        let dtMin = new Date(this.filtersForm.value.dtMin);
        this.filtersForm.get('dtMin')?.setValue(dtMin);
      }
      if (this.filtersForm.value.dtMax) {
        let dtMax = new Date(this.filtersForm.value.dtMax);
        this.filtersForm.get('dtMax')?.setValue(dtMax);
      }
      this.filtersForm.markAsPristine();
    });
    this.filtersForm.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroyed$), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.filter)(_ => this.filtersForm.valid), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.map)(value => (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omitBy)(value, val => val === '')), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.debounceTime)(200)).subscribe(value => {
      const v = value;
      v.dtMax?.setHours(23);
      v.dtMax?.setMinutes(59);
      this.router.navigate([], {
        queryParams: v
      });
    });
  }
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
  deleteFilters() {
    this.filtersForm.patchValue({
      dtMin: null,
      dtMax: null,
      numberCard: '',
      plate: '',
      materialDescription: '',
      socialReason: '',
      installationId: null
    });
  }
  hasValue() {
    if ((0,src_utils_has_value__WEBPACK_IMPORTED_MODULE_1__.hasValueInOptionalFields)(this.filtersForm)) {
      return false;
    } else {
      return true;
    }
  }
  static #_ = this.ɵfac = function EventFilterComponent_Factory(t) {
    return new (t || EventFilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_events_service__WEBPACK_IMPORTED_MODULE_2__.EventsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_installations_service__WEBPACK_IMPORTED_MODULE_3__.InstallationsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: EventFilterComponent,
    selectors: [["app-event-filter"]],
    decls: 79,
    vars: 7,
    consts: [[3, "formGroup"], [1, "filter-events"], [3, "rangePicker"], ["matStartDate", "", "placeholder", "Start date", "formControlName", "dtMin"], ["matEndDate", "", "placeholder", "End date", "formControlName", "dtMax"], ["matIconSuffix", "", 3, "for"], ["picker", ""], ["matInput", "", "placeholder", "Numero carta", "formControlName", "numberCard"], ["input", ""], ["matInput", "", "placeholder", "Targa", "formControlName", "plate"], ["matInput", "", "placeholder", "Materiale", "formControlName", "materialDescription"], ["matInput", "", "placeholder", "Ragione Sociale", "formControlName", "socialReason"], [4, "appIfAdmin"], [1, "filter-events-mobile"], ["mat-raised-button", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["fxLayout", "column", 1, "matMenu", 2, "width", "100%", "margin", "0", "padding", "0", 3, "click"], ["pickerr", ""], ["mat-raised-button", "", 3, "disabled", "click"], [1, "pi", "pi-filter-slash"], ["formControlName", "installationId"], ["value", ""], [2, "margin", "10px auto 10px auto"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
    template: function EventFilterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "mat-form-field")(3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Inserisci date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-date-range-input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "input", 3)(7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "MM/DD/YYYY \u2013 MM/DD/YYYY");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "mat-datepicker-toggle", 5)(11, "mat-date-range-picker", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-form-field")(14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Numero Carta");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "mat-form-field")(19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Targa");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "input", 9, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "mat-form-field")(24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Materiale");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "input", 10, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "mat-form-field")(29, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Ragione Sociale");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](31, "input", 11, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](33, EventFilterComponent_mat_form_field_33_Template, 8, 3, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 13)(35, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Filtri");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "mat-menu", null, 15)(39, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EventFilterComponent_Template_div_click_39_listener($event) {
          return $event.stopPropagation();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "mat-form-field")(41, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "Inserisci date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "mat-date-range-input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](44, "input", 3)(45, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, "MM/DD/YYYY \u2013 MM/DD/YYYY");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](48, "mat-datepicker-toggle", 5)(49, "mat-date-range-picker", null, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "mat-form-field")(53, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "Numero Carta");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](55, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](57, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "mat-form-field")(59, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "Targa");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](61, "input", 9, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "mat-form-field")(65, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66, "Materiale");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](67, "input", 10, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](69, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "mat-form-field")(71, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](72, "Ragione Sociale");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](73, "input", 11, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](75, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](76, EventFilterComponent_mat_form_field_76_Template, 8, 3, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EventFilterComponent_Template_button_click_77_listener() {
          return ctx.deleteFilters();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](78, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](12);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](38);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.filtersForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("rangePicker", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matMenuTriggerFor", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("rangePicker", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.hasValue());
      }
    },
    dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatSuffix, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__.MatMenuTrigger, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__.MatDateRangeInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__.MatStartDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__.MatEndDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__.MatDateRangePicker, _directives_if_admin_directive__WEBPACK_IMPORTED_MODULE_4__.IfAdminDirective, _angular_common__WEBPACK_IMPORTED_MODULE_17__.AsyncPipe],
    styles: ["form[_ngcontent-%COMP%]{\n    display: flex; \n    flex-direction: row; \n    margin-top: auto;\n}\nmat-form-field[_ngcontent-%COMP%]{\n    margin: 0px 5px 0px 5px;\n}\nbutton[_ngcontent-%COMP%]{\n    margin-left: 10px; \n    margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ldmVudHMtcGFnZS9ldmVudC1maWx0ZXIvZXZlbnQtZmlsdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImZvcm17XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7IFxyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxufVxyXG5tYXQtZm9ybS1maWVsZHtcclxuICAgIG1hcmdpbjogMHB4IDVweCAwcHggNXB4O1xyXG59XHJcbmJ1dHRvbntcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4OyBcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 6298:
/*!*****************************************************************************!*\
  !*** ./src/app/components/events-page/event-table/event-table.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventTableComponent: () => (/* binding */ EventTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ 9687);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sort */ 7963);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../confirm/confirm.component */ 6497);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 274);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 3252);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/animations */ 2501);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ 7178);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/events.service */ 2090);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _directives_if_super_admin_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../directives/if-super-admin.directive */ 3019);
/* harmony import */ var _pipes_datetime_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../pipes/datetime.pipe */ 7811);
/* harmony import */ var _pipes_string_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../pipes/string.pipe */ 2330);




















function EventTableComponent_th_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Progr. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function EventTableComponent_td_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", row_r33.progressive, " ");
  }
}
function EventTableComponent_th_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function EventTableComponent_td_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "datetime");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, row_r34.dt_create), " ");
  }
}
function EventTableComponent_th_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Numero Carta ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function EventTableComponent_td_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", row_r35.numberCard ? row_r35.numberCard : "", " ");
  }
}
function EventTableComponent_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Veicolo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function EventTableComponent_td_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", row_r36.vehicle, " ");
  }
}
function EventTableComponent_th_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Targa ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function EventTableComponent_td_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", row_r37.plate, " ");
  }
}
function EventTableComponent_th_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Ragione Sociale ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function EventTableComponent_td_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", row_r38.socialReason, " ");
  }
}
function EventTableComponent_th_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Pid1/Pid2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function EventTableComponent_td_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", row_r39.pid1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", row_r39.pid2, " ");
  }
}
function EventTableComponent_th_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Peso 1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function EventTableComponent_td_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", row_r40.weight1, " ");
  }
}
function EventTableComponent_th_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Peso 2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function EventTableComponent_td_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", row_r41.weight2, " ");
  }
}
function EventTableComponent_th_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Peso netto ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function EventTableComponent_td_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", row_r42.netWeight, " ");
  }
}
function EventTableComponent_th_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Materiale ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function EventTableComponent_td_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", row_r43.material, " ");
  }
}
function EventTableComponent_th_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Installazione ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function EventTableComponent_td_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", row_r44.installationId == null ? null : row_r44.installationId.description, " ");
  }
}
function EventTableComponent_th_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "th", 31);
  }
}
function EventTableComponent_td_40_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EventTableComponent_td_40_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r49);
      const row_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r47.delete(row_r45.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function EventTableComponent_td_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, EventTableComponent_td_40_button_1_Template, 3, 0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function EventTableComponent_th_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function EventTableComponent_td_43_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "keyboard_arrow_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function EventTableComponent_td_43_mat_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "keyboard_arrow_up");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function EventTableComponent_td_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 30)(1, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EventTableComponent_td_43_Template_button_click_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r54);
      const element_r50 = restoredCtx.$implicit;
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      ctx_r53.expandedElement = ctx_r53.expandedElement === element_r50 ? null : element_r50;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, EventTableComponent_td_43_mat_icon_2_Template, 2, 0, "mat-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, EventTableComponent_td_43_mat_icon_3_Template, 2, 0, "mat-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r50 = ctx.$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r27.expandedElement !== element_r50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r27.expandedElement === element_r50);
  }
}
function EventTableComponent_td_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 30)(1, "div", 37)(2, "div", 38)(3, "ul")(4, "div")(5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Codice Carta:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div")(10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Codice Installazione:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div")(15, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Imei:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const element_r55 = ctx.$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("colspan", ctx_r28.columnsToDisplayWithExpand.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@detailExpand", element_r55 == ctx_r28.expandedElement ? "expanded" : "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r55.cardCode, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r55.installationId == null ? null : element_r55.installationId.installationCode, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r55.installationId == null ? null : element_r55.installationId.imei, " ");
  }
}
function EventTableComponent_tr_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 39);
  }
}
function EventTableComponent_tr_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EventTableComponent_tr_48_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r58);
      const element_r56 = restoredCtx.$implicit;
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r57.expandedElement = ctx_r57.expandedElement === element_r56 ? null : element_r56);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r56 = ctx.$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("example-expanded-row", ctx_r30.expandedElement === element_r56);
  }
}
function EventTableComponent_tr_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 41);
  }
}
function EventTableComponent_tr_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 42)(1, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "string");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "string");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "string");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "string");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "string");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](10, "string");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate6"]("Nessun dato trovato per i filtri ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 6, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 8, ctx_r32.filter == null ? null : ctx_r32.filter.dtMin)), " ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 10, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 12, ctx_r32.filter == null ? null : ctx_r32.filter.dtMax)), " ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 14, ctx_r32.filter == null ? null : ctx_r32.filter.numberCard), " ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](8, 16, ctx_r32.filter == null ? null : ctx_r32.filter.plate), " ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](9, 18, ctx_r32.filter == null ? null : ctx_r32.filter.socialReason), " ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](10, 20, ctx_r32.filter == null ? null : ctx_r32.filter.idInstallation), " ");
  }
}
const _c0 = function () {
  return ["expandedDetail"];
};
const _c1 = function () {
  return [10, 25, 50, 100];
};
class EventTableComponent {
  constructor(eventsSrv, dialog) {
    this.eventsSrv = eventsSrv;
    this.dialog = dialog;
    this.displayedColumns = ["progressive", 'dt_create', "numberCard", "vehicle", "plate", "socialReason", 'pid1_pid2', 'weight1', 'weight2', 'netWeight', 'material', 'installationId.description', 'actions'];
    this.columnsToDisplayWithExpand = [...this.displayedColumns, 'expand'];
    this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    this.paginator = null;
    this.sort = null;
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource();
    this.dataSource.sortingDataAccessor = lodash__WEBPACK_IMPORTED_MODULE_1__.get;
    this.dataSource.sort = this.sort;
  }
  ngOnInit() {
    this.eventsSrv.events$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroyed$)).subscribe(events => {
      this.dataSource.data = events;
      this.dataSource._updateChangeSubscription();
    });
    this.eventsSrv.filters$.subscribe(value => {
      this.filter = value;
    });
    this.eventsSrv.actions$.subscribe(value => {
      if (this.paginator) {
        if (value === "filter") this.paginator.firstPage();
        if (value === "add") this.paginator.lastPage();
      }
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
  exportArray(ext) {
    this.eventsSrv.exportList(ext);
  }
  delete(id) {
    const dialogRef = this.dialog.open(_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmComponent, {
      data: {
        action: `Eliminare questo evento`
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.eventsSrv.delete(id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.throwError)(err))).subscribe();
      }
    });
  }
  static #_ = this.ɵfac = function EventTableComponent_Factory(t) {
    return new (t || EventTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_events_service__WEBPACK_IMPORTED_MODULE_2__.EventsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: EventTableComponent,
    selectors: [["app-event-table"]],
    viewQuery: function EventTableComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSort, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
      }
    },
    decls: 61,
    vars: 8,
    consts: [["mat-table", "", "matSort", "", "multiTemplateDataRows", "", "id", "table", 1, "mat-elevation-z8", "table-events", 3, "dataSource"], ["matColumnDef", "progressive"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "dt_create"], ["matColumnDef", "numberCard"], ["matColumnDef", "vehicle"], ["matColumnDef", "plate"], ["matColumnDef", "socialReason"], ["matColumnDef", "pid1_pid2"], ["matColumnDef", "weight1"], ["matColumnDef", "weight2"], ["matColumnDef", "netWeight"], ["matColumnDef", "material"], ["matColumnDef", "installationId.description"], ["matColumnDef", "actions", "stickyEnd", ""], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "expand"], ["mat-header-cell", "", "aria-label", "row actions", 4, "matHeaderCellDef"], ["matColumnDef", "expandedDetail"], [1, "div"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "example-element-row", 3, "example-expanded-row", "click", 4, "matRowDef", "matRowDefColumns"], ["mat-row", "", "class", "example-detail-row", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["mat-raised-button", "", 1, "excel", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["showFirstLastButtons", "", "aria-label", "Select page of users", 3, "length", "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], ["mat-mini-fab", "", "color", "warn", "aria-label", "Example icon button with a menu icon", 3, "click", 4, "appIfSuperAdmin"], ["mat-mini-fab", "", "color", "warn", "aria-label", "Example icon button with a menu icon", 3, "click"], ["mat-header-cell", "", "aria-label", "row actions"], ["mat-icon-button", "", "aria-label", "expand row", 3, "click"], [4, "ngIf"], [1, "example-element-detail"], [1, "example-element-description"], ["mat-header-row", ""], ["mat-row", "", 1, "example-element-row", 3, "click"], ["mat-row", "", 1, "example-detail-row"], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]],
    template: function EventTableComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-card-content")(1, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, EventTableComponent_th_3_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, EventTableComponent_td_4_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](5, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, EventTableComponent_th_6_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, EventTableComponent_td_7_Template, 3, 3, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](8, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, EventTableComponent_th_9_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, EventTableComponent_td_10_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](11, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, EventTableComponent_th_12_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, EventTableComponent_td_13_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](14, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, EventTableComponent_th_15_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, EventTableComponent_td_16_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](17, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, EventTableComponent_th_18_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, EventTableComponent_td_19_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](20, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, EventTableComponent_th_21_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, EventTableComponent_td_22_Template, 4, 2, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](23, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, EventTableComponent_th_24_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, EventTableComponent_td_25_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](26, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, EventTableComponent_th_27_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, EventTableComponent_td_28_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](29, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, EventTableComponent_th_30_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, EventTableComponent_td_31_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](32, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, EventTableComponent_th_33_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, EventTableComponent_td_34_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](35, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, EventTableComponent_th_36_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, EventTableComponent_td_37_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](38, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](39, EventTableComponent_th_39_Template, 1, 0, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](40, EventTableComponent_td_40_Template, 2, 0, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](41, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](42, EventTableComponent_th_42_Template, 2, 0, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](43, EventTableComponent_td_43_Template, 4, 2, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](44, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](45, EventTableComponent_td_45_Template, 18, 5, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](47, EventTableComponent_tr_47_Template, 1, 0, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](48, EventTableComponent_tr_48_Template, 1, 2, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](49, EventTableComponent_tr_49_Template, 1, 0, "tr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](50, EventTableComponent_tr_50_Template, 11, 22, "tr", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "mat-card-footer")(53, "div")(54, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EventTableComponent_Template_button_click_54_listener() {
          return ctx.exportArray("xlsx");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55, "EXCEL");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EventTableComponent_Template_button_click_56_listener() {
          return ctx.exportArray("csv");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57, "CSV");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EventTableComponent_Template_button_click_58_listener() {
          return ctx.exportArray("pdf");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](59, "PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](60, "mat-paginator", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx.columnsToDisplayWithExpand);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx.columnsToDisplayWithExpand);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("length", ctx.dataSource.data.length)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](7, _c1));
      }
    },
    dependencies: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSortHeader, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatIconButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatMiniFabButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardFooter, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatNoDataRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginator, _directives_if_super_admin_directive__WEBPACK_IMPORTED_MODULE_3__.IfSuperAdminDirective, _angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe, _pipes_datetime_pipe__WEBPACK_IMPORTED_MODULE_4__.DatetimePipe, _pipes_string_pipe__WEBPACK_IMPORTED_MODULE_5__.StringPipe],
    styles: ["table[_ngcontent-%COMP%] {\n    width: 100%;\n    overflow: auto\n}\n.actions[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n}\n.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child{\n    width: 80px;\n    margin-top: auto;\n    margin-bottom: auto;\n}\nbutton[_ngcontent-%COMP%]{\n    margin: 3px;\n}\nmat-paginator[_ngcontent-%COMP%]{\n    background-color: var(--primary-color);\n    color: var(--white);\n    border-radius: 50px;\n}\n.div[_ngcontent-%COMP%]{\n    position: fixed; \n    margin: auto;\n}  \ntr.example-detail-row[_ngcontent-%COMP%] {\n    height: 0;\n}\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):hover {\n    background: whitesmoke;\n}  \ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):active {\n    background: #efefef;\n}  \n.example-element-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    border-bottom-width: 0;\n}  \n.example-element-detail[_ngcontent-%COMP%] {\n    overflow: hidden;\n    display: flex;\n}  \n.example-element-description[_ngcontent-%COMP%] {\n    padding: 16px;\n}\nmat-card-footer[_ngcontent-%COMP%]{\n    display: flex; \n    flex-wrap: wrap;\n    padding-bottom: 5px;\n}\nmat-card-footer[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\n    flex: 20%;\n}\nmat-card-footer[_ngcontent-%COMP%]    > mat-paginator[_ngcontent-%COMP%]{\n    flex-direction: 80%;\n}\n@media (max-width: 800px){\n    mat-card-footer[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], mat-card-footer[_ngcontent-%COMP%]    > mat-paginator[_ngcontent-%COMP%]{\n        flex: 100%;\n    }\n}\nmat-card-footer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\n    padding-left: 20px;\n    margin-top: auto; \n    margin-bottom: auto;\n}\nmat-card-footer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .excel[_ngcontent-%COMP%]{\n    background-color: var(--excel); \n    color: var(--white);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ldmVudHMtcGFnZS9ldmVudC10YWJsZS9ldmVudC10YWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYO0FBQ0o7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLHNDQUFzQztJQUN0QyxtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksU0FBUztBQUNiO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFNBQVM7QUFDYjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSTs7UUFFSSxVQUFVO0lBQ2Q7QUFDSjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkIiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvXHJcbn1cclxuLmFjdGlvbnN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG4uYWN0aW9ucyBidXR0b246Zmlyc3QtY2hpbGR7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG59XHJcbmJ1dHRvbntcclxuICAgIG1hcmdpbjogM3B4O1xyXG59XHJcbm1hdC1wYWdpbmF0b3J7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG59XHJcbi5kaXZ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7IFxyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59ICBcclxudHIuZXhhbXBsZS1kZXRhaWwtcm93IHtcclxuICAgIGhlaWdodDogMDtcclxufVxyXG50ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XHJcbn0gIFxyXG50ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xyXG59ICBcclxuLmV4YW1wbGUtZWxlbWVudC1yb3cgdGQge1xyXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcclxufSAgXHJcbi5leGFtcGxlLWVsZW1lbnQtZGV0YWlsIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59ICBcclxuLmV4YW1wbGUtZWxlbWVudC1kZXNjcmlwdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcbm1hdC1jYXJkLWZvb3RlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG5tYXQtY2FyZC1mb290ZXIgPiBkaXZ7XHJcbiAgICBmbGV4OiAyMCU7XHJcbn1cclxubWF0LWNhcmQtZm9vdGVyID4gbWF0LXBhZ2luYXRvcntcclxuICAgIGZsZXgtZGlyZWN0aW9uOiA4MCU7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KXtcclxuICAgIG1hdC1jYXJkLWZvb3RlciA+IGRpdixcclxuICAgIG1hdC1jYXJkLWZvb3RlciA+IG1hdC1wYWdpbmF0b3J7XHJcbiAgICAgICAgZmxleDogMTAwJTtcclxuICAgIH1cclxufVxyXG5tYXQtY2FyZC1mb290ZXIgZGl2e1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bzsgXHJcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG59XHJcbm1hdC1jYXJkLWZvb3RlciBkaXYgLmV4Y2Vse1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZXhjZWwpOyBcclxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_19__.trigger)('detailExpand', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_19__.state)('collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_19__.style)({
        height: '0px',
        minHeight: '0'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_19__.state)('expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_19__.style)({
        height: '*'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_19__.transition)('expanded <=> collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_19__.animate)('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))])]
    }
  });
}

/***/ }),

/***/ 4930:
/*!*******************************************************************!*\
  !*** ./src/app/components/events-page/events/events.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventsComponent: () => (/* binding */ EventsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _event_table_event_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../event-table/event-table.component */ 6298);
/* harmony import */ var _event_filter_event_filter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../event-filter/event-filter.component */ 7437);




class EventsComponent {
  static #_ = this.ɵfac = function EventsComponent_Factory(t) {
    return new (t || EventsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: EventsComponent,
    selectors: [["app-events"]],
    decls: 5,
    vars: 0,
    consts: [[1, "container-page"]],
    template: function EventsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "mat-card")(2, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-event-filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-event-table");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardHeader, _event_table_event_table_component__WEBPACK_IMPORTED_MODULE_0__.EventTableComponent, _event_filter_event_filter_component__WEBPACK_IMPORTED_MODULE_1__.EventFilterComponent],
    styles: ["mat-card[_ngcontent-%COMP%]{\n    margin: 2%;\n    background-color: var(--primary-color);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ldmVudHMtcGFnZS9ldmVudHMvZXZlbnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1Ysc0NBQXNDO0FBQzFDIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmR7XHJcbiAgICBtYXJnaW46IDIlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 1647:
/*!**********************************************************************************************!*\
  !*** ./src/app/components/installations-page/add-installation/add-installation.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddInstallationComponent: () => (/* binding */ AddInstallationComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 3252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_snackbars_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/snackbars.service */ 9176);
/* harmony import */ var src_app_services_installations_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/installations.service */ 5333);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 26);











class AddInstallationComponent {
  constructor(snackbarSrv, fb, installationsSrv, dialogRef, data) {
    this.snackbarSrv = snackbarSrv;
    this.fb = fb;
    this.installationsSrv = installationsSrv;
    this.dialogRef = dialogRef;
    this.data = data;
    this.addForm = this.fb.group({
      installationCode: ['', {
        validators: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required,
        min: 8,
        max: 50
      }],
      description: ['', {
        validators: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required,
        max: 50
      }],
      imei: ['', {
        validators: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required,
        length: 15
      }]
    });
  }
  onNoClick() {
    this.dialogRef.close();
  }
  add() {
    if (this.addForm.valid) {
      const {
        installationCode,
        description,
        imei
      } = this.addForm.value;
      this.installationsSrv.add(installationCode, description, imei).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(err))).subscribe(value => {
        this.snackbarSrv.openSnackBar("Installazione aggiunta!", "green");
        this.dialogRef.close();
      }, error => {
        let message = "";
        if (error.status === 400) message = error.error.message;else message = "Errore generico, per favore riprova più tardi";
        this.snackbarSrv.openSnackBar(message, "red");
      });
    }
  }
  static #_ = this.ɵfac = function AddInstallationComponent_Factory(t) {
    return new (t || AddInstallationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_snackbars_service__WEBPACK_IMPORTED_MODULE_0__.SnackbarsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_installations_service__WEBPACK_IMPORTED_MODULE_1__.InstallationsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: AddInstallationComponent,
    selectors: [["app-add-installation"]],
    decls: 29,
    vars: 7,
    consts: [[1, "container-dialog"], ["mat-dialog-title", ""], ["mat-dialog-content", ""], [3, "formGroup"], ["matInput", "", "type", "text", "formControlName", "installationCode", "minlength", "8", 3, "maxlength"], ["align", "start"], ["align", "end"], ["matInput", "", "type", "text", "formControlName", "description", 3, "maxlength"], ["matInput", "", "type", "text", "formControlName", "imei", "minlength", "15", 3, "maxlength"], ["mat-dialog-actions", ""], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"]],
    template: function AddInstallationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Nuova Installazione");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2)(4, "form", 3)(5, "mat-form-field")(6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Codice");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-hint", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Min 8 caratteri");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "mat-hint", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-form-field")(14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Descrizione");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "mat-form-field")(18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Imei");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "input", 8)(21, "mat-hint", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "mat-hint", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 9)(25, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddInstallationComponent_Template_button_click_25_listener() {
          return ctx.onNoClick();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Esci");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddInstallationComponent_Template_button_click_27_listener() {
          return ctx.add();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.addForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("maxlength", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](((ctx.addForm.value.installationCode == null ? null : ctx.addForm.value.installationCode.length) || 0) < 8 ? 8 - ((ctx.addForm.value.installationCode == null ? null : ctx.addForm.value.installationCode.length) || 0) + " mancanti" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("maxlength", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("maxlength", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", (ctx.addForm.value.imei == null ? null : ctx.addForm.value.imei.length) || 0, "/15");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.addForm.valid);
      }
    },
    dependencies: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatHint, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MaxLengthValidator, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogActions],
    styles: ["form[_ngcontent-%COMP%]{\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9pbnN0YWxsYXRpb25zLXBhZ2UvYWRkLWluc3RhbGxhdGlvbi9hZGQtaW5zdGFsbGF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 4021:
/*!************************************************************************************************!*\
  !*** ./src/app/components/installations-page/edit-installation/edit-installation.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditInstallationComponent: () => (/* binding */ EditInstallationComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 3252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_snackbars_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/snackbars.service */ 9176);
/* harmony import */ var src_app_services_installations_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/installations.service */ 5333);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 26);











class EditInstallationComponent {
  constructor(snackbarSrv, fb, installationsSrv, dialogRef, data) {
    this.snackbarSrv = snackbarSrv;
    this.fb = fb;
    this.installationsSrv = installationsSrv;
    this.dialogRef = dialogRef;
    this.data = data;
    this.editForm = this.fb.group({
      installationCode: [data.installationCode, {
        validators: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required,
        min: 8,
        max: 50
      }],
      description: [data.description, {
        validators: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required,
        max: 50
      }],
      imei: [data.imei, {
        validators: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required,
        length: 15
      }]
    });
  }
  onNoClick() {
    this.dialogRef.close();
  }
  edit() {
    if (this.editForm.valid) {
      const {
        installationCode,
        description,
        imei
      } = this.editForm.value;
      this.installationsSrv.edit(this.data.id, {
        installationCode: installationCode === this.data.installationCode ? null : installationCode,
        description: description === this.data.description ? null : description,
        imei: imei === this.data.imei ? null : imei
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(err))).subscribe(value => {
        this.snackbarSrv.openSnackBar("Installazione modificata!", "green");
        this.dialogRef.close();
      }, error => {
        let message = "";
        if (error.status === 400) message = error.error.message;else message = "Errore generico, per favore riprova più tardi";
        this.snackbarSrv.openSnackBar(message, "red");
      });
    }
  }
  static #_ = this.ɵfac = function EditInstallationComponent_Factory(t) {
    return new (t || EditInstallationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_snackbars_service__WEBPACK_IMPORTED_MODULE_0__.SnackbarsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_installations_service__WEBPACK_IMPORTED_MODULE_1__.InstallationsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: EditInstallationComponent,
    selectors: [["app-edit-installation"]],
    decls: 29,
    vars: 7,
    consts: [[1, "container-dialog"], ["mat-dialog-title", ""], ["mat-dialog-content", ""], [3, "formGroup"], ["matInput", "", "type", "text", "formControlName", "installationCode", "minlength", "8", 3, "maxlength"], ["align", "start"], ["align", "end"], ["matInput", "", "type", "text", "formControlName", "description", 3, "maxlength"], ["matInput", "", "type", "text", "formControlName", "imei", "minlength", "15", 3, "maxlength"], ["mat-dialog-actions", ""], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"]],
    template: function EditInstallationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Modifica installazione");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2)(4, "form", 3)(5, "mat-form-field")(6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Codice");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-hint", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Min 8 caratteri");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "mat-hint", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-form-field")(14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Descrizione");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "mat-form-field")(18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Imei");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "input", 8)(21, "mat-hint", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "mat-hint", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 9)(25, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EditInstallationComponent_Template_button_click_25_listener() {
          return ctx.onNoClick();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Esci");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EditInstallationComponent_Template_button_click_27_listener() {
          return ctx.edit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Salva");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.editForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("maxlength", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](((ctx.editForm.value.installationCode == null ? null : ctx.editForm.value.installationCode.length) || 0) < 8 ? 8 - ((ctx.editForm.value.installationCode == null ? null : ctx.editForm.value.installationCode.length) || 0) + " mancanti" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("maxlength", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("maxlength", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", (ctx.editForm.value.imei == null ? null : ctx.editForm.value.imei.length) || 0, "/15");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.editForm.valid);
      }
    },
    dependencies: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatHint, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MaxLengthValidator, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogActions],
    styles: ["form[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9pbnN0YWxsYXRpb25zLXBhZ2UvZWRpdC1pbnN0YWxsYXRpb24vZWRpdC1pbnN0YWxsYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7RUFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJmb3Jte1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 5715:
/*!****************************************************************************************************!*\
  !*** ./src/app/components/installations-page/installation-filter/installation-filter.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InstallationFilterComponent: () => (/* binding */ InstallationFilterComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 274);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 4520);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 655);
/* harmony import */ var _add_installation_add_installation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../add-installation/add-installation.component */ 1647);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ 7178);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_utils_has_value__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/utils/has-value */ 6097);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_services_installations_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/installations.service */ 5333);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/menu */ 8128);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _directives_if_super_admin_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../directives/if-super-admin.directive */ 3019);














function InstallationFilterComponent_button_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function InstallationFilterComponent_button_31_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r6.openDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Aggiungi");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
class InstallationFilterComponent {
  constructor(fb, dialog, router, installationsSrv) {
    this.fb = fb;
    this.dialog = dialog;
    this.router = router;
    this.installationsSrv = installationsSrv;
    this.filtersForm = this.fb.group({
      installationCode: this.fb.control(''),
      description: this.fb.control('')
    });
    this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
  }
  ngOnInit() {
    this.installationsSrv.filters$.subscribe(value => {
      this.filtersForm.patchValue(value || {}, {
        emitEvent: false
      });
      this.filtersForm.markAsPristine();
    });
    this.filtersForm.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroyed$), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.filter)(_ => this.filtersForm.valid), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.map)(value => (0,lodash__WEBPACK_IMPORTED_MODULE_1__.omitBy)(value, val => val === '')), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.debounceTime)(200)).subscribe(value => {
      this.router.navigate([], {
        queryParams: value
      });
    });
  }
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
  deleteFilters() {
    this.filtersForm.patchValue({
      installationCode: '',
      description: ''
    });
  }
  openDialog() {
    this.dialog.open(_add_installation_add_installation_component__WEBPACK_IMPORTED_MODULE_0__.AddInstallationComponent, {
      data: {
        username: null,
        description: null
      }
    });
  }
  hasValue() {
    if ((0,src_utils_has_value__WEBPACK_IMPORTED_MODULE_2__.hasValueInOptionalFields)(this.filtersForm)) {
      return false;
    } else {
      return true;
    }
  }
  static #_ = this.ɵfac = function InstallationFilterComponent_Factory(t) {
    return new (t || InstallationFilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_installations_service__WEBPACK_IMPORTED_MODULE_3__.InstallationsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: InstallationFilterComponent,
    selectors: [["app-installation-filter"]],
    decls: 32,
    vars: 3,
    consts: [[3, "formGroup"], [1, "filter-installations"], ["matInput", "", "placeholder", "Codice", "formControlName", "installationCode"], ["input", ""], ["matInput", "", "placeholder", "Descrizione", "formControlName", "description"], [1, "filter-installations-mobile"], ["mat-raised-button", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["fxLayout", "column", 1, "matMenu", 2, "width", "100%", "margin", "0", "padding", "0", 3, "click"], ["mat-raised-button", "", 3, "disabled", "click"], [1, "pi", "pi-filter-slash"], ["mat-raised-button", "", "color", "primary", 3, "click", 4, "appIfSuperAdmin"], ["mat-raised-button", "", "color", "primary", 3, "click"]],
    template: function InstallationFilterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "mat-form-field")(3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Codice");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-form-field")(8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Descrizione");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "input", 4, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 5)(13, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Filtri");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-menu", null, 7)(17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function InstallationFilterComponent_Template_div_click_17_listener($event) {
          return $event.stopPropagation();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "mat-form-field")(19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Codice");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "mat-form-field")(25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Descrizione");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "input", 4, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function InstallationFilterComponent_Template_button_click_29_listener() {
          return ctx.deleteFilters();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, InstallationFilterComponent_button_31_Template, 2, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.filtersForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matMenuTriggerFor", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.hasValue());
      }
    },
    dependencies: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuTrigger, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInput, _directives_if_super_admin_directive__WEBPACK_IMPORTED_MODULE_4__.IfSuperAdminDirective],
    styles: ["form[_ngcontent-%COMP%]{\n  display: flex; \n  flex-direction: row; \n  margin-top: auto;\n}\nmat-form-field[_ngcontent-%COMP%]{\n  margin: 0px 5px 0px 5px;\n}\nbutton[_ngcontent-%COMP%]{\n  margin-left: 10px; \n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9pbnN0YWxsYXRpb25zLXBhZ2UvaW5zdGFsbGF0aW9uLWZpbHRlci9pbnN0YWxsYXRpb24tZmlsdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQiIsInNvdXJjZXNDb250ZW50IjpbImZvcm17XHJcbiAgZGlzcGxheTogZmxleDsgXHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdzsgXHJcbiAgbWFyZ2luLXRvcDogYXV0bztcclxufVxyXG5tYXQtZm9ybS1maWVsZHtcclxuICBtYXJnaW46IDBweCA1cHggMHB4IDVweDtcclxufVxyXG5idXR0b257XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7IFxyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 1376:
/*!**************************************************************************************************!*\
  !*** ./src/app/components/installations-page/installation-table/installation-table.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InstallationTableComponent: () => (/* binding */ InstallationTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ 9687);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sort */ 7963);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 274);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 3252);
/* harmony import */ var _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../confirm/confirm.component */ 6497);
/* harmony import */ var _edit_installation_edit_installation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../edit-installation/edit-installation.component */ 4021);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_installations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/installations.service */ 5333);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _directives_if_super_admin_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../directives/if-super-admin.directive */ 3019);
/* harmony import */ var _pipes_string_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../pipes/string.pipe */ 2330);

















function InstallationTableComponent_th_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Codice ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function InstallationTableComponent_td_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", row_r11.installationCode, " ");
  }
}
function InstallationTableComponent_th_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Descrizione ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function InstallationTableComponent_td_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", row_r12.description, " ");
  }
}
function InstallationTableComponent_th_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Imei ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function InstallationTableComponent_td_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", row_r13.imei, " ");
  }
}
function InstallationTableComponent_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "th", 15);
  }
}
function InstallationTableComponent_td_13_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function InstallationTableComponent_td_13_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19);
      const row_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r17.edit(row_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function InstallationTableComponent_td_13_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function InstallationTableComponent_td_13_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22);
      const row_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r20.delete(row_r14.id, row_r14.description));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function InstallationTableComponent_td_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 14)(1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, InstallationTableComponent_td_13_button_2_Template, 3, 0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, InstallationTableComponent_td_13_button_3_Template, 3, 0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function InstallationTableComponent_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 21);
  }
}
function InstallationTableComponent_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 22);
  }
}
function InstallationTableComponent_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 23)(1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "string");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "string");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("Nessun dato trovato per i filtri ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 2, ctx_r10.filter == null ? null : ctx_r10.filter.installationCode), " ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 4, ctx_r10.filter == null ? null : ctx_r10.filter.description), " ");
  }
}
const _c0 = function () {
  return [5, 10];
};
class InstallationTableComponent {
  constructor(installationsSrv, dialog) {
    this.installationsSrv = installationsSrv;
    this.dialog = dialog;
    this.displayedColumns = ['installationCode', 'description', 'imei', 'actions'];
    this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    this.paginator = null;
    this.sort = null;
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource();
    this.dataSource.sort = this.sort;
  }
  ngOnInit() {
    this.installationsSrv.installations$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroyed$)).subscribe(installations => {
      this.dataSource.data = installations;
      this.dataSource._updateChangeSubscription();
    });
    this.installationsSrv.filters$.subscribe(value => {
      this.filter = value;
    });
    this.installationsSrv.actions$.subscribe(value => {
      if (this.paginator) {
        if (value === "filter") this.paginator.firstPage();
        if (value === "add") this.paginator.lastPage();
      }
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
  delete(id, description) {
    const dialogRef = this.dialog.open(_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmComponent, {
      data: {
        action: `eliminare l'installazione "${description}"`
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.installationsSrv.delete(id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.throwError)(err))).subscribe();
      }
    });
  }
  edit(installation) {
    const dialogRef = this.dialog.open(_edit_installation_edit_installation_component__WEBPACK_IMPORTED_MODULE_1__.EditInstallationComponent, {
      data: installation
    });
  }
  static #_ = this.ɵfac = function InstallationTableComponent_Factory(t) {
    return new (t || InstallationTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_installations_service__WEBPACK_IMPORTED_MODULE_2__.InstallationsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: InstallationTableComponent,
    selectors: [["app-installation-table"]],
    viewQuery: function InstallationTableComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSort, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
      }
    },
    decls: 21,
    vars: 7,
    consts: [["mat-table", "", "matSort", "", 1, "mat-elevation-z8", "table-installations", 3, "dataSource"], ["matColumnDef", "installationCode"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "description"], ["matColumnDef", "imei"], ["matColumnDef", "actions", "stickyEnd", ""], ["mat-header-cell", "", 4, "matHeaderCellDef"], [1, "div"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["showFirstLastButtons", "", "aria-label", "Select page of users", 3, "length", "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], [1, "actions"], ["mat-mini-fab", "", "color", "primary", "aria-label", "Example icon button with a menu icon", 3, "click", 4, "appIfSuperAdmin"], ["mat-mini-fab", "", "color", "warn", "aria-label", "Example icon button with a menu icon", 3, "click", 4, "appIfSuperAdmin"], ["mat-mini-fab", "", "color", "primary", "aria-label", "Example icon button with a menu icon", 3, "click"], ["mat-mini-fab", "", "color", "warn", "aria-label", "Example icon button with a menu icon", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]],
    template: function InstallationTableComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-card-content")(1, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, InstallationTableComponent_th_3_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, InstallationTableComponent_td_4_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](5, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, InstallationTableComponent_th_6_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, InstallationTableComponent_td_7_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](8, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, InstallationTableComponent_th_9_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, InstallationTableComponent_td_10_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](11, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, InstallationTableComponent_th_12_Template, 1, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, InstallationTableComponent_td_13_Template, 4, 0, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, InstallationTableComponent_tr_15_Template, 1, 0, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, InstallationTableComponent_tr_16_Template, 1, 0, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, InstallationTableComponent_tr_17_Template, 5, 6, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "mat-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "mat-paginator", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("length", ctx.dataSource.data.length)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](6, _c0));
      }
    },
    dependencies: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSortHeader, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatMiniFabButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardFooter, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatNoDataRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginator, _directives_if_super_admin_directive__WEBPACK_IMPORTED_MODULE_3__.IfSuperAdminDirective, _pipes_string_pipe__WEBPACK_IMPORTED_MODULE_4__.StringPipe],
    styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow: auto\n}\n.actions[_ngcontent-%COMP%]{\n  display: flex;\n  flex-direction: row;\n}\nbutton[_ngcontent-%COMP%]{\n  margin: 3px;\n}\nmat-card-footer[_ngcontent-%COMP%]{\n  display: flex; \n  flex-wrap: wrap;\n  padding-bottom: 5px;\n  justify-content: flex-end;\n}\nmat-paginator[_ngcontent-%COMP%]{\n  background-color: var(--primary-color);\n  color: var(--white);\n  border-radius: 50px;\n}\n.div[_ngcontent-%COMP%]{\n  position: fixed; \n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9pbnN0YWxsYXRpb25zLXBhZ2UvaW5zdGFsbGF0aW9uLXRhYmxlL2luc3RhbGxhdGlvbi10YWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYO0FBQ0Y7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxzQ0FBc0M7RUFDdEMsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZCIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogYXV0b1xyXG59XHJcbi5hY3Rpb25ze1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5idXR0b257XHJcbiAgbWFyZ2luOiAzcHg7XHJcbn1cclxubWF0LWNhcmQtZm9vdGVye1xyXG4gIGRpc3BsYXk6IGZsZXg7IFxyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxubWF0LXBhZ2luYXRvcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbn1cclxuLmRpdntcclxuICBwb3NpdGlvbjogZml4ZWQ7IFxyXG4gIG1hcmdpbjogYXV0bztcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 5988:
/*!****************************************************************************************!*\
  !*** ./src/app/components/installations-page/installations/installations.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InstallationsComponent: () => (/* binding */ InstallationsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _installation_table_installation_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../installation-table/installation-table.component */ 1376);
/* harmony import */ var _installation_filter_installation_filter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../installation-filter/installation-filter.component */ 5715);




class InstallationsComponent {
  constructor() {}
  static #_ = this.ɵfac = function InstallationsComponent_Factory(t) {
    return new (t || InstallationsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: InstallationsComponent,
    selectors: [["app-installations"]],
    decls: 5,
    vars: 0,
    consts: [[1, "container-page"]],
    template: function InstallationsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "mat-card")(2, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-installation-filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-installation-table");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardHeader, _installation_table_installation_table_component__WEBPACK_IMPORTED_MODULE_0__.InstallationTableComponent, _installation_filter_installation_filter_component__WEBPACK_IMPORTED_MODULE_1__.InstallationFilterComponent],
    styles: ["mat-card[_ngcontent-%COMP%]{\n    margin: 2%;\n    background-color: var(--primary-color);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9pbnN0YWxsYXRpb25zLXBhZ2UvaW5zdGFsbGF0aW9ucy9pbnN0YWxsYXRpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1Ysc0NBQXNDO0FBQzFDIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmR7XHJcbiAgICBtYXJnaW46IDIlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 6666:
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 274);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 3252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth.service */ 2333);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 26);











class LoginComponent {
  togglePasswordVisibility(event) {
    event.stopPropagation();
    this.hide = !this.hide;
  }
  constructor(snackBar, fb, route, authSrv, router) {
    this.snackBar = snackBar;
    this.fb = fb;
    this.route = route;
    this.authSrv = authSrv;
    this.router = router;
    this.loginForm = this.fb.group({
      username: ['', {
        validators: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required
      }],
      password: ['', {
        validators: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required
      }]
    });
    this.hide = true;
    this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
  }
  openSnackBar(message) {
    this.snackBar.open(message, "Close", {
      duration: 3000,
      panelClass: ['red']
    });
  }
  ngOnInit() {
    this.loginForm.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroyed$)).subscribe(() => {
      this.snackBar.dismiss();
    });
  }
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
  login() {
    if (this.loginForm.valid) {
      const {
        username,
        password
      } = this.loginForm.value;
      this.authSrv.login(username, password).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => {
        if (err.status === 429) this.openSnackBar(err.error);else this.openSnackBar(err.error.code);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => err);
      })).subscribe(() => {
        this.router.navigate(['/events']);
      });
    }
  }
  static #_ = this.ɵfac = function LoginComponent_Factory(t) {
    return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: LoginComponent,
    selectors: [["app-login"]],
    decls: 17,
    vars: 6,
    consts: [[1, "container"], [1, "loginForm", 3, "formGroup", "ngSubmit"], ["appearance", "outline"], ["matInput", "", "type", "text", "formControlName", "username", "minlength", "8"], ["matInput", "", "formControlName", "password", 3, "type"], ["type", "button", "mat-icon-button", "", "matSuffix", "", 3, "click"], ["mat-raised-button", "", "type", "submit", "mat-button", "", "extended", "", 3, "disabled"], ["src", "assets/logo-baron-pesi.svg"]],
    template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_2_listener() {
          return ctx.login();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-form-field", 2)(4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Inserisci username");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "mat-form-field", 2)(8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Inserisci password");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_11_listener($event) {
          ctx.hide = !ctx.hide;
          return $event.stopPropagation();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.loginForm.invalid);
      }
    },
    dependencies: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatSuffix, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.MinLengthValidator, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput],
    styles: [".container[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    text-align: center;\n    background-color: var(--primary-color);\n    flex-direction: column;\n}\nform[_ngcontent-%COMP%]{\n    margin-left: auto;\n    margin-right: auto;\n    background-color: white;\n    margin-top: auto;\n    margin-bottom: auto;\n    display: flex;\n    flex-direction: column;\n    max-width: 350px;\n    width: 80%;\n    border: transparent;\n    border-radius: 5px;\n    padding: 10px;\n    border: 1px solid ;\n    justify-content: center;\n    text-align: center;\n    border: none;\n}\nform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    font-family: 'Roboto', 'sans-serif';\n    border: transparent;\n    border-radius: 5px;\n    font-weight: 400;\n    font-size: large;\n}\ninput[_ngcontent-%COMP%]::placeholder{\n    color: cornflowerblue;\n    text-align: center;\n}\nbutton[_ngcontent-%COMP%]{\n    border-radius: 1px;\n}\nbutton[type=\"submit\"][_ngcontent-%COMP%]{\n    background-color: var(--primary-color);\n}\nbutton[type=\"submit\"][_ngcontent-%COMP%]:hover{\n    transition: ease-in 0.1s;\n    background-color: cornflowerblue;\n    color: var(--white);\n}\n.alert[_ngcontent-%COMP%]{\n    position: fixed;\n    bottom: 20px;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.example-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]    + mat-form-field[_ngcontent-%COMP%] {\n    margin-left: 8px;\n  }\n  \n  .example-right-align[_ngcontent-%COMP%] {\n    text-align: right;\n  }\n  \n  input.example-right-align[_ngcontent-%COMP%]::-webkit-outer-spin-button, input.example-right-align[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n    display: none;\n  }\n  \n  input.example-right-align[_ngcontent-%COMP%] {\n    -moz-appearance: textfield;\n  }\nimg[_ngcontent-%COMP%]{\n    width: 250px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixzQ0FBc0M7SUFDdEMsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxtQ0FBbUM7SUFDbkMsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHNDQUFzQztBQUMxQztBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLGdDQUFnQztJQUNoQyxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTs7SUFFRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7QUFDRjtJQUNJLFlBQVk7QUFDaEIiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuZm9ybXtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWF4LXdpZHRoOiAzNTBweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBib3JkZXI6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcbmZvcm0gPiAqIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgJ3NhbnMtc2VyaWYnO1xyXG4gICAgYm9yZGVyOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG59XHJcbmlucHV0OjpwbGFjZWhvbGRlcntcclxuICAgIGNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5idXR0b257XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcHg7XHJcbn1cclxuYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl17XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxufVxyXG5idXR0b25bdHlwZT1cInN1Ym1pdFwiXTpob3ZlcntcclxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4gMC4xcztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xyXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxufVxyXG4uYWxlcnR7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLmV4YW1wbGUtY29udGFpbmVyIG1hdC1mb3JtLWZpZWxkICsgbWF0LWZvcm0tZmllbGQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtcmlnaHQtYWxpZ24ge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ246Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXHJcbiAgaW5wdXQuZXhhbXBsZS1yaWdodC1hbGlnbjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBcclxuICBpbnB1dC5leGFtcGxlLXJpZ2h0LWFsaWduIHtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xyXG4gIH1cclxuaW1ne1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1194:
/*!**********************************************************************************!*\
  !*** ./src/app/components/materials-page/add-material/add-material.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddMaterialComponent: () => (/* binding */ AddMaterialComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 3252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_snackbars_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/snackbars.service */ 9176);
/* harmony import */ var src_app_services_materials_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/materials.service */ 1244);
/* harmony import */ var src_app_services_installations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/installations.service */ 5333);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 26);












class AddMaterialComponent {
  constructor(snackbarSrv, fb, materialsSrv, dialogRef, installatiosSrv, data) {
    this.snackbarSrv = snackbarSrv;
    this.fb = fb;
    this.materialsSrv = materialsSrv;
    this.dialogRef = dialogRef;
    this.installatiosSrv = installatiosSrv;
    this.data = data;
    this.addForm = this.fb.group({
      description: ['', {
        validators: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
        max: 30
      }]
    });
    this.installations$ = this.installatiosSrv.installations$;
    this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
  }
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
  onNoClick() {
    this.dialogRef.close();
  }
  add() {
    if (this.addForm.valid) {
      const subject = {
        description: this.addForm.value.description
      };
      this.materialsSrv.add(subject).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(err))).subscribe(value => {
        this.snackbarSrv.openSnackBar("Materiale aggiunto!", "green");
        this.dialogRef.close();
      }, error => {
        let message = "";
        if (error.status === 400) message = error.error.message;else message = "Errore generico, per favore riprova più tardi";
        this.snackbarSrv.openSnackBar(message, "red");
      });
    }
  }
  static #_ = this.ɵfac = function AddMaterialComponent_Factory(t) {
    return new (t || AddMaterialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_snackbars_service__WEBPACK_IMPORTED_MODULE_0__.SnackbarsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_materials_service__WEBPACK_IMPORTED_MODULE_1__.MaterialsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_installations_service__WEBPACK_IMPORTED_MODULE_2__.InstallationsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: AddMaterialComponent,
    selectors: [["app-add-material"]],
    decls: 14,
    vars: 3,
    consts: [[1, "container-dialog"], ["mat-dialog-title", ""], ["mat-dialog-content", ""], [3, "formGroup"], ["matInput", "", "type", "text", "formControlName", "description", 3, "maxlength"], ["mat-dialog-actions", ""], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"]],
    template: function AddMaterialComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Nuovo materiale");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 2)(4, "form", 3)(5, "mat-form-field")(6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Descrizione");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 5)(10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddMaterialComponent_Template_button_click_10_listener() {
          return ctx.onNoClick();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Esci");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddMaterialComponent_Template_button_click_12_listener() {
          return ctx.add();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.addForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("maxlength", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.addForm.valid);
      }
    },
    dependencies: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxLengthValidator, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogActions],
    styles: ["form[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tYXRlcmlhbHMtcGFnZS9hZGQtbWF0ZXJpYWwvYWRkLW1hdGVyaWFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 888:
/*!************************************************************************************!*\
  !*** ./src/app/components/materials-page/edit-material/edit-material.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditMaterialComponent: () => (/* binding */ EditMaterialComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 3252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_snackbars_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/snackbars.service */ 9176);
/* harmony import */ var src_app_services_materials_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/materials.service */ 1244);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 26);











class EditMaterialComponent {
  constructor(snackbarSrv, fb, materialsSrv, dialogRef, data) {
    this.snackbarSrv = snackbarSrv;
    this.fb = fb;
    this.materialsSrv = materialsSrv;
    this.dialogRef = dialogRef;
    this.data = data;
    this.editForm = this.fb.group({
      description: [data.description, {
        validators: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required,
        max: 30
      }]
    });
  }
  onNoClick() {
    this.dialogRef.close();
  }
  edit() {
    if (this.editForm.valid) {
      const material = {
        description: this.editForm.value.description === this.data.description ? null : this.editForm.value.description
      };
      this.materialsSrv.edit(this.data.id, material).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(err))).subscribe(value => {
        this.snackbarSrv.openSnackBar("Materiale modificato!", "green");
        this.dialogRef.close();
      }, error => {
        let message = "";
        if (error.status === 400) message = error.error.message;else message = "Errore generico, per favore riprova più tardi";
        this.snackbarSrv.openSnackBar(message, "red");
      });
    }
  }
  static #_ = this.ɵfac = function EditMaterialComponent_Factory(t) {
    return new (t || EditMaterialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_snackbars_service__WEBPACK_IMPORTED_MODULE_0__.SnackbarsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_materials_service__WEBPACK_IMPORTED_MODULE_1__.MaterialsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: EditMaterialComponent,
    selectors: [["app-edit-material"]],
    decls: 14,
    vars: 3,
    consts: [[1, "container-dialog"], ["mat-dialog-title", ""], ["mat-dialog-content", ""], [3, "formGroup"], ["matInput", "", "type", "text", "formControlName", "description", 3, "maxlength"], ["mat-dialog-actions", ""], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"]],
    template: function EditMaterialComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Modifica materiale");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2)(4, "form", 3)(5, "mat-form-field")(6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Descrizione");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 5)(10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EditMaterialComponent_Template_button_click_10_listener() {
          return ctx.onNoClick();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Esci");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EditMaterialComponent_Template_button_click_12_listener() {
          return ctx.edit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Salva");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.editForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("maxlength", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.editForm.valid);
      }
    },
    dependencies: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MaxLengthValidator, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogActions],
    styles: ["form[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tYXRlcmlhbHMtcGFnZS9lZGl0LW1hdGVyaWFsL2VkaXQtbWF0ZXJpYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7RUFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJmb3Jte1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 9590:
/*!****************************************************************************************!*\
  !*** ./src/app/components/materials-page/material-filter/material-filter.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MaterialFilterComponent: () => (/* binding */ MaterialFilterComponent)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 7178);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 274);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 4520);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 655);
/* harmony import */ var _add_material_add_material_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../add-material/add-material.component */ 1194);
/* harmony import */ var src_utils_has_value__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/utils/has-value */ 6097);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var src_app_services_materials_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/materials.service */ 1244);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ 8128);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 26);













class MaterialFilterComponent {
  constructor(fb, dialog, materialsSrv, router) {
    this.fb = fb;
    this.dialog = dialog;
    this.materialsSrv = materialsSrv;
    this.router = router;
    this.filtersForm = this.fb.group({
      description: this.fb.control('')
    });
    this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
  }
  ngOnInit() {
    this.materialsSrv.filters$.subscribe(value => {
      this.filtersForm.patchValue(value || {
        description: ''
      }, {
        emitEvent: false
      });
      this.filtersForm.markAsPristine();
    });
    this.filtersForm.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroyed$), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.filter)(_ => this.filtersForm.valid), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(value => (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omitBy)(value, val => val === '')), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(200)).subscribe(value => {
      const v = value;
      this.router.navigate([], {
        queryParams: v
      });
    });
  }
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
  deleteFilters() {
    this.filtersForm.patchValue({
      description: ''
    });
  }
  openDialog() {
    this.dialog.open(_add_material_add_material_component__WEBPACK_IMPORTED_MODULE_1__.AddMaterialComponent, {
      data: {
        username: null
      }
    });
  }
  hasValue() {
    if ((0,src_utils_has_value__WEBPACK_IMPORTED_MODULE_2__.hasValueInOptionalFields)(this.filtersForm)) {
      return false;
    } else {
      return true;
    }
  }
  static #_ = this.ɵfac = function MaterialFilterComponent_Factory(t) {
    return new (t || MaterialFilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_materials_service__WEBPACK_IMPORTED_MODULE_3__.MaterialsService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: MaterialFilterComponent,
    selectors: [["app-material-filter"]],
    decls: 22,
    vars: 3,
    consts: [[3, "formGroup"], [1, "filter-materials"], ["matInput", "", "placeholder", "Descrizione", "formControlName", "description"], ["input", ""], [1, "filter-materials-mobile"], ["mat-raised-button", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["fxLayout", "column", 1, "matMenu", 2, "width", "100%", "margin", "0", "padding", "0", 3, "click"], ["mat-raised-button", "", 3, "disabled", "click"], [1, "pi", "pi-filter-slash"], ["mat-raised-button", "", "color", "primary", 3, "click"]],
    template: function MaterialFilterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "mat-form-field")(3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "Descrizione");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 4)(8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "Filtri");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "mat-menu", null, 6)(12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MaterialFilterComponent_Template_div_click_12_listener($event) {
          return $event.stopPropagation();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "mat-form-field")(14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "Descrizione");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](16, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MaterialFilterComponent_Template_button_click_18_listener() {
          return ctx.deleteFilters();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](19, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MaterialFilterComponent_Template_button_click_20_listener() {
          return ctx.openDialog();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, "Aggiungi");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.filtersForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matMenuTriggerFor", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx.hasValue());
      }
    },
    dependencies: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuTrigger, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput],
    styles: ["form[_ngcontent-%COMP%]{\n    display: flex; \n    flex-direction: row; \n    margin-top: auto;\n}\nmat-form-field[_ngcontent-%COMP%]{\n    margin: 0px 5px 0px 5px;\n}\nbutton[_ngcontent-%COMP%]{\n    margin-left: 10px; \n    margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tYXRlcmlhbHMtcGFnZS9tYXRlcmlhbC1maWx0ZXIvbWF0ZXJpYWwtZmlsdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImZvcm17XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7IFxyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxufVxyXG5tYXQtZm9ybS1maWVsZHtcclxuICAgIG1hcmdpbjogMHB4IDVweCAwcHggNXB4O1xyXG59XHJcbmJ1dHRvbntcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4OyBcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 8698:
/*!**************************************************************************************!*\
  !*** ./src/app/components/materials-page/material-table/material-table.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MaterialTableComponent: () => (/* binding */ MaterialTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ 9687);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sort */ 7963);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 7178);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 274);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 3252);
/* harmony import */ var _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../confirm/confirm.component */ 6497);
/* harmony import */ var _edit_material_edit_material_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../edit-material/edit-material.component */ 888);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_materials_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/materials.service */ 1244);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _directives_if_admin_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../directives/if-admin.directive */ 7432);
/* harmony import */ var _pipes_string_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../pipes/string.pipe */ 2330);


















function MaterialTableComponent_th_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Descrizione ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function MaterialTableComponent_td_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", row_r7.description, " ");
  }
}
function MaterialTableComponent_th_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "th", 13);
  }
}
function MaterialTableComponent_td_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 15)(1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MaterialTableComponent_td_7_div_1_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12);
      const row_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r10.edit(row_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MaterialTableComponent_td_7_div_1_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12);
      const row_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r13.delete(row_r8.id, row_r8.description));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
}
function MaterialTableComponent_td_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, MaterialTableComponent_td_7_div_1_Template, 7, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function MaterialTableComponent_tr_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 18);
  }
}
function MaterialTableComponent_tr_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 19);
  }
}
function MaterialTableComponent_tr_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 20)(1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "string");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Nessun dato trovato per i filtri ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 1, ctx_r6.filter == null ? null : ctx_r6.filter.description), " ");
  }
}
const _c0 = function () {
  return [10, 25, 50, 100];
};
class MaterialTableComponent {
  constructor(materialsSrv, dialog) {
    this.materialsSrv = materialsSrv;
    this.dialog = dialog;
    this.displayedColumns = ['description', 'actions'];
    this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    this.paginator = null;
    this.sort = null;
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource();
    this.dataSource.sortingDataAccessor = lodash__WEBPACK_IMPORTED_MODULE_0__.get;
    this.dataSource.sort = this.sort;
  }
  ngOnInit() {
    this.materialsSrv.materials$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroyed$)).subscribe(subjects => {
      this.dataSource.data = subjects;
      this.dataSource._updateChangeSubscription();
    });
    this.materialsSrv.filters$.subscribe(value => {
      this.filter = value;
    });
    this.materialsSrv.actions$.subscribe(value => {
      if (this.paginator) {
        if (value === "filter") this.paginator.firstPage();
        if (value === "add") this.paginator.lastPage();
      }
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
  delete(id, description) {
    const dialogRef = this.dialog.open(_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmComponent, {
      data: {
        action: `eliminare il materiale "${description}"`
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.materialsSrv.delete(id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.throwError)(err))).subscribe();
      }
    });
  }
  edit(material) {
    const dialogRef = this.dialog.open(_edit_material_edit_material_component__WEBPACK_IMPORTED_MODULE_2__.EditMaterialComponent, {
      data: material
    });
  }
  static #_ = this.ɵfac = function MaterialTableComponent_Factory(t) {
    return new (t || MaterialTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_materials_service__WEBPACK_IMPORTED_MODULE_3__.MaterialsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: MaterialTableComponent,
    selectors: [["app-material-table"]],
    viewQuery: function MaterialTableComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSort, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
      }
    },
    decls: 15,
    vars: 6,
    consts: [["mat-table", "", "matSort", "", 1, "mat-elevation-z8", "table-materials", 3, "dataSource"], ["matColumnDef", "description"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "actions", "stickyEnd", ""], ["mat-header-cell", "", 4, "matHeaderCellDef"], [1, "div"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["showFirstLastButtons", "", "aria-label", "Select page of users", 3, "length", "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], ["class", "actions", 4, "appIfAdmin"], [1, "actions"], ["mat-mini-fab", "", "color", "primary", "aria-label", "Example icon button with a menu icon", 3, "click"], ["mat-mini-fab", "", "color", "warn", "aria-label", "Example icon button with a menu icon", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]],
    template: function MaterialTableComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-card-content")(1, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, MaterialTableComponent_th_3_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, MaterialTableComponent_td_4_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](5, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, MaterialTableComponent_th_6_Template, 1, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, MaterialTableComponent_td_7_Template, 2, 0, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, MaterialTableComponent_tr_9_Template, 1, 0, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, MaterialTableComponent_tr_10_Template, 1, 0, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, MaterialTableComponent_tr_11_Template, 4, 3, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "mat-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "mat-paginator", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("length", ctx.dataSource.data.length)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c0));
      }
    },
    dependencies: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSortHeader, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatMiniFabButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIcon, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardFooter, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatNoDataRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginator, _directives_if_admin_directive__WEBPACK_IMPORTED_MODULE_4__.IfAdminDirective, _pipes_string_pipe__WEBPACK_IMPORTED_MODULE_5__.StringPipe],
    styles: ["table[_ngcontent-%COMP%] {\n    width: 100%;\n    overflow: auto\n}\n.actions[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n}\nbutton[_ngcontent-%COMP%]{\n    margin: 3px;\n}\nmat-card-footer[_ngcontent-%COMP%]{\n    display: flex; \n    flex-wrap: wrap;\n    padding-bottom: 5px;\n    justify-content: flex-end;\n}\nmat-paginator[_ngcontent-%COMP%]{\n    background-color: var(--primary-color);\n    color: var(--white);\n    border-radius: 50px;\n}\n.div[_ngcontent-%COMP%]{\n    position: fixed; \n    margin: auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tYXRlcmlhbHMtcGFnZS9tYXRlcmlhbC10YWJsZS9tYXRlcmlhbC10YWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYO0FBQ0o7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxzQ0FBc0M7SUFDdEMsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEIiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvXHJcbn1cclxuLmFjdGlvbnN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5idXR0b257XHJcbiAgICBtYXJnaW46IDNweDtcclxufVxyXG5tYXQtY2FyZC1mb290ZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcbm1hdC1wYWdpbmF0b3J7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG59XHJcbi5kaXZ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7IFxyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7999:
/*!****************************************************************************!*\
  !*** ./src/app/components/materials-page/materials/materials.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MaterialsComponent: () => (/* binding */ MaterialsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _material_table_material_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../material-table/material-table.component */ 8698);
/* harmony import */ var _material_filter_material_filter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../material-filter/material-filter.component */ 9590);




class MaterialsComponent {
  static #_ = this.ɵfac = function MaterialsComponent_Factory(t) {
    return new (t || MaterialsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: MaterialsComponent,
    selectors: [["app-materials"]],
    decls: 5,
    vars: 0,
    consts: [[1, "container-page"]],
    template: function MaterialsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "mat-card")(2, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-material-filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-material-table");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardHeader, _material_table_material_table_component__WEBPACK_IMPORTED_MODULE_0__.MaterialTableComponent, _material_filter_material_filter_component__WEBPACK_IMPORTED_MODULE_1__.MaterialFilterComponent],
    styles: ["mat-card[_ngcontent-%COMP%]{\n    margin: 2%;\n    background-color: var(--primary-color);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tYXRlcmlhbHMtcGFnZS9tYXRlcmlhbHMvbWF0ZXJpYWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1Ysc0NBQXNDO0FBQzFDIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmR7XHJcbiAgICBtYXJnaW46IDIlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 9823:
/*!*****************************************************************************************!*\
  !*** ./src/app/components/my-account-page/change-password/change-password.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChangePasswordComponent: () => (/* binding */ ChangePasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 3252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_snackbars_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/snackbars.service */ 9176);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ 2333);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/stepper */ 6272);












function ChangePasswordComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "Inserisci la tua password");
  }
}
class ChangePasswordComponent {
  constructor(snackBar, authSrv, fb) {
    this.snackBar = snackBar;
    this.authSrv = authSrv;
    this.fb = fb;
    this.passwordForm = this.fb.group({
      password: ['', {
        validators: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
        min: 8,
        max: 20
      }]
    });
    this.newPasswordForm = this.fb.group({
      newPassword: ['', {
        validators: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
        min: 8,
        max: 20
      }]
    });
    this.repeatPasswordForm = this.fb.group({
      repeatPassword: ['', {
        validators: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
        min: 8,
        max: 20
      }]
    });
    this.hide = true;
    this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
  }
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
  hideInput() {
    this.hide = true;
  }
  checkSame() {
    this.hide = true;
    if (this.newPasswordForm.value.newPassword === this.repeatPasswordForm.value.repeatPassword) {
      return true;
    }
    return false;
  }
  changePassword() {
    this.passwordForm;
    if (this.passwordForm.valid && this.newPasswordForm.valid && this.repeatPasswordForm.valid) {
      const password = this.passwordForm.value.password;
      const newPassword = this.newPasswordForm.value.newPassword;
      const repeatPassword = this.repeatPasswordForm.value.repeatPassword;
      this.authSrv.changePassword(password, newPassword, repeatPassword).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => {
        if (err.status === 429) this.snackBar.openSnackBar(err.error, 'red');else this.snackBar.openSnackBar(err.error.message, 'red');
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => err);
      })).subscribe(() => {
        this.snackBar.openSnackBar("Password cambiata", 'green');
        this.passwordForm.value.password = '';
        this.newPasswordForm.value.newPassword = '';
        this.repeatPasswordForm.value.repeatPassword = '';
      });
    }
  }
  static #_ = this.ɵfac = function ChangePasswordComponent_Factory(t) {
    return new (t || ChangePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_snackbars_service__WEBPACK_IMPORTED_MODULE_0__.SnackbarsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ChangePasswordComponent,
    selectors: [["app-change-password"]],
    decls: 58,
    vars: 24,
    consts: [[3, "linear"], ["stepper", ""], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], ["appearance", "outline"], ["matInput", "", "formControlName", "password", "minlength", "8", 3, "type", "maxlength"], ["align", "start"], ["align", "end"], ["type", "button", "mat-icon-button", "", "matSuffix", "", 3, "click"], ["mat-raised-button", "", "color", "primary", "matStepperNext", "", 3, "click"], ["label", "Inserisci nuova password", 3, "stepControl"], ["matInput", "", "formControlName", "newPassword", "minlength", "8", 3, "type", "maxlength"], ["mat-raised-button", "", "color", "primary", "matStepperPrevious", ""], ["label", "Ripeti nuova password", 3, "stepControl"], ["matInput", "", "formControlName", "repeatPassword", "minlength", "8", 3, "type", "maxlength"], ["mat-raised-button", "", "color", "warn", "matStepperPrevious", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"]],
    template: function ChangePasswordComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-header")(2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Cambia Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-card-content")(5, "mat-stepper", 0, 1)(7, "mat-step", 2)(8, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ChangePasswordComponent_ng_template_9_Template, 1, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-form-field", 5)(11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Inserisci password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-hint", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Min 8 caratteri");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-hint", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChangePasswordComponent_Template_button_click_18_listener($event) {
          ctx.hide = !ctx.hide;
          return $event.stopPropagation();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div")(22, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChangePasswordComponent_Template_button_click_22_listener() {
          return ctx.hideInput();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Avanti");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "mat-step", 11)(25, "form", 3)(26, "mat-form-field", 5)(27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Inserisci nuova password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChangePasswordComponent_Template_button_click_30_listener($event) {
          ctx.hide = !ctx.hide;
          return $event.stopPropagation();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div")(34, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Indietro");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChangePasswordComponent_Template_button_click_36_listener() {
          return ctx.hideInput();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Avanti");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "mat-step", 14)(39, "form", 3)(40, "mat-form-field", 5)(41, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Ripeti nuova password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "mat-hint", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Min 8 caratteri");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "mat-hint", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChangePasswordComponent_Template_button_click_48_listener($event) {
          ctx.hide = !ctx.hide;
          return $event.stopPropagation();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div")(52, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Indietro");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChangePasswordComponent_Template_button_click_54_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r0.reset());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Annulla");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChangePasswordComponent_Template_button_click_56_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
          ctx.changePassword();
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r0.reset());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Cambia");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("linear", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("stepControl", ctx.passwordForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.passwordForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.hide ? "password" : "text")("maxlength", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](((ctx.passwordForm.value.password == null ? null : ctx.passwordForm.value.password.length) || 0) < 8 ? 8 - ((ctx.passwordForm.value.password == null ? null : ctx.passwordForm.value.password.length) || 0) + " mancanti" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("stepControl", ctx.newPasswordForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.newPasswordForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.hide ? "password" : "text")("maxlength", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("stepControl", ctx.repeatPasswordForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.repeatPasswordForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.hide ? "password" : "text")("maxlength", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](((ctx.repeatPasswordForm.value.repeatPassword == null ? null : ctx.repeatPasswordForm.value.repeatPassword.length) || 0) < 8 ? 8 - ((ctx.repeatPasswordForm.value.repeatPassword == null ? null : ctx.repeatPasswordForm.value.repeatPassword.length) || 0) + " mancanti" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
      }
    },
    dependencies: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatSuffix, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxLengthValidator, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardHeader, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__.MatStep, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__.MatStepLabel, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__.MatStepper, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__.MatStepperNext, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__.MatStepperPrevious],
    styles: ["mat-card[_ngcontent-%COMP%]{\n    margin: 2%;\n}\nbutton[_ngcontent-%COMP%]{\n    margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9teS1hY2NvdW50LXBhZ2UvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZHtcclxuICAgIG1hcmdpbjogMiU7XHJcbn1cclxuYnV0dG9ue1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 5763:
/*!*******************************************************************************!*\
  !*** ./src/app/components/my-account-page/my-account/my-account.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyAccountComponent: () => (/* binding */ MyAccountComponent)
/* harmony export */ });
/* harmony import */ var src_utils_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/utils/global */ 5814);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ 2333);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../change-password/change-password.component */ 9823);






function MyAccountComponent_mat_card_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-header")(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Il mio profilo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-card-content")(5, "h3")(6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "username:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "h3")(10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "h3")(13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "matricola:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "h3")(17, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "livello accesso:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "h3")(21, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "tipo:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.user.username, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.user.able ? "Abilitato" : "Disabilitato");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.user.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.user.accessLevel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.tipo, " ");
  }
}
function MyAccountComponent_mat_card_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-header")(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Installazione assegnata");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-card-content")(5, "h3")(6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "codice:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "h3")(10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "descrizione:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "h3")(14, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "imei:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.user.installationId.installationCode, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.user.installationId.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.user.installationId.imei, " ");
  }
}
class MyAccountComponent {
  constructor(authSrv) {
    this.authSrv = authSrv;
    this.tipo = "utente";
  }
  ngOnInit() {
    this.authSrv.fetchUser().subscribe(value => {
      this.user = value;
      if (this.user.accessLevel == src_utils_global__WEBPACK_IMPORTED_MODULE_0__.admin) this.tipo = "amministratore";else if (this.user.accessLevel > src_utils_global__WEBPACK_IMPORTED_MODULE_0__.admin) this.tipo = "super-amministratore";
    });
  }
  static #_ = this.ɵfac = function MyAccountComponent_Factory(t) {
    return new (t || MyAccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: MyAccountComponent,
    selectors: [["app-my-account"]],
    decls: 5,
    vars: 2,
    consts: [[1, "container-page"], [1, "container-card"], [4, "ngIf"]],
    template: function MyAccountComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, MyAccountComponent_mat_card_2_Template, 24, 5, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, MyAccountComponent_mat_card_3_Template, 17, 3, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-change-password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.user && ctx.user.installationId);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardHeader, _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_2__.ChangePasswordComponent],
    styles: ["mat-card[_ngcontent-%COMP%]{\n    margin: 2%;\n}\n.container[_ngcontent-%COMP%]{\n    width: auto;\n    height: auto;\n    justify-content: center;\n    display: flex;\n    flex-direction: column;\n    background-color: var(--white);\n}\n.cont[_ngcontent-%COMP%]{\n    display: flex;\n}\nform[_ngcontent-%COMP%]{\n    margin-left: auto;\n    margin-right: auto;\n    background-color: white;\n    margin-top: auto;\n    margin-bottom: auto;\n    display: flex;\n    flex-direction: column;\n    max-width: 350px;\n    width: 80%;\n    border: transparent;\n    border-radius: 5px;\n    padding: 10px;\n    border: 1px solid ;\n    justify-content: center;\n    text-align: center;\n    border: none;\n}\nform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    font-family: 'Roboto', 'sans-serif';\n    border: transparent;\n    border-radius: 5px;\n    font-weight: 400;\n    font-size: large;\n}\ninput[_ngcontent-%COMP%]::placeholder{\n    color: cornflowerblue;\n    text-align: center;\n}\nbutton[_ngcontent-%COMP%]{\n    margin-right: 5px;\n}\n.container-card[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}\n.container-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]{\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9teS1hY2NvdW50LXBhZ2UvbXktYWNjb3VudC9teS1hY2NvdW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxtQ0FBbUM7SUFDbkMsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxXQUFXO0FBQ2YiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZHtcclxuICAgIG1hcmdpbjogMiU7XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxufVxyXG4uY29udHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuZm9ybXtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWF4LXdpZHRoOiAzNTBweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBib3JkZXI6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcbmZvcm0gPiAqIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgJ3NhbnMtc2VyaWYnO1xyXG4gICAgYm9yZGVyOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG59XHJcbmlucHV0OjpwbGFjZWhvbGRlcntcclxuICAgIGNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5idXR0b257XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG4uY29udGFpbmVyLWNhcmR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4uY29udGFpbmVyLWNhcmQgbWF0LWNhcmR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 6218:
/*!*************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotFoundComponent: () => (/* binding */ NotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class NotFoundComponent {
  static #_ = this.ɵfac = function NotFoundComponent_Factory(t) {
    return new (t || NotFoundComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NotFoundComponent,
    selectors: [["app-not-found"]],
    decls: 5,
    vars: 0,
    consts: [[1, "container-page"]],
    template: function NotFoundComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Pagina non trovata");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2952:
/*!*********************************************************!*\
  !*** ./src/app/components/sidenav/sidenav.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SidenavComponent: () => (/* binding */ SidenavComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/navigation.service */ 7762);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ 2333);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ 1465);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ 8128);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ 2484);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ 9400);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ 702);
/* harmony import */ var _directives_if_authenticated_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives/if-authenticated.directive */ 9242);
/* harmony import */ var _directives_if_admin_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../directives/if-admin.directive */ 7432);














function SidenavComponent_mat_toolbar_0_button_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Installazioni ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function SidenavComponent_mat_toolbar_0_button_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Utenti ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function SidenavComponent_mat_toolbar_0_button_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Installazioni");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function SidenavComponent_mat_toolbar_0_button_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Utenti");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function SidenavComponent_mat_toolbar_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-toolbar", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Eventi ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Carte ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Soggetti ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " Materiali ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, SidenavComponent_mat_toolbar_0_button_13_Template, 2, 0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, SidenavComponent_mat_toolbar_0_button_15_Template, 2, 0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "button", 14)(18, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "account_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "mat-menu", 15, 16)(22, "button", 17)(23, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Il mio profilo");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SidenavComponent_mat_toolbar_0_Template_button_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
      _r1.close();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.authSrv.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "exit_to_app");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 19)(33, "button", 20)(34, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "mat-menu", null, 21)(38, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Eventi");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Carte");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "Soggetti");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "Materiali");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](46, SidenavComponent_mat_toolbar_0_button_46_Template, 2, 0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](47, SidenavComponent_mat_toolbar_0_button_47_Template, 2, 0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, "Il mio profilo");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SidenavComponent_mat_toolbar_0_Template_button_click_50_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
      _r1.close();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r10.authSrv.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "exit_to_app");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "Logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](21);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("overlapTrigger", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r5);
  }
}
class SidenavComponent {
  constructor(navigation, authSrv) {
    this.navigation = navigation;
    this.authSrv = authSrv;
  }
  resizeComponent() {
    return this.navigation.isPageWithoutSideBar();
  }
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
  }
  static #_ = this.ɵfac = function SidenavComponent_Factory(t) {
    return new (t || SidenavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_0__.NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: SidenavComponent,
    selectors: [["app-sidenav"]],
    hostBindings: function SidenavComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("resize", function SidenavComponent_resize_HostBindingHandler($event) {
          return ctx.onWindowResize($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"]);
      }
    },
    decls: 6,
    vars: 4,
    consts: [["class", "navbar", 4, "ifAuthenticated"], [1, "app-container", 3, "ngClass"], [1, "app-sidenav", 3, "mode"], ["sidenav", ""], [1, "navbar"], ["src", "assets/logo-baron-pesi.svg", "alt", "", "mat-menu-item", "", 1, "button"], ["mat-menu-item", "", "routerLink", "events", 1, "button"], ["mat-menu-item", "", "routerLink", "cards", 1, "button"], [1, "example-spacer"], ["mat-menu-item", "", "routerLink", "subjects", 1, "button"], ["mat-menu-item", "", "routerLink", "materials", 1, "button"], ["class", "button", "mat-menu-item", "", "routerLink", "installations", 4, "appIfAdmin"], ["class", "button", "mat-menu-item", "", "routerLink", "users", 4, "appIfAdmin"], [1, "toolbar-item-spacer"], ["mat-icon-button", "", "matTooltip", "My Account", 3, "matMenuTriggerFor"], ["yPosition", "below", 3, "overlapTrigger"], ["userAccountMenu", ""], ["mat-menu-item", "", "routerLink", "my-account"], ["mat-menu-item", "", 3, "click"], [1, "menu-mobile"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["menuMobile", "matMenu"], ["mat-menu-item", "", "routerLink", "events"], ["mat-menu-item", "", "routerLink", "cards"], ["mat-menu-item", "", "routerLink", "subjects"], ["mat-menu-item", "", "routerLink", "materials"], ["mat-menu-item", "", "routerLink", "installations", 4, "appIfAdmin"], ["mat-menu-item", "", "routerLink", "users", 4, "appIfAdmin"], ["mat-menu-item", "", "routerLink", "installations", 1, "button"], ["mat-menu-item", "", "routerLink", "users", 1, "button"], ["mat-menu-item", "", "routerLink", "installations"], ["mat-menu-item", "", "routerLink", "users"]],
    template: function SidenavComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, SidenavComponent_mat_toolbar_0_Template, 54, 3, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-sidenav-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "mat-sidenav", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.resizeComponent() ? "not-authenticated" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-elevation-z4", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("mode", ctx.getScreenWidth < 1160 ? "over" : "side");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatIconButton, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatSidenavContent, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuTrigger, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__.MatToolbar, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__.MatDivider, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.MatTooltip, _directives_if_authenticated_directive__WEBPACK_IMPORTED_MODULE_2__.IfAuthenticatedDirective, _directives_if_admin_directive__WEBPACK_IMPORTED_MODULE_3__.IfAdminDirective],
    styles: [".navbar[_ngcontent-%COMP%]{\n    width: 100% !important;\n    height: 6vh;\n    background-color: var(--primary-color);\n    color: var(--white);\n}\n\n.toolbar-item-spacer[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n}\n\n.app-container[_ngcontent-%COMP%] {\n    height: 94vh;\n    margin: 0;\n}  \n.not-authenticated[_ngcontent-%COMP%] {\n    height: 100vh !important;\n    margin: 0;\n}\n.app-sidenav[_ngcontent-%COMP%] {\n    width: 230px;\n}\n.app-sidenav-content[_ngcontent-%COMP%] {\n    display: flex;\n    height: auto;\n    align-items: center;\n    justify-content: center;\n} \n.mat-mdc-list-base[_ngcontent-%COMP%]{\n    padding: 0 !important;\n    margin: 0 !important;\n}\n.mdc-list-item[_ngcontent-%COMP%]{\n    padding-left: 0 !important;\n    padding-right: 0 !important;\n}\nmat-sidenav[_ngcontent-%COMP%]{\n    background-color: var(--primary-color);\n    border-right-color: var(--primary-color);\n}\nmat-sidenav-content[_ngcontent-%COMP%]{\n    background-color: var(--secondary-color);\n}\n.button[_ngcontent-%COMP%]{\n    width: -moz-fit-content;\n    width: fit-content;\n    height: 100%;\n    color: var(--white);\n}\nimg[_ngcontent-%COMP%]{\n    height: 200% !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsc0NBQXNDO0lBQ3RDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osU0FBUztBQUNiO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsU0FBUztBQUNiO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLDBCQUEwQjtJQUMxQiwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLHNDQUFzQztJQUN0Qyx3Q0FBd0M7QUFDNUM7QUFDQTtJQUNJLHdDQUF3QztBQUM1QztBQUNBO0lBQ0ksdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0IiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFye1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNnZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG59XHJcblxyXG4udG9vbGJhci1pdGVtLXNwYWNlciB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuLmFwcC1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiA5NHZoO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59ICBcclxuLm5vdC1hdXRoZW50aWNhdGVkIHtcclxuICAgIGhlaWdodDogMTAwdmggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4uYXBwLXNpZGVuYXYge1xyXG4gICAgd2lkdGg6IDIzMHB4O1xyXG59XHJcbi5hcHAtc2lkZW5hdi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn0gXHJcbi5tYXQtbWRjLWxpc3QtYmFzZXtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG59XHJcbi5tZGMtbGlzdC1pdGVte1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxubWF0LXNpZGVuYXZ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgIGJvcmRlci1yaWdodC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbn1cclxubWF0LXNpZGVuYXYtY29udGVudHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbn1cclxuLmJ1dHRvbntcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbn1cclxuaW1ne1xyXG4gICAgaGVpZ2h0OiAyMDAlICFpbXBvcnRhbnQ7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 8806:
/*!*******************************************************************************!*\
  !*** ./src/app/components/subjects-page/add-subject/add-subject.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddSubjectComponent: () => (/* binding */ AddSubjectComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 7178);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 3252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_snackbars_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/snackbars.service */ 9176);
/* harmony import */ var src_app_services_subjects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/subjects.service */ 1239);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 26);












class AddSubjectComponent {
  constructor(snackbarSrv, fb, subjectsSrv, dialogRef, data) {
    this.snackbarSrv = snackbarSrv;
    this.fb = fb;
    this.subjectsSrv = subjectsSrv;
    this.dialogRef = dialogRef;
    this.data = data;
    this.addForm = this.fb.group({
      socialReason: ['', {
        validators: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
        max: 50
      }],
      telephoneNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(20)],
      CFPIVA: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(30)]
    });
    this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
  }
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
  onNoClick() {
    this.dialogRef.close();
  }
  add() {
    if (this.addForm.valid) {
      const subject = {
        socialReason: this.addForm.value.socialReason,
        telephoneNumber: this.addForm.value.telephoneNumber ? (0,lodash__WEBPACK_IMPORTED_MODULE_0__.toNumber)(this.addForm.value.telephoneNumber) : null,
        CFPIVA: this.addForm.value.CFPIVA ? this.addForm.value.CFPIVA : null
      };
      this.subjectsSrv.add(subject).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(err))).subscribe(value => {
        this.snackbarSrv.openSnackBar("Soggetto aggiunto!", "green");
        this.dialogRef.close();
      }, error => {
        let message = "";
        if (error.status === 400) message = error.error.message;else message = "Errore generico, per favore riprova più tardi";
        this.snackbarSrv.openSnackBar(message, "red");
      });
    }
  }
  static #_ = this.ɵfac = function AddSubjectComponent_Factory(t) {
    return new (t || AddSubjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_snackbars_service__WEBPACK_IMPORTED_MODULE_1__.SnackbarsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_subjects_service__WEBPACK_IMPORTED_MODULE_2__.SubjectsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: AddSubjectComponent,
    selectors: [["app-add-subject"]],
    decls: 22,
    vars: 4,
    consts: [[1, "container-dialog"], ["mat-dialog-title", ""], ["mat-dialog-content", ""], [3, "formGroup"], ["matInput", "", "type", "text", "formControlName", "socialReason", 3, "maxlength"], ["matInput", "", "type", "number", "formControlName", "telephoneNumber"], ["matInput", "", "type", "text", "formControlName", "CFPIVA", 3, "maxlength"], ["mat-dialog-actions", ""], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"]],
    template: function AddSubjectComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Nuovo soggetto");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 2)(4, "form", 3)(5, "mat-form-field")(6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Ragione Sociale");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "mat-form-field")(10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Numero Di Telefono");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "mat-form-field")(14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "CFPIVA");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 7)(18, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddSubjectComponent_Template_button_click_18_listener() {
          return ctx.onNoClick();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Esci");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddSubjectComponent_Template_button_click_20_listener() {
          return ctx.add();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.addForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("maxlength", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("maxlength", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.addForm.valid);
      }
    },
    dependencies: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxLengthValidator, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogActions],
    styles: ["form[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zdWJqZWN0cy1wYWdlL2FkZC1zdWJqZWN0L2FkZC1zdWJqZWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 3240:
/*!*********************************************************************************!*\
  !*** ./src/app/components/subjects-page/edit-subject/edit-subject.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditSubjectComponent: () => (/* binding */ EditSubjectComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 7178);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 3252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_snackbars_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/snackbars.service */ 9176);
/* harmony import */ var src_app_services_subjects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/subjects.service */ 1239);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 26);












class EditSubjectComponent {
  constructor(snackbarSrv, fb, subjectsSrv, dialogRef, data) {
    this.snackbarSrv = snackbarSrv;
    this.fb = fb;
    this.subjectsSrv = subjectsSrv;
    this.dialogRef = dialogRef;
    this.data = data;
    this.editForm = this.fb.group({
      socialReason: [data.socialReason, {
        validators: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
        min: 8,
        max: 50
      }],
      telephoneNumber: [data.telephoneNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(11)],
      CFPIVA: [data.CFPIVA, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(30)]
    });
  }
  onNoClick() {
    this.dialogRef.close();
  }
  edit() {
    if (this.editForm.valid) {
      const subject = {
        socialReason: this.editForm.value.socialReason === this.data.socialReason ? null : this.editForm.value.socialReason,
        telephoneNumber: this.editForm.value.telephoneNumber ? (0,lodash__WEBPACK_IMPORTED_MODULE_0__.toNumber)(this.editForm.value.telephoneNumber) : null,
        CFPIVA: this.editForm.value.CFPIVA ? this.editForm.value.CFPIVA : null
      };
      this.subjectsSrv.edit(this.data.id, subject).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(err))).subscribe(value => {
        this.snackbarSrv.openSnackBar("Soggetto modificato!", "green");
        this.dialogRef.close();
      }, error => {
        let message = "";
        if (error.status === 400) message = error.error.message;else message = "Errore generico, per favore riprova più tardi";
        this.snackbarSrv.openSnackBar(message, "red");
      });
    }
  }
  static #_ = this.ɵfac = function EditSubjectComponent_Factory(t) {
    return new (t || EditSubjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_snackbars_service__WEBPACK_IMPORTED_MODULE_1__.SnackbarsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_subjects_service__WEBPACK_IMPORTED_MODULE_2__.SubjectsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: EditSubjectComponent,
    selectors: [["app-edit-subject"]],
    decls: 22,
    vars: 4,
    consts: [[1, "container-dialog"], ["mat-dialog-title", ""], ["mat-dialog-content", ""], [3, "formGroup"], ["matInput", "", "type", "text", "formControlName", "socialReason", 3, "maxlength"], ["matInput", "", "type", "number", "formControlName", "telephoneNumber"], ["matInput", "", "type", "text", "formControlName", "CFPIVA", 3, "maxlength"], ["mat-dialog-actions", ""], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"]],
    template: function EditSubjectComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Modifica soggetto");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 2)(4, "form", 3)(5, "mat-form-field")(6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Ragione Sociale");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "mat-form-field")(10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Numero Di Telefono");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "mat-form-field")(14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "CFPIVA");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 7)(18, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EditSubjectComponent_Template_button_click_18_listener() {
          return ctx.onNoClick();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Esci");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EditSubjectComponent_Template_button_click_20_listener() {
          return ctx.edit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Salva");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.editForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("maxlength", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("maxlength", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.editForm.valid);
      }
    },
    dependencies: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxLengthValidator, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogActions],
    styles: ["form[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zdWJqZWN0cy1wYWdlL2VkaXQtc3ViamVjdC9lZGl0LXN1YmplY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7RUFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJmb3Jte1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 7586:
/*!*************************************************************************************!*\
  !*** ./src/app/components/subjects-page/subject-filter/subject-filter.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubjectFilterComponent: () => (/* binding */ SubjectFilterComponent)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 7178);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 274);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 4520);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 655);
/* harmony import */ var _add_subject_add_subject_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../add-subject/add-subject.component */ 8806);
/* harmony import */ var src_utils_has_value__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/utils/has-value */ 6097);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var src_app_services_subjects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/subjects.service */ 1239);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_services_installations_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/installations.service */ 5333);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/menu */ 8128);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 26);














class SubjectFilterComponent {
  constructor(fb, dialog, subjectsSrv, router, installationsSrv) {
    this.fb = fb;
    this.dialog = dialog;
    this.subjectsSrv = subjectsSrv;
    this.router = router;
    this.installationsSrv = installationsSrv;
    this.filtersForm = this.fb.group({
      socialReason: this.fb.control(''),
      telephoneNumber: this.fb.control(null),
      CFPIVA: this.fb.control(''),
      installationId: this.fb.control(null)
    });
    this.installations$ = this.installationsSrv.installations$;
    this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
  }
  ngOnInit() {
    this.subjectsSrv.filters$.subscribe(value => {
      this.filtersForm.patchValue(value || {
        socialReason: '',
        telephoneNumber: null,
        CFPIVA: '',
        installationId: null
      }, {
        emitEvent: false
      });
      if (this.filtersForm.value.installationId) {
        let installationId = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.toNumber)(this.filtersForm.value.installationId);
        this.filtersForm.get('installationId')?.setValue(installationId);
      }
      this.filtersForm.markAsPristine();
    });
    this.filtersForm.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroyed$), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.filter)(_ => this.filtersForm.valid), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)(value => (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omitBy)(value, val => val === '')), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.debounceTime)(200)).subscribe(value => {
      const v = value;
      this.router.navigate([], {
        queryParams: v
      });
    });
  }
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
  deleteFilters() {
    this.filtersForm.patchValue({
      socialReason: '',
      telephoneNumber: null,
      CFPIVA: '',
      installationId: null
    });
  }
  openDialog() {
    this.dialog.open(_add_subject_add_subject_component__WEBPACK_IMPORTED_MODULE_1__.AddSubjectComponent, {
      data: {
        username: null
      }
    });
  }
  hasValue() {
    if ((0,src_utils_has_value__WEBPACK_IMPORTED_MODULE_2__.hasValueInOptionalFields)(this.filtersForm)) {
      return false;
    } else {
      return true;
    }
  }
  static #_ = this.ɵfac = function SubjectFilterComponent_Factory(t) {
    return new (t || SubjectFilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_subjects_service__WEBPACK_IMPORTED_MODULE_3__.SubjectsService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_installations_service__WEBPACK_IMPORTED_MODULE_4__.InstallationsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
    type: SubjectFilterComponent,
    selectors: [["app-subject-filter"]],
    decls: 44,
    vars: 3,
    consts: [[3, "formGroup"], [1, "filter-subjects"], ["matInput", "", "placeholder", "Ragione Sociale", "formControlName", "socialReason"], ["input", ""], ["matInput", "", "placeholder", "Numero Di Telefono", "formControlName", "telephoneNumber"], ["matInput", "", "placeholder", "CFPIVA", "formControlName", "CFPIVA"], [1, "filter-subjects-mobile"], ["mat-raised-button", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["fxLayout", "column", 1, "matMenu", 2, "width", "100%", "margin", "0", "padding", "0", 3, "click"], ["mat-raised-button", "", 3, "disabled", "click"], [1, "pi", "pi-filter-slash"], ["mat-raised-button", "", "color", "primary", 3, "click"]],
    template: function SubjectFilterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "mat-form-field")(3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "Ragione Sociale");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "mat-form-field")(8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "Numero Di Telefono");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "input", 4, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "mat-form-field")(13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, "CFPIVA");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](15, "input", 5, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "div", 6)(18, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, "Filtri");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "mat-menu", null, 8)(22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SubjectFilterComponent_Template_div_click_22_listener($event) {
          return $event.stopPropagation();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "mat-form-field")(24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25, "Ragione Sociale");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](26, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "mat-form-field")(30, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31, "Numero Di Telefono");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](32, "input", 4, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "mat-form-field")(36, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](37, "CFPIVA");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](38, "input", 5, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SubjectFilterComponent_Template_button_click_40_listener() {
          return ctx.deleteFilters();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](41, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SubjectFilterComponent_Template_button_click_42_listener() {
          return ctx.openDialog();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](43, "Aggiungi");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.filtersForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matMenuTriggerFor", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx.hasValue());
      }
    },
    dependencies: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuTrigger, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInput],
    styles: ["form[_ngcontent-%COMP%]{\n    display: flex; \n    flex-direction: row; \n    margin-top: auto;\n}\nmat-form-field[_ngcontent-%COMP%]{\n    margin: 0px 5px 0px 5px;\n}\nbutton[_ngcontent-%COMP%]{\n    margin-left: 10px; \n    margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zdWJqZWN0cy1wYWdlL3N1YmplY3QtZmlsdGVyL3N1YmplY3QtZmlsdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImZvcm17XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7IFxyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxufVxyXG5tYXQtZm9ybS1maWVsZHtcclxuICAgIG1hcmdpbjogMHB4IDVweCAwcHggNXB4O1xyXG59XHJcbmJ1dHRvbntcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4OyBcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 3454:
/*!***********************************************************************************!*\
  !*** ./src/app/components/subjects-page/subject-table/subject-table.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubjectTableComponent: () => (/* binding */ SubjectTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ 9687);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sort */ 7963);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../confirm/confirm.component */ 6497);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 274);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 3252);
/* harmony import */ var _edit_subject_edit_subject_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../edit-subject/edit-subject.component */ 3240);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ 7178);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_subjects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/subjects.service */ 1239);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _directives_if_admin_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../directives/if-admin.directive */ 7432);
/* harmony import */ var _pipes_string_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../pipes/string.pipe */ 2330);


















function SubjectTableComponent_th_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Ragione Sociale ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SubjectTableComponent_td_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", row_r11.socialReason, " ");
  }
}
function SubjectTableComponent_th_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Numero Di Telefono ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SubjectTableComponent_td_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", row_r12.telephoneNumber, " ");
  }
}
function SubjectTableComponent_th_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " CFPIVA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SubjectTableComponent_td_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", row_r13.CFPIVA, " ");
  }
}
function SubjectTableComponent_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "th", 15);
  }
}
function SubjectTableComponent_td_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 17)(1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SubjectTableComponent_td_13_div_1_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18);
      const row_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r16.edit(row_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SubjectTableComponent_td_13_div_1_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18);
      const row_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r19.delete(row_r14.id, row_r14.socialReason));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
}
function SubjectTableComponent_td_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, SubjectTableComponent_td_13_div_1_Template, 7, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SubjectTableComponent_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 20);
  }
}
function SubjectTableComponent_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 21);
  }
}
function SubjectTableComponent_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 22)(1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "string");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "string");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "string");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate3"]("Nessun dato trovato per i filtri ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 3, ctx_r10.filter == null ? null : ctx_r10.filter.socialReason), " ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 5, ctx_r10.filter == null ? null : ctx_r10.filter.telephoneNumber), " ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 7, ctx_r10.filter == null ? null : ctx_r10.filter.CFPIVA), " ");
  }
}
const _c0 = function () {
  return [10, 25, 50, 100];
};
class SubjectTableComponent {
  constructor(subjectsSrv, dialog) {
    this.subjectsSrv = subjectsSrv;
    this.dialog = dialog;
    this.displayedColumns = ['socialReason', 'telephoneNumber', 'CFPIVA', 'actions'];
    this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    this.paginator = null;
    this.sort = null;
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource();
    this.dataSource.sortingDataAccessor = lodash__WEBPACK_IMPORTED_MODULE_2__.get;
    this.dataSource.sort = this.sort;
  }
  ngOnInit() {
    this.subjectsSrv.subjects$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroyed$)).subscribe(subjects => {
      this.dataSource.data = subjects;
      this.dataSource._updateChangeSubscription();
    });
    this.subjectsSrv.filters$.subscribe(value => {
      this.filter = value;
    });
    this.subjectsSrv.actions$.subscribe(value => {
      if (this.paginator) {
        if (value === "filter") this.paginator.firstPage();
        if (value === "add") this.paginator.lastPage();
      }
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
  delete(id, socialReason) {
    const dialogRef = this.dialog.open(_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmComponent, {
      data: {
        action: `eliminare il soggetto "${socialReason}"`
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.subjectsSrv.delete(id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.throwError)(err))).subscribe();
      }
    });
  }
  edit(subject) {
    const dialogRef = this.dialog.open(_edit_subject_edit_subject_component__WEBPACK_IMPORTED_MODULE_1__.EditSubjectComponent, {
      data: subject
    });
  }
  static #_ = this.ɵfac = function SubjectTableComponent_Factory(t) {
    return new (t || SubjectTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_subjects_service__WEBPACK_IMPORTED_MODULE_3__.SubjectsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: SubjectTableComponent,
    selectors: [["app-subject-table"]],
    viewQuery: function SubjectTableComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSort, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
      }
    },
    decls: 21,
    vars: 6,
    consts: [["mat-table", "", "matSort", "", 1, "mat-elevation-z8", "table-subjects", 3, "dataSource"], ["matColumnDef", "socialReason"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "telephoneNumber"], ["matColumnDef", "CFPIVA"], ["matColumnDef", "actions", "stickyEnd", ""], ["mat-header-cell", "", 4, "matHeaderCellDef"], [1, "div"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["showFirstLastButtons", "", "aria-label", "Select page of users", 3, "length", "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], ["class", "actions", 4, "appIfAdmin"], [1, "actions"], ["mat-mini-fab", "", "color", "primary", "aria-label", "Example icon button with a menu icon", 3, "click"], ["mat-mini-fab", "", "color", "warn", "aria-label", "Example icon button with a menu icon", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]],
    template: function SubjectTableComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-card-content")(1, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, SubjectTableComponent_th_3_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, SubjectTableComponent_td_4_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](5, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, SubjectTableComponent_th_6_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, SubjectTableComponent_td_7_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](8, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, SubjectTableComponent_th_9_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, SubjectTableComponent_td_10_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](11, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, SubjectTableComponent_th_12_Template, 1, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, SubjectTableComponent_td_13_Template, 2, 0, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, SubjectTableComponent_tr_15_Template, 1, 0, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, SubjectTableComponent_tr_16_Template, 1, 0, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, SubjectTableComponent_tr_17_Template, 6, 9, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "mat-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "mat-paginator", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("length", ctx.dataSource.data.length)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c0));
      }
    },
    dependencies: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSortHeader, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatMiniFabButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIcon, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardFooter, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatNoDataRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginator, _directives_if_admin_directive__WEBPACK_IMPORTED_MODULE_4__.IfAdminDirective, _pipes_string_pipe__WEBPACK_IMPORTED_MODULE_5__.StringPipe],
    styles: ["table[_ngcontent-%COMP%] {\n    width: 100%;\n    overflow: auto\n}\n.actions[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n}\nbutton[_ngcontent-%COMP%]{\n    margin: 3px;\n}\nmat-card-footer[_ngcontent-%COMP%]{\n    display: flex; \n    flex-wrap: wrap;\n    padding-bottom: 5px;\n    justify-content: flex-end;\n}\nmat-paginator[_ngcontent-%COMP%]{\n    background-color: var(--primary-color);\n    color: var(--white);\n    border-radius: 50px;\n}\n.div[_ngcontent-%COMP%]{\n    position: fixed; \n    margin: auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zdWJqZWN0cy1wYWdlL3N1YmplY3QtdGFibGUvc3ViamVjdC10YWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYO0FBQ0o7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxzQ0FBc0M7SUFDdEMsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEIiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvXHJcbn1cclxuLmFjdGlvbnN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5idXR0b257XHJcbiAgICBtYXJnaW46IDNweDtcclxufVxyXG5tYXQtY2FyZC1mb290ZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcbm1hdC1wYWdpbmF0b3J7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG59XHJcbi5kaXZ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7IFxyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7521:
/*!*************************************************************************!*\
  !*** ./src/app/components/subjects-page/subjects/subjects.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubjectsComponent: () => (/* binding */ SubjectsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _subject_table_subject_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../subject-table/subject-table.component */ 3454);
/* harmony import */ var _subject_filter_subject_filter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../subject-filter/subject-filter.component */ 7586);




class SubjectsComponent {
  static #_ = this.ɵfac = function SubjectsComponent_Factory(t) {
    return new (t || SubjectsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: SubjectsComponent,
    selectors: [["app-subjects"]],
    decls: 5,
    vars: 0,
    consts: [[1, "container-page"]],
    template: function SubjectsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "mat-card")(2, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-subject-filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-subject-table");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardHeader, _subject_table_subject_table_component__WEBPACK_IMPORTED_MODULE_0__.SubjectTableComponent, _subject_filter_subject_filter_component__WEBPACK_IMPORTED_MODULE_1__.SubjectFilterComponent],
    styles: ["mat-card[_ngcontent-%COMP%]{\n    margin: 2%;\n    background-color: var(--primary-color);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zdWJqZWN0cy1wYWdlL3N1YmplY3RzL3N1YmplY3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1Ysc0NBQXNDO0FBQzFDIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmR7XHJcbiAgICBtYXJnaW46IDIlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 7819:
/*!**********************************************************************!*\
  !*** ./src/app/components/users-page/add-user/add-user.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddUserComponent: () => (/* binding */ AddUserComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 7178);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 3252);
/* harmony import */ var src_utils_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/utils/global */ 5814);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_snackbars_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/snackbars.service */ 9176);
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/users.service */ 6346);
/* harmony import */ var src_app_services_installations_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/installations.service */ 5333);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ 2333);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 6355);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _pipes_type_user_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../pipes/type-user.pipe */ 7487);




















function AddUserComponent_mat_option_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "typeUser");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const accessLevel_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", accessLevel_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 2, accessLevel_r2));
  }
}
function AddUserComponent_mat_option_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 16)(1, "div", 17)(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Codice: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Descrizione: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const installation_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", installation_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", installation_r3.installationCode, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", installation_r3.description, " ");
  }
}
const _c0 = function (a0) {
  return {
    "display": a0
  };
};
class AddUserComponent {
  constructor(snackbarsSrv, fb, usersSrv, dialogRef, installationsSrv, authSrv, data) {
    this.snackbarsSrv = snackbarsSrv;
    this.fb = fb;
    this.usersSrv = usersSrv;
    this.dialogRef = dialogRef;
    this.installationsSrv = installationsSrv;
    this.authSrv = authSrv;
    this.data = data;
    this.addForm = this.fb.group({
      username: ['', {
        validators: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required,
        min: 8,
        max: 50
      }],
      password: ['', {
        validators: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required,
        min: 8,
        max: 20
      }],
      accessLevel: ['', {
        validators: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required
      }],
      idInstallation: ['']
    });
    this.installations$ = this.installationsSrv.installations$;
    this.hide = true;
  }
  ngOnInit() {
    this.user = this.authSrv.getUser();
    this.accessLevels = this.array(this.user?.accessLevel);
    if (this.accessLevels.length === 1) {
      this.addForm.setValue({
        username: '',
        password: '',
        accessLevel: '1',
        idInstallation: ''
      });
    }
  }
  array(value) {
    if (value < 1) return [];
    return Array.from({
      length: value - 1
    }, (_, i) => i + 1);
  }
  onNoClick() {
    this.dialogRef.close();
  }
  add() {
    if (this.addForm.valid) {
      let _idInstallation = null;
      const {
        username,
        password,
        accessLevel,
        idInstallation
      } = this.addForm.value;
      if (idInstallation) _idInstallation = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.toInteger)(idInstallation);
      this.usersSrv.add(username, password, (0,lodash__WEBPACK_IMPORTED_MODULE_0__.toInteger)(accessLevel), _idInstallation).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.throwError)(err))).subscribe(value => {
        this.snackbarsSrv.openSnackBar("Utente aggiunto!", "green");
        this.dialogRef.close();
      }, error => {
        let message = "";
        if (error.status === 400) message = error.error.message;else message = "Errore generico, per favore riprova più tardi";
        this.snackbarsSrv.openSnackBar(message, "red");
      });
    }
  }
  isAdmin(accessLevel) {
    this.toggleRequired((0,lodash__WEBPACK_IMPORTED_MODULE_0__.toNumber)(accessLevel));
    if (accessLevel) {
      const value = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.toNumber)(accessLevel) >= src_utils_global__WEBPACK_IMPORTED_MODULE_1__.admin;
      return value;
    }
    return true;
  }
  toggleRequired(accessLevel) {
    const myFieldControl = this.addForm.get('installationId');
    if (myFieldControl) {
      if (accessLevel >= src_utils_global__WEBPACK_IMPORTED_MODULE_1__.admin) {
        myFieldControl.clearValidators(); // Rimuovi Validators.required
      } else {
        myFieldControl.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required); // Aggiungi Validators.required
      }

      myFieldControl.updateValueAndValidity();
    }
  }
  static #_ = this.ɵfac = function AddUserComponent_Factory(t) {
    return new (t || AddUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_snackbars_service__WEBPACK_IMPORTED_MODULE_2__.SnackbarsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_users_service__WEBPACK_IMPORTED_MODULE_3__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_installations_service__WEBPACK_IMPORTED_MODULE_4__.InstallationsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: AddUserComponent,
    selectors: [["app-add-user"]],
    decls: 40,
    vars: 20,
    consts: [[1, "container-dialog"], ["mat-dialog-title", ""], ["mat-dialog-content", ""], [3, "formGroup"], ["matInput", "", "autocomplete", "off", "type", "text", "formControlName", "username", "minlength", "8", 3, "maxlength"], ["align", "start"], ["align", "end"], ["matInput", "", "autocomplete", "off", "formControlName", "password", "minlength", "8", 3, "type", "maxlength"], ["type", "button", "mat-icon-button", "", "matSuffix", "", 3, "click"], [3, "ngStyle"], ["formControlName", "accessLevel"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "idInstallation"], ["mat-dialog-actions", ""], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], [3, "value"], [2, "margin", "10px auto 10px auto"]],
    template: function AddUserComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Nuovo utente");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 2)(4, "form", 3)(5, "mat-form-field")(6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "mat-hint", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Min 8 caratteri");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "mat-hint", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "mat-form-field")(14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddUserComponent_Template_button_click_17_listener($event) {
          ctx.hide = !ctx.hide;
          return $event.stopPropagation();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "mat-hint", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "Min 8 caratteri");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "mat-hint", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "mat-form-field", 9)(25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "Livello Accesso");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](28, AddUserComponent_mat_option_28_Template, 3, 4, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "mat-form-field", 9)(30, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "Installazione");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "mat-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](33, AddUserComponent_mat_option_33_Template, 9, 3, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](34, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "div", 13)(36, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddUserComponent_Template_button_click_36_listener() {
          return ctx.onNoClick();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, "Esci");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddUserComponent_Template_button_click_38_listener() {
          return ctx.add();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.addForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("maxlength", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"]((ctx.addForm.value.username == null ? null : ctx.addForm.value.username.length) < 8 ? 8 - ((ctx.addForm.value.username == null ? null : ctx.addForm.value.username.length) || 0) + " mancanti" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("type", ctx.hide ? "password" : "text")("maxlength", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"]((ctx.addForm.value.password == null ? null : ctx.addForm.value.password.length) < 8 ? 8 - ((ctx.addForm.value.password == null ? null : ctx.addForm.value.password.length) || 0) + " mancanti" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](16, _c0, ctx.accessLevels.length === 1 ? "none" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.accessLevels);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](18, _c0, ctx.isAdmin(ctx.addForm.value.accessLevel) ? "none" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](34, 14, ctx.installations$));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.addForm.valid);
      }
    },
    dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatSuffix, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.MaxLengthValidator, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInput, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogActions, _angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe, _pipes_type_user_pipe__WEBPACK_IMPORTED_MODULE_6__.TypeUserPipe],
    styles: ["form[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy91c2Vycy1wYWdlL2FkZC11c2VyL2FkZC11c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9104:
/*!************************************************************************!*\
  !*** ./src/app/components/users-page/edit-user/edit-user.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditUserComponent: () => (/* binding */ EditUserComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 7178);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 3252);
/* harmony import */ var src_utils_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/utils/global */ 5814);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_snackbars_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/snackbars.service */ 9176);
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/users.service */ 6346);
/* harmony import */ var src_app_services_installations_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/installations.service */ 5333);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ 2333);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 6355);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/slide-toggle */ 9293);
/* harmony import */ var _pipes_type_user_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../pipes/type-user.pipe */ 7487);





















function EditUserComponent_mat_option_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "typeUser");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const accessLevel_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", accessLevel_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 2, accessLevel_r2));
  }
}
function EditUserComponent_mat_option_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 17)(1, "div", 18)(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Codice: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Descrizione: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const installation_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", installation_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", installation_r3.installationCode, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", installation_r3.description, " ");
  }
}
const _c0 = function (a0) {
  return {
    "display": a0
  };
};
class EditUserComponent {
  constructor(snackbarsSrv, fb, usersSrv, dialogRef, installationsSrv, authSrv, data) {
    this.snackbarsSrv = snackbarsSrv;
    this.fb = fb;
    this.usersSrv = usersSrv;
    this.dialogRef = dialogRef;
    this.installationsSrv = installationsSrv;
    this.authSrv = authSrv;
    this.data = data;
    this.installations$ = this.installationsSrv.installations$;
    this.hide = true;
    this.editForm = this.fb.group({
      username: [data.username, {
        validators: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required,
        min: 8,
        max: 50
      }],
      password: [null, {
        min: 8,
        max: 20
      }],
      accessLevel: [data.accessLevel],
      idInstallation: [data.installationId?.id],
      able: [Boolean(data.able)]
    });
  }
  ngOnInit() {
    this.user = this.authSrv.getUser();
    this.accessLevels = this.array(this.user?.accessLevel);
    if (this.accessLevels.length === 1) {
      this.editForm.setValue({
        username: '',
        password: '',
        accessLevel: '1',
        idInstallation: ''
      });
    }
  }
  array(value) {
    if (value < 1) return [];
    return Array.from({
      length: value - 1
    }, (_, i) => i + 1);
  }
  onNoClick() {
    this.dialogRef.close();
  }
  add() {
    if (this.editForm.valid) {
      const {
        username,
        password,
        accessLevel,
        idInstallation,
        able
      } = this.editForm.value;
      this.usersSrv.edit(this.data.username, {
        username: username === this.data.username ? null : username,
        password: password === '' ? null : password,
        accessLevel: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.toInteger)(accessLevel),
        installationId: idInstallation ? (0,lodash__WEBPACK_IMPORTED_MODULE_0__.toNumber)(idInstallation) : null,
        able: able
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.throwError)(err))).subscribe(value => {
        this.snackbarsSrv.openSnackBar("Utente modificato!", "green");
        this.dialogRef.close();
      }, error => {
        let message = "";
        if (error.status === 400) message = error.error.message;else message = "Errore generico, per favore riprova più tardi";
        this.snackbarsSrv.openSnackBar(message, "red");
      });
    }
  }
  isAdmin(accessLevel) {
    this.toggleRequired((0,lodash__WEBPACK_IMPORTED_MODULE_0__.toNumber)(accessLevel));
    if (accessLevel) {
      const value = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.toNumber)(accessLevel) >= src_utils_global__WEBPACK_IMPORTED_MODULE_1__.admin;
      return value;
    }
    return true;
  }
  toggleRequired(accessLevel) {
    const myFieldControl = this.editForm.get('installationId');
    if (myFieldControl) {
      if (accessLevel >= src_utils_global__WEBPACK_IMPORTED_MODULE_1__.admin) {
        myFieldControl.clearValidators(); // Rimuovi Validators.required
      } else {
        myFieldControl.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required); // Aggiungi Validators.required
      }

      myFieldControl.updateValueAndValidity();
    }
  }
  static #_ = this.ɵfac = function EditUserComponent_Factory(t) {
    return new (t || EditUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_snackbars_service__WEBPACK_IMPORTED_MODULE_2__.SnackbarsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_users_service__WEBPACK_IMPORTED_MODULE_3__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_installations_service__WEBPACK_IMPORTED_MODULE_4__.InstallationsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: EditUserComponent,
    selectors: [["app-edit-user"]],
    decls: 42,
    vars: 22,
    consts: [[1, "container-dialog"], ["mat-dialog-title", ""], ["mat-dialog-content", ""], [3, "formGroup"], ["matInput", "", "autocomplete", "off", "type", "text", "formControlName", "username", "minlength", "8", 3, "maxlength"], ["align", "start"], ["align", "end"], ["matInput", "", "autocomplete", "off", "formControlName", "password", "minlength", "8", 3, "type", "maxlength"], ["type", "button", "mat-icon-button", "", "matSuffix", "", 3, "click"], [3, "ngStyle"], ["formControlName", "accessLevel"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "idInstallation"], ["formControlName", "able", 3, "ngModel", "ngModelChange"], ["mat-dialog-actions", ""], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], [3, "value"], [2, "margin", "10px auto 10px auto"]],
    template: function EditUserComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Modifica utente");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 2)(4, "form", 3)(5, "mat-form-field")(6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "mat-hint", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Min 8 caratteri");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "mat-hint", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "mat-form-field")(14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Nuova password");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function EditUserComponent_Template_button_click_17_listener($event) {
          ctx.hide = !ctx.hide;
          return $event.stopPropagation();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "mat-hint", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "Min 8 caratteri");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "mat-hint", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "mat-form-field", 9)(25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "Livello Accesso");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](28, EditUserComponent_mat_option_28_Template, 3, 4, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "mat-form-field", 9)(30, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "Installazione");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "mat-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](33, EditUserComponent_mat_option_33_Template, 9, 3, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](34, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "mat-slide-toggle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function EditUserComponent_Template_mat_slide_toggle_ngModelChange_35_listener($event) {
          return ctx.editForm.value.able = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "div", 14)(38, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function EditUserComponent_Template_button_click_38_listener() {
          return ctx.onNoClick();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "Esci");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function EditUserComponent_Template_button_click_40_listener() {
          return ctx.add();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, "Salva");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.editForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("maxlength", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"]((ctx.editForm.value.username == null ? null : ctx.editForm.value.username.length) < 8 ? 8 - ((ctx.editForm.value.username == null ? null : ctx.editForm.value.username.length) || 0) + " mancanti" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("type", ctx.hide ? "password" : "text")("maxlength", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"]((ctx.editForm.value.password == null ? null : ctx.editForm.value.password.length) < 8 ? 8 - ((ctx.editForm.value.password == null ? null : ctx.editForm.value.password.length) || 0) + " mancanti" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](18, _c0, ctx.accessLevels.length === 1 ? "none" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.accessLevels);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](20, _c0, ctx.isAdmin(ctx.editForm.value.accessLevel) ? "none" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](34, 16, ctx.installations$));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.editForm.value.able);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.editForm.value.able ? "Abilitato" : "Disabilitato");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.editForm.valid);
      }
    },
    dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatSuffix, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.MaxLengthValidator, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInput, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogActions, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__.MatSlideToggle, _angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe, _pipes_type_user_pipe__WEBPACK_IMPORTED_MODULE_6__.TypeUserPipe],
    styles: ["form[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy91c2Vycy1wYWdlL2VkaXQtdXNlci9lZGl0LXVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJmb3Jte1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 2065:
/*!****************************************************************************!*\
  !*** ./src/app/components/users-page/user-filter/user-filter.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserFilterComponent: () => (/* binding */ UserFilterComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 274);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 4520);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 655);
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../add-user/add-user.component */ 7819);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ 7178);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_utils_has_value__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/utils/has-value */ 6097);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/users.service */ 6346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_services_installations_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/installations.service */ 5333);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 6355);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/menu */ 8128);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ 26);

















function UserFilterComponent_mat_option_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 15)(1, "div", 6)(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Codice: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Descrizione: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const installation_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", installation_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", installation_r5.installationCode, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", installation_r5.description, " ");
  }
}
function UserFilterComponent_mat_option_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 15)(1, "div")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Codice: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Descrizione: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const installation_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", installation_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", installation_r6.installationCode, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", installation_r6.description, " ");
  }
}
class UserFilterComponent {
  constructor(fb, dialog, usersSrv, router, installationsSrv) {
    this.fb = fb;
    this.dialog = dialog;
    this.usersSrv = usersSrv;
    this.router = router;
    this.installationsSrv = installationsSrv;
    this.filtersForm = this.fb.group({
      username: this.fb.control(''),
      installationId: this.fb.control(null)
    });
    this.installations$ = this.installationsSrv.installations$;
    this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
  }
  ngOnInit() {
    this.usersSrv.filters$.subscribe(value => {
      this.filtersForm.patchValue(value || {
        username: '',
        installationId: null
      }, {
        emitEvent: false
      });
      if (this.filtersForm.value.installationId) {
        let installationId = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.toNumber)(this.filtersForm.value.installationId);
        this.filtersForm.get('installationId')?.setValue(installationId);
      }
      this.filtersForm.markAsPristine();
    });
    this.filtersForm.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroyed$), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.filter)(_ => this.filtersForm.valid), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.map)(value => (0,lodash__WEBPACK_IMPORTED_MODULE_1__.omitBy)(value, val => val === '')), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.debounceTime)(300)).subscribe(value => {
      const v = value;
      this.router.navigate([], {
        queryParams: v
      });
    });
  }
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
  deleteFilters() {
    this.filtersForm.patchValue({
      username: '',
      installationId: null
    });
  }
  openDialog() {
    this.dialog.open(_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_0__.AddUserComponent, {
      data: {
        username: null
      }
    });
  }
  hasValue() {
    if ((0,src_utils_has_value__WEBPACK_IMPORTED_MODULE_2__.hasValueInOptionalFields)(this.filtersForm)) {
      return false;
    } else {
      return true;
    }
  }
  static #_ = this.ɵfac = function UserFilterComponent_Factory(t) {
    return new (t || UserFilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_users_service__WEBPACK_IMPORTED_MODULE_3__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_installations_service__WEBPACK_IMPORTED_MODULE_4__.InstallationsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: UserFilterComponent,
    selectors: [["app-user-filter"]],
    decls: 39,
    vars: 9,
    consts: [[3, "formGroup"], [1, "filter-users"], ["matInput", "", "placeholder", "Username", "formControlName", "username", "autocomplete", "off"], ["input", ""], ["formControlName", "installationId"], ["value", ""], [2, "margin", "10px auto 10px auto"], [3, "value", 4, "ngFor", "ngForOf"], [1, "filter-users-mobile"], ["mat-raised-button", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["fxLayout", "column", 1, "matMenu", 2, "width", "100%", "margin", "0", "padding", "0", 3, "click"], ["mat-raised-button", "", 3, "disabled", "click"], [1, "pi", "pi-filter-slash"], ["mat-raised-button", "", "color", "primary", 3, "click"], [3, "value"]],
    template: function UserFilterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "mat-form-field")(3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-form-field")(8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Installazione");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-select", 4)(11, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, UserFilterComponent_mat_option_13_Template, 9, 3, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 8)(16, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Filtri");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "mat-menu", null, 10)(20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UserFilterComponent_Template_div_click_20_listener($event) {
          return $event.stopPropagation();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "mat-form-field")(22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "mat-form-field")(28, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Installazione");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "mat-select", 4)(31, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](33, UserFilterComponent_mat_option_33_Template, 9, 3, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](34, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UserFilterComponent_Template_button_click_35_listener() {
          return ctx.deleteFilters();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](36, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UserFilterComponent_Template_button_click_37_listener() {
          return ctx.openDialog();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "Aggiungi");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.filtersForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](14, 5, ctx.installations$));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matMenuTriggerFor", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](34, 7, ctx.installations$));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.hasValue());
      }
    },
    dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__.MatMenuTrigger, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInput, _angular_common__WEBPACK_IMPORTED_MODULE_17__.AsyncPipe],
    styles: ["form[_ngcontent-%COMP%]{\n  display: flex; \n  flex-direction: row; \n  margin-top: auto;\n}\nmat-form-field[_ngcontent-%COMP%]{\n  margin: 0px 5px 0px 5px;\n}\nbutton[_ngcontent-%COMP%]{\n  margin-left: 10px; \n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy91c2Vycy1wYWdlL3VzZXItZmlsdGVyL3VzZXItZmlsdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQiIsInNvdXJjZXNDb250ZW50IjpbImZvcm17XHJcbiAgZGlzcGxheTogZmxleDsgXHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdzsgXHJcbiAgbWFyZ2luLXRvcDogYXV0bztcclxufVxyXG5tYXQtZm9ybS1maWVsZHtcclxuICBtYXJnaW46IDBweCA1cHggMHB4IDVweDtcclxufVxyXG5idXR0b257XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7IFxyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 5048:
/*!**************************************************************************!*\
  !*** ./src/app/components/users-page/user-table/user-table.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserTableComponent: () => (/* binding */ UserTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/paginator */ 9687);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sort */ 7963);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 274);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 3252);
/* harmony import */ var _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../confirm/confirm.component */ 6497);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ 7178);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../edit-user/edit-user.component */ 9104);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/users.service */ 6346);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ 2333);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _pipes_yes_no_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../pipes/yes-no.pipe */ 7592);
/* harmony import */ var _pipes_datetime_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../pipes/datetime.pipe */ 7811);
/* harmony import */ var _pipes_string_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../pipes/string.pipe */ 2330);





















function UserTableComponent_th_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Username ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function UserTableComponent_td_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", row_r15.username, " ");
  }
}
function UserTableComponent_th_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Abilitato ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function UserTableComponent_td_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "yesNo");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, row_r16.able), " ");
  }
}
function UserTableComponent_th_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Livello Accesso ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function UserTableComponent_td_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", row_r17.accessLevel, " ");
  }
}
function UserTableComponent_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Ultimo Accesso ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function UserTableComponent_td_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "datetime");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r18 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", row_r18.lastAccess && row_r18.username !== ctx_r7.username ? _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, row_r18.lastAccess) : "Online", " ");
  }
}
function UserTableComponent_th_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Descrizione Installazione ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function UserTableComponent_td_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", row_r19.installationId ? row_r19.installationId.description : "", " ");
  }
}
function UserTableComponent_th_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "th", 17);
  }
}
const _c0 = function (a0) {
  return {
    "display": a0
  };
};
function UserTableComponent_td_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 16)(1, "div", 18)(2, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UserTableComponent_td_19_Template_button_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r22);
      const row_r20 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r21.edit(row_r20));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UserTableComponent_td_19_Template_button_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r22);
      const row_r20 = restoredCtx.$implicit;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r23.delete(row_r20.username));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const row_r20 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](1, _c0, ctx_r11.isMeOrCan(row_r20.username, row_r20.accessLevel) ? "none" : ""));
  }
}
function UserTableComponent_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 21);
  }
}
function UserTableComponent_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 22);
  }
}
function UserTableComponent_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr", 23)(1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "string");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "string");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("Nessun dato trovato per i filtri ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, ctx_r14.filter == null ? null : ctx_r14.filter.username), " ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 4, ctx_r14.filter == null ? null : ctx_r14.filter.installationId), " ");
  }
}
const _c1 = function () {
  return [5, 10];
};
class UserTableComponent {
  constructor(usersSrv, authSrv, dialog) {
    this.usersSrv = usersSrv;
    this.authSrv = authSrv;
    this.dialog = dialog;
    this.displayedColumns = ['username', 'able', 'accessLevel', 'lastAccess', 'installationId.description', 'actions'];
    this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
    this.paginator = null;
    this.sort = null;
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableDataSource();
    this.dataSource.sortingDataAccessor = lodash__WEBPACK_IMPORTED_MODULE_1__.get;
    this.dataSource.sort = this.sort;
  }
  ngOnInit() {
    this.username = this.authSrv.getUser()?.username;
    this.usersSrv.users$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroyed$)).subscribe(users => {
      this.dataSource.data = users;
      this.dataSource._updateChangeSubscription();
    });
    this.usersSrv.filters$.subscribe(value => {
      this.filter = value;
    });
    this.usersSrv.actions$.subscribe(value => {
      if (this.paginator) {
        if (value === "filter") this.paginator.firstPage();
        if (value === "add") this.paginator.lastPage();
      }
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
  delete(username) {
    const dialogRef = this.dialog.open(_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmComponent, {
      data: {
        action: `eliminare l'utente "${username}"`
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.usersSrv.delete(username).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.throwError)(err))).subscribe();
      }
    });
  }
  edit(user) {
    const dialogRef = this.dialog.open(_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_2__.EditUserComponent, {
      data: user
    });
  }
  disable(username, able) {
    this.usersSrv.disable(username, able).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.throwError)(err))).subscribe();
  }
  isMeOrCan(username, accessLevel) {
    const user = this.authSrv.getUser();
    return username === user?.username || accessLevel >= user.accessLevel;
  }
  static #_ = this.ɵfac = function UserTableComponent_Factory(t) {
    return new (t || UserTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_users_service__WEBPACK_IMPORTED_MODULE_3__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialog));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: UserTableComponent,
    selectors: [["app-user-table"]],
    viewQuery: function UserTableComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSort, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
      }
    },
    decls: 27,
    vars: 6,
    consts: [["mat-table", "", "matSort", "", 1, "mat-elevation-z8", "table-users", 3, "dataSource"], ["matColumnDef", "username"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "able"], ["matColumnDef", "accessLevel"], ["matColumnDef", "lastAccess"], ["matColumnDef", "installationId.description"], ["matColumnDef", "actions", "stickyEnd", ""], ["mat-header-cell", "", 4, "matHeaderCellDef"], [1, "div"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["showFirstLastButtons", "", "aria-label", "Select page of users", 3, "length", "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], [1, "actions", 3, "ngStyle"], ["mat-mini-fab", "", "color", "primary", "aria-label", "Example icon button with a menu icon", 3, "click"], ["mat-mini-fab", "", "color", "warn", "aria-label", "Example icon button with a menu icon", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]],
    template: function UserTableComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-card-content")(1, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, UserTableComponent_th_3_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, UserTableComponent_td_4_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](5, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, UserTableComponent_th_6_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, UserTableComponent_td_7_Template, 3, 3, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](8, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, UserTableComponent_th_9_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, UserTableComponent_td_10_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](11, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, UserTableComponent_th_12_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, UserTableComponent_td_13_Template, 3, 3, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](14, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, UserTableComponent_th_15_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, UserTableComponent_td_16_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](17, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, UserTableComponent_th_18_Template, 1, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, UserTableComponent_td_19_Template, 8, 3, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, UserTableComponent_tr_21_Template, 1, 0, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](22, UserTableComponent_tr_22_Template, 1, 0, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](23, UserTableComponent_tr_23_Template, 5, 6, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "mat-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](26, "mat-paginator", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("length", ctx.dataSource.data.length)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](5, _c1));
      }
    },
    dependencies: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSortHeader, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgStyle, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatMiniFabButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIcon, _angular_material_card__WEBPACK_IMPORTED_MODULE_20__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_20__.MatCardFooter, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatNoDataRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginator, _pipes_yes_no_pipe__WEBPACK_IMPORTED_MODULE_5__.YesNoPipe, _pipes_datetime_pipe__WEBPACK_IMPORTED_MODULE_6__.DatetimePipe, _pipes_string_pipe__WEBPACK_IMPORTED_MODULE_7__.StringPipe],
    styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow: auto\n}\n.actions[_ngcontent-%COMP%]{\n  display: flex;\n  flex-direction: row;\n}\nbutton[_ngcontent-%COMP%]{\n  margin: 3px;\n}\nmat-card-footer[_ngcontent-%COMP%]{\n  display: flex; \n  flex-wrap: wrap;\n  padding-bottom: 5px;\n  justify-content: flex-end;\n}\nmat-paginator[_ngcontent-%COMP%]{\n  background-color: var(--primary-color);\n  color: var(--white);\n  border-radius: 50px;\n}\n.div[_ngcontent-%COMP%]{\n  position: fixed; \n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy91c2Vycy1wYWdlL3VzZXItdGFibGUvdXNlci10YWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYO0FBQ0Y7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxzQ0FBc0M7RUFDdEMsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZCIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogYXV0b1xyXG59XHJcbi5hY3Rpb25ze1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5idXR0b257XHJcbiAgbWFyZ2luOiAzcHg7XHJcbn1cclxubWF0LWNhcmQtZm9vdGVye1xyXG4gIGRpc3BsYXk6IGZsZXg7IFxyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxubWF0LXBhZ2luYXRvcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbn1cclxuLmRpdntcclxuICBwb3NpdGlvbjogZml4ZWQ7IFxyXG4gIG1hcmdpbjogYXV0bztcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 735:
/*!****************************************************************!*\
  !*** ./src/app/components/users-page/users/users.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsersComponent: () => (/* binding */ UsersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _user_table_user_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../user-table/user-table.component */ 5048);
/* harmony import */ var _user_filter_user_filter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user-filter/user-filter.component */ 2065);




class UsersComponent {
  static #_ = this.ɵfac = function UsersComponent_Factory(t) {
    return new (t || UsersComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: UsersComponent,
    selectors: [["app-users"]],
    decls: 5,
    vars: 0,
    consts: [[1, "container-page"]],
    template: function UsersComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "mat-card")(2, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-user-filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-user-table");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardHeader, _user_table_user_table_component__WEBPACK_IMPORTED_MODULE_0__.UserTableComponent, _user_filter_user_filter_component__WEBPACK_IMPORTED_MODULE_1__.UserFilterComponent],
    styles: ["mat-card[_ngcontent-%COMP%]{\n  margin: 2%;\n  background-color: var(--primary-color);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy91c2Vycy1wYWdlL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1Ysc0NBQXNDO0FBQ3hDIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmR7XHJcbiAgbWFyZ2luOiAyJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 7432:
/*!**************************************************!*\
  !*** ./src/app/directives/if-admin.directive.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IfAdminDirective: () => (/* binding */ IfAdminDirective)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 274);
/* harmony import */ var src_utils_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/utils/global */ 5814);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ 2333);




class IfAdminDirective {
  constructor(templateRef, viewContainer, authSrv) {
    this.templateRef = templateRef;
    this.viewContainer = viewContainer;
    this.authSrv = authSrv;
    this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.justCreated = false;
  }
  ngOnInit() {
    this.authSrv.currentUser$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroyed$)).subscribe(_ => {
      this.updateView();
    });
  }
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
  updateView() {
    this.authSrv.currentUser$.subscribe(value => {
      if (!value) {
        this.viewContainer.clear();
        this.justCreated = false;
      } else {
        this.set(value);
      }
    });
  }
  set(value) {
    if (value?.accessLevel >= src_utils_global__WEBPACK_IMPORTED_MODULE_0__.admin) {
      if (this.justCreated === false) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.justCreated = true;
      }
    } else {
      this.viewContainer.clear();
      this.justCreated = false;
    }
  }
  static #_ = this.ɵfac = function IfAdminDirective_Factory(t) {
    return new (t || IfAdminDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
    type: IfAdminDirective,
    selectors: [["", "appIfAdmin", ""]]
  });
}

/***/ }),

/***/ 9242:
/*!**********************************************************!*\
  !*** ./src/app/directives/if-authenticated.directive.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IfAuthenticatedDirective: () => (/* binding */ IfAuthenticatedDirective)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 274);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 2333);




class IfAuthenticatedDirective {
  constructor(templateRef, viewContainer, authSrv) {
    this.templateRef = templateRef;
    this.viewContainer = viewContainer;
    this.authSrv = authSrv;
    this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.justCreated = false;
  }
  ngOnInit() {
    this.authSrv.currentUser$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroyed$)).subscribe(_ => {
      this.updateView();
    });
  }
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
  updateView() {
    if (this.authSrv.isLoggedIn()) {
      if (this.justCreated === false) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.justCreated = true;
      }
    } else {
      this.viewContainer.clear();
      this.justCreated = false;
    }
  }
  static #_ = this.ɵfac = function IfAuthenticatedDirective_Factory(t) {
    return new (t || IfAuthenticatedDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
    type: IfAuthenticatedDirective,
    selectors: [["", "ifAuthenticated", ""]]
  });
}

/***/ }),

/***/ 3019:
/*!********************************************************!*\
  !*** ./src/app/directives/if-super-admin.directive.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IfSuperAdminDirective: () => (/* binding */ IfSuperAdminDirective)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 274);
/* harmony import */ var src_utils_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/utils/global */ 5814);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ 2333);




class IfSuperAdminDirective {
  constructor(templateRef, viewContainer, authSrv) {
    this.templateRef = templateRef;
    this.viewContainer = viewContainer;
    this.authSrv = authSrv;
    this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.justCreated = false;
  }
  ngOnInit() {
    this.authSrv.currentUser$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroyed$)).subscribe(_ => {
      this.updateView();
    });
  }
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
  updateView() {
    this.authSrv.currentUser$.subscribe(value => {
      if (!value) {
        this.viewContainer.clear();
        this.justCreated = false;
      } else {
        this.set(value);
      }
    });
  }
  set(value) {
    if (value?.accessLevel === src_utils_global__WEBPACK_IMPORTED_MODULE_0__.superAdmin) {
      if (this.justCreated === false) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.justCreated = true;
      }
    } else {
      this.viewContainer.clear();
      this.justCreated = false;
    }
  }
  static #_ = this.ɵfac = function IfSuperAdminDirective_Factory(t) {
    return new (t || IfSuperAdminDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
    type: IfSuperAdminDirective,
    selectors: [["", "appIfSuperAdmin", ""]]
  });
}

/***/ }),

/***/ 5336:
/*!***************************************!*\
  !*** ./src/app/guards/admin.guard.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   adminGuard: () => (/* binding */ adminGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 2333);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/navigation.service */ 7762);
/* harmony import */ var src_utils_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/utils/global */ 5814);






const adminGuard = (route, state) => {
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router);
  const authSrv = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService);
  const navigation = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__.NavigationService);
  const isLoggedIn = authSrv.isLoggedIn();
  if (!isLoggedIn) {
    router.navigate(['/login']);
    return false;
  }
  return authSrv.fetchUser().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(value => {
    if (value && value.accessLevel >= src_utils_global__WEBPACK_IMPORTED_MODULE_2__.admin) {
      return true;
    } else {
      navigation.back();
      return false;
    }
  }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(() => {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(false);
  }));
};

/***/ }),

/***/ 1391:
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authGuard: () => (/* binding */ authGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 2333);


const authGuard = (route, state) => {
  const authSrv = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService);
  const isLoggedIn = authSrv.isLoggedIn();
  if (isLoggedIn) {
    return true;
  } else {
    return false;
  }
};

/***/ }),

/***/ 7025:
/*!****************************************!*\
  !*** ./src/app/guards/logged.guard.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loggedGuard: () => (/* binding */ loggedGuard)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 2333);



const loggedGuard = (route, state) => {
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router);
  const authSrv = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService);
  if (authSrv.isLoggedIn()) {
    router.navigate(['/events']); // Reindirizza l'utente se è già autenticato
    return false; // Blocca l'accesso alla pagina di login
  } else {
    return true; // Consenti l'accesso alla pagina di login
  }
};

/***/ }),

/***/ 4094:
/*!**************************************************!*\
  !*** ./src/app/interceptors/auth.interceptor.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthInterceptor: () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_jwt_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/jwt.service */ 61);


class AuthInterceptor {
  constructor(jwtSrv) {
    this.jwtSrv = jwtSrv;
  }
  intercept(req, next) {
    const authToken = this.jwtSrv.getToken();
    const authReq = authToken ? req.clone({
      headers: req.headers.set('Authorization', `Bearer ${authToken}`)
    }) : req;
    return next.handle(authReq);
  }
  static #_ = this.ɵfac = function AuthInterceptor_Factory(t) {
    return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_jwt_service__WEBPACK_IMPORTED_MODULE_0__.JwtService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: AuthInterceptor,
    factory: AuthInterceptor.ɵfac
  });
}

/***/ }),

/***/ 7811:
/*!****************************************!*\
  !*** ./src/app/pipes/datetime.pipe.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DatetimePipe: () => (/* binding */ DatetimePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class DatetimePipe {
  transform(value) {
    if (value) {
      const date = new Date(value);
      var giorno = date.getDate();
      var mese = date.getMonth() + 1; // I mesi partono da zero, quindi aggiungi 1
      var anno = date.getFullYear();
      var ore = date.getHours();
      var minuti = date.getMinutes();
      // Formatta la stringa con le informazioni ottenute
      var stringaFormattata = giorno + '/' + mese + '/' + anno + ' ' + ore + ':' + minuti;
      return stringaFormattata;
    }
    return null;
  }
  static #_ = this.ɵfac = function DatetimePipe_Factory(t) {
    return new (t || DatetimePipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "datetime",
    type: DatetimePipe,
    pure: true
  });
}

/***/ }),

/***/ 2330:
/*!**************************************!*\
  !*** ./src/app/pipes/string.pipe.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StringPipe: () => (/* binding */ StringPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class StringPipe {
  transform(value) {
    if (!value) return;
    return `"${value}"`;
  }
  static #_ = this.ɵfac = function StringPipe_Factory(t) {
    return new (t || StringPipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "string",
    type: StringPipe,
    pure: true
  });
}

/***/ }),

/***/ 7487:
/*!*****************************************!*\
  !*** ./src/app/pipes/type-user.pipe.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TypeUserPipe: () => (/* binding */ TypeUserPipe)
/* harmony export */ });
/* harmony import */ var src_utils_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/utils/global */ 5814);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


class TypeUserPipe {
  transform(value) {
    if (value === src_utils_global__WEBPACK_IMPORTED_MODULE_0__.admin) return `${value} | amministratore`;else if (value === src_utils_global__WEBPACK_IMPORTED_MODULE_0__.superAdmin) return `${value} | super-amministratore`;else return `${value} | utente`;
  }
  static #_ = this.ɵfac = function TypeUserPipe_Factory(t) {
    return new (t || TypeUserPipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
    name: "typeUser",
    type: TypeUserPipe,
    pure: true
  });
}

/***/ }),

/***/ 7592:
/*!**************************************!*\
  !*** ./src/app/pipes/yes-no.pipe.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   YesNoPipe: () => (/* binding */ YesNoPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class YesNoPipe {
  transform(value) {
    return value ? 'Si' : 'No';
  }
  static #_ = this.ɵfac = function YesNoPipe_Factory(t) {
    return new (t || YesNoPipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "yesNo",
    type: YesNoPipe,
    pure: true
  });
}

/***/ }),

/***/ 7298:
/*!********************************************************************!*\
  !*** ./src/app/resolvers/cards-resolvers/cards-filter.resolver.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cardsFilterResolver: () => (/* binding */ cardsFilterResolver)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 7178);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

const cardsFilterResolver = (route, state) => {
  return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.pick)(route.queryParams, ['numberCard', 'plate', 'materialDescription', 'socialReason', 'installationId']);
};

/***/ }),

/***/ 9219:
/*!*************************************************************!*\
  !*** ./src/app/resolvers/cards-resolvers/cards.resolver.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cardsResolver: () => (/* binding */ cardsResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 7178);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_app_services_cards_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/cards.service */ 1573);



const cardsResolver = (route, state) => {
  const cardSrv = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(src_app_services_cards_service__WEBPACK_IMPORTED_MODULE_1__.CardsService);
  const filters = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.pick)(route.queryParams, ['numberCard', 'plate', 'materialDescription', 'socialReason', 'installationId']);
  cardSrv.list(filters);
};

/***/ }),

/***/ 9510:
/*!***********************************************************************!*\
  !*** ./src/app/resolvers/events-resolvers/events-filters.resolver.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   eventsFiltersResolver: () => (/* binding */ eventsFiltersResolver)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 7178);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

const eventsFiltersResolver = (route, state) => {
  return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.pick)(route.queryParams, ['dtMin', 'dtMax', 'numberCard', 'plate', 'materialDescription', 'socialReason', 'idInstallation']);
};

/***/ }),

/***/ 7227:
/*!***************************************************************!*\
  !*** ./src/app/resolvers/events-resolvers/events.resolver.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   eventsResolver: () => (/* binding */ eventsResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 7178);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_app_services_events_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/events.service */ 2090);



const eventsResolver = (route, state) => {
  const eventSrv = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(src_app_services_events_service__WEBPACK_IMPORTED_MODULE_1__.EventsService);
  const filters = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.pick)(route.queryParams, ['dtMin', 'dtMax', 'numberCard', 'plate', 'materialDescription', 'socialReason', 'idInstallation']);
  eventSrv.list(filters);
};

/***/ }),

/***/ 7602:
/*!************************************************************************************!*\
  !*** ./src/app/resolvers/installations-resolvers/installations-filter.resolver.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   installationsFilterResolver: () => (/* binding */ installationsFilterResolver)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 7178);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

const installationsFilterResolver = (route, state) => {
  return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.pick)(route.queryParams, ['installationCode', 'description']);
};

/***/ }),

/***/ 1270:
/*!*****************************************************************************!*\
  !*** ./src/app/resolvers/installations-resolvers/installations.resolver.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   installationsResolver: () => (/* binding */ installationsResolver)
/* harmony export */ });
/* harmony import */ var src_app_services_installations_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/installations.service */ 5333);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ 7178);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);



const installationsResolver = (route, state) => {
  const installationsSrv = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(src_app_services_installations_service__WEBPACK_IMPORTED_MODULE_0__.InstallationsService);
  const filters = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.pick)(route.queryParams, ['installationCode', 'description']);
  installationsSrv.list(filters);
};

/***/ }),

/***/ 5660:
/*!***************************************************************************!*\
  !*** ./src/app/resolvers/materials-resolver/materials-filter.resolver.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   materialsFilterResolver: () => (/* binding */ materialsFilterResolver)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 7178);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

const materialsFilterResolver = (route, state) => {
  return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.pick)(route.queryParams, ['description', 'installationId']);
};

/***/ }),

/***/ 2039:
/*!********************************************************************!*\
  !*** ./src/app/resolvers/materials-resolver/materials.resolver.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   materialsResolver: () => (/* binding */ materialsResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 7178);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_app_services_materials_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/materials.service */ 1244);



const materialsResolver = (route, state) => {
  const materialsSrv = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(src_app_services_materials_service__WEBPACK_IMPORTED_MODULE_1__.MaterialsService);
  const filters = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.pick)(route.queryParams, ['description', 'installationId']);
  materialsSrv.list(filters);
};

/***/ }),

/***/ 3608:
/*!**************************************************************************!*\
  !*** ./src/app/resolvers/subjects-resolvers/subjects-filter.resolver.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   subjectsFilterResolver: () => (/* binding */ subjectsFilterResolver)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 7178);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

const subjectsFilterResolver = (route, state) => {
  return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.pick)(route.queryParams, ['socialReason', 'telephoneNumber', 'CFPIVA']);
};

/***/ }),

/***/ 1792:
/*!*******************************************************************!*\
  !*** ./src/app/resolvers/subjects-resolvers/subjects.resolver.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   subjectsResolver: () => (/* binding */ subjectsResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 7178);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_app_services_subjects_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/subjects.service */ 1239);



const subjectsResolver = (route, state) => {
  const subjectsSrv = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(src_app_services_subjects_service__WEBPACK_IMPORTED_MODULE_1__.SubjectsService);
  const filters = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.pick)(route.queryParams, ['socialReason', 'telephoneNumber', 'CFPIVA']);
  subjectsSrv.list(filters);
};

/***/ }),

/***/ 7014:
/*!********************************************************************!*\
  !*** ./src/app/resolvers/users-resolvers/users-filter.resolver.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   usersFilterResolver: () => (/* binding */ usersFilterResolver)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 7178);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

const usersFilterResolver = (route, state) => {
  console.log("Pick users filters");
  return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.pick)(route.queryParams, ['username', 'installationId']);
};

/***/ }),

/***/ 6241:
/*!*************************************************************!*\
  !*** ./src/app/resolvers/users-resolvers/users.resolver.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   usersResolver: () => (/* binding */ usersResolver)
/* harmony export */ });
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/users.service */ 6346);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ 7178);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);



const usersResolver = (route, state) => {
  console.log("Change filters");
  const usersSrv = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_services_users_service__WEBPACK_IMPORTED_MODULE_0__.UsersService);
  const filters = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.pick)(route.queryParams, ['username', 'installationId']);
  usersSrv.list(filters);
};

/***/ }),

/***/ 2333:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 3738);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 3252);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 8540);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_utils_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/utils/global */ 5814);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jwt.service */ 61);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6575);









class AuthService {
  constructor(jwtSrv, http, router, location) {
    this.jwtSrv = jwtSrv;
    this.http = http;
    this.router = router;
    this.location = location;
    this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    this._currentUser$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(null);
    this.currentUser$ = this._currentUser$.asObservable();
  }
  isLoggedIn() {
    return this.jwtSrv.hasToken();
  }
  login(username, password) {
    return this.http.post(`${this.url}/api/auth/login`, {
      username,
      password
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)(res => this.jwtSrv.setToken(res.token)), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)(res => this._currentUser$.next(res.user)), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(res => res.user));
  }
  changePassword(oldPassword, newPassword, repeatPassword) {
    return this.http.patch(`${this.url}/api/user/update/change-password`, {
      oldPassword,
      newPassword,
      repeatPassword
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(res => res.message));
  }
  logout() {
    this.lastAccess("offline");
    this.jwtSrv.removeToken();
    this._currentUser$.next(null);
    this.router.navigate(['/login']);
  }
  error(err) {
    this.logout();
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(err);
  }
  fetchUser() {
    return this.http.get(`${this.url}/api/user/me`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)(res => this._currentUser$.next(res)), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)(res => this.lastAccess("online")), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.catchError)(err => this.error(err)));
  }
  getUser() {
    return this._currentUser$.value;
  }
  isAdmin() {
    return this.currentUser$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)(res => {
      if (res?.accessLevel >= src_utils_global__WEBPACK_IMPORTED_MODULE_2__.admin) return true;
      return false;
    }));
  }
  lastAccess(status) {
    let obj = {};
    if (status === "offline") {
      const now = moment__WEBPACK_IMPORTED_MODULE_1__();
      obj["date"] = now.format("YYYY-MM-DD HH:mm:ss");
    }
    ;
    this.http.patch(`${this.url}/api/user/update/last-access`, obj).subscribe();
  }
  static #_ = this.ɵfac = function AuthService_Factory(t) {
    return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_jwt_service__WEBPACK_IMPORTED_MODULE_3__.JwtService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.Location));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
    token: AuthService,
    factory: AuthService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 1573:
/*!*******************************************!*\
  !*** ./src/app/services/cards.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardsService: () => (/* binding */ CardsService)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 7178);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5400);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 3839);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 3252);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 1891);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 3738);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 4860);





class CardsService {
  constructor(http) {
    this.http = http;
    this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl;
    this._filters$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
    this.filters$ = this._filters$.asObservable();
    this._requestUpdate$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.ReplaySubject();
    this._actions$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject("filter");
    this.actions$ = this._actions$.asObservable();
    this.cards$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.combineLatest)([this._requestUpdate$, this.filters$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(err);
      return [];
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.switchMap)(([_, filters]) => {
      const q = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omitBy)(filters, lodash__WEBPACK_IMPORTED_MODULE_0__.isNil);
      return this.http.get(`${this.url}/api/card/list`, {
        params: q
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)([])));
    }));
    this._requestUpdate$.next();
  }
  list(filters) {
    this._filters$.next(filters);
    this._actions$.next("filter");
  }
  edit(id, card) {
    return this.http.patch(`${this.url}/api/card/${id}`, card).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.tap)(res => this._requestUpdate$.next()));
  }
  static #_ = this.ɵfac = function CardsService_Factory(t) {
    return new (t || CardsService)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({
    token: CardsService,
    factory: CardsService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 2090:
/*!********************************************!*\
  !*** ./src/app/services/events.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventsService: () => (/* binding */ EventsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5400);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 3839);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 3252);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 1891);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 3738);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 7178);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 4860);





class EventsService {
  constructor(http) {
    this.http = http;
    this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl;
    this._filters$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
    this.filters$ = this._filters$.asObservable();
    this._requestUpdate$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.ReplaySubject();
    this._actions$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject("filter");
    this.actions$ = this._actions$.asObservable();
    this.events$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.combineLatest)([this._requestUpdate$, this.filters$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(err);
      return [];
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.switchMap)(([_, filters]) => {
      const q = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omitBy)(filters, lodash__WEBPACK_IMPORTED_MODULE_0__.isNil);
      return this.http.get(`${this.url}/api/event/list`, {
        params: q
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)([])));
    }));
    this._requestUpdate$.next();
  }
  list(filters) {
    this._filters$.next(filters);
    this._actions$.next("filter");
  }
  exportList(ext) {
    const q = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omitBy)(this._filters$.value, lodash__WEBPACK_IMPORTED_MODULE_0__.isNil);
    return this.http.get(`${this.url}/api/event/export-list/${ext}`, {
      params: q,
      responseType: 'blob'
    }).subscribe(blob => {
      var blob = new Blob([blob], {
        type: `application/${ext}`
      });
      var blobURL = URL.createObjectURL(blob);
      if (ext === "pdf") {
        window.open(blobURL, "sss");
      } else {
        let a = document.createElement('a');
        document.body.appendChild(a);
        a.setAttribute('style', 'display: none');
        a.href = blobURL;
        let date = new Date().toLocaleDateString();
        let time = new Date().toLocaleTimeString();
        a.download = `pesate-${date}-${time}.${ext}`;
        a.click();
        window.URL.revokeObjectURL(blobURL);
        a.remove();
      }
    });
  }
  delete(id) {
    return this.http.delete(`${this.url}/api/event/${id}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.tap)(res => this._requestUpdate$.next()), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.tap)(res => this._actions$.next("delete")));
  }
  static #_ = this.ɵfac = function EventsService_Factory(t) {
    return new (t || EventsService)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({
    token: EventsService,
    factory: EventsService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 5333:
/*!***************************************************!*\
  !*** ./src/app/services/installations.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InstallationsService: () => (/* binding */ InstallationsService)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 7178);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5400);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 3839);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 3252);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 1891);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 3738);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 4860);





class InstallationsService {
  constructor(http) {
    this.http = http;
    this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl;
    this._filters$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
    this.filters$ = this._filters$.asObservable();
    this._requestUpdate$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.ReplaySubject();
    this._actions$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject("filter");
    this.actions$ = this._actions$.asObservable();
    this.installations$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.combineLatest)([this._requestUpdate$, this.filters$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(err);
      return [];
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.switchMap)(([_, filters]) => {
      const q = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omitBy)(filters, lodash__WEBPACK_IMPORTED_MODULE_0__.isNil);
      return this.http.get(`${this.url}/api/installation/list`, {
        params: q
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)([])));
    }));
    this._requestUpdate$.next();
  }
  list(filters) {
    this._filters$.next(filters);
    this._actions$.next("filter");
  }
  assigned() {
    return this.http.get(`${this.url}/api/installation/assigned`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.tap)(res => this._requestUpdate$.next()));
  }
  delete(id) {
    return this.http.delete(`${this.url}/api/installation/${id}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.tap)(res => this._requestUpdate$.next()), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.tap)(res => this._actions$.next("delete")));
  }
  add(installationCode, description, imei) {
    return this.http.post(`${this.url}/api/installation/add-installation`, {
      installationCode,
      description,
      imei
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.tap)(res => {
      this._filters$.next(this._filters$.value);
      this._requestUpdate$.next();
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.tap)(res => this._actions$.next("add")));
  }
  edit(id, installation) {
    const data = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omitBy)(installation, lodash__WEBPACK_IMPORTED_MODULE_0__.isNil);
    return this.http.patch(`${this.url}/api/installation/${id}`, data).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.tap)(res => {
      this._filters$.next(this._filters$.value);
      this._requestUpdate$.next();
    }));
  }
  static #_ = this.ɵfac = function InstallationsService_Factory(t) {
    return new (t || InstallationsService)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({
    token: InstallationsService,
    factory: InstallationsService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 61:
/*!*****************************************!*\
  !*** ./src/app/services/jwt.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JwtService: () => (/* binding */ JwtService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class JwtService {
  hasToken() {
    return !!this.getToken();
  }
  getToken() {
    return localStorage.getItem('authToken');
  }
  setToken(token) {
    localStorage.setItem('authToken', token);
  }
  removeToken() {
    localStorage.removeItem('authToken');
  }
  static #_ = this.ɵfac = function JwtService_Factory(t) {
    return new (t || JwtService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: JwtService,
    factory: JwtService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 1244:
/*!***********************************************!*\
  !*** ./src/app/services/materials.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MaterialsService: () => (/* binding */ MaterialsService)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 7178);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5400);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 3839);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 3252);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 1891);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 3738);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 4860);





class MaterialsService {
  constructor(http) {
    this.http = http;
    this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl;
    this._filters$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
    this.filters$ = this._filters$.asObservable();
    this._requestUpdate$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.ReplaySubject();
    this._actions$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject("filter");
    this.actions$ = this._actions$.asObservable();
    this.materials$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.combineLatest)([this._requestUpdate$, this.filters$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(err);
      return [];
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.switchMap)(([_, filters]) => {
      const q = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omitBy)(filters, lodash__WEBPACK_IMPORTED_MODULE_0__.isNil);
      return this.http.get(`${this.url}/api/material/list`, {
        params: q
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)([])));
    }));
    this._requestUpdate$.next();
  }
  list(filters) {
    this._filters$.next(filters);
    this._actions$.next("filter");
  }
  delete(id) {
    return this.http.delete(`${this.url}/api/material/${id}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.tap)(res => this._requestUpdate$.next()), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.tap)(res => this._actions$.next("delete")));
  }
  add(material) {
    const data = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omitBy)(material, lodash__WEBPACK_IMPORTED_MODULE_0__.isNil);
    return this.http.post(`${this.url}/api/material/add-material`, data).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.tap)(res => this._requestUpdate$.next()), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.tap)(res => this._actions$.next("add")));
  }
  edit(id, material) {
    if (material.description === null) {
      delete material.description;
    }
    return this.http.patch(`${this.url}/api/material/${id}`, material).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.tap)(res => this._requestUpdate$.next()), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.tap)(res => this._actions$.next("change")));
  }
  static #_ = this.ɵfac = function MaterialsService_Factory(t) {
    return new (t || MaterialsService)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({
    token: MaterialsService,
    factory: MaterialsService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 7762:
/*!************************************************!*\
  !*** ./src/app/services/navigation.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavigationService: () => (/* binding */ NavigationService)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);




class NavigationService {
  constructor(router) {
    this.router = router;
    this.history = "";
    this._current$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd) {
        this.history = event.urlAfterRedirects;
        this._current$.next(event.url);
        localStorage.setItem("lastPage", this.history);
      }
    });
  }
  current() {
    return this._current$.value;
  }
  isPageWithoutSideBar() {
    return this.current() === '/login' || this.current() === '/' || this.current() === '/404';
  }
  back() {
    const lastPage = localStorage.getItem("lastPage");
    if (lastPage) {
      this.router.navigateByUrl(lastPage);
    } else {
      this.router.navigateByUrl("/events");
    }
  }
  static #_ = this.ɵfac = function NavigationService_Factory(t) {
    return new (t || NavigationService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: NavigationService,
    factory: NavigationService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 9176:
/*!***********************************************!*\
  !*** ./src/app/services/snackbars.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SnackbarsService: () => (/* binding */ SnackbarsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);


class SnackbarsService {
  constructor(snackbar) {
    this.snackbar = snackbar;
  }
  openSnackBar(message, color) {
    this.snackbar.open(message, "Chiudi", {
      duration: 3000,
      panelClass: [color]
    });
  }
  static #_ = this.ɵfac = function SnackbarsService_Factory(t) {
    return new (t || SnackbarsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.MatSnackBar));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: SnackbarsService,
    factory: SnackbarsService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 1239:
/*!**********************************************!*\
  !*** ./src/app/services/subjects.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubjectsService: () => (/* binding */ SubjectsService)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 7178);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5400);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 3839);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 3252);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 1891);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 3738);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 4860);





class SubjectsService {
  constructor(http) {
    this.http = http;
    this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl;
    this._filters$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
    this.filters$ = this._filters$.asObservable();
    this._requestUpdate$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.ReplaySubject();
    this._actions$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject("filter");
    this.actions$ = this._actions$.asObservable();
    this.subjects$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.combineLatest)([this._requestUpdate$, this.filters$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(err);
      return [];
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.switchMap)(([_, filters]) => {
      const q = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omitBy)(filters, lodash__WEBPACK_IMPORTED_MODULE_0__.isNil);
      return this.http.get(`${this.url}/api/subject/list`, {
        params: q
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)([])));
    }));
    this._requestUpdate$.next();
  }
  list(filters) {
    this._filters$.next(filters);
    this._actions$.next("filter");
  }
  delete(id) {
    return this.http.delete(`${this.url}/api/subject/${id}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.tap)(res => this._requestUpdate$.next()), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.tap)(res => this._actions$.next("delete")));
  }
  add(subject) {
    const data = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omitBy)(subject, lodash__WEBPACK_IMPORTED_MODULE_0__.isNil);
    return this.http.post(`${this.url}/api/subject/add-subject`, data).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.tap)(res => this._requestUpdate$.next()), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.tap)(res => this._actions$.next("add")));
  }
  edit(id, subject) {
    if (subject.socialReason === null) {
      delete subject.socialReason;
    }
    return this.http.patch(`${this.url}/api/subject/${id}`, subject).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.tap)(res => this._requestUpdate$.next()), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.tap)(res => this._actions$.next("change")));
  }
  static #_ = this.ɵfac = function SubjectsService_Factory(t) {
    return new (t || SubjectsService)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({
    token: SubjectsService,
    factory: SubjectsService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 6346:
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsersService: () => (/* binding */ UsersService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 5400);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 3839);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 3252);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 1891);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 3738);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 7178);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var src_utils_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/utils/global */ 5814);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 4860);






class UsersService {
  constructor(http) {
    this.http = http;
    this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl;
    this._filters$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
    this.filters$ = this._filters$.asObservable();
    this._requestUpdate$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.ReplaySubject();
    this._actions$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject("filter");
    this.actions$ = this._actions$.asObservable();
    this.users$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)([this._requestUpdate$, this.filters$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(err => {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(err);
      return [];
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.switchMap)(([_, filters]) => {
      const q = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omitBy)(filters, lodash__WEBPACK_IMPORTED_MODULE_0__.isNil);
      return this.http.get(`${this.url}/api/user/list`, {
        params: q
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)([])));
    }));
    this._requestUpdate$.next();
  }
  list(filters) {
    this._filters$.next(filters);
    this._actions$.next("filter");
  }
  delete(username) {
    return this.http.delete(`${this.url}/api/user/${username}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.tap)(res => this._requestUpdate$.next()), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.tap)(res => this._actions$.next("delete")));
  }
  disable(username, able) {
    return this.http.patch(`${this.url}/api/user/${username}`, {
      able
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.tap)(res => this._requestUpdate$.next()), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.tap)(res => this._actions$.next("change")));
  }
  add(username, password, accessLevel, idInstallation) {
    return this.http.post(`${this.url}/api/auth/signin`, {
      username,
      password,
      accessLevel,
      idInstallation
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.tap)(res => this._requestUpdate$.next()), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.tap)(res => this._actions$.next("add")));
  }
  edit(user, iuser) {
    const data = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omitBy)(iuser, lodash__WEBPACK_IMPORTED_MODULE_0__.isNil);
    if (data["accessLevel"] >= src_utils_global__WEBPACK_IMPORTED_MODULE_2__.admin) data["installationId"] = null;
    return this.http.patch(`${this.url}/api/user/${user}`, data).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.tap)(res => this._requestUpdate$.next()), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.tap)(res => this._actions$.next("change")));
  }
  static #_ = this.ɵfac = function UsersService_Factory(t) {
    return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjectable"]({
    token: UsersService,
    factory: UsersService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  apiUrl: 'http://localhost:3000'
};

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 5814:
/*!*****************************!*\
  !*** ./src/utils/global.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   admin: () => (/* binding */ admin),
/* harmony export */   superAdmin: () => (/* binding */ superAdmin)
/* harmony export */ });
const admin = 2;
const superAdmin = 3;

/***/ }),

/***/ 6097:
/*!********************************!*\
  !*** ./src/utils/has-value.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasValueInOptionalFields: () => (/* binding */ hasValueInOptionalFields)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 8849);

function hasValueInOptionalFields(form) {
  for (const controlName in form.controls) {
    const control = form.controls[controlName];
    if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroup) {
      // Se il controllo è un gruppo (ad esempio, un gruppo di campi opzionali), chiamiamo ricorsivamente la funzione.
      if (hasValueInOptionalFields(control)) {
        return true;
      }
    } else {
      // Se il controllo è un campo singolo, verifichiamo se ha un valore.
      if (control.value !== null && control.value !== undefined && control.value !== '') {
        return true;
      }
    }
  }
  return false;
}

/***/ }),

/***/ 6700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 5528,
	"./af.js": 5528,
	"./ar": 1036,
	"./ar-dz": 7579,
	"./ar-dz.js": 7579,
	"./ar-kw": 9588,
	"./ar-kw.js": 9588,
	"./ar-ly": 1650,
	"./ar-ly.js": 1650,
	"./ar-ma": 3258,
	"./ar-ma.js": 3258,
	"./ar-sa": 4085,
	"./ar-sa.js": 4085,
	"./ar-tn": 287,
	"./ar-tn.js": 287,
	"./ar.js": 1036,
	"./az": 9757,
	"./az.js": 9757,
	"./be": 9620,
	"./be.js": 9620,
	"./bg": 1139,
	"./bg.js": 1139,
	"./bm": 4042,
	"./bm.js": 4042,
	"./bn": 9641,
	"./bn-bd": 9126,
	"./bn-bd.js": 9126,
	"./bn.js": 9641,
	"./bo": 494,
	"./bo.js": 494,
	"./br": 934,
	"./br.js": 934,
	"./bs": 6274,
	"./bs.js": 6274,
	"./ca": 5831,
	"./ca.js": 5831,
	"./cs": 2354,
	"./cs.js": 2354,
	"./cv": 9692,
	"./cv.js": 9692,
	"./cy": 8774,
	"./cy.js": 8774,
	"./da": 8955,
	"./da.js": 8955,
	"./de": 1557,
	"./de-at": 4954,
	"./de-at.js": 4954,
	"./de-ch": 1881,
	"./de-ch.js": 1881,
	"./de.js": 1557,
	"./dv": 6475,
	"./dv.js": 6475,
	"./el": 8877,
	"./el.js": 8877,
	"./en-au": 454,
	"./en-au.js": 454,
	"./en-ca": 7356,
	"./en-ca.js": 7356,
	"./en-gb": 456,
	"./en-gb.js": 456,
	"./en-ie": 8789,
	"./en-ie.js": 8789,
	"./en-il": 5471,
	"./en-il.js": 5471,
	"./en-in": 9664,
	"./en-in.js": 9664,
	"./en-nz": 7672,
	"./en-nz.js": 7672,
	"./en-sg": 805,
	"./en-sg.js": 805,
	"./eo": 7390,
	"./eo.js": 7390,
	"./es": 1564,
	"./es-do": 1473,
	"./es-do.js": 1473,
	"./es-mx": 2089,
	"./es-mx.js": 2089,
	"./es-us": 4156,
	"./es-us.js": 4156,
	"./es.js": 1564,
	"./et": 6513,
	"./et.js": 6513,
	"./eu": 7856,
	"./eu.js": 7856,
	"./fa": 2378,
	"./fa.js": 2378,
	"./fi": 2687,
	"./fi.js": 2687,
	"./fil": 32,
	"./fil.js": 32,
	"./fo": 6845,
	"./fo.js": 6845,
	"./fr": 8875,
	"./fr-ca": 6425,
	"./fr-ca.js": 6425,
	"./fr-ch": 1746,
	"./fr-ch.js": 1746,
	"./fr.js": 8875,
	"./fy": 7037,
	"./fy.js": 7037,
	"./ga": 1217,
	"./ga.js": 1217,
	"./gd": 7010,
	"./gd.js": 7010,
	"./gl": 1931,
	"./gl.js": 1931,
	"./gom-deva": 4488,
	"./gom-deva.js": 4488,
	"./gom-latn": 8032,
	"./gom-latn.js": 8032,
	"./gu": 4984,
	"./gu.js": 4984,
	"./he": 9090,
	"./he.js": 9090,
	"./hi": 2085,
	"./hi.js": 2085,
	"./hr": 8787,
	"./hr.js": 8787,
	"./hu": 2901,
	"./hu.js": 2901,
	"./hy-am": 9819,
	"./hy-am.js": 9819,
	"./id": 4074,
	"./id.js": 4074,
	"./is": 715,
	"./is.js": 715,
	"./it": 3838,
	"./it-ch": 7040,
	"./it-ch.js": 7040,
	"./it.js": 3838,
	"./ja": 3180,
	"./ja.js": 3180,
	"./jv": 4346,
	"./jv.js": 4346,
	"./ka": 5538,
	"./ka.js": 5538,
	"./kk": 9772,
	"./kk.js": 9772,
	"./km": 7905,
	"./km.js": 7905,
	"./kn": 9125,
	"./kn.js": 9125,
	"./ko": 9140,
	"./ko.js": 9140,
	"./ku": 6780,
	"./ku.js": 6780,
	"./ky": 3768,
	"./ky.js": 3768,
	"./lb": 4016,
	"./lb.js": 4016,
	"./lo": 3169,
	"./lo.js": 3169,
	"./lt": 2353,
	"./lt.js": 2353,
	"./lv": 3243,
	"./lv.js": 3243,
	"./me": 2338,
	"./me.js": 2338,
	"./mi": 5555,
	"./mi.js": 5555,
	"./mk": 5794,
	"./mk.js": 5794,
	"./ml": 3151,
	"./ml.js": 3151,
	"./mn": 6458,
	"./mn.js": 6458,
	"./mr": 9165,
	"./mr.js": 9165,
	"./ms": 8680,
	"./ms-my": 7477,
	"./ms-my.js": 7477,
	"./ms.js": 8680,
	"./mt": 9684,
	"./mt.js": 9684,
	"./my": 285,
	"./my.js": 285,
	"./nb": 5922,
	"./nb.js": 5922,
	"./ne": 9040,
	"./ne.js": 9040,
	"./nl": 5066,
	"./nl-be": 4460,
	"./nl-be.js": 4460,
	"./nl.js": 5066,
	"./nn": 3693,
	"./nn.js": 3693,
	"./oc-lnc": 8676,
	"./oc-lnc.js": 8676,
	"./pa-in": 2341,
	"./pa-in.js": 2341,
	"./pl": 7416,
	"./pl.js": 7416,
	"./pt": 4344,
	"./pt-br": 113,
	"./pt-br.js": 113,
	"./pt.js": 4344,
	"./ro": 2643,
	"./ro.js": 2643,
	"./ru": 1305,
	"./ru.js": 1305,
	"./sd": 6095,
	"./sd.js": 6095,
	"./se": 4486,
	"./se.js": 4486,
	"./si": 8742,
	"./si.js": 8742,
	"./sk": 6722,
	"./sk.js": 6722,
	"./sl": 3345,
	"./sl.js": 3345,
	"./sq": 2416,
	"./sq.js": 2416,
	"./sr": 9450,
	"./sr-cyrl": 501,
	"./sr-cyrl.js": 501,
	"./sr.js": 9450,
	"./ss": 2222,
	"./ss.js": 2222,
	"./sv": 9454,
	"./sv.js": 9454,
	"./sw": 9638,
	"./sw.js": 9638,
	"./ta": 6494,
	"./ta.js": 6494,
	"./te": 4435,
	"./te.js": 4435,
	"./tet": 5003,
	"./tet.js": 5003,
	"./tg": 3706,
	"./tg.js": 3706,
	"./th": 6025,
	"./th.js": 6025,
	"./tk": 9780,
	"./tk.js": 9780,
	"./tl-ph": 2068,
	"./tl-ph.js": 2068,
	"./tlh": 9167,
	"./tlh.js": 9167,
	"./tr": 2494,
	"./tr.js": 2494,
	"./tzl": 8707,
	"./tzl.js": 8707,
	"./tzm": 1296,
	"./tzm-latn": 4532,
	"./tzm-latn.js": 4532,
	"./tzm.js": 1296,
	"./ug-cn": 2086,
	"./ug-cn.js": 2086,
	"./uk": 5069,
	"./uk.js": 5069,
	"./ur": 9304,
	"./ur.js": 9304,
	"./uz": 5115,
	"./uz-latn": 7609,
	"./uz-latn.js": 7609,
	"./uz.js": 5115,
	"./vi": 4802,
	"./vi.js": 4802,
	"./x-pseudo": 5605,
	"./x-pseudo.js": 5605,
	"./yo": 8456,
	"./yo.js": 8456,
	"./zh-cn": 3272,
	"./zh-cn.js": 3272,
	"./zh-hk": 9402,
	"./zh-hk.js": 9402,
	"./zh-mo": 8101,
	"./zh-mo.js": 8101,
	"./zh-tw": 262,
	"./zh-tw.js": 262
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6700;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map