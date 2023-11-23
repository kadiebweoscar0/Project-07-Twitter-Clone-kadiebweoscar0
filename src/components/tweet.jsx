import tweetImage from "../images/tweet-image.png";
import tweetProfile from "../images/tweet-profile-photo.png";
import tweetProfil2 from "../images/tweetProfil2.svg";
import Avatar from "./avatar";
import TweetContent from "./tweetContent";
import TweetImage from "./tweetImage";
import TweetText from "./tweetText";
import TweetTitleAuthor from "./tweetTitleAuthor";
import TweetTitleDetail from "./tweetTitleDetail";
import TweetAction from "./tweetAction";

function Tweet(props) {
    return(
        <>
        <div className="tweet">
            <Avatar avatar={tweetProfile} myClassName="tweet-avatar"/>
            <TweetContent tweetActionValue1="57" tweetActionValue2="144" tweetActionValue3="184" tweetActionValue4="" />
        </div>

        <div className="tweet">
            <Avatar avatar={tweetProfil2} myClassName="tweet-avatar"/>
            <div className="tweet-body">
                <div className="tweet-title">
                    <TweetTitleAuthor myStyleTitleAuthor="tweet-title-author" titleAuthor="THE NEW YORK TIME" />
                    <TweetTitleDetail styleTitleDetail="tweet-title-details" titleDetail="@nytimes" />
                    <TweetTitleDetail styleTitleDetail="tweet-title-details" titleDetail=".2h" />
                </div>
                <TweetText tweetTextValue="Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land" />
                <TweetImage ulrImage={tweetImage} />
                <div className="tweet-content">
                    <TweetAction value1="19" value2="48" value3="482" value4="19" />
                </div>
            </div>
        </div>
        </>
    )
}
export default Tweet