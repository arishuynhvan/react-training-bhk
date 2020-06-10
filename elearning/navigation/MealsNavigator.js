import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const Stack = createStackNavigator();

function MealsNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="Category Meals" component={CategoryMealsScreen} />
      <Stack.Screen name="Meal Detail" component={MealDetailScreen} />
    </Stack.Navigator>
  );
}

export default MealsNavigator;