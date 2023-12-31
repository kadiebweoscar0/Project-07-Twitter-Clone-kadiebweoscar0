import imageProfil from "../images/profile-photo.png";
import ImageDefault from "./imageDefault";
import iconBacak from "../images/iconBack.svg"
import imageCover from "../images/tweet-image.png"
import Button from "./button";


export function UserName(props) {
    return(
        <div className="title-author">
            <h2>{props.username}</h2>
            <p>{props.numberPost}</p>
        </div>
        
    )
}


export default function Profile() {
    return (
        <div className="profile">
            <div className="entete">
                <span className="icon-back" title="back">
                    <ImageDefault urlImage={iconBacak}  />
                </span>
                <UserName username='Oscar kadiebwe' numberPost="27" />
            </div>
            <span className="image-cover">
                <ImageDefault urlImage={imageCover} />
            </span>
            <span className="profil-author-and-button-editor">
                <span className="profil-author">
                    <ImageDefault urlImage={imageProfil} />
                    
                </span>
                <Button className="button" textButton='edit profil' />
            </span>
           
            <div className="detail-author">
                <UserName username='Oscar kadiebwe' numberPost="@kadiebweOscar" />
                <p>joined December 2023</p>
                <p>6 following  0 followers</p>
            </div>
            <ul className="user-info">
                <li>Post</li>
                <li>Replies</li>
                <li>Heighlights</li>
                <li>Media</li>
                <li>Likes</li>
            </ul>
            
        </div>
    );
}