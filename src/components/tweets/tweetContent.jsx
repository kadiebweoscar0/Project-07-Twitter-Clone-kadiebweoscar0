import TweetAction from "./tweetAction";
import TweetBody from "./tweetBody";

function TweetContent(props) {
    return(
        <div className="tweet-content">
            <TweetBody tweetTextValue={props.tweetTextValue} id={props.id} titleAuthor={props.titleAuthor} titleAddress={props.titleAddress} dateHoursPublication={props.dateHoursPublication} urlImage={props.urlImage} />

            <TweetAction value1={props.tweetActionValue1} value2={props.tweetActionValue2} value3={props.tweetActionValue3} value4={props.tweetActionValue4} />
        </div>
    )
}
export default TweetContent