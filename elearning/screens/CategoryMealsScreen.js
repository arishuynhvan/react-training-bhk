import React from 'react';
import {View, FlatList, StyleSheet, Button} from 'react-native';
import {MEALS} from '../data/dummy-data';
import MealItem from '../components/MealItem';

const CategoryMealsScreen = props => {
  const displayedMeals = MEALS.filter(
    meal => meal.categoryIdList.indexOf(props.route.params.itemId) >= 0,
  );
  const renderMealItem = itemData => {
    return (
      <MealItem
        onSelectMeal={() => props.navigation.navigate('Meal Detail', {
          mealId: itemData.item.id
        })}
        title={itemData.item.title}
        duration={itemData.item.duration}
        affordability={itemData.item.affordability}
        complexity={itemData.item.complexity}
        image = {itemData.item.imageUrl}
      />
    );
  };
  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        style={{width: '100%'}}
      />
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
