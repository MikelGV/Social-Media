import "./rightbar.css"
import {Users} from "../../dummyData"
import Online from "../online/online";

export default function Rightbar() {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
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
            </div>
        </div>
    );
}