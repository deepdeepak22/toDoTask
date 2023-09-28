import "./App.css";
import { Header } from "./Header";
import { InputBoxes } from "./InputBoxes";
import { Middle } from "./Middle";
import {useState} from "react" ;
const task = [
  {
    Name: "office task - 1",
    description: "this is the description of my task-1",
  },
  {
    name: "office task - 2",
    description: "this is the description of my task-2",
  },
  {
    name: "office task - 3",
    description: "this is the description of my task-3",
  },
];
function App() {
  const [task_list , setTask_list] = useState(task);
  return (
    <div className="App">
      <Header />
      <InputBoxes task_list={task_list} setTask_list = {setTask_list} />
      <Middle />
      <TaskMapping task_list={task_list} />
    </div>
  );
}
function TaskMapping({ task_list }) {
  return (
    <div className="task-map">
      {task_list.map((tl) => (
        <TaskDisplay tl={tl} />
      ))}
    </div>
  );
}
function TaskDisplay({ tl }) {
  return (
    <div className="task-display">
      <p>name : {tl.name}</p>
      <p>description : {tl.description}</p>
      <p>
        status :{" "}
        <div className="btn-group">
          <button type="button" class="btn btn-danger">
            Not Completed
          </button>
          <button
            type="button"
            className="btn btn-danger dropdown-toggle dropdown-toggle-split"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="visually-hidden">Toggle Dropdown</span>
          </button>
          <ul class="dropdown-menu">
            <li>
              <a className="dropdown-item" href="www.ggo.com">
                Not Completed
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="www.ggo.com">
                Completed
              </a>
            </li>
            
            
          </ul>
        </div>
      </p>
      <div className="button-class">
        <div className="edit-button">
        <button type="button" className="btn btn-success">Edit</button>
        </div>
        <div>
        <button type="button" className="btn btn-warning">Delete</button>
        </div>
      </div>
    </div>
  );
}
export default App;
