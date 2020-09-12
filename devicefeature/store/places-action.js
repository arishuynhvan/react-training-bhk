export const ADD_PLACE = "ADD_PLACE";
export const addPlace = (title, imgPath) => {
  return { type: ADD_PLACE, placeData: { title: title, image: imgPath } };
};
