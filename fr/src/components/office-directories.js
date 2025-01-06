//import React from 'react';
import React, { useState, useEffect } from "react";
import { Container, Tab, Tabs, Row, Col, Card, Table } from 'react-bootstrap';
import '../components/style.css';

function OfficeDirectories() {
 
  const [directoryData, setDirectory] = useState([]);
  const [offices, setOffice] = useState([]);

  useEffect(() => {
    // Fetch directory data from the backend
    fetch("http://127.0.0.1:5000/api/directory")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch directory data");
        }
        return response.json();
      })
      .then((data) => {
        setDirectory(data); // Store fetched data in state
      })
      .catch((error) => {
        console.error("Error fetching directory data:", error);
      });
  }, []);

  useEffect(() => {
    // Fetch directory data from the backend
    fetch("http://127.0.0.1:5000/api/offices")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch directory data");
        }
        return response.json();
      })
      .then((data) => {
        setOffice(data); // Store fetched data in state
      })
      .catch((error) => {
        console.error("Error fetching directory data:", error);
      });
  }, []);

  return (
    <Container className="office-directories-page py-5">
      <h1 className="text-center mb-4">University Offices & Directories</h1>
      <Tabs defaultActiveKey="offices" id="office-directories-tabs" className="mb-4">
        {/* Offices Tab */}
        <Tab eventKey="offices" title="Offices">
          <Row className="gy-4">
            {offices.map((office, index) => (
              <Col key={index} md={4}>
                <Card className="office-card">
                  <Card.Body>
                    <Card.Title>{office.name}</Card.Title>
                    <Card.Text>{office.description}</Card.Text>
                    <Card.Footer className="text-muted">
                      <small>{office.contact}</small>
                    </Card.Footer>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Tab>

        {/* Directories Tab */}
        <Tab eventKey="directories" title="Directories">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {directoryData.map((person, index) => (
                <tr key={index}>
                  <td>{person.name}</td>
                  <td>{person.position}</td>
                  <td>{person.email}</td>
                  <td>{person.phone}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Tab>
      </Tabs>
    </Container>
  );
}

export default OfficeDirectories;
