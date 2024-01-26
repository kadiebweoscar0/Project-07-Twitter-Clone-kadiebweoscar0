import imageProfil from "/images/profile-photo.png";
import ImageDefault from "../imageDefault";
import iconBacak from "/images/iconBack.svg"
import imageCover from "/images/tweet-image.png"
import Button from "../button";
import { NavLink, useParams } from "react-router-dom";
import { datas } from "../../datas";
import TweetContent from "../tweets/tweetContent";
import Avatar from "../avatar";
import Tweets from "../tweets/tweets";



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

  const user = Object.values(datas).find((user) => user.credential_user.titleAuthor === name);
    
 
    if (!user) {
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
                    <Avatar myClassName="avatar-style-profile" avatar={imageProfil} />
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
               
                <UserName username={user.credential_user.titleAuthor} numberPost={user.credential_user.posts} />
            </div>
            <span className="image-cover">
                <ImageDefault urlImage={user.credential_user.cover} />
            </span>
            <span className="profil-author-and-button-editor">
                <span className="profil-author">
                    <Avatar myClassName="avatar-style-profile" avatar={user.credential_user.tweetProfile} />
                </span>
                <Button className="button" textButton='edit profil' />
            </span>
           
            <div className="detail-author">
                <UserName username={user.credential_user.titleAuthor} userAdress={user.credential_user.titleAddress} />
                <p>{user.credential_user.dateJoined}</p>
                <p>{user.credential_user.following} following   {user.credential_user.followers} followers</p>
            </div>
            <ul className="user-info">
                <li>Post</li>
                <li>Replies</li>
                <li>Heighlights</li>
                <li>Media</li>
                <li>Likes</li>
            </ul>
            {user.tweets && user.tweets.map((tweet, index) => (
                <div className="tweet" key={user.credential_user.id}>
                    <NavLink to={`/${user.credential_user.titleAuthor}`} >
                        <Avatar avatar={user.credential_user.tweetProfile} myClassName="tweet-avatar" />
                    </NavLink>
                    {/* Affichage des tweets */}
                        <TweetContent
                            key={index}
                            tweetTextValue={tweet.tweetTextValue}
                            tweetActionValue1={tweet.tweetActionValue1}
                            tweetActionValue2={tweet.tweetActionValue2}
                            tweetActionValue3={tweet.tweetActionValue3}
                            tweetActionValue4={tweet.tweetActionValue4}
                            id={user.credential_user.id}
                            titleAuthor={user.credential_user.titleAuthor}
                            titleAddress={user.credential_user.titleAddress}
                            dateHoursPublication={user.credential_user.dateHoursPublication}
                            urlImage={tweet.imageTweet}
                            />
                </div>
            ))}      
        </div>
            
        
    );
}
