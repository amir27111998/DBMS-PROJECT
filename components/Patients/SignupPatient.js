import React,{Component} from 'react';
import {Row,Col, Card,Button, Container, InputGroup, Alert} from 'react-bootstrap';
import SimpleReactValidator from 'simple-react-validator';
import {Link} from 'react-router-dom';
import '../../src/styles/app.scss';


class Register extends Component{
    constructor(props){
        super(props);
        this.props=props;
        this.state={
            image:null,
            imageMsg:null,
            allowedImageType:["image/jpeg","image/jpg","image/png"],
            success:false
        }
        this.validator=new SimpleReactValidator();
        this.submitForm=this.submitForm.bind(this);
        this.fileUpload=this.fileUpload.bind(this);
        this.setStateFromInput=(event)=>{
            var obj = {};
            obj[event.target.name] = event.target.value;
            this.setState(obj);
          }
        
         
    }

    fileUpload(evt){
       this.setState({
            image:evt.target.files[0],
            imageMsg:""
        });

        
       
    }


    submitForm(e) {
        e.preventDefault();
        if(this.state.image==null){
            this.setState((prevState)=>{
                return {
                    imageMsg:"Please provide your picture"
                }
               });
        } 
        

        if (this.validator.allValid()) {
            if(this.state.allowedImageType.indexOf(this.state.image.type)==-1){
                this.setState((prevState)=>{
                    return {
                        imageMsg:"Please check file type must be image "
                    }
                   });
            }else{
               var formData=new FormData();
               var name=e.target.elements.name.value;
               var father_name=e.target.elements.father_name.value;
               var email=e.target.elements.email.value;
               var age=e.target.elements.age.value;
               var gender=e.target.elements.gender.value;
               var address=e.target.elements.address.value;
               var password=e.target.elements.password.value;
               var picture=this.state.image;
               var dob=e.target.elements.dob.value;
               var contact=e.target.elements.contact.value;
               var blood_group=e.target.elements.blood_group.value;
               formData.append('NAME',name);
               formData.append('FATHER_NAME',father_name);
               formData.append('EMAIL',email);
               formData.append('AGE',age);
               formData.append('GENDER',gender);
               formData.append('ADDRESS',address);
               formData.append('PASSWORD',password);
               formData.append('PICTURE_2',picture);
               formData.append('DOB',dob);
               formData.append('CONTACT',contact);
               formData.append('BLOOD_GROUP',blood_group);
                fetch("https://localhost:44379/api/Patients/Register",{
                    method:'POST',
                    body:formData
                })
                .then(res=>res.json())
                .then((data)=>{
                    this.setState({success:true});
                    setTimeout(() => {
                        this.setState({success:false});
                        
                    }, 5000);
                    setTimeout(() => {
                        this.props.history.push('/login/patient');
                    }, 1000);
                        
                    
                });
               
            }
          
        }
        else {
          this.validator.showMessages();
          this.forceUpdate();
          if(this.state.allowedImageType.indexOf(this.state.image.type)==-1){
            this.setState((prevState)=>{
                return {
                    imageMsg:"Please check file type must be image "
                }
               });
        }

        }


      }
      

    render(){
        return(
            <Container>
            <Col lg={{span:8,offset:2}}>
             <Card>
             <Card.Header className="bg-dark">
                 <Card.Title className="text-center text-light login-heading">Create Your Account</Card.Title>
             </Card.Header>
             <Card.Body>
                <Alert variant="warning" show={this.state.success}>
                    <Alert.Heading>Account Created</Alert.Heading>
                    <h4>Redirecting to the login page</h4>
                </Alert>
                 <form onSubmit={this.submitForm} encType="multipart/form-data">
                     <Row>
                     <Col lg={6}>
                     <div className="form-group" style={{margin: '18px 20px 5px 10px'}}>
                         <input type="text" name="name" value={this.state.name} onChange={this.setStateFromInput} className="form-control" style={{borderRadius: "100px",padding:'20px'}} placeholder="Name" />
                         <span className='text-danger' >{this.validator.message("name",this.state.name,"required|min:4")}</span>
                     </div>
                     </Col>
                     <Col lg={6}>
                     <div className="form-group" style={{margin: '18px 20px 5px 10px'}}>
                         <input type="text" name="father_name" value={this.state.father_name} onChange={this.setStateFromInput}  className="form-control" style={{borderRadius: "100px",padding:'20px'}} placeholder="Father Name" />
                         <span className='text-danger'>{this.validator.message("father_name",this.state.father_name,"required|min:4")}</span>
                    
                     </div>
                     </Col>
     
                     <Col lg={6}>
                     <div className="form-group" style={{margin: '18px 20px 5px 10px'}}>
                         <input type="email" name="email" value={this.state.email} onChange={this.setStateFromInput} className="form-control" style={{borderRadius: "100px",padding:'20px'}} placeholder="E-mail" />
                         <span className='text-danger'>{this.validator.message("email",this.state.email,"required|email")}</span>
                     </div>
                     </Col>
                     <Col lg={6}>
                     <div className="form-group" style={{margin: '18px 20px 5px 10px'}}>
                         <input type="number" value={this.state.age} onChange={this.setStateFromInput} name="age" className="form-control" style={{borderRadius: "100px",padding:'20px'}} placeholder="Age" />
                         <span className='text-danger'>{this.validator.message("age",this.state.age,"required|numeric")}</span>
                     </div>
                     </Col>
     
                     <Col lg={12}>
                     <div className="form-group" style={{margin: '18px 20px 5px 10px'}}>
                        <InputGroup style={{borderRadius: "100px",padding:'20px'}}>
                        <InputGroup.Prepend>
                        <InputGroup.Text>Gender</InputGroup.Text>
                        </InputGroup.Prepend>
                        <select name="gender" value={this.state.gender} onChange={this.setStateFromInput} className="form-control">
                             <option selected value="MALE">Male</option>
                             <option value="FEMALE">Female</option>
                        </select>
                        
                        </InputGroup>
                        <span className='text-danger'>{this.validator.message("gender",this.state.gender,"required")}</span>
                     </div>
                        </Col>
     
                     <Col lg={12}>
                     <div className="form-group"  style={{margin: '18px 20px 5px 10px'}}>
                      <textarea placeholder="Address" name="address" value={this.state.address} onChange={this.setStateFromInput} className="form-control" style={{borderRadius: "20px",padding:'10px'}}>
     
                      </textarea>
                      <span className='text-danger'>{this.validator.message("address",this.state.address,"required")}</span>
                     
                      </div>
                     </Col>
     
                     <Col lg={6}>
                     <div className="form-group" style={{margin: '18px 20px 5px 10px'}}>
                         <input type="password" value={this.state.password} onChange={this.setStateFromInput} name="password" className="form-control" style={{borderRadius: "100px",padding:'20px'}} placeholder="Password" />
                         <span className='text-danger'>{this.validator.message("password",this.state.password,"required|min:8")}</span>
                     </div>
                     </Col>
                     <Col lg={6}>
                     <div className="form-group" style={{margin: '18px 20px 5px 10px'}}>
                         <input type="date" name="dob" value={this.state.dob} onChange={this.setStateFromInput} className="form-control" style={{borderRadius: "100px",padding:'20px'}} placeholder="Date" />
                         <span className='text-danger'>{this.validator.message("dob",this.state.dob,"required")}</span>
                     </div>
                     </Col>
     
                     <Col lg={6}>
                     <div className="form-group" style={{margin: '18px 20px 5px 10px'}}>
                         <input type="text" name="contact" value={this.state.contact} onChange={this.setStateFromInput} className="form-control" style={{borderRadius: "100px",padding:'20px'}} placeholder="Contact" />
                         <span className='text-danger'>{this.validator.message("contact",this.state.contact,"required|phone")}</span>
                     </div>
                     </Col>
                     <Col lg={6}>
                     <div className="form-group" style={{margin: '18px 20px 5px 10px'}}>
                         <input type="text" name="blood_group" value={this.state.blood_group} onChange={this.setStateFromInput} className="form-control" style={{borderRadius: "100px",padding:'20px'}} placeholder="Blood Group" />
                         <span className='text-danger'>{this.validator.message("blood_group",this.state.blood_group,"required")}</span>
                     </div>
                     </Col>
     
                     <Col lg={12}>
                     <div className="form-group" style={{margin: '18px 20px 5px 10px'}}>
                         <div class="custom-file">
                        <input type="file" name="pro_picture" class="custom-file-input" onChange={this.fileUpload} id="customFile" />
                        <label class="custom-file-label" for="customFile">Choose file</label>
                    </div>
                    <span className='text-danger'>{this.state.imageMsg!=""?this.state.imageMsg:""}</span>
                     
                     </div>
                     </Col>
     
                     
                     </Row>
                     
                     <div className="form-group" style={{margin: '18px 89px 15px 89px'}}>
                         <Button type="submit" variant="dark" className="form-control" style={{borderRadius: "100px",height:'45px'}}>REGISTER</Button>
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

        );
    }};

export default Register;