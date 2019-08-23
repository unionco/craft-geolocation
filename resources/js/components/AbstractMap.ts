abstract class AbstractMap {
    protected apiKey: string;
    protected container: HTMLDivElement;
    protected prefix: string;
    protected latInput: HTMLInputElement;
    protected lngInput: HTMLInputElement;
    protected geocoderStringInput: HTMLInputElement;

    constructor(container: HTMLDivElement) {
        this.container = container;
        this.apiKey = container.dataset.mapApiKey;
        this.prefix = container.dataset.fieldPrefix;
 
        const parentElement = container.parentElement;
        this.latInput = parentElement.querySelector('input[name*="lat"]');
        this.lngInput = parentElement.querySelector('input[name*="lng"]');
        this.geocoderStringInput = parentElement.querySelector('input[name*="geocoderString"]');
    }

    public abstract initMap(): void;
    public abstract initGeocoder(): void;
}

export default AbstractMap;