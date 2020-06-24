import React from 'react';
import {Platform} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
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
import FiltersScreen from '../screens/FiltersScreen';

const defaultStackScreenOptions = {
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
};
const renderMenuButton = (navigationdata) => (
  <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
    <Item
      title="Filters"
      iconName="menu"
      onPress={() => {
        navigationdata.navigation.openDrawer();
      }}
    />
  </HeaderButtons>
);
const MealStack = createStackNavigator();
function MealsNavigator() {
  return (
    <MealStack.Navigator screenOptions={defaultStackScreenOptions}>
      <MealStack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={navigationdata => {
          return {
            title: 'Meal Categories',
            headerLeft: renderMenuButton.bind(this, navigationdata),
          };
        }}
      />
      <MealStack.Screen
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
      <MealStack.Screen
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
                  iconName="star"
                  onPress={() => {
                    console.log('Mark as favorite!');
                  }}
                />
              </HeaderButtons>
            ),
          };
        }}
      />
    </MealStack.Navigator>
  );
}

const FavStack = createStackNavigator();
function FavStackNavigator() {
  return (
    <FavStack.Navigator screenOptions={defaultStackScreenOptions}>
      <FavStack.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={navigationdata => {
          return {
            title: 'Your Favorites',
            headerLeft: renderMenuButton.bind(this, navigationdata),
          };
        }}
      />
      <FavStack.Screen name="MealDetail" component={MealDetailScreen} />
    </FavStack.Navigator>
  );
}

const FiltersStack = createStackNavigator();
function FiltersStackNavigator() {
  return (
    <FiltersStack.Navigator screenOptions={defaultStackScreenOptions}>
      <FiltersStack.Screen
        name="Filters"
        component={FiltersScreen}
        options={navigationdata => {
          return {
            title: 'Filter Meals',
            headerLeft: renderMenuButton.bind(this, navigationdata),
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                  title="Save"
                  iconName="save"
                  onPress={() => {
                    //console.log(navigationdata.route.params);
                    console.log('You pressed Save!');
                  }}
                />
              </HeaderButtons>
            ),
          };
        }}
      />
    </FiltersStack.Navigator>
  );
}

const Tab =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

function TabNavigator() {
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
          tabBarColor:
            Platform.OS === 'android' ? Colors.primaryColor : 'white',
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavStackNavigator}
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

const Drawer = createDrawerNavigator();
function MainNavigator() {
  return (
    <Drawer.Navigator drawerContentOptions={{activeTintColor:Colors.accentColor}}>
      <Drawer.Screen name="MealFavs" component={TabNavigator} options={{drawerLabel:'Meals'}} />
      <Drawer.Screen name="Filters" component={FiltersStackNavigator} />
    </Drawer.Navigator>
  );
} 
export default MainNavigator;
