import React from 'react';
import '../css/all.css'
import SideNavBar from "../components/SideNavBar"
import AnimatedPage from '../components/AnimatedPage'
import searchIcon from '../images/search.svg'
import locationIcon from '../images/locationIcon.svg'
import dropDownIcon from '../images/dropDownIcon.svg'
import JobResults from '../components/JobResults'

export default function SearchJobs() {

  return (
    <AnimatedPage>
        <SideNavBar/>
        <div className='body'>
        <div className='dummyMargin'></div>
        <section className='column'>
            <h3>Search Jobs</h3>
            <div className='searchJobs-inputContainer column'>
                <div className='searchJobs-input row'>
                    <div className='searchJobs-relative'>
                        <input placeholder='Search Jobs'/>
                        <img src={searchIcon}/>
                    </div>
                    <div className='searchJobs-relative'>
                        <input placeholder='Location'/>
                        <img src={locationIcon}/>
                    </div>
                </div>
                <div className='searchJobs-input row'>
                    <div className='searchJobs-relative dropDown'>
                        <select>
                            <option value="option1">Full time</option>
                            <option value="option2">Part time</option>
                            <option value="option3">Internship</option>
                            <option value="option4">All roles</option>
                        </select>
                    </div>
                    <div className='searchJobs-relative dropDown'>
                        <select>
                            <option value="option1">Bachelor's Degree</option>
                            <option value="option2">Master's Degree</option>
                            <option value="option3">Highschool</option>
                            <option value="option4">Any education</option>
                        </select>
                    </div>
                </div>
                <button className='primaryButton'><p>Search</p></button>
            </div>
            <JobResults/>
        </section>
        </div>
    </AnimatedPage>

  )
};
 