import { useContext } from "react"
import ContexteTweet from "../../asset/contexteTweet"

function TweetText(proos) {
    // const textTweet = useContext(ContexteTweet) 
    
    return(
        <p className="tweet-text overflow-hidden">{proos.tweetTextValue}</p>
    )
}
export default TweetText