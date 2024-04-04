
import iconMedia from "../../../public/images/iconeMedia.svg";
import iconGif from "../../../public/images/iconGif.svg";
import iconPoll from "../../../public/images/iconPoll.svg";
import iconSchedoule from "../../../public/images/iconSchedoule.svg";
import TweeEditorAction from "./tweeEditorAction";
import iconEmoji from "../../../public/images/iconEmoji.svg"
import Button from "../button";


function TweetEditorButton(props) {
    return(
        <div className="tweet-editor-buttons">
            <div className="tweet-editor-actions">
                <TweeEditorAction imageAction={iconMedia} />
                <TweeEditorAction imageAction={iconGif} />
                <TweeEditorAction imageAction={iconPoll} />
                <TweeEditorAction imageAction={iconEmoji} />
                <TweeEditorAction imageAction={iconSchedoule} />

            </div>
            {/* <span disabled={props.disabled} style={props.disabled ? {backgroundColor: "gray"}: {}}> */}
                <Button disabled={props.disabled} style={props.disabled ? {opacity: "0.5"}: {}}  onClick={props.onClick} onSubmit={props.onSubmit} textButton="Tweet" className="button" />  
            {/* </span> */}
        </div>
    )
}
export default TweetEditorButton