import iconeHome from '../images/iconeHome.svg'; 
import iconeNotifications from '../images/iconeNotification.svg'
import iconeExplore from '../images/iconeExplore.svg';
import iconeMessage from '../images/iconeMessages.svg';
import iconeLists from '../images/iconeLists.svg';
import iconeBookMarks from '../images/iconeBookmarks.svg';
import iconeMore from '../images/iconeMore.svg';
import iconeProfile from '../images/iconeProfile.svg';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return(
        <ul className='ul-navBar'>
            <li>
                <NavLink to="/">
                    <img src={iconeHome} alt="icone" /> Home
                </NavLink>
            </li>

            <li>
                <NavLink to="/explore">
                    <img src={iconeExplore} alt="icone" /> 
                </NavLink>
                Explore
            </li>

            <li>
                <NavLink to="/notifiaction">
                    <img src={iconeNotifications} alt="icone" /> 
                </NavLink>
                Notifications
            </li>

            <li>
                <NavLink to="/messages">
                    <img src={iconeMessage} alt="icone" /> 
                </NavLink>
                Messages
            </li>

            <li>
                <NavLink to="/bookmarks">
                    <img src={iconeBookMarks} alt="icone" /> 
                </NavLink>
                Bookmarks
            </li>

            <li>
                <NavLink to="/lists">
                    <img src={iconeLists} alt="icone" /> 
                </NavLink>
                Lists
            </li>

            <li>
                <NavLink to="/pageProfile">
                    <img src={iconeProfile} alt="icone" />Profile
                </NavLink>
            </li>

            <li>
                <NavLink to="/more">
                    <img src={iconeMore} alt="icone" /> 
                </NavLink>
                More
            </li>
        </ul>
    )
}
export default NavBar