//Challenge 3

import { useState } from 'react';
import AddTodo from './AddTodo.js';
import TaskList from './TaskList.js';

let nextId = 3;
const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];

export default function TaskApp() {
  const [todos, setTodos] = useState(
    initialTodos
  );

  function handleAddTodo(title) {
        let insertAt = 0;
        setTodos([
            ...todos.slice(0, insertAt),
            {
                id: nextId++,
                title: title,
                done: false
            },
            ...todos.slice(insertAt)
        ]
        )
  }

  function handleChangeTodo(nextTodo) {
      let newTodo = todos.map(t => {
            if(t.id === nextTodo.id){
                t.title = nextTodo.title;
                t.done = nextTodo.done;
            }
            return t
      })
      setTodos(newTodo);

      const todo = todos.find(t =>
      t.id === nextTodo.id
    );
    todo.title = nextTodo.title;
    todo.done = nextTodo.done;
  }

  function handleDeleteTodo(todoId) {
      let newTodo = todos.filter(t => t.id !== todoId);
      setTodos(newTodo);
  }

  return (
    <>
      <AddTodo
        onAddTodo={handleAddTodo}
      />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}