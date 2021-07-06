import React, { useState } from 'react'
import '../../css/todo.css';

import {
    Container,
    Col,
    Row,
    Button,
    Form
} from 'react-bootstrap'

function DisplayTodo({ displayTodo, setDisplayTodo }) {
    const [todoText, setTodoText] = useState('');
    const [todoComplete, setTodoComplete] = useState(false);
    const [todoDueDate, setTodoDueDate] = useState('');

    const deletedTodoHandler = (e) => {
        console.log(e.target.value)
        console.log(displayTodo.title)
        if (!displayTodo.title) {
            setTodoText('');
            setTodoComplete(false);
            setTodoDueDate('');
        }
    };

    const textChange = (e) => {
        setTodoText(e.target.value);
    };

    const dueDateChange = (e) => {
        setTodoDueDate(e.target.value);
    };

    const completeHandler = (e) => {
        setTodoComplete(e.target.value);
    }

    const updateTodo = (e) => {
        e.preventDefault();
        displayTodo.text = todoText;
        displayTodo.completed = todoComplete;
        displayTodo.dueDate = todoDueDate;
        setDisplayTodo({});
    };

    return (
        <Container>
            <Row>
                <Col>
                    <h1 onChange={deletedTodoHandler}>
                        {displayTodo.title}
                    </h1>
                </Col>
            </Row>
            <Row>
                <Form>
                    <Form.Group>
                        <Form.Label>Completed</Form.Label>
                        <Form.Check  
                            name="completed"
                            type="radio" 
                            onChange={completeHandler} 
                            value={true} 
                            label="True"
                        />
                        <Form.Check 
                            name="completed" 
                            type="radio" 
                            onChange={completeHandler} 
                            value={false} 
                            label="False"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Date Due</Form.Label>
                        <Form.Control type="date" onChange={dueDateChange}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Notes</Form.Label>  
                        <Form.Control as="textarea" onChange={textChange} />
                    </Form.Group>
                    <Button onClick={updateTodo} type='submit'>Update</Button>
                </Form>
            </Row>
        </Container>
    )
}

export default DisplayTodo
