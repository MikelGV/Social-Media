import "./messenger.css"
import Topbar from "../../components/topbar/topbar";
import Conversations from "../../components/conversations/conversations";

export default function Messenger() {
  return (
      <>
        <Topbar/>
        <div className="messenger">
            <div className="chatMenu">
                <div className="chatMenuWrapper">
                    <input placeholder="Search for friends" className="chatMenuInput" />
                    <Conversations/>
                </div>
            </div>
            <div className="chatBox">
                <div className="chatBoxWrapper"></div>
            </div>
            <div className="chatOnline">
                <div className="chatOnlineWrapper"></div>
            </div>
        </div>
      </>
  );
}
