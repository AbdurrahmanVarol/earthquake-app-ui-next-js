'use client'
import React, { useEffect } from 'react'
import { Icon } from "leaflet";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import EarthquakeResponse from '@/models/response/EarthquakeResponse';
import moment from "moment";

interface MapComponentProps {
    width?: string,
    height?: string,
    earthquakes: EarthquakeResponse[]
}
const MapComponent = ({ width, height, earthquakes }: MapComponentProps) => {

    useEffect(() => {
        console.log(earthquakes)
    }, [earthquakes])
    const getIconByMagnitude = (magnitude?: number) => {
        if (!magnitude) {
            console.log(magnitude)
            return new Icon({
                iconSize: [32, 32],
                iconUrl: require('@/assets/icons/location-pin.png')
            })
        }
        if (magnitude && magnitude < 3) {
            return new Icon({
                iconSize: [32, 32],
                iconUrl: require('@/assets/icons/location-pin-safe.png')
            })
        }
        else if (magnitude && (magnitude >= 3 && magnitude <= 4)) {
            return new Icon({
                iconSize: [32, 32],
                iconUrl: require('@/assets/icons/location-pin-warning.png')
            })
        }
        else {
            return new Icon({
                iconSize: [32, 32],
                iconUrl: require('@/assets/icons/location-pin-danger.png')
            })
        }
    }

    return (
        <div style={{ height: '50%' }}>
            <MapContainer style={{ height: "100%", borderRadius: 10, border: "1px solid black" }}
                center={[39.0024, 36.1735]}
                zoom={6}
                scrollWheelZoom={false}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    earthquakes.map((earthquake, index) => (
                        <Marker key={index} position={[earthquake.latitude, earthquake.longitude]} icon={getIconByMagnitude(earthquake.magnitude)}>
                            <Popup>
                                Date: {moment(earthquake.date).format("DD/MM/yyy HH:mm:ss")}<br />
                                Latitude: {` ${earthquake.latitude}`}<br />
                                Longitude: {` ${earthquake.longitude}`}<br />
                                Magnitude: {` ${earthquake.magnitude}`}<br />
                                Location: {` ${earthquake.location}`}
                            </Popup>
                        </Marker>
                    ))
                }
            </MapContainer>
        </div>
    )
}

export default MapComponent