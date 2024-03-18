import { useSelector } from "react-redux";
import Add from "./Add";
import Classes from "./Classes";
import ConditionalOutput from "./ConditionalOutput";
import Highlight from "./Highlight";
import JavaScript from "./Javascript";
import { Styles } from "./Styles";
import PathParameters from "./routing/PathParameters";
import TodoItem from "./todos/ToDoItem";
import TodoList from "./todos/ToDoList";
import { LabState } from "../store";

function Assignment3() {
  const { todos } = useSelector((state: LabState) => state.todosReducer);

  return (
    <div className="container">
      <h1>Assignment 3</h1>
      <ConditionalOutput/>
      <Styles/>
      <Classes />  
      <PathParameters />    
      <JavaScript />
      <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
        vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
     </Highlight>
     <Add a={3} b={4} />
     <TodoItem />                    
     <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>                                   
    </div>
  );
}
export default Assignment3;