import Avatar from "./avatar";
import TweetEditorForm from "./tweetEditorForm";
import imageProfil from "../images/profile-photo.png";

function TweetEditor() {
    return(
        <div className="tweet-editor">
            <Avatar avatar="imageProfil" myClassName="avatar"/>
            <TweetEditorForm />
        </div>
    )
}

export default TweetEditor