import React,{Component} from 'react';
import {Row,Col, Card,Button, Container, InputGroup} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../src/styles/app.scss';

const Register=(props)=>{
return(
   <Container>
       <Col lg={{span:8,offset:2}}>
        <Card>
        <Card.Header className="bg-dark">
            <Card.Title className="text-center text-light login-heading">Create Your Account</Card.Title>
        </Card.Header>
        <Card.Body>
           
            <form>
                <Row>
                <Col lg={6}>
                <div className="form-group" style={{margin: '18px 20px 5px 10px'}}>
                    <input type="text" name="name" className="form-control" style={{borderRadius: "100px",padding:'20px'}} placeholder="Name" />
                </div>
                </Col>
                <Col lg={6}>
                <div className="form-group" style={{margin: '18px 20px 5px 10px'}}>
                    <input type="text" name="father_name" className="form-control" style={{borderRadius: "100px",padding:'20px'}} placeholder="Father Name" />
                </div>
                </Col>

                <Col lg={6}>
                <div className="form-group" style={{margin: '18px 20px 5px 10px'}}>
                    <input type="email" name="email" className="form-control" style={{borderRadius: "100px",padding:'20px'}} placeholder="E-mail" />
                </div>
                </Col>
                <Col lg={6}>
                <div className="form-group" style={{margin: '18px 20px 5px 10px'}}>
                    <input type="number" name="age" className="form-control" style={{borderRadius: "100px",padding:'20px'}} placeholder="Age" />
                </div>
                </Col>

                <Col lg={12}>
                <div className="form-group" style={{margin: '18px 20px 5px 10px'}}>
                   <InputGroup style={{borderRadius: "100px",padding:'20px'}}>
                   <InputGroup.Prepend>
                   <InputGroup.Text>Gender</InputGroup.Text>
                   </InputGroup.Prepend>
                   <select className="form-control">
                        <option>Male</option>
                        <option>Female</option>
                   </select>
                   </InputGroup>
                   </div>
                </Col>

                <Col lg={12}>
                <div className="form-group" style={{margin: '18px 20px 5px 10px'}}>
                 <textarea placeholder="Address" className="form-control" style={{borderRadius: "20px",padding:'10px'}}>

                 </textarea>
                 </div>
                </Col>

                <Col lg={6}>
                <div className="form-group" style={{margin: '18px 20px 5px 10px'}}>
                    <input type="password" name="password" className="form-control" style={{borderRadius: "100px",padding:'20px'}} placeholder="Password" />
                </div>
                </Col>
                <Col lg={6}>
                <div className="form-group" style={{margin: '18px 20px 5px 10px'}}>
                    <input type="date" name="dob" className="form-control" style={{borderRadius: "100px",padding:'20px'}} placeholder="Date" />
                </div>
                </Col>

                <Col lg={6}>
                <div className="form-group" style={{margin: '18px 20px 5px 10px'}}>
                    <input type="text" name="contact" className="form-control" style={{borderRadius: "100px",padding:'20px'}} placeholder="Contact" />
                </div>
                </Col>
                <Col lg={6}>
                <div className="form-group" style={{margin: '18px 20px 5px 10px'}}>
                    <input type="text" name="blood_group" className="form-control" style={{borderRadius: "100px",padding:'20px'}} placeholder="Blood Group" />
                </div>
                </Col>

                <Col lg={12}>
                <div className="form-group" style={{margin: '18px 20px 5px 10px'}}>
                    <div class="custom-file">
    <input type="file" class="custom-file-input" id="customFile" />
    <label class="custom-file-label" for="customFile">Choose file</label>
  </div>
                </div>
                </Col>

                
                </Row>
                
                <div className="form-group" style={{margin: '18px 89px 15px 89px'}}>
                    <Button variant="dark" className="form-control" style={{borderRadius: "100px",height:'45px'}}>REGISTER</Button>
                </div>

            </form>

            <div style={{backgroundColor:'#fff',paddingTop:"120px"}}>
            <p className="text-center text-secondary">Have an account?</p>
            <div className="text-center">
            <Link className="text-dark" to="/login/patient">SIGN IN NOW</Link>
            </div>
            </div>
            
        </Card.Body>


        </Card>
        <div className="text-center">
        <Link to="/" className="text-dark" >  Back To Home</Link>
        </div>
        </Col>
        
        </Container>   

)};

export default Register;