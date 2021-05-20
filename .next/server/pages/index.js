(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 856:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Index; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/Content4.module.css
var Content4_module = __webpack_require__(924);
var Content4_module_default = /*#__PURE__*/__webpack_require__.n(Content4_module);
;// CONCATENATED MODULE: external "next/dynamic"
var dynamic_namespaceObject = require("next/dynamic");;
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_namespaceObject);
;// CONCATENATED MODULE: ./src/inner/k.jsx

const Comp = dynamic_default()(() => __webpack_require__.e(/* import() */ 676).then(__webpack_require__.bind(__webpack_require__, 676)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(676)],
    modules: ["../src/inner/k.jsx -> " + "../Content"]
  }
});
;// CONCATENATED MODULE: ./pages/index.jsx
var __jsx = (external_react_default()).createElement;



function Index() {
  const {
    0: s
  } = (0,external_react_.useState)(true);

  if (s) {
    return;

    __jsx((external_react_default()).Fragment, null, __jsx("div", {
      className: (Content4_module_default()).header
    }), __jsx(Comp, null));
  }

  return null;
}
const getServerSideProps = () => {
  return {
    props: {}
  };
};

/***/ }),

/***/ 924:
/***/ (function(module) {

// Exports
module.exports = {
	"header": "Content4_header__2Stz3",
	"container": "Content4_container__3b_k5",
	"textContent": "Content4_textContent__3xW5U"
};


/***/ }),

/***/ 297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(856));
module.exports = __webpack_exports__;

})();