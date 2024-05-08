// pages/index.js
"use client";

import {
  Container,
  Navbar,
  Nav,
  Button,
  Row,
  Col,
  Card,
  Form,
} from "react-bootstrap";

import {
  HiOutlineLightBulb,
  HiOutlinePuzzle,
  HiOutlineCurrencyDollar,
  HiOutlineInformationCircle,
  HiOutlineCheckCircle,
  HiOutlineChartBar,
  HiOutlineUserGroup,
  HiOutlineCash,
} from "react-icons/hi";

export default function Home() {
  return (
    <>
      <section className="hero bg-primary text-white py-5 text-center">
        <Container>
          <HiOutlineLightBulb size={50} className="mb-3" />
          <h1>Transform Your Business with Our SaaS Platform</h1>
          <p className="mb-4">
            Empowering businesses worldwide with cutting-edge tools to
            streamline workflows, enhance collaboration, and drive growth.
          </p>
          <Button variant="light" size="lg" className="me-3">
            Get Started
          </Button>
          <Button variant="outline-light" size="lg">
            Learn More
          </Button>
        </Container>
      </section>

      <section id="features" className="py-5">
        <Container>
          <h2 className="text-center mb-4">
            Powerful Features to Accelerate Your Growth
          </h2>
          <p className="text-center mb-5">
            Our platform offers a comprehensive suite of tools to simplify,
            streamline, and automate your workflow.
          </p>
          <Row>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <HiOutlineCheckCircle
                    size={30}
                    className="text-primary mb-3"
                  />
                  <Card.Title>Feature One: Automated Workflow</Card.Title>
                  <Card.Text>
                    Streamline your tasks with automated workflows that reduce
                    manual input and enhance productivity.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <HiOutlineChartBar size={30} className="text-primary mb-3" />
                  <Card.Title>Feature Two: Intuitive Analytics</Card.Title>
                  <Card.Text>
                    Gain actionable insights with our intuitive analytics
                    dashboards that drive data-based decisions.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <HiOutlineUserGroup size={30} className="text-primary mb-3" />
                  <Card.Title>Feature Three: Enhanced Collaboration</Card.Title>
                  <Card.Text>
                    Collaborate seamlessly with your team using our powerful
                    communication and project management tools.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="pricing" className="bg-light py-5">
        <Container>
          <h2 className="text-center mb-4">Affordable Pricing Plans</h2>
          <p className="text-center mb-5">
            Choose a pricing plan that suits your business needs and budget. No
            hidden fees or extra costs.
          </p>
          <Row>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <HiOutlineCash size={30} className="text-primary mb-3" />
                  <Card.Title>Basic Plan</Card.Title>
                  <Card.Text>
                    Ideal for small businesses starting their digital
                    transformation journey.
                  </Card.Text>
                  <h3>$9.99/month</h3>
                  <Button variant="primary">Sign Up</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <HiOutlineCash size={30} className="text-primary mb-3" />
                  <Card.Title>Standard Plan</Card.Title>
                  <Card.Text>
                    Perfect for growing businesses looking to scale their
                    operations.
                  </Card.Text>
                  <h3>$19.99/month</h3>
                  <Button variant="primary">Sign Up</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <HiOutlineCash size={30} className="text-primary mb-3" />
                  <Card.Title>Premium Plan</Card.Title>
                  <Card.Text>
                    Best for established businesses with advanced needs and
                    custom requirements.
                  </Card.Text>
                  <h3>$29.99/month</h3>
                  <Button variant="primary">Sign Up</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="about" className="py-5">
        <Container>
          <h2 className="text-center mb-4">About Us</h2>
          <Row>
            <Col md={6}>
              <HiOutlineInformationCircle
                size={30}
                className="text-primary mb-3"
              />
              <h3>Our Mission</h3>
              <p>
                Our mission is to empower businesses worldwide with
                state-of-the-art SaaS solutions designed to simplify processes
                and boost productivity.
              </p>
            </Col>
            <Col md={6}>
              <HiOutlinePuzzle size={30} className="text-primary mb-3" />
              <h3>Our Vision</h3>
              <p>
                We envision a world where innovative and user-friendly software
                is accessible to all industries, driving a new era of business
                efficiency.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="testimonials" className="py-5">
        <Container>
          <h2 className="text-center mb-4">What Our Customers Are Saying</h2>
          <Row>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Text>
                    "The SaaS platform transformed our workflow and has greatly
                    improved our team's productivity!"
                  </Card.Text>
                  <Card.Subtitle className="mt-4">
                    — Sarah Johnson, CEO at TechCorp
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Text>
                    "A game-changer for our organization! Their analytics
                    dashboards provide invaluable insights."
                  </Card.Text>
                  <Card.Subtitle className="mt-4">
                    — Mike Smith, Head of Analytics at FinTech
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Text>
                    "Highly intuitive and effective SaaS solution for
                    collaboration and productivity!"
                  </Card.Text>
                  <Card.Subtitle className="mt-4">
                    — Lisa Brown, Project Manager at InnovateX
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        id="newsletter"
        className="bg-primary text-white py-5 text-center"
      >
        <Container>
          <h2>Stay Updated with Our Latest News</h2>
          <p className="mb-4">
            Subscribe to our newsletter for industry insights, tips, and product
            updates!
          </p>
          <Form className="d-flex justify-content-center">
            <Form.Control
              type="email"
              placeholder="Enter your email"
              className="me-2 w-50"
            />
            <Button variant="light">Subscribe</Button>
          </Form>
        </Container>
      </section>
    </>
  );
}
