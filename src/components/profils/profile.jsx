import imageProfil from "/images/profile-photo.png";
import ImageDefault from "../imageDefault";
import iconBacak from "/images/iconBack.svg"
import imageCover from "/images/tweet-image.png"
import Button from "../button";
import { NavLink, useParams } from "react-router-dom";
import { tweets } from "../../datas.json"
import TweetContent from "../tweets/tweetContent";
import Avatar from "../avatar";
import Tweets from "../tweets/tweets";
import TweetImage from "../tweets/tweetImage";
import TweetText from "../tweets/tweetText";
import TweetTitleAuthor from "../tweets/tweetTitleAuthor";
import TweetTitleDetail from "../tweets/tweetTitleDetail";

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

  const userFind = Object.values(tweets).find((tweet) => tweet.titleAuthor === name);
    
 
    if (!userFind) {
       return(  
        <div className="profile">
            <div className="entete">
                <NavLink to="/">
                    <span className="icon-back" title="back">
                        <ImageDefault urlImage={iconBacak}  />
                    </span>
                </NavLink>
               
                <UserName username="Bradley Ortiz" numberPost="2" />
            </div>
            <span className="image-cover">
                <ImageDefault urlImage={imageCover} />
            </span>
            <span className="profil-author-and-button-editor">
                <span className="profil-author">
                    <Avatar myClassName="avatar-style-profile" urlAvatar={imageProfil} />
                </span>
                <Button className="button" textButton='edit profil' />
            </span>
           
            <div className="detail-author">
                <UserName username="Bradley Ortiz" userAdress="@Ortiz Bradley" />
                <p> "joined December 2023"</p>
                <p> 5 following  3 followers</p>
            </div>
            <ul className="user-info">
                <li>Post</li>
                <li>Replies</li>
                <li>Heighlights</li>
                <li>Media</li>
                <li>Likes</li>
            </ul>
            <Tweets />
        </div>
       )
    }

    return (
        <div className="profile">
            <div className="entete">
                <NavLink to="/">
                    <span className="icon-back" title="back">
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
            {userFind.tweetTextValue &&
                <div className="tweet" key={userFind.id}>
                    <NavLink to={`/${userFind.titleAuthor}`} >
                        <Avatar urlAvatar={userFind.tweetProfile} myClassName="tweet-avatar" />
                    </NavLink>

                    {/* Affichage des tweets */}

                            <div className="tweet-content">
                                <div className="tweet-body">
                                    <div className="tweet-title">
                                        <NavLink to={`/${userFind.titleAuthor}`} >
                                            <TweetTitleAuthor titleAuthor={userFind.titleAuthor} />
                                        </NavLink>
                                        <NavLink to={`/${userFind.titleAuthor}`} >
                                            <TweetTitleDetail styleTitleDetail="tweet-title-details" titleAddress={userFind.titleAddress} />
                                        </NavLink>
                                        <TweetTitleDetail styleTitleDetail="tweet-title-details" titleAddress={userFind.dateHoursPublication} />
                                    </div>
                                    <TweetText tweetTextValue={userFind.tweetTextValue} />
                                    <TweetImage urlImage={userFind.imageTweet} />
                                </div>

                            </div>
                </div>
            }      
        </div>
    );
}