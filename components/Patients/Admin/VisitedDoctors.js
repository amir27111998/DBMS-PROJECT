import React from 'react';
import '../loadingFiles';


const VisitedDoctors=()=>{
    return(
    <div className="wrapper ">
    
    <div className="main-panel" id="main-panel">
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
            <a className="navbar-brand" href="#pablo">Visited Doctors</a>
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-bar navbar-kebab"></span>
            <span className="navbar-toggler-bar navbar-kebab"></span>
            <span className="navbar-toggler-bar navbar-kebab"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navigation">
            
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#pablo">
                  <i className="now-ui-icons media-2_sound-wave"></i>
                  <p>
                    <span className="d-lg-none d-md-block">Stats</span>
                  </p>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="now-ui-icons location_world"></i>
                  <p>
                    <span className="d-lg-none d-md-block">Some Actions</span>
                  </p>
                </a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#pablo">
                  <i className="now-ui-icons users_single-02"></i>
                  <p>
                    <span className="d-lg-none d-md-block">Account</span>
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="panel-header panel-header-sm">
      </div>
      <div className="content">
        <div className="row">
          <div className="col-md-4">
            <div className="card card-user">
              <div className="image">
                <img src={require("./assets/img/bg5.jpg")} alt="..." />
              </div>
              <div className="card-body">
                <div className="author">
                  <a href="#">
                    <img className="avatar border-gray" src={require("./assets/img/mike.jpg")} alt="..." />
                    <h5 className="title">Mike Andrew</h5>
                  </a>
                  <p className="description">
                    michael24
                  </p>
                </div>
                <p className="description text-center">
                  "Lamborghini Mercy
                  <br /> Your chick she so thirsty
                  <br /> I'm in that two seat Lambo"
                </p>
              </div>
              <hr /> 
              <div className="button-container">
                <button href="#" className="btn btn-neutral btn-icon btn-round btn-lg">
                  <i className="fab fa-facebook-f"></i>
                </button>
                <button href="#" className="btn btn-neutral btn-icon btn-round btn-lg">
                  <i className="fab fa-twitter"></i>
                </button>
                <button href="#" className="btn btn-neutral btn-icon btn-round btn-lg">
                  <i className="fab fa-google-plus-g"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  </div>
  )
};

export default VisitedDoctors;
