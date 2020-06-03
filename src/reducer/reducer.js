import { combineReducers } from "redux";
import { ADD_USER, DELETE_USER, EDIT_USER } from "./actions";
const initState = {
  pepole: [],
};

const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_USER:
      console.log(action);
      return {
        ...state,
        pepole: [...state.pepole].concat({
          name: action.payload.name,
          surname: action.payload.surname,
          age: action.payload.age,
          id: action.payload.id,
        }),
      };
    case DELETE_USER:
      console.log(action);
      return {
        ...state,
        pepole: state.pepole.filter(
          (person) => person.id !== action.payload.id
        ),
      };
    case EDIT_USER:
      return {
        ...state,
        pepole: state.pepole.map((person) => {
          if (person.id !== action.payload.id) {
            return person;
          }
          return {
            ...person,
            ...action.payload.newValues,
          };
        }),
      };

    default:
      return state;
  }
};

const reducer = combineReducers({
  usersReducer,
});

export default reducer;
