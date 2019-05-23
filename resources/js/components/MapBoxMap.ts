import mapboxgl, { Map, MapMouseEvent } from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

import 'mapbox-gl/src/css/mapbox-gl.css';

class MapBoxMap {
    private apiKey: string;
    private container: HTMLDivElement;
    public map: Map;
    private prefix: string;
    private latInput: HTMLInputElement;
    private lngInput: HTMLInputElement;

    constructor(container: HTMLDivElement) {
        this.container = container;
        this.apiKey = container.dataset.mapApiKey;
        this.prefix = container.dataset.fieldPrefix;
        const parentElement = container.parentElement;
        this.latInput = parentElement.querySelector('input[name*="lat"]');
        this.lngInput = parentElement.querySelector('input[name*="lng"]');
        
        // Binding
        this.initMap = this.initMap.bind(this);
        this.initGeocoder = this.initGeocoder.bind(this);

        this.initMap();
        console.log(this);
    }

    public initMap() {
        let latValue = 0;
        let lngValue = 0;
        if (this.latInput) {
            latValue = parseFloat(this.latInput.value);
        }
        if (this.lngInput) {
            lngValue = parseFloat(this.lngInput.value);
        }
        mapboxgl.accessToken = this.apiKey;
        this.map = new Map({
            container: this.container,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lngValue, latValue],
            zoom: 13,
        });

        this.map.on('click', (e: MapMouseEvent) => {
            const { lng, lat } = e.lngLat;
            if (!this.latInput || !this.lngInput) {
                return;
            }
            this.latInput.value = lat.toString();
            this.lngInput.value = lng.toString();
        });

        this.initGeocoder();
    }

    public initGeocoder() {
        const geocoder = new MapboxGeocoder({
            accessToken: this.apiKey,
            marker: {
                color: 'orange'
            },
            mapboxgl: mapboxgl,
            origin: 'https://api.mapbox.com'
        });

        this.map.addControl(geocoder);
    }
}

export default MapBoxMap;