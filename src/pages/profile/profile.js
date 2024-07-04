import "./profile.scss"
import React from 'react'
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Posts from "../../components/posts/Posts";


const profile = () => {
    return (
        <div className="profile">

            <div className="images">
                <img src="https://images.pexels.com/photos/25751524/pexels-photo-25751524/free-photo-of-a-view-of-the-budapest-river-from-a-hill.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className="cover" />
                <img src="https://images.pexels.com/photos/26741272/pexels-photo-26741272/free-photo-of-studio-shot-of-a-young-woman-wearing-a-black-dress.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className="profilePic" />

            </div>

            <div className="profileContainer">
                <div className="uInfo">
                    <div className="left">

                        <a href="http://facebook.com"> <FacebookTwoToneIcon /> </a>
                        <a href="http://instagram.com"> <InstagramIcon /> </a>
                        <a href="http://twitter.com"> <TwitterIcon /> </a>
                        <a href="http://linkedin.com"> <LinkedInIcon /> </a>
                        <a href="http://pinterest.com"> <PinterestIcon /> </a>

                    </div>

                    <div className="center">

                        <span>Jane Doe</span>
                        <div className="info">

                            <div className="item">
                                <PlaceIcon />
                                <span>USA</span>
                            </div>

                            <div className="item">
                                <LanguageIcon />
                                <span>lgGayLode</span>
                            </div>


                        </div>
                        <button>Follow</button>


                    </div>

                    <div className="right">
                        <EmailOutlinedIcon />
                        <MoreVertOutlinedIcon />

                    </div>

                </div>

                <Posts />


            </div>


        </div>
    )
}

export default profile
