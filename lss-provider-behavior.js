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
var LssProviderBehavior = function (superClass) {
    return (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        class_1.prototype.connectedCallback = function () {
            var _this = this;
            if (_super.prototype.connectedCallback) {
                _super.prototype.connectedCallback.call(this);
            }
            this.providers = {};
            window.addEventListener("request-provider", function (event) {
                var key = event.detail.key;
                if (key in _this.providers) {
                    event.detail.provider = _this.providers[key];
                    event.preventDefault();
                    event.stopPropagation();
                }
            });
        };
        class_1.prototype.provide = function (key, factory) {
            this.providers[key] = factory;
        };
        ;
        class_1.prototype.provideInstance = function (key, instance) {
            this.providers[key] = function () { return instance; };
        };
        ;
        return class_1;
    }(superClass));
};
