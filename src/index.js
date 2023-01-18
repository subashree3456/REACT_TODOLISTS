import  React , {useState} from 'react';
import ReactDOM  from 'react-dom';
import './index.css';

// oru oru value namma type panna panna updatevalue function call aaguthu
// e.target vanthu antha function na trigger pannite irukum i/p field la namma oru oru letter type pann apanna
//antha function call aagi value update aagite irukum
const AddTask =({addTask}) =>
{
  const[value,updateValue]=useState("");
// };
const handleSubmit =e =>
{
  e.preventDefault();
  if(value!==""){
addTask(value);
updateValue("");  // once todo list la value passs annathu kku apparam again normal mode kkuu vanthuranum , i./p field box empty aagidanum
  }
}

return(
  <form onSubmit={handleSubmit}>
    <input
    type="text"
    value={value}
    placeholder="enter the tasks todo"
    onChange={e=>updateValue(e.target.value)} />
<button type="submit"><i class="material-icons">add</i></button>
  </form>
);

}
const ToDoList =() => {
const addTask = text => updateTask([...tasks,{text}]);
const [tasks,updateTask]=useState([
  {
    text:"Wake Up",
    isCompleted:false
  },
  {
    text:"Fresh Up",
    isCompleted:false
  },
  {
    text:"Boost Up",
    isCompleted:false
  },
])

const toggleTask = index =>{
  const newTask =[...tasks];
  if(newTask[index].isCompleted)
  {
    newTask[index].isCompleted=false;
  }

else 
{
  newTask[index].isCompleted=true;
}

updateTask(newTask);

}

const removeTask = index =>{
  const newTask =[...tasks];
  newTask.splice(index,1);
  updateTask(newTask);
}

return(
 <div className="list-of-tasks-todo">
  {tasks.map((task,index)=>(
   <div className="task-status">
<span onClick={()=>toggleTask(index)} className={task.isCompleted ? "task-name completed-task" : "task-name"}>
{/* {index} */}
{task.text}
</span>
<button onClick={()=>removeTask(index)}><i className="material-icons">delete</i></button>
    </div> 
  ))}
  <AddTask addTask={addTask} />
 </div>
);
}

ReactDOM.render(<ToDoList/>,document.getElementById('root'));