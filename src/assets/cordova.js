// file: src/cordova.js
define("cordova", function(require, exports, module) {

// 调用通道和平台模块
var channel = require('cordova/channel');
var platform = require('cordova/platform');

// 备份document和window的事件监听器
var m_document_addEventListener = document.addEventListener;
var m_document_removeEventListener = document.removeEventListener;
var m_window_addEventListener = window.addEventListener;
var m_window_removeEventListener = window.removeEventListener;

// 保存自定义的document和window的事件监听器
var documentEventHandlers = {},
    windowEventHandlers = {};

// 拦截document和window的事件监听器（addEventListener/removeEventListener）
// 存在自定义的事件监听器的话，使用自定义的；不存在的话调用备份document和window的事件监听器
document.addEventListener = function(evt, handler, capture) {
    var e = evt.toLowerCase();
    if (typeof documentEventHandlers[e] != 'undefined') {
        documentEventHandlers[e].subscribe(handler);
    } else {
        m_document_addEventListener.call(document, evt, handler, capture);
    }
};
window.addEventListener = function(evt, handler, capture) {
    var e = evt.toLowerCase();
    if (typeof windowEventHandlers[e] != 'undefined') {
        windowEventHandlers[e].subscribe(handler);
    } else {
        m_window_addEventListener.call(window, evt, handler, capture);
    }
};
document.removeEventListener = function(evt, handler, capture) {
    var e = evt.toLowerCase();
    if (typeof documentEventHandlers[e] != "undefined") {
        documentEventHandlers[e].unsubscribe(handler);
    } else {
        m_document_removeEventListener.call(document, evt, handler, capture);
    }
};
window.removeEventListener = function(evt, handler, capture) {
    var e = evt.toLowerCase();
    if (typeof windowEventHandlers[e] != "undefined") {
        windowEventHandlers[e].unsubscribe(handler);
    } else {
        m_window_removeEventListener.call(window, evt, handler, capture);
    }
};

// 创建一个指定type的事件。
// 参考：https://developer.mozilla.org/en-US/docs/Web/API/document.createEvent#Notes
function createEvent(type, data) {
    var event = document.createEvent('Events');
    // 指定事件名、不可冒泡、不可取消
    event.initEvent(type, false, false);
    // 自定义数据
    if (data) {
        for (var i in data) {
            if (data.hasOwnProperty(i)) {
                event[i] = data[i];
            }
        }
    }
    return event;
}

// 外部访问cordova.js的入口
var cordova = {
    // 模块系统
    define:define,
    require:require,
    // 版本号和平台名
    version:CORDOVA_JS_BUILD_LABEL,
    platformId:platform.id,

    // 为了拦截document和window的事件监听器,添加或删除自定义的事件监听器
    addWindowEventHandler:function(event) {
        return (windowEventHandlers[event] = channel.create(event));
    },
    // sticky 是指一旦被调用那么它以后都保持被调用的状态，所定义的监听器会被立即执行。
    // 比如： deviceready事件只触发一次，以后的所有监听都是立即执行的。
    addStickyDocumentEventHandler:function(event) { 
        return (documentEventHandlers[event] = channel.createSticky(event));
    },
    addDocumentEventHandler:function(event) {
        return (documentEventHandlers[event] = channel.create(event));
    },
    removeWindowEventHandler:function(event) {
        delete windowEventHandlers[event];
    },
    removeDocumentEventHandler:function(event) {
        delete documentEventHandlers[event];
    },

    // 获取拦截前的document和window的事件监听器
    getOriginalHandlers: function() {
        return {'document': {'addEventListener': m_document_addEventListener, 'removeEventListener': m_document_removeEventListener},
        'window': {'addEventListener': m_window_addEventListener, 'removeEventListener': m_window_removeEventListener}};
    },

    // 调用document的事件
    fireDocumentEvent: function(type, data, bNoDetach) {
        var evt = createEvent(type, data);
        if (typeof documentEventHandlers[type] != 'undefined') {
            // 判断是否需要抛出事件异常
            if( bNoDetach ) {
                // 通过Channel的fire方法来调用事件（apply）
                documentEventHandlers[type].fire(evt);
            }
            else {
                // setTimeout(callback, 0) 的意思是DOM构成完毕、事件监听器执行完后立即执行
                setTimeout(function() {
                    // 调用加载cordova.js之前定义的那些deviceready事件
                    if (type == 'deviceready') {
                        document.dispatchEvent(evt);
                    }
                    // 通过Channel的fire方法来调用事件（apply）
                    documentEventHandlers[type].fire(evt);
                }, 0);
            }
        } else {
            // 直接调用事件
            document.dispatchEvent(evt);
        }
    },

    // 调用window的事件
    fireWindowEvent: function(type, data) {
        var evt = createEvent(type,data);
        if (typeof windowEventHandlers[type] != 'undefined') {
            setTimeout(function() {
                windowEventHandlers[type].fire(evt);
            }, 0);
        } else {
            window.dispatchEvent(evt);
        }
    },

    // 插件回调相关-------------------------------------

    // 回调ID中间的一个随机数(真正的ID：插件名+随机数)
    callbackId: Math.floor(Math.random() * 2000000000),
    // 回调函数对象，比如success,fail
    callbacks:  {},
    // 回调状态
    callbackStatus: {
        NO_RESULT: 0,
        OK: 1,
        CLASS_NOT_FOUND_EXCEPTION: 2,
        ILLEGAL_ACCESS_EXCEPTION: 3,
        INSTANTIATION_EXCEPTION: 4,
        MALFORMED_URL_EXCEPTION: 5,
        IO_EXCEPTION: 6,
        INVALID_ACTION: 7,
        JSON_EXCEPTION: 8,
        ERROR: 9
    },

    // 以后使用callbackFromNative代替callbackSuccess和callbackError 
    callbackSuccess: function(callbackId, args) {
        try {
            cordova.callbackFromNative(callbackId, true, args.status, [args.message], args.keepCallback);
        } catch (e) {
            console.log("Error in error callback: " + callbackId + " = "+e);
        }
    },
    callbackError: function(callbackId, args) {
        try {
            cordova.callbackFromNative(callbackId, false, args.status, [args.message], args.keepCallback);
        } catch (e) {
            console.log("Error in error callback: " + callbackId + " = "+e);
        }
    },

    // 调用回调函数
    callbackFromNative: function(callbackId, success, status, args, keepCallback) {
        var callback = cordova.callbacks[callbackId];
        // 判断是否定义了回调函数
        if (callback) {
            if (success && status == cordova.callbackStatus.OK) {
                // 调用success函数
                callback.success && callback.success.apply(null, args);
            } else if (!success) {
                // 调用fail函数
                callback.fail && callback.fail.apply(null, args);
            }
            // 如果设置成不再保持回调，删除回调函数对象
            if (!keepCallback) {
                delete cordova.callbacks[callbackId];
            }
        }
    },

    // 没有地方用到！
    // 目的是把你自己的函数在注入到Cordova的生命周期中。
    addConstructor: function(func) {
        channel.onCordovaReady.subscribe(function() {
            try {
                func();
            } catch(e) {
                console.log("Failed to run constructor: " + e);
            }
        });
    }
};

module.exports = cordova;

});