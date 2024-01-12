import iconeHome from '../../../public/images/iconeHome.svg'; 
import iconeNotifications from '../../../public/images/iconeNotification.svg'
import iconeExplore from '../../../public/images/iconeExplore.svg';
import iconeMessage from '../../../public/images/iconeMessages.svg';
import iconeLists from '../../../public/images/iconeLists.svg';
import iconeBookMarks from '../../../public/images/iconeBookmarks.svg';
import iconeMore from '../../../public/images/iconeMore.svg';
import iconeProfile from '../../../public/images/iconeProfile.svg';
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