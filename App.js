// App.js
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './Components/Header';
import TaskInput from './Components/TaskInput';
import TaskList from './Components/TaskList';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const addOrUpdateTask = () => {
    if (editIndex === -1) {
      // Add new task
      if (task.trim() !== '') {
        setTasks([...tasks, task]);
        setTask('');
      }
    } else {
      // Update existing task
      if (task.trim() !== '') {
        const updatedTasks = [...tasks];
        updatedTasks[editIndex] = task;
        setTasks(updatedTasks);
        setTask('');
        setEditIndex(-1);
      }
    }
  };

  const editTask = (index) => {
    setEditIndex(index);
    setTask(tasks[index]);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.appText}>TO DO APP</Text>
      <View style={styles.innerBox}>
        <Header style={styles.header} />
        <TaskInput task={task} setTask={setTask} addOrUpdateTask={addOrUpdateTask} editIndex={editIndex} style={styles.input} />
        <TaskList tasks={tasks} editTask={editTask} deleteTask={deleteTask} style={styles.list} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'gray',
  },
  appText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  innerBox: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden', // Clip the rounded corners
    elevation: 3, // Add elevation for a shadow effect
  },
  header: {
    backgroundColor: 'blue',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  input: {
    backgroundColor: 'lightblue',
    padding: 20,
  },
  list: {
    backgroundColor: 'lightgray',
    padding: 20,
  },
});
