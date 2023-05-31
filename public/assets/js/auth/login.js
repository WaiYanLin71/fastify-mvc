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
  !*** ./resources/js/auth/login.js ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
var email = document.querySelector('#email');
var password = document.querySelector('#password');
document.querySelector('#login-form').addEventListener('submit', function (e) {
  e.preventDefault();
  axios.post('/v1/auth/login', {
    email: email.value,
    password: password.value
  }).then(function () {
    location.href = '/v1/users';
  })["catch"](function () {
    alert('User name or password wrong');
  });
});
/******/ })()
;