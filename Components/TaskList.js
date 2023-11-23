import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, editTask, deleteTask }) => {
  return (
    <ScrollView style={styles.scrollView}>
      {tasks.map((task, index) => (
        <TaskItem key={index} task={task} index={index} editTask={editTask} deleteTask={deleteTask} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    width: '100%',
  },
});

export default TaskList;
