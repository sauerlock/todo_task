"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"831223a0c929\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzP2U0OTgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI4MzEyMjNhMGM5MjlcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/context/globalProvider.js":
/*!***************************************!*\
  !*** ./app/context/globalProvider.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GlobalContext: function() { return /* binding */ GlobalContext; },\n/* harmony export */   GlobalProvider: function() { return /* binding */ GlobalProvider; },\n/* harmony export */   GlobalUpdateContext: function() { return /* binding */ GlobalUpdateContext; },\n/* harmony export */   useGlobalState: function() { return /* binding */ useGlobalState; },\n/* harmony export */   useGlobalUpdate: function() { return /* binding */ useGlobalUpdate; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"(app-pages-browser)/./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./themes */ \"(app-pages-browser)/./app/context/themes.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @clerk/nextjs */ \"(app-pages-browser)/./node_modules/@clerk/clerk-react/dist/esm/index.js\");\n/* __next_internal_client_entry_do_not_use__ GlobalContext,GlobalUpdateContext,GlobalProvider,useGlobalState,useGlobalUpdate auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n// Create context for theme updating and the actual context.\n\n\n\n\n\nconst GlobalContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst GlobalUpdateContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst GlobalProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const { user } = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__.useUser)();\n    const [selectTheme, setSelectTheme] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const theme = _themes__WEBPACK_IMPORTED_MODULE_3__[\"default\"][selectTheme];\n    const [tasks, setTasks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const alltasks = async ()=>{\n        setIsLoading(true);\n        try {\n            const res = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"/api/tasks\", tasks);\n            setTasks(res.data);\n            setIsLoading(false);\n        } catch (error) {\n            console.log(error);\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].error(\"Something went wrong\");\n        }\n    };\n    const deleteTask = async (id)=>{\n        try {\n            const res = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].delete(\"/api/tasks/\".concat(id));\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].success(\"Task deleted\");\n            alltasks();\n        } catch (error) {\n            console.log(error);\n            total.error(\"Something went wrong\");\n        }\n    };\n    const completedTasks = tasks.filter((task)=>task.isCompleted === true);\n    console.log(completedTasks);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        if (user) alltasks();\n    }, [\n        user\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalContext.Provider, {\n        value: {\n            theme,\n            tasks,\n            deleteTask,\n            isLoading\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalUpdateContext.Provider, {\n            value: {},\n            children: children\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\appTodoList\\\\todo_task\\\\app\\\\context\\\\globalProvider.js\",\n            lineNumber: 56,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\appTodoList\\\\todo_task\\\\app\\\\context\\\\globalProvider.js\",\n        lineNumber: 50,\n        columnNumber: 9\n    }, undefined);\n};\n_s(GlobalProvider, \"/CtEm+SP0kd4o2j4+ITbOqz75uE=\", false, function() {\n    return [\n        _clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__.useUser\n    ];\n});\n_c = GlobalProvider;\nconst useGlobalState = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(GlobalContext);\n};\n_s1(useGlobalState, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nconst useGlobalUpdate = ()=>{\n    _s2();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(GlobalUpdateContext);\n};\n_s2(useGlobalUpdate, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"GlobalProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb250ZXh0L2dsb2JhbFByb3ZpZGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsNERBQTREO0FBQ087QUFDL0I7QUFDTjtBQUNKO0FBQ2M7QUFFakMsTUFBTVEsOEJBQWdCUCxvREFBYUEsR0FBRTtBQUNyQyxNQUFNUSxvQ0FBc0JSLG9EQUFhQSxHQUFFO0FBRTNDLE1BQU1TLGlCQUFpQjtRQUFDLEVBQUVDLFFBQVEsRUFBRTs7SUFDdkMsTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBR0wsc0RBQU9BO0lBQ3hCLE1BQU0sQ0FBQ00sYUFBYUMsZUFBZSxHQUFHWiwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNhLFdBQVdDLGFBQWEsR0FBR2QsK0NBQVFBLENBQUM7SUFDM0MsTUFBTWUsUUFBUVosK0NBQU0sQ0FBQ1EsWUFBWTtJQUNqQyxNQUFNLENBQUNLLE9BQU9DLFNBQVMsR0FBR2pCLCtDQUFRQSxDQUFDLEVBQUU7SUFFckMsTUFBTWtCLFdBQVc7UUFDYkosYUFBYTtRQUNiLElBQUk7WUFDQSxNQUFNSyxNQUFNLE1BQU1mLDZDQUFLQSxDQUFDZ0IsR0FBRyxDQUFDLGNBQWNKO1lBQzFDQyxTQUFTRSxJQUFJRSxJQUFJO1lBQ2pCUCxhQUFhO1FBQ2pCLEVBQUUsT0FBT1EsT0FBTztZQUNaQyxRQUFRQyxHQUFHLENBQUNGO1lBQ1pwQix1REFBS0EsQ0FBQ29CLEtBQUssQ0FBQztRQUNoQjtJQUNSO0lBR0ksTUFBTUcsYUFBYSxPQUFPQztRQUN0QixJQUFJO1lBQ0EsTUFBTVAsTUFBTSxNQUFNZiw2Q0FBS0EsQ0FBQ3VCLE1BQU0sQ0FBQyxjQUFpQixPQUFIRDtZQUM3Q3hCLHVEQUFLQSxDQUFDMEIsT0FBTyxDQUFDO1lBQ2RWO1FBQ0osRUFBRSxPQUFPSSxPQUFPO1lBQ1pDLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFDWk8sTUFBTVAsS0FBSyxDQUFDO1FBQ2hCO0lBQ0o7SUFFQSxNQUFNUSxpQkFBaUJkLE1BQU1lLE1BQU0sQ0FBQyxDQUFDQyxPQUFTQSxLQUFLQyxXQUFXLEtBQUs7SUFDbkVWLFFBQVFDLEdBQUcsQ0FBQ007SUFFWmhDLHNEQUFlLENBQUM7UUFDWixJQUFHWSxNQUFNUTtJQUNiLEdBQUc7UUFBQ1I7S0FBSztJQUNMLHFCQUNBLDhEQUFDSixjQUFjNkIsUUFBUTtRQUFDQyxPQUFPO1lBQzNCckI7WUFDQUM7WUFDQVM7WUFDQVo7UUFDSjtrQkFDSSw0RUFBQ04sb0JBQW9CNEIsUUFBUTtZQUFDQyxPQUFPLENBQUM7c0JBQ2pDM0I7Ozs7Ozs7Ozs7O0FBSWpCLEVBQUU7R0FqRFdEOztRQUNRSCxrREFBT0E7OztLQURmRztBQWtETixNQUFNNkIsaUJBQWlCOztJQUFNcEMsT0FBQUEsaURBQVVBLENBQUNLO0FBQWEsRUFBRTtJQUFqRCtCO0FBQ04sTUFBTUMsa0JBQWtCOztJQUFNckMsT0FBQUEsaURBQVVBLENBQUNNO0FBQW1CLEVBQUU7SUFBeEQrQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29udGV4dC9nbG9iYWxQcm92aWRlci5qcz9jZjQ4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG4vLyBDcmVhdGUgY29udGV4dCBmb3IgdGhlbWUgdXBkYXRpbmcgYW5kIHRoZSBhY3R1YWwgY29udGV4dC5cclxuaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB0b2FzdCBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XHJcbmltcG9ydCB0aGVtZXMgZnJvbSBcIi4vdGhlbWVzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlVXNlciB9IGZyb20gXCJAY2xlcmsvbmV4dGpzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgR2xvYmFsQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxyXG5leHBvcnQgY29uc3QgR2xvYmFsVXBkYXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxyXG4gICAgXHJcbmV4cG9ydCBjb25zdCBHbG9iYWxQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICAgIGNvbnN0IHsgdXNlciB9ID0gdXNlVXNlcigpO1xyXG4gICAgY29uc3QgW3NlbGVjdFRoZW1lLCBzZXRTZWxlY3RUaGVtZV0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCB0aGVtZSA9IHRoZW1lc1tzZWxlY3RUaGVtZV07XHJcbiAgICBjb25zdCBbdGFza3MsIHNldFRhc2tzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICBjb25zdCBhbGx0YXNrcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS90YXNrc1wiLCB0YXNrcyk7XHJcbiAgICAgICAgICAgIHNldFRhc2tzKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHRvYXN0LmVycm9yKFwiU29tZXRoaW5nIHdlbnQgd3JvbmdcIik7XHJcbiAgICAgICAgfVxyXG59O1xyXG5cclxuXHJcbiAgICBjb25zdCBkZWxldGVUYXNrID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZGVsZXRlKGAvYXBpL3Rhc2tzLyR7aWR9YCk7XHJcbiAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJUYXNrIGRlbGV0ZWRcIik7XHJcbiAgICAgICAgICAgIGFsbHRhc2tzKCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIHRvdGFsLmVycm9yKFwiU29tZXRoaW5nIHdlbnQgd3JvbmdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBjb21wbGV0ZWRUYXNrcyA9IHRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5pc0NvbXBsZXRlZCA9PT0gdHJ1ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhjb21wbGV0ZWRUYXNrcylcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKHVzZXIpIGFsbHRhc2tzKCk7XHJcbiAgICB9LCBbdXNlcl0pO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPEdsb2JhbENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tcclxuICAgICAgICAgICAgdGhlbWUsXHJcbiAgICAgICAgICAgIHRhc2tzLFxyXG4gICAgICAgICAgICBkZWxldGVUYXNrLFxyXG4gICAgICAgICAgICBpc0xvYWRpbmcsXHJcbiAgICAgICAgfX0gPlxyXG4gICAgICAgICAgICA8R2xvYmFsVXBkYXRlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e319PlxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8L0dsb2JhbFVwZGF0ZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgPC9HbG9iYWxDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKTtcclxufTtcclxuZXhwb3J0IGNvbnN0IHVzZUdsb2JhbFN0YXRlID0gKCkgPT4gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcclxuZXhwb3J0IGNvbnN0IHVzZUdsb2JhbFVwZGF0ZSA9ICgpID0+IHVzZUNvbnRleHQoR2xvYmFsVXBkYXRlQ29udGV4dCk7Il0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlQ29udGV4dCIsInRvYXN0IiwidGhlbWVzIiwiYXhpb3MiLCJ1c2VVc2VyIiwiR2xvYmFsQ29udGV4dCIsIkdsb2JhbFVwZGF0ZUNvbnRleHQiLCJHbG9iYWxQcm92aWRlciIsImNoaWxkcmVuIiwidXNlciIsInNlbGVjdFRoZW1lIiwic2V0U2VsZWN0VGhlbWUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJ0aGVtZSIsInRhc2tzIiwic2V0VGFza3MiLCJhbGx0YXNrcyIsInJlcyIsImdldCIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJkZWxldGVUYXNrIiwiaWQiLCJkZWxldGUiLCJzdWNjZXNzIiwidG90YWwiLCJjb21wbGV0ZWRUYXNrcyIsImZpbHRlciIsInRhc2siLCJpc0NvbXBsZXRlZCIsInVzZUVmZmVjdCIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VHbG9iYWxTdGF0ZSIsInVzZUdsb2JhbFVwZGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/context/globalProvider.js\n"));

/***/ })

});