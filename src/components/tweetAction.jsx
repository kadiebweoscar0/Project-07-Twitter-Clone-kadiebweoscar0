import iconReply from "../images/iconReply.svg";
import iconRetweet from "../images/iconRetweet.svg";
import iconReact from "../images/iconReact.svg";
import iconShare from "../images/iconShare.svg";
import TweeEditorAction from "./tweeEditorAction";


function TweetAction() {
    return(
        <div className="tweet-actions">
            <TweeEditorAction imageAction={iconReply} myStyleButton="tweet-action" />
            <TweeEditorAction imageAction={iconRetweet} myStyleButton="tweet-action" />
            <TweeEditorAction imageAction={iconReact} myStyleButton="tweet-action" />
            <TweeEditorAction imageAction={iconShare} myStyleButton="tweet-action" />
        </div>
    )
}
export default TweetAction