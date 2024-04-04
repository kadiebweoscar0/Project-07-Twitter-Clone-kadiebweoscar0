import TweetEditorForm from "./tweetEditorForm";
import imageProfil from "../../../public/images/profile-photo.png";
import Avatar from "../avatar";
import { Current_user } from "../../datas.json"
import { useContext } from "react";
import ContextApp from "../../asset/contextApp";

function TweetEditor() {
    const {allDataTweets, usersAndTweets} = useContext(ContextApp)
    const logerDefault = usersAndTweets[7]
    return(
        <div className="tweet-editor">
            <Avatar urlAvatar={logerDefault?.profilePicture} myClassName="w-24 rounded-full avatar"/>
            <TweetEditorForm />
        </div>
    )
}
export default TweetEditor