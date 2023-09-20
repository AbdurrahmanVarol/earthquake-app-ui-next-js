import PaginatedResponse from '@/models/response/PaginatedResponse'
import Link from 'next/link'
import React from 'react'
import moment from "moment";
import PaginationBar from '../pagination-bar';
import { WebSiteType } from '@/models/enums/WebSiteType';
import Styles from './styles.module.css'

interface EarthquakeSectionProps {
    width?: string,
    height?: string,
    type: WebSiteType,
    currentPage: number,
    paginatedEarthquakes: PaginatedResponse
}

const EarthquakeSection = ({ width, height, type, currentPage, paginatedEarthquakes }: EarthquakeSectionProps) => {

    const getColorByMagnitude = (magnitude: number | undefined): string => {
        if (!magnitude) {
            return "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 100%)"
        }
        if (magnitude && magnitude < 3) {
            return "linear-gradient(90deg, rgba(240,240,240,1) 0%, rgba(22,255,0,1) 50%, rgba(22,255,0,1) 55%, rgba(255,255,255,1) 100%)"
        }
        if (magnitude && (magnitude >= 3 && magnitude <= 4)) {
            return "linear-gradient(90deg, rgba(240,240,240,1) 0%, rgba(255,237,0,1) 50%, rgba(255,237,0,1) 55%, rgba(255,255,255,1) 100%)"
        }
        else {
            return "linear-gradient(90deg, rgba(240,240,240,1) 0%, rgba(215,19,19,1) 50%, rgba(215,19,19,1) 55%, rgba(255,255,255,1) 100%)"
        }
    }

    return (
        <div className={Styles.earthquakesBody} style={{ width: width, height: height }}>
            <div style={{ height: "fit-content" }}>
                <h3 style={{ color: "black" }}>Latest Earthquakes - {`${WebSiteType[type]}`.toLocaleUpperCase()}</h3>
                <hr></hr>
            </div>
            <table className={Styles.earthquakesTable}>
                <thead style={{ backgroundColor: "#26577C", color: "white", height: 30 }}>
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
                    {paginatedEarthquakes.items.map((earthquake, index) => (
                        <tr
                            key={index}
                            style={{ color: "black", background: `${getColorByMagnitude(earthquake.magnitude)}` }}
                        >
                            <td>{moment(earthquake.date).format("DD/MM/yyy HH:mm:ss")}</td>
                            <td>{earthquake.latitude}</td>
                            <td>{earthquake.longitude}</td>
                            <td>{earthquake.depth}</td>
                            <td>{earthquake.type}</td>
                            <td >{earthquake.magnitude}</td>
                            <td style={{ textAlign: "start" }}>{earthquake.location}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <PaginationBar
                type={type}
                currentPage={currentPage}
                pages={paginatedEarthquakes.pages}
                hasNext={paginatedEarthquakes.hasNext}
                hasPrevious={paginatedEarthquakes.hasPrevious}
            />
        </div>
    )
}

export default EarthquakeSection