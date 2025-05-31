import React, { useEffect, useState } from 'react';
import JobCard from '../Shared/JobCard';

const HotJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/jobs')
            .then(res => res.json())
            .then(data => setJobs(data))
            .catch(err => console.error("Failed to fetch jobs:", err));
    }, []);

    return (
       <div>
         <h2 className='text-4xl text-center'>Hot Jobs of the Day</h2>
        <div className='grid gap-4 grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
            {jobs.map(job => <JobCard key={job._id}job={job}></JobCard>)}
        </div>
       </div>
    );
};

export default HotJobs;
