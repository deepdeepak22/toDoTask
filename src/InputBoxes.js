import { useState } from "react";
export function InputBoxes({task_list,setTask_list}) {
  const[name , setName]=useState("");
  const[description , setDescription]=useState("");
  const newTask = {
    name : name ,
    description : description
  }
  return (
    <div className="input-box">
      <div className="box-1">
        <div className="row g-3 align-items-center">
          <div className="col-auto">
            <input
              type="text"
              id="inputPassword6"
              class="form-control"
              aria-describedby="passwordHelpInline"
              placeholder="todo name"
              onChange={(event)=>setName(event.target.value)}
            ></input>
          </div>
        </div>
      </div>
      <div className="box-1">
        <div className="row g-3 align-items-center">
          <div class="col-auto">
            <input
              type="text"
              id="inputPassword6"
              class="form-control"
              aria-describedby="passwordHelpInline"
              placeholder="todo description"
              onChange={(event)=>setDescription(event.target.value)}
            ></input>
          </div>
        </div>
      </div>
      <div className="todo-button">
        <button onClick={()=>setTask_list([...task_list,newTask])} type="button" class="btn btn-info">
          Add todo
        </button>
      </div>
    </div>
  );
}
