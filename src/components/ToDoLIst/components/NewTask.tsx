import React, { useState, KeyboardEvent } from 'react';
import { TextField, Button } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';

interface TextFieldInterface {
  addTask: (title: string) => void;
}

function NewTask(props: TextFieldInterface) {
  const [titleNewTask, setTitleNewTask] = useState('');
  const onNewTitleChangeHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setTitleNewTask(e.currentTarget.value);
  };
  const keyPressHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.code === 'Enter') {
      props.addTask(titleNewTask);
      setTitleNewTask('');
    }
  };

  const addTaskBtnProps = () => {
    props.addTask(titleNewTask);
    setTitleNewTask('');
  };

  return (
    <>
      <TextField
        type="input"
        value={titleNewTask}
        onChange={onNewTitleChangeHandler}
        onKeyPress={keyPressHandler}
        sx={{ width: '100%', maxWidth: 480 }}
        label="Add new subTask?"
        variant="filled"></TextField>
      <Button onClick={addTaskBtnProps}>
        <SaveIcon fontSize="large"></SaveIcon>
      </Button>
    </>
  );
}

export default NewTask;
