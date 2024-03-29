import imageProfil from "/images/profile-photo.png";
import ImageDefault from "../imageDefault";
import iconBacak from "/images/iconBack.svg"
import imageCover from "/images/tweet-image.png"
import Button from "../button";
import { NavLink, useParams } from "react-router-dom";
import { tweets } from "../../datas.json"
import Avatar from "../avatar";
import Tweets from "../tweets/tweets";
import TweetImage from "../tweets/tweetImage";
import TweetText from "../tweets/tweetText";
import TweetTitleAuthor from "../tweets/tweetTitleAuthor";
import TweetTitleDetail from "../tweets/tweetTitleDetail";
import TweetAction from "../tweets/tweetAction";
import Tweet from "../tweets/tweet";
import ContexteTweet from "../../asset/contexteTweet";
import { useContext, useEffect, useState } from "react";
import ContextApp from "../../asset/contextApp";
import axios from "axios";
import Loder from "../loder";

export function UserName(props) {
    return(
        <div className="title-author">
            <h2>{props.username}</h2>
            <p>{props.userAdress}</p>
        </div>
        
    )
}


export default function Profile() {
    const useParam = useParams()
    const {name} = useParam
    const [userTweetByHandle, setUserTweetByHandle] = useState([])

    useEffect(()=>{
        const fechUserByHandle = async ()=>{
            try{
                const response = await axios.get(`http://localhost:3000/${name}/tweets`);
                setUserTweetByHandle(response.data)
            } catch(error){
                console.log("Erreur lors de la récupération des tweets:", error);
            }
        };
        
        fechUserByHandle()
    },[]);
    const {tweetFilterByHandle,  userFind} = userTweetByHandle
    const user = userFind
   console.log(userFind);
        return (
            <>
       {!userFind ?  (<Loder />) :
        <div className="profile">
                <div className="entete">
                    <NavLink to="/">
                        <span className="icon-back rounded-full p-2" title="back">
                            <ImageDefault urlImage={iconBacak}  />
                        </span>
                    </NavLink>
                
                    <UserName username={userFind.name} numberPost={""} />
                </div>
                <span className="image-cover">
                    <ImageDefault urlImage={userFind.profileBackground} />
                </span>
                <span className="profil-author-and-button-editor">
                    <span className="profil-author">
                        <Avatar myClassName="avatar-style-profile" urlAvatar={userFind.profilePicture} />
                        {/* {console.log(userFind.map((i) => i.tweetProfile))} */}
                    </span>
                    <Button className="button" textButton='edit profil' />
                </span>
            
                <div className="detail-author">
                    <UserName username={userFind.name} userAdress={userFind.handle} />
                    <p>{""}</p>
                    <p>{userFind.followingCount} following   {userFind.followersCount} followers</p>
                </div>
                <ul className="user-info">
                    <li>Post</li>
                    <li>Replies</li>
                    <li>Heighlights</li>
                    <li>Media</li>
                    <li>Likes</li>
                </ul>


                <div className="tweets">
                {tweetFilterByHandle.map((tweet) =>
                (<ContexteTweet.Provider value={{tweet,user}}>
                    <Tweet />
                </ContexteTweet.Provider>)
                )}
            </div>      
        </div>}
        </>
    );
}
