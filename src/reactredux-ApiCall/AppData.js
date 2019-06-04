import React,{Component} from 'react';
import {read,add,loadData} from './action';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {BrowserRouter,Route,Link} from 'react-router';
import New from './newState';
import { Spinner } from 'react-bootstrap';

const AppData=(props)=>{
    
    

    const AddItems=(e)=>{
        e.preventDefault();
        props.dispatch(add([2,3,6]));
        
    }

    const data=()=>{
        if(props.loading)
        {
            return <Spinner variant="danger" animation="border" />;
        }  
        return(props.data.map((item)=>{
            return(
                    
            <div key={item.id}>
             <h1>{item.id}</h1>
            <p>{item.doctoR_NAME}</p>

            </div>
                )
            }))
    }
    
    
    return(
        
        <div>
            <New/>
            <form onSubmit={AddItems}>
                <input type="submit"  value="Ok"/>
            </form>
            {
                data()
              }
            

        </div>
        )
    };


const mapStateToProps=(state)=>{
    return{
        data:state.dataReducer.data,
        loading:state.dataReducer.status
    }
}




const App=connect(mapStateToProps)(AppData);

export default App;