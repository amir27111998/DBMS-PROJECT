import React from 'react';
import SideBar from './Sidebar';
import {Redirect} from 'react-router-dom';
import '../loadingFiles';


const Admin=(props)=>{
if(!sessionStorage.getItem('isDoctor')){
        return <Redirect to="/login/doctor"/>
}        
 else{


        return   <SideBar />

}
};


export default Admin;