import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import '../css/all.css'
import '../css/login.css'
import desktopLogo from '../images/desktopLogo.svg'
 
export default function Login() {

  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg(currentImg => (currentImg + 1) % 4);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (

        <div className='landing row'>
            <img src={desktopLogo}/>
            <div className='landing-left'>
                <div className='landing-left-child column'>
                  <h3>Welcome, please login to access your account</h3>
                  <div className='ctaContainer row'>
                    <Link to="/search" className='button primaryButton'><p>Applicant</p></Link>
                    <Link to="admin" className='button primaryButton'><p>Admin</p></Link>
                  </div>
                </div>
            </div>
            <div className='landing-right column'>
              <div className='landing-right-imgCont'>
                <img style={{ opacity: currentImg === 0 ? 1 : 0 }} src="https://cdn.discordapp.com/attachments/715319623637270638/1084880979459580014/image.png"/>
                <img style={{ opacity: currentImg === 1 ? 1 : 0 }} src="https://wtop.com/wp-content/uploads/2014/07/356253.jpg"/>
                <img style={{ opacity: currentImg === 2 ? 1 : 0 }} src="https://specialolympicsnewjersey.files.wordpress.com/2013/06/dsc_0306.jpg"/>
                <img style={{ opacity: currentImg === 3 ? 1 : 0 }} src="https://d3d0lqu00lnqvz.cloudfront.net/media/media/8ce55332-71b0-4a83-bf0b-05f267c8fa15.jpg"/>
                <p style={{ opacity: currentImg === 0 ? 1 : 0 }}>TD Bank is the sixth largest bank in North America by branches and serves more than 26 million customers worldwide.</p>
                <p style={{ opacity: currentImg === 1 ? 1 : 0 }}>TD Bank operates primarily across the East Coast, in fifteen U.S. states and Washington, D.C.</p>
                <p style={{ opacity: currentImg === 2 ? 1 : 0 }}>In 2016, the TD bank was sued for allegations that their coin counting machines were inaccurately counting coins. The lawsuit estimates that 26 cents out of every $100 was not counted, totaling to $9 million.</p>
                <p style={{ opacity: currentImg === 3 ? 1 : 0 }}>TD bank has been assessed penalties in excess of $197 million since the year 2000 for consumer, banking, investor protection, wage and privacy violations.</p>
              </div>
            </div>
        </div>
 

  )
};
 