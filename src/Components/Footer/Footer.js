import React from "react";
import styled from "@emotion/styled";
import { Container, Col, Row } from "react-bootstrap";
import { FaFacebook, FaDiscord, FaTwitter, FaInstagram } from "react-icons/fa";
import "../../css/footer.css";

const StyledFooter = styled.div`
  background-color: var(--color-green);
  padding: 2rem;
  height: 20%;
  width: 100%;
  margin-top: 100%;
  border-radius: 30%/100px 100px 0 0;
  color: var(--color-black);
  font-size: 24px;

  a {
    text-decoration: none;
    color: var(--color-black);
  }

  a:hover {
    text-decoration: underline;
    cursor: pointer;
    color: var(--color-orange);
  }

  * {
    background-color: var(--color-green);
  }
`;

export default function Footer() {
  return (
    <div>
      <StyledFooter>
        <Container className="font-small pt-4 mt-4">
          <Container fluid className="text-center text-md-left">
            <Row>
              <Col md="6">
                {/* <h5 className="title"></h5> */}
                <ul>
                  <li className="list-unstyled">
                    <a href="#!">Home</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">About</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Contact</a>
                  </li>
                </ul>
              </Col>
              <Col md="6">
                <h5 className="social"> Social Media:</h5>
                <ul>
                  <li className="list-unstyled">
                    <a href="#!">
                      <FaInstagram />
                    </a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">
                      <FaTwitter />
                    </a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">
                      <FaFacebook />
                    </a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">
                      <FaDiscord />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
          <div className="footer-copyright text-center py-3">
            <Container fluid>
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <a href="https://www.ootstrap.com"> tracker.com </a>
            </Container>
          </div>
        </Container>
      </StyledFooter>
    </div>
  );
}
