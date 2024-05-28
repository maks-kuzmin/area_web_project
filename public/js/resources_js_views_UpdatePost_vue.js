"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_UpdatePost_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/UpdatePost.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/UpdatePost.vue?vue&type=script&lang=js& ***!
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
      title: '',
      body: '',
      loading: false,
      error: false
    };
  },
  mounted: function mounted() {
    this.getDataPost();
  },
  methods: {
    getDataPost: function getDataPost() {
      var _this = this;
      axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/posts/".concat(this.$route.params.id)).then(function (res) {
        _this.title = res.data.data.title;
        _this.body = res.data.data.body;
      })["catch"](function (e) {
        console.log(e);
      });
    },
    uploadPost: function uploadPost() {
      var _this2 = this;
      this.loading = true;
      this.error = false;
      console.log(this.title);
      console.log(this.body);
      axios__WEBPACK_IMPORTED_MODULE_0___default().patch("/api/posts/".concat(this.$route.params.id), {
        title: this.title,
        body: this.body
      }, {
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (res) {
        _this2.loading = false;
        if (res.data.success === true) {
          _this2.$router.push('/posts');
        }
      })["catch"](function (e) {
        _this2.loading = false;
        _this2.error = true;
        console.log(e);
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/views/UpdatePost.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/UpdatePost.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UpdatePost_vue_vue_type_template_id_f1f26a30_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UpdatePost.vue?vue&type=template&id=f1f26a30&scoped=true& */ "./resources/js/views/UpdatePost.vue?vue&type=template&id=f1f26a30&scoped=true&");
/* harmony import */ var _UpdatePost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UpdatePost.vue?vue&type=script&lang=js& */ "./resources/js/views/UpdatePost.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UpdatePost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UpdatePost_vue_vue_type_template_id_f1f26a30_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _UpdatePost_vue_vue_type_template_id_f1f26a30_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "f1f26a30",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/UpdatePost.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/UpdatePost.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/UpdatePost.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdatePost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UpdatePost.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/UpdatePost.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdatePost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/UpdatePost.vue?vue&type=template&id=f1f26a30&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/UpdatePost.vue?vue&type=template&id=f1f26a30&scoped=true& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdatePost_vue_vue_type_template_id_f1f26a30_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdatePost_vue_vue_type_template_id_f1f26a30_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdatePost_vue_vue_type_template_id_f1f26a30_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UpdatePost.vue?vue&type=template&id=f1f26a30&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/UpdatePost.vue?vue&type=template&id=f1f26a30&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/UpdatePost.vue?vue&type=template&id=f1f26a30&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/UpdatePost.vue?vue&type=template&id=f1f26a30&scoped=true& ***!
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
                value: _vm.title,
                expression: "title",
              },
            ],
            staticClass: "uk-input",
            attrs: { type: "text", placeholder: "Заголовок" },
            domProps: { value: _vm.title },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.title = $event.target.value
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
                value: _vm.body,
                expression: "body",
              },
            ],
            staticClass: "uk-textarea",
            attrs: { rows: "5", placeholder: "Содержимое" },
            domProps: { value: _vm.body },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.body = $event.target.value
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
                return _vm.uploadPost.apply(null, arguments)
              },
            },
          },
          [
            _vm.loading
              ? _c("div", { attrs: { "uk-spinner": "" } })
              : _c("span", [_vm._v("Сохранить")]),
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