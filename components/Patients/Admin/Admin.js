import React from 'react';
import SideBar from './Sidebar';
import {Redirect} from 'react-router-dom';
import '../loadingFiles';


const Admin=(props)=>{
if(!sessionStorage.getItem('isPatient')){
        return <Redirect to="/login/patient"/>
}        
 else{


        return   <SideBar />

}
};


export default Admin;