import React, { useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import axios from "axios";
// import Message from "../layout/Message";
// import Loader from "../layout/Loader";
export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  //   const [isSend, setIsSend] = useState(false);
  //   const [error, setError] = useState(null);
  //   const [loading, setLoading] = useState(false);

  const mailHandler = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    await axios.post("/api/mails", { name, email, message }, config);
    // console.log(res.data)
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <Row id="contact">
      <Col lg={12}>
        <h1>Contact</h1>
      </Col>
      <Col lg={12}>
        <Form className="justify-content-center">
          <Form.Group controlId="name">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              rows={3}
              placeholder="Please, leave a message..."
              name="message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={mailHandler}>
            Contact me
          </Button>
        </Form>
      </Col>
    </Row>
  );
}
