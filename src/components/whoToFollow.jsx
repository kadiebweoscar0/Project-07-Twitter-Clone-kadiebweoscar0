import Avatar from "./avatar"
import tweetProfil2 from "../images/tweetProfil2.svg"
import tweetProfilePhoto from "../images/tweet-profile-photo.png"
import TweetTitleAuthor from "./tweetTitleAuthor"
import Button from "./button"

export function AccountFollow(props) {
    return(
        <div className="accountFollow">
            <span className="avatar-and-text">
                <Avatar  avatar={props.avatar} />
                <span>
                    <TweetTitleAuthor 
                    myStyleTitleAuthor={props.myStyleTitleAuthor} 
                    titleAuthor={props.titleAuthor} />
                    <p>@{props.address}</p>
                </span>
            </span>
            <span >
                <Button className="span-button" textButton="Follow" />
            </span>
        </div>
    )
}



function WhoToFollow() {
    return(
        <div className="whoToFollow">
            <h2>Who to follow</h2>
            <AccountFollow 
                avatar={tweetProfil2} 
                myStyleTitleAuthor="" 
                titleAuthor="The New York Times" 
                address="nytimes" 
            />

            <AccountFollow 
                avatar={tweetProfil2} 
                myStyleTitleAuthor="" 
                titleAuthor="The New York Times" 
                address="nytimes" 
            />

            <AccountFollow 
                avatar={tweetProfil2} 
                myStyleTitleAuthor="" 
                titleAuthor="The New York Times" 
                address="nytimes" 
            />
        </div>
    )
}
export default WhoToFollow