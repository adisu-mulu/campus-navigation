import React from 'react';
import { Container, Tab, Tabs, Row, Col, Card, Table } from 'react-bootstrap';
import '../components/style.css';

function OfficeDirectories() {
  const offices = [
    {
      name: 'Admissions Office',
      description: 'Handles student applications, enrollment, and related queries.',
      contact: 'Email: admissions@dillauni.edu | Phone: +251-123-456-789',
    },
    {
      name: 'Finance Office',
      description: 'Manages tuition payments, scholarships, and financial aid.',
      contact: 'Email: finance@dillauni.edu | Phone: +251-987-654-321',
    },
    {
      name: 'Student Affairs',
      description: 'Supports student well-being, housing, and extracurricular activities.',
      contact: 'Email: student.affairs@dillauni.edu | Phone: +251-345-678-910',
    },
  ];

  const directoryData = [
    { name: 'Dr. John Doe', position: 'Dean of Science', email: 'john.doe@dillauni.edu', phone: '+251-123-456-789' },
    { name: 'Prof. Jane Smith', position: 'Head of Arts Department', email: 'jane.smith@dillauni.edu', phone: '+251-987-654-321' },
    { name: 'Mr. Samuel Green', position: 'Registrar', email: 'samuel.green@dillauni.edu', phone: '+251-345-678-910' },
  ];

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
