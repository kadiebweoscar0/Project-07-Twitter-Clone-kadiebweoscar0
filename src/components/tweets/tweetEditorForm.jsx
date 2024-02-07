
import { useContext, useState } from "react";
import TweetEditorButton from "./tweetEditorButton";
import TweetEditorInput from "./tweetEditorInput";
import ContextApp from "../../asset/contextApp";


let valueTextArea = document.getElementById("kk")

function TweetEditorForm(){
    const {tweets, allDataTweets, setAllDataTweets} = useContext(ContextApp)

    const handlSubmitButton = (e) =>{
        e.preventDefault();
    }

    const [valueInput, setValueInout] = useState("");

    const handlChange = (e) =>{
        const valueI = e.target.value
        setValueInout(valueI)
    }
    const handlClick = (e) =>{
        e.preventDefault()
        const copiTweets = tweets.slice()

        tweets.unshift({"id": tweets.length + 1,
        "tweetProfile": "public/images/profile-photo.png",
        "titleAuthor": "Bradley Ortiz",
        "titleAddress":"@Bradley Ortiz",
        "dateHoursPublication":". 7min",
        "dateJoined" : "joined December 2023",
        "following" : 6,
        "followers": 0,
        "posts": 0,
        "cover": "public/images/CoverCUrrentUser.jpeg",
        "id_tweet" : 1,
        "tweetTextValue": valueInput,
        "tweetActionValue1": 0,
        "tweetActionValue2": 0,
        "tweetActionValue3": 0,
        "tweetActionValue4":"",
        "imageTweet":""})

        setAllDataTweets(copiTweets)

    }

    return(
        <form onSubmit={handlSubmitButton} className="tweet-editor-form">
            {/* <TweetEditorInput className="tweet-editor-input" placeholder="what's happening?"/> style={{overflow: "hidden",}} */}
            <input id="kk" onChange={handlChange}  className="tweet-editor-input" type="text" placeholder="what's happening?"/>
            <TweetEditorButton onClick={handlClick}  />
        </form>
    )
}
export default TweetEditorForm