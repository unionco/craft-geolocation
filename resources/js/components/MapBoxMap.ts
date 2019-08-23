import mapboxgl, { Map, MapMouseEvent } from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import AbstractMap from './AbstractMap';

import 'mapbox-gl/src/css/mapbox-gl.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

class MapBoxMap extends AbstractMap {
    public map: Map;

    constructor(container: HTMLDivElement) {
        super(container);
        
        // Binding
        this.initMap = this.initMap.bind(this);
        this.initGeocoder = this.initGeocoder.bind(this);

        this.initMap();
        console.log(this);
    }

    public initMap(): void {
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

    public initGeocoder(): void {
        const geocoder = new MapboxGeocoder({
            accessToken: this.apiKey,
            marker: {
                color: 'orange'
            },
            mapboxgl: mapboxgl,
            origin: 'https://api.mapbox.com'
        });
        // console.log(this.container);
        // return;
        geocoder.on('result', (event: any) => {
            console.log(event);
            this.geocoderStringInput.value = event.result.place_name;

            const [lng, lat] = event.result.geometry.coordinates;
            this.latInput.value = lat;
            this.lngInput.value = lng;
        });

        this.container.parentNode.querySelector('.geocoder').appendChild(geocoder.onAdd(this.map));

        console.log(this.geocoderStringInput.value);
        geocoder.query(this.geocoderStringInput.value);
        // geocoder.

        // console.log(geocoder.getInput());
        // this.map.addControl(geocoder);
    }
}

export default MapBoxMap;