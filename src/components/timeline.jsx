import Header from "./header"
import Tweets from "./tweets"
import TweetEditor from "./tweetEditor"



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