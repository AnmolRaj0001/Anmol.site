import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
    <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
    </div>
    <div className="about-section">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am proficient in building and maintaining dynamic web applications using Java for backend development, along with expertise in front-end technologies such as HTML, CSS, JavaScript, and frameworks like React. I am well-versed in integrating APIs, managing databases, and deploying applications, ensuring that the applications.</p>
                <p>In addition to my development skills, I have a keen eye for detail when it comes to software testing. I am familiar with various testing methodologies, including manual and automated testing, and am skilled in identifying bugs, verifying requirements, and ensuring the overall quality and performance of applications.</p>           
            </div>
        

        <div className="about-skills">
            <div className="about-skill"><p>HTML, CSS & JavaScript</p><hr style={{width:"50%"}} /></div>
            <div className="about-skill"><p>React js & Spring Boot</p><hr style={{width:"70%"}} /></div>
            <div className="about-skill"><p>Java, Maven & Selenium</p><hr style={{width:"60%"}} /></div>
            <div className="about-skill"><p>SQL & MySQL</p><hr style={{width:"70%"}} /></div>
        </div>
    </div>
  </div>

    <div className="about-achivements">
      <div className="about-achivement">
        <h1>Internship</h1>
        <p>Java Full Stack</p>
      </div>
      <hr />
      <div className="about-achivement">
        <h1>Certificates</h1>
        <p>Java from IIT Mumbai</p>
        <p>HTML & CSS from IIT Mumbai</p>
        <p>SQL & MySQL from HackerRank </p>
        <p>C & C++ from Spoken Tutorial </p>
      </div>
      <hr />
      <div className="about-achivement">
        <h1>Links</h1>
        <p><a href="https://www.linkedin.com/in/anmolraj0001">Linked IN</a></p>
        <p><a href="https://www.github.com/anmolraj0001">GitHub</a></p>
        <p><a href="https://www.instagram.co.in/a_n_m___o_l">Instagram</a></p>
        <p><a href="https://www.What'sApp.com/in/anmolraj0001">What'sApp</a></p>
      </div>
      <hr />
    </div>
      
    </div>
  )
}

export default About
