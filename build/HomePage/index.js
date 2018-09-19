(function(){
  
  var createPageHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 50);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(1)
var $app_style$ = __webpack_require__(2)
var $app_script$ = __webpack_require__(3)

$app_define$('@app-component/header', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "header"
  ],
  "children": [
    {
      "type": "image",
      "attr": {
        "src": "../Common/back.png"
      },
      "events": {
        "click": "back"
      },
      "classList": [
        "img"
      ]
    },
    {
      "type": "text",
      "attr": {
        "value": function () {return this.title}
      },
      "classList": [
        "title"
      ]
    }
  ]
}

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = {
  ".header": {
    "width": "100%",
    "height": "120px",
    "display": "flex",
    "alignItems": "center",
    "paddingTop": "0px",
    "paddingRight": "80px",
    "paddingBottom": "0px",
    "paddingLeft": "30px"
  },
  ".img": {
    "width": "50px",
    "height": "50px"
  },
  ".title": {
    "flex": 1,
    "textAlign": "center",
    "fontSize": "42px"
  }
}

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _system = $app_require$('@app-module/system.router');

var _system2 = _interopRequireDefault(_system);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: ['title'],
  data: {
    theme: { color: '' }
  },
  back: function back() {
    _system2.default.back();
  }
};}

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0)
var $app_template$ = __webpack_require__(51)
var $app_style$ = __webpack_require__(52)
var $app_script$ = __webpack_require__(53)

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})

$app_bootstrap$('@app-component/index',{ packagerVersion: '0.0.5'})


/***/ }),

/***/ 51:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "home-page-warp"
  ],
  "children": [
    {
      "type": "header",
      "attr": {
        "title": "主页"
      }
    },
    {
      "type": "image",
      "attr": {
        "src": "../assets/bg.png"
      }
    },
    {
      "type": "div",
      "attr": {},
      "children": [
        {
          "type": "text",
          "attr": {
            "value": "快应用是什么 ?"
          },
          "classList": [
            "introduction"
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "content-warp"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "content"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "item-warp"
              ],
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": "1、"
                  },
                  "classList": [
                    "item-order"
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": "快应用是基于手机硬件平台的新型应用形态；"
                      },
                      "classList": [
                        "mess"
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "item-warp"
              ],
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": "2、"
                  },
                  "classList": [
                    "item-order"
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": "标准是由主流手机厂商组成的快应用联盟联合制定；"
                      },
                      "classList": [
                        "mess"
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "item-warp"
              ],
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": "3、"
                  },
                  "classList": [
                    "item-order"
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": "快应用标准的诞生将在研发接口、能力接入、开发者服务等层面建设标准平台；"
                      },
                      "classList": [
                        "mess"
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "item-warp"
              ],
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": "4、"
                  },
                  "classList": [
                    "item-order"
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": "以平台化的生态模式对个人开发者和企业开发者全品类开放。"
                      },
                      "classList": [
                        "mess"
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "item-warp"
              ],
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": "5、"
                  },
                  "classList": [
                    "item-order"
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "children": [
                    {
                      "type": "a",
                      "attr": {
                        "href": "https://www.quickapp.cn/",
                        "value": "快应用官网"
                      },
                      "classList": [
                        "mess"
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ 52:
/***/ (function(module, exports) {

module.exports = {
  ".home-page-warp": {
    "display": "flex",
    "flexDirection": "column",
    "backgroundColor": "#f0edef"
  },
  ".content": {
    "display": "flex",
    "flexDirection": "column",
    "backgroundColor": "#ffffff",
    "paddingTop": "10px",
    "paddingRight": "10px",
    "paddingBottom": "10px",
    "paddingLeft": "10px"
  },
  ".mess": {
    "fontSize": "32px",
    "lineHeight": "40px"
  },
  ".item-warp": {
    "marginTop": "10px",
    "marginRight": "0px",
    "marginBottom": "10px",
    "marginLeft": "0px",
    "display": "flex",
    "alignItems": "flex-start"
  },
  ".item-order": {
    "width": "50px",
    "lineHeight": "40px",
    "fontSize": "32px"
  },
  ".introduction": {
    "fontSize": "48px",
    "marginTop": "30px",
    "marginRight": "30px",
    "marginBottom": "30px",
    "marginLeft": "30px"
  },
  ".content-warp": {
    "paddingTop": "0px",
    "paddingRight": "30px",
    "paddingBottom": "0px",
    "paddingLeft": "30px"
  }
}

/***/ }),

/***/ 53:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = {
  onInit: function onInit() {
    var theme = this.$app.$def.theme;
  }
};


var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];

if (moduleOwn.data && accessors.some(function (acc) {
  return moduleOwn[acc];
})) {
  throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function (acc) {
    var accType = _typeof(moduleOwn[acc]);
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = { access: acc };
      }
    } else if (accType === 'function') {
      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
    }
  });
}}

/***/ })

/******/ });
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map