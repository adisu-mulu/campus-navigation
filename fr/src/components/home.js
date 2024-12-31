import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../components/style.css';
const home = () => {

    return (
        <div className="home">
            <h1 id="welcome-to-dilla">Welcome to Dilla University</h1>
            <div className="homeContainers">        
            <Container >
                <Row xs={2} md={4} lg={6}>
                    <Col>1 of 2</Col>
                    
                </Row>
                <Row xs={2} md={4} lg={6}>
                    <Col>1 of 2</Col>
                    
                </Row>
                <Row xs={2} md={4} lg={6}>
                    <Col>1 of 2</Col>
                    
                </Row>
              
            </Container>
            </div>

        </div>
    );

}

export default home;