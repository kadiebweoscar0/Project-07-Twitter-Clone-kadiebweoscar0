
import iconMedia from "../images/iconeMedia.svg";
import iconGif from "../images/iconGif.svg";
import iconPoll from "../images/iconPoll.svg";
import iconSchedoule from "../images/iconSchedoule.svg";
import TweeEditorAction from "./tweeEditorAction";
import iconEmoji from "../images/iconEmoji.svg"
import Button from "./button";

function TweetEditorButton() {
    return(
        <div className="tweet-editor-buttons">
            <div className="tweet-editor-actions">
                <TweeEditorAction imageAction={iconMedia} />
                <TweeEditorAction imageAction={iconGif} />
                <TweeEditorAction imageAction={iconPoll} />
                <TweeEditorAction imageAction={iconEmoji} />
                <TweeEditorAction imageAction={iconSchedoule} />

            </div>
            <Button textButton="Tweet" />
        </div>
    )
}
export default TweetEditorButton