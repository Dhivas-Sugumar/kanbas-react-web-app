import React, { useState, useEffect } from "react";
import axios from "axios";


type ToDo = {
  id: number;
  title: string;
  completed: boolean;
}

function WorkingWithArrays() {
  const API = "http://localhost:4000/a5/todos";
  const [todo, setTodo] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  });
  const [errorMessage, setErrorMessage] = useState(null);
  const [todos, setTodos] = useState<ToDo[]>([]);
  const fetchTodos = async () => {
    const response = await axios.get(API);
    console.log(response.data);
    setTodos(response.data);
  };
  useEffect(() => {
    fetchTodos();
  }, []);
  const fetchTodoById = async (id: number) => {
    const response = await axios.get(`${API}/${id}`);
    setTodo(response.data);
  };
  const updateTitle = async () => {
    const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
    setTodos(response.data);
  };
  const updateDescription = async () => {
    const response = await axios.get(`${API}/${todo.id}/description/${todo.description}`);
    setTodos(response.data);
  };
  const updateChecked = async () => {
    const response = await axios.get(`${API}/${todo.id}/completed/${todo.completed}`);
    setTodos(response.data);
  };
  const postTodo = async () => {
    const response = await axios.post(API, todo);
    setTodos([...todos, response.data]);
  };
  const deleteTodo = async (todo: ToDo) => {
    try {
      const response = await axios.delete(
        `${API}/${todo.id}`);
      setTodos(todos.filter((t : any) => t.id !== todo.id));
    } catch (error: any) {
      console.log(error);
      setErrorMessage(error.response.data.message);
    }
  };

  const updateTodo = async () => {
    try {
      const response = await axios.put(
        `${API}/${todo.id}`, todo);
      const newToDos : ToDo[] = todos.map((t : any) => (
        Number.parseInt(t.id) === todo.id ? todo : t))
      setTodos(newToDos);
    } catch (error : any) {
      console.log(error);
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <div>
      <h3>Working with Arrays</h3>
      <h4>Retrieving Arrays</h4>
      <a href={API}>
        Get Todos
      </a>
      {errorMessage && (
        <div className="alert alert-danger mb-2 mt-2">
          {errorMessage}
        </div>
      )}
      <h4>Retrieving an Item from an Array by ID</h4>
      <input value={todo.id}
        onChange={(e) => setTodo({
          ...todo,
          id: Number.parseInt(e.target.value)
        })} />
      <a href={`${API}/${todo.id}`}>
        Get Todo by ID
      </a>
      <h3>Filtering Array Items</h3>
      <a href={`${API}?completed=true`}>
        Get Completed Todos
      </a>
      <h3>Creating new Items in an Array</h3>
      <a href={`${API}/create`}>
        Create Todo
      </a>
      <h3>Deleting from an Array</h3>
      <a href={`${API}/${todo.id}/delete`}>
        Delete Todo with ID = {todo.id}
      </a>
      <button onClick={updateTitle} >
        Update Title
      </button>
      <button onClick={updateDescription} >
        Update Description
      </button>
      <button onClick={updateChecked} >
        Update completed
      </button>
      <textarea value={todo.description}
        onChange={(e) => setTodo({
          ...todo,
          description: e.target.value
        })} />
      <input value={todo.due} type="date"
        onChange={(e) => setTodo({
          ...todo, due: e.target.value
        })} />
      <label>
        <input checked={todo.completed} type="checkbox"
          onChange={(e) => setTodo({
            ...todo, completed: e.target.checked
          })} />
        Completed
      </label>
      <button onClick={postTodo}> Post Todo </button>
      <ul>
        {todos.map((todo: any) => (
          <li key={todo.id}>
            <button onClick={() => fetchTodoById(todo.id)} >
              Edit
            </button>
            <button onClick={() => deleteTodo(todo)}
              className="btn btn-danger float-end ms-2">
              Delete
            </button>

            {todo.title}
          </li>
        ))}
      </ul>

    </div>
  );
}
export default WorkingWithArrays;