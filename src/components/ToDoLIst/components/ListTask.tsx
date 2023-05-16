import React from 'react'
import { TaskArray } from '../../mock/TaskMock';
import ListItem from '@mui/material/ListItem';
import { List } from '@mui/material';
import ItemToDoList from '../../ItemToDoList';
interface PropsType  {
    tasksForToDoList : TaskArray[];
    removeTask: (id: number) => void;
}

function ListTask(props: PropsType) {
  return (
    <List sx={{ width: '100%', maxWidth: 480 }}>
          {props.tasksForToDoList.map((item) => (
            <ListItem key={item.id}>
              <ItemToDoList onClick={() => props.removeTask(item.id)} task={item} />
            </ListItem>
          ))}
        </List>
  )
}

export default ListTask