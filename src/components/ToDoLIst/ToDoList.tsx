import { Button, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { TaskMock } from '../mock/TaskMock';
import ListAltIcon from '@mui/icons-material/ListAlt';
import DoneIcon from '@mui/icons-material/Done';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import ListTask from './components/ListTask';
import NewTask from './components/NewTask';

interface MainToDoListProps {
  title?: string;
}
export type FilterValueType = 'All' | 'Completed' | 'Active';
function ToDoList({ title }: MainToDoListProps) {
  const [checked, setChecked] = React.useState([0]);
  const [tasks, setTasks] = useState(TaskMock);
  const [filter, setFilter] = useState<FilterValueType>('All');

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  function removeTask(id: number) {
    let filteredTask = tasks.filter((task) => task.id !== id);
    setTasks(filteredTask);
  }

  let tasksForToDoList = tasks;

  function changeFilter(value: FilterValueType) {
    setFilter(value);
  }
  if (filter === 'Completed') {
    const filteredTasks = tasks.filter((task) => task.isDone === true);
    tasksForToDoList = filteredTasks;
  }

  if (filter === 'Active') {
    const filteredTasks = tasks.filter((task) => task.isDone === false);
    tasksForToDoList = filteredTasks;
  }
  if (filter === 'All') {
    tasksForToDoList = tasks;
  }

  function addTask(title: string) {
    let newTask = { id: Date.now(), title: title, isDone: false };
    let newTaskArray = [newTask, ...tasks];
    setTasks(newTaskArray);
  }

  function changeTaskStatus (taskId: number, idDone: boolean) {
    let NewArrayTask = tasks 
    let task = NewArrayTask.find(t => t.id === taskId)
    if (task) {
    task.isDone = idDone;
    }
    setTasks([...NewArrayTask]);
  }

  const activeAllFilterTask = () => changeFilter('All');
  const activeActiveFilterTask = () => changeFilter('Active');
  const activeCompletedFilterTask = () => changeFilter('Completed');

  return (
    <>
      <Grid>
        <Typography align="center" variant="h4">
          {title}
        </Typography>
        <Grid display={'flex'} justifyContent={'center'}>
          <NewTask addTask={addTask} />
        </Grid>
      </Grid>
      <Grid display={'flex'} justifyContent={'center'}>
        <ListTask tasksForToDoList={tasksForToDoList} removeTask={removeTask} changeTaskStatus={changeTaskStatus} />
      </Grid>
      <Grid display={'flex'} justifyContent={'center'}>
        <Button onClick={activeAllFilterTask}>
          All
          <ListAltIcon />
        </Button>
        <Button onClick={activeActiveFilterTask}>
          Active
          <DoneIcon />
        </Button>
        <Button onClick={activeCompletedFilterTask}>
          Completed
          <DoneAllIcon />
        </Button>
      </Grid>
    </>
  );
}

export default ToDoList;
