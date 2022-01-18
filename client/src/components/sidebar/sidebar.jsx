import "./sidebar.css"
import {
    RssFeed, 
    Chat, 
    PlayCircleFilledOutlined,
    Group,
    Bookmark,
    HelpOutline,
    WorkOutline,
    Event,
    School
} from "@mui/icons-material"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="siderbarIcon"/>
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className="siderbarIcon"/>
                        <span className="sidebarListItemText">Chat</span>
                    </li>
                    <li className="sidebarListItem">
                        <PlayCircleFilledOutlined className="siderbarIcon"/>
                        <span className="sidebarListItemText">Video</span>
                    </li>
                    <li className="sidebarListItem">
                        <Group className="siderbarIcon"/>
                        <span className="sidebarListItemText">Group</span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmark className="siderbarIcon"/>
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <HelpOutline className="siderbarIcon"/>
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkOutline className="siderbarIcon"/>
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className="siderbarIcon"/>
                        <span className="sidebarListItemText">Event</span>
                    </li>
                    <li className="sidebarListItem">
                        <School className="siderbarIcon"/>
                        <span className="sidebarListItemText">Courses</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr" />
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImage" src="/assets/person/pexels-koolshooters-7689011.jpg" alt="" />
                        <span className="sidebarFriendName">Mikel G</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImage" src="/assets/person/pexels-koolshooters-7689011.jpg" alt="" />
                        <span className="sidebarFriendName">Mikel G</span>
                    </li><li className="sidebarFriend">
                        <img className="sidebarFriendImage" src="/assets/person/pexels-koolshooters-7689011.jpg" alt="" />
                        <span className="sidebarFriendName">Mikel G</span>
                    </li><li className="sidebarFriend">
                        <img className="sidebarFriendImage" src="/assets/person/pexels-koolshooters-7689011.jpg" alt="" />
                        <span className="sidebarFriendName">Mikel G</span>
                    </li><li className="sidebarFriend">
                        <img className="sidebarFriendImage" src="/assets/person/pexels-koolshooters-7689011.jpg" alt="" />
                        <span className="sidebarFriendName">Mikel G</span>
                    </li><li className="sidebarFriend">
                        <img className="sidebarFriendImage" src="/assets/person/pexels-koolshooters-7689011.jpg" alt="" />
                        <span className="sidebarFriendName">Mikel G</span>
                    </li><li className="sidebarFriend">
                        <img className="sidebarFriendImage" src="/assets/person/pexels-koolshooters-7689011.jpg" alt="" />
                        <span className="sidebarFriendName">Mikel G</span>
                    </li><li className="sidebarFriend">
                        <img className="sidebarFriendImage" src="/assets/person/pexels-koolshooters-7689011.jpg" alt="" />
                        <span className="sidebarFriendName">Mikel G</span>
                    </li><li className="sidebarFriend">
                        <img className="sidebarFriendImage" src="/assets/person/pexels-koolshooters-7689011.jpg" alt="" />
                        <span className="sidebarFriendName">Mikel G</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}