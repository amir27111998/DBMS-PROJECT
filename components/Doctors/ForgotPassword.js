import React,{Component} from 'react';
import {Container, Row, Col, Button,Card, Alert} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';

class ForgotPassword extends Component{

    constructor(props){
        super(props);
        this.UpdatePassword=this.UpdatePassword.bind(this);
        this.state={
            error:false,
            errorMsg:""
        };
    }

    UpdatePassword(e){
        e.preventDefault();
        var email=e.target.elements.email.value;
        var newPass=e.target.elements.newPass.value;
        if(email==""||newPass==""){
            this.setState({error:true,errorMsg:"Both fields must be filled"});
        }
        else if(newPass.length<8){
            this.setState({error:true,errorMsg:"Password must be atleast of 8 charcters"});
        }else{
            this.setState({error:false,errorMsg:""});
            var formData=new FormData();
            formData.append('EMAIL',email);
            formData.append('PASSWORD',newPass)
            fetch("https://localhost:44379/api/Doctors/ForgotPassword",
            { method:'POST',
              body:formData
            }).then((res=>res.json()))
            .then((data)=>{
                localStorage.setItem("msg","Your Password has changed successfully");
                this.props.history.push('/login/doctor');
            })
            ;
        }
    }

    render(){
        return(
            <Container>
                <Row>
                    <Col lg={{span:6,offset:3}}>
                    <Card>
                        <Alert variant="danger" show={this.state.error}>
                            <Alert.Heading>Error</Alert.Heading>
                            {this.state.errorMsg}
                        </Alert>
                        <Card.Body>
                        <Card.Title >Reset Password</Card.Title>
                        <form className="form" onSubmit={this.UpdatePassword}>
                        
                            <input type="email" name="email"  placeholder="Enter Email........" className="form-control" style={{marginTop:"10px",marginBottom:"10px"}} />
                            
                            <input type="password" name="newPass"  placeholder="Enter a new password........" className="form-control" />
                            <Button variant="info" type="submit">SUBMIT</Button>
                        </form>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>

            </Container>
        )

    }

}


export default ForgotPassword;