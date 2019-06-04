const loadData=()=>{
    read({loading:true,data:[]});
    var formId=new FormData();
      formId.append('id',1);
      return (dispatch)=>{fetch("https://localhost:44379/api/Patients/AppointmentData",{
            method:"POST",
            body:formId
        })
        .then(response=>response.json())
        .then((data)=>{
            dispatch(read({loading:false,data:data}));
        });
       }
};
const read=(data)=>{
     return{
         type:'READ',
         data:data
     }
}

const add=(data)=>{
    
    return {type:'ADD',data:data}
}

export {add, read,loadData};