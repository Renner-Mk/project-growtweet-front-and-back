import { ITweets } from '../../services/project-api/tweetsFeed'
import { Tweet, TweetContainer, TweetContent, TweetImg } from './styles'

interface TweetProps {
  tweet: ITweets
}

export function Posts({ tweet }: TweetProps) {
  return (
    <>
      <Tweet>
        <TweetImg src={tweet.user.urlImg}></TweetImg>
        <TweetContainer>
          <TweetContent>
            <h3>
              {tweet.user.name} <span>@{tweet.user.username}</span>
            </h3>
            <p>{tweet.content}</p>
          </TweetContent>
          <div>
            <span>comentarios</span>
            <span>likes</span>
          </div>
        </TweetContainer>
      </Tweet>
    </>
  )
}
