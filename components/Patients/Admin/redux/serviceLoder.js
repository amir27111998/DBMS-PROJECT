import {readAppointments} from './actions';
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




export default loadAppointments;