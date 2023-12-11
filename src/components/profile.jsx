import imageProfil from "../images/profile-photo.png";


export function UserName(props) {
    return(
        <h2>{props.username}</h2>
    )
}

export default function Profile() {
    return (
        <div>
            <UserName username='Oscar kadiebwe' />
        </div>
    );
}