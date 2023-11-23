import Header from "./header"
import Tweet from "./tweet"
import TweetEditor from "./tweetEditor"



function Timeline() {
    return(
        <div className="timeline">
         <Header />
         <TweetEditor />
         <Tweet /> 
        </div>
    )
}

export default Timeline