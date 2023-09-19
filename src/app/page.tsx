import HomeContainer from '@/containers/home'
import '@/styles/global.css'
import Articles from '@/mocks/articles.json'
import Article from '@/models/response/article'

const HomePage = async () => {
  const articles: Article[] = Articles.articles
  return (
    <div>
      <HomeContainer articles={articles} />
    </div>
  )
}

export default HomePage