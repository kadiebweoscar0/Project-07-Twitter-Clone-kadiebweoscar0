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
    const {id} = useParam

    const data = datas.find((data) => data.id == id)
    if (!data) {
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
               
                <UserName username={data.titleAuthor} numberPost={data.posts} />
            </div>
            <span className="image-cover">
                <ImageDefault urlImage={data.cover} />
            </span>
            <span className="profil-author-and-button-editor">
                <span className="profil-author">
                    <Avatar myClassName="avatar-style-profile" avatar={data.tweetProfile} />
                </span>
                <Button className="button" textButton='edit profil' />
            </span>
           
            <div className="detail-author">
                <UserName username={data.titleAuthor} userAdress={data.titleAddress} />
                <p>{data.dateJoined}</p>
                <p>{data.following} following   {data.followers} followers</p>
            </div>
            <ul className="user-info">
                <li>Post</li>
                <li>Replies</li>
                <li>Heighlights</li>
                <li>Media</li>
                <li>Likes</li>
            </ul>
            <div className="tweet" key={data.id}>
                <NavLink to={`/pageProfile/${data.id}`} >
                    <Avatar avatar={data.tweetProfile} myClassName="tweet-avatar" />
                </NavLink>
                     <TweetContent
                        tweetTextValue={data.tweetTextValue}
                        tweetActionValue1={data.tweetActionValue1}
                        tweetActionValue2={data.tweetActionValue2}
                        tweetActionValue3={data.tweetActionValue3}
                        tweetActionValue4={data.tweetActionValue4}
                        id={data.id}
                        titleAuthor={data.titleAuthor}
                        titleAddress={data.titleAddress}
                        dateHoursPublication={data.dateHoursPublication}
                        urlImage={data.imageTweet}
                    />
                </div>
            
        </div>
    );
}
