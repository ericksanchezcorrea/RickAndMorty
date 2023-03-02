// Importa las action types acá
import * as TYPES from "./actions"

const initialState = {
  myFavorites: [],
};

const rootReducer = (state = initialState, {type, payload}) => {
  switch (type) {

    case TYPES.addToFavorites: 
        return {...state, myFavorites: [...state.myFavorites, payload]}

    case TYPES.removeToFavorites: 
        return {...state, myFavorites: state.myFavorites.filter(fav => fav.id !== payload) }

    default: 
        return initialState
  }
};

export default rootReducer;
