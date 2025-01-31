import { useEffect, useState } from 'react'
import { Tweets, TweetsProfile } from '../../services/project-api/tweets'
import { Posts } from '../../components/posts'

export function Home() {
  const [tweets, setTweets] = useState<Tweets[]>([])

  useEffect(() => {
    const fetchTweets = async () => {
      const response = await TweetsProfile()

      if (!response.success) {
        return
      }
      setTweets(response.data || [])
    }

    fetchTweets()
  }, [])
  return (
    <>
      {tweets.map((tweet) => (
        <Posts key={tweet.id} tweet={tweet} />
      ))}
    </>
  )
}
