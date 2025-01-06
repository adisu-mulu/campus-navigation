import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSignIn = async (e) => {
    e.preventDefault();
    // Add your sign-in logic here
    try {
        const response = await axios.post("http://127.0.0.1:5000/api/login", {
          username,
          password,
        });
              // Store the token
      localStorage.setItem("username", response.data.username);
         // Redirect to home page
         navigate("/student");
        } catch (err) {
          setError("Invalid username or password");
        }
      };
 


  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row>
        <Col>
          <Card style={{ width: "25rem", padding: "20px", borderRadius: "10px" }}>
            <Card.Body>
              <h2 className="text-center mb-4">Sign In</h2>
              <Form onSubmit={handleSignIn}>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="text"
                  
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                  Sign In
                </Button>
              </Form>
              <div className="mt-3 text-center">
                <p>
                  Don't have an account?{" "}
                  <a href="/signup" style={{ textDecoration: "none", color: "blue" }}>
                    Sign Up
                  </a>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;
