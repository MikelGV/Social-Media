import "./message.css"

export default function Message({own}) {
  return (
      <div className={own ? "message own" : "message"}>
          <div className="messageTop">
              <img src="" className="messageImg" alt="" />
              <p className="messageText">Hello this is a message</p>
          </div>
          <div className="messageBottom">1hour ago</div>
      </div>
  );
}
