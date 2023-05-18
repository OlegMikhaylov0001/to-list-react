import React from 'react';
import {
  Checkbox,
  IconButton,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { TaskArray } from '../mock/TaskMock';

interface ItemTasksProps {
    task: TaskArray;
    id: number;
    onClick?: () => void;
    onChangeStatusTask: (taskId: number, idDone: boolean) => void;
}

function ItemToDoList({task, onClick, onChangeStatusTask, id}: ItemTasksProps) {
    const {isDone, title} = task;

  return (
    <>
      <ListItemButton role={undefined} dense>
        <ListItemIcon>
          <Checkbox onChange={() => onChangeStatusTask(id, isDone)} checked={isDone} edge="start" disableRipple />
        </ListItemIcon>
        <ListItemText primary={title} />
      </ListItemButton>
      <IconButton onClick={onClick}>
        <DeleteIcon />
      </IconButton>
    </>
  );
}

export default ItemToDoList;
