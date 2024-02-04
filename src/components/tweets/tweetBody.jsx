import TweetImage from "./tweetImage";
import TweetText from "./tweetText";
import TweetTitle from "./tweetTitle";

function TweetBody(props) {
    return(
        <div className="tweet-body">
            <TweetTitle />
            <TweetText  />
            <TweetImage />
        </div>
    )
}
export default TweetBody