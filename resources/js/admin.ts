import ProviderSelect from './components/ProviderSelect';

class Admin {
    public providerSelect: ProviderSelect;

    constructor() {
        const providerSelect: HTMLDivElement = document.querySelector('[data-provider-select]');
        if (providerSelect) {
            this.providerSelect = new ProviderSelect(providerSelect);
        }
    }
}

new Admin();
