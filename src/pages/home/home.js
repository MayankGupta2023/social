import Stories from "../../components/stories/Stories"
import Posts from "../../components/posts/Posts"
import "./home.scss"

import React from 'react'

const home = () => {
    return (
        <div className="home">

            <Stories />
            <Posts />



        </div>
    )
}

export default home
