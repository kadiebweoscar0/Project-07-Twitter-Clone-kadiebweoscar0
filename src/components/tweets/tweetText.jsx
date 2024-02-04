import { useContext } from "react"
import ContexteTweet from "../../asset/contexteTweet"

function TweetText() {
    const textTweet = useContext(ContexteTweet)
    
    return(
        <p className="tweet-text">{textTweet.tweetTextValue}</p>
    )
}
export default TweetText