import TweetText from "./tweetText";
import TweetTitle from "./tweetTitle";

function TweetBody() {
    return(
        <div className="tweet-body">
            <TweetTitle />
            <TweetText tweetTextValue="President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a major breakthrough that would serve to both strengthen the US steel industry and combat the global climate crisis." />
        </div>
    )
}
export default TweetBody