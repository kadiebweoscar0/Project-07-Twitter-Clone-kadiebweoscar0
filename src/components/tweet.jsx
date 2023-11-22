import tweetProfile from "../images/tweet-profile-photo.png";
import Avatar from "./avatar";
import TweetAction from "./tweetAction";
import TweetText from "./tweetText";
import TweetTitleAuthor from "./tweetTitleAuthor";
import TweetTitleDetail from "./tweetTitleDetail";

function Tweet(props) {
    return(
        <div className="tweet">
            <Avatar avatar={tweetProfile} myClassName="tweet-avatar"/>
            <TweetTitleAuthor myStyleTitleAuthor="tweet-title-author" titleAuthor="CNN" />
            <TweetTitleDetail styleTitleDetail="tweet-title-details" titleDetail="@CNN" />
            <TweetTitleDetail styleTitleDetail="tweet-title-details" titleDetail=".7min" />
            <TweetText tweetTextValue="President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a major breakthrough that would serve to both strengthen the US steel industry and combat the global climate crisis." />
            <TweetAction />
        </div>
    )
}
export default Tweet