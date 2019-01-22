(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("xerocross.data", [], factory);
	else if(typeof exports === 'object')
		exports["xerocross.data"] = factory();
	else
		root["xerocross.data"] = factory();
})(window, function() {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SimpleHashSet = exports.SimpleHashMap = exports.buildBinaryMaxHeap = exports.buildLinkedList = undefined;

var _linkedList = __webpack_require__(1);

var _linkedList2 = _interopRequireDefault(_linkedList);

var _binaryMaxHeap = __webpack_require__(2);

var _binaryMaxHeap2 = _interopRequireDefault(_binaryMaxHeap);

var _simpleHashMap = __webpack_require__(4);

var _simpleHashMap2 = _interopRequireDefault(_simpleHashMap);

var _simpleHashSet = __webpack_require__(5);

var _simpleHashSet2 = _interopRequireDefault(_simpleHashSet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var buildLinkedList = exports.buildLinkedList = _linkedList2.default.buildLinkedList;
var buildBinaryMaxHeap = exports.buildBinaryMaxHeap = _binaryMaxHeap2.default.buildHeap;
exports.SimpleHashMap = _simpleHashMap2.default;
exports.SimpleHashSet = _simpleHashSet2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var Node = function Node(val, next) {
    this.value = val;
    this.next = next;
};

var buildLinkedList = function buildLinkedList() {
    var newLinkedList = {};
    var first = null;

    newLinkedList.insertAtHead = function (value) {
        var newNode = new Node(value, null);
        if (first == null) {
            first = newNode;
        } else {
            var previousFirst = first;
            first = newNode;
            newNode.next = previousFirst;
        }
    };

    newLinkedList.isEmpty = function () {
        return first === "null";
    };

    var createIterator = function createIterator() {
        var currentNode = first;
        var iterator = {};
        var end = null;

        iterator.readInPlace = function () {
            return currentNode.value;
        };
        iterator.next = function () {
            if (currentNode == null) {
                return null;
            } else {
                var val = currentNode.value;
                if (currentNode.next == null) {
                    end = currentNode;
                }
                currentNode = currentNode.next;
                return val;
            }
        };
        iterator.insertHere = function (value) {
            var newNode = new Node(value, null);
            if (end !== null) {
                end.next = newNode;
                currentNode = newNode;
                end = newNode;
                return null;
            } else {
                if (currentNode.next == null) {
                    currentNode.next = newNode;
                } else {
                    var placeholder = currentNode.next;
                    currentNode.next = newNode;
                    newNode.next = placeholder;
                }
            }
        };
        return iterator;
    };

    newLinkedList.getIterator = function () {
        return createIterator();
    };
    return newLinkedList;
};

exports.default = {
    buildLinkedList: buildLinkedList
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _comparisonWrapper = __webpack_require__(3);

var swap = function swap(arr, i, j) {
    var placeholder = arr[i];
    arr[i] = arr[j];
    arr[j] = placeholder;
};
var e;
var buildBinaryMaxHeap = function buildBinaryMaxHeap(compareFunction) {
    e = (0, _comparisonWrapper.getComparisonWrapper)(compareFunction);
    var root = null;
    var heap = {};
    var storageArray = [null];

    var getHalf = function getHalf(i) {
        return Math.floor(i / 2);
    };

    var addElementAtEndIrrespectiveOfHeapCondition = function addElementAtEndIrrespectiveOfHeapCondition(elt) {
        storageArray.push(elt);
    };

    var reHeap = function reHeap(arr) {
        // assume the heap represented by storageArray meets the heap condition
        // except possibly the last element
        var hi = storageArray.length - 1;
        if (hi <= 1) {
            return;
        }
        var index = hi;
        while (index > 1) {
            var parentIndex = getHalf(index);
            if (e(storageArray[parentIndex], "<=", storageArray[index])) {
                swap(arr, parentIndex, index);
                settleDown(arr, parentIndex);
            }
            index = parentIndex;
        }
    };

    var settleDown = function settleDown(arr, index) {
        var newIndex = index;
        while (2 * newIndex < arr.length) {
            var maxIndex = 2 * newIndex;
            if (maxIndex + 1 < arr.length && e(arr[maxIndex], "<", arr[maxIndex + 1])) {
                maxIndex++;
            }
            if (e(arr[maxIndex], "<=", arr[newIndex])) {
                //do nothing
            } else {
                swap(arr, newIndex, maxIndex);
            }
            newIndex = maxIndex;
        }
    };
    heap.insert = function (value) {
        addElementAtEndIrrespectiveOfHeapCondition(value);
        reHeap(storageArray);
    };
    heap.get = function (index) {
        return storageArray[index + 1];
    };
    heap.getRawArray = function () {
        return storageArray;
    };
    return heap;
};

var isHeap = function isHeap(arr, compareFunction) {
    var index = 1;
    var e = (0, _comparisonWrapper.getComparisonWrapper)(compareFunction);
    while (2 * index < arr.length) {
        if (e(arr[index], "<", arr[2 * index])) {
            return false;
        }
        if (2 * index + 1 < arr.length && e(arr[index], "<", arr[2 * index + 1])) {
            return false;
        }
        index++;
    }
    return true;
};
exports.default = {
    buildHeap: buildBinaryMaxHeap,
    isHeap: isHeap
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports.getComparisonWrapper = function (compareFunction) {
  return function (leftElement, comparisonString, rightElement) {
    switch (comparisonString) {
      case "<":
        return compareFunction(leftElement, rightElement) < 0;
        break;
      case "<=":
        return compareFunction(leftElement, rightElement) <= 0;
        break;
      case ">":
        return compareFunction(leftElement, rightElement) > 0;
        break;
      case ">=":
        return compareFunction(leftElement, rightElement) >= 0;
        break;
        return undefined;
    }
  };
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var SimpleHashMap = {
    build: function build(numSlots, hashFunction) {
        var hashMap = {};
        var hashContainer = [];

        if (typeof numSlots !== "number" || isNaN(numSlots) || numSlots <= 0) {
            throw new Error("SimpleHashMap: numSlots must be > 0.");
        }

        if (hashFunction == undefined || typeof hashFunction !== "function") {
            throw new Error("SimpleHashMap: improper or undefined hashfunction.");
        }

        for (var i = 0; i < numSlots; i++) {
            hashContainer[i] = [];
        }

        var getSlotIndexFor = function getSlotIndexFor(newElt) {
            try {
                var hash = hashFunction(newElt);
                hash = hash % numSlots;
                if (isNaN(hash)) {
                    throw new Error("NaN");
                }
                while (hash < 0) {
                    hash += numSlots;
                }
                return hash % numSlots;
            } catch (e) {
                throw new Error("SimpleHashMap: An unknown error occured with your SimpleHashMap hash function.");
            }
        };

        hashMap.add = function (key, val) {
            var item = hashMap.get(key);
            if (item != null) {
                item.value = val;
            } else {
                var slotIndex = getSlotIndexFor(key);

                hashContainer[slotIndex].push({
                    key: key,
                    value: val
                });
            }
        };

        hashMap.get = function (key) {
            var slotIndex = getSlotIndexFor(key);
            if (hashContainer[slotIndex] == undefined) {
                return null;
            } else {
                var arr = hashContainer[slotIndex];
                for (var _i = 0; _i < arr.length; _i++) {
                    if (arr[_i].key == key) {
                        return arr[_i];
                    }
                }
                return null;
            }
        };

        hashMap.contains = function (key) {
            return hashMap.get(key) !== null;
        };

        hashMap.getValue = function (key) {
            var elt = hashMap.get(key);
            if (elt) {
                return elt.value;
            } else {
                return undefined;
            }
        };

        hashMap.remove = function (key) {
            var slotIndex = getSlotIndexFor(key);
            if (hashContainer[slotIndex] == undefined) {
                return true;
            } else {
                var arr = hashContainer[slotIndex];
                var newArray = [];
                for (var _i2 = 0; _i2 < arr.length; _i2++) {
                    if (arr[_i2].key != key) {
                        newArray.push(arr[_i2]);
                    }
                }
                hashContainer[slotIndex] = newArray;
            }
        };

        hashMap.toList = function () {
            var list = [];
            for (var _i3 = 0; _i3 < hashContainer.length; _i3++) {
                var slot = hashContainer[_i3];
                for (var j = 0; j < slot.length; j++) {
                    list.push(slot[j]);
                }
            }
            return list;
        };

        return hashMap;
    }
};

exports.default = SimpleHashMap;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var SimpleHashSet = {
    build: function build(numSlots, hashFunction) {
        var hashSet = {};
        var hashContainer = [];

        if (typeof numSlots !== "number" || isNaN(numSlots) || numSlots <= 0) {
            throw new Error("SimpleHashSet: numSlots must be > 0.");
        }

        if (hashFunction == undefined || typeof hashFunction !== "function") {
            throw new Error("SimpleHashSet: improper or undefined hashfunction.");
        }

        for (var i = 0; i < numSlots; i++) {
            hashContainer[i] = [];
        }

        var get = function get(key) {
            var slotIndex = getSlotIndexFor(key);
            if (hashContainer[slotIndex] == undefined) {
                return null;
            } else {
                var arr = hashContainer[slotIndex];
                for (var _i = 0; _i < arr.length; _i++) {
                    if (arr[_i] == key) {
                        return arr[_i];
                    }
                }
                return null;
            }
        };

        var getSlotIndexFor = function getSlotIndexFor(newElt) {
            try {
                var hash = hashFunction(newElt);
                hash = hash % numSlots;
                if (isNaN(hash)) {
                    throw new Error("NaN");
                }
                while (hash < 0) {
                    hash += numSlots;
                }
                return hash % numSlots;
            } catch (e) {
                throw new Error("SimpleHashSet: An unknown error occured with your SimpleHashSet hash function.");
            }
        };

        hashSet.add = function (key) {
            var item = get(key);
            if (item != null) {
                // do nothing
            } else {
                var slotIndex = getSlotIndexFor(key);
                hashContainer[slotIndex].push(key);
            }
        };

        hashSet.contains = function (key) {
            return get(key) !== null;
        };

        hashSet.remove = function (key) {
            var slotIndex = getSlotIndexFor(key);
            if (hashContainer[slotIndex] == undefined) {
                return true;
            } else {
                var arr = hashContainer[slotIndex];
                var newArray = [];
                for (var _i2 = 0; _i2 < arr.length; _i2++) {
                    if (arr[_i2] != key) {
                        newArray.push(arr[_i2]);
                    }
                }
                hashContainer[slotIndex] = newArray;
            }
        };

        hashSet.toList = function () {
            var list = [];
            for (var _i3 = 0; _i3 < hashContainer.length; _i3++) {
                var slot = hashContainer[_i3];
                for (var j = 0; j < slot.length; j++) {
                    list.push(slot[j]);
                }
            }
            return list;
        };

        return hashSet;
    }
};

exports.default = SimpleHashSet;

/***/ })
/******/ ]);
});