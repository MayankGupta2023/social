import "./posts.scss"

import React from 'react'
import Post from "../post/post"

const posts = [
    {
        id: 1,
        name: "Jane Doe",
        userId: 1,
        profilePic: "https://images.pexels.com/photos/20479618/pexels-photo-20479618/free-photo-of-woman-in-a-white-dress-walking-barefoot-in-the-pasture.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc: "Lorem ipsum idor sit is vey dgenrous in hr area",
        img: "https://images.pexels.com/photos/26690718/pexels-photo-26690718/free-photo-of-a-large-lizard-sitting-on-the-ground.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },

    {
        id: 2,
        name: "Jane Doe",
        userId: 1,
        profilePic: "https://images.pexels.com/photos/20479618/pexels-photo-20479618/free-photo-of-woman-in-a-white-dress-walking-barefoot-in-the-pasture.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc: "Lorem ipsum idor sit is vey dgenrous in hr area"
        // img: "https://images.pexels.com/photos/26586198/pexels-photo-26586198/free-photo-of-scenic-view-of-northern-lights-above-the-skogafoss-waterfall-in-iceland.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    }
]

const Posts = () => {
    return (
        <div className="posts">
            {posts.map(post => {
                return <Post post={post} key={post.id} />
            })}
        </div>

    )
}

export default Posts
