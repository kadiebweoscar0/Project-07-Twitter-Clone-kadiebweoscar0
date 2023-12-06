import TweetTitleAuthor from "./tweetTitleAuthor";
import TweetTitleDetail from "./tweetTitleDetail";


function TweetTitle(props) {
    return(
        <div className="tweet-title">
            <TweetTitleAuthor myStyleTitleAuthor="tweet-title-author" titleAuthor={props.titleAuthor} />
            <TweetTitleDetail styleTitleDetail="tweet-title-details" titleAddress={props.titleAddress} />
            <TweetTitleDetail styleTitleDetail="tweet-title-details" dateHoursPublication={props.dateHoursPublication} />
        </div>
    )
}
export default TweetTitle