import "./stories.scss"

import React, { useContext } from 'react'
import { AuthContext } from "../../context/authContext"

const Stories = () => {

    const { currentUser } = useContext(AuthContext)
    //Temp data

    const stories = [
        {
            id: 1,
            name: "Rohit Tripathi",
            img: "https://images.pexels.com/photos/26690718/pexels-photo-26690718/free-photo-of-a-large-lizard-sitting-on-the-ground.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },
        {
            id: 2,
            name: "Hardik Gupta",
            img: "https://images.pexels.com/photos/25811340/pexels-photo-25811340/free-photo-of-a-close-up-of-green-leaves-on-a-wall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },
        {
            id: 3,
            name: "John Doe",
            img: "https://images.pexels.com/photos/24461004/pexels-photo-24461004/free-photo-of-model-in-long-black-dress.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },
        {
            id: 4,
            name: "Aradhya Dev",
            img: "https://images.pexels.com/photos/16711108/pexels-photo-16711108/free-photo-of-man-in-hat-and-sunglasses-posing-in-studio.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },
        {
            id: 5,
            name: "Nitya Mitthu",
            img: "https://images.pexels.com/photos/26791969/pexels-photo-26791969/free-photo-of-a-woman-in-a-white-dress-sitting-on-a-rock.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },
    ]

    return (
        <div className="stories">

            <div className="story" >
                <img src={currentUser.profilePic} alt="" className="storyImg" />
                <span>{currentUser.name} </span>
                <button>+</button>
            </div>


            {stories.map(story => {
                return (
                    <div className="story" key={stories.id} >
                        <img src={story.img} alt="" className="storyImg" />
                        <span>{story.name}</span>
                    </div>
                );
            })}

        </div >
    )
}

export default Stories
