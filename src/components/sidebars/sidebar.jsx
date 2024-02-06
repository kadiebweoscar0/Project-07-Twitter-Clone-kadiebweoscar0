import Avatar from "../avatar";
import Button from "../button";
import NavBar from "./navbar";
import imageProfil from "/images/profile-photo.png";
import iconePrivate from "/images/iconePrivate.svg"
import iconeTweeterSideBar from "../../../public/images/iconeTweeterSideBar.svg"
import { NavLink } from "react-router-dom";

function SideBar() {
    return(
        <span className="sidebar">
            <span className="navBar">
                <span>
                <Avatar myClassName="iconeTweeterSideBar" urlAvatar={iconeTweeterSideBar} />
                <NavBar />
                <Button className="button-navBar" textButton="Tweet" />
                </span> 
                <span className="profileSetting"> 
                <NavLink to="/Bradley-Ortiz">
                    <Avatar myClassName="profilePhoto-setting" urlAvatar={imageProfil} />
                </NavLink>
                    <span className="title-profileSetting">
                        <h3><NavLink to="/Bradley-Ortiz"> Bradley Ortiz </NavLink> <img src={iconePrivate} alt="icone" /> </h3>
                        <p>@bradley...</p>
                    </span>

                </span>
            </span>
        </span>
    )
}
export default SideBar;