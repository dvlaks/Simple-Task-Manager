import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';

function TaskList() {
  const tasks = useSelector((state) => state.tasks.tasks);
  const [filter, setFilter] = useState('');
  const [sortBy, setSortBy] = useState('');

  const filteredTasks = tasks.filter(task => filter === 'completed' ? task.completed : !task.completed);
  const sortedTasks = filteredTasks.sort((a, b) => {
    if (sortBy === 'priority') {
      return a.priority - b.priority;
    } else if (sortBy === 'dueDate') {
      return new Date(a.dueDate) - new Date(b.dueDate);
    }
    return tasks;
  });

  return (
    <div>
      <FormControl>
        <InputLabel id="filter-label">Filter</InputLabel>
        <Select
          labelId="filter-label"
          id="filter-select"
          value={filter}
          label="Filter"
          onChange={e => setFilter(e.target.value)}
        >
          <MenuItem value="completed">Completed</MenuItem>
          <MenuItem value="pending">Pending</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel id="sort-label">Sort By</InputLabel>
        <Select
          labelId="sort-label"
          id="sort-select"
          value={sortBy}
          label="Sort By"
          onChange={e => setSortBy(e.target.value)}
        >
          <MenuItem value="priority">Priority</MenuItem>
          <MenuItem value="dueDate">Due Date</MenuItem>
        </Select>
      </FormControl>
      {sortedTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
