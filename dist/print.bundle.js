/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/check_complete.js":
/*!*******************************!*\
  !*** ./src/check_complete.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ checkComplete)
/* harmony export */ });
function checkComplete(arr) {
  const checkboxes = document.querySelectorAll('.checkbox');
  for (let i = 0; i < arr.length; i += 1) {
    arr[i].completed = checkboxes[i].checked;
  }
  localStorage.setItem('toDoList', JSON.stringify(arr));
}

/***/ }),

/***/ "./src/remove.js":
/*!***********************!*\
  !*** ./src/remove.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ remove)
/* harmony export */ });
function remove(num, list) {
  list.splice(num, 1);
  localStorage.setItem('toDoList', JSON.stringify(list));
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/gen_html.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ genHTML)
/* harmony export */ });
/* harmony import */ var _check_complete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check_complete */ "./src/check_complete.js");
/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remove */ "./src/remove.js");



function genHTML(list, arr) {
  for (let i = 0; i < arr.length; i += 1) {
    const item = document.createElement('li');
    const descCont = document.createElement('div');
    const checkbox = document.createElement('input');
    const desc = document.createElement('label');
    const itemIcon = document.createElement('i');

    descCont.classList.add('description-container');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
      (0,_check_complete__WEBPACK_IMPORTED_MODULE_0__.default)(arr);
      list.innerHTML = '';
      genHTML(list, arr);
    });
    checkbox.id = `checkbox-${i}`;
    checkbox.classList.add('checkbox');
    checkbox.checked = arr[i].completed;
    desc.htmlFor = `checkbox-${i}`;
    desc.innerHTML = arr[i].description;
    if (checkbox.checked) {
      desc.classList.add('done');
    }
    itemIcon.classList.add('fas', 'fa-ellipsis-v', 'item-icon');

    itemIcon.addEventListener('click', () => {
      if (itemIcon.classList.contains('red')) {
        (0,_remove__WEBPACK_IMPORTED_MODULE_1__.default)(i, arr);
        arr.forEach((item) => {
          if (item.index > i) {
            item.index -= 1;
          }
        });
        localStorage.setItem('toDoList', JSON.stringify(arr));
        list.innerHTML = '';
        genHTML(list, arr);
      }
    });

    desc.addEventListener('click', () => {
      desc.setAttribute('contenteditable', 'true');
    });
    desc.addEventListener('click', (e) => {
      e.preventDefault();
    }, false);
    desc.addEventListener('focus', () => {
      desc.parentElement.parentElement.classList.add('bisque-bkg');
      desc.parentElement.nextElementSibling.classList.add('red');
      desc.parentElement.nextElementSibling.classList.replace('fa-ellipsis-v', 'fa-trash-alt');
    });
    desc.addEventListener('blur', () => {
      arr[i].description = desc.innerHTML;
      localStorage.setItem('toDoList', JSON.stringify(arr));
      setTimeout(() => {
        desc.parentElement.parentElement.classList.remove('bisque-bkg');
        desc.parentElement.nextElementSibling.classList.remove('red');
        desc.parentElement.nextElementSibling.classList.replace('fa-trash-alt', 'fa-ellipsis-v');
        desc.setAttribute('contenteditable', 'false');
      }, 150);
    });

    descCont.appendChild(checkbox);
    descCont.appendChild(desc);

    item.appendChild(descCont);
    item.appendChild(itemIcon);

    list.appendChild(item);
  }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBLGtCQUFrQixnQkFBZ0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDTmU7QUFDZjtBQUNBO0FBQ0E7Ozs7OztVQ0hBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTjZDO0FBQ2Y7O0FBRWY7QUFDZixrQkFBa0IsZ0JBQWdCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTSx3REFBYTtBQUNuQjtBQUNBO0FBQ0EsS0FBSztBQUNMLDhCQUE4QixFQUFFO0FBQ2hDO0FBQ0E7QUFDQSwrQkFBK0IsRUFBRTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLGdEQUFNO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jaGVja19jb21wbGV0ZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3JlbW92ZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9nZW5faHRtbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaGVja0NvbXBsZXRlKGFycikge1xuICBjb25zdCBjaGVja2JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrYm94Jyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgYXJyW2ldLmNvbXBsZXRlZCA9IGNoZWNrYm94ZXNbaV0uY2hlY2tlZDtcbiAgfVxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9Eb0xpc3QnLCBKU09OLnN0cmluZ2lmeShhcnIpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW1vdmUobnVtLCBsaXN0KSB7XG4gIGxpc3Quc3BsaWNlKG51bSwgMSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b0RvTGlzdCcsIEpTT04uc3RyaW5naWZ5KGxpc3QpKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjaGVja0NvbXBsZXRlIGZyb20gJy4vY2hlY2tfY29tcGxldGUnO1xuaW1wb3J0IHJlbW92ZSBmcm9tICcuL3JlbW92ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbkhUTUwobGlzdCwgYXJyKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgZGVzY0NvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgY29uc3QgaXRlbUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG5cbiAgICBkZXNjQ29udC5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbi1jb250YWluZXInKTtcbiAgICBjaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcbiAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjaGVja0NvbXBsZXRlKGFycik7XG4gICAgICBsaXN0LmlubmVySFRNTCA9ICcnO1xuICAgICAgZ2VuSFRNTChsaXN0LCBhcnIpO1xuICAgIH0pO1xuICAgIGNoZWNrYm94LmlkID0gYGNoZWNrYm94LSR7aX1gO1xuICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94Jyk7XG4gICAgY2hlY2tib3guY2hlY2tlZCA9IGFycltpXS5jb21wbGV0ZWQ7XG4gICAgZGVzYy5odG1sRm9yID0gYGNoZWNrYm94LSR7aX1gO1xuICAgIGRlc2MuaW5uZXJIVE1MID0gYXJyW2ldLmRlc2NyaXB0aW9uO1xuICAgIGlmIChjaGVja2JveC5jaGVja2VkKSB7XG4gICAgICBkZXNjLmNsYXNzTGlzdC5hZGQoJ2RvbmUnKTtcbiAgICB9XG4gICAgaXRlbUljb24uY2xhc3NMaXN0LmFkZCgnZmFzJywgJ2ZhLWVsbGlwc2lzLXYnLCAnaXRlbS1pY29uJyk7XG5cbiAgICBpdGVtSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmIChpdGVtSWNvbi5jbGFzc0xpc3QuY29udGFpbnMoJ3JlZCcpKSB7XG4gICAgICAgIHJlbW92ZShpLCBhcnIpO1xuICAgICAgICBhcnIuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgIGlmIChpdGVtLmluZGV4ID4gaSkge1xuICAgICAgICAgICAgaXRlbS5pbmRleCAtPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b0RvTGlzdCcsIEpTT04uc3RyaW5naWZ5KGFycikpO1xuICAgICAgICBsaXN0LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBnZW5IVE1MKGxpc3QsIGFycik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBkZXNjLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZGVzYy5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsICd0cnVlJyk7XG4gICAgfSk7XG4gICAgZGVzYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSwgZmFsc2UpO1xuICAgIGRlc2MuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoKSA9PiB7XG4gICAgICBkZXNjLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdiaXNxdWUtYmtnJyk7XG4gICAgICBkZXNjLnBhcmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ3JlZCcpO1xuICAgICAgZGVzYy5wYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVwbGFjZSgnZmEtZWxsaXBzaXMtdicsICdmYS10cmFzaC1hbHQnKTtcbiAgICB9KTtcbiAgICBkZXNjLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XG4gICAgICBhcnJbaV0uZGVzY3JpcHRpb24gPSBkZXNjLmlubmVySFRNTDtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b0RvTGlzdCcsIEpTT04uc3RyaW5naWZ5KGFycikpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGRlc2MucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Jpc3F1ZS1ia2cnKTtcbiAgICAgICAgZGVzYy5wYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKCdyZWQnKTtcbiAgICAgICAgZGVzYy5wYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVwbGFjZSgnZmEtdHJhc2gtYWx0JywgJ2ZhLWVsbGlwc2lzLXYnKTtcbiAgICAgICAgZGVzYy5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsICdmYWxzZScpO1xuICAgICAgfSwgMTUwKTtcbiAgICB9KTtcblxuICAgIGRlc2NDb250LmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICBkZXNjQ29udC5hcHBlbmRDaGlsZChkZXNjKTtcblxuICAgIGl0ZW0uYXBwZW5kQ2hpbGQoZGVzY0NvbnQpO1xuICAgIGl0ZW0uYXBwZW5kQ2hpbGQoaXRlbUljb24pO1xuXG4gICAgbGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==