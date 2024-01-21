namespace startseite {

  const drawer: HTMLElement | null = document.querySelector('.drawer-overview');
  const openButton: HTMLElement | null = drawer?.nextElementSibling as HTMLElement;
  const closeButton: HTMLButtonElement | null = drawer?.querySelector('sl-button[variant="primary"]') as HTMLButtonElement;

  if (openButton && closeButton) {
    openButton.addEventListener('click', () => {
      if (drawer) {
        (drawer as any).show(); // TypeScript kennt möglicherweise die 'show'-Methode nicht, daher casten wir zu 'any'
      }
    });

    closeButton.addEventListener('click', () => {
      if (drawer) {
        (drawer as any).hide(); // Ähnlich wie oben casten wir zu 'any', um mögliche Typfehler zu vermeiden
      }
    });
  }

  //let container = <HTMLElement>document.querySelector('.resize-observer-overview');
  //let resizeObserver = <HTMLElement>container.querySelector('sl-resize-observer');

  //resizeObserver.addEventListener('sl-resize', event => {
  //  console.log(event.detail);
  //});

  let container: HTMLElement | null = document.querySelector('.resize-observer-overview');
  let resizeObserver: HTMLElement | null = container?.querySelector('sl-resize-observer') as HTMLElement;

  if (resizeObserver) {
    resizeObserver.addEventListener('sl-resize', (event: Event) => {
      const customEvent = event as CustomEvent;
      if (customEvent.detail) {
        console.log(customEvent.detail);
      }
    });
  }
}
