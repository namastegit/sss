import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './redux_store/slices/counter/index';
import { fetchTodos } from './redux_store/slices/todos';  // Import the action

export function App() {
  const count = useSelector((state) => state.counter.value);  // Get counter value
  const todos = useSelector((state) => state.todo.data);  // Get todos from state
  const isLoading = useSelector((state) => state.todo.isLoading);  // Get loading state
  const dispatch = useDispatch();

  // Fetch todos on button click
  const handleFetchTodos = () => {
    dispatch(fetchTodos());
  };

  return (
    <div>
      <h1>Counter App</h1>

      {/* Counter functionality */}
      <div>
        <button aria-label="Increment value" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span>{count}</span>
        <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>

      {/* Fetch Todos button */}
      <div>
        <button onClick={handleFetchTodos}>Fetch Todos</button>
      </div>

      {/* Display loading message */}
      {isLoading && <p>Loading todos...</p>}

      {/* Display fetched todo titles */}
      <ul>
        {todos && todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
