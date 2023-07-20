import React from 'react';
import './SingleAppliedJob.css'
import { useNavigate } from 'react-router-dom';

const SingleAppliedJob = ({appliedJob}) => {
    const navigate=useNavigate();
    const {id,img,job_title,company_name,location,job_type,office_location,salary}=appliedJob;
    return (
        <div>
            <div className="d-flex mb-5 justify-content-between align-items-center total">
              <div>
              <div className="d-flex">
               <div className="image">
                    <img className='image' src={img} alt="" />
                </div>
                <div className="description">
                    <h5><b>{job_title}</b></h5>
                    <p>{company_name}</p>
                    <div className="d-flex">
                        <div className="btn btn-outline-primary">{location}</div>
                    <div className="btn btn-outline-primary description">{job_type}</div>
                    </div>
                    <div className="d-flex mt-3 location_salary">
                        <div className="d-flex ">
                        <i class="fa-sharp fa-solid fa-location-dot"></i>
                        <p className='description'>{office_location}</p>
                        </div>
                         
                          <div className="d-flex description">
                          <i class="fa-light fa-dollar-sign"></i>
                          <p className='description'>Salary:{salary}</p>
                          </div>

                    </div>
                </div>
               </div>
              </div>

              <div>
              <button onClick={()=>navigate(`viewdetails/${id}`)} className='btn btn-primary'>View Details</button>
              </div>

            </div>
            
        </div>
    );
};

export default SingleAppliedJob;