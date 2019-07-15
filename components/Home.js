import React, { Component } from 'react';
import Cover from './Cover';
import {Nav,Navbar,NavDropdown,Container,Card,Row,Col, Button, Alert} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faBook,faSearch,faHospital,faCoffee} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import SimpleReactValidator from 'simple-react-validator';

const Navigation=(props)=>{
    return(
<Navbar collapseOnSelect expand="lg"  bg="dark" variant="dark" sticky="top">
  <Navbar.Brand href="#home">App Demo </Navbar.Brand>
  <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#top">Home</Nav.Link>
      <Nav.Link href="#services">Services</Nav.Link>
      <Nav.Link href="#about">About Us</Nav.Link>
      <Nav.Link eventKey={2} href="#contact">Contact Us</Nav.Link>
      <NavDropdown title="Login" id="collasible-nav-dropdown">
      <NavDropdown.Item >
        <Link to="/login/patient" className="text-info">Patient</Link>
      </NavDropdown.Item>
      
      <NavDropdown.Item>
        <Link to="/login/doctor" className="text-info">Doctor</Link>
      </NavDropdown.Item>
      </NavDropdown>
      
      <NavDropdown title="Signup" id="collasible-nav-dropdown">
      <NavDropdown.Item  >
        <Link to="/signup/patient" className="text-info">Patient</Link>
      </NavDropdown.Item>
      <NavDropdown.Item >
        <Link to="/signup/doctor" className="text-info">Doctor</Link>
      </NavDropdown.Item>
      </NavDropdown>

    </Nav>
  </Navbar.Collapse>
</Navbar>

    );};


const Content=(props)=>{
return(
<div>
 
  
  <div id={props.id} >
  <br /><br /><br />
  <div className="display-4 text-left wow bounce " data-wow-duration="2s">{props.title}</div>
  <p className="text-danger border-custom wow fadeInLeft"></p>
  <br /><br /><br />
  {props.children}
  </div>
  <br/><br/>

</div>
);
};


const Footer=()=>{
  return(
    <footer id="sticky-footer" className="py-3 bg-dark text-white-50">
    <div className="container">
      <Row>
      <Col lg={3} md={12} >
      <small>Copyright &copy; Dcotor Appointment</small>
      </Col>
      </Row>
    </div>
  </footer>
  );
}






class ContentSection extends Component{

  constructor(props){
    super(props);
    this.props=props;
    this.state={
      success:false,
      successMsg:""
    }
     this.validator=new SimpleReactValidator();
    this.sendMessage=this.sendMessage.bind(this);
     this.setStateFromInput=(event)=>{
      var obj = {};
      obj[event.target.name] = event.target.value;
      this.setState(obj);
    }
    
  }



sendMessage(e)
{
  e.preventDefault();
  var name=e.target.elements.name.value;
  var email=e.target.elements.email.value;
  var address=e.target.elements.address.value;
  var message=e.target.elements.message.value;
  var emailto='alisyedaamir123@hotmail.com';
  if(this.validator.allValid()){
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "alisyedaamir123@hotmail.com",
    Password : "38cd683b-dcbc-41d6-95c8-6dba1540fc0b",
    To : emailto,
    From:emailto,
    Subject : "Message From "+name,
    spam:'not spam',
    Body : "<p><strong>Address : </strong>"+address+"</p>"
          +"<p><strong>Message : </strong>"+message+"</p>"
          +"<p><strong>Email : </strong>"+email+"</p>"
}).then(
);
e.target.reset();
this.setState({success:true,successMsg:"Your will replied soon......"});

  setTimeout(()=>{
    this.setState({success:false,successMsg:"",name:"",message:"",email:""});
  },3000);

  
}
else{
  this.validator.showMessages();
  this.forceUpdate();
}

}




  render(){

    return(
      <Container fluid={true} >
      <Content id="services" title="SERVICES">
      <Row >
      <Col lg={4} md={6} id="controlled-margin" className="wow fadeInLeft">
        <Card >
          <p  className=" text-center dynamic">
        <FontAwesomeIcon icon={faUser} className="text-danger font-google" />
        </p>
          <Card.Body>
            <Card.Title>
              <h3>Register Your Self</h3>
            </Card.Title>
            <Card.Text>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
  
  
        <Col lg={4} md={6} id="controlled-margin" className="wow fadeInLeft" data-wow-delay="0.3s">
        <Card >
        <p  className=" text-center dynamic">
        <FontAwesomeIcon icon={faSearch} className="text-danger font-google" />
        </p>
        <Card.Body>
            <Card.Title>
              <h3>Find Your Doctor</h3>
            </Card.Title>
            <Card.Text>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
  
  
        <Col lg={4} md={6} id="controlled-margin" className="wow fadeInLeft" data-wow-delay="0.6s">
        <Card >
        <p  className="text-center dynamic">
        
        <FontAwesomeIcon icon={faBook} className="text-danger font-google" />
        </p>
          <Card.Body>
            <Card.Title>
              <h3>Book Your Appointment</h3>
            </Card.Title>
            <Card.Text>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
  
      </Row>
  
  
    
  
  
  
  
  
      </Content>
   
  
    
     
      <div className="back">
      <div className="back-overlay">
      <Container>
      <Row>
      <Col lg={3}>
      <p  className=" text-center dynamic wow slideInLeft">
        <FontAwesomeIcon icon={faHospital} className="text-light font-google" />
        </p>
        </Col>
  
        <Col lg={{span:8,offset:1}}>
      <p  className="text-light text-left dynamic wow slideInRight">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.
  
  Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.
  
        </p>
        </Col>
  
       
      </Row>
      </Container>
      </div>
  
      </div>
  
  
      <Content id="about" title="ABOUT US">
        <Row>
          <Col lg={4} md={12} sm={12}>
          <img src="http://pngimg.com/uploads/doctor/doctor_PNG15971.png" className="img-fluid wow slideInLeft"  />
          </Col>
          
          <Col lg={8} md={12} sm={12} className="about">
          <h3 className="text-capital wow slideInRight">Why Choose Us</h3>
          <p className="wow slideInRight" data-wow-delay="0.7s">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.
  
          </p>
  
          <h3 className="text-capital wow slideInRight" >Make An Appointment</h3>
          <p className="wow slideInRight" data-wow-delay="0.7s">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.
  
          </p>
  
          <h3 className="text-capital wow slideInRight">Check Prescriptions</h3>
          <p className="wow slideInRight" data-wow-delay="0.7s">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.
  
          </p>
  
  
  
          </Col>
  
  
  
        </Row>
      </Content>
      
  
      <div className="back-contact">
      <div className="back-contact-overlay">
      <Container>
      <Row>
      <Col lg={12} >
      <Col lg={{span:4,offset:7}} md={{span:12}}>
          <Card className="bg-warning book-box wow zoomIn">
            <Card.Title><h4>Register Yourself</h4></Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.
  
            </Card.Text>
            <Button variant="outline-secondary" className="text-light"
            onClick={()=>{
              this.props.history.push('/signup/patient');
            }}>Register</Button>
          </Card>
  
        </Col>
        </Col>
       
      </Row>
      </Container>
      </div>
  
      </div>
  
  
      <Content id="contact" title="CONTACT US">
        <Row>
          <Col lg={6} md={12} sm={12}>
          <div className="responsive-map-container wow slideInLeft">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.0207131714733!2d67.11026565114246!3d24.931364283942088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338b8d4494c91%3A0xf864ed97b4a8ec0e!2sNED+University+of+Engineering+and+Technology!5e0!3m2!1sen!2s!4v1559129235889!5m2!1sen!2s" width="800" height="600" frameBorder="0" className="map-responsive" allowFullScreen></iframe>
          </div>
          </Col>
          
          <Col lg={6} md={12} sm={12} className="about">
          <h3 className="text-capital wow slideInRight">Ask Any Query</h3>
         <Alert variant="warning" className="text-dark" show={this.state.success}>
           {this.state.successMsg}
         </Alert>
         <form  className="wow slideInRight" onSubmit={this.sendMessage}>
            <div className="form-group">
            <label for="name">Full Name:</label>
            <input type="text" className="form-control" value={this.state.name} onChange={this.setStateFromInput}  id="name" name="name" /> 
            <span className="text-danger">{this.validator.message("name",this.state.name,"required|min:5")}</span>
            </div>
  
            <div className="form-group">
            <label for="email">E-mail:</label>
            <input type="email" className="form-control"  id="email" name="email" value={this.state.email} onChange={this.setStateFromInput} /> 
            <span className="text-danger">{this.validator.message("email",this.state.email,"required|email")}</span>
            </div>
  
            <div className="form-group">
            <label for="address">Address:</label>
            <input type="text" className="form-control "  id="address" name="address" /> 
            </div>
  
            
            <div className="form-group">
            <label for="msg">Message:</label>
            <textarea type="text" className="form-control"   style={{height:150}} id="message" name="message" value={this.state.message} onChange={this.setStateFromInput} ></textarea> 
            <span className="text-danger">{this.validator.message("message",this.state.message,"required|min:10")}</span>
            </div>
  
            <Button variant="primary" type="submit">SUBMIT</Button>
  
         </form>
  
  
          </Col>
  
  
  
        </Row>
      </Content>
  
  
     
  
   
    </Container>
    )

  }


}









const Home=(props)=>{
    return(
      <div>
        
        <Cover id="top" />
        <Navigation />
       
        <ContentSection {...props} />


      <Footer />

        </div>
    )
};

export default Home;