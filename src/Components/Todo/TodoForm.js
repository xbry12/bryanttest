import React from "react";

import { Row, Container, Form, Button } from "react-bootstrap";

export default function TodoForm({
  todoArray,
  todoFormString,
  setTodoFormString,
  setTodoArray
}) {
  const inputTextHandler = (e) => {
    setTodoFormString(e.target.value);
  };

  const d = new Date();
  // console.log(`${d.getMonth() + 1}/${d.getDay()}/${d.getFullYear()}`);
  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (!todoFormString || /^\s*$/.test(todoFormString)) {
      return;
    }

    setTodoArray([
      ...todoArray,
      {
        title: todoFormString,
        completed: false,
        id: Math.random() * 10000,
        dueDate: `${d.getMonth() + 1}/${d.getDay()}/${d.getFullYear()}`
      }
    ]);
    setTodoFormString("");
  };

  return (
    <Container className="todoContainer">
      <Row>
        <Form>
          <Form.Group>
            <Form.Label>Create a Todo:</Form.Label>
            <Form.Control
              value={todoFormString}
              type="text"
              onChange={inputTextHandler}
            />
            <Button onClick={submitTodoHandler} type="submit">
              Create
            </Button>
          </Form.Group>
        </Form>
      </Row>
    </Container>
  );
}
