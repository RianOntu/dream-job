import React from 'react';
import './JobCategory.css'

const JobCategory = () => {
    return (
        <div >
            <h1 style={{textAlign:"center"}}>Job Category List</h1>
            <p style={{textAlign:"center"}}>Explore thousands of job opportunities with all the information you need. Its your future</p>
       <div className="container">
       <div className="row mx-auto mt-5 g-3">
              
              <div className="col-12 col-md-3">
             <div className='job-category'>
             <i className="fa-brands fa-adversal"></i>
                <h4>Account and Finance</h4>
                <p>300 jobs available</p>
             </div>
                </div>
                <div className="col-12 col-md-3">
                <div className="job-category">
                <i className="fa-sharp fa-regular fa-lightbulb"></i>
                <h4>Creative Design</h4>
                <p>100+ jobs available</p>
                </div>
                </div>
                <div className="col-12 col-md-3">
               <div className="job-category">
               <i className="fa-brands fa-adversal"></i>
                <h4>Marketing and Sales</h4>
                <p>150 jobs available</p>
               </div>
                </div>
                <div className="col-12 col-md-3">
               <div className="job-category">
               <i className="fa-sharp fa-regular fa-lightbulb"></i>
                <h4>Engineering Job</h4>
                <p>224 jobs available</p>
               </div>
                </div>
             
            </div>
       </div>
        </div>
    );
};

export default JobCategory;