import Avatar from "./avatar";
import Button from "./button";
import NavBar from "./navbar";
import imageProfil from "../images/profile-photo.png";
import iconeTweeter from "../images/iconTweeter.svg"

function SideBar() {
    return(
        <div className="sidebar">
            <div className="navBar">
                <Avatar myClassName="classe" avatar={iconeTweeter} />
                <NavBar />
                <Button className="button-navBar" textButton="Tweet" />
                <div className="profileSetting"> 
                    <Avatar myClassName="profilePhoto-setting" avatar={imageProfil} />
                    <div title-profileSetting>
                        <h3>Bradley Ortiz <img src="hhj" alt="icone" /> </h3>
                        <p>@bradley...</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default SideBar;