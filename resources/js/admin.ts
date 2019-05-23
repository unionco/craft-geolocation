import ProviderSelect from './components/ProviderSelect';
import MapBoxMap from './components/MapBoxMap';

class Admin {
    public providerSelect: ProviderSelect;

    constructor() {
        const providerSelect: HTMLDivElement = document.querySelector('[data-provider-select]');
        if (providerSelect) {
            this.providerSelect = new ProviderSelect(providerSelect);
        }

        const inputMaps: NodeListOf<HTMLDivElement> = document.querySelectorAll('[data-map-provider]');
        if (inputMaps && inputMaps.length) {
            inputMaps.forEach((container: HTMLDivElement) => {
                if (container.dataset.mapProvider === 'mapbox') {
                    new MapBoxMap(container);
                }
            });
        }
    }
}

new Admin();

console.log(document.querySelector('[data-map-provider]'));