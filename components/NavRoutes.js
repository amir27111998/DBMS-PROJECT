import React from 'react';
import LoginPatient from './Patients/LoginPatient';
import SignupPatient from './Patients/SignupPatient';
import notFound from '../components/notFound';
import  {BrowserRouter,NavLink,Switch,Route}  from 'react-router-dom';
import Admin from '../components/Patients/Admin/Admin';
import Home from '../components/Home';



const Router=()=>{
return(
    
    
    <BrowserRouter>

        <Switch >
        <Route path="/" component={Home} exact={true}  />
        <Route path="/signup/patient" component={SignupPatient}   />
        <Route path="/login/patient" component={LoginPatient} />
        <Route path="/patient/dashboard" component={Admin} />
        <Route component={notFound}/>
        </Switch>
    </BrowserRouter>
    
)
};

export default Router;