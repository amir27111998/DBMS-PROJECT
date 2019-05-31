import React from 'react';
import ReactDOM from 'react-dom';
import NavRoutes from '../components/NavRoutes';
import {add,remove,update} from '../actions/patients';
import store from '../store/patientStore';
import uuid from 'uuid';


// store.subscribe(()=>{
//     var sta=store.getState();
//     console.log(sta);
// });

// var amir=new Date(1998,10,27);
// var first_patient={
//     id:uuid(),
//     name:'SYED AAMIR ALI',
//     father_name:'SYED MASOOD ALI',
//     age:20,
//     email:'alisyedamir2018@gmail.com',
//     gender:'male',
//     address:'C-236/1 Khudadad Colony Karachi.',
//     password:'amirALI123$',
//     picture:'amir.jpg',
//     dob:amir,
//     contact:'0304-5094429',
//     blood_group:'B+'
//     };




// var faiz=new Date(2001,3,25);
// var second_patient={
//     id:uuid(),
//     name:'SYED FAIZAN ALI',
//     father_name:'SYED MASOOD ALI',
//     age:18,
//     email:'alisyedfaizan123@gmail.com',
//     gender:'male',
//     address:'C-236/1 Khudadad Colony Karachi.',
//     password:'AMIRali123$',
//     picture:'faiz.jpg',
//     dob:faiz,
//     contact:'0313-2099657',
//     blood_group:'B+'
//     };



// store.dispatch(add(first_patient));
// store.dispatch(add(second_patient));
// store.dispatch(update(first_patient.id,{name:"Umais Bhatti",father_name:"Kalim Bhatti",age:23}))
// store.dispatch(remove(first_patient.id));

ReactDOM.render(<NavRoutes/>,document.getElementById('app'));
