import {createStore} from 'redux'; 
import patientReducer from '../reducers/patient';

var store=createStore(patientReducer);
export default store;





// const patientStore={
// patients:[{
// id:uuid(),
// name:'SYED AAMIR ALI',
// father_name:'SYED MASOOD ALI',
// age:20,
// email:'alisyedamir2018@gmail.com',
// gender:'male',
// address:'C-236/1 Khudadad Colony Karachi.',
// password:'amirALI123$',
// picture:'amir.jpg',
// dob:amir,
// contact:'0304-5094429',
// blood_group:'B+'
// }]
// };

