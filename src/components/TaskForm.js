import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasks/tasksSlice';
import { TextField, Button, MenuItem, Select, FormControl, InputLabel, Grow } from '@mui/material';

function TaskForm() {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('');
  const [dueDate, setDueDate] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title || !priority || !dueDate) return;
    dispatch(addTask({ id: Date.now(), title, priority, dueDate, completed: false }));
    setTitle('');
    setPriority('');
    setDueDate('');
  };

  return (
    <Grow in={true}>
      <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
        <TextField
          label="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          variant="outlined"
          size="small"
          style={{ marginRight: 10 }}
        />
        <FormControl variant="outlined" size="small" style={{ marginRight: 10 }}>
          <InputLabel>Priority</InputLabel>
          <Select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            label="Priority"
          >
            <MenuItem value="High">High</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="Low">Low</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Due Date"
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          size="small"
          style={{ marginRight: 10 }}
        />
        <Button type="submit" variant="contained" color="primary">
          Add Task
        </Button>
      </form>
    </Grow>
  );
}

export default TaskForm;
