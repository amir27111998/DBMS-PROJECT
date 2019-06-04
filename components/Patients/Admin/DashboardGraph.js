import React, { Component } from 'react';
import '../loadingFiles';
import {Spinner,Button } from 'react-bootstrap';
import {Line} from 'react-chartjs-2';
import NavDash from './NavDash';
import {dashboardFormatter, onlyDate,onlyTime} from '../Utilities';
import {connect} from 'react-redux';
import loadAppointments from './redux/serviceLoder';

//Graph Options
function chartData(data=[0,0,230,34,5]) {
  
  return {
    
    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL','AUG','SEP','OCT','NOV',"DEC"],
    datasets: [
      {
        label:'Number Of Appointments',
        borderColor:'rgba(255,255,255,0.9)',
        backgroundColor:'rgba(255,255,255,0.4)',
        data: data,
      }
    ]
  }};

  var options = {
    scales: {
        xAxes: [{
            gridLines: {
                color: "rgba(0, 0, 0, 0)",
            },
            ticks: {
              beginAtZero:true,
              fontColor: 'white'
          },
        }],
        yAxes: [{
            gridLines: {
              color: "rgba(255, 255, 255, 0.7)",
            },
            ticks: {
              beginAtZero:true,
              fontColor: 'white'
          },
        }]
    },
    legend:{
      labels: {
        fontColor: 'white',
        textAlign:'left'
       }
    },
    maintainAspectRatio: false
};

//Graph Optiions End

class DashBoard extends  Component{
  


constructor(props){
  super(props);
  this.props=props;
}


  render(){
    var user=JSON.parse(sessionStorage.getItem('user'));
    var pendingAppointments=(record)=>{
      return record.tag=="Pending";
    }

    if(!this.props.status){
    
    return(
      <div className="wrapper ">
      
    <div className="main-panel" id="main-panel">
    
     <NavDash title="Dashboard" />
     
      <div className="panel-header panel-header-lg">
  
  <Line
  data={chartData(dashboardFormatter(this.props.data))}
  width={100}
  height={180}
  options={ options}
/>

      </div>
      <div className="content">
        <div className="row">
          
          <div className="col-lg-6">
            <div className="card card-chart">
              <div className="card-header">
                <h4 className="card-title">Blood Group</h4>

              </div>
              <div className="card-body">

                  <h1>{user.blooD_GROUP}</h1>
                  
              </div>
              
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card card-chart">
              <div className="card-header">
                <h4 className="card-title">Previous Feedback And Ratings</h4>
                
              </div>
              <div className="card-body">
                <div className="list-group">
                <marquee direction="up" style={{height:"80px"}} >
                {this.props.feedbacks.map((feed)=>{

                  return(
                    <li className="list-group-item">
                  {feed.comment}
                
                  <br />
                  <strong>Dr. {feed.doctoR_NAME}  &nbsp;   <span  style={{marginLeft:'220px'}} className="badge badge-danger">{feed.rating}</span>
                  </strong>
                  
                  </li>
                  )

                    
          })
          }
                  </marquee>
                
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h5 className="card-category">All Persons List</h5>
                <h4 className="card-title">Current Month Appointments</h4>
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
                        Cancel
                      </th>

                    </thead>
                    <tbody>
                     {this.props.data.filter((record)=>{
                        return record.tag=="Pending";
                    }).map((record)=>{
                      return(<tr key={record.id}>
                        <td>
                         {record.id}
                        </td>
                        <td>
                          Dr. {record.doctoR_NAME}
                        </td>
                        <td>
                          {record.tag}
                        </td>
                        <td>
                        {onlyDate(record.apP_DATETIME)}
                        </td>
                        <td>
                        {onlyTime(record.apP_DATETIME)}
                        </td>
                        <td>
                          <Button variant="danger">Cancel</Button>
                        </td>
                      </tr>)
                    })} 
                      
                      
                     
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    );
    
  } return(<div className="wrapper ">
    
    
    <div className="main-panel" id="main-panel" style={{top:'50%',textAlign:'center',background:'none'}}>
    <Spinner variant="danger" animation="border"/>
      </div>
    
  </div>)
  
}
 
}



const mapStateToProps=(state)=>{
   return {
     data:state.appointments.data,
     status:state.appointments.loading,
     feedbacks:state.appointments.feedbacks
   }
}



const mapDispatchToProps=(dispatch)=>{
  return dispatch(loadAppointments(JSON.parse(sessionStorage.getItem('user')).id));
  
}

const DashWithData=connect(mapStateToProps,mapDispatchToProps)(DashBoard);

export default DashWithData;