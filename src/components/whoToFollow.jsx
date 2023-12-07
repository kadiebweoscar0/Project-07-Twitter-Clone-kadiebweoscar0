import Avatar from "./avatar"
import tweetProfil2 from "../images/tweetProfil2.svg"
import TweetTitleAuthor from "./tweetTitleAuthor"
import Button from "./button"

export function AccountFollow(props) {
    return(
        <div className="accountFollow">
            <span>
                <Avatar  avatar={props.avatar} />
                <TweetTitleAuthor myStyleTitleAuthor={props.myStyleTitleAuthor} titleAuthor={props.titleAuthor} />
                <p>@{props.address}</p>
            </span>
            <span>
                <Button className="button" textButton="Follow" />
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
            address="nytimes" />
        </div>
    )
}
export default WhoToFollow