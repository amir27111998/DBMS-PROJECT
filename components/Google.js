import React from 'react';
import {Alert,Col} from 'react-bootstrap';
import  {Link}  from 'react-router-dom';

const google=(props)=>{
    console.log(props);
    return( 
    <Col lg={{span:6,offset:3}} >
    <Alert variant="warning">
        <Alert.Heading>Google</Alert.Heading>
        <p>Passing the id {props.match.params.id}</p>
        <Link to="/" >Back to Home</Link>
    </Alert>
    </Col>
    )
    };

export default google;