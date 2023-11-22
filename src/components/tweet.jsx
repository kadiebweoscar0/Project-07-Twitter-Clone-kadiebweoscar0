import tweetProfile from "../images/tweet-profile-photo.png";
import Avatar from "./avatar";
import TweetContent from "./tweetContent";

function Tweet(props) {
    return(
        <div className="tweet">
            <Avatar avatar={tweetProfile} myClassName="tweet-avatar"/>
            <TweetContent />
        </div>
    )
}
export default Tweet