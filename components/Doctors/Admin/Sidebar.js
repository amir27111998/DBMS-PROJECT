import React, { Component } from 'react';
import '../loadingFiles';

import Dashboard from './DashboardGraph';
import Appointment from './Appointments_List';
import Profile from './Profile';
import Feedbacks from './Feedbacks';
import DoctorTimings from './DoctorTiming';
import Timings from './Timings';
import {BrowserRouter,Route,Switch,NavLink} from 'react-router-dom';


//Redux
//Redux
import {connect} from 'react-redux';
 
import {ListAppointments} from '../../Patients/Admin/redux/serviceLoder';

class Sidebar extends Component{

  constructor(props){
    super(props);
  }

  



  render(){
    return(
      
      <BrowserRouter basename="/doctor/dashboard" >
      <div className="wrapper ">
      
         <div className="sidebar" data-color="orange">
         
         <div className="logo">
         <NavLink to="/" className="simple-text logo-normal">
             Dashboard
           </NavLink>
         </div>
         <div className="sidebar-wrapper" id="sidebar-wrapper">
           <ul className="nav">
           <li className="active ">
             <a>
             <NavLink to="/" className="text-dark" style={{textDecoration:'none'}}>
               <i className="now-ui-icons design_app"></i>
               <p>Dashboard</p>
             </NavLink>
             </a>
           </li>
             <li>
               <a>
             
                 <i className="now-ui-icons education_atom"></i>
                 <NavLink to="/appointment" className="text-light" style={{textDecoration:'none'}}>
                   <p>Appointment
                   </p>
                   </NavLink>
             
               </a>
             </li>
             <li>
               <a>
                 <i className="now-ui-icons location_map-big"></i>
                 <NavLink to="/replies" className="text-light" style={{textDecoration:'none'}}>
                 <p>Patient Replies</p>
                </NavLink>
                 
               </a>
             </li>
             <li>
               <a>
             
                 <i className="now-ui-icons education_atom"></i>
                 <NavLink to="/manage_timings" className="text-light" style={{textDecoration:'none'}}>
                   <p>Manage Schedule
                   </p>
                   </NavLink>
             
               </a>
             </li>
             <li>
               <a>
             
                 <i className="now-ui-icons education_atom"></i>
                 <NavLink to="/user" className="text-light" style={{textDecoration:'none'}}>
                   <p>Your Profile
                   </p>
                   </NavLink>
             
               </a>
             </li>
             
           
 
           </ul>
         </div>
       </div>
 
       
       <Switch >
      
       <Route path="/"   component={Dashboard}  exact={true}/>
       <Route path="/appointment" component={Appointment} />
       <Route path="/replies" component={Feedbacks} />
       <Route  path="/manage_timings" component={Timings} />
       <Route  path="/user" component={Profile} />
       <Route  path="/timings/:id" component={DoctorTimings} />
       </Switch>
      
       </div>
       </BrowserRouter>
    )
  }
}

// //Handling State Data With Redux
const mapStateToProps=(state)=>{
  return {
    state:state.doctorsAppointments.data,
    status:state.doctorsAppointments.loading
  }
}
const mapDispatchToProps=(dispatch)=>{
  return dispatch(ListAppointments(JSON.parse(sessionStorage.getItem('doctor')).id));
  
}


const DashWithData=connect(mapStateToProps,mapDispatchToProps)(Sidebar);




export default DashWithData;