import Form from "react-bootstrap/FormGroup";

var initialization={
    dashboardData:{
        Data:[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0]
    },
    doctorsList:{},
    appointmentHistory:[],
    visitedDoctors:[]
};

//Utility Functions
const DashboardData=(data)=>{
    
    for (let i = 0; i < data.length; i++) {
        var Da=new Date(data[i].apP_DATETIME);
        initialization.dashboardData.Data[Da.getMonth()]=i;
    }
    return initialization;
};


const patientReducer=(state=initialization,action)=>{
    switch(action.type){
        case 'ADD_PATIENTS':
        return state.concat([action.patient]);

        case 'UPDATE_PATIENTS':
        state.forEach((patient)=>{
            if (patient.id==action.id){
                patient.name=action.data.name != null ? action.data.name : patient.name;
                patient.father_name=action.data.father_name != null ? action.data.father_name : patient.father_name;
                patient.age=action.data.age != null ? action.data.age : patient.age;
                patient.email=action.data.email != null ? action.data.email : patient.email;
                patient.gender=action.data.gender != null ? action.data.gender : patient.gender;
                patient.address=action.data.address != null ? action.data.address : patient.address;
                patient.password=action.data.password != null ? action.data.password : patient.password;
                patient.picture=action.data.picture != null ? action.data.picture : patient.picture;
                patient.dob=action.data.dob != null ? action.data.dob : patient.dob;
                patient.contact=action.data.contact != null ? action.data.contact : patient.contact;
                patient.blood_group=action.data.blood_group != null ? action.data.blood_group : patient.blood_group;                
            }
        });
        return state;

        case 'DELETE_PATIENTS':
        var id=action.id;
        var index=0;
        state.forEach((patient)=>{
            if (patient.id==id){
                state.splice(index,index+1);
                return state;
            }
            index++;
        });
        return state;



        //loading Current Patient Data
        case 'LOADING_DATA':
        var data=action.data;
        var formId=new FormData();
        formId.append('id',data);
           fetch("https://localhost:44379/api/Patients/AppointmentData",{
            method:"POST",
            body:formId
        })
        .then(response=>response.json())
        .then((data)=>{
            //console.log(data)
            var ss=DashboardData(data);
            state=ss;
            state.appointmentHistory=data;
        });
           
      
        
        return state;

        //Loading End

        default:
        return state;
    }

};

export default patientReducer;