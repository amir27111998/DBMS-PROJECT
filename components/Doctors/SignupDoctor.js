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
            success:false,
            districts:[],
            specialization:[]
        }
        this.validator=new SimpleReactValidator();
        this.submitForm=this.submitForm.bind(this);
        this.fileUpload=this.fileUpload.bind(this);
        this.setStateFromInput=(event)=>{
            var obj = {};
            obj[event.target.name] = event.target.value;
            this.setState(obj);
          }
        
        //fetching get districts
    fetch("https://localhost:44379/api/Patients/getDistrict")
    .then(res=>res.json())
    .then((data)=>{
      this.setState({districts:data});
    });
    //end

    //fetching get specialization
    fetch("https://localhost:44379/api/Patients/getSpecialization")
    .then(res=>res.json())
    .then((data)=>{
      this.setState({specialization:data});
    });
    //end
    
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
               var description=e.target.elements.description.value;
               var experiance=e.target.elements.experiance.value;
               var institute=e.target.elements.institute.value;
               var district=e.target.elements.District.value;
               var specialization=e.target.elements.Specialization.value;
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
               formData.append('DESCRIPTION',description);
               formData.append('EDUCATIONAL_INSTITUTE',institute);
               formData.append('EXPERIENCE',experiance);
               formData.append('DISTRICT_ID',district);
               formData.append('SPECIALIZATION_ID',specialization);
                fetch("https://localhost:44379/api/Doctors/Register",{
                    method:'POST',
                    body:formData
                })
                .then(res=>res.json())
                .then((data)=>{
                    this.setState({success:true});
                    setTimeout(() => {
                        this.setState({success:false});
                    }, 5000);
                        
                    
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
             <Card.Header className="bg-primary">
                 <Card.Title className="text-center text-light login-heading">Create Your Profile</Card.Title>
             </Card.Header>
             <Card.Body>
                <Alert variant="info" show={this.state.success}>
                    <Alert.Heading>Your Profile Has Created</Alert.Heading>

                </Alert>
                 <form onSubmit={this.submitForm} encType="multipart/form-data">
                     <legend>Personal Information</legend>
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
                     <Col lg={3}>
                     <div className="form-group" style={{margin: '18px 0px 5px 0px'}}>
                         <input type="number" value={this.state.age} onChange={this.setStateFromInput} name="age" className="form-control" style={{borderRadius: "100px",padding:'20px'}} placeholder="Age" />
                         <span className='text-danger'>{this.validator.message("age",this.state.age,"required|numeric")}</span>
                     </div>
                     </Col>

                     <Col lg={3}>
                     <div className="form-group" style={{margin: '18px 0px 5px 0px'}}>
                         <input type="number" value={this.state.experiance} onChange={this.setStateFromInput} name="experiance" className="form-control" style={{borderRadius: "100px",padding:'20px'}} placeholder="Experiance" />
                         <span className='text-danger'>{this.validator.message("experiance",this.state.experiance,"required|numeric")}</span>
                     </div>
                     </Col>

                     

                     <Col lg={12}>
                     <div className="form-group" style={{margin: '10px 20px 5px 10px'}}>
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
                     <div className="form-group" style={{margin: '0px 20px 5px 10px'}}>
                        <InputGroup style={{borderRadius: "100px",padding:'20px'}}>
                        <InputGroup.Prepend>
                        <InputGroup.Text>Select District</InputGroup.Text>
                        </InputGroup.Prepend>
                        <select name="District" value={this.state.District} onChange={this.setStateFromInput} className="form-control">
                             {this.state.districts.map((district)=>{
                                 return(
                                    <option selected value={district.id}>{district.district}</option>
                                 )
                             })}
                             
                             
                           
                        </select>
                        
                        </InputGroup>
                        <span className='text-danger'>{this.validator.message("District",this.state.District,"required")}</span>
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
                    <legend style={{marginTop:'25px'}}>Medical Information</legend>
                    <Row>
                    
                     <Col lg={12}>
                     <div className="form-group"  style={{margin: '18px 20px 5px 10px'}}>
                      <textarea placeholder="Add a detail description about you" name="description" value={this.state.description} onChange={this.setStateFromInput} className="form-control" style={{borderRadius: "20px",padding:'10px'}}>
     
                      </textarea>
                      <span className='text-danger'>{this.validator.message("description",this.state.description,"required")}</span>
                     
                      </div>
                     </Col>


                     <Col lg={12}>
                     <div className="form-group" style={{margin: '18px 20px 5px 10px'}}>
                         <input type="text" value={this.state.institute} onChange={this.setStateFromInput} name="institute" className="form-control" style={{borderRadius: "100px",padding:'20px'}} placeholder="Medical Institute Name" />
                         <span className='text-danger'>{this.validator.message("institute",this.state.institute,"required|min:8")}</span>
                     </div>
                     </Col>

                     <Col lg={12}>
                     <div className="form-group" style={{margin: '5px 20px 5px 10px'}}>
                        <InputGroup >
                        <InputGroup.Prepend>
                        <InputGroup.Text>Select Specialization</InputGroup.Text>
                        </InputGroup.Prepend>
                        <select name="Specialization" value={this.state.Specialization} onChange={this.setStateFromInput} className="form-control">
                             {this.state.specialization.map((spec)=>{
                                 return(
                                    <option selected value={spec.id}>{spec.specialization}</option>
                                 )
                             })}
                             
                             
                           
                        </select>
                        
                        </InputGroup>
                        <span className='text-danger'>{this.validator.message("Specialization",this.state.Specialization,"required")}</span>
                     </div>
                        </Col>
                     
                     </Row>
                     
                     <div className="form-group" style={{margin: '18px 89px 15px 89px'}}>
                         <Button type="submit" variant="primary" className="form-control" style={{borderRadius: "100px",height:'45px'}}>Create Profile</Button>
                     </div>
     
                 </form>
     
                 <div style={{backgroundColor:'#fff',paddingTop:"120px"}}>
                 <p className="text-center text-secondary">Have an account?</p>
                 <div className="text-center">
                 <Link className="text-dark" to="/login/doctor">SIGN IN NOW</Link>
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