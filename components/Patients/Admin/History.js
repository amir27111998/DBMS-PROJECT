import React, { Component } from 'react';
import '../loadingFiles';
import NavDash from './NavDash';
import {connect} from 'react-redux';
import {Spinner, Button} from 'react-bootstrap';
import {onlyDate,onlyTime} from '../Utilities'
import {loadAppointments} from './redux/serviceLoder';


class History extends Component{
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
      var doc = new jsPDF('p', 'mm', [500,500]); //210mm wide and 297mm high
            
      doc.addImage(data[0], 'PNG', 10, 10);
      doc.save('prescription.pdf');
    }
    else{
      window.open(require('./assets/img/notFound.jpg'));
    }
  });
 }

  render(){


    if(!this.props.status){
      
    return(
        <div className="wrapper ">
        
        <div className="main-panel" id="main-panel">
        <NavDash title="History" />
          <div className="panel-header panel-header-sm">
          </div>
          <div className="content">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">History Table</h4>
                  </div>
                  <div className="card-body">
                  <div className="table-responsive">
                    <table className="table">
                        <thead className=" text-primary">
                          <th>
                            Id
                          </th>
                          <th>
                          Doctor's Name
                          </th>
                          <th>
                            Status
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
                            return (app.tag!="Pending" && app.tag!="Accepted");
                          }).sort((a,b)=>{
                            return new Date(a.apP_DATETIME).getTime() < new Date(b.apP_DATETIME)?1:-1;
                          }).map((appointment)=>{
                            return(
                              <tr>
                              <td>
                               {appointment.id}
                              </td>
                              <td>
                              Dr. {appointment.doctoR_NAME}
                            </td>
                            <td>
                              {appointment.tag}
                            </td>
                            <td>
                            {onlyDate(appointment.apP_DATETIME)}
                            </td>
                            <td>
                            {onlyTime(appointment.apP_DATETIME)}
                            </td>
                            {
                              appointment.tag=="Completed"?
                              <td>
                             <Button variant="dark" onClick={()=>{this.prescription(appointment.id)}}>View Prescription</Button>
                             &nbsp;&nbsp;
                              <Button variant="primary" onClick={()=>{this.feedback(appointment.id)}}>Give Feedback</Button></td>:
                              <td>
                              <Button variant="dark" className="disabled">View Prescription</Button>
                              &nbsp;&nbsp;
                               <Button variant="primary" className="disabled">Give Feedback</Button></td>
                            }

                            </tr>
    
                            )
                          })
                          }
                          
                         
                        </tbody>
                      </table>
                    </div>
                  </div>
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
    appointments:state.appointments.data,
    status:state.appointments.loading
  }
}



const mapDispatchToProps=(dispatch)=>{
 return dispatch(loadAppointments(JSON.parse(sessionStorage.getItem('user')).id));
  
}


const HistoryWithData=connect(mapStateToProps,mapDispatchToProps)(History);

export default HistoryWithData;