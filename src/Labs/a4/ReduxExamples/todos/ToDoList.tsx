import React, { useState } from "react";
import TodoForm from "./ToDoForm";
// import { TodoItem } from "./ToDoItem";
import { LabState, TodoType } from "../../../store";
import TodoItem from "./ToDoItem";
import { useSelector } from "react-redux";
function TodoList() {
  const { todos } = useSelector((state: LabState) => state.todosReducer);

  return (
    <div>
      <h2>Todo List</h2>
      <ul className="list-group">
        <TodoForm />
        {todos.map((todo: TodoType) => (
          <TodoItem todo={todo} />
        ))}
      </ul>
    </div>


  );
}
export default TodoList;