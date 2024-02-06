import { useContext } from "react"
import ContexteTweet from "../../asset/contexteTweet"

function TweetText(proos) {
    // const textTweet = useContext(ContexteTweet) 
    
    return(
        <p className="tweet-text">{proos.tweetTextValue}</p>
    )
}
export default TweetText