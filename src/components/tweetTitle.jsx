import TweetTitleAuthor from "./tweetTitleAuthor";
import TweetTitleDetail from "./tweetTitleDetail";


function TweetTitle() {
    return(
        <div className="tweet-title">
            <TweetTitleAuthor myStyleTitleAuthor="tweet-title-author" titleAuthor="CNN" />
            <TweetTitleDetail styleTitleDetail="tweet-title-details" titleDetail="@CNN" />
            <TweetTitleDetail styleTitleDetail="tweet-title-details" titleDetail=". 7min" />
        </div>
    )
}
export default TweetTitle