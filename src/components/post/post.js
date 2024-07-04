import React from 'react'
import "./post.scss"
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import { Link } from 'react-router-dom';
import Comments from '../coments/Coments';
import { useState } from 'react';

const Post = ({ post }) => {

    const [commentOpen, setCommentOpen] = useState(false)

    //temp
    const liked = false;

    return (
        <div className='post'>

            <div className='container'>
                <div className='user'>
                    <div className='userinfo'>
                        <img src={post.profilePic} alt='' />
                        <div className='details'>
                            <Link to={`/profile/${post.userId}`} style={{ textDecoration: "none", color: "inherit" }}>
                                <span className='name'>{post.name}</span>
                            </Link>
                            <span className='date'>1min ago</span>

                        </div>

                    </div>
                    <MoreHorizOutlinedIcon />
                </div>
                <div className='content'>
                    <p>{post.desc}</p>
                    <img src={post.img} />
                </div>
                <div className='info'>
                    <div className='item'>
                        {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
                        12 likes
                    </div>

                    <div className='item' onClick={() => setCommentOpen(!commentOpen)}>
                        <TextsmsOutlinedIcon />
                        12 comments
                    </div>

                    <div className='item'>
                        <ShareOutlinedIcon />

                    </div>
                </div>

                {commentOpen && <Comments />}
            </div>

        </div>
    )
}

export default Post
