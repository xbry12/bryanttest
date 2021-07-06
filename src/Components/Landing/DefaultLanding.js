import React from 'react'
import { Route } from 'react-router-dom';

//Import components
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
//Import pictures
import HeaderIllustration from '../../Images/LandingPage/HeaderIllustration.svg';


function DefaultLanding({AuthPortal}) {
    return (
        <Container id="landingContainer" fluid={true}>
                <Col lg='6' md='6' sm='6' id="landingColumnLeft">
                    <Row id="landingRowTop">
                        <h2>Hello...</h2>
                        <h1>Welcome To Tracker</h1>
                    </Row>
                    <Row id="landingRowMiddle">
                        <p>
                            Tracker was designed to help job seekers in job searching, job applications, and networking endeavors.
                        </p>
                    </Row>
                    <Row id="landingRowThree">
                        <Button id="landingButton" variant="primary" size="lg" active>
                            Learn More
                        </Button>
                    </Row>
                </Col>
                <Col lg='6' md='6' sm='6'>
                    <Image id="landingImage" src={HeaderIllustration} />
                    <Route 
                        path="/signin"
                        render={() => {
                            return <AuthPortal />
                        }}
                    />

                </Col>
        </Container>
    )
}

export default DefaultLanding
