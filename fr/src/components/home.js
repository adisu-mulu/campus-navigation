import React from 'react';

import { Container, Row, Col, Button } from 'react-bootstrap';
import '../components/style.css';
const home = () => {

    return (
        <div className="home">


            {/* About Section */}
            <div className="homeContainers">
                <Container className="about-section py-4">
                    <Row className="mb-3">
                        <Col>
                            <h2>Welcome to the university of green land</h2>
                            <p>
                                Dilla University is a vibrant institution dedicated to excellence in education and research. Explore our beautiful campus and find all the information you need about facilities, departments, and more.
                            </p>
                        </Col>
                    </Row>
                </Container>

               

                {/* Featured Section */}
                <Container className="featured-section py-4">
                    <h2 className="text-center">Featured Locations</h2>
                    <Row>
                        <Col md={4} className="text-center">
                            <h3>Library</h3>
                            <p>A state-of-the-art facility for your learning and research needs.</p>
                        </Col>
                        <Col md={4} className="text-center">
                            <h3>Administration Building</h3>
                            <p>Find all administrative offices and student services here.</p>
                        </Col>
                        <Col md={4} className="text-center">
                            <h3>Sports Complex</h3>
                            <p>Enjoy world-class sports facilities and recreational activities.</p>
                        </Col>
                    </Row>
                </Container>
                 {/* Quick Links Section */}
                 <Container className="quick-links py-4">
                    <Row>
                        <Col md={4}>
                            <Button variant="primary" size="lg" className="w-100">
                                Number of campuses: 5
                            </Button>
                        </Col>
                        <Col md={4}>
                            <Button variant="success" size="lg" className="w-100">
                                Number of colleges: 7
                            </Button>
                        </Col>
                        <Col md={4}>
                            <Button variant="warning" size="lg" className="w-100">
                                <p>Number of remedial intake: 4000</p>
                                <p>Number of fresh intake: 3400</p>
                            </Button>
                        </Col>
                    </Row>
                </Container>
                <Container className="about-section py-4">
                    <Row className="mb-3">
                        <Col>
                            <h2>Latest News</h2>
                            <p>
                                Freshmen students will be joining on...
                            </p>
                        </Col>
                    </Row>
                </Container>
                <Container className="about-section py-4">
                    <Row className="mb-3">
                        <Col>
                            <h2>Announcements</h2>
                            <p>
                                Dilla university has moved its main campus to samara
                            </p>
                        </Col>
                    </Row>
                </Container>
                <Container className="about-section py-4">
                    <Row className="mb-3">
                        <Col>
                            <h2>2017 Academic calendar</h2>
                            <p>
                                Academic calendar
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );

}

export default home;