import ProviderSelect from './components/ProviderSelect';

class Admin {
    public providerSelect: ProviderSelect;

    constructor() {
        console.log('hello world');
        const providerSelect: HTMLDivElement = document.querySelector('[data-provider-select]');
        if (providerSelect) {
            this.providerSelect = new ProviderSelect(providerSelect);
        }
    }
}

new Admin();
