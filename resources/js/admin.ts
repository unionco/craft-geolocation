import ProviderSelect from './components/ProviderSelect';
import MapBoxMap from './components/MapBoxMap';
import GoogleMap from './components/GoogleMap';

class Admin {
    public providerSelect: ProviderSelect;

    constructor() {
        console.log('hello world');
        const providerSelect: HTMLDivElement = document.querySelector('[data-provider-select]');
        if (providerSelect) {
            this.providerSelect = new ProviderSelect(providerSelect);
        }

        const inputMaps: NodeListOf<HTMLDivElement> = document.querySelectorAll('[data-map-provider]');
        if (inputMaps && inputMaps.length) {
            inputMaps.forEach((container: HTMLDivElement) => {
                console.log(container.dataset.mapProvider);
                if (container.dataset.mapProvider === 'mapbox') {
                    new MapBoxMap(container);
                } else if (container.dataset.mapProvider === 'google') {
                    new GoogleMap(container);
                }
            });
        }
    }
}

new Admin();

console.log(document.querySelector('[data-map-provider]'));