import React from 'react';
import {Alert,Col} from 'react-bootstrap';
import  {Link}  from 'react-router-dom';

const User=()=>{
return( 
<Col lg={{span:6,offset:3}} >
<Alert variant="danger">
    <Alert.Heading>Users</Alert.Heading>
    <p>He is a nice Boy</p>
    <Link to="/google" > Go to google</Link>
</Alert>
</Col>
)
};

export default User;