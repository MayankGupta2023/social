import React, { useContext } from 'react'
import "./coments.scss"
import { AuthContext } from '../../context/authContext'

const Coments = () => {

    const { currentUser } = useContext(AuthContext)

    const comments = [
        {
            id: 1,
            name: "Jane Doe",
            userId: 1,
            profilePic: "https://images.pexels.com/photos/20479618/pexels-photo-20479618/free-photo-of-woman-in-a-white-dress-walking-barefoot-in-the-pasture.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            desc: "Lorem ipsum idor sit is vey dgenrous in hr area"
        },

        {
            id: 2,
            name: "Jane Doe",
            userId: 1,
            profilePic: "https://images.pexels.com/photos/20479618/pexels-photo-20479618/free-photo-of-woman-in-a-white-dress-walking-barefoot-in-the-pasture.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            desc: "Lorem ipsum idor sit is vey dgenrous in hr area"
        }
    ]

    return (
        <div className='comments'>

            <div className='write'>
                <img src={currentUser.profilePic} />
                <input type='text' placeholder='write a comment' />
                <button>Send</button>
            </div>

            {comments.map(comment => (
                <div className='comment' key={comment.id}>

                    <img src={comment.profilePic} alt='' />
                    <div className='info'>
                        <span className='name'>{comment.name}</span>
                        <p>{comment.desc}</p>
                    </div>


                    <span className='date'>1 hour ago</span>
                </div>
            ))}

        </div>
    )
}

export default Coments
