
import { useContext, useState } from "react";
import TweetEditorButton from "./tweetEditorButton";
import TweetEditorInput from "./tweetEditorInput";
import ContextApp from "../../asset/contextApp";
import { useForm } from "react-hook-form";
import axios from "axios";


function TweetEditorForm() {
  const { tweets, allDataTweets, setAllDataTweets } = useContext(ContextApp);
  const { register, handleSubmit, reset, formState: {errors} } = useForm();
  

  const onSubmitForm = (data) => {
    const defaultValues = {
      id: allDataTweets.length + 1,
      tweetProfile: "public/images/profile-photo.png",
      titleAuthor: "Bradley Ortiz",
      titleAddress: "@Bradley Ortiz",
      dateHoursPublication:`. 7min`,
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
      likePersisted: false,
      tweetTextValue: data.tweetTextValue
    };
    console.log(data.tweetTextValue);
    const tweetData = { ...defaultValues};  
    axios.post('http://localhost:3000/tweets',tweetData)
      .then((response) => console.log("",response.data),
      )
      .catch((error) => console.log(error));
      reset()
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className="tweet-editor-form">
      <textarea 
        style={{overflow: "hidden"}}
        id="kk"
        className="tweet-editor-input"
        type="text"
        placeholder="what's happening?"
        name="tweetTextValue"
        {...register("tweetTextValue", { required: true })}
      />
      <TweetEditorButton />
    </form>
  );
}

export default TweetEditorForm