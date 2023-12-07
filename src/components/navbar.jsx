import iconeHome from '../images/iconeHome.svg'; 
import iconeNotifications from '../images/iconeNotification.svg'
import iconeExplore from '../images/iconeExplore.svg';
import iconeMessage from '../images/iconeMessages.svg';
import iconeLists from '../images/iconeLists.svg';
import iconeBookMarks from '../images/iconeBookmarks.svg';
import iconeMore from '../images/iconeMore.svg';
import iconeProfile from '../images/iconeProfile.svg';

function NavBar() {
    return(
        <ul className='ul-navBar'>
            <li><img src={iconeHome} alt="icone" /> Home</li>
            <li><img src={iconeExplore} alt="icone" /> Explore</li>
            <li><img src={iconeNotifications} alt="icone" /> Notifications</li>
            <li><img src={iconeMessage} alt="icone" /> Messages</li>
            <li><img src={iconeBookMarks} alt="icone" /> Bookmarks</li>
            <li><img src={iconeLists} alt="icone" /> Lists</li>
            <li><img src={iconeProfile} alt="icone" /> Profile</li>
            <li><img src={iconeMore} alt="icone" /> More</li>
        </ul>
    )
}
export default NavBar