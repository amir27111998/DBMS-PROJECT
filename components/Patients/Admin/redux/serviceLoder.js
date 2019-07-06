import {readAppointments,cancelAppointment,readVisitedDoctors,doctorsList,doctorsTimings
       ,addFeedback,ListAppointmentsForDoctors} from './actions';
const loadAppointments=(id)=>{
    return (dispatch)=>{
    var formId=new FormData();
    formId.append('id',id);
    fetch("https://localhost:44379/api/Patients/AppointmentData",{
              method:"POST",
              body:formId
    }).then(response=>response.json())
    .then((data)=>{
      fetch("https://localhost:44379/api/Patients/Feedbacks/"+id,{
      }).then(response=>response.json())
      .then((feedbacks)=>{
        dispatch(readAppointments({loading:false,data:data,feedbacks:feedbacks}));  
  });
     
    });
    }
};

const updateAppointment=(id)=>{
  var formId=new FormData();
    formId.append('id',id);
  return(dispatch)=>{
    fetch("https://localhost:44379/api/Patients/CancelAppointment",{
      method:'POST',
      body:formId
    })
    .then(res=>res.json())
    .then((data)=>{
        dispatch(cancelAppointment(id));
    })
  }
}

const loadVisitedDoctors=(id)=>{

    return (dispatch)=>{
      fetch("https://localhost:44379/api/Patients/VisitedDoctors/"+id)
    .then(res=>res.json())
    .then((data)=>{
      dispatch(readVisitedDoctors({loading:false,data:data,timings:[]}));
    })
  }
}

const listOfDoctors=()=>{
  return(dispatch)=>{
    fetch("https://localhost:44379/api/Patients/ListDoctors")
    .then(res=>res.json())
    .then((data)=>{
      dispatch(doctorsList({loading:false,data:data,timings:[]}))
    })
  }
}

const doctorTiming=(id)=>{
  return(dispatch)=>{
    fetch("https://localhost:44379/api/Patients/DoctorTimings/"+id)
    .then(res=>res.json())
    .then((data)=>{
      dispatch(doctorsTimings({loading:'timingsLoaded',timings:data}));
    })
  }
}


const giveFeedback=(comment,rating_id,app_id)=>{
  var formData=new FormData();
  formData.append("COMMENT",comment);
  formData.append("RATING_ID",rating_id);
  formData.append("APPOINTMENT_ID",app_id);
  return(dispatch)=>{
      fetch("https://localhost:44379/api/Patients/giveFeedback",{
        method:'POST',
        body:formData
      }).then(res=>res.json())
      .then((data)=>{
        dispatch(addFeedback());
      });

  }
}



const ListAppointments=(id)=>{
  return (dispatch)=>{
    var Id=new FormData();
    Id.append("ID",id); 
    fetch("https://localhost:44379/api/Doctors/ListAppointments",{
      method:"POST",
      body:Id
    })
    .then(res=>res.json())
    .then((data)=>{
      dispatch(ListAppointmentsForDoctors({data:data,loading:false}));
    }).catch((exception)=>{
      console.log(exception);
    });
  }
}


export {loadAppointments,updateAppointment,loadVisitedDoctors,
  ListAppointments,listOfDoctors,doctorTiming,giveFeedback};