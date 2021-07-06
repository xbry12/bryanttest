import React from "react";
import "../../css/auth.css";

//import components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Login({
  setUsername,
  setPassword,
  handleClose,
  username,
  password,
  dummyUser,
  handleAuth,
  setAuthRedirect
}) {
  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const loginHandler = (e) => {
    e.preventDefault();
    if (username !== "" && password !== "") {
      handleAuth(dummyUser);
      setAuthRedirect(true);
      handleClose();
    }
  };

  const forgotPassword = (e) => {
    console.log("forgot password");
  };

  return (
    <Container className="authContainer hidden">
      <Row>
        <Form className="authForm" onSubmit={loginHandler}>
          <Form.Label>Login</Form.Label>
          <Form.Group className="authUsernameGroup">
            <Form.Control
              size="lg"
              type="text"
              placeholder="Username"
              className="authUsernameControl"
              onChange={usernameHandler}
            />
          </Form.Group>
          <Form.Group className="authPasswordGroup">
            <Form.Control
              size="lg"
              type="password"
              placeholder="Password"
              className="authPasswordControl"
              onChange={passwordHandler}
            />
          </Form.Group>
          <Button
            className="authButton"
            size="lg"
            variant="primary"
            type="submit"
          >
            Log In
          </Button>
          <Button onClick={forgotPassword} id="authForgotPassword">
            Forgot your password?
          </Button>
        </Form>
      </Row>
    </Container>
  );
}
