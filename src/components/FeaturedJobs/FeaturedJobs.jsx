import React, { useEffect, useState } from 'react';
import SingleFeaturedJob from '../SingleFeaturedJob/SingleFeaturedJob';

const FeaturedJobs = () => {
    const [featuredjobs,setFeaturedjobs]=useState([]);
    const [status,setStatus]=useState(true);
    useEffect(()=>{
      fetch('/fakeDB.json')
      .then(res=>res.json())
      .then(data=>setFeaturedjobs(data))
    },[])
    const lessFeaturedJobs=featuredjobs.slice(0,4);
    const handleStatus=()=>{
        setStatus(false)
    }
    return (
        <div className='mt-5 '>
            <h1 style={{textAlign:"center"}}>Featured Jobs</h1>
            <p style={{textAlign:"center"}}>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="container mt-5">
                <div className="row row-cols-1 row-cols-md-2 g-4 justify-content-center">
                   {
                         status?lessFeaturedJobs.map(featuredjob=><SingleFeaturedJob featuredjob={featuredjob}></SingleFeaturedJob>): featuredjobs.map(featuredjob=><SingleFeaturedJob featuredjob={featuredjob}></SingleFeaturedJob>)
                        
    
                   
                   }
                   {
                    status?<button className='btn btn-primary' onClick={()=>handleStatus()}>See All jobs</button>:""
                   }
                </div>
            </div>
            
        </div>
    );
};

export default FeaturedJobs;