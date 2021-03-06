import Post from "../Post/Post";
import Share from "../Share/Share";
import {useEffect, useState } from "react";
import "./UserFeed.css";
import axios from "axios";


export default function Feed() {
  const [posts, setPosts]= useState([]);
  useEffect(()=>{
    const fetchPost=async()=>{
    const res= await axios.get("http://localhost:5000/api/posts/timeline/61c0df4b3b504e709c37e15c");
    setPosts(res.data)
  };
  fetchPost();
  },[]);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}