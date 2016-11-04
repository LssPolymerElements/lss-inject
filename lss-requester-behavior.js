var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var LssRequesterBehavior = (function (_super) {
    __extends(LssRequesterBehavior, _super);
    function LssRequesterBehavior() {
        _super.apply(this, arguments);
    }
    LssRequesterBehavior.prototype.requestProvider = function (key) {
        var event = new CustomEvent("request-provider", {
            detail: { key: key },
            bubbles: true,
            cancelable: true
        });
        window.dispatchEvent(event);
        if (event.defaultPrevented) {
            return event.detail.provider;
        }
        else {
            throw new Error("no provider found for " + key);
        }
    };
    ;
    LssRequesterBehavior.prototype.requestInstance = function (key) {
        return this.requestProvider(key)();
    };
    ;
    LssRequesterBehavior.prototype.value = function (key) {
        var _this = this;
        return function () { return _this.requestInstance(key); };
    };
    ;
    return LssRequesterBehavior;
}(polymer.Base));
