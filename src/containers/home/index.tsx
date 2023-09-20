import ArticlesSection from '@/components/articles-section'
import Article from '@/models/response/article'
import React from 'react'

interface HomeContainerProps {
    articles: Article[]
}

const HomeContainer = ({ articles }: HomeContainerProps) => {
    return (
        <div>
            <ArticlesSection title='Latest Articles' count={2} articles={articles} />
            <ArticlesSection title='Popular Articles' count={4} articles={articles} />
            <ArticlesSection title='All Articles' articles={articles} />
        </div>
    )
}

export default HomeContainer