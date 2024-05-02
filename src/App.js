import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  return (
    <Provider store={store}>
      <div style={{ padding: 20 }}>
        <h1>Task Manager</h1>
        <TaskForm />
        <TaskList />
      </div>
    </Provider>
  );
}

export default App;
