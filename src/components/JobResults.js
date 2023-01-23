import { Link, useLocation } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import '../css/all.css'
import '../css/jobQuery.css'

export default function JobResults({ search, location, FTPTI, stage, sortApplications, requiredEducation, shortlisted }) {

    const [jobData, setJobData] = useState([]);
    useEffect(() => {
      async function fetchData() {
        const res = await fetch('https://job-portal-back-end-production.up.railway.app/api/jobs');
        const data = await res.json();
        setJobData(data);
      }
      fetchData();
    }, []);

  return (
    <div className='jobQueryBody column'>
        {jobData.map(job => {

            <div key={job._id} className='job row'>
                <div className='column job-left'>
                    <h6>Mechanial Design Engineer</h6>
                    <div className='tagsContainer row'>
                        <p>Full time</p>
                        <p>Toronto, ON, Canada</p>
                        <p>Engineering</p>
                    </div>
                </div>
                <div className='job-right row'>
                    <button><p>Shortlist</p></button>
                    <button className='primaryButton'><p>Apply</p></button>
                </div>
            </div>
                    
        })}

    </div>
  )
}
