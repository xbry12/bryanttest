import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FaStar } from 'react-icons/fa';

function JobTable({ displayData, setSavedJobsArray }) {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 id = 'title_text'>{displayData.display[0].title}</h1>
                    <p id = 'subtitletext_text'>{displayData.display[0].company_name}</p>
                    <p id = 'subtitle_text'>{displayData.display[0].location}</p>
                </Col>
                <Col>
                    <span id = 'subtitle2_text'>Posted {displayData.display[0].detected_extensions.posted_at}</span>
                    {/* <span id = 'subtitle3_text'><Button id="star-btn"><FaStar/></Button> Save</span> */}
                </Col>
            </Row>
            <Row>
                <Col>
                    <a href="https://careers.google.com/" target="_blank">
                        <Button className="applyButtons">
                                Apply on Google Careers
                        </Button>
                    </a>
                </Col>
                <Col>
                    <a href="https://www.linkedin.com/" target="_blank">
                        <Button className="applyButtons">
                            Apply on LinkedIn
                        </Button>
                    </a>
                </Col>
                <Col>
                    <a href="https://www.ziprecruiter.com/" target="_blank">
                        <Button className="applyButtons">
                        Apply on ZipRecruiter
                        </Button>
                    </a>
                </Col>
                <Col>
                    <a href="https://www.indeed.com" target="_blank">
                        <Button className="applyButtons">
                            Apply on Indeed
                        </Button>
                    </a>
                </Col>
            </Row>
            <Row>
                <p className="jobDescription">
                    {displayData.display[0].description}
                </p>
            </Row>
        </Container>
    )
}

export default JobTable
