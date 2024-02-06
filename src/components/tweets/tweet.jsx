import { useContext } from "react";
import Avatar from "../avatar";
import TweetContent from "./tweetContent";
import { NavLink } from "react-router-dom";
import ContexteTweet from "../../asset/contexteTweet";

function Tweet() {
    const dataTweet = useContext(ContexteTweet);
    
    return(
        <>
            {dataTweet.tweetTextValue &&
                <div className="tweet" key={dataTweet.id}>
                    <NavLink to={`/${dataTweet.titleAuthor}`} >
                        <Avatar urlAvatar={dataTweet.tweetProfile} />
                    </NavLink>
                    <TweetContent
                        tweetTextValue={dataTweet.tweetTextValue}
                        tweetActionValue1={dataTweet.tweetActionValue1}
                        tweetActionValue2={dataTweet.tweetActionValue2}
                        tweetActionValue3={dataTweet.tweetActionValue3}
                        tweetActionValue4={dataTweet.tweetActionValue4}
                    //     id={user.name}
                    />
                </div>
            }
        </>
    )
}
export default Tweet
