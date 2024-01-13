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
            <p>Posts  {props.numberPost}</p>
        </div>
        
    )
}


export default function Profile() {
    const useParam = useParams()
    const {id} = useParam

    const data = datas.find((data) => data.id == id);

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
                <UserName username={data.titleAuthor} numberPost={data.titleAddress} />
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
            <Tweet />
            
        </div>
    );
}
