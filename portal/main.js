import { registerApplication, start } from 'single-spa';
import { loader, router } from 'single-spa-angular-cli';
import 'babel-polyfill';
import 'zone.js';

const applications = require('./applications.config.json');

registerApplication(
    'react-page',
    () => import('./../apps/react.js/lifecycle').then(mod => mod.reactLifecycles),
    router.matchRoute('/react/', false)
);

for (const application of applications) {
    registerApplication(
        application.name,
        (() => {
            const lifecycles = loader({
                name: application.name,
                selector: application.selector,
                baseHref: application.baseHref
            });
            return {
                bootstrap: lifecycles.bootstrap,
                mount: lifecycles.mount,
                unmount: lifecycles.unmount,
                unload: lifecycles.unload,
            };
        })(),
        router.matchRoute(application.matchRoute, application.isDefaultApp)
    );
}

start();