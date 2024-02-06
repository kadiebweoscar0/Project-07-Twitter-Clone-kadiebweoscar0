import ImageDefault from "../imageDefault"
import { useContext } from "react";
import ContexteTweet from "../../asset/contexteTweet";

function TweetImage(props) {
    // const urlImageTweet = useContext(ContexteTweet)

    if (props.urlImage) {
        return(
            <div className="tweet-image">
                <ImageDefault urlImage={props.imageTweet} alt="image-tweet" />
            </div>
        )
    }
}
export default TweetImage