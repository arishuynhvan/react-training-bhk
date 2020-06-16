import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {MEALS} from '../data/dummy-data';
import {FlatList, TextInput} from 'react-native-gesture-handler';

const CategoryMealsScreen = props => {
  const displayedMeals = MEALS.filter(
    meal => meal.categoryIdList.indexOf(props.route.params.itemId) >= 0,
  );
  const renderMealItem = itemData => {
    return (
      <View>
        <Text>{itemData.item.title}</Text>
      </View>
    );
  };
  return (
    <View style={styles.screen}>
      <FlatList data={displayedMeals} renderItem={renderMealItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryMealsScreen;
