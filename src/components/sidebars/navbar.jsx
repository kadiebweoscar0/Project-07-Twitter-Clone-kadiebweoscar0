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
                <NavLink className="flex gap-2" to="/">
                    <img src={iconeHome} alt="icone" />
                    <span>Home</span>
                </NavLink>
            </li>

            <li>
                <NavLink className="flex gap-2" to="/explore">
                    <img src={iconeExplore} alt="icone" /> 
                    <span>Explore</span>
                </NavLink>
            </li>

            <li>
                <NavLink className="flex gap-2" to="/notifiaction">
                    <img src={iconeNotifications} alt="icone" /> 
                    <span>Notifications</span>
                </NavLink>
            </li>

            <li>
                <NavLink className="flex gap-2" to="/messages">
                    <img src={iconeMessage} alt="icone" />
                    <span>Messages</span>
                </NavLink>
            </li>

            <li>
                <NavLink className="flex gap-2" to="/bookmarks">
                    <img src={iconeBookMarks} alt="icone" /> 
                    <span>Bookmarks</span>

                </NavLink>
            </li>

            <li>
                <NavLink className="flex gap-2" to="/lists">
                    <img src={iconeLists} alt="icone" /> 
                    <span>Lists</span>

                </NavLink>
            </li>

            <li>
                <NavLink className="flex gap-2" to="/Bradley Ortiz">
                    <img src={iconeProfile} alt="icone" /> 
                    <span>Profile</span>

                </NavLink>
            </li>

            <li>
                <NavLink className="flex gap-2" to="/more">
                    <img src={iconeMore} alt="icone" />
                    <span>More</span>
                </NavLink>
            </li>
        </ul>
    )
}
export default NavBar