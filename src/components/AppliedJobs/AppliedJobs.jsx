import React, { useState } from 'react';
import SingleAppliedJob from '../SingleAppliedJob/SingleAppliedJob';
import './AppliedJobs.css'

const AppliedJobs = () => {
    const appliedJobs=JSON.parse(localStorage.getItem('appliedJobs'));
    const [jobs,setJobs]=useState(appliedJobs)
    const displayOnsite=()=>{
        const onsite=appliedJobs.filter(job=>job.location==="onsite")
        console.log(onsite);
        setJobs(onsite);
    }
    const displayRemote=()=>{
        const remote=appliedJobs.filter(job=>job.location==="remote")
        console.log(remote);
        setJobs(remote)
    }
    const displayAll=()=>{
        setJobs(appliedJobs)
    }

    return (
        <div>
            <div className="banner mb-5">
                <h3 style={{textAlign:"center"}}>Applied Jobs</h3>
            </div>
           <div className="container">
            <div className="end mb-5">
                <h5><b>Filter By:</b></h5>
                <div className="d-flex">
                    <button onClick={()=>displayOnsite()} className='btn btn-success'>Onsite</button>
                    <button onClick={()=>displayRemote()} className='btn btn-primary margin '>Remote</button>
                    <button onClick={()=>displayAll()} className='btn btn-warning margin '>All</button>
                </div>
            </div>
            <div className="row">
            <div className="col-12">
                {
                   jobs && jobs.map(appliedJob=><SingleAppliedJob appliedJob={appliedJob}></SingleAppliedJob>)
                }
            </div>
            </div>
           </div>
        </div>
    );
};

export default AppliedJobs;