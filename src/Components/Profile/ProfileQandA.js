import React from 'react'

//import boostrap tags
import { Container, Row, Button, Form } from 'react-bootstrap';

export default function ProfileQandA() {
    return (
        <div>
            <Container className="editQandAContainer">
                <Row>
                    <Form className="editQandAForm">

                        <Form.Group className="editPositionsGroup" >
                            <p>What positions are you looking for?</p>
                            <Form.Control size="lg" type="text" placeholder="ex. Jr. developer, tech lead" className="" />
                        </Form.Group>

                        <Form.Group controlId="" className="editExperienceGroup" >
                            <p>What is your experience level?</p>
                            <Form.Control size="lg" type="text" placeholder="ex. Entry level, associate" className="" />
                        </Form.Group>

                        <Form.Group controlId="" className="editHardSkillsGroup" >
                            <p>What is your hard skill set?</p>
                            <Form.Control size="lg" type="text" placeholder="ex. JavaScript" className="" />
                        </Form.Group>

                        <Form.Group controlId="" className="editSoftSkillsGroup" >
                            <p>What is your soft skill set?</p>
                            <Form.Control size="lg" type="text" placeholder="ex. Communication" className="" />
                        </Form.Group>

                        <Form.Group controlId="" className="editExpertiseGroup" >
                            <p>What is the area of your expertise?</p>
                            <Form.Control size="lg" type="text" placeholder="ex. Machine learning, web development" className="" />
                        </Form.Group>

                        <Form.Group controlId="" className="editEmploymentGroup" >
                            <p>Preferred employment type</p>
                            <Form.Control size="lg" type="text" placeholder="ex. full-time, contract" className="" />
                        </Form.Group>

                        <Form.Group controlId="" className="editPayRangeGroup" >
                            <p>Preferred pay range</p>
                            <Form.Control size="lg" type="text" placeholder="ex. $50,000-$70,000" className="" />
                        </Form.Group>

                        <Form.Group controlId="" className="editCompCultureGroup" >
                            <p>Preferred company culture</p>
                            <Form.Control size="lg" type="text" className="" />
                        </Form.Group>

                        <Form.Group controlId="" className="editOtherNotesGroup" >
                            <p>Other notes</p>
                            <Form.Control size="lg" type="text" className="" />
                        </Form.Group>

                        <Button className="" size="lg" variant="primary" type="submit">Save Changes</Button>

                    </Form>
                </Row>
            </Container>
        </div>
    )
}