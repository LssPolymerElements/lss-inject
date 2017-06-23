var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var LssRequesterBehavior = function (superClass) {
    return (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        class_1.prototype.requestProvider = function (key) {
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
        class_1.prototype.requestInstance = function (key) {
            return this.requestProvider(key)();
        };
        ;
        class_1.prototype.value = function (key) {
            var _this = this;
            return function () { return _this.requestInstance(key); };
        };
        ;
        return class_1;
    }(superClass));
};
