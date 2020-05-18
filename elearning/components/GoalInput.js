import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Modal,
} from 'react-native';

const GoalInput = (props) => {
  const [newGoal, setNewGoal] = useState("");
  const goalInputHandler = (enteredGoal) => {
    setNewGoal(enteredGoal)
  }
  const addGoalHandler = () => {
    props.onAddGoal(newGoal);
    setNewGoal("");
    props.addModeHandler(false);
  };
  return (
    <Modal visible={props.isAddMode} animationType={'slide'}>
      <View style={styles.addGoalContainer}>
        <TextInput placeholder="Write your goal here" style={styles.input} onChangeText={goalInputHandler} value={newGoal} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '60%' }}>
          <View style={{ width: '40%' }}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
          <View style={{ width: '40%' }}>
            <Button title="CANCEL" onPress={() => props.addModeHandler(false)} color={'red'} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  addGoalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  input: {
    marginBottom: 5,
    borderBottomColor: 'black',
    borderColor: 'white',
    borderWidth: 1,
    width: '80%'
  },
});

export default GoalInput;
