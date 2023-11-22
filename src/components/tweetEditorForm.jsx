
import TweetEditorButton from "./tweetEditorButton";
import TweetEditorInput from "./tweetEditorInput";

function TweetEditorForm() {
    return(
        <form tweet-editor-actions>
            <TweetEditorInput valueText="what's happening?"/>
            <TweetEditorButton />
        </form>
    )
}
export default TweetEditorForm