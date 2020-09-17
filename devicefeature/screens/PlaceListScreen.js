import React, { useEffect } from "react";
import { StyleSheet, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import PlaceItem from "../components/PlaceItem";
import * as placesActions from "../store/places-action";

const PlaceListScreen = (props) => {
  const places = useSelector((state) => state.places.places);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(placesActions.loadPlaces());
  }, [dispatch]);
  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => {
        return (
          <PlaceItem
            img={itemData.item.imageUri}
            onSelect={() => {
              props.navigation.navigate("PlaceDetailScreen", {
                placeTitle: itemData.item.title,
                placeId: itemData.item.id,
              });
            }}
            image={null}
            title={itemData.item.title}
            address={null}
          />
        );
      }}
    />
  );
};
const styles = StyleSheet.create({});
export default PlaceListScreen;
