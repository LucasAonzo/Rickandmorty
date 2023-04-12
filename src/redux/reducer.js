import { ADD_FAVORITES, REMOVE_FAVORITES } from "./actions.js";

const initialState = {
  myFavorites: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITES:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
      };
    case REMOVE_FAVORITES:
      const filteredFavorites = state.myFavorites.filter(
        (favorite) => favorite.id !== action.payload.id
      );
      return {
        ...state,
        myFavorites: filteredFavorites,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
