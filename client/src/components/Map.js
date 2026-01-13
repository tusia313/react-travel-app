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
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/standard', // Use the standard style for the map
                projection: 'globe', // display the map as a globe
                zoom: 7, // initial zoom level, 0 is the world view, higher values zoom in
                center: coords // center the map on this longitude and latitude
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