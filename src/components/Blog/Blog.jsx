import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div>
             <div className="job-details">
                <h3 style={{textAlign:"center"}}>Blog</h3>
            </div>
            <div className="col-12 blog">
                <h4><b>When we use context api</b></h4>
                <p>Context API is a feature in React that allows us to share data across the component tree without having to pass props down manually at every level. We can use the Context API when we have data that needs to be accessed by multiple components at different levels in our component hierarchy.</p>
            </div>
            <div className="col-12 blog">
            <h4><b>What is react custom hook?</b></h4>
            <p>A React custom hook is a function that allows us to reuse stateful logic in our React components. Custom hooks are a way to extract reusable logic from components, making it easier to share functionality between different components.</p>
            </div>
            <div className="col-12 blog">
            <h4><b>What is useref?Why we use it?</b></h4>
            <p>useRef is a built-in React hook that returns a mutable ref object. This ref object can be used to store a value that persists across component renders without triggering a re-render. useRef is similar to the ref attribute in class components, but it can also be used to access the underlying DOM node or component instance.</p>
            </div>
            <div className="col-12 blog">
            <h4><b>What is useMemo?Why we use it?</b></h4>
            <p>useMemo is a built-in React hook that is used to optimize the performance of a component by memoizing its computed values. Memoization is a technique that involves caching the results of a function call to avoid unnecessary recomputation.</p>
            </div>
            
        </div>
    );
};

export default Blog;