const add=({id=0,name='',father_name='',age=0,email='',gender='',address='',password='',
picture='',dob='',contact='',blood_group=''}={})=>{
    var data={
        id:id,
        name:name,
        father_name:father_name,
        age:age,
        email:email,
        gender:gender,
        address:address,
        password:password,
        picture:picture,
        dob:dob,
        contact:contact,
        blood_group:blood_group
        };
    return({type:'ADD_PATIENTS',patient:data});
};

const remove=(id='')=>{
return({type:'DELETE_PATIENTS',id:id});
};

const loading=(id)=>{
return ({type:'LOADING_DATA',data:id});
};


const update=(id='',data={})=>{
return({type:'UPDATE_PATIENTS',id:id,data:data});
};

export {add, remove, update,loading};