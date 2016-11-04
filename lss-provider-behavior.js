var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var LssProviderBehavior = (function (_super) {
    __extends(LssProviderBehavior, _super);
    function LssProviderBehavior() {
        _super.apply(this, arguments);
    }
    LssProviderBehavior.prototype.created = function () {
        var _this = this;
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
    ;
    LssProviderBehavior.prototype.provide = function (key, factory) {
        this.providers[key] = factory;
    };
    ;
    LssProviderBehavior.prototype.provideInstance = function (key, instance) {
        this.providers[key] = function () { return instance; };
    };
    ;
    return LssProviderBehavior;
}(polymer.Base));
