import "./rightbar.css"

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
                    <li className="rightbarFriend">
                        <div className="righbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="/assets/person/pexels-koolshooters-7689011.jpg" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Joe mama</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="righbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="/assets/person/pexels-koolshooters-7689011.jpg" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Joe mama</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="righbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="/assets/person/pexels-koolshooters-7689011.jpg" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Joe mama</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="righbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="/assets/person/pexels-koolshooters-7689011.jpg" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Joe mama</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="righbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="/assets/person/pexels-koolshooters-7689011.jpg" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Joe mama</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="righbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="/assets/person/pexels-koolshooters-7689011.jpg" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Joe mama</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}