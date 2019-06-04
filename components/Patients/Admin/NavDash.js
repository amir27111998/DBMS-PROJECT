import React from 'react';

const NavDash=(props)=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-transparent  bg-primary  navbar-absolute">
        <div className="container-fluid">
          <div className="navbar-wrapper">
            <div className="navbar-toggle">
              <button type="button" className="navbar-toggler">
                <span className="navbar-toggler-bar bar1"></span>
                <span className="navbar-toggler-bar bar2"></span>
                <span className="navbar-toggler-bar bar3"></span>
              </button>
            </div>
            <a className="navbar-brand" href="#pablo">{props.title}</a>
          </div>
         
          <div className="justify-content-end" id="navigation">
       
            <ul className="navbar-nav">
             
              <li className="nav-item "  onClick={(e)=>{
                sessionStorage.setItem('user',{});
                sessionStorage.setItem('isPatient','');
              }}>
                <a className="nav-link" href="#" >
                  <i className="now-ui-icons users_single-02"></i>
                  <p>
                    <span className="d-lg-none d-md-block"></span>
                    Logout
                  </p>
                </a>
              </li>
            
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default NavDash;