import React, { Component } from 'react';
import '../loadingFiles';
import NavDash from './NavDash';
import {connect} from 'react-redux';
import {Spinner, Button,Tabs, Tab,Image, Col} from 'react-bootstrap';
import {onlyDate,onlyTime} from '../Utilities'
import {ListAppointments} from '../../Patients/Admin/redux/serviceLoder';


class AppointmentsList extends Component{
  constructor(props){
    super(props);
    this.props=props;
    this.feedback=this.feedback.bind(this);
    this.prescription=this.prescription.bind(this);
  } 

  
feedback(id){
 this.props.history.push("/feedback/"+id);
}

prescription(id){
  fetch("https://localhost:44379/api/Patients/prescription/"+id)
  .then((res)=>res.json())
  .then((data)=>{
    if(data[0]!=null){
    window.open(require('./assets/pres/'+data[0]));
    }
    else{
      window.open(require('./assets/img/notFound.jpg'));
    }
  });
 }

  render(){

    console.log(this.props);
    if(!this.props.status){
    
    return(
        <div className="wrapper ">
        
        <div className="main-panel" id="main-panel">
        <NavDash title="Appointments" />
         
          <div className="panel-header panel-header-sm">
          </div>

          <div className="content">

            <div className="row">
              <div className="col-md-12">
                <div className="card">
                <Tabs defaultActiveKey='pending' style={{padding:'5px'}}>
                  <Tab eventKey="pending" title="Pending" >
                  <div className="card-header">
                    <h4 className="card-title">Pending Appointments</h4>
                  </div>
                  <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-dark table-hover table-stripped text-center">
                        <thead className=" text-primary">
                          <th></th>
                          <th>
                            Id
                          </th>
                          <th>
                          Patient's Name
                          </th>
                          <th>
                           Age
                          </th>
                          <th>
                           Blood Group
                          </th>

                          <th>
                            Date
                          </th>
    
                          <th>
                            Time
                          </th>

                          <th>
                            Actions
                          </th>
                         
                        </thead>
                        <tbody>
    
                          {
                          this.props.appointments.filter((app)=>{
                            return (app.tags=="Pending");
                          }).sort((a,b)=>{
                            return new Date(a.apP_DATETIME).getTime() < new Date(b.apP_DATETIME)?1:-1;
                          }).map((appointment)=>{
                            return(
                              <tr >
                              <td>
                                
                                <Image  src={require("../../Patients/Admin/assets/img/"+appointment.picture)} thumbnail fluid style={{borderRadius:'50%',height:'70px',width:'70px'}}	 />
                              </td>
                              <td>
                               {appointment.id}
                              </td>
                              <td>
                              {appointment.name}
                            </td>
                            <td>
                              {appointment.age}
                            </td>
                            
                            <td>
                              <span className="badge badge-primary" style={{fontSize:'15px'}}>{appointment.blooD_GROUP}</span>
                            </td>
                            <td>
                            {onlyDate(appointment.apP_DATETIME)}
                            </td>
                            <td>
                            {onlyTime(appointment.apP_DATETIME)}
                            </td>
                            {
                             <td>
                              <Button variant="info" >Accept</Button>
                              &nbsp;&nbsp;
                              <Button variant="danger" >Decline</Button>
                              </td>
                            }

                            </tr>
    
                            )
                          })
                          }
                          
                         
                        </tbody>
                      </table>
                    </div>
                  </div>
                  </Tab>



                  <Tab eventKey="accepted" title="Accepted" >
                  <div className="card-header">
                    <h4 className="card-title">Accepted Appointments</h4>
                  </div>
                  <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-dark table-hover table-stripped text-center">
                        <thead className=" text-primary">
                        <th></th>
                          <th>
                            Id
                          </th>
                          <th>
                          Patient's Name
                          </th>
                          <th>
                           Age
                          </th>
                          <th>
                           Blood Group
                          </th>

                          <th>
                            Date
                          </th>
    
                          <th>
                            Time
                          </th>

                          <th>
                            Actions
                          </th>
                         
                        </thead>
                        <tbody>
    
                          {
                          this.props.appointments.filter((app)=>{
                            return (app.tags=="Accepted");
                          }).sort((a,b)=>{
                            return new Date(a.apP_DATETIME).getTime() < new Date(b.apP_DATETIME)?1:-1;
                          }).map((appointment)=>{
                            return(
                              <tr>
                               <td>
                                
                                <Image  src={require("../../Patients/Admin/assets/img/"+appointment.picture)} thumbnail fluid style={{borderRadius:'50%',height:'70px',width:'70px'}}	 />
                              </td>
                              <td>
                               {appointment.id}
                              </td>
                              <td>
                              Dr. {appointment.name}
                            </td>
                            <td>
                              {appointment.age}
                            </td>
                            <td>
                              {appointment.blooD_GROUP}
                            </td>
                            <td>
                            {onlyDate(appointment.apP_DATETIME)}
                            </td>
                            <td>
                            {onlyTime(appointment.apP_DATETIME)}
                            </td>
                            {
                              
                              <td>
                              <Button variant="dark" className="disabled">Make Prescription</Button></td>
                            }

                            </tr>
    
                            )
                          })
                          }
                          
                         
                        </tbody>
                      </table>
                    </div>
                  </div>
                  </Tab>

                  

                  <Tab eventKey="reject" title="Rejected" >
                  <div className="card-header">
                    <h4 className="card-title">Rejected Appointments</h4>
                  </div>
                  <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-dark table-hover table-stripped text-center">
                        <thead className=" text-primary">
                        <th></th>
                          <th>
                            Id
                          </th>
                          <th>
                          Patient's Name
                          </th>
                          <th>
                           Age
                          </th>
                          <th>
                           Blood Group
                          </th>

                          <th>
                            Date
                          </th>
    
                          <th>
                            Time
                          </th>

                          <th>
                            Actions
                          </th>
                         
                        </thead>
                        <tbody>
    
                          {
                          this.props.appointments.filter((app)=>{
                            return (app.tags=="Declined");
                          }).sort((a,b)=>{
                            return new Date(a.apP_DATETIME).getTime() < new Date(b.apP_DATETIME)?1:-1;
                          }).map((appointment)=>{
                            return(
                              <tr>
                               <td>
                                
                                <Image  src={require("../../Patients/Admin/assets/img/"+appointment.picture)} thumbnail fluid style={{borderRadius:'50%',height:'70px',width:'70px'}}	 />
                              </td>
                              <td>
                               {appointment.id}
                              </td>
                              <td>
                              Dr. {appointment.name}
                            </td>
                            <td>
                              {appointment.age}
                            </td>
                            <td>
                              {appointment.blooD_GROUP}
                            </td>
                            <td>
                            {onlyDate(appointment.apP_DATETIME)}
                            </td>
                            <td>
                            {onlyTime(appointment.apP_DATETIME)}
                            </td>
                            {
                              
                              <td>
                              <Button variant="dark" className="disabled">Make Prescription</Button></td>
                            }

                            </tr>
    
                            )
                          })
                          }
                          
                         
                        </tbody>
                      </table>
                    </div>
                  </div>
                  </Tab>

                  <Tab eventKey="complete" title="Completed" >
                  <div className="card-header">
                    <h4 className="card-title">Completed Appointments</h4>
                  </div>
                  <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-dark table-hover table-stripped text-center">
                        <thead className=" text-primary">
                        <th></th>
                          <th>
                            Id
                          </th>
                          <th>
                          Patient's Name
                          </th>
                          <th>
                           Age
                          </th>
                          <th>
                           Blood Group
                          </th>

                          <th>
                            Date
                          </th>
    
                          <th>
                            Time
                          </th>

                       
                         
                        </thead>
                        <tbody>
    
                          {
                          this.props.appointments.filter((app)=>{
                            return (app.tags=="Completed");
                          }).sort((a,b)=>{
                            return new Date(a.apP_DATETIME).getTime() < new Date(b.apP_DATETIME)?1:-1;
                          }).map((appointment)=>{
                            return(
                              <tr>
                               <td>
                                
                                <Image  src={require("../../Patients/Admin/assets/img/"+appointment.picture)} thumbnail fluid style={{borderRadius:'50%',height:'70px',width:'70px'}}	 />
                              </td>
                              <td>
                               {appointment.id}
                              </td>
                              <td>
                              {appointment.name}
                            </td>
                            <td>
                              {appointment.age}
                            </td>
                            <td>
                              <span className="badge badge-primary" style={{fontSize:'15px'}}>
                              {appointment.blooD_GROUP}</span>
                            </td>
                            <td>
                            {onlyDate(appointment.apP_DATETIME)}
                            </td>
                            <td>
                            {onlyTime(appointment.apP_DATETIME)}
                            </td>
                            

                            </tr>
    
                            )
                          })
                          }
                          
                         
                        </tbody>
                      </table>
                    </div>
                  </div>
                  </Tab>

                  


                </Tabs>
                 
                </div>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    )}
    
    return(<div className="wrapper ">
        
        
        <div className="main-panel" id="main-panel" style={{top:'50%',textAlign:'center',background:'none'}}>
        <Spinner variant="danger" animation="border"/>
          </div>
        
      </div>)


  }


}


const mapStateToProps=(state)=>{
  return {
    appointments:state.doctorsAppointments.data,
    status:state.doctorsAppointments.loading
  }
}



const mapDispatchToProps=(dispatch)=>{
 return dispatch(ListAppointments(JSON.parse(sessionStorage.getItem('doctor')).id));
  
}


const AppointmentsWithData=connect(mapStateToProps,mapDispatchToProps)(AppointmentsList);

export default AppointmentsWithData;