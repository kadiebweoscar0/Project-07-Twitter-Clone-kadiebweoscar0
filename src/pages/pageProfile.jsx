import Profile from "../components/profile";
import SideBar from "../components/sidebar";
import Trends from "../components/trends";

function PageProfile() {
    return(
        <>
            <SideBar/>
            <h1>Profile</h1>
            <Profile />
            <Trends />
        </>
    )
}
export default PageProfile;