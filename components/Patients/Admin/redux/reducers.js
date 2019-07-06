const appointmentReducer=(state={data:[1,2,3],loading:true,feedbacks:[]},action)=>{
    switch(action.type){
    case 'READ':
        return {data:action.data,loading:action.loading,feedbacks:action.feedbacks};
    
    case 'CANCEL_STATUS':
        return {data:state.data.filter((data)=>data.id!==action.id),loading:state.loading,feedbacks:state.feedbacks};
    case 'GIVE_FEEDBACK':
        return state;
    default:
            return {data:state.data,loading:state.loading,feedbacks:state.feedbacks};
    
    }
}

const doctorsReducer=(state={data:[],loading:true,timings:[]},action)=>{
    switch(action.type){
        case "VISITED_DOCTORS":
            return {data:action.data,loading:false}
        case "DOCTORS_LIST":
            return {data:action.data,loading:action.loading}
        case "TIMINGS":
            return {data:state.data,timings:action.timings,loading:action.loading}
        case "DATE_TIME_APPOINTMENTS":
            return {data:state.data,timings:state.timings,filterTimings:action.filterTimings,loading:action.loading}
        default:
            return state;
    }
};

var filtersInitialState={name:"",address:"",district:0,specialization:0,experiance:0};

const filterReducer=(state=filtersInitialState,action)=>{
    switch(action.type){
     case 'NAME':
         return {name:action.name,address:state.address,district:state.district,specialization:state.specialization,experiance:state.experiance};
     case 'ADDRESS':
         return {name:state.name,address:action.address,district:state.district,specialization:state.specialization,experiance:state.experiance};
     case 'DISTRICT':
         return {name:state.name,address:state.address,district:action.district,specialization:state.specialization,experiance:state.experiance};
     case 'SPECIALIZATION':
         return {name:state.name,address:state.address,district:state.district,specialization:action.specialization,experiance:state.experiance};
     case 'EXPERIANCE':
         return {name:state.name,address:state.address,district:state.district,specialization:state.specialization,experiance:action.experiance};


     default:
         return state;
    }
}

const DoctorsAppointment=(state={data:[],loading:true},action)=>{
    switch(action.type){
        case "DOCTORS_APPOINTMENT":
            return {data:action.data,loading:action.loading}
        default:
            return state;
    }
}

export {appointmentReducer,doctorsReducer,filterReducer,DoctorsAppointment};

    
