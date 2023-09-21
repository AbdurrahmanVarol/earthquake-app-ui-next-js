import React from 'react'
import Styles from './styles.module.css'
import Skeleton from '../skeleton'

interface ArticlesSectionLoadingProps {
    count: number
}
const ArticlesSectionLoading = ({ count }: ArticlesSectionLoadingProps) => {
    return (
        <div className={Styles.articlesSection}>
            <Skeleton width={128} height={36} />
            <div className={Styles.articles}>
                {
                    [...Array(count).keys()].map(p => (
                        <Skeleton key={p} />
                    ))}
            </div>
        </div>
    )
}

export default ArticlesSectionLoading