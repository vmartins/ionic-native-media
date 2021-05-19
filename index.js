var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

import {
    IonicNativePlugin,
    cordovaInstance,
    instancePropertyGet,
    instancePropertySet,
    checkAvailability
} from '@ionic-native/core';
import { Observable } from 'rxjs';

var MediaObject = /** @class */ (function () {
    function MediaObject(_objectInstance) {
        var _this = this;
        this._objectInstance = _objectInstance;

        this.onSuccess = new Observable(function (observer) {
            _this.successCallback = observer.next.bind(observer);
            return function () { return (_this.successCallback = function () { }); };
        });

        this.onError = new Observable(function (observer) {
            _this.errorCallback = observer.next.bind(observer);
            return function () { return (_this.errorCallback = function () { }); };
        });

        this.onStatusUpdate = new Observable(function (observer) {
            _this.statusCallback = observer.next.bind(observer);
            return function () { return (_this.statusCallback = function () { }); };
        });
    }

    MediaObject.prototype.getCurrentAmplitude = function () {
        return cordovaInstance(this, "getCurrentAmplitude", {}, arguments);
    };

    MediaObject.prototype.getCurrentPosition = function () {
        return cordovaInstance(this, "getCurrentPosition", {}, arguments);
    };

    MediaObject.prototype.getDuration = function () {
        return cordovaInstance(this, "getDuration", { "sync": true }, arguments);
    };

    MediaObject.prototype.play = function (iosOptions) {
        return cordovaInstance(this, "play", { "sync": true }, arguments);
    };

    MediaObject.prototype.pause = function () {
        return cordovaInstance(this, "pause", { "sync": true }, arguments);
    };

    MediaObject.prototype.release = function () {
        return cordovaInstance(this, "release", { "sync": true }, arguments);
    };

    MediaObject.prototype.releaseAll = function () {
        return cordovaInstance(this, "releaseAll", {}, arguments);
    };

    MediaObject.prototype.seekTo = function (milliseconds) {
        return cordovaInstance(this, "seekTo", { "sync": true }, arguments);
    };

    MediaObject.prototype.setVolume = function (volume) {
        return cordovaInstance(this, "setVolume", { "sync": true }, arguments);
    };

    MediaObject.prototype.setRate = function (speedRate) {
        return cordovaInstance(this, "setRate", { "sync": true }, arguments);
    };

    MediaObject.prototype.startRecord = function () {
        return cordovaInstance(this, "startRecord", { "sync": true }, arguments);
    };

    MediaObject.prototype.stopRecord = function () {
        return cordovaInstance(this, "stopRecord", { "sync": true }, arguments);
    };

    MediaObject.prototype.pauseRecord = function () {
        return cordovaInstance(this, "pauseRecord", { "sync": true }, arguments);
    };

    MediaObject.prototype.resumeRecord = function () {
        return cordovaInstance(this, "resumeRecord", { "sync": true }, arguments);
    };

    MediaObject.prototype.stop = function () {
        return cordovaInstance(this, "stop", { "sync": true }, arguments);
    };

    Object.defineProperty(MediaObject.prototype, "successCallback", {
        get: function () {
            return instancePropertyGet(this, "successCallback");
        },
        set: function (value) {
            instancePropertySet(this, "successCallback", value);
        },
        enumerable: false,
        configurable: true
    });

    Object.defineProperty(MediaObject.prototype, "errorCallback", {
        get: function () {
            return instancePropertyGet(this, "errorCallback");
        },
        set: function (value) {
            instancePropertySet(this, "errorCallback", value);
        },
        enumerable: false,
        configurable: true
    });

    Object.defineProperty(MediaObject.prototype, "statusCallback", {
        get: function () {
            return instancePropertyGet(this, "statusCallback");
        },
        set: function (value) {
            instancePropertySet(this, "statusCallback", value);
        },
        enumerable: false,
        configurable: true
    });
    return MediaObject;
}());

export { MediaObject };
export var MEDIA_STATUS;
(function (MEDIA_STATUS) {
    MEDIA_STATUS[MEDIA_STATUS["NONE"] = 0] = "NONE";
    MEDIA_STATUS[MEDIA_STATUS["STARTING"] = 1] = "STARTING";
    MEDIA_STATUS[MEDIA_STATUS["RUNNING"] = 2] = "RUNNING";
    MEDIA_STATUS[MEDIA_STATUS["PAUSED"] = 3] = "PAUSED";
    MEDIA_STATUS[MEDIA_STATUS["STOPPED"] = 4] = "STOPPED";
})(MEDIA_STATUS || (MEDIA_STATUS = {}));

export var MEDIA_ERROR;
(function (MEDIA_ERROR) {
    MEDIA_ERROR[MEDIA_ERROR["ABORTED"] = 1] = "ABORTED";
    MEDIA_ERROR[MEDIA_ERROR["NETWORK"] = 2] = "NETWORK";
    MEDIA_ERROR[MEDIA_ERROR["DECODE"] = 3] = "DECODE";
    MEDIA_ERROR[MEDIA_ERROR["SUPPORTED"] = 4] = "SUPPORTED";
})(MEDIA_ERROR || (MEDIA_ERROR = {}));

var MediaOriginal = /** @class */ (function (_super) {
    __extends(MediaOriginal, _super);
    function MediaOriginal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Constants
        /**
         * @hidden
         */
        _this.MEDIA_NONE = 0;

        /**
         * @hidden
         */
        _this.MEDIA_STARTING = 1;

        /**
         * @hidden
         */
        _this.MEDIA_RUNNING = 2;

        /**
         * @hidden
         */
        _this.MEDIA_PAUSED = 3;

        /**
         * @hidden
         */
        _this.MEDIA_STOPPED = 4;

        // error codes
        /**
         * @hidden
         */
        _this.MEDIA_ERR_ABORTED = 1;

        /**
         * @hidden
         */
        _this.MEDIA_ERR_NETWORK = 2;

        /**
         * @hidden
         */
        _this.MEDIA_ERR_DECODE = 3;

        /**
         * @hidden
         */
        _this.MEDIA_ERR_NONE_SUPPORTED = 4;
        return _this;
    }

    /**
     * Open a media file
     * @param src {string} A URI containing the audio content.
     * @return {MediaObject}
     */
    MediaOriginal.prototype.create = function (src) {
        var instance;
        if (checkAvailability(MediaOriginal.getPluginRef(), null, MediaOriginal.getPluginName()) === true) {
            // Creates a new media object
            instance = new (MediaOriginal.getPlugin())(src);
        }
        return new MediaObject(instance);
    };

    MediaOriginal.pluginName = "Media";
    MediaOriginal.repo = "https://github.com/vmartins/cordova-plugin-media";
    MediaOriginal.plugin = "cordova-plugin-media";
    MediaOriginal.pluginRef = "Media";
    MediaOriginal.platforms = ["Android", "iOS"];
    return MediaOriginal;
}(IonicNativePlugin));

var Media = new MediaOriginal();
export { Media };
