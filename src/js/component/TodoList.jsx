import React, {useState} from "react";
import ListItem from "./ListItem.jsx";

const TodoList = ()=>{
  const [list, setTodoList] = useState([]);
  const [inputValue, setInput] = useState("");

  const addItemToList = (item)=>{
    if(item == ""){
      return;
    }
    let newList = list;
    newList.push(item);
    setTodoList(
      newList
    );
  };
  const removeItem = (itemIndex)=>{

  }
  const handleChange =(e)=>{
    setInput(e.target.value);
  }
  const handleEnter = ()=>{
    addItemToList(inputValue);
  }
  return (
    <>
      <div>
        <label htmlFor="taskInput">Enter Task: </label>
        <input type="text" id="taskInput" onChange={handleChange}></input>
        <button onClick={handleEnter()}>+</button>
      </div>
      <div>
        <ul>
          {
            list.map((TASK)=>{
              console.log("MAP");
              <ListItem task={TASK} itemIndex={0}/>
            })
          }
        </ul>
      </div>
    </>
  );
};
export default TodoList;