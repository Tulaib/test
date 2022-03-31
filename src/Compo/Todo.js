import React, { useEffect, useState } from "react";
import {useSelector,useDispatch} from 'react-redux'
import {Addtodo,DeleteTodo} from '../Redux/Action.js'


function Todo() {

    const Mytodo = useSelector(state=>state);
    const data = Mytodo.todoReducer.list;
    const dispatch = useDispatch()
    // console.log(data,'data')

    
    useEffect(()=>{
    },[])


  const [todo, setTodo] = useState([
    {
      id: 1,
      itemData: "hello",
    },
    {
      id: 2,
      itemData: "Im new",
    },
  ]);
  const [input, setinput] = useState("");
  
  const Addtodos = () => {
    // todo.push(setinput)
    let copy = [...todo];
    copy = [
      ...copy,
      {
        id: todo.length + 1,
        itemData: input,
      },
    ];
    setTodo(copy);
    setinput("");
  };
  const HandleDelete = (ids) => {
    // todo.pop(id)
    // let copy = [...todo];
    // const updatedList = copy.filter((item) => item.id !== id);
    // setTodo(updatedList);

    const newTasks = [...todo];
    newTasks.splice(ids, 1);
    setTodo(newTasks);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Todo List</h1>
      <div style={{ marginTop: "50px" }}>
        <input
          type={"text"}
          value={input}
          placeholder="Enter todo"
          onChange={(e) => setinput(e.target.value)}
        />

        <button onClick={()=>dispatch(Addtodo(input))}>Add</button>
        <ul
          style={{
            listStyle: "initial",
            flexDirection: "column",
            display: "flex",
            marginTop: "20px",
          }}
        >
          {data.map((item,index) => (
            <>
              <li key={item.id}>
                <h6># {item.id}</h6>
                {item.itemData}
                <button onClick={() => dispatch(DeleteTodo(item))}>Delete</button>
              </li>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
