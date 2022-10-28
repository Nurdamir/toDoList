import React, {useState} from 'react';
import './App.css';
import AddTaskForm from "./components/AddTaskForm/AddTaskForm";
import Task from "./components/Task/Task";


function App() {
  const [task, setTask] = useState([
    {text: "Do anything1", id: 'd1'},
    {text: "Do anything2", id: 'j1'},
    {text: "Do anything3", id: 'f1'},
    {text: "Do anything4", id: 'l1'}
  ]);

  const [currentTask, setCurrentTask] = useState([{task: ''}]);

  const addTaskDo = (event: React.MouseEvent) => {
    event.preventDefault();

    const add = {
      text: currentTask[0].task,
      id: String(Math.random())
    }
    const newTasks = [...task]
    newTasks.push(add);
    setTask(newTasks);
  }

  const edit = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const currentTaskCopy = [...currentTask];
    const taskCopy = currentTask[0]
    taskCopy.task = event.target.value;
    setCurrentTask(currentTaskCopy);
  }


  const deleteTask = (id: string) => {
    const index = task.findIndex(t => t.id === id);
    const taskCopy = [...task];
    taskCopy.splice(index, 1);
    setTask(taskCopy);
  }


  return (
    <div className="App">
      {currentTask ? (
      <AddTaskForm
        onInputChange={event => edit(event)}
        add={event => addTaskDo(event)}
      />
      ) : null}
      <div>
        {task.map(taskDo => (
          <Task
            key={taskDo.id}
            text={taskDo.text}
            delete={() => deleteTask(taskDo.id)}
          />
        ))}
      </div>

    </div>
  );
}

export default App;
