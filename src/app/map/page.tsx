'use client'
import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Icon } from "leaflet";
import { MapContainer, TileLayer, useMap, Popup, Marker } from "react-leaflet";
import { getEarthquakes } from '@/services/earthquakeService'
import EarthquakeResponse from '@/models/response/EarthquakeResponse';
import { WebSiteType } from '@/models/enums/WebSiteType';


const MapPage = ({ searchParams }: any) => {
    const params = useSearchParams()
    const [markers, setMarkers] = useState<EarthquakeResponse[]>([])
    const [latitude, setLatitude] = useState<number>(params.has('latitude') ? Number(params.get('latitude')) : 0)
    const [longitude, setLongitude] = useState<number>(params.has('longitude') ? Number(params.get('longitude')) : 0)

    let locations: EarthquakeResponse[] = [];

    const loadData = async () => {
        const data = await getEarthquakes(WebSiteType.afad)
        setMarkers(data)
    }

    useEffect(() => {
        if (params.size == 0) {
            loadData()
        } else {
            setMarkers([{ latitude: latitude, longitude: longitude }])
        }
    }, [])

    const getIconByMagnitude = (magnitude?: number) => {
        let iconName = ""
        if (!magnitude) {
            console.log(magnitude)
            return new Icon({
                iconSize: [32, 32],
                iconUrl: require(`../../assets/icons/location-pin.png`)
            })
        }
        if (magnitude && magnitude < 3)
            iconName = "safe"
        else if (magnitude && (magnitude >= 3 && magnitude <= 4))
            iconName = "warning"
        else
            iconName = "danger"
        let icon = new Icon({
            iconSize: [32, 32],
            iconUrl: require(`src/assets/icons/location-pin-${iconName}.png`)
        })
        return icon
    }

    return (
        <div style={{ height: "100%" }}>
            <MapContainer style={{ height: "100%", borderRadius: 10, border: "1px solid red" }}
                center={searchParams.length > 0 ? [searchParams.latitude, searchParams.longitude] : [39.0024, 36.1735]}
                zoom={searchParams.length > 0 ? 10 : 6}
                scrollWheelZoom={false}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    markers.map((marker, index) => (
                        <Marker key={index} position={[marker.latitude, marker.longitude]} icon={getIconByMagnitude(marker.magnitude)}>
                            <Popup>
                                Date: {` ${marker.date}`}<br />
                                Latitude: {` ${marker.latitude}`}<br />
                                Longitude: {` ${marker.longitude}`}<br />
                                Magnitude: {` ${marker.magnitude}`}<br />
                                Location: {` ${marker.location}`}
                            </Popup>
                        </Marker>
                    ))
                }
            </MapContainer>
        </div>
    )
}

export default MapPage