import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';

const Stack = createStackNavigator();

function MealsNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'Meal Categories',
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: Platform.OS === 'android'?Colors.primaryColor:'white'},
          headerTintColor:Platform.OS === 'android'?'white':Colors.primaryColor
        }}
      />
      <Stack.Screen name="Category Meals" component={CategoryMealsScreen} />
      <Stack.Screen name="Meal Detail" component={MealDetailScreen} />
    </Stack.Navigator>
  );
}

export default MealsNavigator;
