import React from 'react'
import Profile from "../profile-pic.jpeg"

const About = () => {
    return (
        <div className="about-me">
            <h2 id="aboutMe">About Me</h2>
            <img className="profile" src={Profile}></img>
            <p>
            Hello, I'm Erin Lim! I am currently a sophomore in the McCombs School of Business at the University of Texas at Austin, pursuing a Bachelor of Business Administration Degree in Management Information Systems. I enjoy problem-solving and devising solutions for relevant issues through my creativity and effective communication. My peers would describe be as a driven, open-minded individual who strives to implement inclusivity while maintaining an optimistic attitude even in difficult situations.
            Currently, I am seeking internship opportunities that will allow me to further develop interpersonal skills, analytical ability, and financial reporting in fields of MIS, finance, marketing, and consulting.
            </p>
        </div>
    )
}

export default About
