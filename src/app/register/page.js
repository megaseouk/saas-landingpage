"use client";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import Link from "next/link";

export default function Signup() {
  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center vh-100"
    >
      <Row>
        <Col md={12}>
          <Card className="p-4">
            <Card.Body>
              <Card.Title className="text-center mb-4">
                Create Your Account
              </Card.Title>
              <Form>
                <Form.Group controlId="formBasicName" className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail" className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group
                  controlId="formBasicConfirmPassword"
                  className="mb-3"
                >
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 mb-3">
                  Sign Up
                </Button>
                <Form.Text className="text-center">
                  Already have an account? <Link href="/login">Login</Link>
                </Form.Text>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
