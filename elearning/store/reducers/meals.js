import {MEALS} from '../../data/dummy-data';
import {TOGGLE_FAVORITE} from '../actions/meals';
import {SET_FILTERS} from '../actions/meals';
const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
  // always start with some initial state since the first time the app runs,
  // there won't be any input for state

  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        meal => meal.id === action.mealId,
      );
      if (existingIndex >= 0) {
        const updatedFavMeals = [...state.favoriteMeals];
        updatedFavMeals.splice(existingIndex, 1);
        return {...state, favoriteMeals: updatedFavMeals};
      } else {
        const newFavMeal = state.meals.find(meal => meal.id === action.mealId);
        return {
          ...state,
          favoriteMeals: state.favoriteMeals.concat(newFavMeal),
        };
      }
    case SET_FILTERS:
      const appliedFilters = action.filters;
      const updatedFilteredMeals = state.meals.filter(meal => {
        if (appliedFilters.glutenFree && !meal.isGlutenFree) return false;
        if (appliedFilters.lactoseFree && !meal.isLactoseFree) return false;
        if (appliedFilters.vegetarian && !meal.isVegetarian) return false;
        if (appliedFilters.vegan && !meal.isVegan) return false;
        return true;
      });
      return {...state, filteredMeals: updatedFilteredMeals};
    default:
      return state;
  }
  return state;
};

export default mealsReducer;
