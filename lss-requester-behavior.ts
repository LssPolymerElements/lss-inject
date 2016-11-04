class LssRequesterBehavior extends polymer.Base {

    private requestProvider(key) {
        const event = new CustomEvent("request-provider", {
            detail: { key },
            bubbles: true,
            cancelable: true
        });
        window.dispatchEvent(event);

        if (event.defaultPrevented) {
            return event.detail.provider;
        } else {
            throw new Error(`no provider found for ${key}`);
        }
    };

    requestInstance(key) {
        return this.requestProvider(key)();
    };

    private value(key) {
        return () => this.requestInstance(key);
    };
}