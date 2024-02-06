import { NavLink } from "react-router-dom";
import TweetTitleAuthor from "./tweetTitleAuthor";
import TweetTitleDetail from "./tweetTitleDetail";
import { useContext } from "react";
import ContexteTweet from "../../asset/contexteTweet";


function TweetTitle(props) {
    const infoAuthor = useContext(ContexteTweet)
    // console.log(infoAuthor);
    return(
        <div className="tweet-title">
            <NavLink to={`/${infoAuthor.titleAuthor}`} >
                <TweetTitleAuthor titleAuthor={infoAuthor.titleAuthor} />
            </NavLink>
            <NavLink to={`/${infoAuthor.titleAuthor}`} >
                <TweetTitleDetail styleTitleDetail="tweet-title-details" titleAddress={infoAuthor.titleAddress} />
            </NavLink>
            <TweetTitleDetail styleTitleDetail="tweet-title-details" dateHoursPublication={infoAuthor.dateHoursPublication} />
        </div>
    )
}
export default TweetTitle