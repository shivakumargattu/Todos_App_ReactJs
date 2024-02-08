
import './App.css';
import {useState} from "react"

function App() {
  
  const [task, setTask]=useState("")
  const [ToDos,setToDos]=useState([])



  const changeHadeler=(e)=>setTask(e.target.value)
  const AddTask=()=>{
  
    if(task.trim()==""){
      alert("Please Type Task")
    }else{
       
      
    const newTodos=[...ToDos,task]
    setToDos(newTodos)
    }
    setTask("")

  }

  const taskDelete=(indexValue)=>{
    console.log("clicked")
    const removeTask=ToDos.filter((task,index)=>index!==indexValue)
    setToDos(removeTask)

  }
  

  return (
    <div className="App">
      <h1>ToDos Manegement </h1>
      <div>
        <input type='text' placeholder='Enter Your Task ' value={task}  onChange={changeHadeler}/>&nbsp;<button onClick={AddTask}>Add</button>
      </div>
      <div className='MainContainer'>
      
        {ToDos.map((item,index)=>{
          return(
            <>
            
              <div className='taskContainer' keys={index}>
                <p>{item}</p>
                 <button className='delete' onClick={()=>taskDelete(index)}>Delete</button>
              </div>
              
            </>
          )
        })}
      </div>
    </div>
  );
}

export default App;
