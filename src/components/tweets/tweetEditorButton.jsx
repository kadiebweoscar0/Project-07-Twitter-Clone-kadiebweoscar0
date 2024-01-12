
import iconMedia from "../../../public/images/iconeMedia.svg";
import iconGif from "../../../public/images/iconGif.svg";
import iconPoll from "../../../public/images/iconPoll.svg";
import iconSchedoule from "../../../public/images/iconSchedoule.svg";
import TweeEditorAction from "./tweeEditorAction";
import iconEmoji from "../../../public/images/iconEmoji.svg"
import Button from "../button";

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
            <Button textButton="Tweet" className="button" />
        </div>
    )
}
export default TweetEditorButton