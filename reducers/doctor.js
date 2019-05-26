var initialDoctors=[];
export const doctorsReducer=(state=initialDoctors,action)=>{
    switch(action.type){
        case 'ADD_DOCTOR':
        return state.concat(action.doctor);
        default:
            return state;
    }
};