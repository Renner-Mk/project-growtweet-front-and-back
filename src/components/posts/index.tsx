import { Tweets } from '../../services/project-api/tweets'

interface TweetProps {
  tweet: Tweets;
}

export function Posts({ tweet }: TweetProps) {
  return (
    <>
      <div>{tweet.content}</div>
    </>
  )
}
