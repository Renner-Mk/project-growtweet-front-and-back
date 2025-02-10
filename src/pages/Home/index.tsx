import { useEffect, useState } from 'react'
import { Posts } from '../../components/posts'
import { HomeContainer } from './styles'
import { ITweets, TweetsFeed } from '../../services/project-api/tweetsFeed'

export function Home() {
  const [tweets, setTweets] = useState<ITweets[]>([])

  useEffect(() => {
    const fetchTweets = async () => {
      const response = await TweetsFeed()

      if (!response.success) {
        return
      }
      setTweets(response.data || [])
    }

    fetchTweets()
  }, [])
  return (
    <>
      <HomeContainer>
        <h1>Página Inicial</h1>
      </HomeContainer>
      {tweets.map((tweet) => (
        <Posts key={tweet.id} tweet={tweet} />
      ))}
    </>
  )
}
