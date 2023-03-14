import React from 'react';
import '../css/all.css'
import '../css/profile.css'
import SideNavBar from "../components/SideNavBar"
import AnimatedPage from '../components/AnimatedPage'
import searchIcon from '../images/search.svg'
import locationIcon from '../images/locationIcon.svg'
import dropDownIcon from '../images/dropDownIcon.svg'
import emailIcon from '../images/emailIcon.svg'
import phoneIcon from '../images/phoneIcon.svg'
import editIcon from '../images/editIcon.svg'
import infoIcon from '../images/infoIcon.svg'
import addIcon from '../images/addIcon.svg'
import deleteIcon from '../images/deleteIcon.svg'
import linkedinProfile from '../images/linkedinProfile.jfif'

export default function Survey() {

  return (
    <AnimatedPage>
        <SideNavBar/>
        <div className='body'>
        <div className='dummyMargin'></div>
        <section className='column'>
            <h3>Survey</h3>
            <div className='profileBody row'>
            <div className='profileSubBody column'>
                    <div className='profileCard information column'>
                        <h2>Information</h2>
                        <div className='questionBody column'>
                            <p>Which countries are you legally entitled to work in?</p>
                            <div className='searchJobs-relative dropDown'>
                                <input placeholder='Country'/>
                                <img src={dropDownIcon}/>
                            </div>
                        </div>
                        <div className='questionBody column'>
                            <p>Are you enrolled in a formal co-op program?</p>
                            <div className='searchJobs-relative dropDown'>
                                <input placeholder='Choose'/>
                                <img src={dropDownIcon}/>
                            </div>
                        </div>
                        <div className='questionBody column'>
                            <p>Have you worked with TD in the past?</p>
                            <div className='searchJobs-relative dropDown'>
                                <input placeholder='Choose'/>
                                <img src={dropDownIcon}/>
                            </div>
                        </div>
                        <button className='primaryButton'><p>Save</p></button>
                    </div>
                </div>

            </div>
        </section>
        </div>

    </AnimatedPage>

  )
};
 