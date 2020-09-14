import * as FileSystem from "expo-file-system";
export const ADD_PLACE = "ADD_PLACE";
export const addPlace = (title, imgPath) => {
  return async (dispatch) => {
    const fileName = imagePath.split("/").pop(); //get the image file name - last element of the imagePath split by /
    const newPath = FileSystem.documentDirectory + fileName;
    try {
      await FileSystem.moveAsync({
        from: image,
        to: newPath,
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  dispatch({ type: ADD_PLACE, placeData: { title: title, image: newPath } });
};
