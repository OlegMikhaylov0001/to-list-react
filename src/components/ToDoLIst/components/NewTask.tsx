import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';

interface TextFieldInterface {
  addTask: (title: string) => void;
}

function NewTask(props: TextFieldInterface) {
  const [titleNewTask, setTitleNewTask] = useState('');

  return (
    <>
      <TextField
        // type='input'
        value={titleNewTask}
        onChange={e => setTitleNewTask(e.currentTarget.value)}
        onKeyPress={e => {
          if (e.code === 'Enter') {
            props.addTask(titleNewTask)
            // console.log(titleNewTask)
          }
        }}
        sx={{ width: '100%', maxWidth: 480 }}
        label="Add new subTask?"
        variant="filled"></TextField>
      <Button onClick={() => props.addTask(titleNewTask)
    }
    >
        <SaveIcon fontSize="large"></SaveIcon>
      </Button>
    </>
  );
}

export default NewTask;
