import { NavLink } from "react-router-dom";
import TweetTitleAuthor from "./tweetTitleAuthor";
import TweetTitleDetail from "./tweetTitleDetail";


function TweetTitle(props) {
    return(
        <div className="tweet-title">
            <NavLink to={`/${props.titleAuthor}`} >
                <TweetTitleAuthor myStyleTitleAuthor="tweet-title-author" titleAuthor={props.titleAuthor} />
            </NavLink>
            <NavLink to={`/${props.titleAuthor}`} >
                <TweetTitleDetail styleTitleDetail="tweet-title-details" titleAddress={props.titleAddress} />
            </NavLink>
            <TweetTitleDetail styleTitleDetail="tweet-title-details" dateHoursPublication={props.dateHoursPublication} />
        </div>
    )
}
export default TweetTitle