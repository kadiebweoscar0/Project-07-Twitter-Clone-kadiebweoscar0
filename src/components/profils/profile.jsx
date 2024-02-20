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
import { useContext } from "react";
import ContextApp from "../../asset/contextApp";

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
    const {allDataTweets}= useContext(ContextApp)

  const userFind = allDataTweets.find((tweet) => tweet.titleAuthor === name);
  const filterTWeetUser = allDataTweets.filter((tweet) => tweet.titleAuthor === name);
    
 
    // if (!userFind) {
    //    return(  
    //     <div className="profile">
    //         <div className="entete">
    //             <NavLink to="/">
    //                 <span className="icon-back" title="back">
    //                     <ImageDefault urlImage={iconBacak}  />
    //                 </span>
    //             </NavLink>
               
    //             <UserName username="Bradley Ortiz" numberPost="2" />
    //         </div>
    //         <span className="image-cover">
    //             <ImageDefault urlImage={imageCover} />
    //         </span>
    //         <span className="profil-author-and-button-editor">
    //             <span className="profil-author">
    //                 <Avatar myClassName="avatar-style-profile" urlAvatar={imageProfil} />
    //             </span>
    //             <Button className="button" textButton='edit profil' />
    //         </span>
           
    //         <div className="detail-author">
    //             <UserName username="Bradley Ortiz" userAdress="@Ortiz Bradley" />
    //             <p> "joined December 2023"</p>
    //             <p> 5 following  3 followers</p>
    //         </div>
    //         <ul className="user-info">
    //             <li>Post</li>
    //             <li>Replies</li>
    //             <li>Heighlights</li>
    //             <li>Media</li>
    //             <li>Likes</li>
    //         </ul>
    //         <Tweets />
    //     </div>
    //    )
    // }

    return (
        <div className="profile">
            <div className="entete">
                <NavLink to="/">
                    <span className="icon-back rounded-full p-2" title="back">
                        <ImageDefault urlImage={iconBacak}  />
                    </span>
                </NavLink>
               
                <UserName username={userFind.titleAuthor} numberPost={userFind.posts} />
            </div>
            <span className="image-cover">
                <ImageDefault urlImage={userFind.cover} />
            </span>
            <span className="profil-author-and-button-editor">
                <span className="profil-author">
                    <Avatar myClassName="avatar-style-profile" urlAvatar={userFind.tweetProfile} />
                    {/* {console.log(userFind.map((i) => i.tweetProfile))} */}
                </span>
                <Button className="button" textButton='edit profil' />
            </span>
           
            <div className="detail-author">
                <UserName username={userFind.titleAuthor} userAdress={userFind.titleAddress} />
                <p>{userFind.dateJoined}</p>
                <p>{userFind.following} following   {userFind.followers} followers</p>
            </div>
            <ul className="user-info">
                <li>Post</li>
                <li>Replies</li>
                <li>Heighlights</li>
                <li>Media</li>
                <li>Likes</li>
            </ul>


            <div className="tweets">
            {filterTWeetUser.map((tweet, index) =>
            (<ContexteTweet.Provider value={tweet}>
                <Tweet />
                </ContexteTweet.Provider>)
            )}
        </div>      
        </div>
    );
}