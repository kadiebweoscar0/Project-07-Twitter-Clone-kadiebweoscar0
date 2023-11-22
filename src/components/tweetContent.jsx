import TweetAction from "./tweetAction";
import TweetBody from "./tweetBody";

function TweetContent() {
    return(
        <div className="tweet-content">
            <TweetBody />
            <TweetAction />
        </div>
    )
}
export default TweetContent