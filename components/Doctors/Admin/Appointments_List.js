import React, { Component } from 'react';
import '../loadingFiles';
import NavDash from './NavDash';
import {connect} from 'react-redux';
import {Spinner, Button,Tabs, Tab,Image, Alert,Modal} from 'react-bootstrap';
import {onlyDate,onlyTime} from '../Utilities'
import {ListAppointments,UpdateApp} from '../../Patients/Admin/redux/serviceLoder';
import { hidden } from 'ansi-colors';


class AppointmentsList extends Component{
  constructor(props){
    super(props);
    this.props=props;
    this.state={
      openNewTiming:false,
      data:{},
      medicineList:[
      ],
      name:"",
      note:"",
      success:false,
      successMsg:""
    };
    this.handleAddMedicine=this.handleAddMedicine.bind(this);
    this.handlePrescription=this.handlePrescription.bind(this);
  } 


  handleAddMedicine(e){
    e.preventDefault();
    var name=this.state.name;
    var note=this.state.note;
    if(name.trim()!="" || note.trim()!=""){
    this.setState((prevState)=>{
      prevState.medicineList.push({
        name:name,
        note:note
      });
      return{
        medicineList:prevState.medicineList
      }
    })}
    else{
      alert("Please Enter Medicine");
    }
  }


  handlePrescription(e){
      e.preventDefault();
      var id=this.state.data.id;

      const template=document.getElementById("template");
      html2canvas(template, {
        onrendered: function(canvas) {

            var imgData = canvas.toDataURL('image/png');
           var formData=new FormData();
            formData.append('data',imgData+'|'+id);
            

            fetch("https://localhost:44379/api/Doctors/CreatePDF",{
              method:'POST',
              body:formData
            })
            .then(res=>res.json())
            .then((data)=>{
              
           
                  
            });

          
          }
    });
    this.props.reload();
    this.setState({success:true,successMsg:"Prescription Created, Click Cancel"});

  }
  


  render(){

    
    if(!this.props.status){
    
    return(
     
        <div className="wrapper ">
         {/* Appointment Prescription */}
           <div id="template" className="hidePrescription" >
          
  <h2><strong>Doctor Appointment System</strong></h2>
  <div className="row">
    <div className="col-lg-12  m-1">
        <label><strong>Appointment ID: </strong>{this.state.data.id}</label>
      </div>
      <div className="col-lg-12 m-1">
        <label><strong>Age: </strong>{this.state.data.age}</label>
      </div>
      <div className="col-lg-12 m-1">
        <label><strong>Blood Group: </strong>{this.state.data.blooD_GROUP}</label>
      </div>
      <div className="col-lg-12 m-1">
        <label><strong>Medicines: </strong>{
          this.state.medicineList.map((map)=><li className="p-1">{map.name}</li>)}
          </label>
      </div>
      <div className="col-lg-12 m-1">
        <label><strong>Instructions: </strong>{
          this.state.medicineList.map((map)=><li className="p-1">{map.note}</li>)}
          </label>
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <div className="col-lg-6  m-1 text-md-right text-lg-right" >
        <label><strong>Doctor Name: </strong>{
          JSON.parse(sessionStorage.getItem('doctor')).name}
          </label>
      </div>
  </div>
      </div>
      {/* End */}
      
        <div className="main-panel" id="main-panel">
        <NavDash title="Appointments" />
         
          <div className="panel-header panel-header-sm">
          </div>

          <div className="content">

            <div className="row">
              <div className="col-md-12">
                <div className="card">
                
                <Modal show={this.state.openNewTiming} onHide={()=>{this.setState({openNewTiming:false,medicineList:[],success:false,successMsg:""})}}>
        <form onSubmit={this.handlePrescription} >
          <Modal.Header>
         

            <Modal.Title>Make Prescription</Modal.Title>
            </Modal.Header>
          <Modal.Body>
          
          <div className="row">
          <div className="col-lg-12">
          <Alert variant="info" show={this.state.success}>
                  {this.state.successMsg}
                </Alert>
                </div>
            <div className="form-group col-md-6">
            <label>Patients Name:</label>
            <input type="text" name="name" value={this.state.data.name} className="form-control" />
              </div>
              <div className="form-group col-md-3">
              <label>Age:</label>
                <input type="text" name="age" value={this.state.data.age} className="form-control" />
              </div>
            
              <div className="form-group col-md-3">
              <label>Blood Group:</label>
                <input type="text" name="blood" value={this.state.data.blooD_GROUP} className="form-control" />
              </div>

              </div>

            <div className="row">

             <div className="form-group col-md-12">
            <label><strong>Add Medicine:</strong></label>
           
            <div className="row">
            
            <div className="form-group col-md-5">
            <label>Medicine Name:</label>
                <input type="text" value={this.state.name} onChange={(e)=>{
                    this.setState({name:e.target.value});
                }} name="medicine" className="form-control" required />
            </div>
            <div className="form-group col-md-7">
            <label>Guide:</label>
                <textarea rows={5} 
                value={this.state.note} onChange={(e)=>{
                  this.setState({note:e.target.value});
              }}  className="form-control" required ></textarea>
            </div>
            
            </div>
            <Button onClick={this.handleAddMedicine} variant="warning" className="text-dark" >ADD</Button>
            
                </div>
                <table className="table table-hover table-bordered table-stripped text-center">
                        <thead className=" text-dark">
                        
                          <th>
                            Name
                          </th>
                          <th>
                          Note
                          </th>
                          
                         
                        </thead>
                        <tbody>

                         {this.state.medicineList.map((med)=>{
                           return(
                            <tr >
                             
                            <td>
                              {med.name}
                            </td>
                            
                            <td>
                              {med.note}
                            </td>
                            </tr>
                           )
                         })}
                              
                            </tbody></table>
              </div>
          </Modal.Body>
          <Modal.Footer>
          {this.state.success?
          <Button type="submit" disabled  variant="info">Complete Appointment</Button>:
          <Button type="submit"   variant="info">Complete Appointment</Button>  
        }
            <Button variant="danger" onClick={()=>{
              this.props.reload();
              this.setState({openNewTiming:false,success:false,successMsg:"",name:"",note:"",medicineList:[]})}}>Cancel</Button>
          </Modal.Footer>
          </form>
        </Modal>


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

                              <Button variant="info" onClick={
                                ()=>{
                                  this.props.update(appointment.id,5);


                                  Email.send({
                                    Host : "smtp.elasticemail.com",
                                    Username : "alisyedaamir123@hotmail.com",
                                    Password : "38cd683b-dcbc-41d6-95c8-6dba1540fc0b",
                                    To : appointment.email,
                                    From : "alisyedaamir123@hotmail.com",
                                    Subject : "Your Appointment Is Accepted",
                                    Body : "<h1>Appointment Accepted</h1>"+
                                           "<p class='text-danger'>Your appointment for this date : <strong>"+onlyDate(appointment.apP_DATETIME)+"</strong></p>"
                                          +"<p>Time : "+onlyTime(appointment.apP_DATETIME)+"</p>"
                                }).then((daa)=>{
                                });


                                  this.props.reload();
                                }
                              } >Accept</Button>


                              &nbsp;&nbsp;
                              <Button variant="danger" onClick={
                                ()=>{
                                  this.props.update(appointment.id,2);

                                  Email.send({
                                    Host : "smtp.elasticemail.com",
                                    Username : "alisyedaamir123@hotmail.com",
                                    Password : "38cd683b-dcbc-41d6-95c8-6dba1540fc0b",
                                    To : appointment.email,
                                    From : "alisyedaamir123@hotmail.com",
                                    Subject : "Your Appointment Is Declined",
                                    Body : "<h1>Appointment Declined</h1>"+
                                           "<p class='text-danger'>Your appointment for this date : <strong>"+onlyDate(appointment.apP_DATETIME)+"</strong></p>"
                                          +"<p>Time : "+onlyTime(appointment.apP_DATETIME)+"</p>"
                                }).then((daa)=>{
                                });

                                  this.props.reload();
                                }
                              } >Decline</Button>
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
                               {appointment.name}
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
                              <Button variant="outline-warning"
                              onClick={()=>{
                                this.setState({openNewTiming:true,
                                  data:{id:appointment.id,name:appointment.name,age:appointment.age,
                                  blooD_GROUP:appointment.blooD_GROUP,email:appointment.email,time:onlyTime(appointment.apP_DATETIME),
                                date:onlyDate(appointment.apP_DATETIME)}});
                              }} >Make Prescription</Button>
                              &nbsp;&nbsp;
                              <Button variant="outline-success"
                              onClick={()=>{
                                this.props.update(appointment.id,3);
                                this.props.reload();
                              }}>Complete</Button>
                              
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
                              {appointment.name}
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
 return {
   load:dispatch(ListAppointments(JSON.parse(sessionStorage.getItem('doctor')).id)),
   reload:()=>{
    return (dispatch(ListAppointments(JSON.parse(sessionStorage.getItem('doctor')).id)));  
   },
   
   update:(id,statusID)=>{
      return (dispatch(UpdateApp(id,statusID)))
   }
 }
  
}


const AppointmentsWithData=connect(mapStateToProps,mapDispatchToProps)(AppointmentsList);

export default AppointmentsWithData;