import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaSearch } from 'react-icons/fa';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

import { InputGroup } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

export default function Search({ setJobQuery }) {
    const queryHandler = (e) => {
        setJobQuery(e.target.value);
    };

    return (
                <Navbar className='jobSearch'>
                        {/* <Col xs='auto'>
                            <Button id = 'sort-btn'>Sort</Button>
                            <Button id = 'sort-btn'>Filter</Button>
                        </Col> */}
                        <Col lg>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text>
                                        <FaSearch/>
                                    </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control type="text" placeholder="Search here.." onChange={queryHandler} />
                                <Button variant="outline-success" >Search</Button>
                            </InputGroup>
                        </Col>
                </Navbar>
    )
}
