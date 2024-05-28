"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_CreatePost_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/CreatePost.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/CreatePost.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "CreatePost",
  data: function data() {
    return {
      form: {
        title: '',
        body: ''
      },
      loading: false,
      error: false
    };
  },
  methods: {
    store: function store() {
      var _this = this;
      this.loading = true;
      this.error = false;
      axios__WEBPACK_IMPORTED_MODULE_0___default().post("/api/posts", this.form, {
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (res) {
        _this.loading = false;
        _this.error = false;
        if (res.data.success === true) {
          console.log('РАБОТАЕТ!');
          _this.$router.push('/posts');
        }
      })["catch"](function (e) {
        _this.loading = false;
        _this.error = true;
        console.log(e);
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/views/CreatePost.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/CreatePost.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CreatePost_vue_vue_type_template_id_ebb35fca_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreatePost.vue?vue&type=template&id=ebb35fca&scoped=true& */ "./resources/js/views/CreatePost.vue?vue&type=template&id=ebb35fca&scoped=true&");
/* harmony import */ var _CreatePost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreatePost.vue?vue&type=script&lang=js& */ "./resources/js/views/CreatePost.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CreatePost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CreatePost_vue_vue_type_template_id_ebb35fca_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _CreatePost_vue_vue_type_template_id_ebb35fca_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "ebb35fca",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/CreatePost.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/CreatePost.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/CreatePost.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreatePost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreatePost.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/CreatePost.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreatePost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/CreatePost.vue?vue&type=template&id=ebb35fca&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/CreatePost.vue?vue&type=template&id=ebb35fca&scoped=true& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreatePost_vue_vue_type_template_id_ebb35fca_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreatePost_vue_vue_type_template_id_ebb35fca_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreatePost_vue_vue_type_template_id_ebb35fca_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreatePost.vue?vue&type=template&id=ebb35fca&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/CreatePost.vue?vue&type=template&id=ebb35fca&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/CreatePost.vue?vue&type=template&id=ebb35fca&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/CreatePost.vue?vue&type=template&id=ebb35fca&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.error
      ? _c(
          "div",
          { staticClass: "uk-alert-danger", attrs: { "uk-alert": "" } },
          [
            _c("a", {
              staticClass: "uk-alert-close",
              attrs: { "uk-close": "" },
            }),
            _vm._v(" "),
            _c("p", [_vm._v("Проверьте правильность введенный полей")]),
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _c("form", { staticStyle: { "margin-bottom": "20px" } }, [
      _c("fieldset", { staticClass: "uk-fieldset" }, [
        _c("legend", { staticClass: "uk-legend" }, [
          _vm._v("Опубликовать пост"),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "uk-margin" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.title,
                expression: "form.title",
              },
            ],
            staticClass: "uk-input",
            attrs: { type: "text", placeholder: "Заголовок" },
            domProps: { value: _vm.form.title },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "title", $event.target.value)
              },
            },
          }),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "uk-margin" }, [
          _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.body,
                expression: "form.body",
              },
            ],
            staticClass: "uk-textarea",
            attrs: { rows: "5", placeholder: "Содержимое" },
            domProps: { value: _vm.form.body },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "body", $event.target.value)
              },
            },
          }),
        ]),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "uk-button uk-button-primary",
            on: {
              click: function ($event) {
                $event.preventDefault()
                return _vm.store.apply(null, arguments)
              },
            },
          },
          [
            _vm.loading
              ? _c("div", { attrs: { "uk-spinner": "" } })
              : _c("span", [_vm._v("Опубликовать")]),
          ]
        ),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);