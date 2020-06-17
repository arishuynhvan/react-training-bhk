import React from 'react';
import {Platform} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FavoritesScreen from '../screens/FavoritesScreen';
import Colors from '../constants/Colors';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {createStackNavigator} from '@react-navigation/stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';


const Stack = createStackNavigator();
function MealsNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor:
            Platform.OS === 'android' ? Colors.primaryColor : 'white',
        },
        headerTintColor:
          Platform.OS === 'android' ? 'white' : Colors.primaryColor,
      }}>
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'Meal Categories',
        }}
      />
      <Stack.Screen
        name="Category Meals"
        component={CategoryMealsScreen}
        options={navigationdata => {
          const selectedCategory = CATEGORIES.find(
            ({id}) => id === navigationdata.route.params.itemId,
          );
          return {
            title: navigationdata.route.params.itemTitle,
            headerStyle: {
              backgroundColor:
                Platform.OS === 'android' ? selectedCategory.color : 'white',
            },
            headerTintColor:
              Platform.OS === 'android' ? 'black' : selectedCategory.color,
          };
        }}
      />
      <Stack.Screen
        name="Meal Detail"
        component={MealDetailScreen}
        options={navigationData => {
          const mealId = navigationData.route.params.mealId;
          const selectedMeal = MEALS.find(({id}) => id === mealId);
          return {
            headerTitle: selectedMeal.title,
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                  title="Fav"
                  iconName="ios-star"
                  onPress={() => {
                    console.log('Mark as favorite!');
                  }}
                />
              </HeaderButtons>
            ),
          };
        }}
      />
    </Stack.Navigator>
  );
}


const Tab =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

function MainNavigator() {
  return (
    <Tab.Navigator
      shifting={true}
      activeColor={Platform.OS === 'android' ? 'white' : Colors.accentColor}
      tabBarOptions={{
        activeTintColor: Colors.accentColor,
      }}>
      <Tab.Screen
        name="Meals"
        component={MealsNavigator}
        options={{
          tabBarIcon: tabInfo => {
            return Platform.OS === 'android' ? (
              <MaterialIcons
                name="restaurant-menu"
                size={25}
                color={tabInfo.color}
              />
            ) : (
              <IonIcons name="ios-restaurant" size={25} color={tabInfo.color} />
            );
          },
          tabBarColor: Platform.OS === 'android' ? Colors.accentColor : 'white',
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: tabInfo => {
            return Platform.OS === 'android' ? (
              <IonIcons name="ios-heart" size={25} color={tabInfo.color} />
            ) : (
              <IonIcons name="ios-star" size={25} color={tabInfo.color} />
            );
          },
          tabBarColor: Platform.OS === 'android' ? Colors.accentColor : 'white',
        }}
      />
    </Tab.Navigator>
  );
}

export default MainNavigator;
