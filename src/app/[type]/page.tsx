import React from 'react'
import { getEarthquakesWithPaginated, getEarthquakes } from '@/services/earthquakeService'
import { WebSiteType } from '@/models/enums/WebSiteType'
import EarthquakesContainer from '@/containers/earthquakes';
import { notFound } from 'next/navigation';

const EarthquakesPage = async ({ params, searchParams }: any) => {
    const isExitst = Object.values(WebSiteType).includes(params.type)
    console.log(searchParams)
    console.log(searchParams.error)
    console.log(searchParams.error && searchParams.error == 'true')
    if (searchParams.error && searchParams.error == 'true') {
        throw new Error("error")
    }

    console.log(isExitst)
    if (!isExitst) {
        notFound()
    }

    const type = WebSiteType[params.type as keyof typeof WebSiteType]
    const currentPage = Number(searchParams.page)

    const [earthquakes, paginatedEarthquakes] = await Promise.all([
        getEarthquakes(type),
        getEarthquakesWithPaginated({
            index: currentPage - 1,
            siteType: type,
            size: 15
        }),
    ])
    if (currentPage < 0 || currentPage > paginatedEarthquakes.pages) {
        notFound()
    }
    return (
        <div className='fluid'>
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