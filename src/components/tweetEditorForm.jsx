
import TweetEditorButton from "./tweetEditorButton";
import TweetEditorInput from "./tweetEditorInput";

function TweetEditorForm() {
    return(
        <form className="tweet-editor-form">
            <TweetEditorInput className="tweet-editor-input" valueText="what's happening?"/>
            <TweetEditorButton />
        </form>
    )
}
export default TweetEditorForm