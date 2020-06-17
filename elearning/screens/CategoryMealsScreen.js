import React from 'react';
import {MEALS} from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealsScreen = props => {
  const displayedMeals = MEALS.filter(
    meal => meal.categoryIdList.indexOf(props.route.params.itemId) >= 0,
  );

  return (
<MealList listData={displayedMeals} navigation={props.navigation}/>
  );
};


export default CategoryMealsScreen;
