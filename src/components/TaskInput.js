import React,{useState} from 'react'
import '../App.css';

function TaskInput(props) {
    const [inputText,setInputText] = useState('');
    return (
 <div className='input'>
     <input type='text'  className='text-box' placeholder='Enter Your Task'
      value={inputText} onChange={event=>{ setInputText(event.target.value)
     }}/>
     
     <button className='add-btn' onClick={()=>{
         props.addList(inputText)
         setInputText("")
     }}>Add Task</button>       
    

</div>
   )
}

export default TaskInput