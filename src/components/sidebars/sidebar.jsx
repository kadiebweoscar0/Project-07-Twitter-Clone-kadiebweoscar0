import Avatar from "../avatar";
import Button from "../button";
import NavBar from "./navbar";
import imageProfil from "/images/profile-photo.png";
import iconePrivate from "/images/iconePrivate.svg"
import iconeTweeterSideBar from "../../../public/images/iconeTweeterSideBar.svg"
import { NavLink } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import ContextApp from "../../asset/contextApp";

function SideBar() {
    const {allDataTweets, usersAndTweets} = useContext(ContextApp)
    const logerDefault = usersAndTweets[7]
    
    return(
        <span className="sidebar">
            <span className="navBar">
                <span>
                <Avatar myClassName="iconeTweeterSideBar" urlAvatar={iconeTweeterSideBar} />
                <NavBar />
                <Button className="button-navBar" textButton="Tweet" />
                </span> 
                <span className="profileSetting"> 
                <NavLink to={`/${logerDefault?.handle}/tweets`}>
                    <Avatar myClassName="rounded-full profilePhoto-setting" urlAvatar={logerDefault?.profilePicture} />
                </NavLink>
                    <span className="title-profileSetting flex">
                        <NavLink className="flex" to={`/${logerDefault?.handle}/tweets`}>
                            <h3> {logerDefault?.name} </h3>
                            <img src={iconePrivate} alt="icone" /> 
                        </NavLink> 
                        <p>{logerDefault?.handle}...</p>
                    </span>

                </span>
            </span>
        </span>
    )
}
export default SideBar;