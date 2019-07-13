const readAppointments=({loading,data,feedbacks})=>{
    return {
        type:'READ',
        loading:loading,
        data:data,
        feedbacks:feedbacks
    }
}

const cancelAppointment=(id)=>{
    return{
        type:'CANCEL_STATUS',
        id:id
    }
}

const readVisitedDoctors=({loading,data,timings})=>{
    return{
        type:"VISITED_DOCTORS",
        loading:loading,
        data:data
    }
}

const doctorsList=({loading,data,timings})=>{
    return{
        type:"DOCTORS_LIST",
        loading:loading,
        data:data
    }
}

const doctorsTimings=({loading,timings})=>{
    return{
        type:"TIMINGS",
        loading:loading,
        timings:timings
    }
}

const filterTimings=({loading,filterTimings})=>{
    return{
        type:"DATE_TIME_APPOINTMENTS",
        loading:loading,
        filterTimings:filterTimings
    }
}

const addFeedback=()=>{
    return{
        type:'GIVE_FEEDBACK'
    }
}



const nameFilter=(name)=>{
    return{
        type:'NAME',
        name:name
    }
}



const addressFilter=(address)=>{
    return{
        type:'ADDRESS',
        address:address
    }
}



const districtFilter=(district)=>{
    return{
        type:'DISTRICT',
        district:district
    }
}


const specializationFilter=(specialization)=>{
    return{
        type:'SPECIALIZATION',
        specialization:specialization
    }
}



const experianceFilter=(experiance)=>{
    return{
        type:'EXPERIANCE',
        experiance:experiance
    }
}

const ListAppointmentsForDoctors=({data,loading})=>{
    return{
        type:'DOCTORS_APPOINTMENT',
        data:data,
        loading:loading
    }
}

const ListTimingsForDoctors=({data,loading})=>{
    return{
        type:'DOCTORS_SCHEDULE',
        timings:data,
        loading:loading
    } 
}

const AddTimings=({item})=>{
    return{
        type:'ADD_TIMINGS',
        item:item
    } 
}

const DeleteTiming=({id})=>{
    return{
        type:'DELETE_TIMING',
        id:id
    } 
}

const UpdateAppointment=({id,status_id})=>{
    return{
        type:'UPDATE_APPOINTMENT',
        id:id,
        status_id:status_id
    }
}


export {readAppointments,cancelAppointment,readVisitedDoctors,
        doctorsList,doctorsTimings,filterTimings,addFeedback,nameFilter,addressFilter,
      specializationFilter,districtFilter,experianceFilter,ListAppointmentsForDoctors,ListTimingsForDoctors,
    AddTimings,DeleteTiming,UpdateAppointment};