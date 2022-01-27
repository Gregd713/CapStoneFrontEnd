import "./Post.css";
import { MoreVert } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from 'axios'; 
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Avatar from '@mui/material/Avatar';
import profile1 from "../Images/profile1.jpg";

import Stack from '@mui/material/Stack';

// import ImageUpload from "../ImageUpload/ImageUpload";

export default function Post({ post }) {
  const [like,setLike] = useState(post.likes.length)
  const [isLiked,setIsLiked] = useState(false)
  const [feed, setFeed]=useState({});
  const[user,setUser]=useState({});

  useEffect(()=>{
    const fetchFeed=async()=>{
    const res= await axios.get(`http://localhost:5000/api/users/current/${post.userId}`);
    setFeed(res.data);
    console.log(res.data);
  };
  fetchFeed();
  },[]);

  const likeHandler =()=>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
          <Avatar
        alt="Remy Sharp"
        src={profile1}
        sx={{ width: 56, height: 56 }}
      />
            <span className="postUsername">
              {user.name}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src="" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <Stack direction="row" spacing={2}>
            <ThumbUpIcon onClick={likeHandler}/>
            <ThumbDownIcon onClick={likeHandler}/>
            <span className="postLikeCounter">{like} people like it</span>
            </Stack>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}