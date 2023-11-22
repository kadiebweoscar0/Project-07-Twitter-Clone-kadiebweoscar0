import iconReply from "../images/iconReply.svg";
import iconRetweet from "../images/iconRetweet.svg";
import iconReact from "../images/iconReact.svg";
import iconShare from "../images/iconShare.svg";
import TweeEditorAction from "./tweeEditorAction";


function TweetAction() {
    return(
        <div className="tweet-editor-actions">
            <TweeEditorAction imageAction={iconReply} />
            <TweeEditorAction imageAction={iconRetweet} />
            <TweeEditorAction imageAction={iconReact} />
            <TweeEditorAction imageAction={iconShare} />
        </div>
    )
}
export default TweetAction