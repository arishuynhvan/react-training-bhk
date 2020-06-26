import React from 'react';
import {useSelector} from 'react-redux';
import MealList from '../components/MealList';
import {View, Text, StyleSheet} from 'react-native';

const CategoryMealsScreen = props => {
  const availableMeals = useSelector(state => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    meal => meal.categoryIdList.indexOf(props.route.params.itemId) >= 0,
  );

  if (displayedMeals.length === 0) {
    return (
      <View style = {styles.content}>
        <Text >
        No meals found, maybe check your filters
        </Text>
      </View>
    );
  }
  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};
const styles = StyleSheet.create({
  content:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center'
  }
})
export default CategoryMealsScreen;
