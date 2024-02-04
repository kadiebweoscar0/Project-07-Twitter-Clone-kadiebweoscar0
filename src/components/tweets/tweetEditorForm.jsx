
import { useState } from "react";
import TweetEditorButton from "./tweetEditorButton";
import TweetEditorInput from "./tweetEditorInput";


let valueTextArea = document.getElementById("kk")








function TweetEditorForm(){

    const handlSubmitButton = (e) =>{
        e.preventDefault();
        // let vc = handlChange
        // console.log(vc)
    }

    const [valueInput, setValueInout] = useState("");

    const handlChange = (e) =>{
        const valueI = e.target.value
        setValueInout(valueI)
        
        console.log(valueInput);
    }

    const handlClick = () =>{
        
        console.log(handlChange);
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