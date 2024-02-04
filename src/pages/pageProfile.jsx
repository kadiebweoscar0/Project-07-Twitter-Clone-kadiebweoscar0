import { useContext } from "react";
import Profile from "../components/profils/profile";
import SideBar from "../components/sidebars/sidebar";
import Trends from "../components/trends/trends";
import Contexte from "../asset/context";

function PageProfile() {
    
    return(
        <>
            <SideBar />
            <Profile />
            <Trends />
        </>
    )
}
export default PageProfile;