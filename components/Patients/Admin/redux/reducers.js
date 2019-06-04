const appointmentReducer=(state={data:[1,2,3],loading:true,feedbacks:[]},action)=>{
    switch(action.type){
    case 'READ':
        return {data:action.data,loading:action.loading,feedbacks:action.feedbacks};
    
    
    default:
        return state;
    }
}

export {appointmentReducer};

    
