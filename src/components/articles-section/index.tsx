import Image from 'next/image'
import React from 'react'
import Styles from './styles.module.css'
import Article from '@/models/response/article'

interface ArticlesSectionProps {
    title: string,
    count?: number,
    articles: Article[]
}

const ArticlesSection = ({ title, count, articles }: ArticlesSectionProps) => {
    const items = count ? articles.slice(0, count) : articles

    return (
        <div className={Styles.articlesSection}>
            <h3 className={Styles.title}>{title}</h3>
            <div className={Styles.articles}>
                {
                    items.map((article: any, index: number) => (
                        <div key={index} className={Styles.article}>
                            <div style={{ position: "relative" }}>
                                **************************************************
                                <Image
                                    alt={article.title}
                                    src={article.imageUrl}
                                    fill
                                />
                            </div>
                            <div style={{ position: "relative", width: "40%" }}>
                                <h3 style={{ marginBottom: 10 }}>{article.title}</h3>
                                <p>{article.contentText}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ArticlesSection