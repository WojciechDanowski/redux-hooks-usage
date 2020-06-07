import { combineReducers } from "redux";
import {
  ADD_USER,
  DELETE_USER,
  EDIT_USER,
  FETCH_USERS,
} from "../actions/actions";
const initState = {
  pepole: [],
};

const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
      };

    // case ADD_USER:
    //   return {
    //     ...state,
    //     pepole: [...state.pepole].concat({
    //       name: action.payload.name,
    //       surname: action.payload.surname,
    //       age: action.payload.age,
    //       id: action.payload.id,
    //     }),
    //   };
    case DELETE_USER:
      return {
        ...state,
        // ...state,
        // pepole: state.pepole.filter(
        //   (person) => person.id !== action.payload.id
        // ),
      };
    case EDIT_USER:
      return {
        ...state,
        // pepole: state.pepole.map((person) => {
        //   if (person.id !== action.payload.id) {
        //     return person;
        //   }
        //   return {
        //     ...person,
        //     ...action.payload.newValues,
        //   };
        // }),
      };
    case FETCH_USERS:
      return {
        ...state,
        pepole: action.payload,
      };

    default:
      return state;
  }
};

const reducer = combineReducers({
  usersReducer,
});

export default reducer;
