import tweetProfile from "../images/tweet-profile-photo.png";
import Avatar from "./avatar";
import TweetTitleAuthor from "./tweetTitleAuthor";

function Tweet(props) {
    return(
        <div className="tweet">
            <Avatar avatar={tweetProfile} myClassName="tweet-avatar"/>
            <TweetTitleAuthor myStyleTitleAuthor="tweet-title-author" titleAuthor="CNN" />
        </div>
    )
}
export default Tweet