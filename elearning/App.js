/**
 * A simple todo app based on 
 * https://www.udemy.com/course/react-native-the-practical-guide/
 * by Maximilian Schwarzmüller
 * https://academind.com/ 
 * 
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Button,
} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';


const App: () => Reacft$Node = () => {
  const [goalList, setGoalList] = useState([]);
  const [goalIndex, setGoalIndex] = useState(0);
  const [isAddMode, setIsAddMode] = useState(false);
  const addGoalHandler = (goal) => {
    setGoalIndex(goalIndex => goalIndex + 1);
    setGoalList((goalList) => [...goalList, { key: goalIndex.toString(), value: goal }]);
  };
  const deleteGoalHandler = (goalId) => {
    setGoalList(goalList.filter(goal => goal.key !== goalId));
  };
  const addModeHandler = (isAddMode) => {
    setIsAddMode(isAddMode);
  }
  return (
    <View style={styles.screen}>
      <Button title="ADD NEW GOAL" onPress={()=>setIsAddMode(true)}
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}/>
      <GoalInput onAddGoal={addGoalHandler} isAddMode = {isAddMode} addModeHandler = {addModeHandler}/>
      <View >
        <FlatList data={goalList}
          renderItem={(itemData) => <GoalItem id={itemData.item.key}
            title={itemData.item.value} onDeleteGoal={deleteGoalHandler} />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    justifyContent: 'center',
    alignContent: 'center'
  },
});

export default App;
