import TweetAction from "./tweetAction";
import TweetBody from "./tweetBody";

function TweetContent(props) {
    return(
        <div className="tweet-content overflow-hidden">
            <TweetBody tweetTextValue={props.tweetTextValue} />
            <TweetAction value1={props.tweetActionValue1} value2={props.tweetActionValue2} value3={props.tweetActionValue3} value4={props.tweetActionValue4} />
        </div>
    )
}
export default TweetContent