import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";
import PlaceItem from "../components/PlaceItem";

const PlaceListScreen = (props) => {
  const places = useSelector((state) => state.places.places);
  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <PlaceItem
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
      )}
    />
  );
};
const styles = StyleSheet.create({});
export default PlaceListScreen;
