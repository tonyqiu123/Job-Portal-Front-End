import React from 'react';
import { Link, useLocation } from 'react-router-dom'
import '../css/all.css'
import '../css/login.css'
import searchIcon from '../images/search.svg'
import locationIcon from '../images/locationIcon.svg'
import mobileLogo from '../images/mobileLogo.png'
import desktopLogo from '../images/desktopLogo.svg'
import loginImage from '../images/loginimage.png'
 
export default function Login() {

  return (

        <div className='landing row'>
            <img src={desktopLogo}/>
            <div className='landing-left column'>
                  <h3>Welcome, please login to access your account</h3>
                  <div className='ctaContainer row'>
                    <Link to="/search" className='button primaryButton'><p>Applicant</p></Link>
                    <Link to="admin" className='button primaryButton'><p>Admin</p></Link>
                  </div>
            </div>
            <div className='landing-right column'>
              <img src={loginImage}/>
              <h3>TD Bank Job Portal</h3>
            </div>
        </div>
 

  )
};
 