import React from 'react'
import Skeleton from '../skeleton'
import Spinner from '../spinner'

const MapLoading = () => {
    return (
        <div style={{ height: '50%', marginBottom: 10 }}>
            <Spinner />
            {/* <Skeleton height={350} /> */}
        </div>
    )
}

export default MapLoading