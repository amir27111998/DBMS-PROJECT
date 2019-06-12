import React from 'react';
import NavDash from './NavDash';
import '../loadingFiles';
import {connect} from 'react-redux';
import {loadVisitedDoctors} from "./redux/serviceLoder";
import {Spinner, Button} from 'react-bootstrap';



const VisitedDoctors=(props)=>{

  if(!props.status){
    return(
   
    
    <div className="main-panel" id="main-panel">
      <NavDash title="Visited Doctors" />
      <div className="panel-header panel-header-sm">
      </div>
      <div className="content">
        <div className="row">
          {props.doctors.map((doctor)=>{
            return(
              <div className="col-md-4">
              <div className="card card-user">
                <div className="image">
                  <img src={require("./assets/img/bg5.jpg")} alt="..." />
                </div>
                <div className="card-body">
                  <div className="author">
                    <a >
                      <img className="avatar border-gray" src={require("./assets/img/"+doctor.picture)} alt="..." />
                      <h5 className="title">{doctor.name}</h5>
                    </a>
                    <p className="description">
                     {doctor.contact}
                    </p>
                  </div>
                  <p className="description text-center">
                    {doctor.description}
                  </p>
                  <strong>
                  <p className="text-dark text-center">
                      {doctor.email}
                    </p>
                    </strong>
                </div>
                <hr /> 
                <div className="button-container">
                <Button variant="danger" >{doctor.specialization}</Button>
              </div>
              </div>
            </div>
            );
          })}
         
        </div>
      </div>
     
    </div>

  )}

  return(
    <div className="wrapper ">
        <div className="main-panel" id="main-panel" style={{top:'50%',textAlign:'center',background:'none'}}>
    <Spinner variant="danger" animation="border" show={props.status} />
      </div></div>
  )

};

const mapStateToProps=(state)=>{
    return{
      doctors:state.doctors.data,
      status:state.doctors.loading
    }
}

const mapDispatchToProps=(dispatch)=>{
  return dispatch(loadVisitedDoctors(JSON.parse(sessionStorage.getItem('user')).id));
}

const DoctorsWithData=connect(mapStateToProps,mapDispatchToProps)(VisitedDoctors);

export default DoctorsWithData;
