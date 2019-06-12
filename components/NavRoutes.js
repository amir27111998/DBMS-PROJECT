import React from 'react';
import LoginPatient from './Patients/LoginPatient';
import SignupPatient from './Patients/SignupPatient';
import notFound from '../components/notFound';
import  {BrowserRouter,Switch,Route}  from 'react-router-dom';
import Admin from '../components/Patients/Admin/Admin';
import Home from '../components/Home';
import ForgotPassword from './Patients/ForgotPassword';
import Store from './Patients/Admin/redux/store';
import {Provider} from 'react-redux';


const Router=(props)=>{
return(
    
    
    <BrowserRouter>

        <Switch >
        <Route path="/" component={Home} exact={true}  />
        
        
        

        {/* Connecting Redux with React  */}
        <Provider store={Store} >
        <Route path="/login/patient" component={LoginPatient} {...props} />
        <Route path="/signup/patient" component={SignupPatient} {...props}   />
        <Route path="/patient/resetpassword" component={ForgotPassword} {...props}   />
        <Route path="/patient/dashboard" component={Admin} {...props} />
        </Provider>
        <Route component={notFound}/>
        </Switch>
    </BrowserRouter>
    
)
};

export default Router;