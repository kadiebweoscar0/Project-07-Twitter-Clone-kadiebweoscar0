import Avatar from "../avatar";
import TweetContent from "./tweetContent";
import { datas } from "../../datas";
import { NavLink } from "react-router-dom";


function Tweet({user, data, key}) {
    
    return(
        <>
            <div className="tweet" key={key}>
                <NavLink to={`/${user.titleAuthor}`} >
                    <Avatar avatar={user.tweetProfile} myClassName="tweet-avatar" />
                </NavLink>
                <TweetContent
                    tweetTextValue={data.tweetTextValue}
                    tweetActionValue1={data.tweetActionValue1}
                    tweetActionValue2={data.tweetActionValue2}
                    tweetActionValue3={data.tweetActionValue3}
                    tweetActionValue4={data.tweetActionValue4}
                    id={user.name}
                    titleAuthor={user.titleAuthor}
                    titleAddress={user.titleAddress}
                    dateHoursPublication={user.dateHoursPublication}
                    urlImage={data.imageTweet}
                />
            </div>
        </>
    )
}
export default Tweet
