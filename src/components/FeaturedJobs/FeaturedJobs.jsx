import React, { useEffect, useState } from 'react';
import SingleFeaturedJob from '../SingleFeaturedJob/SingleFeaturedJob';

const FeaturedJobs = () => {
    const [featuredjobs,setFeaturedjobs]=useState([]);
    useEffect(()=>{
      fetch('/fakeDB.json')
      .then(res=>res.json())
      .then(data=>setFeaturedjobs(data))
    },[])
    return (
        <div className='mt-5 '>
            <h1 style={{textAlign:"center"}}>Featured Jobs</h1>
            <p style={{textAlign:"center"}}>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="container mt-5">
                <div className="row row-cols-1 row-cols-md-2 g-4 justify-content-center">
                    {
                        featuredjobs.map(featuredjob=><SingleFeaturedJob featuredjob={featuredjob}></SingleFeaturedJob>)
                    }

                </div>
            </div>
            
        </div>
    );
};

export default FeaturedJobs;