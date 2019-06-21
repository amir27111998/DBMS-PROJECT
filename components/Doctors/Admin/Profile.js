import React from 'react';
import '../loadingFiles';
import NavDash from './NavDash';
import {onlyDate} from '../Utilities';
const Profile=()=>{
  
  var user=JSON.parse(sessionStorage.getItem('doctor'));
  var picturePath="./assets/img/mike.jpg";
    return(
    <div className="wrapper ">
    <div className="main-panel" id="main-panel">
   <NavDash title="Doctor's Profile" />
      <div className="panel-header panel-header-sm">
      </div>
      <div className="content">
        <div className="row">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">
                <h5 className="title">Profile Information</h5>
              </div>
              <div className="card-body">
                <form>
                  <div className="row">
                    <div className="col-md-5 pr-1">
                      <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" disabled="true" placeholder="Name" value={user.name} />
                      </div>
                    </div>
                    <div className="col-md-3 px-1">
                      <div className="form-group">
                        <label>Contact</label>
                        <input type="text" className="form-control" disabled="true" placeholder="Contact" value={user.contact} /> 
                      </div>
                    </div>
                    <div className="col-md-4 pl-1">
                      <div className="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input type="email" className="form-control" disabled="true" value={user.email} placeholder="Email" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 pr-1">
                      <div className="form-group">
                        <label>Father Name</label>
                        <input type="text" className="form-control" disabled="true" placeholder="Father Name" value={user.fatheR_NAME} />
                      </div>
                    </div>
                    <div className="col-md-6 pl-1">
                      <div className="form-group">
                        <label>Medical Institute</label>
                        <input type="text" className="form-control" disabled="true" placeholder="institute" value={user.educationaL_INSTITUTE} />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Description</label>
                        <textarea className="form-control" disabled="true" placeholder="description" value={user.description}></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Address</label>
                        <input type="text" className="form-control" disabled="true" placeholder="Home Address" value={user.address} />
                      </div>
                    </div>
                  </div>
                  
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-user">
              <div className="image">
                <img src={require("./assets/img/bg5.jpg")} alt="..." />
              </div>
              <div className="card-body">
                <div className="author">
                  <a >
                   
                    <img className="avatar border-gray" src={require("./assets/img/"+user.picture)} alt="..." />
                    <h5 className="title">{user.name}</h5>
                  </a>
                  <p className="description">
                  <span className="badge badge-danger">{user.specialization}</span>
                  </p>
                  <p><strong>Experiance of {user.experience} years</strong></p>
                </div>
                <p className="description text-center">
                 {user.address}
                </p>
              </div>
              <hr /> 
              
            </div>
          </div>
        </div>
      </div>
     
    </div>
  </div>
  )
};

export default Profile;