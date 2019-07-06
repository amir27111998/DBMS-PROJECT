import React, { Component } from 'react';
import '../loadingFiles';
import NavDash from './NavDash';
import {Button, Col,  Alert} from 'react-bootstrap';

import {connect} from 'react-redux';
import {giveFeedback} from '../../Patients/Admin/redux/serviceLoder';


class Feedback extends Component{
  constructor(props){
    super(props);
    this.props=props;
    this.state={
        error:false,
        errorMsg:"",
        success:false,
        successMsg:""
    }
    this.submitFeedback=this.submitFeedback.bind(this);
  } 

  submitFeedback(e){
    e.preventDefault();
    if(e.target.elements.comment.value.length <15)
    {
        this.setState({success:false,error:true,errorMsg:"Enter a comment greater than 15 character."});
    }else{
        this.props.addFeed(e.target.elements.comment.value,e.target.elements.rating.value,this.props.match.params.app_id);
        this.setState({error:false,errorMsg:"",success:true,successMsg:"Your feedback is submitted. Redirecting......."});
        setTimeout(() => {
            
            this.setState({error:false,errorMsg:"",success:false,successMsg:""});
            this.props.history.push("/");
        }, 3000);
    }
  }  



  render(){


    return(
        <div className="wrapper ">
        
        <div className="main-panel" id="main-panel">
        <NavDash title="History" />
          <div className="panel-header panel-header-sm">
          </div>
          <div className="content">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Give a Feedback</h4>
                  </div>
                  <div className="card-body">
                    <Alert variant="danger" show={this.state.error} >
                        <Alert.Heading>Error....!</Alert.Heading>
                        {this.state.errorMsg}
                    </Alert>
                    <Alert variant="info" show={this.state.success} >
                        <Alert.Heading>Success....!</Alert.Heading>
                        {this.state.successMsg}
                    
                    </Alert>
                        <Col >
                        <form className="form" onSubmit={this.submitFeedback}>
                            <Col lg={12}>
                            <textarea name="comment" rows="50" placeholder="Enter a comment" className="form-control" style={{fontSize:'20px'}}>

                            </textarea>
                            </Col>
                            <br />
                            <Col lg={12}>
                            <label>Select a rating</label>
                            <select name="rating" className="form-control">
                               <option value="1" >1</option>
                               <option value="2">2</option>
                               <option value="3">3</option>
                               <option value="4">4</option>
                               <option value="5">5</option>   
                            </select>
                            <br/><br/>
                            <Button variant="primary" type="submit" >Submit</Button>
                            </Col>
                           
                        </form>
                        </Col>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    )}
    
   


}

const mapStateToprops=()=>{};
const mapDispatchToProps=(dispatch)=>{
    return {
        addFeed:(comment,rating_id,app_id)=>{
            dispatch(giveFeedback(comment,rating_id,app_id));
        }
    }
};

const FeedbackWithData=connect(mapStateToprops,mapDispatchToProps)(Feedback);

export default FeedbackWithData;