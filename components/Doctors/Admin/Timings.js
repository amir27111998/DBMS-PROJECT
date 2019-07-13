import React, { Component } from 'react';
import NavDash from './NavDash';
import '../loadingFiles';
import {connect} from 'react-redux';
import {doctorSchedule,addTime,deleteTime} from "../../Patients/Admin/redux/serviceLoder";
import {Spinner, Button,Modal,Alert} from 'react-bootstrap';
import {onlyTimeForTimings} from '../Utilities';


class Timings extends Component{

  constructor(props){
    super(props);
    this.props=props;
    this.state={
      openNewTiming:false,
      start:"",
      end:"",
      value:"",
      success:false,
      successMsg:""
    };
    this.openNewTiming=this.openNewTiming.bind(this);
    this.handleEnd=this.handleEnd.bind(this);
    this.handleStart=this.handleStart.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.handleDelete=this.handleDelete.bind(this);
  }

  openNewTiming(){
    this.setState({
      openNewTiming:true
    });
  }

  handleStart(e){
    this.setState({start:e.target.value})
  }

  handleEnd(e){
    this.setState({end:e.target.value});
   
  }

  handleSubmit(e){
    e.preventDefault();
    var user=JSON.parse(sessionStorage.getItem('doctor'));
    this.props.add(user,e,this.state.start,this.state.end,this.state.value);
    this.setState({success:true,successMsg:"Your schedule is added"});
    
  }


  handleChange(event) {
    this.setState({value: Array.from(event.target.selectedOptions, (item) => item.value)});
  }

  handleDelete(id,start,end){
    var bool=confirm("All appointments will be lost in this schedule");
    if(bool){
      this.props.delete(id,start,end);
    }
  }
  

  render(){
    if(this.props.status=="scheduleloaded"){
      
      return (
          <div className="wrapper ">
          <div className="main-panel" id="main-panel">
         
         <NavDash title="Manage Schedule" />
            <div className="panel-header panel-header-sm">
            </div>
            <div className="content">
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h5 className="title">Your Schedule</h5>
                      <p className="category">Timing's are locked if you have appointments in present or future.
                      </p>
                      <Button className="info" onClick={this.openNewTiming}>New timing</Button>
                    </div>
                    <div className="card-body all-icons">
                    
  
                    <Modal show={this.state.openNewTiming} onHide={()=>{this.setState({openNewTiming:false,success:false,successMsg:""})}}>
        <form onSubmit={this.handleSubmit} >
          <Modal.Header>
            

            <Modal.Title>Make New Schedule</Modal.Title>
            </Modal.Header>
          <Modal.Body>
          <Alert show={this.state.success} variant="info">
              <p>{this.state.successMsg}</p>
              
            </Alert>
          <div className="row">
            <div className="form-group col-md-6">
            <label>Start Time:</label>
            <input type="time"  onChange={this.handleStart} className="form-control" />
              </div>
              <div className="form-group col-md-6">
              <label>End Time:</label>
                <input type="time" onChange={this.handleEnd} className="form-control" />
              </div>
              </div>
            <div className="row">
             <div className="form-group col-md-12">
            <label>Address:</label>
                <input type="text" required name="address" className="form-control" />
               </div>
              </div>
            <div className="row">
             <div className="form-group col-md-12">
              <label>Amount:</label>
                <input required type="number" name="amount"  className="form-control" />
               </div>
              </div>
            
              <div className="row">
             <div className="form-group col-md-12">
              <label>Select Days:</label>
               <select multiple onChange={this.handleChange} className="form-control" name="days">
                  <option value="SUNDAY">SUNDAY</option>
                  <option value="SATURDAY">SATURDAY</option>
                  <option value="MONDAY">MONDAY</option>
                  <option value="TUESDAY">TUESDAY</option>
                  <option value="WEDNESDAY">WEDNESDAY</option>
                  <option value="THURSDAY">THURSDAY</option>
                  <option value="FRIDAY">FRIDAY</option>
               </select>
                </div>
              </div>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" variant="outline-success">Submit</Button>
            <Button variant="outline-danger" onClick={()=>{this.setState({openNewTiming:false,success:false,successMsg:""})}}>Cancel</Button>
          </Modal.Footer>
          </form>
        </Modal>
                        
                      
                   
                    <div className="table-responsive">
                    <form >
                        <table className="table">
                            <thead className=" text-primary">
                              <th>
                                Id
                              </th>
                              <th>
                              Timing's
                              </th>
                              <th>
                               Sitting Day's
                              </th>
                            
                             
                               <th>
                                Address
                              </th>
                               <th>
                                Amount
                              </th>
                              <th>
                                Actions
                              </th>
        
                            </thead>
                         
                            <tbody>
                          
                             {
                               
                               this.props.timings.sort((a,b)=>{
                               return a.amount<b.amount?1:-1;
                             }).map((timing)=>{
                               return(
    
                                  <tr key={timing.id}>
                                    <td>{timing.id}</td>
                                    <td>{onlyTimeForTimings('1970-01-01T'+timing.starT_TIME+'Z')} - {onlyTimeForTimings('1970-01-01T'+timing.enD_TIME+'Z')}</td>
                                    <td>{timing.days}</td>
                                    <td>{timing.address}</td>
                                    <td className="text-dark"><strong>{timing.amount}</strong></td>
                                    <td>
                                    
                                      <Button variant="danger" onClick={()=>{this.handleDelete(timing.id,timing.starT_TIME,timing.enD_TIME)}}  >Delete</Button>
                                       
                                      </td>
                                  </tr>
                                )
                             })
                             }
    
                             
                            </tbody>
                            
                          </table>
                          </form>
                        </div>
                         
                    </div>
                    
                  </div>
                </div>
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

};





const mapStateToProps=(state)=>{
    return{
      timings:state.doctorsAppointments.timings,
      appointments:state.doctorsAppointments.data,
      status:state.doctorsAppointments.loading
    }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    load:dispatch(doctorSchedule(JSON.parse(sessionStorage.getItem('doctor')).id)),
    add:(user,e,start,end,days)=>{
      return(dispatch(addTime(user,e,start,end,days)))
    },
    delete:(id,start,end)=>{
      return(dispatch(deleteTime(id,start,end)))
    }
  };
}

const TimingsWithData=connect(mapStateToProps,mapDispatchToProps)(Timings);

export default TimingsWithData;
