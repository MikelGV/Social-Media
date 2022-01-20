import "./feed.css"
import Share from "../share/share"
import Post from "../post/post"
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios"


export default function Feed({username}) {
    const[posts, setPosts] = useState([])

    useEffect(()=> {
        const fetchPosts = async () => {
            const res = username 
                ? await axios.get("/posts/profile/" + username) 
                : await axios.get("/posts/timeline/61e68179558a025afee931da")
            setPosts(res.data)
        }
        fetchPosts();
    },[username])
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                {posts.map((p) => (
                    <Post key={p._id} post={p}/>
                ))}
            </div>
        </div>
    );
}