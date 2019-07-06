import React,{Component} from 'react';
import NavDash from './NavDash';
import '../loadingFiles';
import { Button, Spinner,Alert, Jumbotron } from 'react-bootstrap';
import {doctorTiming} from '../../Patients/Admin/redux/serviceLoder';
import {connect} from 'react-redux';
import {onlyTime,checkDay,checkDate, onlyDate} from '../Utilities';



class DoctorTimings extends Component{
    constructor(props){
      super(props);
      this.props=props;
      this.state={
        error:false,
        errorMsg:"",
        disabled:"",
        buttonStatus:false,
        success:false,
        successMsg:""
      }
      this.email=this.props.doctorsList.data.filter((doctor)=>{
        return this.props.match.params.id==doctor.id
      })[0].email;
      this.onSelectedDate=this.onSelectedDate.bind(this);
      this.checkDateTime=this.checkDateTime.bind(this);
      this.onSubmit=this.onSubmit.bind(this);
    }

checkDateTime(id,date,starttime,endtime,insert){
  //Combining date and time for the select date
      var start=new Date(starttime);
      var end=new Date(endtime);
      var startTime=date+'T'+start.getUTCHours()+':'+start.getMinutes()+':'+start.getSeconds()+'Z';
      var endTime=date+'T'+end.getUTCHours()+':'+end.getMinutes()+':'+end.getSeconds()+'Z';
      var formData=new FormData();
      formData.append('ID',id);
      formData.append("START_TIME",startTime);
      formData.append("END_TIME",endTime);
      var endTi=new Date(endTime);
  //+++++++++++++++++++++++++++++++++++++++++++++++
      var user=JSON.parse(sessionStorage.getItem('user'));
  //+++++++++++Glowing Button when no data loaded
      this.setState({buttonStatus:false});
  //+++++++++++Fetching previous appointments
      fetch("https://localhost:44379/api/Patients/CurrentTimeAppointment",
      {
            method:'POST',
            body:formData
          })
        .then(res=>res.json())
        .then((data)=>{
  //+++++++++++Solid button after data is loaded
          this.setState({buttonStatus:true});
  //checking that the previous appointment in the current time exist
          if(data.length!=0){
            // Checking for last appointment
            
            var d=new Date(data[0].apP_DATETIME);
            //adding time in the existed time
              d.setHours(d.getHours());
              d.setMinutes(d.getMinutes()+20);
            if(d.getTime()<=endTi.getTime()){
            //+++Enabling button
              this.setState({disabled:""});

             //++Sending form data
              var appForm=new FormData()
              appForm.append("App_DATETIME",date+' '+d.getUTCHours()+':'+d.getMinutes()+':'+d.getSeconds());
              appForm.append("PATIENTS_ID",user.id);
              appForm.append("DOCTORS_ID",this.props.match.params.id);
              appForm.append("STATUS_ID",1);

              //++When Button is clicked insert but not selection of date
              if(insert){              
                fetch("https://localhost:44379/api/Patients/BookingAppointment",
                {
                method:'POST',
                body:appForm
                }).then(res=>res.json())
                .then((data)=>{
                  //if not true error occurs but if not success msg will appear
                  if(parseInt(data)!=1){
                    this.setState({disabled:"",error:true,errorMsg:"There were some errors"});
                  }else{
                    this.setState({success:true,successMsg:"Your request has sent to doctor\t Wait for his reply...."});
                    setTimeout(() => {
                      this.setState({success:false,successMsg:""});
                    }, 3000);
                  }
                });
              }

           }else{
             //+++Disabling button and locking for the appointment
            this.setState({disabled:"disabled",error:true,errorMsg:"There were no rooms left for this appointment on this Date."});
           }
          }
          else{
            //previous appointment in the current time doesn't exist
            // inserting starting date
              var appForm=new FormData()
              appForm.append("App_DATETIME",date+' '+start.getUTCHours()+':'+start.getMinutes()+':'+start.getSeconds());
              appForm.append("PATIENTS_ID",user.id);
              appForm.append("DOCTORS_ID",this.props.match.params.id);
              appForm.append("STATUS_ID",1);

              if(insert){  
                fetch("https://localhost:44379/api/Patients/BookingAppointment",
                {
                method:'POST',
                body:appForm
                }).then(res=>res.json())
                .then((data)=>{
                  if(parseInt(data)!=1){
                    this.setState({disabled:"",error:true,errorMsg:"There were some errors"});
                  }else{
                    this.setState({success:true,successMsg:"Your request has sent to doctor\n Wait for his reply...."});
                    setTimeout(() => {
                      this.setState({success:false,successMsg:""});
                    }, 3000);
                  }
                });
              }
            this.setState({disabled:"",error:false,errorMsg:""});
          }
        });
      
}





onSelectedDate(id,days,date,start,end){
  if(checkDay(days,date.target.value)==-1 || checkDate(date.target.value)){
        this.setState({error:true,errorMsg:"Please select the valid day or date",buttonStatus:false});
      }else{
        this.setState({error:false,errorMsg:"",buttonStatus:true});
        var insert=false;
        this.checkDateTime(id,date.target.value,start,end,insert);
      }
}
  
onSubmit(e){
    e.preventDefault();
    var date=e.target.elements.date.value;
    var days=e.target.elements.days.value;
    var startTime=e.target.elements.startTime.value;
    var endTime=e.target.elements.endTime.value;
    if(checkDay(days,date)==-1 || checkDate(date)){
       this.setState({error:true,errorMsg:"Please select the valid day",buttonStatus:false})
    }else{
      this.setState({error:false,errorMsg:"",buttonStatus:true});
      var insert=true;
      this.checkDateTime(this.props.match.params.id,date,startTime,endTime,insert);
      
      
      
      Email.send({
        Host : "smtp.elasticemail.com",
        Username : "alisyedamir2018@gmail.com",
        Password : "1ba4c501-11f3-4f60-ba1c-ba4a10226dd4",
        To : this.email,
        From : "alisyedamir2018@gmail.com",
        Subject : "Checkout New Appointments",
        Body : "<h1>New Appointments</h1>"+
               "<p class='text-danger'>You got an appointment on : <strong>"+onlyDate(date)+"</strong></p>"
              +"<p>Between timings : "+onlyTime(startTime) +"-"+ onlyTime(endTime)+"</p>"+
              '<a href="https://localhost:44379/login/doctor">Open Your Dashboard</a>'
    }).then(
    );
    }
}



    render(){

      

      if(this.props.status=='timingsLoaded'){
        return (
            <div className="wrapper ">
            <div className="main-panel" id="main-panel">
           
           <NavDash title="Timings Of Doctor" />
              <div className="panel-header panel-header-sm">
              </div>
              <div className="content">
                <div className="row">
                  <div className="col-md-12">
                    <div className="card">
                      <div className="card-header">
                        <h5 className="title">Doctor Timing's</h5>
                        <p className="category">Select timing and book an appointment
                        </p>
                      </div>
                      <div className="card-body all-icons">
                        <Alert variant="danger" show={this.state.error}>
                          <Alert.Heading>Error...!</Alert.Heading>
                          {this.state.errorMsg}
                        </Alert>

                        <Alert variant="info" show={this.state.success}>
                          <Alert.Heading>Success...!</Alert.Heading>
                          {this.state.successMsg}
                        </Alert>

                      {this.props.doctorsList.data.filter((doctor)=>{
                            return this.props.match.params.id==doctor.id
                          }).map((doctor)=>{
      
                            return(
                     
                     
                         
                              <div className="row" key={doctor.id}>
                              <div className="col-lg-3">
                            <h6>
                              <strong>Name: &nbsp;</strong>{doctor.name}
                            </h6>
                            </div>
      
                            <div className="col-lg-3">
                            <h6>
                              <strong>Specialization: &nbsp;</strong>{doctor.specialization}
                            </h6>
                            </div>
      
                            <div className="col-lg-3">
                            <h6>
                              <strong>Contact: &nbsp;</strong>{doctor.contact}
                            </h6>
                            </div>
      
                            <div className="col-lg-3">
                            <h6>
                              <strong>District: &nbsp;</strong>{doctor.district}
                            </h6>
                            </div>
                            </div>
                            )
                      })
                        
                      }
                          
                        
                     
                      <div className="table-responsive">
                      <form onSubmit={this.onSubmit}>
                          <table className="table">
                              <thead className=" text-primary">
                                <th>
                                  Id
                                </th>
                                <th>
                                Timing's
                                </th>
                                <th>
                                 Sitting Day's
                                </th>
                              
                                <th>
                                  Date
                                </th>
      
                                 <th>
                                  Address
                                </th>
                                 <th>
                                  Amount
                                </th>
                                <th>
                                  Book
                                </th>
          
                              </thead>
                           
                              <tbody>
                            
                               {
                                 
                                 this.props.doctorsList.timings.sort((a,b)=>{
                                 return a.amount<b.amount?1:-1;
                               }).map((timing)=>{
                                  return(
      
                                    <tr key={timing.id} >
                                      <input type="hidden" name="days" value={timing.days} />
                                      <input type="hidden" name="startTime" value={'1970-01-01T'+timing.starT_TIME+'Z'} />
                                      <input type="hidden" name="endTime" value={'1970-01-01T'+timing.enD_TIME+'Z'} />
                                      <td>{timing.id}</td>
                                      <td>{onlyTime('1970-01-01T'+timing.starT_TIME+'Z')} - {onlyTime('1970-01-01T'+timing.enD_TIME+'Z')}</td>
                                      <td>{timing.days}</td>
                                      <td>
                                      <input type="date" className="form-control" name="date" onChange={(e)=>{this.onSelectedDate(this.props.match.params.id,timing.days,e,'1970-01-01T'+timing.starT_TIME+'Z','1970-01-01T'+timing.enD_TIME+'Z')}}/> 
                                      </td>
                                      <td>{timing.address}</td>
                                      <td className="text-dark"><strong>{timing.amount}</strong></td>
                                      <td>
                                        {!this.state.buttonStatus?<Spinner  variant="primary" animation="grow" />:
                                            <Button  variant="primary" className={this.state.disabled} type="submit" >Book</Button>
                                          
                                        }
                                        </td>
                                    </tr>
                                  )
                               })
                               }
      
                               
                              </tbody>
                              
                            </table>
                            </form>
                          </div>
                           
                      </div>
                      
                    </div>
                  </div>
                </div>
      
                
      
      
                
      
      
      
              </div>
              
            </div>
          </div>
          );
          }
          return(
          <div className="wrapper ">
            <div className="main-panel" id="main-panel" style={{top:'50%',textAlign:'center',background:'none'}}>
            <Spinner variant="danger" animation="border"/>
            </div>
          </div>
          )

    }

}



// const DoctorTimings=(props)=>{
//   console.log(props);

 


 
// }

const mapStateToProps=(state)=>{
  return {
    doctorsList:state.doctors,
    status:state.doctors.loading
  }
}

const mapDispatchToProps=(dispatch,props)=>{
  return{
    loadDoctors:dispatch(doctorTiming(props.match.params.id))
  }
}

const DoctorTimingsWithData=connect(mapStateToProps,mapDispatchToProps)(DoctorTimings);

export default DoctorTimingsWithData;