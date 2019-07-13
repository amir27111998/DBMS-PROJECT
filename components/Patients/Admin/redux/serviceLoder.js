import {readAppointments,cancelAppointment,readVisitedDoctors,doctorsList,doctorsTimings
       ,addFeedback,ListAppointmentsForDoctors,ListTimingsForDoctors,AddTimings,
       DeleteTiming,UpdateAppointment} from './actions';

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

const doctorSchedule=(id)=>{
  return (dispatch)=>{
    var formData=new FormData();
    formData.append("ID",id);
    fetch("https://localhost:44379/api/Doctors/doctorTimings",{
      method:'POST',
      body:formData
    }).then(res=>res.json())
    .then((data)=>{
      dispatch(ListTimingsForDoctors({data,loading:"scheduleloaded"}));
    });
  }
}


const addTime=(user,e,start,end,days)=>{
  return (dispatch)=>{
    var address=e.target.elements.address.value;
    var amount=e.target.elements.amount.value;
    var formData=new FormData();
    formData.append("START_TIME",start);
    formData.append("END_TIME",end);
    formData.append("DISTRICT_ID",user.districT_ID);
    formData.append("ADDRESS",address);
    formData.append("DOCTOR_ID",user.id);
    formData.append("AMOUNT",amount);
    formData.append("DAYS",days);    
    fetch("https://localhost:44379/api/Doctors/NewTiming",{
      method:'POST',
      body:formData
    }).then(res=>res.json())
    .then((data)=>{
      days=days.join(',')
      var item={
        address: address,
        amount: amount,
        days: days,
        districT_ID: user.districT_ID,
        doctoR_ID: user.id,
        enD_TIME: end,
        id:data,
        starT_TIME: start
      };
     dispatch(AddTimings({item}));
    });
  }
}


const deleteTime=(id,start,end)=>{
  return (dispatch)=>{
    var user=JSON.parse(sessionStorage.getItem('doctor'));
    var formData=new FormData();
    formData.append("data",[id,start,end,user.id]);    
    fetch("https://localhost:44379/api/Doctors/DeleteTiming",{
      method:'POST',
      body:formData
    }).then(res=>res.json())
    .then((data)=>{
     dispatch(DeleteTiming({id}));
    });
  }
}


const UpdateApp=(id,statusID)=>{
  return (dispatch)=>{
    var formData=new FormData();
    formData.append("data",[id,statusID]);
    fetch("https://localhost:44379/api/Doctors/UpdateStatus",{
      method:"POST",
      body:formData
    }).then(res=>res.json())
    .then((data)=>{
      if(data!=0){
        dispatch(UpdateAppointment({id,statusID}));
      }
    });
  }
}


export {loadAppointments,updateAppointment,loadVisitedDoctors,
  ListAppointments,listOfDoctors,doctorTiming,giveFeedback,doctorSchedule,addTime,deleteTime,
UpdateApp};