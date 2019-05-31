import React from 'react';
import '../loadingFiles';
import { Button } from 'react-bootstrap';
import {Line} from 'react-chartjs-2';
import NavDash from './NavDash';

function chartData() {
  return {
    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL','AUG','SEP','OCT','NOV',"DEC"],
    datasets: [
      {
        label:'Number Of Appointments',
        borderColor:'rgba(255,255,255,0.9)',
        backgroundColor:'rgba(255,255,255,0.4)',
        data: [65, 59, 80, 81, 56, 55, 40,70,349,23,52,45],
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




const DashBoard=()=>{
    
    return(
      
      <div className="wrapper ">
      
    <div className="main-panel" id="main-panel">
    
     <NavDash title="Dashboard" />
     
      <div className="panel-header panel-header-lg">
        
        <Line
  data={chartData()}
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

                  <h1>B+</h1>

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
                  <li className="list-group-item">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                
                  <br />
                  <strong>Dr. Aamir  &nbsp;   <span  style={{marginLeft:'220px'}} className="badge badge-danger">3.0</span>
                  </strong>
                  
                  </li>
                
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h5 className="card-category">All Persons List</h5>
                <h4 className="card-title">Current Week Appointments</h4>
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
                      <tr>
                        <td>
                          1
                        </td>
                        <td>
                          Dr. Aamir Liaqut
                        </td>
                        <td>
                          Pending
                        </td>
                        <td>
                         12/4/2019
                        </td>
                        <td>
                          4:33 PM
                        </td>
                        <td>
                          <Button variant="danger">Cancel</Button>
                        </td>
                      </tr>
                      
                     
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
};

export default DashBoard;