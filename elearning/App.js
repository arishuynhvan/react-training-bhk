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
} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';


const App: () => Reacft$Node = () => {
  const [goalList, setGoalList] = useState([]);
  const [goalIndex, setGoalIndex] = useState(0);
  const addGoalHandler = (goal) =>{
    setGoalIndex(goalIndex => goalIndex+1);
    setGoalList((goalList) => [...goalList, {key: goalIndex.toString(), value: goal}]);
  };
  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal = {addGoalHandler}/>
      <View>
      <FlatList data = {goalList}
        renderItem = {(itemData) => <GoalItem id={itemData.item.key} title={itemData.item.value} />}
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    justifyContent: 'center',
    alignContent: 'center'
  },
});

export default App;
