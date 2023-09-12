import ArticlesSection from '@/components/articles-section'
import Article from '@/models/response/article'
import React from 'react'

const HomeContainer = ({ articles }: any) => {
    return (
        <div>
            <ArticlesSection articles={articles} />
        </div>
    )
}

export default HomeContainer