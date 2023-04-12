import React from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';
import './Header.css';

const Header = () => {
    return (
        <div className='navbarr'>
            
            <nav className="navbar navbar-expand-lg navbar-light ">

  <div className="container">
  <a className="navbar-brand" href="#">Dream-Job</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav mx-auto mt-2 mt-lg-0">
      <li className="nav-item active">
      <ActiveLink to='/'>Home</ActiveLink>
      </li>
      <li className="nav-item">
      <ActiveLink to='/statistics'>Statistics</ActiveLink>
      </li>
      <li className="nav-item">
      <ActiveLink to='/applied-jobs'>Applied Jobs</ActiveLink>
      </li>
      <li className="nav-item">
      <ActiveLink to='/blog'>Blog</ActiveLink>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
    <button className='btn btn-primary'>Start Applying</button>
    </form>
  </div>
  </div>
</nav>
            
           
           
        </div>
    );
};

export default Header;