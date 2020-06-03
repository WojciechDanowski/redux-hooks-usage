import { combineReducers } from "redux";
import { ADD_USER } from "./actions";
const initState = {
  pepole: [
    {
      name: "test",
      surname: "testSur",
      age: 25,
      id: 1,
    },
  ],
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
