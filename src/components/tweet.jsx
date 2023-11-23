import tweetimage from "../images/tweet-image.png";
import iconTweeter from "../images/iconTweeter.svg"
import tweetProfile from "../images/tweet-profile-photo.png";
import tweetProfil2 from "../images/tweetProfil2.svg";
import Avatar from "./avatar";
import TweetContent from "./tweetContent";
import TweetImage from "./tweetImage";
import TweetText from "./tweetText";
import TweetTitleAuthor from "./tweetTitleAuthor";
import TweetTitleDetail from "./tweetTitleDetail";
import TweetAction from "./tweetAction";

function Tweet() {
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
                    <TweetImage urlImage={tweetimage} />
                    <div className="tweet-content">
                        <TweetAction value1="19" value2="48" value3="482" value4="19" />
                    </div>
                </div>
            </div>

            <div className="tweet">
                <Avatar avatar={iconTweeter} myClassName="tweet-avatar"/>
                <div className="tweet-body">
                    <div className="tweet-title">
                        <TweetTitleAuthor myStyleTitleAuthor="tweet-title-author" titleAuthor="Tweeter" />
                        <TweetTitleDetail styleTitleDetail="tweet-title-details" titleDetail="@Tweeter" />
                        <TweetTitleDetail styleTitleDetail="tweet-title-details" titleDetail=".OCT 29" />
                    </div>
                    <TweetText tweetTextValue="BIG NEWS lol jk still tweeter" />
                    <div className="tweet-content">
                        <TweetAction value1="6,8K" value2="36,6k" value3="267.1K" value4="" />
                    </div>
                </div>
            </div>

            <div className="tweet">
                <Avatar avatar={iconTweeter} myClassName="tweet-avatar"/>
                <div className="tweet-body">
                    <div className="tweet-title">
                        <TweetTitleAuthor myStyleTitleAuthor="tweet-title-author" titleAuthor="Tweeter" />
                        <TweetTitleDetail styleTitleDetail="tweet-title-details" titleDetail="@Tweeter" />
                        <TweetTitleDetail styleTitleDetail="tweet-title-details" titleDetail=".OCT 4" />
                    </div>
                    <TweetText tweetTextValue="Hello literaly everyone" />
                    <div className="tweet-content">
                        <TweetAction value1="118,7K" value2="785,4k" value3="3,3M" value4="" />
                    </div>
                </div>
            </div>

            <div className="tweet">
                <Avatar avatar={iconTweeter} myClassName="tweet-avatar"/>
                <div className="tweet-body">
                    <div className="tweet-title">
                        <TweetTitleAuthor myStyleTitleAuthor="tweet-title-author" titleAuthor="Tweeter" />
                        <TweetTitleDetail styleTitleDetail="tweet-title-details" titleDetail="@Tweeter" />
                        <TweetTitleDetail styleTitleDetail="tweet-title-details" titleDetail=".OCT 4" />
                    </div>
                    <TweetText tweetTextValue="Hello literaly everyone" />
                </div>
            </div>
        </>
    )
}
export default Tweet