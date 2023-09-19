import EarthquakeSection from '@/components/earthquakes-section'
import { WebSiteType } from '@/models/enums/WebSiteType'
import EarthquakeResponse from '@/models/response/EarthquakeResponse'
import PaginatedResponse from '@/models/response/PaginatedResponse'
import React from 'react'
import dynamic from 'next/dynamic'


interface EarthquakesContainerProps {
    type: WebSiteType,
    currentPage: number,
    earthquakes: EarthquakeResponse[],
    paginatedEarthquakes: PaginatedResponse
}

const MapComponent = dynamic(() => import("@/components/map"), { ssr: false })
const EarthquakesContainer = ({ type, currentPage, earthquakes, paginatedEarthquakes }: EarthquakesContainerProps) => {
    return (
        <div style={{ height: "100%" }}>
            <MapComponent
                height={"40%"}
                earthquakes={earthquakes}
            />
            <EarthquakeSection
                type={type}
                height={"50%"}
                currentPage={currentPage}
                paginatedEarthquakes={paginatedEarthquakes}
            />
        </div>
    )
}

export default EarthquakesContainer