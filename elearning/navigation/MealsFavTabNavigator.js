import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MealsNavigator from './MealsNavigator';
import FavoritesScreen from '../screens/FavoritesScreen';
import Colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function MealsFavTabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Colors.accentColor,
      }}>
      <Tab.Screen
        name="Meals"
        component={MealsNavigator}
        options={{
          tabBarIcon: tabInfo => {
            return (
              <Icon name="ios-restaurant" size={25} color={tabInfo.color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: tabInfo => {
            return (
              <Icon name="ios-star" size={25} color={tabInfo.color} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default MealsFavTabNavigator;
