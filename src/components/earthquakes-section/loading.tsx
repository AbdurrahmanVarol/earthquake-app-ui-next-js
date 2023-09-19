import React from 'react'
import Skeleton from '../skeleton'

const EarthquakeSectionLoading = () => {
    return (
        <div>
            <Skeleton height={400} />
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Skeleton height={40} width={360} />
            </div>
        </div>
    )
}

export default EarthquakeSectionLoading