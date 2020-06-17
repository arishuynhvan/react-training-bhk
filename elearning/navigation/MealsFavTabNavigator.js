import React from 'react';
import {Platform} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MealsNavigator from './MealsNavigator';
import FavoritesScreen from '../screens/FavoritesScreen';
import Colors from '../constants/Colors';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

function MealsFavTabNavigator() {
  return (
    <Tab.Navigator
      barStyle={{backgroundColor: Colors.accentColor}}
      activeColor="white"
      tabBarOptions={{
        activeTintColor: Colors.accentColor,
      }}>
      <Tab.Screen
        name="Meals"
        component={MealsNavigator}
        options={{
          tabBarIcon: tabInfo => {
            return Platform.OS === 'android' ? (
              <MaterialIcons name="restaurant-menu" size={25} color={tabInfo.color}  />
            ) : (
              <IonIcons name="ios-restaurant" size={25} color={tabInfo.color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: tabInfo => {
            return Platform.OS === 'android' ? (
              <IonIcons name="ios-heart" size={25} color={tabInfo.color}  />
            ) : (
              <IonIcons name="ios-star" size={25} color={tabInfo.color} />
            );          },
        }}
      />
    </Tab.Navigator>
  );
}

export default MealsFavTabNavigator;
