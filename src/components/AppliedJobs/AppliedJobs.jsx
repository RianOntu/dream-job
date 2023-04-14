import React from 'react';
import SingleAppliedJob from '../SingleAppliedJob/SingleAppliedJob';
import './AppliedJobs.css'

const AppliedJobs = () => {
    const appliedJobs=JSON.parse(localStorage.getItem('appliedJobs'));

    return (
        <div>
            <div className="banner mb-5">
                <h3 style={{textAlign:"center"}}>Applied Jobs</h3>
            </div>
           <div className="container">
            <div className="row">
            <div className="col-12">
                {
                    appliedJobs.map(appliedJob=><SingleAppliedJob appliedJob={appliedJob}></SingleAppliedJob>)
                }
            </div>
            </div>
           </div>
        </div>
    );
};

export default AppliedJobs;