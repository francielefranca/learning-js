import { useState, useEffect } from 'react';

function App(){
  const [input, setInput] = useState('')
  const [tasks, setTasks] = useState([
    'Pagar conta de luz',
    'Estudar react',
  ]) 

  useEffect(()=>{
    const tasksStorage = localStorage.getItem('@task')

    if(tasksStorage){
      setTasks(JSON.parse(tasksStorage))
    }

  }, [])

  useEffect(()=>{
    localStorage.setItem('@task', JSON.stringify(tasks))
  }, [tasks])

  function handleRegister(e){
    e.preventDefault();

    setTasks([...tasks, input]);
    setInput('');

  }

  return(
    <div>
      <h1>Registrando Tarefas</h1>

      <form onSubmit={ handleRegister}>

        <label>Nome da task:</label><br/>
        <input placeholder='Digite uma task'
        value={input}
        onChange={ (e)=> setInput(e.target.value)}
        ></input><br/>

        <button type='submit'>Registrar task</button>
      </form>
      <br/><br/>

      <ul>
        {tasks.map( task => (
          <li key={task}>{task}</li>
        ))}
      </ul>
      
    </div>
  )
}

export default App;
