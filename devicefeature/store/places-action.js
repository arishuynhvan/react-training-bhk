import * as FileSystem from "expo-file-system";
import { fetchPlaces, insertPlace } from "../helpers/db";
export const ADD_PLACE = "ADD_PLACE";
export const SET_PLACES = "SET_PLACES";
export const addPlace = (title, imagePath) => {
  return async (dispatch) => {
    const fileName = imagePath.split("/").pop(); //get the image file name - last element of the imagePath split by /
    const newPath = FileSystem.documentDirectory + fileName;
    try {
      await FileSystem.moveAsync({
        from: imagePath,
        to: newPath,
      });
      const dbResult = await insertPlace(
        title,
        newPath,
        "Dummy address",
        15.6,
        12.3
      );
      console.log("dbres ", dbResult);
    } catch (err) {
      console.log(err);
      throw err;
    }
    dispatch({
      type: ADD_PLACE,
      placeData: { id: dbResult.insertId, title: title, image: newPath },
    });
  };
};
export const loadPlaces = () => {
  return async (dispatch) => {
    try {
      const dbResult = await fetchPlaces();
      console.log(dbResult);
      dispatch({ type: SET_PLACES, places: dbResult.rows._array });
    } catch (err) {
      throw err;
    }
  };
};
