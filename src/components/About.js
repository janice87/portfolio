import React from 'react'
import pic from '../assets/img/pic.png'
import about from '../assets/img/about.jpg'
//import aboutSection from '../assets/img/about-section.jpg'


const About = () => {
  return (
    <div className="about">
       <h1>ABOUT</h1>
       <hr style={{border: "3px solid #dfcac1"}}/>
       <img src={pic} alt="my_picture" className="about-pic" />
       <img src={about} alt="about_section" className="about-image" />
       {/* <img src={about} alt="about_section" className="about-image" /> */}
        {/* <h3>Janice Chan</h3>
        <ul>
          <li>Born & Raised in New York City</li>
          <li>Grad of Flatiron School's Software Engineering program</li>
          <li>I have a Masters in Accounting</li>
          <li>Background in Finance/Accounting with 12+ years of experience</li>
          <li>I am a team player, problem solver and am highly analytical.</li>
        </ul>       */}
        <p>Skills: </p>
    </div>
  )
}

export default About