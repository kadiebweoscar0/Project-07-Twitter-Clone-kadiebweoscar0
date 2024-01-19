import imageProfil from "/images/profile-photo.png";
import ImageDefault from "../imageDefault";
import iconBacak from "/images/iconBack.svg"
import imageCover from "/images/tweet-image.png"
import Button from "../button";
import { NavLink, useParams } from "react-router-dom";
import { datas } from "../../datas";
import TweetContent from "../tweets/tweetContent";
import Avatar from "../avatar";
import Tweet from "../tweets/tweet";



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

    const datafind = datas.find((data) => data.titleAuthor == name)
    if (!datafind) {
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
            <Tweet />
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
               
                <UserName username={datafind.titleAuthor} numberPost={datafind.posts} />
            </div>
            <span className="image-cover">
                <ImageDefault urlImage={datafind.cover} />
            </span>
            <span className="profil-author-and-button-editor">
                <span className="profil-author">
                    <Avatar myClassName="avatar-style-profile" avatar={datafind.tweetProfile} />
                </span>
                <Button className="button" textButton='edit profil' />
            </span>
           
            <div className="detail-author">
                <UserName username={datafind.titleAuthor} userAdress={datafind.titleAddress} />
                <p>{datafind.dateJoined}</p>
                <p>{datafind.following} following   {datafind.followers} followers</p>
            </div>
            <ul className="user-info">
                <li>Post</li>
                <li>Replies</li>
                <li>Heighlights</li>
                <li>Media</li>
                <li>Likes</li>
            </ul>
            <div className="tweet" key={datafind.id}>
                <NavLink to={`/${datafind.titleAuthor}`} >
                    <Avatar avatar={datafind.tweetProfile} myClassName="tweet-avatar" />
                </NavLink>
                     <TweetContent
                        tweetTextValue={datafind.tweetTextValue}
                        tweetActionValue1={datafind.tweetActionValue1}
                        tweetActionValue2={datafind.tweetActionValue2}
                        tweetActionValue3={datafind.tweetActionValue3}
                        tweetActionValue4={datafind.tweetActionValue4}
                        id={datafind.id}
                        titleAuthor={datafind.titleAuthor}
                        titleAddress={datafind.titleAddress}
                        dateHoursPublication={datafind.dateHoursPublication}
                        urlImage={datafind.imageTweet}
                    />
                </div>
            
        </div>
    );
}
