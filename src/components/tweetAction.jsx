import iconReply from "../images/iconReply.svg";
import iconRetweet from "../images/iconRetweet.svg";
import iconReact from "../images/iconReact.svg";
import iconShare from "../images/iconShare.svg";
import TweeEditorAction from "./tweeEditorAction";
import ValueAction from "./valueAction";
import { useState } from "react";

function TweetAction(props) {
  const [likeCount, setLikeCount] = useState(props.value3);
  const  [isLike, setIsLike]= useState(false)

  const handleLikeClick = () => {
    if (isLike === false) {
        setLikeCount(likeCount + 1);
    }
    else{
        setLikeCount(likeCount - 1);
    }
    setIsLike(!isLike)

   
  };

  return (
    <div className="tweet-actions">
      <span className="tweet-editor-actions">
        <TweeEditorAction imageAction={iconReply} myStyleButton="tweet-action" />
        <ValueAction value={props.value1} />
      </span>

      <span className="tweet-editor-actions">
        <TweeEditorAction imageAction={iconRetweet} myStyleButton="tweet-action" />
        <ValueAction value={props.value2} />
      </span>

      <span className="tweet-editor-actions" onClick={handleLikeClick}>
        <TweeEditorAction imageAction={iconReact} myStyleButton="tweet-action" />
        <ValueAction value={likeCount} />
      </span>

      <span className="tweet-editor-actions">
        <TweeEditorAction imageAction={iconShare} myStyleButton="tweet-action" />
        <ValueAction value={props.value4} />
      </span>
    </div>
  );
}

export default TweetAction;