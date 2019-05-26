//Object Destructing

var person = {
    name:'Aamir',
    age:90,
    location:{
        city:'Karachi',
        temp:50
    }
};

var {name:Name,age:Age}=person;
var {city,temp:temprature}=person.location;
console.log('Name: '+Name+' and Age: '+Age+'');
console.log('City: '+city+' and Temprature: '+temprature+'');



//Array Destructing

//movies list
var arr=[['Venom','Tom Hardy'],['Bahubali','Prabhas']];
arr.forEach((item)=>{
    const [movie,actor]=item;
    console.log(movie,actor);
});
