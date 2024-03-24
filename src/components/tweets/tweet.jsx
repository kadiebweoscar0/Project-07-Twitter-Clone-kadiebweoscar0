import { useContext } from "react";
import Avatar from "../avatar";
import TweetContent from "./tweetContent";
import { NavLink } from "react-router-dom";
import ContexteTweet from "../../asset/contexteTweet";
import ContextApp from "../../asset/contextApp";


function Tweet() {
    const {tweet, user} = useContext(ContexteTweet);
    
    return(
        <>
            {
                <div className="tweet overflow-hidden" key={tweet.id}>
                        <NavLink to={`/${user.handle}/tweets`} >
                            <Avatar myClassName="w-20 rounded-full" urlAvatar={user.profilePicture} />
                        </NavLink>
                        <TweetContent tweetTextValue = {tweet.text}
                        />
                    </div>
            }
        </>
    )
}
export default Tweet
