"use strict";
var startseite;
(function (startseite) {
    const drawer = document.querySelector('.drawer-overview');
    const openButton = drawer?.nextElementSibling;
    const closeButton = drawer?.querySelector('sl-button[variant="primary"]');
    if (openButton && closeButton) {
        openButton.addEventListener('click', () => {
            if (drawer) {
                drawer.show(); // TypeScript kennt möglicherweise die 'show'-Methode nicht, daher casten wir zu 'any'
            }
        });
        closeButton.addEventListener('click', () => {
            if (drawer) {
                drawer.hide(); // Ähnlich wie oben casten wir zu 'any', um mögliche Typfehler zu vermeiden
            }
        });
    }
    //let container = <HTMLElement>document.querySelector('.resize-observer-overview');
    //let resizeObserver = <HTMLElement>container.querySelector('sl-resize-observer');
    //resizeObserver.addEventListener('sl-resize', event => {
    //  console.log(event.detail);
    //});
    let container = document.querySelector('.resize-observer-overview');
    let resizeObserver = container?.querySelector('sl-resize-observer');
    if (resizeObserver) {
        resizeObserver.addEventListener('sl-resize', (event) => {
            const customEvent = event;
            if (customEvent.detail) {
                console.log(customEvent.detail);
            }
        });
    }
})(startseite || (startseite = {}));
//# sourceMappingURL=startseite.js.map