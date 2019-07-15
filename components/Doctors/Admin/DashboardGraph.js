import React, { Component } from 'react';
import '../loadingFiles';
import {Spinner,Button } from 'react-bootstrap';
import {Line,Bar,Doughnut} from 'react-chartjs-2';
import NavDash from './NavDash';
import {dashboardFormatter,MonthFormatter,PieFormatter ,onlyTimeForTimings} from '../Utilities';
import {connect} from 'react-redux';
import {ListAppointments} from '../../Patients/Admin/redux/serviceLoder';


//Graph Options
function chartData(data=[0,0,230,34,5],data2=[0,0,130,23,5]) {
  
  return {
    
    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL','AUG','SEP','OCT','NOV',"DEC"],
    datasets: [
      {
        label:'Completed Appointments',
        borderColor:'rgba(255,255,255,0.9)',
        backgroundColor:'rgba(255,255,255,0.4)',
        data: data
      },
      {
        label:'Declined Appointments',
        borderColor:'rgba(255,49,46,0.9)',
        backgroundColor:'rgba(255,49,46,0.4)',
        data: data2,
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
  this.state={
    numberOfPatients:[],
    rating:[{rating:0}],
    visitedPatients:[],
    bestTimings:[],
    tags:[{rating:0,tag:'NOT RATED',className:'text-dark'},
    {rating:1,tag:'POOR',className:'danger'},
    {rating:2,tag:'AVERAGE',className:'warning'},
    {rating:3,tag:'NORMAL',className:'primary'},
    {rating:4,tag:'GOOD',className:'success'},
    {rating:5,tag:'GOOD',className:'success'}
  ],
  loading:true
  };

  



}




componentWillMount(){
  var user=JSON.parse(sessionStorage.getItem('doctor'));
  fetch("https://localhost:44379/api/Doctors/bestTimings/"+user.id)
  .then((res)=>res.json())
  .then((data0)=>{
    fetch("https://localhost:44379/api/Doctors/visitedPatients/"+user.id)
  .then((res)=>res.json())
  .then((data1)=>{
    fetch("https://localhost:44379/api/Doctors/avgRating/"+user.id)
  .then((res)=>res.json())
  .then((data2)=>{
    fetch("https://localhost:44379/api/Doctors/patientsVisited/"+user.id)
  .then((res)=>res.json())
  .then((data3)=>{
    this.setState((prevState)=>{

      return{
        bestTimings:prevState.patientsVisited=data0.length==0?[]:data0,
        visitedPatients:prevState.visitedPatients=data1.length==0?[]:data1,
        rating:prevState.rating=data2.length==0?prevState.rating:data2,
        numberOfPatients:prevState.numberOfPatients=data3.length==0?prevState.numberOfPatients:data3,
        loading:false
      }
      
    });
  });
    
  });
  

  

  

  
    
    
  });});


  

}




render(){
  

    if(!this.props.status){
      if(!this.state.loading){
    return(
      <div className="wrapper ">
    <div className="main-panel" id="main-panel">
    
     <NavDash title="Dashboard" />
     
      <div className="panel-header panel-header-lg">
  
      {/*  */}
        <Bar
  data={chartData(dashboardFormatter(this.props.data.filter((item)=>item.tags=="Completed")),
  dashboardFormatter(this.props.data.filter((item)=>item.tags=="Declined")))}
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
                <h4 className="card-title">24 Hours Performance</h4>

              </div>
              <div className="card-body">
              
              <Line
  data={{
    
        
    
          labels: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
          datasets: [
            {
              borderColor:'rgba(255,49,46,0.9)',
              backgroundColor:'rgba(255,49,46,0.4)',
              data: MonthFormatter(this.props.data)
            }
          ]
      }
    
    }
  width={100}
  height={180}
  options={ 

    {
      scales: {
          xAxes: [{
              gridLines: {
                  color: "rgba(0, 0, 0, 0)",
              },
              ticks: {
                beginAtZero:true,
                fontColor: 'black'
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
       
          display:false,
       
      },
      maintainAspectRatio: false
  }

  }
  redraw={true}
/>
                  
              </div>
              
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card card-chart">
              <div className="card-header">
                <h4 className="card-title text-center">Rated As</h4>
                
              </div>
              <div className="card-body">
                <h1 className={'display-1 text-center text-'+this.state.tags[parseInt(this.state.rating[0].rating)].className}>{
                   parseFloat(this.state.rating[0].rating).toFixed(1)
                }</h1>
                <h2 className="text-center" ><span className={"badge badge-"+this.state.tags[parseInt(this.state.rating[0].rating)].className}>
                {this.state.tags[parseInt(this.state.rating[0].rating)].tag}</span></h2>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="card card-chart">
              <div className="card-header">
                <h4 className="card-title">Satisfied Patients</h4>
                
              </div>
              <div className="card-body">
              
              <h1 className="display-1 text-center">{this.state.numberOfPatients[0].count}</h1>
                
              </div>
            </div>
          </div>
          
        </div>
        
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h5 className="card-category">Statstics</h5>
                <h4 className="card-title">Current Month Analysis</h4>
              </div>
              <div className="card-body">
               <div className="row">
                 <div className="col-lg-6">
                 <Doughnut
  data={{
    
        
    
          labels: ['Completed', 'Declined', 'Pending', 'Accepted'],
          datasets: [
            {
              backgroundColor: [
                '#36A2EB',
                '#f00',
                '#e6a014'
                ],
                hoverBackgroundColor: [
                '#36A2EB',
                '#f00',
                '#e6a014'
                ],
              data: PieFormatter(this.props.data)
            }
          ]
      }
    
    }
  width={200}
  height={280}
  options={ 

    {
      scales: {
          xAxes: [{
              display:false
          }],
          yAxes: [{
            display:false
          }]
      },
      
      legend:{
       
          display:true,
       
      },
      maintainAspectRatio: false
  }

  }
  redraw={true}
/>
                 </div>
                 <div className="col-lg-6">
                 <div className="col-lg-12">

                  <div className="card text-light bg-info">
                  <div className="card-header">
                   
                    <h4 className="card-title">Most Visited Patients</h4>
                
                  </div>

                    <div className="card-body">
                      <ol>
                     {this.state.visitedPatients.map((patient)=>{
                       return (<li>{patient.name}</li>)
                     })}</ol>
                    </div>

                  </div>

                 </div>

                 <div className="col-lg-12">

                  <div className="card text-light bg-danger">
                  <div className="card-header">
                  
                    <h4 className="card-title">Best Timings</h4>

                  </div>

                    <div className="card-body">
                    <ul>
                     {this.state.bestTimings.map((timing)=>{

                       return (<li>{onlyTimeForTimings('1970-01-01T'+timing.starT_TIME+'Z')} - {onlyTimeForTimings('1970-01-01T'+timing.enD_TIME+'Z')}</li>)
                     })}</ul>
                    </div>

                  </div>

                  </div>


                 </div>
                 </div>

                 
              </div>
              
            </div>
           
          </div>
        </div>
      </div>
      
    </div>
    );
    
  }} return(<div className="wrapper ">
    
    
    <div className="main-panel" id="main-panel" style={{top:'50%',textAlign:'center',background:'none'}}>
    <Spinner variant="danger" animation="border"/>
      </div>
    
  </div>)
  
}
 
}



const mapStateToProps=(state)=>{
   return {
     data:state.doctorsAppointments.data,
     status:state.doctorsAppointments.loading
   }
}



const mapDispatchToProps=(dispatch)=>{
  return{
   loadAppointments:dispatch(ListAppointments(JSON.parse(sessionStorage.getItem('doctor')).id))
  }
}

const DashWithData=connect(mapStateToProps,mapDispatchToProps)(DashBoard);

export default DashWithData;