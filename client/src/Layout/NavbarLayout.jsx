
import "../css/NavbarLayout.css";
import { IoMdNotificationsOutline } from "react-icons/io";

export const NavbarLayout = () => {

    return (
        <nav>
            <div id="nav_notification_box">
                <IoMdNotificationsOutline />
                <span id="nav_notification_value">0</span>
            </div>
            <div id="profile_mainu">
                <div id="profile_photo">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png" alt="" id="photo" />
                </div>
                <div id="profile_name_mainu">
                    <p className="name">Aria Valencia <span>Admin</span></p>
                    <select name="" id="" className="mainu">
                        <option value=""></option>
                        <option value="">Profile</option>
                    </select>
                </div>
            </div>
        </nav>
    )
}