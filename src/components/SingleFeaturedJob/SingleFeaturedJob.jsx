import React from 'react';
import './SingleFeaturedJob.css'
import { useNavigate } from 'react-router-dom';

const SingleFeaturedJob = ({featuredjob}) => {
  
    const {id,company_name,img,job_title,job_type,location,office_location,salary}=featuredjob;
    const navigate=useNavigate();
    const handleNavigate=()=>{
     navigate(`/viewdetails/${id}`)
    }
    return (
        <div className='single-job'>
            <img className='img-fluid logo' src={img} alt="" />
            <h4>{job_title}</h4>
            <p>{company_name}</p>
            <div className='d-flex'>
      <button className='btn btn-outline-primary margin'>{location}</button>
      <button className='btn btn-outline-primary'>{job_type}</button>
            </div>
            <div className="d-flex mt-5">
            <div className='margin d-flex'>
            <i class="fa-sharp fa-solid fa-location-dot small-margin"></i>
            <p>{office_location}</p>
            </div>
            <div className='d-flex'>
            <i class="fa-light fa-dollar-sign small-margin"></i>
            <p>{salary}</p>
            </div>
            </div>
            <button onClick={handleNavigate} className='btn btn-primary'>View Details</button>
        </div>
    );
};

export default SingleFeaturedJob;