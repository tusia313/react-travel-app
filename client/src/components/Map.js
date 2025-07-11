import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { useEffect, useRef } from 'react';
const Map = ({ coords }) => {
    mapboxgl.accessToken = process.env.REACT_APP_MAP_BOX_TOKEN

    const mapContainer = useRef(null)
    const map = useRef(null)

    useEffect(() => {
        if (map.current) return
        if (coords) {
            map.current = new mapboxgl.Map({
                container: mapContainer.current, // ID elementu, w którym ma być wyświetlana mapa
                style: 'mapbox://styles/mapbox/streets-v12', // Styl mapy
                center: coords, // Współrzędne centrum mapy (długość geograficzna, szerokość geograficzna)
                zoom: 5 // Poziom powiększenia
            })
        }

    }, [coords])

    return (
        <div className="map-container">
            <div ref={mapContainer} />
        </div>
    )
}
export default Map