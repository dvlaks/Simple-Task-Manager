import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTaskCompletion } from '../features/tasks/tasksSlice';
import { Checkbox, IconButton, Typography, Slide } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function Task({ task }) {
  const dispatch = useDispatch();

  return (
    <Slide direction="up" in={true} mountOnEnter unmountOnExit>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
        <Checkbox
          checked={task.completed}
          onChange={() => dispatch(toggleTaskCompletion(task.id))}
        />
        <Typography variant="body1" style={{ flexGrow: 1, textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.title} - Priority: {task.priority} - Due: {task.dueDate}
        </Typography>
        <IconButton onClick={() => dispatch(deleteTask(task.id))} color="error">
          <DeleteIcon />
        </IconButton>
      </div>
    </Slide>
  );
}

export default Task;
