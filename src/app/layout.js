"use client";

import React from "react";

import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
// import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import { Container, Navbar, Nav, Button, Row, Col } from "react-bootstrap";
import { HiOutlineLightBulb } from "react-icons/hi";

import {
  FaFacebook,
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "SaaS Company",
//   description: "The best SaaS Solution",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>SaaS Company</title>
      </head>
      <body className={inter.className}>
        <Container fluid className="p-0">
          <header>
            <Navbar bg="dark" variant="dark" expand="lg">
              <Container>
                <Navbar.Brand href="/" className="d-flex align-items-center">
                  <HiOutlineLightBulb size={30} className="me-2" />
                  SaaS Company
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto">
                    <Nav.Link href="/#features">Features</Nav.Link>
                    <Nav.Link href="/#pricing">Pricing</Nav.Link>
                    <Nav.Link href="/#about">About</Nav.Link>
                    <Nav.Link href="/#testimonials">Testimonals</Nav.Link>
                    <Nav.Link href="/#newsletter">Newlestter</Nav.Link>
                    <Nav.Link href="/login">
                      <Button variant="outline-light" className="ms-3">
                        Login
                      </Button>
                    </Nav.Link>
                    <Nav.Link href="/register">
                      <Button variant="outline-light" className="ms-3">
                        Sign Up
                      </Button>
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </header>
          <main>{children}</main>
          <footer className="bg-dark text-white text-center py-3">
            <Container>
              <Row>
                <Col md={12}>
                  <p>&copy; 2024 SaaS Company. All rights reserved.</p>
                  <div className="d-flex justify-content-center">
                    <FaFacebook size={30} className="text-white me-3" />
                    <FaTwitterSquare size={30} className="text-white me-3" />
                    <FaInstagramSquare size={30} className="text-white me-3" />
                    <FaLinkedin size={30} className="text-white me-3" />
                  </div>
                </Col>
              </Row>
            </Container>
          </footer>
        </Container>
      </body>
    </html>
  );
}
