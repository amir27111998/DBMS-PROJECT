import React from 'react';
import NavDash from './NavDash';
import '../loadingFiles';



const VisitedDoctors=()=>{

    return(
   
    
    <div className="main-panel" id="main-panel">
      <NavDash title="Visited Doctors" />
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

  )
};

export default VisitedDoctors;
