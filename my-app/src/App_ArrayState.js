/* import { useState } from 'react';

const initialProducts = [{
  id: 0,
  name: 'Baklava',
  count: 1,
}, {
  id: 1,
  name: 'Cheese',
  count: 5,
}, {
  id: 2,
  name: 'Spaghetti',
  count: 2,
}];

export default function ShoppingCart() {
  const [
    products,
    setProducts
  ] = useState(initialProducts)

  function handleIncreaseClick(productId) {
    const nextinitialProducts = initialProducts.map(p => {
        if(p.id === productId){
            p.count++
        }
        return p
    });
    setProducts(nextinitialProducts);
  }

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name}
          {' '}
          (<b>{product.count}</b>)
          <button onClick={() => {
            handleIncreaseClick(product.id);
          }}>
            +
          </button>
        </li>
      ))}
    </ul>
  );
}
 */


//Challenge 2
/* import { useState } from 'react';

const initialProducts = [{
  id: 0,
  name: 'Baklava',
  count: 1,
}, {
  id: 1,
  name: 'Cheese',
  count: 5,
}, {
  id: 2,
  name: 'Spaghetti',
  count: 2,
}];

export default function ShoppingCart() {
  const [
    products,
    setProducts
  ] = useState(initialProducts)

  function handleIncreaseClick(productId) {
    setProducts(products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          count: product.count + 1
        };
      } else {
        return product;
      }
    }))
  }

  function handleDecreaseClick(productId) {
    let nextProducts = products.map(product => {
        if (product.id === productId) {
          return {
            ...product,
            count: product.count - 1
          };
        } else {
          return product;
        }
      });
      nextProducts = nextProducts.filter(p =>
        p.count > 0
      );
      setProducts(nextProducts)
  }

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name}
          {' '}
          (<b>{product.count}</b>)
          <button onClick={() => {
            handleIncreaseClick(product.id);
          }}>
            +
          </button>
          <button onClick={() => {
            handleDecreaseClick(product.id);
          }}>
            –
          </button>
        </li>
      ))}
    </ul>
  );
} */

//Challenge 3
/* import { useState } from 'react';
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
} */

//Challenge4
import { useState } from 'react';
import { useImmer } from 'use-immer';
import AddTodo from './AddTodo.js';
import TaskList from './TaskList.js';

let nextId = 3;
const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];

export default function TaskApp() {
  const [todos, setTodos] = useImmer(
    initialTodos
  );

  function handleAddTodo(title) {
    setTodos(todos => {
        todos.push({
            id: nextId++,
            title: title,
            done: false
          });
    });
  }

  function handleChangeTodo(nextTodo) {
    setTodos(todos => {
        const todo = todos.find(t =>
            t.id === nextTodo.id
          );
          todo.title = nextTodo.title;
          todo.done = nextTodo.done;
    });
  }

  function handleDeleteTodo(todoId) {
    setTodos(todos => {
        const index = todos.findIndex(t =>
            t.id === todoId
          );
          todos.splice(index, 1);
    })
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


