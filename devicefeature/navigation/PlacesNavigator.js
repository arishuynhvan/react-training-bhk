import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import PlaceListScreen from "../screens/PlaceListScreen";
import PlaceDetailScreen from "../screens/PlaceDetailScreen";
import NewPlaceScreen from "../screens/NewPlaceScreen";
import MapScreen from "../screens/MapScreen";
import Colors from "../constants/Colors";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const PlacesStack = createStackNavigator();
function PlacesNavigator() {
  return (
    <PlacesStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? Colors.primary : "#fff",
        },
        headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
      }}
    >
      <PlacesStack.Screen
        name="PlaceListScreen"
        component={PlaceListScreen}
        options={(navData) => {
          return {
            title: "All places",
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title="Add place"
                  iconName={Platform.OS === "android" ? "md-add" : "ios-add"}
                  onPress={() => {
                    navData.navigation.navigate("NewPlaceScreen");
                  }}
                />
              </HeaderButtons>
            ),
          };
        }}
      />
      <PlacesStack.Screen
        name="PlaceDetailScreen"
        component={PlaceDetailScreen}
        options={(navData) => {
          return {
            headerTitle: navData.route.params.placeTitle,
          };
        }}
      />
      <PlacesStack.Screen
        name="NewPlaceScreen"
        component={NewPlaceScreen}
        options={{ title: "Add place" }}
      />
      <PlacesStack.Screen name="MapScreen" component={MapScreen} />
    </PlacesStack.Navigator>
  );
}

export default PlacesNavigator;
