import Tweets from "../tweets/tweets"
import TweetEditor from "../tweets/tweetEditor"
import Header from "../header/header"



function Timeline() {
    return(
        <div className="timeline">
            <Header />
            <TweetEditor />
            <Tweets /> 
        </div>
    )
}

export default Timeline