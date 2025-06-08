import React, { Suspense } from 'react';
import useAuth from '../hooks/useAuth';
import JobLists from './JobLists';
import { jobsCreatedByPromised } from '../jobsApi';

const MyPostedJobs = () => {
    const {user} = useAuth();
    return (
        <div>
            <h2>My Posted Jobs: </h2>
            <Suspense>
                <JobLists 
                jobsCreatedByPromised={jobsCreatedByPromised(user.email)}>
                    
                </JobLists>
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;