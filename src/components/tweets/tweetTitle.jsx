import { NavLink } from "react-router-dom";
import TweetTitleAuthor from "./tweetTitleAuthor";
import TweetTitleDetail from "./tweetTitleDetail";
import { useContext } from "react";
import ContexteTweet from "../../asset/contexteTweet";

function TweetTitle() {
    const {user} = useContext(ContexteTweet)
    return(
        <div className="tweet-title">
            <NavLink to={`/${user.handle}`} >
                <TweetTitleAuthor titleAuthor={user.name} />
            </NavLink>
            <NavLink to={`/${user.handle}}`} >
                <TweetTitleDetail styleTitleDetail="tweet-title-details" titleAddress={user.createdAt.substring(0, 33)} />
            </NavLink>
            {/* <TweetTitleDetail styleTitleDetail="tweet-title-details" dateHoursPublication={infoAuthor.createdAt} /> */}
        </div>
    )
}
export default TweetTitle