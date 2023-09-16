'use client'
import React, { useEffect, useState } from 'react'
import { getEarthquakesWithPaginated } from '@/services/earthquakeService'
import { WebSiteType } from '@/models/enums/WebSiteType'
import moment from "moment";
import { RedirectType } from 'next/dist/client/components/redirect';
import EarthquakeResponse from '@/models/response/EarthquakeResponse'
import { useRouter } from 'next/navigation';
import PaginationBar from '@/components/pagination-bar';


const EarthquakesPage = ({ params, searchParams }: any) => {
    const [earthquakes, setEarthquakes] = useState<EarthquakeResponse[]>([])
    const router = useRouter()
    const loadEathquakes = async () => {
        console.log(params)
        console.log(searchParams)
        console.log(WebSiteType[params.type])
        const data = await getEarthquakesWithPaginated({
            index: searchParams.page,
            siteType: WebSiteType[params.type as keyof typeof WebSiteType],
            size: 10
        })
        setEarthquakes(data.items)
    }

    useEffect(() => {
        loadEathquakes()
    }, [])

    console.log(earthquakes)

    const redirectToMap = (latitude: number, longitude: number) => {
        console.log("clicked")
        router.push(`/map?latitude=${latitude}&longitude=${longitude}`)
    };
    return (
        <div>
            <table style={{ height: "80%", marginBottom: 10 }}>
                <thead>
                    <tr>
                        <th style={{ width: "20%" }}>Date</th>
                        <th style={{ width: "8%" }}>Latitude</th>
                        <th style={{ width: "8%" }}>Longitude</th>
                        <th style={{ width: "8%" }}>Depth</th>
                        <th style={{ width: "8%" }}>Type</th>
                        <th style={{ width: "8%" }}>Magnitude</th>
                        <th style={{ width: "40%" }}>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {earthquakes.map((earthquake, index) => (
                        <tr
                            key={index}
                            onClick={() => redirectToMap(earthquake.latitude, earthquake.longitude)}
                            style={{ backgroundColor: "white", marginBottom: 50, color: "black" }}
                        >
                            <td>{moment(earthquake.date).format("DD/MM/yyy HH:mm:ss")}</td>
                            <td>{earthquake.latitude}</td>
                            <td>{earthquake.longitude}</td>
                            <td>{earthquake.depth}</td>
                            <td>{earthquake.type}</td>
                            <td >{earthquake.magnitude}</td>
                            <td className="text-start">{earthquake.location}</td>
                        </tr>
                        //className={getColorBySize(item.magnitude)}
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default EarthquakesPage