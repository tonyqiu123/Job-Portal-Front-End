import React from 'react';
import '../css/all.css'
import '../css/jobQuery.css'
import '../css/profile.css'
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

export default function Applications() {

  return (
    <AnimatedPage>

        <section className='column'>
            <h3>Profile</h3>
            <div className='profileBody row'>
                <div className='profileSubBody column'>
                    <div className='profileCard contacts column'>
                        <img className='edit' src={editIcon}/>
                        <img className='contacts-pfp' src={linkedinProfile}/>
                        <h2>Tony Qiu</h2>
                        <div className='hr'></div>
                        <div className='row'>
                            <img src={emailIcon}/>
                            <p>tqiu@uwaterloo.ca</p>
                        </div>
                        <div className='row'>
                            <img src={phoneIcon}/>
                            <p>(437) 774-3365</p>
                        </div>
                        <div className='row'>
                            <img src={locationIcon}/>
                            <p>Toronto, ON, Canada</p>
                        </div>
                        <div className='hr'></div>
                        <a href="" target="_blank"><p>linkedin.com/in/tonyqiu1</p></a>
                        <a href="" target="_blank"><p>github.com/tonyqiu123</p></a>
                        <a href="" target="_blank"><p>tonyqiu.ca</p></a>
                    </div>

                    <div className='profileCard attachments column'>
                        <img className='edit' src={editIcon}/>
                        <h2>Attachments</h2>
                        <a href="" target="_blank"><p>Tony Qiu's 2023 Resume</p></a>
                        <a href="" target="_blank"><p>Tony Qiu's Fall 1S Unofficial Transcript</p></a>
                    </div>
                </div>


                <div className='profileSubBody column'>
                    <div className='profileCard experience column'>
                        <img className='edit' src={addIcon}/>
                        <h2>Experience</h2>
                        <div className='experience-row row'>
                            <img src="https://cdn.discordapp.com/attachments/715319623637270638/1066955855586668574/BBI-favicon.png"/>
                            <div className='column'>
                                <h6>Web Developer</h6>
                                <p>BrightBearsInfo</p>
                                <p>Feb 2023 - Present</p>
                                <p>Managed website for organization</p>
                            </div>
                            <div className='editAndDeleteBody row'>
                                <img src={editIcon}/>
                                <img src={deleteIcon}/>
                            </div>
                        </div>
                        <div className='experience-row row'>
                            <img src="https://cdn.discordapp.com/attachments/715319623637270638/1066955855586668574/BBI-favicon.png"/>
                            <div className='column'>
                                <h6>Web Developer</h6>
                                <p>BrightBearsInfo</p>
                                <p>Feb 2023 - Present</p>
                                <p>Managed website for organization</p>
                            </div>
                            <div className='editAndDeleteBody row'>
                                <img src={editIcon}/>
                                <img src={deleteIcon}/>
                            </div>
                        </div>
                    </div>

                    <div className='profileCard projects column'>
                        <img className='edit' src={addIcon}/>
                        <h2>Projects</h2>
                        <div className='row'>
                            <div className='projects-column column'>
                                <h6>Web Developer</h6>
                                <p>Feb 2023 - Present</p>
                                <p>Managed website for organization</p>
                            </div>
                            <div className='editAndDeleteBody row'>
                                <img src={editIcon}/>
                                <img src={deleteIcon}/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='projects-column column'>
                                <h6>Web Developer</h6>
                                <p>Feb 2023 - Present</p>
                                <p>Managed website for organization</p>
                            </div>
                            <div className='editAndDeleteBody row'>
                                <img src={editIcon}/>
                                <img src={deleteIcon}/>
                            </div>
                        </div>
                    </div>

                    <div className='profileCard education column'>
                        <img className='edit' src={addIcon}/>
                        <h2>Education</h2>
                        <div className='row'>
                            <div className='column'>
                                <h6>University of Waterloo</h6>
                                <p>Bachelor's Management Engineering</p>
                                <p>Feb 2023 - Present</p>
                            </div>
                            <div className='editAndDeleteBody row'>
                                <img src={editIcon}/>
                                <img src={deleteIcon}/>
                            </div>
                        </div>
                    </div>

                </div>  

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
    </AnimatedPage>

  )
};
 