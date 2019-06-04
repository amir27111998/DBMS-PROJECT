import React from 'react';
import NavDash from './NavDash';
import '../loadingFiles';
import { Button } from 'react-bootstrap';

const Appointment=()=>{
    return (
      <div className="wrapper ">
      <div className="main-panel" id="main-panel">
     
     <NavDash title="Appointment" />
        <div className="panel-header panel-header-sm">
        </div>
        <div className="content">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="title">Find Doctors</h5>
                  <p className="category">Filter doctors make an appointment
                  </p>
                </div>
                <div className="card-body all-icons">
                  <div className="row">
                    <div className="col-lg-12">
                    <form className="form-inline">
                      <input type="text" name="search" className="form-control" placeholder="Search Name...." />
                      &nbsp;&nbsp;
                      <input type="text" name="address" className="form-control" placeholder="Search Address...." />
                      &nbsp;&nbsp;
                      <select name="district"  className="form-control">
                        <option>District</option>
                        <option>Malir Town</option>
                        <option>Gulshan Town</option>
                      </select>
                      &nbsp;&nbsp;
                      <select name="specialization"  className="form-control">
                        <option>Specialization</option>
                        <option>Cardiology</option>
                        <option>Physiotherapist</option>
                      </select>
                      &nbsp;&nbsp;
                    
                      <select name="time"  className="form-control">
                        <option>Time</option>
                        <option>3:00PM</option>
                        <option>4:00AM</option>
                      </select>
                      &nbsp;&nbsp;
                      <select name="rating"  className="form-control">
                        <option>Ratings</option>
                        <option>4.0</option>
                        <option>3.0</option>
                      </select>

                    </form>
                    </div>
                  </div>
                </div>
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
                <Button variant="primary" >Book Appointment</Button>
              </div>

            </div>
          </div>


        </div>
        
      </div>
    </div>
    );
}

export default Appointment;