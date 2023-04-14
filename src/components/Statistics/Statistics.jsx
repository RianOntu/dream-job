import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './Statistics.css'

const Statistics = () => {
    const assignmentMarks=[
        {
            assignment_no:1,
            assignment_marks:60
        },
        {
            assignment_no:2,
            assignment_marks:60
        },
        {
            assignment_no:3,
            assignment_marks:60
        },
        {
            assignment_no:4,
            assignment_marks:58
        },
        {
            assignment_no:5,
            assignment_marks:60
        },
        {
            assignment_no:6,
            assignment_marks:58
        },
        {
            assignment_no:7,
            assignment_marks:60
        },
        {
            assignment_no:8,
            assignment_marks:60
        }
    ]

    return (
        <div>
            <div className="job-details">
                <h3 style={{textAlign:"center"}}>Statistics</h3>
            </div>
                 
       <div className='justify-content-center mx-auto mt-5'>
       <AreaChart
          width={500}
          height={400}
          data={assignmentMarks}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="assignment_no" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="assignment_marks" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
       </div>
      
            
        </div>
    );
};

export default Statistics;