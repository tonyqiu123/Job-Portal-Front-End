import React from 'react';
import '../css/all.css'
import SideNavBar from "../components/SideNavBar"
import AnimatedPage from '../components/AnimatedPage'
import searchIcon from '../images/search.svg'
import locationIcon from '../images/locationIcon.svg'
import dropDownIcon from '../images/dropDownIcon.svg'
import JobResults from '../components/JobResults'

export default function Shortlist() {

  return (
    <AnimatedPage>
        <SideNavBar/>
        <div className='body'>
            <div className='dummyMargin'></div>
            <section className='column'>
                <h3>Shortlist</h3>
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
                    <div className='searchJobs-input row dropDown-twoColumns'>
                        <div className='searchJobs-relative dropDown'>
                            <input placeholder='Full time / Part time / Internship'/>
                            <img src={dropDownIcon}/>
                        </div>
                        <div className='searchJobs-relative dropDown'>
                            <input placeholder='Number of Applications'/>
                            <img src={dropDownIcon}/>
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
 