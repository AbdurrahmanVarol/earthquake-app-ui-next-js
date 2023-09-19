import EarthquakeSectionLoading from '@/components/earthquakes-section/loading'
import MapLoading from '@/components/map/loading'
import React from 'react'

const EarthquakesLoading = () => {
    return (
        <div>
            <MapLoading />
            <EarthquakeSectionLoading />
        </div>
    )
}

export default EarthquakesLoading