import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const TaskItem = ({ task, index, editTask, deleteTask }) => {
  return (
    <View style={styles.taskContainer}>
      <View style={styles.taskContent}>
        <Text style={styles.taskText}>{task}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.iconButton} onPress={() => editTask(index)}>
            <FontAwesome name="edit" size={24} color="blue" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} onPress={() => deleteTask(index)}>
            <FontAwesome name="trash-o" size={24} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    marginBottom: 10,
  },
  taskContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  taskText: {
    fontSize: 18,
    flex: 1,
    paddingVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  iconButton: {
    marginHorizontal: 8, // Adjust the margin as needed
  },
});

export default TaskItem;
