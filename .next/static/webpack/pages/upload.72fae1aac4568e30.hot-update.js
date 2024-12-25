"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/upload",{

/***/ "./components/UploadForm.tsx":
/*!***********************************!*\
  !*** ./components/UploadForm.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UploadForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction UploadForm() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        title: \"\",\n        category: \"illustration\",\n        subcategory: \"\",\n        twitterHandle: \"\",\n        twitterId: \"\",\n        twitterUrl: \"\",\n        mcol: \"\",\n        description: \"\",\n        twitterLink: \"\"\n    });\n    const [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"); // Add status message\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        if (!file) {\n            setStatus(\"Please select a file\");\n            return;\n        }\n        setLoading(true);\n        setStatus(\"Uploading...\");\n        try {\n            const formDataToSend = new FormData();\n            formDataToSend.append(\"file\", file); // Make sure field name is 'file'\n            // Append other form fields\n            Object.entries(formData).forEach((param)=>{\n                let [key, value] = param;\n                if (value) formDataToSend.append(key, value);\n            });\n            const response = await fetch(\"/api/upload\", {\n                method: \"POST\",\n                body: formDataToSend\n            });\n            const result = await response.json();\n            console.log(\"Upload response:\", result);\n            if (response.ok) {\n                setStatus(\"Upload successful!\");\n                // Optional: Clear form\n                setFile(null);\n                setFormData({\n                    title: \"\",\n                    category: \"illustration\",\n                    subcategory: \"\",\n                    twitterHandle: \"\",\n                    twitterId: \"\",\n                    mcol: \"\",\n                    twitterUrl: \"\",\n                    description: \"\",\n                    twitterLink: \"\"\n                });\n            } else {\n                setStatus(\"Upload failed: \".concat(result.message));\n            }\n        } catch (error) {\n            setStatus(\"Upload failed: \" + error.message);\n        } finally{\n            setLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        className: \"max-w-2xl mx-auto p-4 bg-white rounded-lg shadow\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"space-y-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"file\",\n                    accept: \"image/*\",\n                    onChange: (e)=>{\n                        var _e_target_files;\n                        return setFile(((_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0]) || null);\n                    },\n                    className: \"w-full p-2 border rounded\",\n                    required: true\n                }, void 0, false, {\n                    fileName: \"/workspaces/MAINUP/components/UploadForm.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"Title\",\n                    value: formData.title,\n                    onChange: (e)=>setFormData({\n                            ...formData,\n                            title: e.target.value\n                        }),\n                    className: \"w-full p-2 border rounded\",\n                    required: true\n                }, void 0, false, {\n                    fileName: \"/workspaces/MAINUP/components/UploadForm.tsx\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                    value: formData.category,\n                    onChange: (e)=>setFormData({\n                            ...formData,\n                            category: e.target.value\n                        }),\n                    className: \"w-full p-2 border rounded\",\n                    required: true,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"landscape\",\n                            children: \"Illustration\"\n                        }, void 0, false, {\n                            fileName: \"/workspaces/MAINUP/components/UploadForm.tsx\",\n                            lineNumber: 98,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"fanart\",\n                            children: \"FanArt\"\n                        }, void 0, false, {\n                            fileName: \"/workspaces/MAINUP/components/UploadForm.tsx\",\n                            lineNumber: 99,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"occhara\",\n                            children: \"OC\"\n                        }, void 0, false, {\n                            fileName: \"/workspaces/MAINUP/components/UploadForm.tsx\",\n                            lineNumber: 100,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"comm\",\n                            children: \"Commission\"\n                        }, void 0, false, {\n                            fileName: \"/workspaces/MAINUP/components/UploadForm.tsx\",\n                            lineNumber: 101,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"male\",\n                            children: \"Male\"\n                        }, void 0, false, {\n                            fileName: \"/workspaces/MAINUP/components/UploadForm.tsx\",\n                            lineNumber: 102,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"vtube\",\n                            children: \"Vtubers\"\n                        }, void 0, false, {\n                            fileName: \"/workspaces/MAINUP/components/UploadForm.tsx\",\n                            lineNumber: 103,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspaces/MAINUP/components/UploadForm.tsx\",\n                    lineNumber: 92,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"Subcategory (e.g., FanArt 2024)\",\n                    value: formData.subcategory,\n                    onChange: (e)=>setFormData({\n                            ...formData,\n                            subcategory: e.target.value\n                        }),\n                    className: \"w-full p-2 border rounded\"\n                }, void 0, false, {\n                    fileName: \"/workspaces/MAINUP/components/UploadForm.tsx\",\n                    lineNumber: 106,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"Twitter Handle (without @)\",\n                    value: formData.twitterHandle,\n                    onChange: (e)=>setFormData({\n                            ...formData,\n                            twitterHandle: e.target.value\n                        }),\n                    className: \"w-full p-2 border rounded\",\n                    required: true\n                }, void 0, false, {\n                    fileName: \"/workspaces/MAINUP/components/UploadForm.tsx\",\n                    lineNumber: 114,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"Twitter Post ID\",\n                    value: formData.twitterId,\n                    onChange: (e)=>setFormData({\n                            ...formData,\n                            twitterId: e.target.value\n                        }),\n                    className: \"w-full p-2 border rounded\",\n                    required: true\n                }, void 0, false, {\n                    fileName: \"/workspaces/MAINUP/components/UploadForm.tsx\",\n                    lineNumber: 123,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"url\",\n                    placeholder: \"Twitter Link\",\n                    value: formData.twitterLink,\n                    onChange: (e)=>setFormData({\n                            ...formData,\n                            twitterLink: e.target.value\n                        }),\n                    className: \"w-full p-2 border rounded\"\n                }, void 0, false, {\n                    fileName: \"/workspaces/MAINUP/components/UploadForm.tsx\",\n                    lineNumber: 132,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                    placeholder: \"Description\",\n                    value: formData.description,\n                    onChange: (e)=>setFormData({\n                            ...formData,\n                            description: e.target.value\n                        }),\n                    className: \"w-full p-2 border rounded\",\n                    rows: 4\n                }, void 0, false, {\n                    fileName: \"/workspaces/MAINUP/components/UploadForm.tsx\",\n                    lineNumber: 140,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    disabled: loading,\n                    className: \"w-full bg-[#1DA1F2] text-white p-2 rounded hover:bg-[#1a91da] disabled:opacity-50\",\n                    children: loading ? \"Uploading...\" : \"Upload Work\"\n                }, void 0, false, {\n                    fileName: \"/workspaces/MAINUP/components/UploadForm.tsx\",\n                    lineNumber: 148,\n                    columnNumber: 9\n                }, this),\n                status && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-center mt-4\",\n                    children: status\n                }, void 0, false, {\n                    fileName: \"/workspaces/MAINUP/components/UploadForm.tsx\",\n                    lineNumber: 155,\n                    columnNumber: 20\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/workspaces/MAINUP/components/UploadForm.tsx\",\n            lineNumber: 75,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/workspaces/MAINUP/components/UploadForm.tsx\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, this);\n}\n_s(UploadForm, \"IPEmwrjwBddZV1msCFT891zP4Ag=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = UploadForm;\nvar _c;\n$RefreshReg$(_c, \"UploadForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUU2QixNQUFNLENBQUNwQixLQUFLO3dCQUFBO29CQUN0RWMsV0FBVTs7Ozs7OzhCQUdaLDhEQUFDWTtvQkFDQ0gsYUFBWTtvQkFDWnZCLE9BQU8zQixTQUFTUyxXQUFXO29CQUMzQnFDLFVBQVUsQ0FBQzVCLElBQU1qQixZQUFZOzRCQUFDLEdBQUdELFFBQVE7NEJBQUVTLGFBQWFTLEVBQUU2QixNQUFNLENBQUNwQixLQUFLO3dCQUFBO29CQUN0RWMsV0FBVTtvQkFDVmEsTUFBTTs7Ozs7OzhCQUdSLDhEQUFDQztvQkFDQ1gsTUFBSztvQkFDTFksVUFBVTNDO29CQUNWNEIsV0FBVTs4QkFFVDVCLFVBQVUsaUJBQWlCOzs7Ozs7Z0JBRTdCRSx3QkFBVSw4REFBQzBDO29CQUFFaEIsV0FBVTs4QkFBb0IxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJcEQ7R0ExSndCakI7O1FBQ1BILGtEQUFTQTs7O0tBREZHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVXBsb2FkRm9ybS50c3g/NTc4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdHlwZSB7IFdvcmsgfSBmcm9tICcuLi90eXBlcy93b3JrJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXBsb2FkRm9ybSgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGU8T21pdDxXb3JrLCAnaWQnIHwgJ2ltYWdlU3JjJyB8ICdkYXRlJz4+KHtcbiAgICB0aXRsZTogJycsXG4gICAgY2F0ZWdvcnk6ICdpbGx1c3RyYXRpb24nLCAvLyBEZWZhdWx0IGNhdGVnb3J5IG1hdGNoaW5nIGV4aXN0aW5nIHdvcmtzXG4gICAgc3ViY2F0ZWdvcnk6ICcnLFxuICAgIHR3aXR0ZXJIYW5kbGU6ICcnLFxuICAgIHR3aXR0ZXJJZDogJycsXG4gICAgdHdpdHRlclVybDogJycsXG4gICAgbWNvbDogJycsXG4gICAgZGVzY3JpcHRpb246ICcnLFxuICAgIHR3aXR0ZXJMaW5rOiAnJ1xuICB9KTtcbiAgY29uc3QgW2ZpbGUsIHNldEZpbGVdID0gdXNlU3RhdGU8RmlsZSB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZSgnJyk7IC8vIEFkZCBzdGF0dXMgbWVzc2FnZVxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlOiBSZWFjdC5Gb3JtRXZlbnQpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKCFmaWxlKSB7XG4gICAgICBzZXRTdGF0dXMoJ1BsZWFzZSBzZWxlY3QgYSBmaWxlJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgc2V0U3RhdHVzKCdVcGxvYWRpbmcuLi4nKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBmb3JtRGF0YVRvU2VuZCA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgZm9ybURhdGFUb1NlbmQuYXBwZW5kKCdmaWxlJywgZmlsZSk7IC8vIE1ha2Ugc3VyZSBmaWVsZCBuYW1lIGlzICdmaWxlJ1xuICAgICAgXG4gICAgICAvLyBBcHBlbmQgb3RoZXIgZm9ybSBmaWVsZHNcbiAgICAgIE9iamVjdC5lbnRyaWVzKGZvcm1EYXRhKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgaWYgKHZhbHVlKSBmb3JtRGF0YVRvU2VuZC5hcHBlbmQoa2V5LCB2YWx1ZSk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS91cGxvYWQnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBmb3JtRGF0YVRvU2VuZCxcbiAgICAgIH0pO1xuICAgICAgXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBjb25zb2xlLmxvZygnVXBsb2FkIHJlc3BvbnNlOicsIHJlc3VsdCk7XG4gICAgICBcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICBzZXRTdGF0dXMoJ1VwbG9hZCBzdWNjZXNzZnVsIScpO1xuICAgICAgICAvLyBPcHRpb25hbDogQ2xlYXIgZm9ybVxuICAgICAgICBzZXRGaWxlKG51bGwpO1xuICAgICAgICBzZXRGb3JtRGF0YSh7XG4gICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgIGNhdGVnb3J5OiAnaWxsdXN0cmF0aW9uJyxcbiAgICAgICAgICBzdWJjYXRlZ29yeTogJycsXG4gICAgICAgICAgdHdpdHRlckhhbmRsZTogJycsXG4gICAgICAgICAgdHdpdHRlcklkOiAnJyxcbiAgICAgICAgICBtY29sOiAnJyxcbiAgICAgICAgICB0d2l0dGVyVXJsOiAnJyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICAgICAgdHdpdHRlckxpbms6ICcnXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0U3RhdHVzKGBVcGxvYWQgZmFpbGVkOiAke3Jlc3VsdC5tZXNzYWdlfWApO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBzZXRTdGF0dXMoJ1VwbG9hZCBmYWlsZWQ6ICcgKyAoZXJyb3IgYXMgRXJyb3IpLm1lc3NhZ2UpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJtYXgtdy0yeGwgbXgtYXV0byBwLTQgYmctd2hpdGUgcm91bmRlZC1sZyBzaGFkb3dcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZpbGUoZS50YXJnZXQuZmlsZXM/LlswXSB8fCBudWxsKX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0yIGJvcmRlciByb3VuZGVkXCJcbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJUaXRsZVwiXG4gICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLnRpdGxlfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybURhdGEoey4uLmZvcm1EYXRhLCB0aXRsZTogZS50YXJnZXQudmFsdWV9KX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0yIGJvcmRlciByb3VuZGVkXCJcbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAvPlxuICAgICAgICBcbiAgICAgICAgPHNlbGVjdFxuICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5jYXRlZ29yeX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm1EYXRhKHsuLi5mb3JtRGF0YSwgY2F0ZWdvcnk6IGUudGFyZ2V0LnZhbHVlfSl9XG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHAtMiBib3JkZXIgcm91bmRlZFwiXG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsYW5kc2NhcGVcIj5JbGx1c3RyYXRpb248L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZmFuYXJ0XCI+RmFuQXJ0PC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm9jY2hhcmFcIj5PQzwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjb21tXCI+Q29tbWlzc2lvbjwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtYWxlXCI+TWFsZTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ2dHViZVwiPlZ0dWJlcnM8L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU3ViY2F0ZWdvcnkgKGUuZy4sIEZhbkFydCAyMDI0KVwiXG4gICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLnN1YmNhdGVnb3J5fVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybURhdGEoey4uLmZvcm1EYXRhLCBzdWJjYXRlZ29yeTogZS50YXJnZXQudmFsdWV9KX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0yIGJvcmRlciByb3VuZGVkXCJcbiAgICAgICAgLz5cbiAgICAgICAgXG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR3aXR0ZXIgSGFuZGxlICh3aXRob3V0IEApXCJcbiAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEudHdpdHRlckhhbmRsZX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm1EYXRhKHsuLi5mb3JtRGF0YSwgdHdpdHRlckhhbmRsZTogZS50YXJnZXQudmFsdWV9KX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0yIGJvcmRlciByb3VuZGVkXCJcbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAvPlxuXG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR3aXR0ZXIgUG9zdCBJRFwiXG4gICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLnR3aXR0ZXJJZH1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm1EYXRhKHsuLi5mb3JtRGF0YSwgdHdpdHRlcklkOiBlLnRhcmdldC52YWx1ZX0pfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwLTIgYm9yZGVyIHJvdW5kZWRcIlxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgIC8+XG4gICAgICAgIFxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidXJsXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR3aXR0ZXIgTGlua1wiXG4gICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLnR3aXR0ZXJMaW5rfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybURhdGEoey4uLmZvcm1EYXRhLCB0d2l0dGVyTGluazogZS50YXJnZXQudmFsdWV9KX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0yIGJvcmRlciByb3VuZGVkXCJcbiAgICAgICAgLz5cbiAgICAgICAgXG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIlxuICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm1EYXRhKHsuLi5mb3JtRGF0YSwgZGVzY3JpcHRpb246IGUudGFyZ2V0LnZhbHVlfSl9XG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHAtMiBib3JkZXIgcm91bmRlZFwiXG4gICAgICAgICAgcm93cz17NH1cbiAgICAgICAgLz5cbiAgICAgICAgXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZ31cbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctWyMxREExRjJdIHRleHQtd2hpdGUgcC0yIHJvdW5kZWQgaG92ZXI6YmctWyMxYTkxZGFdIGRpc2FibGVkOm9wYWNpdHktNTBcIlxuICAgICAgICA+XG4gICAgICAgICAge2xvYWRpbmcgPyAnVXBsb2FkaW5nLi4uJyA6ICdVcGxvYWQgV29yayd9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICB7c3RhdHVzICYmIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTRcIj57c3RhdHVzfTwvcD59XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gICk7XG59Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJVcGxvYWRGb3JtIiwicm91dGVyIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsInRpdGxlIiwiY2F0ZWdvcnkiLCJzdWJjYXRlZ29yeSIsInR3aXR0ZXJIYW5kbGUiLCJ0d2l0dGVySWQiLCJ0d2l0dGVyVXJsIiwibWNvbCIsImRlc2NyaXB0aW9uIiwidHdpdHRlckxpbmsiLCJmaWxlIiwic2V0RmlsZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic3RhdHVzIiwic2V0U3RhdHVzIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGFUb1NlbmQiLCJGb3JtRGF0YSIsImFwcGVuZCIsIk9iamVjdCIsImVudHJpZXMiLCJmb3JFYWNoIiwia2V5IiwidmFsdWUiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsInJlc3VsdCIsImpzb24iLCJjb25zb2xlIiwibG9nIiwib2siLCJtZXNzYWdlIiwiZXJyb3IiLCJmb3JtIiwib25TdWJtaXQiLCJjbGFzc05hbWUiLCJkaXYiLCJpbnB1dCIsInR5cGUiLCJhY2NlcHQiLCJvbkNoYW5nZSIsInRhcmdldCIsImZpbGVzIiwicmVxdWlyZWQiLCJwbGFjZWhvbGRlciIsInNlbGVjdCIsIm9wdGlvbiIsInRleHRhcmVhIiwicm93cyIsImJ1dHRvbiIsImRpc2FibGVkIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/UploadForm.tsx\n"));

/***/ })

});