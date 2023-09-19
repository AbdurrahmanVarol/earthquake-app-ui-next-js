import React from 'react'
import { getEarthquakesWithPaginated, getEarthquakes } from '@/services/earthquakeService'
import { WebSiteType } from '@/models/enums/WebSiteType'
import EarthquakesContainer from '@/containers/earthquakes';

const EarthquakesPage = async ({ params, searchParams }: any) => {
    const type = WebSiteType[params.type as keyof typeof WebSiteType]
    const currentPage = Number(searchParams.page)

    const [earthquakes, paginatedEarthquakes] = await Promise.all([
        getEarthquakes(type),
        getEarthquakesWithPaginated({
            index: currentPage,
            siteType: type,
            size: 15
        }),
    ])
    return (
        <div>
            <EarthquakesContainer
                currentPage={Number(searchParams.page)}
                type={type}
                earthquakes={earthquakes}
                paginatedEarthquakes={paginatedEarthquakes}
            />
        </div >
    )
}

export default EarthquakesPage