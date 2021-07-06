import React from 'react'

//import boostrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function EditProfileForm({ editUsername, editFirstname, editLastname, editEmail }) {
    return (
        <div>
            <Container className="editProfileContainer">
                <Row>
                    <Form className="editProfileForm">

                        <Form.Group className="editUsernameGroup" >
                            <Form.Control size="lg" type="text" placeholder="Username" className="" />
                        </Form.Group>

                        <Form.Group controlId="" className="editFirstnameGroup" >
                            <Form.Control size="lg" type="text" placeholder="Firstname" className="" />
                        </Form.Group>

                        <Form.Group controlId="" className="editLastnameGroup" >
                            <Form.Control size="lg" type="text" placeholder="Lastname" className="" />
                        </Form.Group>

                        <Form.Group controlId="" className="editEmailGroup" >
                            <Form.Control size="lg" type="email" placeholder="Email" className="" />
                        </Form.Group>

                        <Button className="" size="lg" variant="primary" type="submit">Save Changes</Button>

                    </Form>
                </Row>
            </Container>
        </div>
    )
}