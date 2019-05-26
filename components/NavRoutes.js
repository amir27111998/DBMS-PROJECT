import React from 'react';
import google from '../components/Google';
import User from '../components/User';
import notFound from '../components/notFound';
import {Nav,Navbar} from 'react-bootstrap'; 
import  {BrowserRouter,NavLink,Switch,Route}  from 'react-router-dom'

const Navigation=()=>{
    return(
        <header>
        
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <NavLink to="/" activeClassName="text-danger" exact={true}>User</NavLink>
        <NavLink to="/google" activeClassName="text-danger" >Google</NavLink>
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
        </header>
    )
};



const Router=()=>{
return(
    
    
    <BrowserRouter>
        <Navigation/>
        <Switch >
        <Route path="/" component={User} exact={true}  />
        <Route path="/google/:id?" component={google} />
        <Route component={notFound} />
        </Switch>
    </BrowserRouter>
    
)
};

export default Router;