import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './JobDetails.css';

const JobDetails = () => {
    const [jobs,setJobs]=useState([]);
    const [jobdetails,setJobdetails]=useState({});
    
    const {id}=useParams();
    
   
    
   
    useEffect(()=>{
         fetch('/fakeDB.json')
         .then(res=>res.json())
         .then(data=>setJobs(data))
    },[])

useEffect(()=>{
if(jobs.length>0){
    const singleJob=jobs.find(job=>job.id==id);
    setJobdetails(singleJob)
}
},[jobs,id])
   
   
  
   
    const {company_name,job_description,job_responsibility,educational_requirements,experiences,salary,job_title,phone,email,office_location}=jobdetails;
  
     const handleAddToLoaclstorage=(jobdetails)=>{
        const appliedJo
     }
  
    return (
        <div>
            <div className="job-details">
                <h3 style={{textAlign:"center"}}>Job Details</h3>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="job-description col-12 col-md-7">
                      <h3><b>Company Name</b>:{company_name}</h3>
                      <p><b>Job Description</b>:{job_description}</p>
                      <p><b>Job Responsibility</b>:{job_responsibility}</p>
                      <p><b>Educational Requirements</b>:{educational_requirements}</p>
                      <p><b>Experiences</b>:{experiences}</p>
                    </div>
                    <div className="contact-info col-12 col-md-5">
                        <div className="contact mb-3">
                            <h5>Job Details</h5>
                            <hr />
                            <div className="flex">
                            <i class="fa-light fa-dollar-sign small-margin"></i>
                            <h6>Salary:{salary}</h6>
                            </div>
                            <div className="flex mb-5">
                            <i class="fa-regular fa-calendar-days small-margin"></i>
                            <h6>Job Title:{job_title}</h6>
                            </div>
                           <h5>Contact Information</h5>
                           <hr />
                           <div className="flex">
                           <i class="fa-solid fa-phone small-margin"></i>
                            <h6>Phone:{phone}</h6>
                            </div>
                            <div className="flex">
                            <i class="fa-solid fa-envelope small-margin"></i>
                            <h6>Email:{email}</h6>
                            </div>
                            <div className="flex mb-5">
                            <i class="fa-sharp fa-solid fa-location-dot small-margin"></i>
                            <h6>Address:{office_location}</h6>
                            </div>
                        </div>
                        <button onClick={()=>handleAddToLoaclstorage(jobdetails)} className='btn btn-primary d-block w-100'>Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;