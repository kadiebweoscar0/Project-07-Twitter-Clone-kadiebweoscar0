import TweetEditorForm from "./tweetEditorForm";
import imageProfil from "../../../public/images/profile-photo.png";
import Avatar from "../avatar";
import { Current_user } from "../../datas.json"

function TweetEditor() {
    return(
        <div className="tweet-editor">
            <Avatar urlAvatar={imageProfil} myClassName="avatar"/>
            <TweetEditorForm />
        </div>
    )
}
export default TweetEditor