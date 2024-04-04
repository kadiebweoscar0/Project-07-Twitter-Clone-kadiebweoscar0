import React from "react"
import React from "react"
import { useContext, useState } from "react";
import TweetEditorButton from "./tweetEditorButton";
import TweetEditorInput from "./tweetEditorInput";
import ContextApp from "../../asset/contextApp";
import { useForm } from "react-hook-form";
import axios from "axios";


function TweetEditorForm() {
  const { allDataTweets, setAllDataTweets } = useContext(ContextApp);
  const { register, handleSubmit, reset, formState: {errors} } = useForm();
  
  const onSubmitForm = (data) => {
    const defaultValues = {
      author: 8,
      media: [],
      retweetCount: 0,
      favoriteCount: 0,
      text: data.tweetTextValue,
    };
    const tweetData = { ...defaultValues};  
    axios.post('https://twitter-clone-api-c1-kadiebweoscar0.onrender.com/tweets',tweetData)
      .then((response) => console.log("newTweet",response.data),
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