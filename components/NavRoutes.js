import React from 'react';
import LoginPatient from './Patients/LoginPatient';
import SignupPatient from './Patients/SignupPatient';
import notFound from '../components/notFound';
import  {BrowserRouter,Switch,Route}  from 'react-router-dom';
import Admin from '../components/Patients/Admin/Admin';
import DoctorsAdmin from '../components/Doctors/Admin/Admin';
import Home from '../components/Home';
import ForgotPassword from './Patients/ForgotPassword';
//Doctor's Component
import LoginDoctor from './Doctors/LoginDoctor';
import Store from './Patients/Admin/redux/store';
import {Provider} from 'react-redux';


const Router=(props)=>{
return(
    
    
    <BrowserRouter >
 <Provider store={Store} >
        <Switch >
       
        {/* Connecting Redux with React  */}
       
        <Route path="/" component={Home} exact={true}  />
        <Route path="/login/patient"  component={LoginPatient} {...props}  />
        <Route path="/signup/patient" component={SignupPatient} {...props}   />
        <Route path="/patient/resetpassword" component={ForgotPassword} {...props}   />
        <Route path="/patient/dashboard" component={Admin} {...props} />
        <Route path="/login/doctor" component={LoginDoctor}  />
        <Route path="/doctor/dashboard" component={DoctorsAdmin} {...props} />
        <Route component={notFound}/>
        </Switch>
        </Provider>
    </BrowserRouter>
    
)
};

export default Router;