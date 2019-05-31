import React,{Component} from 'react';
import {Row,Col, Container,Button} from 'react-bootstrap';
import "../src/styles/app.scss";

class ControlledCarousel extends Component {
    
  
    render() {
      
      return (

        <div id={this.props.id}>
         
<header className="masthead">

  <div className="container h-100">
    <div className="row h-100 align-items-center">
      <div className="col-12 text-center">
        <h1 className="font-weight-light wow fadeIn">Welcome To Doctor Appointment System</h1>
        <p className="lead wow fadeIn" data-wow-delay="1s">Please make sure to make your account</p>

        <br/><br/><br/>
        <a href="#services" className="top-btn">
          <img src="https://static.thenounproject.com/png/53556-200.png" className="top-btn animated bounceIn infinite" /></a>
      </div>
    </div>
  </div>
  
</header>    

</div>
      );
    }
  }
export default ControlledCarousel;
  
  