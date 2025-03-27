import React from 'react' 
import './App.css';
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList';
import {useState} from 'react';
function App() {
//   let [todolist,setTodolist]=useState([])
    
//   let saveList=(event)=>{
  
//     let toname=event.target.toname.value;
// //    alert(toname)
// if(!todolist.includes(toname)){
// let finalTodo=[...todolist,toname]
// setTodolist(finalTodo)
// } 
// else{
//   alert("toDo name already exist")
// }   
// event.preventDefault();
//   }

//   let list=todolist.map{(value,index)=>{
//     return(
//       <listItems value={value}/> 

//     )
//   } }
const[listTodo,setListTodo] = useState([]);
 
let addList =(inputText)=>{
  if(inputText!=='')
  setListTodo([...listTodo,inputText]);
}
const deleteListitem=(key)=>{
  let newListTodo=[...listTodo];
  newListTodo.splice(key,1)
  setListTodo([...newListTodo])
}
return (
     <div className='main'>
     <div className='center'>
     <TaskInput addList={addList} />

     <h1 className='app-heading'>To...Do</h1>
       <hr/>
       {listTodo.map((listItem,svg)=>{
         return (
          <TaskList key={svg} index={svg} item={listItem} deleteItem={deleteListitem} />
        )
       })}
         </div>
     </div>
  //   <div className="App">
  //     <h1>To Do List</h1>
  //     <form onSubmit={saveList}>
  //       <input type='text' name='toname' placeholder='Enter Task' />
  //       <button>Add</button>
  //     </form>
  //     <div className='outdiv'>
  //     <ul>
  //             </ul>
  //     </div>
  //   </div>
  )
}

export default App;

// function listItems({value}){
//   return(
//     <li>{value} <span>&times;</span></li>
  
//   )
// }