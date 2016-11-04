﻿class LssProviderBehavior extends polymer.Base {

    providers: any;

    created() {
        this.providers = {};
        window.addEventListener("request-provider", (event: CustomEvent) => {
            const key = event.detail.key;
            if (key in this.providers) {
                event.detail.provider = this.providers[key];
                event.preventDefault();
                event.stopPropagation();
            }
        });
    };

    provide(key, factory) {
        this.providers[key] = factory;
    };

    provideInstance(key, instance) {
        this.providers[key] = () => instance;
    };
}

