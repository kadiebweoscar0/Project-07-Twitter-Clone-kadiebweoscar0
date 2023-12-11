import imageProfil from "../images/profile-photo.png";
import ImageDefault from "./imageDefault";
import iconBacak from "../images/iconBack.svg"


export function UserName(props) {
    return(
        <div>
            <h2>{props.username}</h2>
            <p>{props.numberPost}props</p>
        </div>
        
    )
}


export default function Profile() {
    return (
        <div className="timeline">
            <div className="entete">
                <span className="icon-back">
                    <ImageDefault urlImage={iconBacak} />
                </span>
                <UserName username='Oscar kadiebwe' numberPost="27" />
            </div>
            <ImageDefault urlImage={imageProfil} />

        </div>
    );
}