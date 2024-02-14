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
                    <img src={iconeExplore} alt="icone" /> Explore
                </NavLink>
            </li>

            <li>
                <NavLink to="/notifiaction">
                    <img src={iconeNotifications} alt="icone" /> Notifications
                </NavLink>
            </li>

            <li>
                <NavLink to="/messages">
                    <img src={iconeMessage} alt="icone" /> Messages
                </NavLink>
            </li>

            <li>
                <NavLink to="/bookmarks">
                    <img src={iconeBookMarks} alt="icone" /> Bookmarks
                </NavLink>
            </li>

            <li>
                <NavLink to="/lists">
                    <img src={iconeLists} alt="icone" /> Lists
                </NavLink>
            </li>

            <li>
                <NavLink to="/Bradley Ortiz">
                    <img src={iconeProfile} alt="icone" /> Profile
                </NavLink>
            </li>

            <li>
                <NavLink to="/more">
                    <img src={iconeMore} alt="icone" /> More
                </NavLink>
            </li>
        </ul>
    )
}
export default NavBar