import {createStore} from 'redux';


const add=({id=10}={})=>({type:'ADD',id});
const fetch=()=>({type:'FETCH'});

const demo=createStore((state={id:10},action)=>{

    switch(action.type){
        case 'FETCH':
            return {
                id:state.id
            };
        case 'ADD':
            return{
                id:action.id
            };
        default:
            return state;    
    }


});



const unsubscribe=demo.subscribe(()=>{
    console.log(demo.getState());
});


demo.dispatch(add());

demo.dispatch(add({id:12}));

demo.dispatch(add());

demo.dispatch(add({id:1200}));

demo.dispatch(fetch());

demo.dispatch(add({id:80}));





