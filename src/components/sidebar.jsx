import Avatar from "./avatar";
import Button from "./button";
import NavBar from "./navbar";
import imageProfil from "../images/profile-photo.png";
import iconePrivate from "../images/iconePrivate.svg"
import iconeTweeterSideBar from "../images/iconeTweeterSideBar.svg"

function SideBar() {
    return(
        <div className="sidebar">
            <div className="navBar">
                <div>
                <Avatar myClassName="iconeTweeterSideBar" avatar={iconeTweeterSideBar} />
                <NavBar />
                <Button className="button-navBar" textButton="Tweet" />
                </div> 
                <div className="profileSetting"> 
                    <Avatar myClassName="profilePhoto-setting" avatar={imageProfil} />
                    <div className="title-profileSetting">
                        <h3>Bradley Ortiz <img src={iconePrivate} alt="icone" /> </h3>
                        <p>@bradley...</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default SideBar;