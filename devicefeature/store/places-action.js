import * as FileSystem from "expo-file-system";
export const ADD_PLACE = "ADD_PLACE";
import { insertPlace } from "../helpers/db";
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
    dispatch({ type: ADD_PLACE, placeData: {id:dbResult.insertId, title: title, image: newPath } });
  };
};
