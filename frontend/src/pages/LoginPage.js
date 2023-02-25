import {
  Col,
  Button,
  Container,
  Row,
  Form,
  Spinner,
  Alert,
} from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
      <Container>
        <Row className="mt-5 justify-content-md-center">
          <Col md={6}>
            <h1 md={6}>Login</h1>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicLastName">
                <Form.Label>Your last name</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="Enter your name"
                    name="lastName"
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your last name
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    required
                    type="password"
                    placeholder="Password"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                    name="doNotLogout"
                    type="checkbox"
                    label="Do not Logout"
                />
              </Form.Group>
              <Row className="pb-2">
                <Col>
                  Don't you have an account ?
                  <Link to={"/register"}>Register</Link>
                </Col>
              </Row>
              <Button variant="primary" type="submit">
                <Spinner
                    animation="border"
                    as="span"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
                Login
              </Button>
              <Alert show={true} variant="danger">
                Wrong credentials
              </Alert>
            </Form>
          </Col>
        </Row>
      </Container>
  );
};

export default LoginPage;
