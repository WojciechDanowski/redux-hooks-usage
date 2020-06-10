import { combineReducers } from "redux";
import {
  ADD_USER,
  DELETE_USER,
  EDIT_USER,
  ADD_USERS,
  SET_FORM,
} from "../actions/actions";
const initState = {
  pepole: [],
  form: {
    name: "",
    surname: "",
    age: "",
    id: "",
  },
  loading: false,
};

const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        pepole: [...state.pepole].concat(action.payload),
      };
    case DELETE_USER:
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
            ...action.payload,
          };
        }),
      };
    case ADD_USERS:
      return {
        ...state,
        pepole: action.payload,
      };
    case SET_FORM:
      return {
        ...state,
        form: action.payload,
      };
    default:
      return state;
  }
};

const reducer = combineReducers({
  usersReducer,
});

export default reducer;
