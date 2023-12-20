import React from "react";
import axios from "axios";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useState } from "react";
import { Table } from "react-bootstrap";
function Todos(){
    const [todoAr,setTodo]=useState([])
    let {userObj}=useSelector(state=>state.user)
    const getTodos=async()=>{
        let token=localStorage.getItem("token")
        console.log(userObj.username)
        let response=await axios.get('http://localhost:5000/user/todo/todos',{params:{username:userObj.username},headers:{Authorization: "Bearer "+ token}})
        console.log(response)
        let todoArr = response.data.payload
        console.log(todoArr)
        setTodo(previousState=>{
            return previousState.concat(todoArr)
        })
        document.getElementById('btnn').disabled=true;
    }
    const deleteTodos=async(todo)=>{
        console.log("Entered")
        let token=localStorage.getItem("token")
        let response=await axios.delete('http://localhost:5000/user/todo/remove',{params:{todo},headers:{Authorization: "Bearer "+ token}})
        setTodo(previousState=>{
            return previousState.filter(prop => prop.todo !==todo)
        })
        console.log("Deleted")
    }
    return (
        <>
        <button className="btn btn-warning d-block mx-auto mt-5" id= 'btnn'onClick={getTodos}>
            Todos
        </button>
        <Table striped bordered hover>
        <thead>
        <tr>
          <th>Todos</th>
          <th>Date Added</th>
          <th>Time Added</th>
          <th>Due Date</th>
          <th>Due Time</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {todoAr.map((todos) => (<tr key={todos._id}><td>{todos.todo}</td>
        <td>{todos.date}</td><td>{todos.time}</td><td>{todos.dueDate}</td><td>{todos.dueTime}</td><td><button className="btn btn-warning d-block mx-auto mt-5" onClick={() => deleteTodos(todos.todo)}>Del</button></td></tr>))}
    </tbody>
        </Table>
        </>
    )
}
export default Todos
