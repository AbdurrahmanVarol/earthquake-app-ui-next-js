import React from 'react'
import styles from "./styles.module.css";

interface SkeletonProps {
    width?: number,
    height?: number
}
const Skeleton = ({ width, height }: SkeletonProps) => {
    return (
        <div className={styles.skeleton} style={{ width, height }}></div>
    )
}

export default Skeleton