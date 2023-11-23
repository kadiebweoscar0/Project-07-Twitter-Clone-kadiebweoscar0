
import TweetEditorButton from "./tweetEditorButton";
import TweetEditorInput from "./tweetEditorInput";

function TweetEditorForm() {
    return(
        <div className="tweet-editor-form">
            <TweetEditorInput valueText="what's happening?"/>
            <TweetEditorButton />
        </div>
    )
}
export default TweetEditorForm