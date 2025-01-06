
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
// import Libraries from './components/libraries';
import '../components/style.css';
import { Link } from 'react-router-dom';

const Home = () => {
    const [news, setNews] = useState([]);
    const [announcements, setAnnouncements] = useState([]);

    useEffect(() => {
        // Fetch directory data from the backend
        fetch("http://127.0.0.1:5000/api/news")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch directory data");
                }
                return response.json();
            })
            .then((data) => {
                setNews(data); // Store fetched data in state
            })
            .catch((error) => {
                console.error("Error fetching directory data:", error);
            });
    }, []);


    useEffect(() => {
        // Fetch directory data from the backend
        fetch("http://127.0.0.1:5000/api/announcements")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch directory data");
                }
                return response.json();
            })
            .then((data) => {
                setAnnouncements(data); // Store fetched data in state
            })
            .catch((error) => {
                console.error("Error fetching directory data:", error);
            });
    }, []);
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
                        <Col md={4} className="featured-col">
                            <Link to="/libraries" className="featured-link">
                                <h3>Library</h3>
                                <p>A state-of-the-art facility for your learning and research needs.</p>
                            </Link>
                        </Col>
                        <Col md={4} className="featured-col">
                            <a href="/admin-offices" className="featured-link">
                                <h3>Administration Building</h3>
                                <p>Find all administrative offices and student services here.</p>
                            </a>
                        </Col>
                        <Col md={4} className="featured-col">
                            <a href="/sports-complex" className="featured-link">
                                <h3>Sports Complex</h3>
                                <p>Enjoy world-class sports facilities and recreational activities.</p>
                            </a>
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
                            {news.map((news, index) => (
                                <p key={index}>
                                    {news.news}
                                </p>
                            ))}
                            <a href=""><i>See more</i></a>
                        </Col>
                    </Row>
                </Container>
                <Container className="about-section py-4">
                    <Row className="mb-3">
                        <Col>
                            <h2>Announcements</h2>
                            {announcements.map((announcements, index) => (
                                <p key={index}>
                                    {announcements.announcements}
                                </p>
                            ))}
                            <a href=""><i>See more</i></a>
                        </Col>
                    </Row>
                </Container>
                <Container className="about-section py-4">
                    <Row className="mb-3">
                        <Col>
                            <h2>2017 Academic calendar</h2>
                            <p>
                                <a href="/Academic-Calendar-2017.pdf" target="_blank" rel="noopener noreferrer">
                                    Academic calendar 2017
                                </a>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );

}

export default Home;