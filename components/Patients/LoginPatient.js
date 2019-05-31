import React from 'react';
import {Alert,Col,Card, Container, Button} from 'react-bootstrap';
import  {Link}  from 'react-router-dom';
import '../../src/styles/app.scss';

const LoginPatient=(props)=>{


    return(
        
    <Container > 
  
    <Col lg={{span:6,offset:3}} md={{span:8,offset:2}} sm={12} >
    <Card>
        <Card.Header className="bg-dark">
            <Card.Title className="text-center text-light login-heading"><strong>Login</strong></Card.Title>
        </Card.Header>
        <Card.Body>
           
            <form>
                <div className="form-group" style={{margin: '38px 40px 15px 40px'}}>
                    <input type="text" className="form-control" style={{borderRadius: "100px",padding:'20px'}} placeholder="Enter a username" />
                </div>
                <div className="form-group" style={{margin: '18px 40px 15px 40px'}}>
                    <input type="password" className="form-control" style={{borderRadius: "100px",padding:'20px'}} placeholder="Enter a username" />
                </div>
               
                <div className="form-group" style={{margin: '18px 89px 15px 89px'}}>
                    <p className="text-right">
                        <Link className="text-dark" to="">Forgot Password</Link>
                    </p>
                </div>
                
                <div className="form-group" style={{margin: '18px 89px 15px 89px'}}>
                    <Button variant="dark" className="form-control" style={{borderRadius: "100px",height:'45px'}}>Sign In</Button>
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
    

    </Container>
    )
    };

export default LoginPatient;