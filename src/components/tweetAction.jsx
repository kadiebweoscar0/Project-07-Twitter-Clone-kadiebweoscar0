import iconReply from "../images/iconReply.svg";
import iconRetweet from "../images/iconRetweet.svg";
import iconReact from "../images/iconReact.svg";
import iconShare from "../images/iconShare.svg";
import TweeEditorAction from "./tweeEditorAction";


function TweetAction(props) {
    return(
        <div className="tweet-actions">
            <TweeEditorAction valueAction={props.value1} imageAction={iconReply} myStyleButton="tweet-action" />
            <TweeEditorAction valueAction={props.value2} imageAction={iconRetweet} myStyleButton="tweet-action" />
            <TweeEditorAction valueAction={props.value3} imageAction={iconReact} myStyleButton="tweet-action" />
            <TweeEditorAction valueAction={props.value4} imageAction={iconShare} myStyleButton="tweet-action" />
        </div>
    )
}
export default TweetAction