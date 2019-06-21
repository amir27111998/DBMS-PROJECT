import React, { Component } from 'react';
import '../loadingFiles';
import {Spinner,Button } from 'react-bootstrap';
import {Line} from 'react-chartjs-2';
import NavDash from './NavDash';
import {dashboardFormatter, onlyDate,onlyTime} from '../Utilities';
import {connect} from 'react-redux';
import {loadAppointments,updateAppointment} from './redux/serviceLoder';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';

//Graph Options
function chartData(data=[0,0,230,34,5]) {
  
  return {
    
    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL','AUG','SEP','OCT','NOV',"DEC"],
    datasets: [
      {
        label:'Total Appointments',
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
  this.CancelAppointment=this.CancelAppointment.bind(this);
  this.printSlip=this.printSlip.bind(this);
}

CancelAppointment(id){
  this.props.updateApp(id);
}


printSlip(id,doctor,date,time){
var content = '<div class="card card-body">'+
'<div style="padding:10px;background-color:#000;font-family: Arial, Helvetica, sans-serif;">'+
      '<p>++++++++++++++++++++++++++++++++++++++</P>'+
      '<h2>Doctors Appointment System</h2>'+
      '<p>++++++++++++++++++++++++++++++++++++++</P>'+
      '<h4>Apppointment Id: '+id+'</h4>'+
      '<h4>Doctor Name: <strong>'+doctor+'</strong></h4>'+
      '<h4>Date: <strong>'+date+'</strong></h4>'+
      '<h4>Time: <strong>'+time+'</strong></h4>'+
'</div></div>';
var mywindow = window.open('', 'Print', 'height=600,width=800');

mywindow.document.write('<html><head><title>Print</title>');
mywindow.document.write('</head><body >');
mywindow.document.write(content);
mywindow.document.write('</body></html>');

mywindow.document.close();
mywindow.focus()
mywindow.print();
mywindow.close();
return true;
}


render(){
    var user=JSON.parse(sessionStorage.getItem('doctor'));

    if(!this.props.status){
    console.log(this.props.data);
    
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
  redraw={true}
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
                        Actions
                      </th>

                    </thead>
                    <tbody>
                     {this.props.data.filter((record)=>{
                       var AppMonth=new Date(record.apP_DATETIME);
                        return (record.tag=="Pending" || record.tag=="Accepted")&&AppMonth.getMonth()==new Date().getMonth();
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
                          {
                            record.tag=="Accepted"?<Button variant="info" onClick={()=>{this.printSlip(record.id,record.doctoR_NAME,onlyDate(record.apP_DATETIME),onlyTime(record.apP_DATETIME))}} >Print Slip</Button> :""
                          }
                          &nbsp;
                          <Button variant="danger" onClick={()=>{this.CancelAppointment(record.id)}}>Cancel</Button>
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
  return{
   loadAppointments:dispatch(loadAppointments(JSON.parse(sessionStorage.getItem('doctor')).id)),
   updateApp:(id)=>{
     return dispatch(updateAppointment(id))
   }
  }
}

const DashWithData=connect(mapStateToProps,mapDispatchToProps)(DashBoard);

export default DashWithData;