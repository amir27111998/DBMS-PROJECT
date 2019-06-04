const readAppointments=({loading,data,feedbacks})=>{
    return {
        type:'READ',
        loading:loading,
        data:data,
        feedbacks:feedbacks
    }
}

export {readAppointments};