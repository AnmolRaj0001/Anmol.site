import React from 'react'
import './Anmol.css'
import profile_img from '../../assets/profile_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Anmol = () => {
  return (
    <div id='home' className='anmol'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Anmol Raj,</span> Full Stack Developer or Software Tester</h1>
        <p>A motivated and detail-oriented person with a strong foundation in Java full-stack development and software testing. Skilled in building and maintaining both front-end and back-end components, along with experience in testing applications for functionality, performance, and quality assurance. Eager to apply technical expertise and grow in a collaborative environment.</p>
        <div className="anmol-action">
            <div className="anmol-connect"><AnchorLink className='anchor-link' offset={50} href='#contact' >Connect With me</AnchorLink></div>
            <div className="anmol-resume">My Resume</div>

        </div>
      
    </div>
  )
}

export default Anmol
