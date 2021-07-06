
import React from 'react';

import Todo from './Todo';

export default function TodoList({ todoArray, setTodoArray, setDisplayTodo, completedArray, setCompletedArray, displayTodo }) { 

    return (
        <div>
           <h1>Things to do</h1>
           <ul>
                {todoArray.map((todo) => (
                    <Todo 
                        todo={todo}
                        title={todo.title}
                        key={todo.id} 
                        todoArray={todoArray} 
                        setTodoArray={setTodoArray} 
                        setDisplayTodo={setDisplayTodo}
                        setCompletedArray={setCompletedArray}
                        completedArray={completedArray}
                        displayTodo={displayTodo}
                    />
                ))}
           </ul>
        </div>
    )
}