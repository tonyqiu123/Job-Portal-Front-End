import { Link, useLocation } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import '../css/all.css'

export default function JobResults() {

    const [jobData, setJobData] = useState([]);
    
    const getJobs = () => {
      fetch("https://job-portal-back-end-production.up.railway.app/api/jobs")
        .then((response) => response.json())
        .then((data) => setJobData(data));
    }

    useEffect(() => {
      getJobs()
    }, []);

  return (
    <div className='jobQueryBody column'>
        <h4>{jobData.length} Results</h4>
        {jobData.map(job => (
            <div key={job._id} className='job row'>
                <div className='column job-left'>
                    <h6>{job.title}</h6>
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
                    
        ))}

    </div>
  )
}
