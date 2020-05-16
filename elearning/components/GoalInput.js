import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';

const GoalInput = (props) => {
  const [newGoal, setNewGoal] = useState("");
  const goalInputHandler = (enteredGoal) => {
    setNewGoal(enteredGoal)
  }
  const addGoalHandler = () => {
    props.onAddGoal(newGoal);
    setNewGoal("");
  };
    return (
        <View style = {styles.addGoalContainer}>
        <TextInput placeholder="Write your goal here" style = {styles.input} onChangeText={goalInputHandler} value = {newGoal}/>
        <Button title = "ADD" onPress={addGoalHandler}/>
      </View>
    );
};

const styles = StyleSheet.create({
    addGoalContainer:{
      flexDirection:'row',
      width:"100%",
      justifyContent:'space-between',
      alignItems: 'center'
    },
    input:{
      marginBottom:5,
      borderBottomColor: 'black',
      borderColor:'white',
      borderWidth:1,
      width: '80%'
    },
  });

  export default GoalInput;
