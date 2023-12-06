import TweetImage from "./tweetImage";
import TweetText from "./tweetText";
import TweetTitle from "./tweetTitle";

function TweetBody(props) {
    return(
        <div className="tweet-body">
            <TweetTitle titleAuthor={props.titleAuthor} titleAddress={props.titleAddress} dateHoursPublication={props.dateHoursPublication} />
            <TweetText tweetTextValue={props.tweetTextValue} />
            <TweetImage urlImage={props.urlImage} />
        </div>
    )
}
export default TweetBody