import React from "react";
import HelloRedux from "./HelloRedux";
import Counter from "../Counter";
import CounterRedux from "./CounterRedux";
import AddRedux from "./AddRedux";
import TodoList from "./todos/ToDoList";

const ReduxExamples = () => {
  return(
    <div>
      <h2>Redux Examples</h2>
      <HelloRedux />
      <CounterRedux />
      <AddRedux />
      <TodoList/>
    </div>
  );
};

export default ReduxExamples;