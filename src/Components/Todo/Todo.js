import React from 'react'

import {
    Card,
    Container,
    Button
} from 'react-bootstrap';

export default  function Todo({ title, todoArray, setTodoArray, todo, setDisplayTodo, completedArray, setCompletedArray, displayTodo }) {

    const deleteHandler = () => {
        setTodoArray(todoArray.filter(el => el.id !== todo.id))

        if(todo.id === displayTodo.id) {
            setDisplayTodo({});
        }
    };

    const editHandler = (e) => {
        console.log('click')
        setDisplayTodo(todo);
    };

    const addToComplete = todo => {
        if (todo.completed === true) {
            completedArray.push(todo)
            console.log(completedArray)
        } 
    }

    const convertBooleanToString = todo => {
        console.log(todo.completed)
    }


 
    return (
        <Container>
            <Card className={todo.completed ? "todoCard complete" : "todoCard"}>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                </Card.Body>
                <Card.Text>Is complete: {todo.completed}</Card.Text>
                <Card.Text>{todo.dueDate}</Card.Text>
                <Button onClick={editHandler}>Edit</Button>
                <Button onClick={deleteHandler}>Delete</Button>
            </Card>
        </Container>
    )
}