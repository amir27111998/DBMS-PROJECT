import React, { Component } from 'react';
import '../loadingFiles';
import NavDash from './NavDash';
import {connect} from 'react-redux';
import {Spinner,Button} from 'react-bootstrap';
import {onlyDate,onlyTime} from '../Utilities'



class History extends Component{
  constructor(props){
    super(props);
    this.props=props;
    this.state={
      appointments:[]
    };

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
    
                        </thead>
                        <tbody>
    
                          {
                          this.props.appointments.filter((app)=>{
                            return app.tag!="Pending";
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
  return{
    appointments:state.appointments.data,
    status:state.appointments.loading
  }
};

const HistoryWithData=connect(mapStateToProps)(History);

export default HistoryWithData;