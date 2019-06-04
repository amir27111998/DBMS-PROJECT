import React from 'react';
import '../loadingFiles';
import {Redirect} from 'react-router-dom';
import NavDash from './NavDash';
import {onlyDate} from '../Utilities';
const Profile=()=>{
  
  var user=JSON.parse(sessionStorage.getItem('user'));
  var picturePath="./assets/img/mike.jpg";
    return(
    <div class="wrapper ">
    <div class="main-panel" id="main-panel">
   <NavDash title="User Profile" />
      <div class="panel-header panel-header-sm">
      </div>
      <div class="content">
        <div class="row">
          <div class="col-md-8">
            <div class="card">
              <div class="card-header">
                <h5 class="title">Profile Information</h5>
              </div>
              <div class="card-body">
                <form>
                  <div class="row">
                    <div class="col-md-5 pr-1">
                      <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" disabled="true" placeholder="Name" value={user.name} />
                      </div>
                    </div>
                    <div class="col-md-3 px-1">
                      <div class="form-group">
                        <label>Contact</label>
                        <input type="text" class="form-control" disabled="true" placeholder="Contact" value={user.contact} /> 
                      </div>
                    </div>
                    <div class="col-md-4 pl-1">
                      <div class="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input type="email" class="form-control" disabled="true" value={user.email} placeholder="Email" />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6 pr-1">
                      <div class="form-group">
                        <label>Father Name</label>
                        <input type="text" class="form-control" disabled="true" placeholder="Father Name" value={user.fatheR_NAME} />
                      </div>
                    </div>
                    <div class="col-md-6 pl-1">
                      <div class="form-group">
                        <label>Date Of Birth</label>
                        <input type="text" class="form-control" disabled="true" placeholder="Date" value={onlyDate(user.dob)} />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label>Address</label>
                        <input type="text" class="form-control" disabled="true" placeholder="Home Address" value={user.address} />
                      </div>
                    </div>
                  </div>
                  
                </form>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card card-user">
              <div class="image">
                <img src={require("./assets/img/bg5.jpg")} alt="..." />
              </div>
              <div class="card-body">
                <div class="author">
                  <a >
                   
                    <img class="avatar border-gray" src={require("./assets/img/"+user.picture)} alt="..." />
                    <h5 class="title">{user.name}</h5>
                  </a>
                  <p class="description">
                  {onlyDate(user.dob)}
                  </p>
                </div>
                <p class="description text-center">
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