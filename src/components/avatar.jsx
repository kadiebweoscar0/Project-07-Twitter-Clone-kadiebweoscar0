import { useContext } from "react"
import ContexteTweet from "../asset/contexteTweet";
// import { ContexteTweet } from "./tweets/tweets"

function Avatar(props) {
    return(
        <img className={props.myClassName} src={props.urlAvatar} alt="photo-avatar"/>
    )
}
export default Avatar