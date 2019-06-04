var filterInitials={
    name:'',
    specialization:'',
    amount:0
};

const filterDoctors=(state=filterInitials,action)=>{
    switch(action.type){
        case 'FILTER':
         return {name:action.name,specialization:action.specialization,amount:action.amount};
        
        default:
            return state;
    }
};
export default filterDoctors;