import { Link, useLocation } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import '../css/all.css'
import desktopLogo from '../images/desktopLogo.svg'
import mobileLogo from '../images/mobileLogo.svg'
import resumePDF from '../images/resume.pdf'
import dribbble from '../images/dribbble.svg'
import linkedin from '../images/linkedin.svg'
import instagram from '../images/instagram.svg'
import git from '../images/git.svg'
import home from '../images/home.svg'
import projects from '../images/projects.svg'
import blog from '../images/blog.svg'
import resume from '../images/resume.svg'

export default function SideNavBar() {
    const [logo, setLogo] = useState(desktopLogo)
    
    const handleResize = () => {
        if(window.innerWidth < 650)
            setLogo(mobileLogo)
        else
            setLogo(desktopLogo)
    }
    window.addEventListener('resize', handleResize)


    const location = useLocation()
    return (
        <div className='sideNav column'>
            <div className='sideNav-top column'>
                <Link to="/" className='sideNav-logo column'>
                    <img src={logo}/>
                    <p>Full Stack Developer</p>
                </Link>
                <div className='hr'></div>
                <Link to="/" className='sideNav-top-link row' id={location.pathname === '/' ? 'activeNavLink' : ''}>
                    <img src={home}/>
                    <p>Home</p>
                </Link>
                <Link to="/projects" className='sideNav-top-link row' id={location.pathname === '/projects' ? 'activeNavLink' : ''}>
                    <img src={projects}/>
                    <p>All Projects</p>
                </Link>
                <Link to="/blog" className='sideNav-top-link row' id={location.pathname === '/blog' ? 'activeNavLink' : ''}>
                    <img src={blog}/>
                    <p>Blog</p>
                </Link>
                <div className='hr'></div>
                <Link to={resumePDF} target="_blank" className='sideNav-top-link row'>
                    <img src={resume}/>
                    <p>Resume</p>
                </Link>
            </div>
            
            <div className='sideNav-socials row'>
                <a target="_blank" href='https://github.com/tonyqiu123'><img src={git}/></a>
                <a target="_blank" href='https://www.linkedin.com/in/tonyqiu1/'><img src={linkedin}/></a>
                <a target="_blank" href='https://dribbble.com/tonyqiu12345'><img src={dribbble}/></a>
                <a target="_blank" href='https://www.instagram.com/tony_q04/'><img src={instagram}/></a>
            </div>
        </div>
    )
}