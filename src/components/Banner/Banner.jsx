import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
          <div className="container dream_desc mx-auto">
          <div className="row mt-3 grid">
           <div className=" text">
              <h1>One Step <br /> Closer To Your <br /> <span className='dream-job'>Dream Job</span> </h1>
              <p>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
              <div className="btn btn-primary">Get Started</div>
            </div>
            <div className="">
                  
                  <img className='img-fluid hardy'  src="https://i.ibb.co/gzvJZ74/hardy.png" alt="hardy" border="0" />
              </div>
           </div>
          </div>

        </div>
    );
};

export default Banner;