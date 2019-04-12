import IProvider from '../interfaces/IProvider';
import Provider from '../models/Provider';

export default class ProviderSelect {
    // Static methods
    /**
     * Return the available providers based on the JSON input
     * @param json
     */
    public static parseProviders(json: string): IProvider[] {
        const data = JSON.parse(json);
        const values: IProvider[] = Object.values(data);
        const providers: IProvider[] = values.map((value: IProvider): IProvider => new Provider(value));

        return providers;
    }

    // Fields
    public section: HTMLDivElement;
    public select: HTMLSelectElement;
    public active: string;
    private providers: IProvider[];

    // Constructor
    constructor(section: HTMLDivElement) {
        this.section = section;
        this.select = document.querySelector('#settings-providerSelect');
        if (!this.select) {
            return;
        }

        const providersJson: string = this.section.dataset.providers;
        this.providers = ProviderSelect.parseProviders(providersJson);

        // Method binding
        this.handleProviderChange = this.handleProviderChange.bind(this);
        this.setActive = this.setActive.bind(this);

        // Event listeners
        this.select.addEventListener('change', this.handleProviderChange);

        // Initialize state
        this.setActive(this.select.value);
    }

    // Instance methods
    /**
     * Handle changes to the provider select
     * @param event Change event emitted from HTMLSelectElemtn
     */
    private handleProviderChange(event: Event) {
        const target: HTMLSelectElement = event.target as HTMLSelectElement;
        this.setActive(target.value);
    }

    /**
     * Show the active section
     * @param handle string Provider handle
     */
    private setActive(handle: string): boolean {
        const matchingProvider: IProvider = this.providers
            .find((provider: IProvider): boolean => provider.handle === handle);
        if (!matchingProvider) {
            return false;
        }

        const matchingSection: HTMLDivElement = this.section
            .querySelector(`[data-provider="${matchingProvider.handle}"]`);
        if (!matchingSection) {
            return false;
        }

        // Found a matching section, hide others
        this.section.querySelectorAll('[data-provider]')
            .forEach((section: HTMLElement) => section.classList.remove('active'));

        matchingSection.classList.add('active');

        return true;
    }
}
