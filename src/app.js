import React from 'react';
import ReactDOM from 'react-dom';
import NavRoutes from '../components/NavRoutes';
import {Provider} from 'react-redux';



// store.subscribe(()=>{
//     var sta=store.getState();
//     console.log(sta);
// });

//store.dispatch(login('alisyedamir2018@gmail.com','amirALI123$'));

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








// store.dispatch(add(first_patient));
// store.dispatch(add(second_patient));
// store.dispatch(update(first_patient.id,{name:"Umais Bhatti",father_name:"Kalim Bhatti",age:23}))
// store.dispatch(remove(first_patient.id));



ReactDOM.render(<NavRoutes />,document.getElementById('app'));
