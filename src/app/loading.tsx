import ArticlesSectionLoading from '@/components/articles-section/loading'
import React from 'react'

const Loading = () => {
    return (
        <div>
            <ArticlesSectionLoading count={2} />
            <ArticlesSectionLoading count={4} />
            <ArticlesSectionLoading count={6} />
        </div>
    )
}

export default Loading