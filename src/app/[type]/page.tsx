import React from 'react'
import { getEarthquakesWithPaginated } from '@/services/earthquakeService'
import { WebSiteType } from '@/models/enums/WebSiteType'
import moment from "moment";


const EarthquakesPage = async ({ params, searchParams }: any) => {
    console.log(params)
    console.log(searchParams)
    console.log(WebSiteType[params.type])
    const earthquakes = await getEarthquakesWithPaginated({
        index: searchParams.page,
        siteType: WebSiteType[params.type as keyof typeof WebSiteType],
        size: 20
    })
    console.log(earthquakes)
    return (
        <div>
            <table>
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
                    {earthquakes.items.map((item, index) => (
                        <tr
                            key={index}
                        // onClick={() => navigateToMap(item.latitude, item.longitude)}
                        >
                            <td>{moment(item.date).format("DD/MM/yyy")}</td>
                            <td>{item.latitude}</td>
                            <td>{item.longitude}</td>
                            <td>{item.depth}</td>
                            <td>{item.type}</td>
                            <td >{item.magnitude}</td>
                            <td className="text-start">{item.location}</td>
                        </tr>
                        //className={getColorBySize(item.magnitude)}
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default EarthquakesPage