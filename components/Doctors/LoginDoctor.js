import React, { Component } from 'react';
import {Alert,Col,Card, Container, Button} from 'react-bootstrap';
import  {Link,Redirect}  from 'react-router-dom';
import '../../src/styles/app.scss';



class LoginDoctor extends Component{

    constructor(props){
        super(props);
        this.props=props;
        this.state={
            error:false,
            errMsg:'',
            loading:false
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
                    errMsg:'',
                    loading:true
                }
            });
            //Service calls for server
            var formData=new FormData();
            var data=[email,password];
            formData.append('data',data);
            fetch("https://localhost:44379/api/Doctors/Login",{
                method:'POST',
                body:formData
            }).then(response=>response.json())
            .then((data)=>{
            
                if(data.id){
                    this.setState((prevState)=>{
                        return{
                            loading:false
                        }
                    });
                    sessionStorage.setItem("doctor",JSON.stringify(data));  
                    sessionStorage.setItem("isDoctor",true);
                    this.props.history.push("/doctor/dashboard/user");
                }
                else{
                    this.setState((prevState)=>{
                        return{
                            error:true,
                            errMsg:'Username or password is incorrect',
                            loading:false
                        }
                    });
            }

       
        })
            
        
    }};



    render(){
         if(sessionStorage.getItem("isDoctor")){
            
           return  <Redirect to="/doctor/dashboard" />
         }

         setTimeout(() => {
            localStorage.setItem('msg',"");
        }, 3000);

     return( 
           
    <Container > 
  
    <Col lg={{span:6,offset:3}} md={{span:8,offset:2}} sm={12} >
    <Card>
        <Card.Header className="bg-info">
            <Card.Title className="text-center text-light login-heading"><strong>Doctor's Login</strong></Card.Title>
        </Card.Header>
        <Card.Body >
            <Alert variant="danger" show={this.state.error} >
        <Alert.Heading>Error!</Alert.Heading>
        {this.state.errMsg}
            </Alert>
        
            <Alert variant="info" show={localStorage.getItem('msg')!="" || localStorage.getItem('msg')} >
        {localStorage.getItem("msg")}
            </Alert>
           
           
            <Alert className="text-center" variant="light" show={this.state.loading} >
                <label className="text-info text-center">
                    <span className="text-center spinner-border"></span>
                </label>
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
                        <Link className="text-dark" to="/doctor/resetpassword">Forgot Password</Link>
                    </p>
                </div>
                
                <div className="form-group" style={{margin: '18px 89px 15px 89px'}}>
                    <Button variant="info" type="submit" className="form-control" style={{borderRadius: "100px",height:'45px'}}>Sign In</Button>
                </div>

            </form>

            <div style={{backgroundColor:'#fff',paddingTop:"190px"}}>
            <p className="text-center text-secondary">Dont have an account?</p>
            <div className="text-center">
            <Link className="text-dark" to="/signup/doctor">SIGN UP NOW</Link>
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








export default LoginDoctor;