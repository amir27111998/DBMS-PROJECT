import React, { Component } from 'react';
import NavDash from './NavDash';
import '../loadingFiles';
import { Button, Spinner } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {listOfDoctors} from './redux/serviceLoder';
import {nameFilter,addressFilter,districtFilter,
        specializationFilter,experianceFilter} from './redux/actions';
import {connect} from 'react-redux';
import getFilterDoctors from './redux/selectors';

class Appointment extends Component{
  constructor(props){
    super(props);
    this.props=props;
    this.state={
      districts:[],
      specialization:[]  
    }

    //fetching get districts
    fetch("https://localhost:44379/api/Patients/getDistrict")
    .then(res=>res.json())
    .then((data)=>{
      this.setState({districts:data});
    });
    //end

    //fetching get specialization
    fetch("https://localhost:44379/api/Patients/getSpecialization")
    .then(res=>res.json())
    .then((data)=>{
      this.setState({specialization:data});
    });
    //end
    this.searchName=this.searchName.bind(this);
    this.searchAddress=this.searchAddress.bind(this);
    this.searchExperiance=this.searchExperiance.bind(this);
    this.searchSpecialization=this.searchSpecialization.bind(this);
    this.searchDistrict=this.searchDistrict.bind(this);
  }


searchName(e){
  this.props.name_filter(e.target.value);
}

searchAddress(e){
  this.props.address_filter(e.target.value);
}

searchExperiance(e){
  this.props.experiance_filter(e.target.value);
}

searchDistrict(e){
  this.props.district_filter(e.target.value);
}

searchSpecialization(e){
  this.props.specialization_filter(e.target.value);
}

  render(){
    if(!this.props.status){
      console.log(this.props);
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
                        <input type="text" name="search" className="form-control" onChange={this.searchName} placeholder="Search Name...." />
                        &nbsp;&nbsp;
                        <input type="text" name="address" className="form-control" onChange={this.searchAddress} placeholder="Search Address...." />
                        &nbsp;&nbsp;
                        <select name="district" onChange={this.searchDistrict}  className="form-control">
                          <option value={0}>District</option>
                          {this.state.districts.map((district)=>{
                            return(<option value={district.id}>{district.district}</option>);
                          })}
                        </select>
                        &nbsp;&nbsp;
                        <select name="specialization" onChange={this.searchSpecialization} className="form-control">
                          <option value={0}>Specialization</option>
                          {this.state.specialization.map((spec)=>{
                            return(<option value={spec.id}>{spec.specialization}</option>);
                          })}
                          
                        </select>
                        
                        &nbsp;&nbsp;
                        
                      <input type="number"  onChange={this.searchExperiance} name="experiance" min="0"  placeholder="Search By Experiance...." className="form-control" />
  
                      </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
  
            {getFilterDoctors(this.props.filters,this.props.doctorsList.data).map((doctor)=>{
                return(
  
                  <div className="col-md-4" key={doctor.id}>
              <div className="card card-user">
                <div className="image">
                  <img src={require("./assets/img/bg5.jpg")} alt="..." />
                </div>
                <div className="card-body">
                  <div className="author">
                    <a>
                      <img className="avatar border-gray" src={require("./assets/img/"+doctor.picture)} alt="..." />
                      <h5 className="title">{doctor.name}</h5>
                    </a>
                    
                    
                    <p className="description text-primary" style={{fontWeight:"bold"}}>
                      {doctor.specialization}
                    </p>
  
                   
                    
                  </div>
                  <p className="description text-center" >
                    {doctor.description}
                  </p>
                  <p className="description text-dark text-center" style={{fontWeight:"bold"}}>
                      Experience of {doctor.experience} years
                    </p>
                </div>
                <hr /> 
                
  
                <div className="button-container">
                <Link to={{
                  pathname:"/timings/"+doctor.id,
                  }} className="text-light">
                  <Button variant="primary" >
                    View Timings
                  </Button>
                  </Link>
                </div>
  
              </div>
            </div>
  
                );
            })}
            
  
  
            </div>
  
  
  
          </div>
          
        </div>
      </div>
      );
      }
      return(
      <div className="wrapper ">
        <div className="main-panel" id="main-panel" style={{top:'50%',textAlign:'center',background:'none'}}>
        <Spinner variant="danger" animation="border"/>
        </div>
      </div>
      )
  }




}










const mapStateToProps=(state)=>{
  return {
    doctorsList:state.doctors,
    status:state.doctors.loading,
    filters:state.filters
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    loadDoctors:dispatch(listOfDoctors()),
    name_filter:(name="")=>{dispatch(nameFilter(name))},
    address_filter:(address="")=>{dispatch(addressFilter(address))},
    experiance_filter:(experiance=0)=>{dispatch(experianceFilter(experiance))},
    district_filter:(district=0)=>{dispatch(districtFilter(district))},
    specialization_filter:(specialization=0)=>{dispatch(specializationFilter(specialization))}
  }
}

const appointmentWithData=connect(mapStateToProps,mapDispatchToProps)(Appointment);

export default appointmentWithData;