import React, { Component } from 'react';
import '../loadingFiles';


import Dashboard from './DashboardGraph';
import Appointment from './Appointment';
import Profile from './Profile';
import History from './History';
import VisitedDoctors from './VisitedDoctors';
import {BrowserRouter,Route,Switch,NavLink} from 'react-router-dom';
//Redux
//Redux
import {connect} from 'react-redux';
 
import loadAppointments from './redux/serviceLoder';

class Sidebar extends Component{

  constructor(props){
    super(props);
    console.log(props);
  }


  render(){
    
    return(
      <BrowserRouter basename="/patient/dashboard" >
      <div className="wrapper ">
         <div className="sidebar" data-color="black">
         
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
                 <NavLink to="/history" className="text-light" style={{textDecoration:'none'}}>
                 <p>Appointment History</p>
                 </NavLink>
                 
               </a>
             </li>
             <li>
               <a>
             
                 <i className="now-ui-icons education_atom"></i>
                 <NavLink to="/visiteddoctors" className="text-light" style={{textDecoration:'none'}}>
                   <p>Visited Doctors
                   </p>
                   </NavLink>
             
               </a>
             </li>
             <li>
               <a>
             
                 <i className="now-ui-icons education_atom"></i>
                 <NavLink to="/user" className="text-light" style={{textDecoration:'none'}}>
                   <p>User Profile
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
       <Route path="/history" component={History} />
       <Route  path="/visiteddoctors" component={VisitedDoctors} />
       <Route  path="/user" component={Profile} />
       </Switch>
       </div>
       </BrowserRouter>
    )
  }
}

//Handling State Data With Redux
const mapStateToProps=(state)=>{
  return {
    state:state.appointments.data,
    //status:state.loading
  }
}
const mapDispatchToProps=(dispatch)=>{
  return dispatch(loadAppointments(JSON.parse(sessionStorage.getItem('user')).id));
  
}


const DashWithData=connect(mapStateToProps,mapDispatchToProps)(Sidebar);




export default DashWithData;