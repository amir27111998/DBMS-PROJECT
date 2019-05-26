import React from 'react';
import ReactDOM from 'react-dom';
import NavRoutes from '../components/NavRoutes';
import {addDoctors} from '../actions/doctors';
import {store} from '../store/doctorStore';
import {applyFilters} from '../actions/filterDoctor';
import {getVisibleDoctors} from '../selectors/doctorFilter';
import Name from "../components/name"; 

store.subscribe(()=>{
    var state=store.getState();
    console.log(getVisibleDoctors(state.doctors,state.filters));
});

store.dispatch(addDoctors({name:"Aamir Ali",specialization:"Cardio",amount:890}));
store.dispatch(addDoctors({name:"Ali Farooqi",specialization:"Physision",amount:230}));
store.dispatch(addDoctors({name:"Umaiis Bhatti",specialization:"Physision",amount:970}));

store.dispatch(applyFilters({specialization:"Physision"}));

const users=
<div>
<Name k_name="Faizan" age="30" job="Manager"></Name>
<Name k_name="Ali" age="12" job="Peon"></Name>
<Name k_name="Umais" age="50" job="CEO"></Name>
<Name k_name="Aamir" age="20" job="Developer"></Name></div>;

ReactDOM.render(users,document.getElementById('umais'));
