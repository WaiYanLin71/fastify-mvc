/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!************************************!*\
  !*** ./resources/js/user/index.js ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
document.querySelector('#sort').addEventListener('change', function (e) {
  if (e.target.value) {
    var url = new URL(window.location);
    url.searchParams.set('sort', e.target.value);
    window.location.href = url.href;
  }
});
document.addEventListener('alpine:init', function () {
  Alpine.data('modal', function () {
    return {
      open: false,
      id: null,
      loader: false,
      showModal: function showModal(id) {
        this.open = true;
        this.id = id;
      },
      deleteUser: function deleteUser() {
        var _this = this;
        this.loader = true;
        axios["delete"]("/v1/users/".concat(this.id)).then(function () {
          location.reload();
        })["catch"](function () {
          _this.loader = false;
        });
      }
    };
  });
});
/******/ })()
;