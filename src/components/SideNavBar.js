import { Link, useLocation } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import '../css/all.css'
import desktopLogo from '../images/desktopLogo.svg'
import mobileLogo from '../images/mobileLogo.png'
import dashboard from '../images/dashboard.svg'
import search from '../images/search.svg'
import applications from '../images/applications.svg'
import shortlist from '../images/shortlist.svg'
import profile from '../images/profile.svg'
import signOut from '../images/sign-out.svg'

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
                <Link to="/search" className='sideNav-logo column'>
                    <img src={logo}/>
                </Link>
                <div className='hr'></div>
                <Link to="/search" className='sideNav-top-link row' id={location.pathname === '/search' ? 'activeNavLink' : ''}>
                    <img src={search}/>
                    <p>Search</p>
                </Link>
                <Link to="/applications" className='sideNav-top-link row' id={location.pathname === '/applications' ? 'activeNavLink' : ''}>
                    <img src={applications}/>
                    <p>Applications</p>
                </Link>
                <Link to="/shortlist" className='sideNav-top-link row' id={location.pathname === '/shortlist' ? 'activeNavLink' : ''}>
                    <img src={shortlist}/>
                    <p>Shortlist</p>
                </Link>
                <Link to="/profile" className='sideNav-top-link row' id={location.pathname === '/profile' ? 'activeNavLink' : ''}>
                    <img src={profile}/>
                    <p>Profile</p>
                </Link>
                <div className='hr'></div>
            </div>
            
            <div className='sideNav-socials row'>
            <Link to="/sign-out" className='sideNav-top-link row'>
                    <img src={signOut}/>
                    <p>Sign Out</p>
                </Link>
            </div>
        </div>
    )
}