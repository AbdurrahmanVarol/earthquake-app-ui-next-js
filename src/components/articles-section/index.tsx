import Image from 'next/image'
import React from 'react'
import Styles from './styles.module.css'

const ArticlesSection = ({ articles }: any) => {
    return (
        <div className={Styles.articles}>
            <h3 className={Styles.title}>Popular Articles</h3>
            {
                articles && articles.map((article: any, index: number) => (
                    <div key={index} className={Styles.article}>
                        <Image
                            alt={article.title}
                            src={article.imageUrl}
                            width={200}
                            height={150}
                        />
                        <div>
                            <h3 style={{ marginBottom: 10 }}>{article.title}</h3>
                            <p>{article.contentText}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ArticlesSection