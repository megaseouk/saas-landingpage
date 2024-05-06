"use client";

import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import Link from "next/link";

export default function Login() {
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
                Login to Your Account
              </Card.Title>
              <Form>
                <Form.Group controlId="formBasicEmail" className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 mb-3">
                  Login
                </Button>
                <Form.Text className="text-center">
                  Don&apos;t have an account?{" "}
                  <Link href="/signup">Sign Up</Link>
                </Form.Text>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
