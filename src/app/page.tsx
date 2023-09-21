import HomeContainer from '@/containers/home'
import '@/styles/global.css'
import Articles from '@/mocks/articles.json'
import Article from '@/models/response/article'
import { WebSiteType } from '@/models/enums/WebSiteType'
import { resolve } from 'path'

const wait = async (time: number) => {
  await new Promise((resolve) => {
    setTimeout(resolve, time);
  })
}

const HomePage = async () => {
  await wait(3000)
  const articles: Article[] = Articles.articles
  return (
    <div>
      <HomeContainer articles={articles} />
    </div>
  )
}

export default HomePage