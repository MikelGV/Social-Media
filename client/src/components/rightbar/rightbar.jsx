import "./rightbar.css"
import {Users} from "../../dummyData"
import Online from "../online/online";

export default function Rightbar({user}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const HomeRightbar = () => {
        return(
            <>
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="/assets/gift.png" alt="" />
                    <span className="birthdayText"><b>Pola Foster</b> and <b>3 other frineds</b> have a birthday today.</span>
                </div>
                <img className="rightbarAd" src="/assets/ads.jpg" alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="righbarFrinedList">
                    {Users.map(u=>(
                        <Online key={u.id} user={u}/>
                    ))}
                </ul>
            </>
        )
    }
    const ProfileRightBar = () => {
        return(
            <>
                <h4 className="rightbarTitle">User information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">{user.city}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">{user.from}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">{user.relationship ===1 ? "Single" 
                            : user.relationship ===2 ? "Married"
                            : "Empty"}
                        </span>
                    </div>
                </div>
                <h4 className="rightbarTitle">User friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img className="rightbarFollowingImg" src={`${PF}person/1.jpg`} alt="" />
                        <span className="rightbarFollowingName">Jon Tron</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img className="rightbarFollowingImg" src={`${PF}person/1.jpg`} alt="" />
                        <span className="rightbarFollowingName">Jon Tron</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img className="rightbarFollowingImg" src={`${PF}person/1.jpg`} alt="" />
                        <span className="rightbarFollowingName">Jon Tron</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img className="rightbarFollowingImg" src={`${PF}person/1.jpg`}alt="" />
                        <span className="rightbarFollowingName">Jon Tron</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img className="rightbarFollowingImg" src={`${PF}person/1.jpg`} alt="" />
                        <span className="rightbarFollowingName">Jon Tron</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img className="rightbarFollowingImg" src={`${PF}person/1.jpg`} alt="" />
                        <span className="rightbarFollowingName">Jon Tron</span>
                    </div>
                </div>
            </>
        )
    }
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {user ? <ProfileRightBar/> : <HomeRightbar/>}
            </div>
        </div>
    );
}