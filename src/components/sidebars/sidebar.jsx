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
                    <span className="title-profileSetting flex">
                        <NavLink className="flex" to="/Bradley Ortiz">
                            <h3> Bradley Ortiz </h3>
                            <img src={iconePrivate} alt="icone" /> 
                        </NavLink> 
                        <p>@bradley...</p>
                    </span>

                </span>
            </span>
        </span>
    )
}
export default SideBar;