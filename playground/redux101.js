import {createStore,combineReducers} from 'redux';
import uuid from 'uuid';

var initialDoctors=[]

const addDoctors=({id=uuid(),name='',specialization='',amount=0}={})=>({
    type:'ADD_DOCTOR',
    doctor:{
        id,
        name,
        specialization,
        amount
    }});

const applyFilters=({name=null,specialization=null,amount=0})=>({
type:'FILTER',
name:name,
specialization:specialization,
amount:amount
});

// Defining Reducers
const doctorsReducer=(state=initialDoctors,action)=>{
    switch(action.type){
        case 'ADD_DOCTOR':
        return state.concat(action.doctor);
        default:
            return state;
    }
};

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

var store=createStore(
    combineReducers({
        doctors:doctorsReducer,
        filters:filterDoctors
    })
);

const getVisibleDoctors=(doctors=[],{name="",specialization="",amount=0}) => {
    return doctors.filter((doctor)=>{
        var nameCon= name==doctor.name || !name;
        var specializationCon= specialization==doctor.specialization || !specialization;
        return nameCon && specializationCon;
    }).sort((doctor)=>{
        return amount > doctor.amount ? -1 : 1;
    });
};

store.subscribe(()=>{
    console.log(store.getState());
    console.log(getVisibleDoctors(store.getState().doctors,store.getState().filters))
});

store.dispatch(addDoctors({name:"Syed Aamir Ali",specialization:"Cardio",amount:100}));

store.dispatch(addDoctors({name:"Ali Farooqi",specialization:"Physiologist",amount:1021}));

store.dispatch(addDoctors({name:"Umais Bhatti",specialization:"Physiologist",amount:1000}));

store.dispatch(applyFilters({amount:2000}));



// Patients Root Array
const doctorsData={
doctors:[
    {
        id:uuid(),
        name:'Syed Aamir Ali',
        specialization:'Cardio',
        amount:50000
    }
],
filters:{
    name:undefined,
    specialization:undefined,
    amount:0
}
};