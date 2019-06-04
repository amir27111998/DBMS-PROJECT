import React, { Component } from 'react';
import {Alert,Col,Card, Container, Button} from 'react-bootstrap';
import  {Link,Redirect}  from 'react-router-dom';
import '../../src/styles/app.scss';

import {Provider,connect} from 'react-redux';
import Store from './Admin/redux/serviceLoder';
//import patientStore from '../../../store/patientStore';
import loadAppointments from './Admin/redux/serviceLoder';

class LoginPatient extends Component{

    constructor(props){
        super(props);
        this.props=props;
        this.state={
            error:false,
            errMsg:''
        };
        this.signIn=this.signIn.bind(this);
    }


 signIn(e){
        e.preventDefault()
        var email=e.target.elements.email.value;
        var password=e.target.elements.password.value;
        if (email=="" || password==""){
            this.setState((prevState)=>{
                return{
                    error:true,
                    errMsg:'Both fields are required'
                }
            });
        }
        else{
            this.setState((prevState)=>{
                return{
                    error:false,
                    errMsg:''
                }
            });
            //Service calls for server
            var formData=new FormData();
            var data=[email,password];
            formData.append('data',data);
            fetch("https://localhost:44379/api/Patients/Login",{
                method:'POST',
                body:formData
            }).then(response=>response.json())
            .then((data)=>{
                if(data.id){
                    sessionStorage.setItem("user",JSON.stringify(data));  
                    sessionStorage.setItem("isPatient",true);
                    this.props.loadAppointments(data.id);
                    if(!this.props.state){
                    this.props.history.push('/patient/dashboard');
                    }
                }
                else{
                    this.setState((prevState)=>{
                        return{
                            error:true,
                            errMsg:'Username or password is incorrect'
                        }
                    });
            }

       
        })
            
        
    }};



    render(){
         if(sessionStorage.getItem("isPatient")){
             alert(sessionStorage.getItem("isPatient"))
           return  <Redirect to="/patient/dashboard/user" />
         }

     return(   
    <Container > 
  
    <Col lg={{span:6,offset:3}} md={{span:8,offset:2}} sm={12} >
    <Card>
        <Card.Header className="bg-dark">
            <Card.Title className="text-center text-light login-heading"><strong>Login</strong></Card.Title>
        </Card.Header>
        <Card.Body>
            <Alert variant="danger" show={this.state.error} >
        <Alert.Heading>Error!</Alert.Heading>
        {this.state.errMsg}
            </Alert>
            <form onSubmit={this.signIn}>
               
                <div className="form-group" style={{margin: '38px 40px 15px 40px'}}>
                    <input type="text" name="email" className="form-control" style={{borderRadius: "100px",padding:'20px'}} placeholder="Enter a email" />
                </div>
                <div className="form-group" style={{margin: '18px 40px 15px 40px'}}>
                    <input type="password" name="password" className="form-control" style={{borderRadius: "100px",padding:'20px'}} placeholder="Enter a password" />
                </div>
               
                <div className="form-group" style={{margin: '18px 89px 15px 89px'}}>
                    <p className="text-right">
                        <Link className="text-dark" to="">Forgot Password</Link>
                    </p>
                </div>
                
                <div className="form-group" style={{margin: '18px 89px 15px 89px'}}>
                    <Button variant="dark" type="submit" className="form-control" style={{borderRadius: "100px",height:'45px'}}>Sign In</Button>
                </div>

            </form>

            <div style={{backgroundColor:'#fff',paddingTop:"190px"}}>
            <p className="text-center text-secondary">Dont have an account?</p>
            <div className="text-center">
            <Link className="text-dark" to="/signup/patient">SIGN UP NOW</Link>
            </div>
            </div>
            
        </Card.Body>

    </Card>
    <div className="text-center">
        <Link to="/" className="text-dark" >  Back To Home</Link>
        </div>
    </Col>
    

    </Container>)
    }
}




  const mapDispatchToProps=(dispatch)=>{
        return{
            loadAppointments:(id)=>
            {
                return dispatch(loadAppointments(id));
            }

        }
  }
  
const LoginWithData=connect((state)=>{
    return {
        state:state.appointments.loading
    }
},mapDispatchToProps)(LoginPatient);




export default LoginWithData;