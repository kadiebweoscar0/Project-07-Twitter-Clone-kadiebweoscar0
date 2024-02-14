
import { useContext, useState } from "react";
import TweetEditorButton from "./tweetEditorButton";
import TweetEditorInput from "./tweetEditorInput";
import ContextApp from "../../asset/contextApp";
import { useForm } from "react-hook-form";
import axios from "axios";


function TweetEditorForm() {
  const { tweets, allDataTweets, setAllDataTweets } = useContext(ContextApp);
  const { register, handleSubmit, reset } = useForm();
  
  const defaultValues = {
    id: allDataTweets.length + 1,
    tweetProfile: "public/images/profile-photo.png",
    titleAuthor: "Bradley Ortiz",
    titleAddress: "@Bradley Ortiz",
    dateHoursPublication:`. ${Date.now()}`,
    dateJoined: "joined December 2023",
    following: 6,
    followers: 0,
    posts: 0,
    cover: "public/images/CoverCUrrentUser.jpeg",
    tweetActionValue1: 0,
    tweetActionValue2: 0,
    tweetActionValue3: 0,
    tweetActionValue4: "",
    imageTweet: "",
    likePersisted: false
  };

  const onSubmitForm = (data) => {
    const tweetData = { ...defaultValues, ...data };  
    axios.post('http://localhost:8000/tweets', tweetData)
      .then((response) => console.log(response.tweetData),
      setAllDataTweets(response.tweetData)
      
      )
      .catch((error) => console.log(error));
      reset
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className="tweet-editor-form">
      <textarea style={{overflow: "hidden"}}
        id="kk"
        className="tweet-editor-input"
        type="text"
        placeholder="what's happening?"
        name="tweetTextValue"
        {...register("tweetTextValue", { required: true })}
      />
      <span>
      <TweetEditorButton />
      </span>
    </form>
  );
}

export default TweetEditorForm