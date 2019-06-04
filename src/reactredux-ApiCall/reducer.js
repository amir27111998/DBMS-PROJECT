

const DataReducer=(state={status:true,data:[1,2,3]},action)=>{
    switch(action.type){
        case 'READ':
        state.data=action.data.data;
        return {status:action.data.loading,data:state.data}
        
        case 'ADD':
        return {data:state.data.concat(action.data)}

        default:
            return state;       
    }
}

export default DataReducer;