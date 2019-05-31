import React from 'react';
import Cover from './Cover';
import {Nav,Navbar,NavDropdown,Container,Card,Row,Col, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faBook,faSearch,faHospital,faCoffee} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

const Navigation=()=>{
    return(
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#top">Home</Nav.Link>
      <Nav.Link href="#services">Services</Nav.Link>
      <Nav.Link href="#about">About Us</Nav.Link>
      <Nav.Link eventKey={2} href="#contact">Contact Us</Nav.Link>
      <NavDropdown title="Login" id="collasible-nav-dropdown">
      <NavDropdown.Item >
        <Link to="/login/patient" className="text-dark">Patient</Link>
      </NavDropdown.Item>
      
      <NavDropdown.Item>
        <Link to="/google" className="text-dark">Doctor</Link>
      </NavDropdown.Item>
      </NavDropdown>
      
      <NavDropdown title="Signup" id="collasible-nav-dropdown">
      <NavDropdown.Item  >
        <Link to="/signup/patient" className="text-dark">Patient</Link>
      </NavDropdown.Item>
      <NavDropdown.Item >
        <Link to="/google" className="text-dark">Doctor</Link>
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


const ContentSection=()=>{
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
          <Card.Title><h1>Register Yourself</h1></Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.

          </Card.Text>
          <Button variant="outline-secondary" className="text-light">Register</Button>
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
       <form  className="wow slideInRight">
          <div className="form-group">
          <label for="name">Name:</label>
          <input type="text" className="form-control" id="name" /> 
          </div>

          <div className="form-group">
          <label for="email">E-mail:</label>
          <input type="email" className="form-control" id="email" /> 
          </div>

          <div className="form-group">
          <label for="address">Address:</label>
          <input type="text" className="form-control" id="address" /> 
          </div>

          
          <div className="form-group">
          <label for="msg">Message:</label>
          <textarea type="text" className="form-control" style={{height:150}} id="msg" ></textarea> 
          </div>

          <Button variant="primary">SUBMIT</Button>

       </form>


        </Col>



      </Row>
    </Content>


   

 
  </Container>
  );
}




const Home=()=>{
    return(
      <div>
        
        <Cover id="top" />
        <Navigation />
       
        <ContentSection />


      <Footer />

        </div>
    )
};

export default Home;