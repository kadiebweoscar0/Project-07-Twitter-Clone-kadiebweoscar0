import { useContext } from "react";
import TweetImage from "./tweetImage";
import TweetText from "./tweetText";
import TweetTitle from "./tweetTitle";
import ContexteTweet from "../../asset/contexteTweet";

function TweetBody(props) {
    const {tweet} = useContext(ContexteTweet)
    return(
        <div className="tweet-body overflow-hidden">
            <TweetTitle />
            <TweetText tweetTextValue={props.tweetTextValue} />
            {tweet.media && <TweetImage urlImage={tweet.media} />}
        </div>
    )
}
export default TweetBody