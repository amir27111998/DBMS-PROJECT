import React from 'react';
import {Jumbotron,Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const notFound=()=>{
    return(
        <Container>
                <Jumbotron>
                    <h1 className="text-dark">404 ERROR!</h1>
                    <h3 className="text-danger">Page not found</h3>
                    <Link to="/" >Back to Home</Link>
                </Jumbotron>

        </Container>
    )
};

export default notFound;