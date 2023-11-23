import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const TaskInput = ({ task, setTask, addOrUpdateTask, editIndex }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.addEditText}>Add or Edit tasks:</Text>
      <TextInput
        style={styles.input}
        value={task}
        onChangeText={(text) => setTask(text)}
        placeholder="Enter task..."
      />
      <TouchableOpacity style={styles.button} onPress={addOrUpdateTask}>
        <Text style={styles.buttonText}>{editIndex === -1 ? 'Add Task' : 'Update Task'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
  },
  addEditText: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default TaskInput;
