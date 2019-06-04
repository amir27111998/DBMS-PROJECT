import React,{Component} from 'react';
import {read, loadData} from './action';
import {connect} from 'react-redux';

const ReadData=(props)=>{
    
    

   
    
    return(
        <div>
            
            {props.data.map((item)=>{
                return(
                    
            <div>
            <h1>{item.id}</h1>
            <p>{item.doctoR_NAME}</p>

            </div>
                )
            })}
        </div>)
    };


const mapStateToProps=(state)=>{
    return{
        data:state.dataReducer.data
    }
}

const mapDispatchToProps=(dispatch)=>{
    return dispatch(loadData)
}


const ReadApp=connect(mapStateToProps,mapDispatchToProps)(ReadData);

export default ReadApp;