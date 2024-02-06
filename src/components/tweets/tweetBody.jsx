import { useContext } from "react";
import TweetImage from "./tweetImage";
import TweetText from "./tweetText";
import TweetTitle from "./tweetTitle";
import ContexteTweet from "../../asset/contexteTweet";

function TweetBody(props) {
    const {imageTweet} = useContext(ContexteTweet)
    return(
        <div className="tweet-body">
            <TweetTitle />
            <TweetText tweetTextValue={props.tweetTextValue} />
            <TweetImage urlImage={imageTweet} />
        </div>
    )
}
export default TweetBody