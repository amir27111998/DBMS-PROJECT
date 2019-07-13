import React, { Component } from 'react';
import '../loadingFiles';
import NavDash from './NavDash';
import {connect} from 'react-redux';
import {Spinner, Button, ListGroup} from 'react-bootstrap';
import {ReadFeedBack} from '../../Patients/Admin/redux/serviceLoder';







class Feedbacks extends Component{
  constructor(props){
    super(props);
    this.props=props;
  } 

  


  render(){

    console.log(this.props);
    if(!this.props.status){
      
    return(
        <div className="wrapper ">
        
        <div className="main-panel" id="main-panel">
        <NavDash title="Comments" />
          <div className="panel-header panel-header-sm">
          </div>
          <div className="content">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Feedbacks From Patients</h4>
                  </div>
                  <div className="card-body" style={{height:'600px'}}>
                    <ListGroup>
                      {
                        this.props.feedbacks.map((feed)=>{

                            return(
                            <ListGroup.Item>
                              <div className="row">
                              <div className="col-lg-2">
                              <h5>{feed.appointmenT_ID}</h5>
                              </div>
                              
                              <div className="col-lg-8">
                              <p style={{fontSize:'18px'}}>{feed.comments}</p>
                              </div>
                              
                              <div className="col-lg-2">
                              <p style={{fontSize:'25px'}}><span className="badge badge-danger">{feed.rating}</span></p>
                              </div>
                              </div>
                              <div className="row">
                              <div className="col-lg-12">
                              <h6>{feed.name}</h6>
                              </div>
                              </div>
                            </ListGroup.Item>
                            )
                        })
                      }
                    </ListGroup>
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
    feedbacks:state.doctorsAppointments.feedbacks,
    status:state.doctorsAppointments.loading
  }
}



const mapDispatchToProps=(dispatch)=>{
 return dispatch(ReadFeedBack(JSON.parse(sessionStorage.getItem('doctor')).id));
  
}


const FeedbacksWithData=connect(mapStateToProps,mapDispatchToProps)(Feedbacks);

export default FeedbacksWithData;