import "./profile.css"
import Topbar from "../../components/topbar/topbar"
import Sidebar from "../../components/sidebar/sidebar"
import Feed from "../../components/feed/feed"
import Rightbar from "../../components/rightbar/rightbar"

export default function Profile() {
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className="profileCoverImg" src="/assets/post/shutterstock_376532611.jpg" alt="" />
                            <img className="profileUserImg" src="/assets/person/pexels-koolshooters-7689011.jpg" alt="" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Mikel Galdos</h4>
                            <span className="profileInfoDescription">Hi my friends</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar  profile/>
                    </div>
                </div>
            </div>
        </>
    )
}
